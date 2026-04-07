/**
 * Remark plugin to convert Obsidian [[wikilinks]] to HTML links.
 *
 * Handles:
 *   [[note-name]]            → <a href="/en/slug">Note Title</a>
 *   [[note-name|display]]    → <a href="/en/slug">display</a>
 *
 * Builds the slug map lazily from the vault file system on first use.
 * Determines locale from the file being processed.
 */
import { visit } from 'unist-util-visit';
import type { Root, Text } from 'mdast';
import fs from 'node:fs';
import path from 'node:path';

// Regex matches [[target]] or [[target|display]]
const WIKILINK_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

// Cached slug maps per locale
const slugMaps: Record<string, Record<string, string>> = {};

/** Build slug map by scanning the vault directory for frontmatter slug fields */
function buildSlugMap(locale: string): Record<string, string> {
  if (slugMaps[locale]) return slugMaps[locale];

  const map: Record<string, string> = {};
  const vaultDir = path.resolve(process.cwd(), 'content');

  function scanDir(dir: string) {
    let entries: fs.Dirent[];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.name.startsWith('.')) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scanDir(full);
      } else if (entry.name.endsWith(`.${locale}.md`) || entry.name.endsWith(`.${locale}.mdx`)) {
        try {
          const content = fs.readFileSync(full, 'utf-8');
          const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
          if (fmMatch) {
            const slugMatch = fmMatch[1].match(/^slug:\s*["']?([^"'\n]*)["']?/m);
            if (slugMatch) {
              // Note name = filename without locale suffix and extension
              const noteName = entry.name.replace(`.${locale}.md`, '').replace(`.${locale}.mdx`, '');
              map[noteName] = slugMatch[1].trim();
            }
          }
        } catch {
          // skip unreadable files
        }
      }
    }
  }

  scanDir(vaultDir);
  slugMaps[locale] = map;
  return map;
}

/** Extract locale from a file path like .../welcome.en.md */
function getLocaleFromPath(filePath: string): string {
  const match = filePath.match(/\.(\w{2})\.(?:md|mdx)$/);
  return match ? match[1] : 'en';
}

export default function remarkWikilinks() {
  return (tree: Root, file: any) => {
    // Determine locale from the file being processed
    const filePath = file?.history?.[0] || file?.path || '';
    const locale = getLocaleFromPath(filePath);
    const slugMap = buildSlugMap(locale);

    visit(tree, 'text', (node: Text, index, parent) => {
      if (!parent || index === undefined) return;
      if (!WIKILINK_RE.test(node.value)) return;

      WIKILINK_RE.lastIndex = 0;

      const children: any[] = [];
      let lastIndex = 0;

      let match;
      while ((match = WIKILINK_RE.exec(node.value)) !== null) {
        const [full, target, display] = match;
        const before = node.value.slice(lastIndex, match.index);

        if (before) {
          children.push({ type: 'text', value: before });
        }

        const normalized = target.trim().toLowerCase().replace(/\s+/g, '-');
        const slug = slugMap[normalized] ?? slugMap[target.trim()];

        if (slug !== undefined) {
          const prefix = slug.startsWith('landing/') ? '' : `/${locale}`;
          const href = slug === '' ? `/${locale}/` : `${prefix}/${slug}`;
          children.push({
            type: 'link',
            url: href,
            children: [{ type: 'text', value: display || target.trim() }],
          });
        } else {
          // No slug found — render as plain text with the display name
          children.push({
            type: 'text',
            value: display || target.trim(),
          });
        }

        lastIndex = match.index + full.length;
      }

      const after = node.value.slice(lastIndex);
      if (after) {
        children.push({ type: 'text', value: after });
      }

      if (children.length > 0) {
        parent.children.splice(index, 1, ...children);
      }
    });
  };
}

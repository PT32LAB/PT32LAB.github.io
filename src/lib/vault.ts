/**
 * Vault content utilities.
 *
 * Helpers for working with locale-suffixed vault files
 * and building the wikilink slug map.
 */
import { getCollection } from 'astro:content';

/** Extract locale from a vault entry id like "places/bolivia/.../welcome.en" */
export function getLocale(id: string): string {
  const match = id.match(/\.(\w+)$/);
  return match ? match[1] : 'en';
}

/** Get the note name (without locale suffix) from an entry id */
export function getNoteName(id: string): string {
  // "places/bolivia/how-to-join/builders.en" → "builders"
  const basename = id.split('/').pop() || id;
  return basename.replace(/\.\w+$/, '');
}

/**
 * Build a map from note name → slug for wikilink resolution.
 * Filters to a specific locale.
 */
export async function buildSlugMap(locale: string = 'en'): Promise<Record<string, string>> {
  const allPages = await getCollection('pages');
  const map: Record<string, string> = {};

  for (const entry of allPages) {
    const entryLocale = getLocale(entry.id);
    if (entryLocale !== locale) continue;
    if (!entry.data.slug && entry.data.slug !== '') continue;

    const noteName = getNoteName(entry.id);
    map[noteName] = entry.data.slug;
  }

  return map;
}

/**
 * Get all pages for a given locale, with fallback to 'en' for missing translations.
 */
export async function getLocalizedPages(locale: string) {
  const allPages = await getCollection('pages');

  // Group by note name
  const byNote = new Map<string, typeof allPages>();
  for (const entry of allPages) {
    const noteName = getNoteName(entry.id);
    if (!byNote.has(noteName)) byNote.set(noteName, []);
    byNote.get(noteName)!.push(entry);
  }

  // For each note, prefer the requested locale, fall back to 'en'
  const result: typeof allPages = [];
  for (const [, entries] of byNote) {
    const localeEntry = entries.find(e => getLocale(e.id) === locale);
    const fallbackEntry = entries.find(e => getLocale(e.id) === 'en');
    const entry = localeEntry || fallbackEntry;
    if (entry && entry.data.slug !== undefined) {
      result.push(entry);
    }
  }

  return result;
}

# BARK (Bolivian Ark) — Website Repo Guide

## What This Is

The rendering engine for BARK — a bilingual website (EN/ES) for a semi-autonomous community planned for Coroico, Yungas, Bolivia at 1,750m. Built with Astro 6 + Tailwind CSS v4, deployed to GitHub Pages.

**All page content lives in the `vision-vault` repo** (mounted as a git submodule at `content/`). This repo contains only the rendering code, styles, layouts, and build pipeline.

**Live:** https://pt32lab.github.io
**Website repo:** https://github.com/PT32LAB/PT32LAB.github.io
**Content repo:** https://github.com/PT32LAB/vision-vault

## Current State (April 2026)

**Phase 1-2 complete.** Content extracted from hardcoded .astro files into vault markdown. Astro content collections read from the vault submodule. 64 pages (29 EN + 29 ES + 4 landing + root + 404) generated from 34 vault notes.

## Architecture

```
pt32lab.github.io/
├── CLAUDE.md                  ← You are here
├── content/                   ← git submodule → vision-vault repo
│   ├── places/bolivia/        ← BARK site content (26 notes)
│   ├── vision/                ← Cosmos-level concepts (2 notes)
│   └── CLAUDE.md              ← Vault contribution guide
├── src/
│   ├── layouts/
│   │   ├── Base.astro         ← Main layout (nav, footer, OG, JSON-LD, scripts)
│   │   └── Landing.astro      ← Minimal layout for landing pages
│   ├── components/
│   │   ├── Nav.astro           ← 5-group dropdown nav
│   │   ├── Footer.astro        ← Grouped footer matching nav
│   │   ├── ContentPage.astro   ← Prose template with sticky TOC (legacy)
│   │   ├── MyceliumCanvas.astro ← Generative canvas background
│   │   ├── EvidenceBox.astro   ← Source-linked callout
│   │   ├── PullQuote.astro     ← Emphasized statement
│   │   ├── StatBlock.astro     ← Number with counter animation
│   │   └── PhotoFrame.astro    ← Image container with credit
│   ├── lib/
│   │   └── vault.ts            ← Vault utilities (locale extraction, slug map)
│   ├── plugins/
│   │   └── remark-wikilinks.ts ← Converts [[wikilinks]] to HTML links at build
│   ├── content.config.ts       ← Astro content collection schema (Zod)
│   ├── scripts/
│   │   └── init.ts             ← Scroll reveals, counters, text splits
│   ├── styles/
│   │   └── global.css          ← Full design system + content-prose styles
│   ├── i18n/
│   │   └── ui.ts               ← EN/ES UI string translations + nav descriptions
│   └── pages/
│       ├── [lang]/[...slug].astro ← Dynamic route: all locale pages from vault
│       ├── landing/[...slug].astro ← Dynamic route: landing pages (no locale prefix)
│       ├── index.astro          ← Root redirect → /en/
│       └── 404.astro
├── public/
│   ├── images/yungas/           ← 7 CC-licensed photos
│   ├── images/icons/            ← 5 SVG component icons
│   └── favicon.svg
├── research/                    ← 16 research documents, 449+ verified links
├── docs/                        ← Design system, audits, specs
├── specs/                       ← Dimensional system spec, implementation plan
└── .github/workflows/deploy.yml ← GitHub Actions: build + deploy
```

## How Content Flows

```
vision-vault (markdown + frontmatter)
  ↓ git submodule at content/
Astro content collections (src/content.config.ts)
  ↓ glob loader reads *.{en,es}.md files
  ↓ remark-wikilinks converts [[links]] to HTML
  ↓ remark-gfm handles tables, autolinks
Dynamic routes ([lang]/[...slug].astro)
  ↓ slug from frontmatter → URL path
  ↓ hero from frontmatter → photo hero section
  ↓ markdown body → content-prose HTML
GitHub Pages (dist/)
```

## Content vs. Code

| Want to change... | Edit in... |
|---|---|
| Page text, data, facts | `vision-vault` repo (content/*.md files) |
| Page hero image/headline | `vision-vault` repo (frontmatter `hero:` block) |
| Layout, nav, footer | This repo (`src/layouts/`, `src/components/`) |
| Visual styles | This repo (`src/styles/global.css`) |
| UI strings (nav labels, buttons) | This repo (`src/i18n/ui.ts`) |
| URL structure | `vision-vault` repo (frontmatter `slug:` field) |

**Never hardcode page content in .astro files.** All text comes from the vault.

## Submodule Workflow

The vault is a git submodule at `content/`. Key operations:

```bash
# Pull latest vault content
cd content && git pull origin main && cd ..
git add content && git commit -m "Update vault submodule"

# After cloning the website repo
git submodule update --init --recursive

# Check which vault commit is pinned
git submodule status
```

**GitHub Actions** handles this automatically:
- Push to this repo → builds with pinned vault commit
- Push to vision-vault → triggers `repository_dispatch` → builds with latest vault
- The vault repo needs a `SITE_REBUILD_TOKEN` secret (GitHub PAT with `repo` scope)

## Tech Stack

- **Framework:** Astro 6 with TypeScript
- **CSS:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Content:** Astro content collections + glob loader reading from vault submodule
- **Markdown:** remark-gfm (tables, autolinks) + remark-wikilinks (Obsidian [[links]])
- **Fonts:** Libre Franklin (display sans) + Lora (body serif) via Google Fonts
- **SEO:** @astrojs/sitemap, JSON-LD, hreflang, canonical
- **Hosting:** GitHub Pages via GitHub Actions
- **No client frameworks.** No React, Vue, or Svelte. Astro ships zero JS by default.

## Key Files to Read

| File | Purpose |
|------|---------|
| `src/content.config.ts` | Content collection schema — defines what frontmatter fields are valid |
| `src/pages/[lang]/[...slug].astro` | The dynamic route that renders all vault pages |
| `src/plugins/remark-wikilinks.ts` | Wikilink → HTML link conversion logic |
| `src/lib/vault.ts` | Locale extraction, slug map building, fallback logic |
| `src/styles/global.css` | All design tokens, content-prose styles, dark theme |
| `src/i18n/ui.ts` | All nav labels, descriptions, UI strings |
| `docs/design-system.md` | **THE design reference.** Read before any visual change. |
| `specs/implementation-plan.md` | Full phased plan (vault → visualization) |
| `specs/dimensions.md` | Dimensional cosmos spec (6 dimensions, node types, clusters) |

## Content Collection Schema

Every vault markdown file must have frontmatter matching `src/content.config.ts`:

```yaml
---
title: "Page Title"
slug: "url-path"           # maps to /{lang}/{slug} URL
layout: "prose"            # prose | home | landing
description: "One-liner"
hero:                      # optional — adds photo hero section
  image: /images/yungas/photo.jpg
  label: "SHORT LABEL"
  headline: "Subtitle or tagline"
  body: "Optional body text in hero"
  cta:                     # optional CTA buttons
    - text: "Button Text"
      href: "/en/path"
      style: primary       # primary | secondary
type: place                # concept | tool | practice | case-study | reference | place
cluster: regional-economy  # one of the six clusters
status: research           # seed | research | tested | deployed
dimensions:                # optional, for future visualization
  autonomy: 0.7
  tech_complexity: 0.3
  # ... (6 dimensions, all 0.0-1.0)
tags: [tag1, tag2]
related: [other-note-name]
geographic: bolivia
date_created: 2026-04-03
date_updated: 2026-04-07
---
```

## Voice & Terminology

- **Voice:** Haraway + Tsing + Latour + Escobar + Bridle (light). Grounded, sensory, not academic.
- **"Semi-autonomous"** not "off-grid" (we maintain grid connection as backup)
- **"Components"** not "pillars" (pillars reserved for values/principles)
- **"Initial spark"** for Drow, not "founder" or "co-founder"
- **No AI-sounding patterns:** no "Whether you," "Here's how," "Looking for," "Ready to?"

## 3 Core Concepts

1. **Market Connector:** BARK buys local agricultural surplus, processes it, connects to international markets. NOT competing with local farmers — being their best customer.
2. **Retreat as Community Engine:** Guests become contributors. Some return, invest, relocate.
3. **Longevity District:** 4-phase: technoshamanic tools → medical tools → anti-aging lab → longevity district. Long-term vision, clearly labeled as aspirational.

## Legal Facts (Verified)

- Foreigners CAN be cooperative members (Ley 356 Art. 33)
- Foreigners CANNOT hold leadership positions (Art. 65 requires citizenship)
- Cooperatives are NOT tax-free (25% IUE + 13% IVA + 3% IT) — only mining coops are near-zero
- Source: research/coop-tax-law-research.md

## Git Conventions

- Commit as: `Nous Aeternos <nousaeternos@gmail.com>`
- No Co-Authored-By tags
- Never push without Drow's approval
- Always run `npm run build` before committing
- After pulling vault changes: `cd content && git pull origin main && cd .. && git add content`

## What NOT to Do

- Don't hardcode page content in .astro files — all text lives in the vault
- Don't claim things exist that don't (no land, no entity, no revenue)
- Don't use "off-grid" — say "semi-autonomous"
- Don't put speculative revenue projections on the investors page
- Don't add ayahuasca references outside the retreat page (legal risk)
- Don't edit vault files in this repo — edit them in the vision-vault repo and pull

## Key Learnings (for future AI sessions)

- **Content lives in the vault, not in .astro files** — the switchover happened April 2026
- **Split large agent tasks into 5-7 file chunks** — agents stall on 20+ file tasks
- **Photo heroes > CSS-only heroes** — canvas/animation heroes render as black voids without JS
- **Pages must work WITHOUT JavaScript** — use real `<img>` tags, not canvas
- **Body text contrast**: use bark-700 minimum. bark-600 fades on bark-50 background
- **Spanish pages need real translation** — copying EN files is not localization
- **Design system doc** (docs/design-system.md) is THE reference for visual changes
- **Wikilinks resolve via slug map** — the remark plugin reads slugs from all vault files at build time
- **hero: frontmatter** drives the photo hero section — title is the big text, headline/body are subtitle

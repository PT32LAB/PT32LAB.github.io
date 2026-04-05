# Implementation Plan

## Phase 0: Hackathon Site (DONE — April 2026)

Instead of the original vault-first approach (markdown submodule → custom build.js → manifest.json → SPA), we built a full bilingual Astro website during a hackathon sprint. This gave us real content, a working deployment, and a proven tech stack.

### What was built
- 28 pages × 2 locales (EN/ES) = 56 `.astro` files
- Astro 6 + Tailwind CSS v4 + GitHub Pages
- Lighthouse scores: 99/95/100/100
- Component library: ContentPage, EvidenceBox, PullQuote, StatBlock, PhotoFrame, MyceliumCanvas
- SEO: sitemap, JSON-LD, hreflang, OG/Twitter cards
- UI string i18n via `src/i18n/ui.ts` with `t(lang, key)` lookup
- Proto-dimensional data in explore.astro (6 clusters with dimension scores)
- 4 landing pages (English-only audience briefs)

### What it did NOT give us
- Content is hardcoded in `.astro` files — no separation of content from presentation
- ES pages are untranslated copies of EN
- No Obsidian-compatible vault
- No structured frontmatter metadata (dimensions, clusters, types, status)
- No manifest.json for visualization consumption
- No path toward the 1D/2D/3D dimensional views

### Exit criteria (met)
- Site deployed to pt32lab.github.io
- All pages render in both locale routes
- Lighthouse performance > 90

---

## Phase 1: Vault Seeding + i18n Convention (Next)

Populate the `vision-vault` repo with content extracted from the Astro site. The vault is Obsidian-compatible and uses a locale-suffix convention for multilingual content.

### 1.1 i18n Convention

**Locale suffix files** — same folder, language in filename:

```
welcome.en.md    ← English version
welcome.es.md    ← Spanish version
welcome.ru.md    ← Future language
```

- Obsidian shows both files side-by-side in the file explorer
- Wikilinks work naturally: `[[welcome]]` resolves within the same locale context
- Easy to see what's translated and what's missing (no `.es.md` = not yet translated)
- Fallback: if a locale file is missing, the build falls back to `.en.md`

Update the vault's CLAUDE.md to replace "Write in English for all content" with the locale suffix convention.

### 1.2 BARK Content → places/bolivia/

All BARK site content maps to `places/bolivia/` in the vault. The vault's top-level structure (vision/, tools/, case-studies/, references/, places/, failure-museum/) stays cosmos-focused — BARK is one place within it.

```
places/bolivia/
├── _index.en.md / _index.es.md          ← Bolivia overview (cluster entry point)
├── coroico-overview/
│   ├── welcome.en.md                    ← from index.astro (homepage)
│   ├── the-vision.en.md                 ← from vision.astro
│   ├── geography.en.md                  ← from location.astro
│   └── regional-integration.en.md       ← from region.astro
├── five-pillars/
│   ├── overview.en.md                   ← from pillars/index.astro
│   ├── technopark.en.md                 ← from pillars/technopark.astro
│   ├── incubator.en.md                  ← from pillars/incubator.astro
│   ├── trading-house.en.md              ← from pillars/trading.astro
│   ├── retreat-center.en.md             ← from pillars/retreat.astro
│   └── infrastructure.en.md            ← from pillars/infrastructure.astro
├── economy-local/
│   ├── yungas-economy.en.md             ← from economy.astro
│   └── investment-modalities.en.md      ← from investors.astro
├── communities/
│   ├── aymara-afro-bolivian.en.md       ← from traditions.astro
│   └── local-and-global-networks.en.md  ← from network.astro
├── resilience-assessment/
│   ├── bolivia-honest-analysis.en.md    ← from resilience.astro
│   ├── coroico-risks.en.md              ← from risks.astro
│   ├── health-and-altitude.en.md        ← from health.astro
│   └── six-scenarios.en.md              ← from scenarios.astro
├── how-to-join/
│   ├── pathways.en.md                   ← from participate.astro
│   ├── builders.en.md                   ← from builders.astro
│   ├── team.en.md                       ← from team.astro
│   └── roadmap.en.md                    ← from roadmap.astro
├── reference/
│   ├── glossary.en.md                   ← from glossary.astro
│   ├── fact-check.en.md                 ← from factcheck.astro
│   ├── faq.en.md                        ← from faq.astro
│   └── knowledge-dimensions.en.md       ← from explore.astro
└── landing/
    ├── about.en.md                      ← from landing/about.astro
    ├── invest.en.md                     ← from landing/invest.astro
    ├── builders.en.md                   ← from landing/builders.astro
    └── resilience.en.md                 ← from landing/resilience.astro
```

### 1.3 Cosmos-Level Pages

Two BARK pages are conceptual frameworks, not Bolivia-specific. They go to their proper vault locations:

- `vision/crisis-and-autonomy/why-an-ark.en.md` ← from why.astro
- `vision/governance/comparative-models.en.md` ← from governance.astro

These still render on the BARK site (linked from the Bolivia section) but live where they belong in the knowledge graph.

### 1.4 Frontmatter

Every vault note gets the schema defined in the vault's CLAUDE.md:

```yaml
---
title: "Coroico Risks — Honest Assessment"
description: "Crime, road access, healthcare, altitude, and climate risks for the Coroico site"
type: place              # concept | tool | practice | case-study | reference | place
cluster: crisis-autonomy # one of the six clusters
status: research         # seed | research | tested | deployed
dimensions:
  autonomy: 0.5
  tech_complexity: 0.2
  governance: 0.3
  economic: 0.4
  resilience: 0.9
  scalability: 0.3
tags: [risks, coroico, safety, disclosure]
related: [bolivia-honest-analysis, health-and-altitude]
geographic: bolivia
date_created: 2026-04-03
date_updated: 2026-04-05
---
```

### 1.5 Tasks
- [ ] Create folder structure in vision-vault repo
- [ ] Update vault CLAUDE.md with i18n convention (locale suffixes)
- [ ] Extract content from 28 .astro pages → markdown files with frontmatter
- [ ] Extract 4 landing pages → places/bolivia/landing/
- [ ] Move why.astro and governance.astro content to cosmos locations
- [ ] Add [[wikilinks]] between related notes
- [ ] Verify vault opens correctly in Obsidian
- [ ] Create .es.md stubs for 3-5 pages as i18n proof of concept

### Exit criteria
- Vault has 30+ notes with valid frontmatter
- Readable and navigable in Obsidian (graph view shows connections)
- Wikilinks work in Obsidian
- At least 3 pages have `.es.md` translations alongside `.en.md`
- Vault CLAUDE.md documents the i18n convention

---

## Phase 2: Astro Reads from Vault

Wire the Astro site to render content from the vault instead of hardcoded `.astro` files. The vault is added as a git submodule.

### 2.1 Submodule Setup

- Add `vision-vault` as git submodule at `content/` in pt32lab.github.io
- GitHub Actions: checkout with `submodules: recursive`

### 2.2 Content Collections

Configure Astro content collections to read vault markdown:

- Define collection schemas in `src/content.config.ts` (Zod validation)
- Collections: `pages` (all vault notes), `landing` (audience briefs)
- Handle locale suffix pattern: build script resolves `*.en.md` / `*.es.md` per locale
- Add `@astrojs/mdx` if prose pages need embedded Astro components

### 2.3 Wikilink Processing

Convert Obsidian `[[wikilinks]]` to HTML links during build:
- `[[note-name]]` → `<a href="/en/note-path">Note Title</a>`
- `[[note-name|display text]]` → `<a href="/en/note-path">display text</a>`
- Implement as a remark plugin in the Astro build pipeline

### 2.4 Dynamic Routing

Replace 56 static `.astro` page files with a single dynamic route:

```
src/pages/[lang]/[...slug].astro
```

- `getStaticPaths()` generates all pages from the content collection
- Resolves locale from path, loads corresponding `.{lang}.md` file
- Falls back to `.en.md` if locale file missing
- Select layout (prose vs. array-driven) based on frontmatter `type` or `layout` field

### 2.5 Tasks
- [ ] Add vision-vault as git submodule
- [ ] Create `src/content.config.ts` with collection schemas
- [ ] Build remark plugin for wikilink → HTML link conversion
- [ ] Create `src/pages/[lang]/[...slug].astro` dynamic route
- [ ] Implement locale fallback logic
- [ ] Preserve all existing URLs (test with build output diff)
- [ ] Update GitHub Actions for submodule checkout
- [ ] Remove old `src/pages/en/` and `src/pages/es/` directories

### Exit criteria
- Site renders identically to Phase 0 output (visual diff)
- Content comes from vault submodule, not hardcoded .astro files
- All existing URLs preserved
- ES pages fall back to EN content where .es.md files don't exist
- Build succeeds in GitHub Actions with submodule
- Lighthouse scores unchanged

---

## Phase 3: Dimensional Metadata + Manifest

### 3.1 Dimension Scoring

Score all vault notes across the six dimensions (autonomy, tech_complexity, governance, economic, resilience, scalability). Create `specs/scoring-guide.md` with rubric and examples.

### 3.2 Manifest Generation

Build-time script that reads content collections and outputs `public/manifest.json`:

```json
[
  {
    "id": "places/bolivia/coroico-overview/welcome",
    "locale": "en",
    "title": "Welcome to BARK",
    "description": "...",
    "type": "place",
    "cluster": "regional-economy",
    "status": "research",
    "dimensions": { "autonomy": 0.7, "tech_complexity": 0.3, ... },
    "tags": ["coroico", "overview"],
    "related": ["the-vision", "geography"],
    "url": "/en/coroico-overview/welcome",
    "summary_html": "<p>First paragraph...</p>"
  }
]
```

Manifest includes entries for every locale. Astro content collections API generates it at build time — no separate Node script needed.

### 3.3 Explore Page

Refactor the explore page to read from the content collection (and/or manifest.json) instead of hardcoded arrays.

### Tasks
- [ ] Create scoring guide document
- [ ] Score all vault notes (dimensions in frontmatter)
- [ ] Add manifest generation to build pipeline
- [ ] Refactor explore page to read from collection data
- [ ] Validate manifest against JSON schema

### Exit criteria
- Every vault note has dimension scores in frontmatter
- `manifest.json` generated at build time with both EN and ES entries
- Explore page renders from vault data
- Manifest validates against a defined schema

---

## Phase 4: 1D Visualization (Horizontal Scroll)

The original vision — a horizontal-scroll dimensional explorer — now fed by manifest.json from the vault.

### Layout

```
[Hero/Intro] → [Cluster 1] → [Cluster 2] → ... → [CTA/Join]
```

### Key features
- **Dimension switcher:** Fixed tab bar. "Overview" (default) shows all clusters in narrative order. Selecting a dimension reorders/filters blocks by that dimension's scores.
- **Cluster blocks:** Each vault cluster gets a scroll-snap block showing cluster name, summary (from `_index.{lang}.md`), child note topics, and a visual depth indicator.
- **"Dig deeper":** Links to the full page for that content. In Phase 5, transitions to 2D view.
- **Anchor links:** `/#governance`, `/#governance/ayllu-system` — shareable.
- **i18n:** Visualization works in both languages. Dimension switcher labels from `src/i18n/ui.ts`. Content from locale-appropriate manifest entries.

### Visual design
- Dark theme (space/cosmos feel)
- CSS scroll-snap with subtle parallax depth cues
- Typography-first: large readable type, generous whitespace
- Accent color: deep red (#C0392B)
- Each cluster has a distinct secondary color
- Background: faint floating dots representing child notes (visual whisper of the graph)
- Mobile: vertical scroll, blocks stack

### Implementation
- Server-rendered HTML + vanilla JS for dimension switching (keeps zero-JS-by-default philosophy)
- Reads from `manifest.json` at build time
- Add framework island only if interaction complexity demands it

### Tasks
- [ ] Horizontal scroll layout with scroll-snap
- [ ] Dimension switcher component
- [ ] Cluster block component (reads from manifest)
- [ ] Hero block with manifesto text
- [ ] CTA/join block
- [ ] Anchor link routing
- [ ] Dark theme CSS with depth cues
- [ ] Background node particles (decorative)
- [ ] Mobile responsive (vertical stack)
- [ ] i18n support for visualization UI

### Exit criteria
- Site renders all vault clusters as horizontal scroll
- Dimension switcher reorders content
- Direct links work
- Mobile responsive
- Works in both EN and ES
- Lighthouse score > 90

---

## Phase 5: 2D/3D + AI (Future)

### 5.1 2D Graph View
- D3.js force-directed layout
- Two-axis dimensional positioning (user selects X and Y dimensions)
- Side panel for reading individual notes
- Full-text search (Flexsearch, built at compile time)
- Backlinks computed from vault `related:` fields
- Smooth transition animation from 1D block → 2D expanded view

### 5.2 3D Cosmos
- Three.js + 3d-force-graph
- Three-axis spatial positioning
- Galaxy → Constellation → Star zoom levels
- Cross-cluster navigation
- Performance target: smooth with 200+ nodes

### 5.3 AI Navigation Agent
- Claude API, client-side
- Agent context: current view, active dimensions, visible nodes, session history
- Natural language queries: "show me governance tools for small groups"
- Point-of-view summaries: "summarize what I'm looking at"

### 5.4 Community Contribution
- Decap CMS or similar browser-based markdown editor → GitHub PRs
- User accounts / saved views (URL state encoding)

---

## Cross-Cutting Concerns

### i18n Architecture
| Layer | Mechanism |
|-------|-----------|
| Vault content | Locale suffix: `note.en.md` / `note.es.md` in same folder |
| UI strings | `src/i18n/ui.ts` with `t(lang, key)` lookup |
| URL routing | Astro built-in i18n: `/en/path`, `/es/path` |
| Manifest | Separate entries per locale, filterable by `locale` field |
| Fallback | Missing `.es.md` → fall back to `.en.md` content |
| Adding a language | Create `.{lang}.md` files in vault + add locale to astro.config.mjs |

### Performance budget
- Initial page load: < 200KB (HTML + CSS + JS, before manifest)
- Manifest: grows with content, lazy-load if > 500KB
- 3D assets: loaded only when entering 3D view
- Target: Lighthouse performance > 90 in all phases

### Accessibility
- All text content fully accessible (keyboard nav, screen reader, semantic HTML)
- 2D/3D views: text-based fallback via search as alternative navigation
- Respect `prefers-reduced-motion` for animations

### Content-code boundary
- Rendering code NEVER contains content text. All text comes from vault.
- Exception: hero/intro block text and UI labels (dimension names, button text)
- UI labels live in `src/i18n/ui.ts`, not hardcoded in templates

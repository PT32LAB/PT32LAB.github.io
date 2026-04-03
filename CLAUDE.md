# BARK (Bolivian Ark) — Project Guide

## What This Is

A 59-page bilingual website (EN/ES) for BARK — a semi-autonomous community planned for Coroico, Yungas, Bolivia at 1,750m. Built with Astro + Tailwind CSS, deployed to GitHub Pages.

**Live:** https://pt32lab.github.io
**Repo:** https://github.com/PT32LAB/PT32LAB.github.io

## Current State (April 2026)

**Phase 0: Research & Vision.** We are 1-2 people with AI, doing research. No legal entity, no land, no revenue. The website IS the deliverable for this phase.

## Architecture

```
pt32lab.github.io/
├── CLAUDE.md                  ← You are here
├── src/
│   ├── layouts/
│   │   ├── Base.astro         ← Main layout (nav, footer, OG tags, JSON-LD, scripts)
│   │   └── Landing.astro      ← Minimal layout for landing pages
│   ├── components/
│   │   ├── Nav.astro           ← 5-group dropdown nav (Project/Build/Life/Join/Reference)
│   │   ├── Footer.astro        ← Grouped footer matching nav
│   │   ├── ContentPage.astro   ← Prose template with sticky TOC
│   │   ├── MyceliumCanvas.astro ← Generative canvas background
│   │   ├── EvidenceBox.astro   ← Source-linked callout
│   │   ├── PullQuote.astro     ← Emphasized statement
│   │   ├── StatBlock.astro     ← Number with counter animation
│   │   └── PhotoFrame.astro    ← Image container with credit
│   ├── scripts/
│   │   └── init.ts             ← Scroll reveals, counters, text splits
│   ├── styles/
│   │   └── global.css          ← Full design system (colors, typography, components)
│   ├── i18n/
│   │   └── ui.ts               ← EN/ES translations + nav descriptions
│   └── pages/
│       ├── en/                  ← 28 English pages
│       ├── es/                  ← 28 Spanish pages (copies of EN)
│       ├── landing/             ← 3 focused landing pages
│       ├── index.astro          ← Root redirect → /en/
│       └── 404.astro
├── public/
│   ├── images/yungas/           ← 7 CC-licensed photos
│   ├── images/icons/            ← 5 SVG component icons
│   ├── images/diagrams/         ← 2 SVG system diagrams
│   ├── robots.txt
│   └── favicon.svg
├── research/                    ← 16 research documents, 449+ verified links
├── docs/                        ← Design system, audits, specs
├── specs/                       ← Oleg's dimensional system spec
└── .github/workflows/deploy.yml ← GitHub Actions: type check + build + deploy
```

## Tech Stack

- **Framework:** Astro 6 with TypeScript
- **CSS:** Tailwind CSS v4 via `@tailwindcss/vite`
- **Fonts:** Libre Franklin (display sans) + Lora (body serif) via Google Fonts
- **SEO:** @astrojs/sitemap, JSON-LD (Organization + WebSite + ClaimReview), hreflang, canonical
- **Hosting:** GitHub Pages via GitHub Actions
- **No client frameworks.** No React, Vue, or Svelte. Astro ships zero JS by default.

## Key Files to Read

| File | Purpose |
|------|---------|
| `docs/design-system.md` | **THE design reference.** Colors, typography, components, rationale. Read before any visual change. |
| `src/styles/global.css` | All design tokens and component CSS |
| `src/i18n/ui.ts` | All nav labels, descriptions, hero text |
| `research/README.md` | Index of all 16 research documents |
| `research/master-links.md` | 449 verified URLs with annotations |
| `docs/structure-review.md` | Information architecture analysis |
| `docs/editorial-audit.md` | Copy quality review with specific rewrites |
| `specs/dimensions.md` | Oleg's dimensional cosmos spec (for /explore page) |

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
- Spanish pages: copy from EN after changes (`for f in src/pages/en/*.astro; do cp "$f" "src/pages/es/$(basename $f)"; done`)
- Always run `npm run build` before committing

## What NOT to Do

- Don't claim things exist that don't (no land, no entity, no revenue)
- Don't use "off-grid" — say "semi-autonomous"
- Don't put speculative revenue projections on the investors page — keep them on health/retreat
- Don't add ayahuasca references outside the retreat page (removed from homepage for legal risk)
- Don't hardcode `/en/` paths in Spanish pages — use relative or dynamic paths

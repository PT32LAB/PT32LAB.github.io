# BARK Website — Key Files

## Layouts
| File | Purpose |
|------|---------|
| `src/layouts/Base.astro` | Main layout: nav, footer, OG tags, JSON-LD, hreflang, scripts, heroImage preload |
| `src/layouts/Landing.astro` | Minimal layout: logo + landing nav + language switch. No grouped nav. |

## Components
| File | Purpose |
|------|---------|
| `src/components/Nav.astro` | 5-group dropdown nav (Project/Build/Life/Join/Reference) + landing links |
| `src/components/Footer.astro` | Grouped footer matching nav categories |
| `src/components/ContentPage.astro` | Prose template: sticky TOC, accent-line h2 markers, styled blockquotes/tables |
| `src/components/MyceliumCanvas.astro` | Generative canvas (used on explore page, NOT on hero) |
| `src/components/EvidenceBox.astro` | Source-linked callout |
| `src/components/PullQuote.astro` | Emphasized statement |
| `src/components/StatBlock.astro` | Number with counter animation |
| `src/components/PhotoFrame.astro` | Image container with credit |

## Scripts
| File | Purpose |
|------|---------|
| `src/scripts/init.ts` | Scroll reveals, counters, text-split, theme toggle (idempotent) |
| `src/scripts/nav.ts` | Dropdown hover, scroll hide/show, mobile accordion, outside-click close |

## Styles
| File | Purpose |
|------|---------|
| `src/styles/global.css` | Full design system: colors, typography, 20+ components, dark mode |

## Config
| File | Purpose |
|------|---------|
| `astro.config.mjs` | Astro 6 + Tailwind v4 + sitemap + i18n (EN/ES) |
| `src/i18n/ui.ts` | All translations: nav labels, descriptions, hero text, pathway descriptions |
| `.github/workflows/deploy.yml` | CI: astro check + build + deploy to GitHub Pages |
| `public/robots.txt` | Crawler rules + sitemap link |

## Key Pages (EN — ES mirrors all)
| Path | File | Notes |
|------|------|-------|
| / | `src/pages/index.astro` | Redirect → /en/ |
| /en/ | `src/pages/en/index.astro` | Photo hero (valley.jpg), dark manifesto, stats, pathways, components |
| /en/vision | `src/pages/en/vision.astro` | Photo hero (coroico-clouds), ContentPage with TOC |
| /en/investors | `src/pages/en/investors.astro` | Photo hero (tocana), honest opening, revenue projections |
| /en/builders | `src/pages/en/builders.astro` | Photo hero (death-road), 6 systems, open-source layer |
| /en/region | `src/pages/en/region.astro` | Photo hero (tocana), "Region, Not Enclave" |
| /en/resilience | `src/pages/en/resilience.astro` | Dark hero, country comparison table, honest assessment |
| /en/scenarios | `src/pages/en/scenarios.astro` | 6 crisis types, 17 countries, trust crisis deep-dive |
| /en/factcheck | `src/pages/en/factcheck.astro` | 571 claims, per-page sections, ClaimReview JSON-LD |
| /landing/* | `src/pages/landing/*.astro` | 4 focused landing pages (Landing.astro layout) |

## Research (17 files)
| File | Key Data |
|------|----------|
| `research/README.md` | Index of all research |
| `research/master-links.md` | 449 verified URLs |
| `research/factcheck-*.md` | 1,328 lines of claim verification |
| `research/bolivia-crisis-safety-analysis.md` | 407 lines, honest pro/con |
| `research/factcheck-protocol-proposal.md` | Also at homototus/veritas |

## Docs
| File | Purpose |
|------|---------|
| `docs/design-system.md` | 527 lines — THE design reference |
| `docs/structure-review.md` | Information architecture analysis |
| `docs/editorial-audit.md` | Copy quality review |
| `docs/ux-audit.md` | UX/UI analysis |

## Assets
| Path | Contents |
|------|----------|
| `public/images/yungas/` | 7 CC-licensed photos (compressed ~50%) |
| `public/images/icons/` | 5 SVG component icons |
| `public/images/diagrams/` | 2 SVG system diagrams |

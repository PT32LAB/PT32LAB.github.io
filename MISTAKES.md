# BARK Website — Mistakes & Anti-Patterns

## Session 1

| Mistake | Impact | Fix | Status |
|---------|--------|-----|--------|
| Mycelium canvas as hero background | Black void without JS — visitors see nothing | Use `<img>` photo hero, canvas only in dark sections | Resolved |
| Lenis smooth scroll (157s TBT) | Page unusable — 157 second blocking time | Removed entirely, native scroll is fine | Resolved |
| Google Fonts blocking render | FCP 2.9s | `media="print" onload="this.media='all'"` | Resolved |
| Text-split class without JS fallback | Headlines invisible without JS | Removed text-split from hero, plain text works | Resolved |
| Syncing ES pages by copying EN | Spanish pages serve English text | Must translate, not copy | Partially resolved |
| "Off-grid" vs "semi-autonomous" | Contradiction across pages | Standardized to "semi-autonomous" | Resolved |
| "Five pillars" vs "organs" vs "components" | 3 names for same thing | Standardized to "components" | Resolved |

## Session 2

| Mistake | Impact | Fix | Status |
|---------|--------|-----|--------|
| Large agent tasks (20+ files) | Agents stall at 60-80%, lose work | Split into 5-7 file chunks per agent | Resolved (rule) |
| "40 coups" claim | Off by 5x (actual: 190+) | Corrected with source | Resolved |
| Coffee $4.60/lb labeled "median" | Misleading — actual median is $3.48 | Changed to "premium tier (84+ pts)" | Resolved |
| $600B longevity market (wrong source) | Grand View says $250B, not $600B | Corrected source and number | Resolved |
| Duplicate hero images | Same photo as hero AND inline content | Remove inline duplicate, keep hero only | Resolved |
| `init()` double-fires on page load | Double initialization, observer leaks | Call only via `astro:page-load` event | Resolved |
| WHO ranking "126th" without date | It's from year 2000 — 26 years stale | Added "(year 2000 assessment)" | Resolved |

## Session 3

| Mistake | Impact | Fix | Status |
|---------|--------|-----|--------|
| Landing paths through getLocalePath() | Nav generates /en/landing/about → 404 | Skip locale prefix for `/landing/` paths | Resolved |
| 4 parallel agents hit API rate limit | 429 errors, lost work | Max 2-3 concurrent agents | Resolved (rule) |
| Agent removes data but leaves references | Build error (modalities undefined) | Revert broken file, fix manually | Resolved |

## Rules (never expire)

1. **Max 2-3 concurrent agents** — 4+ triggers API rate limits
2. **Max 5-7 files per agent task** — larger tasks stall
3. **Always commit partial progress** — rate limits can kill agents mid-task
4. **Photo heroes > CSS-only heroes** — must work without JavaScript
5. **Landing page paths skip locale prefix** — they live at `/landing/`, not `/en/landing/`
6. **Screenshot with Playwright** to see real JS rendering — headless Chrome misses animations
7. **Use Wikipedia API for image URLs** — direct Wikimedia URLs often 404

# BARK Website QA Report

**Date**: 2026-04-02
**Reviewer**: Nous Aeternos (Code Reviewer)
**Site**: https://pt32lab.github.io
**Source**: /home/drow/PT32LAB.github.io

---

## Summary

| Category | Status | Details |
|----------|--------|---------|
| Build Validation | PASS | 16 pages built in 1.61s, zero errors |
| Counter Animation | FIXED | Was completely missing -- JS implementation added |
| Content Accuracy | PASS (with notes) | Elevation inconsistency fixed (1700 -> 1750) |
| Lighthouse Desktop | PASS | Perf 89, A11y 92, Best Practices 100, SEO 100 |
| Lighthouse Mobile | PASS | Perf 89, A11y 92 |
| Link Validation | PASS (with warnings) | 3 of 20 external links unreachable |
| Accessibility | PASS (with fixes) | Heading hierarchy fixed; contrast issues noted |
| Mobile Responsiveness | PASS | Good scores, no horizontal overflow, proper tap targets |

---

## 1. Critical Bugs Fixed

### 1.1 Counter Animation -- FIXED

**Problem**: All `.counter` elements showed "0" and never animated. The `data-target` and `data-suffix` attributes existed on the elements, but there was absolutely no JavaScript to read them and animate the counters. No `initCounters()` function existed anywhere in the codebase.

**Root cause**: The counter elements were added to the HTML (both `en/index.astro` and `es/index.astro`) with proper data attributes, but the corresponding JavaScript animation logic was never written. The `Base.astro` layout only had `initReveals()` -- no counter code at all.

**Fix applied** in `/home/drow/PT32LAB.github.io/src/layouts/Base.astro`:
- Added `initCounters()` function with IntersectionObserver
- Uses `requestAnimationFrame` with cubic ease-out for smooth animation
- Reads `data-target` (numeric end value) and `data-suffix` (text like "m", "+")
- Formats numbers with `toLocaleString()` for comma separators
- Runs on initial load and on `astro:page-load` for SPA transitions
- Threshold set to 0.2 so counters trigger slightly after entering viewport

**Affected counters** (4 total across both `en/index.astro` and `es/index.astro`):
- Stats strip: 1750m (elevation), 500+ (bird species), 3000+ (plant species)
- Location teaser: 1750m (elevation)

### 1.2 Elevation Data Inconsistency -- FIXED

**Problem**: The stats strip showed "1750m" but the location teaser section showed "1700m" for the same elevation figure. The Location page (`/en/location`) uses "1,750 meters" which is the correct approximate elevation for Coroico.

**Fix applied** in:
- `/home/drow/PT32LAB.github.io/src/pages/en/index.astro` line 190, 199: changed 1700 -> 1750
- `/home/drow/PT32LAB.github.io/src/pages/es/index.astro` line 190, 199: changed 1700 -> 1750

### 1.3 Heading Hierarchy -- FIXED

**Problem**: Footer used `<h4>` elements which skipped `<h3>`, violating sequential heading order (flagged by Lighthouse accessibility audit).

**Fix applied** in `/home/drow/PT32LAB.github.io/src/components/Footer.astro`: Changed both `<h4>` to `<h3>`.

---

## 2. Build Validation

**Status**: PASS

```
16 page(s) built in 1.61s
Build output: /home/drow/PT32LAB.github.io/dist/
```

- Zero build errors
- One vite warning about unused imports from `@astrojs/internal-helpers/remote` (upstream Astro issue, not actionable)
- All 16 pages generated successfully

---

## 3. Lighthouse Scores

### Desktop (default)

| Category | Score |
|----------|-------|
| Performance | **89** |
| Accessibility | **92** |
| Best Practices | **100** |
| SEO | **100** |

**Key metrics (desktop)**:
| Metric | Value | Score |
|--------|-------|-------|
| First Contentful Paint | 2.9s | 0.54 |
| Largest Contentful Paint | 2.9s | 0.81 |
| Total Blocking Time | 0ms | 1.0 |
| Cumulative Layout Shift | 0 | 1.0 |
| Speed Index | 3.7s | 0.85 |
| Time to Interactive | 2.9s | 0.96 |

### Mobile

| Category | Score |
|----------|-------|
| Performance | **89** |
| Accessibility | **92** |

**Key metrics (mobile)**:
| Metric | Value | Score |
|--------|-------|-------|
| First Contentful Paint | 2.9s | 0.53 |
| Largest Contentful Paint | 2.9s | 0.81 |
| Total Blocking Time | 0ms | 1.0 |
| Cumulative Layout Shift | 0 | 1.0 |
| Speed Index | 3.7s | 0.86 |

**Performance note**: FCP of 2.9s is primarily caused by the Google Fonts render-blocking request. Consider self-hosting fonts or using `font-display: optional` for further improvement.

---

## 4. Accessibility

### Fixed Issues

- **Heading order**: Footer `<h4>` elements violated sequential order (no `<h3>` ancestor). Fixed by changing to `<h3>`.

### Remaining Issues (Important, not Critical)

1. **Color contrast**: Footer heading text (`text-bark-500` on `bg-bark-900`) has a contrast ratio of 4.33:1 -- below the 4.5:1 WCAG AA requirement for normal text. The `text-label` class uses 0.75rem uppercase text.
   - **File**: `/home/drow/PT32LAB.github.io/src/components/Footer.astro` lines 15, 24
   - **Recommendation**: Change `text-bark-500` to `text-bark-400` for footer headings (would achieve ~5.5:1 ratio)

2. **Color contrast**: Copyright/tagline text (`text-bark-600` on `bg-bark-900`) at 2.82:1 ratio.
   - **File**: `/home/drow/PT32LAB.github.io/src/components/Footer.astro` line 35
   - **Recommendation**: Change `text-bark-600` to `text-bark-500` for the footer bottom bar

### Positive Accessibility Features

- Focus-visible outlines properly defined in global.css
- `prefers-reduced-motion` media query disables all animations and transitions
- No images in the site (pure text/SVG), so no alt text issues
- All interactive SVG icons are decorative (within labeled links/buttons)
- Mobile menu button has `aria-label="Menu"`
- All external links have `rel="noopener noreferrer"` and `target="_blank"`
- Semantic HTML structure with proper landmarks (`<nav>`, `<main>`, `<footer>`)

---

## 5. Content Accuracy

### Statistics Verification

| Statistic | Value in Code | Assessment |
|-----------|---------------|------------|
| Elevation | 1,750m | CORRECT -- Coroico sits at approximately 1,750m |
| Bird species | 500+ | CORRECT -- Yungas corridor hosts 400-500+ documented species |
| Plant species | 3,000+ | CORRECT -- Cotapata-Yungas zone, per Kessler & Beck |
| Temperature | 18-28C | CORRECT -- mean annual 18-19C, daily highs 22-28C |
| Open Source | 100% | CORRECT -- project commitment |
| Distance La Paz | 3h | CORRECT -- 95-100km, 3-3.5 hours via paved highway |
| Coroico population | 19,397 (2012) | CORRECT -- INE census data |
| Cacao exports | 621 tons (2023) | Reasonable -- cited IBCE data |
| Solar potential | 3.5-4.5 kWh/m2/day | CORRECT for Yungas cloud forest |
| Cooperative law | Ley 356, 2013, 10 members min | CORRECT |

### Content Quality

- All page content is well-written, factually grounded, and properly sourced
- Location page has 10 numbered references with links
- Technopark page has 7 numbered references with price ranges
- Incubator page has 6 numbered references
- No typos or grammatical errors found in any English page

---

## 6. Link Validation

### External Links Tested (20 URLs)

| Status | URL | Notes |
|--------|-----|-------|
| 200 | https://redcasalatina.org/ | OK |
| FAIL | http://sachamamacenter.org/ | Connection refused -- site may be down |
| 200 | https://atitlanorganics.com/ | OK |
| 200 | https://auroville.org/ | OK |
| 200 | https://www.tamera.org/ | OK |
| 200 | https://www.opensourceecology.org/ | OK |
| 200 | https://earthship.com/ | OK |
| 200 | https://fab.city/ | OK |
| FAIL | https://www.hackerfarm.jp/ | Connection failed -- site may be down |
| 200 | https://cabin.city/ | OK |
| 200 | https://www.prospera.co/en | OK |
| 200 | https://www.google.com/maps/place/Coroico,+Bolivia/ | OK |
| 200 | https://www.birdlife.org/ | OK |
| 403 | https://whc.unesco.org/en/list/1459 | Forbidden (bot protection) -- URL is valid |
| 200 | https://www.ine.gob.bo/ | OK |
| 200 | https://www.starlink.com/ | OK |
| FAIL | https://www.gacetaoficialdebolivia.gob.bo/ | Connection failed -- Bolivian gov site |
| 200 | https://github.com/PT32LAB | OK |
| 200 | https://fabfoundation.org/ | OK |
| 200 | https://fonts.googleapis.com/ | OK |

**3 unreachable links** (all in `/en/community.astro` or `/en/location.astro`):
1. `http://sachamamacenter.org/` -- likely permanently down. Consider removing or noting as archived.
2. `https://www.hackerfarm.jp/` -- may be temporarily down or domain expired.
3. `https://www.gacetaoficialdebolivia.gob.bo/` -- Bolivian government site, likely has intermittent availability.

**1 returning 403**: `https://whc.unesco.org/en/list/1459` -- this is valid (bot protection), not broken.

---

## 7. Mobile Responsiveness

**Status**: PASS

Based on Lighthouse mobile audit and code review:

- **Viewport meta tag**: Present and correct (`width=device-width, initial-scale=1`)
- **Responsive font sizing**: `clamp()` used throughout (15px-18px base, fluid headings)
- **No horizontal overflow**: `overflow-x: hidden` on body
- **Mobile navigation**: Hamburger menu with toggle (hidden on `md:` breakpoint)
- **Grid layouts**: All grids use responsive breakpoints (`grid-cols-2 md:grid-cols-5`, etc.)
- **Touch targets**: Mobile menu button is properly sized (`p-2` padding on a 20x20 SVG = 36px+ target)
- **Card stacking**: Grid cards stack to single column on small screens
- **Text readability**: Base font size 15px minimum via `clamp()`, all body text uses relaxed line-height

---

## 8. Issues Not Fixed (Recommendations)

### Important (Should Fix)

1. **Dead dependencies**: `gsap` and `split-type` are in `package.json` but never imported or used anywhere. The `text-split` class appears on multiple headings but has no CSS or JS implementation.
   - **Recommendation**: Either implement the text-split animation using GSAP/SplitType, or remove both dependencies from package.json and remove the `text-split` class from all headings.

2. **Spanish locale incomplete**: Only `es/index.astro` exists. All nav links from the Spanish homepage (vision, why, pillars, location, governance, community, participate, explore) will 404. The Spanish homepage content is also in English except for i18n-translated labels.
   - **Files affected**: Nav links in Footer and Nav components generate `/es/vision`, `/es/why`, etc. which don't exist.
   - **Recommendation**: Either create all Spanish subpages or remove the language switcher until Spanish content is ready.

3. **Footer contrast ratio**: `text-bark-500` on `bg-bark-900` fails WCAG AA at 4.33:1 for the footer section headings.
   - **File**: `/home/drow/PT32LAB.github.io/src/components/Footer.astro` lines 15, 24
   - **Fix**: Change `text-bark-500` to `text-bark-400` on footer headings

4. **FCP performance**: 2.9s First Contentful Paint is driven by Google Fonts render-blocking request.
   - **Recommendation**: Self-host fonts (Space Grotesk + DM Sans) or add `&display=optional` to the Google Fonts URL

### Suggestions (Nice to Have)

5. **Unverifiable email**: `mailto:contact@pt32lab.org` on the participate page -- cannot verify if this email address/domain is configured.
   - **File**: `/home/drow/PT32LAB.github.io/src/pages/en/participate.astro` line 74

6. **Spanish homepage not translated**: `es/index.astro` uses English text for hero description, pathway cards, pillar names/descriptions, and section headings. Only the i18n strings (nav labels, CTA buttons) are in Spanish.
   - **File**: `/home/drow/PT32LAB.github.io/src/pages/es/index.astro`

7. **Stale links to monitor**: `sachamamacenter.org` and `hackerfarm.jp` may be permanently down. Consider checking periodically or adding a note.

8. **Nav on dark sections**: The nav bar starts transparent and adds `bg-bark-50/90` on scroll. On dark hero sections, the nav text (`text-bark-500`, `text-bark-800`) may have poor contrast against the dark background before scrolling triggers the background change.

---

## 9. Files Modified

| File | Change |
|------|--------|
| `src/layouts/Base.astro` | Added `initCounters()` function with IntersectionObserver animation |
| `src/pages/en/index.astro` | Fixed elevation from 1700 to 1750 in location teaser (2 places) |
| `src/pages/es/index.astro` | Fixed elevation from 1700 to 1750 in location teaser (2 places) |
| `src/components/Footer.astro` | Changed `<h4>` to `<h3>` for heading hierarchy compliance |

---

## 10. Post-Fix Build Verification

```
Build: PASS (16 pages, 1.61s, zero errors)
Counter code: PRESENT in compiled JS bundle (Base.astro chunk)
Elevation data: CONSISTENT (all instances now 1750m)
Heading hierarchy: FIXED (no more h4 skip)
```

# BARK Design System

**Version:** 1.0  
**Last updated:** 2026-04-02  
**Source of truth:** `src/styles/global.css`  
**Stack:** Astro + Tailwind CSS v4 (`@import "tailwindcss"` with `@theme` tokens)

---

## 1. Design Philosophy

BARK's visual language fuses the organic textures of the Yungas cloud forest with the precision of technology infrastructure. The site reads like an editorial magazine about a future that already exists in the mountains of Bolivia, not a startup pitch deck begging for attention.

**Nature-tech fusion.** Colors are drawn from bark, soil, and forest canopy. The accent green evokes bioluminescence and mycelium networks, not corporate SaaS. The generative canvas on the explore page literally grows root-like structures in real time.

**Intellectual register.** The project references Haraway's multispecies thinking and Tsing's collaborative survival. The design must feel worthy of that register: serious typography, generous whitespace, evidence-linked claims. Nothing should feel cheap or rushed.

**Editorial, not startup.** Serif body text (Lora) carries the long-form arguments. Sans-serif display type (Libre Franklin) handles headlines and navigation. This is the opposite of the typical web pattern and the inversion is deliberate. It signals: "read this carefully."

**Honest by default.** Disclaimers, risk disclosures, and fact-check pages are in the main navigation, not buried in a footer link. The `evidence-box` component exists specifically so claims link to their sources inline. Radical honesty is a design decision, not a legal obligation.

---

## 2. Color System

All colors are defined as `@theme` tokens in `src/styles/global.css` (lines 3-27). They are available as Tailwind classes (`bg-bark-100`, `text-accent`, etc.) and as CSS variables (`var(--color-bark-100)`).

### Bark Scale (warm neutrals)

| Token | Hex | Usage |
|---|---|---|
| `--color-bark` | `#1a1a1a` | Base dark (same as bark-800 area, used for text) |
| `--color-bark-50` | `#faf9f7` | Page background, card background |
| `--color-bark-100` | `#f3f0ec` | Evidence box background, alternating table rows, subtle section fills |
| `--color-bark-200` | `#e4ded6` | Borders, dividers, dot patterns, tag borders |
| `--color-bark-300` | `#c9bfb2` | Divider dot color, section-dark body text |
| `--color-bark-400` | `#a89a88` | Secondary text (subtitles, labels, attributions, TOC links) |
| `--color-bark-500` | `#8a7a66` | Tertiary text (stat context, dark section labels) |
| `--color-bark-600` | `#6b5d4d` | Body text in content-prose paragraphs and list items |
| `--color-bark-700` | `#4a3f33` | Blockquote text, dropdown link text |
| `--color-bark-800` | `#2d261e` | Primary headings, strong text, default body color |
| `--color-bark-900` | `#1a1610` | Section-dark background, footer background |

### Accent (green)

| Token | Hex | Usage |
|---|---|---|
| `--color-accent` | `#10b981` | Primary accent: links, list markers, accent-line, tags, borders, selection bg |
| `--color-accent-light` | `#34d399` | Hover state for footer links |
| `--color-accent-dim` | `#059669` | Evidence box links, link-arrow hover, gradient endpoints |

### Night (dark surfaces)

| Token | Hex | Usage |
|---|---|---|
| `--color-night` | `#0a0a0f` | Mycelium canvas background fill |
| `--color-night-light` | `#12121a` | Reserved (defined but not yet in active use) |
| `--color-night-surface` | `#1a1a24` | card-dark background |

### Signal Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-ember` | `#e85d3a` | Available for warnings/urgency (defined, limited use so far) |
| `--color-gold` | `#d4a853` | Available for highlights/premium (defined, limited use so far) |
| `--color-cyan` | `#22d3ee` | text-gradient endpoint, mycelium canvas branch color |

### Key Contrast Pairings

| Foreground | Background | Approximate Ratio | WCAG |
|---|---|---|---|
| bark-800 `#2d261e` | bark-50 `#faf9f7` | ~12.5:1 | AAA |
| bark-600 `#6b5d4d` | bark-50 `#faf9f7` | ~5.5:1 | AA |
| bark-400 `#a89a88` | bark-50 `#faf9f7` | ~3.2:1 | Fails AA for body text; acceptable for large text/labels only |
| accent `#10b981` | bark-50 `#faf9f7` | ~4.0:1 | AA Large only; use accent-dim for small text |
| bark-50 `#faf9f7` | bark-900 `#1a1610` | ~14.5:1 | AAA |

---

## 3. Typography

### Font Families (`global.css` lines 28-30)

| Token | Stack | Role |
|---|---|---|
| `--font-display` | `'Libre Franklin', 'Libre Franklin Fallback', system-ui, sans-serif` | Headlines, navigation, labels, stats, UI elements |
| `--font-body` | `'Lora', 'Georgia', serif` | Body text, paragraphs, list items |
| `--font-mono` | `'JetBrains Mono', monospace` | Code blocks (defined, minimal use) |

**Why Libre Franklin?** Geometric sans-serif with a wide weight range (400-800). Clean, legible at small sizes for navigation labels, authoritative at large sizes for headlines. The tight letter-spacing at display sizes (`-0.03em`) prevents it from feeling generic.

**Why Lora?** A transitional serif optimized for screen reading. Its moderate contrast and open counters make long-form content comfortable. The italic cuts are elegant for blockquotes. It carries the editorial credibility the project requires.

**Font loading:** Fonts load with `media="print" onload="this.media='all'"` for non-blocking rendering. A `@font-face` fallback with `size-adjust` metrics reduces CLS during swap (`global.css` lines 56-63).

### Type Scale

| Class | Family | Size (clamp) | Weight | Line-height | Letter-spacing | Use |
|---|---|---|---|---|---|---|
| `.text-display` | display | `clamp(2.5rem, 7vw, 7rem)` | 700 | 1.05 | -0.03em | Hero headlines only (one per page max) |
| `.text-headline` | display | `clamp(2rem, 4vw, 4rem)` | 700 | 1.1 | -0.02em | Page titles (ContentPage h1), major section headers |
| `.text-title` | display | `clamp(1.5rem, 2.5vw, 2.5rem)` | 600 | 1.2 | -0.01em | Section headers, content-prose h2 |
| `.text-body-lg` | body (inherited) | `clamp(1.1rem, 1.3vw, 1.35rem)` | 400 | 1.8 | normal | Subtitles, lead paragraphs |
| `.text-label` | display | `0.75rem` (fixed) | 500 | inherited | 0.15em | Navigation groups, TOC heading, metadata labels |

**Base font size:** `html { font-size: clamp(15px, 1vw + 12px, 18px); }` -- all rem values scale with the viewport.

---

## 4. Spacing and Layout

### Spacing Tokens (`global.css` lines 33-35)

| Token | Value | Use |
|---|---|---|
| `--space-section` | `clamp(4rem, 8vw, 8rem)` | Between major page sections |
| `--space-block` | `clamp(2rem, 4vw, 4rem)` | Between blocks within a section |
| `--space-element` | `clamp(1rem, 2vw, 2rem)` | Between elements within a block |

### Width Constraints

| Class | Value | Use |
|---|---|---|
| `.content-width` | `max-width: 900px; margin: auto` | Prose text, readable line lengths |
| `.wide-width` | `max-width: 1400px; margin: auto` | Navigation bar, footer, card grids |

### Section Padding Utilities

| Class | Value |
|---|---|
| `.section-gap` | `padding-top: 6rem; padding-bottom: 6rem` |
| `.section-gap-lg` | `padding-top: 8rem; padding-bottom: 8rem` |

### Grid Patterns

- **Footer:** `grid-cols-2 md:grid-cols-6` (brand spans 2, 4 link columns)
- **Two-column content:** `.content-two-col` -- single column mobile, `1fr 1fr` at 768px+ with 3rem gap
- **ContentPage sidebar:** `lg:flex lg:gap-16` with 200px sticky sidebar + flex-1 prose

---

## 5. Component Library

### reveal / is-visible
**Scroll-triggered fade-up animation.**  
Initial state: `opacity: 0; transform: translateY(40px)`. On intersection: adds `is-visible` class which transitions both properties over 0.8s with ease-out cubic. Supports `data-delay` attribute for staggered reveals (value in ms).  
**Use:** Any element that should animate on scroll. Apply to headings, cards, images, sections.  
```html
<div class="reveal">Content fades up</div>
<div class="reveal" data-delay="200">Delays 200ms</div>
```
**Used on:** Nearly every page via ContentPage headers and inline sections.

### text-split
**Word-by-word reveal animation.**  
JS wraps each word in overflow-hidden spans. Each word translates up from below with 60ms stagger. Triggers on intersection.  
**Use:** Hero headlines on landing pages for dramatic entrance.  
```html
<h1 class="text-display text-split">Words reveal one by one</h1>
```
**Used on:** `en/index.astro`, explore pages.

### accent-line / divider / divider-accent / divider-dot
**Section separators with varying weight.**
```html
<!-- Gradient fade from green to transparent, 1px -->
<div class="accent-line"></div>

<!-- Simple 1px bark-200 line -->
<div class="divider"></div>

<!-- 2px gradient green to transparent -->
<div class="divider-accent"></div>

<!-- Centered dot with lines extending left and right -->
<div class="divider-dot">&#183;</div>
```
**Used on:** accent-line in ContentPage header and footer top; dividers on index, governance, scenarios; divider-dot on index, faq, glossary.

### evidence-box
**Source-linked callout for claims.** Light bark-100 background, 3px green left border, rounded right corners. Accepts `source` and `url` props. Astro component at `src/components/EvidenceBox.astro`.
```html
<EvidenceBox source="WHO Report 2025" url="https://...">
  <p>Claim text here with linked evidence.</p>
</EvidenceBox>
```
**Also available as:** `.evidence` class within `.content-prose` for inline HTML use.  
**Used on:** Content pages via the `.evidence` prose class (vision, resilience, etc.).

### pull-quote
**Emphasized statement.** Centered text, display font, bordered top and bottom with bark-200. Optional attribution in smaller body font. Component at `src/components/PullQuote.astro`.
```html
<PullQuote attribution="Donna Haraway, 2016">
  Staying with the trouble requires making kin in lines of inventive connection.
</PullQuote>
```
**Used on:** `en/index.astro`, `en/resilience.astro`, `en/scenarios.astro`.

### stat-block
**Key number display.** Centered layout: large display-font number, uppercase label below, optional context line. Supports animated counting via `countTo` prop + `suffix`. Component at `src/components/StatBlock.astro`.
```html
<StatBlock value="2,600m" label="Elevation" context="Subtropical cloud forest" />
<StatBlock countTo={47} suffix="%" label="Below poverty line" accent />
```
**Used on:** `en/resilience.astro`, landing/invest, landing/resilience.

### photo-frame
**Image container with treatment.** Rounded corners (0.75rem), subtle filter (`saturate(1.1) contrast(1.05) brightness(0.95)`), hover zoom to 1.03x scale. Optional credit overlay with gradient fade. Component at `src/components/PhotoFrame.astro`.
```html
<PhotoFrame src="/images/yungas/valley.jpg" alt="Yungas valley view" credit="Photo: PT32LAB" height="h-64 md:h-80" />
```
**Used on:** Most content pages (gallery, vision, location, traditions, etc.).

### card / card-dark
**Unified card component.** bark-50 background, bark-200 border, 0.75rem radius, 2rem padding. On hover: border turns accent green with subtle shadow. `card-dark` variant uses night-surface background with white-alpha border.
```html
<div class="card hover-lift">Card content</div>
<div class="card card-dark">Dark variant</div>
```
**Used on:** index pages, pillars overview, roadmap, team, investors.

### tag / tag-accent
**Small metadata badge.** Pill-shaped, uppercase, tiny display font. Default has bark-200 border and bark-500 text. `tag-accent` adds green border, green text, and faint green background.
```html
<span class="tag">Phase 0</span>
<span class="tag tag-accent">Active</span>
```
**Used on:** roadmap, team, pillars, investors.

### hover-lift
**Interactive card hover.** Translates up 2px and adds medium shadow on hover. Apply alongside `card` or any clickable surface.
```html
<div class="card hover-lift">Lifts on hover</div>
```

### section-dark
**Dark background section.** Sets bark-900 background, bark-300 text. Headings auto-switch to bark-50. Labels switch to bark-500.
```html
<section class="section-dark section-gap px-6">
  <h2>Heading turns white</h2>
  <p>Body text turns light gray</p>
</section>
```
**Used on:** `en/index.astro`, `en/scenarios.astro`, `en/vision.astro`, `en/governance.astro`.

### text-gradient
**Gradient text.** 135-degree gradient from accent green to cyan. Uses background-clip text trick.
```html
<span class="text-gradient">Gradient text</span>
```
**Used on:** `en/index.astro`, `en/vision.astro`.

### bg-warm-gradient / bg-cool-gradient
**Subtle section backgrounds.** Warm blends bark-100 through bark-50 to a whisper of green. Cool blends green whisper through bark-50 to cyan whisper. Both at 135 degrees.
```html
<section class="bg-warm-gradient section-gap">Warm section</section>
<section class="bg-cool-gradient section-gap">Cool section</section>
```

### bg-dots
**Decorative dot pattern.** Radial gradient producing 1px bark-200 dots on a 24px grid. Apply as an overlay or background texture.
```html
<div class="bg-dots">Dotted background</div>
```

### bar-section
**Left accent bar.** 4px green bar on the left edge via `::before` pseudo-element, with 2rem left padding.
```html
<div class="bar-section">
  <h3>Sidebar-style heading</h3>
  <p>Content with accent bar</p>
</div>
```

### content-two-col
**Two-column layout.** Single column on mobile, two equal columns at 768px+ with 3rem gap.
```html
<div class="content-two-col">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### feature-card / feature-number
**Numbered feature card.** Standard card styling with a large decorative number positioned at top-right in bark-100. The number is purely decorative (5rem, weight 800).
```html
<div class="feature-card">
  <span class="feature-number">01</span>
  <h3>Feature title</h3>
  <p>Description</p>
</div>
```
**Used on:** `en/pillars/technopark.astro`, `en/scenarios.astro`.

### big-number
**Large decorative statistic.** Display font, fluid size `clamp(3rem, 8vw, 6rem)`, weight 800, accent green at 15% opacity. Meant as a background watermark behind content.
```html
<div class="big-number">47%</div>
```

### link-arrow
**CTA link with animated arrow.** Display font, accent green, 0.85rem. Includes an SVG arrow that shifts 3px right on hover.
```html
<a href="/vision" class="link-arrow">
  Read more
  <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
</a>
```
**Used on:** Index pages, card footers, explore page.

---

## 6. Page Templates

### Base.astro (`src/layouts/Base.astro`)
The standard full-page layout. Provides:
- `<head>`: charset, viewport, description, canonical URL, hreflang alternates (en/es), favicon, font preloads (non-blocking), OG/Twitter meta tags using `valley.jpg` as default image
- JSON-LD: Organization schema (BARK, Coroico coordinates, founding 2026) + WebSite schema
- Astro ClientRouter for SPA-style transitions
- `<Nav />` and `<Footer />` components
- `<main>` with `transition:animate="fade"`
- Init script binding to `astro:page-load` for reveals, counters, and text-splits
- Props: `title` (required), `description` (optional), `dark` (optional boolean, currently unused in template logic)

### Landing.astro (`src/layouts/Landing.astro`)
Minimal layout for focused standalone pages. Differences from Base:
- No `<Nav />` or `<Footer />` components
- Inline minimal nav with only the BARK wordmark and a language toggle link
- No hreflang alternates or JSON-LD schemas
- No `lang` attribute from URL (hardcoded `en`)
- Used by: `landing/resilience.astro`, `landing/invest.astro`, `landing/about.astro`

### ContentPage.astro (`src/components/ContentPage.astro`)
Wraps Base.astro to provide a standard prose page. Provides:
- 1.5px accent gradient band at the very top of the page
- Page header section: `text-headline` h1 with optional subtitle and accent-line, all with reveal animation
- Sidebar TOC (desktop only, 200px wide, sticky at top 24): auto-generated from h2 elements via JS, with active-state highlighting via IntersectionObserver (`rootMargin: '-80px 0px -70% 0px'`). Hidden if fewer than 2 h2 elements exist.
- `.content-prose` div with extensive global styles for: paragraphs, headings (h2 with 60px accent line `::before`, h3), links, unordered lists (green dot markers), ordered lists (green counter numbers), blockquotes (green left border + large quotation mark), evidence callouts, tables (dark header, alternating rows, hover highlight), and CTA boxes.
- Optional `.content-visual` modifier for alternating section indent on even h2 groups.

---

## 7. Navigation

### Structure
Five groups defined in `src/components/Nav.astro` (lines 7-57):

| Group | Label Key | Items |
|---|---|---|
| **Project** | `nav.group.project` | Vision, Why Bolivia, Resilience, Scenarios, Roadmap |
| **Build** | `nav.group.build` | Pillars (overview), Techno Park, Incubator, Trading House, Infrastructure |
| **Life** | `nav.group.life` | Retreat and Longevity, Health, Traditions, Gallery |
| **Join** | `nav.group.join` | Investors, Participate, Team |
| **Reference** | `nav.group.reference` | Location, Economy, Governance, Network, Risks, Glossary, Fact Check |

### Desktop Behavior
- Fixed position, full width, z-50, glassmorphism (`bg-bark-50/80 backdrop-blur-sm`)
- On scroll > 80px: adds stronger blur and shadow
- On scroll down past 300px: hides (translateY -100%); on scroll up: reappears
- Group buttons are uppercase labels with chevron icons
- Dropdown panels appear on hover with 150ms close delay (prevents accidental dismiss)
- Panels center under their trigger, min-width 260px, with shadow-lg
- Each link shows name + description on two lines
- Language toggle separated by a vertical 1px divider

### Mobile Behavior
- Hamburger button (3-line icon, toggles to X)
- Full-screen overlay with accordion groups
- Each group header is a button that toggles its link panel
- Only one group open at a time (others auto-close)
- Language link at the bottom of the panel

### Adding New Nav Items
1. Add the link to the `navGroups` array in `Nav.astro`
2. Add the same link to the `footerGroups` array in `Footer.astro`
3. Add translation keys to `src/i18n/ui.ts` for both `en` and `es`
4. Create the page file in both `src/pages/en/` and `src/pages/es/`

---

## 8. Images and Icons

### Photos (7 files in `public/images/yungas/`)

| File | Description |
|---|---|
| `valley.jpg` | Panoramic valley view -- used as default OG image |
| `coroico-clouds.jpg` | Coroico town with cloud cover |
| `market.jpg` | Local market scene |
| `yungas-landscape.jpg` | General Yungas landscape |
| `death-road.jpg` | The famous Yungas Road |
| `tocana-landscape.jpg` | Tocana area landscape |
| `road-panorama.jpg` | Wide road panorama shot |

All photos are treated with the `.photo-frame` class: `saturate(1.1) contrast(1.05) brightness(0.95)` for a warm, slightly moody tone that matches the bark color palette.

### SVG Icons (5 in `public/images/icons/`)
Pillar-specific icons: `technopark.svg`, `incubator.svg`, `trading.svg`, `retreat.svg`, `infrastructure.svg`. Used on pillar pages and the pillars overview.

### SVG Diagrams (2 in `public/images/diagrams/`)
- `system-interconnection.svg` -- how BARK subsystems connect
- `energy-flow.svg` -- energy infrastructure flow diagram

### Adding New Images
1. Place files in `public/images/` under an appropriate subdirectory
2. Use the `<PhotoFrame>` component for photos (handles aspect ratio, filter, credit)
3. For SVGs, reference directly with `<img>` tags
4. Keep file sizes reasonable -- photos should be optimized (suggest max 200KB for web)
5. Always provide meaningful `alt` text

---

## 9. Animation

All animation logic lives in `src/scripts/init.ts`. The `init()` function is called on `astro:page-load` to re-initialize after SPA transitions.

### Scroll Reveal (`initReveals`, lines 6-26)
- **Selector:** `.reveal`
- **Observer config:** `threshold: 0.15`, `rootMargin: '0px 0px -50px 0px'`
- **Behavior:** Adds `is-visible` class after optional `data-delay` ms. Unobserves after trigger.
- **CSS transition:** `opacity 0.8s` + `transform 0.8s` with `cubic-bezier(0.16, 1, 0.3, 1)`

### Text Split (`initTextSplits`, lines 83-106)
- **Selector:** `.text-split:not(.is-split)`
- **Observer config:** `threshold: 0.2`
- **Behavior:** Splits text into words, wraps each in overflow-hidden span. Each word `translateY(100%)` to `translateY(0)` with 60ms stagger per word, 0.6s duration.

### Counter Animation (`initCounters`, lines 29-78)
- **Selector:** `.counter` (inside `StatBlock` component)
- **Observer config:** `threshold: 0.2`, `rootMargin: '0px'`
- **Duration:** 2000ms
- **Easing:** Ease-out cubic: `1 - Math.pow(1 - progress, 3)`
- **Behavior:** Animates from 0 to `data-target` value, appends `data-suffix`. Uses `requestAnimationFrame`.

### Mycelium Canvas (`src/components/MyceliumCanvas.astro`)
- **Element:** `<canvas>` with absolute positioning
- **Behavior:** Spawns up to 150 branches that grow in random directions with slight angle variation. Branches have varying opacity, width, and color (accent green, light green, dim green, cyan). Occasionally spawns "node" circles. Background fades slowly via `rgba(10,10,15,0.015)` fill each frame.
- **Initialization:** Deferred via `requestIdleCallback` with 200ms timeout. Fades in over 2s.
- **Cleanup:** Cancels animation frame on `astro:before-swap`.
- **Used on:** `en/explore.astro`, `es/explore.astro` only.

### Reduced Motion
`global.css` lines 488-495:
```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .reveal { opacity: 1; transform: none; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```
Reveals become immediately visible. All transitions and animations are effectively disabled.

---

## 10. Design Decisions and Rationale

**Why serif body text.** The project asks people to read 2,000-word arguments about resilience, governance, and economic models. Serif type (Lora) carries editorial authority and reading comfort that sans-serif cannot match at these lengths. The sans-serif display font (Libre Franklin) provides the necessary contrast for navigation and headlines. The combination reads "journal article meets design magazine" rather than "VC pitch deck."

**Why green accent.** The accent `#10b981` (emerald-500) sits at the intersection of nature and technology. It is the color of bioluminescence, terminal screens, and growing things. It avoids the aggression of red/orange and the corporate coldness of blue. Against the warm bark palette, it reads as life pushing through soil.

**Why no logo beyond text.** BARK is in Phase 0. The identity is still forming. A premature logo would lock in connotations before the project has earned them. The wordmark "BARK" in Libre Franklin Bold is sufficient and honest. A proper visual identity can emerge organically as the community develops.

**Why radical honesty IS a design decision.** The Risks page, Fact Check page, and evidence-box component are not afterthoughts. They occupy equal hierarchy in the navigation. This is a conscious choice: if the project cannot survive scrutiny, it should not ask for participation. The design system makes transparency easy (evidence boxes, source links) and obscurity hard (no "fine print" patterns).

**Why the ContentPage h2 uses a short accent line, not a full border.** A full-width border between sections creates visual heaviness and implies rigid separation. The 60px gradient line (`global.css` lines 82-91) signals a new section while maintaining flow. It fades from accent green to transparent, suggesting continuation rather than division -- consistent with the project's theme of interconnected systems.

---

## 11. Known Issues and Future Improvements

### Pages Needing More Visual Variety
Most content pages (economy, governance, network, glossary, health, traditions, faq, participate) rely entirely on ContentPage prose styles without any visual breakpoints -- no photos, stat blocks, pull quotes, or section-dark breaks. They read as walls of text. Priority candidates for enrichment: economy, health, traditions, governance.

### Missing Assets
- **No custom illustrations.** All visuals are stock Yungas photography. Illustrated diagrams of BARK systems (energy, water, governance) would significantly improve comprehension.
- **No generated imagery.** Replicate/HuggingFace APIs are available on the server but unused for the site. AI-generated visualizations of the Coroico campus could bridge the gap until real photos exist.
- **Only 2 SVG diagrams.** The site discusses complex interconnected systems but has minimal diagrammatic explanation.

### Not Implemented
- **Dark mode.** The color tokens and section-dark class suggest the foundation exists, but there is no system-wide dark mode toggle or `prefers-color-scheme` media query.
- **Print stylesheet.** No print-specific styles. Long-form content pages would benefit from optimized print layouts (hide nav/footer, adjust typography, ensure link URLs are visible).
- **Reduced motion for mycelium.** The canvas animation does not check `prefers-reduced-motion` -- it should either disable or show a static image instead.
- **Signal colors underused.** `--color-ember` and `--color-gold` are defined but barely appear. They could serve warnings/risks and premium/milestone content respectively.

---

## 12. How to Update This System

### Adding a New Color
1. Add the token to the `@theme` block in `src/styles/global.css` (line 3-53)
2. Use the naming convention: `--color-{family}-{shade}` (e.g., `--color-ember-light`)
3. It becomes automatically available as a Tailwind class (`bg-ember-light`, `text-ember-light`)
4. Document it in this file under Section 2
5. Check contrast ratios against your intended backgrounds

### Adding a New Component Class
1. Add the CSS to `src/styles/global.css` under the COMPONENT LIBRARY section (after line 136)
2. Follow the existing pattern: comment header explaining purpose, class name, hover/active states
3. If it has props and reusable structure, create an Astro component in `src/components/`
4. Add a copy-pasteable HTML example to this document under Section 5
5. Governance: Light (single-file CSS change)

### Adding a New Page Template
1. Create a new `.astro` file in `src/layouts/` (or `src/components/` if it wraps Base.astro like ContentPage does)
2. Accept at minimum `title` and `description` props
3. Import and use `Base.astro` or `Landing.astro` as the outer shell
4. Add any template-specific `<style is:global>` blocks for prose treatment
5. Document it in this file under Section 6
6. Governance: Standard (new template affects multiple future pages)

### Changing Fonts
1. Update the `@theme` font tokens in `global.css` (lines 28-30)
2. Update the Google Fonts `<link>` in both `Base.astro` (line 28) and `Landing.astro` (line 23)
3. Update the `@font-face` fallback metrics in `global.css` (lines 56-63) to match the new font's metrics
4. Test all type scale classes (`.text-display` through `.text-label`) at mobile and desktop widths
5. Governance: Standard (affects every page)

### Adding an Image
1. Place the file in `public/images/` under the appropriate subdirectory
2. For photos: use `<PhotoFrame src="/images/..." alt="..." />` component
3. For icons: place SVG in `public/images/icons/`, reference with `<img>`
4. For diagrams: place SVG in `public/images/diagrams/`, reference with `<img>` and consider adding a `.full-bleed` wrapper in content-prose for maximum width
5. Optimize before committing: photos < 200KB, SVGs cleaned of editor metadata
6. Update the image inventory in this document under Section 8

# BARK Website UX/UI Design Audit

**Auditor:** Designer (Nous Aeternos agent team)
**Date:** 2026-04-02
**Scope:** Full audit of all source files in `/home/drow/PT32LAB.github.io/src/`
**Stack:** Astro 6.1 + Tailwind CSS 4.2 (static site, GitHub Pages)

---

## Executive Summary

The BARK site is unusually strong for an early-stage project. The writing is excellent -- direct, honest, well-structured. The visual foundation (typography, color, scroll animations) is well above average. The information depth is genuine. These are real assets.

The problems are structural, not cosmetic. The site has 18 English pages but no clear reading order for any of its four audiences. The design system has a solid start but significant gaps. Several pages are walls of prose where visual components would serve better. The interlink strategy is ad hoc. And the gap between the richly designed pages (homepage, explore, investors) and the plain ContentPage-based pages (vision, why, governance, risk, all five pillars) creates an inconsistent experience.

This audit covers six areas: information architecture, design system gaps, page-by-page UX analysis, design inspiration, interlink strategy, and a component library proposal.

---

## 1. Information Architecture

### 1.1 Current Sitemap (as built)

```
/en/                        (Homepage - custom layout)
/en/vision                  (ContentPage)
/en/why                     (ContentPage)
/en/pillars/                (Custom layout - list)
  /en/pillars/technopark    (ContentPage)
  /en/pillars/incubator     (ContentPage)
  /en/pillars/trading       (ContentPage)
  /en/pillars/retreat       (ContentPage)
  /en/pillars/infrastructure (ContentPage)
/en/location                (Custom layout - hero image)
/en/participate             (Custom layout - grid)
/en/governance              (ContentPage)
/en/community               (Custom layout - neighbor grid)
/en/explore                 (Custom layout - dark cosmos)
/en/investors               (Custom layout - thesis)
/en/team                    (Custom layout - profiles)
/en/roadmap                 (Custom layout - timeline)
/en/risk                    (ContentPage)
/en/faq                     (Custom layout - accordions)
```

### 1.2 Navigation Structure (from `Nav.astro`, lines 7-21)

**Primary (visible):** Vision, Components, Location, Participate
**More dropdown:** Why, Governance, Community, Team, Roadmap, Explore

**Problems identified:**

1. **Investors page is orphaned.** It exists at `/en/investors` but does not appear in the primary nav, the More dropdown, or the footer. The only path to it is through the homepage pathway card (which links to `/en/participate`, not `/en/investors`) or direct URL. This is the single most important page for fundraising and it is invisible.

2. **Risk page is orphaned.** `/en/risk` is linked only from the investors page (line 297: `<a href="/en/risk">`). It is not in any navigation menu. Users who need to see this page -- potential investors and participants -- cannot discover it.

3. **FAQ page is semi-orphaned.** `/en/faq` exists but is not in the nav, footer, or any visible link from other pages. The FAQ contains critical trust-building content (the "Is this a cult?" question alone justifies its existence).

4. **The "More" dropdown hides important pages.** Governance, Community, Team, and Roadmap are all buried. For an early-stage project seeking participants, Team and Roadmap should be immediately findable.

5. **No audience-based entry points in the nav.** The homepage has four pathway cards (Builders, Investors, Community, Locals), but the nav structure does not reflect these audiences at all. A first-time visitor who skips the homepage has no guided path.

6. **The "Explore" page is conceptually separate.** It is a dimensional knowledge browser -- a fundamentally different interaction model from the rest of the site. Putting it in the "More" dropdown alongside governance and community pages creates false equivalence.

### 1.3 Proposed Navigation Architecture

**Tier 1 -- Primary nav (always visible):**

| Label | Path | Rationale |
|-------|------|-----------|
| Vision | /en/vision | The core story |
| Components | /en/pillars | What gets built |
| Location | /en/location | Where it happens |
| Invest | /en/investors | The money page -- must be top-level |
| Join | /en/participate | The action page |

**Tier 2 -- Organized dropdown (replace "More"):**

Two-column dropdown with clear groupings:

**Understand**
- Why an Ark? (/en/why)
- Governance (/en/governance)
- Risk Disclosure (/en/risk)
- FAQ (/en/faq)

**Community**
- Team (/en/team)
- Our Neighbors (/en/community)
- Roadmap (/en/roadmap)

**Tier 3 -- Footer nav only:**

- Explore the Knowledge Cosmos (/en/explore) -- conceptually distinct, lives as a footer "lab" link
- All Tier 1 and Tier 2 links repeated in footer

**Key changes:** Investors promoted to primary nav. Risk and FAQ made discoverable. Explore separated from prose pages. Two-column dropdown creates visual grouping that a flat list lacks.

### 1.4 Pages That Should Be Merged or Restructured

**Merge candidates:**

- `/en/vision` and `/en/why` overlap significantly. Both explain the project thesis. Vision covers "what we are building" and Why covers "why we are building it." Recommendation: merge into a single `/en/vision` page with two clearly delineated sections (the vision, then the argument). This reduces the page count and creates one powerful narrative instead of two partial ones. Keep the "Why Bolivia" and "Why Now" sections from the Why page -- they are strong.

- `/en/participate` and `/en/investors` serve different audiences but share the same call to action (contact@pt32lab.org). Recommendation: keep them separate but cross-link heavily. The participate page should have a visible "If you're looking to invest" link to the investors page. The investors page should have "If you want to contribute skills instead" link to participate.

**Split candidates:**

- `/en/location` is doing too much. It covers geography, climate, biodiversity, demographics, access, natural resources, risks, legal framework, and integration philosophy. This is approximately 3,000 words of dense factual content. Recommendation: keep the page as-is but add a visual summary at the top (key stats, map, climate chart) so readers can get the headline information before committing to the full read.

---

## 2. Visual Design System Gaps

### 2.1 What Exists (in `src/styles/global.css`)

**Colors (lines 3-20):**
- `bark-50` through `bark-900` -- a 10-step warm neutral scale (good)
- `accent` / `accent-light` / `accent-dim` -- emerald green (#10b981 family)
- `night` / `night-light` / `night-surface` -- dark theme base (3 steps only)
- `ember`, `gold`, `cyan` -- semantic accents (1 step each)

**Typography (lines 28-30):**
- `--font-display`: Libre Franklin (sans-serif)
- `--font-body`: Lora (serif)
- `--font-mono`: JetBrains Mono

**Type classes (lines 58-93):**
- `.text-display` -- hero type, clamp(2.5rem, 7vw, 7rem)
- `.text-headline` -- section headers, clamp(2rem, 4vw, 4rem)
- `.text-title` -- subsection headers, clamp(1.5rem, 2.5vw, 2.5rem)
- `.text-body-lg` -- lead paragraphs, clamp(1.1rem, 1.3vw, 1.35rem)
- `.text-label` -- labels, 0.75rem uppercase tracked

**Utilities (lines 95-131):**
- `.reveal` / `.is-visible` -- scroll-triggered fade-up
- `.accent-line` -- gradient horizontal rule
- Selection color
- Focus-visible style
- Reduced motion support

### 2.2 What Is Missing

**A. Spacing scale -- NO TOKENS DEFINED**

The site uses Tailwind's default spacing utilities ad hoc. There is no documented spacing system. Comparing across pages:

- Homepage hero padding: `pb-20` (5rem)
- Section padding: `py-32` (8rem) on homepage, `py-24` (6rem) on investors, `py-16` (4rem) on some interior pages
- Content max-width: `max-w-[900px]` for ContentPage, `max-w-[1400px]` for custom layouts
- Grid gaps: `gap-px`, `gap-4`, `gap-6`, `gap-8`, `gap-10`, `gap-12` used inconsistently

Recommendation: Define a spacing scale in the @theme block:

```css
@theme {
  --spacing-section: 8rem;      /* py-32 equivalent, section vertical padding */
  --spacing-section-sm: 6rem;   /* py-24, tighter sections */
  --spacing-block: 4rem;        /* space between content blocks within a section */
  --spacing-element: 1.5rem;    /* space between elements within a block */
  --spacing-tight: 0.75rem;     /* tight gaps */
  --width-content: 900px;       /* prose content width */
  --width-wide: 1400px;         /* full-width layout */
}
```

**B. Border radius -- NO TOKENS DEFINED**

Used values across the site: `rounded` (0.25rem default), `rounded-lg` (0.5rem), `rounded-xl` (0.75rem), `rounded-full`. The cards and sections overwhelmingly use `rounded-xl`. This should be tokenized.

**C. Shadows -- NO TOKENS DEFINED**

Only `shadow-sm` (on scrolled nav) and `shadow-lg` (on More dropdown) are used. No elevation system exists. For card-heavy layouts like investors and community, a 3-level shadow system is needed:

```css
@theme {
  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.04);
}
```

**D. Night theme -- INCOMPLETE**

The dark theme has only 3 color stops: `night` (#0a0a0f), `night-light` (#12121a), `night-surface` (#1a1a24). The explore page and homepage hero use these. But there is no `night-border`, `night-muted`, or `night-hover` token. The explore page compensates by using `bark-800`, `bark-600`, `bark-400` etc. in dark contexts -- but these are the light theme's neutral scale, being repurposed. This works passably but is semantically wrong and will cause problems as the site grows.

Recommendation: Extend the night palette to match the bark palette's granularity:

```css
@theme {
  --color-night-50: #e8e8f0;   /* text on dark */
  --color-night-100: #c0c0d0;  /* secondary text on dark */
  --color-night-200: #8080a0;  /* muted text on dark */
  --color-night-300: #404060;  /* borders on dark */
  --color-night-400: #2a2a3a;  /* elevated surface */
  --color-night-500: #1a1a24;  /* surface (existing night-surface) */
  --color-night-600: #12121a;  /* background (existing night-light) */
  --color-night-700: #0a0a0f;  /* deep background (existing night) */
}
```

**E. Transition tokens -- NONE**

Transitions are hardcoded inline across components: `duration-300`, `duration-500`, `duration-200`. No standard easing or duration tokens. The `cubic-bezier(0.16, 1, 0.3, 1)` easing in global.css (line 103) is excellent but only used by `.reveal`.

**F. Interactive state tokens -- NONE**

No defined hover, active, or disabled states. Each component invents its own. Compare:
- Nav links: `hover:text-bark-800` (line 38)
- Pathway cards: `hover:bg-bark-100` (line 114)
- Pillar rows: `hover:bg-bark-100` (line 170)
- CTA buttons: `hover:bg-accent-light` (line 49)

These are reasonable but not systematic.

### 2.3 Missing Components (compared to Stripe, Linear, Airbnb DLS)

| Component | Status | Where needed |
|-----------|--------|-------------|
| Card (elevated) | Missing | Investors modalities, community neighbors |
| Callout / Admonition | Missing | Risk warnings, important notes |
| Stat block | Exists (ad hoc) | Homepage stats, location stats -- needs componentization |
| Testimonial block | Missing | Community page, team page |
| Section divider | Partial (accent-line only) | Between major sections |
| Badge / Tag | Missing | Roadmap status, pillar labels |
| Table | Inline only | Technopark financials -- needs styled component |
| Accordion | Inline only | FAQ -- should be reusable |
| Progress / Timeline node | Inline only | Roadmap -- should be reusable |
| Breadcrumb | Missing | Pillar subpages have no breadcrumb back to /pillars |
| Skip link | Missing | Accessibility requirement |
| Back-to-top | Missing | Long-form pages (location, technopark) |
| Toast / Banner | Missing | For announcements, cookie notices |
| Image with caption | Missing | Location page has inline captions but no component |
| Blockquote (styled) | Partial | ContentPage styles `<blockquote>` but no component |

### 2.4 Visual Consistency Across Pages

**Consistent elements (good):**
- Header typography classes are used consistently (`.text-headline`, `.text-title`, `.text-label`)
- The accent-line divider appears on all ContentPage instances
- The scroll-reveal animation (`.reveal`) is used everywhere
- CTA sections at the bottom of pages follow a similar pattern
- The `gap-px bg-bark-200 rounded-xl overflow-hidden` card grid pattern is reused well

**Inconsistent elements (problems):**

1. **Two content width systems coexist.** ContentPage uses `max-w-[900px]` (line 25 of ContentPage.astro). Custom pages use `max-w-[1400px]`. When a user navigates from `/en/investors` (1400px wide with visual cards) to `/en/governance` (900px prose), the layout narrows dramatically. This creates a jarring shift that makes the prose pages feel like afterthoughts.

2. **Section padding varies without rhythm.** Homepage: `py-32` (8rem). Investors: `py-24` (6rem). ContentPage: `pb-32 pt-16`. Community: `pb-20`. There is no consistent vertical rhythm between sections.

3. **Location page duplicates ContentPage prose styles.** Lines 20-32 of location.astro copy-paste the exact same Tailwind prose selectors from ContentPage.astro (lines 26-37). This is a maintenance hazard and a sign the prose styling should be extracted into a shared utility or component.

4. **Button styles are not standardized.** Across the site I count at least 5 different button treatments:
   - Green fill: `bg-accent text-night ... rounded` (homepage hero, participate)
   - Dark fill: `bg-bark-800 text-bark-50 ... rounded` (team, roadmap CTAs)
   - Ghost/outline: `border border-bark-700 text-bark-300 ... rounded` (homepage CTA secondary)
   - Text link with arrow: `text-accent ... items-center gap-2` (multiple pages)
   - Dark fill green: `bg-accent text-night` on dark backgrounds (investors, participate)

   These should be consolidated into 3 variants: primary (green fill), secondary (dark fill or outline depending on background), and ghost (text + arrow).

---

## 3. Page-by-Page UX Analysis

### 3.1 Homepage (`/en/index.astro`)

**Strengths:**
- The hero section is powerful. Kinetic text-split animation, mycelium canvas, strong tagline. This is the best section on the site.
- The "Four ways in" pathway section correctly identifies the four audiences.
- The stats strip provides immediate credibility signals.
- The "Civilization is a supply chain problem" thesis section is dramatically effective.
- The five pillars list is clean and scannable.
- The location teaser with real stats and the valley photo creates desire.

**Problems:**

1. **The stats strip (line 68-97) has a data sourcing problem.** "500+ Bird Species Recorded" and "3,000+ Documented Plant Species" are presented as facts. The location page cites these as "400-500+ documented" (line 72) and "3,000+" (line 73) respectively. The homepage rounds up to a cleaner number but this creates inconsistency. Both numbers should match exactly and link to their source.

2. **The "100% Open Source" stat (line 93) is not a number.** In a row of animated counters, this stat cannot animate (it is a static string). It breaks the visual pattern. Replace with a meaningful number: "5 Components" or the GitHub star count.

3. **No visual media below the fold.** After the hero image and valley photo, the page is entirely text and colored backgrounds. The pillar list (line 155-183) is a clean design pattern but lacks any visual differentiation between components. Icons or small illustrations for each pillar would transform this from a list into a navigation device.

4. **The pathway cards (line 112-130) use a 2x2 grid with `gap-px`.** On mobile (single column), the 1px gap between cards becomes invisible, making them look like one continuous block. The `gap-px bg-bark-200` pattern relies on the background bleeding through the gap to create borders. This is clever but fragile -- if the cards ever overflow or wrap unexpectedly, the illusion breaks.

5. **The CTA section (line 231-254) uses vague copy.** "Start a Conversation" as a CTA label does not tell the user what happens when they click. Does it open an email? A form? A Telegram channel? The `mailto:contact@pt32lab.org` on the participate page reveals the answer is email, but the homepage CTA links to `/en/participate`, not to the email directly.

6. **Mobile: the scroll indicator (line 60-63) is `hidden md:flex`.** Good -- but the hero section is `min-h-screen flex items-end pb-20`. On very short mobile viewports (e.g. landscape orientation), the CTA buttons may be pushed below the fold with no affordance to scroll. Consider adding a subtle gradient fade at the bottom edge of the hero on mobile.

**Missing elements:**
- Social proof (even one quote from a supporter or advisor)
- A simple map or location pin -- the valley photo is beautiful but gives no geographic context
- Any indication of project stage or timeline (the homepage gives no signal that this is Phase 0)

### 3.2 Vision Page (`/en/vision.astro`)

**Strengths:**
- Strong, confident prose. "An ark is not a bunker" is a great line.
- Clear section structure with meaningful H2s.
- The CTA box at the bottom is well-designed.

**Problems:**

1. **This is a wall of text.** Five sections of prose with no visual relief. No images, no pull quotes, no data, no diagrams. The ContentPage component provides typographic styling but no visual components for breaking up long-form content.

2. **No visual hierarchy within paragraphs.** The `<strong>` tags (e.g., "fabrication lab and techno park") are the only visual variation. In a 600+ word page, the eye needs more rest stops: pull quotes, callout boxes, or even simple horizontal rules between sections.

3. **The five pillars are mentioned in paragraph text (line 15-19) but not visually represented.** This is a missed opportunity for a mini-component -- a horizontal strip showing all five organs with their names and links.

4. **"Open Source as Operating Principle" section has no link to the GitHub org.** The site claims everything is open source but does not link to the evidence.

5. **No breadcrumb.** The user has no indication of where they are in the site hierarchy.

### 3.3 Why Page (`/en/why.astro`)

**Strengths:**
- "Four Scenarios, One Design" is excellent information architecture -- four possible futures, one design that works in all of them.
- The honest tone continues to build trust.
- "Why Bolivia" and "Why Now" sections are strong.

**Problems:**

1. **Same wall-of-text problem as Vision.** Even worse here -- this page is approximately 1,200 words of prose. The four scenarios section screams for visual treatment: four cards, a comparison table, or even four color-coded sections with distinct visual identities.

2. **No data or evidence.** The page makes claims about supply chain fragility, semiconductor shortages, and currency crises but provides no links, citations, or data points. Compare to the location page, which has 10 footnoted references. The Why page has zero.

3. **The four scenarios should be visually distinct.** "Mild turbulence," "Significant disruption," "Severe systemic stress," and "Optimistic trajectory" are four different emotional registers. They should look different -- different background colors, different icons, perhaps a gradient from green (optimistic) to amber to red (severe) to blue (optimistic).

4. **Consider merging with Vision** (as noted in IA section). The narrative flows naturally: Vision (what) then Why (why). Together they would make one compelling 2,000-word page with a natural arc.

### 3.4 Participate Page (`/en/participate.astro`)

**Strengths:**
- Clean four-quadrant grid for the four participation modes (Invest, Build, Think, Spread).
- Each mode has specific sub-items -- this is actionable, not vague.
- The open-source section with GitHub link is well-placed.

**Problems:**

1. **No mention of the Investors page.** A potential investor lands here, sees "Invest" as option 01, reads a brief description, but has no link to the detailed `/en/investors` page with the full investment thesis, modalities, and financial projections. This is a critical missing link.

2. **The "Contact Us" CTA (line 73-79) links to `mailto:contact@pt32lab.org`.** This is the only actionable contact mechanism on the entire site. There is no form, no Telegram, no Discord, no GitHub Discussions. For a project that claims to be open-source and community-oriented, the sole contact method being a private email address creates a trust gap.

3. **The four participation modes are static cards.** These should be interactive -- click to expand with more details, or link to relevant pages. Currently they dead-end within the grid.

4. **No indication of what happens after contact.** "We respond to everyone" (line 70) is nice, but what is the process? What is the timeline? What should a prospective participant expect?

### 3.5 Explore Page (`/en/explore.astro`)

**Strengths:**
- The dimensional data model is genuinely interesting.
- The sticky dimension switcher bar is the right interaction pattern.
- The node cards with dimension bars are well-designed.
- The "Coming soon" section honestly signals future development.

**Problems:**

1. **The dimension filter only changes opacity.** Lines 182-186 of explore.astro: clicking a dimension button adjusts `opacity` of each node based on its score in that dimension. This is a subtle effect that many users will not notice. A stronger visual treatment (resorting the grid, enlarging high-scoring nodes, or adding a glow effect) would make the interaction more satisfying.

2. **No way to click into a node.** The cards are `cursor-default` (line 108). Users will expect them to be clickable -- expandable to show more detail, or linking to the relevant pillar/page. Currently they are display-only.

3. **The "Overview" button default is correct but the visual toggle behavior is fragile.** Lines 169-174 use class toggling with specific Tailwind classes. If the Tailwind build changes class names or order, this breaks. A data-attribute-based approach would be more robust.

4. **Mobile: the dimension switcher bar (line 82-92) uses `overflow-x-auto` but has no scroll indicator.** On a phone, the user sees "Overview" and maybe one or two more buttons with no visual cue that more options exist to the right. A horizontal scroll fade or arrow indicator would help.

5. **The 5-cluster vertical layout (Infrastructure, Governance, Economy, Technology, Culture) is long on mobile.** At 22 nodes total with 6 dimension bars each, this page becomes a very long scroll on phones. Consider a collapsed-by-default cluster view on mobile.

### 3.6 Community / Our Neighbors Page (`/en/community.astro`)

**Strengths:**
- Exceptional content. The five sections (Local Neighbors, Regional, Global, Governance Experiments, Indigenous Governance, Global Movement) are well-researched and honest.
- The "What BARK learns" callout on each neighbor card is a strong trust signal -- it shows learning humility.
- The cautionary tale markers (ember border on Prospera, gold on Cabin DAO) are a good visual pattern.

**Problems:**

1. **This page is extremely long.** Approximately 3,500 words spread across 6 sections and 20+ neighbor cards. There is no table of contents, no section navigation, no way to jump to a specific section.

2. **All neighbor cards use the identical layout.** Whether the neighbor is a 3-person ecovillage or Auroville (3,000+ residents, founded 1968), the card size and visual treatment are the same. Scale and relevance should be visually differentiated.

3. **The Ayllu section (lines 317-349) is the most important cultural content on the entire site.** It deserves more visual prominence than a single light-gray box. Consider making it a full-width section with distinct styling -- perhaps a warm background or an illustration.

4. **No map.** For a page about geographic neighbors and allies, the absence of a map is a significant gap. Even a simple static map showing Coroico in relation to the mentioned neighbors would add enormous value.

### 3.7 Governance Page (`/en/governance.astro`)

**Strengths:**
- The honest framing ("not decided yet -- and that's deliberate") builds trust.
- The real-world governance lessons section (Mondragon, Auroville, Zapatistas, etc.) is excellent.

**Problems:**

1. **Prose-only format for inherently comparative content.** The three governance models (Cooperative, DAO, Hybrid) are compared using prose paragraphs. This content would be dramatically more useful as a comparison table or side-by-side cards with pros/cons.

2. **The bullet points for pros/cons (lines 17-19, 22-24, 35-37) are formatted as single-line lists.** Each `<li>` contains both the "Pros:" and "Cons:" labels. This is semantically and visually confusing -- pros and cons should be visually separated.

3. **The "Other Models We're Studying" section is an afterthought.** Sociocracy, Ayllu, Holacracy, and Liquid democracy each get a single bullet point. These deserve at least a brief paragraph each with a link to further reading.

4. **The real-world governance lessons (lines 64-105) are an unordered list of paragraph-length items.** This would be better as a card grid (matching the community page pattern) with name, location, key lesson, and a link.

### 3.8 Location Page (`/en/location.astro`)

**Strengths:**
- The hero image with gradient overlay is the best visual treatment on any interior page.
- The content is extraordinarily well-researched with 10 footnoted sources.
- Climate data, biodiversity, demographics, access -- every section a potential participant would need.
- The "Risks & Challenges (Honest Assessment)" section is a trust-builder.

**Problems:**

1. **Duplicated prose styling.** Lines 20-32 copy-paste the exact ContentPage prose selectors. This should use the ContentPage component or extract the styles into a shared class. Current state: any change to prose styling must be applied in two places.

2. **No map.** This is the Location page. There is no map. A simple embedded OpenStreetMap or a static map image showing Coroico in relation to La Paz, the Yungas region, and Bolivia within South America would serve three purposes: geographic orientation, visual relief from prose, and credibility.

3. **Climate data (lines 51-58) is a bullet list.** This data is tabular -- temperature ranges by season, rainfall by month, etc. A simple data visualization (even a stylized bar chart or radial temperature display) would make this section instantly scannable.

4. **The reference section (lines 149-160) uses a custom style override (`!text-[1rem] !font-medium text-bark-400 !mt-20 !mb-4`).** The `!important` overrides (`!text-sm`, `!text-bark-400`, etc.) indicate the ContentPage prose styles are fighting against the reference list styling. This is a sign the prose styling system needs a designated "small text" zone or a reference component.

5. **No images of Coroico town, the road, or the surrounding terrain beyond the hero.** Two photos exist in `/public/images/yungas/` (valley.jpg and coroico-clouds.jpg). The location page -- the most visual page on the site -- uses only one of them. It should have at least 4-6 images: the road from La Paz, the town center, agricultural terraces, cloud forest, biodiversity, local community.

### 3.9 Investors Page (`/en/investors.astro`)

**Strengths:**
- Professional presentation. This page reads like a pitch deck in web form.
- The revenue projections section (dark background, three scenario cards) is well-designed.
- The investment modalities grid is actionable.
- The government alignment section adds credibility.
- The risk disclosure section with link to `/en/risk` shows mature transparency.

**Problems:**

1. **Not discoverable.** As noted in the IA section, this page is not in any navigation menu.

2. **The revenue projection cards (lines 148-165) present three scenarios but the numbers are hard to compare.** A simple comparison table would allow side-by-side scanning. The card layout forces vertical reading.

3. **The modalities grid (lines 183-192) has 5 items in a 3-column layout.** This creates an uneven bottom row (2 items in 3 columns). On desktop, the last row will have one card spanning 1/3 width with 2/3 empty space. Consider a 2-column layout for 5 items, or add a 6th modality.

4. **No visual indication of investment ranges.** The modalities mention specific dollar amounts ($5K-$30K for residency, $15K-$40K for Fab Lab) but these are buried in prose. A price matrix or range indicator would help investors quickly understand scale.

5. **"Express Interest" CTA (line 314) links to `mailto:contact@pt32lab.org`.** For an investment-grade page, a bare email link feels insufficient. At minimum, this should outline what information to include in the email (name, interest area, investment range, skills).

### 3.10 Team Page (`/en/team.astro`)

**Strengths:**
- Honest about being a two-person founding team.
- The "What We Need" skills grid (lines 131-155) is well-structured.
- Avatar placeholders (initial letters in circles) are clean.

**Problems:**

1. **Two profiles on a page called "The Team" amplifies smallness.** This is honest, which is good, but the visual impact of a 2-card grid on a wide screen makes the team look smaller than it needs to. Consider a different layout: a vertical stack with larger profiles, or a layout that integrates the "What We Need" section more closely (showing the filled positions and the open ones together, so the team looks like it is growing, not just small).

2. **No photos.** The circular initial placeholders are fine temporarily, but real photos build trust. Even informal photos are better than letters in circles.

3. **The "Advisors & Allies" section (lines 99-116) is an empty promise.** "We're actively connecting with people... We don't have a formal advisory board yet." This section should either (a) be removed until there are actual advisors to list, or (b) be reframed as "Who We're Looking For" with specific advisory roles named.

### 3.11 Roadmap Page (`/en/roadmap.astro`)

**Strengths:**
- The alternating timeline layout is visually effective.
- Status dots (green/gold/gray) provide clear at-a-glance progress indication.
- The "honesty note" at the bottom is on-brand.

**Problems:**

1. **The vertical timeline line (line 123) is `left-6 md:left-1/2`.** On mobile, the line is flush to the left edge with cards to its right. This works but the dot (line 131-136) positioning at `left-6 ... -translate-x-1/2` may clip against the container edge. Verify mobile rendering.

2. **Phase 0 items (lines 12-18) show "Website and public presence" and "Knowledge cosmos and research" as done.** These are correct but feel small as accomplishments. Consider adding more granularity to Phase 0 (e.g., "Design research," "Content architecture," "I18n framework") to show more progress.

3. **No progress percentage or summary.** Users want to know "how far along is this?" A simple progress bar or fraction at the top (e.g., "Phase 0 of 4 -- Foundation") would immediately contextualize the roadmap.

### 3.12 Risk Page (`/en/risk.astro`)

**Strengths:**
- Comprehensive coverage of all major risk categories.
- The "What We're Doing About It" section pairs each risk category with mitigations.
- Excellent trust-building content.

**Problems:**

1. **Same wall-of-text problem.** Five risk categories, each with 4-6 bullet points, all in the same visual weight. No color coding, no severity indicators, no visual differentiation between "this is serious" (key person risk) and "this is manageable" (altitude effects).

2. **Risk and mitigation are separated.** The page lists all risks first, then all mitigations. A paired layout (risk: mitigation, risk: mitigation) would be more useful. The investors page does this correctly in its risk section (lines 253-295) with a two-column layout.

3. **No link back to the investors page.** The risk page is primarily reached from the investors page, but there is no return link or contextual breadcrumb.

### 3.13 FAQ Page (`/en/faq.astro`)

**Strengths:**
- Excellent question selection. "Is this a cult?" is the right question to lead with (indirectly, via the Basics section).
- The `<details>` accordion is accessible by default (native HTML).
- The section grouping (Basics, Participation, Practical, Hard Questions) is logical.

**Problems:**

1. **The `<details>` icon animation (line 119) rotates a plus to 45 degrees to form an X.** This is a common pattern but the rotation looks odd -- a plus rotated 45 degrees does not form a clean X. The standard approach is either: (a) use a chevron that rotates 180 degrees, or (b) use a plus that morphs to a minus. The current implementation uses a plus SVG with `group-open:rotate-45`, which creates a diagonal plus, not a minus or X.

2. **Answers contain inline HTML links** (via `set:html`). This is a security consideration -- `set:html` bypasses Astro's default escaping. The content is developer-controlled so this is safe, but it is worth noting.

3. **No search or anchor links.** With 16 questions, users may want to link to a specific question. Adding `id` attributes to each `<details>` would enable direct linking (e.g., `/en/faq#is-this-a-cult`).

### 3.14 Pillar Index Page (`/en/pillars/index.astro`)

**Strengths:**
- Clean list layout with hover effects.
- Numbering (01-05) creates clear hierarchy.

**Problems:**

1. **No breadcrumb.** Users navigating from a pillar subpage back to this index have no visible path.

2. **The descriptions are short but the cards are full-width.** This creates a lot of whitespace on the right side of each card on desktop. Consider a more visually rich layout -- add an icon, a key stat, or a color accent for each pillar.

### 3.15 Pillar Subpages (technopark, incubator, trading, retreat, infrastructure)

**Technopark** -- the strongest pillar page by far. Detailed equipment lists with prices, a financial table, the self-replicating workshop section, and sourced references. This page alone could justify investment conversations.

**Problem:** The financial table (lines 103-146) uses raw `<table>` HTML with manual Tailwind styling. This works but the table has no responsive treatment -- on mobile, the four-column table will either overflow or compress text to unreadable sizes. Needs `overflow-x-auto` wrapper (partially present at line 103) and potentially a card-based layout on small screens.

**Incubator** -- well-researched with 7 startup opportunities. Each has pricing data and market context. The two CTA boxes are appropriate.

**Problem:** The 7 startup opportunities are a long bulleted list. This content would be significantly more scannable as a card grid (similar to the community page's neighbor cards) with each opportunity getting a card with title, investment range, revenue potential, and a "learn more" link if applicable.

**Trading** -- solid content with export goods, import needs, trade routes, and financial resilience.

**Problem:** The "Regional Trade Routes" section (lines 37-43) lists four cities with distances and descriptions. This is a map waiting to happen. At minimum, a simple diagram showing Coroico at the center with lines to La Paz (3h), Cochabamba (8-10h), Santa Cruz (12-14h), and El Alto would be far more useful than prose.

**Retreat** -- the thinnest pillar page. Only three sections of prose, no pricing data, no program details, no comparable retreat analysis. Compared to the technopark page's depth, this feels unfinished.

**Recommendation:** This page needs the same treatment as technopark: comparable retreat pricing in the Yungas/Bolivia region, specific program descriptions (duration, cost, capacity), revenue projections, and a discussion of the legal framework for plant medicine practices in Bolivia.

**Infrastructure** -- adequate as a framework but lacks the depth of technopark or trading. Each system (energy, water, food, connectivity) gets a bullet list. This page would benefit from: capacity numbers (kW of solar, liters of water storage), cost estimates, diagrams showing system interconnections, and a phased build-out plan.

---

## 4. Design Inspiration Research

### 4.1 Social Movement Websites

The best social movement sites combine urgency with accessibility. Key patterns:

**Extinction Rebellion (rebellion.global):**
- Bold, confrontational typography (all-caps, tight tracking)
- High-contrast color: black, white, and a single signal color
- "Demands" presented as non-negotiable numbered items -- BARK's five components could use this treatment
- Action-oriented CTAs ("Act Now," "Find Your Group," "Donate")

**Sunrise Movement (sunrisemovement.org):**
- Youth-forward design with warm gradients (orange to yellow)
- Story-driven: individual member stories as primary content
- "Hub" pages that serve as landing points for specific audiences
- Integration of event calendars and local chapters -- relevant for BARK's community building

**350.org:**
- Data-forward design: large numbers and statistics as visual anchors
- Campaign-specific microsites (each campaign has its own visual identity)
- Multi-language as a first-class feature, not an afterthought -- BARK's EN/ES structure is a good start but should feel more integrated

**Beautiful Trouble (beautifultrouble.org):**
- Taxonomy-driven knowledge base (tactics, principles, theories, stories)
- Faceted search and filtering -- directly relevant to BARK's /explore dimensional browser
- Cards with clear categorization tags
- "Contributed by" attribution that builds community credibility

**Applicable patterns for BARK:**
- Use bold, numbered demands/principles as visual anchors (not just prose)
- Individual stories/testimonials as trust-builders
- Data visualizations for impact metrics
- Audience-specific landing "hubs" rather than one-size-fits-all pages

### 4.2 Real Estate Development Sites

Master-planned community sites excel at selling a vision of a place that does not yet exist:

**Key patterns from luxury development sites:**
- Immersive hero imagery (aerial shots, lifestyle photography, architectural renders)
- Interactive site plans / masterplans with clickable zones
- Phase-by-phase reveal (only show what is ready for sale)
- Amenity-focused sections with icons and short descriptions
- Investment-grade financial information behind a registration wall
- Location section with travel time maps (10min, 20min, 30min radius)
- "Register Interest" forms with qualification questions

**Applicable patterns for BARK:**
- An interactive masterplan diagram showing the five components spatially
- Travel time visualization from La Paz to Coroico
- Amenity icons for each pillar component
- A more structured "express interest" flow than a bare email link

### 4.3 Design Studio References

**Pentagram:**
- Case study format: large hero image, challenge/solution/result structure
- Generous whitespace as a signal of confidence
- Type-driven layouts with restrained color

**IDEO:**
- Human-centered storytelling (always leading with the people affected)
- Process visualization (showing how they work, not just what they produce)
- Impact metrics as pull quotes

**Ragged Edge:**
- Brand systems that feel alive (motion, interaction, surprise)
- Strong voice in copy (irreverent, confident, human)
- Dark themes with bold accent colors

**Collins:**
- Strategic use of contrast (large/small, bold/light, color/monochrome)
- Systems thinking made visual (diagrams, flowcharts, relationship maps)
- Brand books as web experiences

**Porto Rocha:**
- Full-bleed imagery as emotional anchors
- Minimalist navigation that reveals complexity on demand
- Performance as a design value (fast-loading, no gratuitous animation)

### 4.4 Combining Activism with Investment-Grade Professionalism

The most relevant reference sites are those that bridge activism and serious institutional credibility:

**Patagonia (patagonia.com/activism):**
- Environmental mission communicated through product quality and transparency
- "Don't buy this jacket" level of honesty as a brand differentiator
- Detailed supply chain transparency -- every claim linked to evidence

**B Lab / B Corp (bcorporation.net):**
- Certification framework presented visually
- Impact scores as data visualizations
- Directory of certified companies as social proof

**Kickstarter (specifically hardware/community projects):**
- Stretch goals and milestones as visual progress indicators
- Creator profiles that build trust through transparency
- Risk and challenges section as a standard part of every campaign

**BARK should adopt:**
- Every factual claim linked to its source (already partially done on location page)
- Financial transparency as a design feature, not a hidden page
- Progress visualization that updates in real time
- Creator/founder profiles that show vulnerability and motivation, not just credentials

---

## 5. Interlink Strategy

### 5.1 Claims Requiring Evidence Links

| Page | Claim | Current Link | Should Link To |
|------|-------|-------------|----------------|
| Homepage (line 72) | "500+ Bird Species Recorded" | None | Location page [1] citation, BirdLife International |
| Homepage (line 82) | "3,000+ Documented Plant Species" | None | Location page [2] citation, Kessler & Beck |
| Homepage (line 93) | "100% Open Source" | None | GitHub org (https://github.com/PT32LAB) |
| Vision (line 29-34) | "Every solar array schematic... gets published" | None | GitHub org |
| Why (line 15-18) | "semiconductor shortage... currency crisis" | None | External sources (IMF, World Bank, etc.) |
| Governance (line 65-68) | "70,000+ employees, over 11 billion in revenue" | mondragon-corporation.com | Correct -- good |
| Investors (line 209) | "$325M Solar Electrification Program" | None | World Bank source document |
| Investors (line 218) | "IDB $4.5B Development Package" | None | IDB press release |
| Investors (line 224) | "15,000 active cooperatives" | None | AFCOOP or INE Bolivia source |
| Technopark (lines 16-42) | All equipment prices | Footnote sources | Sources are listed but not hyperlinked individually |
| Incubator (line 33-35) | "$325 million... $125 million from World Bank" | None | World Bank Bolivia page |
| FAQ (line 52) | "4.3 per 100,000 (UNODC, 2022)" | None | UNODC data portal |

### 5.2 Cross-Page Linking Map

Pages that should reference each other but currently do not:

| From Page | Should Link To | Context |
|-----------|---------------|---------|
| Participate | Investors | "If you're looking to invest financially" |
| Investors | Participate | "If you want to contribute skills instead" |
| Investors | Risk | Already linked (good) |
| Investors | Location | For "real asset backing" claim |
| Vision | Pillars index | When listing the five components |
| Vision | GitHub | When discussing open source |
| Why | Location | "Why Bolivia" section |
| Why | Governance | "What is worth carrying through" section |
| Governance | Community | For real-world governance examples already on community page |
| Community | Governance | For the Ayllu section (duplicated content) |
| Roadmap | Investors | "Help us move faster" could link to investment options |
| Roadmap | Participate | Already linked (good) |
| Team | Participate | Already linked (good) |
| FAQ | Multiple pages | Already linked (good) -- FAQ has the best cross-linking |
| All pillar subpages | Pillars index | Breadcrumb needed |
| All pillar subpages | Each other | Cross-references between interconnected components |
| Technopark | Trading | Processing equipment is shared |
| Incubator | Trading | Market access is shared |
| Retreat | Community | Cultural exchange programs |
| Infrastructure | Technopark | Equipment overlap |

### 5.3 Proposed Linking Strategy

**Principle: Every claim should be traceable to evidence within two clicks.**

Implementation:

1. **Footnote links on data-heavy pages.** The location page already does this well. Extend the pattern to investors, technopark, incubator, and trading pages. Each `[n]` footnote reference should be a clickable anchor link to the source in the references section at the bottom.

2. **"Related" sidebar or footer on ContentPage pages.** After the CTA box, add a "Related Pages" section with 2-3 links to pages that continue the narrative. This keeps users in a reading flow instead of bouncing to the nav.

3. **Breadcrumbs on all subpages.** Format: `BARK / Components / Techno Park`. This solves the navigation problem for pillar subpages and any future content hierarchy.

4. **Inline contextual links.** When the vision page mentions "five interlocking organs," each organ name should link to its pillar page. When the governance page mentions Mondragon, it should link to an external source. This is partially done but inconsistent.

5. **"Evidence" badge.** For key claims on the investors page, add a small badge or icon indicating that the claim is sourced. This visual signal trains readers to look for and trust sourced information.

---

## 6. Component Library Proposal

### Priority 1 -- Build Now (blocks current improvements)

#### 1. `<StatBlock>` -- Animated statistic with label
**Visual:** Large number (display font, accent color) + small label (uppercase, muted) + optional suffix
**Layout:** Vertical stack, center-aligned, works in grid cells
**Where used:** Homepage stats strip, location stats, investors projections
**CSS:** `.text-headline` or `.text-display` for the number, `.text-label` for the label
**Current state:** Exists as ad hoc HTML in 3 places. Needs componentization with props: `value`, `suffix`, `label`, `animate` (boolean for counter), `color`.

```astro
---
interface Props { value: string; suffix?: string; label: string; animate?: boolean; color?: 'accent' | 'default'; }
---
```

#### 2. `<CalloutBox>` -- Highlighted content block with optional variant
**Visual:** Rounded box, border, padding. Variants: default (bark-100 bg, bark-200 border), warning (ember left border), info (accent left border), CTA (dark background with accent button).
**Where used:** Risk warnings, CTA boxes on every ContentPage, the Ayllu section, important notes
**Current state:** `.cta-box` exists in ContentPage prose styles but is not a component. The community page has warning-variant cards inline. These should be unified.

#### 3. `<NeighborCard>` / `<ProjectCard>` -- Information card with structured fields
**Visual:** White card, title + location + description + lesson callout. Optional external link. Optional warning/caution variant with colored left border.
**Layout:** Works in 2-column grid with `gap-px` pattern
**Where used:** Community page (20+ instances), governance real-world examples
**Current state:** The exact same card markup is repeated 20+ times in community.astro with minor variations. This is the highest-impact componentization opportunity.

#### 4. `<Breadcrumb>` -- Hierarchical path navigation
**Visual:** `BARK / Section / Page` with separator characters, display font, muted color, links on parent segments
**Where used:** All pillar subpages, risk page, FAQ, any page deeper than one level
**Current state:** Does not exist.

#### 5. `<ProseSection>` -- Styled content area (extract from ContentPage)
**Visual:** The prose styling currently in ContentPage (lines 26-37) extracted into a reusable wrapper
**Where used:** ContentPage, location page (which duplicates the styles), any future content pages
**Current state:** Duplicated between ContentPage.astro (lines 26-37) and location.astro (lines 20-32). Must be unified.

### Priority 2 -- Build Soon (improves existing pages significantly)

#### 6. `<ComparisonTable>` -- Side-by-side comparison
**Visual:** 2-4 column table with header row, alternating row backgrounds, responsive (stacks on mobile)
**Where used:** Governance models comparison, revenue projections, equipment pricing
**Current state:** One raw HTML table in technopark.astro. Governance page uses prose instead of a table.

#### 7. `<ScenarioCard>` -- Colored scenario or future-state card
**Visual:** Card with colored top border or background tint. Title, description, icon. Variants by severity or tone (green/amber/red/blue).
**Where used:** Why page (four scenarios), risk page (risk categories), investors page (three projection scenarios)
**Current state:** The investors page has scenario cards (lines 149-165) but they are not reusable. The why page has no visual treatment for scenarios at all.

#### 8. `<Accordion>` -- Reusable FAQ-style expandable sections
**Visual:** Native `<details>` + `<summary>` with styled open/close indicator, animated expansion
**Where used:** FAQ (already implemented inline), could also serve governance models, risk categories
**Current state:** Implemented inline in faq.astro (lines 116-127). Needs extraction into a component.

#### 9. `<TimelineNode>` -- Single node in a vertical timeline
**Visual:** Dot on vertical line, card with status badge, items with status indicators
**Where used:** Roadmap page
**Current state:** Implemented inline in roadmap.astro. Complex enough to justify componentization for reuse (e.g., a smaller timeline on the investors page showing funding milestones).

#### 10. `<Button>` -- Standardized interactive button
**Visual:** Three variants: primary (green fill), secondary (dark fill), ghost (text + arrow). All with hover state, focus ring, arrow icon option, loading state.
**Where used:** Every page
**Current state:** 5+ button treatments scattered across pages with no shared component.

### Priority 3 -- Build Later (nice-to-have, enhances polish)

#### 11. `<ImageWithCaption>` -- Responsive image with attribution
**Visual:** Rounded image, gradient overlay option, caption text below or overlaid
**Where used:** Location page hero, homepage valley photo, any future imagery
**Current state:** Inline in homepage (lines 202-206) and location hero. Each implements its own attribution styling.

#### 12. `<SectionDivider>` -- Visual break between major content sections
**Visual:** The existing `.accent-line` plus variants: dotted, wave, gradient, with optional centered label
**Where used:** Between sections on all pages
**Current state:** `.accent-line` exists but is the only option.

#### 13. `<SkipLink>` -- Accessibility skip navigation
**Visual:** Visually hidden link that appears on focus, jumps to `<main>`
**Where used:** Base layout
**Current state:** Does not exist. Required for WCAG 2.1 AA compliance.

#### 14. `<BackToTop>` -- Scroll to top button
**Visual:** Small circular button, appears after scrolling past first viewport, fixed bottom-right
**Where used:** All long-form pages (location, technopark, community, faq)
**Current state:** Does not exist.

#### 15. `<RelatedPages>` -- "Continue reading" footer
**Visual:** 2-3 cards at the bottom of a page linking to related content. Card shows page title, first sentence, and an arrow.
**Where used:** All pages, after the CTA section, before the footer
**Current state:** Does not exist. Cross-linking is currently manual and inconsistent.

---

## Appendix A: Accessibility Gaps

| Issue | Severity | Location | Fix |
|-------|----------|----------|-----|
| No skip link | High | Base.astro | Add `<a href="#main" class="sr-only focus:not-sr-only ...">Skip to content</a>` before Nav |
| Mobile menu lacks `aria-expanded` | Medium | Nav.astro line 74 | Add `aria-expanded="false"` to mobile button, toggle with JS |
| More dropdown lacks `aria-expanded` | Medium | Nav.astro line 46 | Add `aria-expanded="false"` to more button |
| Mycelium canvas has no `aria-hidden` | Low | MyceliumCanvas.astro line 2 | Add `aria-hidden="true"` -- decorative element |
| Counter elements announce "0" initially | Medium | Base.astro line 72 | Use `aria-label` with the target value, or set `aria-live="polite"` |
| FAQ accordion has no `id` for deep linking | Low | faq.astro | Add `id` to each `<details>` |
| Color contrast: `bark-400` on `bark-50` | Medium | Multiple labels | Check ratio; `bark-400` (#a89a88) on `bark-50` (#faf9f7) = ~3.1:1, below AA 4.5:1 for normal text |
| Color contrast: `bark-300` on `bark-900` | Medium | Footer small text | Check ratio; `bark-300` (#c9bfb2) on `bark-900` (#1a1610) = ~8.5:1, passes |
| No `lang` attribute on Spanish pages | Low | Base.astro uses `Astro.currentLocale` | Verify this resolves correctly for `/es/` routes |

## Appendix B: Priority Implementation Order

**Phase 1 (immediate -- unblocks all other work):**
1. Fix navigation: add Investors, FAQ, Risk to nav. Restructure dropdown.
2. Extract `<ProseSection>` to eliminate location page duplication.
3. Build `<Breadcrumb>` component. Add to all pillar subpages and risk page.
4. Add skip link to Base.astro.
5. Fix `aria-expanded` on mobile menu and More dropdown.

**Phase 2 (next sprint -- biggest visual impact):**
6. Build `<CalloutBox>`, `<StatBlock>`, `<Button>` components.
7. Redesign Why page: four scenario cards instead of prose.
8. Redesign Governance page: comparison table for three models.
9. Add cross-page links per the interlink map in section 5.
10. Define spacing, shadow, and transition tokens in global.css @theme block.

**Phase 3 (polish -- raises quality ceiling):**
11. Build `<ProjectCard>` component, refactor community page.
12. Build `<ComparisonTable>`, apply to technopark and investors pages.
13. Build `<Accordion>` component, refactor FAQ page.
14. Add "Related Pages" footer to all content pages.
15. Add maps to location and community pages.
16. Expand retreat and infrastructure pages to match technopark depth.

---

*End of audit. All file paths are absolute. All line numbers reference the current source as of 2026-04-02.*

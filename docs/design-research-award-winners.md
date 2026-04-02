# Design Research: Award-Winning Websites for BARK Redesign

**Date:** 2026-04-02
**Purpose:** Actionable design insights from award-winning websites applicable to BARK (Bolivian Ark) — an off-grid tech community site that needs to convey vision, invite participation, and bridge nature-tech aesthetics.

**BARK context:** Community/vision/manifesto site. Dual mode: light biomimetic pages + dark cosmos explorer. Tech-meets-nature. Audience ranges from builders and investors to local Bolivian community. Must feel serious but alive, not corporate.

---

## Part 1: Award-Winning Sites — Detailed Analysis

### 1. Igloo Inc (igloo.inc)
**Award:** Awwwards Site of the Year 2024 + 2025
**Built by:** Abeto
**Why it matters for BARK:** Onchain community site that makes a complex, ideological project feel accessible and immersive. Directly analogous — community + vision + participation.

**Design techniques:**
- Immersive 3D scroll experience with Three.js, GSAP, Svelte, and Vite
- Custom ice crystal growth algorithm (procedural 3D) — shows how generative nature-inspired visuals can define a brand
- Audio synchronized to particle movement (sound design as UX layer)
- Color system: near-black (#222) primary, vibrant orange (#FA5D29) accent, with semantic blues/greens/purples
- Typography: Inter Tight variable font (weights 100-900), fluid sizing via CSS clamp()
- 12-column CSS grid, max-width 1816px, responsive via clamp() not breakpoint jumps
- Smooth scrolling with sticky header, scroll-triggered micro-animations
- Dark mode variant uses #121212 background

**Patterns to steal:**
- Fluid typography with clamp() instead of rigid breakpoints
- Single strong accent color against near-black
- Procedural/generative visuals inspired by natural forms (ice crystals for them, bark/roots/mycelium for us)
- Sound design on key interactions (optional, progressive enhancement)

---

### 2. Lusion v3 (lusion.co)
**Award:** Awwwards Site of the Day (June 2024), Site of the Year 2023
**Built by:** Lusion (in-house)
**Why it matters for BARK:** Proves that a small studio can build world-class 3D web experiences. Their Beethoven model technique is relevant for the /explore cosmos renderer.

**Design techniques:**
- Pre-rendered normal maps, ambient occlusion, thickness, and diffused illumination baked into textures — then combined with matcap images for real-time translucent rendering
- Desktop: 4096 vertex cloth animation at 983KB; Mobile: 1024 vertices at 246KB (aggressive performance optimization)
- Dark/light mode with mouse-interaction-driven transitions
- WebGL scroll navigation — scroll position drives 3D camera and scene changes
- Fullscreen portfolio sections with scroll-snap

**Patterns to steal:**
- Baked lighting technique for the 3D cosmos explorer (pre-render expensive effects, composite in real-time)
- Aggressive mobile optimization (separate geometry LODs)
- Scroll-driven 3D navigation for the dimensional explorer
- Dark-to-light mode as an interactive experience, not just a toggle

---

### 3. Active Theory V6 (activetheory.net)
**Award:** CSS Design Awards Best Innovation 2024 (score: 9.03), Awwwards Site of the Month Feb 2024
**Built by:** Active Theory (in-house)
**Why it matters for BARK:** Combines AI chat, multiplayer, and new rendering in a portfolio. Shows how to layer interactivity without losing content clarity.

**Design techniques:**
- 360 3D environments with scroll-triggered animation
- Interactive animated header that responds to cursor/scroll
- Intro animation sequence that establishes mood before content
- AI chat integration as a navigation tool
- Multiplayer presence (see who else is exploring)

**Patterns to steal:**
- Interactive header that subtly responds to user presence
- AI agent as navigation aid (directly relevant to BARK Phase 4 dimensional explorer)
- Intro animation that sets emotional tone before the user "enters" the site
- Multiplayer/presence indicators for community feeling

---

### 4. Buttermax (buttermax.com)
**Award:** CSS Design Awards Website of the Year 2024 (score: 9.06, highest of all entries)
**Built by:** Buttermax (in-house)
**Why it matters for BARK:** The highest-scoring site across all 2024 CSS Design Awards. "Buttery smooth" transitions are the gold standard for perceived quality.

**Design techniques:**
- Maximalist design exploration with bold color
- Exceptionally smooth transitions between all states
- Performance-first animation (no jank, no dropped frames)
- Strong typographic hierarchy with oversized display type

**Patterns to steal:**
- Frame-perfect transitions as a quality signal — if BARK's page transitions feel this good, it signals "serious builders"
- Maximalist confidence in typography and color (do not default to safe/generic)

---

### 5. Cartier Watches & Wonders 2024
**Award:** CSS Design Awards Best UI Site 2024 (score: 9.01)
**Built by:** Immersive Garden + 60fps
**Why it matters for BARK:** Luxury-tier execution on a product showcase. Shows how shader-based rendering can serve storytelling.

**Design techniques:**
- Multiple custom shaders per render pass
- Intro animation combining tile offset + RGB offset
- Menu animations using saturation, gradient, tile offset, and color variation
- SMAA anti-aliasing for lower pixel-ratio screens
- Meticulous attention to every transition state

**Patterns to steal:**
- Shader-based visual language (for the /explore cosmos renderer)
- Tile/grid-based reveal animations for section transitions
- Anti-aliasing considerations for mid-range devices (BARK audience includes budget hardware)

---

### 6. ATMOS Lamp by AYOCIN (obys.agency project)
**Award:** CSS Design Awards Best UX Site 2024 (score: 8.95), Awwwards SOTD Dec 2024
**Built by:** Obys Agency
**Why it matters for BARK:** Immersive product experience built by the agency that has won Studio of the Year 4 times at CSSDA. Shows how dark themes convey atmosphere without sacrificing UX.

**Design techniques:**
- Immersive dark environment as the primary canvas
- Product-centered narrative with scroll-driven reveals
- Typography principles applied to navigation (Obys built a dedicated microsite on typography principles)
- Custom cursor effects that respond to content zones

**Patterns to steal:**
- Dark environment where content emerges from darkness (relevant to BARK's cosmos explorer)
- Content-zone-aware cursor (changes behavior based on what you're hovering)
- Typography-first navigation design

---

### 7. Don't Board Me (dontboardme.com)
**Award:** Awwwards Site of the Year Users' Choice 2024
**Built by:** The First The Last
**Why it matters for BARK:** Won the people's vote, meaning it resonates with actual users, not just designers. A service/community site with warmth.

**Design techniques:**
- Custom illustrations that reinforce brand without slowing the user journey
- Subtle micro-animations on all interactive elements
- Simple, effective transitions between sections
- Engaging copywriting integrated into the design (words are design elements)
- Illustration style that builds trust and conveys care

**Patterns to steal:**
- Illustration as trust-builder (BARK could use nature/tech fusion illustrations)
- Copywriting as a design material — every heading, every CTA matters
- User-voted winner = proof that warmth and clarity beat technical spectacle
- Micro-animations that are functional, not decorative

---

### 8. Contra Project Cost Calculator (contra.com)
**Award:** CSS Design Awards 2024 nominee (score: 9.00)
**Built by:** Unseen Studio
**Why it matters for BARK:** An interactive tool embedded in a brand site. Relevant to BARK's /participate page which needs investment pathway calculators or contribution flow.

**Design techniques:**
- Interactive calculator as the hero experience
- Data visualization that serves a practical purpose
- Clean information hierarchy despite complex data
- Bold typography with generous whitespace

**Patterns to steal:**
- Interactive tools as content (not just passive reading)
- Practical utility increases engagement and return visits
- For BARK: contribution calculator, skill-matching tool, or investment pathway wizard

---

### 9. Obys Agency (obys.agency)
**Award:** Awwwards Studio of the Year 2023, CSSDA Studio of the Year 2020/2021/2023/2024
**Built by:** Obys (in-house)
**Why it matters for BARK:** Their portfolio is a masterclass in typography + dark themes. 16 Awwwards recognitions, 11 FWA of the Day.

**Design techniques:**
- Typography as the primary design element (not imagery)
- "Crazy mode" — a UI toggle that transforms the grid layout into an experimental display
- Scroll navigation tied to typographic reveals
- Dark palette with precise contrast ratios
- Motion design integrated into every state change

**Patterns to steal:**
- Typography-dominant design (BARK manifesto pages could be type-driven)
- Mode switching (conventional/experimental) — directly maps to BARK's pages/explorer duality
- Dark palette with high typographic contrast

---

### 10. Dennis Snellenberg (dennissnellenberg.com)
**Award:** Awwwards SOTD, Awwwards Jury Member 2026
**Built by:** Dennis Snellenberg (solo)
**Why it matters for BARK:** Solo developer/designer achieving award-winning quality. Proof that a small team (Drow + Oleg) can compete.

**Design techniques:**
- Micro animations on every interaction (hover, scroll, click)
- Smooth page transitions via BARBA.js
- Dark aesthetic with clean typographic hierarchy
- GSAP + Lenis for scroll-driven motion
- WebGL for selected visual elements (not entire page)
- Selective use of Three.js (only where it adds meaning)

**Patterns to steal:**
- BARBA.js for page transitions (works well with Astro's MPA model via View Transitions)
- Selective WebGL (only on /explore, not everywhere)
- Lenis smooth scroll as the foundation layer

---

### 11. Rauno Freiberg (rauno.me)
**Award:** Multiple Awwwards recognitions, widely cited as design reference
**Built by:** Rauno Freiberg (Staff Design Engineer at Vercel)
**Why it matters for BARK:** Desktop-OS-metaphor portfolio. Shows how a conceptual frame (OS for him, dimensional cosmos for BARK) can unify disparate content.

**Design techniques:**
- Entire site styled as a desktop operating system with dock, windows, and interface sounds
- Dark mode as the default, with complementary tones for photography
- Horizontal scrolling galleries for project categories
- Interface sounds on navigation (subtle, optional)
- Built with Next.js + React (code-first, not design-tool-first)
- Playful dock animation when switching sections

**Patterns to steal:**
- A conceptual metaphor that unifies the whole site (BARK = living ecosystem / dimensional space)
- Interface sounds as progressive enhancement
- Horizontal scrolling for curated content sequences (relevant to 1D dimensional renderer)
- Dark mode as default with intentional color accents

---

### 12. Wanted For Nothing (wantedfornoth.ing)
**Award:** Awwwards SOTD, recognized for "perfect balance between professionalism and entertainment"
**Built by:** Wanted For Nothing (in-house)
**Why it matters for BARK:** Dark-themed agency site that uses custom icons and Lottie animation to create a distinctive identity. Shows how illustration + dark theme = unique brand.

**Design techniques:**
- Custom icon system that differentiates from generic dark-themed sites
- Lottie files for animations (created by in-house illustrator + motion designer)
- Three.js + WebGL for 3D elements
- Canvas drawing with vanilla JavaScript for custom effects
- Scroll narrative reveals through an illustrated cityscape
- GSAP ScrollTrigger for scroll-position-driven animation

**Patterns to steal:**
- Custom icon/illustration system (BARK needs its own visual language — bark texture, root networks, mycelium, circuit-nature hybrids)
- Lottie for lightweight repeatable animations
- Scroll-driven narrative for the /vision and /why pages
- Canvas + vanilla JS for custom effects (aligns with BARK's "no heavy frameworks" ethos)

---

### 13. Cosmos Studio (cosmos-studio.com)
**Award:** Orpetron Web Design Awards recognition
**Built by:** Cosmos Studio (in-house)
**Why it matters for BARK:** The name alone is relevant. Dark mode, typography-driven, motion-graphics-integrated design studio from Ukraine.

**Design techniques:**
- Dark mode as primary canvas
- Typography-driven layout (type IS the design)
- Motion graphics integration (Lottie + Webflow)
- Text animation on scroll
- Interactive headers with animated state changes

**Patterns to steal:**
- Typography-driven dark canvas for the /explore cosmos view
- Motion graphics as content transitions (not just decoration)

---

### 14. Hatom (by Immersive Garden)
**Award:** Orpetron recognition, Awwwards-featured
**Built by:** Immersive Garden
**Why it matters for BARK:** A narrative experience depicting "5 stages of a griffin's transformation." Scroll-driven storytelling with audio, liquid effects, and custom cursors. This is exactly the kind of narrative structure BARK's /vision page needs.

**Design techniques:**
- Scroll-driven narrative in 5 stages
- Cursor-based distortion effects (WebGL)
- Audio integration matched to story progression
- Liquid/organic visual effects
- Three.js + Nuxt.js + Lottie stack
- Custom cursor that changes per story section

**Patterns to steal:**
- Multi-stage scroll narrative (BARK /vision: from crisis to building to thriving)
- Organic/liquid visual effects (nature-tech fusion aesthetic)
- Audio as optional narrative enhancement
- Story-section-aware cursor states

---

### 15. STR8FIRE (by Dennis Snellenberg)
**Award:** Orpetron recognition
**Built by:** Dennis Snellenberg
**Why it matters for BARK:** Web3 entertainment site with clean, dark, typography-forward design. Shows how blockchain/DAO-adjacent projects can look refined rather than chaotic.

**Design techniques:**
- Clean minimal dark aesthetic
- Typography-forward design (type carries the message)
- GSAP text animations on scroll
- Creative menu design (not a standard hamburger)
- Webflow + Lenis + BARBA.js stack
- Intro sequence that establishes brand tone

**Patterns to steal:**
- For BARK's governance/DAO page: clean typography proves seriousness
- Creative menu design beyond hamburger (BARK has complex IA)
- Intro animation sequence on first visit

---

### 16. School of Sustainability (Awwwards SOTD)
**Award:** Awwwards Site of the Day
**Why it matters for BARK:** Directly in our content territory — sustainability education.

**Patterns to steal:**
- How an educational/vision institution presents complex ideas accessibly
- Balance between aspirational imagery and practical information
- Environmental credibility through design restraint (not greenwashing with stock nature photos)

---

### 17. ClimeCo / Climate-Adjacent Sites
**Award:** Web Excellence Awards category
**Why it matters for BARK:** Environmental/sustainability sites that go beyond green stock photos.

**Design techniques noted across category:**
- Ripple/water effects on hero images (mouse-driven distortion)
- Black/dark negative space to pull focus to central imagery
- Bold red/orange CTAs against muted earth-tone backgrounds
- Newspaper-style layouts for credibility (Inside Climate News)
- Interactive data visualization for environmental metrics

**Patterns to steal:**
- Mouse-driven organic distortion effects on hero imagery
- Dark space as a design choice for environmental gravitas
- Data visualization for BARK's impact/sustainability metrics

---

## Part 2: Cross-Cutting Design Patterns

### Hero Section Patterns (from top-scoring sites)

| Pattern | Example Sites | BARK Application |
|---------|--------------|------------------|
| Immersive 3D with scroll | Igloo, Lusion, Active Theory | /explore cosmos entry |
| Typography-dominant with kinetic text | Obys, STR8FIRE, Cosmos Studio | / homepage manifesto statement |
| Illustrated narrative | Don't Board Me, Wanted For Nothing | /vision storytelling |
| Interactive tool | Contra Calculator | /participate pathway selector |
| Fullscreen video/ambient | Cartier, ATMOS | /location Yungas footage |

### Navigation Patterns

| Pattern | Example Sites | BARK Application |
|---------|--------------|------------------|
| Sticky header with scroll-reveal | Igloo, most sites | Primary nav |
| Creative non-hamburger menu | STR8FIRE, Obys | Full-site navigation |
| Mode toggle (conventional/experimental) | Obys "crazy mode" | Pages/Explorer switch |
| AI-assisted navigation | Active Theory | Phase 4 explorer |
| Scroll-position indicator | Hatom, Lusion | Long-form pages |

### Animation Techniques (ranked by BARK relevance)

1. **GSAP ScrollTrigger** — scroll-position-driven animation (used by 90%+ of winners). Essential for /vision narrative.
2. **Lenis smooth scrolling** — foundation-level scroll feel. Apply globally.
3. **SplitText/SplitType** — character/word-level text animation for manifesto typography.
4. **BARBA.js page transitions** — smooth multi-page navigation (or Astro View Transitions API).
5. **Lottie** — lightweight, repeatable animations from After Effects. Custom BARK illustrations.
6. **Three.js selective** — only for /explore cosmos, not everywhere.
7. **CSS custom properties** — theme switching (light biomimetic / dark cosmos).
8. **Canvas vanilla JS** — custom particle effects, generative nature visuals.

### Color Strategy (synthesized from winners)

**For BARK pages (light biomimetic):**
- Background: off-white / warm cream (#f8f5f0 range)
- Primary text: near-black (#1a1a1a or #222)
- Accent: earth green (#2d5a27 range) or warm bark brown
- Secondary accent: muted gold or terracotta
- Use oklch() for perceptually uniform color mixing

**For BARK explorer (dark cosmos):**
- Background: deep near-black (#0a0a0a to #121212)
- Primary text: soft white (#e0e0e0, not pure #fff)
- Accent: deep red or amber (#c0392b range, per existing spec)
- Secondary: muted blue or teal for dimensional axes
- Glow effects via box-shadow and text-shadow (not filters, for performance)

### Typography Strategy (from award patterns)

**What the winners do:**
- Variable fonts (Inter Tight, Inter, custom) with weights 100-900
- Fluid sizing via CSS clamp() — no rigid breakpoints
- Oversized display type for hero/manifesto (clamp(42px, 9vw, 170px) range)
- Generous line-height on body (180-200%)
- Letter-spacing adjustments at different sizes (tighter at large, normal at small)

**BARK recommendation:**
- Primary: A variable font with personality but legibility (consider: Space Grotesk, DM Sans, or a custom pairing)
- Display: Something with more character for manifesto headings (consider: Clash Display, Cabinet Grotesk, or a slab serif)
- Monospace: For technical/code content (JetBrains Mono or similar)
- Spanish language consideration: ensure font supports full Latin Extended character set

---

## Part 3: Specific Techniques to Implement

### 1. Scroll-Driven Manifesto (for /vision page)
Technique from: Hatom, Wanted For Nothing, Igloo

```
User scrolls -> text reveals word-by-word or line-by-line
Background shifts from light to dark as narrative deepens
Parallax layers: nature imagery at 0.5x, text at 1x, accent particles at 1.5x
Audio: optional ambient Yungas rainforest soundscape (progressive enhancement)
```

Implementation: GSAP ScrollTrigger + SplitType + CSS custom properties for theme shift.

### 2. Generative Nature Visuals (for hero/backgrounds)
Technique from: Igloo's ice crystal algorithm

```
Canvas-based generative system that "grows" organic patterns:
- Mycelium network branching algorithm
- Root system growth simulation
- Circuit-board-meets-vine hybrid patterns
- Parameters: density, growth speed, color (adapts to page theme)
```

Implementation: Vanilla Canvas API + requestAnimationFrame. Lightweight, no Three.js needed.

### 3. Dual Theme System (pages vs. explorer)
Technique from: Lusion dark/light, Obys "crazy mode"

```css
:root {
  /* Biomimetic light theme (pages) */
  --bark-bg: oklch(0.97 0.01 90);      /* warm cream */
  --bark-text: oklch(0.15 0.02 60);     /* near-black warm */
  --bark-accent: oklch(0.45 0.15 145);  /* forest green */
  --bark-glow: oklch(0.65 0.12 85);     /* warm gold */
}

[data-theme="cosmos"] {
  /* Dark cosmos theme (explorer) */
  --bark-bg: oklch(0.08 0.02 280);      /* deep night */
  --bark-text: oklch(0.88 0.01 90);     /* soft white */
  --bark-accent: oklch(0.55 0.20 25);   /* deep ember */
  --bark-glow: oklch(0.45 0.10 250);    /* cosmic blue */
}
```

Implementation: CSS custom properties + data attribute toggle. Transition between themes with 0.3s ease.

### 4. Audience Pathway Cards (for homepage)
Technique from: Opal Tadpole (simplicity), Contra (interactive utility)

```
Four cards on homepage:
- Builder    -> /participate + /pillars
- Investor   -> /participate + /governance
- Idealist   -> /vision + /why
- Local      -> /location + /pillars (Spanish-first)

Each card: title, 1-line description, custom BARK icon, hover micro-animation
Cards reveal on scroll with staggered timing (GSAP stagger: 0.1s)
```

### 5. Page Transitions
Technique from: Dennis Snellenberg (BARBA.js), Rauno (Next.js)

For Astro: use the View Transitions API (built-in Astro support).
```
Page out: content fades + slides up (0.2s)
Page in: content fades + slides down (0.3s, 0.1s delay)
Shared elements (nav, logo) persist across transition
Theme transitions (pages <-> explorer) use a slower cross-fade (0.5s)
```

---

## Part 4: Technology Stack Recommendations

Based on what the award winners actually use:

| Layer | Winners Use | BARK Should Use | Why |
|-------|------------|-----------------|-----|
| Scroll engine | Lenis (most common) | Lenis | Smooth scroll foundation, 4KB |
| Scroll animation | GSAP ScrollTrigger | GSAP ScrollTrigger | Industry standard, most examples/docs |
| Text animation | SplitType + GSAP | SplitType + GSAP | Character-level control for manifesto |
| Page transitions | BARBA.js or framework | Astro View Transitions | Already in Astro, no extra dep |
| 3D (explorer only) | Three.js | Three.js | Already in plan |
| Lightweight animation | Lottie | Lottie | For custom illustrations/icons |
| Generative visuals | Canvas API | Canvas API | Matches "no heavy frameworks" ethos |
| CSS | Custom properties + clamp() | Same | Variable theming + fluid sizing |
| Fonts | Variable fonts (self-hosted) | Variable fonts (self-hosted) | Performance, no FOUT |

---

## Part 5: Design Principles Extracted from Winners

1. **One strong accent color.** Igloo uses orange. Obys uses white-on-black. BARK should commit to ONE accent per theme (green for pages, ember for cosmos) and use it with conviction.

2. **Typography does the heavy lifting.** The highest-scoring sites (Buttermax 9.06, Active Theory 9.03) treat type as the primary design element, not imagery. BARK's manifesto pages should be type-driven.

3. **Performance is a design decision.** Lusion optimizes to 246KB mobile geometry. Buttermax's entire brand is "buttery smooth." If BARK's scroll stutters on a mid-range phone in Bolivia, the design fails.

4. **Sound design is the secret weapon.** Igloo, Rauno, and Hatom all use audio. For BARK: optional ambient Yungas soundscape on /location, subtle interaction sounds on /explore.

5. **Scroll is the primary interaction.** Every 2024 winner uses scroll as the main navigation mechanism, not clicks. BARK's 1D horizontal renderer already aligns with this.

6. **Mode switching is powerful.** Obys has "crazy mode." Rauno has OS-mode. BARK has pages/explorer. Make the switch feel intentional and dramatic.

7. **Illustrations build trust.** Don't Board Me won the people's vote with illustrations. BARK needs custom visual language (bark textures, root networks, circuit-vine hybrids), not stock photos.

8. **Generative > static.** Igloo's ice crystals, Hatom's liquid effects — procedural/generative visuals feel alive. BARK should grow its visuals, not display them.

9. **Narrative scroll > info dump.** Hatom's 5-stage story, Wanted For Nothing's cityscape reveal. BARK's /vision page should be a journey, not a wall of text.

10. **Small teams win.** Lusion is small. Dennis Snellenberg is solo. Rauno is one person. Award-winning quality is about craft, not headcount. Drow + Oleg can absolutely compete.

---

## Sources

- [Awwwards Site of the Year 2024](https://www.awwwards.com/annual-awards-2024/site-of-the-year)
- [Awwwards Annual Awards 2024](https://www.awwwards.com/annual-awards-2024/)
- [CSS Design Awards 2024 Winners](https://www.cssdesignawards.com/blog/2024-website-of-the-year-winners/414/)
- [CSS Design Awards Website of the Year 2024](https://www.cssdesignawards.com/woty2024)
- [FWA Awards](https://thefwa.com/)
- [Igloo Inc Case Study (Awwwards)](https://www.awwwards.com/igloo-inc-case-study.html)
- [Lusion v3 Case Study (Awwwards)](https://www.awwwards.com/case-study-for-lusion-by-lusion-winner-of-site-of-the-month-may.html)
- [Igloo Inc on landing.love](https://www.landing.love/sites/igloo/)
- [Igloo Inc on Three.js Forum](https://discourse.threejs.org/t/landing-site-igloo-inc/67249)
- [Active Theory V6 (CSSDA)](https://www.cssdesignawards.com/sites/active-theory-v6/45015)
- [ATMOS Lamp by AYOCIN (CSSDA)](https://www.cssdesignawards.com/sites/atmos-lamp-by-ayocin/46604)
- [Obys Agency (Awwwards)](https://www.awwwards.com/obys/)
- [Dennis Snellenberg (Awwwards)](https://www.awwwards.com/dennissnellenberg/)
- [Rauno Freiberg on landing.love](https://www.landing.love/sites/rauno/)
- [Rauno Freiberg Interview (Spaces/Lovers Magazine)](https://spaces.is/loversmagazine/interviews/rauno-freiberg)
- [Wanted For Nothing Case Study (Awwwards)](https://www.awwwards.com/case-study-wanted-for-nothing.html)
- [Don't Board Me (Awwwards)](https://www.awwwards.com/sites/dont-board-me)
- [Award-Winning GSAP Animation Techniques (Medium/Bootcamp)](https://medium.com/design-bootcamp/awwward-winning-animation-techniques-for-websites-cb7c6b5a86ff)
- [10 Award-Winning GSAP Websites (Medium/Orpetron)](https://medium.com/orpetron/10-award-winning-websites-pushing-boundaries-with-gsap-animation-8b83bb45e94f)
- [Awwwards GSAP Category](https://www.awwwards.com/websites/gsap/)
- [Awwwards Storytelling Category](https://www.awwwards.com/websites/storytelling/)
- [Awwwards Green Category](https://www.awwwards.com/websites/green/)
- [Awwwards Social Responsibility Category](https://www.awwwards.com/websites/social-responsibility/)
- [Awwwards Dark Mode Guide](https://www.awwwards.com/dark-mode.html)
- [dark.design (Dark Theme Inspiration)](https://www.dark.design/)
- [Webby Awards Sustainability Winners](https://winners.webbyawards.com/winners/websites-and-mobile-sites/general-desktop-mobile-sites/sustainability-environment)

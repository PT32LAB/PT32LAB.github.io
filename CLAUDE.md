# NetworkTribes Vision Cosmos — Rendering Engine

## What This Is

This repo renders the NetworkTribes knowledge cosmos as an interactive website at pt32lab.github.io. It reads content from the `vision-vault` submodule (pure Obsidian markdown) and builds a dimensional exploration interface.

The core concept: knowledge exists in a multidimensional space. The user controls how many dimensions are visible (1D → 2D → 3D → >3D). Each level has different rendering rules. The first implementation is 1D only — a horizontal scrolling landing page.

## Architecture

```
pt32lab.github.io/
├── CLAUDE.md              ← You are here
├── content/               ← git submodule → pt32lab/vision-vault
│   ├── CLAUDE.md          ← Content contribution guide (DO NOT EDIT here)
│   ├── vision/            ← Core vision notes (clusters from vision board)
│   ├── tools/             ← Practical tools and methods
│   ├── case-studies/      ← Real-world examples
│   └── ...
├── src/
│   ├── build.js           ← Markdown → JSON manifest builder
│   ├── index.html         ← Main entry point
│   ├── css/
│   │   └── main.css       ← Styles (vanilla CSS, no frameworks)
│   ├── js/
│   │   ├── app.js         ← Main application logic
│   │   ├── dimensions.js  ← Dimension switching and projection logic
│   │   ├── renderer-1d.js ← 1D horizontal scroll renderer
│   │   ├── renderer-2d.js ← 2D grid/graph renderer (Phase 2)
│   │   ├── renderer-3d.js ← 3D cosmos renderer (Phase 3)
│   │   └── ai-agent.js    ← AI navigation agent (Phase 4)
│   └── assets/
├── dist/                  ← Built output (generated, gitignored)
├── specs/                 ← Design specs and decisions
│   ├── architecture.md    ← Technical architecture decisions
│   ├── dimensions.md      ← Dimensional system specification
│   ├── ux-flows.md        ← User experience flows
│   └── ...
├── .github/
│   └── workflows/
│       └── deploy.yml     ← Build + deploy to GitHub Pages
├── package.json
└── README.md
```

## Tech Stack

- **Build**: Node.js script (src/build.js) — parses markdown with `remark` + `gray-matter`, outputs JSON manifest
- **Frontend**: Vanilla HTML/CSS/JS. No React, no Vue, no framework. Minimal dependencies.
- **1D Renderer**: CSS scroll-snap horizontal layout + vanilla JS for dimension switching
- **2D Renderer** (Phase 2): D3.js or Sigma.js for graph layout
- **3D Renderer** (Phase 3): Three.js + 3d-force-graph
- **Search** (Phase 2+): Flexsearch or Lunr.js, built at compile time
- **Hosting**: GitHub Pages (static files only, no server)

## Dimensional System

The user controls a "dimensionality" parameter. The interface adapts:

### 1D (default landing — CURRENT PHASE)
- Horizontal scrolling page
- One "axis" active at a time (Overall Vision, Governance, Technology, Economy, etc.)
- Each block shows a vision cluster or topic with title, summary, key points
- "Dig deeper" affordance on each block (currently → "Coming soon" or expands inline)
- Feels like a polished landing page to first-time visitors
- Design must hint at depth — subtle visual cues that there's more beneath the surface

### 2D (Phase 2)
- Grid or graph layout
- Two axes active — nodes positioned by two dimensional scores
- Click a node to expand its content in a side panel
- Filter and search visible

### 3D (Phase 3)
- Three.js force-directed graph with dimensional projection
- Three axes active — true 3D navigation
- Galaxy → Constellation → Star zoom levels

### >3D (Phase 4)
- Multiple linked views or animated axis cycling
- AI agent helps navigate dimensions beyond what's visually representable

## Content Integration

Content comes from the `content/` submodule. The build script:

1. Reads all .md files from content/
2. Parses YAML frontmatter (dimensions, cluster, type, status, tags, related)
3. Renders markdown body to HTML
4. Outputs `dist/manifest.json` — array of all notes with metadata + rendered HTML
5. Outputs `dist/index.html` — the site, with manifest embedded or loaded async

The manifest is the single source of truth for the frontend. All renderers (1D, 2D, 3D) read from the same manifest.

## Key Conventions

### Code Style
- Vanilla JS with ES modules (type="module" in script tags)
- No TypeScript (keep barrier to contribution low)
- No build-time CSS processing (vanilla CSS with custom properties for theming)
- Meaningful variable names, comments on non-obvious logic
- Each renderer is a separate module with a standard interface:
  ```js
  export function render(manifest, container, activeDimensions) { ... }
  export function transition(fromDimensions, toDimensions) { ... }
  export function destroy() { ... }
  ```

### Git Workflow
- `main` branch = production (auto-deploys)
- Feature branches for new renderers or major changes
- Content changes go to `vision-vault` repo, not here
- PRs welcome from any agent or human — CLAUDE.md is the onboarding doc

### What NOT to Do
- Don't add content here. Content lives in vision-vault.
- Don't use heavy frameworks. Vanilla JS + minimal deps.
- Don't optimize prematurely. Ship working, iterate.
- Don't break the 1D view when building 2D/3D. Each renderer is independent.
- Don't hardcode content. Everything comes from the manifest.

## Current State

**Phase 1 (1D Landing) — IN PROGRESS**

Tasks remaining:
- [ ] Set up build.js (markdown → manifest pipeline)
- [ ] Create index.html with horizontal scroll structure
- [ ] Implement dimension switcher (tab bar or similar)
- [ ] Style the 1D blocks (title, summary, visual hint of depth)
- [ ] "Dig deeper" click → inline expand or "Coming soon"
- [ ] Direct markdown link support (anchor links to any piece)
- [ ] GitHub Actions deploy workflow
- [ ] Mobile responsive layout

## Specs

Before implementing anything, read the relevant spec in `specs/`. If a spec doesn't exist for what you're building, create one first and get it reviewed.

Key specs:
- `specs/dimensions.md` — The dimensional frontmatter schema and projection rules
- `specs/architecture.md` — Build pipeline, deployment, content flow
- `specs/ux-flows.md` — User journeys for each dimensionality level

## How to Run Locally

```bash
git clone --recursive https://github.com/pt32lab/pt32lab.github.io.git
cd pt32lab.github.io
npm install
npm run build    # Builds manifest from content/ submodule
npm run dev      # Serves dist/ with live reload
```

## Multi-Agent Collaboration

Multiple agents (from different team members) may work on this repo simultaneously.

Rules:
- Always pull before starting work
- Work on feature branches, not main
- Keep changes small and focused — one feature per PR
- If you're an agent working on content, go to the vision-vault repo instead
- If you're unsure whether something is a content change or a code change: content = "what we say", code = "how we display it"

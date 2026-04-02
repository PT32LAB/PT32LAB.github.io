# Implementation Plan

## Phase 0: Repo Setup (Day 1)

### Tasks
1. Create `pt32lab/vision-vault` repo on GitHub
   - Add CLAUDE.md
   - Add .gitignore (exclude .obsidian/workspace.json, .DS_Store)
   - Create folder structure: vision/, tools/, case-studies/, references/, places/, failure-museum/
   - Add 3-5 seed notes (vision cluster _index.md files) so the build has something to render

2. Create `pt32lab/pt32lab.github.io` repo on GitHub
   - Add CLAUDE.md
   - Add vision-vault as git submodule at `content/`
   - `npm init` with minimal package.json
   - Add dependencies: `gray-matter`, `remark`, `remark-html`, `remark-gfm`
   - Create .github/workflows/deploy.yml
   - Create specs/ folder with this plan and dimensions.md

3. Verify: push to main → GitHub Actions builds → site deploys

### Exit criteria
- Empty site deploys to pt32lab.github.io
- Submodule pulls vault content correctly
- GitHub Actions workflow runs on push to either repo

---

## Phase 1: 1D Landing Page (Weeks 1-2)

This is the priority. A visitor landing on pt32lab.github.io should see a polished, intriguing horizontal-scroll page that presents the NetworkTribes vision without requiring any technical understanding.

### 1.1 Build Pipeline (src/build.js)

```
content/**/*.md → parse frontmatter + render body → manifest.json
```

The manifest is an array of objects:
```json
[
  {
    "id": "vision/governance/_index",
    "title": "Governing Without Governments",
    "description": "...",
    "type": "concept",
    "cluster": "governance",
    "status": "research",
    "dimensions": { "autonomy": 0.9, ... },
    "tags": ["governance", "horizontal"],
    "related": ["ayllu-system", "sociocracy"],
    "html": "<p>Rendered HTML content...</p>",
    "path": "vision/governance/_index.md",
    "isIndex": true
  }
]
```

Index notes (`_index.md`) are special — they represent their cluster and appear as 1D blocks.

### 1.2 The 1D View

**Layout:** Full-viewport horizontal scroll using CSS scroll-snap.

**Structure:**
```
[Hero/Intro] → [Cluster 1] → [Cluster 2] → ... → [CTA/Join]
```

**Hero block:** "NetworkTribes" title + one-paragraph manifesto + the dimension switcher.

**Cluster blocks:** Each vision cluster gets a block. Shows:
- Cluster name (large)
- Summary paragraph (from _index.md)
- 3-5 key topics within that cluster (from child notes)
- Visual depth indicator — subtle animation, parallax, or layering that hints "there's more"
- "Dig deeper" control → currently shows "Coming soon" toast or expands inline with a few more items

**Dimension switcher:** A tab bar or segmented control fixed at the top.
- "Overview" (default) — shows all clusters in vision-board order
- "Governance" — reorders/filters to show governance-relevant content across all clusters
- "Technology" — same for tech
- etc.

When switching dimensions, blocks animate (reorder, some fade out, some appear). This is the first hint that the knowledge has more structure than a flat page.

**Direct links:** Every block and every item within a block gets an anchor. URL format: `pt32lab.github.io/#governance` or `pt32lab.github.io/#governance/ayllu-system`. These are shareable.

### 1.3 Visual Design

**Principles:**
- Dark theme (space/cosmos feel — sets up the eventual 3D galaxy)
- Subtle depth cues: shadows, parallax layers, slight perspective on scroll
- Typography-first: large readable type, generous whitespace
- Accent color: deep red (#C0392B) — inherited from Radio Doomsday branding
- Each cluster has a distinct secondary color for its block
- No stock images. If imagery is needed, use abstract/geometric patterns or generated SVGs
- Mobile: vertical scroll (not horizontal), blocks stack

**The "depth" feeling:**
On each cluster block, behind the main content, render faint dots/nodes representing the child notes in that cluster. They float gently. This visual whisper says "there's a graph of knowledge behind this summary" without requiring the user to understand graphs. When "dig deeper" is available (Phase 2), clicking those dots will zoom into the 2D view of that cluster.

### 1.4 Tasks
- [ ] build.js: read content/, parse, output manifest.json
- [ ] index.html: horizontal scroll layout with scroll-snap
- [ ] Dimension switcher component
- [ ] Cluster block component (reads from manifest)
- [ ] Hero block with manifesto text
- [ ] CTA/join block at the end
- [ ] "Dig deeper" stubs (expand inline or "coming soon")
- [ ] Anchor link routing (#cluster, #cluster/note)
- [ ] Dark theme CSS with depth cues
- [ ] Background node particles (subtle, decorative)
- [ ] Mobile responsive (vertical stack)
- [ ] GitHub Actions: build + deploy on push

### Exit criteria
- Site renders all vault clusters as horizontal scroll
- Dimension switcher reorders content
- Direct links work
- Looks good on mobile
- Lighthouse score > 90

---

## Phase 2: 2D Expansion (Weeks 3-5)

"Dig deeper" becomes real. Clicking it transitions the current cluster block into a 2D graph/grid view showing all notes in that cluster.

### Key additions
- 2D renderer using D3.js force-directed layout or simple grid
- Two active dimensions — node positions driven by dimensional scores
- Side panel for reading individual notes
- Full-text search (Flexsearch, built at compile time into searchindex.json)
- Backlinks computed during build and displayed on note detail view
- Smooth transition animation from 1D block → 2D expanded view

### Exit criteria
- Can explore any cluster in 2D
- Can read full note content in side panel
- Search works
- Transition from 1D → 2D is smooth

---

## Phase 3: 3D Cosmos (Weeks 6-9)

The full "cognitive galaxy" experience.

### Key additions
- 3D renderer using Three.js + 3d-force-graph (or custom)
- Three active dimensions — true 3D spatial positioning
- Galaxy → Constellation → Star zoom levels
- Cross-cluster navigation (not just within one cluster)
- Dimensional axis selector as a 2D overlay on the 3D view
- Performance optimization for larger vault

### Exit criteria
- Can navigate entire knowledge base in 3D
- Dimension switching morphs node positions smoothly
- Zoom levels work intuitively
- Performance smooth with 200+ nodes

---

## Phase 4: AI Agent + Community (Weeks 10+)

### Key additions
- AI navigation agent (Claude API, client-side)
- Agent context includes: current view, active dimensions, visible nodes, session history
- Natural language queries: "show me governance tools for small groups"
- Point-of-view summaries: "summarize what I'm looking at"
- Community contribution via Decap CMS (browser-based markdown editor → GitHub)
- User accounts / saved views (could be as simple as URL state encoding)

### Exit criteria
- Agent can answer questions about the knowledge base
- Agent can highlight/filter nodes based on queries
- Non-technical contributors can add content via browser

---

## Cross-Cutting Concerns

### Performance budget
- Initial page load: < 200KB (HTML + CSS + JS, before manifest)
- Manifest: grows with content, lazy-load if > 500KB
- 3D assets: loaded only when entering 3D view
- Target: Lighthouse performance > 90 in all phases

### Accessibility
- 1D view must be fully accessible (keyboard nav, screen reader, semantic HTML)
- 2D/3D views: provide text-based fallback / search as alternative navigation
- Respect prefers-reduced-motion for animations

### Analytics
- Simple, privacy-respecting (Plausible or self-hosted, no Google Analytics)
- Track: which dimensions people explore, how deep they go, what they search for
- This data informs content priorities

### Content-code boundary
- Rendering code NEVER contains content text. All text comes from manifest.
- Exception: the hero/intro block text and UI labels (dimension names, button text)
- Even UI labels should eventually be configurable

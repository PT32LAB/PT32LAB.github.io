# Dimensional System Specification

## Core Concept

Every piece of knowledge in the vault exists in a multidimensional space. Each dimension represents a conceptual axis along which that knowledge can be measured. The user controls how many and which dimensions are active, and the interface adapts its rendering accordingly.

## Dimensions (v1)

| Dimension | Key | Question It Answers | Low (0.0) | High (1.0) |
|-----------|-----|---------------------|-----------|------------|
| Autonomy | autonomy | How independent is this from state/corporate systems? | Requires institutional support | Fully self-governing |
| Technical Complexity | tech_complexity | How much technical infrastructure does this require? | No-tech, purely social/human | Requires advanced engineering |
| Governance | governance | How relevant is this to decision-making and organization? | No governance implications | Core governance mechanism |
| Economic | economic | How much does this contribute to economic self-sufficiency? | No economic function | Primary economic engine |
| Resilience | resilience | How much does this improve crisis survival? | No resilience benefit | Critical for survival |
| Scalability | scalability | Does this work at large scale? | Only works for < 20 people | Works for thousands |

These six dimensions are the initial set. The system is designed to support adding new dimensions without code changes — any key in the `dimensions:` frontmatter object becomes available as an axis.

## Projection Rules

### 1D Projection
- One dimension active (or "overview" which is a meta-dimension)
- Content sorted/filtered by the active dimension
- **Overview mode**: clusters displayed in narrative order (crisis → governance → technology → economy → human potential → culture)
- **Dimension mode**: all content across all clusters, sorted by that dimension's score (highest first). Content without a score for that dimension is grouped at the end as "unscored."
- Switching dimensions triggers: reorder animation (blocks slide to new positions)

### 2D Projection
- Two dimensions active → X and Y axes
- Each node positioned at (dimension_A_score, dimension_B_score)
- Nodes without scores for active dimensions: clustered at origin or in an "unscored" region
- Force-directed layout adds organic clustering among linked nodes within their dimensional position
- Transition: when switching an axis, nodes animate to new positions (spring physics, ~500ms)

### 3D Projection
- Three dimensions active → X, Y, Z axes
- Same positioning logic as 2D but in Three.js 3D space
- Camera controls: orbit, zoom, pan
- Node size: proportional to number of connections (more connected = larger)
- Node color: by cluster (consistent across all views)
- Edge rendering: faint lines between `related:` notes, opacity based on distance

### >3D Projection
- AI-assisted navigation required
- Multiple linked 2D/3D views, or animated axis cycling
- Agent suggests which dimensions are most relevant to the user's query
- Not specified in detail — design after Phase 3 based on learnings

## Visual Mapping

### Node Shapes (by type)
| Type | Shape | Rationale |
|------|-------|-----------|
| concept | Circle | Fundamental, atomic |
| tool | Hexagon | Practical, engineered |
| practice | Diamond | Process, dynamic |
| case-study | Square | Grounded, factual |
| reference | Triangle | Points elsewhere |
| place | Star/pin | Geographic |

### Node Colors (by cluster)
| Cluster | Color | Hex |
|---------|-------|-----|
| crisis-autonomy | Cyan | #00BCD4 |
| governance | Purple | #9C27B0 |
| technology-sovereignty | Green | #4CAF50 |
| regional-economy | Gold | #FFC107 |
| human-potential | Pink | #E91E63 |
| culture-media | Orange | #FF5722 |

These match the sticky note colors from the original vision board where possible.

### Status Indicators
| Status | Visual |
|--------|--------|
| seed | Pulsing gently (this needs attention) |
| research | Solid but slightly transparent |
| tested | Solid, full opacity |
| deployed | Solid + subtle glow (this is real) |

## URL State Encoding

The current view state is encoded in the URL hash for shareability:

```
pt32lab.github.io/#d=1&axis=overview
pt32lab.github.io/#d=1&axis=governance
pt32lab.github.io/#d=2&x=autonomy&y=tech_complexity
pt32lab.github.io/#d=3&x=autonomy&y=governance&z=resilience&focus=ayllu-system
```

Parameters:
- `d`: dimensionality level (1, 2, 3)
- `axis`: active axis for 1D
- `x`, `y`, `z`: active dimensions for 2D/3D
- `focus`: currently selected note (opens detail view)
- `cluster`: filter to specific cluster
- `q`: search query

All state changes update the URL hash. Browser back/forward navigates view history.

## Adding New Dimensions

To add a new dimension:
1. Add the key to notes' frontmatter in vision-vault
2. The build script automatically picks it up and includes it in the manifest
3. The dimension switcher UI renders all dimensions found in the manifest
4. No code changes needed in the rendering engine

The dimension switcher reads available dimensions from the manifest metadata, not from a hardcoded list.

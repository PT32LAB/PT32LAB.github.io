# BARK Website — Project Knowledge

## Current State

| Metric | Value |
|--------|-------|
| Pages | 64 (28 EN + 28 ES + 4 landing + root + 404) |
| Commits | 73 |
| Lines | 24,000+ |
| Lighthouse (mobile) | 99 / 95 / 100 / 100 |
| GitHub Issues | 33 total, 0 open |
| Dark mode | Yes (auto + toggle) |
| Phase | 0 — Research. 1-2 people with AI. |

## Stack

- Astro 6 + Tailwind CSS v4 + TypeScript
- Fonts: Libre Franklin (display sans) + Lora (body serif)
- GitHub Pages via GitHub Actions
- No client frameworks (zero JS by default from Astro)

## Voice & Terminology

| Use | Don't Use |
|-----|-----------|
| Semi-autonomous | Off-grid |
| Components | Pillars / Organs |
| Initial spark (for Drow) | Founder / Co-founder |
| Assessed and categorized | Verified (on factcheck page) |
| Haraway/Tsing/Latour register | AI-sounding patterns |

**Kill patterns:** "Whether you", "Here's how", "Looking for", "Ready to?", "Designed to", "Built for"

## Legal Facts (Verified)

- Foreigners CAN join cooperatives (Ley 356 Art. 33)
- Foreigners CANNOT hold leadership (Art. 65 — needs Bolivian citizen)
- Cooperatives are NOT tax-free (25% IUE + 13% IVA + 3% IT)
- Only mining cooperatives are near-zero tax

## 3 Core Concepts

1. **Market Connector** — buy local surplus, process, connect to international markets
2. **Retreat Community Engine** — guests become contributors
3. **Longevity District** — aspirational, clearly labeled, 4-phase (technoshamanic → medical → anti-aging → longevity)

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| Photo heroes on all pages | CSS-only heroes render as black voids without JS |
| Serif body text (Lora) | Editorial credibility, not startup energy |
| Radical honesty in investors page | "BARK does not yet exist" — trust-building by persona consensus |
| Landing pages at /landing/ (no locale) | Shared across EN/ES, skip getLocalePath() |
| Max 2-3 concurrent agents | 4+ triggers API rate limits (429) |
| Split agent tasks to 5-7 files | Large tasks stall at 60-80% |
| Codex creates issues, Nous implements | Different strengths — Codex specs are often sharper than first implementation |

## Related Projects

| Project | Relationship |
|---------|-------------|
| Ark Instinct (`homototus/ark-instinct`) | Crisis ontology, consensus model — feeds /resilience and /scenarios |
| Organon (`organon.nousaeternos.org`) | Evidence methodology — GRADE framework informs factcheck approach |
| Veritas (`homototus/veritas`) | Factcheck protocol — born from this project |

## Resume Command

```
cd /home/drow/PT32LAB.github.io && cat CLAUDE.md && cat KNOWLEDGE.md && cat TASKS.md
```

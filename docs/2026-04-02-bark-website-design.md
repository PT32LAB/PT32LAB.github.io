# BARK (Bolivian Ark) / NetworkTribes — Website Design Spec

## Project

Off-grid community in Coroico area (Yungas, Bolivia) combining: techno park, startup incubator, trading house, technoshamanic retreat center, and semi-autonomous infrastructure integrated with local community and economy.

Motivated by civilizational risk — preserving humanistic values, human diversity, and sustainable technology. Open-source, coop/DAO-based, DIY ethos. Open for investment (monetary, workforce, IP).

**Merged vision:** The site serves two purposes:
1. **Accessible front door** (Astro pages) — traditional page-based site explaining the vision, pillars, governance, and participation pathways to all audiences
2. **Deep exploration** (Dimensional cosmos) — Oleg's NetworkTribes dimensional knowledge explorer for deep-diving into the knowledge base

## Team

- Drow, Oleg (+ future contributors)

## Decisions

- **Stack:** Astro + GitHub Pages (PT32LAB.github.io)
- **Languages:** English + Spanish (i18n)
- **Audience:** Universal — builders, investors, ideological allies, local Bolivian community
- **Stage:** Early-to-mid (team forming, area identified, seeking co-creators)
- **Aesthetic:** Tech meets nature (biomimetic, green-digital) for pages; dark cosmos theme for the dimensional explorer
- **Crisis thesis:** Dedicated /why page, homepage leads with positive vision
- **Governance:** Exploring models (DAO, coop, hybrid) — open for community input
- **Content:** Pages are authored directly in Astro; dimensional explorer reads from vision-vault manifest

## Site Structure

```
/ .................. Hero + mission + 4 audience pathway cards
/vision ............ Positive vision: what we're building and why
/why ............... Crisis thesis deep-dive (separate from homepage)
/pillars/
  technopark ....... R&D lab, maker space, open-source tech
  incubator ........ Startup support, local/global ventures
  trading .......... Trading house, economic self-sufficiency
  retreat .......... Technoshamanic center, wellness, culture
  infrastructure ... Energy, water, food, connectivity
/location .......... Why Coroico, Yungas geography, climate, context
/governance ........ Coop vs DAO vs hybrid, community input
/participate ....... Investment pathways, roles, contact, GitHub guide
/explore ........... Dimensional knowledge cosmos (Oleg's NetworkTribes system)
/docs .............. Technical specs, DIY guides, decision logs
/blog .............. Progress updates, essays, research
```

## Key Design Principles

1. Homepage leads with vision, not fear — crisis thesis is opt-in via /why
2. Audience pathway cards route visitors to relevant content
3. Five pillars structure gives each component depth
4. /explore bridges to Oleg's dimensional system for deep knowledge navigation
5. /docs embodies open-source ethos, grows over time
6. Everything funnels toward /participate
7. Bilingual from day one (EN/ES)

## Integration with Oleg's Dimensional System

See `specs/dimensions.md` and `specs/implementation-plan.md` for the full dimensional spec.

The /explore page will host the dimensional renderer (initially 1D horizontal scroll, expanding to 2D/3D). Content for the explorer comes from the vision-vault submodule via a build-time manifest. The Astro build pipeline will include a step to generate this manifest.

The two halves share navigation and branding but have distinct visual modes:
- **Pages:** Light biomimetic theme (bark-green, bark-cream, nature + tech fusion)
- **Explorer:** Dark cosmos theme (bark-night, deep red accent, particle effects)

# BARK Website — Information Architecture Review

**Date:** 2026-04-02  
**Author:** Designer (structure audit)  
**Scope:** Full site IA analysis — all 27 English page files, nav structure, cross-linking

---

## Page Inventory

Every page in `src/pages/en/`, sorted by line count. "Images" means the page references `<img>` tags or `photo-frame` elements. "Evidence" means the page uses `.evidence` callouts, `blockquote` pull-quotes, or data tables.

| # | Page | Lines | Group | Images | Evidence/Tables | Purpose |
|---|------|-------|-------|--------|-----------------|---------|
| 1 | resilience.astro | 987 | Project | Yes | 6 tables, 8 source blocks | Why Bolivia in a crisis — nuclear safety, violence data, economic analysis, scenario ratings |
| 2 | economy.astro | 502 | Learn | No | Multiple tables | Bolivia's economy — GDP, currency, reserves, inflation, trade |
| 3 | traditions.astro | 452 | Live | Yes (1) | No tables | Aymara heritage, Afro-Bolivian culture, ayllu governance, festivals, coca, language |
| 4 | health.astro | 425 | Live | No | Stat blocks | Altitude, medical infrastructure, preventive health, honest risks, longevity research |
| 5 | technopark.astro | 423 | Build | No | 3 tables | Equipment, pricing, fabrication, civilization maintenance, self-replicating workshop |
| 6 | community.astro | 384 | Learn | Yes (1) | No tables | Neighbors and allies — local, regional, global projects, governance experiments |
| 7 | safety.astro | 399 | Live | Yes (1) | 1 table | Crime data, travel advisories, coca context, political stability, natural hazards, security measures |
| 8 | partners.astro | 370 | Join | No | No tables | Development, academic, tech, network partners + government programs |
| 9 | investors.astro | 352 | Join | No | 1 table | Investment thesis, 5 reasons, revenue projections, modalities, government alignment |
| 10 | team.astro | 321 | Project | No | No tables | Founders, advisors, AI team, open positions |
| 11 | index.astro | 305 | — | Yes (3) | Stat counters | Homepage — hero, value prop, thesis, pathways, stats, pillars, CTA |
| 12 | explore.astro | 229 | Learn | Canvas | Radar charts | Dimensional knowledge explorer (interactive) |
| 13 | location.astro | 181 | Learn | Yes (1) | No tables | Geography, climate, biodiversity, demographics, access, resources, safety, legal |
| 14 | roadmap.astro | 197 | Project | No | Timeline | Phase 0-4 timeline with status |
| 15 | trading.astro | 167 | Build | No | 2 tables | Market connector model, export goods, import needs, trade routes |
| 16 | retreat.astro | 167 | Build/Live | No | 1 table | Technoshamanic retreat, modalities, market comparison, revenue, longevity district |
| 17 | infrastructure.astro | 164 | Build | Yes (1 SVG) | Evidence boxes | Energy, water, food, connectivity, design principles |
| 18 | faq.astro | 149 | Learn | No | Accordion | 16 Q&As across 4 sections |
| 19 | governance.astro | 104 | Learn | Yes (1) | No tables | Cooperative, DAO, hybrid models, real-world lessons |
| 20 | why.astro | 107 | Project | Yes (1) | Pull-quote | The convergence argument, four futures, why Bolivia, why now |
| 21 | incubator.astro | 102 | Build | No | No tables | Startup opportunities, what we provide, open knowledge |
| 22 | risk.astro | 89 | Learn | No | No tables | Risk disclosure — project, financial, location, community, legal |
| 23 | participate.astro | 81 | Join | No | No tables | 5 ways to participate + open source + contact CTA |
| 24 | glossary.astro | 73 | Learn | No | No tables | ~25 term definitions |
| 25 | gallery.astro | 66 | Learn | Yes (7) | No | Photo gallery of Yungas |
| 26 | vision.astro | 61 | Project | Yes (1) | Pull-quote | Core vision — community, open source, embedded, capability |
| 27 | pillars/index.astro | 42 | Build | Icons | No | Hub page listing all 5 components |

**Total lines:** ~6,900 across 27 files.

---

## 1. Pages That Should MERGE

### A. safety.astro + risk.astro --> "Honest Assessment"

**Current state:**
- `safety.astro` (399 lines): Crime data, travel advisories, coca economy, political stability, natural hazards, BARK security measures.
- `risk.astro` (89 lines): Project risks, financial risks, location risks, community risks, legal risks.

**Overlap:** Both cover Bolivia's dangers. Safety covers location-specific dangers (crime, hazards, politics). Risk covers project-specific dangers (team, funding, failure). The safety page CTA literally says "Read our full risk disclosure" and links to risk.

**Verdict: MERGE.** Combine into one page called "Honest Assessment" or "Risks & Realities." The safety content becomes the "Location Risks" section; the risk content becomes the "Project Risks" section. One page a visitor reads once, with a TOC to navigate. The current risk page at 89 lines is too thin to justify its own nav slot.

**Estimated merged size:** ~480 lines. Healthy for a single page with the TOC sidebar.

### B. resilience.astro absorbs the merged safety+risk content (OR stays separate)

**Current state:**
- `resilience.astro` (987 lines): The longest page on the site. Covers nuclear safety, geographic remoteness, low violence, indigenous resilience, food security, water, economy weaknesses, scenario ratings.
- This page has massive overlap with safety.astro on violence data (both have homicide comparison tables), political stability, and natural hazards.

**Overlap:** The homicide comparison table appears in BOTH resilience.astro and safety.astro with slightly different country sets. The political stability section covers similar ground in both. The natural hazards discussion also overlaps.

**Verdict: Resilience should be trimmed, not merged.** It is too long at 987 lines. Extract the duplicated homicide data and political stability content (which now lives in the merged safety+risk page). Resilience should focus on what makes it unique: nuclear safety analysis, geographic remoteness, indigenous resilience structures, food security at altitude, and the scenario rating matrix. Target: ~600 lines after deduplication.

### C. community.astro + partners.astro --> "Network"

**Current state:**
- `community.astro` (384 lines): "Our Neighbors & Allies" — local Yungas projects, regional Latin American projects, global inspiration, governance experiments.
- `partners.astro` (370 lines): "Partners & Contributors" — development partners, academic partners, tech/open-source, network organizations, government programs.

**Overlap:** Both are about who BARK connects with. Community covers projects BARK learns from. Partners covers organizations BARK could work with. The visitor sees two nav items that answer the same question: "Who else is involved?"

**Additional overlap:** Community re-explains the ayllu system (already covered in traditions.astro and governance.astro). Community re-describes OSE, Fab Foundation, Precious Plastic, Transition Towns (already covered in partners.astro and technopark.astro).

**Verdict: MERGE into "Network & Partners."** Structure: (1) Local Neighbors (Afro-Bolivian communities, CENAPROC, Carmen Pampa, La Senda Verde), (2) Development & Academic Partners, (3) Tech & Open Source, (4) Government Programs, (5) Global Inspiration. Remove duplicate ayllu and OSE content. Target: ~500 lines.

### D. vision.astro and why.astro should remain separate but cross-link harder

**Current state:**
- `vision.astro` (61 lines): What BARK is — community not compound, open source, embedded, capability.
- `why.astro` (107 lines): Why an ark — convergence of risks, four futures, why Bolivia, why now.

**Overlap assessment:** These are actually well-differentiated. Vision = "what." Why = "why." The concern about duplication is not supported by the content. Vision is short and declarative. Why builds the argument.

**Verdict: KEEP SEPARATE.** But vision at 61 lines is thin. It should be the emotional anchor — the first page a visitor reads after the homepage. Consider expanding it to ~100 lines by adding a stronger opening hook and more vivid description of daily life at BARK.

---

## 2. Pages That Are Too THIN

| Page | Lines | Assessment |
|------|-------|------------|
| pillars/index.astro | 42 | **Fine.** It is a hub page with links. Its job is routing, not content. |
| vision.astro | 61 | **Borderline thin.** The most important page after the homepage and it is the shortest content page on the site. Needs 30-40 more lines of material — a stronger opening, a "what daily life looks like" section, or a more vivid picture of the functioning community. |
| gallery.astro | 66 | **Fine for now.** Will grow as photos are added. Structure is correct. |
| glossary.astro | 73 | **Fine.** Reference page. Will grow naturally. |
| participate.astro | 81 | **Adequate but could be stronger.** The 5 participation modes are well-structured. Consider adding a "what happens after you write to us" section (1-2 paragraphs on the process). |
| risk.astro | 89 | **Too thin to stand alone.** Should merge with safety.astro as recommended above. |

---

## 3. Pages That Are Too LONG

| Page | Lines | Assessment |
|------|-------|------------|
| resilience.astro | 987 | **Too long.** Nearly 1,000 lines. The page tries to be both a research document and a persuasive argument. Visitors will not read it end to end. **Action:** Deduplicate content that now exists in safety.astro (homicide tables, political stability). Trim the economic vulnerability section (which overlaps with economy.astro). Target: 550-650 lines. The scenario rating matrix at the end is excellent and should stay. |
| economy.astro | 502 | **Borderline.** Dense with data tables and economic analysis. The TOC sidebar helps. Acceptable if the visitor understands this is a reference page, not a narrative page. No action needed — but it should not grow further. |
| traditions.astro | 452 | **Acceptable.** Rich cultural content that cannot be compressed without losing respect for the subject matter. The Aymara phrases section and festival calendar are reference material worth keeping. No action. |
| technopark.astro | 423 | **Acceptable but repetitive.** The "Self-Replicating Workshop" section (lines ~400-440) repeats content from the "Fabrication & Making" section above it — Gingery, RepRap, OSE, and Precious Plastic are described twice. **Action:** Consolidate the two fabrication sections. This saves ~50 lines and removes reader confusion. |

---

## 4. Is the Nav Tree Optimal?

### Current structure:

```
Project (5)     Build (6)           Live (5)          Join (3)        Learn (9)
  Vision          Pillars Hub         Retreat Center     Investors       Location
  Why             Techno Park         Longevity*         Participate     Economy
  Roadmap         Incubator           Health             Partners        Governance
  Team            Trading House       Safety                             Community
  Resilience      Infrastructure      Traditions                         FAQ
                                                                         Risk
                                                                         Explore
                                                                         Glossary
                                                                         Gallery
```

*Longevity District is an anchor link to retreat.astro#longevity, not its own page.

### Problems:

**1. "Learn" has 9 items. That is too many.**
A dropdown with 9 items causes decision paralysis. The visitor's eye glazes. Nielsen Norman Group research consistently shows that mega-menus with more than 7 items per column reduce click-through rates. Nine items in a single dropdown column is the worst case — long enough to feel overwhelming, not organized enough to scan.

**2. "Learn" is a vague label.**
"Learn" could describe every page on the site. It does not tell the visitor what kind of content lives there. Compare with "Project" (clear), "Build" (clear), "Live" (clear), "Join" (clear). "Learn" is the junk drawer.

**3. "Resilience" is misplaced in "Project."**
Resilience is a 987-line research document about Bolivia's safety profile. It belongs with the due-diligence content (safety, risk, economy), not with the project identity pages (vision, why, roadmap, team). A visitor clicking "Project" expects to understand BARK's mission and plan. They do not expect a nuclear targeting analysis.

**4. "Retreat Center" and "Longevity District" are split across Build and Live.**
The retreat center page lives under Build (as a pillar), but also appears under Live. The longevity district is an anchor link within the retreat page. This is confusing — is the retreat about building the business or about living there?

**5. "Safety" and "Risk" are in different groups.**
Safety is under Live. Risk is under Learn. The visitor doing due diligence has to hunt in two different dropdowns. These should be adjacent.

**6. "Community" has been renamed to "Our Neighbors & Allies" but the nav still says "Community."**
The page title says "Our Neighbors & Allies" but the nav label says "Community." This creates a disconnect — the visitor clicks expecting community life info and gets a directory of partner projects.

### Does the journey make sense?

The intended flow is: understand (Project) -> see what's built (Build) -> decide to live there (Live) -> join (Join) -> learn details (Learn).

This is reasonable in theory but breaks in practice because:
- A visitor doing due diligence (considering investing or relocating) needs safety, risk, economy, health, and location information up front, not buried in the last dropdown.
- The "convince" phase (why this is safe, why the economics work) is scattered across 3 groups: resilience (Project), safety (Live), risk (Learn), economy (Learn).
- The "act" phase is split between investors (Join) and participate (Join) — this is fine.

---

## 5. Proposed Optimal Structure

### Merges applied:
- safety.astro + risk.astro --> `risks.astro` ("Risks & Realities")
- community.astro + partners.astro --> `network.astro` ("Network & Partners")

### Proposed nav:

```
Vision (4)       Build (5)           Life (4)          Join (3)        Reference (6)
  The Vision       Pillars Hub         Health             Invest          Location
  Why an Ark       Techno Park         Traditions         Participate     Economy
  Roadmap          Incubator           Retreat Center     Network         Governance
  Team             Trading House       Risks & Realities                  FAQ
                   Infrastructure                                         Explore
                                                                          Glossary
```

### Changes explained:

**1. Renamed "Project" to "Vision"**
"Project" is generic. "Vision" signals that this group answers "What is BARK and why does it exist?" — the identity questions.

**2. Moved Resilience out of Vision, content redistributed**
Resilience's nuclear/geographic safety content is unique and powerful but does not belong in the identity group. After deduplication, the strongest resilience content (nuclear safety, geographic remoteness, indigenous resilience structures, scenario matrix) becomes a section within the trimmed "Risks & Realities" page — making the due-diligence page comprehensive. The economic vulnerability content is already covered in economy.astro.

**3. Renamed "Live" to "Life"**
"Live" as a verb is ambiguous (is it "I live here" or "it's live"?). "Life" is clearer — this group answers "What is daily life like?"

**4. Moved Retreat Center from Build to Life**
The retreat center's page content is primarily about the experience (what a retreat week looks like, modalities, longevity district). Its revenue model data can be referenced from the investors page. Moving it to Life makes the visitor journey clearer: health, traditions, retreat, and risks are all about the lived experience.

**5. Merged Safety + Risk into "Risks & Realities" under Life**
The visitor doing due diligence finds everything in one place: crime data, natural hazards, political stability, project risks, financial risks. The title "Risks & Realities" is honest without being alarming.

**6. Merged Community + Partners into "Network & Partners" under Join**
Who BARK connects with is an action-oriented topic. It answers "who else is involved?" — which is a joining/participation question. Three items in Join was too few; four is better balanced.

**7. Renamed "Learn" to "Reference"**
This group now contains what it actually is: reference material. Location data, economic analysis, governance models, FAQ, the dimensional explorer, and the glossary. These are not narrative pages — they are look-up resources.

**8. Removed Gallery from nav**
The gallery is a nice-to-have page but does not deserve a nav slot. It can be linked from the Location page and from the homepage. Removing it brings Reference down to 6 items — manageable.

### Item counts: Vision(4) / Build(5) / Life(4) / Join(3) / Reference(6)

Maximum dropdown size: 6 items. This is within the 5-7 sweet spot for scannability.

---

## 6. Missing Connections

### Cross-links that should exist but do not:

| From | To | Why |
|------|----|-----|
| vision.astro | location.astro | The vision describes Coroico but never links to the full location page. |
| vision.astro | resilience/safety | The vision mentions fragility but never links to the evidence pages. |
| why.astro | economy.astro | "Why Bolivia" section discusses cost structure but does not link to the economy deep-dive. |
| why.astro | location.astro | "Why Bolivia" discusses geography but does not link to the location page. |
| roadmap.astro | investors.astro | The roadmap shows what money will fund but does not link to the investment page. |
| roadmap.astro | team.astro | The roadmap mentions team formation (in progress) but does not link to the team page. |
| health.astro | safety.astro | Health covers medical risks but does not link to the broader safety assessment. |
| health.astro | traditions.astro | Health mentions indigenous healing but does not link to the traditions page. |
| traditions.astro | health.astro | Traditions covers medicinal plants but does not link to the health page. |
| governance.astro | traditions.astro | Governance mentions ayllu but does not link to the full traditions coverage. |
| governance.astro | economy.astro | Governance discusses cooperative economics but does not link to the economy page. |
| location.astro | infrastructure.astro | Location discusses water, solar, connectivity but does not link to the infrastructure deep-dive. |
| economy.astro | trading.astro | Economy discusses trade but does not link to the Trading House page. |
| investors.astro | economy.astro | The investment thesis references Bolivia's economy but does not link to the full analysis. |
| explore.astro | ANY | The dimensional explorer is an island. No other page links to it. It should be linked from the vision page, the homepage, and the pillars hub. |
| gallery.astro | traditions.astro | Gallery shows cultural landscapes but does not link to the cultural context. |

### The conversion path assessment:

**Homepage -> Interested -> Convinced -> Action**

Current path: Homepage has clear CTAs to "participate" and "vision." Good.

**Weakness 1: No clear "interested but skeptical" path.** A visitor who reads the vision and wants proof lands in a scattered set of pages (resilience, safety, risk, economy) across 3 different nav groups. The proposed restructuring fixes this by consolidating due diligence under Life (Risks & Realities) and Reference (Economy, Location).

**Weakness 2: The investors page is hard to find.** It is the third item in a group labeled "Join" — but an investor's mental model is not "joining." Consider adding a secondary "For Investors" link in the footer or a prominent CTA on the homepage that leads directly to investors.astro.

**Weakness 3: No "start here" guidance.** A first-time visitor sees 5 dropdown groups with ~27 pages and has no reading order. Consider adding a "Start Here" link in the nav (outside any group) that points to a curated 4-page reading path: Vision -> Why -> Location -> Participate. This is common on content-heavy sites and dramatically improves first-visit engagement.

---

## Summary of Recommendations

### Must-do (high impact, low effort):
1. **Merge safety + risk** into one "Risks & Realities" page.
2. **Merge community + partners** into one "Network & Partners" page.
3. **Add 15+ missing cross-links** between pages (list above).
4. **Rename "Learn" to "Reference"** in the nav.
5. **Deduplicate homicide table** (appears in both resilience and safety).

### Should-do (high impact, moderate effort):
6. **Trim resilience.astro** from 987 to ~600 lines by removing content now in safety+risk and economy.
7. **Move Retreat Center** from Build to Life in the nav.
8. **Move Resilience** out of Project/Vision group — strongest content absorbed into Risks & Realities.
9. **Consolidate technopark.astro fabrication sections** (Gingery/RepRap/OSE described twice).
10. **Expand vision.astro** from 61 to ~100 lines with a "daily life" picture.

### Nice-to-have:
11. **Add a "Start Here" reading path** for first-time visitors.
12. **Remove Gallery from nav** (link from Location + footer instead).
13. **Add a footer link "For Investors"** for direct investor access.
14. **Rename nav group "Project" to "Vision"** for clarity.

### Page count after changes:
- Before: 27 pages, 5 groups (5/6/5/3/9)
- After: 25 pages, 5 groups (4/5/4/3/6) -- two fewer pages, max dropdown 6 items

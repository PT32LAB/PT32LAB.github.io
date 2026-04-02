# BARK Website Editorial Audit

**Date:** 2026-04-02
**Reviewer:** Senior editorial audit (Wired x NatGeo x prospectus voice)
**Scope:** All 18 .astro files in `src/pages/en/` including pillars subdirectory

---

## Executive Summary

The writing across the site is already strong -- muscular, opinionated, and free of the beige equivocation that kills most mission-driven project websites. The voice lands close to the target register about 70% of the time. The other 30% falls into two failure modes: (1) sliding into startup pitch-deck cadence ("the model compounds," "unlocking existing value") and (2) leaving specialized vocabulary unexplained on first use. The site's biggest structural weakness is that several pages repeat the same arguments and data points without cross-linking, which makes each page feel slightly less authoritative than it should because the reader suspects recycling rather than depth. The biggest content gap is the absence of a single named person with relevant domain expertise beyond the two founders.

---

## 1. Clarity Pass

### index.astro (Homepage)

**Line 36 -- Hero headline is excellent.** "The Andes dissolve into cloud forest here. We're building into the seam." This is the best sentence on the entire site. It should be treated as the brand line. No changes.

**Line 41-44 -- Opening paragraph buries the lead.**
The first thing a visitor reads after the headline is "BARK is a semi-autonomous community taking shape in the Bolivian Yungas." The word "semi-autonomous" is doing heavy lifting that a first-time visitor cannot parse. The paragraph lists five components but gives no reason to care about any of them.

**Line 78-80 -- "500+ Bird Species Recorded."** Recorded by whom? The location page says "400-500+" (line 72). The homepage says "500+". These should match and cite a source inline.

**Line 83-85 -- "3,000+ Documented Plant Species."** Same issue. The location page (line 73) says "3,000+" which matches, but neither the homepage nor the location page links to the Kessler & Beck source for a visitor who wants to verify.

**Line 93-94 -- "100% Open Source."** This is a stat in a stats bar alongside elevation and species counts. It is not the same kind of data. Placing it in a row of empirical facts implicitly claims the same epistemic status, which is misleading. Open-source is a policy choice, not a measurement.

**Line 137-138 -- "Civilization is a supply chain problem."** Strong. This is the second-best line on the site. Works as a section header.

**Line 161 -- "Five Organs, One Body."** The heading says "organs." The pillars index page (pillars/index.astro, line 17) says "components." The homepage data structure at line 14 uses `pillars`. The nav (ui.ts, line 15) says "Components." Three different metaphors for the same five things. Pick one and enforce it everywhere.

### vision.astro

**Line 7 -- "BARK -- the Bolivian Ark."** Good -- this is the only place the acronym is explicitly expanded. It should appear earlier in the user journey (on the homepage).

**Line 14 -- "Compounds hoard. Communities trade."** Crisp. Keep.

**Line 23 -- "A maker space without its own power grid is a hobby."** This is the page's money sentence. It should be visually pulled out.

**Line 30-33 -- Open-source paragraph.** "This is not generosity -- it is strategy." Excellent. But the paragraph ends with "We are counting on it" -- which is vague. Counting on what, specifically? Plans being stolen? Being forked? Say it.

**Line 40-42 -- "BARK hires locally, buys locally, and submits its governance to mechanisms that give the surrounding community real leverage."** What mechanisms? This is the most important claim in the paragraph and it is the vaguest. At minimum, name the mechanism type (e.g., "community advisory council with veto power over land-use decisions" or whatever is actually planned).

### why.astro

**Line 8-9 -- "A semiconductor shortage can idle a car factory in six weeks."** Good concrete example. But the second example -- "A currency crisis can empty shelves in a capital city over a weekend" -- is generic. Name one. The 2023 Sri Lanka crisis, the 2001 Argentine corralito, the 2024 Bolivian dollar shortage. Specificity is credibility.

**Line 18-21 -- "A regional conflict disrupts grain shipments, which triggers a currency wobble..."** This sentence runs to 42 words and describes a cascading failure. It should be broken into shorter sentences that mirror the cascade rhythm: each sentence a domino falling.

**Line 52-55 -- Optimistic scenario.** "BARK becomes a model. Open-source blueprints for a community that runs on its own power..." This is the weakest of the four scenarios because it is the most abstract. What does "a model" look like concretely? How many communities have forked the blueprints? What does success taste like?

**Line 76-82 -- "Geography is destiny" paragraph.** The line "Land remains affordable" is a claim that needs a number. What does a hectare cost in the Coroico area? What did it cost five years ago? "Affordable" is subjective.

**Line 80 -- "a climate that most agronomists would design from scratch if they could."** Beautiful phrasing. Keep.

### location.astro

**Line 36-39 -- Geography section opens with coordinates.** Good precision. However, the section could lead with the most gripping fact (the 3,400m drop from La Paz) rather than lat/long, which few readers can interpret viscerally.

**Line 67-68 -- "ANMI Cotapata (a managed conservation area), a 40,000-hectare protected area."** The parenthetical explains the acronym but the sentence reads awkwardly. Restructure.

**Line 72 -- "400-500+ documented in the Yungas corridor."** The range is honest, but the homepage rounds up to "500+". Align these.

**Line 80 -- "approximately 19,397 in the 2012 national census."** The 2012 census is 14 years old. This needs a caveat ("the most recent census available; a new census has been [planned/delayed]") or an updated estimate.

**Line 97 -- "Starlink -- Available in Bolivia since 2025."** Reference [7] links to starlink.com generically. A more specific source (news article confirming Bolivia launch date) would strengthen this.

**Line 115-116 -- "Road closures between La Paz and Coroico occur multiple times per rainy season."** How many times? 3? 10? Average duration? The location page is meant to be the data-heavy reference, but this key risk is described qualitatively, not quantitatively.

**Line 138-141 -- Ayllu paragraph.** "Ayllu" appears here without a gloss. A reader encountering this term for the first time gets no definition until the community page (community.astro line 321). On location.astro, the sentence just says it is "a traditional form of communal governance and reciprocal labor." That is sufficient -- but only if the reader reads this page before the governance page. Consider a consistent one-sentence gloss everywhere the term appears.

### governance.astro

**Line 7-8 -- "BARK's governance model isn't decided yet -- and that's deliberate."** Honest. But the page then presents five models and six case studies with no clear framework for choosing between them. The reader finishes the page thinking "so which one?" Add a decision criteria section or a comparison matrix.

**Line 28-29 -- "plutocratic risk (more tokens = more votes)."** This is then repeated nearly verbatim on line 100-101 with CityDAO. Cut the repetition or cross-reference.

**Line 65 -- "70,000+ employees, over 11 billion euros in revenue."** Verify these numbers are current. Mondragon's employee count fluctuates; it was ~80,000 at peak and dropped to ~70,000 post-restructuring. Use a year.

**Line 81-82 -- Zapatista section.** "Over 30 years of 'mandar obedeciendo' (lead by obeying)." This is a significant political example. The sentence about 2023 restructuring is vague -- "due to external pressures -- cartel violence, youth emigration, economic stress." This deserves a citation or at minimum the name of the specific communique (they published one announcing the restructuring).

**Lines 92-96 -- Ayllu section.** "Based on ayni (reciprocity), minka (communal labor)." These terms are glossed here but not on the location page where ayllu also appears. The glosses should be consistent. Also: "Constitutionally recognized in Bolivia since 2009 under the plurinational state framework" -- cite the constitutional article.

### community.astro (Our Neighbors & Allies)

**Line 82-83 -- Afro-Bolivian communities.** "An estimated 15,000-25,000 Afro-Bolivians nationally." This is a wide range. The 2012 census gave a specific number (self-identification basis). Use it and note the methodological caveat.

**Line 88-89 -- CENAPROC.** "An award-winning organic coffee cooperative." Which award? When? Specificity.

**Line 93-94 -- Carmen Pampa University.** "12 km from Coroico." Good. "Unidad Academica Campesina" -- this is unexplained. Is it a campus name? A type of institution? Gloss it.

**Line 158 -- Prospera/Honduras.** "BARK explicitly rejects this model." Good. But this is the only place where BARK defines itself by opposition. Consider whether the Prospera entry belongs here (it does -- as a cautionary tale) but balance it with a note about what BARK takes FROM the charter city concept (if anything) rather than just negation.

### participate.astro

**Line 5-8 -- The four ways to participate.** "Invest, Build, Think, Spread." Clean taxonomy. But the descriptions are all 1-2 sentences. The "Invest" section says "We're structuring investment pathways that align financial return with community benefit" -- this is a placeholder sentence. Either remove it or explain the structure.

**Line 51-53 -- "Everything we produce -- plans, code, research, governance frameworks -- lives in public GitHub repositories."** Does it? Currently the GitHub at PT32LAB has the website repo. Are the governance frameworks there? The research? If not yet, this is a forward-looking claim presented as present tense. Fix the tense or publish the materials.

**Line 71 -- "We respond to everyone."** Is this true? If so, add a response time commitment ("within 72 hours" or similar). If not, soften to "We read every message."

### faq.astro

**Line 10 -- "What exactly is BARK?"** The answer says "off-grid community project" -- but the vision page says "semi-autonomous community." Pick the canonical term.

**Line 17-18 -- "Who's behind this?"** The answer says "two co-founders with backgrounds in systems architecture and knowledge design." This is underselling and underspecifying simultaneously. Name them (or at least say "see the team page" with a link, which is there). "Backgrounds in" is corporate-speak for "we did some stuff." Be more specific.

**Line 39 -- Cost of living.** "$500-800/month for a comfortable life." This is useful but needs a breakdown or source. What does that cover? Rent alone? Rent plus food? Is this verified against current Coroico pricing or a Bolivia national average?

**Line 52 -- Bolivia safety.** "Bolivia's homicide rate is approximately 4.3 per 100,000 (UNODC, 2022)." Good citation. But the comparison to the US is doing rhetorical work that could backfire -- a reader might note that the US rate is high compared to most developed countries, making this a comparison to a high baseline.

**Line 64 -- Visa terms.** "Visa terms vary by nationality. Many visitors receive 30-90 day tourist visas." This is generic enough to be useless. For the three most likely source countries of participants (US, EU, Australia), give the specific terms.

### risk.astro

**Line 53-58 -- Intentional community failure rate.** "According to research from the Fellowship for Intentional Community and studies published in the Journal of Sustainable Development, the majority of intentional communities do not survive their first five years." This needs a specific citation -- author, year, title. "Studies published in" is handwaving.

**Line 85-89 -- Mitigation section.** "Studying successful intentional communities (Auroville, Mondragon)" -- Auroville is presented on the governance page as a cautionary tale, not a success story. Using it here as a "success" to study is contradictory.

### roadmap.astro

**Line 9 -- "Current -- Q2 2026."** This is good -- it dates the page. But the items under Phase 0 are thin. "Website and public presence" is marked done, which is true. "Knowledge cosmos and research" is marked done -- but the explore page says "Phase 2: 2D Graph View" is coming. So "done" means the 1D version only. Clarify.

**Line 14-17 -- Phase 0 items.** "Team formation" is "in progress" with no specifics. How many people? What roles filled? What roles open? The roadmap should be the most concrete page on the site.

**Lines 36-73 -- Phases 2-4.** These are entirely "planned" items with no detail. The page is honest about this but it means 60% of the roadmap is blank. Consider removing future phases entirely until they have substance, or add enough specifics to each to signal real planning (budget estimates, dependency chains, go/no-go criteria).

### team.astro

**Line 39-41 -- Drow bio.** "Based in Sydney. Background in tech and server infrastructure." This is thin for someone asking others to trust capital and years of their life. What kind of tech? How many years? Any relevant projects that can be named?

**Line 73-74 -- Oleg bio.** "Conceptualized the NetworkTribes dimensional cosmos." This means nothing to someone who hasn't been on the explore page. Lead with what he does in plain language, then name the project.

**Line 103-107 -- Advisory section.** "We don't have a formal advisory board yet." Honest, but this section's existence with no names is weaker than no section at all. Either remove it or list the domains being actively pursued with specific individuals (even "in conversation with X type of expert").

### investors.astro

**Line 32 -- "technoshamanic retreat center."** This term appears in a revenue context aimed at investors. For this audience, "technoshamanic" is a liability unless defined. Either define it here with one clause or use a plainer term for this page (e.g., "wellness and plant-medicine retreat center").

**Line 70-95 -- Revenue projections table.** "$43,000/yr conservative, $80,000/yr base, $129,000/yr optimistic." These are total combined revenue figures, not profit, but they sit next to "investment" and "breakeven" columns that imply return on investment. The disclaimer at line 169-173 clarifies, but most readers will never reach it. Put the clarification immediately below the table.

**Line 259-260 -- "BARK does not yet exist as an operating entity."** This is the single most important sentence on the investors page and it is buried in a bullet list inside a risk section that is itself inside a secondary section. It should appear in the first paragraph.

**Line 289-291 -- "Strong NGO and academic partnerships provide institutional support and legitimacy."** Which NGOs? Which academics? If none yet, this is a future aspiration presented as a current fact. Flag it.

### pillars/index.astro

**Line 8 -- "Technoshamanic retreat blending ancient wisdom with modern practice."** Unexplained jargon in a one-sentence summary. At minimum: "Technoshamanic (technology-informed, tradition-respecting) retreat..."

### pillars/technopark.astro

**Lines 98-100 -- "designed to be economically self-sustaining from year one."** This is a bold claim. The profit table that follows shows break-even periods of 1.5-5 years for individual lines. "Self-sustaining from year one" and "break-even in 2-5 years" are contradictory. Reconcile.

**Line 149 -- "Combined portfolio: $65K-$158K investment, $43K-$129K Year 1 profit."** The word "profit" here contradicts line 154 which says "revenue minus operating costs, not including capital recovery." Revenue minus operating costs is gross margin, not profit. Use precise financial terminology.

**Lines 162-165 -- Self-replicating workshop section.** The Dave Gingery reference is fascinating but niche. A reader unfamiliar with his work gets no anchor. One sentence of context ("a machinist who published between 1980 and 2000") would help.

### pillars/incubator.astro

**Line 45-47 -- Plant medicine retreats.** "(subject to local legal framework)" is a critical parenthetical that looks like a afterthought. If plant medicine is part of the business model, the legal framework should be stated explicitly, not deferred with a parenthetical.

**Line 85-87 -- Bolivia cost comparison.** "A startup that would need $500K in seed funding in the US can launch on $20-50K in Bolivia." This is a 10-25x multiplier claim. It should be supported with at least one concrete example (rent comparison, salary comparison, specific cost breakdown).

### pillars/trading.astro

**Line 15-17 -- Coffee export data and cacao data repeat nearly identically from technopark.astro and incubator.astro.** This is the third time the reader encounters "$4.60/lb FOB" and "621 metric tons." By the third page, these feel like filler rather than evidence. Cross-link instead of repeating.

### pillars/retreat.astro

**This is the thinnest page on the site.** Four sections, minimal detail, no data. The retreat center is listed as a major revenue source on the investors page but gets less content than any other component. The "Technoshamanism" section (lines 21-28) is the only place the term is defined, but the definition is philosophical rather than operational. What actually happens in a session? What modalities? What does a week look like? What comparable retreats exist and what do they charge?

### pillars/infrastructure.astro

**Also thin relative to its importance.** Energy, water, food, and connectivity each get a bullet list with no data. The technopark page has solar radiation numbers (3.5-4.5 kWh/m2/day) and micro-hydro potential; this page should at minimum match that level of specificity. The infrastructure page should be the site's most data-dense page. Instead it reads like an outline waiting to be filled.

### explore.astro (Knowledge Cosmos)

**Line 57 -- "Technoshamanic Practices" node.** This appears as a data node in the explorer with dimension scores but no explanation of what it refers to. A visitor clicking through the explorer hits this term cold.

**Lines 140-150 -- "Phase 2: 2D Graph View" / "The cosmos expands."** This section advertises features that do not exist. Either remove it or frame it as a public roadmap item with a target date.

---

## 2. Persuasion Architecture

### Page-by-page message analysis

| Page | Core Message | Clarity (1-5) | Emotional Arc Position |
|------|-------------|----------------|----------------------|
| index | BARK exists, it's ambitious, here's how to enter | 4 | **Interest** |
| vision | This is a community, not a compound; integration + open-source | 4 | **Understanding** |
| why | The world is fragile; BARK is the rational response | 5 | **Concern to hope** |
| location | Coroico is the right place; here is the data | 4 | **Grounding** |
| governance | Governance is unsolved; here are the options | 3 | **Intellectual engagement** |
| community | We are not alone; here is the network | 4 | **Confidence** |
| participate | Here is how to join | 3 | **Call to action** |
| faq | Honest answers to skeptical questions | 4 | **Trust-building** |
| risk | Here is what can go wrong | 4 | **Trust-building** |
| investors | Here is the financial thesis | 4 | **Persuasion** |
| roadmap | Here is where we are and where we are going | 3 | **Concreteness** |
| team | Here is who is behind it | 2 | **Trust-building** |
| pillars/index | Overview of the five parts | 3 | **Orientation** |
| pillars/technopark | This is the innovation engine with real data | 5 | **Excitement** |
| pillars/incubator | These are the businesses we can launch | 4 | **Excitement** |
| pillars/trading | This is the economic engine | 4 | **Confidence** |
| pillars/retreat | This is the cultural heart | 2 | **Curiosity (unsatisfied)** |
| pillars/infrastructure | This is the physical foundation | 2 | **Concern (too thin)** |

### Where momentum stalls

1. **After the homepage.** The hero section is magnetic. The pathways section is clear. But the "Five Organs, One Body" section is a list of one-liners -- if the reader clicks through to pillars/retreat or pillars/infrastructure, they hit thin pages and momentum dies.

2. **Governance page, mid-section.** The case studies are excellent but the page has no synthesis framework. The reader leaves with information but no conclusion. The final paragraph ("The pattern is clear...") tries to synthesize but arrives too late and too abruptly.

3. **Team page.** This is the weakest page on the site for persuasion. Two brief bios, an empty advisors section, and a list of needed roles. For a project asking people to relocate to Bolivia or invest capital, the team page needs to build much more credibility.

4. **Participate page.** The four categories (Invest, Build, Think, Spread) are clean but the page ends with a mailto link. There is no form, no application process, no next step beyond sending an email. This is a conversion leak.

### CTA effectiveness

- **Homepage CTA** ("Get Involved" / "Read the Vision"): Effective -- two clear paths.
- **Vision CTA** ("First cohort is forming now"): Good urgency. But "people who finish what they start" is presumptuous -- it presumes the reader might not be such a person. Rephrase.
- **Why CTA** ("You read this far. That says something."): This is the best CTA on the site. Conversational, specific, flattering without being sycophantic.
- **Participate CTA** ("Ready to talk? / Contact Us"): Generic. Should match the energy of the why-page CTA.
- **FAQ CTA** ("We answer every message. No form, no chatbot -- just people."): Good tone.
- **Investors CTA** ("Express Interest"): Appropriate for the audience.
- **Roadmap CTA** ("Help us move faster."): Vague. Faster at what? Be specific.

---

## 3. Interlink Opportunities

### Claims that need evidence links

```
Page: index.astro
Claim: "500+" bird species (line 78-80)
Should link to: BirdLife International Yungas IBA data (already cited on location.astro but not linked from homepage)
```

```
Page: index.astro
Claim: "3,000+" plant species (line 83-85)
Should link to: Kessler & Beck botanical assessments (cited on location.astro [2])
```

```
Page: index.astro
Claim: "100% Open Source" (line 93)
Should link to: GitHub organization (https://github.com/PT32LAB) — currently only linked in the final CTA
```

```
Page: why.astro
Claim: "semiconductor shortage can idle a car factory in six weeks" (line 9)
Should link to: reporting on 2021-2023 automotive chip shortage (e.g., NYT, Reuters)
```

```
Page: why.astro
Claim: "Land remains affordable" (line 77)
Should link to: actual land price data or a Bolivian real estate index
```

```
Page: location.astro
Claim: "400-500+" bird species (line 72)
Should link to: BirdLife International IBA data page for Yungas (direct URL, not just birdlife.org)
```

```
Page: location.astro
Claim: "approximately 19,397 in the 2012 national census" (line 80)
Should link to: INE Bolivia census data table (direct URL, not just ine.gob.bo)
```

```
Page: location.astro
Claim: "Starlink available in Bolivia since 2025" (line 97)
Should link to: news article confirming Bolivia launch, not just starlink.com
```

```
Page: governance.astro
Claim: "70,000+ employees, over 11 billion euros in revenue" for Mondragon (line 65-66)
Should link to: Mondragon annual report with the specific year these numbers represent
```

```
Page: governance.astro
Claim: "In 2023, the Zapatistas restructured their governance" (line 81-82)
Should link to: the specific Zapatista communique or journalistic reporting
```

```
Page: risk.astro
Claim: "the majority of intentional communities do not survive their first five years" (line 56-58)
Should link to: specific FIC study or Journal of Sustainable Development article (author, year, DOI)
```

```
Page: investors.astro
Claim: "$325M Solar Electrification Program" (line 209)
Should link to: World Bank or IDB program page with the actual commitment documentation
```

```
Page: investors.astro
Claim: "IDB $4.5B Development Package... 2026-2028" (line 218-220)
Should link to: IDB press release or agreement documentation
```

```
Page: investors.astro
Claim: "15,000 active cooperatives regulated by AFCOOP" (line 226-227)
Should link to: AFCOOP source or Bolivian government registry data
```

```
Page: pillars/technopark.astro
Claim: "RepRap project... approximately 50-70% self-replication by component weight" (line 169)
Should link to: reprap.org documentation or academic paper with this figure
```

```
Page: pillars/incubator.astro
Claim: "Bolivia exported 621 tons of cacao in 2023" (line 29)
Should link to: IBCE data page (already cited but link to specific report)
```

```
Page: community.astro
Claim: "15,000-25,000 Afro-Bolivians nationally" (line 82)
Should link to: census data or demographic study
```

---

## 4. Missing Content

### Questions readers will have (by page)

**Homepage:** "Who are these people? Have they done anything like this before?" -- No team preview on the homepage. Add at minimum a "Founded by..." one-liner with a link to team.

**Vision:** "How much does this cost?" -- Not addressed until investors.astro. Add a single sentence or link: "See our investment thesis for financials."

**Why:** "If this is so rational, why hasn't someone already done it in the Yungas?" -- Not addressed anywhere. The community page shows nearby projects but none are BARK-like in scope.

**Location:** "Can I visit? How do I see the site?" -- Not addressed. If site visits are planned (roadmap says so), mention it here.

**Governance:** "When will you decide?" -- No timeline. The roadmap's Phase 1 says "Initial community agreements" but doesn't specify governance model selection.

**Participate:** "What happens after I email you? What's the process?" -- No next-step description. Add: "Here's what happens when you reach out: [1] We reply within X days. [2] We schedule a call. [3]..."

**Team:** "What are your qualifications for this specific project?" -- Bios are too generic. Bolivia experience? Construction experience? Agriculture? Language skills?

**Investors:** "Where exactly is the money going? Can I see a budget?" -- The projections table is revenue-focused but there is no expense breakdown or use-of-funds section.

**Retreat:** "What actually happens at this retreat?" -- The page names categories (retreats, healing, culture, research) but describes no specific program, schedule, or modality.

### Where pull quotes / callout boxes should appear

- **vision.astro line 23:** "A maker space without its own power grid is a hobby." -- Pull quote.
- **why.astro line 26-27:** "The question BARK answers is simpler: what would you build if you took the tail risks seriously?" -- Pull quote.
- **why.astro line 60:** "Survival without purpose is just delayed extinction." -- Pull quote.
- **why.astro line 80:** "a climate that most agronomists would design from scratch if they could" -- Pull quote.
- **location.astro line 55:** "Year-round. No killing frosts. Multiple harvests per year." -- Already in a callout; good.
- **governance.astro line 108-110:** "Bolivia's ayllu system, tested over centuries, may be a better model than Silicon Valley's latest experiment." -- Pull quote.
- **risk.astro line 95-96:** "We'd rather have ten people who understand the risks than a hundred who don't." -- Pull quote.
- **pillars/technopark.astro line 90-92:** "technology sovereignty -- the ability to understand, maintain, and improve your own systems -- is a prerequisite for genuine autonomy." -- Pull quote.

### Most powerful sentence per page (for visual emphasis)

| Page | Sentence | Line |
|------|----------|------|
| index | "The Andes dissolve into cloud forest here. We're building into the seam." | 36 |
| vision | "A maker space without its own power grid is a hobby." | 23-24 |
| why | "What would you build if you took the tail risks seriously?" | 26-27 |
| location | "a climate that most agronomists would design from scratch if they could" | 80 |
| governance | "Bolivia's ayllu system, tested over centuries, may be a better model than Silicon Valley's latest experiment." | 109-110 |
| community | "Any community project in Nor Yungas that ignores Afro-Bolivian history, culture, and land rights is building on a lie." | 83 |
| participate | "A project for co-creators, not spectators." | 18-19 |
| faq | "No charismatic leader worship -- we have co-founders, not gurus." | 22 |
| risk | "We'd rather have ten people who understand the risks than a hundred who don't." | 95-96 |
| investors | "BARK is not a speculative venture or a feel-good donation." | 107 |
| roadmap | (none strong enough -- the roadmap needs a thesis sentence) | -- |
| team | "Two people can start a project. It takes a team to build a community." | 123-124 |
| technopark | "Technology you cannot fix is technology that owns you." | why.astro 71, echoed conceptually |
| incubator | "We're not importing artificial demand. We're unlocking existing value." | 65 |
| trading | "Raw materials leave as finished products wherever possible." | 47 |
| retreat | (none -- the page needs more substance before any sentence merits emphasis) | -- |
| infrastructure | (none -- same issue) | -- |

---

## 5. Consistency

### Naming inconsistencies

| Item | Variants Found | Recommended Standard |
|------|---------------|---------------------|
| The five parts of BARK | "pillars" (code), "components" (nav, pillars/index.astro), "organs" (index.astro line 161) | **Components** (already used in nav and pillars index) |
| Yungas capitalization | "Yungas" (everywhere) vs "yungas" (none found) | **Yungas** -- consistent, good |
| Ayllu capitalization | "ayllu" (lowercase, governance.astro line 46), "Ayllu" (capitalized, governance.astro line 92, community.astro line 319) | **ayllu** (lowercase when used as common noun; capitalize "The Ayllu" when referring to the specific system as a proper noun) |
| BARK description | "semi-autonomous community" (vision, index), "off-grid community project" (faq.astro line 10) | **Semi-autonomous community** -- "off-grid" is inaccurate since the infrastructure page says grid connection is maintained as backup |
| BARK expansion | "Bolivian Ark" (vision.astro line 7 only) | Should appear on homepage and in FAQ |
| Technoshamanic | Used without definition on: index hero subtitle (ui.ts), pillars/index.astro, investors.astro, explore.astro node title | Only defined on pillars/retreat.astro lines 21-28. Needs a one-clause gloss on every first use per page |
| GVCS | Mentioned on technopark.astro (explained), explore.astro (not explained), community.astro OSE entry (explained) | Always expand on first use per page: "Global Village Construction Set (GVCS)" |
| ANMI Cotapata | Glossed as "(a managed conservation area)" on location.astro and incubator.astro | Consistent -- good |
| Ley 356 | Mentioned on location.astro, faq.astro, risk.astro, investors.astro, governance.astro | All identify it as Bolivia's cooperative law -- consistent |

### Tone inconsistencies

- **Investors.astro** shifts register toward pitch-deck cadence: "the model compounds," "network effects from replication." This is the only page where startup jargon creeps in. The rest of the site avoids it well.
- **Pillars/retreat.astro** is notably less rigorous and data-driven than technopark.astro and trading.astro. The retreat center gets treated with soft language ("cultural heart," "open inquiry") while the techno park gets price lists and break-even calculations. For the target voice (Wired x NatGeo x prospectus), the retreat page needs the same empirical rigor.
- **Pillars/infrastructure.astro** reads like a bulleted outline rather than finished prose. Every other page has narrative paragraphs; this one is almost entirely bullet lists.

### Contradictions

1. **Components vs. organs vs. pillars.** Already noted. The code says `pillars`, the nav says "Components," and the homepage says "Five Organs, One Body." This creates cognitive friction.

2. **"Off-grid" vs. "semi-autonomous."** The FAQ says "off-grid community project." The infrastructure page says the grid connection is "maintained as backup." These contradict. Semi-autonomous is more accurate and is used elsewhere.

3. **"Self-sustaining from year one"** (technopark.astro line 98) vs. break-even in 1.5-5 years (technopark.astro table). Cannot both be true.

4. **Auroville as success vs. cautionary tale.** Governance page presents it as cautionary (Indian government overrode residents). Risk page lists it as a "successful intentional community" to study. Use consistent framing: Auroville is instructive, not simply successful.

5. **Homepage bird species count ("500+") vs. location page ("400-500+").** Must match.

---

## 6. Rewrite Recommendations

### index.astro

**BEFORE (line 41-44):**
> BARK is a semi-autonomous community taking shape in the Bolivian Yungas -- fabrication lab, incubator, trading house, retreat center, and the infrastructure to run them all without asking permission. Open-source down to the governance model.

**AFTER:**
> BARK -- the Bolivian Ark -- is a community being built in the Yungas cloud forest: five interlocking systems designed to produce their own energy, grow their own food, and govern themselves transparently. Fabrication lab. Incubator. Trading house. Retreat center. And the solar, water, and communications infrastructure underneath all of it. Every plan published. Every decision on the record.

*Rationale: Expands the acronym (only done on vision.astro currently). Breaks the component list into staccato rhythm for impact. Replaces "without asking permission" (combative) with "transparently" (aspirational). Replaces "open-source down to the governance model" (jargon) with "Every plan published."*

---

**BEFORE (line 93-94, stats strip):**
> 100% Open Source

**AFTER:**
> Open Source -- Plans, Code, Governance

*Rationale: "100%" is a pseudo-statistic. Spelling out what is open-source is more honest and more informative.*

---

**BEFORE (line 161):**
> Five Organs, One Body

**AFTER:**
> Five Components, One System

*Rationale: Aligns with the nav label ("Components") and eliminates the biological metaphor that conflicts with the mechanical/systems framing used everywhere else.*

---

### vision.astro

**BEFORE (line 30-33):**
> Every solar array schematic, every governance vote, every agricultural trial result gets published. This is not generosity -- it is strategy. Open-source projects attract better contributors, survive their founders, and resist capture by any single faction. If BARK works, the plans should be worth stealing. We are counting on it.

**AFTER:**
> Every solar array schematic, every governance vote, every agricultural trial result gets published. This is not generosity -- it is strategy. Open-source projects attract better contributors, survive their founders, and resist capture by any single faction. If BARK works, the blueprints should be worth forking. We want a hundred communities running modified versions of this code.

*Rationale: "Worth stealing" + "counting on it" is vague. "Worth forking" uses the open-source metaphor precisely, and "a hundred communities" gives the aspiration a concrete shape.*

---

**BEFORE (line 40-42):**
> BARK hires locally, buys locally, and submits its governance to mechanisms that give the surrounding community real leverage.

**AFTER:**
> BARK hires locally, buys locally, and gives the surrounding community a structural voice -- not a suggestion box, but seats on the governing council and veto power over land-use decisions that affect shared resources.

*Rationale: "Mechanisms that give leverage" is the vaguest possible description of the most important promise on the page. Even if the exact structure is not finalized, naming the type of mechanism (council seats, veto power) signals that real thinking has happened.*

---

### why.astro

**BEFORE (line 8-9):**
> A semiconductor shortage can idle a car factory in six weeks. A currency crisis can empty shelves in a capital city over a weekend.

**AFTER:**
> A semiconductor shortage idled Toyota for six weeks in 2021. A currency crisis emptied supermarket shelves in Colombo in seventy-two hours.

*Rationale: Named examples are more credible than hypotheticals. Past tense ("idled," "emptied") signals these are events, not speculation.*

---

**BEFORE (line 18-21):**
> A regional conflict disrupts grain shipments, which triggers a currency wobble, which strains an already underfunded power grid. The failure propagates sideways through systems designed to be efficient, not robust.

**AFTER:**
> A regional conflict disrupts grain shipments. The currency wobbles. The power grid -- underfunded, overextended -- starts to brown out. The failure does not queue politely. It propagates sideways through systems optimized for efficiency, not survival.

*Rationale: Breaking the cascade into short sentences mimics the domino effect being described. "Queue politely" is a callback to line 19's "not queuing up politely" and works better as a standalone image.*

---

**BEFORE (line 52-55):**
> BARK becomes a model. Open-source blueprints for a community that runs on its own power, grows its own food, governs itself transparently, and proves that resilience and quality of life are the same project.

**AFTER:**
> BARK becomes a template. Fourteen communities across three continents fork the blueprints and adapt them to local terrain. The documentation library has 40,000 downloads. A graduate student in Nairobi builds her thesis around the water system design. Resilience and quality of life turn out to be the same project.

*Rationale: The "optimistic scenario" should be as concrete and vivid as the disruption scenarios. Specificity (even hypothetical specificity) makes it feel real.*

---

### team.astro

**BEFORE (line 39-41):**
> Systems architect and infrastructure specialist. Based in Sydney. Background in tech and server infrastructure -- building resilient systems is second nature.

**AFTER:**
> Systems architect. Has spent [X] years building and hardening server infrastructure -- the kind of work where a single misconfiguration means someone's data disappears at 3 AM. Based in Sydney. Now applying the same discipline to physical systems: energy, water, communications, and the community that depends on them.

*Rationale: "Background in tech" says nothing. The 3 AM image is visceral and immediately communicates the stakes and rigor involved. The pivot from digital to physical infrastructure mirrors BARK's story.*

---

### pillars/retreat.astro

**BEFORE (lines 21-28, the full Technoshamanism section):**
> We use this term deliberately. "Techno" because we embrace technology as a tool for human flourishing. "Shamanic" because we respect that not everything that matters can be measured, and that the deepest human knowledge often comes through direct experience rather than abstraction.
>
> This isn't New Age escapism. It's a rigorous, open-minded exploration of what it means to be human in an age of accelerating technological change.

**AFTER:**
> The term is deliberate. "Techno" because we use EEG monitoring, heart-rate variability tracking, and controlled environmental design alongside traditional practice -- not to replace intuition, but to understand it. "Shamanic" because the Yungas has been a site of plant-based healing practice for centuries, and we think the Western impulse to either romanticize or criminalize that knowledge is equally useless.
>
> Concretely: a retreat participant might spend the morning in a guided meditation session monitored by biometric sensors, the afternoon learning from a local curandero about medicinal plant identification, and the evening reviewing their physiological data with a facilitator trained in both neuroscience and contemplative practice. This is not New Age tourism. It is a research program with paying participants.

*Rationale: The current version is defensive ("This isn't...") without being descriptive. The rewrite shows what actually happens, names the technology, and positions the retreat as a research program rather than a vibes-based experience. This is critical for investor and builder audiences.*

---

### pillars/infrastructure.astro

**BEFORE (Energy section, lines 12-18):**
> - Solar primary -- Yungas receive strong solar radiation year-round; PV arrays with battery storage
> - Micro-hydro -- mountain streams provide consistent small-scale hydroelectric potential
> - Grid connection -- maintained as backup and for selling excess generation
> - Energy management -- smart load balancing, priority systems, graceful degradation

**AFTER (replace with narrative + data):**
> The Yungas receives 3.5-4.5 kWh/m2/day of solar radiation -- good, but not exceptional by tropical standards. Cloud forest means more overcast days than the Altiplano above. The system compensates with a dual approach: photovoltaic arrays sized for the community's base load, paired with micro-hydro turbines fed by the mountain streams that run year-round within 500 meters of any viable building site in the Coroico area. When the sun is weak, the water is strong. When the dry season slows the streams, the skies clear.
>
> The national grid stays connected as backup and as a revenue channel -- Bolivia's net metering framework allows cooperatives to sell excess generation. Smart load balancing ensures that essential systems (water purification, communications, cold storage) receive priority during low-generation periods.

*Rationale: The current page is a bulleted outline. The infrastructure page should be the most data-dense page on the site because it is the page that answers "can this actually work?" The solar data already exists on the technopark page -- it should live here and be expanded.*

---

### investors.astro

**BEFORE (line 107-109):**
> BARK is not a speculative venture or a feel-good donation. It is an investable project backed by real assets, generating real revenue, in a real place. Here is why it deserves serious consideration.

**AFTER:**
> BARK does not yet exist as a legal entity. No land has been purchased. No revenue has been generated. What exists is a detailed plan, a founding team, this website, and the research behind it. We lead with that honesty because the investment thesis that follows only has value if you trust the people presenting it. Here is the case for why this project deserves capital and your attention.

*Rationale: The current opening implies BARK is already generating revenue ("generating real revenue"). It is not -- the investors page itself says so at line 259-260 ("BARK does not yet exist as an operating entity"), buried deep in a risk section. Leading with the truth is both more honest and more persuasive to sophisticated investors, who will discover the truth anyway and lose trust if it was hidden.*

---

## Appendix: Priority Actions (Ranked)

1. **Fix the bird species count discrepancy** (homepage 500+ vs. location 400-500+). Small, fast, trust-damaging if noticed.
2. **Align "components" terminology** across all pages. Search-and-replace "organs" and "pillars" in user-facing text.
3. **Fix "off-grid" vs. "semi-autonomous" inconsistency** in FAQ. One find-and-replace.
4. **Add the BARK acronym expansion** ("Bolivian Ark") to the homepage opening paragraph.
5. **Rewrite investors.astro opening paragraph** to lead with current status honesty.
6. **Reconcile "self-sustaining from year one" with break-even table** on technopark page.
7. **Expand retreat.astro** with operational detail, comparable retreat pricing, and a sample program.
8. **Expand infrastructure.astro** with data from technopark and location pages.
9. **Add response process** to participate.astro ("Here's what happens after you email us").
10. **Add evidence links** to all factual claims per Section 3 above.
11. **Strengthen team.astro bios** with specific, relevant experience details.
12. **Add one-clause technoshamanic gloss** on every page where the term appears for the first time.

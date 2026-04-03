# Fact-Check: Five Components Pages

Audit date: 2026-04-02
Scope: 6 pages under `src/pages/en/pillars/`
Status key: VERIFIED (confirmed against primary source), SUPPORTED (credible source, not independently confirmed), QUALIFIED (true with caveats), UNVERIFIED (no source found), STALE (was true, may be outdated), SOUND (logically valid), PLAUSIBLE (reasonable but unproven), WEAK (logical gaps), SPECULATIVE (aspirational or unfounded)

---

## Page: index.astro (Five Components Overview)

### Facts
| Claim | Source | Status |
|---|---|---|
| BARK has five interconnected components | Internal architecture claim | VERIFIED (matches site structure) |
| Components: Techno Park, Startup Incubator, Trading House, Retreat Center, Infrastructure | Internal architecture claim | VERIFIED (matches subpages) |

### Arguments
| Argument | Status | Notes |
|---|---|---|
| "Each supports the others -- remove one and the structure weakens" | PLAUSIBLE | Systems-thinking framing; no evidence given that removing one actually breaks the others |

### Implicit Claims
| Claim | Risk |
|---|---|
| Five is the right number of components (not four, not six) | Low -- design choice, not factual claim |
| All five are equally necessary | Medium -- some may be more critical than others; no dependency analysis shown |

---

## Page: technopark.astro (Techno Park)

### Facts
| Claim | Source | Status |
|---|---|---|
| Coffee wet mill $1,500-$12,000 for 500-5,000 kg/day | Cited: Penagos, McKinnon, specialty suppliers [1] | SUPPORTED -- consistent with industry pricing for small-scale wet mills |
| Coffee roaster $12,000-$40,000 for 5-30 kg batch | Cited: specialty equipment suppliers [1] | SUPPORTED -- aligns with Diedrich, Probat, Giesen price ranges |
| Roasted retail coffee $25-45/lb | Cited: ICO/SCA [1] | SUPPORTED -- high end of specialty market; mainstream specialty is $15-30/lb |
| Cacao bean-to-bar line $5,000-$25,000 small batch | Cited: CocoaTown, Selmi [2] | SUPPORTED -- CocoaTown melangers start ~$1,500; full line costs vary widely |
| Cacao production-scale $50,000-$100,000 | Cited: craft chocolate suppliers [2] | SUPPORTED -- reasonable for mid-scale operations |
| Chocolate bars retail $8-15 per 70g | Market observation | VERIFIED -- consistent with craft/bean-to-bar market pricing |
| DIY solar dryer $50-$200 in materials | Cited: appropriate technology suppliers [3] | SUPPORTED -- typical for tunnel dryer builds |
| Commercial cabinet dryer $900-$1,900 | Cited: appropriate technology suppliers [3] | SUPPORTED -- matches SolarFlex and similar brands |
| Essential oil still 20-100L: $2,000-$3,600 | Cited: copper still manufacturers [4] | SUPPORTED -- consistent with Olympic Distillers, Hillbilly Stills pricing |
| Essential oils retail $15-50 per 10ml | Market observation | QUALIFIED -- true for premium single-origin; commodity oils much cheaper |
| 3D printing workshop $2,000-$10,000 | Cited: Prusa, Bambu Lab, Creality, Formlabs [5] | VERIFIED -- reasonable for multi-printer setup |
| OSE GVCS: 50 industrial machines, open-source | OSE website [6] | VERIFIED -- opensourceecology.org confirms 50-machine target |
| Fab Lab: 1,500+ labs in 100+ countries | Cited: MIT/Fab Foundation [7] | STALE -- Fab Foundation reported 2,500+ labs as of 2024; the 1,500 figure is outdated. Network page says 2,500+, creating internal inconsistency |
| Standard Fab Lab cost $50,000-$100,000 | Cited: Fab Foundation [7] | SUPPORTED -- traditional Fab Lab inventory estimate; costs vary by region |
| Solar irradiance 3.5-4.5 kWh/m2/day in Yungas | Global Solar Atlas | VERIFIED -- confirmed on factcheck.astro against World Bank/ESMAP data |
| Micro-hydro 1-100 kW potential in Yungas terrain | General engineering claim | SUPPORTED -- terrain and rainfall are suitable; no site-specific survey cited |
| Nickel-iron batteries last 50+ years | General engineering knowledge | QUALIFIED -- Edison NiFe cells have documented 80+ year lifespans, but modern production quality varies; few current manufacturers |
| Solar panels last 25+ years | Industry standard | VERIFIED -- standard manufacturer warranty is 25 years; degradation ~0.5%/yr |
| Sand filtration "proven for 200+ years" | General history | VERIFIED -- slow sand filtration dates to 1804 (Paisley, Scotland) |
| Yungas has 5,000+ medicinal plant species | Cited elsewhere: Ministerio de Medio Ambiente | UNVERIFIED -- Bolivia has ~20,000 total plant species; 5,000 medicinal in Yungas alone is high. Likely conflates national with regional figure |
| David J. Gingery (1932-2004) | Historical claim | QUALIFIED -- widely reported birth/death years; 1932 birth not independently confirmed from primary source |
| Gingery wrote seven-book series | Published works | VERIFIED -- "Build Your Own Metal Working Shop from Scrap" 7-volume series is well-documented |
| Gingery books: foundry, lathe, shaper, mill, drill press, dividing head, brake | Published works | VERIFIED -- correct order and content of all seven volumes |
| Book set ~$50 | Market pricing | STALE -- current pricing closer to $80-120 for the set; individual books $12-16 |
| RepRap self-replicates 73% of parts (Civilization table) | reprap.org | QUALIFIED -- varies by model. Site also says "50-70% by component weight" elsewhere, creating internal inconsistency |
| RepRap self-replication 50-70% by component weight (lower section) | reprap.org wiki | QUALIFIED -- factcheck.astro already flags this as model-dependent |
| Precious Plastic by Dave Hakkens, four machines | preciousplastic.com | VERIFIED -- shredder, extrusion, injection, sheet press confirmed |
| Precious Plastic DIY build $200-$2,000 per machine | preciousplastic.com community data | SUPPORTED -- community builds vary widely; $200 is very optimistic |
| Total Techno Park budget $80,000-$200,000 | Summation of individual line items | SUPPORTED -- math checks out if individual prices are correct, but range is very wide |
| Combined profit portfolio $43K-$129K Year 1 | Summation of individual projections | QUALIFIED -- depends on all five lines operating simultaneously in Year 1, which is ambitious |
| Coffee investment $25K-$55K, Year 1 profit $12K-$27.5K, break-even 1.5-3 years | Internal projection | QUALIFIED -- requires functioning supply chain, market access, and trained operators from day one |
| Cacao investment $15K-$35K, Year 1 profit $6.3K-$18.8K | Internal projection | QUALIFIED -- bean-to-bar Year 1 profitability assumes established brand and distribution |
| Fruit dehydration investment $2K-$8K, Year 1 profit $7.5K-$25K, break-even 3-12 months | Internal projection | QUALIFIED -- highest margin claim; plausible if dried fruit market access exists |
| Essential oil investment $8K-$20K, Year 1 profit $2K-$13K | Internal projection | QUALIFIED -- essential oil yield rates highly variable; requires botanical expertise |
| Solar installation investment $15K-$40K, Year 1 profit $15K-$45K | Internal projection | QUALIFIED -- assumes access to Bolivia's $325M solar program contracts |
| Motorized micro-mill ~$7,000 with documented 18-month ROI | Cited: comparable deployments | UNVERIFIED -- "documented" but no specific source provided |
| Full artisan chocolate operation $150,000-$300,000 | Industry estimate | SUPPORTED -- consistent with mid-scale chocolate factory costs |
| Freeze-dryer $15,000-$30,000 | Market pricing | SUPPORTED -- Harvest Right commercial units in this range |
| Ceramic filters ~$50/unit, 50 liters/day | CAWST data | VERIFIED -- CAWST (Centre for Affordable Water and Sanitation Technology) confirms this |
| Bio-sand filters ~$50/unit | CAWST data | VERIFIED -- standard CAWST bio-sand filter cost |
| Community membrane system under EUR25/capita | General water treatment data | UNVERIFIED -- no specific source cited; highly dependent on scale and technology |
| FDM 3D printer $200-$500 | Market pricing 2024-2025 | VERIFIED -- Creality Ender-3 ~$200, Bambu A1 Mini ~$300 |

### Arguments
| Argument | Status | Notes |
|---|---|---|
| "Everything built here is open-source by default" | SOUND | Policy statement, internally consistent with stated values |
| Selling raw cherry at a fraction of processed price | SOUND | Well-established in coffee economics; value-add through processing is real |
| Coffee roaster is "single highest ROI piece of equipment" | PLAUSIBLE | Reasonable given coffee margins, but no comparative ROI analysis shown |
| Remote community needs 3D printing for replacement parts | SOUND | Well-established appropriate technology argument |
| "Technology sovereignty is a prerequisite for genuine autonomy" | PLAUSIBLE | Philosophical claim; historically supported by examples of technology dependence |
| Six capabilities define thriving vs. surviving community | PLAUSIBLE | Reasonable framework but presented as definitive when it is a design choice |
| Communities survive disruption through fabrication, not stockpiles | QUALIFIED | Cuba and post-Soviet examples support this, but stockpiles also matter |
| "The library is the most important infrastructure" | PLAUSIBLE | Strong argument for knowledge preservation; "most important" is subjective |
| Revenue within first year, profitability 1-5 years | WEAK | Ambitious timeline for a greenfield operation in rural Bolivia with no existing team |

### Implicit Claims
| Claim | Risk |
|---|---|
| Equipment prices are stable and available for Bolivia delivery | Medium -- import duties, shipping to Yungas, and currency instability not factored |
| Skilled operators will be available for all equipment lines | High -- assumes human capital that does not yet exist on site |
| Market access for all processed goods already exists or is easy to establish | High -- international export from rural Bolivia requires certifications, logistics, relationships |
| Year 1 profit projections assume simultaneous operation of all lines | High -- staffing, training, and market development for 5 lines simultaneously is very ambitious |
| "Conservative" estimates may not be conservative | Medium -- self-described as conservative but assume best-case operating conditions |
| All OSE GVCS machines are "directly buildable" in Yungas | Medium -- OSE machines require specific materials and skills; "several" is vague |

---

## Page: incubator.astro (Startup Incubator)

### Facts
| Claim | Source | Status |
|---|---|---|
| Yungas arabica retails $25-45/lb roasted | Trading House cross-reference, ICO/SCA | SUPPORTED -- high end of specialty; see Techno Park notes |
| 3-10x margin over green FOB prices | Derived from FOB $4.60/lb vs retail $25-45/lb | VERIFIED -- math: $25/$4.60 = 5.4x; $45/$4.60 = 9.8x. Checks out |
| Bolivian cacao $8-15 per 70g bar | Market data, craft chocolate surveys | SUPPORTED -- consistent with craft chocolate pricing |
| Bolivia exported 621 metric tons raw cacao in 2023 | IBCE | SUPPORTED -- cited on factcheck.astro, sourced to IBCE/Rio Times |
| Bolivia $325M+ solar electrification, 140,000 rural families | World Bank press release | VERIFIED -- confirmed on factcheck.astro against World Bank Nov 2023 release |
| Yungas coffee grows at 1,400-1,800m, natural shade | General agricultural knowledge | VERIFIED -- well-documented Yungas coffee altitude and cultivation method |
| Bolivia produces wild Beniano, Alto Beni cacao varieties | Bolivian cacao industry data | SUPPORTED -- these varieties are documented in Bolivian cacao literature |
| Starlink available in Bolivia 2025 | AP/ABC News Dec 2024 | VERIFIED -- Bolivia lifted satellite restrictions Dec 2024; service available 2025 |
| Coworking $150-300/month at comparable locations | Cited: Coworker.com, NomadList [4] | SUPPORTED -- Lake Atitlan and Bali pricing roughly in this range |
| Coliving $400-800/month | Cited: NomadList [4] | SUPPORTED -- varies widely by location; low end for Latin America |
| Retreat pricing $100-200/night or $500-2,000/week | Cited: comparable operations [5] | SUPPORTED -- consistent with mid-range Latin American retreats |
| ANMI Cotapata is a managed conservation area | SERNAP Bolivia | VERIFIED -- Area Natural de Manejo Integrado Cotapata is real |
| Bolivia hosts 5,000+ plant species with medicinal properties | Cited: Ministerio de Medio Ambiente y Agua [6] | UNVERIFIED -- see Techno Park notes; likely conflates Bolivia national figure with Yungas regional |
| Essential oils $15-50 per 10ml at retail | Market observation | QUALIFIED -- true for premium single-origin; wide range |
| Bolivia's cost structure: startup launching on $20-50K vs $500K in US | General comparison | PLAUSIBLE -- directionally correct but specific ratios unverified |

### Arguments
| Argument | Status | Notes |
|---|---|---|
| Not a Silicon Valley clone -- context-appropriate ventures | SOUND | Stated business model matches local conditions |
| Every startup serves the market connector model | SOUND | Internal consistency with Trading House page |
| Incubator builds businesses the Trading House needs | SOUND | Logical integration of components |
| "No equity grab -- goal is a thriving ecosystem" | PLAUSIBLE | Policy claim; unusual for incubators but consistent with cooperative model |
| Bolivia cost structure = faster iteration, longer runway | SOUND | Well-established cost arbitrage argument for developing-country startups |
| Proprietary IP to founders, meta-knowledge is commons | PLAUSIBLE | Reasonable model but enforcement in practice is untested |

### Implicit Claims
| Claim | Risk |
|---|---|
| Digital nomads will come to Coroico specifically | Medium -- requires infrastructure (Starlink, coworking space) that does not yet exist |
| Mentorship from "experienced founders" is available | High -- no founders are identified; assumes human capital not yet recruited |
| Bolivia's permissive tourist visa supports extended stays for digital nomads | Medium -- tourist visas have 90-day limits; working legally requires different arrangements |
| Plant medicine retreats are viable "subject to local legal framework" | Medium -- Bolivia's legal landscape for plant medicine is complex and evolving |
| Agricultural tech services have paying customers among Yungas farmers | Medium -- subsistence/small farmers may not pay for tech advisory services |

---

## Page: trading.astro (Trading House)

### Facts
| Claim | Source | Status |
|---|---|---|
| Coffee FOB $4.60/lb median specialty | ICO/SCA, 2024 Specialty Coffee Transaction Guide | VERIFIED -- confirmed on factcheck.astro |
| Roasted retail $25-45/lb | ICO/SCA | SUPPORTED -- high end of specialty range |
| Yungas produces ~95% of Bolivia's coffee, almost entirely arabica | General knowledge, Bolivian coffee industry | SUPPORTED -- widely cited figure; exact percentage varies by source (90-95%) |
| Cacao exports $2.9M, 621 metric tons (2023) | IBCE [2] | SUPPORTED -- confirmed on factcheck.astro sourced to IBCE |
| Tropical fruits $221M nationally, 38% growth YoY | IBCE [3] | UNVERIFIED -- $221M figure and 38% YoY growth not independently confirmed; no year specified for growth figure |
| Dried fruit 5-10x fresh price by weight | General trade data | QUALIFIED -- true for some fruits (mango, berries) but not universally; weight loss ratio is the main driver |
| Essential oils retail $15-50 per 10ml | Market observation | QUALIFIED -- premium single-origin; see Techno Park notes |
| Stingless bees (Meliponini) present in Yungas | Entomological knowledge | VERIFIED -- Meliponini are native to the Yungas region |
| Bolivia imported $16.8M in construction materials, January 2026 alone | Not cited | UNVERIFIED -- specific monthly figure with no source; difficult to verify |
| Transport to Coroico adds 15-25% to goods from La Paz | Not cited | UNVERIFIED -- plausible for Yungas logistics but no source provided |
| La Paz 3-3.5 hours by road from Coroico | General travel knowledge | VERIFIED -- standard drive time on the Yungas Road |
| Mercado Rodriguez 5km from La Paz city center | Geographic claim | QUALIFIED -- Rodriguez market is in La Paz central zone; "5 km" is approximate and depends on reference point |
| Cochabamba 8-10 hours by road | General travel knowledge | SUPPORTED -- roughly correct via La Paz or Oruro route |
| Santa Cruz 12-14 hours by road | General travel knowledge | SUPPORTED -- roughly correct; depends on route and conditions |
| El Alto is Bolivia's fastest-growing city | Demographic data | SUPPORTED -- widely reported; one of the fastest-growing cities in South America |
| Feria 16 de Julio is the country's largest open-air market | Cultural knowledge | SUPPORTED -- commonly described as one of the largest in South America |
| Processing adds 3-10x value | Derived from FOB vs retail comparisons | QUALIFIED -- true for coffee (5-10x); varies significantly by product |
| Ley 356 governs cooperative treasury | Bolivian law | VERIFIED -- confirmed across multiple site pages and factcheck.astro |

### Arguments
| Argument | Status | Notes |
|---|---|---|
| BARK is a market connector, not a competitor to farmers | SOUND | Model is internally consistent: buy surplus, process, export |
| "No middlemen extracting margins" | QUALIFIED | BARK itself is a middleman, albeit a cooperative one; claim is about eliminating extractive intermediaries |
| Individual farmers cannot reach international markets alone | SOUND | Well-established agricultural trade barrier for smallholders |
| Reverse flow (importing tech goods) creates mutual benefit | SOUND | Two-way trade model is logically coherent |
| Bulk procurement reduces 15-25% transport markup | PLAUSIBLE | Economies of scale in logistics are real but exact savings unverified |
| Multi-currency + crypto for cross-border payments | PLAUSIBLE | Technically feasible; regulatory compliance in Bolivia unaddressed |
| Barter networks for crisis scenarios | PLAUSIBLE | Historically supported but requires critical mass of participants |
| Rising tide approach benefits local producers | SOUND | Shared logistics and market access is a well-established cooperative benefit |

### Implicit Claims
| Claim | Risk |
|---|---|
| BARK can establish export channels to US, Europe, Japan, Australia | High -- requires certifications (organic, fair trade), relationships, and logistics infrastructure |
| Fair prices will be competitive enough to attract farmers away from existing buyers | Medium -- existing market relationships and trust take time to displace |
| BARK can simultaneously be buyer, processor, exporter, and importer | High -- enormous operational complexity for a startup cooperative |
| Crypto capabilities avoid "banking friction" without regulatory issues | Medium -- Bolivia's stance on cryptocurrency has been restrictive |
| "Financial resilience" through diversification assumed without evidence | Medium -- three-currency operation adds complexity, not just resilience |

---

## Page: retreat.astro (Retreat Center)

### Facts
| Claim | Source | Status |
|---|---|---|
| Rhythmia, Costa Rica: ~$5,000 for 7 nights | Market research | SUPPORTED -- Rhythmia Life Advancement Center pricing is roughly in this range; varies by season |
| Soltara, Costa Rica: ~$3,000 for 7 nights | Market research | SUPPORTED -- Soltara Healing Center pricing approximately correct |
| Pisatahua, Bolivia: $945-$1,895 for 8-10 days | Market research | UNVERIFIED -- Pisatahua is a real operation in Bolivia but current pricing not independently confirmed |
| BARK projected pricing $1,000-$2,000 for 7 days | Internal projection | N/A -- future pricing, not a factual claim |
| Consumer-grade EEG: Muse, OpenBCI | Product knowledge | VERIFIED -- both are real consumer EEG platforms |
| HRV correlates with stress resilience | Neuroscience literature | VERIFIED -- well-established in psychophysiology research |
| HRV is improvable during a single week | Neuroscience literature | SUPPORTED -- HRV biofeedback studies show short-term improvements |
| Shinrin-yoku supported by peer-reviewed research for cortisol reduction | Published research | VERIFIED -- Li (2010), Park et al. (2010) and others document cortisol effects |
| Yungas cloud forest is "one of the most biodiverse ecosystems on Earth" | Conservation literature | SUPPORTED -- Yungas is a recognized biodiversity hotspot; "one of the most" is defensible |
| Revenue range $160,000-$720,000/year at full operation | Internal calculation | QUALIFIED -- math: 20 retreats x 8 guests x $1,000 = $160K; 30 x 12 x $2,000 = $720K. Arithmetic checks out |
| Operating costs 40-55% of revenue | Industry benchmark | SUPPORTED -- reasonable for retreat operations in a low-cost country |
| Net contribution $70,000-$400,000/year | Derived from revenue minus costs | QUALIFIED -- math: $160K x 45% margin = $72K; $720K x 55% margin = $396K. Arithmetic checks out |
| Year 1 likely 8-12 retreats, 6-8 guests average | Internal projection | PLAUSIBLE -- conservative ramp-up estimate |
| Aymara healing traditions present in Yungas | Cultural knowledge | VERIFIED -- Aymara communities are present in the Yungas region |

### Arguments
| Argument | Status | Notes |
|---|---|---|
| Technology + tradition are partners, not opposites | PLAUSIBLE | Philosophical position; "technoshamanism" is a recognized concept |
| Data layer transforms subjective experience into trackable results | SOUND | Biometric monitoring is well-established for quantified wellness |
| No other SA retreat combines EEG + HRV + indigenous healing | PLAUSIBLE | Likely true as of writing but difficult to verify exhaustively |
| Open-source research dataset from consenting guests | SOUND | Technically feasible; ethical if properly consented |
| Community context > resort isolation for guest experience | PLAUSIBLE | Differentiator claim; some guests may prefer isolation |
| Bolivia's lower costs allow margins Costa Rican operations cannot match | SOUND | Bolivia operating costs are significantly lower than Costa Rica |
| Retreat is most effective recruiting tool for community | PLAUSIBLE | Reasonable conversion funnel argument; unproven |
| Longevity research is explicitly labeled aspirational | SOUND | Appropriately hedged with "Note: Everything below is aspirational" |

### Implicit Claims
| Claim | Risk |
|---|---|
| Qualified neuroscience-trained facilitators will be available | High -- specialized staff in rural Bolivia is a major recruitment challenge |
| Indigenous practitioners will consent to participate and share knowledge | Medium -- requires established relationships and cultural sensitivity |
| EEG/HRV data collection is meaningful in a non-clinical setting | Medium -- consumer-grade devices have lower accuracy than clinical equipment |
| 20-30 retreats per year is operationally sustainable | Medium -- requires consistent marketing, bookings, and staffing |
| Guests will pay premium for technology integration over pure wellness | Medium -- untested market assumption |
| "Longevity research" phases assume medical partnerships and regulatory approval | High -- acknowledged as aspirational but listed alongside operational plans |
| NAD+, senolytics, epigenetic testing framed alongside proven modalities | Medium -- conflating established science with experimental interventions |

---

## Page: infrastructure.astro (Infrastructure)

### Facts
| Claim | Source | Status |
|---|---|---|
| Solar irradiance 3.5-4.5 kWh/m2/day | Global Solar Atlas (World Bank/ESMAP) | VERIFIED -- confirmed on factcheck.astro |
| Mountain streams within 500m of any viable building site | Site knowledge claim | UNVERIFIED -- plausible for Yungas terrain but no survey cited |
| 200-400m elevation drop over short distances | Yungas terrain data | SUPPORTED -- Yungas terrain is known for steep gradients; specific claim unverified |
| Micro-hydro 1-100 kW run-of-river systems | Engineering potential | SUPPORTED -- standard micro-hydro range for appropriate terrain |
| Wet season Nov-Mar, solar and hydro are counter-cyclical | Climate data | VERIFIED -- well-established Yungas climate pattern |
| Bolivia electrical grid reaches Coroico | Infrastructure knowledge | VERIFIED -- Coroico has grid electricity |
| Net metering regulations exist in Bolivia | Energy policy | SUPPORTED -- Bolivia has renewable energy incentives; specific net metering rules evolving |
| Annual rainfall 1,100-1,300mm | Climate-Data.org, SENAMHI | SUPPORTED -- confirmed on factcheck.astro |
| Bio-sand filters ~$50 per unit | CAWST | VERIFIED -- see Techno Park notes |
| Greywater recycling reduces freshwater demand 30-40% | WHO Guidelines for Safe Use of Wastewater | SUPPORTED -- WHO guidelines cite similar range; depends on system design |
| Composting toilets produce methane | Biology/engineering | QUALIFIED -- biodigesters produce methane; composting toilets typically do not. These are different systems conflated in one sentence |
| Coroico mean annual temperature 18-19C | Climate data | VERIFIED -- confirmed on factcheck.astro as 18-28C range |
| Coffee shade-grown at 1,400-1,800m in Yungas | Agricultural knowledge | VERIFIED -- standard Yungas coffee altitude |
| Cacao viable below 1,200m in Yungas | Agricultural knowledge | SUPPORTED -- cacao generally needs lower, warmer elevation |
| Wild Beniano and Alto Beni cacao varieties internationally recognized | Bolivian cacao industry | SUPPORTED -- documented in chocolate industry literature |
| Aquaponics 500-1,000L system: 50-100 kg fish, 200-400 kg vegetables/year | FAO Technical Paper No. 589 | SUPPORTED -- FAO TP 589 is a real document on small-scale aquaponics; yields vary by system |
| FAO Technical Paper No. 589 exists | FAO publications | VERIFIED -- "Small-scale aquaponic food production" is a real FAO publication |
| Bolivia historically had slowest internet in South America | Speedtest Global Index (Ookla) | QUALIFIED -- Bolivia has consistently ranked near the bottom; "slowest" may not be true every year (Paraguay, Venezuela also rank low) |
| Bolivia has 3G/4G from Entel, Tigo, Viva | Telecom knowledge | VERIFIED -- these are Bolivia's three main mobile operators |
| Starlink 50-200 Mbps download | Starlink specifications | SUPPORTED -- advertised speeds; actual performance varies by location and congestion |
| Bolivia lifted satellite internet restrictions December 2024 | AP/ABC News | VERIFIED -- confirmed on factcheck.astro |
| LoRa range 2-15 km depending on terrain | Semtech specifications | VERIFIED -- standard LoRa specification |
| LoRa node cost $15-$50 | Open-source hardware suppliers (LILYGO, Heltec) | VERIFIED -- LILYGO T-Beam ~$20-30, Heltec boards ~$15-25 |
| LoRa operates on unlicensed ISM bands | Regulatory knowledge | VERIFIED -- LoRa uses ISM 868/915 MHz bands |
| HF radio can reach La Paz without infrastructure | Radio engineering | VERIFIED -- HF propagation allows long-range communication |
| Low-tunnel greenhouse $200-$500 per tunnel | Appropriate technology estimates | SUPPORTED -- basic bamboo + plastic tunnel costs vary; reasonable for small tunnels |

### Arguments
| Argument | Status | Notes |
|---|---|---|
| Dual solar-hydro exploits complementary/counter-cyclical nature | SOUND | Wet season = more hydro, less solar; dry season = more solar, less hydro. Valid |
| Solar alone is insufficient due to cloud forest | SOUND | Honest assessment; 3.5-4.5 kWh/m2/day is moderate, not high |
| Battery storage sized for 48-72 hours autonomy | PLAUSIBLE | Engineering target; cost depends on load and battery chemistry |
| Gravity-fed spring capture eliminates pumping energy costs | SOUND | Standard appropriate technology approach for mountain sites |
| Multi-stage water treatment is proven appropriate technology | SOUND | Slow sand filtration + UV is well-established |
| Seed bank serves both resilience and conservation | SOUND | Dual-purpose argument is valid |
| Permaculture food forest provides year-round food in Yungas | SUPPORTED | Year-round growing season is real; "100% self-sustaining once established" is optimistic |
| Systems designed for graceful degradation | SOUND | Design principle, not factual claim |
| Local knowledge base on local servers survives internet loss | SOUND | Standard resilience architecture |

### Implicit Claims
| Claim | Risk |
|---|---|
| All infrastructure can be built and maintained by residents | High -- requires diverse technical skills (solar, plumbing, networking, agriculture) |
| Surplus electricity can be sold via net metering for revenue | Medium -- Bolivia's net metering framework is still developing; bureaucratic hurdles likely |
| Starlink will remain available and affordable in Bolivia long-term | Medium -- satellite service depends on SpaceX business decisions and Bolivian regulation |
| Permaculture can fully feed the community | High -- "100% self-sustaining" claim for food is extremely ambitious |
| Aquaponics at 1,750m elevation with trout is practical | Medium -- trout need cool, well-oxygenated water; tilapia need warmer water; both at same site is challenging |
| Community membrane water system under EUR25/capita is achievable | Medium -- no specific technology or vendor cited |
| All systems can be replicated by others using open documentation | Medium -- documentation =/= transferability; local conditions vary enormously |

---

## Cross-Page Issues

### Internal Inconsistencies
| Issue | Pages | Severity |
|---|---|---|
| RepRap self-replication: "73%" in Civilization table vs "50-70%" in Self-Replicating Workshop section | technopark.astro | Medium -- contradictory figures on same page |
| Fab Lab count: "1,500+ labs" on technopark.astro vs "2,500+ labs" on network.astro | technopark.astro, network.astro | Medium -- outdated figure on technopark page |
| "5,000+ medicinal plant species" in Yungas (technopark, incubator) vs "3,000+ plant species" in Cotapata-Yungas (location, investors) | Multiple pages | Medium -- different claims about plant biodiversity; 5,000 medicinal species in Yungas alone seems inflated |
| Composting toilets conflated with biodigesters (infrastructure) | infrastructure.astro | Low -- technically different systems mentioned in one sentence |

### Recurring Unverified Claims
| Claim | Appears On | Notes |
|---|---|---|
| Transport adds 15-25% to goods from La Paz | trading.astro | No source; plausible but unsubstantiated |
| Bolivia imported $16.8M construction materials Jan 2026 | trading.astro | Very specific figure with no citation |
| $221M fruit exports, 38% YoY growth | trading.astro | IBCE cited but figure not independently confirmed |
| 5,000+ medicinal plant species in Yungas | technopark.astro, incubator.astro | Likely national figure misattributed to region |

### Systemic Risk: Optimism Bias
All financial projections assume best-case operating conditions: skilled staff available, market access established, equipment operational, supply chains working. No page addresses the compound probability that ALL of these must succeed simultaneously for the integrated model to work. Individual component economics may be sound; the coordination risk of running all five components as a startup cooperative is the elephant in the room.

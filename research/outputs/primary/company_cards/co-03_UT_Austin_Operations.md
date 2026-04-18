# UT Austin — Operations (Troy Nevels)

# Generated: 2026-04-17T15:18:33.560924

---

# INTELLIGENCE CARD — UT AUSTIN OPERATIONS (TROY NEVELS)

---

## COMPANY SNAPSHOT

**Company:** University of Texas at Austin — Utilities & Energy Management (UEM) | **Industry:** Higher Education / District Energy Production | **Size:** Major research university; ~60 MW peak electrical load, 60,000 tons chilled water generation capacity, multiple steam and gas turbine assets | **Annual Energy Spend:** Not disclosed in dollar terms; external spend is limited by on-site generation — primary external costs are natural gas (Texas Gas Service) and Austin Energy capacity/standby charges; internal billing flows to ~25+ campus buildings | **Current Energy Tools:** Optimum (chilled water optimization platform, in use ~10 years; connects to control systems and provides efficiency set-point recommendations); internal SCADA/control systems; manual monthly meter reconciliation by operations staff; student-engaged AI forecasting project ("Texas Energy Consultants") in progress | **Currently Using AI:** Partially — Optimum provides algorithmic optimization for chilled water only; a student-formed company is building a weather-correlated load forecasting model for UT Austin that was presenting results the week following the interview; no enterprise AI billing or energy management platform in use

---

## WHO WAS ON THE CALL

**Troy Nevells**

- **Exact Title:** Director of Engineering & Technical Services, Utilities & Energy Management (UEM), UT Austin Campus Operations
- **Tenure at UT:** ~7 months at time of interview (April 2026); recently joined from Yale University
- **Background:** Power generation engineer by training and career — gas turbines, steam turbines, combined-cycle systems, heat recovery steam generators, district energy infrastructure. Prior roles include Yale University power plant operations (responsible for monthly natural gas and electric bill review plus utility-vs-internal meter reconciliation) and Frito-Lay corporate headquarters in Plano, TX as Sustainability Principal Engineer supporting all of Frito-Lay North America (US and Canada), where he interfaced with energy data across multiple manufacturing facilities each with multiple meters
- **Specific Area of Ownership:** Engineering strategy and technical support for all of UT Austin's utility generation and distribution — electricity, steam, and chilled water. Also leading the reinvigoration of UT's building-side energy management team, which had been dormant for several years following a leadership change. Does not directly own the financial billing audit function — that sits closer to Andi Ault's domain — but has direct hands-on experience with bill reconciliation from his Yale tenure

---

## THEIR ENERGY CALENDAR

UT Austin's energy year is dictated almost entirely by cooling load, not heating, and Troy described this with specific numbers rather than generalizations.

**Summer (June–August) — Peak Stress Period:** Electrical load climbs to ~40 MW this time of year (interview was April) and peaks higher in summer when all electrical chillers are running simultaneously to meet chilled water demand. The chilled water system — 60,000 tons of capacity against a ~35,000-ton peak — is the single largest internal energy consumer on campus. This is when Optimum's chilled water optimization work is most consequential and when generation assets are under maximum load. Troy said: _"Our peak is in the summertime when we're running all of our electrical chillers to generate that chill water."_

**Winter — Relatively Calm:** Electrical load drops to approximately 30 MW. Heating load shifts to steam distribution (165 PSI extraction from steam turbines, supplemented by backup boilers). The campus is not stressed in winter the way it is in summer.

**Monthly — Ongoing Reconciliation:** The operations team runs a continuous monthly comparison between UT's internal UEM meters and the utility provider meters — natural gas bills vs. Texas Gas Service readings, Austin Energy electric import bills vs. internal UEM electric meters. Troy described this as a standing operational discipline: _"Our operation team does that here. So they're comparing our natural gas bills compared to Texas gas billing, and then they're comparing Austin Energy's bills to our internal UEM electric meters as well."_

**Near-Term Strategic — Rebuilding Energy Management:** UT had a robust building-side energy management function that was effectively disbanded a few years ago following a leadership change. Troy is actively rebuilding it. He described the current state as: _"We were primarily just concentrating on our production efficiencies and not really on our building side energy management. But we're bringing that energy management group back now."_ This means UT Austin is in a period of deliberate investment in energy management infrastructure — the organization is in a building mode, not a maintenance mode.

**Reactive Trigger — Asset Failure / Load Shedding:** When generation assets trip unexpectedly, the campus must shed load immediately. The current system is described as crude and reactive: _"Your frequency starts to dip, shut off these five buildings. So we're taking off and we're doing this response in like big chunks."_ This is a recognized operational weakness Troy would like to improve.

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Manual, Crude Demand Response — No Intelligent Load Prioritization**
UT Austin can island itself from the grid and run entirely on internal generation, but when assets fail, the load-shedding system is blunt. There is no intelligence to distinguish between a research lab that cannot go dark and a residential dorm that can absorb a temporary AC shutoff. Troy described the current state explicitly: _"It's very antiquated. It's like your frequency starts to dip, shut off these five buildings. So we're taking off and we're doing this response in like big chunks. In the future, if we had that communication and the ability — based on building usages, could you just reach out and shut off certain things versus entire buildings?"_ He connected this directly to the absence of AI-enabled building automation integration.

**2. Building-Side Energy Management Was Abandoned — Now Rebuilding From Scratch**
UT's building-side energy management team was dismantled after a leadership change a few years ago, leaving a gap between production-side efficiency work and consumption-side optimization. Troy was candid: _"UT used to have a pretty robust energy management team underneath UEM. And then a couple of years ago, they had a change in leadership, and we kind of changed focus for UEM. We were primarily just concentrating on our production efficiencies and not really on our building side energy management. But we're bringing that energy management group back now."_ The institution is currently operating without the building-level intelligence layer it previously had.

**3. Meter Reconciliation Is Manual and Monthly — No Automated Discrepancy Detection**
Troy described performing this work personally at Yale and confirmed it continues at UT under his operations team. The process is purely manual comparison — utility provider meter reading vs. internal UEM meter reading, done once a month. He gave specific context: _"I was responsible there to scrub through the monthly natural gas bills and the monthly electric bills... we have the utility provider meters and we have UT meters, and then we do comparisons between the two meters monthly."_ There is no automated flagging when those numbers diverge.

**4. Chilled Water Optimization Is the Only Area With Third-Party Intelligence**
Optimum has been running on the chilled water system for approximately a decade, but this is the only system with algorithmic support. Steam, gas turbine operations, and building-side energy use are all managed without equivalent tools. Troy acknowledged they have discussed extending this model to other systems but have not done so: _"We've talked about potentially other companies that could get involved to look at some of our other systems to see if we have control systems or technologies that we can couple on that would help our efficiencies on our steam systems or our gas turbines, but we don't have that now."_

**5. No Weather-Correlated Load Forecasting — Currently Being Built by Students**
UT Austin does not currently have a production-grade system for forecasting campus energy load against weather. A student group is building one, but it is not yet operational. Troy described the gap and the workaround: _"They're using AI and they are trying to help us forecast using the outside temperatures and humidities and trying to help us forecast like one week in advance what our load should be based on a forecasted outlook on temperature. So yeah, they're actually presenting next week, so I'm kind of curious to see how their project went."_ The reliance on a student project signals the absence of a commercial solution in this space.

**6. District Energy Structure Limits Applicability of Standard Billing Intelligence — But Troy Articulates the Broader Market Precisely**
Troy was honest that UT's self-generation model means the external bill volume is low compared to a multi-site utility purchaser. However, his articulation of who does need the product was precise and specific, making this struggle a market intelligence asset rather than a dead end: _"If the University of Texas didn't have a district energy system and they had 25 buildings and each one of those had a utility meter, a water meter, an electrical meter, a natural gas meter — I can imagine that something like this would be very beneficial."_ He named Panda Restaurants, Frito-Lay, JCPenney, and Macy's as natural fits by name.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Realistic Near-Term Use (Given District Energy Structure):**
Troy is not a natural first-wave customer for the full billing intelligence suite. His external bill volume is limited. However, there are two specific workflows where Clear Current would provide immediate value at UT Austin:

**Module 1 — Meter Reconciliation Automation**
The monthly reconciliation between Austin Energy's import meter and UT's internal UEM electric meter, and between Texas Gas Service's natural gas meter and UT's internal production meters, is currently done manually by the operations team. Clear Current's invoice ingestion and anomaly detection could automate this comparison, flag discrepancies in real time rather than at month-end, and create a documented audit trail. Day one workflow change: the operations team stops running manual spreadsheet comparisons and instead reviews a flagged exception report. What Troy shows leadership: documented proof that utility provider bills match internal meter readings — or a specific dollar-figure discrepancy that the old manual process would have caught weeks later.

**Module 2 — Building-Side EUI Benchmarking (As the Energy Management Team Is Rebuilt)**
Troy is actively rebuilding UT's building-side energy management function. As that team comes online, they will need a way to track energy use intensity (EUI) across campus buildings — wet labs, dry labs, research facilities, residential halls — each of which has a different expected consumption profile. Clear Current's anomaly detection, if fed with internal submeter data from the district energy system, could flag buildings consuming outside their expected band based on type, square footage, and weather. Troy described this need unprompted: _"Whatever that building is, whatever age, vintage it is, the conditions of the roof, the conditions of the windows, the conditions of the air conditioning system — every building has specific EUIs, energy utility indexes, that that building based on whatever it is."_ This is exactly the per-building baseline comparison that Clear Current's platform enables.

**What They Would Show Leadership:**
Not CFO-focused — Troy is an engineering director. What he would show his VP or AVP of UEM: a dashboard showing meter reconciliation discrepancies caught automatically, building-level EUI deviations from expected bands, and a documented audit trail replacing the current manual monthly process. The financial framing matters less than operational defensibility and engineering credibility.

**What Is Out of Scope Right Now:**
Multi-invoice processing, tariff analysis across hundreds of accounts, and contract compliance monitoring — these are not relevant given UT's low external bill count. The demand response optimization Troy described (intelligent load shedding via BAS integration) is outside Clear Current's current product scope entirely.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

_"If you had all these mixes of technologies between solar and wind and battery and natural gas or other type technologies — that managing your assets and the variability in the assets, I can imagine AI would definitely help on that front... And for something like Panda, yeah, I can imagine for them it would be very beneficial. Or you get into the retail side, like a JCPenney's or a Macy's or any of those that would have multiple large retail shops. I could see that that would be beneficial."_

---

**Why this quote:** Troy is a credible, skeptical engineer with no incentive to validate the product — he runs a self-generating campus that doesn't need it in its current form. When a source like that names your exact target customers by name, unprompted, as the clear fit for what you're building, that is independent market validation from an institutional expert. John and Dan can use this quote in investor decks, in sales conversations with QSR and retail prospects, and in product positioning documents as third-party confirmation of market segmentation — not as a customer testimonial, but as an expert endorsement of who the product is for.

---

## BUYER READINESS

**Score: LOW (for billing intelligence) / MEDIUM (for meter reconciliation automation)**

**Why:**
UT Austin's district energy structure fundamentally limits the volume of external utility invoices that Clear Current's core billing intelligence platform is designed to process. Troy was direct and self-aware about this: the product solves a problem UT Austin mostly doesn't have at scale. There are no tens of thousands of invoice pages, no 2,300 locations, no strip mall billing errors to catch.

**What would make UT Austin a paying customer in 6 months:**
Clear Current would need to reframe the product for the district energy context — specifically as a meter reconciliation and building-side EUI monitoring platform rather than a billing intelligence tool. The pitch would center on: (1) automating the monthly utility-vs-internal meter reconciliation Troy currently does manually, and (2) providing building-level consumption benchmarking as UT's rebuilt energy management team comes online. The rebuild of the energy management function is the relevant buying trigger — Troy is actively standing up infrastructure right now, which means he is in a receptive state for tools that support that function.

**What would kill the deal:**
Positioning the product as a multi-invoice aggregation tool. If the first demo shows a dashboard designed for a QSR operator with 2,300 locations, Troy will correctly conclude it does not fit his environment and will disengage. A district energy version of the product — or a clearly articulated module for meter reconciliation in self-generating environments — does not appear to exist yet. Without it, UT Austin is a reference interview, not a pipeline target. Troy's real value to Clear Current at this stage is as a market validator and segmentation anchor, not as a buyer.

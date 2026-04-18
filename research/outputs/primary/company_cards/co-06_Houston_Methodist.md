# Houston Methodist (Sean Sevy)

# Generated: 2026-04-17T15:25:10.249373

---

# INTELLIGENCE CARD: Houston Methodist — Sean Sevy

---

## COMPANY SNAPSHOT

| Field                    | Detail                                                                                                                                                                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Company**              | Houston Methodist                                                                                                                                                                                                                      |
| **Industry**             | Healthcare — Integrated Hospital System                                                                                                                                                                                                |
| **Size**                 | 8 hospitals + 300+ outpatient and specialty locations, Greater Houston                                                                                                                                                                 |
| **Annual Energy Spend**  | Not disclosed; inferred very large given scale and Houston climate                                                                                                                                                                     |
| **Current Energy Tools** | Energy Print (third-party: bill tracking, benchmarking, Energy Star integration, budgeting); Prism Energy (energy broker: contract procurement + cursory invoice review)                                                               |
| **Currently Using AI**   | Early-stage — AI components added to BAS control loops by vendors (Siemens and others); AI material modeling for construction specifications; Energy Print does not use AI for forecasting; no AI-native billing intelligence deployed |

---

## WHO WAS ON THE CALL

**Sean Sevy**

- **Title:** Director of Operations, System Facilities — Houston Methodist
- **Background:** Began healthcare facilities career in 1990. Worked at Memorial Hermann Hospital (Manager of Facilities, 1996–2004) and St. Luke's Episcopal Hospital (Chief Engineer, 2003–2005). Joined Houston Methodist in 2005 — approximately 23 years with the system. MBA, University of Houston-Victoria (2003–2005). Entire 35+ year career spent in Houston healthcare facilities.
- **Area of Ownership:** System-wide energy management across all eight hospitals and 300+ locations — building automation systems, demand charge management, power factor correction, utility procurement oversight, benchmarking, capital planning for new construction and renovations, and sustainability compliance (Energy Star). He is the decision-maker and active platform user for Energy Print and the relationship owner with broker Prism Energy.

---

## THEIR ENERGY CALENDAR

Houston Methodist's energy calendar is shaped by two forces operating simultaneously: Houston's extended, punishing summer cooling season and the system's near-constant physical growth adding new campuses and wings on an irregular schedule that disrupts any stable trend.

**June–September (Peak Reactive Season):**
The most high-stakes window. Sean described the 15-minute peak demand charge mechanism in detail — utilities measure every business's highest 15-minute load window during summer months "when the electric grid is taxed the most and energy companies are struggling to maintain capacity." That peak sets the demand charge applied across subsequent billing periods. Houston's climate makes this window longer and more severe than most U.S. healthcare markets. This is when BAS demand management, power factor correction, and load scheduling are under the most pressure and when billing errors carry the largest dollar consequence.

**Year-Round (Growth-Driven Disruption):**
Unlike a stable hospital system where historical trends forecast the next year reliably, Houston Methodist opens new facilities and adds square footage "every couple of years." Sean described the forecasting problem directly: _"Every couple of years we're adding on to a hospital or moving on, so our historical data and AI trends are only as good as the inputs that are in there."_ New campus openings require budget estimates before the first bill arrives — estimates that Sean described as "guesstimating."

**Annual Budget Cycle (Proactive Window):**
Energy Print is used explicitly to support annual utility budget projections. This is Houston Methodist's formal proactive planning moment — using year-over-year trend data and benchmarking to build forward-looking spend estimates. The current tool's weakness in growth modeling means this cycle involves manual assumptions layered on top of platform outputs.

**Winter:**
Peak natural gas consumption from heating. Sean did not describe this as a crisis period — Houston's mild winters relative to the system's scale mean electricity and cooling dominate strategic energy attention.

**Shoulder Seasons:**
Optimization windows consistent with other hospital systems — the period when BAS tuning, capital project planning, and benchmarking reviews occur with less operational pressure.

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Forecasting breaks down when the system grows**
_"Their forecasting tool is a little bit weaker. I know there's better opportunities, especially with AI integration, better AI models that'll help with forecasting. And where we struggle is we're a system that grows a lot. So in a stagnant hospital, following usage trends are pretty good indicator of where you're going to go... Our problem is we change so much."_
The platform assumes a flat portfolio. Every new tower, wing, or campus requires Sean to manually layer growth assumptions on top of Energy Print's outputs — the platform has no scenario modeling for new square footage or new service lines.

**2. No ability to model expansion before the first bill arrives**
_"I'd love for us to be able to go in and put parameters and say, hey, if we grew by X amount of square feet, what would that look like? And or if we added these services... Because a lot of times we're guesstimating what budgets will be over the first few years, what usages will be."_
This is a concrete, named feature request — not a vague wish. New campus budget forecasting is currently a manual estimate process.

**3. Active billing anomaly under investigation — suspected meter malfunction on power factor**
_"That is unheard of nowadays. It's a meter issue is what I think. I just don't see the equipment we have in that building operating that poorly because of the newer equipment in there. They just don't build equipment nowadays to run that low of power factor."_
One campus is reporting power factor of 79–81%, versus a modern baseline of 93–94%. Sean believes the meter itself is misreporting, not that the equipment is underperforming. He is actively investigating. This is a live, unresolved billing problem — the kind that requires months of manual analysis to confirm and escalate to the utility.

**4. Broker oversight is cursory, not systematic**
_"We do have a consultant, Prism Energy, that is a broker... they'll do cursory reviews as well, where people see calculation issues."_
The word "cursory" is his own framing. Prism's review catches obvious calculation errors but is not a continuous, data-driven audit. Tariff misapplications, power factor billing anomalies, and systematic demand charge errors are not the focus of their engagement.

**5. AI adoption is slowed by organizational hesitation, not technical barriers**
_"Everybody's a little leery of AI, but that barrier is starting to come down now. And we're seeing people being a little more motivated to use AI for various things."_
The tools are becoming available. The internal cultural barrier is softening. Houston Methodist is at the inflection point — using Energy Print's non-AI benchmarking today, aware that better AI-native tools exist, but not yet committed to moving.

**6. Building automation integration is still 3–5 years out**
_"I think what we'll probably do is we'll probably wind up moving to something like that down the road, but we're probably there three to five years out before a lot of those really become popular just because they're just starting to hit the market."_
Sean sees a two-layer market emerging: billing intelligence (where he is today) and building automation-integrated intelligence (where the market is heading). He knows the integrated layer is coming but is not ready to move yet — which means the billing intelligence layer is his operative purchasing window right now.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Day One — Replace Energy Print's Bill Tracking and Benchmarking**
Sean is an active, named user of Energy Print. He uses it for utility bill tracking, Energy Star integration, year-over-year trend comparisons, and benchmarking against peer hospital systems. Clear Current enters this conversation as a direct replacement or upgrade — not as a new category. The workflow already exists. The question is whether Clear Current does it better.

**Week One Priority — Power Factor Anomaly Detection**
Sean is actively investigating a suspected meter malfunction on power factor at one campus. Clear Current's tariff analysis engine, if it can flag power factor readings that look statistically inconsistent with the building's equipment profile, delivers an immediate, tangible win on a problem he is already spending time on. This is the fastest credibility-builder available: show him the anomaly he already suspects, and confirm or deny his hypothesis with billing data alone.

**First Quarter — Demand Charge Verification**
Houston Methodist has been managing demand charges strategically since the 1990s — BAS investments, load scheduling, and power factor correction are all deployed to minimize that 15-minute peak. The Clear Current pitch here is not "help you reduce demand" — it is "verify that CenterPoint is calculating your demand charge correctly based on what your meters actually recorded." Sean's BAS is already doing the operational work. Clear Current confirms the bill reflects what the BAS actually achieved.

**Budget Cycle — Growth Scenario Modeling**
This is the feature Sean described that no platform currently offers: input new building parameters (square footage, facility type, service lines) and project what utility spend will look like before the first bill arrives. If Clear Current can offer even a structured scenario input — "add a 200,000 sq ft medical tower, here is the projected annual energy spend by category" — Sean can bring that to budget conversations and eliminate the manual guesstimating he currently does for every campus opening.

**What He Would Show His CFO:**
Two things. First, the power factor meter case — a specific, quantified billing discrepancy with a named campus and a recovery value attached. Healthcare CFOs respond to concrete recoveries, not efficiency percentages. Second, the growth forecasting output — a projection showing what next year's utility spend looks like inclusive of the planned campus addition, broken out by facility. This replaces a manual estimate with a documented, defensible model. That is a CFO-level artifact.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

_"Their forecasting tool is a little bit weaker. I know there's better opportunities, especially with AI integration, better AI models that'll help with forecasting. And where we struggle is we're a system that grows a lot. So in a stagnant hospital, following usage trends are pretty good indicator of where you're going to go... Our problem is we change so much that they don't have inputs for growth modeling in there. So it stays flat and then we have to do our growth piece on there."_

**Why this quote:** Sean is a paying customer of a competitor, naming the exact gap he wants filled, and describing the manual workaround he currently performs every budget cycle. This is not a hypothetical feature request — it is an active workflow failure with a named incumbent who isn't solving it. The market opening is explicit and the buyer is warm.

---

## BUYER READINESS

**Score: MEDIUM — with a fast path to HIGH**

**Why Medium:**
Sean is satisfied enough with Energy Print that he has not been actively searching for a replacement. He described billing errors as "minimal" and his broker relationship as providing reasonable oversight. He is not in pain acute enough to initiate an unsolicited vendor search. The AI hesitation he described — "everybody's a little leery of AI" — applies internally at Houston Methodist as well as across the industry.

**What Would Move Him to HIGH in 6 Months:**

1. A live demo that detects the power factor anomaly he is already investigating — prove the engine works on a problem he owns today, with his own data.
2. A growth scenario modeling prototype — even a structured input form that produces a projected utility spend for a new campus would directly address the forecasting gap he named explicitly. No competitor has built this. Being first matters.
3. A side-by-side comparison against Energy Print's benchmarking output — if Clear Current's peer benchmarking is more granular or more actionable, the switching argument is simple.

**What Would Kill the Deal:**

1. Requiring BAS integration as a prerequisite — Sean explicitly stated the integrated building automation layer is "three to five years out" for his organization. Any product that requires operational data from the BAS to deliver value is the wrong product for Houston Methodist right now.
2. Complexity of procurement — Houston Methodist is a large system with established vendor relationships and likely a formal procurement process. A lengthy contracting cycle or a requirement for IT security review that exceeds typical SaaS timelines could stall momentum even with strong interest.
3. Inability to demonstrate ROI before contract — Sean's current posture is "we get value from Energy Print, billing errors are minimal." Clear Current needs to show a recoverable dollar amount or a forecasting improvement before Sean can make an internal case to switch. A free pilot on real data — specifically the power factor campus — would be the fastest path to that proof point.

# Panda Restaurant Group (Roger Goldstein)

# Generated: 2026-04-17T15:31:58.980808

---

# INTELLIGENCE CARD: Panda Restaurant Group

---

## COMPANY SNAPSHOT

| Field                    | Detail                                                                                                                                                                                                                                                               |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Company**              | Panda Restaurant Group (Panda Express)                                                                                                                                                                                                                               |
| **Industry**             | Quick Service Restaurant (QSR)                                                                                                                                                                                                                                       |
| **Size**                 | ~2,600 U.S. locations, ~10,000 utility bills processed per month                                                                                                                                                                                                     |
| **Annual Energy Spend**  | Not stated explicitly; at ~$2,000/month average per location × 2,600 locations = implied ~$62M+ annually                                                                                                                                                             |
| **Current Energy Tools** | NG Insight (third-party bill processing + threshold-based exception flagging); H2NO by Conservation Labs (real-time water anomaly detection); Internal HVAC energy management systems with algorithmic controls; Manual Excel extraction and year-over-year graphing |
| **Currently Using AI**   | No. Exception monitoring is rule-based and static. Manual review by two people using extracted Excel data. No AI layer anywhere in the workflow.                                                                                                                     |

---

## WHO WAS ON THE CALL

**Roger Goldstein**

- **Title:** Executive Director, Facilities & Energy
- **Background:** Nearly 20 years at Panda. Career path was non-linear — ranch management, banking, construction, hotel management, restaurant equipment and refrigeration service (10 years in Albuquerque) before joining Panda in 2006 as Regional Facilities Manager. Built the entire facilities organization from scratch before adding Energy & Waste to his portfolio in 2014. Holds CRFP certification and sits on the RFMA Board of Directors.
- **Area of Ownership:** Full oversight of energy management, utility billing operations, facilities maintenance, and waste across all ~2,600 locations. He is the final decision-maker on energy vendor relationships, tool adoption, and budget allocation. He personally manages the NG Insight account relationship and introduced H2NO across the portfolio.

---

## THEIR ENERGY CALENDAR

Roger's energy calendar is straightforward and driven almost entirely by HVAC load. There is no complex demand management cycle, no multi-fuel hedging calendar, no semester-driven consumption pattern.

**June through September — Peak Electricity Season:**
_"Electricity really elevates in the summer months and then comes down in the winter because you're not using that air conditioning."_
This is maximum exposure. Every failing rooftop unit, every billing anomaly, every rate misclassification costs the most during this window. The team is most reactive here — equipment failures spike, bills spike, and any error that blended into the baseline during cooler months becomes visible only after it has already cost money.

**October through May — Relative Calm, Gas Holds Steady:**
_"We have a pretty stable gas cooking profile. It'll spike a little in the winter but gas is much flatter than electricity."_
This is the proactive window — rate structure reviews, equipment planning, annual utility analysis. The internal team of one energy manager and one energy associate runs annual rate class audits across all utilities during lower-stress periods.

**Year-Round Baseline Work:**
Bill processing runs daily. NG Insight batches consolidated payments once per day. Exception reports are pulled manually on a recurring basis regardless of season. The operational risk of a missed bill or a shutoff is constant and non-seasonal.

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Baseline drift — errors that become the new normal before anyone notices**
_"It can go on for a while and then accounting or operations will catch something like that. It's like, hey, how come I haven't had any electric charges on my P&L for six months, or why were the last four months so expensive?"_
The most concrete example: Panda paid a neighboring tenant's electricity for an entire year because a single meter covered two outlets in a shared space. The charge was consistent enough to establish a new baseline. NG Insight's threshold system never flagged it. It was caught by accounting, not by energy tools.

**2. Threshold-based exception rules can't catch what they can't see**
_"If the average bill has been $2,000 a month for three years and a $12,000 invoice comes in, it gets flagged."_
The system is explicitly designed for spikes. Slow-burn errors, systematic mischarges, and gradual consumption creep are invisible to this logic. Roger knows this and accepts it as a limitation of the current toolset.

**3. HVAC degradation is invisible until it's expensive**
_"You can have an air conditioner that has a mechanical issue and it's failing, barely producing any cold air, but it's not noticed for many days or weeks. You're just pouring all that electricity into that unit and not getting any real value from it."_
HVAC is the single largest electricity consumer in the restaurant. Degradation is gradual. The billing signal exists — electricity creeps upward at one location — but no current tool connects that signal to a maintenance dispatch recommendation.

**4. Operational disruption from missed bills and unplanned outages**
_"The most common cause of a shutoff or a disruption in service is a bill got overlooked and didn't get paid. And it's always a mistake. Somebody just missed it, lost it, bad address, keyed it in wrong to the system."_
At 10,000 bills per month, even a well-run outsourced operation has failure modes. A shutoff at a QSR location mid-service is a direct revenue loss event, not just an inconvenience.

**5. Stranded deposits sitting on utility accounts for years**
_"A lot of them are sitting there, 10-year-old deposits that you're entitled to get back, but they won't do it unless you ask for it."_
This is money Panda is owed but has no systematic process to surface. Across 2,600 accounts, even small per-location deposits aggregate into meaningful recoverable capital.

**6. Manual rate class optimization is labor-intensive and done only annually**
_"We always analyze all of our rate structures across all the utilities every year to make sure we're on the best rate class."_
This is done once a year by the internal team as a deliberate project — not continuously and not automatically. Rate changes between annual reviews go undetected and unoptimized.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Day One — Replace the Excel scrub with AI-driven pattern deviation detection**
The current workflow is: pull data from NG Insight → export to Excel → manually look for anomalies against rolling averages. Clear Current replaces the Excel layer entirely. The AI identifies not just spikes above a threshold but pattern deviations — gradual drift, new baselines that shouldn't be baselines, location-level creep that a human reviewing averages would miss.

**Week One — Run a deposit recovery audit**
Roger explicitly named this as a high-value query: _"Look for all the deposits that we pay and are there offsetting deposit refunds over a certain period of time."_ This is a recoverable dollar scan that requires no operational change and produces immediate, documentable results. It is the ideal first win to show finance leadership.

**Month One — Flag HVAC degradation candidates by location**
Cross-reference electricity usage creep at individual locations against weather-normalized baselines. Surface the stores where consumption is climbing in ways inconsistent with headcount, hours, or seasonal pattern. Hand the list to the facilities team for HVAC inspection. Roger already has the mental model for this — he just lacks the automated signal.

**Ongoing — Rate class monitoring between annual reviews**
Clear Current runs continuous rate analysis in the background. When a utility changes rates or a location's consumption profile shifts enough to warrant a rate class change, it flags it. What currently happens once a year as a manual project becomes a rolling alert.

**What Roger Would Show His CFO:**
A dollar-impact report with three line items: (1) billing errors caught and recovered, (2) deposit refunds surfaced, (3) estimated HVAC dispatch savings from early identification. Clean, quantified, directly tied to P&L impact. Roger thinks in ROI terms: _"If this energy management system is going to reduce my power consumption by 12% and the cost is 8%, I'm making 4%."_ The CFO presentation writes itself if Clear Current can produce that math automatically.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

_"It can go on for a while and then accounting or operations will catch something like that. It's like, hey, how come I haven't had any electric charges on my P&L for six months, or why were the last four months so expensive? We had one recently — we didn't know there was a single meter covering two outlets on a shared space. For a year, we paid the neighbor's electricity."_

This is the product story. A third-party bill processor with exception monitoring. Two dedicated internal staff. Twenty years of operational experience. And Panda still paid a stranger's electricity bill for twelve months before anyone noticed. Not because the team failed — because threshold-based rules cannot catch errors that become the baseline. That is the gap Clear Current fills.

---

## BUYER READINESS

**Score: MEDIUM — trending HIGH with the right entry point**

**Why Medium and not High:**
Roger already has a vendor ecosystem he trusts — NG Insight handles bill processing, H2NO handles water, HVAC energy management systems handle equipment control. He is not in pain the way an underprepared operator would be. He is sophisticated enough to know what he has and skeptical enough to push back on overblown claims: _"Know your customer. Don't go in making bold claims without really knowing their industry, their utilization pattern for power."_ He will not buy a widget. He will buy a solution to a specific, documented problem.

**What Would Make Him a Paying Customer in 6 Months:**

1. Come in knowing the QSR energy profile — summer electricity peaks, flat gas, HVAC as the primary cost driver. Do not make him explain his own industry.
2. Position Clear Current as the AI layer on top of NG Insight, not a replacement for it. He is not pulling NG Insight out. The pitch is: "NG Insight processes the bills; we catch what their threshold rules can't."
3. Run a free proof-of-concept audit on a subset of locations. Identify one real billing error, one stranded deposit, or one HVAC drift signal. Show the dollar number. The deal closes on evidence, not on a demo.
4. Offer both pricing models — subscription and savings-share. He is open to either and will evaluate both on ROI math, not on preference.

**What Would Kill the Deal:**

- Overpromising without evidence. He has heard "I'll save you 15-30% on energy" too many times to take it seriously without proof.
- Positioning as a replacement for NG Insight. He built that relationship over years and it solves a real problem at scale.
- Failing to speak the facilities language. He is not a software buyer. He is an operator who manages dollar leakage. If the pitch sounds like a tech demo rather than an operational solution, the door closes.
- Inability to integrate with NG Insight's data output. If Clear Current can't consume the data format NG Insight produces, the workflow argument collapses entirely.

**The Warm Path In:**
Roger proactively offered to connect the team with his NG Insight account lead. This is the highest-leverage follow-up in the entire research corpus. NG Insight is named by multiple interviewees. A channel partnership — Clear Current's AI layer offered as an upgrade to NG Insight's exception monitoring — would give access to NG Insight's entire customer base. Roger Goldstein just offered to open that door.

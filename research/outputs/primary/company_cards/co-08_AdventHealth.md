# AdventHealth

# Generated: 2026-04-17T15:29:59.718501

---

# INTELLIGENCE CARD: ADVENTHEALTH

---

## COMPANY SNAPSHOT

**Company:** AdventHealth | **Industry:** Faith-Based / Non-Profit Healthcare | **Size:** 55 hospitals across 9 states; Central Florida Division alone covers 9 hospitals (growing to 10 by end of 2026) plus off-site EDs and property management buildings | **Annual Energy Spend:** Not disclosed; system processes 1,000–2,000 utility bills per day across electricity, gas, water, and telecom across 73 different electric utility providers | **Current Energy Tools:** ENGIE Impact (bill payment only); Trane BAS (primary in Central Florida), plus Siemens and Johnson Controls; JCI control specialist on-site in Orlando; Watershed (GHG/Scope data collection); machine learning pilots for building optimization; BrainBox AI (Trane partnership) stuck in IT/cybersecurity approval for 2.5+ years | **Currently Using AI:** Partial — machine learning used to analyze outbound building data and inform manual control changes; full AI loop (BrainBox) not yet approved; no AI applied to billing or utility data

---

## WHO WAS ON THE CALL

**John Culver**

- **Title:** Corporate Sustainability (Energy and Resource Management)
- **Tenure:** ~3 years at AdventHealth Corporate, Altamonte Springs, FL
- **Background:** Sits in corporate offices; owns system-wide sustainability strategy, energy consumption tracking, and portfolio-level analysis across all 55 hospitals in 9 states
- **Area of Ownership:** The whole picture — how AdventHealth performs on energy everywhere, across different financial constraints, regulatory environments, utility markets, and building ages. He is the person who has to explain utility performance to CFOs and CEOs at the hospital level and compete for capital against clinical priorities. He also manages the ENGIE Impact relationship and is aware of its gaps.

**Scott Sukits**

- **Title:** Director of Control Systems and Energy Management, Central Florida Division; also serving as Facility Director for AdventHealth East Orlando (split role)
- **Tenure:** 5+ years at AdventHealth; hired specifically to bring energy management expertise to a division that lacked it
- **Background:** Consulting engineer for 20 years before AdventHealth — designed the kinds of hospital systems he now operates, giving him an unusual dual perspective. Grew up technically, now manages a team of 3 energy managers (up from 2 at hire)
- **Area of Ownership:** Ground-level building operations across 9 Central Florida hospitals — BAS programming and optimization, controls strategy, AI adoption, occupancy sensing, HVAC performance, and the day-to-day gap between how buildings were designed and how they actually run

---

## THEIR ENERGY CALENDAR

AdventHealth's energy calendar does not follow a traditional seasonal heating/cooling rhythm — at least not in Florida, which represents a large portion of their portfolio.

**Year-Round Baseline (Florida):** Scott is explicit: _"In Florida, the reason we don't care about seasons all that much, we don't worry about heat too often. Our primary goal is to make sure we maintain temperature and humidity within critical spaces."_ The operational challenge is continuous — maintaining clinical compliance for temperature and humidity regardless of what is happening outside. Scott's team uses an enthalpy-based control approach that modulates discharge air temperature continuously, around the clock, with no seasonal switch. It just runs.

**Proactive Mode — Capital Budgeting Prep (Pre-Cycle):** John described the most structured proactive moment in their calendar: assembling energy conservation measure packages before the hospital budgeting cycle opens. _"A lot of the work for determining — hey, here's the energy conservation measures or the facility improvement measures we want to pursue next year — that has to come before budgeting cycle so that we're able to have and provide that package to our financial leaders at the hospital level."_ This is the window where energy data has to be clean, assembled, and translated into financial ROI language — because they are competing against clinical capital requests.

**Reactive Mode — Most of the Year:** John was direct about why facility directors cannot stay proactive: _"Facilities directors within AdventHealth, they're so busy with day-to-day emergent issues that keeping the lights on is not their main focus because there's so many other things to do."_ Scott confirmed the same from his dual role as both energy director and facility director for East Orlando — the reactive load is constant.

**Reactive Spike — When Something Breaks or Looks Wrong:** Scott described what actually triggers investigation — not dashboards, but complaints. The thermostat-in-a-box story is the defining example: occupants bought their own digital temperature sensors and sent photos before anyone investigated. _"This is the difference between boots on the ground and looking at a computer screen."_ They could see 75 degrees on the dashboard; the reality was a box of wireless thermostats sitting in a mechanical room, never installed.

**Procurement — Natural Gas Rolling Hedge:** John noted that natural gas purchasing is handled by a separate company on a rolling basis — currently under strategic review for whether that structure is still optimal. Electricity procurement varies by state: regulated markets have no purchasing choice; deregulated markets are managed separately. No bulk electricity purchasing strategy was described.

**Regulatory / Reporting Cycle:** Not discussed in depth in this interview, but AdventHealth is publicly committed to 50% Scope 1 and 2 emissions reduction by 2030 and net-zero by 2050, with 100% renewable electricity targeted by 2026 via VPPAs. The Watershed platform handles automated GHG data collection. These commitments create an ongoing, non-seasonal compliance calendar that sits above the operational energy management work.

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Bills Don't Match Addresses — And This Is Foundational**
John's single biggest automation wish was not an analytics feature. It was basic data attribution. _"It would be that the bills and the therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time. Which sounds basic, but again, with an organization this size and that grows, matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational. You can't move forward if you don't know that information."_

With 55 hospitals in active M&A mode, consumption occurs at one address but the bill is paid somewhere else. ENGIE catches this split sometimes; other times it doesn't — because it depends on what the utility company sends. This is not a one-time cleanup. It is ongoing structural data chaos.

**2. Meter Data Is Still Manually Entered**
Scott's automation wish was equally foundational: _"The data input from the meters, if that just automatically populated to a dashboard that you could see trend data, which would be amazing. John has a team that enters information from the utility providers into portfolio management. That gives a pretty good outlook, but it would be nice to see all that come in, go on a chart, and then you could quickly see if you had a dashboard up if something's wrong."_ Manual data entry is the current state. Automated ingestion and visualization is the desired state. They are not there yet.

**3. ENGIE Pays Bills But Doesn't Interpret Them**
John was candid about the gap between what ENGIE does and what they need: _"NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great."_

Three specific gaps named unprompted: (a) Tax exemption verification — as a non-profit, AdventHealth should not pay utility taxes, but ensuring this across 73 providers is a live gap that costs real money. (b) Portfolio change management — new acquisitions are slow to onboard into analytics, divestitures slow to remove. (c) Rate structure interpretation — _"With terminology ranging from on-peak, off-peak, discounted off-peak, super off-peak, and extreme on-peak... the bills are incomprehensible without expert interpretation — and ENGIE does not provide that layer."_

**4. Monthly Data Is Too Slow for Operational Decisions**
John described the timing mismatch explicitly: _"We'd rather have it hourly, daily... We want to be able to adjust the set point and then tomorrow check and see — okay, did that do what we thought it did? — versus waiting for a monthly bill. Companies like NG are reliant upon monthly data from another utility company."_ The operational decisions Scott makes at the BAS level happen in real time. The financial feedback loop from ENGIE happens once a month, a lag that makes it impossible to measure the impact of operational changes quickly.

**5. AI Adoption Blocked by Cybersecurity — For 2.5 Years**
Scott has been attempting to implement BrainBox AI at a single medical office building for two and a half years. The blocker is IT and cybersecurity approval, not budget or technology or interest. _"I've been working with our IT folks for that long to try to get it pushed through. And it's just question after questionnaire after questionnaire before they'll even consider approving it."_ The underlying fear is HIPAA: _"Is someone going to use that tunnel where we use controls to optimize controls — the tunnel in to get patient information? And now all of a sudden, we impact patient care and HIPAA laws and violate patient records."_ The Johnson Controls hack accelerated these concerns dramatically and overnight.

**6. Facility Directors Can't Read Bills — And Don't Have Time**
John identified a structural knowledge and bandwidth gap across the portfolio: _"Somebody who is a brand new facility director who maybe came up from a non-energy related path — so plumbing or carpentry — may not know how to read a bill. And utility companies don't make it easy, intentionally."_ The result: local facility leaders cannot benchmark their own performance, cannot catch billing errors, and cannot communicate energy needs to their hospital CEOs and CFOs. The central team exists to bridge this gap — but cannot do it manually at scale.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Module 1: Meter-to-Address Reconciliation — Day One Priority**
John's first and most urgent use case is not analytics. It is ensuring that every bill is correctly matched to the right physical location. Clear Current's meter reconciliation capability would address the exact problem he named as foundational — the one without which everything else is unreliable. Day one workflow change: instead of relying on ENGIE to catch address splits (which it sometimes does, sometimes doesn't), the central team would have a system that flags mismatches automatically as new sites are added through acquisition or new builds. This is especially urgent given AdventHealth's active M&A mode.

**Module 2: Automated Bill Ingestion and Dashboard Visualization**
Scott's automation wish maps directly to automated data ingestion feeding a live dashboard. Today, a team manually enters utility provider data into a portfolio management system. Clear Current replacing that manual pipeline with automated ingestion — and surfacing anomalies visually without requiring someone to know what to look for — would free up significant team time and eliminate the delay between data arrival and human review. Scott's specific framing: _"You could quickly see if you had a dashboard up if something's wrong."_

**Module 3: Non-Profit Tax Exemption Audit**
John named this unprompted. Across 73 electric utility providers and 55 hospitals, ensuring AdventHealth is never incorrectly charged utility taxes is an ongoing, dollar-quantifiable pain point. A Clear Current feature that automatically flags tax charges on non-profit accounts — and quantifies what was incorrectly paid — would produce a concrete, auditable ROI number before any other analytical feature is needed. This is a fast win that converts directly into recoverable dollars.

**Module 4: Rate Structure Interpretation Layer**
The second direct gap John named in ENGIE is the inability to explain rate structures — on-peak, off-peak, super off-peak, extreme on-peak — across 73 utility providers in 9 states. Clear Current's bill intelligence layer, surfacing what rate structure a site is on, whether a better structure is available, and what behavioral or operational changes would reduce cost under that structure, would give John's central team what ENGIE currently does not: the ability to advise facility directors, not just pay bills.

**Module 5: What They Would Show Their CFO**
John was explicit about the internal capital competition problem. The energy team must assemble a financial and operational case before the budgeting cycle opens — competing against clinical priorities for capital. Clear Current's platform would generate that case automatically: energy trend data showing consumption trajectory, anomaly history showing where money has been leaking, tax recovery amounts already identified, and projected ROI from rate optimization or identified operational changes. The CFO-ready output is not a feature — it is the reason the energy team gets budget. John said it directly: _"We have the job of trying to not be the boys who cried wolf, but say: here's what we suggest we do, and here's the benefits to doing so beyond just avoiding a catastrophe."_ Clear Current gives them the data to make that case before the window closes.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

_"NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills — and not just interpret, but tell us why we should care and what we can do to change it — would be great."_
— John Culver, Corporate Sustainability, AdventHealth

This is an unprompted, in-his-own-words articulation of Clear Current's exact value proposition, from an active buyer at a 55-hospital system who is currently paying ENGIE Impact and is dissatisfied with its analytical depth. It should anchor the healthcare pitch and the final presentation.

---

## BUYER READINESS

**Score: MEDIUM-HIGH**

**Why they are close:** AdventHealth is not a prospect evaluating whether they have an energy problem. They know they have one. They named it precisely, unprompted, in the language of a buyer who has already tried to solve it and found the current solution insufficient. ENGIE Impact is entrenched as a bill payment processor — John acknowledged it does that well — but the analytical gap is real, named, and felt daily. The specific features they described wanting (meter-to-address matching, automated dashboard ingestion, bill interpretation, rate structure explanation, non-profit tax auditing) are features, not aspirations. The organizational structure exists — a central sustainability team at corporate, a regional energy management team in Central Florida with dedicated headcount — that could actually use and champion a platform like Clear Current.

**What would get them to a paying customer in 6 months:**

- A focused entry point through John Culver or a follow-up with Allegra Wiesler (Executive Director of Environmental Sustainability, who was originally booked for this interview and did not attend — this is the highest-priority follow-up in the entire research program)
- A concrete demonstration of meter-to-address reconciliation on a sample of their actual portfolio — not a generic demo, but showing what it finds in their data
- A non-profit tax exemption audit as a pilot — identify what AdventHealth overpaid across a subset of sites, quantify it in dollars, and let the number speak
- A clear, written separation from BAS/controls AI — one page explaining that Clear Current reads invoices, not building systems, creates no HIPAA-relevant data tunnel, and requires no IT/OT network integration. This removes the 2.5-year cybersecurity review from the equation entirely

**What would kill the deal:**

- Positioning Clear Current as an AI platform that sits on top of existing systems — both John and Scott are explicitly skeptical of this framing and have seen it fail. Lead with data integrity, not AI sophistication
- Inability to handle 73 utility provider formats — if the platform cannot ingest and normalize the variety of bill formats AdventHealth already deals with, it fails before it starts
- Any ambiguity about data handling, access controls, or who can see AdventHealth's billing data — IT will ask, and the answer must be immediate and airtight
- Requiring ENGIE displacement as a precondition — AdventHealth values ENGIE for bill payment and is not looking to rip it out. Clear Current must be positionable as complementary intelligence layer, not a replacement, at least initially

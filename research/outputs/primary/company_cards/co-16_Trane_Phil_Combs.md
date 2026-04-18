# Trane (Phil Combs)

# Generated: 2026-04-17T15:43:53.782822

---

# INTELLIGENCE CARD: TRANE TECHNOLOGIES — PHIL COMBS

---

## COMPANY SNAPSHOT

| Field                    | Detail                                                                                                                                                                                         |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Company**              | Trane Technologies (Pacific Southwest District)                                                                                                                                                |
| **Industry**             | HVAC / Building Energy Services & Performance Contracting                                                                                                                                      |
| **Size**                 | Fortune 500 enterprise (~$18B revenue); Phil operates at district level serving MUSH markets, federal facilities, and commercial office buildings                                              |
| **Annual Energy Spend**  | Not directly stated; Phil manages clients across multiple meters — a 12-meter client alone represents ~2 hours/month of manual data collection, suggesting significant managed portfolio spend |
| **Current Energy Tools** | Excel (primary daily driver), Abraxas Option C (M&V for guaranteed savings contracts only), Energy Toolbase (rate/tariff reference)                                                            |
| **Currently Using AI**   | Functionally no — Phil operates in Excel despite Trane's external AI marketing claims; internal IT security policies block many AI tools at the enterprise level                               |

---

## WHO WAS ON THE CALL

**Phil Combs**

- **Exact Title:** Senior Digital Services Engineer, CMVP (Certified Measurement & Verification Professional), CEM (Certified Energy Manager), PMVA
- **Background:** ~30 years in HVAC; ~20 years at Trane. Career arc: Chiller Test Engineer → Chiller Design & Reliability Engineer → M&V Engineer (7 years) → Renewable Energy & Power Development Engineer → Sr. Digital Services Engineer (October 2025). BS Engineering, Oklahoma State University, early 1990s.
- **Specific Area of Ownership:** Phil sits at the intersection of energy measurement, performance contracting verification, and digital services deployment. He quantifies whether energy savings are real for guaranteed contracts, advises clients on rate and tariff strategy, and is now actively shaping how Trane deploys technology externally. He is both a practitioner and a de facto internal product evaluator for energy technology.

---

## THEIR ENERGY CALENDAR

Phil's organization does not follow a clean seasonal rhythm — the work is reactive by nature, driven by client utility billing cycles, equipment failures, and contract performance milestones rather than strategic planning windows.

**Monthly cadence (reactive baseline):** Every month, Phil or his team manually pulls utility bills for each metered client — approximately 10–15 minutes per meter. A 12-meter client is roughly two hours of manual collection before any analysis begins. This is not strategic work; it is data janitorial work that consumes the calendar.

**Ongoing reactive mode — the tyranny of the urgent:** Phil described the client reality bluntly: _"A lot of clients unfortunately are firefighting — tyranny of the urgent. They're the people keeping the wheels on the car day-to-day. Even though there's the strategy that we always talk about, they're just a lot of times dealing with this piece of equipment broke, or tenants moving in or moving out."_ Phil himself reflects this pattern — analysis happens when something breaks or when a contract milestone demands it, not proactively.

**Performance contract milestones (periodic proactive moments):** The specialized Abraxas Option C software only comes out for guaranteed energy performance contracts requiring statistical verification. These are discrete, scheduled deliverables — not continuous monitoring. Outside of these contracted moments, analysis reverts to Excel.

**Rate change triggers (forward-looking, currently manual):** When utilities propose rate hikes or implement new tariff structures (e.g., time-of-use rates), Phil has to manually track PUC filings and board meeting announcements. This is currently an ad hoc, time-intensive process with no systematic monitoring. Phil identified this gap explicitly — there is no point in the calendar where regulatory intelligence is systematically reviewed; it gets noticed only when it becomes urgent or visible.

**The consumption/cost disconnect (recurring annual narrative):** As energy costs rise even when consumption falls, Phil finds himself regularly having to construct the "avoided cost" story for clients — _"yeah, your costs are going up, but if you did nothing, they'd go up even more."_ This narrative work happens whenever rate increases hit client bills, which has become more frequent given data center demand and grid infrastructure investment trends.

---

## THEIR BIGGEST STRUGGLES (verbatim evidence)

**1. Utility bill format variation breaks every automated tool they've tried**
_"Utilities are still so varied and different. It can be frustrating because what they put on a bill and the format they put it on a bill, it can just vary. There's just basic things that anybody in our field should be able to go out and find and extract and pull real quick. But it's so different that [earlier AI tools] really stumbled with it."_
This is not a minor inconvenience — it is the reason previous AI energy tools failed to gain traction. Every meter requires manual handling precisely because no tool has reliably solved format normalization across utilities.

**2. Regulatory intelligence is entirely manual and largely absent**
_"If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board — they're putting a price increase before the Public Utility Commission. Things like that are what really could be powerful because that saves somebody like me so much time."_
Phil currently has no systematic way to monitor PUC filings, board decisions, or rate hike proposals. He learns about them reactively — either from clients who already received the rate increase or through ad hoc research. Forward-looking cost intelligence simply does not exist in his current toolkit.

**3. Data collection consumes time that should be spent on analysis**
At 10–15 minutes per meter, a 12-meter client is two hours of manual work before Phil can do a single minute of actual analysis. Multiply across a portfolio and the math is devastating. Phil's explicit desired query — _"Go grab the last 24 months of electric data from this utility"_ — reflects how much of his day is consumed by work that should be automated.

**4. Nobody cares about energy data until it's monetized**
_"There's all this stuff where you go in and figure out how a facility or how equipment's using energy. But then it's like nobody cares until you monetize it. 'So what?' It's like, well, if you do this, here's your return on investment. Does that interest you?"_
Phil identified this as a persistent communication failure across the industry. Technical findings land flat without a dollar figure. Translating consumption data into financial impact is a manual step that currently requires Phil's expertise each time.

**5. Internal AI adoption is blocked by enterprise IT security**
_"Trane on one hand goes out and is telling the world, 'hey, we can solve all your problems with our AI offerings' — but then on the other hand there's like me working internally, and they disable a lot of that stuff because they're like, 'well that's a security breach issue.'"_
This is not a Trane-specific problem — Phil sees it broadly across large enterprise clients. The field-level practitioner wants the tool; IT blocks deployment. Any AI product sold into enterprises will hit this wall without proper security documentation in place.

**6. Tariff complexity requires legal-document-level interpretation**
_"If it can summarize that — because if you've looked at them, it's like reading a legal document. Just get to the punch line. But then also have it make recommendations — for this customer, the utility just implemented a time-of-use rate, and based on the client's last 24 months of energy use, which one is more beneficial for them?"_
Rate schedules are dense, highly technical documents. Phil currently reads them manually and models rate switch scenarios himself. For clients without a dedicated energy manager, this expertise simply doesn't exist in-house.

---

## HOW THEY WOULD USE CLEAR CURRENT

**Day One — Automated Data Retrieval (immediate time savings)**
Phil's first use would be eliminating the 10–15 minutes per meter of manual bill collection. His exact framing: _"Go grab the last 24 months of electric data from this utility."_ For a 12-meter client, this converts two hours of janitorial work into seconds. This alone justifies a trial. The structured output he needs is specific: _"Break it out month to month by cost, demand, consumption"_ — not raw data, but pre-organized time-series tables ready for analysis.

**Week One — Anomaly Detection with Statistical Rigor**
Once data is structured, Phil would immediately query: _"Where do you see any statistically significant variation month to month?"_ He specifically emphasized statistical rigor — not just threshold flagging but genuine variance analysis consistent with his M&V background. Follow-up: _"What are your insights on why that happened?"_ Root cause analysis covering weather normalization, rate changes, special charges, or internal operational shifts.

**Ongoing — Regulatory Intelligence Monitoring**
Phil described this as the feature he would use continuously and that no other tool provides: _"What's going on with this utility for the next six months?"_ — answered with PUC filings, board meeting decisions, and rate hike proposals. This would replace a currently nonexistent capability and give Phil a proactive intelligence edge he has never had.

**Client Deliverable — Rate Switch Analysis**
Phil would use the tariff summarization and rate comparison module to answer client-specific questions: given this client's actual 24-month usage profile, which tariff saves more money? This output goes directly to the facilities director or energy manager — the internal champions who make adoption decisions.

**What He Would Show the CFO/Director of Facilities:**
The monetized avoided cost narrative: _"Your costs are going up, but if you did nothing, they'd go up even more — and by this amount."_ Clear Current's output needs to show not just what happened but what it cost in dollars, and what a proposed rate hike will mean in dollars based on the client's actual consumption profile. Phil would use this as the "so what" slide in every client energy review.

---

## THE QUOTE JOHN AND DAN NEED TO HEAR

_"I can tell you six months from now this utility is actively talking to the Public Utility Commission. They're proposing this rate hike. This rate hike is going to mean this change in the cost of energy for you based on the last 12 months of operation. I think those are things that can be powerful."_

**Why this quote matters:** Phil is not describing a feature request in the abstract. He is describing the exact product — what it says, how it says it, who receives it, and why it changes the value conversation. He has already built the mental model. He just needs someone to build it.

---

## BUYER READINESS

**Score: HIGH**

**Why High:**
Phil is not an abstract enthusiast — he has specific, named workflows he would change on day one, a clear mental model of the product, and he explicitly offered to pilot the product when available. His queries are formulated as actual prompts, not hypotheticals. He has 20 years of enterprise energy experience, credibility inside Trane, and named two internal contacts (Erin Daley, Casey Borst) with corporate-level influence over partnerships and energy engineering decisions. He identified Clear Current's concept as exceeding the closest named competitor (Energy Toolbase) across multiple dimensions.

**What it would take to become a paying customer in 6 months:**

- A working demo that reliably parses varied utility bill formats — this is the proof point that breaks past failures. Demonstrate format adaptability across at least three different utility bill layouts and Phil's skepticism converts to advocacy.
- Automated data retrieval that reduces his 10–15 min/meter manual process to under 2 minutes. This is measurable, demonstrable, and immediately valuable.
- At least a prototype of the regulatory intelligence feed — even a limited PUC filing monitor for a handful of utilities would signal the roadmap is real.
- Security documentation ready before IT conversations begin — without SOC 2 and data handling policies, the deal stalls at the Trane IT gate regardless of Phil's enthusiasm.

**What would kill the deal:**

- Inability to handle bill format variation reliably. Phil has been burned by previous tools on exactly this point. If Clear Current stumbles on format parsing in a demo, it confirms the prior failure pattern and credibility is gone.
- No financial monetization layer. If Clear Current surfaces anomalies without dollar figures attached, Phil cannot take it to a facilities director or CFO — and without that shareable output, adoption doesn't happen.
- Enterprise IT/security friction without preparation. If Trane's IT department flags a data handling concern and Clear Current has no documentation ready, the deal dies at the gate.
- Building for the CEO rather than the internal champion. Phil was explicit: _"If you and I go and talk to them, maybe, but probably not."_ The product must be designed for facilities directors, energy managers, and financial controllers — not top-down executive pitches.

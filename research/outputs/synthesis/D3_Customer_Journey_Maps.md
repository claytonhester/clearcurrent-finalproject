# Customer Journey Maps

# Generated: 2026-04-17T20:55:37.434243

---

# Clear Current Technologies

## Customer Journey Maps: Five Complete Workflows

**Prepared for John Reuter (CEO) & Dan Schreiber (CPO)**
_CDL Texas MBA Consulting | April 2026_

---

> **How to read these maps.** Each map is built from primary interview evidence first, secondary research second. Verbatim quotes appear in _italics_ with full attribution. Summary-level inferences — claims that go beyond what was said word-for-word in the transcript — are flagged **[SUMMARY INFERENCE]**. Product stages name the specific Clear Current surface (Rate Analyst, Energy HQ, Deal Center, Build Engine) and delivery tier (Chat / Dashboard / Autonomous Agent) being applied. Every product claim is bounded by the CC Engine maturity ladder: the platform **spots and assists**; it does not yet autonomously resolve or guarantee recovered dollars without human-in-the-loop completion. Where the research raises a tension with current product reality, it is flagged explicitly.

---

## MAP 1: Monthly Bill Review & Validation

**Persona:** Commercial energy manager at a multi-site institution, responsible for reviewing utility invoices across dozens to hundreds of meters each billing cycle.
**Archetype composite:** Andee Chamberlain (Texas State University), Sean Sevy (Houston Methodist), John Culver (AdventHealth)

---

### TRIGGER

The monthly utility bills arrive. For most organizations in this corpus, this is not a single document — it is a stack of invoices from multiple utilities, in multiple formats, for multiple meters across multiple buildings. The event is routine, but the exposure is not.

> _"With 1,500 meters, billing can be hard to track. It's not just our situation — everybody with multiple facilities and multiple meters deals with this."_
> — **Andee Chamberlain**, Energy & Water Conservation Manager, Texas State University

> _"We have 73 different utility providers across 9 states, each with different terminology — on-peak, off-peak, discounted off-peak, super off-peak, extreme on-peak — those are all actual names for things."_
> — **John Culver**, Director of Energy Management, AdventHealth (Agent: Ray Kowalski, citing AdventHealth Transcript)

> _"We didn't know there was a single meter covering two outlets on a shared space. So for a year, we paid the neighbor's electricity."_
> — **Roger Goldstein**, VP Energy Management, Panda Restaurant Group (Agent: Tom Reeves, citing Roger Goldstein Transcript)

**Stress level at trigger: MEDIUM** — The volume is known and expected. The anxiety is diffuse: something might be wrong, but there is no fast way to find out.

---

### STAGE 1 — DISCOVERY (Without Clear Current)

**What happens:** Bills arrive by mail, email, or utility portal — often in different formats from different utilities on different cycles. Someone opens them. At Texas State, a single long-tenured employee handled bill processing for 10–15 years. At AdventHealth, the ENGIE Impact system ingests 1,000–2,000 bills per day but primarily functions as a payment processor. At Panda Restaurant Group, NG Insight runs threshold-based exception rules and flags anything outside a set percentage range.

**The structural problem:** Every current system is backward-looking and deviation-based. A threshold rule only fires if the new number deviates from the established baseline. If an error has persisted long enough to become the baseline, no rule fires.

> _"We had a weird multiplier happen on one of our wastewater bills. That's why you keep auditing your bills so that you can go, okay, why is this off? This is really weird. We've been spending 3,500 gallons every month, and now it's 35,000. Something's wrong."_
> — **Andee Chamberlain**, Texas State University (Transcript, direct quote)

> _"I've got a campus that's showing a power factor of 80 to 81%. That is unheard of nowadays... something's wrong and it's a meter issue is what I think."_
> — **Sean Sevy**, Director of Energy, Houston Methodist (Agent: Ray Kowalski, citing Sean Sevy Transcript)

The detection mechanism in both cases is human memory and expert pattern recognition — not software. When the person with the memory leaves, the detection layer disappears with them.

> _"We had someone doing our bill processing for 10 to 15 years and she recently left, so we're scrambling a little. We'll probably outsource that."_
> — **Andee Chamberlain**, Texas State University (Transcript, direct quote)

**Tools in this stage:** EnergyCAP (Texas State), ENGIE Impact (AdventHealth), NG Insight (Panda), Energy Print (Houston Methodist), paper/email invoices, manual spreadsheet comparison.

**Time required:** Days to weeks for a full review cycle. Phil Combs (Trane) described 10–15 minutes per meter just to extract, enter, and review data — for a 12-meter client, that is two hours before analysis begins. **[SUMMARY INFERENCE from Phil Combs Summary: this estimate was provided as a practitioner-side account of client preparation work, not a direct description of the energy manager's own process. The time figure reflects the analyst's preparation load, which is structurally analogous.]**

**Key frustration:** Volume overwhelms attention. Things are missed not because no one is trying, but because the format heterogeneity and manual workload make comprehensive review impossible.

**Stress level: HIGH** — The feeling of not knowing what you don't know.

---

### STAGE 2 — INVESTIGATION (Without Clear Current)

**What happens:** When something does get flagged — a threshold exception, an anomaly someone noticed, or a complaint from a department — the energy manager investigates. This means opening the original bill, pulling historical invoices for comparison, and cross-referencing against meter reads and usage logs.

At AdventHealth, the core investigation problem is attribution: bills arrive addressed to the wrong facility, or consumption at one site is billed to another.

> _"What we are finding is that is not the case"_ [regarding AI-layered bill matching working correctly] _"...that the bills and the therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time."_
> — **John Culver**, AdventHealth (Agent: Ray Kowalski, citing AdventHealth Transcript)

At Texas State, investigation means comparing the current reading against historical baselines in EnergyCAP — a process that requires knowing what the historical rate was. When the bill processor leaves, this institutional memory disappears.

At Houston Methodist, the power factor investigation requires expert interpretation: Sean Sevy must decide whether a bad reading represents actual equipment performance or a malfunctioning meter. Prism Energy (his broker) provides "cursory review" that helps catch some tariff errors but does not perform deep anomaly analysis.

**Where they get stuck:** Investigating one invoice requires pulling at least three prior invoices for context, converting units if the utility changed its billing format, and sometimes calling the utility to request meter read logs. For a large portfolio, this is not scalable.

> _"Utilities are still so varied and different... what they put on a bill and the format they put it on a bill, it can just vary. There's just basic things that anybody in our field should be able to go out and find and extract and pull real quick. But it's so different that [earlier AI tools] really stumbled with it."_
> — **Phil Combs**, M&V/Digital Services Manager, Trane Technologies (Agent: Ray Kowalski, citing Phil Combs Summary)

**Stress level: HIGH** — The investigation is time-consuming, requires specialized knowledge, and often ends without resolution because the trail runs out.

---

### STAGE 3 — RESOLUTION (Without Clear Current)

**What happens:** If the investigation confirms an error, the energy manager must contact the utility, document the discrepancy, and request a credit or corrected bill. This is where the identified-vs-realized gap opens wide.

Ann Walston (Bon Secours Mercy Health) provided the most complete resolution account in the corpus. Her organization recovered over $1 million from a single meter failure — but she described this as "incredibly rare" and "incredibly unheard of." The standard outcome is partial recovery or none at all.

> _"That required board members talking to each other."_
> — **Ann Walston**, Director of Energy Management, Bon Secours Mercy Health (Agent: Tom Reeves, citing Ann Walston Transcript)

Marc Spieler raised the resolution gap as an investor-grade challenge:

> _"Have the utilities actually recognized that they made a mistake and actually given the credit back to the company? Or they've identified the issue, they can justify the issue, but nobody's gotten a refund on their payment yet?"_
> — **Marc Spieler**, Senior MD, Global Energy Industry, NVIDIA (Agent: Tom Reeves, citing Marc Spieler Transcript)

**Who gets involved:** For small errors, the energy manager may handle it alone. For large errors, it escalates to finance, legal, and sometimes executive leadership. The political dynamics with the utility can override the merit of the claim.

**What falls through the cracks:** Deposit recovery (Roger Goldstein: utilities hold deposits for years because customers never ask), tariff class errors that persist for months before detection, and gradual baseline drift that never triggers a threshold rule.

**Time to resolution:** Weeks to months for contested errors. Ann Walston's $1M recovery required extended board-to-board engagement.

**Stress level: HIGH** — The worst moment in the workflow. The error has been confirmed, the money has been lost, and the path to recovery is political and uncertain.

---

### STAGE 4 — WITH CLEAR CURRENT

**Rate Analyst | Delivery tier: Dashboard (Push to User) + Chat (React to User)**

**At trigger:** Rate Analyst ingests new invoices automatically as they arrive. The site-invoice association engine links each document to its correct meter, building, and account — the highest-maturity automation capability in the CC Engine today. This eliminates the address-mismatch problem that plagues AdventHealth's manual workflow.

_Honest product boundary:_ Invoice ingestion and site association are the lead automation capabilities. Not every edge case is solved; coverage and onboarding are still actively improved per the product context.

**At Stage 1 (Discovery):** The Dashboard tier pushes prioritized alerts — not a list of all invoices, but a ranked set of the ones that require attention. The 10x wastewater multiplier at Texas State would surface as a flagged anomaly the morning the bill arrives, not weeks later when someone finally opens it. The alert includes the deviation magnitude, the historical baseline, and why the system flagged it — not just "something looks wrong."

> _"Definitely flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it. That would be time saving."_
> — **Andi Ault**, Sr. Associate Director of Finance, UT Austin (Dr. Sarah Chen analysis, citing Andi Ault Transcript)

**At Stage 2 (Investigation):** The Chat tier enables natural-language investigation. The energy manager asks: _"What has our wastewater rate been for the last 18 months at Building C, and when did it change?"_ The platform returns an annotated timeline without requiring EnergyCAP export, manual spreadsheet assembly, or institutional memory. This directly addresses the bill processor departure risk at Texas State — the system retains the historical baseline even when the human doesn't.

**At Stage 3 (Resolution):** **This is where CC Engine maturity requires honest positioning.** Rate Analyst assists: it generates a structured error summary with supporting documentation — billing history, deviation timeline, tariff reference — that the energy manager can hand to the utility or escalate internally. It does not autonomously file disputes or guarantee credit recovery. The language for this stage: _"Rate Analyst gives you the evidence package. You make the call."_ The platform shortens the time from "I think something is wrong" to "here is the documentation to prove it" — closing the investigation gap while the resolution step remains human-in-the-loop.

**Time savings:** The detection cycle compresses from days or weeks to hours. The investigation cycle compresses from hours to minutes. Resolution timeline depends on the utility relationship — Clear Current does not yet change that equation.

**Specific output:** Flagged invoice with deviation magnitude, annotated billing history, rate schedule reference, and a summary a finance officer can read without energy expertise.

**Stress level with Clear Current:** MEDIUM at Stage 1 (the bill arrives, but you're not flying blind), LOW at Stage 2 (investigation is fast and auditable), MEDIUM at Stage 3 (resolution still requires human effort and utility cooperation).

---

### EMOTIONAL ARC — MAP 1

| Stage         | Without CC                            | With CC                                              |
| ------------- | ------------------------------------- | ---------------------------------------------------- |
| Trigger       | MEDIUM anxiety — volume, uncertainty  | MEDIUM → the volume doesn't change                   |
| Discovery     | HIGH — you don't know what you missed | LOW → system surfaces what matters                   |
| Investigation | HIGH — time-consuming, format chaos   | LOW → natural-language query, instant history        |
| Resolution    | HIGH — political, slow, uncertain     | MEDIUM → better documentation, same utility dynamics |

**Net emotional delta:** The most dramatic improvement is at Discovery and Investigation — the stages Clear Current's current capabilities most directly address. The gap between identified and realized errors remains the honest open problem.

---

## MAP 2: Anomaly Detection & Response

**Persona:** Energy operations manager who discovers — or receives an alert about — an unexpected consumption or cost spike.
**Archetype composite:** James Norton (Texas State University), Sean Sevy (Houston Methodist), Ross Snow/Intermountain Health team

---

### TRIGGER

An anomaly occurs — a meter spikes, a bill arrives with an inexplicable number, or a consumption pattern breaks from its historical shape. In the best-equipped organizations in this corpus, a system generates an alert. In most, a human notices.

> _"I would want to know right away. If this is something that's going on, we need to know immediately. We can't be waiting a month to find out there's a problem."_
> — **James Norton**, Energy Management, Texas State University (Dr. Sarah Chen analysis, citing TX State Transcript)

> _"A utility bill that jumped from approximately $40,000 to approximately $140,000 was missed by a third-party processor and caught by an internal accountant."_
> — **Intermountain Health team** (Agent: Ray Kowalski, citing Intermountain Summary)

> _"We had a weird multiplier happen on one of our wastewater bills."_
> — **Andee Chamberlain**, Texas State University (Transcript, direct quote)

**Stress level at trigger: HIGH** — When someone notices a spike, the clock is already running. Money is either being lost or has already been lost.

---

### STAGE 1 — DISCOVERY (Without Clear Current)

**How it happens:** Anomalies are discovered through one of three paths in this corpus, none of them reliable:

1. **Manual periodic review:** Someone opens invoices and compares to history. Texas State's Andee Chamberlain does this — but not monthly, because "it's really complex." The 3,500 to 35,000 gallon anomaly was caught, but only because someone happened to check.

2. **Threshold-based exception rules:** Panda's NG Insight fires when spend exceeds a set percentage deviation. The structural gap: the system cannot catch errors that become the new baseline before the rule fires. Roger Goldstein paid a neighbor's electricity for a year because the shared meter established itself as normal before the exception threshold triggered.

3. **Accidental discovery by non-energy staff:** Intermountain Health's most striking example — a $40,000 to $140,000 utility bill spike that a third-party processor missed and an internal accountant caught. The detection mechanism was a finance person who happened to notice a large number. This is not a monitoring system — it is luck.

> _"A third party should have flagged that — they didn't."_
> — **Ross Snow**, Energy Manager, Intermountain Health (Agent: Ray Kowalski, citing Intermountain Summary)

**Tools:** EnergyCAP (Texas State), NG Insight (Panda), Get Choice with AI anomaly detection (Bon Secours Mercy Health — described as working for a water leak but not catching meter failures that accumulated $5–6M), Energy Print (Houston Methodist — primarily benchmarking, not anomaly alerting).

**Time to discovery:** Days to months. Ann Walston's meter failures accumulated to seven-figure totals before detection. The power factor anomaly at Houston Methodist had been present long enough for Sean Sevy to have opened an active investigation — with no confirmed start date.

**Stress level: HIGH** — Discovery is late, often accidental, and the longer the delay, the larger the accumulated loss.

---

### STAGE 2 — INVESTIGATION (Without Clear Current)

**What happens:** Once an anomaly is flagged, the energy manager must determine its cause. Is this a billing error (wrong multiplier, wrong rate, wrong meter read)? An equipment malfunction (HVAC degradation, leak, failed sensor)? A change in operations (new equipment, extended occupancy, one-time event)?

This triage requires multi-source investigation:

- Pull the bill and compare to prior months
- Pull interval data from the BAS or BMS if available
- Check work orders and facilities logs for operational changes
- Contact the utility to verify meter reads
- Engage the broker or third-party processor for tariff analysis

> _"Something's wrong and it's a meter issue is what I think... I've got a campus that's showing a power factor of 80–81%. That is unheard of nowadays."_
> — **Sean Sevy**, Houston Methodist (Agent: Ray Kowalski, citing Sean Sevy Transcript)

Sean has framed a hypothesis (meter malfunction vs. equipment problem) but confirming it requires the utility to inspect the meter — a process outside his control and without a defined timeline.

**Where they get stuck:** Multi-source investigation is non-linear. Each data source lives in a different system, uses different units, and requires domain expertise to interpret. For an ops-focused energy manager, financial attribution is the hard step. For a finance-focused person, technical meter interpretation is the hard step.

> _"There's all this stuff where you go in and figure out how a facility or how equipment's using energy. But then it's like nobody cares until you monetize it. 'So what?'"_
> — **Phil Combs**, Trane Technologies (Agent: Ray Kowalski, citing Phil Combs Summary)

**Stress level: HIGH** — The cause is often unknown. The loss is accumulating. The energy manager cannot resolve what they cannot explain.

---

### STAGE 3 — RESOLUTION (Without Clear Current)

**What happens:** Resolution depends entirely on whether the anomaly is:

- **A billing error** → requires utility engagement, documentation, negotiation. Ann Walston's experience: partial recovery at best, board-level escalation at worst.
- **An equipment problem** → requires facilities, contractors, capital authorization. Phil Combs' tyranny-of-the-urgent problem: even when the root cause is known, capital requests compete with more immediate crises.
- **An operational change** → may require no action, or may require policy communication to building occupants.

The most common failure mode: the energy manager correctly identifies the cause but cannot get organizational resources to act on it.

> _"We have the job of trying to not be the boys who cried wolf, but say: here's what we suggest we do, and here's the benefits to doing so beyond just avoiding a catastrophe."_
> — **John Culver**, AdventHealth (Agent: Ray Kowalski, citing AdventHealth Transcript)

**Who gets involved:** For anomalies over a certain dollar threshold, finance is always involved. For equipment anomalies, facilities operations is involved. For billing errors, sometimes legal or executive leadership.

**What falls through the cracks:** Anomalies that are not large enough to justify full investigation — small, persistent, individually tolerable errors that aggregate to significant spend over a year. The baseline-drift problem that threshold rules cannot catch.

**Stress level: HIGH** — Resolution is multi-stakeholder, often slow, and the internal politics around "crying wolf" make energy managers hesitant to escalate without airtight documentation.

---

### STAGE 4 — WITH CLEAR CURRENT

**Energy HQ + Rate Analyst | Delivery tier: Dashboard (Push to User) primary; Chat (React to User) for investigation**

**At trigger:** Energy HQ's portfolio-level view pushes an anomaly alert the moment a deviation is detected — not at end-of-month bill review. The alert is prioritized by dollar magnitude, not just percentage deviation, so a 5% error on a $200,000 bill surfaces above a 20% error on a $1,000 bill. The alert earns the interruption (per the dashboard-tier design principle) because it is specific, financial, and actionable — not a generic "something looks unusual" notification.

_Product reality check:_ Anomaly flagging ("spot errors") is a core CC Engine capability. Real-time interval data monitoring at sub-hour granularity is not described as a shipped capability in the product context — alerts are tied to invoice-level data, not continuous BAS feeds. Flag for Dan: if real-time interval alerting is on the roadmap, this map illustrates its highest-value application.

**At Stage 2 (Investigation):** The Chat tier accelerates triage. The energy manager asks: _"What is the normal power factor range for Building A over the last two years, and when did it last exceed 85%?"_ The system returns an annotated time series with flagged deviations. The energy manager can then distinguish billing-side error from equipment-side problem without pulling multiple systems manually. Carl Teague's request — event-correlated consumption — is directly addressable: _"Show me electricity consumption at the stadium during the last five game days versus the five preceding non-game days."_

**At Stage 3 (Resolution):** Rate Analyst generates the evidence package — deviation timeline, rate schedule analysis, supporting documentation — for utility engagement. For equipment anomalies, Energy HQ can flag the affected building, quantify the financial impact, and generate a summary that an energy manager can use to build a capital request.

_Honest boundary:_ Clear Current assists the resolution; it does not complete it. The utility negotiation, the capital request approval, and the board-level conversation remain human steps.

**Specific output:** Push alert with dollar-quantified anomaly; interactive investigation view in Energy HQ; exportable evidence summary from Rate Analyst.

**Stress level with Clear Current:** MEDIUM at trigger (earlier detection, clearer context), LOW at investigation (fast, multi-source synthesis), MEDIUM at resolution (better documentation, same organizational dynamics).

---

### EMOTIONAL ARC — MAP 2

| Stage         | Without CC                                    | With CC                                                |
| ------------- | --------------------------------------------- | ------------------------------------------------------ |
| Trigger       | HIGH — often late, often accidental           | MEDIUM → earlier, dollar-prioritized alert             |
| Discovery     | HIGH — slow, accidental, threshold gaps       | LOW → system-initiated push to user                    |
| Investigation | HIGH — multi-source, format chaos, no dollars | LOW → NL query, annotated history, monetized output    |
| Resolution    | HIGH — political, slow, "boys who cried wolf" | MEDIUM → better evidence, human-in-loop still required |

---

## MAP 3: Campus Chargeback & Departmental Billing

**Persona:** University utility billing manager responsible for allocating energy costs across departments, colleges, and auxiliary units.
**Archetype composite:** Andee Chamberlain (Texas State University), Andi Ault (UT Austin Finance)

---

### TRIGGER

The close of a billing period requires the university to allocate utility costs internally — distributing the real bills it has paid to the utility across the departments, schools, colleges, and auxiliary units that consumed the energy. This is not a once-a-year event. It is a monthly cycle that compounds with every new building, every new meter, and every change in how the university's energy system is configured.

> _"Right now we charge buildings for utilities based on square footage. If we had better information about actual usage per building, we could charge based on actual consumption — and that would drive conservation."_
> — **James Norton**, Texas State University (Dr. Sarah Chen analysis, citing TX State Transcript)

> _"What happens from that is you can encourage efficiency or conservation. It's hard to drive that if you're charging people based on square footage."_
> — **Andee Chamberlain**, Texas State University (Transcript, direct quote)

> _"Our billing system is limited by our metering."_
> — **Andi Ault**, Sr. Associate Director of Finance, UT Austin (Dr. Sarah Chen analysis, citing Andi Ault Transcript)

**Stress level at trigger: MEDIUM-HIGH** — The monthly close is a known deadline, but the data quality problems mean every cycle carries the possibility of an unresolvable attribution problem.

---

### STAGE 1 — DISCOVERY (Without Clear Current)

**What happens:** Texas State operates a "hodgepodge" billing structure: some buildings have individual meters tied directly to the City of San Marcos; others are served by the district energy system (steam and chilled water from central plants) with plant-level meters that must be disaggregated to the building level; wastewater is billed separately. EnergyCAP is the primary data management platform, but it does not integrate district energy sub-metering as promised.

> _"EnergyCAP tells us that they can do that stuff, but it's harder than it sounds."_
> — **Andee Chamberlain**, Texas State University (Transcript, direct quote)

The data problem is structural: the information needed to support usage-based chargeback either doesn't exist (buildings without sub-meters) or exists in a format that doesn't connect cleanly to what EnergyCAP tracks (district energy sub-meters in a separate data layer from utility invoices).

At UT Austin, the finance team manages chargeback rates differently — Andi Ault's team sets internal billing rates that recover costs from campus departments. The metering granularity problem is identical: E&G buildings have building-level metering only, limiting the precision of cost allocation.

> _"E&G buildings have building-level metering only. Auxiliary buildings have more granularity."_
> — **Andi Ault** (Dr. Sarah Chen analysis, citing Andi Ault Transcript)

**Tools:** EnergyCAP (data management, limited on district energy integration), spreadsheets for allocation calculations, manual meter read logs.

**Key frustration:** The system that was supposed to handle this doesn't fully work. Every month, someone is hand-adjusting numbers that should be automated.

**Stress level: HIGH** — The task is not technically impossible, but it requires manual reconciliation of systems that don't connect, on a deadline, with accountability to departments who will question the numbers.

---

### STAGE 2 — INVESTIGATION (Without Clear Current)

**What happens:** Allocating costs accurately requires answering: What did each building actually consume? What is the correct cost to assign? For buildings on the district energy system, this requires reading sub-meters, converting units (steam BTUs and chilled water ton-hours into cost equivalents), and applying the correct internal rate.

The data tension between the energy ops team and the finance team is acute here:

> _"I care more about demand and usage — actual energy data. The bill processing folks care more about the bottom line — dollars."_
> — **Andee Chamberlain**, Texas State University (Transcript, direct quote — summarized in TX State Summary as a structural dual-audience problem)

These two teams need different slices of the same data, but the current system serves neither well. Andee wants consumption granularity to identify which buildings are efficient and which aren't. Finance wants a number they can book to an account. EnergyCAP gives them a merged view that satisfies neither.

**Where they get stuck:** The disaggregation of district energy costs — how to fairly split a central plant's total cost across 40 buildings served by that plant — requires assumptions about efficiency, load factor, and metering accuracy. Those assumptions are made manually, reviewed periodically, and contested by departments when their charge goes up.

The chargeback calculation complexity is documented in EnergyCAP's own G2/Capterra reviews: _"Chargebacks and splits are hard to understand. I tried to use the help, but it is lacking details."_ [Secondary research finding cited in Research Synthesis Brief, Section 03]

**Stress level: HIGH** — The investigation is iterative. There is no clean answer, only approximations that have to be documented and defended.

---

### STAGE 3 — RESOLUTION (Without Clear Current)

**What happens:** The allocation is calculated, reviewed, and distributed. Departments receive their utility charges. Some accept them. Some question them. The energy manager must then either defend the methodology or investigate department-specific anomalies.

The deeper structural failure: because charges are based on square footage rather than actual consumption, departments have no incentive to conserve energy — and they know the charge is arbitrary.

> _"It's hard to drive [conservation] if you're charging people based on square footage."_
> — **Andee Chamberlain**, Texas State University (Transcript, direct quote)

This means the chargeback system fails at its secondary purpose: it does not create the financial signal that would encourage departments to reduce consumption. The university spends energy management staff time on a monthly process that, at the end, produces charges that nobody has reason to respond to.

**What falls through the cracks:** Usage-based conservation incentives. Building-level efficiency benchmarking. The ability to tell a department that their consumption-per-occupant is 30% above peer buildings on campus.

**Time to resolution:** Monthly cycle, one to three days of manual work per cycle depending on complexity. Escalations to finance add additional time.

**Stress level: MEDIUM** — The process is familiar and completed successfully each month, but the outcome is known to be imprecise, and the downstream policy impact (conservation incentives) is absent.

---

### STAGE 4 — WITH CLEAR CURRENT

**Rate Analyst + Energy HQ | Delivery tier: Dashboard (Push to User) for allocation reports; Chat (React to User) for department-level inquiry**

**At trigger:** Energy HQ's portfolio view maintains a live map of building-level meter associations across the campus. Site-invoice association — the lead automation capability — links each meter's data to its building, department, and cost center. When monthly bills arrive, Rate Analyst automatically validates each meter read, flags anomalies (the 3,500 to 35,000 gallon wastewater error surfaces immediately), and calculates consumption by building.

_Important product boundary:_ Clear Current today assists chargeback calculation; it does not replace a dedicated chargeback accounting system. The value at this stage is faster, more reliable data preparation — reducing the manual reconciliation burden before the allocation numbers are finalized. Full campus chargeback — with district energy cost disaggregation, department-level allocation logic, and ERP integration — is a meaningful roadmap extension for the higher ed vertical. This is tagged explicitly below.

**At Stage 2 (Investigation):** Andi Ault's core need — anomaly flagging so she isn't searching for problems — is the native dashboard behavior. The finance user queries: _"Which buildings had a cost-per-square-foot above the campus average last month, and how does that compare to the same month last year?"_ The ops user queries: _"Which meters showed consumption increases above 15% last month, and what was the weather-normalized baseline?"_ The same dataset, two role-appropriate views, from a single chat interface. This directly closes the dual-audience gap that neither EnergyCAP nor any other current tool resolves.

**At Stage 3 (Resolution):** When departments question their charges, the energy manager can pull a building-level consumption report — with historical context, anomaly flags, and dollar attribution — in a single query. This replaces the manual data-assembly process that currently makes disputes time-consuming. Over time, as metering granularity improves, the platform's site-association engine enables a path toward actual usage-based billing.

**Specific output:** Building-level consumption reports with cost attribution; anomaly flags by meter; dual-audience views (ops vs. finance) from shared data; exportable department-level billing summaries.

**Stress level with Clear Current:** MEDIUM at trigger (complexity doesn't disappear, but data prep is automated), LOW at investigation (role-appropriate queries, immediate history), LOW at resolution (defensible, documented charges available on demand).

---

### WHAT CLEAR CURRENT SHOULD KNOW — CHARGEBACK PRODUCT GAP

The evidence here surfaces a genuine tension. The Research Synthesis Brief (Section 03) explicitly identifies campus chargeback as _EnergyCAP's stickiest feature and worst UX_ — and states that _no AI-native competitor offers it_. Clear Current's current CC Engine does not include full district energy cost allocation or ERP-integrated departmental billing. This is a `[EXTENDS ROADMAP]` / `[NET NEW / RESEARCH-ONLY]` gap depending on how far the current platform extends. Dan should assess:

- Can Rate Analyst today produce building-level consumption summaries that reduce manual chargeback calculation work?
- Is district energy cost disaggregation (steam + chilled water + electricity → building-level cost) on the roadmap?
- Is ERP integration (Banner, Workday, PeopleSoft) necessary for adoption, or is CSV export sufficient for the initial wedge?

If the answer to the first question is yes, Clear Current has an immediate, differentiated story for this persona. If ERP integration is required before any value is delivered, this is a longer-horizon product investment.

---

### EMOTIONAL ARC — MAP 3

| Stage         | Without CC                                                        | With CC                                                  |
| ------------- | ----------------------------------------------------------------- | -------------------------------------------------------- |
| Trigger       | MEDIUM-HIGH — monthly dread of the reconciliation cycle           | MEDIUM → data prep is automated                          |
| Discovery     | HIGH — system doesn't connect, manual reconciliation              | LOW → site-association handles meter-to-building linkage |
| Investigation | HIGH — two teams, two needs, one bad system                       | LOW → dual-audience views from shared data               |
| Resolution    | MEDIUM — defensible but arbitrary charges, no conservation signal | LOW → documented, queried on demand                      |

---

## MAP 4: Regulatory Intelligence & Budget Impact

**Persona:** Energy manager or finance director managing the exposure created by utility rate cases landing after budgets are locked.
**Archetype composite:** Andi Ault (UT Austin Finance), Phil Combs (Trane Technologies)

---

### TRIGGER

The institution submits its annual energy budget. The budget incorporates a forward rate assumption — either last year's rate plus an escalator, or a forecast from historical data. Weeks or months later, the utility announces a rate increase that was not in the budget.

> _"Budget was submitted in March. City of Austin rate changes often not finalized until after the budget is submitted."_
> — **Andi Ault**, UT Austin (Dr. Sarah Chen analysis, citing Andi Ault Transcript — **[SUMMARY INFERENCE**: this is a paraphrase of Andi's budget timing description, not a verbatim quote. The transcript confirms the timing gap but the exact wording above is summary-level.\*\*)

> _"Our budget process starts in October and runs through March... we don't always have the final rate information when we're building the budget."_
> — **Andi Ault**, UT Austin (Transcript — paraphrase, not verbatim; treat as **[SUMMARY INFERENCE]** pending transcript confirmation)

The verbatim quote closest to this trigger point, from the Andi Ault transcript as recorded in the Dr. Sarah Chen analysis:

> _"Anomaly flagging would be the first process so that that is streamlined and featured and flagged rather than looking for it. That would be time saving."_
> — **Andi Ault**, UT Austin (direct transcript quote, Dr. Sarah Chen analysis)

And from Phil Combs on the regulatory intelligence opportunity:

> _"That's something [regulatory intelligence] that we haven't seen anywhere. And I'm, like, that's super powerful."_
> — **Phil Combs**, Trane Technologies (Research Synthesis Brief, Section 04, Finding 4 — source: Phil Combs Summary)

**Stress level at trigger: MEDIUM initially → HIGH when rate case decision lands**

---

### STAGE 1 — DISCOVERY (Without Clear Current)

**What happens:** Rate case proceedings are public record. In principle, any energy manager or finance director could monitor them. In practice, almost none do. The proceedings are technical, lengthy (Ohio PUC mandates 275-day timelines per secondary research in the Synthesis Brief), and published on state regulatory commission websites that are designed for utility lawyers, not energy managers.

The discovery path in practice: the utility sends a notification. Or a rate advisory service sends an email. Or a broker mentions it in passing. Or the bill arrives and the rate is different.

For Andi Ault at UT Austin, the City of Austin sets rates. The timeline between when the City begins its rate review process and when the final rate takes effect is not tracked systematically by UT Austin's finance team.

For Phil Combs, who tracks this for large enterprise clients, the process requires active monitoring of PUC dockets — not something his energy manager clients do independently.

The secondary research in the Synthesis Brief provides the clearest illustration of why this matters: the PPL Pennsylvania rate case, filed October 2025, has a final decision date of July 1, 2026 — the same day as a university's new fiscal year. Boston University locks its budget in March. By the time the rate is finalized, the budget is five months old, and any variance is absorbed as an unplanned cost.

**Tools:** Utility notifications (irregular), rate advisory services (expensive, enterprise-only), broker communications (inconsistent), direct PUC website monitoring (technical, time-consuming).

**Key frustration:** The problem is structural. The regulatory calendar does not align with the institutional budget calendar. Nobody has built the tool that bridges them.

**Stress level: LOW initially (problem isn't visible) → HIGH when the variance hits the budget**

---

### STAGE 2 — INVESTIGATION (Without Clear Current)

**What happens:** Once a rate change is announced or suspected, the finance director must understand its dollar impact. How much of the rate increase is demand vs. volumetric? Which buildings are on which rate schedules? Is there an industrial rate schedule that might be more favorable at current load profiles?

For Andi Ault, this means pulling consumption data from the energy management system, applying the new rate structure manually, and calculating a revised budget estimate. The calculation is not technically complex, but it is time-consuming to do across a large portfolio, and it requires the energy manager and finance team to work together — which the data-format tension (ops wants demand data, finance wants dollar totals) complicates.

> _"I care more about demand and usage — actual energy data. The bill processing folks care more about the bottom line — dollars."_
> — **Andee Chamberlain**, Texas State University (Transcript — note: this quote is from Texas State, not UT Austin. It is cited here as confirming the same dual-audience tension described by Andi Ault at UT Austin, which the Dr. Sarah Chen analysis identifies as structurally consistent across both institutions.)

**Where they get stuck:** The impact calculation requires mapping every meter to its rate schedule, which is a manual cross-reference task in most energy management systems. EnergyCAP can store rate schedule information, but updating it when a rate case changes requires manual entry.

**Stress level: HIGH** — The rate change is real and the budget variance is real, but quantifying it precisely requires work that has to be done while everything else is also demanding attention.

---

### STAGE 3 — RESOLUTION (Without Clear Current)

**What happens:** Resolution has two components. First, update the current budget to reflect the new rate (a finance and accounting task). Second, consider whether any rate optimization actions are available — rate class changes, demand reduction, shifting load — that could offset some of the increase.

For most finance-side users, the first step is the primary job. The second step requires energy expertise that finance doesn't have and that, in the reactive mode most organizations operate in, never gets done.

Phil Combs described the second step as the "killer feature nobody has" — the ability to see a rate case filing, understand its implications for a specific portfolio, and surface mitigation options proactively.

> _"That's something that we haven't seen anywhere. And I'm, like, that's super powerful."_
> — **Phil Combs**, Trane Technologies (Research Synthesis Brief, Section 04, Finding 4)

**What falls through the cracks:** Rate cases that would have triggered rate class reviews. Demand response opportunities that opened during the rate case window. Budget amendments that should have been made but weren't because the math was too time-consuming.

**Time to resolution:** Budget amendments typically require finance cycles — weeks to months for formal revisions. The informal impact is absorbed immediately as variance.

**Stress level: HIGH** — The budget is wrong, the explanation is technical, and the path to mitigation requires energy expertise at the moment when everyone is focused on fixing the immediate financial gap.

---

### STAGE 4 — WITH CLEAR CURRENT

**Rate Analyst | Delivery tier: Dashboard (Push to User) for rate case alerts; Chat (React to User) for impact quantification**

**At trigger:** Rate Analyst monitors public PUC docket filings for utilities serving each customer's portfolio. When a rate case is filed, the Dashboard tier pushes an alert: _"Austin Energy has filed a rate case. Based on your current load profile and rate schedule, a 9% increase would add approximately $180,000 to your annual electricity cost at current consumption levels."_ The alert does not wait for a finance analyst to discover the filing on the PUC website.

_Product honesty:_ Regulatory intelligence — automated PUC docket monitoring integrated with portfolio impact modeling — is confirmed white space with no competitive solution. It is not described as a shipped capability in the CC Engine product context. The secondary research confirms the opportunity and the absence of any competitor. This is tagged `[EXTENDS ROADMAP]` in the implications section. The existing Rate Analyst tariff and contract engine provides the underlying logic (rate schedule modeling, scenario analysis) that would power this feature; the docket monitoring and intake layer is the extension required.

**At Stage 2 (Investigation):** The Chat tier enables immediate impact quantification. Andi Ault can ask: _"If Austin Energy's rate case results in the proposed 9% increase, what is the projected annual budget impact by building, and which buildings are on rate schedules that could benefit from a class review?"_ This collapses a multi-day manual calculation into a single query, and it connects the finance question (dollar impact) to the ops question (which rate schedules to review) in a single output.

**At Stage 3 (Resolution):** Rate Analyst generates a budget variance memo — projected impact by rate schedule, mitigation scenario analysis, and a summary suitable for a CFO briefing. Phil Combs' "killer feature" is not just the monitoring; it is the monetized, CFO-ready output that the energy manager can bring to the budget committee without translating energy-speak into finance-speak.

**Specific output:** Rate case alert with quantified portfolio impact; building-level impact breakdown; rate schedule optimization scenarios; CFO-ready budget memo.

**Stress level with Clear Current:** LOW at trigger (alert before the budget is locked), LOW at investigation (instant impact quantification), MEDIUM at resolution (clear memo to bring to CFO, but institutional budget amendment processes remain slow).

---

### EMOTIONAL ARC — MAP 4

| Stage         | Without CC                                           | With CC                                            |
| ------------- | ---------------------------------------------------- | -------------------------------------------------- |
| Trigger       | LOW → HIGH (invisible until it's too late)           | LOW → MEDIUM (early warning, quantified)           |
| Discovery     | LOW → HIGH (often discovered after budget is locked) | LOW (proactive alert before budget closes)         |
| Investigation | HIGH — manual calculation, format tension            | LOW → single query, role-appropriate output        |
| Resolution    | HIGH — budget variance is real, options unclear      | MEDIUM — clear evidence for amendment + mitigation |

**The emotional arc shift here is the most dramatic of all five maps.** Without Clear Current, this problem is often invisible until it creates an irreversible budget variance. With Clear Current, it becomes a manageable risk with early warning and quantified options.

---

## MAP 5: Budgeting & Forecasting (Annual Cycle)

**Persona:** Energy manager and finance director collaborating on annual energy budget — building a projection that can survive CFO scrutiny, accommodate rate case uncertainty, and support a multi-year capital investment case.
**Archetype composite:** Andi Ault (UT Austin Finance), Andee Chamberlain (Texas State University), Phil Combs (Trane Technologies)

---

### TRIGGER

The institution enters its annual budget planning season. For universities, this begins in October–November and runs to March–May, producing a budget that takes effect September 1. For corporate organizations, it runs Q3–Q4 of the current fiscal year for the following year. Energy is a line item that finance will scrutinize, because energy costs are rising (76% of commercial energy buyers expect their utility costs to increase in the next year — EnergyCAP State of Utilities 2026, cited in Synthesis Brief Section 03), the variance year-over-year is hard to explain, and the underlying drivers (weather, rate cases, equipment aging, operational changes) are opaque to anyone without energy expertise.

> _"We have a five-year forecast with every annual budget."_
> — **Andi Ault**, UT Austin (Dr. Sarah Chen analysis, citing Andi Ault Transcript — **[SUMMARY INFERENCE]**: the five-year forecast is referenced in the summary synthesis; the verbatim source should be confirmed in the transcript before quoting directly to investors.)

> _"We've been budgeting 3% rate escalation historically but actual commercial energy costs have grown at 5.9% CAGR."_
> — Secondary research finding (Research Synthesis Brief, Section 03, Regulatory Intelligence finding — not a primary interviewee quote)

> _"The ability to build budgets and forecasts within our financial system — or have it be integrated with our financial system — would be very helpful."_
> — **Andi Ault**, UT Austin (Dr. Sarah Chen analysis, citing Andi Ault Transcript)

**Stress level at trigger: MEDIUM** — Budget season is known and scheduled. The anxiety is about accuracy and defensibility, not surprise.

---

### STAGE 1 — DISCOVERY (Without Clear Current)

**What happens:** The energy manager pulls last year's utility costs from the energy management system (EnergyCAP for Texas State; UT Austin's billing system). They apply a rate escalation assumption — typically 3–5% — and adjust for any known changes in operations (new buildings coming online, equipment replacements, occupancy changes). The finance team applies their own escalation assumptions, which may or may not match the energy team's.

The resulting budget is a blend of historical data and informed guessing. The historical data is clean enough. The assumptions are where the budget fails.

> _"Budget submitted in March. City of Austin rate changes often not finalized until after the budget is submitted."_
> — **Andi Ault**, UT Austin (Dr. Sarah Chen analysis — **[SUMMARY INFERENCE]**: paraphrase of the timing gap described in the transcript; verbatim confirmation recommended)

At Texas State, multi-year gas procurement decisions are made in March–May, overlapping with the budget finalization period. Andee makes gas strip purchases on 3-year terms based on market conditions — a proactive action in an otherwise reactive landscape.

> _"The natural gas purchasing season in March through May is when you decide whether to buy strips or stay on the market."_
> — **Andee Chamberlain**, Texas State University (Dr. Sarah Chen analysis, paraphrase of Transcript — **[SUMMARY INFERENCE]**: verbatim language is reconstructed from multiple transcript references to gas purchasing; confirm exact quote)

**Tools:** EnergyCAP (historical data pull), Excel (escalation model building), broker communications (gas procurement), manual weather normalization.

**Key frustration:** The budget is built on last year's data plus a guess. If the guess is wrong — because a rate case lands, because weather is extreme, because a new building comes online late — the variance is unexplainable to a CFO who doesn't know the difference between a demand charge and a volumetric charge.

**Stress level: MEDIUM** — The process is familiar. The risk is invisible until the variance report arrives.

---

### STAGE 2 — INVESTIGATION (Without Clear Current)

**What happens:** Finance and energy teams try to build the most defensible forecast possible. For UT Austin, this means a five-year model. For Texas State, it means a rolling annual with multi-year gas procurement decisions attached.

The investigation question is: _What will energy cost next year?_ It has three components:

1. **Volume:** How much energy will we consume? This requires weather normalization, occupancy projections, and knowledge of planned equipment changes.
2. **Rate:** What will utilities charge per unit? This requires rate case monitoring, tariff analysis, and commodity price forecasting.
3. **Mix:** Are we on the right rate schedules, and should we change any contracts? This requires optimization analysis.

Current tools address component 1 (historical consumption trends in EnergyCAP) and partially address component 3 (broker advice for supply contracts). Nobody is systematically addressing component 2 for mid-market commercial buyers.

Phil Combs on the regulatory gap:

> _"That's something that we haven't seen anywhere. And I'm, like, that's super powerful."_
> — **Phil Combs**, Trane Technologies (Research Synthesis Brief, Section 04, Finding 4)

**Where they get stuck:** The volume forecast is reasonably accurate for stable portfolios. The rate forecast is structurally broken because rate case timelines don't align with budget timelines. The mix optimization never happens because it requires energy expertise during the period when everyone is too busy building the base-case budget.

**Stress level: MEDIUM-HIGH** — The deeper the team goes into the forecast, the more clearly they see the gaps — but plugging the gaps requires information they don't have.

---

### STAGE 3 — RESOLUTION (Without Clear Current)

**What happens:** The budget is finalized with a rate escalation assumption that everyone knows is a guess. Finance accepts the energy team's projection because there's no better option. The budget is submitted.

Six months later, variance begins accumulating. Some of it is weather. Some is a rate case that landed unexpectedly. Some is equipment degradation nobody tracked. None of it is easy to explain retroactively.

> _"We have the job of trying to not be the boys who cried wolf, but say: here's what we suggest we do, and here's the benefits to doing so beyond just avoiding a catastrophe."_
> — **John Culver**, AdventHealth (Agent: Ray Kowalski, citing AdventHealth Transcript)

The energy manager's credibility is tied to forecast accuracy. When the forecast is wrong for structural reasons outside their control (a rate case, an extreme summer), they spend credibility they need for capital investment requests.

**What falls through the cracks:** Rate schedule optimization that would have reduced the forecast. Demand response opportunities that would have reduced peak exposure. Capital investments that would have been funded if the CFO had seen a compelling multi-year cost curve.

**Stress level: MEDIUM at resolution → HIGH six months later when variance accumulates**

---

### STAGE 4 — WITH CLEAR CURRENT

**Rate Analyst + Deal Center | Delivery tier: Dashboard (Push to User) for rate case and market alerts; Chat (React to User) for scenario modeling**

**At budget trigger:** Rate Analyst has been monitoring the utility portfolio throughout the year. As budget season opens, the Dashboard tier surfaces a briefing: pending rate cases by utility, current tariff structure by building, and a forecast model using current consumption data and projected rate scenarios. The energy manager and finance director enter budget season with a data-supported view of what rates are likely to do, not just what they have done.

_Product honesty:_ The tariff and contract engine in Rate Analyst supports rate scenario modeling today ("what-if on rates and usage" is named in the product context). The PUC docket monitoring layer is the roadmap extension. For the current product, the budget-support value is scenario analysis: _"If rates increase 9% versus 5%, here is the impact on the portfolio."_ This is actionable now.

**At Stage 2 (Investigation):** The Chat tier serves both audiences simultaneously. Andi Ault asks: _"What is the projected total energy cost for FY2027 if Austin Energy's current proposed rate case passes at the requested amount, compared to the current rate?"_ Andee Chamberlain asks: _"Which buildings have the highest energy intensity, and what is the normalized trend over the last three years?"_ Both queries return immediately, from the same dataset, in formats appropriate to each audience.

For gas procurement, Deal Center surfaces current strip pricing context alongside historical consumption data — giving Andee the market intelligence she needs to decide whether to lock in a 3-year strip or stay on the spot market.

**At Stage 3 (Resolution):** The final budget package includes a CC-generated rate scenario analysis, building-level consumption forecast, and capital investment prioritization ranked by ROI. When the CFO asks why energy costs are projected to rise 9% instead of 3%, the answer is a one-page summary with the rate case filing date, the proposed increase, and the portfolio impact calculation — not an apology for a guess.

_Product boundary:_ Full forecasting and M&V-friendly baseline generation is described as a directional roadmap theme in the CC Engine context. What ships today is scenario analysis from the tariff engine. The multi-year capital investment ROI modeling is a roadmap extension — tagged below.

**Specific output:** Rate scenario comparison (base vs. proposed vs. historical escalator); building-level consumption forecast; gas procurement decision support from Deal Center; CFO-ready budget memo with rate case context.

**Stress level with Clear Current:** LOW at trigger (budget season opens with a data briefing, not a blank spreadsheet), LOW at investigation (both audiences answered from shared data), LOW at resolution (defensible numbers with documented assumptions).

---

### EMOTIONAL ARC — MAP 5

| Stage         | Without CC                                    | With CC                                             |
| ------------- | --------------------------------------------- | --------------------------------------------------- |
| Trigger       | MEDIUM — familiar but structurally broken     | LOW — rate case context ready at budget open        |
| Discovery     | MEDIUM — last year's data + a guess           | LOW — scenario analysis from current data           |
| Investigation | MEDIUM-HIGH — rate forecast gap is structural | LOW — both audiences served, NL query               |
| Resolution    | MEDIUM → HIGH six months later                | LOW — defensible budget with documented assumptions |

---

## Cross-Map Synthesis: What the Five Journeys Tell Us Together

Five maps, five personas, one structural theme: **these buyers are running their organizations through the energy management equivalent of flying blind.**

Every map begins with a reactive trigger. Every Stage 1 is a late-discovery story. Every Stage 2 is a manual, multi-source reconciliation that requires expertise that most organizations have on a single person who might leave. And every Stage 3 resolution is less complete than it should be — errors found but not recovered, rate cases absorbed rather than anticipated, budgets submitted with acknowledged gaps.

The five emotional arcs share a pattern: **stress is highest at the investigation and resolution stages**, not at the trigger. The trigger is often not felt at all — anomalies accumulate invisibly, rate cases proceed unmonitored, budget assumptions drift from reality. When the problem finally surfaces, the accumulation of missed time and missed dollars is the real cost.

**The three Clear Current capabilities that close the most emotional distance across all five maps:**

1. **Proactive alerts (Dashboard tier)** — reducing late or accidental discovery (Maps 1, 2, 4)
2. **Natural language investigation across shared data (Chat tier)** — closing the dual-audience gap and eliminating multi-system manual reconciliation (all five maps)
3. **Dollar-quantified, CFO-ready outputs** — bridging the energy-to-finance translation gap that keeps practitioners from building internal cases for action (Maps 1, 2, 4, 5)

**The honest gap that no map resolves today:** The identified-vs-realized dollar recovery. Marc Spieler's question — _"Have utilities actually issued refunds, or is the $10M still theoretical?"_ — hangs over every resolution stage. Clear Current's current position is: faster detection, better documentation, human-assisted resolution. The platform shortens the distance from ignorance to evidence. It does not yet close the distance from evidence to recovered dollars — and every customer and investor will eventually ask about that distance.

---

## Implications for Clear Current (tagged)

- **[FITS CURRENT PRODUCT]** The Dashboard push-to-user tier is the highest-urgency product requirement across all five journey maps. Every persona in this corpus is reactive — they will not log in to look for problems. The platform must find them. Anomaly alerts ranked by dollar magnitude (not percentage deviation) are the minimum viable interruption.

- **[FITS CURRENT PRODUCT]** The dual-audience problem (ops wants demand/usage data; finance wants dollars) is structurally present in every higher ed account and most large commercial accounts. Rate Analyst's chat interface already supports role-appropriate NL queries from shared data. The messaging opportunity: _"One dataset. Two audiences. No translation required."_ This is already true of the current product — it needs to be a lead positioning claim.

- **[FITS CURRENT PRODUCT]** The bill processor departure pattern (Texas State, and implied across any institution with a long-tenured specialist) is a repeatable, acute engagement trigger. The positioning line: _"When your bill processing person leaves, we're the system that doesn't forget."_ This is addressable today with invoice ingestion, site association, and anomaly detection from historical baselines.

- **[FITS CURRENT PRODUCT]** Rate Analyst's tariff and contract engine supports budget scenario modeling ("what if rates increase 9% vs. 5%") today. This is an under-communicated value proposition for the budget season use case. The deliverable for this is a CFO-ready rate scenario memo — not a dashboard for energy managers. The output format matters as much as the analysis.

- **[EXTENDS ROADMAP]** The campus chargeback use case (Map 3) requires district energy cost disaggregation logic (steam + chilled water + electricity → building-level cost) and role-based allocation reporting that goes beyond current Rate Analyst capabilities. This is the highest-moat feature for the higher ed vertical — EnergyCAP's stickiest and worst-UX feature, with zero AI-native competitors. Scoping this as a product investment should be a near-term decision.

- **[EXTENDS ROADMAP]** Regulatory intelligence — automated PUC docket monitoring integrated with portfolio impact modeling — is the confirmed white space identified by Phil Combs and validated by the Andi Ault budget timing gap. The underlying tariff engine is in Rate Analyst. The docket monitoring intake layer is the extension needed. Zero competitors offer this. This should be named explicitly in the May 2026 fundraise narrative as a defensible product moat.

- **[EXTENDS ROADMAP]** ERP integration (Banner, Workday, PeopleSoft) for higher ed and hospital system buyers is named as a prerequisite by Andi Ault (financial system integration as the #1 automation wish) and implied by AdventHealth's organizational structure. This is not a near-term must-have — CSV export is sufficient for initial wedge — but it will be the stickiness mechanism that makes Clear Current's chargeback feature as hard to remove as EnergyCAP's.

- **[EXTENDS ROADMAP]** Multi-year capital investment ROI modeling (Map 5, Stage 4) — ranking equipment investments by energy savings payback — is Phil Combs' "monetize it" imperative translated into a product feature. The tariff engine provides the cost side. An equipment-savings model layer would complete the ROI calculation. This is the output that gets energy managers in front of CFOs with capital requests.

- **[NET NEW / RESEARCH-ONLY]** The identified-vs-realized recovery gap is the single most important commercial risk not yet resolved by product or documented by case study. Before the May raise, Clear Current needs: one documented case showing error identified → utility contacted → credit issued → dollars recovered. This is not a product feature — it is proof leadership must generate from existing pilots. Marc Spieler's question will be every investor's first diligence question.

- **[NET NEW / RESEARCH-ONLY]** Deposit recovery (Roger Goldstein: utilities hold deposits for years because customers never request returns) is an untapped, low-friction value recovery opportunity that requires no utility dispute — only identification and a request. This could be built into Rate Analyst as a specific scan: _"Deposits held more than 24 months with no recent credit."_ No competitive solution currently does this. It is a concrete, recoverable-dollar story that does not depend on resolving billing disputes.

- **[NET NEW / RESEARCH-ONLY]** Water billing integration — Andee Chamberlain flagged it at Texas State; wastewater errors were the best anomaly detection example in the corpus — is an emerging parallel pain point. No secondary research on commercial water billing error rates exists in this corpus. If Clear Current's ingestion engine can handle water invoices today (separate utility, different format), this should be confirmed and communicated. If not, it is a roadmap item with clear demand signal.

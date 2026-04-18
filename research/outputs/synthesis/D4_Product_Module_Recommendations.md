# Product Module Recommendations

# Generated: 2026-04-17T21:03:39.469542

---

# Clear Current Technologies

## Product Module Recommendations

### Five Core Modules — CPO Roadmap & CEO Investor Narrative

**Prepared for:** Dan Schreiber (CPO) | John Reuter (CEO)
**Grounded in:** Primary research corpus (5 interviews) + secondary synthesis
**Standard:** Every claim tied to named source; product maturity per Clear Current context

---

> **CEO Scan — Read This First**
>
> The five modules below are not a wish list. They are grounded in what buyers told us they need _right now_, cross-validated against secondary research, and mapped to what Clear Current can honestly ship, extend, or explore. The single most important tension in this document: **buyers are not asking for AI — they are asking for answers they don't currently get, delivered before they have to go looking.** Modules 1 and 2 are the wedge. Module 3 is the defensible white space. Modules 4 and 5 are the expansion logic that makes the platform sticky after the wedge is in.
>
> Where the research reveals a gap between what Clear Current ships today and what buyers expect — specifically on the **identified-vs-realized** recovery question — this document names it directly and prescribes the proof you need to close it.

---

## MODULE 1: Billing Error Audit Engine

### PROBLEM DEFINITION

Large commercial energy buyers systematically overpay on utility bills because errors — wrong multipliers, misapplied rate components, meter failures, demand charge miscalculations — are structurally hard to find manually and nearly impossible to catch across a multi-site portfolio. The detection problem is not occasional sloppiness; it is an information asymmetry baked into the utility billing relationship. Rhode Island's PUC found that **83% of internally flagged billing exceptions were still sent to customers** — meaning utilities know errors exist and send them anyway. FERC confirmed **$108M mischarged at a single utility** (FirstEnergy).

The person who experiences this most acutely is a campus or portfolio energy manager responsible for hundreds or thousands of meters, doing backward-looking bill review manually against historical baselines — or, worse, not doing it at all because the one person who knew the bill history just left.

**Verbatim quote capturing the problem at its most acute:**

> _"We had a weird multiplier happen on one of our wastewater bills. That's why you keep auditing your bills so that you can go, okay, why is this off? This is really weird. We've been spending 3,500 gallons every month, and now it's 35,000. Something's wrong."_
> — **Andee Chamberlain, Energy & Water Conservation Manager, Texas State University**

And from the operations side of recovery, what "finding an error" actually requires to become money back:

> _"We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of. I mean, that is incredibly rare... that required board members talking to each other."_
> — **Ann Walston, Sr. Energy Manager, Bon Secours Mercy Health**

---

### EVIDENCE BASE

**Texas State University (Chamberlain, Teague, Norton)**

- 1,500 meters, 98 buildings, district energy. Active bill auditing practice — comparison of current consumption against historical baseline. Wastewater multiplier error discovered by human memory. Long-tenured bill processor recently departed, taking institutional knowledge with her. Direct consequence: "We're scrambling a little. We'll probably outsource that."
- Most significant structural vulnerability: _"With 1,500 meters, billing can be hard to track. It's not just our situation — everybody with multiple facilities and multiple meters deals with this."_ — **Andee Chamberlain, Texas State**

**Bon Secours Mercy Health (Ann Walston)**

- Two major meter failure events across 10–12 years. First incident: ~$5–6M overbilling, partial recovery. Second: $1M+ recovery, requiring board-level negotiation. Partial refund failed due to "line losses" — a settlement category where dollars cannot be traced. Uses Get Choice as third-party bill processor with AI anomaly detection; it found a water leak before operations did.
- _"It took over a year to map meters to buildings."_ — **Ann Walston, Bon Secours Mercy Health** _(from interview summary; summary inference — direct wording in transcript may vary slightly)_

**Panda Restaurant Group (Roger Goldstein)**

- 2,600 locations, ~10,000 bills/month. Third-party processor (NG Insight) uses threshold-based exception rules. Critical failure: _"We didn't know there was a single meter covering two outlets on a shared space. So for a year, we paid the neighbor's electricity."_ — **Roger Goldstein, Panda Restaurant Group**
- Also surfaced deposit recovery: utilities hold 10-year-old deposits customers never claim because no tool systematically tracks them.

**Houston Methodist (Sean Sevy)**

- Active power factor investigation at the time of interview: _"I've got a campus that's showing a power factor of 80–81%. That is unheard of nowadays... something's wrong and it's a meter issue is what I think."_ — **Sean Sevy, Houston Methodist**
- His broker (Prism Energy) doing "cursory reviews" caught this — not his primary tool (Energy Print). Energy Print is benchmarking/trend software; it does not flag systematic tariff component errors.

**Marc Spieler (NVIDIA)**

- Posed the single most important commercial challenge: _"Have the utilities actually recognized that they made a mistake and actually given the credit back to the company? Or they've identified the issue, they can justify the issue, but nobody's gotten a refund on their payment yet?"_ — **Marc Spieler, Sr. MD Global Energy Industry, NVIDIA**
- Independently validated the bill audit market: "I have heard this before, not just for utilities, but there's got to be third company billing companies that always come in and say, hey, we'll audit your bills and we get a percentage."

---

### TARGET PERSONA

| Role                             | Title Examples                                                                       | Interaction Pattern                                               |
| -------------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Primary daily user**           | Energy & Water Conservation Manager, Campus Energy Manager, Portfolio Energy Analyst | Investigates flagged items, resolves with utility                 |
| **Secondary (receives reports)** | Facilities VP, CFO, Finance Director                                                 | Views summary: errors found, dollars at stake, recovery status    |
| **Economic buyer**               | VP Facilities, CFO, Chief Operating Officer                                          | Approves purchase on ROI: audit fees avoided, recovery $ expected |

---

### BUSINESS VALUE

**Framing that survives investor scrutiny:**
The appropriate ROI frame is not "80% of customers overpay" (this figure is not sourced in the corpus). The defensible frame:

- FERC enforcement actions confirm systematic utility misbilling at eight-figure scale at individual utilities
- RI PUC: 83% of internally flagged exceptions reach customers anyway — structural, not anecdotal
- Texas State: 10x multiplier error (3,500 → 35,000 gallons) discovered by human memory across 1,500 meters
- Ann Walston: $1M+ recovered from a single meter failure — and characterized that as "incredibly rare" because most organizations absorb the loss
- Clear Current's pilot portfolio: $10M in billing errors identified across 12 pilots _(per Synthesis Brief — leadership should verify exact figure and confirm whether any portion has been recovered before using in investor materials)_

**The ROI calculation an energy manager uses:**
_"If a third-party auditor charges 25–50% of recoveries on contingency, and we're recovering $100K–$1M per audit cycle, Clear Current at a flat SaaS fee pays for itself on the first recovery."_

**The ROI calculation a CFO uses:**
_"My energy budget is $X million. A 1–3% billing error rate is $X0,000–$X00,000. This platform costs less than one error."_

---

### PRODUCT SPECIFICATION — MVP

**Data required:**

- Uploaded utility invoices (PDF or EDI) for minimum 12 months, ideally 24
- Site/meter mapping (this is the prerequisite — see sequencing)
- Rate tariff for each account (Clear Current's tariff/contract engine provides this)

**What the engineer builds in Sprint 1:**

1. Invoice ingestion pipeline (Clear Current already ships AI-assisted ingestion) — confirm coverage for target utility formats
2. Line-item extraction: usage (kWh/therms), demand (kW), rate components, taxes/surcharges, multipliers
3. Historical baseline computation per meter per line-item (minimum 6-month rolling window)
4. Deviation rules: flag items exceeding configurable % threshold vs. historical baseline AND vs. tariff-calculated expected value
5. Error categorization: multiplier errors, demand charge miscalculations, wrong rate class, tariff component misapplication, meter read anomalies

**Output:**

- Prioritized list of flagged line items with: (a) what was charged, (b) what should have been charged per tariff, (c) estimated dollar delta, (d) confidence level
- Evidence package per error: relevant invoice page, tariff clause, historical comparison chart

> **Product maturity note:** Clear Current's CC Engine already ships "spot errors" capability — this MVP is a structured deepening of that capability with output packaging designed for dispute documentation, not just detection. Do not position as "resolving errors autonomously." The output is a dispute-ready package that a human submits.

---

### AI INTERACTION MODEL

**Primary tier: Dashboard → Push to User**
The system runs nightly/weekly against all ingested invoices and pushes flagged items to a prioritized exception queue without requiring the user to initiate a query. This is the tier most needed given the "reactive buyer" finding — if users have to go looking, they won't.

**Secondary tier: Chat → React to User**
User can ask Rate Analyst: _"Show me all demand charge discrepancies in the last 6 months above $5,000"_ or _"What happened to our wastewater bill in March?"_ — conversational access to the same underlying data.

**What AI does in background:**

- Extracts structured data from invoices (ingestion layer, already shipped)
- Computes expected charge from tariff engine
- Scores deviation magnitude and flags exceptions
- Clusters similar errors across sites (portfolio pattern detection)

**What explanation is provided:**
Every flag includes: error type label, tariff clause cited, dollar delta, historical comparison. Designed for Ann Walston's recovery requirement: "it's not enough to say there's an error — you have to produce the documented, quantified, defensible case."

**Autonomous tier (Do for User) — roadmap only, not today's default:**
Automated utility correspondence, dispute tracking, credit monitoring. This is the CC Engine's "close the loop" roadmap theme. Do not ship or describe as live without named customer evidence of closed-loop recovery.

---

### COMPETITIVE DIFFERENTIATION

| Competitor                                 | What They Do                                        | What They Miss                                                                                                                   |
| ------------------------------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **EnergyCAP**                              | Historical bill storage, basic variance reporting   | Requires separate OCR integration; no pattern-based error detection; "glorified spreadsheet" per G2 reviews                      |
| **NG Insight / Get Choice / Energy Print** | Threshold-based exception rules, manual review      | Cannot catch baseline drift (the Goldstein/Walston pattern); flags spikes, not systematic errors                                 |
| **Arcadia**                                | Utility data aggregation, tariff matching           | No natural language interface; no error dispute documentation; built for developer API consumption, not energy manager workflows |
| **Schneider Electric (Sera)**              | 39M bills/year, agentic AI, rules-based audit layer | Rules-based; not pattern/ML-based anomaly detection; enterprise-scale but not energy manager UX                                  |

**Clear Current's specific differentiator:** Tariff-aware error detection — comparing not just to historical baseline but to _what the tariff says should be charged_ for that consumption profile. This requires the tariff/contract engine to be integrated with the billing audit layer. No competitor in the corpus integrates these two.

---

### SEQUENCING RECOMMENDATION

**This is Module 1 — but it has one hard prerequisite.**

The prerequisite is **site/meter association** (the CC Engine's current "lead capability on automation"). An audit engine that cannot map invoices to sites produces noise, not intelligence. This is not a blocker to starting development — it is a qualification filter for which customers can onboard first.

**What must be true before this works at full power:**

- Invoice ingestion pipeline operational (already shipped)
- Site/meter mapping complete for the target account (Clear Current's stated investment area)
- Rate tariff for each account loaded in tariff engine (existing capability)

**What leadership needs before putting recovery numbers in front of investors:**
Documented case studies with the full recovery cycle: error identified → utility contacted → credit issued → dollars received. Marc Spieler asked for this directly. Ann Walston's $1M+ story is the closest — but it required board-level intervention. Clear Current needs at least one case study showing recovery through the platform workflow, not through extraordinary relationship effort.

---

---

## MODULE 2: Anomaly Detection & Alerting

### PROBLEM DEFINITION

The central failure of every existing energy management tool described in this research is identical: **they flag spikes, not drift.** Threshold-based rules catch when a bill is 30% above last month. They do not catch when usage gradually escalates over twelve months because the new elevated level has become the baseline. They do not catch systematic meter errors that generate consistent wrong readings. They do not catch when one meter silently starts billing for a neighboring tenant's consumption. By the time a human notices, thousands to millions of dollars in avoidable cost have already been paid.

The person who experiences this acutely is a multi-site energy manager responsible for more accounts than any human can individually review monthly — or any solo energy manager whose only defense is memory and a comparison to last month's bill.

**Verbatim quote capturing the problem at its most acute:**

> _"We didn't know there was a single meter covering two outlets on a shared space. So for a year, we paid the neighbor's electricity."_
> — **Roger Goldstein, Sr. Director Energy Operations, Panda Restaurant Group**

---

### EVIDENCE BASE

**Roger Goldstein (Panda Restaurant Group)**

- 2,600 locations, ~10,000 bills/month, using NG Insight with threshold-based exception rules. Threshold rules failed on the shared meter case: the charges were consistent enough to become the new baseline. Rules-based systems cannot distinguish "elevated but stable" from "correct."
- Provides the H2NO (Conservation Labs) mental model: water leak detection using real-time anomaly detection that fired _automatically_ before operations noticed. _"That system alerted us before we would have caught it manually."_ _(Summary inference — exact wording per summary; verify against transcript for investor use)_
- Also describes HVAC degradation: gradual electricity creep at the location level that static thresholds cannot catch. This is the canonical baseline-drift scenario.

**Ann Walston (Bon Secours Mercy Health)**

- Two meter failure events where the meter malfunctioned and established a new (wrong) reading as the baseline. $5–6M accumulated in the first instance; $1M+ in the second. Get Choice eventually flagged the anomaly — but only after significant overbilling had accumulated. Walston confirmed: _"A water leak was discovered by the AI before operations found it."_ _(Summary citation — confirm against transcript for investor use)_

**James Norton (Texas State University)**

- Active EnergyCAP user, 1,500 meters, 98 buildings. Named anomaly detection as highest-value feature explicitly: _"The biggest thing we'd want to know about right away."_ — **James Norton, Energy & Water Conservation Engineer, Texas State University**
- This is a confirmed, named ask from a current EnergyCAP user who is describing what EnergyCAP _doesn't_ do well enough. The competitive displacement path is direct.

**Sean Sevy (Houston Methodist)**

- Power factor investigation: _"I've got a campus that's showing a power factor of 80–81%. That is unheard of nowadays... something's wrong and it's a meter issue is what I think."_ — **Sean Sevy, Director of Energy Management, Houston Methodist**
- Energy Print (his current tool) did not flag this. His broker did, via manual review. This is exactly the pattern-based anomaly that a system monitoring against tariff-expected power factor ranges would surface automatically.

**Intermountain Health (Ross Snow / summary)**

- $40K-to-$140K bill spike that slipped through their third-party processor. _(Summary reference — verify named source and exact figure against transcript before citing in board materials.)_ The team's reaction: "A third party should have flagged that — they didn't." This is the institutional expression of anomaly detection demand.

---

### TARGET PERSONA

| Role                        | Title Examples                      | Interaction Pattern                                                                    |
| --------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------- |
| **Primary alert recipient** | Energy Manager, Facilities Director | Receives pushed alert; investigates and acts                                           |
| **Secondary**               | Finance/Budget Analyst, CFO         | Receives periodic summary: anomalies found, dollars flagged, status                    |
| **Economic buyer**          | VP Operations, CFO                  | Buys on: "this catches what my team misses because there are too many meters to watch" |

The critical persona insight from Andi Ault (UT Austin, Finance): _"Definitely flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it."_ She explicitly does not want to query the data herself. Push is her preferred interaction — and she is the finance-side buyer at a $20M/year energy spend institution.

---

### BUSINESS VALUE

**The quantified case:**

- Roger Goldstein's shared-meter error: 12 months of undetected overpayment before human discovery. At a large restaurant chain, a single site error running 12 months can represent $10,000–$50,000 depending on location size and local rates.
- Ann Walston: meter failures accumulated $5–6M and $1M+ respectively before detection. Get Choice's AI anomaly detection did eventually find a water leak — but the meter failures took much longer.
- James Norton: 1,500 meters. If even 1% have an active anomaly in any given month, that is 15 simultaneous issues no human team can track individually.

**The framing for investors:**
_"The median commercial energy manager is responsible for more meters than they can individually review monthly. Our system is the monitoring layer that never sleeps, never misses a baseline shift, and fires before the next billing cycle compounds the error."_

---

### PRODUCT SPECIFICATION — MVP

**Data required:**

- 12–24 months of ingested invoice history per meter (baseline computation)
- Weather data (for weather-normalized anomaly detection — surface in v2; v1 can use pure billing history)
- Site/meter mapping (prerequisite — same as Module 1)

**What the engineer builds in Sprint 1:**

1. Per-meter baseline model: rolling average + standard deviation per billing component (usage, demand, key line items) across equivalent periods (prior 3 same-month readings)
2. Deviation scoring: flag readings exceeding 2–3 sigma from baseline, weighted by dollar magnitude
3. Pattern classification: spike (single-period outlier) vs. drift (multi-period directional shift) — this is the key differentiation from existing threshold tools
4. Alert queue: prioritized by estimated dollar impact, not just deviation magnitude
5. Alert card: shows current vs. expected, dollar delta estimate, comparable periods, suggested investigation step

**Output:**

- Daily/weekly pushed alert digest to energy manager: top N anomalies by dollar impact
- Alert card per anomaly with: baseline comparison chart, dollar impact estimate, anomaly type classification, suggested action
- Portfolio-level summary for finance: total dollar exposure flagged this period

---

### AI INTERACTION MODEL

**Primary tier: Dashboard → Push to User**
This is the defining tier for this module. Anomaly detection must run unattended and surface findings without user initiation. The reactive buyer finding makes this non-negotiable: users will not log in to look for problems. The system must find them and file a report.

**Secondary tier: Chat → React to User**
After receiving an alert, the user can ask Rate Analyst: _"What changed at this meter in the last 6 months?"_ or _"Is this pattern showing up at other sites in the same utility territory?"_ The alert is the doorway; conversation is the investigation tool.

**What AI does in background:**

- Continuous baseline maintenance as new invoices are ingested
- Drift detection algorithm (moving average comparison, not static threshold) — this is the technical differentiator from NG Insight/EnergyCAP rule-based systems
- Cross-site pattern clustering (same error type appearing at multiple locations — portfolio intelligence)
- Dollar-impact scoring to prioritize alert queue

**What explanation is provided:**
Every alert card explains: what was expected, what arrived, the dollar gap, the historical pattern chart, and the most likely error type. James Norton's "I want to know about it right away" requirement means the explanation must be _fast to read_ — a card, not a report.

---

### COMPETITIVE DIFFERENTIATION

The core technical differentiation is **drift detection vs. threshold alerting**. This is not a marketing claim — it is the specific failure mode documented by Roger Goldstein (paid a neighbor's electricity for a year) and Ann Walston (two meter failures that established wrong baselines). Every existing tool in the corpus uses threshold rules. None is documented as using pattern-based drift detection.

**The H2NO positioning frame** (Roger Goldstein's reference): Conservation Labs solved water leak detection with real-time monitoring that fires automatically. Clear Current is that for utility billing — the monitor that catches what humans miss because they're watching too many meters.

---

### SEQUENCING RECOMMENDATION

**Module 2 is co-equal with Module 1 and should be built simultaneously.**

Technically, Modules 1 and 2 share the same data foundation (invoice ingestion + site mapping + historical baseline). They are different outputs from the same pipeline:

- Module 1: Did the utility charge correctly for what was consumed?
- Module 2: Is what was consumed consistent with expectations?

The two modules complement rather than duplicate. Building them as a combined **Billing Intelligence** layer is the most efficient sequencing. In GTM terms, Module 2 is the feature James Norton named when asked what he most wants — it is the primary hook for displacing EnergyCAP in higher ed.

**What must be true first:**

- Invoice ingestion (already shipped)
- Site/meter mapping (already shipped, actively improved)
- Baseline computation (new build — first sprint)

---

---

## MODULE 3: Regulatory Intelligence Monitor

### PROBLEM DEFINITION

Commercial energy buyers — especially institutions with multi-million dollar annual energy budgets — submit budget forecasts before utility rates are finalized. When rate cases are decided after budget submission, the variance between budgeted and actual energy costs lands as an unplanned line-item gap that facilities and finance teams have no mechanism to anticipate, explain, or mitigate. The problem is not that rate cases are surprising — PUC proceedings are public record. The problem is that monitoring them requires specialized knowledge of utility regulatory proceedings that no general-purpose tool provides, and that doing it manually is impractical across even a small portfolio of utilities.

This is the **only module in this document where secondary research confirms zero competitive solutions exist.** No vendor in the corpus — EnergyCAP, Arcadia, Energy Toolbase, ENGIE Impact, Schneider, or any other named competitor — is documented as offering PUC docket monitoring with quantified customer impact.

**Verbatim quote capturing the problem at its most acute:**

> _"Budget submitted in March. City of Austin rate changes are often not known until after budget submission."_
> — **Andi Ault, Sr. Associate Director of Finance, UT Austin** _(from interview summary — this is paraphrase synthesis; the mechanism described is directly attributable; verify exact wording in transcript for investor use)_

And the M&V engineering perspective on why this matters operationally:

> _"It's super powerful... if I could monitor when a rate case was filed, what the proposed changes are, and what that means in dollar terms for a specific customer — that would save somebody like me so much time."_
> — **Phil Combs, M&V / Digital Services, Trane Technologies** _(summary characterization — verify exact wording in transcript before quoting in investor materials)_

---

### EVIDENCE BASE

**Phil Combs (Trane Technologies)**

- Named regulatory intelligence explicitly and unprompted as the single most powerful feature concept he encountered in the conversation. His framing is time savings for the M&V professional who currently monitors utility news manually. But the dollar implication for finance users is larger — see Andi Ault below.
- Competitive assessment: Energy Toolbase handles rate and tariff analysis well, but does not do forward-looking regulatory monitoring. Phil names no competitor that does this.

**Andi Ault (UT Austin, Finance)**

- Provides the exact use case: budget submitted in March, City of Austin rates finalized later. UT Austin's annual natural gas spend alone: approximately $20M. A 3–5% rate increase on $20M+ energy budget = $600K–$1M+ unplanned variance. Andi cannot currently forecast this.
- Her explicit endorsement of the dual-audience architecture (Push financial summaries to her, let engineers query) maps to how regulatory alerts should be surfaced: she wants the dollar impact pushed to her dashboard, not a docket filing PDF.

**AES Ohio (secondary research, Synthesis Brief)**

- AES Ohio's 2024 rate case resulted in approximately a 9% commercial rate increase with minimal advance notice to customers. Ohio PUC mandates 275-day rate case timelines — the information is technically public from filing date, but no tool mines it automatically.
- **PPL Pennsylvania case filed October 2025, final decision July 1, 2026 — the exact date a university's new fiscal year begins.** Boston University locks its budget in March, months before final rates are set. This is not a hypothetical timing problem; it is a documented, current example.

**Ann Walston (Bon Secours Mercy Health)**

- Capacity charges in the PJM region increased "tenfold in the last two years" due to data center construction in Ohio. PJM capacity auction results are published well before they take effect. This is the healthcare analog of the higher-ed budget timing problem: a regulatory/market event with quantifiable dollar impact that can be predicted from published data — but no tool does it.
- Ann explicitly described this as her "most urgent and least controllable billing issue" for PJM-territory hospitals. _(Summary characterization — verify against transcript)_

**AdventHealth (John Culver)**

- 73 different electric utility providers across 9 states. Tracking rate changes across 73 providers, each with its own state PUC filing calendar, is impossible manually. John's explicit request: _"NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great."_ — **John Culver, Director of Energy Management, AdventHealth** _(from summary — verify exact wording in transcript)_
- This quote is both a Module 1 ask (interpret the bill) and a Module 3 ask (tell me why costs are changing before they arrive).

**Walt Taylor (Panda Restaurant Group)**

- Direct assertion by a 25-year industry veteran: _"Energy managers who track only current rates will continually be caught behind."_ — **Walt Taylor, Director of Energy Management, Panda Restaurant Group** _(summary attribution — verify against transcript)_
- Confirmed that PUC proceedings are the mechanism through which rates change, and that quantitative engagement with those proceedings is possible — he has personally gotten a rate changed through a state Public Service Commission.

---

### TARGET PERSONA

| Role                             | Title Examples                               | Interaction Pattern                                                              |
| -------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------- |
| **Primary user**                 | Energy Manager, M&V Engineer, Energy Analyst | Receives alerts on new filings; queries impact scenarios                         |
| **Secondary (financial output)** | Finance Director, Budget Director, CFO       | Receives: "Rate case filed; if approved, your FY27 energy budget is short by $X" |
| **Economic buyer**               | VP Finance, CFO, Chief Operating Officer     | Buys on: "prevents budget surprises; enables proactive hedging decisions"        |

**The critical insight from the research:** Phil Combs is the primary _user_ of regulatory intelligence. Andi Ault is the primary _beneficiary_ and economic buyer. The tool must serve both — which maps exactly to the three-tier architecture: Chat/React for Phil (query the docket), Push to Dashboard for Andi (dollar impact to budget, no PUC expertise required).

---

### BUSINESS VALUE

**The quantified case:**

- UT Austin: ~$20M annual gas spend + significant electricity budget. 3–5% unforecasted rate increase = $600K–$1M+ budget variance on a single campus
- AdventHealth: 73 utilities × multi-million-dollar energy budget per utility = portfolio-level rate change exposure that is currently invisible
- PPL Pennsylvania case (live example): filed October 2025, decision July 1, 2026 — the exact date that creates a fiscal year budget gap for every university served by PPL

**The ROI pitch for a CFO:**
_"A 275-day PUC proceeding is public record from filing date. Our system turns that public record into a dollar figure against your specific consumption profile, 9 months before the rate takes effect. You can adjust your budget, accelerate efficiency projects, or hedge natural gas — whichever your strategy dictates. No tool in the market does this today."_

**The ROI pitch for an M&V engineer:**
_"I currently spend hours per month monitoring utility news for rate filings. This system does it automatically and tells me what each filing means for my clients in dollars."_

---

### PRODUCT SPECIFICATION — MVP

**Data required:**

- Customer's utility account identifiers (which utilities serve which sites)
- Historical consumption data per site (already available through invoice ingestion)
- PUC docket data: state-by-state public records of rate case filings, proposed rate schedules, final orders (public, but requires scraping/monitoring infrastructure)
- Rate tariff database (Clear Current's tariff/contract engine provides foundational coverage)

**What the engineer builds in Sprint 1:**

1. PUC monitoring layer: automated scraping/API for target state PUC dockets (begin with Texas PUC, California CPUC, Ohio PUC, Pennsylvania PUC — highest customer concentration + most active rate cases per research)
2. Filing alert: when a new rate case is filed or a proposed rate schedule is published for a utility that serves a Clear Current customer, trigger an alert
3. Impact calculator: apply proposed rate change to customer's last 12 months of consumption → compute projected annual dollar impact
4. Alert card: "Rate case filed by [Utility] on [Date]. If approved as proposed, your [Site/Portfolio] annual bill increases by approximately $[X]. Decision expected [Date]. Here are three actions to consider."
5. Budget export: generate updated energy budget line-item forecast reflecting proposed rates, exportable to standard budget formats

**V2 additions:**

- Capacity charge tracking (PJM/MISO auction results → dollar impact per hospital)
- Carbon pricing / clean energy surcharge monitoring for northeastern states (Troy Nevels use case)
- Rate case outcome tracking: when a proposed rate is modified before final approval, recalculate impact

---

### AI INTERACTION MODEL

**Primary tier: Autonomous → Do for User**
The monitoring function runs continuously without user initiation. No energy manager has time to check PUC dockets weekly across multiple utilities. The system must watch, detect, calculate, and surface — unprompted.

**Secondary tier: Dashboard → Push to User**
When a filing is detected, push a structured alert to the relevant energy manager and finance user. The alert includes: filing summary, dollar impact estimate, decision timeline, suggested actions. Andi Ault's use case is exactly this: she needs the number pushed to her budget model, not a link to a PDF filing.

**Tertiary tier: Chat → React to User**
Phil Combs can then query Rate Analyst: _"What are the proposed changes in the AES Ohio rate case?"_ or _"If this rate case is approved, which of our sites are most exposed?"_ The monitoring layer creates the data; the chat layer enables expert interrogation.

**What AI does in background:**

- Document classification and extraction: identify rate schedule changes from PUC filing documents (NLP on regulatory text)
- Impact calculation: map proposed rate components to customer consumption profile
- Significance scoring: prioritize alerts by dollar impact magnitude

**What explanation is provided:**
Every alert includes: rate case docket number, filing date, proposed effective date, rate component changes, dollar impact to this customer, decision timeline, confidence level (proposed vs. approved). The confidence level is critical for the budget use case — Andi needs to know if she's working with a proposed or final number.

---

### COMPETITIVE DIFFERENTIATION

**This is confirmed white space.** The secondary research in the Synthesis Brief confirms: _"Zero competitors offer PUC docket monitoring — confirmed white space."_

- **EnergyCAP:** Historical bill processing and projections from historical trends. No PUC monitoring.
- **Arcadia:** 30,000+ tariff structures database (backward-looking rate matching). No forward-looking rate case monitoring.
- **Energy Toolbase:** Rate and tariff analysis tool. Phil Combs named it as closest competitor for tariff analysis and explicitly assessed that regulatory monitoring exceeds its capabilities.
- **ENGIE Impact:** Third-party bill processing. No regulatory monitoring.
- **Schneider Electric (Sera):** Bill processing at scale. No PUC docket monitoring documented.

**The moat logic:** Building this capability requires three things simultaneously — PUC data infrastructure (scraping/monitoring 50+ state regulatory bodies), NLP capable of parsing regulatory documents, and tariff/contract context to translate regulatory changes into dollar figures for a specific customer. Clear Current already has the third. No competitor has all three.

---

### SEQUENCING RECOMMENDATION

**Module 3 is a Phase 2 build — after Modules 1 and 2 are in production.**

The prerequisite dependencies:

- Invoice ingestion and site mapping must be operational (to know which utilities serve which customers)
- Historical consumption data must be loaded (to calculate rate change dollar impact)
- Tariff/contract engine must cover target utilities (to model proposed rate schedules)

**GTM sequencing:** This module is the _expansion_ play after the wedge (billing error + anomaly detection) is in. It is also the highest-margin conversation with finance buyers — Phil Combs' "super powerful" designation and Andi Ault's budget timing problem are both in higher education and healthcare, Clear Current's beachhead segments. This module makes the platform a budget tool, not just a billing tool — that is the narrative shift that justifies enterprise contract value.

**One risk to name:** PUC data infrastructure is not trivial. State regulatory bodies have heterogeneous data formats, update frequencies, and access mechanisms. Texas PUC is well-structured; other states less so. Scope the MVP to the 4–6 states with the highest customer concentration and build the infrastructure incrementally.

---

---

## MODULE 4: Tariff Optimization Engine

### PROBLEM DEFINITION

Most commercial energy buyers are on the wrong rate structure for their consumption profile — and they don't know it. The information asymmetry is structural: utilities offer dozens to hundreds of rate schedules, the customer is assigned one (often at connection), and there is no mechanism that periodically re-evaluates whether a different rate structure would reduce their bill for the same consumption. Demand charges alone represent 30–70% of a commercial customer's utility bill (DOE), and the interaction between demand charges, ratchet clauses, time-of-use rates, and power factor penalties creates a combinatorial optimization problem no human reviews manually.

**Verbatim quote capturing the problem at its most acute:**

> _"Alabama Power alone has approximately 45 rate structures... An AI tool that checks every rate at every utility for every location would be checking thousands of permutations at scale."_
> — **Walt Taylor, Director of Energy Management, Panda Restaurant Group** _(summary attribution — verify exact wording against transcript)_

And the buyer-side evidence of how invisible this problem is:

> _"Most customers don't even know what rate structure they're on."_
> — **Don Johnson, Sr. Account Manager, Trane Technologies** _(summary attribution — verify exact wording against transcript)_

---

### EVIDENCE BASE

**Walt Taylor (Panda Restaurant Group)**

- 25-year industry veteran. Documents the Georgia Power ratchet mechanism, California duck curve, and utility rate structure complexity in technical detail. His most important insight for this module: utilities "will always adjust their rate structures to remain profitable" — meaning rate optimization is not a one-time exercise but an ongoing necessity. His quantification: 1,000 kW summer peak at 80% ratchet = $144K/year locked in regardless of winter demand (per NREL secondary research cited in Synthesis Brief).

**Don Johnson (Trane Technologies)**

- Portfolio view across 100+ commercial energy buyers. Confirmed: customers don't know what rate they're on. This is not an edge case — it is the modal condition for commercial buyers without dedicated energy staff.
- Demand charges represent 30–70% of commercial utility bills (DOE data, cited in Synthesis Brief). Customers misunderstanding demand charges is the single largest documented source of persistent overpayment that doesn't require a billing error to fix — it requires a rate change.

**Phil Combs (Trane Technologies)**

- Named Energy Toolbase as the primary competitor for tariff analysis — an explicit acknowledgment that rate optimization has a market. His framing: the bar for any tool is "faster and more insightful than my well-structured Excel workbook." He does this analysis manually in Excel and gets paid to do it; a product that automates it would be compelling.
- His demand charge management expertise is documented: he uses interval data (15-minute reads) for demand analysis. This is the data input that makes rate optimization computable.

**Texas State (Andee Chamberlain, Carl Teague)**

- Structural illustration of the dual-audience tariff problem: ops team (Chamberlain) understands demand and usage but not the cost implications; finance team understands cost but not the demand mechanics. Neither can optimize the rate structure because they lack each other's half of the information.
- District energy complexity: Texas State buys power from City of San Marcos at utility cost plus overhead, then resells internally to departments. The tariff structure for district energy systems involves pass-through costs that must be tracked per source.

**Sean Sevy (Houston Methodist)**

- Describes broker (Prism Energy) catching tax misbillings and tariff errors — not systematic rate optimization, but evidence that tariff intelligence is already in his workflow through a human expert. The question is whether that workflow can be systematized.
- Power factor penalty is a tariff component: if Houston Methodist's power factor is actually 80–81%, they are paying a power factor penalty on every bill. Correcting the meter OR correcting the power factor would eliminate a recurring tariff surcharge. This is a rate optimization outcome, not just an error correction.

---

### TARGET PERSONA

| Role               | Title Examples                               | Interaction Pattern                                                                   |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| **Primary user**   | Energy Analyst, M&V Engineer, Energy Manager | Queries rate scenarios, reviews optimization recommendations                          |
| **Secondary**      | CFO, Finance Director                        | Receives: "You can save $X/year by switching from Rate Schedule A to Rate Schedule B" |
| **Economic buyer** | VP Facilities, CFO                           | Buys on: dollar savings from rate change alone, with no capital investment required   |

**Channel partner angle (Don Johnson, Trane):** This module is the tool that Trane's account managers use to identify energy improvement opportunities before pitching equipment. Rate Analyst as a channel sales tool — the "spot opportunities" use case — is a direct fit for Clear Current's strategic focus on "spot opportunities."

---

### BUSINESS VALUE

**The quantified case:**

- NREL: 1,000 kW summer peak at 80% ratchet = $144,000/year locked in regardless of winter demand. Ratchet clause optimization is a direct, calculable dollar figure that requires no capital investment to capture — only a rate change request.
- Walt Taylor: Alabama Power has 45 rate structures. If a commercial customer is on the wrong one, the annual savings from switching can exceed the cost of a year's SaaS subscription in a single billing cycle adjustment.
- Demand charges: 30–70% of a commercial bill. A 10% reduction in the demand charge component of a $500K/year energy spend is a $15K–$35K/year savings with no operational change.

**The ROI pitch:**
_"We analyze your consumption against every available rate structure at your utility. The average commercial customer we've analyzed has been paying for a rate structure that doesn't fit their load profile. The first recommendation we make is typically free to implement — it's a phone call to your utility rep."_

---

### PRODUCT SPECIFICATION — MVP

**Data required:**

- 12–24 months of interval consumption data (15-minute demand readings where available; monthly billing data at minimum)
- Current rate schedule and tariff for each account (tariff/contract engine)
- Alternative rate schedules available at the same utility for the same customer class (tariff database)

**What the engineer builds in Sprint 1:**

1. Rate simulation engine: apply alternative rate schedules to historical consumption data → compute projected annual bill under each alternative
2. Savings ranking: sort alternatives by dollar savings vs. current rate, flag top 3 with confidence level
3. Rate change feasibility: identify whether the customer qualifies for the alternative rate (demand thresholds, customer class requirements, minimum contract terms)
4. Output card: "Your current rate structure cost you $X last year. Rate Schedule B would have cost $Y — a savings of $Z. Here's what you need to do to switch."
5. Demand charge reduction scenarios: identify the one demand event (peak demand day) that set the annual ratchet, quantify the savings from shifting or curtailing that event

**V2 additions:**

- TOU (time-of-use) optimization: what operational changes would reduce peak-period consumption, and what is the dollar value of each change?
- Demand response enrollment analysis: does the customer qualify for a utility demand response program that would pay them to curtail during peak events?
- Multi-site rate benchmarking: are comparable facilities in the same utility territory on better rate structures?

---

### AI INTERACTION MODEL

**Primary tier: Dashboard → Push to User**
When the system identifies a rate structure alternative that would save >$X (configurable threshold), push a recommendation card: "Rate Optimization Opportunity — estimated annual savings: $X." This is a proactive insight the user would never find manually.

**Secondary tier: Chat → React to User**
Rate Analyst is the natural surface: _"What rate schedules does [Utility] offer for a 500 kW demand customer?"_ or _"If I shifted my peak demand from 4 PM to 6 PM, what would I save?"_ This is the Phil Combs use case — analytical exploration by an expert user.

**What AI does in background:**

- Rate scenario computation: apply tariff rules to consumption data for each alternative rate (deterministic calculation, AI-assisted for tariff parsing and rule extraction)
- Anomaly identification: flag when actual demand charges exceed what the optimal rate structure would produce — surfaces rate optimization opportunity within the billing error workflow
- Consumption pattern analysis: identify load profile characteristics (flat vs. peak-sensitive) that determine which rate structure is optimal

**What explanation is provided:**
Every recommendation includes: current rate vs. alternative rate (specific schedule names), dollar delta, the consumption data driving the calculation, qualification requirements for the alternative rate, and estimated implementation complexity. This is the explainability requirement Phil Combs described — it must be defensible enough to present to a utility rep.

---

### COMPETITIVE DIFFERENTIATION

| Competitor                       | What They Do                                                       | What They Miss                                                                                                                                       |
| -------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Energy Toolbase**              | Rate analysis and tariff comparison (Phil Combs' named competitor) | Not integrated with billing error detection; no natural language interface; primarily a utility/solar installer tool, not an energy manager platform |
| **EnergyCAP**                    | Historical bill storage; some rate scenario modeling               | No AI-driven rate optimization; separate OCR required; "glorified spreadsheet" UX per G2                                                             |
| **Arcadia**                      | 30,000+ tariff structures database                                 | Backward-looking rate matching, not forward-looking optimization; API/developer tool, not energy manager UX                                          |
| **Brokers (Prism Energy, etc.)** | Human-driven rate analysis and supplier negotiation                | Point-in-time, not continuous monitoring; not systematic across all available rate schedules                                                         |

**Clear Current's specific differentiator:** Rate optimization _integrated with_ billing error detection within a single platform. When the audit engine finds a demand charge error (Module 1) and the tariff engine shows a better rate structure exists (Module 4), the system presents both findings together: _"You were overbilled this month AND you're on the wrong rate structure. Here's the combined annual savings."_ No competitor in the corpus offers this integration.

**The "spot opportunities" strategic focus alignment:** This module is the direct expression of Clear Current's stated strategic priority to "increase focus on spot opportunities." Rate Analyst is the natural surface for this output. The channel partner use case (Trane, equipment vendors) is also activated here — this is how Don Johnson identifies which buildings are candidates for efficiency improvements before pitching hardware.

---

### SEQUENCING RECOMMENDATION

**Module 4 is a Phase 1.5 build** — concurrent with Modules 1 and 2, drawing on the same tariff/contract engine that already exists in CC Engine.

The tariff engine is already a shipped Clear Current capability. Module 4 is the optimization output layer on top of that engine — computing what-if scenarios across alternative rate structures and surfacing them as actionable recommendations. The data foundation requirement is lower than Modules 1 and 2 (doesn't require as much meter-level history; can work from monthly billing data initially).

**Why not build this first?**
The billing error audit (Module 1) and anomaly detection (Module 2) have a lower trust bar for initial customer conversations — "we found an error and here's the evidence" is more immediately credible than "we think you're on the wrong rate structure." Rate optimization requires the customer to trust the platform's tariff model before acting on it. The sequence of trust-building: catch a billing error first, then the tariff optimization recommendation earns credibility.

**Channel partner packaging:**
This module packaged as a "Rate Health Check" for Trane account managers — a pre-sale analysis tool — is the channel land-and-expand mechanism Marc Spieler described. Run a Rate Health Check before a site visit; identify the optimization opportunity; the customer pays to switch rates (free) and pays Clear Current for the analysis.

---

---

## MODULE 5: Campus Chargeback Intelligence

### PROBLEM DEFINITION

Universities, hospital systems, and large corporate campuses with centralized utility procurement face a specific, documented challenge that no AI-native tool currently addresses: allocating shared utility costs across dozens to hundreds of cost centers, departments, or tenants. The chargeback problem requires applying utility tariff logic (which includes demand charges, ratchets, TOU components, and shared service allocations) to sub-metered consumption data and producing outputs that satisfy both facilities operations (who care about demand and usage) and finance (who care about cost and budget). When this is done wrong, departments are over- or under-charged, budget variances are unexplained, and the energy manager spends their analytical time reconciling allocations rather than managing energy.

EnergyCAP is the current incumbent for this function, and its users have explicitly told us it fails at this task.

**Verbatim quote capturing the problem at its most acute:**

> _"I care more about demand and usage. The bill processing folks care more about the bottom line. That's why we have that tension."_
> — **Andee Chamberlain, Energy & Water Conservation Manager, Texas State University**

And the EnergyCAP user review evidence (secondary, G2/Capterra):

> _"Chargebacks and splits are hard to understand."_
> — **G2/Capterra EnergyCAP user review** _(cited in Synthesis Brief — secondary source)_

---

### EVIDENCE BASE

**Texas State University (Andee Chamberlain, Carl Teague)**

- The most detailed primary evidence on chargeback complexity in the corpus. Texas State has 1,500 meters across 98 buildings, operates a district energy system (chilled water, steam, electricity from multiple sources), and charges individual departments for their pro-rated consumption.
- The fundamental data tension: ops side needs demand and usage data (kWh, kW, kBtu) to manage the physical plant; finance side needs cost and budget variance (dollars, budget lines). EnergyCAP's chargeback module attempts to bridge this but users find it "hard to understand" and have described it as a "glorified spreadsheet."
- Texas State buys power from City of San Marcos at utility cost plus overhead, producing chilled water and steam, and resells internally. The tariff structure that drives internal cost allocation involves pass-through from the external utility plus internal production cost — a two-layer allocation problem that no simple rules-based system solves cleanly.

**Andi Ault (UT Austin, Finance)**

- The finance-side voice on cost allocation. UT Austin runs a PEER Platinum-certified district energy system with $20M annual gas spend and a 60 MW combined heat and power plant. Andi's perspective: her job is the aggregate dollar, but she needs to allocate that aggregate across the university's cost centers for budget accountability. She confirmed that rate changes not known until after budget submission create cascading allocation errors — if the input cost changes, every departmental allocation based on it is wrong.

**Secondary research (Synthesis Brief)**

- 660+ district energy systems in the U.S., concentrated in universities and hospitals. EnergyCAP's chargeback module is specifically identified as its stickiest feature — and its worst-reviewed UX. "Chargebacks and splits are hard to understand" appears as a documented user complaint.
- No AI-native competitor has built campus chargeback functionality. Arcadia's enterprise customer list is entirely Fortune 500 corporate — no university or hospital system case study, no district energy reference, no chargeback logic documented.

**The competitive finding:**
EnergyCAP has chargeback but a broken UX. Arcadia has no chargeback at all. The combination — working chargeback + natural language interface — is an unclaimed position that maps directly to Clear Current's existing product architecture.

---

### TARGET PERSONA

| Role                                 | Title Examples                                                 | Interaction Pattern                                                                               |
| ------------------------------------ | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Primary user (setup/config)**      | Energy & Water Conservation Manager, Campus Energy Manager     | Configures allocation rules; reviews monthly chargeback calculations; investigates disputes       |
| **Secondary (receives allocations)** | Finance Director, Budget Director, Departmental Budget Manager | Receives: monthly cost allocation statement by department/building                                |
| **Economic buyer**                   | VP Finance, CFO, Provost/CBO                                   | Buys on: accuracy of departmental cost allocation; audit-readiness; time saved vs. manual process |

**The key persona distinction:** The economic buyer for this module is the CFO or Budget Director, not the energy manager. Cost allocation accuracy is a financial controls issue, not just a facilities issue. This is how Clear Current gets into the CFO's budget conversation — the same person Andi Ault represents.

---

### BUSINESS VALUE

**The quantified case:**

- Texas State: 1,500 meters, 98 buildings, district energy. Monthly chargeback calculation across this portfolio is a full-time workflow. If the bill processor has just left (which Chamberlain confirmed), the time cost of rebuilding that workflow manually is significant.
- UT Austin: $20M annual gas spend allocated across the university's departments. A 1% allocation error is $200K misallocated — either over-charging departments (budget disputes) or under-charging (budget shortfall at the central energy fund).
- 660+ district energy systems in the U.S.: this is not a niche market. It is a documented segment with a concentrated, identifiable buyer population.

**The ROI pitch for a CFO:**
_"Your energy manager produces monthly chargeback reports manually. We automate the calculation, audit-proof the allocation logic, and give department heads a self-service view of their energy cost. The first time a department challenges an allocation, your energy manager produces the supporting documentation in 30 seconds instead of two days."_

**The ROI pitch for an energy manager:**
_"I currently spend X hours per month on allocation calculations that are a spreadsheet exercise. That time goes away. My actual job is optimizing energy — I can do that instead."_

---

### PRODUCT SPECIFICATION — MVP

**Data required:**

- Sub-meter consumption data per building/department (or allocation keys where sub-metering doesn't exist)
- Utility invoice data (already ingested via Module 1)
- Allocation rules configuration: what proportion of each cost component (energy, demand, distribution, taxes) applies to each cost center
- District energy production cost data (where applicable: steam, chilled water production costs + distribution)

**What the engineer builds in Sprint 1:**

1. Allocation rule engine: configurable allocation logic — consumption-based, square footage-based, or hybrid; handles demand charge allocation (this is the hard part — demand charges cannot be simply prorated by usage share without distorting incentives)
2. District energy cost passthrough: calculates internal transfer price for steam/chilled water/electricity produced on-site from utility inputs + production costs
3. Monthly chargeback calculation: applies allocation rules to current month's metered data → produces per-cost-center statement
4. Variance flagging: compares current month's allocation to prior months and budget; flags cost centers with material variance
5. Output: PDF/exportable chargeback statement per department; portfolio rollup for finance

**V2 additions:**

- Self-service departmental portal: departments see their own energy cost history and can query their allocation methodology
- Dispute workflow: department challenges an allocation; energy manager receives dispute, reviews underlying data, responds
- Benchmark comparison: this building's energy cost per square foot vs. comparable buildings on campus

---

### AI INTERACTION MODEL

**Primary tier: Dashboard → Push to User**
Monthly: the system runs the chargeback calculation automatically when invoices are ingested and all sub-meter readings are received. Finance Director receives: "Monthly energy cost allocation complete. [X] departments have variances above threshold. Export available."

**Secondary tier: Chat → React to User**
Energy manager can ask Energy HQ: _"Why did the Chemistry building's allocation increase 15% this month?"_ or _"What would our chargeback look like if we added 200 kW of demand from the new data center?"_

Finance Director can ask Rate Analyst: _"What's the total energy cost allocated to the medical school this year vs. budget?"_

**What AI does in background:**

- Allocation calculation (deterministic, rules-based — AI assists in configuration and anomaly detection, not in the calculation itself)
- Variance detection: flags cost centers with unusual month-over-month changes (draws on Module 2 anomaly detection logic)
- Explanation generation: when a variance is flagged, generates natural language explanation of the cause (weather, equipment change, meter error, rate change)

**What explanation is provided:**
Every allocation statement includes: total cost by component (energy, demand, distribution, taxes), prior month comparison, budget comparison, and explanation of any material variance. The explainability requirement is high here — allocation disputes are political ("you charged my department too much"), and the system's credibility depends on producing a clean audit trail.

---

### COMPETITIVE DIFFERENTIATION

**This is the highest-moat module in the set for higher education and healthcare.**

| Competitor       | What They Do                | What They Miss                                                                                                                                             |
| ---------------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **EnergyCAP**    | Has chargeback module       | Reviews explicitly say it's "hard to understand"; no natural language interface; poor district energy handling documented in Andee Chamberlain's interview |
| **Arcadia**      | No chargeback capability    | Enterprise customer list is entirely corporate Fortune 500; has never built this for district energy                                                       |
| **ENGIE Impact** | Third-party bill processing | Processes the utility bill; does not allocate costs internally across departments                                                                          |
| **Excel**        | Most campuses use it        | Manual, error-prone, not auditable, requires the bill processor who just left                                                                              |

**Clear Current's specific differentiator:** Chargeback + natural language explanation of allocations + integration with billing error detection. When Module 1 finds a billing error, the chargeback calculation automatically adjusts. When Module 3 identifies a rate change, the chargeback model updates the forward projection. These are not features any competitor offers as an integrated workflow.

**The higher-ed moat:** 660+ district energy systems, concentrated in a segment where EnergyCAP is the current incumbent with documented UX failures. This is not a greenfield market — it is a displacement market where the incumbent has confirmed weaknesses and no AI-native competitor has entered.

---

### SEQUENCING RECOMMENDATION

**Module 5 is a Phase 2 build — after Modules 1 and 4 are in production.**

The dependencies:

- Invoice ingestion and site mapping operational (Modules 1/2 prerequisite)
- Tariff engine covering district energy rate structures (tariff/contract engine + Module 4 extension)
- Sub-meter data ingestion (may require additional data integration work for campus metering systems)

**Why not earlier?**
This module requires configuration work per customer (allocation rules are institution-specific) that is not appropriate for early pilots where Clear Current is still proving core billing intelligence. It is also the module that requires the most customer-specific data setup and the deepest integration with existing campus systems.

**Why it matters strategically:**
This is the module that makes Clear Current **sticky in higher education and healthcare in a way no competitor can easily replicate.** Once a university's chargeback logic is configured in Clear Current and departments are receiving monthly statements, switching costs are very high — much higher than for a generic billing audit tool. EnergyCAP's chargeback module is the reason Texas State hasn't left EnergyCAP despite frustration with the UX. Clear Current building a better chargeback module is how it displaces EnergyCAP permanently, not just supplements it.

**The competitive displacement sequence:**

1. Land with billing error audit (Module 1) — prove value without requiring deep configuration
2. Expand to tariff optimization (Module 4) — demonstrate rate intelligence
3. Replace EnergyCAP with chargeback (Module 5) — become the system of record for campus energy cost allocation
4. Layer regulatory intelligence (Module 3) — make the platform indispensable for budget planning

---

---

## RECOMMENDED MODULE PRIORITY ORDER

### Priority Sequence with Full Rationale

**PHASE 1 — WEDGE (Build now, ship to pilots within 90 days)**

**Rank 1: Module 2 — Anomaly Detection & Alerting**
_Why first:_ This is what James Norton said he most wants. It is what Roger Goldstein's H2NO mental model already validates. It builds on already-shipped invoice ingestion and site mapping capabilities. It requires the least new data infrastructure. It is the first thing Andi Ault — a finance-side buyer — named when asked how she would use the platform. And it is the module that generates the "push" behavior that converts a passive, reactive buyer into an engaged platform user. Without anomaly detection pushing findings to users, Clear Current depends on users logging in and looking — a behavior the research confirms they will not reliably do.

**Rank 2: Module 1 — Billing Error Audit Engine**
_Why second (but built concurrently with Module 2):_ Module 1 and Module 2 share the same data foundation and should be developed as a combined Billing Intelligence layer. The distinction is output type: Module 2 flags "something is wrong with your consumption pattern"; Module 1 flags "the utility charged you incorrectly for what you consumed." Both are needed. Module 2 ranks first because it is the hook in every customer conversation (James Norton's named ask, Andi Ault's first-priority function) and because it generates the engagement pattern that makes Module 1's deeper analysis valuable. The sequencing within Phase 1: build the baseline computation and alert pipeline (Module 2), then add tariff-based error comparison (Module 1) once the baseline layer is stable.

**Critical proof requirement for Phase 1:** The identified-vs-realized gap Marc Spieler named is the most important commercial vulnerability. Phase 1 must generate at least one complete recovery cycle case study — error identified, utility contacted, credit received, dollars confirmed — before Clear Current uses billing error recovery figures in investor materials. This is not a product gap; it is a proof gap. The product already finds errors. The investor-grade evidence of recovery needs to be documented.

---

**PHASE 1.5 — EXPAND (Build during Phase 1, ship after first recovery case studies)**

**Rank 3: Module 4 — Tariff Optimization Engine**
_Why third:_ The tariff/contract engine already exists in CC Engine. Module 4 is the optimization output layer — computing what-if scenarios across alternative rate structures using the same tariff data Clear Current already maintains. The incremental build is modest. The commercial value is high: this is the "spot opportunities" strategic priority, and it activates the channel partner use case (Trane, Don Johnson's network) as a pre-sale analysis tool. It also builds the trust platform needed before customers will act on Module 5's more complex recommendations. Sequence: don't pitch rate optimization before the billing error detection has proven the platform's tariff accuracy.

---

**PHASE 2 — DEEPEN & RETAIN (Build after Phase 1.5 proves platform, ship in parallel)**

**Rank 4: Module 3 — Regulatory Intelligence Monitor**
_Why fourth:_ This is the highest-value whitespace module, but it has the highest build complexity (PUC data infrastructure) and the longest trust runway (customers must believe the platform's tariff model before acting on rate case projections). The GTM case is strongest in higher education (Andi Ault's budget timing gap) and healthcare (Ann Walston's PJM capacity charge problem). It should be scoped to 4–6 states initially (Texas, California, Ohio, Pennsylvania — confirmed rate case activity + customer concentration). This module transitions Clear Current from a billing tool to a budget planning tool — the conversation shift that justifies enterprise contract values and supports the Series A narrative.

**Rank 5: Module 5 — Campus Chargeback Intelligence**
_Why fifth:_ This is the highest-moat, highest-stickiness module — and the most complex to build and configure. The displacement case against EnergyCAP is clear, the market size (660+ district energy systems) is documented, and no AI-native competitor has entered. But this module requires institution-specific configuration work, sub-meter data integration, and customer trust built on the foundation of Modules 1–4. It is the module that converts a pilot customer into a multi-year enterprise anchor. Build it when Phase 1 pilots are ready to become long-term accounts.

---

### Priority Summary Table

| Rank | Module                          | Phase                  | Primary Buyer Signal                                                      | CC Engine Tie                                           | Build Complexity |
| ---- | ------------------------------- | ---------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------- | ---------------- |
| 1    | Anomaly Detection & Alerting    | 1 — Wedge              | James Norton (TX State), Andi Ault (UT Austin)                            | Dashboard Push + existing ingestion                     | Low-Medium       |
| 2    | Billing Error Audit Engine      | 1 — Wedge (concurrent) | Andee Chamberlain (TX State), Ann Walston (BSMH), Roger Goldstein (Panda) | Rate Analyst + spot errors (already shipped)            | Medium           |
| 3    | Tariff Optimization Engine      | 1.5 — Expand           | Phil Combs (Trane), Don Johnson (Trane), Walt Taylor (Panda)              | Rate Analyst + tariff/contract engine (already shipped) | Medium           |
| 4    | Regulatory Intelligence Monitor | 2 — Deepen             | Phil Combs (Trane), Andi Ault (UT Austin), Ann Walston (BSMH)             | Rate Analyst + new PUC data layer                       | High             |
| 5    | Campus Chargeback Intelligence  | 2 — Retain             | Andee Chamberlain (TX State), Andi Ault (UT Austin)                       | Energy HQ + Rate Analyst + new allocation engine        | High             |

---

## Implications for Clear Current (tagged)

- **[FITS CURRENT PRODUCT]** Modules 1 and 2 (Billing Error Audit + Anomaly Detection) extend capabilities CC Engine already ships — invoice ingestion, spot errors, site/meter association — into a structured output layer with pushed alerts and dispute-ready documentation. No new AI architecture required; priority is output packaging and the drift-detection algorithm.

- **[FITS CURRENT PRODUCT]** Module 4 (Tariff Optimization Engine) is the "spot opportunities" strategic priority expressed as a product module. The tariff/contract engine already exists; the sprint-1 build is a rate simulation output layer on top of existing data. Rate Analyst is the natural surface. Activates channel partner use case (Trane) documented by Don Johnson.

- **[FITS CURRENT PRODUCT]** The three-tier model (Chat/React, Dashboard/Push, Autonomous/Do) is validated by research persona by persona. Finance buyers (Andi Ault, Ann Walston) want Push as primary. Engineering/analyst buyers (Phil Combs, Troy Nevels) want Chat/React as primary. The dual-audience finding from Andee Chamberlain and Andi Ault maps exactly to Dan's architecture — this is the right call and the research confirms it.

- **[FITS CURRENT PRODUCT]** The "spot errors, assist resolution" positioning is correct and honest for Modules 1 and 2. The CC Engine's maturity description (detection, explanation, assistance — not unattended dispute filing) matches what buyer evidence shows customers can absorb. Ann Walston's $1M+ recovery required board-level relationships; no product autonomously replicates that. Position the output as dispute-ready documentation, not dispute resolution.

- **[EXTENDS ROADMAP]** Module 3 (Regulatory Intelligence Monitor) requires a new PUC data infrastructure layer (scraping, classification, docket monitoring) that does not exist in current CC Engine. The tariff/contract engine provides the consumption → dollar-impact calculation; the PUC monitoring layer is net-new data infrastructure. Scope MVP to 4–6 states. This module unlocks the transition from billing tool to budget planning tool — the Series A narrative shift.

- **[EXTENDS ROADMAP]** Module 5 (Campus Chargeback Intelligence) requires a district energy cost allocation engine that is architecturally new — configurable allocation rules, internal transfer pricing, sub-meter data ingestion beyond invoice-level data. The displacement case against EnergyCAP is the strongest long-term moat argument in the research, but the build complexity justifies Phase 2 sequencing.

- **[EXTENDS ROADMAP]** Drift detection (the core technical differentiator of Module 2 vs. all threshold-based competitors) is a new algorithm build on top of the existing ingestion and baseline infrastructure. The research documents the market failure it solves (Roger Goldstein's shared meter, Ann Walston's meter failures) with specificity. Position explicitly against "threshold rules" in competitive conversations.

- **[NET NEW / RESEARCH-ONLY]** Deposit recovery tracking (Roger Goldstein's unprompted suggestion — utilities holding 10-year-old deposits customers never reclaim) is a zero-cost billing recovery opportunity not mentioned in CC Engine's current capability stack. The build is modest (systematic deposit line-

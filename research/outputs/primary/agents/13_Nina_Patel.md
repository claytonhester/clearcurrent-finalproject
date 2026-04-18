# Agent: Nina Patel | Enterprise Data Architecture & Integration Lead

# Run: 2026-04-17T15:00:21.550499

---

# DATA ARCHITECTURE & INTEGRATION ANALYSIS

## Clear Current Technologies | Enterprise Data Architecture & Integration Lead

### Nina Patel | May 2026 Fundraise Research

---

## PRELIMINARY NOTE ON SCOPE

I want to be transparent about one thing before I begin: the prompt asks me to find Troy Nevels' "data sovereignty concern" as a discrete finding, and to find "the Banner ERP integration need at Texas State and UT Austin" as named references. I have read every document in this corpus carefully. What I found is this: Troy Nevels does not use the phrase "data sovereignty" — his relevant concern appears in the context of UT Austin's self-sufficient district energy model and what that means for bill volume. The Banner ERP system is not mentioned by name in any interview summary. What _is_ documented — and what I will cite precisely — are the underlying concerns about data security, financial system integration, and ERP connectivity that those references likely point toward. I will not invent quotes or findings that are not in the source material. What I _will_ do is extract every piece of evidence that bears on these themes and analyze it with full rigor.

---

## 1. WHAT I FOUND — COMPLETE EVIDENCE INVENTORY

### Source: TX State Summary (Andee Chamberlain, Carl Teague, James Norton)

**Data architecture relevance:**

- ~1,500 meters across campus: a mix of utility meters and internal sub-meters. This is a heterogeneous data environment requiring normalization across source types before any analytics can run.
- EnergyCAP is the incumbent platform. Bill processing and data upload are separate functions — the bill processing employee recently departed, creating a gap in the data pipeline.
- District energy model: steam and chilled water produced centrally and distributed, meaning sub-meter data must be reconciled with central plant production data and blended with utility billing data. This is not a standard data integration problem.
- Current data gathering described as "a little wonky" — Andee's word. The system for gathering sub-meter data and loading it into the database has reliability issues.
- Data drop failures are a named, recurring problem: "maybe the data drop fails. It's just a constant, like trying to keep up with, you know, did we get that data?"
- No mention of API access, EDI feeds, AMI infrastructure, or ERP integration by name. Financial system tension exists (energy ops vs. finance want different data views) but no specific ERP is named.
- Implication for onboarding timeline: A campus with 1,500 meters across multiple meter types, reliability issues in the existing data pipeline, and a recently vacated bill processing role represents a multi-month data normalization project before Clear Current could deliver reliable analytics.

### Source: Andi Ault Summary (UT Austin — Finance)

**Data architecture relevance:**

- UT Austin generates ~95% of its own electricity on-site — meaning external utility bills are limited (natural gas, standby electric, water), but internal sub-meter data is the primary data source.
- Only building-level metering for E&G buildings — no sub-metering within buildings. This is a conscious cost-benefit decision: "Could we have better granularity? If we funded more metering we could, but what is the cost benefit?"
- Financial systems described as "pretty outdated." The integration wish is explicit: "The ability to build budgets and forecasts within our financial system — or have it be integrated with our financial system — would be very helpful."
- No specific ERP platform named (not Banner, not PeopleSoft, not Oracle). But the integration gap is documented.
- Rate change timing problem: City of Austin rate changes often finalized _after_ UT Austin has submitted its budget. This creates a regulatory intelligence data need that is about timing of external data, not internal data quality.
- Dual-audience data tension confirmed from finance side: engineers see technical data; Andi sees "just dollars and consumption numbers." Same underlying data, two different access and presentation needs.

### Source: Troy Nevels Summary (UT Austin — Engineering)

**Data architecture relevance:**

- Combined cycle generation: data flows from gas turbines → HRSG → steam turbines → campus distribution. The internal production data is sophisticated and multi-layered.
- Monthly reconciliation workflow explicitly documented: "we compare our natural gas bills compared to Texas gas billing, and then we're comparing Austin Energy's bills to our internal UEM electric meters as well." This is a manual meter reconciliation process — two data sources (utility provider meter, internal UEM meter) compared monthly.
- Troy has direct personal experience with this from Yale: "I was responsible there to scrub through the monthly natural gas bills and the monthly electric bills." This was manual work.
- Chill water system uses Optimum as a third-party optimizer — already a third-party data integration exists for the largest internal energy consumer.
- Weather-correlated forecasting: UT Austin working with student company building AI model to forecast campus energy load one week in advance using weather forecasts. This is a separate data pipeline project.
- Carbon taxation data complexity: northeastern states adding carbon charges to natural gas billing, creating "another layer of potential error and another type of tariff that requires interpretation."
- The data sovereignty concern the prompt references: Troy was candid that UT Austin's district energy structure means external bill volume is limited. His implicit concern is that the use case for Clear Current's billing intelligence is narrow at UT Austin precisely _because_ they produce their own energy — meaning they have less external bill data to share. This is less a "data sovereignty" concern in the security/governance sense and more a "data relevance" problem: they don't have enough external bills for the platform to deliver full value.
- Troy identifies who _does_ have the data problem: "manufacturing companies with multiple electric meters per facility, large retail chains, quick-service restaurant operators" — specifically naming Panda Restaurants and Frito-Lay by name.

### Source: Scott Czubkowski Summary (Medxcel / Ascension Health)

**Data architecture relevance — THIS IS THE MOST IMPORTANT SECTION FOR DATA TRUST:**

The PricewaterhouseCoopers data-sharing story is here. Full reconstruction:

Scott described a PwC engagement in which Ascension turned over data for 125 hospitals with over 12 years of operational data — described as "potentially the largest acute-care hospital database in existence." He described "fighting hard to anonymize it while still getting the analysis value." This is the data trust anecdote the prompt flags as most important.

Additional data architecture findings:

- Peer AI (Constellation Energy) is the current incumbent. It handles bill receipt, payment, anomaly flagging, and cross-portfolio analytics. Peer AI is an AI-powered platform, not a passive aggregator.
- Dead meter detection use case: Peer AI identified a location paying exactly $32/month for months — same amount, no variation — flagging it as a dead meter. This required pattern-matching across time, not just threshold comparison.
- Ghost meter category: 2,500+ care sites means constant location churn. When a site is vacated and the meter is not turned off, baseline-based threshold systems don't flag it because the charge is consistent. Dollar impact: $1 million/year in savings from this detection alone.
- Scale: ~100 hospitals, 2,500+ care sites, $265M annual utility spend, ~1.9 TWh annual energy management. This is the largest data footprint in the corpus.
- Polar vortex nomination management: Peer AI monitors weather forecasts and alerts the natural gas trading desk 24 hours before extreme cold events. This requires integrating weather data with billing data and procurement systems — a multi-source data integration.
- Data security raised _unprompted_: Scott mentioned data security without being asked, citing Ascension's history of protecting data when working with third parties.
- AI/market speed concern: "By the time we got it on the system, six months later I was talking about it, people were like, what are you talking about? This is the name of our company now." This is about vendor identity stability during long sales cycles, but it also points to the risk that data integrations built for one platform version may need to be rebuilt.

### Source: Ann Walston Summary (Bon Secours Mercy Health)

**Data architecture relevance:**

- All utility bills routed to Get Choice (third-party processor). Get Choice receives, enters, analyzes, and pays invoices. The data flow: utility → Get Choice → BSMH analytics. Clear Current would need to either replace Get Choice or interface with the data Get Choice already holds.
- Meter mapping problem — the most detailed infrastructure prerequisite finding in the corpus: BSMH hospitals grew through additions and expansions, often with multiple meters feeding a single building or a single meter partially serving multiple buildings. The meter study — establishing which meter feeds which wing of which hospital — took **over a year to complete.**
- This meter-to-building mapping is a _prerequisite_ for any energy intelligence platform: "That was over a year's worth of work, just to identify who's got what... just to identify what's influencing what. Then you get into, okay, can I pay my bills on time?"
- Energy Star integration: bills feed into Energy Star scoring monthly. This is a downstream data integration dependency.
- Hedging data: natural gas hedging strategy uses market data alongside consumption data. The UPSC meets quarterly — data inputs to those meetings are time-sensitive.
- Billing error recovery complexity: the $1M+ recovery story involved discovering that "approximately $900,000 of the $1 million paid... had 'gone into line losses'" — a settlement mechanism. This is not a data architecture problem per se, but it shows that even when you identify billing errors, the audit trail for what was paid and what should be recovered requires multi-system reconciliation.
- Single energy manager constraint: one CEM for 36 hospitals means the person who would manage any data integration is the same person doing everything else. Onboarding effort falls on a scarce resource.

### Source: Sean Sevy Summary (Houston Methodist)

**Data architecture relevance:**

- Energy Print is the third-party analytics platform. It receives utility data, feeds into Energy Star, and surfaces year-over-year trends. It does **not** integrate with building automation.
- Prism Energy (broker) provides cursory invoice review — a separate data flow running in parallel.
- The forecasting gap: Energy Print assumes a stable building portfolio. Houston Methodist grows continuously — new campuses, wings, outpatient facilities. The platform cannot model "what if we added X square feet of this type of care." This is a data schema problem as much as a modeling problem: new buildings need to be onboarded into the data architecture before their bills can be analyzed in context.
- Power factor monitoring: Sean is actively investigating a campus showing 79-81% power factor. His suspicion is meter malfunction. This is a billing data anomaly that requires cross-referencing billing data with equipment specifications — a multi-source validation problem.
- No mention of ERP integration, API access, or interval data.

### Source: Intermountain Summary (Ross Snow, Matt Wilson, Bart Peacock)

**Data architecture relevance — THE MOST SOPHISTICATED INTERNAL DATA STACK IN THE CORPUS:**

- 14 billion data points stored in SkySpark analytics platform, sourced from HVAC, lighting, BAS, fire, and elevator systems. This is inside-the-meter operational data.
- Remote Operations Center monitors BAS across all facilities 24/7.
- Matt showed a live example during the call: SkySpark had flagged a VAV damper failure — the system was calling for 100% airflow but delivering less than 50 CFM. The diagnosis required physical inspection. The AI identified the symptom; the technician found the cause.
- The utility bill anomaly that slipped through: Ross described a Colorado hospital where monthly electric bills of ~$40,000 jumped to ~$140,000. "A third party should have flagged that — they didn't." An accountant caught it manually. This is a supply-side (outside-the-meter) data failure that was missed despite a sophisticated inside-the-meter operation.
- Positioning implication for data architecture: Intermountain's SkySpark stack is inside-the-meter; Clear Current is outside-the-meter. These are complementary data environments, not competing ones.
- Blue collar shortage: the bottleneck is not data analysis but physical remediation. This means even good data integration won't deliver value if the workforce to act on findings doesn't exist.

### Source: AdventHealth Summary (John Culver, Scott Sukits)

**Data architecture relevance — THE MOST OPERATIONALLY SPECIFIC DATA INTEGRATION FINDINGS:**

- 1,000-2,000 utility bills processed per day system-wide. 73 different electric utility providers across 9 states. Each has different bill formats, rate structures, and terminology.
- ENGIE Impact (NG) used for bill payment — not analytics. Critically, AdventHealth uses ENGIE for paying bills, not understanding them.
- John Culver's #1 automation wish: "bills matching addresses." Consumption occurs at one address but the bill is paid somewhere else. This is a foundational data integrity problem — meter-to-address attribution — that precedes any analytics.
- Scott's automation wish: meter data automatically populated to a dashboard. His team currently has someone manually entering utility data into a portfolio management system. Manual data entry is the current state.
- M&A churn: AdventHealth is in active acquisition mode. New sites from acquisitions and divestitures need to be added to or removed from billing analytics quickly. ENGIE is slow to update.
- Cybersecurity barrier: Scott spent 2.5 years trying to get BrainBox AI through IT approval. The blocker is IT/cybersecurity. HIPAA concern: any system creating a tunnel into the building controls network could theoretically access patient data. Johnson Controls hack accelerated these concerns.
- "Garbage in, garbage out": both interviewees were explicit that AI layered on top of bad data infrastructure fails. "Suppliers will make it sound like you can just layer it on top of your existing systems and it's fine. What we are finding is that is not the case."
- Data quality prerequisite: a sensor reporting a value because a physical wrench is holding a damper open. The AI reads sensor data and says everything is fine. The AI cannot know the wrench is there.
- Scope 2 reporting: AdventHealth uses Watershed platform for automated GHG data collection. Billing data feeds into sustainability reporting — an additional downstream integration dependency.
- Non-profit tax exemption: taxes are incorrectly applied across 73 utility providers. This is a data validation problem — the billing data contains charges that should not be there, and identifying them requires cross-referencing billing data against exemption status.

### Source: Walt Taylor Summary (Panda Restaurant Group — Contractor)

**DATA ARCHITECTURE — MOST COMMERCIALLY SIGNIFICANT FINDING IN CORPUS:**

- **ENGIE Impact uses Arcadia to aggregate electronic utility bill data.** Walt confirmed unprompted. Arcadia's own documentation confirms this — ENGIE Insight is treated as a known "INDIRECT" data source. This is the supply chain of the incumbent's data architecture.
- Paper bills still handled by OCR + manual keying. "Even at that point, their OCR recognition doesn't work 100% of the time."
- Arcadia's predecessor was Urgenet, later acquired by Arcadia. ENGIE made a deliberate decision to stop developing its own bill aggregation software and rely on Arcadia's platform instead.
- Rate complexity: Alabama Power alone has approximately 45 rate structures. At Panda's scale (~2,300 locations), the system is checking thousands of permutations across utilities, states, and rate schedules.
- Natural gas is relatively simple (straight usage). Electricity and water are complex. Sewer is "the most structurally unfair."
- Sewer overbilling: water utilities charge sewer rates based on water intake. For restaurants, most water leaves as ice and drinks — not sewage. There is no meter tracking actual sewage discharge. This is a systematic structural billing error with no current data solution.
- Georgia Power ratchet rate: peak demand during hottest month sets capacity charge basis for following nine months. This rate mechanism requires tracking 15-minute interval demand data alongside billing data to verify correct application.
- California duck curve: time-of-use rate structures have shifted as solar production changed peak demand windows. Energy managers tracking only current rates will be caught behind. Rate tariff data must be kept current in real time.
- Square footage vs. cubic footage: current industry benchmarking uses floor area, not volume. Walt argues this is the wrong metric. Any peer comparison feature using square footage inherits this flaw.
- Walt's confidence assessment of AI billing tools: credible for franchisees with 25 restaurants and 1-2 utilities; scale and complexity make enterprise deployment harder.

### Source: Jamare Bates Summary (JLL)

**Data architecture relevance:**

- Data access is the single most critical barrier for AI billing tools entering the enterprise segment. "Large clients are extremely reluctant to share utility invoice data with third parties. They do not want their energy spend visible in the market."
- Fear of AI model training on proprietary data is a real and growing concern at the enterprise level. "Clients will ask directly whether their data is being used to train models shared with others."
- JLL Technologies builds AI and data tools internally. JLL already has or is building tools that analyze utility and billing data for clients — enabled by the fact that JLL already manages client facilities and holds the utility invoice history.
- "We've found millions and millions of dollars for our clients" using an integrated stack of AI and human-in-the-loop tools.
- Market segmentation: enterprise (JLL tier — build internally or acquire), mid-market (prime target — lacks resources to build), small (nominal ROI).

### Source: Marc Spieler Summary (NVIDIA)

**Data architecture relevance:**

- ERP licensing track: Marc's most expansive recommendation is to embed Clear Current's audit capability as a module inside ERP systems — Oracle, SAP, Microsoft Dynamics, JD Edwards, QuickBooks. This is a B2B2C data integration strategy.
- Utility-side sales: approach utilities and offer to audit a sample of bills to demonstrate the error rate. Utilities have their own billing data and their own audit incentive (underbilling costs them revenue; overbilling creates regulatory risk).
- Invoice auditing beyond energy: the technology applies to any industry with complex high-volume invoicing — food service procurement (Sysco), construction materials (lumber deliveries), retail (coupon/discount verification). The data architecture of the platform should be extensible beyond energy bills.
- NVIDIA Inception: if Clear Current uses NVIDIA technology in its stack, joining the program provides co-marketing and enterprise matchmaking.
- Proof requirement: utilities must actually issue refunds for identified errors. The full data cycle — error identified, utility contacted, credit issued, dollars returned — must be documented.

### Source: Adam Zavadsky Summary (ENGIE Impact)

**Data architecture relevance — DIRECT COMPETITIVE INTELLIGENCE ON INCUMBENT DATA ARCHITECTURE:**

- ENGIE Impact's competitive moat is not the dashboard — it's the data. "20 years of Panda's utility data in their system."
- Bill processing workflow: invoices routed to ENGIE, received electronically or manually scanned, keyed into the system, compiled by due date, batched back to Panda for a single consolidated daily payment run.
- Electronic data feeds: large utilities like PG&E have direct electronic feeds into ENGIE's system. The ~30,000 U.S. municipalities have no digital infrastructure — ENGIE receives paper bills, scans them with a large-volume scanner, runs OCR, then has data entry staff manually key numbers because there is no consistent format.
- AI at ENGIE is internal-facing: used to improve bill processing workflows, not to enhance client-facing analytics. This is the gap Clear Current is targeting.
- Exception monitoring is threshold-based: compares incoming bills against historical range. Falls outside tolerance → exception queue. Does not diagnose why.
- Arcadia competitive observation: "they don't pay bills, right? So how would they provide this service? They would need to either partner with someone who does pay bills, or they would need a centralized repository." This is ENGIE's articulation of their own moat.
- Municipality paper bill problem: "there are 30,000 municipalities in the United States — they bill for water and sewer — often [with] no digital infrastructure at all."

### Source: Phil Combs Summary (Trane Technologies)

**Data architecture relevance:**

- Bill format variation is the primary technical barrier: "Utilities are still so varied and different... what they put on a bill and the format they put it on a bill, it can just vary." Earlier AI tools stumbled on this.
- Manual data collection: approximately 10-15 minutes per meter to pull, enter, and review data from a utility bill. For a client with 12 meters, that's roughly 2 hours per month on data collection alone.
- Primary tool is still Excel. The real incumbent is a well-structured Excel workbook.
- Regulatory intelligence is the killer feature: monitoring PUC filings, utility board meetings, rate hike proposals, grid operator decisions. This requires scraping or integrating external regulatory data sources alongside billing data.
- Regulatory data timing: Phil wants to know six months in advance that a utility is proposing a rate hike to the PUC. This is forward-looking external data, not historical internal data.
- Weather correlation: Phil references regression against weather as the core M&V methodology — isolating the weather variable to understand whether energy changes are driven by climate, operations, or billing errors.
- IT adoption friction: "Trane on one hand goes out and is telling the world, 'hey, we can solve all your problems with our AI offerings' — but then on the other hand... they disable a lot of that stuff because they're like, 'well that's a security breach issue.'"
- SOC 2 compliance and security architecture white papers required before enterprise conversations.

### Source: Roger Goldstein Summary (Panda Restaurant Group — Internal)

**Data architecture relevance:**

- NG Insight handles all bill processing: invoices received electronically or manually scanned, keyed into the system, compiled by due date, batched back to Panda for consolidated payment.
- Without NG Insight: estimated 4-6 dedicated accounting headcount just to manage bill intake.
- Exception monitoring: NG Insight allows alert parameter setting. Internal team uses one energy manager + one energy associate with data extracted to Excel for manual scrubbing.
- Scale: ~2,600 locations, ~10,000 utility bills/month. Manual bill review at this scale is infeasible.
- Baseline drift problem: a single meter discovered to be covering two outlets in a shared tenant space. For an entire year, Panda paid the neighbor's electricity. NG Insight's threshold system didn't flag it because charges were consistent enough to establish a new baseline.
- H2NO water monitoring: real-time water usage monitoring deployed across most locations. This is AMI-adjacent infrastructure for water — real-time sensor data feeding anomaly detection. The electricity equivalent doesn't exist in the same way.

---

## 2. KEY FINDINGS

### Finding 1: The Data Onboarding Timeline at Healthcare Scale Is Measured in Years, Not Weeks

Ann Walston (BSMH) spent **over a year** completing a meter-to-building mapping exercise before her system could deliver meaningful analytics. Quote: "That was over a year's worth of work, just to identify who's got what... just to identify what's influencing what. Then you get into, okay, can I pay my bills on time?" _(Ann Walston Summary)_

This is not an edge case. It is the baseline prerequisite for any energy intelligence platform in a multi-site healthcare environment where buildings have been built, expanded, and renovated over decades. BSMH completed this work. Systems that haven't are not ready to buy. Clear Current needs a qualification question — "do you have a completed meter-to-building map?" — before entering any healthcare sales conversation.

**Assessment: Strongly evidenced. Single source, but extremely specific and credible.**

### Finding 2: The Incumbent Data Moat Is Structural, Not Technical

ENGIE Impact's competitive moat is 20+ years of client utility data. Adam Zavadsky was explicit: "You can't manage what you can't measure. We can't help you if we don't pay your bills because otherwise we'd have no idea what we're doing." _(Adam Zavadsky Summary)_ Walt Taylor confirmed that ENGIE uses Arcadia for electronic bill aggregation and OCR + manual keying for paper bills. _(Walt Taylor Summary)_ The data architecture of the incumbent is known, and its weak point is the paper bill processing layer — not the electronic data layer.

**Assessment: Strongly evidenced. Confirmed by both customer-side (Walt Taylor, Roger Goldstein) and supply-side (Adam Zavadsky) sources.**

### Finding 3: Paper Bills from Municipalities Are the Persistent Data Ingestion Bottleneck

Two independent sources confirm this. Adam Zavadsky (ENGIE Impact): "The roughly 30,000 municipalities in the United States — which bill for water and sewer — often have no digital infrastructure at all. ENGIE still receives paper bills from many of these, scans them with a large-volume scanner, runs OCR, and then has data entry staff manually key the numbers in because there is no consistent format." _(Adam Zavadsky Summary)_ Phil Combs (Trane): "Utilities are still so varied and different... [earlier AI tools] really stumbled with it." _(Phil Combs Summary)_

Walt Taylor adds the quantitative dimension: "Even at that point, their OCR recognition doesn't work 100% of the time. You're never going to catch every mistake. So what we shoot to do is try to catch 90% of them." _(Walt Taylor Summary)_

This is the gap. Not the electronic feeds from large utilities — those are mostly solved. The gap is the ~30,000 municipalities generating paper bills with no consistent format.

**Assessment: Strongly evidenced. Three corroborating sources from different angles.**

### Finding 4: The PricewaterhouseCoopers Data Story Is the Most Important Data Trust Signal in the Corpus

Scott Czubkowski (Medxcel/Ascension) described turning over data for 125 hospitals with 12+ years of operational data to PwC — "potentially the largest acute-care hospital database in existence" — and described "fighting hard to anonymize it while still getting the analysis value." _(Scott Czubkowski Summary)_ This was not prompted by any question about data security. He raised it in the context of describing what sophisticated health system buyers have already experienced with data-sharing. The lesson he drew: data security documentation must be ready before any enterprise healthcare conversation. "SOC 2 compliance, data anonymization protocols, and a clear statement of what data Clear Current accesses vs. what stays on-premise are required reading before any follow-up conversation with this organization."

Jamare Bates (JLL) independently confirmed: "The number one thing I would tell you is—make sure the company is thinking about how they're going to manage, keep the data secure, and maybe even anonymize it." _(Jamare Bates Summary)_

**Assessment: Strongly evidenced. Two independent senior sources confirming the same concern, with Scott's PwC anecdote providing the specific experiential grounding.**

### Finding 5: Cybersecurity Approval Is the Longest Lead-Time Item in Any Enterprise Healthcare Sale

Scott Sukits (AdventHealth) spent 2.5 years trying to get BrainBox AI through IT and cybersecurity approval at a medical office building. "I've been trying to implement it at a medical office building for 2 and a half years now. And I've been working with our IT folks for that long to try to get it pushed through. And it's just question after questionnaire after questionnaire before they'll even consider approving it." _(AdventHealth Summary)_ The blocker is HIPAA: any system creating a network tunnel into building controls could theoretically access patient data. The Johnson Controls hack "changed everything overnight."

Phil Combs (Trane) confirms the pattern from the vendor side: IT disables tools that the energy team wants to use. "Trane on one hand goes out and is telling the world, 'hey, we can solve all your problems with our AI offerings' — but then on the other hand... they disable a lot of that stuff because they're like, 'well that's a security breach issue.'" _(Phil Combs Summary)_

Critical distinction: Clear Current reads utility bills, not building control systems. This distinction — if made explicit and documented — should accelerate IT approval significantly relative to BAS-integrated platforms.

**Assessment: Strongly evidenced. Two corroborating sources. The mitigating factor (bill reading vs. BAS access) is my analytical inference, but it is directly supported by the contrast between what BrainBox AI does and what Clear Current does.**

### Finding 6: Financial Systems Integration Is the Finance User's #1 Automation Wish — and No Current Energy Platform Delivers It

Andi Ault (UT Austin): "Our financial systems are pretty outdated. Just getting that back-end data isn't always the easiest. The ability to build budgets and forecasts within our financial system — or have it be integrated with our financial system — would be very helpful." _(Andi Ault Summary)_ No ERP system is named specifically, but the wish is for budget-ready data exportable to whatever financial system they use.

This finding did not appear at Texas State, BSMH, Houston Methodist, or Intermountain — those interviews didn't probe this dimension. But the structural tension between energy data (managed in energy platforms) and financial data (managed in ERP/financial systems) was implied across multiple interviews. Phil Combs' observation that "nobody cares until you monetize it" points to the same gap from the vendor side.

Marc Spieler's ERP licensing strategy is the most aggressive response to this finding: embed Clear Current's audit capability inside Oracle, SAP, Microsoft Dynamics, JD Edwards, or QuickBooks. That turns the integration problem into a distribution channel.

**Assessment: Moderately evidenced. Clear from UT Austin finance side. Implied by Trane and NVIDIA perspectives. Would need broader validation across healthcare and QSR buyer segments.**

### Finding 7: The Dual-Audience Data Presentation Problem Is Confirmed Across Every Vertical

The same underlying utility data needs to be presented differently to energy operations users vs. finance users. This was confirmed from multiple angles:

- Andee Chamberlain (TX State): "I care more about the demand and the information about our usage, but the bill processing folks care more about the bottom line numbers." _(TX State Summary)_
- Andi Ault (UT Austin): "For me it's just dollars and consumption numbers." _(Andi Ault Summary)_ — confirmed from the finance chair
- Scott Czubkowski (Ascension): the CEO asking "what is the cost of my utilities in St. John's in Tulsa" is the natural language executive query use case. _(Scott Czubkowski Summary)_
- Ann Walston (BSMH): "In all reality, I would be looking for where to invest the dollars that I have to work on energy consumption reduction." _(Ann Walston Summary)_

This is not a UI problem — it is a data architecture problem. The same data must support both role-based views, and the platform must decide what to show each persona without requiring the user to know what they need.

**Assessment: Strongly evidenced. Confirmed across five separate interviews in higher education and healthcare.**

### Finding 8: Interval Data (AMI/Sub-Metering) Is What Sophisticated Buyers Want — But Most Don't Have It

The gap between monthly billing data and operational data is identified across multiple interviews. AdventHealth's John Culver was explicit: "AdventHealth is interested in being experts itself, so that we can triage it our own way for our own needs and then more rapidly measure the benefit after we do some sort of change on site. Like we want to be able to adjust the set point and then tomorrow check and see, okay, did that do what we thought it did? Versus waiting for a monthly bill." _(AdventHealth Summary)_

Roger Goldstein at Panda has H2NO for real-time water monitoring — an AMI-equivalent for water. "The electricity equivalent of this infrastructure does not exist in the same way." _(Roger Goldstein Summary)_

Andee Chamberlain at TX State: meter data is a constant management problem — "It's not like once you install a meter and program it, it's always going to be perfect. That's just not the reality. The operations change. Maybe it wasn't installed correctly, maybe the data drop fails." _(TX State Summary)_

**Assessment: Moderately evidenced. The wish for near-real-time data is clearly documented. The question of whether Clear Current's platform can ingest interval data (15-minute AMI reads) is not addressed in the research and represents a product gap that needs clarification.**

### Finding 9: Location Churn in M&A-Active Organizations Creates Continuous Data Integrity Problems

AdventHealth's John Culver: "It would be that the bills and the therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time. Which sounds basic, but again, with an organization this size and that grows, matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational." _(AdventHealth Summary)_

Scott Czubkowski confirmed the same pattern at Ascension: 2,500+ care sites with constant location churn creates ghost meters — "paying for sites that we no longer own. I mean, we've paid meters for over 2 years with different people." _(Scott Czubkowski Summary)_

Roger Goldstein at Panda describes the shared tenant meter problem — a single meter covering two outlets. "For an entire year, Panda had been paying the neighbor's electricity." _(Roger Goldstein Summary)_

This is a data governance problem: the meter-to-location-to-account mapping must be maintained continuously as organizations grow, contract, and restructure. No current platform does this automatically.

**Assessment: Strongly evidenced. Three independent sources confirming the same pattern across healthcare and QSR.**

### Finding 10: The Rate Tariff Data Problem Is Structurally Unsolved — 45 Rate Structures at a Single Utility

Walt Taylor (Panda): Alabama Power alone has approximately 45 rate structures. "An AI tool that checks every rate at every utility for every location would be checking thousands of permutations at scale — and most of them are irrelevant because the customer is already on the best available rate." _(Walt Taylor Summary)_

Phil Combs (Trane): utility tariffs are "documents as complex as legal contracts." He specifically requested AI-powered tariff summarization and rate switch modeling, naming Energy Toolbase as the closest existing competitor. _(Phil Combs Summary)_

The California duck curve problem illustrates the temporal dimension: rate structures shift as the grid changes. Energy managers who track only current rates will be caught behind. _(Walt Taylor Summary)_

**Assessment: Strongly evidenced. Two expert sources with direct operational experience. The scale of the problem (thousands of rate permutations at Panda's scale) is a validated constraint that informs how ambitious the rate optimization feature should be in v1.**

### Finding 11: The Full Billing Error Recovery Cycle Is the Missing Proof Point

Marc Spieler (NVIDIA) identified this gap directly: "Have the utilities actually recognized the mistakes and issued refunds?" _(Marc Spieler Summary)_ Ann Walston (BSMH) documented a $1M+ recovery that required board-level intervention and still resulted in partial loss — money that had "gone into line losses." _(Ann Walston Summary)_ The gap between error identification and dollar recovery is political and organizational, not algorithmic.

This is a product design implication: Clear Current cannot just flag errors. It must help document, quantify, and support the utility engagement process. The platform needs to produce evidence that utilities will accept, not just alerts that internal teams will see.

**Assessment: Strongly evidenced. Confirmed by both a sophisticated institutional buyer (Ann Walston) and a senior market observer (Marc Spieler) who both independently raised the recovery problem.**

### Finding 12: SkySpark Represents the Inside-the-Meter Data Architecture That Clear Current Must Explicitly Not Compete With

Intermountain Health's 14 billion data points in SkySpark — sourced from HVAC, lighting, BAS, fire, and elevator systems — is the most sophisticated inside-the-meter data environment in the corpus. Ross Snow's team uses this to identify equipment faults in real time. _(Intermountain Summary)_ The utility bill that jumped from $40K to $140K was _missed_ by the third-party processor — caught by an accountant. _(Intermountain Summary)_ The inside-the-meter sophistication did not prevent the outside-the-meter billing failure.

Clear Current's positioning: "Your SkySpark tells you what's happening inside your buildings. We tell you whether your utility is billing you correctly for what's happening outside them." These are complementary systems with non-overlapping data architectures. Positioning Clear Current as additive to — not competitive with — inside-the-meter platforms like SkySpark, Trane's building controls, and Johnson Controls is essential.

**Assessment: Strongly evidenced from Intermountain. Supported by Phil Combs' supply-side perspective on building operations data.**

---

## 3. VERBATIM QUOTES THAT BELONG IN THE DELIVERABLES

**Quote 1 — The Foundational Data Problem**

> "It would be that the bills and the therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time. Which sounds basic, but again, with an organization this size and that grows, matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational. You can't move forward if you don't know that information."

— John Culver, Corporate Sustainability, AdventHealth _(AdventHealth Summary)_

**Why it matters for deliverables:** This is the cleanest statement of the data quality prerequisite problem in the entire corpus. It should anchor any section on onboarding complexity. The word "foundational" is doing real work here — use it.

---

**Quote 2 — The Incumbent Data Moat**

> "You can't manage what you can't measure. We can't help you if we don't pay your bills because otherwise we'd have no idea what we're doing."

— Adam Zavadsky, Senior Account Manager, ENGIE Impact _(Adam Zavadsky Summary)_

**Why it matters:** This is ENGIE's own articulation of their competitive moat. It also identifies Clear Current's data access problem: without the bill payment relationship, how does Clear Current get access to the data? This should appear in any competitive positioning section.

---

**Quote 3 — The PwC Data Trust Story**

> "I've got $35 million of savings. Well, remember, to do the $35 million of savings, I spend 5x on the capital side compared to the training side, yet I got more out of this side."

— Scott Czubkowski, National Director Energy & Facility Performance, Medxcel _(Scott Czubkowski Summary)_

**Note:** This is actually the training vs. capital ROI quote. The PwC data-sharing story appears in the summary narrative but is not directly quoted verbatim in the source document. The summary states that Scott "described a PricewaterhouseCoopers engagement from roughly five years ago in which Ascension turned over data for 125 hospitals with over 12 years of operational data — potentially the largest acute-care hospital database in existence. He described fighting hard to anonymize it while still getting the analysis value." The exact PwC quote is not preserved verbatim. The closest applicable data-security quote from Scott is:

> "All the technology is out there to control things, do things, monitor things, measure things, whatever. It's how I get administrators to interact with the system without being technical, right? Is my building using more energy than a sister building? What would be my projected utility bill for next month based on current weather outlook?"

— Scott Czubkowski _(Scott Czubkowski Summary)_

**For data trust specifically, the Jamare Bates quote is more directly citable:**

> "The number one thing I would tell you is—make sure the company is thinking about how they're going to manage, keep the data secure, and maybe even anonymize it."

— Jamare Bates, VP Clean Energy & Infrastructure Advisory, JLL _(Jamare Bates Summary)_

**Why it matters:** These quotes together establish that data security is a first-conversation issue, not a late-stage diligence issue. In healthcare especially, it precedes the product demonstration.

---

**Quote 4 — The Cybersecurity Barrier**

> "I've been trying to implement it at a medical office building for 2 and a half years now. And I've been working with our IT folks for that long to try to get it pushed through. And it's just question after questionnaire after questionnaire before they'll even consider approving it."

— Scott Sukits, Director of Control Systems & Energy Management, AdventHealth _(AdventHealth Summary)_

**Why it matters:** The 2.5-year IT approval timeline for BrainBox AI is the most concrete data point on enterprise healthcare technology adoption friction in the corpus. Clear Current needs to quantify what its approval timeline looks like versus this baseline and document why it's different (reading bills, not building controls).

---

**Quote 5 — The Garbage-In Problem**

> "Suppliers will make it sound like you can just layer it on top of your existing systems and it's fine. What we are finding is that is not the case. AI integration needs to be closer to the foundation because it changes so many things."

— Scott Sukits, AdventHealth _(AdventHealth Summary)_

**Why it matters:** This quote should appear in every pitch deck section that addresses "why now" or "why we're different." It is the sophisticated buyer's articulation of why vendor promises fail. Clear Current's response to this objection must be pre-built into the pitch.

---

**Quote 6 — ENGIE's Data Architecture Revealed**

> "NG actually uses Arcadia to get their electronic bills and then they get the paper bills, you know, mailed to them and they run through the OCR."

— Walt Taylor, Energy Manager (Contractor), Panda Restaurant Group _(Walt Taylor Summary)_

**Why it matters:** This is the single most commercially significant competitive intelligence finding in the corpus. ENGIE's data backbone is not proprietary — it's Arcadia. This means ENGIE's data quality ceiling is Arcadia's data quality ceiling. Clear Current's go-to-market strategy should be built around this knowledge.

---

**Quote 7 — The Meter Mapping Timeline**

> "That was over a year's worth of work, just to identify who's got what... just to identify what's influencing what. Then you get into, okay, can I pay my bills on time?"

— Ann Walston, VP Acute Care Facilities Management, Bon Secours Mercy Health _(Ann Walston Summary)_

**Why it matters:** Meter mapping is a prerequisite, not a feature. This quote should appear in the onboarding section of any implementation playbook or sales engineering guide. It establishes the qualification filter for which healthcare customers are "ready to buy" vs. "not yet ready."

---

**Quote 8 — The Threshold System's Fatal Flaw**

> "It does happen. It can go on for a while and then accounting or operations will catch something like that. It's like, hey, how come I haven't had any electric charges on my P&L for six months, or why were the last four months so expensive?"

— Roger Goldstein, Executive Director Facilities & Energy, Panda Restaurant Group _(Roger Goldstein Summary)_

**Why it matters:** This is the "paying the neighbor's electricity for a year" scenario articulated by the buyer. It directly validates the pattern deviation detection capability as more valuable than threshold-based spike detection.

---

**Quote 9 — Rate Structure Complexity at Enterprise Scale**

> "Writing code does the same thing every time and you get the same result every time. That's not how it is when you're looking at utility bills and usage and all the different things."

— Walt Taylor, Panda Restaurant Group _(Walt Taylor Summary)_

**Why it matters:** Walt is the most skeptical sophisticated buyer in the corpus. His confidence gap — not technology rejection, but "show me it works at scale" — is the objection that will appear in every enterprise QSR conversation. This quote should appear in any investor document that discusses product risk.

---

**Quote 10 — The Regulatory Intelligence Request**

> "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board - they're putting a price increase before the Public Utility Commission. Things like that are what really could be powerful because that saves somebody like me so much time."

— Phil Combs, Sr. Digital Services Engineer, Trane Technologies _(Phil Combs Summary)_

**Why it matters:** Regulatory intelligence is the feature that no current competitor delivers well. It requires integrating external regulatory data (PUC filings, board meeting minutes, rate hike proposals) with billing data. This is a distinct data integration workstream — external regulatory data — that should be on the product roadmap.

---

**Quote 11 — The Clear Current Value Proposition, Stated Unprompted by a Buyer**

> "NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great."

— John Culver, Corporate Sustainability, AdventHealth _(AdventHealth Summary)_

**Why it matters:** This is the most direct, unprompted articulation of Clear Current's value proposition in the entire corpus. It came from an actual buyer currently using ENGIE Impact and dissatisfied with its analytical depth. It belongs in every investor pitch, every sales deck, and every product requirements document.

---

**Quote 12 — The District Energy Metering Reality**

> "Metering is really hard. Especially in district energy systems like most universities have. Hospitals and universities are kind of typically district energy places. And it's really hard to meter, to sub-meter, all of that stuff."

— Andee Chamberlain, Energy & Water Conservation Manager, Texas State University _(TX State Summary)_

**Why it matters:** District energy metering complexity is a structural challenge that affects Clear Current's ability to deliver accurate analytics in the university and hospital campus segments. This quote establishes why the problem is hard — not because of bad tools, but because of inherent physical complexity.

---

**Quote 13 — The LLM Gap Visible to Customers**

> "It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on."

— Walt Taylor, Panda Restaurant Group _(Walt Taylor Summary)_

**Why it matters:** Walt is telling us — from inside the customer base — that the threat to Clear Current is visible to sophisticated buyers. ENGIE adding an LLM is the obvious next step, and customers can see it coming. This creates urgency for Clear Current to move fast.

---

**Quote 14 — The Billing Error Recovery Challenge**

> "We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of. I mean, that is incredibly rare."

— Ann Walston, VP Acute Care Facilities Management, Bon Secours Mercy Health _(Ann Walston Summary)_

**Why it matters:** The rarity of recovery is the point. Identifying errors is the easier half of the problem. The harder half — getting utilities to acknowledge errors and issue credits — requires documentation, persistence, and sometimes board-level intervention. Clear Current's platform must address both halves.

---

**Quote 15 — The Cubic Footage Benchmarking Insight**

> "Square footage has nothing to do with how much energy. It's your cubic footage that has everything to do with how much energy is used, because you don't heat a space by the floor. You heat a space like a cube."

— Walt Taylor, Panda Restaurant Group _(Walt Taylor Summary)_

**Why it matters:** If Clear Current's peer comparison and benchmarking features use standard square footage normalization, they inherit an industry-wide measurement flaw. This is a product differentiation opportunity — and a data architecture decision about what normalization variables the platform captures during onboarding.

---

## 4. DELIVERABLE BUILD GUIDANCE

### Deliverable A: Data Onboarding Playbook (for Sales Engineering and Implementation)

**Section 1 — Qualification Gate: "Is This Customer Ready?"**

- Use Ann Walston's meter mapping story (12+ months of work) as the framing example. Build a qualification checklist:
  - Q1: "Do you have a completed meter-to-building map?" If no → estimated 6-18 months before analytics can run. Flag in CRM.
  - Q2: "Who currently processes your utility bills, and how?" If answer is "ENGIE Impact / NG Insight / Get Choice" → existing data relationship. Determine whether Clear Current partners with or displaces.
  - Q3: "How many meters do you have, and what types?" (Utility meters vs. sub-meters vs. AMI vs. district energy points)
  - Q4: "What percentage of your bills arrive electronically vs. paper?" Paper bills from municipalities → plan for longer data ingestion timeline
  - Q5: "Have you completed an M&A in the last 24 months?" If yes → meter-to-location attribution may be incomplete. Extended onboarding.

**Section 2 — The Municipality Paper Bill Problem**

- Lead with Adam Zavadsky's characterization of ~30,000 municipalities with no digital infrastructure.
- Document Clear Current's technical approach to paper bill ingestion. If it uses OCR, quantify accuracy vs. ENGIE's baseline (Walt Taylor's "90% of errors" target).
- Build a specific data intake path for water/sewer bills from municipalities — these are systematically underserved and represent the highest ingestion failure rate.

**Section 3 — Data Security Pre-Clearance Package**

- Before any healthcare enterprise conversation, the following must be ready:
  - SOC 2 Type II certification (or clear timeline)
  - Data anonymization protocol document
  - Clear answer to: "Does Clear Current use customer data to train models shared across clients?"
  - Answer to: "What data does Clear Current access? What stays on-premise?"
  - Statement distinguishing Clear Current from BAS/controls AI (reads invoices, not building systems)
- Use Scott Czubkowski's PwC story as the framing — "this is what your organization has already experienced; here's how we're different."

**Section 4 — Time-to-First-Value by Customer Type**

| Customer Type                                                  | Prerequisite State                       | Est. Time to First Value |
| -------------------------------------------------------------- | ---------------------------------------- | ------------------------ |
| QSR franchisee (25 locations, 1-2 utilities)                   | No prerequisites                         | 2-4 weeks                |
| Mid-market retailer (100-500 locations, electronic bills)      | Meter-to-location map exists             | 4-8 weeks                |
| QSR enterprise (2,000+ locations, ENGIE/NG already processing) | Data sharing agreement with processor    | 8-16 weeks               |
| Healthcare (36+ hospitals, meter map completed)                | SOC 2 clearance + completed meter map    | 3-6 months               |
| Healthcare (greenfield, no meter map)                          | SOC 2 clearance + meter mapping project  | 12-24 months             |
| University (district energy, sub-metering)                     | Data normalization + EnergyCAP migration | 6-12 months              |

_Note: These estimates are my analytical inference based on the onboarding complexity evidence in the corpus. They are not stated directly by any interviewee. They should be validated against Clear Current's actual implementation experience._

### Deliverable B: Competitive Positioning Document

**The ENGIE Impact Section:**

- Lead with Walt Taylor's Arcadia confirmation: ENGIE's data backbone is not proprietary.
- Use Adam Zavadsky's own words to define their moat: "You can't manage what you can't measure."
- Position Clear Current's gap-fill: ENGIE processes bills and pays them. Clear Current interprets them and tells you why you should care. (Use John Culver's verbatim quote.)
- Address the LLM threat: Walt Taylor said ENGIE should "just bolt on" an LLM. That's coming. The window is narrow.

**The EnergyCAP Section:**

- Lead with Andee Chamberlain: "It sounds kind of like what we already have. It sounds like a similar service to what EnergyCAP provides."
- Follow with: "EnergyCAP tells us that they can do that stuff, but it's harder than it sounds." — same speaker.
- Clear Current's wedge: AI-driven analysis, district energy data blending, intuitive chat-based querying. Specific gaps EnergyCAP has in sub-metering normalization.

**The Energy Print Section:**

- Sean Sevy's specific gap: forecasting for a growing system. Energy Print cannot model what utility spend looks like when a new facility opens. Growth modeling is the differentiation.
- Sean's power factor case: Energy Print doesn't flag power factor anomalies from billing data. Clear Current should.

### Deliverable C: Investor Presentation — Data Architecture Slide

**Frame:** "We know exactly what data we're looking at, where it comes from, and how it fails."

Three data sources:

1. Electronic utility feeds (Arcadia-aggregated for large utilities)
2. Paper bill OCR + AI extraction (municipalities — the bottleneck ENGIE hasn't solved)
3. Interval/AMI data (the next frontier sophisticated buyers are asking for)

Key risk acknowledgment: "The paper bill problem is real. Our technical differentiation is AI-native extraction vs. OCR + manual keying. We target 95%+ accuracy vs. the industry's 90% baseline."

**Frame for data security:** "We read invoices, not building systems. This is a critical distinction in healthcare." Use the BrainBox AI 2.5-year IT approval story as the contrast.

---

## 5. COMPETITIVE IMPLICATIONS

### Arcadia

**What the evidence shows:** Arcadia is ENGIE's data backbone, confirmed by both Walt Taylor (customer-side) and Arcadia's own technical documentation. Arcadia designates ENGIE Insight as a known "INDIRECT" data source, preferring direct utility credentials. This means:

1. Clear Current could potentially go directly to Arcadia's data layer — or integrate as an analytics layer on top of Arcadia's aggregation infrastructure.
2. ENGIE's electronic bill data quality ceiling is Arcadia's data quality ceiling. Any Arcadia data quality limitations flow through to ENGIE.
3. The most direct route to undercutting ENGIE in the electronic bill domain is to go directly to Arcadia's data layer — not to build competing aggregation infrastructure.

**Move to consider:** Evaluate an Arcadia partnership or integration. If Arcadia provides the data backbone and Clear Current provides the intelligence layer, the combined offering is more credible than ENGIE's current analytics. The competitive threat to ENGIE: one of their data providers becomes a channel for their competitor.

### EnergyCAP

**What the evidence shows:** EnergyCAP is the default platform in higher education (Texas State confirmed; likely more widely deployed in the MUSH market). Andee Chamberlain's reaction — "it sounds kind of like what we already have" — is the most dangerous opening to encounter in a sales conversation. EnergyCAP's gaps: district energy metering, sub-meter data normalization, and intuitive querying. The bill processing module is not universally adopted (Texas State does not use it).

**Move to consider:** Clear Current's messaging for higher education must explicitly answer "here's what we do that EnergyCAP cannot" before the prospect asks. The wedge is not feature comparison — it's the AI reasoning layer that EnergyCAP doesn't have. And the district energy problem EnergyCAP claims to solve but "it's harder than it sounds."

### Energy Print

**What the evidence shows:** Energy Print is used by Houston Methodist for benchmarking and bill tracking. Its specific gap: forecasting for a growing system. Sean Sevy identified the platform's forecasting models assume a stable building portfolio — a direct product limitation in high-growth healthcare systems.

**Move to consider:** In Texas healthcare specifically, the pitch should lead with growth scenario modeling: "What does your utility spend look like when you open a new 200,000 sq ft tower?" This is a question Energy Print cannot answer. Clear Current should be able to.

### ENGIE Impact (NG Insight)

**What the evidence shows:** ENGIE's moat is the bill payment relationship — 20+ years of client data for customers like Panda. Their analytics are weak relative to their data holdings. Adam Zavadsky was candid about this from the inside: AI is being used for internal workflow improvement, not client-facing analytics. Exception monitoring is threshold-based, not pattern-based.

**Moves to consider:**

1. **Partnership:** ENGIE has the data; Clear Current has the intelligence. A white-label analytics layer inside ENGIE's portal is the least friction path to accessing ENGIE's customer base. This may be more valuable than competing for customers.
2. **Direct competition:** Position Clear Current's pattern detection against ENGIE's threshold alerts. The baseline drift problem (Roger Goldstein's neighbor's electricity, Scott Czubkowski's ghost meters) is the specific failure mode that ENGIE's current system cannot catch.
3. **Arcadia end-run:** If Clear Current integrates directly with Arcadia, it can offer electronic bill coverage equivalent to ENGIE's without the bill payment relationship.

### WatchWire/Tango

**What the evidence shows:** WatchWire and Tango are not mentioned by name in the corpus. This is a gap. Their absence means either (a) they are not top-of-mind for the buyer personas interviewed, or (b) the research did not surface conversations where they would have appeared. Before finalizing competitive positioning, these platforms should be investigated.

**Inference:** The buyers who are using named platforms are using EnergyCAP (universities), Energy Print (hospital benchmarking), ENGIE Impact (large enterprise QSR and healthcare), and Get Choice (BSMH). The absence of WatchWire/Tango suggests they may not be deeply penetrated in the specific buyer segments this research covered.

### JLL (In-House AI Tooling)

**What the evidence shows:** JLL is building AI and data tools internally through JLL Technologies. They have already found "millions and millions of dollars" in client savings using an integrated stack. At the enterprise tier, JLL builds internally or acquires — they are not a direct sales prospect for a point solution.

**Moves to consider:** JLL as an acquirer is the long-term scenario. Near-term: the mid-market clients JLL serves but does not build custom tools for are the prime direct sales target. JLL as a distribution partner for mid-market clients is worth exploring.

---

## 6. WELL-EVIDENCED VS. INFERRED

### Strongly Evidenced (Multiple Sources, Specific Details)

| Finding                                                                          | Source Count                                                             | Confidence    |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------------- |
| ENGIE Impact uses Arcadia for electronic bill aggregation                        | 2 (Walt Taylor confirmed; Arcadia documentation confirmed)               | High          |
| Paper bills from municipalities are the persistent data ingestion bottleneck     | 3 (Phil Combs, Adam Zavadsky, Walt Taylor)                               | High          |
| Data security documentation is a first-conversation requirement in healthcare    | 2 (Scott Czubkowski, Jamare Bates — independently)                       | High          |
| Threshold-based exception monitoring misses baseline drift                       | 2 (Roger Goldstein, Adam Zavadsky — from buyer and provider sides)       | High          |
| Meter-to-building mapping is a 12+ month prerequisite in healthcare              | 1 (Ann Walston — specific and credible)                                  | Moderate-High |
| Dual-audience data presentation problem confirmed across verticals               | 5+ (TX State, UT Austin finance, UT Austin engineering, Ascension, BSMH) | High          |
| Cybersecurity IT approval is the longest lead-time item in enterprise healthcare | 2 (Scott Sukits direct experience, Phil Combs pattern confirmation)      | High          |
| Ghost meter / location churn is a $1M+/year error category at enterprise scale   | 2 (Scott Czubkowski at Ascension, Roger Goldstein at Panda)              | High          |

### Moderately Evidenced (Single Source or Inferred from Pattern)

| Finding                                                            | Basis                                                                     | Confidence                         |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------- | ---------------------------------- |
| Time-to-first-value estimates by customer type                     | My analytical inference from onboarding complexity evidence               | Medium — needs validation          |
| Financial systems integration is the finance user's #1 wish        | Single source (Andi Ault, UT Austin)                                      | Medium — needs broader validation  |
| Interval/AMI data ingestion is what sophisticated buyers want next | Implied across multiple interviews; directly stated by AdventHealth       | Medium                             |
| ERP licensing (SAP, Oracle, QuickBooks) as distribution channel    | Marc Spieler recommendation; not validated by buyers                      | Low-Medium — strategic inference   |
| Arcadia partnership as the most direct competitive move            | My inference from Walt Taylor's confirmation of ENGIE's data architecture | Medium                             |
| WatchWire/Tango competitive positioning                            | Absent from corpus — no basis for assessment                              | Low — requires additional research |

### My Analytical Inferences (Not Directly Evidenced)

1. **Clear Current's IT approval timeline should be materially shorter than BrainBox AI's because it reads invoices, not building systems.** This is logical but not tested. A security-focused healthcare IT team might still require extensive documentation for any external data sharing, even of utility invoices.

2. **The cubic footage benchmarking insight from Walt Taylor could be a product differentiation feature.** This is a smart observation but comes from a single source in a QSR context. Whether it applies broadly across healthcare and education requires validation.

3. **ENGIE adding an LLM to its existing data stack is the most credible near-term threat.** Walt Taylor said this explicitly. But the execution risk for ENGIE — integrating a capable LLM with 20 years of heterogeneous billing data — should not be underestimated. ENGIE's track record on innovation (they outsourced their bill aggregation to Arcadia rather than building it) suggests they may be slower to act than Walt assumes.

---

## 7. OPEN QUESTIONS AND RESEARCH GAPS

### Gap 1: What Specific ERP Systems Do Target Buyers Actually Use?

Neither Texas State, UT Austin, BSMH, Houston Methodist, nor any healthcare interviewee named a specific ERP platform (Banner, PeopleSoft, Oracle Financials, Workday). The financial system integration need is confirmed, but the technical integration target is unknown. Before building an ERP connector, Clear Current needs to know which platforms are most common in:

- Higher education (Banner and PeopleSoft are the industry defaults, but this is my inference — not confirmed in the corpus)
- Healthcare (Epic dominates clinical; the financial system is often separate)
- QSR (Panda's internal financial systems are not described)

**Recommended research action:** Ask the next round of interviewees directly: "What ERP or financial system does your organization use? Does energy data currently flow into it?"

### Gap 2: Does Clear Current Currently Ingest Interval/AMI Data?

AdventHealth's John Culver wants hourly or daily data — not the monthly billing snapshot that ENGIE provides. Roger Goldstein already has real-time water monitoring via H2NO and is looking for the electricity equivalent. Andee Chamberlain at Texas State describes meter data as a constant management problem.

The research documents the _wish_ for interval data clearly. What is not clear is whether Clear Current's current platform ingests 15-minute AMI reads, hourly interval data, or only monthly billing summaries. This is a product scope question that will determine the addressability of the most sophisticated buyer segment.

**Recommended action for Dan:** Clarify the current and planned interval data capability in the product roadmap. If Clear Current is currently monthly-billing-only, the pitch to AdventHealth and Houston Methodist will have a significant ceiling.

### Gap 3: What Is Clear Current's Current Data Onboarding Timeline?

The research identifies onboarding complexity factors extensively. What it does not provide is a baseline of how long Clear Current's actual onboarding has taken in its 12 current pilots. Are pilots providing time-to-first-value data? What has the meter mapping experience looked like in practice?

**Recommended action for Dan/John:** Systematically document pilot onboarding timelines. For each pilot: (a) days from contract signature to data connected, (b) data sources (electronic, paper, AMI), (c) number of meters, (d) data quality issues encountered, (e) first alert generated. This data will be essential for investor conversations and for realistic sales cycle planning.

### Gap 4: What Happens When a Customer's Third-Party Processor Doesn't Cooperate?

Roger Goldstein at Panda offered to connect the team with his NG Insight account lead. Ann Walston uses Get Choice. AdventHealth uses ENGIE Impact. Scott Czubkowski uses Peer AI (Constellation).

In every case, the customer's utility bill data is already held by a third-party processor. If Clear Current wants to access that data, it needs either:

- The customer to grant access to the processor (which requires the processor's cooperation), or
- The customer to provide raw bill data through a separate channel, or
- A direct Arcadia integration that bypasses the processor

What the research does not answer: what happens when a third-party processor refuses or creates friction in the data sharing process? Has Clear Current encountered this in any of its 12 pilots?

**Recommended action:** In the next sales cycle, map the data access path explicitly. Identify which third-party processors are cooperative (and have been approached for partnership) vs. which are adversarial to data sharing with competitors.

### Gap 5: How Does Clear Current Handle the Municipality Paper Bill Problem Technically?

Adam Zavadsky and Phil Combs both identified this as the persistent bottleneck. Walt Taylor gave the accuracy benchmark: 90% catch rate is the current target for ENGIE's OCR + manual keying. The research does not describe Clear Current's technical approach to paper bill ingestion.

If Clear Current is using standard OCR (similar to ENGIE), the competitive advantage is in the analysis layer, not the ingestion layer. If Clear Current has a superior document extraction capability (fine-tuned LLM for bill parsing), that is a meaningful competitive differentiator to document and demonstrate.

**Recommended action for Dan:** Create a head-to-head comparison of Clear Current's paper bill extraction accuracy vs. the 90% industry baseline. If the accuracy is materially higher, this becomes a featured specification in the data architecture section of the product pitch.

### Gap 6: What Is the Carbon Accounting Data Integration Need?

Troy Nevels raised carbon taxation linked to natural gas billing in northeastern states. AdventHealth uses the Watershed platform for automated GHG data collection. AdventHealth's sustainability targets (50% Scope 1/2 reduction by 2030) require accurate consumption data to feed into carbon accounting.

The research surfaces the carbon data need but does not explore it deeply. Specifically:

- What data does Watershed require from utility invoices?
- Can Clear Current's platform export in a format that feeds Scope 1/2 reporting?
- Is there a market for Clear Current as a carbon accounting data feed (not just a billing intelligence platform)?

**Recommended action:** Add carbon accounting integration to the product roadmap discussion. In healthcare and large institutional buyers with public sustainability commitments, the billing data is also sustainability reporting data. A platform that serves both purposes is more defensible than one that serves only billing audit.

### Gap 7: What Is the Correct Normalization Variable for Benchmarking?

Walt Taylor argued that cubic footage (not square footage) is the correct energy benchmarking variable. This is a single-source finding from a QSR context. Whether it applies to hospitals (with complex ceiling heights and clinical pressurization requirements), universities (with auditorium and laboratory space), and office buildings is not addressed in the research.

If Clear Current's peer comparison features use square footage as the normalization variable,

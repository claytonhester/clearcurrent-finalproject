# Clear Current Technologies — Executive Decision Brief

# Generated: 2026-04-17T21:41:01.416134

---

# EXECUTIVE DECISION BRIEF

## Clear Current Technologies

### Integrated Research Synthesis | May 2026 Fundraise Preparation

**Prepared for:** John Reuter (CEO) & Dan Schreiber (CPO)
**Sources:** 15 primary research agents · 6 secondary research agents · Research Synthesis Brief (April 6, 2026) · 5 primary interviews · 6 Perplexity research sessions · TAMU database research (IBISWorld, ABI/Inform, Orbis)
**Date:** April 2026

---

> **How to read this brief.** Every section leads with the executive takeaway. Evidence follows. Customer quotes are in the body, attributed by name, role, and organization. When a finding rests on a single source, that is noted. When the research is genuinely silent, that is noted too. This document is written for the May fundraise and for internal product decisions — the standard is investor diligence, not consultant confidence.

---

## SECTION 1: THE 5 THINGS THE RESEARCH PROVES

_"Proves" means: multiple independent sources — at minimum two primary interviews or one primary interview plus a government/regulatory secondary source — point to the same finding with consistent, non-contradictory evidence._

---

### PROOF 1 — Your Buyers Are Reactive by Design, and Your Product Must Be Proactive by Design

**What the evidence shows:** Every primary interviewee described a reactive operating posture, and independent secondary data confirms it is the norm, not the exception. Don Johnson (Sr. Account Manager, Trane Technologies): _"Most customers are still reactive... even hospitals."_ Phil Combs (M&V/Digital Services, Trane Technologies) described _"the tyranny of the urgent"_ as the organizing principle of commercial energy management. EnergyCAP's own 2026 State of the Industry survey found 76% of commercial energy buyers expect utility costs to rise year-over-year — yet remain reactive on cost reduction solutions. McMorrow Reports (2023) documented 30%+ of facility managers operating under a deferred maintenance culture that reinforces the reactive posture.

Critically, this finding held across verticals. Texas State's energy team, despite being one of the most operationally sophisticated in the higher education corpus, described a workflow where billing anomalies are discovered by comparing current against historical — a retrospective, manual process. Panda Restaurant Group's Roger Goldstein described a neighbor's electricity bill being absorbed for a full year because the erroneous charge had established a new rolling average before anyone noticed. Scott Czubkowski (National Director Energy & Facility Performance, Medxcel/Ascension): a single polar vortex event cost $7.2M in three days — absorbed and investigated after the fact.

**Why it matters for Clear Current:** The "Push to User" dashboard tier is not a product luxury — it is the table stakes requirement. A user who does not go looking for what is wrong cannot be served by a product that waits to be asked. The React to User chat tier is valuable for sophisticated analysts (Phil Combs' Excel-replacing workflow), but it is not the primary value delivery mechanism for the majority of your buyers. The research proves you must _find_ users with prioritized signals before they come to you. **This is the single most important design implication in the entire corpus.**

---

### PROOF 2 — Billing Errors Are Legally Documented, Structurally Persistent, and Material at Scale

**What the evidence shows:** This is the cleanest evidence chain in the corpus, and it runs from government enforcement actions to first-person operational testimony.

Government/regulatory sources: FERC audit confirmed $108M mischarged at a single utility (FirstEnergy). Rhode Island Public Utilities Commission found that 83% of internally flagged billing exceptions were sent to customers anyway — the utility's own systems identified the errors and charged customers regardless. Harvard Law (2025) documented the structural information asymmetry that makes this persistent: utilities have the rate schedule, the meter data, and the calculation engine; customers receive an invoice and are expected to audit a system they cannot access.

Primary interviews: Andee Chamberlain (Energy & Water Conservation Manager, Texas State University): _"We had a weird multiplier happen in one of our bills... spending 3,500 gallons every month, and now it's 35,000."_ That 10x error propagated until someone with operational context noticed the number. Scott Czubkowski (Medxcel/Ascension) confirmed over $1M per year in payments for vacated sites. Panda Restaurant Group's Goldstein described the baseline drift problem: threshold-based exception systems are blind to gradual error accumulation because the erroneous charge becomes the new normal.

Marc Spieler (Sr. Managing Director, Global Energy Industry, NVIDIA): Clear Current's 12 pilots identified $10M in billing errors. This is an internal claim from Clear Current, not independent verification. Spieler immediately followed this with the question every investor will ask: _"Have utilities actually issued refunds based on errors Clear Current found, or is the $10M still theoretical?"_

**Why it matters for Clear Current:** The billing error positioning is your strongest entry narrative — but only if it is framed correctly. The FERC/RI PUC/Harvard Law chain gives you government enforcement framing, not vendor marketing. Use those citations, not the 80% overpaying statistic (flagged as unverifiable in the claim audit; sourced to National Utilities Refund, a company with direct financial interest in the claim). The identified-vs.-realized gap is addressed separately in Section 2. _Do not describe the product as resolving errors unattended or recovering credits automatically — the research confirms the product assists manual completion, and claiming otherwise in a diligence setting creates material misrepresentation risk._

---

### PROOF 3 — The Finance/Ops Dual-Audience Problem Is Structural, Unsolved, and Explicitly Named by Buyers in Two Independent Interviews

**What the evidence shows:** Two independent interviewees at two different institutions described the same structural divide — without being prompted to compare their institutions to each other.

Andee Chamberlain (Energy & Water Conservation Manager, Texas State University): _"I care more about demand and usage... the bill processing folks care more about the bottom line."_ This is not a preference — it is a description of two different people with two different jobs looking at the same data and needing entirely different answers.

Andi Ault (Sr. Associate Director of Finance, UT Austin): confirmed from the finance side. She is a controller-trained financial executive (BS Accountancy, former controller at US Foods) who explicitly does not want to interact with energy data directly. Her first answer when asked how she would use an AI tool was anomaly flagging — not analysis. She endorsed the dual-audience architecture when presented with it: _"Oh, absolutely. Absolutely."_

EnergyCAP user reviews (132 G2/Capterra entries): the platform does not serve both audiences well. Chargebacks and cost allocation — the features most important for the finance side — are consistently the most complained-about capabilities.

**Why it matters for Clear Current:** This is your clearest product differentiation opportunity in the higher education vertical. EnergyCAP serves both audiences poorly from a single undifferentiated interface. No AI-native competitor has built the dual-audience model. Dan's three-tier architecture — chat for the energy analyst, push dashboard for the finance director — is not just an elegant product decision. It is the exact solution to a documented, named, cross-validated buyer problem. _This is the message that lands in a university sales conversation._ The energy manager hears that they get a more powerful analyst tool. The finance director hears that they will be told what matters without having to become an energy expert.

---

### PROOF 4 — Regulatory Intelligence Is Confirmed White Space With a Fully Documented Business Case

**What the evidence shows:** Phil Combs (M&V/Digital Services, Trane Technologies) is the only interviewee to explicitly name regulatory intelligence as a product capability — and his language was the most enthusiastic he used in the entire interview. He described monitoring PUC filings, utility board meeting minutes, rate hike proposals, and grid operator decisions as a forward-looking intelligence function that nobody currently provides. He called it _"super powerful"_ — language he did not use for any other feature — and described the mechanism: the value is not just knowing a rate change is coming, it is quantifying what that change means in dollar terms against a specific customer's 24-month consumption profile.

Andi Ault confirmed the exact use case from the buyer side without prompting: her budget must be submitted in March, but the City of Austin does not finalize utility rates until after that deadline. She is being asked to plan a multi-million dollar energy budget against a rate that doesn't exist yet.

Secondary data closes the gap: Ohio PUC mandates 275-day statutory timelines for rate cases. AES Ohio's 2024 case resulted in approximately a 9% commercial rate increase landing on customers with minimal advance notice. PPL Pennsylvania filed its rate case in October 2025 with a final decision date of July 1, 2026 — the same day a university's new fiscal year begins. Boston University locks its energy budget in March. Zero documented competitors offer PUC docket monitoring. This is confirmed white space.

**Why it matters for Clear Current:** This is Rate Analyst's highest-value, most defensible feature. The business case is not theoretical — it is the exact dollar gap between a university's budgeted energy escalator (typically 3%) and the actual commercial energy CAGR (5.9%). Multiplied by a $20M annual gas spend (Andi Ault's figure), that gap is $580K per year in unplanned budget variance. A tool that quantifies that variance in advance — and ties it to a specific rate case on a specific docket — is not a reporting feature. It is a budget protection tool with a calculable ROI. _This is the one feature in the corpus with no named competitor and no known substitute._

---

### PROOF 5 — Arcadia's Competitive Gap Is Structural and Time-Bounded

**What the evidence shows:** Marc Spieler (NVIDIA) identified Arcadia as the primary AI-native competitive threat. The subsequent competitive intelligence work documented the following simultaneously true facts: Arcadia has raised $649M. Arcadia has zero documented higher education customers after 14 months of enterprise sales. Arcadia's UX is a dashboard and data API — no natural language interface. Arcadia is currently migrating existing customers off its legacy Urjanet/Arc platform, and job postings confirm this migration is the Senior PM's primary responsibility for 12–24 months. Arcadia's enterprise customer list (Cox Enterprises, Arconic, Iron Mountain, Adobe, Intuit, UPS via RPD Energy) is entirely Fortune 500 corporate — no university, no hospital, no district energy reference.

Cox Enterprises' posture is the sharpest piece of competitive intelligence: they chose Arcadia as a data feed because _"they wanted to put us on their dashboard."_ Arcadia is functioning as infrastructure for sophisticated internal teams — not as an end-user intelligence platform for energy managers who receive 3,000-line utility bills and need to act on them.

Phil Combs (Trane Technologies) named Energy Toolbase as the closest competitor for tariff analysis — not Arcadia. This is a practitioner who evaluates AI energy tools professionally.

**Why it matters for Clear Current:** The competitive window is real but time-bounded. Arcadia's migration distraction is a 12–24 month phenomenon. The higher education moat requires building campus chargeback logic that Arcadia has never constructed — this is not a feature gap that capital can close in a quarter. It requires district energy cost allocation logic built for universities and hospitals, not corporate campuses. _The moat has to be built before Arcadia's migration is complete and their sales team refocuses._ The window is open. It will not stay open.

---

## SECTION 2: THE 3 THINGS THE RESEARCH DOES NOT ANSWER

_These are not gaps in the research effort — they are gaps that no secondary research can close. They require action by John and Dan._

---

### OPEN QUESTION 1 — Has a Single Dollar Actually Been Recovered?

**Why this is the most important unanswered question in the corpus:** Marc Spieler raised it directly in his interview. Clear Current's 12 pilots identified $10M in billing errors. The research cannot determine whether a single dollar of that $10M has resulted in a utility credit, a refund check, or a corrected invoice. Spieler's exact framing: _"Have utilities actually issued refunds based on errors Clear Current found, or is the $10M still theoretical?"_

This is not a product question — it is a commercial credibility question. Every sophisticated investor in the May fundraise will ask it. Every prospective enterprise customer in a procurement committee will ask it. A single documented case — error identified, utility contacted, credit issued, dollar amount recovered — is worth more than the entire secondary research body for investor narrative purposes.

**What John and Dan need to do:** Review every pilot. Identify whether any customer has disputed a charge with a utility based on Clear Current's output and received any form of credit, corrected bill, or refund. If yes: document it, get permission to use it, and put it on slide 3 of the fundraise deck. If no: be honest about what the product does (identifies errors, assists the dispute process) and position accordingly. _Do not imply the product closes the identified-to-realized gap until there is evidence that it does._

**Product context note:** The CC Engine maturity ladder describes error resolution as "assists manual completion — not hands-off resolution by default." This is the correct honest description. The research does not contradict it — but the $10M identification claim, without recovery evidence, creates a narrative gap that sophisticated buyers will probe.

---

### OPEN QUESTION 2 — Will IT Security Gate Enterprise Adoption, and at What Stage?

**Why this is unanswered:** Phil Combs raised this as a first-person experience. He wants to use AI energy tools. His own company's IT department restricts them. _"You've got guys like me that would love to use this, and then IT says no, no, no."_ Trane — a company that sells AI-powered building automation to clients — internally blocks AI tools its own employees want to use. This is not a hypothetical adoption barrier. It is a documented pattern.

The research cannot answer whether this gate will appear at Stage 1 (before a pilot) or Stage 2 (before enterprise rollout). For SOC 2 Type II (the primary enterprise security certification), the research documents it as the threshold that satisfies IT gatekeepers, but no interviewee described Clear Current specifically going through an enterprise security review.

**What John and Dan need to do:** Determine Clear Current's current security certification status. If SOC 2 Type II is not in progress, start the process before the May fundraise — not because investors require it, but because it signals enterprise readiness. Map the IT security question into the pilot structure: ask prospective customers in the first conversation whether their IT department needs to approve the tool before data sharing begins. Getting this question answered early prevents late-stage deal collapse.

**Gap note:** This finding has strong primary evidence (Phil Combs' direct experience) and enterprise SaaS secondary corroboration, but no interviewee described their own IT department blocking Clear Current specifically. The concern is well-documented; the actual impact on Clear Current's pipeline is not yet empirically proven.

---

### OPEN QUESTION 3 — What Is the Corporate Multi-Site Buyer's Voice?

**Why this is unanswered:** The research has strong primary evidence for two verticals: higher education (two detailed interviews) and channel/advisory (Don Johnson, Phil Combs, Marc Spieler). It has no completed primary interview with a corporate multi-site energy buyer — the profile that Roger Goldstein (Panda, ~2,600 locations) and Scott Czubkowski (Medxcel/Ascension, 2,500+ sites) represent from the healthcare and restaurant verticals.

The healthcare corpus (Marcus Williams' analysis) is rich with operational detail — $265M+ in utility spend, documented billing error patterns, multi-site invoice processing workflows — but the question of whether corporate multi-site buyers would pay for a standalone AI energy intelligence platform versus embedding it in their existing third-party processor relationship (ENGIE Impact, Get Choice, NG Insight) is not answered. Marc Spieler's licensing-to-ERP-platforms GTM track is directionally compelling but not validated by a direct buyer.

**What John and Dan need to do:** Conduct at minimum two interviews with corporate multi-site energy directors — one in a sector with a third-party processor relationship (healthcare or hospitality) and one without. The specific question to answer: if the billing intelligence is already flowing through ENGIE Impact or NG Insight, would they pay separately for Clear Current's analytical layer, or does the product need to be positioned as the layer those processors plug into? This distinction determines whether the corporate GTM motion is direct-to-buyer or channel-dependent.

---

## SECTION 3: THE BEACHHEAD RECOMMENDATION

**The recommendation:** Higher education, specifically energy and water conservation managers at research universities with district energy systems, 500,000+ gross square feet, and active EnergyCAP relationships.

---

### Why Higher Education Over Healthcare, CRE, or Corporate Multi-Site

**Speed to five paying customers** requires a vertical where (1) the buyer's pain is documented and cross-validated, (2) the incumbent's weaknesses are known and exploitable, (3) the buying cycle is predictable enough to plan around, and (4) a competitive moat exists that capital alone cannot replicate. Higher education is the only vertical where all four conditions are simultaneously true.

Healthcare has larger budgets ($265M+ at Ascension) but longer enterprise sales cycles, procurement committee structures, and IT security reviews that add 6–12 months to a deal. CRE has no completed primary interview — the buyer's voice is missing. Corporate multi-site has structural channel dependency questions that are not yet answered.

Higher education's buying cycle is calendar-driven and documented with two independent primary sources. Andee Chamberlain (Texas State) and Andi Ault (UT Austin) independently confirmed the same calendar: October begins budget development, January–February is the historical data pull for planning, March is budget submission, May is procurement and gas purchasing, September 1 is fiscal year start. This means Clear Current knows exactly when to be in front of a buyer and what problem they are trying to solve in each month.

---

### Specific ICP

**Organization profile:** Research university or large state institution. District energy system (steam and/or chilled water centrally produced, distributed campus-wide). 1,000+ utility meters. Active EnergyCAP relationship — ideally with a recent bill processing personnel transition, which Texas State's experience shows is a documented buying trigger. Annual energy spend $5M+. Finance and energy ops as separate functions with different data needs (confirmed at both Texas State and UT Austin).

**Primary buyer:** Energy and Water Conservation Manager (or equivalent title — Sustainability & Energy Director, Utilities Manager). This is the Andee Chamberlain persona. Operationally sophisticated, data-literate, currently using EnergyCAP for invoice storage but not for intelligence. Needs the React to User chat tier for analyst-level questions and the Push to User dashboard for anomaly alerting — James Norton (Texas State) explicitly requested the latter: anomaly flagging without having to query.

**Economic buyer / co-sponsor:** Associate Director of Finance or equivalent controller-function role. This is the Andi Ault persona. Does not want to interact with energy data. Needs the Push to User dashboard tier exclusively — flagged anomalies, budget variance alerts, rate case impact quantification. Will not be the champion but will unblock procurement if the tool saves her time during budget season.

**The entry point:** Rate Analyst, positioned as regulatory intelligence + budget protection. Not billing audit. The Andi Ault problem — budget submitted in March, rates finalized after — is the precise use case. Andee Chamberlain's interest in gas purchasing decisions (strips vs. market, shoulder month timing) is the second hook.

---

### Pilot Structure

**Recommended pilot design:** 90-day paid pilot. Scoped to a single fiscal event the university is already planning for — ideally the March budget submission or the May gas purchasing window. Deliver three outputs: (1) a rate case intelligence brief for the university's primary utility, quantifying the dollar impact of any pending or recent rate change against the university's 24-month consumption profile; (2) an anomaly alert on at least one billing discrepancy in historical invoice data; (3) a scenario model for one procurement decision (lock vs. float on gas, peak demand reduction timing).

**Why paid, not free:** Marc Spieler explicitly flagged the savings-sharing model as a trap at this stage — it ties revenue to realized outcomes rather than identified value, and it defers revenue until disputes are resolved. A flat pilot fee (suggested range: $5K–$15K for 90 days, scoped as a proof-of-value engagement) establishes Clear Current as a software vendor, not a contingency auditor. It also creates a commercial signal that matters for the fundraise.

**Target list:** Texas State and UT Austin are the two warmest relationships in the corpus. Both have documented pain, identified buyers, and confirmed EnergyCAP frustration. At minimum three additional university prospects should be identified in the ERCOT region (where Marc Spieler confirmed Clear Current's home-court billing complexity advantage) before the May fundraise.

---

### The Chargeback Moat (Medium Term)

This section is a roadmap note, not an entry product recommendation. EnergyCAP's campus chargeback feature — cost allocation to departments and buildings for internal billing purposes — is simultaneously the feature most important to university customers and the feature most complained about in 132 G2/Capterra reviews. No AI-native competitor offers campus chargeback. Arcadia has never built district energy cost allocation logic. This is the feature that converts a pilot customer into a multi-year, high-switching-cost relationship. It is not the entry product — but it is the moat Clear Current should be building during the pilot phase so it exists when the expansion conversation begins. This is tagged in Implications.

---

## SECTION 4: THE MODULE PRIORITY DECISION

**Dan's first engineering priority: The Regulatory Intelligence Layer inside Rate Analyst.**

---

### The Case For Regulatory Intelligence First

Three conditions simultaneously make this the highest-priority investment:

**1. It is the only feature with no named competitor.** Phil Combs evaluated every energy software tool professionally for over 20 years. He named Energy Toolbase for tariff analysis and Excel as the real incumbent for sophisticated analysis. He named no competitor for PUC docket monitoring. The Arcadia competitive intelligence confirmed zero documented competitors offer this feature. White space with documented buyer demand is the rarest combination in product development.

**2. The buyer problem is precisely scoped and calendar-bound.** Andi Ault needs this feature to exist before March. The PPL Pennsylvania rate case, with a final decision on July 1 matching university fiscal year start, is a real-world test case that can be demoed today with existing public data. The feature does not require new invoice data from a customer — it can be demonstrated with public docket data against a hypothetical consumption profile. This is a low-lift demo that proves the concept.

**3. It is the key that unlocks the finance persona.** Andi Ault will not become a power user of chat-based energy analytics. She will not query invoice data. But she will use a tool that tells her in February: _"The City of Austin rate case currently pending would add $580K to your FY2027 energy budget if approved as filed. Here is what to include in your budget reserve."_ That is the Push to User dashboard behavior at its highest value — a proactive, financially material signal that requires no user action to receive.

**What this looks like in product terms:** Rate Analyst, Push to User tier. Automated monitoring of PUC dockets for a customer's named utilities. Natural language summary of pending rate cases and their projected dollar impact against the customer's consumption profile. Delivered as a dashboard alert and/or scheduled email digest. No utility login required — public docket data only at this stage.

---

### Trade-offs Against Alternatives

**Why not billing error detection first?** Billing error detection is already the strongest capability in the current CC Engine, described as strong for layperson-style queries. It is the entry hook, but it is not the differentiator — every energy auditor, EnergyCAP, and Arcadia's data layer claims some version of this. The identified-vs.-realized gap (Section 2, Open Question 1) means the billing error story needs a proof point before it becomes the lead. Building more detection capability before you can close the loop is investment in a story that has a credibility problem.

**Why not campus chargeback first?** Campus chargeback is the highest-switching-cost feature in the higher education vertical — it is the right medium-term priority. But it is not the entry product. The pilot structure recommended in Section 3 does not require chargeback functionality. Building it during the pilot phase (months 4–9) positions it for expansion contracts, not initial sale.

**Why not multi-site automation first?** Site-invoice association is described in the CC Engine maturity ladder as the lead automation capability, and it is correct to continue improving it. But the strategic question here is: what is the highest-leverage _new_ investment? Multi-site association improvements are maintenance and scale investments — valuable, but not the feature that opens the higher education vertical or closes the competitive gap with Arcadia.

**The sequencing:** Regulatory Intelligence Layer (months 1–3, to support May fundraise demo and March university budget season) → Campus Chargeback Logic (months 4–9, to convert pilots to expansion) → Multi-site autonomous site association at scale (months 6–12, as the portfolio grows beyond 10 customers).

---

## SECTION 5: WHAT CHANGES IF YOU ARE WRONG ABOUT X

_Three assumptions with high consequence if false. Evidence base and strategic pivot for each._

---

### ASSUMPTION 1 — University Buyers Will Pay for Software When They Already Have EnergyCAP

**Current assumption:** EnergyCAP frustration is severe enough, and Clear Current's intelligence layer distinct enough, that universities will pay for both — or displace EnergyCAP over time.

**Evidence base for the assumption:** Andee Chamberlain's first reaction to Clear Current was _"it sounds like what EnergyCAP already provides"_ — then walked it back as the interview progressed. EnergyCAP user reviews describe it as a _"glorified spreadsheet"_ with a cost of $50–$75K/year for 1,500 meters via reseller. The Texas State team described EnergyCAP as falling short on their actual use cases (district energy metering, anomaly detection, event correlation). The dual-audience problem is confirmed as unsolved.

**What changes if the assumption is false:** If universities treat EnergyCAP as a locked-in vendor relationship rather than a replaceable tool, the sales cycle lengthens dramatically. Procurement rules at public universities can require a competitive RFP process to displace a named vendor — a 6–12 month add. The mitigation: do not position Clear Current as an EnergyCAP replacement in early conversations. Position as a layer on top of EnergyCAP — exporting its data into Clear Current for intelligence that EnergyCAP cannot provide. The value proposition works either way; the positioning must match the procurement reality.

**Proof to collect:** In the next pilot conversation with Texas State or UT Austin, ask directly: _"If you wanted to add a new energy intelligence platform, would you need to go through a competitive procurement process, or can you use a departmental discretionary budget?"_ The answer determines the sales motion.

---

### ASSUMPTION 2 — Regulatory Intelligence Is a Buying Trigger, Not Just a Nice-to-Have

**Current assumption:** Phil Combs' enthusiasm and Andi Ault's confirmed use case mean regulatory intelligence drives purchase decisions, not just product satisfaction scores.

**Evidence base for the assumption:** Phil Combs is an M&V engineer and energy services professional — a sophisticated secondary buyer, not a primary budget holder. Andi Ault confirmed the exact problem (budget submitted before rates are final) but did not say she would buy a software tool to solve it. The secondary data (PPL Pennsylvania, AES Ohio, Boston University budget timing) supports the problem's existence but not the willingness to pay for a solution.

**What changes if the assumption is false:** If regulatory intelligence is a delight feature rather than a purchase trigger, the entry product shifts. Billing error detection — despite the identified-vs.-realized gap — remains the clearest commercial hook because it has a calculable dollar figure (even if the recovery process is manual). The module priority recommendation in Section 4 does not collapse entirely — regulatory intelligence would move from entry product to expansion feature — but the fundraise narrative changes: _"We save you money on billing errors"_ becomes the lead, and _"We tell you what is coming before it hits your budget"_ becomes the expansion story.

**Proof to collect:** In the next two university conversations, present the regulatory intelligence use case explicitly. Ask: _"If we could tell you in February what your utility rate case outcome would cost your FY2027 budget, and give you that number before your budget submission deadline, would that be worth paying for as a standalone capability?"_ A yes from two independent budget holders is enough to validate it as a buying trigger.

---

### ASSUMPTION 3 — Arcadia's Migration Distraction Gives Clear Current a 12–24 Month Window

**Current assumption:** Arcadia is occupied with migrating legacy Urjanet/Arc customers for 12–24 months, reducing their capacity to build the higher education vertical and campus chargeback capabilities.

**Evidence base for the assumption:** Job postings confirming the Senior PM's primary responsibility is the migration. No documented higher education customers after 14 months of enterprise sales. Enterprise customer list entirely Fortune 500 corporate.

**What changes if the assumption is false — two variants:**

_Variant A: Arcadia accelerates hiring and closes the migration faster than 12 months._ Their capital position ($649M raised) means they can hire their way out of the migration faster than a resource-constrained startup. If their migration is complete in 6 months rather than 24, the window narrows dramatically. Clear Current needs the campus chargeback moat built — not just designed — before Arcadia could deploy it. The mitigation is speed: the chargeback roadmap must start in month 4 of the pilot phase, not after.

_Variant B: Arcadia decides higher education is not worth the vertical investment._ Their Fortune 500 corporate posture may be a deliberate strategic choice, not a temporary gap. In this case, the window is not 12–24 months — it is indefinite. This is the better scenario for Clear Current and is arguably supported by Arcadia's published customer list and sales motion. But it cannot be assumed without tracking Arcadia's job postings and customer announcements quarterly.

**Proof to collect:** Monitor Arcadia's job postings monthly for higher education vertical hires, campus energy product specifications, or university case study publications. Set a Google Alert. Assign someone to check it. This is a 30-minute-per-month competitive intelligence function with high strategic value.

---

## SECTION 6: 30-DAY DECISION CHECKLIST

_Ranked by urgency. Each item: options, evidence, recommended choice, owner._

---

### DECISION 1 — Investor Narrative: How Do We Frame the $10M?

**Deadline:** Before first May fundraise meeting.
**Options:**

- A: Lead with "$10M in errors identified across 12 pilots" as the headline.
- B: Lead with the number of errors identified and be explicit that the product assists the resolution process, with recovery as the customer's next step.
- C: Wait for a documented recovery before using any dollar figure.

**Evidence:** Marc Spieler raised the identified-vs.-realized gap directly. The CC Engine maturity ladder is explicit: error resolution "assists manual completion — not hands-off resolution." Using Option A without qualification creates a misrepresentation risk if an investor asks the recovery question.

**Recommended choice:** Option B. The $10M is a powerful signal — it proves the detection capability at scale. But pair it with an honest framing: _"Our platform has surfaced $10M in potential billing errors across 12 pilots. Our customers then own the dispute and recovery process — we provide the documentation and analysis to support that process."_ If even one recovery has been documented, lead with that case. Then the $10M is the scale story behind it.

**Owner:** John Reuter. This is a narrative decision with legal framing implications.

---

### DECISION 2 — Pilot Pricing: Savings-Share vs. Flat Fee

**Deadline:** Before next pilot proposal goes out.
**Options:**

- A: Savings-sharing model (percentage of recovered dollars).
- B: Flat fee SaaS pilot ($5K–$15K/90 days).
- C: Hybrid (flat access fee plus optional savings-share on confirmed recoveries).

**Evidence:** Marc Spieler explicitly warned against the savings-sharing trap: it ties revenue to realized outcomes, defers cash, and positions Clear Current as an auditor rather than a platform. Andi Ault's persona — a controller-trained financial executive — will be more comfortable with a predictable SaaS line item than a contingency fee arrangement that looks like a consulting engagement.

**Recommended choice:** Option B. Flat fee SaaS pilot. The savings-sharing model is appropriate for utility auditors who do the full recovery work — Clear Current assists that process but does not do it unattended. Flat fee establishes the right category positioning and generates immediate revenue signal for the fundraise.

**Owner:** John Reuter + Dan Schreiber joint decision with sales motion implications.

---

### DECISION 3 — Security Certification: Start SOC 2 Type II Now or Wait?

**Deadline:** Decision within 30 days; process takes 6–12 months.
**Options:**

- A: Start SOC 2 Type II now.
- B: Wait until an enterprise customer requires it.
- C: Pursue a lighter certification (SOC 2 Type I) as a bridge.

**Evidence:** Phil Combs described IT security as a real adoption gate that blocks even enthusiastic internal advocates. 76% of organizations are actively increasing SaaS security budgets. Commercial utility data is classified as competitively sensitive — IT concerns are not irrational. Enterprise university procurement processes will require it before a multi-year contract is signed.

**Recommended choice:** Option A or C depending on budget. Start the SOC 2 process now. It signals enterprise seriousness in fundraise conversations and removes a late-stage deal killer in the higher education sales cycle. If budget is constrained, a SOC 2 Type I report (point-in-time assessment, faster and cheaper) serves as a credible bridge while Type II (12-month audit period) is in progress.

**Owner:** Jake Masters (CTO) with John Reuter as sponsor.

---

### DECISION 4 — University Target List: Which 5 Institutions Are the 90-Day Pilot Targets?

**Deadline:** Target list confirmed within 30 days to align with the March-to-May buying window.
**Options:**

- A: Focus exclusively on ERCOT-region institutions where billing complexity is highest.
- B: Include one non-ERCOT institution to test market assumptions outside the home court.
- C: Pursue Texas State and UT Austin as warmest relationships plus three ERCOT-region new prospects.

**Evidence:** Texas State and UT Austin are the two warmest relationships in the corpus. Marc Spieler confirmed ERCOT's billing complexity creates a home-court advantage. The May procurement season is the best entry window — gas purchasing decisions happen March–May at both institutions.

**Recommended choice:** Option C. Texas State and UT Austin first. Add three ERCOT-region institutions (Texas A&M, University of Houston, or University of North Texas based on district energy system confirmation) as parallel targets. Do not dilute focus with non-ERCOT institutions until ERCOT is converted.

**Owner:** John Reuter (GTM lead) with specific outreach to Andee Chamberlain and Andi Ault relationships.

---

### DECISION 5 — Regulatory Intelligence Demo: Build or Fake It Before May?

**Deadline:** May fundraise preparation.
**Options:**

- A: Build a working prototype using public PUC docket data for a named Texas utility before the first investor meeting.
- B: Present a concept/wireframe demo with the PPL Pennsylvania or AES Ohio case study as the illustrative example.
- C: Describe the feature in the narrative deck without a demo.

**Evidence:** The PPL Pennsylvania case (filed October 2025, final decision July 1, 2026) is a real, live, traceable rate case where the impact on university budgets can be calculated from public data today. This is a demo that can be built from public sources without a customer relationship. Phil Combs' "super powerful" quote is the customer validation line.

**Recommended choice:** Option A or B depending on engineering bandwidth. If Jake Masters can allocate 40–60 hours to a prototype, build it — a working demo beats a slide every time. If not, Option B with the PPL Pennsylvania case study is a credible investor narrative. Option C is a missed opportunity given the confirmed white space.

**Owner:** Dan Schreiber (product) + Jake Masters (engineering) decision.

---

### DECISION 6 — The Chargeback Roadmap: Commit or Defer?

**Deadline:** Within 30 days for roadmap planning; not urgent for May fundraise.
**Options:**

- A: Formally commit campus chargeback to the roadmap as a post-pilot priority (months 4–9).
- B: Treat it as a future consideration after the beachhead is established.
- C: Build it now as the primary product bet.

**Evidence:** Campus chargeback is the highest-switching-cost feature in the higher education vertical but is not the entry product. EnergyCAP's chargeback capability is its stickiest feature and its most complained-about. No AI-native competitor offers it. The moat requires district energy cost allocation logic that Arcadia has never built.

**Recommended choice:** Option A. Formally commit it to the roadmap for months 4–9. It should appear in the investor deck as _"expansion feature in development for launch to pilot cohort customers"_ — not as a current capability, but as the designed retention mechanism. Option C diverts engineering from the entry product. Option B risks losing the moat-building window.

**Owner:** Dan Schreiber (product roadmap).

---

## SECTION 7: THE SINGLE MOST IMPORTANT THING

**Get one documented recovery before the May fundraise.**

Not a statistic. Not a pilot. Not a narrative. One customer. One billing error. One utility credit issued. One dollar amount with a name attached to it.

Everything else in this research brief — the dual-audience architecture, the regulatory intelligence white space, the Arcadia competitive window, the university buying calendar — is a story about potential. The identified-vs.-realized gap is the single largest risk to the May raise and to every enterprise sales conversation that follows.

Marc Spieler asked the question. Every investor in the diligence meeting will ask the same question. Every university procurement committee will ask it. The answer that closes deals is not "$10M in errors identified." The answer that closes deals is: _"We found a $47,000 billing error at [Institution]. They disputed it with their utility using our documentation. The credit was issued 60 days later. Here is the letter."_

If that recovery exists, document it this week.

If it does not exist yet, make it your operational priority for the next 30 days — above fundraise preparation, above product roadmap, above competitive positioning. Because without it, you are selling the detection and they are buying a story about the resolution. That gap will cost you deals and delay your close.

One documented recovery changes the entire narrative. Get it.

---

## IMPLICATIONS FOR CLEAR CURRENT (tagged)

- **[FITS CURRENT PRODUCT]** The Push to User dashboard tier is validated as the primary value delivery mechanism for reactive buyers across all verticals. EnergyCAP's failure to serve both energy ops and finance personas is a documented, named gap — Dan's three-tier architecture is the direct solution. Prioritize the finance-facing dashboard alerts (anomaly flagging, budget variance) as the first expansion of the dashboard tier.

- **[FITS CURRENT PRODUCT]** Billing error detection (Rate Analyst, spot errors) is validated as the entry hook across all verticals. The FERC/RI PUC/Harvard Law citation chain is the correct investor framing — not vendor survey statistics. Use government enforcement language, not auditor marketing language.

- **[FITS CURRENT PRODUCT]** The chat tier (React to User) serves the Phil Combs / Andee Chamberlain analyst persona — energy managers who ask expert-level questions and want faster, more insightful answers than their Excel workbooks provide. This audience is real and documented. The chat tier is not, however, the primary value delivery mechanism for the finance persona — push signals are.

- **[FITS CURRENT PRODUCT]** The three-tier delivery model maps precisely to the dual-audience finding: chat for the energy analyst, push dashboard for the finance director. This is not an abstract architecture — it is the exact product-market fit solution to a documented, cross-validated buyer problem. This framing should appear in every sales conversation and investor presentation in the higher education vertical.

- **[EXTENDS ROADMAP]** Regulatory intelligence layer inside Rate Analyst: PUC docket monitoring, quantified rate case impact against customer consumption profile, delivered as a Push to User alert before budget deadlines. No named competitor. Confirmed buyer demand (Phil Combs + Andi Ault). Demonstrable with public data before the May fundraise. This is the highest-leverage new engineering investment in the corpus.

- **[EXTENDS ROADMAP]** Campus chargeback and district energy cost allocation logic for the higher education vertical. EnergyCAP's stickiest and most-complained-about feature. No AI-native competitor has built it. Arcadia has never built district energy allocation logic. Recommended for months 4–9 as the pilot-to-expansion conversion mechanism. Not the entry product — the retention moat.

- **[EXTENDS ROADMAP]** Finance-facing budget protection workflow: a structured output (not just chat) that quantifies pending rate case impacts against a university's fiscal calendar. Specifically: a February alert tied to the March budget submission deadline at public universities. This is the Andi Ault use case — a Push to User dashboard behavior that requires no user action and delivers calculable ROI before the budget is locked.

- **[EXTENDS ROADMAP]** Event correlation analysis for campus energy consumption — _"If somebody had an event at our university event center on a Saturday, how did that impact our consumption?"_ (Texas State interview, James Norton). This is a React to User chat capability that extends the current tariff/contract engine into operational event analysis. Lower priority than regulatory intelligence but high value for the energy manager persona.

- **[NET NEW / RESEARCH-ONLY]** Campus water billing complexity as a parallel entry point. Andee Chamberlain flagged water as increasingly complex and expensive — Texas State operates its own wells with tightening drought restrictions. No secondary research on commercial water billing error rates exists in the corpus, and no competitor has been documented addressing this. Flag for future primary research; do not invest engineering resources without primary buyer validation.

- **[NET NEW / RESEARCH-ONLY]** Channel partnership with ENGIE Impact, Get Choice, or NG Insight as the API/intelligence layer underneath existing bill processors. Morgan Chen's analysis identified this as the structural opportunity: ENGIE has the data, Clear Current has the intelligence layer, neither has both. This is a directionally compelling GTM track (Marc Spieler's "license to ERP/billing platforms" option) but has not been validated by a direct buyer or channel partner conversation. Requires a dedicated channel discovery interview before investment.

- **[NET NEW / RESEARCH-ONLY]** Water utility billing anomaly detection as a distinct module extension. No secondary research confirms this is a buying trigger — Andee Chamberlain's mention is a single primary signal. Tag for future validation.

---

_This brief was prepared by the CDL Texas MBA Consulting team (Clayton Hester, Jason Wisnieski, Adam Case, Victor Pan) integrating primary and secondary research conducted April–May 2026. All verbatim quotes are attributed to named individuals at named organizations. Summary inferences are flagged where they extend beyond transcript evidence. The identified-vs.-realized gap language in Sections 1, 2, and 7 reflects the CC Engine's honest maturity ladder description and does not imply any limitation on future product development._

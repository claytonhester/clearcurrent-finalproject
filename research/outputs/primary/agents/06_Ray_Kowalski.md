# Agent: Ray Kowalski | Facilities Operations Veteran

# Run: 2026-04-17T14:12:30.339123

---

# RAY KOWALSKI ANALYSIS

## Practitioner-Level Energy Management Experience | Anomaly Detection & Response

### Clear Current Technologies — Primary Research Corpus Analysis

_Prepared for John Reuter (CEO) and Dan Schreiber (CPO)_

---

Let me tell you something before I start. I've sat at that desk. I've opened that bill at 7am. I've spent three days figuring out why a number was wrong. This research corpus is describing real people with real problems, and the fieldwork team did exceptional work capturing them. My job is to honor that by being precise about what it actually means for Clear Current's product and go-to-market.

---

## 1. WHAT I FOUND — Complete Evidence Inventory

**Don Johnson Transcript (Trane Technologies, El Paso TX)**
Contains: The foundational framing for the "Fake Energy Manager" versus real practitioner distinction. Johnson's observation that most clients "just pay" their bills without understanding them is the conceptual anchor for this entire analytical task. He provides specific technical content on demand ratchets, power factor penalties, rate tier misalignment, and time-of-use transition risk — all categories of billing errors or missed savings that a practitioner would catch and a Fake Energy Manager would miss. His description of the El Paso Electric workflow — profiling customer energy use, meeting periodically, offering reduction ideas — is the closest thing to a job description for the energy analyst role that Clear Current is partially automating. His comment about wanting to "generate me an energy profile" and "pinpoint when they had their highest peak demand" is a direct product requirement statement.

**Phil Combs Summary (Trane Technologies, Pueblo CO)**
Contains: The single most technically precise description of the daily practitioner workflow in the entire corpus. 10-15 minutes per meter for data extraction. 2 hours of manual work per month for a 12-meter client. Excel as the real daily driver. The "tyranny of the urgent" framing for why clients never engage proactively. The statistical rigor standard — not just threshold flagging, but anomaly detection with statistical significance. The regulatory intelligence concept as a killer feature. The monetization imperative: "nobody cares until you put a dollar sign on it." The bill format variation problem as the historical technical barrier to AI adoption. Phil's 20 years at Trane and his M&V background give his process descriptions the highest technical credibility of any interviewee.

**Texas State University Transcript (Andee Chamberlain, Carl Teague, James Norton)**
Contains: The most concrete description of the moment of anomaly discovery in the entire corpus. Andee's wastewater bill multiplier example — 3,500 gallons to 35,000 gallons — is a practitioner describing exactly the type of error that gets caught manually weeks after it appears. James Norton's statement about wanting to know about anomalies "right away" is the clearest articulation of the alerting need. Carl Teague's event-correlated consumption concept is a secondary insight. The 1,500-meter environment is the operational context for why manual review fails. The EnergyCAP gap description — promises more than it delivers — is competitive intelligence about the incumbent. The departure of the 10-15 year bill processor is a specific, repeatable organizational vulnerability that creates the engagement trigger moment.

**Texas State University Summary**
Contains: Analytical synthesis of the TX State interview. Confirms the "Spot Errors" use case as a lead capability. The data tension between Andee (wants demand/usage data) and the finance team (wants cost/variance) is a dual-audience insight with product implications. The cost recovery model insight — charging by square footage limits conservation behavior — is a downstream ROI story. The district energy metering complexity provides context for why anomalies are hard to detect in institutional settings.

**Sean Sevy Transcript (Houston Methodist, Houston TX)**
Contains: A 35-year arc of energy management evolution from pneumatics to AI — the best historical context for understanding where Clear Current sits in the practitioner's mental model. Sean's Energy Print usage is the most direct competitor reference in the healthcare segment. His description of Energy Print's forecasting weakness — inability to model growth — is a specific product gap. The power factor anomaly case (79-81% at a campus that shouldn't be that low) is a live example of a billing/metering error that took expert interpretation to identify as potentially a meter malfunction rather than an equipment problem. His broker (Prism Energy) provides cursory invoice review — meaning there's a human layer between the bills and Sean, and it's still missing things. "Minimal errors" is his assessment — but the power factor case contradicts that confidence somewhat.

**Sean Sevy Summary**
Contains: Synthesis of the Houston Methodist interview. The "billing verification layer on top of building automation" framing is the clearest product positioning insight for the healthcare practitioner context. The 35-year arc summary is well-organized. The growth modeling gap is clearly articulated. The broker-plus-platform stack description (Prism Energy + Energy Print) gives Clear Current the competitive landscape it's entering in Houston-area healthcare.

**Intermountain Health Summary (Ross Snow, Matt Wilson, Bart Peacock)**
Contains: The most sophisticated energy operation in the corpus — 14 people, SkySpark, 14 billion data points, ROC monitoring 24/7. Critical because it defines the ceiling of internal capability and reveals where even the best internal operation still has gaps. The $40K to $140K utility bill spike that was missed by a third party and caught by an accountant is the single most damning piece of evidence for the billing anomaly detection use case. Ross's framing — "a third party should have flagged that — they didn't" — is the exact indictment of the incumbent that Clear Current can own. The bottleneck-is-boots-on-the-ground insight is important scope clarity: Clear Current is supply-side, not demand-side. The blue-collar shortage observation is broader market context for why building problems persist longer than they should — making early billing signals more valuable.

**AdventHealth Transcript (John Culver, Scott Sukits)**
Contains: The most direct, unprompted articulation of Clear Current's value proposition in the entire corpus, from John Culver: "it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it." This came without any prompting from a buyer who uses ENGIE Impact and is dissatisfied. Scott's meter-to-dashboard automation wish is the second major product direction signal. The 1,000-2,000 bills per day volume establishes the operational scale. The 73 different utility providers across 9 states establishes the format heterogeneity problem. The cybersecurity barrier (2.5 years of IT approval hell for BrainBox AI) is the most detailed account of enterprise AI adoption friction in the corpus. The "garbage in, garbage out" concern is the data quality threshold that must be cleared before any AI analytics are credible to this buyer. The non-profit tax exemption gap is a concrete, dollar-quantifiable billing error type.

**AdventHealth Summary**
Contains: Analytical synthesis including the meter-to-address reconciliation problem, the ENGIE Impact capability gap analysis, the capital budgeting timing problem, and the Allegra Wiesler follow-up recommendation. The "foundational" framing for data integrity — "you can't move forward if you don't know that information" — is important for product sequencing.

---

## 2. KEY FINDINGS

**Finding 1: The Real Energy Manager Spends Most of Their Time on Tasks That Don't Require Their Expertise**

Phil Combs described 10-15 minutes per meter just to pull, enter, and review data from a utility bill. For a 12-meter client, that's two hours of manual data collection before analysis even begins. This isn't energy management — it's data entry. The expertise Combs brings (CMVP, CEM, PMVA, 30+ years) is being consumed by work that a clerk could do. Clear Current's automation of this layer is not a convenience feature — it's a reallocation of scarce expert time from data collection to actual problem-solving. _Source: Phil Combs Summary._

**Finding 2: Anomaly Discovery Is Reactive, Late, and Accidental — Not Systematic**

Across four distinct cases in the corpus, anomalies were discovered late and through manual or accidental means, not proactive monitoring:

- Texas State: A wastewater multiplier error — 3,500 gallons to 35,000 — caught through periodic manual bill review, not automated alerting. _Source: TX State Transcript, Andee Chamberlain_
- Intermountain Health: A utility bill that jumped from ~$40,000 to ~$140,000 was missed by a third-party processor and caught by an internal accountant. _Source: Intermountain Summary_
- Houston Methodist: A power factor reading of 79-81% at a campus — which Sean Sevy suspects is a meter malfunction, not an actual equipment problem — is being investigated now, with no indication of when it first appeared or how long it persisted. _Source: Sean Sevy Transcript_
- AdventHealth: Bills mismatched to wrong addresses — consumption occurring at one site, bill paid at another — discovered not through systematic audit but through case-by-case investigation. _Source: AdventHealth Transcript, John Culver_

The pattern is unmistakable: current systems do not reliably surface anomalies. They require humans to notice them, and humans are busy.

**Finding 3: The "Tyranny of the Urgent" Is Not Metaphor — It Is the Structural Condition of the Job**

Phil Combs characterized his clients as "firefighting — tyranny of the urgent. They're the people keeping the wheels on the car day-to-day." John Culver at AdventHealth confirmed this from inside: "Facilities directors within AdventHealth are so busy with day-to-day emergent issues that keeping the lights on is not their main focus." James Norton at Texas State expressed the downstream consequence: the desire to know about anomalies "right away" before they become expensive. The implication is that any tool requiring practitioners to proactively log in and explore will fail. The product must push, not wait. _Sources: Phil Combs Summary; AdventHealth Transcript; TX State Transcript._

**Finding 4: The Moment of Bill Discovery Is a Vulnerability Window, Not a Workflow**

Andee Chamberlain at Texas State explicitly said: "Yes, but not regularly. It's really complex. I'm grateful I don't have to do it monthly." This is a senior utilities professional describing her own discomfort with the primary document in her domain. Sean Sevy at Houston Methodist relies on a broker (Prism Energy) to do cursory invoice review, then uses Energy Print for trend tracking — he described the errors as "minimal" but then described an active power factor anomaly investigation that suggests they exist but aren't being systematically identified. John Culver at AdventHealth uses ENGIE Impact primarily as a bill payment processor, not an analytics layer. The common thread: the bill itself is avoided, delegated, or incompletely analyzed across every organization in this corpus. _Sources: TX State Transcript; Sean Sevy Transcript; AdventHealth Transcript._

**Finding 5: Bill Format Heterogeneity Is the Technical Barrier That Has Prevented Every Previous AI Solution From Working**

Phil Combs stated this directly: "Utilities are still so varied and different... what they put on a bill and the format they put it on a bill, it can just vary. There's just basic things that anybody in our field should be able to go out and find and extract and pull real quick. But it's so different that [earlier AI tools] really stumbled with it." John Culver at AdventHealth faces 73 different utility providers across 9 states, each with different terminology — "on-peak, off-peak, discounted off-peak, super off-peak, extreme on-peak — those are all actual names for things." This is not a niche problem. It is the fundamental reason manual human review has persisted despite decades of automation pressure. _Sources: Phil Combs Summary; AdventHealth Transcript._

**Finding 6: The Monetization Gap — Energy Insight Without Dollar Translation Is Ignored**

Phil Combs stated this as emphatically as anything in the corpus: "There's all this stuff where you go in and figure out how a facility or how equipment's using energy. But then it's like nobody cares until you monetize it. 'So what?' It's like, well, if you do this, here's your return on investment. Does that interest you?" This maps directly to what James Norton identified as a barrier to conservation at Texas State — departments charged by square footage have no financial incentive to reduce consumption because the cost signal doesn't reach them. And it maps to John Culver's need to "present to chief financial officers" to compete for capital. Every alert that doesn't include a dollar figure is noise to a non-energy executive. _Sources: Phil Combs Summary; TX State Transcript; AdventHealth Transcript._

**Finding 7: The Internal Champion Problem — Energy Managers Need Shareable Intelligence, Not Just Personal Insights**

Phil Combs identified the decision hierarchy from 20 years of enterprise sales: energy managers and sustainability directors are the internal advocates; directors of facilities are motivated by cost; CFOs and CEOs will only act if the internal champions build a compelling case. John Culver at AdventHealth described this from the inside: "we have the job of trying to not be the boys who cried wolf, but say: here's what we suggest we do, and here's the benefits to doing so beyond just avoiding a catastrophe." Scott Sukits at AdventHealth wants data that automatically populates dashboards so that anomalies are self-evident without requiring explanation. The product must generate outputs that a practitioner can hand to a CFO without translation. _Sources: Phil Combs Summary; AdventHealth Transcript._

**Finding 8: Data Quality and Attribution Is the Prerequisite — Analytics on Bad Data Are Worse Than No Analytics**

John Culver at AdventHealth identified the most basic automation wish: "that the bills and the therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time." Not an analytics feature. Not an AI capability. Basic data accuracy. Scott Sukits' automation wish was also foundational: automatic ingestion from meters to dashboard. Both John and Scott explicitly rejected "AI layered on top" as a solution — "what we are finding is that is not the case." The Intermountain team's data story reinforces this: they have 14 billion data points in SkySpark, but the utility billing anomaly ($40K to $140K) still slipped through a third-party processor. _Source: AdventHealth Transcript, both speakers; Intermountain Summary._

**Finding 9: The Exit of Institutional Knowledge Is a Repeatable and Underappreciated Engagement Trigger**

Texas State lost a 10-15 year bill processing employee and is "scrambling." Andee Chamberlain said they will "probably outsource that." This is not a Texas State-specific event — it is a demographic and operational pattern. Long-tenured practitioners carry institutional knowledge (rate history, meter quirks, building-specific consumption baselines, vendor relationships) in their heads. When they leave, that knowledge leaves with them. Clear Current's pitch for this moment: "We're the system that doesn't forget." _Source: TX State Transcript; TX State Summary._

**Finding 10: Healthcare Has a Unique Security Barrier That Creates Opportunity for Clear Current's Specific Positioning**

Scott Sukits has spent 2.5 years trying to get BrainBox AI through IT approval because any building controls tunnel is a potential HIPAA exposure. This blocks an entire category of AI tools — the BAS-integrated, inside-the-meter AI layer. Clear Current reads utility bills, not building controls networks. It creates no patient data exposure. This distinction is not obvious to hospital IT departments — it must be made explicit and early in the sales motion. The positioning is: "We're in the same category as your bill pay processor, not in the same category as your BAS vendor." _Source: AdventHealth Transcript, Scott Sukits._

**Finding 11: Sophisticated Buyers Are Already Using Third-Party Platforms and Finding Them Insufficient**

Every large organization in this corpus is already using something: EnergyCAP (Texas State), Energy Print (Houston Methodist), ENGIE Impact (AdventHealth), SkySpark (Intermountain). These are not unsophisticated buyers discovering energy management for the first time. They are experienced users of incumbent platforms who can articulate exactly what their current tools cannot do. This means Clear Current enters conversations where the prospect already understands the category, has already paid for a solution, and has a list of specific gaps. The competitive motion is displacement and supplementation, not education. _Sources: TX State Summary; Sean Sevy Summary; AdventHealth Summary; Intermountain Summary._

**Finding 12: The Demand Ratchet Problem Is Underappreciated, Expensive, and Detectable from Bills Alone**

Don Johnson described demand ratchets in specific, concrete terms: "if your highest peak during summer months is 1,000 kW, your minimum demand charge for the next 11 months is 75% of that, so 750 kW, even if you only use 500." Sean Sevy confirmed that demand charge management has been a strategic focus at Houston Methodist since the 1990s. The ratchet mechanism means a single peak event propagates into 11 months of inflated billing — and that propagation is detectable in billing data even without building system access. An AI that catches a ratchet-triggering event and forecasts its 11-month cost impact is doing genuine financial work that current tools don't do automatically. _Sources: Don Johnson Transcript; Sean Sevy Transcript._

---

## 3. VERBATIM QUOTES THAT BELONG IN THE DELIVERABLES

**Quote 1**
_"A lot of them just don't understand even the rate they're on."_
— Don Johnson, CEM, Senior Account Manager, Trane Technologies | Don Johnson Transcript

**Why it matters:** This is the foundational statement of the entire problem. From a 28-year industry veteran who spent 9 years at a utility company talking directly with commercial customers. If customers don't know their own rate structure, every downstream analysis starts from a position of ignorance. This belongs in the opening framing of any product pitch or investor material as the "size of the problem" statement.

---

**Quote 2**
_"Time per meter approximately 10-15 minutes per meter to pull, enter, and review the appropriate data from a utility bill. For a client with 12 meters, that's roughly two hours of manual work per month on data collection alone."_
— Phil Combs, CMVP/CEM, Senior Digital Services Engineer, Trane Technologies | Phil Combs Summary

**Why it matters:** This is the most precise quantification of practitioner time waste in the corpus. Two hours per month per 12-meter client, before any analysis begins. Multiply by the typical portfolio size and you get the hours-saved ROI case for automation. Use this as the "before" state in the journey map.

---

**Quote 3**
_"A lot of clients unfortunately are firefighting — tyranny of the urgent. They're the people keeping the wheels on the car day-to-day. Even though there's the strategy that we always talk about, they're just a lot of times dealing with this piece of equipment broke, or tenants moving in or moving out."_
— Phil Combs, CMVP/CEM, Senior Digital Services Engineer, Trane Technologies | Phil Combs Summary

**Why it matters:** This is the structural explanation for why proactive energy management fails — not because practitioners lack capability, but because operational fires consume all available attention. This quote belongs in the design rationale for the push-alert architecture: the tool must interrupt, not wait.

---

**Quote 4**
_"We had a weird multiplier happen on one of our wastewater bills. That's why you keep auditing your bills. If you're typically spending 3,500 gallons a month and now it's 35,000, something's wrong. The software will throw flags but then you have to dig into it manually."_
— Andee Chamberlain, Senior Associate Director, Utilities & Energy Management, Texas State University | TX State Transcript

**Why it matters:** This is the practitioner describing the exact moment of anomaly discovery — and noting that current software throws flags but still requires manual investigation. Two parts of the journey map: the detection gap (software flags it) and the resolution gap (human still has to dig). Clear Current should close both.

---

**Quote 5**
_"If we're typically using X amount of energy at a certain building and it suddenly increases, that would be the biggest thing we'd want to know about right away. It could mean there's a leak or maybe the space is being used differently."_
— James Norton, Utilities & Energy Management (Operations/Service), Texas State University | TX State Transcript

**Why it matters:** This is the clearest single-sentence statement of the anomaly alerting need in the corpus. "Right away" is the key phrase — not weekly, not monthly, not when I log in. The urgency matches the consequence (leak, unauthorized use). This is the headline requirement for the alerting module.

---

**Quote 6**
_"A third party should have flagged that — they didn't."_
— Ross Snow, Director of Energy Management, Intermountain Health | Intermountain Summary

**Why it matters:** This is the exact indictment of the incumbent model. From the director of the most sophisticated hospital energy program in the corpus — 14 people, SkySpark, 14 billion data points — still having a $100,000 billing spike fall through because the third-party processor didn't catch it. The "should have" framing establishes Clear Current's responsibility: this is a known, expected function that current tools are failing to perform.

---

**Quote 7**
_"NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great."_
— John Culver, Corporate Sustainability, AdventHealth | AdventHealth Transcript

**Why it matters:** This is the single most perfect unprompted articulation of Clear Current's value proposition in the entire corpus. It came without a product description prompt, from a buyer who is actively dissatisfied with their current tool, at a 55-hospital system. "Interpret what's on the bills" + "tell us why we should care" + "what we can do to change it" is three feature layers described in one sentence. This quote belongs in investor materials, in the product module section, and in any healthcare sales conversation.

---

**Quote 8**
_"It would be that the bills and the therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time. Which sounds basic, but again, with an organization this size and that grows, matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational. You can't move forward if you don't know that information."_
— John Culver, Corporate Sustainability, AdventHealth | AdventHealth Transcript

**Why it matters:** "Foundational" is the operative word. This buyer is not asking for AI. He is asking for data hygiene. The product must solve this first. Trying to sell anomaly detection to a system where bills don't reliably match addresses is selling the third floor before the foundation is poured.

---

**Quote 9**
_"There's all this stuff where you go in and figure out how a facility or how equipment's using energy. But then it's like nobody cares until you monetize it. 'So what?' It's like, well, if you do this, here's your return on investment. Does that interest you?"_
— Phil Combs, CMVP/CEM, Senior Digital Services Engineer, Trane Technologies | Phil Combs Summary

**Why it matters:** The "So what?" is the killer question that every anomaly alert must answer automatically. Not "your demand spiked" — "your demand spike cost you $4,200 this month and will propagate a ratchet charge of $3,100 per month for the next 11 months if your peak was above your ratchet threshold." This quote is the design specification for every alert notification.

---

**Quote 10**
_"One of my issues is being on the utility side. I care more about the demand and the information about our usage, but the bill processing folks care more about the bottom line numbers, like how much did it cost and how much did it cost last month? And so we're competing about what kind of data we get from that."_
— Andee Chamberlain, Senior Associate Director, Texas State University | TX State Transcript

**Why it matters:** There are two different users at the same organization who need different things from the same bills. The energy manager needs consumption data. Finance needs cost data. Both are served by the same platform — but they're currently competing for priority. Clear Current's dual-audience design isn't a feature request; it's a resolution to a documented internal organizational conflict.

---

**Quote 11**
_"Their forecasting tool is a little bit weaker. I know there's better opportunities, especially with AI integration, better AI models that'll help with forecasting. And where we struggle is we're a system that grows a lot."_
— Sean Sevy, Director of Operations, System Facilities, Houston Methodist | Sean Sevy Transcript

**Why it matters:** This is a current platform user (Energy Print) identifying a specific, named gap: growth modeling. Static trend extrapolation fails for organizations adding campuses. This is an actionable product gap that no current platform addresses well, and it's coming from an active buyer who would upgrade if the feature existed.

---

**Quote 12**
_"Utilities are still so varied and different... There's just basic things that anybody in our field should be able to go out and find and extract and pull real quick. But it's so different that [earlier AI tools] really stumbled with it."_
— Phil Combs, CMVP/CEM, Senior Digital Services Engineer, Trane Technologies | Phil Combs Summary

**Why it matters:** Phil is describing the technical reason every previous attempt at AI-powered bill analysis failed. He's also implicitly describing the minimum technical bar Clear Current must clear before any practitioner will trust it. "Earlier AI tools really stumbled" means trust must be earned, not assumed. Every interaction where the platform correctly parses a format that previous tools couldn't handle is a trust-building moment.

---

**Quote 13**
_"I've been trying to implement it at a medical office building for 2 and a half years now. And I've been working with our IT folks for that long to try to get it pushed through. And it's just question after questionnaire after questionnaire before they'll even consider approving it."_
— Scott Sukits, Director of Control Systems & Energy Management, AdventHealth | AdventHealth Transcript

**Why it matters:** This describes the exact IT barrier that kills enterprise AI sales in healthcare. 2.5 years for a building automation AI product. Clear Current must preemptively differentiate itself: "We are not a building controls system. We analyze invoices. No patient data is involved." The faster this is established, the shorter the approval timeline.

---

**Quote 14**
_"I have no doubts — as things have gone along now it's light years different in the capability to not only do the OCR part, but then the insights it'll get."_
— Phil Combs, CMVP/CEM, Senior Digital Services Engineer, Trane Technologies | Phil Combs Summary

**Why it matters:** Phil Combs — the most technically credentialed practitioner in the corpus, with explicit knowledge of why previous AI tools failed — is saying current LLM technology has closed the gap. This is the technical credibility endorsement that validates the entire Clear Current thesis. From a CMVP who has used the Abraxas Option C system for M&V work. His bar is high. His confidence is meaningful.

---

**Quote 15**
_"As a not-for-profit, we shouldn't pay taxes. As a company that has lots of different sites that are coming and going within our portfolio through mergers and acquisitions or new builds or divestments, we need them to turn on and turn off their analytics faster."_
— John Culver, Corporate Sustainability, AdventHealth | AdventHealth Transcript

**Why it matters:** Two specific, actionable billing audit use cases in one sentence: non-profit tax exemption verification (dollar-quantifiable error category) and M&A portfolio change management (recurring operational need at growing health systems). These are not conceptual features — they are documented gaps in what AdventHealth's current ENGIE Impact contract delivers.

---

## 4. DELIVERABLE BUILD GUIDANCE

### 4A. ANOMALY DETECTION & RESPONSE JOURNEY MAP

This is the core deliverable. Build it as a horizontal swimlane map across five stages: **Event Occurs → Bill Arrives → Review Happens → Anomaly Detected → Response Taken**. What follows is the construction specification, sourced entirely from the corpus.

---

**Stage 1: EVENT OCCURS**
_The underlying problem happens — equipment failure, meter malfunction, rate change, erroneous billing, demand ratchet trigger_

- **What happens:** A meter multiplier error appears on a wastewater bill. Or a utility hikes rates mid-cycle. Or a demand spike exceeds the ratchet threshold. Or a power factor meter starts misreporting. Or a contractor moves thermostats into a mechanical room and the system starts overcooling. None of these events generate an automatic notification to anyone.
- **Who knows:** Nobody yet.
- **Key evidence:** Andee Chamberlain's wastewater multiplier (TX State Transcript). Sean Sevy's power factor anomaly (Sean Sevy Transcript). Scott Sukits' thermostat story (AdventHealth Transcript — the "garbage in, garbage out" case). Ross Snow's $40K to $140K spike (Intermountain Summary).
- **Map annotation:** Draw this stage in red. Label it: "The problem exists. Nobody knows yet. The clock is running."

---

**Stage 2: BILL ARRIVES**
_The monthly bill lands — in a stack, in an inbox, routed to accounts payable_

- **What happens at a large system:** 1,000-2,000 bills arrive per day at AdventHealth (Culver, AdventHealth Transcript). They go to a third-party processor (ENGIE Impact at AdventHealth, Prism Energy at Houston Methodist). The processor pays the bill.
- **What happens at a medium institution:** Bills land with a dedicated processor or AP team member. At Texas State, a 10-15 year employee handled this — until she left (Chamberlain, TX State Transcript).
- **What happens at the practitioner level:** The energy manager is not looking at the bill. Phil Combs: "Time per meter approximately 10-15 minutes per meter to pull, enter, and review." But only if he has the time. "It can be time intensive, so it depends on how my day goes" (Don Johnson, Don Johnson Transcript).
- **Who is looking:** AP staff focused on payment, not analysis. Third-party processors focused on processing, not intelligence.
- **Map annotation:** This is where the gap opens. Label it: "Bill paid. Analysis deferred."

---

**Stage 3: REVIEW HAPPENS (OR DOESN'T)**
_The energy manager attempts to engage with billing data — when and if they have bandwidth_

- **Current tools in use:** EnergyCAP (TX State — but bill processing module not currently in use), Energy Print (Houston Methodist — used for trend tracking and benchmarking, not deep audit), ENGIE Impact (AdventHealth — "they do great job of paying"), SkySpark (Intermountain — for building systems, not billing).
- **Current workflow:** Excel spreadsheets. Pivot tables. Month-by-month manual entry. "Excel spreadsheets the primary tool for day-to-day energy analysis" (Phil Combs Summary). "It can be time intensive, so it depends on how my day goes" (Don Johnson Transcript).
- **How it competes for time:** Everything competes with it. "Facilities directors within AdventHealth are so busy with day-to-day emergent issues that keeping the lights on is not their main focus" (Culver, AdventHealth Transcript). "Tyranny of the urgent" (Phil Combs Summary).
- **Map annotation:** Draw a branching path here. Branch A: "Review happens this month — practitioner has bandwidth." Branch B: "Review skipped — operational fire, no time." Statistically, Branch B is more common.

---

**Stage 4: ANOMALY DETECTED**
_The error, spike, or opportunity is identified_

In the **current state**, detection happens by:

- **Human pattern recognition during manual review:** Andee Chamberlain notices 3,500 → 35,000 gallons. "That's why you keep auditing your bills" (TX State Transcript). This is experience-dependent and inconsistent.
- **Accountant catches a cost spike:** Intermountain's $40K → $140K case. Not an energy professional. Not systematic. (Intermountain Summary)
- **Broker provides cursory review:** Prism Energy at Houston Methodist catches "calculation issues" — but missed or didn't flag the power factor anomaly Sean is currently investigating (Sean Sevy Transcript).
- **Software flags it:** "The software will throw flags but then you have to dig into it manually" (Chamberlain, TX State Transcript). Current tools detect but don't resolve.
- **Never detected:** The worst case — errors that persist for months or years without anyone catching them.

In the **Clear Current state**, detection should be:

- Automated, every bill, every month
- Statistical significance standard, not just threshold flagging: "Where do you see any statistically significant variation month to month?" (Phil Combs Summary)
- Pushed to the user without requiring log-in: "The dashboard must push alerts and the autonomous agent must surface issues without being asked" (Phil Combs Summary)

**Map annotation:** This stage is the core product intervention. Label current state: "Detected by accident, expert availability, or not at all." Label future state: "Detected automatically, every cycle, with statistical rigor."

---

**Stage 5: RESPONSE TAKEN**
_The practitioner acts on the identified anomaly_

- **What response looks like in practice:** Call the utility. Challenge the bill. Adjust controls. Submit a rate change request. Commission a power factor study. None of these steps are in Clear Current's scope — they are all downstream of the alert.
- **What Clear Current should hand off:** Not just "anomaly detected" — but "anomaly detected, estimated cost impact $X, recommended action Y, here is the specific line item on the bill." Phil Combs: "nobody cares until you monetize it" (Phil Combs Summary).
- **The internal champion handoff:** John Culver needs to present to CFOs and CEOs to compete for capital. The response to a Clear Current alert should generate a shareable document — not just a dashboard view. Phil Combs: "energy manager to explain it to the end user... understand it without flipping through a bunch of pages" (Don Johnson Transcript, describing what Don himself wants from a tool).

**Map annotation:** Label the gap here: "Detected, but practitioner still has to manually build the case for action." Label the Clear Current improvement: "Detected, monetized, and packaged for internal champion presentation automatically."

---

### 4B. ANOMALY DETECTION + ALERTING PRODUCT MODULE RECOMMENDATION

**Module Name:** ANOMALY DETECTION + ALERTING (working title: "Bill Watch")

**Core Design Principles — Sourced from the Corpus:**

1. **Push, don't wait.** The module must proactively surface alerts without user-initiated sessions. The practitioner will not log in to discover problems. Phil Combs: "they're just a lot of times dealing with this piece of equipment broke." (Phil Combs Summary). This is the non-negotiable architectural requirement.

2. **Statistical significance, not just threshold.** Phil Combs explicitly asked for: "Where do you see any statistically significant variation month to month?" (Phil Combs Summary). The difference between a threshold flag and a statistically significant anomaly is the difference between noise and signal. Practitioners will tune out a tool that flags 20 things per month. They'll trust one that flags 2-3 real issues.

3. **Every alert includes a dollar figure.** Phil Combs' "So what?" is the test every alert must pass (Phil Combs Summary). The alert notification should read: "Campus B electric bill: $140,000 this month vs. $40,000 average. Estimated overbilling or anomalous usage: $100,000. Action required." Not: "Unusual bill detected."

4. **Anomaly types to detect — sourced directly from practitioner testimony:**
   - Multiplier errors (Chamberlain, TX State: 3,500 → 35,000 gallons)
   - Demand spike above ratchet threshold (Johnson, Don Johnson Transcript: the 600kW trigger for large power service rate)
   - Demand ratchet cost propagation alert (Johnson: 75% of peak demand charged for 11 months)
   - Power factor billing anomaly (Sevy: 79-81% power factor — "that is unheard of nowadays"; Johnson's first unprompted feature request)
   - Rate classification errors (Johnson: customers at pivot points between rate tiers who should be on a different rate structure)
   - Tax charges on non-profit accounts (Culver, AdventHealth: "as a not-for-profit, we shouldn't pay taxes")
   - Consumption-address mismatch (Culver: "that electron went into that site on this date")
   - Year-over-year cost spikes that aren't explained by rate changes (Combs' consumption vs. cost disconnect — Phil Combs Summary)
   - Inactive meter still receiving charges (implied by Culver's portfolio change management gap)

5. **Tiered alert severity.** Not all anomalies are equal. Build a severity tier:
   - **Immediate** (same-day alert): Cost spike ≥ X%, potential billing error, ratchet threshold exceeded
   - **Weekly review**: Rate structure optimization opportunities, trend deviations
   - **Monthly**: Portfolio benchmarking, year-over-year comparisons

6. **Pre-package the response.** Every alert should include: (a) what happened, (b) estimated dollar impact, (c) which bill line item, (d) suggested next action. This closes the gap between detection and practitioner response described in Stage 5 of the journey map.

---

### 4C. PRACTITIONER-LEVEL ROWS OF THE ENGAGEMENT TRIGGER MAP

This map identifies what causes a practitioner to engage with an energy management platform. Build it as a matrix with the trigger event in column 1, the practitioner response in column 2, the Clear Current product moment in column 3, and the source evidence in column 4.

| Trigger Event                                             | Practitioner Response                                                                                     | Clear Current Moment                                                                                                                     | Source                                                 |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| Monthly bill arrives, notably larger than last month      | Practitioner opens bill, compares to prior month manually, attempts to diagnose                           | Alert already in inbox with delta, dollar impact, and probable cause before practitioner opens the bill                                  | Chamberlain/TX State; Ross Snow/Intermountain          |
| Long-tenured bill processor leaves the organization       | Organization scrambles to find replacement or outsource                                                   | Clear Current pitch: "We're the institutional memory that doesn't leave"                                                                 | Chamberlain/TX State Transcript                        |
| Demand spike above ratchet threshold                      | Energy manager discovers on bill weeks later, tries to reconstruct what happened                          | Alert at moment of spike (if interval data available) or at bill receipt; projects 11-month ratchet cost immediately                     | Johnson/Don Johnson Transcript                         |
| Power factor charge appears on bill                       | May not be noticed; or noticed by broker during cursory review                                            | Automated power factor anomaly flag with comparison to industry baseline; distinguishes equipment problem from meter malfunction pattern | Sevy/Houston Methodist Transcript                      |
| New building acquired or constructed                      | Finance manually adds to billing system; often with attribution errors                                    | M&A onboarding module: maps new meters to addresses immediately                                                                          | Culver/AdventHealth Transcript                         |
| Utility changes rate structure mid-cycle                  | Often goes unnoticed until cost impact appears; customer may not know they're now on a disadvantaged rate | Rate change monitoring: flags when utility terms change and models impact on customer's usage pattern                                    | Johnson/Don Johnson; Combs/Phil Combs Summary          |
| Sustainability reporting deadline approaches              | Practitioner scrambles to compile consumption data from multiple sources                                  | Pre-built sustainability package: aggregated consumption, cost, and intensity metrics by site                                            | Sevy/Houston Methodist (Energy Star integration gap)   |
| CFO asks "why are our energy costs up?"                   | Energy manager tries to build a presentation from disparate data sources                                  | Auto-generated executive summary: consumption vs. cost trend, rate change attribution, anomaly history                                   | Culver/AdventHealth; Combs/Phil Combs Summary          |
| Building performance benchmarking request from leadership | Energy manager pulls EUI data per building, compares manually                                             | Automated EUI by building, benchmarked against portfolio and industry peers                                                              | Chamberlain/TX State; Sevy/Houston Methodist           |
| Capital project requires ROI justification                | Energy manager builds financial case from historical bills and projected savings                          | ROI package: historical trend, projected avoided cost, rate optimization opportunity quantified                                          | Combs/Phil Combs Summary; Culver/AdventHealth          |
| Annual budget cycle begins (Jan-Feb for FY institutions)  | Energy manager pulls 3-5 years of historical data, models projections                                     | On-demand multi-year trend export with rate change adjustment and growth modeling                                                        | Teague/TX State Transcript; Sevy (growth modeling gap) |
| Practitioner receives anomaly alert from Clear Current    | Opens platform to investigate                                                                             | Chat interface: "What caused this spike? What should I do about it? What will it cost if it continues?"                                  | Combs/Phil Combs Summary; Chamberlain/TX State         |

---

## 5. COMPETITIVE IMPLICATIONS

### EnergyCAP

**Evidence base:** Andee Chamberlain's immediate frame of reference for Clear Current's description was EnergyCAP: "It sounds kind of like what we already have." This is the most important competitive signal in the higher education vertical. EnergyCAP is the default mental model — anything Clear Current does in that segment will be compared to EnergyCAP first.

**Where EnergyCAP is vulnerable (from Chamberlain's own words):**

- "EnergyCAP tells us they can do that, but it's harder than it sounds" — on district energy metering data blending
- Bill processing module not currently in use, despite being available
- "Our system of gathering that data and putting it into our database is also a little wonky"
- No chat interface, no AI-powered analysis

**Clear Current's move:** Don't fight EnergyCAP head-on on data storage and reporting. Position as: "EnergyCAP stores your data. We analyze it and tell you what you're missing." Alternatively, if Clear Current can ingest data directly from EnergyCAP exports, offer integration rather than replacement in early sales conversations. The wedge is AI intelligence — the thing EnergyCAP doesn't do.

### Energy Print

**Evidence base:** Sean Sevy at Houston Methodist is an active Energy Print user. He identified specific gaps: weak forecasting for growing systems, inability to model new campus openings, basic benchmarking without root cause intelligence.

**Clear Current's move:** Growth modeling is the feature gap. Build scenario-based forecasting that accepts new building parameters. Also: Energy Print is described as primarily doing benchmarking and Energy Star integration — neither of which is anomaly detection or billing audit. Clear Current should explicitly own the audit and anomaly layer that Energy Print's benchmarking orientation neglects.

### ENGIE Impact

**Evidence base:** AdventHealth uses ENGIE Impact primarily as a bill payment processor. John Culver gave Clear Current's value proposition in his own words while describing ENGIE's gap: "it being a little bit smarter and knowing how to interpret what's on the bills... would be great." The relationship is contractual and long-standing — not built on analytical capability.

**Clear Current's move:** ENGIE Impact is a bill payer, not an analyst. The pitch to AdventHealth is not "replace ENGIE" — it's "get the intelligence layer ENGIE isn't providing." This is an additive sale, not a displacement sale, at least initially. However, as Clear Current's analytical capabilities mature, the value case for ENGIE shrinks and the upgrade path to Clear Current as the primary platform strengthens.

### Excel

**Evidence base:** Phil Combs identified Excel as "the actual daily driver for energy professionals" (Phil Combs Summary). This is the most important competitive framing of all — not a named software competitor, but the real incumbent that everyone uses because it requires no procurement cycle, no IT approval, and no onboarding.

**Clear Current's move:** The minimum bar for adoption is: "Is this faster and more insightful than a well-structured Excel workbook?" (Phil Combs Summary). Phil estimated 2+ hours per month per 12-meter client just for data collection. If Clear Current can produce in minutes what takes 2 hours in Excel, the time ROI is self-evident to any practitioner. But the pitch must be concrete: not "AI-powered analytics" but "here's the analysis you'd spend two hours building, generated automatically at bill receipt."

### Arcadia

**Evidence base:** Clayton mentioned Arcadia during the Sean Sevy interview; Sean mentioned Energy Print instead. Arcadia was not validated by any practitioner in this corpus as a tool they use or have evaluated. It is named in the competitive landscape but not evidenced from practitioner experience.

**Clear Current's move:** Cannot make a competitive claim based on this corpus alone. Recommend a standalone Arcadia teardown before including it in competitive positioning.

### WatchWire/Tango

**Evidence base:** Not mentioned by name in any interview in this corpus. Zero direct evidence.

**Clear Current's move:** Research gap — see Section 7.

### The "Fake Energy Manager" vs. Real Practitioner Positioning

This is the meta-competitive insight from Don Johnson's framing. Don Johnson described himself as someone who does the analysis deeply — but he's unusual. Most of his clients, even hospitals, "don't call us until they need to" and operate reactively (Don Johnson Transcript). The competitive opportunity is not just to beat the named software platforms — it is to provide the real practitioner's analytical depth to organizations that don't have a Don Johnson or a Phil Combs on staff.

The product is, in effect, a synthetic expert energy manager — one that does the analysis that only a CEM would do, at the speed that the tyranny of the urgent demands, and presents it in the format that a non-expert CFO can act on.

---

## 6. WELL-EVIDENCED VS. INFERRED

### Well-Evidenced (Multiple Sources, Direct Testimony)

- **Practitioners don't regularly review bills in depth.** Chamberlain/TX State ("I'm grateful I don't have to do it monthly"), Culver/AdventHealth (facility directors too busy), Johnson/Trane (time-intensive, "depends on how my day goes"). Three independent sources across three different verticals.

- **Bill format heterogeneity is the historical technical barrier to AI bill analysis.** Combs/Trane (explicit, detailed), Culver/AdventHealth (73 utility providers, incompatible terminology). Two sources, technically credentialed, specific.

- **The monetization imperative — no dollar figure, no action.** Combs/Trane ("nobody cares until you monetize it"), Culver/AdventHealth ("here's why we need $1M in capital, not because we're greedy"), Johnson/Trane (ROI framing for demand ratchet and power factor solutions). Three sources.

- **Anomaly discovery is reactive and accidental.** Chamberlain/TX State (wastewater multiplier found manually), Snow/Intermountain ($40K→$140K missed by third party, caught by accountant), Sevy/Houston Methodist (power factor anomaly being investigated now — unclear how long it persisted). Three separate anomaly cases across three organizations.

- **Healthcare has a severe cybersecurity barrier for BAS-integrated AI.** Sukits/AdventHealth (2.5 years, still not approved), Combs/Trane ("they disable a lot of that stuff because they're like, 'well that's a security breach issue'"). Two independent confirmations.

- **Excel is the primary daily tool for energy professionals.** Combs/Trane (direct statement, described in detail). Single source but from the most credentialed technical practitioner in the corpus, and consistent with every other interviewee's description of manual workflows.

### Evidenced by Single Source (High Credibility, Not Multi-Confirmed)

- **10-15 minutes per meter for manual data collection.** Combs/Trane only. But Combs is a CEM/CMVP describing his own workflow in specific terms. High credibility despite being a single source.

- **$40K to $140K utility spike missed by third-party processor.** Snow/Intermountain only. But described as a specific, recent case. Not contradicted elsewhere.

- **Growth modeling gap in Energy Print.** Sevy/Houston Methodist only. But describes his current tool in direct use.

- **Non-profit tax exemption as a specific billing error type.** Culver/AdventHealth only. But a logical and operationally described problem.

- **73 utility providers across 9 states at AdventHealth.** Culver/AdventHealth only. But this is a verifiable fact about the organization, not an opinion.

### My Analytical Inferences (Not Directly Stated in the Corpus)

- **The departure of a long-tenured bill processor is a repeatable engagement trigger.** The Texas State case is documented. The generalization to other institutions is my inference from pattern recognition across many years in facilities management. It is not confirmed by other interviewees in this corpus.

- **The demand ratchet is detectable from billing data without building system access.** Don Johnson described how ratchets work. I am inferring that the pattern is visible in month-over-month billing data without requiring interval data or BAS integration. This should be technically confirmed by Clear Current's engineering team.

- **Clear Current's positioning as "billing verification layer" for hospitals that already have sophisticated BAS is the correct framing.** The Sevy Summary makes this recommendation explicitly. I agree with it and am applying it across the corpus. But it is an analytical inference from multiple signals, not a direct interviewee statement.

- **The "synthetic expert energy manager" framing.** My characterization of what Clear Current is in competitive terms. Not stated by any interviewee. Based on the gap between what a CEM/CMVP would catch and what current tools plus non-expert staff are actually catching.

---

## 7. OPEN QUESTIONS AND RESEARCH GAPS

**Gap 1: The Alert Tolerance Question**
What is the acceptable alert frequency before a practitioner starts ignoring the platform? James Norton wants to know "right away" about anomalies, but Phil Combs implicitly warned about false positive fatigue (his statistical significance standard). No interviewee was asked: "How many alerts per month would be useful vs. annoying?" This is a product design question that needs a direct answer before building the alerting module.

**Gap 2: What Happens Between Detection and Resolution?**
The corpus documents the detection gap well. It is under-documented on the response workflow. When an anomaly is flagged, who actually calls the utility? Who submits the billing dispute? Who changes the controls? At Houston Methodist, Prism Energy handles some of this. At Texas State, it's manual. At AdventHealth, it's unclear. Does Clear Current's platform need a workflow/ticketing layer, or does it stop at alert delivery? This is a scope-defining question.

**Gap 3: WatchWire/Tango and Arcadia Are Completely Unvalidated**
These are named competitors in the market, but no practitioner in this corpus uses them or mentioned them in comparison to other tools. Before Clear Current positions against them, direct competitive teardowns are needed. Recommendation: conduct one direct user interview with a WatchWire customer and one with an Arcadia customer.

**Gap 4: The Interval Data Question**
Several interviewees implied that real-time or near-real-time data would be more valuable than monthly billing data (Culver at AdventHealth: "we'd rather have it hourly, daily"). But Clear Current's current architecture appears to be bill-based, not AMI interval-based. If Clear Current can ingest AMI interval data where available, that closes a gap that John Culver explicitly named. If it cannot, that limitation should be acknowledged in healthcare sales conversations. This is a product roadmap question that the research raises but doesn't answer.

**Gap 5: The Trust Threshold for AI in Energy Billing**
Phil Combs said current LLMs are "light years different" from earlier AI tools and expressed confidence. But he is a technical expert — his trust threshold is different from a facility director who doesn't understand how the technology works. What does a non-expert practitioner need to see before they trust an AI-generated billing anomaly flag? One wrong flag that they investigate and find to be a false positive could damage the relationship permanently. No interviewee was asked about failure tolerance or the trust-building sequence. This matters enormously for onboarding design.

**Gap 6: The Pricing and Budget Owner Question**
No interviewee was asked directly: "Who would own the budget for a tool like this? How would it be categorized — facilities, energy, IT, sustainability, finance?" This matters because the internal champion (energy manager or sustainability director) and the budget owner (CFO or VP of Facilities) may be different people, and the sales motion needs to reach both. Phil Combs provided the decision hierarchy, but not the budget mechanics.

**Gap 7: The Multi-Commodity Question**
Texas State mentioned water as an emerging pain point ("water is also becoming a utility we have to worry about more now"). AdventHealth processes all utility bills — electricity, gas, water, telecom — through ENGIE Impact. Does Clear Current handle all commodities or only electricity? This is a product scope question with go-to-market implications: a platform that handles all utility bills is a more complete replacement for ENGIE Impact than one that handles only electricity.

**Gap 8: The EnergyCAP Integration vs. Displacement Question**
Andee Chamberlain's first instinct was that Clear Current sounded like EnergyCAP. She uses EnergyCAP. She's not going to replace EnergyCAP for bill storage and reporting. But she might add Clear Current as an AI intelligence layer on top of EnergyCAP data. Does Clear Current have an EnergyCAP integration strategy? This should be answered before the higher education sales motion is built.

**Gap 9: Regulatory Intelligence Depth and Timeliness**
Phil Combs described regulatory intelligence as a "killer feature" — monitoring PUC filings, rate hike proposals, grid operator decisions. But this is described as a concept, not a validated product module. No other interviewee validated this feature request. It needs secondary research validation: How often do PUC rate cases affect the organizations in this corpus? What is the lead time from filing to impact? How would a practitioner act on this intelligence? Is this a first-year feature or a second-year feature?

**Gap 10: The Conversation with Allegra Wiesler**
The AdventHealth summary explicitly recommends a follow-up interview with Allegra Wiesler, Executive Director of Environmental Sustainability, who was unavailable. From my perspective as a practitioner, the sustainability reporting dimension — how billing data feeds into Scope 2 GHG reporting, how VPPA settlements interact with utility billing — is an underexplored use case in this corpus. Allegra's perspective could validate a sustainability reporting module that doesn't currently appear as a primary feature in the product architecture.

---

_This analysis was prepared by Ray Kowalski, drawing on 28 years of practitioner-level experience in facilities operations and energy management, applied to primary research conducted by Clayton Hester, Victor Pan, Adam Case, and Jason Wisnieski of the Texas A&M CDL MBA Consulting Team. Every claim is sourced. Every inference is labeled. The fieldwork was exceptional — the practitioners who gave their time were honest, specific, and generous. Their problems are real. The opportunity to solve them is equally real._

# Agent: Ava Mitchell | AI Product Strategy Lead

# Run: 2026-04-17T14:19:08.754004

---

# AI INTERACTION MODEL ANALYSIS

## Mapping Dan Schreiber's Three-Tier Product Architecture Against Field Research Evidence

**Prepared by Ava Mitchell, AI Product Strategy Lead**
**Clear Current Technologies Research Engagement | May 2026 Fundraise**

---

## 1. WHAT I FOUND — Complete Evidence Inventory

Before I build any argument, I want to account for every document in this corpus that touches AI trust, automation preferences, explainability, and interaction model. This is not a skim — it's a complete accounting.

**TX State Summary (Andee Chamberlain, Carl Teague, James Norton)**
Contains three distinct use case requests that map directly to three different tiers of the product model. James Norton's anomaly alerting request is a Push to User behavior — he wants to be notified, not to query. Carl Teague's event correlation request requires querying and exploration — React to User territory. Andee Chamberlain's conservation prioritization questions ("who's my biggest user?") sit in the middle — she wants answers surfaced, but she'll also ask questions. Critically, this team uses EnergyCAP and describes it as falling short. No explicit AI skepticism expressed, but the gap between what EnergyCAP "tells them it can do" and what it actually delivers is a trust precedent that matters.

**Andi Ault Summary (UT Austin, Finance)**
The single most important document for the interaction model analysis. Andi is the clearest expression of a Push to User persona in the entire corpus. She explicitly states she does not want to interact with energy data herself. Her job is dollars and consumption numbers; the engineers do variance analysis. Her first answer when asked how she would use an AI tool was anomaly flagging — not chatting, not exploring, not analyzing. She then immediately endorsed the dual-audience architecture: "Oh, absolutely. Absolutely" when asked if a tool should let engineers chat with data and then push shareable reports to finance users.

**Troy Nevels Summary (UT Austin, Engineering)**
Troy is the complement to Andi — an engineer who would use the React to User tier. His most engaged discussion was about grid complexity and demand response, not billing. His prior experience scrubbing natural gas bills at Yale is direct evidence that the manual bill review workflow exists and is painful. He didn't express AI skepticism explicitly, but his framing of what an AI tool should do for district energy producers is narrow: meter reconciliation and weather-correlated anomaly detection. He implicitly expects explanation ("is this weather-driven or equipment-driven?") — which is an explainability requirement even if he doesn't use that word.

**Scott Czubkowski Summary (Medxcel/Ascension)**
The richest source of trust and explainability intelligence in the corpus. Scott's distinction between rules-based systems and "true AI" is the most precise articulation of AI skepticism from any interviewee. He uses Peer AI (Constellation Energy) and finds value in it — but he's a sophisticated enough buyer to demand precision about what the system actually does vs. what vendors claim. His most compelling demo story (Peer AI enabling a CEO to ask "what is the cost of my utilities in St. John's in Tulsa?") is a React to User moment — natural language query delivering a real answer. But his dead meter detection story is Push to User — the system flagged the $32/month anomaly without being asked. He holds both tiers simultaneously without contradiction.

**Ann Walston Summary (Bon Secours Mercy Health)**
Ann's use of Get Choice as a third-party bill processor is itself a trust signal: she has outsourced bill processing because she doesn't trust in-house automated flagging to catch what needs catching. Her $1M+ recovery story is instructive — finding the error was not the hard part. Recovering the money required board-level relationships and months of effort. This creates a very specific explainability requirement: it's not enough to say "there's an error." You have to say "here is the documented, quantified, defensible case for why this is wrong and what you're owed." The Do for User tier (autonomous agent) would need to produce that documentation, not just the alert.

**Sean Sevy Summary (Houston Methodist)**
Sean's current tool (Energy Print) gives him benchmarking and bill tracking. His primary gap is growth modeling — not AI explainability per se. His power factor anomaly investigation is a case where he is doing manual detective work that the Push to User tier should be doing for him. He described billing errors as "minimal" — which suggests either (a) his current tooling is adequate, or (b) his baseline has drifted without detection (Roger Goldstein's pattern). No explicit AI trust concerns raised, but his 35-year arc narrative suggests he adopts new technology incrementally and pragmatically, not as an early adopter.

**Intermountain Summary (Ross Snow, Matt Wilson, Bart Peacock)**
The most sophisticated internal energy team in the corpus, and the clearest articulation of the limits of AI in the physical world: "Where the rubber really hits the road is not identifying the problems, it's fixing them." Ross and Matt use SkySpark for 14 billion data points of building analytics — they are not the Push to User audience for billing intelligence because they already have a sophisticated push system. Their gap is in the supply-side billing layer. The $40K-to-$140K bill spike that slipped through the third-party processor is their clearest expression of a Push to User need: "A third party should have flagged that — they didn't."

**AdventHealth Summary (John Culver, Scott Sukits)**
John Culver's "garbage in, garbage out" skepticism and Scott Sukits's 2.5-year BrainBox AI approval saga are the strongest anti-AI-layering-on-top data points in the corpus. Both interviewees want foundation-first: data integrity before intelligence. John's most direct quote — "NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great" — is both a Push to User requirement (flag it) and an explainability requirement (tell me why I should care) combined in a single sentence. The cybersecurity finding (BAS AI stuck in IT approval for 2.5 years) also creates a specific framing opportunity: Clear Current reads bills, not building systems.

**Walt Taylor Summary (Panda Restaurant Group)**
Walt's skepticism is the most technically grounded in the corpus. "Writing code does the same thing every time and you get the same result every time. That's not how it is when you're looking at utility bills." He validated the React to User tier as genuinely useful for operators with 25 locations, and gave the clearest articulation of what an LLM query interface should answer: "Why are my 20 stores in Philadelphia billing so differently?" But he also set the highest bar for trust: "I would need to see demonstrated accuracy at scale before trusting an AI system enough to replace manual review." He's not anti-AI — he's anti-hype. He would convert from skeptic to champion if the accuracy is proven.

**Jamare Bates Summary (JLL)**
Jamare's most important contribution to the interaction model analysis is his framing of energy auditors as both target users and potential adversaries. If the tool is framed as Do for User (autonomous agent replacing auditor judgment), auditors will resist. If framed as React to User (force multiplier for auditor expertise), auditors become champions. This is the clearest articulation in the corpus of how product positioning — not just product design — determines trust. He also raised data privacy and security as enterprise-level trust requirements that precede any discussion of interaction model.

**Marc Spieler Summary (NVIDIA)**
Marc's contribution to the interaction model analysis is primarily strategic and commercial. His property tax consultant analogy (evergreen agreement, 50% savings share, automated monthly cycle) describes an autonomous process that the customer initiates once and then receives value from on autopilot — a Do for User model. His "go demonstrate those wins" advice is a trust-building prescription: the path from skepticism to adoption runs through documented recovery cases, not feature comparisons.

**Adam Zavadsky Summary (ENGIE Impact)**
Adam's description of ENGIE's AI use — improving internal bill processing workflows, not client-facing analytics — is strategically revealing. The client-facing tier is where Clear Current operates. His threshold-based exception monitoring description confirms the baseline drift gap that Roger Goldstein described. His "you can't manage what you can't measure" framing establishes that data foundation is prerequisite to all three product tiers — a validation of AdventHealth's foundation-first concern.

**Phil Combs Summary (Trane)**
Phil's 10-15 minutes per meter manual data collection workflow is the clearest quantification of what the Do for User tier replaces. His regulatory intelligence feature request is the one feature that requires a Do for User agent most clearly — you can't manually monitor PUC filings at scale. His "monetize every insight" prescription is an interaction model requirement: every output needs a dollar figure attached. His description of clients who are "firefighting" is an argument against relying on React to User as the primary tier — if users are perpetually distracted, they won't log in and ask questions. Push and Do must do the work autonomously.

**Roger Goldstein Summary (Panda)**
Roger's H2NO mental model is the most actionable trust-building frame in the corpus. He already trusts anomaly detection that fires automatically (Push to User) because H2NO proved the concept with water. His threshold-based NG Insight exception monitoring confirms the baseline drift gap. His baseline drift example (paying a neighbor's electricity for a year) is the foundational case study for why pattern deviation detection is superior to spike threshold detection.

---

## 2. KEY FINDINGS

**Finding 1: The Three Tiers Are Validated, But Not Equally Valued Across Personas**

The research confirms all three tiers have market demand — but the value distribution across personas is dramatically uneven. Finance users (Andi Ault, Ann Walston, the finance side of every hospital system) want Push to User as their primary interface, with React to User as an occasional escalation path. Engineering and operations users (Troy Nevels, Phil Combs, Andee Chamberlain) want React to User as their primary interface. Autonomous agents (Do for User) have the least explicit demand in the research — but the use cases that most need it (regulatory monitoring, monthly audit cycles, portfolio-wide anomaly scanning) are the highest-value features. The implication is that the tiers need to be sequenced in sales conversations by persona, not just built simultaneously.

_Sources: Andi Ault Summary ("Definitely flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it"), Phil Combs Summary (firefighting clients won't log in), Roger Goldstein Summary (H2NO mental model)_

**Finding 2: Andi Ault's "I Don't Want to Chat With It" Is Not Rejection of AI — It's a Persona Signal**

Andi's preference for Push to User over React to User is not skepticism about AI. She explicitly endorsed the dual-audience architecture. What she's expressing is a role boundary: she is not the expert who interacts with the data. She is the downstream recipient of findings. This distinction matters enormously for product design. The React to User chat interface is not wrong — it's for the wrong person if it's positioned as the entry point for the finance user. The chat interface is the energy manager's tool; the automated report is the finance director's tool. Designing one interface that serves both without clarifying which mode you're in creates confusion, not value.

_Sources: Andi Ault Summary ("For me it's just dollars and consumption numbers"), Scott Czubkowski Summary (CEO asking natural language questions vs. engineer doing analysis), AdventHealth Summary (John's wish to "interpret what's on the bills and tell us why we should care")_

**Finding 3: The Explainability Requirement Is Non-Negotiable in Healthcare — And Varies by Error Type**

Scott Czubkowski's rules-based vs. true AI distinction, Ann Walston's $1M recovery documentation requirement, and AdventHealth's "garbage in, garbage out" skepticism collectively establish that healthcare buyers require explainability at two distinct levels: (1) what did the system find and how confident is it, and (2) what is the documented, defensible evidence that can be taken to a utility board for credit recovery. The second requirement is not about AI explainability in the XAI research sense — it's about producing a dispute brief. That's a different product design requirement than making the algorithm transparent. No existing platform in the competitive landscape produces dispute briefs. This is a design gap Clear Current can fill.

_Sources: Ann Walston Summary ("We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of"), Scott Czubkowski Summary (rules-based vs. true AI distinction), AdventHealth Summary ("AI is good, but it's only as good as what it's told")_

**Finding 4: The "Ghost Meter" / Baseline Drift Problem Validates Push to User as the Primary Trust-Building Mechanism**

Three independent sources (Roger Goldstein's neighbor's electricity story, Scott Czubkowski's $32/month dead meter story, Ross Snow's $40K-to-$140K spike that was missed) all describe the same failure mode of existing systems: threshold-based exception monitoring misses errors that establish themselves as a new baseline. The pattern is systematic and predictable. The reason Push to User is the right trust-building tier is that it demonstrates value on problems the user didn't even know they had. You cannot demonstrate baseline drift detection through a chat demo. You can only demonstrate it by showing the user a finding they didn't go looking for. This makes Push to User not just a UX preference — it's the correct mechanism for converting skeptics into champions.

_Sources: Roger Goldstein Summary ("It does happen. It can go on for a while"), Scott Czubkowski Summary (dead meter detection), Intermountain Summary (third party missed the $100K spike)_

**Finding 5: Trust Is Built Sequentially, Not Simultaneously Across Tiers**

Walt Taylor's "I would need to see demonstrated accuracy at scale before trusting an AI system enough to replace manual review" and Scott Czubkowski's rules-based vs. AI distinction both express the same underlying principle: trust in AI output is earned through demonstrated accuracy on low-stakes findings before users will accept AI judgment on high-stakes ones. The product onboarding sequence matters as much as the product design. The correct trust-building arc is: (1) Push to User surfaces a finding the user can verify manually, (2) user verifies it, finds it accurate, (3) React to User queries become valuable because the user trusts the underlying data, (4) Do for User autonomous actions become acceptable because the user has a track record of accurate findings. Skipping step 1 to lead with step 4 is the failure mode of AI products that generate anxiety rather than trust.

_Sources: Walt Taylor Summary ("I would need to see demonstrated accuracy at scale"), Scott Czubkowski Summary (precision about rules-based vs. AI distinction), AdventHealth Summary ("AI integration needs to be closer to the foundation because it changes so many things")_

**Finding 6: The Dual-Audience Architecture Is Confirmed by Both Sides of the Divide**

The most structurally important finding for Dan's product design is that the dual-audience tension (energy expert vs. finance user) was confirmed from both chairs in the same institution (UT Austin: Andi Ault finance-side, Troy Nevels engineering-side), from a single person who bridges both (Scott Czubkowski who designed the system AND manages the budget), and from a VP-level facilities executive who manages the finance-operations interface (Ann Walston). This is not a hypothesis — it is a multi-source, multi-institution, multi-role finding. The dual-audience architecture is the right structural design. The remaining design question is how to make the handoff between the two audiences seamless: the energy manager finds something in React to User and needs to push it to the finance director in a form the finance director can use without understanding energy.

_Sources: Andi Ault Summary ("Oh, absolutely. Absolutely"), TX State Summary (data tension between utility ops and finance), Ann Walston Summary (single energy manager serving 36 hospitals), Scott Czubkowski Summary (CEO asking natural language questions)_

**Finding 7: Data Integrity Is the Trust Gate That Precedes All Three Tiers**

AdventHealth's "garbage in, garbage out" framing and John Culver's bill-to-address matching requirement are not product feature requests — they are trust prerequisites. Before any user will believe AI-generated anomaly findings, they need to trust that the underlying data is clean. This is the foundation-first requirement that ENGIE Impact currently fails to deliver (bills sometimes attributed to wrong addresses, portfolio changes reflected slowly). For Clear Current, the product sequence is: (1) ingest data, (2) validate and clean it, (3) confirm the mapping (meter to address to account) is accurate, (4) then surface AI findings. If step 3 is skipped, any finding in step 4 is suspect. The product onboarding experience should make data validation visible and verifiable — not invisible.

_Sources: AdventHealth Summary ("It would be that the bills and the therms match the addresses of our sites every time"), Adam Zavadsky Summary ("You can't manage what you can't measure"), Ann Walston Summary (year of meter mapping work before meaningful insights were possible)_

**Finding 8: The Regulatory Intelligence Feature Is a Do for User Need That Cannot Be React to User**

Phil Combs's regulatory intelligence request — "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board — they're proposing a rate increase before the Public Utility Commission" — is explicitly a monitoring task, not a query task. No user is going to log in and ask "what rate changes are being proposed in the jurisdictions where I have facilities?" They will simply miss that information unless the system surfaces it proactively. This is the clearest example in the corpus of a feature that requires the Do for User tier to be valuable at all. A rate change buried in a PUC filing that affects 23 of your locations is not a question a user knows to ask — it's a signal that needs to be detected and pushed.

_Sources: Phil Combs Summary ("I can tell you six months from now this utility is actively talking to the Public Utility Commission"), Troy Nevels Summary (carbon taxation as emerging billing complexity), Andi Ault Summary (City of Austin rate changes finalized after budget submission)_

**Finding 9: Cybersecurity Is a Trust Barrier That Must Be Addressed Before Interaction Design**

Scott Sukits at AdventHealth spent 2.5 years trying to get BrainBox AI through IT approval. Jamare Bates identified data security as the #1 enterprise trust barrier. Ascension fought to protect data in a PricewaterhouseCoopers engagement. The cybersecurity concern is not primarily about the product interaction model — but it preconditions whether users will engage with any tier at all. For healthcare specifically, the product positioning must explicitly separate Clear Current's data access model (reads utility invoices, no HIPAA-relevant data, no building system access) from BAS-integrated AI. This is not a product design issue — it is a trust framing issue that affects demo design, sales conversation sequencing, and enterprise documentation.

_Sources: AdventHealth Summary ("I've been trying to implement it at a medical office building for 2 and a half years"), Jamare Bates Summary ("make sure the company is thinking about how they're going to manage, keep the data secure"), Scott Czubkowski Summary (Ascension data security fight with PricewaterhouseCoopers)_

**Finding 10: "Tell Me Why I Should Care" Is the Missing Layer in Every Incumbent Product**

John Culver's quote — "not just interpret, but tell us why we should care and what we can do to change it" — and Phil Combs's prescription ("nobody cares until you monetize it") together define the explainability standard that no existing platform meets. ENGIE Impact processes bills and pays them. EnergyCAP stores data. Energy Print benchmarks. None of them translate findings into "this is why it matters to your budget and here is what you can do about it." This "so what" layer is the gap that Clear Current's AI can fill. Every output — whether Push to User alert, React to User query result, or Do for User autonomous action — needs to answer three questions automatically: What happened? Why does it matter in dollars? What is the recommended action?

_Sources: AdventHealth Summary (Culver quote), Phil Combs Summary ("nobody cares until you monetize it"), Marc Spieler Summary (case studies showing full recovery cycle)_

**Finding 11: The Demo Moment That Converts Skeptics Is a Finding the User Didn't Know They Had**

Every compelling story in this corpus about a technology earning trust follows the same structure: the system found something the user wasn't looking for, the finding was verified as real, and it had dollar impact. Scott Czubkowski's $32/month dead meter. Roger Goldstein's neighbor's electricity. Ross Snow's $100K bill spike that the third party missed. In each case, the "wow" moment was not a clever answer to a question — it was an unsolicited finding that proved the system was watching when no one else was. This is the demo design prescription: don't demo the chat interface first. Demo the alert. Show a finding the fictional customer didn't know they had. Then show the chat interface as the tool for exploring that finding. Push to User is the trust-building entry point. React to User is the power tool after trust is established.

_Sources: Scott Czubkowski Summary (dead meter detection), Roger Goldstein Summary (neighbor's electricity baseline drift), Intermountain Summary (missed $100K spike)_

**Finding 12: Non-Profit Tax Exemption Verification Is an Underserved Explainability Use Case**

John Culver's tax exemption gap — AdventHealth as a non-profit should not pay utility taxes, but consistently verifying this across 73 utility providers is an ongoing operational failure — is a specific example of where the AI needs to not just flag an anomaly but explain the regulatory basis for why the charge is wrong. "You're being charged a tax that non-profit institutions are exempt from under [specific statute]" is a different output than "this line item looks unusual." The explanation has to be the audit-ready form that can be taken directly to the utility. This type of finding — where the AI must explain both the anomaly and the legal/regulatory basis for disputing it — is the highest-value explainability design challenge in the product.

_Sources: AdventHealth Summary (Culver on tax exemption verification), Ann Walston Summary (documentation requirement for $1M recovery)_

---

## 3. VERBATIM QUOTES THAT BELONG IN THE DELIVERABLES

**Quote 1**

> "Definitely flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it. That would be time saving."

**Andi Ault** | Senior Associate Director, Finance & Administrative Services | UT Austin
**Source:** Andi Ault Summary
**Why it matters:** This is the clearest single-sentence definition of the Push to User value proposition from the finance persona. It belongs on slide 1 of the product module explanation for the Push to User tier. Note that she uses the word "featured" — the anomaly should be surfaced prominently, not buried in a dashboard.

---

**Quote 2**

> "NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great."

**John Culver** | Corporate Sustainability | AdventHealth
**Source:** AdventHealth Summary
**Why it matters:** This is the most precise articulation of the interaction model gap in the entire corpus. It defines three layers of intelligence: (1) interpretation — what does this bill say, (2) significance — why should I care, (3) action — what can I do about it. All three layers must be present in every AI output. This quote should anchor the product module framework in the investor materials.

---

**Quote 3**

> "All the technology is out there to control things, do things, monitor things, measure things, whatever. It's how I get administrators to interact with the system without being technical, right? Is my building using more energy than a sister building? What would be my projected utility bill for next month based on current weather outlook?"

**Scott Czubkowski** | National Director, Energy & Facility Performance | Medxcel (Ascension)
**Source:** Scott Czubkowski Summary
**Why it matters:** Scott, the most technically credentialed interviewee in the corpus, identifies the non-technical administrator as the product's most important beneficiary. His example questions are exactly what the React to User natural language interface should answer. This quote validates the chat interface — but specifically as a tool for non-technical executives, not just energy engineers. It belongs in the demo script.

---

**Quote 4**

> "Where the rubber really hits the road is not identifying the problems, it's fixing them. And that's where companies, they will come tell you all the reasons your building is inefficient and why you could save $100,000 a year — but they won't solve them."

**Ross Snow** | Director of Energy Management | Intermountain Health
**Source:** Intermountain Summary
**Why it matters:** This is the clearest articulation of why Clear Current's supply-side scoping (billing and invoicing) is the right scope — and why vendors who over-promise on the demand side lose credibility. Clear Current should use this framing proactively: "We don't pretend to fix your building. We make sure your bills are right." That scope clarity builds trust faster than ambitious claims.

---

**Quote 5**

> "Writing code does the same thing every time and you get the same result every time. That's not how it is when you're looking at utility bills and usage and all the different things."

**Walt Taylor** | Energy Manager (Contractor) | Panda Restaurant Group
**Source:** Walt Taylor Summary
**Why it matters:** Walt is articulating the epistemological challenge of applying AI to energy bills — the input variability is fundamentally different from software engineering problems. This quote belongs in the product team's internal design principles, not in the pitch deck. It's a warning that accuracy claims must be grounded in demonstrated performance data, not theoretical capability.

---

**Quote 6**

> "It's one thing to say we've given you five years of billing. It wasn't an anomaly that they made a mistake - it was consistent. If the bills are consistently wrong, then a human can't possibly do this, and that means you want a subscription to your stuff."

**Marc Spieler** | Senior Managing Director, Global Energy Industry | NVIDIA
**Source:** Marc Spieler Summary
**Why it matters:** Marc is defining the business model argument for subscription pricing and the core product thesis simultaneously. If billing errors are systematic and recurring — not occasional — then a human review process is structurally incapable of catching them at scale. This is the argument for why the Do for User autonomous agent tier is commercially necessary, not just convenient. Use this in investor materials.

---

**Quote 7**

> "We have a glutton of AI developers and a vacuum of problem solvers right now."

**Ross Snow** | Director of Energy Management | Intermountain Health
**Source:** Intermountain Summary
**Why it matters:** This is the most efficient summary of the AI credibility problem in energy management. Every new vendor claims AI. None of them solve the physical execution problem. Clear Current's positioning must distinguish itself from the "glutton" — not by claiming more AI capability, but by showing documented dollar recovery from specific billing error types.

---

**Quote 8**

> "If this tool is built to take their job, they're gonna have a feeling about it. If it's built to make their job easier, now you might have a target market."

**Jamare Bates** | VP, Clean Energy & Infrastructure Advisory | JLL
**Source:** Jamare Bates Summary
**Why it matters:** This is the product positioning principle that determines whether energy auditors and energy managers become champions or obstacles. The Do for User tier must be framed as capacity expansion, not replacement. "We automate what you can't physically do at this scale" is a different framing than "we replace your manual review process." The first creates champions. The second creates resistance.

---

**Quote 9**

> "It would be that the bills and the therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time. Which sounds basic, but again, with an organization this size and that grows, matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational. You can't move forward if you don't know that information."

**John Culver** | Corporate Sustainability | AdventHealth
**Source:** AdventHealth Summary
**Why it matters:** This quote defines the data integrity prerequisite that precedes all three product tiers. Before any AI finding is trusted, the user needs to believe the underlying data is correctly attributed. This belongs in the product onboarding design spec: step zero is confirming meter-to-address mapping is accurate before any AI analysis begins.

---

**Quote 10**

> "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board - they're proposing a rate increase before the Public Utility Commission. Things like that are what really could be powerful because that saves somebody like me so much time."

**Phil Combs** | Senior Digital Services Engineer | Trane Technologies
**Source:** Phil Combs Summary
**Why it matters:** Phil is describing the regulatory intelligence feature — the only feature in the product that is exclusively a Do for User function. Nobody manually monitors PUC filings. This represents a fundamentally new product category: proactive regulatory intelligence woven into billing analysis. The quote demonstrates that even a sophisticated M&V engineer with 20 years at Trane finds this monitoring task beyond his practical capacity.

---

**Quote 11**

> "We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of. I mean, that is incredibly rare."

**Ann Walston** | VP, Acute Care Facilities Management | Bon Secours Mercy Health
**Source:** Ann Walston Summary
**Why it matters:** The recovery was "unheard of" and "incredibly rare" — not because the errors are rare, but because the recovery process is so difficult. This quote reframes what Clear Current's value proposition should be for healthcare: not just error detection, but error documentation and recovery support. The AI output needs to produce something you can take to the utility and fight with.

---

**Quote 12**

> "Suppliers will make it sound like you can just layer it on top of your existing systems and it's fine. What we are finding is that is not the case. AI integration needs to be closer to the foundation because it changes so many things."

**Scott Sukits** | Director of Control Systems & Energy Management | AdventHealth
**Source:** AdventHealth Summary
**Why it matters:** This is the anti-pitch for every "just plug it in" AI vendor. Clear Current must explicitly counter this framing in its sales conversations. The response isn't "we're different" — it's "here's specifically why billing data is different from building automation data, and why our integration path is foundation-level, not surface-level." Acknowledge the concern, explain the distinction.

---

**Quote 13**

> "EnergyCAP tells us that they can do that stuff, but it's harder than it sounds."

**Andee Chamberlain** | Energy & Water Conservation Manager | Texas State University
**Source:** TX State Summary
**Why it matters:** This is the competitive intelligence quote for the university segment. EnergyCAP overpromises and underdelivers on complex metering environments. Clear Current's positioning against EnergyCAP should lead with honesty about complexity, then demonstrate actual capability. The contrast between EnergyCAP's claims and Clear Current's documented performance is the competitive wedge.

---

**Quote 14**

> "Definitely flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it."

**Andi Ault** | Senior Associate Director, Finance | UT Austin
**Source:** Andi Ault Summary
_Already captured above — use in a different context:_ This quote belongs specifically in the onboarding design spec as the design criterion for the Push to User alert system. The anomaly should be "featured and flagged" — meaning it should be the hero element of the interface when the finance user opens Clear Current, not a tab they navigate to.

---

**Quote 15**

> "A lot of clients unfortunately are firefighting — tyranny of the urgent. They're the people keeping the wheels on the car day-to-day. Even though there's the strategy that we always talk about, they're just a lot of times dealing with this piece of equipment broke, or tenants moving in or moving out."

**Phil Combs** | Senior Digital Services Engineer | Trane Technologies
**Source:** Phil Combs Summary
**Why it matters:** This is the behavioral design constraint that determines whether the Push to User tier is essential or optional. If clients are perpetually distracted, they will not log in to query the React to User tier. The system must surface findings without being asked. This quote belongs in the product design rationale for why Push to User must be the default mode, not an optional feature.

---

## 4. DELIVERABLE BUILD GUIDANCE

### 4A. Module-by-Module AI Interaction Design

Below, I map each of Dan's five assumed product modules against the three-tier architecture with specific construction instructions for each.

---

**MODULE 1: BILL AUDITING & ERROR DETECTION**

**Primary Tier:** Push to User
**Secondary Tier:** React to User (for investigation)
**Tertiary Tier:** Do for User (automated monthly audit cycle)

**What AI does in the background:** Ingests utility invoices, reconstructs rate calculations from tariff schedules, compares actual charges against what the tariff mathematically requires, flags discrepancies by type (wrong multiplier, wrong rate class, dead meter, baseline drift), cross-references current bill against 24-month historical pattern, applies pattern deviation detection (not just spike threshold).

**How output is surfaced:** A proactive alert pushed to the user's dashboard/inbox, before the user logs in. The alert should have a title, a dollar amount, and a confidence level. Example: "⚠️ Possible billing error detected: [Location Name] | Estimated overbilling: $4,200 | Confidence: High | Action available."

**Explanation provided (the "why I should care" layer):** Three components required by the evidence:

1. What was found: "Your electricity bill for this location includes a demand charge calculated at a multiplier of 1.2 rather than the 1.0 specified in your rate schedule."
2. Why it matters: "Based on the last 3 months, this has resulted in estimated overbilling of $4,200."
3. What to do: "We've prepared a dispute brief you can send to [Utility Name]. Click here to review and submit."

**Action the user takes:** Review the finding, confirm or dismiss it, send the dispute brief (or hand to energy manager to send). For the finance user persona: receive a one-page summary email. For the energy manager persona: access the full analysis with supporting documentation.

**Trust mechanism:** The first alert the system surfaces should be verifiable by the user without trusting the AI. The system should show its math: "Here is the tariff clause we referenced. Here is your bill. Here is the discrepancy." The user can verify manually before acting. This is the trust-building step that Walt Taylor described needing before accepting AI judgment.

**Evidence citations:** Roger Goldstein (baseline drift), Scott Czubkowski (dead meter), Ann Walston (documentation requirement), AdventHealth (data integrity prerequisite), Phil Combs (monetize every insight)

---

**MODULE 2: RATE OPTIMIZATION & TARIFF ANALYSIS**

**Primary Tier:** React to User
**Secondary Tier:** Push to User (when a better rate becomes available)
**Tertiary Tier:** Do for User (automated rate monitoring, quarterly rate comparison)

**What AI does in the background:** Continuously maintains a library of applicable rate schedules for each utility serving each customer location. Models what the customer's actual usage profile would have cost under each available rate. Monitors PUC filings and utility board decisions for rate changes in relevant jurisdictions. Calculates rate switch savings or exposure.

**How output is surfaced:** Two paths. (1) React to User: Energy manager queries "Is [Location] on the best available rate?" System provides comparative analysis with dollar impact. (2) Push to User: When a new rate schedule becomes available or a rate change is proposed that affects >5% of expected cost, system proactively alerts.

**Explanation provided:** Phil Combs's prescription is the design standard here — "Just get to the punch line. But then also have it make recommendations — for this customer, the utility just implemented a time-of-use rate, and based on the client's last 24 months of energy use, which one is more beneficial for them?" The output should summarize the tariff in plain language, show the modeling, and give a recommendation.

**Action the user takes:** Initiate a rate change request with the utility (using documentation Clear Current produces), or note for budget planning.

**Demo design note:** This is not the "wow" moment for most personas. Rate optimization is a strategic finding, not an operational alert. It works best as a React to User discovery — "Let me show you what happens when I ask the system whether your biggest location is on the right rate." But it doesn't create the visceral "we caught something you were losing money on" moment that bill auditing does.

**Evidence citations:** Phil Combs (tariff complexity, regulatory intelligence), Walt Taylor (ratchet rate complexity, duck curve), Andi Ault (regulatory intelligence to close budget timing gap), Troy Nevels (carbon taxation), Ann Walston (capacity charges tenfold increase)

---

**MODULE 3: ANOMALY DETECTION & ALERTING**

**Primary Tier:** Push to User
**Secondary Tier:** React to User (drill into what caused an anomaly)
**Do for User role:** Pattern deviation detection running continuously in background

**What AI does in the background:** This module is where the distinction between threshold-based detection (what incumbents do) and pattern deviation detection (what Clear Current should do) becomes a product differentiator. The AI must maintain a dynamic baseline model for each meter at each location, accounting for seasonality, weather correlation (validated by Troy Nevels and Phil Combs), occupancy patterns, and historical usage. Deviations from the expected pattern — not just threshold spikes — trigger alerts.

**Critical design note from evidence:** The baseline drift pattern (Roger Goldstein's neighbor's electricity, Scott Czubkowski's dead meter) reveals that the most valuable anomalies are ones that look normal on a threshold check. The AI needs to ask: "Is this baseline itself suspicious?" A meter showing $32/month for six consecutive months is not a spike — it's a flat-line that should be checked against operating records.

**How output is surfaced:** Proactive alerts, prioritized by dollar impact. The alert should surface before the user goes looking: "We detected a usage pattern at [Location] that suggests [possible equipment failure / dead meter / unauthorized usage]. Estimated financial impact: $X."

**Explanation provided:** Three levels required for different personas. For energy manager: technical detail including usage curve, weather normalization, comparison to peer locations. For finance user: dollar impact, trend chart, recommended action. For executive: one sentence + dollar figure.

**Action the user takes:** Dispatch investigation team to location. Initiate meter check with utility. Call vendor for equipment service.

**The critical trust design insight from this research:** The first anomaly alert that proves correct — verified by the user — is the trust-building moment. This means the system should prioritize surfacing high-confidence, verifiable findings before surfacing complex probabilistic findings. Build trust with slam-dunk alerts first, then introduce more sophisticated pattern detection as the user's trust deepens.

**Evidence citations:** James Norton (real-time anomaly flagging), Roger Goldstein (baseline drift, H2NO mental model), Ross Snow (missed $100K spike), Adam Zavadsky (threshold-based limitations), Andi Ault (flagging vs. looking)

---

**MODULE 4: REGULATORY INTELLIGENCE**

**Primary Tier:** Do for User (monitoring is fully autonomous)
**Secondary Tier:** Push to User (findings pushed to relevant users)
**React to User role:** Query "what rate changes are pending in Texas?"

**What AI does in the background:** Monitors Public Utility Commission filings, utility board meeting minutes, rate case dockets, and grid operator (ERCOT, PJM, MISO, etc.) announcements across all jurisdictions where the customer has active accounts. Identifies proposed rate changes, surcharges, and new tariff structures. Calculates projected financial impact on the customer's specific portfolio based on historical usage.

**This module is exclusively viable as Do for User.** No user is going to log in and manually query PUC filings. The value only exists if the system is watching continuously and pushes findings to the user before the rate change takes effect — which is exactly what Andi Ault described needing: "City of Austin rate changes are often not known until after UT Austin has already submitted its budget." That budget timing gap is the problem this module solves.

**How output is surfaced:** Proactive alert: "Rate change proposed for [Utility Name] that would affect [N] of your locations. Proposed effective date: [Date]. Estimated annual impact: $[X] based on your 12-month usage history. Your budget deadline is [Date]. View full analysis."

**Explanation provided:** Regulatory context (what was filed, by whom, for what reason), financial modeling (impact on this specific customer), action timing (when a decision is expected, when the customer must respond).

**Action the user takes:** Adjust budget projections. Consider hedging strategy. Potentially file comments in the rate case. Flag for finance team. The system should provide calendar integration: "This rate decision is expected by [Date]. Your budget submission deadline is [Date]. We recommend adjusting projections by [Date] to allow time for review."

**Demo design note for investor presentations:** This is the most differentiated feature in the product and the one most suited to a "nobody else does this" claim. Show a live PUC docket. Show the customer's portfolio in that utility's territory. Show the projected dollar impact. This demonstrates that the AI is doing ongoing work that no human could practically do.

**Evidence citations:** Phil Combs (most enthusiastic feature request, "super powerful"), Andi Ault (budget timing gap), Troy Nevels (carbon taxation complexity), Ann Walston (capacity charges driven by data center construction)

---

**MODULE 5: PORTFOLIO REPORTING & BUDGET SUPPORT**

**Primary Tier:** Push to User (automated monthly/quarterly reports)
**Secondary Tier:** React to User (custom queries for budget scenarios)
**Do for User role:** Report generation, benchmark tracking, trend analysis

**What AI does in the background:** Aggregates portfolio-level consumption and cost data. Calculates Energy Star equivalent metrics, peer benchmarking. Tracks budget vs. actual. Generates prior-month summary, year-over-year comparison, and forward-looking forecast based on current consumption trends and known rate changes. For healthcare: generates data needed for ESG/sustainability reporting (Scope 1, 2).

**How output is surfaced:** Automated monthly report delivered to finance user and energy manager simultaneously, formatted for each audience. Finance user receives: total spend, budget variance, forecast, top anomalies. Energy manager receives: consumption breakdown, efficiency metrics, anomaly detail, action items.

**The dual-audience requirement from the evidence:** Andi Ault confirmed she doesn't want to chat with the data — she wants a report. Troy Nevels wants to explore the data. Ann Walston wants to know where to invest capital. Scott Czubkowski wants his CEO to be able to ask a plain-language question. All four needs can be served from the same underlying data if the output layer is persona-adaptive.

**Action the user takes:** Finance: plug numbers into budget model (ideally, the system integrates with ERP). Energy manager: prioritize conservation projects. Executive: share with board.

**The Andi Ault ERP integration insight:** Her "#1 automation wish" was not about energy tools — it was about financial systems. If Clear Current can export report data in a format compatible with common ERP and financial systems, that bridges the last-mile problem for the finance user and creates stickiness that a pure energy tool cannot match.

**Evidence citations:** Andi Ault (ERP integration wish), Ann Walston (portfolio ROI prioritization), Sean Sevy (growth modeling gap), Scott Czubkowski (CEO natural language query), AdventHealth (sustainability reporting and ESG targets)

---

### 4B. Demo Sequence Design for the "Wow" Moment

Based on the complete evidence inventory, the module that creates the most immediate "wow" moment in a demo is **Module 3 (Anomaly Detection)** presented as a Push to User surprise finding — specifically a baseline drift example, not a spike alert.

**Why:** Spike alerts are what every competitor claims to do. A finding that looks normal on a threshold check but represents systematic overbilling is something no competitor demonstrates. It proves the AI is doing something genuinely different, not just faster.

**Recommended demo script structure:**

1. **Open with the problem framing (30 seconds):** "Your current system flags spikes. It doesn't catch patterns that have quietly become the new normal. Here's a real example of what that means."

2. **Show the baseline drift finding (2 minutes):** Pull up a fictional multi-site customer. Show three meters that have been paying consistent charges for 6 months. Highlight one that is paying $34/month consistently — the same amount, every month. "This looks fine to a threshold system. But here's what it actually means: this meter is at a location you vacated 8 months ago. You've paid $272 in the last 8 months for a building you don't occupy. At your scale of [X] locations, this type of silent drain — across all your inactive meters — is likely costing you $[Y] annually."

3. **Show the React to User capability (2 minutes):** "Now your energy manager wants to understand what else is happening at that utility. They type: 'What other billing patterns look unusual at AGL accounts in Georgia?' Here's what the system returns."

4. **Show the dual-audience output (1 minute):** "Your energy manager has found something. She pushes this report to your VP of Finance. Here's what that finance director sees — no energy jargon, just: 'We've identified $272 in verifiable overpayment at this address. Here is the dispute brief ready to send to your account representative.'"

5. **Close with the scale argument (30 seconds):** "At 2,300 locations, the question is not whether these errors exist — they do, at every company we've analyzed. The question is whether you have a system watching all of them simultaneously, 24/7, looking for patterns that don't look wrong until you know what to look for."

This sequence uses the Push to User tier as the trust hook, the React to User tier as the power demonstration, and the dual-audience output as the close. It maps directly to what the research shows converts skeptics: unsolicited findings, verified accuracy, dollar documentation.

---

### 4C. Trust-Building Sequencing for Enterprise Onboarding

The research evidence supports a specific onboarding sequence designed to build trust before asking users to accept AI judgment on high-stakes actions:

**Phase 1 (Days 1-14): Foundation and Verification**
Show users the data intake: here is every meter we've ingested, here is how each maps to your account records, here are any mapping discrepancies we found. This is entirely transparent and user-verifiable. The AI is not making judgments yet — it is showing its work on data quality. This addresses AdventHealth's foundation-first concern and Ann Walston's meter mapping year-of-effort problem.

**Phase 2 (Days 15-30): High-Confidence Alerts Only**
Push only high-confidence, mathematically verifiable findings. Wrong multiplier. Bill for a vacated address. Tax charge on a non-profit account. These are findings the user can verify by reading the tariff themselves. The AI is showing it can find what humans miss, on evidence that humans can check. This is Walt Taylor's "demonstrated accuracy at scale" requirement, applied to the onboarding window.

**Phase 3 (Days 31-60): Pattern Detection Introduction**
Introduce more sophisticated pattern analysis: baseline drift, seasonal anomalies, peer benchmarking deviations. By now, the user has verified Phase 2 findings and trusts the underlying data. They will extend that trust to findings they cannot as easily verify themselves.

**Phase 4 (Ongoing): Regulatory Intelligence and Forward-Looking Features**
These require the most trust — acting on a projected rate change before it's finalized. By this phase, the user has a track record of the system being right. The forward-looking features become believable because the historical performance record is established.

---

## 5. COMPETITIVE IMPLICATIONS

### Against ENGIE Impact (NG Insight)

The research gives Clear Current a precise competitive brief. ENGIE Impact's value is in the data moat (20 years of client history) and the outsourced payables operation. Their AI is internally focused on bill processing efficiency, not client-facing intelligence. Their anomaly detection is threshold-based, which misses baseline drift.

**Clear Current's positioning:** "ENGIE processes your bills. We understand them. We find what their threshold system can't see — the systematic patterns that look normal until someone does the math." The John Culver quote about wanting the tool to "tell us why we should care and what we can do to change it" is the competitive wedge. ENGIE tells you what you paid. Clear Current tells you whether you should have paid it.

**Partnership vs. displacement framing:** Adam Zavadsky's framing ("you can't manage what you can't measure") and the Arcadia data backbone confirmation suggest a partnership pathway: Clear Current's intelligence layer + ENGIE's data access = a combined offering. The displacement pathway (replacing ENGIE entirely) requires solving the data access cold-start problem. The partnership pathway is faster to revenue. Present both options to John and Dan and let them decide based on strategic appetite.

### Against EnergyCAP

EnergyCAP is the incumbent in higher education and faces the exact trust gap that Andee Chamberlain described: "EnergyCAP tells us that they can do that stuff, but it's harder than it sounds." Their gap is in district energy metering complexity and AI-native analysis.

**Clear Current's positioning:** Don't fight EnergyCAP on features. Fight on outcomes. "EnergyCAP stores your data. We analyze it and tell you what it means in dollars." The district energy metering gap (blending utility meter data with internal sub-meter data) is a specific technical wedge where Clear Current can win if the engineering is right.

**The competitive opening:** EnergyCAP's bill processing employee departure pattern (described at Texas State) represents a predictable switching moment. When institutional knowledge leaves, the organization is vulnerable. Clear Current should have a "replacement onboarding" playbook ready for exactly this scenario.

### Against Energy Print (Houston Methodist's tool)

Sean Sevy described Energy Print's gap clearly: growth modeling for an expanding portfolio. "Where we struggle is we're a system that grows a lot."

**Clear Current's positioning:** "Energy Print tracks your current portfolio. We model your future one." Scenario-based forecasting that incorporates new building parameters and projects utility spend before the first bill arrives is a feature Sean explicitly requested and no current tool provides. This is a healthcare-specific competitive advantage.

### Against Arcadia

Arcadia's role is as a data infrastructure provider, not a client-facing product. Walt Taylor confirmed ENGIE uses Arcadia's data backbone. Clear Current should view Arcadia as a potential integration partner (using their data access layer), not a direct competitor.

**The strategic nuance:** If Clear Current integrates directly with Arcadia's data layer, they match ENGIE's electronic bill coverage without building proprietary aggregation infrastructure. Combined with superior anomaly detection and a client-facing AI intelligence layer, this is the competitive combination.

### Against WatchWire/Tango and Similar Platforms

These platforms are not specifically named in this research corpus, so I will not manufacture evidence-based claims about them. What the research does establish is the competitive positioning principle: all existing platforms share the gap that John Culver articulated — they process, aggregate, and display without interpreting, explaining, or recommending. Clear Current's "why should you care + what can you do" layer is the category-defining differentiator.

### Against JLL (In-House Build)

Jamare Bates was explicit: at JLL's tier, the conversation is acquisition or enterprise licensing, not point-solution purchase. Clear Current should not target JLL's direct competitors as customers. Clear Current should pursue a licensing or channel partnership conversation with JLL — specifically for the mid-market clients that JLL serves but doesn't build custom tools for.

---

## 6. WELL-EVIDENCED VS. INFERRED

### Well-Evidenced (Multiple Independent Sources)

**The dual-audience design requirement** is confirmed by: Andi Ault (finance perspective), Troy Nevels (engineering perspective at same institution), Andee Chamberlain (energy ops perspective), Scott Czubkowski (crosses both), Ann Walston (VP/facilities perspective). Five independent sources across three verticals. This is the most robustly confirmed finding in the corpus.

**Threshold-based anomaly detection misses baseline drift** is confirmed by: Roger Goldstein (neighbor's electricity), Scott Czubkowski (dead meter), Ross Snow (missed $100K spike), Adam Zavadsky (acknowledges the limitation himself). Four independent sources, including one from the incumbent side.

**Finance users want Push to User as primary interface** is confirmed by: Andi Ault ("I don't want to look for it"), Ann Walston (outsources to Get Choice because manual review is insufficient), Scott Czubkowski (describes CEO asking plain-language questions as the product's highest-value moment).

**Regulatory intelligence is an underserved feature** is confirmed by: Phil Combs (most enthusiastic feature request), Andi Ault (budget timing gap from late rate changes), Troy Nevels (carbon taxation complexity), Ann Walston (capacity charge tenfold increase from data centers).

**Data integrity must precede AI intelligence** is confirmed by: AdventHealth (foundation-first philosophy), Adam Zavadsky ("you can't manage what you can't measure"), Ann Walston (year of meter mapping work), Andee Chamberlain ("it's really hard to meter").

### Evidenced by Single Source (Use with Qualification)

**Non-profit tax exemption verification** is described only by John Culver at AdventHealth. It is highly plausible and structurally consistent with other billing complexity findings, but is not multi-source confirmed.

**Cubic footage vs. square footage benchmarking flaw** is described only by Walt Taylor. It is technically persuasive and I find it credible, but it comes from one person who may have an idiosyncratic view. Validate before building.

**ENGIE Impact's Arcadia data backbone** is described by Walt Taylor and independently confirmed through Arcadia's own technical documentation. The documentation confirmation elevates this from single-interview to dual-source status.

**Sewer overbilling structural issue** is described only by Walt Taylor. No other interviewee raised it. High potential relevance for QSR clients, but needs validation from a water utility expert before being included in product claims.

**The 30-day champion conversion window** is my inference from the research, not an explicit finding. The evidence supports prioritizing a "wow" moment in the first 30 days, but no interviewee specified a 30-day conversion window explicitly.

### Analytical Inferences (My Reasoning, Not Research Evidence)

**The trust-building sequence (foundation → high-confidence alerts → pattern detection → forward-looking)** is my design inference from the collective evidence. The evidence supports the principle (trust must be built sequentially); the specific phasing is my interpretation.

**The demo script structure** is my construction. It is grounded in the evidence but represents design judgment about how to sequence the evidence into a persuasive demonstration.

**The partnership-first vs. displacement framing for ENGIE** is my strategic inference from the competitive landscape. The evidence supports both paths; the preference for partnership-first is my recommendation based on what I've seen work in similar market entry situations.

---

## 7. OPEN QUESTIONS AND RESEARCH GAPS

**Gap 1: What is the actual adoption rate and satisfaction level with Peer AI at Ascension?**
Scott Czubkowski described Peer AI as only nine months old at Ascension, noting they are still "scratching the surface." This is the most sophisticated healthcare energy buyer in the corpus and they are actively engaged with a direct Clear Current competitor. Understanding what Peer AI does well, where it falls short, and what Ascension's expansion plans are for the platform would be the highest-value competitive intelligence not currently in the research. A follow-up interview focused specifically on Peer AI's capabilities and gaps would be investment-grade research.

**Gap 2: What does the energy manager persona's React to User workflow actually look like on a day-to-day basis?**
The research captures what energy managers want to ask but doesn't capture how often they would actually log in and query the system versus receiving push notifications. Phil Combs's firefighting observation suggests the answer is "less often than we'd hope," but we don't have usage behavior data. An observational study of how energy managers at Texas State or Houston Methodist actually spend their time with current tools (EnergyCAP, Energy Print) would clarify whether the React to User chat interface is a daily driver or an occasional power tool.

**Gap 3: What is the realistic recovery rate on billing errors identified by AI?**
Ann Walston's $1M recovery is described as "incredibly unheard of." Marc Spieler asked whether utilities actually issue refunds. The research identifies many billing errors but provides limited data on what percentage of identified errors result in actual credit recovery. This is the critical commercial proof point. Clear Current needs documented case studies with the full cycle: error identified → utility engaged → credit issued → dollars returned. Without this, the "savings" claim is theoretical.

**Gap 4: What is the healthcare IT security review process timeline, and how does Clear Current's data access model get approved?**
Scott Sukits's 2.5-year BrainBox AI approval saga is alarming for any vendor entering healthcare. The research identifies cybersecurity as a trust barrier but doesn't map the specific approval process or provide data on what documentation accelerates it. Before making healthcare a primary vertical, Clear Current needs a detailed understanding of what a typical hospital system's IT security review requires for a billing data platform (not a BAS platform), and how long that process takes.

**Gap 5: What does the actual onboarding cost and timeline look like for a 36-hospital system?**
Ann Walston spent a year mapping meters to buildings before her system could provide meaningful insights. This is a pre-sales qualifying question and a product design constraint, but the research doesn't provide data on how long it took BSMH to onboard Get Choice or what the process looked like. Before healthcare can be a serious vertical, Clear Current needs a realistic estimate of onboarding cost and timeline for health systems that do and don't have completed meter maps.

**Gap 6: How do energy managers currently share findings with finance teams, and how painful is that process?**
The dual-audience design requirement is well-evidenced, but the research doesn't capture the current handoff process in enough detail to design the specific mechanism. When Andee Chamberlain at Texas State wants to tell the finance team something important, what does she actually do today? Email an Excel export? Schedule a meeting? Write a report? Understanding the current handoff friction would directly inform the "push to finance user" feature design.

**Gap 7: What is AdventHealth's evaluation timeline for a new billing intelligence platform?**
John Culver described specific gaps in ENGIE Impact (tax exemption, portfolio change management, intelligent bill interpretation). He is an active buyer with described needs and a named incumbent they are dissatisfied with. But the research doesn't establish whether AdventHealth is actively evaluating alternatives or whether this is a theoretical wish list. A direct follow-up conversation with John Culver and the scheduled Allegra Wiesler call would determine whether this is a near-term sales opportunity or a future-state aspiration.

**Gap 8: Is there a meaningful customer segment between QSR operators (2,000+ locations) and single-site commercial buildings where the product provides maximum ROI?**
Walt Taylor described the QSR segment as complex enough at enterprise scale to challenge AI accuracy. Jamare Bates's mid-market tier — companies with enough scale for ROI but not enough resources to build internally — is Clear Current's sweet spot. But the research doesn't define where that tier starts and ends in terms of location count, utility spend, or organizational complexity. A sizing analysis of the mid-market commercial segment (50-500 locations, $5M-$50M annual utility spend) would help John and Dan define the ICP precisely.

---

_This analysis was built by reading every document in the corpus twice — once for content, once for what the content implies. The goal was not to summarize what sixteen people said. The goal was to understand what those sixteen people collectively reveal about the product design decisions Dan Schreiber faces. Every inference is labeled. Every claim is cited. If I got something wrong, the evidence is on the page — check me against it._

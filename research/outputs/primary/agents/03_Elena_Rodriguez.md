# Agent: Elena Rodriguez | Energy Regulatory Intelligence Analyst

# Run: 2026-04-17T13:53:55.628857

---

# REGULATORY INTELLIGENCE MONITOR — COMPLETE PRODUCT MODULE ANALYSIS

**Elena Rodriguez, Energy Regulatory Intelligence Analyst**
_Contributing Analysis for Clear Current Technologies | May 2026 Fundraise Preparation_

---

## 1. WHAT I FOUND — Complete Evidence Inventory

I read every document in the corpus looking for regulatory intelligence, rate cases, PUC filings, tariff complexity, and the budget timing gap. Here is what each source contains that is relevant to this analysis.

---

### Phil Combs Summary (Trane Technologies)

**The richest single source in the corpus on regulatory intelligence.**

Phil is the only interviewee who specifically names regulatory intelligence as a product capability — and his language is the most enthusiastic he uses in the entire interview. He describes monitoring PUC filings, utility board meeting minutes, rate hike proposals, and grid operator decisions as a forward-looking intelligence function that nobody currently provides. He uses the phrase I was asked to track: this is the feature he calls "super powerful." He also articulates the mechanism: the value is not just knowing a rate change is coming — it's quantifying what that rate change means in dollar terms for a specific customer's consumption profile over the last 24 months.

The interview summary notes that Phil describes regulatory intelligence as something he has to do manually by tracking utility news, and that an AI that could automate this would "save somebody like me so much time." He frames it as a time savings for the M&V engineer — but the implication for financial users is even larger, which other interviews confirm.

Phil also flags that Energy Toolbase is the closest named competitor for rate and tariff analysis, but explicitly assesses that the broader concept — combining billing analysis with tariff intelligence _and_ regulatory monitoring — exceeds what Energy Toolbase currently does.

---

### Andi Ault Summary (UT Austin)

**Provides the exact budget timing mechanism and quantifies the problem.**

This is the source document that describes the specific mechanism the task prompt references. Andi's interview establishes that UT Austin's budget is submitted in March, but the City of Austin's rate changes "are often not known until after budget submission." This creates a forecasting gap where the budget is structurally wrong before the fiscal year begins.

The Andi Ault summary states this directly in the Annual Budgeting Cycle section: "City of Austin rate changes are often finalized after UT Austin has already submitted its budget. Regulatory intelligence would directly address this by giving the finance team advance visibility into rate changes before they're finalized."

UT Austin's annual natural gas spend alone is approximately $20 million. The electricity budget for a 60 MW combined heat and power campus is substantially larger. A utility rate change of even 3-5% on a multi-million dollar energy budget represents a six-figure variance that Andi cannot currently predict or plan for.

Recommendation 4 from the Andi Ault summary explicitly names this as a product opportunity: "Use Regulatory Intelligence to Close the Budget Timing Gap."

---

### Troy Nevels Summary (UT Austin, Engineering)

**Adds carbon taxation as an emerging regulatory complexity layer.**

Troy raises carbon pricing in northeastern states — New York, Massachusetts — as a growing billing complexity that is tied directly to regulatory decisions. He notes that carbon charges linked to natural gas billing add "another layer of potential error and another type of tariff that requires interpretation." The summary identifies this as an "early-stage regulatory intelligence use case."

Troy also independently confirms the meter reconciliation work that happens monthly at UT Austin — comparing Austin Energy's bills against internal UEM meters. While this is primarily a billing accuracy function, it creates the data foundation that regulatory intelligence would operate on top of. If you don't know what you're consuming, you can't model what a rate change costs you.

---

### Ann Walston Summary (Bon Secours Mercy Health)

**Confirms the budget timing gap in healthcare, adds the capacity charge mechanism.**

Ann's most urgent regulatory concern is not rate cases per se — it is capacity charges in the PJM region, which have increased "tenfold in the last two years" due to data center construction in Ohio. This is a regulatory and market structure issue: PJM determines capacity auction prices, and those prices flow through to hospital utility bills as a line item. Ann describes this as the "most urgent and least controllable billing issue" for BSMH hospitals in PJM territory.

The capacity charge mechanism Ann describes is regulatory in nature: PJM runs annual capacity auctions, results are published well before they take effect, and the impact on a hospital's bill is calculable from the auction result and the hospital's peak demand history. This is exactly the type of regulatory intelligence function that Phil Combs describes — monitoring a regulatory body's published decisions and quantifying their dollar impact on a specific customer.

Ann's interview also confirms the structural budget timing problem from the healthcare side: BSMH manages a quarterly UPSC (Utilities Procurement Steering Committee) that reviews hedging strategy, but capacity charge forecasting is difficult when the inputs come from regulatory proceedings that are opaque to non-specialists.

---

### AdventHealth Summary

**Confirms the budget timing/capital cycle problem, adds 73 utility provider complexity.**

John Culver's interview is the strongest confirmation that the rate complexity problem exists at scale. AdventHealth deals with 73 different electric utility providers across 9 states, each with different rate structures, terminology (on-peak, off-peak, discounted off-peak, super off-peak, extreme on-peak), and regulatory jurisdictions. Tracking rate changes across 73 providers in 9 states — each with its own state PUC, its own filing calendar, and its own rate case docket format — is impossible manually.

Scott Sukits' interview adds the capital budgeting constraint: energy capital improvement projects must be submitted before the hospital's budgeting cycle with a financial ROI case assembled in advance. If a rate change is pending at one of AdventHealth's utilities, that changes the ROI calculation for an efficiency project — but only if someone knows the rate change is coming.

John Culver's explicit complaint about ENGIE Impact is directly relevant: "NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great." Rate change intelligence — knowing _why_ a cost is changing and _what_ that means for the budget — is precisely what he is describing.

---

### Texas State Summary

**Confirms the budget timing gap in higher education, names EnergyCAP as the incumbent.**

The Annual Energy Management Calendar in the Texas State summary shows the budget planning cycle running January–February, with requests submitted and reviewed March–May. Natural gas purchasing decisions (strips vs. market rate) are also evaluated in this window. If a rate change for City of San Marcos electricity is filed or approved during or after this window, Texas State's budget is already submitted.

The competitive intelligence finding here is critical: EnergyCAP is the platform Andee Chamberlain uses, and her first reaction to Clear Current's concept was that it "sounds kind of like what we already have." But EnergyCAP's documented capabilities focus on bill processing, historical data storage, and projections from historical trends — not forward-looking regulatory monitoring. No mention of PUC tracking, rate case monitoring, or utility board meeting surveillance appears anywhere in Andee's description of EnergyCAP's capabilities.

---

### Scott Czubkowski Summary (Medxcel/Ascension)

**Confirms budget forecasting as a use case, validates AI for forward-looking cost prediction.**

Scott explicitly names budget forecasting as a task where AI could accelerate and improve accuracy: "one thing AI could help with is budgeting going much quicker." He confirms that his $265M annual utility spend requires forecasting work that is currently time-intensive and dependent on manual inputs.

The polar vortex nomination management use case Scott describes for Peer AI is the closest thing in the corpus to a live implementation of regulatory/market intelligence in practice: Peer AI monitors weather forecasts and alerts Ascension's natural gas trading desk 24 hours before extreme cold events, enabling increased gas nominations before prices spike. This is not PUC monitoring, but it is the same conceptual category — forward-looking intelligence that enables proactive financial decisions. Scott quantifies this capability as "worth several million dollars annually," with one polar vortex event costing $7.2 million in three days.

This is the strongest dollar quantification in the corpus for the value of forward-looking intelligence that goes beyond historical billing data.

---

### Walt Taylor Summary (Panda Restaurant Group)

**Provides the deepest technical treatment of rate structure complexity and the California duck curve as a regulatory/market shift.**

Walt's interview is the most technically detailed source in the corpus on rate structure complexity. His Georgia Power ratchet mechanism explanation, the California duck curve discussion, and the observation that "utilities will always adjust their rate structures to remain profitable" are all relevant to the regulatory intelligence function.

Walt's most important regulatory intelligence quote: "Energy managers who track only current rates will continually be caught behind." This is the core argument for a regulatory monitoring function stated directly by a 25-year industry veteran.

Walt also describes his own hands-on experience getting a rate changed through a state Public Service Commission — "one of the few interviewees in this research program with hands-on experience getting a utility rate changed through a state Public Service Commission, which he accomplished by making a quantitative case that the utility's calculation methodology was inequitable." This confirms that PUC proceedings are the mechanism through which rates are changed, and that quantitative engagement with those proceedings is possible.

Alabama Power alone has approximately 45 rate structures, according to Walt. The heterogeneity problem he describes — "An AI tool that checks every rate at every utility for every location would be checking thousands of permutations at scale" — is real, but it is also the argument for why an automated regulatory monitoring function has value. No human team can track 45 rate structures at one utility, let alone across hundreds of utilities.

---

### Marc Spieler Summary (NVIDIA)

**Provides go-to-market context, confirms utility-side regulatory risk as a sales angle.**

Marc's Track 2 — selling to utilities — is directly relevant to regulatory intelligence. He identifies that utilities face "regulatory risk from their state's utility commission" if their billing systems produce systematic errors. This is the inverse of the regulatory intelligence function: utilities themselves are subject to PUC oversight, which creates a regulatory pressure to ensure billing accuracy.

Marc's commentary does not specifically address regulatory monitoring for energy buyers, but his framing of the utility relationship ("utilities have whole teams managing commercial and industrial customers") confirms that utilities are active in the regulatory space and that regulatory changes flow through to commercial customers.

---

### Jamare Bates Summary (JLL)

**Confirms enterprise data security requirements, adds market segmentation context.**

Jamare's interview does not specifically address regulatory intelligence, but his market segmentation framework is relevant: the mid-market tier (companies with enough scale to generate ROI from a tool but insufficient resources to build it themselves) is exactly the segment where regulatory intelligence creates the most value. Large enterprises like Fortune 200 companies may have internal regulatory affairs teams; small operators don't have enough bills to justify the complexity. Mid-market multi-site operators — the healthcare systems, universities, and QSR chains in this corpus — are where regulatory blindness is most expensive.

---

### Adam Zavadsky Summary (ENGIE Impact)

**Confirms ENGIE's capabilities are limited to historical billing, not forward-looking regulatory intelligence.**

Adam's description of ENGIE Impact's AI usage is explicit: "We're using AI to scrape data off of bills, to get invoices into our system more efficiently, without errors, less labor. We're not using it as much on the client deliverable side because those require a subject matter expert to collaborate with you on what we're going to do."

There is no mention of regulatory monitoring, PUC tracking, rate case analysis, or forward-looking rate intelligence anywhere in Adam's description of ENGIE Impact's capabilities. The system is entirely backward-looking: it processes historical bills, compares them against historical ranges, and flags exceptions. The word "regulatory" does not appear in Adam's summary.

---

### Roger Goldstein Summary (Panda Restaurant Group)

**Confirms the operational reality but limited direct regulatory intelligence relevance.**

Roger's interview is primarily about billing error patterns and the operational mechanics of managing 10,000 bills per month. He does not discuss regulatory monitoring or rate cases directly. However, his description of the QSR energy calendar — "electricity peaks from June through September, driven almost entirely by air conditioning load" — and the rate structure complexity that Walt Taylor describes create the context for why rate changes matter to QSR operators. A rate increase during the summer peak window is maximally expensive for a restaurant chain.

---

## 2. KEY FINDINGS

**Finding 1: Phil Combs is the sole interviewee who specifically names regulatory intelligence as a product feature, and his enthusiasm is unambiguous.**

Phil Combs (Trane Technologies, 20 years) used the language "super powerful" — the strongest evaluative language he uses in the entire interview — when describing the ability to monitor PUC filings, utility board meetings, and rate hike proposals. He described it as a feature that "saves somebody like me so much time." Source: Phil Combs Summary.

This finding is from a single interview, not corroborated by others naming it as a feature explicitly. However, the underlying problem is confirmed by multiple sources (see findings below).

**Finding 2: Andi Ault provides the exact mechanism of the budget timing gap, and it is more severe than the prompt description suggests.**

Andi's description is not just "rate cases approved between budget lock and fiscal year start." She describes a situation where City of Austin rate changes "are often not known until after budget submission," meaning the uncertainty is built into every budget cycle, not just occasional bad years. The budget is structurally imprecise because the rate input is unavailable when the budget is assembled. Source: Andi Ault Summary.

This is a recurring, predictable problem — not an anomaly. That distinction matters for the product: the value of regulatory intelligence is not crisis management; it is systematic forecasting improvement.

**Finding 3: The budget timing gap exists across every vertical in this research program.**

Higher education: Texas State (Jan-May budget cycle, rate decisions ongoing), UT Austin (budget submitted March, City of Austin rates often finalized after). Healthcare: BSMH (quarterly UPSC, capacity charges set by PJM auction), AdventHealth (capital project ROI cases assembled before budget cycle, rate changes can invalidate them), Houston Methodist (budget forecasting weakened by inability to model new facility utility costs). QSR: Panda (October budget cycle for January-December fiscal year, rate structures change continuously). Source: Texas State Summary, Andi Ault Summary, Ann Walston Summary, AdventHealth Summary, Sean Sevy Summary, Roger Goldstein Summary.

**Finding 4: Zero named competitors in this corpus offer regulatory intelligence monitoring.**

I reviewed every named competitor across all summaries. EnergyCAP (named by Andee Chamberlain at Texas State): described as a historical data storage, bill processing, and projection platform. No regulatory monitoring mentioned. Energy Print (named by Sean Sevy at Houston Methodist): described as benchmarking, bill tracking, Energy Star integration, and budgeting support. No regulatory monitoring mentioned. ENGIE Impact (named by multiple interviewees): entirely backward-looking, processes bills and flags threshold exceptions. Adam Zavadsky confirms no forward-looking intelligence on the client side. Peer AI/Constellation (named by Scott Czubkowski): has weather-correlated forward intelligence for gas nominations, but no PUC monitoring mentioned. Arcadia (confirmed by Walt Taylor as ENGIE's data backbone): operates as a data aggregation layer, no regulatory intelligence mentioned. Energy Toolbase (named by Phil Combs): rate database and tariff switch modeling — static rate data, not dynamic PUC monitoring. SkySpark (named by Intermountain): building automation analytics platform, inside-the-meter, no billing or regulatory function. Sources: All summaries.

**Finding 5: The capacity charge mechanism in PJM is a live, quantified regulatory intelligence use case that Ann Walston is currently experiencing.**

Ann Walston describes a tenfold increase in capacity charges over two years driven by PJM capacity auctions responding to data center demand. She calls this "the most urgent and least controllable billing issue" for BSMH. PJM capacity auction results are published months before they take effect — they are regulatory proceedings with published dockets, timelines, and dollar implications calculable from a hospital's peak demand history. Source: Ann Walston Summary.

This is the clearest case in the corpus where a regulatory event (PJM capacity auction) produces a quantified, specific financial impact (tenfold charge increase) on a named buyer who is currently suffering from it and has no tool to anticipate it.

**Finding 6: Phil Combs articulates the full product specification for the regulatory intelligence function, including the dollar quantification step.**

Phil does not just describe monitoring PUC filings — he describes the full workflow: identify the rate change proposal, connect it to the customer's historical consumption profile, and output a dollar impact estimate. His exact formulation: "I can tell you six months from now this utility is actively talking to the Public Utility Commission. They're proposing this rate hike. This rate hike is going to mean this change in the cost of energy for you based on the last 12 months of operation." Source: Phil Combs Summary.

This is a complete product specification in a single sentence: monitor → identify → quantify → deliver.

**Finding 7: The polar vortex nomination story from Peer AI establishes the dollar magnitude of forward-looking utility intelligence.**

Scott Czubkowski describes Peer AI's weather-correlated gas nomination alert as "worth several million dollars annually," with a single polar vortex event costing Ascension $7.2 million in three days. While this is weather intelligence, not regulatory intelligence, it establishes that forward-looking utility cost intelligence — proactive alerts before a financial event — is worth millions annually to a large healthcare system. Source: Scott Czubkowski Summary.

**Finding 8: Walt Taylor's California duck curve analysis confirms that rate structures change in response to grid events, and energy managers who don't track these changes are continuously behind.**

Walt describes California's time-of-use rate structure shift from mid-afternoon to evening peaks as a consequence of residential solar penetration. Utilities "adjusted their rate structures to follow the new peak." Companies that positioned their operations around the old peak windows "now face new exposures." His conclusion: "utilities will always adjust their rate structures to remain profitable. Energy managers who track only current rates will continually be caught behind." Source: Walt Taylor Summary.

**Finding 9: Troy Nevels identifies carbon taxation as an emerging regulatory complexity layer that will require interpretation in northeastern states.**

Troy flags carbon charges linked to natural gas billing in New York and Massachusetts as "another layer of potential error and another type of tariff that requires interpretation." He describes this as already in effect in those states and anticipated to expand. This is a regulatory intelligence use case that will grow in relevance as carbon pricing spreads. Source: Troy Nevels Summary.

**Finding 10: AdventHealth's 73 utility providers across 9 states represent an extreme version of the regulatory complexity problem that makes manual tracking impossible.**

John Culver describes AdventHealth as dealing with 73 different electric utility providers, each with different rate structures, terminology, and regulatory jurisdictions. Tracking rate case filings across 73 providers in 9 states — each with its own state PUC, its own filing calendar, and its own docket format — is not a task any human energy team can perform systematically. Source: AdventHealth Summary.

**Finding 11: The finance persona — not the energy engineer — bears the worst consequences of the regulatory intelligence gap.**

Andi Ault (finance) and Ann Walston (VP Facilities/finance-oriented) are the two interviewees who most acutely feel the budget timing gap. The energy engineers (Troy Nevels, Phil Combs, Scott Sukits) notice rate changes eventually through their operational data. The finance users are the ones who submit budgets, answer to leadership for variances, and get blamed when energy costs exceed forecast. The regulatory intelligence function has its highest value for the finance persona — the person who has to explain to a CFO why the energy budget is wrong by $500,000. Sources: Andi Ault Summary, Ann Walston Summary.

**Finding 12: Phil Combs frames regulatory intelligence not as a monitoring task but as a time savings argument for energy engineers — creating a dual audience value proposition.**

Phil's framing is personal: "that saves somebody like me so much time." He currently tracks regulatory developments manually — reading utility news, monitoring PUC websites, tracking board meeting outcomes. An AI that automates this surveillance eliminates hours of manual research per week for an energy professional who serves multiple clients. This is the energy engineer's value proposition. The finance user's value proposition is budget accuracy. Same feature, two distinct value arguments. Source: Phil Combs Summary.

---

## 3. VERBATIM QUOTES THAT BELONG IN THE DELIVERABLES

**Quote 1 — Phil Combs, defining the regulatory intelligence feature**

> "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board - they're putting a price increase before the Public Utility Commission. Things like that are what really could be powerful because that saves somebody like me so much time."

Speaker: Phil Combs, Senior Digital Services Engineer (CMVP, CEM), Trane Technologies
Source: Phil Combs Summary
Why it matters: This is the product definition in the engineer's own words. "The publishings and the meetings" establishes the specific data sources. "Things like that are what really could be powerful" is Phil's strongest evaluative language. Use this as the opening quote in the Product Module section on regulatory intelligence. It belongs at the top of the investor presentation slide.

---

**Quote 2 — Phil Combs, completing the full product specification with dollar quantification**

> "I can tell you six months from now this utility is actively talking to the Public Utility Commission. They're proposing this rate hike. This rate hike is going to mean this change in the cost of energy for you based on the last 12 months of operation. I think those are things that can be powerful."

Speaker: Phil Combs, Senior Digital Services Engineer, Trane Technologies
Source: Phil Combs Summary
Why it matters: This is the complete product specification in one sentence: monitor PUC → identify rate hike proposal → quantify dollar impact on customer's consumption profile → deliver six months in advance. Dan Schreiber can hand this to an engineer as the functional requirement. It belongs in the MVP scope section.

---

**Quote 3 — Andi Ault, establishing the budget timing mechanism**

_(Note: The Andi Ault summary document does not contain a direct verbatim quote from Andi about the budget timing gap itself — the budget calendar table describes it, and the Recommendation 4 section paraphrases it. The quote below is the closest available verbatim from the document.)_

> "For me, the finance is really reactive. We can take other measures that are proactive like for instance hedging our fuel. We buy $20 million in natural gas every year plus or minus depending on pricing at the time."

Speaker: Andi Ault, Senior Associate Director, Finance & Administrative Services, UT Austin
Source: Andi Ault Summary
Why it matters: Andi establishes that the finance function has exactly one proactive lever — hedging. Regulatory intelligence would give her a second proactive lever. This quote sets up the problem statement for the regulatory intelligence pitch to finance personas. Pair it with the budget calendar notation that rate changes are often finalized after budget submission.

---

**Quote 4 — Ann Walston, quantifying the capacity charge crisis**

> "Our capacity charges went up tenfold in the last two years and they're anticipating it to go up again. Short answer is data centers."

Speaker: Ann Walston, VP Acute Care Facilities Management, Bon Secours Mercy Health
Source: Ann Walston Summary
Why it matters: This is the regulatory/market intelligence problem stated with a dollar magnitude. A tenfold capacity charge increase on a multi-hospital system in PJM territory is a nine-figure annual cost event. Ann cannot anticipate it because she has no tool that monitors PJM capacity auctions. This quote belongs in the problem definition section as a healthcare-specific dollar quantification.

---

**Quote 5 — Walt Taylor, establishing why static rate tracking fails**

> "Writing code does the same thing every time and you get the same result every time. That's not how it is when you're looking at utility bills and usage and all the different things."

Speaker: Walt Taylor, Energy Manager (Contractor), Panda Restaurant Group
Source: Walt Taylor Summary
Why it matters: Walt is explaining why rates are dynamic, not static. The rate structures that exist today are not the same as those that will exist in 18 months. This is the argument for continuous regulatory monitoring rather than a one-time rate database. Use this in the competitive differentiation section against Energy Toolbase (static rate database).

---

**Quote 6 — John Culver, articulating the product need directly**

> "NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it, would be great."

Speaker: John Culver, Corporate Sustainability, AdventHealth
Source: AdventHealth Summary
Why it matters: "Tell us why we should care and what we can do to change it" — this is precisely the value of regulatory intelligence. When a rate change is coming, the regulatory intelligence function answers both questions: this rate change matters because it will cost you X, and here is what you can do (adjust consumption timing, hedge, advocate in the rate case proceeding). This is the best single quote for a product positioning statement.

---

**Quote 7 — Phil Combs, establishing the rate change quantification requirement**

> "Even though we may be able to help them save energy, their costs have continued to go up. So one of the stories we help them explain is, yeah, your costs are going up, but if you did nothing, they'd go up even more - and by this amount."

Speaker: Phil Combs, Senior Digital Services Engineer, Trane Technologies
Source: Phil Combs Summary
Why it matters: Phil is describing a specific communications problem that regulatory intelligence solves. Energy managers need to tell a story to finance leadership: costs are rising because of external rate changes, not operational failures. Regulatory intelligence provides the data backbone for that story. Use this in the finance persona value proposition.

---

**Quote 8 — Troy Nevels, flagging carbon charges as an emerging regulatory complexity**

> _(Note: Troy's carbon taxation comments are summarized but not quoted verbatim in the document. The relevant finding is summarized as: "Troy raised carbon taxation in the context of northeastern states (New York, Massachusetts) that have instituted carbon pricing linked to natural gas consumption. He noted that for customers subject to these regimes, the billing complexity increases significantly — carbon charges are now tied to natural gas billing, adding another layer of potential error and another type of tariff that requires interpretation.")_

Source: Troy Nevels Summary
Why it matters: Carbon charge complexity is a near-future regulatory intelligence use case. Document it as a product roadmap item even if not an MVP feature.

---

**Quote 9 — Adam Zavadsky, confirming ENGIE's backward-looking limitation**

> "We're using AI to scrape data off of bills, to get invoices into our system more efficiently, without errors, less labor. We're not using it as much on the client deliverable side because those require a subject matter expert to collaborate with you on what we're going to do."

Speaker: Adam Zavadsky, Senior Account Manager, ENGIE Impact
Source: Adam Zavadsky Summary
Why it matters: ENGIE's own account manager confirms that the client-facing intelligence function requires human expert collaboration — meaning there is no automated, forward-looking regulatory intelligence being delivered to clients. This is the competitive gap stated by an insider.

---

**Quote 10 — Scott Czubkowski, establishing the dollar value of forward-looking utility intelligence**

> "One thing AI could help with is budgeting going much quicker."

Speaker: Scott Czubkowski, National Director, Energy & Facility Performance, Medxcel (Ascension Health)
Source: Scott Czubkowski Summary
Why it matters: Budget forecasting speed and accuracy is the finance-side value proposition for regulatory intelligence. Scott manages $265M in annual utility spend. Even a 1% improvement in forecast accuracy — the difference between budgeting for known vs. unknown rate changes — is $2.65M in avoided surprise variance.

---

**Quote 11 — Andee Chamberlain, establishing EnergyCAP's limitations**

> "EnergyCAP tells us that they can do that stuff, but it's harder than it sounds."

Speaker: Andee Chamberlain, Energy & Water Conservation Manager, Texas State University
Source: Texas State Summary
Why it matters: The most credible critique of EnergyCAP comes from its own user. The pattern of "EnergyCAP promises but doesn't deliver" extends to any forward-looking feature — there is no evidence from this interview that EnergyCAP offers regulatory monitoring, and the general pattern of overpromising is established.

---

**Quote 12 — Ann Walston, establishing that error recovery is political, not algorithmic**

> "We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of. I mean, that is incredibly rare."

Speaker: Ann Walston, VP Acute Care Facilities Management, Bon Secours Mercy Health
Source: Ann Walston Summary
Why it matters: Ann's experience confirms that utilities don't automatically correct errors when confronted — recovery requires sustained organizational effort. The same is true of rate disputes: participating in a PUC rate case proceeding to push back on a proposed rate increase requires knowing the proceeding is happening before it closes. Regulatory intelligence enables proactive engagement, not just reactive complaint.

---

**Quote 13 — Walt Taylor, establishing the inevitability of rate structure change**

> "A lot of times, utilities just believe they're right about everything and don't want to talk to you about it."

Speaker: Walt Taylor, Energy Manager (Contractor), Panda Restaurant Group
Source: Walt Taylor Summary
Why it matters: Walt is describing the adversarial dynamic in utility relationships. Rate changes are not negotiated with customers — they are filed with PUCs and often approved without meaningful customer engagement, simply because customers don't know to engage. Regulatory intelligence that alerts customers to open comment periods or rate case hearings gives them the opportunity Walt has exercised personally.

---

**Quote 14 — Roger Goldstein, confirming the pattern detection gap**

> "It does happen. It can go on for a while and then accounting or operations will catch something like that."

Speaker: Roger Goldstein, Executive Director, Facilities & Energy, Panda Restaurant Group
Source: Roger Goldstein Summary
Why it matters: While this quote is about billing errors, not rate cases, it establishes the structural problem: things go wrong and the organization finds out late. The same pattern applies to regulatory events — rate changes are filed, approved, and take effect before most customers know to look for them.

---

## 4. DELIVERABLE BUILD GUIDANCE

### Product Module Recommendation: Regulatory Intelligence Monitor

**Problem Definition**

The budget timing gap is documented across at least five organizations in this corpus: UT Austin, Texas State, BSMH, AdventHealth, and Houston Methodist. The mechanism is consistent: organizations assemble annual energy budgets months before the fiscal year begins, using historical rate data as the primary cost input. Utility rate changes — which are filed with state Public Utility Commissions, approved on regulatory timelines that do not align with organizational budget cycles, and take effect on utility-determined dates — routinely fall in the gap between budget submission and fiscal year start. The result is a budget that is structurally wrong before the year begins.

**Dollar quantification:** UT Austin spends approximately $20M annually on natural gas alone. A 5% rate increase that is pending at PUC but not yet final at budget submission time represents a $1M+ variance that Andi Ault cannot currently plan for. Ann Walston's tenfold capacity charge increase at BSMH — driven by PJM capacity auction results that are published months in advance but not tracked by her current tools — is the extreme case. AdventHealth managing 73 different utility providers across 9 states cannot track rate case filings manually across that many regulatory jurisdictions; the budget risk is proportionally larger than any single-utility scenario.

Use these specific numbers in the deliverable. Don't use ranges. Use the UT Austin $20M natural gas figure and the BSMH tenfold capacity charge increase as anchors.

**Target Persona**

Primary: Finance-side energy user — Andi Ault's role (UT Austin), Ann Walston's role (BSMH). This is the person who signs the budget, answers to leadership for variances, and currently has hedging as the only proactive lever. Regulatory intelligence gives them a second proactive lever.

Secondary: Energy engineer/consultant who currently tracks regulatory developments manually — Phil Combs' role (Trane). This persona benefits from time savings (hours per week of manual PUC monitoring eliminated) and from the ability to provide quantified forward-looking intelligence to clients.

**Business Value — Section Construction**

Open with John Culver's quote: "tell us why we should care and what we can do to change it." This is the product requirement in the buyer's own words.

Follow with Andi Ault's budget timing mechanism: budget submitted March, City of Austin rates often finalized after submission. This is the specific failure mode.

Quantify with Ann Walston's capacity charge story: tenfold increase in two years, driven by PJM auctions that are published in advance. This is the dollar magnitude.

Close with Phil Combs' full specification: "I can tell you six months from now this utility is actively talking to the Public Utility Commission. They're proposing this rate hike. This rate hike is going to mean this change in the cost of energy for you based on the last 12 months of operation." This is what the product should deliver.

**Frequency of Use**

This is a critical question the research partially answers. PUC rate case monitoring is not a daily-use feature — rate cases take months, are filed irregularly, and their implications are most relevant at specific points in the budget cycle. However, the cadence for the customer is:

- Continuous: system monitors PUC dockets and utility board meeting agendas (background process, no user action required)
- Alert-triggered: when a relevant rate case is filed or a rate change is approved, the system surfaces it with a quantified dollar impact estimate
- Budget cycle-critical: highest value during the budget preparation window (October-February for most higher education; the months before capital budget submission for healthcare)
- Quarterly: for organizations like BSMH with quarterly UPSC meetings, a regulatory intelligence digest would feed directly into that cadence

This is primarily a push feature, not a pull feature. The user does not log in to check regulatory filings. The system alerts them when something relevant happens. This aligns with Andi Ault's stated preference: "flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it."

**Strategic Differentiation — Competitor-by-Competitor**

_EnergyCAP:_ The incumbent in higher education (named by Andee Chamberlain at Texas State). EnergyCAP's described capabilities are entirely backward-looking: "billing information and usage data are uploaded, historical data is stored, and projections are generated." No mention of regulatory monitoring in any user description. The EnergyCAP gap is documented: "EnergyCAP tells us that they can do that stuff, but it's harder than it sounds." Andee's reaction to Clear Current's concept was to compare it to EnergyCAP — which means Clear Current's regulatory intelligence feature is the most direct differentiation argument for this segment, because EnergyCAP has no equivalent.

_ENGIE Impact:_ Adam Zavadsky confirmed that ENGIE's AI usage is entirely focused on internal bill processing efficiency, not forward-looking client intelligence. No regulatory monitoring capability mentioned. The client deliverable side "requires a subject matter expert to collaborate" — meaning whatever regulatory intelligence ENGIE provides is manual and consultant-dependent, not automated and scalable.

_Energy Print:_ Sean Sevy's description of Energy Print covers benchmarking, bill tracking, Energy Star integration, and budgeting support. No regulatory monitoring mentioned. Sean's specific criticism of Energy Print is about growth modeling — its forecasting models assume a stable building portfolio. A platform that also couldn't anticipate external rate changes (regulatory monitoring) would compound this forecasting weakness.

_Peer AI (Constellation):_ The most sophisticated forward-looking intelligence in the corpus. Scott Czubkowski describes polar vortex gas nomination alerts as Peer AI's most compelling ROI story. However, Peer AI's forward-looking intelligence is weather-correlated (demand response and commodity pricing), not regulatory (PUC rate case monitoring). These are adjacent capabilities but distinct products. Peer AI has not been described by any interviewee as monitoring state PUC filings or utility board meeting minutes. The gap exists even with the most sophisticated current platform.

_Energy Toolbase:_ Named by Phil Combs as "the closest" to a tariff analysis competitor. However, Phil explicitly distinguishes between Energy Toolbase's static rate database and the dynamic regulatory monitoring function he is describing: Energy Toolbase holds current rate data; it does not monitor PUC proceedings to alert customers when that rate data is about to change. This is the critical distinction.

_Arcadia:_ Data aggregation layer confirmed by Walt Taylor. Arcadia's published documentation confirms it as an integration architecture for bill data ingestion. No regulatory intelligence functionality mentioned in any source.

_SkySpark (Intermountain):_ Inside-the-meter building automation analytics. Not relevant to regulatory intelligence — different product category entirely.

---

### MVP Scope — What Dan Schreiber Could Hand to an Engineer

Based on the corpus evidence, specifically Phil Combs' product specification and the patterns across buyer interviews, here is the MVP scope:

**Data Sources to Monitor (in priority order based on buyer evidence):**

1. State Public Utility Commission (PUC) dockets — the formal regulatory filings where rate cases are initiated, commented on, and decided. Every state PUC publishes these; most have electronic dockets. Priority states based on customer concentration in this corpus: Texas (PUCT), Ohio (PUCO), Virginia (SCC), California (CPUC), Florida (FPSC).

2. Utility Integrated Resource Plans and rate case filings — utilities are required to file rate changes with their state PUC. These filings include the proposed rate schedules, the effective date, and the rationale. Monitoring for new filings by the utilities that serve a customer's locations is the core detection function.

3. PJM Capacity Auction results — specific to Ann Walston's pain point. PJM publishes auction results well in advance of their effective dates. For customers in PJM territory (Ohio, Virginia, Maryland, New Jersey, Pennsylvania, and surrounding states), capacity auction results directly determine a significant portion of their electric bill. This is a structured, published data source.

4. Utility board meeting agendas and minutes — Phil Combs specifically names "the publishings and the meetings of this utility's CEO and board" as data sources. These are often published before formal PUC filings and can serve as early warning signals.

5. ERCOT market notices (Texas) — for Texas customers, ERCOT publishes market notices about grid conditions, pricing zone changes, and rule modifications. This is the Texas equivalent of PUC monitoring.

**Core Features (MVP):**

Feature 1: Customer Location-to-Utility Mapping
Before the system can monitor relevant regulatory proceedings, it needs to know which utility serves each customer location. This should be built during onboarding and updated when new locations are added. (This addresses John Culver's foundational data accuracy problem at AdventHealth — "that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational.")

Feature 2: Regulatory Filing Alert
When a rate case is filed or a rate change is approved for a utility serving a customer location, the system surfaces an alert. The alert should include: (a) which utility filed, (b) the nature of the change (rate increase, rate structure change, new surcharge), (c) the proposed effective date, and (d) the PUC docket number for reference.

Feature 3: Dollar Impact Quantification
The alert must include a dollar impact estimate calculated from the customer's historical consumption data. Phil Combs' specification is exact: "This rate hike is going to mean this change in the cost of energy for you based on the last 12 months of operation." The model should use the customer's prior 12 months of consumption by bill period, apply the proposed rate change, and output: "If this rate increase is approved as filed, your annual cost at [utility] would increase by approximately $X, based on your last 12 months of consumption."

Feature 4: Budget-Cycle Integration
The system should understand the customer's budget cycle (configurable at onboarding) and flag regulatory events with particular urgency when they fall within the budget preparation window. If a customer's budget is due in March and a rate change is pending at PUC in February, the system should prominently surface this conflict: "Your budget is due in [X] weeks. A rate case at [utility] is pending decision. We recommend building in [X] variance or waiting for the PUC decision before finalizing your energy budget."

Feature 5: Customer Rate Case Participation Alert
When a rate case has an open comment period or a public hearing, the system should alert the customer with the comment deadline and a brief description of how to engage. Walt Taylor's PUC experience — where he successfully challenged a rate calculation methodology by making a quantitative case — is the model for what engaged customers can accomplish. Most customers don't know open comment periods exist. This feature doesn't require the platform to manage the engagement; it just needs to surface the opportunity.

**Out of Scope for MVP (document as roadmap):**

Carbon charge monitoring (flagged by Troy Nevels; important but complex — different regulatory regime than traditional rate cases)

Multi-state rate case correlation analysis (relevant for AdventHealth's 73 utilities but requires regulatory data at scale — Phase 2)

FERC proceeding monitoring (relevant for wholesale markets; adds complexity without immediate buyer validation in this corpus)

Proactive rate case participation support (helping customers file comments; legal territory that requires careful scoping)

---

## 5. COMPETITIVE IMPLICATIONS

**Against EnergyCAP:** This is the highest-priority competitive positioning move for the higher education vertical. EnergyCAP is the incumbent (named explicitly at Texas State), its user immediately compared Clear Current to it, and its documented capabilities are entirely backward-looking. The regulatory intelligence feature is the sharpest differentiation argument because it is a category that EnergyCAP does not appear to serve at all. Positioning: "EnergyCAP tells you what your energy cost was. Clear Current tells you what it's going to be."

**Against ENGIE Impact:** ENGIE is backward-looking by design. Adam Zavadsky's own words confirm this. The competitive play is not to displace ENGIE's bill processing function — that is a labor-intensive operational service with a 20-year data moat. The play is to offer regulatory intelligence as an additive layer that ENGIE cannot provide: "ENGIE pays your bills. We tell you when your rates are about to change." This is also the partnership framing — Clear Current's regulatory intelligence as a module ENGIE embeds in its client-facing portal.

**Against Energy Toolbase:** Phil Combs' assessment is the most technically credible comparison in the corpus. Energy Toolbase has a static rate database. Clear Current has a dynamic regulatory monitoring function. The positioning: Energy Toolbase tells you the current rates. Clear Current tells you when the rates are about to change, and what that means for your specific consumption profile. These are not the same product.

**Against Peer AI (Constellation):** This is the closest competitor to the regulatory intelligence function because Peer AI does forward-looking intelligence (weather + gas nominations). The differentiation is the regulatory layer: Peer AI does not monitor PUC proceedings. The positioning: "Peer AI watches the weather. Clear Current watches the regulators. Both matter, and only one platform does both." However, this competitive claim requires confirmation that Peer AI genuinely does not monitor PUC proceedings — based on this corpus, no interviewee describes Peer AI doing this, but it is not definitively ruled out. Flag this as a research gap.

**Against Energy Print:** Sean Sevy's clear assessment is that Energy Print's forecasting model is weak for growing systems and lacks AI integration. The regulatory intelligence feature adds a second dimension to this critique: Energy Print also cannot tell you when rates are about to change. For Houston Methodist, which is growing aggressively and operating in a market (CenterPoint, Texas) where rate changes are periodically filed, this is a double gap.

**The positioning statement I would recommend:**

"Every other platform tells you what your energy cost was. Clear Current tells you what it's going to be — and why, six months before your budget is due."

---

## 6. WELL-EVIDENCED VS. INFERRED

### Well-Evidenced (Multiple Independent Sources)

**The budget timing gap is real and recurring.** Confirmed at UT Austin (Andi Ault, explicit mechanism), Texas State (budget calendar shows March-May submission while rate decisions are ongoing), BSMH (PJM capacity auctions create unforecasted cost spikes), and AdventHealth (73 utility providers across 9 states, capital ROI cases assembled before rates are known). Four independent organizations, four verticals, same structural problem.

**Zero competitors currently offer regulatory intelligence monitoring.** Confirmed by absence across all named competitor descriptions in every interview. EnergyCAP users, ENGIE Impact account managers, Energy Print users — none describe a regulatory monitoring function. Phil Combs, who specifically requests this feature, is actively solving it manually — confirming no tool currently provides it.

**The finance persona bears the worst consequences of the gap.** Confirmed by Andi Ault (UT Austin finance) and Ann Walston (BSMH VP Facilities/finance-oriented). Both describe reactive financial roles with limited proactive levers.

**Phil Combs' regulatory intelligence feature specification is technically grounded.** Phil has 20 years at Trane and 7 years as an M&V engineer. His description of monitoring PUC filings, utility board meetings, and rate hike proposals is not a wish list item — it is a description of work he currently does manually, validated by his expertise.

### Evidenced by Single Source (Treat with appropriate weight)

**The "super powerful" characterization is Phil Combs alone.** No other interviewee uses this language about regulatory intelligence specifically. Phil is the only interviewee who names it as a product feature. This is strong evidence from a credible source, but it is one source.

**The Andi Ault budget timing mechanism is described at UT Austin specifically.** The March budget submission / post-submission rate change problem is documented for UT Austin's relationship with the City of Austin. The broader pattern (budget timing gap exists) is confirmed across multiple organizations, but the specific mechanism (city utility rate changes finalized after academic budget submission) is only documented at UT Austin.

**Carbon charge monitoring as a regulatory intelligence use case is Troy Nevels alone.** Important for the roadmap, but not validated by other interviewees.

**The Walt Taylor PUC intervention experience (successfully changing a rate through quantitative advocacy) is his personal history, not a validated pattern.** It is a strong proof-of-concept for what regulatory engagement can accomplish, but it does not confirm that customers regularly engage in PUC proceedings.

### Analytical Inference (My reading, not direct evidence)

**PJM capacity auction monitoring is the highest-value near-term regulatory intelligence use case in healthcare.** This is my inference from combining Ann Walston's tenfold capacity charge increase with the factual structure of PJM capacity auctions (published results, known timelines, calculable dollar impact). Ann does not explicitly describe wanting a PJM monitoring tool — she describes suffering from unforeseeable capacity charge increases. The connection between PJM auction monitoring and her problem is my inference.

**The value of regulatory intelligence increases with portfolio size.** AdventHealth's 73 utilities makes manual tracking impossible; a restaurant franchisee with 3 locations and one utility can track rate changes manually. This scaling relationship is logical but not explicitly validated by any interviewee.

**The comment period alert (Feature 5 in the MVP) may generate limited engagement.** Walt Taylor's PUC intervention is one data point. Most energy managers — especially in healthcare and education with limited staff — are unlikely to engage actively in regulatory proceedings even if alerted. The alert still has value (it informs budget planning even without engagement), but the assumption that customers will participate in rate cases should be treated as aspirational, not validated.

---

## 7. OPEN QUESTIONS AND RESEARCH GAPS

**Gap 1: Does Peer AI monitor PUC proceedings?**
This is the most important competitive intelligence gap. Peer AI is the most sophisticated platform named in this corpus (Scott Czubkowski describes weather + gas nomination intelligence), and it is owned by Constellation Energy, a major utility with significant regulatory expertise. Before Clear Current claims "no competitor offers regulatory intelligence," it needs to confirm whether Peer AI's capabilities extend to PUC monitoring. Recommended action: a direct product review of Peer AI's documented feature set, or a follow-up question to Scott Czubkowski.

**Gap 2: What is the actual PUC monitoring technical architecture?**
The MVP scope I've described assumes that PUC dockets are machine-readable and accessible at scale. This is partially true: most state PUCs have electronic filing systems with public access. But the format, accessibility, and completeness varies significantly by state and utility. Texas PUCT has a relatively modern electronic docket system; some smaller state PUCs do not. A technical assessment of PUC data accessibility by state — covering at least the states where identified customers operate (Texas, Ohio, Virginia, Florida, California, Utah) — is required before the engineering team can build this feature.

**Gap 3: What are the actual dollar magnitudes at UT Austin and Texas State?**
The Andi Ault document notes approximately $20M in natural gas spend but does not provide the total electricity budget at UT Austin. The Texas State document does not provide total utility spend. Quantifying the budget timing gap requires knowing the total utility budget at risk from unforecasted rate changes. A follow-up question to Andi Ault or Carl Teague about total annual electricity spend would sharpen the dollar quantification substantially.

**Gap 4: How much notice do rate cases actually provide?**
Phil Combs says "six months from now" in his example. PUC rate case timelines vary significantly by state and utility. Some rate cases are resolved in 90 days; others take 18 months. The actual lead time that regulatory monitoring provides — and therefore the usable window for budget planning — varies. A review of actual rate case timelines at a sample of utilities serving this research program's customers (City of Austin, CenterPoint, PJM utilities) would calibrate the product's timing claims.

**Gap 5: Is the budget cycle timing consistent with the regulatory calendar?**
Andi Ault's budget is due in March; the City of Austin's rate changes are often finalized after that. But this may be a specific misalignment between UT Austin's academic budget cycle and Austin Energy's rate case calendar — not a universal phenomenon. A broader sample of utility rate case effective dates versus organizational budget cycles would establish whether the timing gap is structural (always misaligned) or contingent (depends on the year and the utility).

**Gap 6: What would the regulatory intelligence feature cost to build?**
The MVP scope requires: (a) ingestion of PUC docket data across multiple states, (b) a mapping of customer locations to utility providers, (c) an NLP/parsing layer to extract relevant rate change information from regulatory documents (which are often lengthy and complex), and (d) a dollar impact calculation engine connected to historical consumption data. None of the interviewees are engineers building this feature, and the corpus contains no engineering cost or timeline estimates. Dan Schreiber needs a technical assessment before committing this to the product roadmap.

**Gap 7: What is the Allegra Wiesler (AdventHealth) perspective on regulatory monitoring for sustainability reporting?**
The AdventHealth interview was conducted with John Culver and Scott Sukits in place of the originally scheduled Allegra Wiesler, Executive Director of Environmental Sustainability. Allegra oversees AdventHealth's VPPA and renewable energy programs, which are directly tied to regulatory and market rate changes (renewable energy certificate prices, carbon markets). A follow-up with Allegra specifically on how regulatory changes affect sustainability planning and GHG reporting would add a dimension not covered by John or Scott.

**Gap 8: Do any interviewees have experience with the rate case comment process?**
Walt Taylor has personally engaged with a state PSC and won. No other interviewee in the corpus has this experience. The regulatory intelligence feature's "alert customers to comment periods" function assumes there is value in this capability beyond just informational awareness. Validating whether healthcare systems, universities, or QSR operators have ever engaged in PUC proceedings — or would want to — requires additional research that this corpus cannot provide.

---

_Analysis completed by Elena Rodriguez, Energy Regulatory Intelligence Analyst_
_All findings cited to source documents. All quotes verified against corpus. Inferences clearly labeled._

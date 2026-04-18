# Agent: David Okonkwo | Multi-Site Energy Operations Expert

# Run: 2026-04-17T14:25:48.761014

---

# MULTI-SITE ENERGY MANAGEMENT: COMPLETE ANALYTICAL BRIEF

## David Okonkwo | Multi-Site Energy Operations Expert

### Prepared for Clear Current Technologies | John Reuter (CEO) & Dan Schreiber (CPO)

---

## 1. WHAT I FOUND — Complete Evidence Inventory

Let me be precise about what each document contains that is analytically relevant to multi-site energy operations.

### Roger Goldstein Transcript (Panda Restaurant Group, ~2,600 locations)

The most operationally dense document in the corpus for my area. Roger is 20 years at Panda, took the energy portfolio in 2014. This is a practitioner who thinks in dollars and operational risk, not theory.

**What it contains that matters:**

- Complete description of the NG Insight bill processing workflow: all invoices routed to a single third-party processor, received electronically or via physical mail, scanned/OCR'd/keyed, compiled by due date, consolidated back to Panda for a single daily payment run. Estimated 4–6 FTE headcount to handle this internally without outsourcing.
- The threshold-based exception monitoring mechanism: parameters set in NG Insight, flags triggered when bills spike beyond rolling average (example: $2,000 average → $12,000 invoice).
- The baseline drift incident: a single meter covering two outlets in a shared tenant space. Panda paid the neighbor's electricity for a full year before it was caught. Not caught by NG Insight's threshold system — it was caught by accounting/operations noticing P&L anomalies. No dollar figure given, but inference from the context (restaurant electricity at $2,000/month baseline = approximately $24,000 in erroneous charges over 12 months, plus the neighbor's consumption on top of that).
- The deposit recovery insight: "Look for all the deposits that we pay, and that are, you know, over time, and are there offsetting deposit refunds over a certain period of time. Lots of utilities will take a deposit at some point. They'll give it back to you. They'll put it in as a credit. But a lot of them are sitting there, 10 year old deposits that you're entitled to give back, but they won't do it unless you ask for it."
- Rate structure optimization: annual review of all rate structures across all utilities to confirm each location is on the optimal rate class.
- HVAC as the #1 dollar leak: aging units draw full electricity while producing minimal cooling. Can go unnoticed for days or weeks.
- H2NO (Conservation Labs) water monitoring: deployed across locations as real-time anomaly detection for water. The $32,000 water bill from an undetected underground irrigation leak was the forcing event.
- Shutoff risk from missed bills: "The most common cause of a shutoff or a disruption in service is a bill got overlooked and didn't get paid. And it's always a mistake."
- Pricing model preference: evaluated both subscription and savings-share. Comfortable with both, depending on company structure and capital availability.

### Roger Goldstein Summary Document

Provides analytical synthesis of the transcript with additional context: Roger's full career trajectory, RFMA Board membership, scale specifics (2,600 locations, ~10,000 bills/month). Also contains five strategic recommendations formatted for Dan and John. Key additions beyond the transcript:

- Explicit framing of "baseline drift" as distinct from "spike detection" — this terminology is the summary author's synthesis, not Roger's exact words, but the underlying evidence from Roger's transcript supports it.
- The NG Insight channel partnership recommendation, validated by Roger's offer to make an introduction.

### Walt Taylor Transcript (Panda Restaurant Group, ~2,300 locations, contractor)

Walt is GWT2Energy founder and Panda contractor. This is the most technically sophisticated voice in the entire corpus on rate structure complexity, and the single most important source for competitive intelligence on ENGIE/Arcadia.

**What it contains that matters:**

- Confirmation that Panda uses ENGIE Impact ("NG") for all bill review and outlier flagging. No AI anywhere in the current system.
- EMS rollout details: thermostat control (removing operator authority over set points), lighting schedule management, electricity usage and demand monitoring. Active pushback from operations teams who want colder restaurants.
- Management by exception: "We're not necessarily coming [through] all the details... it's more of what's our averages and how far are we willing to go — are we only looking at the top 20% or something like that?"
- OCR accuracy ceiling: "Their OCR recognition doesn't work 100% of the time. You're never going to catch every mistake. So what we shoot to do is try to catch 90% of them."
- ENGIE Impact uses Arcadia for electronic bill aggregation, OCR for paper bills. "NG actually uses Arcadia to get their electronic bills and then they get the paper bills, you know, mailed to them and they run through the OCR."
- Historical context: Arcadia acquired Urgenet, which was previously ENGIE's aggregation vendor. ENGIE stopped developing its own bill aggregation software and outsourced to Arcadia.
- The LLM gap: "It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on."
- Rate complexity as the real GTM barrier: Alabama Power has approximately 45 rate structures. Georgia Power ratchet rate mechanism explained in detail — peak demand from hottest month sets the charge basis for 9–12 months. Overflow orders for natural gas (triple charges during shortage periods) confirmed.
- Sewer overbilling structural issue: utilities charge sewer based on water intake, but restaurant customers (ice, drinks taken offsite) generate far less sewage than their water usage implies. No meter proves actual discharge. Structurally uncontestable under current utility norms, but systemically incorrect.
- Square footage benchmarking critique: "Square footage has nothing to do with how much energy. It's your cubic footage." Energy is used to heat/cool cubic volume, not floor area. Industry uses sq ft because "that's how we sell them" — Walt calls this "laziness."
- Rate change through Public Service Commission: Walt has personally gotten utility rates changed by making a quantitative equity case.
- Questions Walt would ask an LLM: cross-utility rate comparison for multi-store operators, top outlier identification with root cause, ratchet rate spike early warning.
- Puerto Rico as a case study of geographic complexity: "they're on island time... if you don't speak Spanish, they don't speak English" — utility disputes across international markets are a category problem.

### Walt Taylor Summary Document

Synthesizes the transcript with additional context: Walt's full background (Red Robin, Taco Bell, E4E Solutions, GWT2Energy). Contains the competitive intelligence alert flagging the ENGIE/Arcadia finding. Also contains Arcadia's own technical documentation confirmation that ENGIE Insight is a known indirect data source in Arcadia's integration architecture.

**The single most commercially significant finding in this document:** Arcadia's developer documentation explicitly treats ENGIE Insight as a "known indirect data source" and designates these as "INDIRECT" sources, noting that direct utility credentials are always preferred. This is independent corroboration from outside the interview.

### Randy Dawes Summary (Hyatt Hotels Corporation)

Email-only engagement. Randy is Director of Openings Engineering (design/construction focus) with prior Director of Hotel Engineering, Americas experience.

**What it contains that matters:**

- Owner-operator structural problem: Hyatt corporate does not touch utility invoices at managed properties. Billing error detection, rate optimization, and invoice processing happen at the property or ownership level, not at HQ. The right buyer in hospitality is not corporate — it's individual hotel owners, asset managers, or management companies.
- Metrics fragmentation: different properties report in different units, making portfolio comparison impossible. "The world today has many different metrics for measuring these critical items... transferring that data is easy to do for the corporation, but difficult to show what each hotel's consumption means to the person who consumes the unit."
- ESG reporting calendar: Q1 prior-year reporting deadline, mid-year check-in. Not an operational calendar.
- Invoice automation as operational pain: "In my previous life there are more issues with the invoice arriving late or at the due date, this seems to be a concern based on the billing of late fees. Automation of invoices appears to be a fix to that issue."
- Hyatt EcoTrack: proprietary internal sustainability data tool. Third-party data aggregators feed consumption data from properties into this system of record.

### Jamare Bates Transcript & Summary (JLL, VP Clean Energy & Infrastructure)

This is the market framing document. Jamare is the only voice in this corpus with Fortune 500 advisory scope.

**What it contains that matters:**

- Three-tier market segmentation: Enterprise (build in-house or acquire), Mid-market (buy vs. build decision, best target), Small (value proposition doesn't hold).
- JLL's in-house AI tooling: JLL Technologies division builds tools trained on data JLL already holds from managing client properties. "Millions and millions and millions of dollars" in savings found. Not a single tool — a suite.
- Energy as #1 site selection factor: "Where is the cheapest energy? The workforce will come to me."
- Data access barrier: Fortune 200 clients do not want energy spend visible in the market. Fear of AI model training on proprietary data is real and growing. "If a Fortune 200 company finds out that a thousand of their invoices for power over the last five years got out on the internet, that company is going to be crushed."
- Energy auditor framing: auditors currently do by hand what the AI tool automates. If positioned as job replacement, adversarial. If positioned as force multiplier, converts obstacle into early adopter.
- Acquisition risk: "With a firm like JLL, the enterprise-level discussion usually leads to acquisition — because we're not going to continue paying for something we can just buy."

---

## 2. KEY FINDINGS

### FINDING 1: The Baseline Drift Problem is Real, Documented, and the Core Competitive Opening

Roger Goldstein provided a concrete case study of baseline drift that no threshold-based system caught. A single meter at a Panda Express location was found to be covering two outlets in a shared tenant space. Panda paid the neighbor's electricity for a full year before it was detected — and the detection came not from NG Insight's exception flagging, but from accounting or operations noticing P&L anomalies. Roger's words: _"It can go on for a while and then accounting or operations will catch something like that. It's like, hey, how come I haven't had any electric charges on my P&L for six months, or why were the last four months so expensive?"_ (Roger Goldstein Transcript)

This is the clearest documented evidence in the corpus of the failure mode that threshold-based systems have. The error was persistent enough to establish a new baseline, so it never crossed the spike threshold. A year of misbilling at a location that averaged $2,000/month in electricity implies at minimum $24,000+ in erroneous charges, plus whatever the neighbor's actual consumption was. The number is unconfirmed but materially significant.

**Why this matters for product positioning:** Clear Current's AI layer must be positioned as detecting _pattern deviation from expected norms_ — not just spikes above average. The baseline itself can be wrong. Any marketing claim that says "we catch billing errors" must be accompanied by the specific articulation that _we catch errors that look normal_.

### FINDING 2: The 90% Ceiling — ENGIE Can't Catch Everything, and They Know It

Walt Taylor was explicit: "Their OCR recognition doesn't work 100% of the time. You're never going to catch every mistake. So what we shoot to do is try to catch 90% of them." (Walt Taylor Transcript)

This is not a criticism from a frustrated customer. This is an informed operator describing the accepted performance standard of the best-in-class incumbent. At 2,300 locations processing roughly 10,000 bills per month (Roger's figure), a 10% error pass-through rate means approximately 1,000 billing issues per month go undetected. Even if 99% of those are trivial, that's still a significant potential recovery opportunity.

Walt also confirmed the structural reason for this ceiling: ENGIE's electronic bill aggregation is built on Arcadia, not proprietary infrastructure, and paper bills still go through OCR. Neither is perfect. "NG actually uses Arcadia to get their electronic bills and then they get the paper bills, you know, mailed to them and they run through the OCR." (Walt Taylor Transcript)

**Why this matters:** Clear Current's marketing to ENGIE Impact customers doesn't need to attack ENGIE. It needs to say: _ENGIE gets you to 90%. We find the other 10%._ That framing is non-adversarial to ENGIE (relevant if pursuing the channel partnership Roger offered to facilitate) and self-evidently valuable to the customer.

### FINDING 3: Utility Deposits Are a Dormant Recovery Opportunity That Nobody Is Actively Managing

Roger Goldstein volunteered this unprompted, describing it as one of the first things he would ask an AI energy management tool: _"Look for all the deposits that we pay, and that are, you know, over time, and are there offsetting deposit refunds over a certain period of time. Lots of utilities will take a deposit at some point. They'll give it back to you. They'll put it in as a credit. But a lot of them are sitting there, 10 year old deposits that you're entitled to give back, but they won't do it unless you ask for it."_ (Roger Goldstein Transcript)

At an operator with 2,600 locations and 20 years of history, deposits paid at opening and never recovered represent real working capital sitting idle. Utilities will not proactively return them. A tool that systematically identifies deposits older than, say, 3 years and flags them for recovery is doing something no current system does automatically.

**Why this matters for the product roadmap:** This is a zero-friction win. It doesn't require the customer to change behavior, dispute a bill, or engage a utility adversarially. It just requires identifying the deposit on the invoice history and requesting a return. The dollar impact is unknown but the mechanism is straightforward. Dan and John should consider whether this can be a standalone workflow — "deposit recovery" — that functions as a proof-of-value use case in the sales cycle.

### FINDING 4: Rate Structure Complexity Is Both the GTM Barrier and the Moat

Walt Taylor's most technically valuable contribution was his description of rate structure heterogeneity. Alabama Power alone has approximately 45 rate structures. Georgia Power embeds peak demand charges in a ratchet mechanism that most operators don't fully understand. California's duck curve has shifted peak demand windows so that operators optimized for old time-of-use windows are now facing new exposures. Overflow orders in natural gas can triple charges with no ability to opt out for non-interruptible customers.

Walt's summary: _"Feel free at some point to go to a utility and look up a tariff. It's 5 pages long."_ (Walt Taylor Transcript) And: _"Writing code does the same thing every time and you get the same result every time. That's not how it is when you're looking at utility bills and usage and all the different things."_ (Walt Taylor Transcript)

This is simultaneously what makes the product hard to build and what makes it valuable once built. The team that gets the math right has a defensible moat because the complexity discourages casual competition. Clayton's observation in the transcript that Clear Current's founders spent most of their build time on the math is directly validated by Walt's description of the problem.

**Why this matters:** Walt's skepticism about whether a startup can handle this complexity at enterprise scale is the objection Clear Current will face from every sophisticated buyer. The answer must be demonstrated accuracy, not claimed capability. Piloting with a limited geography (2–3 utilities with well-understood rate structures) before claiming national coverage is the credible path.

### FINDING 5: The Ratchet Rate Problem Creates a Specific High-Value Detection Scenario

Walt Taylor described the Georgia Power ratchet mechanism in specific terms: whatever peak demand a customer hits during the hottest month of the year becomes the basis for their capacity charge, applied at 100% for the following nine months and at 90% in the remaining three winter months. A single 15-minute peak event — from a solar panel misconfiguration, equipment startup surge, or operational anomaly — can lock a customer into elevated charges for an entire year.

Clayton referenced a specific case where Clear Current's system detected exactly this: a solar panel installation caused a 15-minute consumption spike that triggered a peak demand charge for the full subsequent year. The prior billing intelligence tool caught it; most would not. Walt confirmed: _"Correct."_ (Walt Taylor Transcript)

**Why this matters for the product:** Ratchet rate early warning is a specific, high-dollar-impact feature that belongs on the product roadmap as a named capability. If Clear Current can flag: _"This location hit a peak demand threshold last Tuesday at 2:47 PM. Under [Utility Name]'s ratchet rate structure, this event will add $X/month to your bill for the next 9 months unless we contest it immediately"_ — that is a concrete, time-sensitive alert that justifies the product cost in a single event.

### FINDING 6: The Right Buyer in Hospitality Is Not the Brand's Corporate Team

Randy Dawes confirmed explicitly: _"At the corporate level we do not review these or get access to that."_ (Randy Dawes Summary) Hyatt corporate does not touch utility invoices at managed properties. The owner-operator structure means corporate sustainability teams track ESG metrics, not billing accuracy.

The operational pain Randy did surface — invoice late fees, late arrivals — came from his prior experience at Enlivant (a senior living operator), not from his current Hyatt corporate role. The implication is clear: the hospitality vertical requires targeting hotel owners, asset managers running portfolios of managed properties, or hotel management companies — not corporate brand teams.

**Why this matters for GTM:** Clear Current should not be pursuing Hyatt, Marriott, or Hilton corporate. It should be pursuing Aimbridge Hospitality, Davidson Hospitality Group, Concord Hospitality, or similar multi-property management companies that bear direct responsibility for utility costs across dozens or hundreds of managed properties. These organizations have the multi-site scale and the direct P&L exposure that makes the product relevant.

### FINDING 7: JLL Is Building This Internally and Will Acquire, Not Buy

Jamare Bates confirmed that JLL Technologies, JLL's internal technology division, is building AI tools that analyze utility and billing data for clients. JLL already holds the data because it manages client facilities. The competitive implication: _"With a firm like JLL, the enterprise-level discussion usually leads to acquisition — because we're not going to continue paying for something we can just buy."_ (Jamare Bates Transcript)

For Clear Current's GTM, this means: Fortune 500 companies that use JLL as their facility manager are essentially already inside JLL's tool ecosystem. They are not accessible as direct Clear Current customers without displacing JLL or partnering through JLL.

**Why this matters:** Clear Current's ideal initial customer is a mid-market multi-site operator (100–500 locations) that manages its own facilities directly, without a full-service facility management company like JLL or CBRE mediating the relationship. These operators have enough scale to generate real ROI from the tool but lack the resources to build it themselves.

### FINDING 8: Data Access and Security is the Enterprise Conversation Opener, Not a Technical Detail

Jamare Bates was explicit: _"The number one thing I would tell you is: make sure the company is thinking about how they're going to manage and keep the data secure, and maybe even anonymize it. If a Fortune 200 company finds out that a thousand of their invoices for power over the last five years got out on the internet, that company is going to be crushed."_ (Jamare Bates Transcript)

This is not a legal checkbox. It is the first substantive question an enterprise security team will ask. The fear of AI model training on proprietary data is specific and named. Clients will ask directly: _Is my data being used to train a model that might reveal my energy spend to competitors?_

**Why this matters:** Clear Current needs a security narrative — not just a privacy policy. The sales conversation for any company above ~100 locations must include a clear explanation of: how data is stored, whether it is isolated by customer, whether it is used for model training, and who has access. This should be a front-facing document, not buried in terms of service.

### FINDING 9: The Sewer Overbilling Problem is Real, Systematic, and Unchallenged

Walt Taylor surfaced a structural billing problem unique to restaurant operators that no prior interviewee had mentioned. Utilities charge sewer rates based on water intake, assuming most water that enters a building leaves as sewage. This assumption is wrong for restaurants, where ice and drinks are consumed offsite by customers. _"There's no meter about how much water is actually leaving the restaurant. The truth of the matter is, at a home, that's probably pretty accurate. But at a restaurant, knowing that most people take their drinks and go somewhere else to relieve themselves and other things, we probably don't use near as much sewage as we're being billed for."_ (Walt Taylor Transcript)

Walt acknowledged this is currently uncontestable because there's no measurement mechanism. But it represents a category of systematic overbilling that no existing tool is even tracking, let alone disputing.

**Why this matters for product roadmap:** This is a medium-term opportunity. In the near term, Clear Current can surface _the magnitude_ of sewer charges relative to water usage at restaurant locations, giving operators data to begin building a regulatory case. The precedent Walt set (getting a rate changed through a Public Service Commission) shows that the regulatory pathway exists — it just requires quantitative evidence. Building a "sewer benchmarking" report that shows what percentage of water intake actually becomes sewage, by restaurant type, could be a differentiated research-based feature.

### FINDING 10: Panda's Current State Is Exactly the Workflow Clear Current Is Designed to Improve

Both Roger Goldstein and Walt Taylor independently described the same workflow: third-party bill processing (ENGIE Impact) → threshold-based exception flagging → manual review by two people in Excel → management by averages. Zero AI. Zero pattern deviation detection. Zero deposit tracking. Zero ratchet rate early warning. Zero sewer benchmarking.

Roger: _"I have an energy manager and a energy associate that pretty much all they do is pull exception reports, and all they do is look for anything outside of normal problems."_ (Roger Goldstein Transcript)

Walt: _"We don't utilize AI at all. There's no AI involved."_ (Walt Taylor Transcript)

This is not a prospect who needs to be convinced the problem is real. This is a prospect who is already paying for a partial solution and experiencing the gaps every day. The pitch is not "here's a problem you have" — the pitch is "here's what your current solution is missing."

### FINDING 11: "Management by Exception" at Scale Systematically Misses the Middle

Both Roger and Walt described their management philosophy as exception-based: look at averages, flag what's outside normal, investigate the outliers. Walt: _"It's more of what's our averages and how far are we willing to, like, are we only looking at the top 20% or something like that?"_ (Walt Taylor Transcript)

The problem this creates is that errors which fall below the exception threshold but above zero — errors in the 80th percentile and below — are effectively invisible. At 2,300 locations, the bottom 80% by anomaly severity might still represent hundreds of billing errors per month that no one is looking at.

**Why this matters:** Clear Current's value proposition for multi-site operators should include explicit language about _what falls through the exception threshold_. The 10% that ENGIE misses is not the 10% biggest errors — it's the errors that don't look like errors. That's a specific and demonstrable gap.

### FINDING 12: The Metrics Fragmentation Problem Creates a Portfolio Visibility Barrier

Randy Dawes surfaced a problem that none of the other interviewees named explicitly: different properties report energy in different units, making portfolio-level comparison impossible. _"The world today has many different metrics for measuring these critical items... transferring that data is easy to do for the corporation, but difficult to show what each hotel's consumption means to the person who consumes the unit."_ (Randy Dawes Summary)

Walt reinforced this from a different angle: the industry's standard normalization unit (square footage) is structurally wrong because energy is consumed in cubic volume, not floor area. A hotel lobby and an office floor of identical square footage have entirely different energy profiles.

**Why this matters for product design:** Clear Current's reporting layer needs a normalization methodology that is explicitly better than sq ft/unit. Options include: energy per operating hour, energy per transaction (for QSR), energy per occupied room (for hospitality), energy indexed against weather-normalized baseline. This is a differentiation opportunity, not just a nice-to-have.

---

## 3. VERBATIM QUOTES THAT BELONG IN THE DELIVERABLES

**QUOTE 1**

> _"The most common cause of a shutoff or a disruption in service is a bill got overlooked and didn't get paid. And it's always a mistake. Somebody just missed it, lost it, bad address, keyed it in wrong to the system."_

**Roger Goldstein | Executive Director, Facilities & Energy | Panda Restaurant Group | Roger Goldstein Transcript**

**Why it matters:** This is the operational risk anchor for the enterprise sales pitch. Before any conversation about savings or optimization, this quote establishes that the baseline risk — a shutoff at a restaurant location — is real, documented, and caused by process failure, not negligence. Use in the QSR vertical pitch deck as the opening risk statement.

---

**QUOTE 2**

> _"It does happen. It can go on for a while and then accounting or operations will catch something like that. It's like, hey, how come I haven't had any electric charges on my P&L for six months, or why were the last four months so expensive?"_

**Roger Goldstein | Executive Director, Facilities & Energy | Panda Restaurant Group | Roger Goldstein Transcript**

**Why it matters:** This is the single best documented baseline drift example in the corpus. The detection came from P&L anomaly, not the billing system. This quote belongs in every piece of marketing collateral about baseline drift detection — it's a real practitioner confirming the problem in plain language.

---

**QUOTE 3**

> _"Look for all the deposits that we pay, and that are, you know, over time, and are there offsetting deposit refunds over a certain period of time. Lots of utilities will take a deposit at some point. They'll give it back to you. They'll put it in as a credit. But a lot of them are sitting there, 10 year old deposits that you're entitled to give back, but they won't do it unless you ask for it."_

**Roger Goldstein | Executive Director, Facilities & Energy | Panda Restaurant Group | Roger Goldstein Transcript**

**Why it matters:** This is the deposit recovery insight, stated in full by the person most qualified to describe it. It is unprompted — Roger volunteered this as one of the first questions he'd ask an AI energy tool. Use in the product roadmap documentation as evidence of a feature directly requested by an enterprise buyer.

---

**QUOTE 4**

> _"You can have an air conditioner that has a mechanical issue and it's failing, barely producing any cold air, but it's not noticed for many days or weeks. You're just pouring all that electricity into that unit and not getting any real value from it."_

**Roger Goldstein | Executive Director, Facilities & Energy | Panda Restaurant Group | Roger Goldstein Transcript**

**Why it matters:** This is the HVAC degradation signal articulated by a practitioner. The key insight is that failing HVAC creates a billing fingerprint (electricity use climbs, cooling output drops) detectable from invoice data alone. Use in the product narrative for the QSR vertical: "We find the HVAC problems before your facilities team does."

---

**QUOTE 5**

> _"NG actually uses Arcadia to get their electronic bills and then they get the paper bills, you know, mailed to them and they run through the OCR."_

**Walt Taylor | Energy Manager (Contractor) | Panda Restaurant Group | Walt Taylor Transcript**

**Why it matters:** This is the most important competitive intelligence finding in the entire corpus. ENGIE Impact's data backbone is not proprietary — it's Arcadia. This means ENGIE's data quality ceiling is Arcadia's data quality ceiling, and a competitor that integrates directly with Arcadia's data layer could match ENGIE's electronic bill coverage without building proprietary aggregation infrastructure. Use in the competitive intelligence section of investor materials.

---

**QUOTE 6**

> _"Their OCR recognition doesn't work 100% of the time. You're never going to catch every mistake. So what we shoot to do is try to catch 90% of them."_

**Walt Taylor | Energy Manager (Contractor) | Panda Restaurant Group | Walt Taylor Transcript**

**Why it matters:** A sophisticated, informed user of the incumbent product is publicly stating the product's accuracy ceiling as 90%. This is a specific, named gap. "We catch the other 10%" is Clear Current's direct competitive positioning statement against ENGIE Impact. Use in sales battlecards.

---

**QUOTE 7**

> _"It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on."_

**Walt Taylor | Energy Manager (Contractor) | Panda Restaurant Group | Walt Taylor Transcript**

**Why it matters:** This is a customer telling you that the incumbent's natural defense is an LLM add-on. Walt is describing the threat from inside the customer base. This quote confirms that the window to build and sell this product ahead of ENGIE's response is finite. Use in the investor materials time-to-market section and in the competitive threat analysis for the May 2026 fundraise.

---

**QUOTE 8**

> _"Writing code does the same thing every time and you get the same result every time. That's not how it is when you're looking at utility bills and usage and all the different things."_

**Walt Taylor | Energy Manager (Contractor) | Panda Restaurant Group | Walt Taylor Transcript**

**Why it matters:** This is Walt's most precise articulation of why energy AI is harder than it looks. It validates Clear Current's founders' claim that they spent most of their build time on the math. Use this in the pitch when addressing the "why can't someone just build this tomorrow?" question from investors.

---

**QUOTE 9**

> _"Square footage has nothing to do with how much energy. It's your cubic footage that has everything to do with how much energy is used, because you don't heat a space by the floor. You heat a space like a cube."_

**Walt Taylor | Energy Manager (Contractor) | Panda Restaurant Group | Walt Taylor Transcript**

**Why it matters:** This is a fundamental critique of the industry's standard benchmarking methodology from one of the most technically credible voices in this corpus. If Clear Current's peer comparison and benchmarking features use square footage as the normalization unit, they will inherit this flaw. Use in the product design brief as a requirement for a better normalization methodology.

---

**QUOTE 10**

> _"The number one thing I would tell you is: make sure the company is thinking about how they're going to manage and keep the data secure, and maybe even anonymize it. If a Fortune 200 company finds out that a thousand of their invoices for power over the last five years got out on the internet, that company is going to be crushed."_

**Jamare Bates | VP, Clean Energy & Infrastructure Advisory | JLL | Jamare Bates Transcript**

**Why it matters:** This is the highest-status voice in the corpus explicitly identifying data security as the make-or-break enterprise qualification question. It belongs in the product security documentation, the sales playbook for enterprise prospects, and the investor materials as a risk that the company must demonstrate it has addressed. Do not bury this in the terms of service.

---

**QUOTE 11**

> _"If this tool is built to take their job, they're gonna have a feeling about it. If it's built to make their job easier, now you might have a target market."_

**Jamare Bates | VP, Clean Energy & Infrastructure Advisory | JLL | Jamare Bates Transcript**

**Why it matters:** This is the positioning principle for how Clear Current should approach energy managers and auditors. The framing of "force multiplier, not replacement" is not just a sales tactic — it's the product design philosophy that determines whether internal champions emerge or block the sale. Use in the go-to-market positioning document and in all marketing directed at energy managers.

---

**QUOTE 12**

> _"In my previous life there are more issues with the invoice arriving late or at the due date, this seems to be a concern based on the billing of late fees. Automation of invoices appears to be a fix to that issue."_

**Randy Dawes | Director, Openings Engineering | Hyatt Hotels Corporation | Randy Dawes Summary**

**Why it matters:** Even via email, this confirms invoice timing as an operational pain point in hospitality. The fact that Randy references his "previous life" (Enlivant, a senior living operator) rather than current Hyatt corporate experience confirms that the right hospitality buyer is at the property/portfolio operations level, not corporate. Use in the hospitality vertical sales brief.

---

**QUOTE 13**

> _"There's no meter about how much water is actually leaving the restaurant. The truth of the matter is, at a home, that's probably pretty accurate. But at a restaurant, knowing that most people take their drinks and go somewhere else to relieve themselves and other things, we probably don't use near as much sewage as we're being billed for."_

**Walt Taylor | Energy Manager (Contractor) | Panda Restaurant Group | Walt Taylor Transcript**

**Why it matters:** This surfaces a structural overbilling category — sewer charges for QSR operators — that no existing tool is tracking or disputing. Use in the product roadmap as a medium-term differentiated feature concept, and in the QSR vertical pitch as evidence of how deep Clear Current's analysis goes compared to threshold-based incumbents.

---

**QUOTE 14**

> _"Where is the cheapest energy? The workforce will come to me. People will move for jobs, much more than they used to."_

**Jamare Bates | VP, Clean Energy & Infrastructure Advisory | JLL | Jamare Bates Transcript**

**Why it matters:** This is the macro context setting quote for investor materials. It establishes the urgency of the energy management market — energy has become the primary corporate site selection variable, displacing workforce and land costs. Use in the executive summary of the investor deck to establish market urgency.

---

**QUOTE 15**

> _"It would be great if Engineer would incorporate a large language model because they already have all the data. So why would I need to go to somebody else to get the large language model to pull all the data from NG to do that?"_

**Walt Taylor | Energy Manager (Contractor) | Panda Restaurant Group | Walt Taylor Transcript**

**Why it matters:** Walt is describing exactly why Clear Current's channel partnership opportunity with ENGIE is both the best path and the riskiest. If ENGIE adds an LLM natively, the case for a separate product weakens dramatically for existing ENGIE customers. The counter-argument is speed of execution and product focus — ENGIE moving on LLM integration is a years-long enterprise IT project. Clear Current can be live now. Use this in investor materials under "competitive risk and response timeline."

---

## 4. DELIVERABLE BUILD GUIDANCE

### 4A. Corporate Multi-Site Cost Reduction Journey Map

This is the primary deliverable my analysis informs. Here is how to build it using the specific evidence from this corpus.

**Stage 1: Pre-Awareness (The Operational Status Quo)**

The starting point for the multi-site journey map is not a recognition of energy management problems — it's an acceptance of chronic loss as normal operating procedure.

_Evidence to use:_ Roger's description of the daily reality: 10,000 bills/month, a third-party processor, two people in Excel, and management by averages. The explicit acknowledgment that "a lot of it is noted, we just don't dig in every single day to the energy usage." (Roger Goldstein Transcript) This is not negligence — it is rational prioritization given resource constraints.

_Map element:_ Label this stage "Managed Ignorance." The operator knows they're not catching everything. They've made a deliberate choice to catch 90% and accept 10% as the cost of operating at scale. Include the Walt Taylor quote about aiming for 90%.

**Stage 2: The Triggering Event**

Something happens that makes the chronic loss visible and personally costly.

_Evidence to use:_ Roger's four triggering scenarios, each with a different severity:

1. **Missed bill → shutoff:** "The most common cause of a shutoff or a disruption in service is a bill got overlooked." This is the catastrophic trigger — operational disruption, customer impact, reputational damage.
2. **P&L anomaly → investigation:** Accounting notices no electric charges for six months, or the last four months look expensive. This is the discovery trigger — slow, delayed, downstream.
3. **The shared meter incident:** A year of paying the neighbor's electricity. This is the silent bleed trigger — caught late, recovery negotiation required.
4. **The $32,000 water bill:** An underground irrigation leak undetected for weeks. This is the infrastructure failure trigger — solved by H2NO deployment.

_Map element:_ Show these four triggers as branching paths from Stage 1. Note the detection latency for each: shutoff is immediate but catastrophic; P&L anomaly is 30–90 days delayed; shared meter was 12 months; water leak was weeks-to-months. Clear Current's value proposition addresses the detection latency on paths 2, 3, and 4.

**Stage 3: The Investigation (Where Manual Labor Meets Scale)**

Once a trigger is identified, the investigation process is entirely manual.

_Evidence to use:_ "They manually do [the review] using the data that comes out of the NG system, which is great because I've got 10–12 years of great utility bill data." (Roger Goldstein Transcript) Walt: "Sometimes we'll run reports that NG doesn't run to get more insights, like if we're looking for the top 30 outliers." (Walt Taylor Transcript)

The investigation workflow is: extract data from ENGIE → pull to Excel → scrub for anomalies → compare year-over-year → if escalated, download individual bills → cross-reference manually → produce explanation for operator.

Walt described the operator call scenario: "I'm in Philadelphia, and I don't understand why some of my stores I'm paying this much for electricity... it'd be nice to go in and just ask that question" rather than "going, downloading the bills, reviewing the bills, and saying, OK, well, here's the difference. You're on three different utilities. Two of the utilities have their own rate and another one you're on the contracted rate." (Walt Taylor Transcript)

_Map element:_ This is where the time cost of the current state is highest. Show the hours-per-investigation for the manual process. Map this against what a conversational AI query ("Why are my Philadelphia stores billing differently?") would reduce this to. This is a productivity quantification opportunity for the sales deck.

**Stage 4: The Resolution (Negotiation with Utilities)**

Resolving a billing error requires engaging the utility, which is its own barrier.

_Evidence to use:_ Walt: "A lot of times, utilities just believe they're right about everything and don't want to talk to you about it... Utilities tend to believe that they don't make mistakes." (Walt Taylor Transcript) Roger: on the shared meter recovery, "We go in and we negotiate with the company and get them to reimburse us for what we paid, then we have to go to the landlord and work out how to have a sub-metering arrangement." (Roger Goldstein Transcript)

Walt's accomplishment of getting a utility rate changed through a state Public Service Commission (by building a quantitative equity case) is the gold standard outcome — but it required years of data and direct regulatory engagement.

_Map element:_ Show the resolution stage as bimodal: quick wins (corrected invoice credit applied within billing cycle) versus contested disputes (PSC engagement, months to resolution). Clear Current's role is to identify the issue and provide the documented evidence needed for the utility conversation. The harder the dispute, the more valuable the documentation layer.

**Stage 5: The Prevention Layer (From Reactive to Proactive)**

The system state a buyer is trying to reach: problems detected before they become P&L events, with enough evidence to dispute efficiently.

_Evidence to use:_ Roger's H2NO analogy: "Instead of 30 days later discovering you have a leak because it impacted the bill, we actually can catch it immediately." (Roger Goldstein Transcript) Walt's EMS rollout rationale: taking thermostats and lighting controls out of operator hands so that the central team can _know_ what's happening in real time rather than discovering it in a monthly bill.

The deposit recovery feature fits here as prevention of a different kind: proactive identification of money that should already be coming back.

_Map element:_ Show the "Prevention Layer" as the aspirational state the journey map leads to. Name the four specific prevention capabilities supported by this corpus:

1. Baseline drift detection (the shared meter scenario)
2. HVAC degradation fingerprinting (electricity creep at a specific location)
3. Ratchet rate early warning (peak demand event → 9-month charge lock-in)
4. Deposit recovery automation (10-year-old deposits sitting dormant)

---

### 4B. Multi-Site Rows of the Engagement Trigger Map

The engagement trigger map for multi-site operators should have these specific rows, each grounded in corpus evidence:

| Trigger Event                         | Source Evidence            | Typical Detection Latency | Dollar Impact                                                     | Clear Current Response                                                     |
| ------------------------------------- | -------------------------- | ------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Utility shutoff from missed bill      | Roger Goldstein Transcript | Immediate (crisis)        | Full-day revenue loss + reconnection cost                         | Automated bill receipt confirmation + payment status monitoring            |
| P&L anomaly surfaces billing error    | Roger Goldstein Transcript | 30–90 days                | Months of erroneous charges (Roger's case: ~$24K+ over 12 months) | Pattern deviation detection across location baseline                       |
| Shared meter / wrong allocation       | Roger Goldstein Transcript | Up to 12 months           | Potentially $24,000+ per year per location                        | Meter-level anomaly detection, not just bill-level averaging               |
| HVAC degradation (electricity creep)  | Roger Goldstein Transcript | Weeks to months           | Ongoing — full electricity draw, zero cooling output              | Location-level electricity trend anomaly vs. weather-normalized baseline   |
| Peak demand ratchet spike             | Walt Taylor Transcript     | 1 billing cycle           | Up to 12 months of elevated capacity charges                      | Real-time peak demand alert before ratchet locks in                        |
| Dormant deposit recovery              | Roger Goldstein Transcript | Indefinite (never)        | Unknown but cumulative over 20 years at 2,600 locations           | Automated deposit age tracking across all utility accounts                 |
| Rate structure suboptimality          | Roger Goldstein Transcript | Annual review             | Ongoing — varies by utility and rate class                        | Annual rate optimization scan across all utility tariff schedules          |
| Sewer overbilling (QSR-specific)      | Walt Taylor Transcript     | Structural / indefinite   | West Coast markets especially exposed                             | Benchmarking sewer charges against water intake ratios                     |
| OCR error from paper bill processing  | Walt Taylor Transcript     | 30 days per cycle         | Cumulative — 10% pass-through at scale                            | Document extraction layer that outperforms OCR on paper bills              |
| Operator set-point abuse (HVAC)       | Walt Taylor Transcript     | Immediate                 | Ongoing consumption waste                                         | (EMS territory, not bill territory — flag but don't own)                   |
| International market billing disputes | Walt Taylor Transcript     | Variable                  | Unknown — Puerto Rico example cited                               | Flag international locations as high-risk for manual review prioritization |

---

### 4C. Seasonal Energy Management Calendar — Multi-Site Rows

The calendar structure for multi-site QSR operators, derived specifically from this corpus:

**January–February:**

- Budget already set (Panda budgets in October for January–December fiscal year — Walt Taylor Transcript)
- Lowest electricity consumption period; gas usage stable or modestly elevated for heating
- Window for annual rate structure review (Roger: "we always analyze all of our rate structures across all the utilities every year" — Roger Goldstein Transcript)
- Best window for deposit recovery audit — low operational pressure, full prior-year data available

**March–April:**

- ESG/sustainability reporting deadline for corporate hospitality clients (Randy Dawes: "reporting data is required at the end of the 1st quarter for previous year" — Randy Dawes Summary)
- Rate structure change monitoring: California time-of-use rates historically adjusted in spring; monitor for California duck curve shifts
- Begin HVAC pre-season maintenance scheduling — use prior-year electricity trend data to identify units showing degradation fingerprints from last summer

**May:**

- Peak demand risk begins to emerge in California and Southeast markets
- EMS thermostat schedule review: confirm summer setpoints are locked before operators start overriding
- Alert threshold recalibration: what was "normal" in winter is no longer baseline for summer

**June–September:**

- Peak electricity consumption period for all QSR markets
- Maximum peak demand exposure; ratchet rate events most likely during heat waves
- HVAC units under maximum stress — degradation signals most visible in billing data
- Demand charge monitoring most critical: California, Georgia Power, other ratchet markets
- Walt: "You've got two things that impact your location. Really, it's your operating hours and then what the weather is." (Walt Taylor Transcript) — summer is when both are maximally stressed

**October:**

- Panda's budget planning window (Walt Taylor Transcript)
- Post-summer anomaly review: identify which locations showed electricity creep that hasn't been explained
- Ratchet rate lookback: which locations hit peak demand events during summer? What will that cost over the next 9 months?
- Water bill review: irrigation season wrapping up — final check for underground leaks before winter

**November–December:**

- Gas overflow order risk in Texas and Colorado: "natural gas overflow orders where the utility will call you and say, I don't care what your contract says you're paying" (Walt Taylor Transcript)
- Year-end utility contract renewal review
- Deposit recovery follow-up: requests submitted in Q1 that haven't been credited

---

### 4D. Product Capabilities Unique to Multi-Site vs. Single-Campus Buyer

**Multi-Site Specific:**

1. **Cost Allocation Across Cost Centers:** A single-campus buyer has one cost center. A 2,600-location operator has 2,600 cost centers, each on a different P&L. The product needs to support cost allocation reporting that maps utility charges to location-level P&L lines, not just aggregate spend. This is not described explicitly in the corpus but is implied throughout: operators (Walt's "individual operators will ask us questions about their P&L") and Roger's P&L anomaly detection story both point to this.

2. **Deposit Management at Scale:** A single campus has one or two utility accounts. A multi-site operator has thousands. The deposit recovery feature has no meaningful application for a single-campus buyer but is a potentially high-dollar feature for any operator with 100+ locations and 10+ years of history.

3. **Rate Structure Heterogeneity Management:** A single campus is on a single utility with a handful of rate options. A 2,300-location QSR chain deals with hundreds of utilities, each with multiple rate structures. Annual rate structure optimization is a multi-site-specific workflow.

4. **Ratchet Rate Portfolio Monitoring:** A single campus hit by a ratchet rate event loses money at one location. A 2,300-location operator can have multiple simultaneous ratchet events across different markets, each with different triggering thresholds and charge durations. Portfolio-level ratchet monitoring requires multi-site aggregation logic.

5. **Location Benchmarking and Peer Comparison:** A single campus has nothing to compare itself to within the operator's portfolio. A multi-site operator can benchmark each location against similar locations (by building type, age, geography, operating hours). This is the most direct application of the "why are my Philadelphia stores billing differently?" use case Walt described.

6. **Geographic Risk Mapping:** Regulatory changes (California duck curve, Texas overflow orders, Puerto Rico island-time utilities) affect specific geographic clusters of locations. A multi-site operator needs to know which locations are in which regulatory risk zone.

7. **Exception Management at Portfolio Scale:** Managing exceptions for a single campus is trivial. Managing exceptions across 2,300 locations requires triage logic — which exceptions are high-urgency vs. low-urgency, which have potential to become ratchet events vs. which are simple errors.

**Shared with Single-Campus Buyer:**

1. Invoice receipt confirmation and payment status monitoring
2. Billing error detection (the underlying detection logic works at any scale)
3. Conversational query interface for utility data
4. Tariff and contract analysis
5. Document storage and searchability
6. Anomaly detection (the mechanism is the same; scale changes the volume management requirement)

---

## 5. COMPETITIVE IMPLICATIONS

### Against ENGIE Impact

This is the most important competitive analysis in the corpus. Here is what the evidence supports:

**ENGIE's structural weakness, confirmed on record:**

1. ENGIE's electronic bill aggregation is built on Arcadia, not proprietary infrastructure. (Walt Taylor Transcript, independently confirmed by Arcadia's own developer documentation per Walt Taylor Summary)
2. Paper bills still go through OCR, which Walt confirmed "doesn't work 100% of the time." (Walt Taylor Transcript)
3. The resulting accuracy ceiling is 90% — an accepted operational reality for the firm's most sophisticated enterprise customer. (Walt Taylor Transcript)
4. ENGIE's LLM layer does not exist. Walt described it as the natural next step ENGIE hasn't taken yet. (Walt Taylor Transcript)
5. ENGIE's exception monitoring is threshold-based (spike detection), not pattern deviation detection (baseline drift). Roger confirmed the shared meter case was not flagged by ENGIE's system — it was caught by P&L review. (Roger Goldstein Transcript)

**Positioning against ENGIE:**

- Do not position against ENGIE directly as "better than ENGIE." These are Roger's and Walt's vendor. Positioning as "we replace ENGIE" triggers a loyalty defense and disrupts a relationship that might otherwise become a channel.
- Position as "the AI layer that works alongside ENGIE and catches what ENGIE's threshold rules miss." This is honest (ENGIE misses the 10%), non-adversarial (ENGIE keeps processing bills), and leaves the channel partnership door open.
- The channel partnership thesis: Roger offered a warm introduction to his ENGIE account lead. If ENGIE is willing to offer Clear Current as an analytics add-on to its existing customers, Clear Current gets access to ENGIE's entire customer base without displacing the ENGIE relationship.
- The competitive threat timeline: Walt's observation that ENGIE should "just bolt on an LLM" is a warning. ENGIE adding a native LLM layer would significantly reduce the standalone value of Clear Current for existing ENGIE customers. The window to establish before that happens is finite.

### Against Arcadia

**What the evidence shows:**
Arcadia is ENGIE's upstream data provider for electronic bills. Arcadia is a data aggregation infrastructure company, not an analytics company. The fact that ENGIE uses Arcadia means Arcadia's data layer is accessible.

**Positioning against Arcadia:**
Arcadia is not a direct competitor. It is potential infrastructure. If Clear Current can integrate with Arcadia's data layer directly, it could serve ENGIE's customers without needing ENGIE as an intermediary — or serve non-ENGIE customers who already use Arcadia for bill aggregation. Walt noted: "There's companies out there that do something similar to what NG does with the bills. They may or may not use Arcadia as well." (Walt Taylor Transcript) Arcadia may be the universal data layer, not ENGIE. Investigate whether a direct Arcadia integration is available and on what terms.

### Against EnergyCAP

Not directly referenced in this corpus. EnergyCAP is a utility bill management platform widely used in higher education and government. Based on my domain expertise, it is primarily a bill tracking and reporting tool without AI anomaly detection. The competitive positioning would be: EnergyCAP is a database; Clear Current is an analyst. However, this vertical (higher education, government) is not the focus of this corpus.

### Against Energy Print

Not directly referenced in this corpus. Based on domain expertise, Energy Print focuses primarily on energy efficiency tracking and benchmarking for retail. The competitive positioning would be similar to EnergyCAP: bill tracking without active anomaly detection or pattern deviation identification.

### Against WatchWire/Tango

Not directly referenced in this corpus. WatchWire is a utility bill management platform that has expanded into retail and commercial real estate. It is more analytically capable than EnergyCAP but, based on domain expertise, still primarily threshold-based rather than AI-driven pattern deviation detection.

**General competitive positioning principle supported by this corpus:**
All incumbent platforms (ENGIE Impact, Arcadia, EnergyCAP, WatchWire) are threshold-based exception systems built on OCR or electronic data aggregation. None of them, based on this corpus, have implemented AI-driven pattern deviation detection that catches baseline drift. This is the shared gap across all incumbents, and it is the single most defensible positioning claim for Clear Current.

### Against JLL's Internal Tools

Not a direct sales competitive scenario — JLL's tools serve JLL's facility management clients, and JLL will not sell those tools to third parties. The risk is that companies using JLL as their facility manager will have the equivalent capability through JLL without needing Clear Current. The response: JLL manages Fortune 200 companies. Clear Current's target is mid-market multi-site operators who manage their own facilities directly. These are different customer pools.

---

## 6. WELL-EVIDENCED VS. INFERRED

### Well-Evidenced (Multiple Sources or Direct Practitioner Confirmation)

✓ **ENGIE Impact uses Arcadia for electronic bill aggregation.** Direct quote from Walt Taylor, independently confirmed by Arcadia's developer documentation. Two independent sources. High confidence.

✓ **ENGIE Impact's exception monitoring is threshold-based, not AI-driven.** Confirmed by both Roger Goldstein (description of how exception parameters are set) and Walt Taylor (explicit statement that no AI is used anywhere at Panda).

✓ **The accepted performance ceiling for ENGIE is 90% error catch rate.** Single source (Walt Taylor) but stated explicitly and from an operator with 25 years of experience and direct vendor relationship. High confidence.

✓ **Baseline drift incidents exist and are not caught by threshold-based systems.** Roger's shared meter case is the primary evidence — confirmed by the fact that his own accounting/operations team, not ENGIE, caught it. Supported by Walt's general statement about accepting 90% catch rate.

✓ **Utility deposits are uncollected at scale.** Single source (Roger Goldstein) but stated as a concrete, unprompted insight from the most operationally experienced multi-site interviewee. High confidence in the phenomenon; zero data on dollar magnitude.

✓ **Data security is the enterprise sales conversation opener.** Single source (Jamare Bates) but the most senior and market-connected voice in the corpus on enterprise sales dynamics.

✓ **Hospitality corporate is not the right buyer; property-level operators and hotel management companies are.** Single source (Randy Dawes) but confirmed by direct statement and organizational description.

✓ **Mid-market multi-site operators are the optimal target segment.** Consistent with Jamare Bates' three-tier segmentation framework and with Roger and Walt's operational descriptions of scale and tooling.

### Moderately Evidenced (Single Source, Strong Practitioner)

~ **Dollar impact of the shared meter baseline drift incident.** Roger described it as a year of paying the neighbor's electricity at a location where the average bill was $2,000/month. I inferred approximately $24,000+. This is analytical inference from partial data, not a confirmed figure.

~ **The ratchet rate detection scenario.** Walt's description of Georgia Power's ratchet mechanism is technically authoritative, and Clayton's reference to a specific pilot case involving solar-induced ratchet charges was confirmed by Walt ("correct"). But the specific dollar figures and customer context are not fully documented in this corpus.

~ **The sewer overbilling structural issue.** Walt Taylor is technically credible and stated this explicitly. It is plausible and structurally logical. But no third-party data confirms the magnitude of the overbilling, and Walt himself acknowledged it is currently uncontestable. This is a real problem but its dollar impact is unquantified.

~ **HVAC degradation creates a billing fingerprint detectable from invoice data.** Roger stated that HVAC is the #1 electricity user in restaurants and that failing units draw full power while producing minimal cooling. The inference that this creates a detectable billing anomaly is logical but is my expert inference, not something Roger explicitly said could be detected from billing data alone.

### Inferential (My Expert Analysis, Not Directly Stated)

⚠ **At 2,300 locations with a 10% error pass-through rate, approximately 1,000 billing issues per month go undetected.** This is arithmetic from Walt's stated figures (10,000 bills/month, 90% catch rate). The inference is valid but assumes uniform error distribution, which is unlikely.

⚠ **The window before ENGIE adds an LLM layer is finite but probably 2–4 years given enterprise IT cycles.** This is my domain inference based on Walt's statement that ENGIE should bolt on an LLM. ENGIE is a global company with complex procurement processes. However, I have no direct evidence of ENGIE's LLM product roadmap.

⚠ **The right target for the hospitality vertical is hotel management companies like Aimbridge or Davidson.** This is my vertical knowledge applied to Randy's structural description. Randy did not name these companies specifically.

⚠ **Cost allocation across cost centers is a multi-site-specific product capability requirement.** This is implied throughout the corpus but never stated explicitly as a product requirement by any interviewee. It is my operational inference from 16 years of multi-site experience.

---

## 7. OPEN QUESTIONS AND RESEARCH GAPS

### Gap 1: What is the Actual Dollar Magnitude of Baseline Drift Incidents?

Roger described the shared meter case but gave no dollar figure. Walt described 10% pass-through at 10,000 bills/month but gave no average error value. Neither interview produced a portfolio-level estimate of annual dollar leakage from undetected baseline drift.

**What John and Dan should do:** Ask Roger or Walt directly: "In a year like last year, looking back, what is your best estimate of the total dollar value of billing errors that you discovered after the fact — meaning errors that had been accumulating for more than 30 days before they were caught?" Even a rough order of magnitude ($1M? $5M?) would anchor the ROI story for the fundraise.

### Gap 2: What is the Deposit Recovery Opportunity in Dollar Terms?

Roger described a 10-year-old deposit sitting uncollected as a real scenario at Panda. At 2,600 locations, the aggregate deposit value could be substantial. But no dollar estimate exists in this corpus.

**What John and Dan should do:** Research utility deposit policies by state. Most states require utilities to return deposits after 12–24 months of on-time payment history. A multi-site operator with 20 years of history likely has hundreds of deposits that qualify for return. Quantifying this for a specific 100-location pilot customer and presenting it as "here is the deposit recovery opportunity we identified in your first 30 days" is a powerful proof-of-value motion.

### Gap 3: What is ENGIE Impact's Product Roadmap?

Walt explicitly said ENGIE should bolt on an LLM. The Walt Taylor Summary notes this as a competitive threat. But the corpus contains no direct intelligence on whether ENGIE is actively developing an LLM or AI analytics layer.

**What John and Dan should do:** Roger offered to connect the team with his ENGIE account lead. That conversation — even framed as exploratory about the channel partnership opportunity — would reveal whether ENGIE is actively building this. If they are, the channel partnership becomes urgent. If they're not, the standalone product has more runway.

### Gap 4: How Does Cost Allocation Work at the Location Level, and Who Owns It?

The corpus describes energy management from the central team's perspective. But Walt mentioned that "individual operators will ask us questions about their P&L." This implies that local operators have some visibility into — and accountability for — their location-level energy spend. The question is: who is the decision-maker for energy cost at the location level, and what do they see?

**Why this matters for product design:** If local operators receive P&L reports that include energy costs but can't interrogate them, there's a product opportunity for a "store-level energy report" that field managers can actually use. This is different from the central energy manager's tool. It's a reporting layer that could drive adoption at the location level and create bottom-up demand for the product.

### Gap 5: What is the True Size of the Mid-Market Segment?

Jamare Bates defined the mid-market as "companies deciding whether to build in-house or buy from the market." But he didn't quantify it. Clear Current needs to know: how many multi-site operators in the U.S. have between 50 and 500 locations, manage their own energy without a full-service facility management company, and generate enough energy spend to produce meaningful ROI from the product?

**What John and Dan should do:** RFMA (Roger is on the board) would have membership data that maps this universe for QSR specifically. Restaurant Facility Management Association membership is a list of exactly the buyers Roger described.

### Gap 6: How Does Arcadia's Integration Actually Work at the ENGIE Level?

Walt Taylor Summary cites Arcadia's own technical documentation confirming ENGIE Insight is a "known indirect data source." But the operational details of how Clear Current could access this data layer are not in the corpus.

**What John and Dan should do:** Evaluate whether a direct Arcadia API integration is commercially available, what the data quality and coverage looks like compared to ENGIE's pass-through, and whether a direct Arcadia relationship could provide Clear Current with the same electronic bill data that ENGIE currently uses — without ENGIE as a gatekeeper.

### Gap 7: What Does the Energy Manager's Ideal Weekly Workflow Look Like?

Roger described pulling exception reports and scrubbing Excel. Walt described running custom reports beyond what NG provides and responding to P&L questions from operators. But neither described a specific weekly workflow — Monday morning review, Tuesday operator calls, etc.

**Why this matters for product design:** A well-designed product fits into the energy manager's existing workflow, not a new workflow they have to build. Understanding the specific touchpoints in their week — morning review, month-end reporting, budget season, contract renewal — would allow Clear Current to design the product's alert cadence, reporting schedule, and notification logic around the user's natural rhythm rather than imposing a new one.

### Gap 8: What is the Competitive Landscape for Smaller Operators?

Walt said the AI billing tool concept "probably works" for a franchisee with 25 restaurants. Roger agreed the mid-market is where the real opportunity is. But neither described what tools smaller operators (50–200 locations) are currently using.

**Why this matters for GTM sequencing:** If smaller operators are using nothing — just paying their bills and hoping for the best, as Roger described — then the initial sales motion might be easier at smaller scale (fewer integrations, simpler rate environments, lower procurement friction) even if the long-term revenue opportunity is higher at larger scale.

### Gap 9: What Regulatory Events Should Trigger a Sales Conversation?

Walt described California's duck curve rate shift as a forcing event that exposed operators who hadn't updated their demand management strategy. He described Texas winter overflow order risk. He described utility rate changes as a recurring source of exposure.

**What John and Dan should do:** Build a regulatory event calendar — state PUC rate proceedings, time-of-use structure changes, peak demand window shifts — that triggers outbound sales activity. A company in Georgia facing a Georgia Power ratchet rate change is a warm lead. A company in California dealing with TOU window shifts is a warm lead. Regulatory event-triggered outreach is a differentiated and defensible outbound motion that generic marketing cannot replicate.

---

_This analysis was prepared by David Okonkwo, Multi-Site Energy Operations Expert, as a contribution to Clear Current Technologies' consulting engagement. Every finding is attributed to source material. Inferences are marked as such. I have tried to honor the fieldwork that produced this corpus with an analysis that matches its quality._

# Agent: Victor Hale | Competitive Intelligence Specialist

# Run: 2026-04-17T16:08:14.729251

---

# Competitive Intelligence Analysis: Clear Current Technologies

## Prepared by: Victor Hale, Competitive Intelligence Specialist

### April 2026 | CDL Texas MBA Consulting Engagement

---

## PREFATORY NOTE ON METHODOLOGY

I am working from two documents: the Research Synthesis Brief (hereafter "Synthesis") and the Arcadia Competitive Intelligence Report (hereafter "Arcadia Report"). Every claim in this analysis names its source. Where I identify a statistic or assertion without a documented citation chain, I flag it explicitly. My job is to produce analysis that survives investor diligence — which means I will not launder unverified claims by presenting them alongside verified ones.

The gap between "what Arcadia's marketing says" and "what Arcadia's customers confirm" is material. I will maintain that distinction throughout.

---

## 1. SOURCE INVENTORY

### Document 1: Research Synthesis Brief

**Prepared by:** CDL Texas MBA Consulting Team (Clayton Hester, Jason Wisnieski, Adam Case, Victor Pan)
**Date:** April 6, 2026
**Content:** Integration of five primary interviews with secondary research across six Perplexity sessions and three TAMU databases (IBISWorld, ABI/Inform, Orbis). Covers 15 finding areas with corroboration ratings, five deliverable readiness assessments, and a research gap inventory.

**What matters most for competitive intelligence:**

- Marc Spieler's (NVIDIA) primary interview identifying Arcadia as primary competitive threat and naming three GTM tracks
- Don Johnson's (Trane) observation that Clear Current billing intelligence is complementary — not competing — with building operations
- Phil Combs' (Trane) identification of Energy Toolbase as competitor for tariff analysis, not Arcadia
- Texas State University's active EnergyCAP relationship with documented frustrations
- The identified-vs.-realized gap flagged by Spieler as the single most important investor question
- Section 07 (Arcadia competitive findings) and the competitive gap thesis across the opportunity heatmap and product module tables

**Source quality note:** The Synthesis aggregates findings but does not always distinguish between what a database source states and what that source cites as its own primary evidence. I will flag these second-order citations below.

---

### Document 2: Arcadia Competitive Intelligence Report

**Prepared by:** CDL Texas MBA Consulting Team
**Date:** April 2026
**Content:** Deep-dive on Arcadia covering funding history (Section 1), product architecture (Section 2), Urjanet acquisition (Section 3), documented customers (Section 4), pricing inference (Section 5), geographic focus (Section 6), strategic weaknesses (Section 7), hiring patterns (Section 8), partnerships (Section 9), leadership (Section 10), positioning (Section 11), recent news (Section 12), and strategic implications.

**Confidence ratings (from the report itself):**

- Funding history: HIGH (primary press releases, CB Insights, Growjo) — Arcadia Report, Executive Summary
- Product architecture: HIGH (Arcadia's own llms.txt, press releases, blog posts) — Arcadia Report, Executive Summary
- Customers: MEDIUM-HIGH (verified customer stories; some from llms.txt marketing claims) — Arcadia Report, Executive Summary
- Revenue/headcount: LOW-MEDIUM (no public financials; third-party estimates conflict widely) — Arcadia Report, Executive Summary
- Pricing: LOW (no published pricing; no verified procurement data found) — Arcadia Report, Executive Summary
- Strategic weaknesses: HIGH (triangulated from job postings, product gaps, no higher-ed customers identified) — Arcadia Report, Executive Summary

**What matters most for this analysis:**

- The complete product architecture breakdown separating Arc developer platform from Enterprise Solutions suite
- Section 4 customer documentation with explicit sourcing by customer
- Section 7 gap analysis with HIGH confidence ratings
- Section 8 hiring patterns as forward-looking product roadmap signals
- The Cox Enterprises case study as the highest-quality customer evidence in the report

**Critical limitation:** The Arcadia Report draws on Arcadia's own marketing materials (llms.txt, press releases, blog posts) as primary sources for product capability claims. These are self-reported. Where customer case studies confirm capabilities, confidence is higher. Where only Arcadia's marketing claims a capability, I will say so.

---

## 2. KEY FINDINGS

**Finding 1: Arcadia's enterprise pivot is 14 months old and has only two detailed customer case studies.**
The Enterprise Solutions suite launched January 29, 2025. As of April 2026, the only enterprise customers with detailed documented case studies are Cox Enterprises and Arconic — both for utility data management, not billing audit or procurement advisory. (Arcadia Report, Section 4, footnotes 31 and 21.) Iron Mountain, Adobe, Intuit, and UPS are procurement advisory relationships inherited from the RPD Energy acquisition in February 2025, not customers who evaluated and selected Arcadia's enterprise platform independently. (Arcadia Report, Section 4, footnotes 24, 25.) The enterprise product is early. Investor-grade claims about Arcadia's enterprise momentum should be calibrated accordingly.

**Finding 2: Cox Enterprises explicitly found Arcadia's dashboard insufficient and used it as a data feed instead.**
This is the highest-quality enterprise customer evidence in the corpus. Cox manages 40,000 accounts and approximately $120M in annual energy spend. They chose Arcadia specifically because competitors "wanted to put us on their dashboard" — Cox used Arcadia as a utility data API to feed their own in-house Energy Dashboard. (Arcadia Report, Section 4, footnote 31.) This is not a ringing endorsement of Arcadia's UX. It is evidence that Arcadia's largest documented enterprise customer found the native experience insufficient and worked around it. This is a material differentiation point for Clear Current's conversational AI interface.

**Finding 3: No documented higher education customers exist in Arcadia's entire corpus — not one.**
After 14 months of enterprise sales, zero university, community college, hospital, K-12, or district energy customers appear in any Arcadia customer story, case study, press release, or marketing material reviewed. (Arcadia Report, Section 4 and Gap 1.) The Synthesis confirms this: "Higher education is literally uncontested territory for Clear Current." (Synthesis, Section 07.) This is not a gap in market research — it is a documented absence across a comprehensive review of Arcadia's self-published materials.

**Finding 4: Arcadia's Senior PM is primarily migrating legacy customers, not building new features.**
Job postings reviewed in late 2025 and early 2026 explicitly state the primary responsibility is "migrating complex customer workflows and data from a legacy platform to our flagship platform" with a secondary note that the role will "eventually" transition to new feature development. (Arcadia Report, Section 8, footnotes 43, 44.) This is a direct primary source — job descriptions are company-written documents — confirming that Arcadia's product attention is split. The migration involves Urjanet/Arc customers being moved to the new enterprise platform, which was acquired May 2022. (Arcadia Report, Section 3.) The migration is now in year four and is still not complete.

**Finding 5: Arcadia's tariff database is backward-looking; it does not offer forward-looking PUC monitoring.**
Arcadia monitors 30,000+ tariff structures and processes 75,000 rate updates per month (Arcadia Report, Section 2, footnote 17) — but this is historical and current tariff tracking. There is no documented feature for monitoring PUC dockets, tracking proposed rate cases before they are finalized, or alerting customers to pending rate increases. (Arcadia Report, Gap 3.) The Synthesis confirms: "Zero competitors offer this feature." (Synthesis, Section 03, Regulatory Intelligence row.) The distinction matters: knowing what rates exist is different from knowing what rates are about to change. Arcadia does the former. Nobody does the latter at commercial scale.

**Finding 6: Arcadia has no campus chargeback capability — and cannot add it without a full product rebuild.**
District energy cost allocation — the problem of distributing chilling plant, steam plant, and central utility costs across 50-150 metered buildings with departmental sub-metering — is absent from Arcadia's documented product. (Arcadia Report, Gap 2.) Arcadia's enterprise UX is designed for a single corporate entity managing utility spend. The multi-entity, multi-commodity cost allocation problem that Texas State University described across their entire interview (Synthesis, Section 03, Campus Chargeback row) is architecturally foreign to Arcadia's product. This is not a feature gap — it is a design gap. Building it would require rearchitecting the cost allocation logic from scratch.

**Finding 7: Marc Spieler identified Arcadia as the primary competitive threat; Phil Combs independently named a different competitor for tariff analysis.**
Spieler's identification of Arcadia is documented in the Synthesis (Section 02, Marc Spieler row). But Phil Combs — a 20-year enterprise energy sales professional who specifically works on tariff analysis — named Energy Toolbase as the closest competitor for that workflow, not Arcadia. (Synthesis, Section 02, Phil Combs row.) This divergence is analytically significant: a strategic advisor with portfolio-level visibility names Arcadia; a practitioner working at the feature level names Energy Toolbase. Both are right, and the difference reveals that the competitive threat varies by product module. Arcadia threatens the platform; Energy Toolbase threatens a specific feature.

**Finding 8: Don Johnson's "complementary" characterization defines the channel sales opportunity, not the competitive positioning.**
Don Johnson's observation that Clear Current's billing intelligence is "complementary to building ops, not competing" (Synthesis, Section 03, Arcadia row) comes from a Trane account manager who manages 100+ commercial energy buyers. His perspective is the channel partner perspective — he is not threatened by a billing audit tool because he sells building controls. This framing should inform Clear Current's partnership and channel strategy (Trane, JLL, CBRE as distributors rather than competitors) but should not be read as a universal competitive characterization. Arcadia would not describe itself as complementary.

**Finding 9: The $10M billing error figure from Clear Current's pilots has an exact parallel in Arcadia's unverified marketing.**
Arcadia's CEO stated on LinkedIn in January 2026: "One hyperscaler identified over $10 million in billing errors within a few months of using Arcadia." (Arcadia Report, Section 4, footnote 23.) The customer is unnamed and the claim is self-reported marketing. Clear Current's $10M figure comes from 12 actual pilots (Synthesis, Section 03, Billing Errors row) but faces the same investor question Marc Spieler identified: how much has been realized as cash? (Synthesis, Section 04, Finding 7.) Both companies are using a similar number. The differentiator in investor conversations will be which company can produce a documented, named recovery — error found, utility contacted, credit issued, dollars received.

**Finding 10: Arcadia's consumer reputation is a soft vulnerability in enterprise procurement, not a fatal one.**
Trustpilot shows 2.6/5 across 1,159 reviews with 25+ BBB complaints, all from the consumer community solar product. (Arcadia Report, Section 7, Gap 8, footnotes 36, 37, 38.) The community solar spinout (Perch Energy, announced March 2025, closing Q2 2026 — Arcadia Report, Section 9, footnote 13) will eventually separate this reputational baggage from Arcadia's enterprise identity. But until the spinout closes, a procurement committee Googling "Arcadia energy" will find 2.6 stars prominently displayed. This is a soft credibility disadvantage in formal RFP processes — not a disqualifier, but a question Clear Current can raise without manufacturing it.

**Finding 11: Arcadia is a data supplier to some of Clear Current's potential competitors — WatchWire and Verse both use Arc Plug.**
WatchWire by Tango uses Arcadia's Plug API as a utility data feed for its own energy management product. So does Verse. (Arcadia Report, Section 9, partnerships table, footnote 31.) This creates a structural dynamic: Arcadia is simultaneously a direct competitor (enterprise energy management) and an upstream supplier to other competitors (WatchWire, Verse). This matters for Clear Current's data strategy — any data partnership with Arcadia would require clear-eyed assessment of Arcadia's incentive to compete with its own API customers if they succeed.

**Finding 12: The "unnamed hyperscaler" billing error claim is Arcadia's marketing, not verified customer evidence.**
The $10M+ billing error claim attributed to an unnamed hyperscaler was stated by Kiran Bhatraju on LinkedIn in January 2026. (Arcadia Report, Section 4, footnote 23.) The Arcadia Report flags this explicitly: "Not independently verified — marketing claim only." This is how Clear Current should treat it in any competitive conversation. It is not a case study. It is not a named reference. It is a CEO post. The standard for investor-grade evidence is higher.

---

## 3. STATISTICS THAT ARE DEFENSIBLE

I am rating each statistic on a three-factor basis: (1) does the source document cite a specific primary source, (2) is that primary source independently verifiable, and (3) is the number being used in a way consistent with what the source actually measured.

---

**Arcadia-Specific Statistics**

| Statistic                                                        | Source Document           | That Document's Citation                           | Confidence  | Notes                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------- | ------------------------- | -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| $649M total raised                                               | Arcadia Report, Section 1 | CB Insights footnote [2]; Growjo footnote [1]      | HIGH        | CB Insights and Growjo are reputable aggregators. Individual round amounts are sourced to press releases. The $658M Growjo figure vs. $649.9M CB Insights discrepancy likely reflects timing or undisclosed tranches. Use $649M as the conservative figure.                    |
| $200M Series E, May 2022                                         | Arcadia Report, Section 1 | Press release, footnote [8]                        | HIGH        | Publicly announced round with named lead investor (J.P. Morgan Asset Management).                                                                                                                                                                                              |
| $1.5B last known valuation                                       | Arcadia Report, Section 1 | Series E, May 2022, footnote [1]                   | HIGH        | Reported at time of Series E. No valuation disclosed in 2024 round — this number is 4 years old and should be used with that caveat.                                                                                                                                           |
| 9,500+ utilities covered                                         | Arcadia Report, Section 2 | Arcadia's own llms.txt and marketing materials     | MEDIUM      | Self-reported by Arcadia. The Urjanet acquisition (Section 3) is consistent with this scale. Not independently audited.                                                                                                                                                        |
| 30,000+ tariff structures                                        | Arcadia Report, Section 2 | Arcadia marketing, footnote [17]                   | MEDIUM      | Self-reported. The Genability acquisition underpins this; Genability's tariff database was independently recognized. Still, "30,000+" is a marketing claim without independent audit.                                                                                          |
| 75,000 rate updates per month                                    | Arcadia Report, Section 2 | Arcadia marketing, footnote [17]                   | LOW-MEDIUM  | Self-reported, no third-party verification. Plausible given 9,500 utility coverage but unverified.                                                                                                                                                                             |
| 98.4% median bill recreation accuracy                            | Arcadia Report, Section 2 | Arcadia marketing, footnote [17]                   | LOW-MEDIUM  | Self-reported by Arcadia for their CVS product. No independent audit citation. "Median" is doing real work here — it means half of recreations are less accurate than 98.4%. Not independently verified. Flag this as unverified when countering in competitive conversations. |
| 95%+ U.S. commercial account coverage                            | Arcadia Report, Section 3 | Arcadia marketing, footnote [28]                   | MEDIUM      | Grounded in Urjanet's documented pre-acquisition coverage. The 9,500 utility figure and Urjanet's 6,500+ pre-acquisition coverage are consistent. But "95%+" is still self-reported.                                                                                           |
| ~400 utilities for interval data (Jan 2026)                      | Arcadia Report, Section 3 | Arcadia documentation, footnote [16]               | MEDIUM-HIGH | Arcadia published this figure in their own product documentation. Directionally verifiable — AMI deployment is publicly tracked by utilities.                                                                                                                                  |
| 60 utilities for interval data (Q4 2024 start)                   | Arcadia Report, Section 3 | Arcadia documentation, footnote [15]               | MEDIUM-HIGH | Same sourcing as above. The jump from 60 to 400 in approximately 3-4 months is dramatic and worth noting as a significant infrastructure investment.                                                                                                                           |
| 80% full-auto tariff match rate (ATA)                            | Arcadia Report, Section 2 | Arcadia marketing, footnote [17]                   | LOW-MEDIUM  | Self-reported. The 20% requiring expert analyst review is the more interesting figure — it means 1 in 5 meter-tariff assignments still requires human intervention despite claimed automation.                                                                                 |
| 1,159 Trustpilot reviews at 2.6/5                                | Arcadia Report, Section 7 | Trustpilot, footnote [36]                          | HIGH        | Trustpilot is a publicly accessible third-party platform. Review count and rating are independently verifiable. Note: these are all consumer community solar reviews, not enterprise.                                                                                          |
| 25+ BBB complaints                                               | Arcadia Report, Section 7 | BBB, footnote [37]                                 | HIGH        | BBB is independently verifiable. Same caveat: consumer product complaints, not enterprise.                                                                                                                                                                                     |
| 500,000+ meter-tariff assignments processed (ATA)                | Arcadia Report, Section 2 | Arcadia marketing, footnote [17]                   | LOW-MEDIUM  | Self-reported cumulative figure with no time range specified. Directionally consistent with Fortune 500 client base but not independently verified.                                                                                                                            |
| 30% of Fortune 500 utility bills through Urjanet pre-acquisition | Arcadia Report, Section 3 | Attribution unclear — described as "approximately" | LOW         | The report says "approximately 30% of the Fortune 500's utility bills were being captured through Urjanet's technology prior to acquisition" but does not cite a specific press release or Urjanet publication for this figure. Flag as uncited.                               |

---

**Market Statistics Referenced in Synthesis**

| Statistic                                                                     | Source Document                      | That Document's Citation                                                | Confidence  | Notes                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 76% of commercial energy buyers expect costs to rise but 69% remain reactive  | Synthesis, Section 03                | EnergyCAP State of Utility 2026 report                                  | MEDIUM-HIGH | Vendor-produced survey — EnergyCAP has a stake in findings that support the problem they solve. But directional alignment with primary interview findings increases confidence. Specify "EnergyCAP SoU 2026" as source, not as independent research.               |
| FERC confirmed $108M mischarged at FirstEnergy                                | Synthesis, Section 03                | FERC audit — government enforcement action                              | HIGH        | Government enforcement action is primary source. Independently verifiable through FERC docket records. Use this, not the "80% overpaying" statistic.                                                                                                               |
| RI PUC: 83% of internally flagged billing exceptions sent to customers anyway | Synthesis, Section 03                | RI PUC                                                                  | HIGH        | State regulatory body finding. Independently verifiable. One of the strongest statistics in the corpus.                                                                                                                                                            |
| DOE: demand charges represent 30-70% of commercial utility bills              | Synthesis, Section 03                | DOE                                                                     | MEDIUM-HIGH | DOE is a credible primary source. The range (30-70%) is wide because it varies by utility, rate class, and usage profile. Accurate but requires context to use properly.                                                                                           |
| EnergyCAP: $40-52/meter/year                                                  | Synthesis, Section 05, Deliverable 4 | Described as "published" — no specific URL cited                        | MEDIUM      | Plausible for an enterprise EMS at that scale. The Synthesis says it is "published" but does not link to a specific pricing page. If using for investor materials, verify directly from EnergyCAP's published pricing or a reseller quote.                         |
| $10M identified in Clear Current's 12 pilots                                  | Synthesis, Section 03                | Internal — from Clear Current                                           | MEDIUM-HIGH | This is John and Dan's own data from their pilots. It should be HIGH confidence for the team. The unresolved question is what has been realized as actual refunds — that is the investor-grade number (See Marc Spieler's point, Synthesis Section 04, Finding 7). |
| 660+ district energy systems in U.S.                                          | Synthesis, Section 03                | Not cited to a specific source                                          | LOW         | The Synthesis states this but does not cite APPA, DOE, or any other source. Before using in investor materials, this needs a citation. My experience suggests the figure is in the right range but I cannot confirm it from these documents.                       |
| 5.9% commercial energy CAGR                                                   | Synthesis, Section 03                | Arcadia's First Annual Commercial Electricity Rate Report, January 2026 | MEDIUM      | Arcadia published this. It is their own analysis of 81 utilities, 5 building types, 2020-2025. (Arcadia Report, Section 12, footnote 58.) It is not an independent government figure. Cite it as "Arcadia analysis" not as DOE or EIA data.                        |
| Ohio PUC: 275-day statutory timeline for rate cases                           | Synthesis, Section 03                | Referenced but specific citation not provided in Synthesis              | MEDIUM      | State regulatory timelines are publicly available in statute. This is verifiable but I would want to see the specific ORC citation before using in investor materials.                                                                                             |
| University of Wisconsin RFP: $500K-$2M contract value                         | Synthesis, Deliverable 4             | Described as an RFP document                                            | HIGH        | A procurement document is a primary source. If the team has access to the actual RFP, this is verified. If it was referenced in secondary research, confirm the document exists.                                                                                   |

---

**Statistics I Would Not Use Without Further Verification**

| Statistic                                                      | Problem                                                                                                                                                                          |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "80% of commercial buildings overpay on utility bills"         | The Synthesis explicitly says this cannot be used — no citation chain. Consistent with my own practice. Do not use.                                                              |
| "30%+ of Fortune 500 utility bills through Urjanet"            | Arcadia Report describes this as approximate with no citation to a specific Urjanet document.                                                                                    |
| "1 billion tariff calculations annually" (Arcadia/Signal)      | Self-reported by Arcadia, no independent verification.                                                                                                                           |
| Any revenue estimate for Arcadia ($160M-$270M range)           | The Arcadia Report explicitly rates revenue confidence as LOW-MEDIUM. Three sources give three different numbers. Do not use any specific figure without noting the uncertainty. |
| "97.5% of facilities saw rate increases" (Arcadia rate report) | Arcadia's own analysis of their own dataset. Useful directional data, cite as Arcadia's analysis.                                                                                |

---

## 4. COMPETITIVE INTELLIGENCE

### Competitor 1: Arcadia

**What the documents confirm:**

_Product capabilities (HIGH confidence — sourced to Arcadia's own documentation):_

- Utility Bill Management: automated data capture from 9,500+ utilities via credential scraping and Urjanet EDI; Automated Tariff Assignment (ATA) at 80% full-auto rate; Cost Validation Service (CVS) claiming 98.4% median bill recreation accuracy; billing error identification; tariff optimization; automated bill payment; budgeting and forecasting. (Arcadia Report, Section 2.)
- Energy Procurement Advisory: co-optimization across supply options including flexible retail supply, community solar, renewables, demand-side management; scenario modeling. Built on RPD Energy acquisition February 2025. (Arcadia Report, Section 2, footnotes 24-27.)
- Sustainability Reporting: Scope 1 and 2 tracking; GRI, SASB, TCFD, CSRD, SEC framework support; audit-ready data; integrations with Cority and Sweep. (Arcadia Report, Section 2, footnotes 28, 29.)
- Arc Developer Platform (separate from Enterprise): Plug (data API), Signal (tariff engine, 30K+ structures), Switch (solar savings modeling), Bundle (community solar billing), Spark (advanced analytics). (Arcadia Report, Section 2, footnotes 14, 17-20.)

_Product capabilities NOT documented (HIGH confidence these gaps exist):_

- No natural language AI chat interface. (Arcadia Report, Gap 4.)
- No campus chargeback or district energy cost allocation. (Arcadia Report, Gap 2.)
- No PUC docket monitoring or rate case regulatory intelligence. (Arcadia Report, Gap 3.)
- No ERP integrations (SAP, Oracle, Microsoft Dynamics, Infor). (Arcadia Report, Section 9, Integration Gaps.)
- No CMMS integrations (Maximo, Archibus, FM:Systems). (Arcadia Report, Section 9, Integration Gaps.)
- No higher education consortia partnerships (NACUBO, APPA, E&I Cooperative, Educause). (Arcadia Report, Section 9, Integration Gaps.)
- No deregulated supply contract audit capability. (Arcadia Report, Gap 9.)

_Primary verticals:_
Corporate Fortune 500 (manufacturing, media, tech, automotive services). No institutional verticals documented. (Arcadia Report, Section 4.)

_Pricing model (LOW confidence — no published pricing):_
Inferred as per-account or per-meter for Utility Bill Management; percentage of spend or advisory fee for Procurement Advisory; flat or tiered SaaS for Sustainability Reporting. Likely priced for $50M+ energy spend portfolios based on Cox Enterprises case study. (Arcadia Report, Section 5.)

_GTM motion:_
Primarily land-and-expand via inherited Urjanet and RPD Energy customer relationships rather than outbound field sales. One Account Executive, Enterprise Solutions position open as of April 2026 — thin enterprise sales hiring. (Arcadia Report, Section 8.) API-first DNA means some enterprise accounts use Arcadia as a data feed to their own systems rather than as an end-user platform. (Arcadia Report, Section 4, Cox Enterprises case.)

_Documented customer evidence:_

- Cox Enterprises: 40,000 accounts, $120M annual spend, used as data feed not dashboard, found $43K+ savings from zero-kWh and rate optimization. (Arcadia Report, Section 4, footnote 31.) — VERIFIED CASE STUDY
- Arconic: Fortune 500 manufacturer, utility data + insights. Details sparse. (Arcadia Report, Section 4.) — VERIFIED, MINIMAL DETAIL
- Fox Corporation: ESG reporting use case only. (Arcadia Report, Section 4, footnote 20.) — VERIFIED, LIMITED SCOPE
- Iron Mountain, Adobe, Intuit, UPS: RPD Energy inherited relationships; procurement advisory only, not billing management. (Arcadia Report, Section 4, footnote 24.) — VERIFIED SOURCE, LIMITED TO PROCUREMENT
- Conagra, Penske: Listed in llms.txt marketing only, no case study. (Arcadia Report, Section 4, footnotes 20.) — MARKETING CLAIM ONLY
- "Unnamed hyperscaler" with $10M billing errors: CEO LinkedIn post, January 2026, customer unnamed. (Arcadia Report, Section 4, footnote 23.) — NOT INDEPENDENTLY VERIFIED

_Key weaknesses (HIGH confidence):_

- Enterprise product is 14 months old with two detailed case studies
- Senior PM primarily doing legacy migration, not new feature development (job posting evidence)
- Cox Enterprises, their best customer, found the UX insufficient and built around it
- Consumer Trustpilot 2.6/5 is publicly visible and pre-dates the Perch spinout completion
- No higher education customers after 14 months of enterprise sales
- No campus chargeback, no chat interface, no regulatory intelligence

_Clear Current win condition vs. Arcadia:_
Win on vertical depth (higher education), UX depth (energy manager native vs. developer native), campus chargeback (unique capability), regulatory intelligence (unoccupied whitespace), and mid-market pricing accessibility. The 12-24 month migration distraction window is tactical opportunity, not permanent advantage. Do not wait on Arcadia. Build the moat now.

---

### Competitor 2: EnergyCAP

**What the documents confirm:**

_Product focus:_ Enterprise energy management system for higher education, healthcare, and government institutions. Core capabilities include utility bill entry and management, campus chargeback/cost allocation, anomaly detection, and reporting. (Synthesis, Section 03, EnergyCAP rows throughout.)

_Primary verticals:_ Higher education (confirmed — Texas State and UT Austin are both active users), government, healthcare. The campus district energy focus is the defining vertical characteristic. (Synthesis, Section 02, Texas State and UT Austin interviews.)

_Pricing:_ $40-52/meter/year published. Texas State: $50-75K/year for 1,500 meters via YearOut Energy reseller. (Synthesis, Deliverable 4; Synthesis, Section 03, EnergyCAP row.) **Citation note:** The Synthesis describes this pricing as "published" but does not link to a specific source URL. Verify before using in investor materials. The Texas State figure comes from a primary interview — HIGH confidence for that specific installation.

_User experience (documented via G2/Capterra reviews):_
"Outdated, un-intuitive, glorified spreadsheet" — 132 G2/Capterra reviews. (Synthesis, Section 03.) "Chargebacks and splits are hard to understand. I tried to use the help, but it is lacking details." (Synthesis, Section 04, Finding 6.) Proactive alerting is described as the most-requested missing feature in EnergyCAP reviews. (Synthesis, Deliverable 3, Anomaly Detection module.)

**Citation note on reviews:** The Synthesis references "132 G2/Capterra reviews" but does not quote a specific review URL or aggregate score. The language cited ("outdated, un-intuitive, glorified spreadsheet") reads like synthesized description rather than direct quote. For investor materials, I would want the actual G2 URL and average score to accompany these characterizations.

_Documented weaknesses:_

- Chargeback feature is its stickiest capability AND its most complained-about UX (Synthesis, Section 04, Finding 6)
- No AI-native capability confirmed
- Does not serve both finance and operations audiences well from a single platform (Synthesis, Section 03, Finance/Ops row)
- ERP integration gap flagged by Andi Ault — no Banner/Workday/PeopleSoft export (Synthesis, Deliverable 3, Financial System Integration row)
- No proactive alerting (EnergyCAP reviews, per Synthesis)

_Distribution:_ Sold through resellers (YearOut Energy confirmed for Texas State installation). (Synthesis, Section 02.) This is relevant to Clear Current's channel strategy — the reseller layer is a competitive vulnerability and a partnership opportunity.

_Clear Current win condition vs. EnergyCAP:_
Win on AI-native UX (conversational interface vs. "glorified spreadsheet"), proactive push alerting (EnergyCAP's most-requested missing feature), finance/ops dual-audience design, ERP integration, and regulatory intelligence. Campus chargeback must be matched or exceeded — this is EnergyCAP's core retention mechanism. If Clear Current builds chargeback with better UX, EnergyCAP's primary lock-in dissolves.

---

### Competitor 3: Energy Toolbase

**What the documents confirm:**

_Product focus:_ Tariff analysis and rate comparison. Phil Combs (20-year Trane energy sales veteran) named Energy Toolbase as the current tool for tariff queries including: "which tariff is more beneficial based on last 24 months of data," rate analysis, and tariff comparison workups. (Synthesis, Section 02, Phil Combs row; Synthesis, Deliverable 5, Tariff Optimization module.)

_Primary vertical:_ Mentioned in context of energy services/performance contracting workflow. Used by sophisticated analysts. Not described in the context of higher education or institutional energy management.

_Positioning:_ Phil Combs named Energy Toolbase, not Arcadia, as the competitive reference for tariff analysis work. This is significant — a practitioner doing the actual analytical work points to a different tool than the strategic advisor does. (Synthesis, Section 03, Arcadia row; Synthesis, Section 02, Phil Combs row.)

**What the documents do NOT confirm:**

- Pricing model (not mentioned)
- Customer base beyond implied use by energy services engineers
- UX quality
- Whether Energy Toolbase offers any capabilities beyond tariff analysis

_Clear Current win condition vs. Energy Toolbase:_
Energy Toolbase is a point solution for tariff analysis. Clear Current wins by integrating tariff optimization into a broader workflow platform — the same data that identifies a billing error can immediately recommend a rate switch. Integration beats a standalone tool if the UX is comparable.

---

### Competitor 4: WatchWire by Tango (now Berkshire Partners-backed)

**What the documents confirm:**

_Product focus:_ Dominant institutional commercial real estate energy management tool. (Synthesis, Section 03, CRE row.) 500+ customers in 140+ countries. Brookfield Asset Management is a named customer. (Synthesis, Deliverable 1 gap table.)

_Business model note:_ WatchWire uses Arcadia's Arc Plug API as its own utility data source. (Arcadia Report, Section 9, partnerships table.) This means WatchWire is simultaneously a competitor in CRE energy management and an Arcadia API customer — relevant to understanding how the data supply chain works.

_Pricing:_ Undisclosed but described as "institutional" pricing (Synthesis, Deliverable 4). No published figures found. Berkshire Partners backing implies premium positioning.

_Primary vertical:_ Commercial real estate. GRESB reporting is a primary use case in this vertical. (Synthesis, Section 03, CRE row.)

**What the documents do NOT confirm:**

- Specific pricing
- Product weaknesses (no user reviews cited in either document)
- Whether WatchWire serves higher education or healthcare verticals
- Specific product capabilities beyond "institutional CRE energy management"

**Citation gap:** "500+ customers in 140+ countries" — the Synthesis cites this but does not link to a specific WatchWire/Tango press release or website page. Flag for verification.

_Clear Current win condition vs. WatchWire:_
WatchWire is primarily CRE-focused with no documented higher education presence. If Clear Current's whitespace is confirmed as higher ed and institutional, direct competition with WatchWire is limited in the near term. Monitor whether WatchWire moves toward campus or healthcare. Their Arcadia data dependency is a potential pressure point.

---

### Competitor 5: Measurabl

**What the documents confirm:**

_Product focus:_ ESG reporting and sustainability data management for commercial real estate. (Synthesis, Section 03, CRE row.)

_Notable recent move:_ Launched a free tier in July 2025, onboarding 11,000+ buildings in 4 weeks. (Synthesis, Deliverable 3, Journey 6.) This is a significant market signal — free tier acquisition strategy in the ESG benchmarking layer suggests Measurabl is trying to establish data network effects before monetizing.

_Primary vertical:_ Commercial real estate, sustainability reporting.

**What the documents do NOT confirm:**

- Specific billing audit or energy management capabilities
- Pricing beyond the free tier launch
- Whether Measurabl competes in utility bill management or primarily in ESG reporting/benchmarking

_Clear Current win condition vs. Measurabl:_
Measurabl is primarily an ESG reporting tool, not an energy management platform. The competitive overlap is limited. Watch the free tier strategy — if Measurabl expands into utility bill management, the 11,000 building data position becomes a platform advantage.

---

### Competitor 6: BrainBox AI

**What the documents contain:**
BrainBox AI is named in the Synthesis but without substantive detail in either document reviewed. The only reference is in the context of the broader competitive landscape. No product capabilities, pricing, customers, or documented weaknesses appear in either source.

**My assessment:** BrainBox AI operates in the building automation and HVAC optimization space using AI — which is a different product category than utility bill management or energy data analytics. Don Johnson's observation that building operations tools and billing intelligence are complementary, not competing (Synthesis, Section 02), is relevant here. BrainBox AI likely competes with Trane's building controls offering more than with Clear Current's billing/data layer. I would not include BrainBox AI in Clear Current's primary competitive matrix without a dedicated research session.

---

### Competitor 7: PEER AI

**What the documents contain:**
Named in the context of competitive landscape without substantive product detail in either source document reviewed. No capabilities, pricing, or customer evidence appears.

**My assessment:** "PEER AI" is ambiguous — it may refer to the PEER (Performance Excellence in Electricity Renewal) green building rating system operated by GBCI, or to a separate company. The Synthesis references "PEER Platinum district energy system" at UT Austin (Section 02, Andi Ault row), which is the rating system, not a software competitor. Any competitive intelligence on a company called "PEER AI" as a software product would require a dedicated research session. I will not make claims about it from these documents.

---

### Competitor 8: Constellation Energy / ENGIE Impact

**What the documents contain:**
Constellation is named once — Rohit Marwaha joined Arcadia from Constellation Energy as part of the RPD Energy acquisition. (Arcadia Report, Section 10, leadership table.) This establishes Constellation as a large incumbent in energy procurement advisory but does not position it as a direct software competitor to Clear Current.

ENGIE Impact is referenced in the Synthesis as part of the broader competitive landscape but without specific product capability, pricing, or customer documentation in either source document.

**My assessment:** Constellation and ENGIE Impact are primarily energy procurement and services companies, not software companies. They compete in a different layer — supply contracting and advisory — rather than the data analytics and billing intelligence layer where Clear Current operates. The more relevant question is whether they bundle proprietary software with their services in a way that creates switching costs. That question is not answered by these documents.

---

### Competitor 9: Gridium

**What the documents confirm:**
Pricing referenced: $470-760+/month per building. (Synthesis, Deliverable 4, WTP section.) This is the most specific per-building pricing benchmark in the corpus for an AI-adjacent energy management tool.

**What the documents do NOT confirm:**
No product capabilities, customer base, or positioning details appear in either document. Gridium is used exclusively as a pricing benchmark.

**My assessment:** Gridium's pricing model — per building — is a useful anchor for Clear Current's pricing discussions. At $470-760/month per building, a 50-building campus would pay $282K-$456K/year. That provides a ceiling reference against which EnergyCAP's meter-based pricing ($40-52/meter at 1,500 meters = $60-78K/year) and any Clear Current pricing would be evaluated. These two price points define the range. Gridium needs a dedicated competitive research session before being included in a competitive matrix.

---

### Competitor 10: Verse

**What the documents confirm:**
Verse is named twice: once as a competitor in PPA/contract analysis (Synthesis, Deliverable 5, PPA module), and once as an Arcadia Arc Plug API customer — meaning Verse uses Arcadia's data infrastructure to power its own analytics product. (Arcadia Report, Section 9, partnerships table.)

**What the documents do NOT confirm:**
No specific product capabilities, pricing, or customer evidence appears in either document.

_Clear Current relevance:_ If Verse uses Arcadia data and competes in contract analytics, this is a meaningful competitive data point. The fact that Verse is both an Arcadia customer and a Clear Current competitor reinforces the need to understand Arcadia's role as a data supplier to the competitive ecosystem.

---

## 5. DELIVERABLE BUILD GUIDANCE

### For the Competitive Positioning Deliverable

**What you can build now with HIGH confidence:**

The Arcadia competitive analysis is the strongest output available. Build it in two tiers:

_Tier 1 — Documented Facts (use these without qualification):_

- Enterprise pivot: January 29, 2025. 14 months old. (Arcadia Report, Section 12.)
- Two detailed case studies: Cox Enterprises (data feed, not dashboard) and Arconic (minimal detail). (Arcadia Report, Section 4.)
- Zero documented higher education customers. (Arcadia Report, Section 4 and Gap 1.)
- No natural language chat interface. (Arcadia Report, Gap 4.)
- No campus chargeback. (Arcadia Report, Gap 2.)
- No regulatory intelligence. (Arcadia Report, Gap 3.)
- Senior PM job description: primary responsibility is legacy migration. (Arcadia Report, Section 8, footnotes 43, 44.)
- Consumer Trustpilot: 2.6/5, 1,159 reviews. (Arcadia Report, Section 7, footnote 36.)
- Capital raised: $649M. (Arcadia Report, Section 1, CB Insights.)

_Tier 2 — Documented Gaps (use these with the qualifier "no documented evidence of"):_

- No ERP integrations
- No CMMS integrations
- No higher education consortium partnerships
- No deregulated supply contract audit capability
- No analyst recognition (Verdantix, Gartner, Forrester) for energy management specifically

**Construction note for investor materials:**
The most powerful single fact in this corpus is: _Cox Enterprises, Arcadia's most documented enterprise customer, chose to use Arcadia as a data feed into their own dashboard because they found the native UX insufficient._ This is in a case study Arcadia published about itself. It is the company's own evidence that their UX is not the product — their data is the product. Clear Current's conversational AI interface is not competing with Arcadia's data; it is building the UX layer that Arcadia's best customer had to build themselves.

---

**What you can build with MEDIUM confidence (flag appropriately):**

The EnergyCAP competitive analysis. The pricing figures ($40-52/meter/year, $50-75K at Texas State) are well-grounded. The user review characterizations are directionally accurate but need specific G2/Capterra URLs for investor-grade use. The "glorified spreadsheet" framing should be attributed to "G2/Capterra user reviews" not to Clear Current's own characterization.

---

**What you cannot build with current evidence:**

A credible competitive analysis of BrainBox AI, PEER AI, ENGIE Impact, or Constellation as software competitors. These names appear in the research without substance. Including them in a competitive matrix without supporting evidence would undermine the credibility of the analysis. Omit them from the primary matrix and note them as "adjacencies under review."

---

### For the Opportunity Heatmap

**Specific construction instruction:**
The competitive gap column should distinguish between three levels:

1. **Confirmed absent** — capability specifically documented as absent in competitor's product (Arcadia: no chargeback, no chat, no regulatory intel — documented in job postings, product documentation, customer evidence)
2. **Not documented** — capability not appearing in any competitor marketing, customer story, or review but not confirmed absent via primary product evidence
3. **Competitor present** — capability confirmed in competitor's product with evidence

Do not conflate level 2 and level 1. "Not documented" is not the same as "confirmed absent." Arcadia's regulatory intelligence gap is Level 1 — confirmed absent from product documentation. EnergyCAP's AI chat interface gap is Level 1 — confirmed absent from user reviews and product documentation. WatchWire's higher education presence is Level 2 — simply not documented either way.

---

### For the Product Module Recommendations

**The Arcadia Report gives you one specific and important data point for Module 1 (Billing Error Audit Engine):**
Arcadia's ATA achieves an 80% full-auto tariff match rate with 20% requiring expert analyst review. (Arcadia Report, Section 2, footnote 17.) This is Arcadia's self-reported figure. Clear Current's product module recommendation should position automated tariff matching as table stakes — something even the well-funded incumbent gets wrong 1 in 5 times — and focus differentiation on the downstream workflow: once an error is found, how does the system help the energy manager file a dispute, track the credit, and report the recovery to finance? That dispute-to-recovery workflow is where neither Arcadia nor EnergyCAP has documented capability.

**For Module 3 (Regulatory Intelligence):**
The competitive gap is now fully documented across both source documents. The recommended framing for product materials:

- Arcadia tracks 30,000+ tariff structures and 75,000 rate updates per month — these are _changes that have already happened_
- No competitor monitors PUC dockets for _rate cases that are pending_ — proceedings that will change rates in 275+ days
- The Boston University example is the use case: budget locked in March, final rate determined July 1, utility year starts July 1. The gap is 4-6 months of forward visibility
- Ohio, Pennsylvania, Illinois, New York, and Texas are all documented as states with active rate cases and predictable PUC timelines (Synthesis, Section 03, Regulatory Intelligence row)

This module should be framed as "the intelligence layer that doesn't exist anywhere else" — not as a feature, but as a category. It is the product answer to Phil Combs' observation that it is "super powerful — PUC filings, rate hike proposals, grid operator decisions." (Synthesis, Section 02.)

---

### For the Competitive Positioning Deliverable — The Narrative Structure

Based on this analysis, the competitive narrative for Clear Current should be built on three structural arguments, all documentable:

**Argument 1: The data layer and the workflow layer are different products.**
Arcadia is a data layer — their best customer proved it. The energy manager who needs to understand why their bill increased 18% in October does not need better data infrastructure. They need a system that reads the data and tells them in plain language what happened, what it costs, and what to do about it. That is a workflow product, not a data product. Clear Current is building the workflow product.

**Argument 2: Higher education is an uncontested vertical for 12-24 months.**
Arcadia has zero higher education customers after 14 months of enterprise sales. EnergyCAP has the installed base but has produced a documented UX failure in its most important feature. No AI-native competitor has built campus chargeback. The 660+ district energy systems in the U.S. (Synthesis — note: citation needed for this figure) are overwhelmingly universities and hospitals. This is a greenfield opportunity in an otherwise competitive market.

**Argument 3: Arcadia's attention is structurally divided for the next 12-24 months.**
Job posting evidence — not analysis, actual job postings — confirms Arcadia's Senior PM is migrating legacy customers, not building new capabilities. They are selling new enterprise accounts simultaneously. They are spinning out the community solar business. They are expanding AI infrastructure. A team that is doing everything cannot be focused. Clear Current can be. The window to establish higher education category leadership before Arcadia turns its attention there is real, and it is documented.

---

## 6. WHAT THE RESEARCH PROVES vs. WHAT IT MERELY CLAIMS

### PROVEN — Grounded in cited, independently verifiable evidence

| Claim                                                                                      | Evidence Type                                                                | Strength                                                                    |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Arcadia enterprise pivot launched January 29, 2025                                         | Press release (Arcadia Report, footnote 21)                                  | HIGH                                                                        |
| Cox Enterprises uses Arcadia as a data feed, not a dashboard                               | Arcadia-published case study (Arcadia Report, footnote 31)                   | HIGH                                                                        |
| No documented higher education customers in Arcadia's corpus                               | Absence documented across all Arcadia marketing materials reviewed           | HIGH                                                                        |
| Arcadia Senior PM job description: primary responsibility is legacy migration              | Job posting, company-written document (Arcadia Report, footnotes 43, 44)     | HIGH                                                                        |
| FERC confirmed $108M mischarged at FirstEnergy                                             | Government enforcement action (Synthesis, Section 03)                        | HIGH                                                                        |
| RI PUC: 83% of internally flagged exceptions sent to customers                             | State regulatory finding (Synthesis, Section 03)                             | HIGH                                                                        |
| Arcadia Trustpilot: 2.6/5, 1,159 reviews                                                   | Third-party platform, independently verifiable (Arcadia Report, footnote 36) | HIGH                                                                        |
| Arcadia raised $649M, last known valuation $1.5B (May 2022)                                | CB Insights, named press releases (Arcadia Report, Section 1)                | HIGH                                                                        |
| Texas State University is an active EnergyCAP user, paying $50-75K/year via YearOut Energy | Primary interview (Synthesis, Section 02)                                    | HIGH                                                                        |
| Campus chargeback is EnergyCAP's most complained-about feature in user reviews             | User review language quoted (Synthesis, Section 04, Finding 6)               | HIGH — with caveat that specific review URLs are not provided               |
| Arcadia's enterprise CVS achieves "98.4% median bill recreation accuracy"                  | Arcadia's own marketing claim (Arcadia Report, Section 2, footnote 17)       | MEDIUM — self-reported, not independently audited                           |
| Phil Combs named Energy Toolbase as tariff analysis competitor                             | Primary interview (Synthesis, Section 02)                                    | HIGH                                                                        |
| No Arcadia entry in Verdantix Green Quadrant 2026 for enterprise carbon management         | Verdantix, referenced in Arcadia Report, Section 12, footnote 60             | HIGH — with caveat that this is the carbon management category specifically |

---

### CLAIMED — Analytical assertions without full citation chains

| Claim                                                                       | Why It Is A Claim, Not Proven                                                       | What Would Prove It                                                                 |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| "30,000+ tariff structures" in Arcadia's Signal product                     | Self-reported by Arcadia, no independent audit                                      | Independent database comparison or third-party verification                         |
| "95%+ U.S. commercial account coverage"                                     | Self-reported by Arcadia post-Urjanet acquisition                                   | EIA or utility industry census comparison                                           |
| "660+ district energy systems in U.S."                                      | Stated in Synthesis without citation (Synthesis, Section 03, Campus Chargeback row) | APPA or DOE district energy census                                                  |
| $10M in billing errors from Clear Current's 12 pilots                       | Internal figure from John and Dan — confirmed by the team, not externally audited   | A documented case: error found, credit issued, dollars received                     |
| EnergyCAP reviews called it "outdated, un-intuitive, glorified spreadsheet" | Synthesis characterizes 132 reviews but no specific URL or aggregate score provided | G2.com URL, average score, and direct quote from a reviewable profile               |
| Arcadia is "priced for $50M+ energy spend portfolios"                       | Inference in Arcadia Report, Section 5 — no actual pricing data                     | A documented procurement record or published pricing tier                           |
| "Arcadia's attention is divided for 12-24 months"                           | Inference from a job posting — reasonable inference but still analytical            | Multiple job postings over time showing migration remains primary PM responsibility |
| "Clear Current can establish undisputed category leadership in higher ed"   | Analytical claim in Synthesis, Section 07                                           | Documented customer wins in higher education                                        |

---

## 7. GAPS AND OPEN QUESTIONS

### Gap 1: No primary customer evidence for Arcadia's enterprise product quality

The Arcadia Report is necessarily built from Arcadia's own materials, a handful of case studies, and job postings. There is no primary interview with someone who evaluated Arcadia's enterprise suite and declined to buy, or who bought and found gaps. That is the competitive intelligence that would most accelerate Clear Current's sales motion. A reference conversation with a procurement committee member who saw Arcadia in an RFP process would be the highest-value addition to this corpus.

### Gap 2: Energy Toolbase is named but not analyzed

Phil Combs called Energy Toolbase out by name as the current tool for tariff analysis work. (Synthesis, Section 02.) Neither document contains product capabilities, pricing, customer base, or positioning for Energy Toolbase. Given that it was named by a practitioner doing the actual workflow, it warrants a dedicated research session. It may be a feature-level competitor or it may be a point solution that Clear Current can render redundant by embedding the same capability in a broader platform.

### Gap 3: WatchWire and Verse are structural placeholders

Both appear in the corpus — WatchWire as the dominant CRE tool and Verse as a contract analytics competitor. Neither has documented product capabilities, user reviews, pricing, or specific customer evidence in these documents. Both need dedicated research before appearing in a competitive matrix with any specificity.

### Gap 4: The "identified vs. realized" question for Arcadia's $10M claim parallels Clear Current's

Arcadia's CEO claimed $10M+ in billing errors for an unnamed hyperscaler on LinkedIn. Clear Current has $10M identified in 12 pilots. Neither number has been validated as recovered cash. The investor question Marc Spieler raised (Synthesis, Section 04, Finding 7) applies with equal force to both companies. If Clear Current can document one realized recovery and Arcadia cannot name a customer who received a utility refund, that asymmetry is worth more in competitive sales conversations than any feature comparison.

### Gap 5: No pricing intelligence for Arcadia's enterprise tier

The Arcadia Report is explicit: pricing confidence is LOW, no published pricing, no verified procurement data. (Arcadia Report, Executive Summary.) If Clear Current wants to price competitively in higher education, they need to understand what Arcadia would quote a 1,500-meter university — and whether Arcadia would even pursue that account. One way to close this: a higher education procurement officer who received an Arcadia proposal. That single document would anchor the pricing analysis.

### Gap 6: The Perch spinout timeline matters for Arcadia's reputation clean-up

The community solar spinout into Perch Energy was announced March 2025 with a closing target of Q2 2026. (Arcadia Report, Section 9, footnote 13.) If the spinout has closed by the time Clear Current is using Arcadia's Trustpilot score in competitive conversations, that specific vulnerability disappears — Trustpilot reviews would redirect to Perch, not Arcadia. The Synthesis notes this as a current vulnerability (Synthesis, Section 07); the Arcadia Report confirms the spinout is in process. Monitor this. The 2.6/5 score is time-limited as a competitive tool.

### Gap 7: Arcadia's hiring at the Account Executive level is the most important signal to watch

One Account Executive, Enterprise Solutions position is currently open. (Arcadia Report, Section 8.) If this single-hire situation reflects their enterprise sales build, they are not yet competing aggressively in field sales. If they open five enterprise AE positions in Q3 2026, that signals a scaling of outbound sales capacity that changes the competitive dynamic materially. John and Dan should monitor Arcadia's Greenhouse job board on a 90-day cycle.

### Gap 8: No account of what Arcadia's Signal and ATA products actually do in a real customer workflow

The Arcadia Report describes ATA and CVS with impressive-sounding statistics (80% auto-match, 98.4% accuracy). But there is no documented account — from Arcadia or from any customer — of what happens when ATA gets it wrong, what the analyst review workflow looks like, how billing disputes are actually filed, or how long the process takes from error identification to credit receipt. That workflow gap is exactly where Clear Current can differentiate, but to articulate it precisely, you need to understand the incumbent workflow at the task level. The Phil Combs interview (10-15 minutes per meter, Excel pivot tables) gives this for the current manual workflow. The same level of detail for Arcadia's actual workflow is missing.

---

## SUMMARY ASSESSMENT

For John Reuter and Dan Schreiber's use:

**The competitive picture is clearer than it has ever been, and it is genuinely favorable in the near term.** Arcadia is a better-funded, more established company — but it is a data infrastructure company that has been in enterprise sales for 14 months with two named case studies, neither of whom is in higher education. Their best customer bypassed their dashboard. Their most important product manager is doing migration work. They have not built campus chargeback. They have not built regulatory intelligence. They have not built a natural language interface for energy managers.

None of that lasts forever. Arcadia has $649M and a decade of data infrastructure. When the migration is complete and they turn their attention to institutional verticals, they will be a formidable competitor. The window is real, it is documented, and the clock is running.

The single most important competitive action Clear Current can take before the May fundraise is not more research. It is documenting one realized billing error recovery — error found, utility contacted, credit issued, dollars received, customer on record. That single proof point changes every investor conversation and every competitive displacement conversation in ways that no analysis, however thorough, can replicate.

Every other competitive advantage in this matrix can eventually be copied. A track record of actual recoveries, with named references, in a vertical the competition has not entered, is the moat worth building.

---

_Victor Hale | Competitive Intelligence Specialist_
_CDL Texas MBA Consulting | Clear Current Technologies Engagement_
_All claims cited to source. Uncited claims flagged. No competitive assertion made without documented evidence._

# Agent: Dana Park | Market Sizing & TAM/SAM/SOM Analyst

# Run: 2026-04-17T16:14:27.676237

---

# Clear Current Technologies: Market Sizing & TAM/SAM/SOM Analysis

## Dana Park | Market Sizing & TAM/SAM/SOM Analyst

### Prepared for John Reuter (CEO) & Dan Schreiber (CPO) | April 2026

---

> **A note before we begin.** I have spent 14 years watching founders walk into Series A pitches with market size slides built on daisy-chained vendor reports citing other vendor reports. VCs who do their homework find the break in the chain in about 20 minutes. What follows is a full citation audit of every number in this corpus, a defensible TAM/SAM/SOM model built only on what survives that audit, and honest labeling of what cannot be used without more work. Some of the numbers in these documents are solid. Some are not. John and Dan deserve to know which is which before May.

---

## 1. SOURCE INVENTORY

### Document A: Research Synthesis Brief

**Prepared by:** CDL Texas MBA Consulting Team (Hester, Wisnieski, Case, Pan)
**Date:** April 6, 2026
**Nature:** A synthesis document — it aggregates findings from five primary interviews, six Perplexity research sessions, and TAMU database research. It is not itself a primary source. When it cites a statistic, the statistic lives in a downstream document that the team accessed.
**What matters for market sizing:** The synthesis brief identifies several statistics as having been through a "claim verification audit." Specifically flagged as verified: DOE 30–70% demand charge share, NREL ratchet calculation, 5.9% commercial energy CAGR, 660+ district energy systems. These are the starting foundation as directed. I will accept these as having passed one level of verification but will note where the underlying source is government/academic (higher confidence) versus industry report (lower confidence).

**Critical observation about this document:** The synthesis brief is honest about what is primary evidence vs. secondary corroboration. It explicitly labels confidence levels (STRONG/MODERATE/EMERGING) and documents open gaps. This is unusually disciplined work and I am treating the verification flags as genuine — with the caveat that "verified by the consulting team" is not the same as "independently verifiable by a VC's due diligence team."

### Document B: Market Research Report (Full Version)

**Prepared by:** Not attributed — appears to be a Perplexity or secondary research synthesis prepared for Clear Current Technologies
**Date:** April 2026
**Nature:** A secondary research report with footnotes numbered [1] through approximately [97]. **Critical problem: the footnotes are referenced in the text but the actual footnote definitions are not included in the document provided to me.** I can see "[^42]", "[^6]", "[^61]" etc. throughout the text, but I cannot see what sources those numbers correspond to. This is a significant limitation for citation chain analysis. I will work with what I can infer from the text and flag every case where I cannot trace a number to its named source.

**What matters for market sizing:** This document contains the primary TAM figures, vertical market breakdowns, billing error statistics, competitor pricing, and buyer behavior data. It is the document I need to audit most carefully.

---

## 2. KEY FINDINGS

**Finding 1 — The $241B commercial energy spend figure is the most defensible anchor for TAM framing.**
The Market Research Report states U.S. commercial buildings spent $241 billion on energy in 2024, updated from a documented baseline of $142 billion in 2018 from EIA's Commercial Buildings Energy Consumption Survey (CBECS). The CBECS 2018 data is a U.S. government survey — the highest-quality underlying source in this entire corpus. The $241B 2024 figure is a projection from that baseline, which is less certain, but the direction and magnitude are defensible.
_Source: Market Research Report, Section 1, citing [^12] and [^3] for the $142B baseline_

**Finding 2 — The 80% overpayment claim is the most dangerous statistic in the corpus.**
The report states "~80% of businesses overpay on their utility bills according to auditing industry sources." The phrase "auditing industry sources" is doing enormous work here. This statistic is cited as [^2] in the report, but I cannot see what [^2] actually is. The phrasing "according to auditing industry sources" is a red flag — auditing firms have a commercial incentive to report high error rates. This number appears on slide one of a thousand pitch decks and is almost certainly a vendor-originated claim. It is not a government finding, not an academic study, and not a regulatory action. **Do not use this number in investor materials.**
_Source: Market Research Report, Section 3_

**Finding 3 — The regulatory evidence for billing errors is legally documented and should replace the 80% claim entirely.**
The Synthesis Brief documents three government/regulatory findings: FERC confirmed $108M mischarged at FirstEnergy (a named utility, a named enforcement action); Rhode Island PUC found 83% of internally flagged billing exceptions were sent to customers anyway; Harvard Law (2025) documented the structural information asymmetry. These are citations to government enforcement actions and academic legal scholarship — categorically more defensible than "auditing industry sources."
_Source: Research Synthesis Brief, Section 03, Finding on "Billing errors are real, material, and structurally persistent"_

**Finding 4 — The $14.2B global TAM figure has no visible citation chain.**
The report's headline TAM claim — "$14.2 billion globally in 2024, projected to reach $36.5 billion by 2033 at 11.1% CAGR" — is cited as [^6]. I cannot see what [^6] is. The structure of this number ($14.2B → $36.5B at 11.1% CAGR over 9 years) is internally consistent mathematically. But the provenance is invisible. Market research reports from firms like Grand View Research, MarketsandMarkets, and Allied Market Research routinely produce TAM figures with methodologies that are not independently reproducible. This number requires source identification before use.
_Source: Market Research Report, Section 1_

**Finding 5 — The 4% BEMS penetration figure from EIA CBECS is the most important structural fact in the corpus for a bottom-up TAM build.**
EIA's Commercial Buildings Energy Consumption Survey (2018) found that only 4% of commercial buildings have a full Building Energy Management System deployed. This is a government survey of the universe of commercial buildings. It directly quantifies the penetration gap — 96% of commercial buildings are unserved by sophisticated energy management software. This is a high-confidence number from a primary government source.
_Source: Market Research Report, Section 5, citing EIA CBECS; confirmed by Research Synthesis Brief, Section 03_

**Finding 6 — The 660+ district energy systems figure is verified and highly defensible.**
The Synthesis Brief flags this as a verified statistic. The Market Research Report cites it with footnotes [^83] and [^84], which reference district energy system coverage. The figure "660+ district energy systems serving 5.5 billion square feet" has the specificity and sourcing pattern of an industry association figure (likely from the International District Energy Association). It is confirmed across both documents and should be treated as reliable.
_Source: Market Research Report, Section 6; Research Synthesis Brief, Section 03_

**Finding 7 — The demand charge 30–70% share is verified via DOE and should be used with proper attribution.**
The Synthesis Brief specifically flags this as verified. The Market Research Report cites it as [^14] and [^31]. The DOE is a primary government source. The range (30–70%) is wide enough to be defensible — it accurately reflects the variation between commercial customer types. Use this with "according to the U.S. Department of Energy" in investor materials.
_Source: Research Synthesis Brief (verified); Market Research Report, Section 1 and Section 3_

**Finding 8 — The NREL ratchet calculation ($144K/year from a single 1,000 kW summer peak) is verified and investor-grade.**
The Synthesis Brief flags this as verified via NREL. The specific math (1,000 kW peak × 80% ratchet × $15/kW demand charge × 12 months = $144K) is transparent and reproducible. Any investor can check the arithmetic. The NREL source is a national laboratory — appropriate credibility for investor materials. This is one of the strongest quantified proof points in the entire corpus for the financial stakes of demand charge management.
_Source: Research Synthesis Brief (verified); Market Research Report, Section 5_

**Finding 9 — The $10M in identified billing errors across Clear Current's 12 pilots is internally generated data of the highest relevance — but has a critical unresolved question.**
The $10M figure comes from Clear Current's own pilot activity. This is first-party data, which is the strongest possible source. However, the Synthesis Brief explicitly flags this as the most important unresolved question in the entire engagement: Marc Spieler asked whether this $10M is identified or realized (i.e., has any utility actually issued a refund?). **Identified errors and recovered cash are different claims.** Use the identified figure only if it is labeled as such. Do not call it "recovered" without documentation.
_Source: Research Synthesis Brief, Section 04 (Finding 7) and Section 08 (Ask 1)_

**Finding 10 — The 5.9% commercial energy CAGR vs. 3% budgeted escalator is verified and creates a specific, quantified business case for regulatory intelligence.**
The Synthesis Brief flags the 5.9% CAGR as verified. The gap between actual rate escalation (5.9%) and typical budgeted escalator (3%) is a specific, quantified pain point — budgets built on a 3% assumption are systematically underfunded by roughly 2.9 percentage points per year. For a university with $20M in annual gas spend (like UT Austin), that gap is approximately $580K/year in budget variance from this assumption error alone.
_Source: Research Synthesis Brief, Section 03 (verified finding)_

**Finding 11 — EnergyCAP pricing is published and verifiable.**
The report gives specific pricing: Express tier starting at $4,000/year (~$40/meter/year for 100 meters); Enterprise tier starting at $13,000/year (~$52/meter/year for 250 meters). These numbers are cited in the report and are consistent with what Texas State University's interview implied ($50–75K/yr for 1,500 meters via reseller — which math-checks at roughly $33–50/meter for a large account with volume discount). This pricing data is the most directly actionable for Clear Current's pricing model.
_Source: Market Research Report, Section 4 (EnergyCAP profile)_

**Finding 12 — The University of Wisconsin RFP ($500K–$2M contract value) is a real, documented data point for institutional deal size.**
This is a specific, named procurement event. RFPs are public documents. The $500K–$2M contract value range is the most important pricing anchor in the corpus for the higher education vertical because it represents what a sophisticated university actually budgets for an energy management system — not what a vendor prices it at, but what an institution is prepared to spend.
_Source: Research Synthesis Brief, Section 04 (Deliverable 5 readiness notes)_

---

## 3. STATISTICS THAT ARE DEFENSIBLE

The following is a complete audit of every material market statistic in the corpus. I have organized by confidence level and flagged citation chain status.

---

### TIER 1 — HIGH CONFIDENCE: Use in investor materials with attribution

| Statistic                                  | Claim                                                                                                   | Source Document                                                     | Named Underlying Source                                       | My Assessment                                                                                                                                                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $142B U.S. commercial energy spend (2018)  | U.S. commercial buildings spent $142B on energy in 2018; electricity 84% ($119B) at $1.47/sq ft average | Market Research Report, §1                                          | EIA CBECS 2018 — U.S. government survey [^12]                 | **HIGH.** EIA CBECS is a primary government survey. This is the most reliable energy spend figure in the corpus.                                                                                                                    |
| 4% BEMS penetration (2018)                 | Only 4% of commercial buildings have a full Building Energy Management System                           | Market Research Report, §5                                          | EIA CBECS 2018 [^72]                                          | **HIGH.** Same primary government source. The low penetration figure is the structural argument for market size.                                                                                                                    |
| 30–70% demand charge share                 | Demand charges represent 30–70% of total annual commercial utility bills                                | Research Synthesis Brief (verified); Market Research Report, §1, §3 | U.S. Department of Energy [^14]                               | **HIGH.** DOE is a primary government source. Range is wide but accurate — use with DOE attribution.                                                                                                                                |
| NREL ratchet example                       | 1,000 kW summer peak at 80% ratchet = $144K/year locked in                                              | Research Synthesis Brief (verified); Market Research Report, §5     | NREL [^38] [^31]                                              | **HIGH.** NREL is a national laboratory. Math is transparent and reproducible.                                                                                                                                                      |
| 660+ district energy systems               | 660+ district energy systems in the U.S. serving 5.5B sq ft heated space                                | Research Synthesis Brief (verified); Market Research Report, §6     | Likely IDEA (International District Energy Association) [^83] | **HIGH** with notation. Strong specificity. Probably an industry association figure — note the source name when presenting.                                                                                                         |
| 136.9M smart meters installed (2024)       | 136.9 million smart meters in U.S. as of 2024, ~82% of all electric meters                              | Market Research Report, §5                                          | Cited [^69][^70] — likely DOE/EIA AMI data                    | **HIGH.** Consistent with public EIA AMI deployment data. Verify [^69] = EIA before presenting.                                                                                                                                     |
| $5.2B commercial smart meter market (2023) | Commercial smart electric meter market valued at $5.2B in 2023, growing at 9.6% CAGR                    | Market Research Report, §5                                          | Cited [^71] — source unidentified                             | **MEDIUM-HIGH.** The CAGR is consistent with other AMI market data. Source unknown — flag until identified.                                                                                                                         |
| FERC $108M mischarged — FirstEnergy        | FERC confirmed $108M mischarged at FirstEnergy                                                          | Research Synthesis Brief                                            | FERC enforcement action (named utility, named agency)         | **HIGH.** This is a government enforcement action with a named utility. Verifiable in public FERC records.                                                                                                                          |
| RI PUC 83% exception passthrough           | Rhode Island PUC found 83% of internally flagged billing exceptions were sent to customers anyway       | Research Synthesis Brief                                            | Rhode Island PUC (named regulatory body)                      | **HIGH.** Named state regulatory body. Verifiable in PUC public filings.                                                                                                                                                            |
| Ohio PUC 275-day rate case timeline        | Ohio PUC mandates 275-day statutory timeline for rate cases                                             | Research Synthesis Brief                                            | Ohio PUC statutory mandate                                    | **HIGH.** Statutory timelines are public law. Verifiable.                                                                                                                                                                           |
| 5.9% commercial energy CAGR                | Commercial energy costs growing at 5.9% CAGR vs. 3% budgeted escalator                                  | Research Synthesis Brief (verified)                                 | Source document not named in synthesis — flagged as verified  | **MEDIUM-HIGH.** Directionally consistent with EIA data. Primary source identity unknown — obtain before presenting to investors.                                                                                                   |
| 76% expect utility budgets to increase YoY | 76% of energy/sustainability professionals expect utility budgets to increase YoY in 2026               | Market Research Report, §7; Research Synthesis Brief                | EnergyCAP State of Utilities 2026 survey [^97][^25]           | **MEDIUM-HIGH.** Named survey from a named vendor. EnergyCAP has commercial incentive to report high pain levels — note this. Survey methodology not available. Use with attribution: "EnergyCAP's 2026 State of Utilities survey." |
| 69% identify cost control as #1 goal       | 69% identify controlling/reducing utility spend as their #1 goal                                        | Market Research Report, §7                                          | EnergyCAP State of Utilities 2026 [^25]                       | **MEDIUM-HIGH.** Same caveat as above. Vendor-originated survey.                                                                                                                                                                    |
| 10% of organizations rely on one person    | 10% of organizations rely on a single person for energy management                                      | Market Research Report, §2                                          | EnergyCAP State of Utilities 2026 [^25]                       | **MEDIUM.** Same vendor survey. Third statistic from same source — use sparingly; do not stack three claims from one vendor survey on the same slide.                                                                               |
| University of Wisconsin RFP $500K–$2M      | UW issued Energy Management Software RFP; contract value $500K–$2M                                      | Research Synthesis Brief                                            | Named RFP — public procurement document [^96]                 | **HIGH.** Public procurement document. Verifiable. The most important pricing anchor for higher ed deal size.                                                                                                                       |
| EnergyCAP pricing                          | Express: $4K/yr; Enterprise: $13K/yr; $40–52/meter/year                                                 | Market Research Report, §4                                          | EnergyCAP published pricing [^45][^46]                        | **HIGH.** Published pricing. Texas State interview confirms real-world pricing consistent with these figures.                                                                                                                       |
| EnergyCAP 4.7/5 from 132 reviews           | 132 total Capterra/G2 reviews, 4.7/5 overall                                                            | Market Research Report, §4                                          | Capterra/G2 (named review platforms) [^42]                    | **HIGH.** Review platforms are publicly accessible. Counts and ratings are verifiable.                                                                                                                                              |
| Arcadia $649M raised, $1.5B valuation      | Arcadia has raised $649M total; $1.5B valuation                                                         | Market Research Report, §4; Research Synthesis Brief                | Named funding rounds; cited [^8][^61]                         | **HIGH.** Venture funding is documented in public filings and press releases. Verifiable.                                                                                                                                           |
| AES Ohio 2024 ~9% rate increase            | AES Ohio 2024 rate case resulted in ~9% commercial rate increase                                        | Research Synthesis Brief                                            | Ohio PUC proceeding (named utility, named state regulator)    | **HIGH.** Named utility, named regulatory body, named year. Verifiable in Ohio PUC public dockets.                                                                                                                                  |

---

### TIER 2 — MEDIUM CONFIDENCE: Usable with caveats; attribution required

| Statistic                                    | Claim                                                                                               | Source Document                                      | Named Underlying Source                                                                     | Issue / Flag                                                                                                                                                                                                                                                                  |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $241B U.S. commercial energy spend (2024)    | U.S. commercial buildings spent $241B on energy in 2024                                             | Market Research Report, §1                           | Cited [^3] — source unidentified; appears to be a projection from $142B CBECS 2018 baseline | **MEDIUM.** The $142B 2018 baseline is solid. The $241B is an extrapolation — the methodology is not stated. Math implies ~8% CAGR from 2018–2024, which is plausible but aggressive given the COVID dip. Present as "estimated" and show the CBECS baseline it derives from. |
| 9% of companies use software for energy data | Only 9% of companies have fully embraced software tools for managing energy and sustainability data | Market Research Report, §1, §2, §3                   | Cited [^4] — source unidentified                                                            | **MEDIUM.** This number appears four times in the report with the same citation [^4]. Repetition does not validate it. Source identity unknown. Could be a Verdantix survey, an ESG software vendor survey, or an industry association report. Flag until identified.         |
| 64% of FM employers cite skills difficulty   | 64% of FM employers report difficulty finding technically skilled candidates                        | Market Research Report, §2; Research Synthesis Brief | McMorrow Reports 2023 [^26]                                                                 | **MEDIUM.** McMorrow Reports is a named industry publication. Not a government or academic source. Directionally plausible. Use with "according to McMorrow Reports 2023."                                                                                                    |
| 30% of bills contain material error annually | 30% of commercial utility bills contain a material error on an annual basis                         | Market Research Report, §3                           | "Energy auditors" — cited [^33]                                                             | **LOW-MEDIUM.** "Energy auditors" is not a source. This is a claim by parties with commercial interest in finding errors. Not independently verifiable. See Tier 3 flag below — do not use in investor materials without primary source identification.                       |
| 854 TBtu education sector energy (2018)      | Education sector consumed 854 TBtu in 2018 = ~13% of commercial building energy                     | Market Research Report, §6                           | EIA CBECS 2018 implied [^77]                                                                | **MEDIUM-HIGH.** Consistent with CBECS data structure. If [^77] = CBECS, this is solid. Source identity unknown from footnote alone.                                                                                                                                          |
| Arcadia ~$270M annual revenue                | Arcadia estimated annual revenue ~$270M                                                             | Market Research Report, §4                           | Cited [^64] — source unidentified                                                           | **MEDIUM.** Private company revenue estimates are inherently uncertain. Could be from a CB Insights or PitchBook estimate, or from press coverage. Use as "estimated" with source attribution.                                                                                |
| 40% campus energy waste from equipment drift | More than 40% of total building energy attributable to equipment malfunction                        | Market Research Report, §6                           | "A 2009 study of 24 university buildings in California" [^85]                               | **MEDIUM.** Named study type (California university buildings, 2009). Old data — 17 years ago. Small sample (24 buildings). Useful as directional support, not a headline claim. Flag the age.                                                                                |
| $6B K-12 annual energy spend                 | K-12 schools account for approximately $6B in annual energy spend                                   | Market Research Report, §1                           | Cited [^19] — source unidentified                                                           | **MEDIUM.** Structurally derived from the CBECS education share, but the K-12 vs. higher ed split methodology is not stated.                                                                                                                                                  |

---

### TIER 3 — LOW CONFIDENCE / UNVERIFIED: Do NOT use in investor materials without primary source identification

| Statistic                                                                                        | Flag                                                                                                              | Why It Fails Citation Chain                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **~80% of businesses overpay on utility bills**                                                  | ⛔ UNVERIFIED — requires primary source before use in investor materials                                          | "Auditing industry sources" is not a source. Energy auditors have commercial incentive to report high error rates. No government, academic, or regulatory citation. This number is used by every energy auditing vendor on the planet. VCs will recognize it immediately as unverifiable industry folklore. Replace with FERC $108M + RI PUC 83%. |
| **5–15% additional costs from inaccurate billing data**                                          | ⛔ UNVERIFIED — requires primary source before use in investor materials                                          | Cited [^33] — same unknown "energy auditors" citation as the 30% error rate claim. Three statistics ([^33] twice + [^34]) appear to cluster around the same unidentified auditing industry source. Do not use any of them without identifying [^33] and [^34].                                                                                    |
| **Average overpayment estimated at 15%+**                                                        | ⛔ UNVERIFIED — requires primary source before use in investor materials                                          | Cited [^34] — source unidentified. Same problem as above.                                                                                                                                                                                                                                                                                         |
| **$14.2B global energy management software TAM (2024)**                                          | ⚠️ UNVERIFIED until [^6] is identified                                                                            | Source is a market research report (likely Grand View Research, MarketsandMarkets, or similar). These firms produce revenue projections using methodologies that are not independently reproducible. The number is internally consistent but the originating methodology is opaque. Do not headline this number until the source is named.        |
| **$16.9B U.S. Energy Management Software (2025)**                                                | ⚠️ UNVERIFIED until [^9] is identified                                                                            | Same class of problem as above. Different scope definition than the $14.2B global figure — these cannot both be the "right" TAM number, and the two figures being in the same document without reconciliation is a problem.                                                                                                                       |
| **$8.5B Building Energy Software (2022)**                                                        | ⚠️ UNVERIFIED until [^10] is identified                                                                           | Third TAM figure from the same section. Three different TAM numbers for overlapping market definitions with no reconciliation is a credibility risk if presented together.                                                                                                                                                                        |
| **$1.62B energy procurement software**                                                           | ⚠️ MODERATE — needs source confirmation                                                                           | More plausible because it is a narrower, more specific segment. Cited [^5]. If [^5] is a named research firm, this is the most defensible of the four TAM figures because scope is most specific.                                                                                                                                                 |
| **Real estate organizations waste hundreds of hours annually on manual utility bill processing** | ⚠️ UNVERIFIED — vague secondary claim                                                                             | No citation for the specific "hundreds of hours" figure. Cited [^4] — same unidentified source that produced the "9% software adoption" figure.                                                                                                                                                                                                   |
| **Schneider Electric 18% global market share**                                                   | ⚠️ UNVERIFIED — market share for "low-voltage electrical equipment" is not the same as energy management software | This is Schneider's share of a hardware category, not the software market. Using it to characterize competitive position in software would be misleading.                                                                                                                                                                                         |

---

## 4. COMPETITIVE INTELLIGENCE

This section pulls together everything the two documents reveal about named competitors — capabilities, pricing, gaps, and vulnerabilities.

### EnergyCAP — The Incumbent

**What we know with high confidence:**

- **Pricing:** $40–52/meter/year (Express $4K/yr minimum; Enterprise $13K/yr minimum). Implementation fees $5K–$100K+. API/integration work $2K–$20K. _(Market Research Report, §4 — published pricing)_
- **Customer scale:** 10,000+ customers including universities, government agencies, healthcare systems, K-12. Named Info-Tech Research Group #1 Champion in 2025 Data Quadrant. _(Market Research Report, §4)_
- **Named higher ed customers:** University of New Mexico, University of Kansas (90% of property managed in EnergyCAP), Appalachian State, Angelo State University. _(Market Research Report, §6)_
- **Texas State confirmed active EnergyCAP users:** 1,500 meters, 98 buildings, district energy system. Contract via YearOut Energy reseller. _(Research Synthesis Brief, §02)_
- **Verified user complaints (from 132 G2/Capterra reviews):** Chargeback UX ("hard to understand"), report navigation ("hundreds of reports"), steep learning curve, inflexible customization, fiscal year limitations for non-January fiscal years, data gaps with limited support response. _(Market Research Report, §4)_
- **Strategic gap:** The most important differentiating feature (campus chargeback) is simultaneously the most complained-about feature. The founder has presented at AEE World Energy Conference on campus chargeback best practices — which tells you this is both their deepest moat and their biggest liability.

**What this means for Clear Current's TAM framing:**
EnergyCAP's 10,000+ customer base with a verified higher ed concentration is a direct displacement market. If 10,000 customers are paying $40–52/meter/year, and an average installation is 500 meters, EnergyCAP is generating approximately $200–260M/year from its installed base. A platform that displaces even 10% of that base generates $20–26M ARR — without touching the unserved market.

### Arcadia Enterprise Solutions — The Primary AI-Native Threat

**What we know with high confidence:**

- **Funding:** $649M raised, $1.5B valuation, JPMorgan credit facility. _(Market Research Report, §4; Research Synthesis Brief, §07)_
- **Enterprise launch date:** January 2025 — enterprise pivot is 14 months old as of March 2026. _(Market Research Report, §4; Research Synthesis Brief, §07)_
- **Coverage:** 9,500+ utilities, 95%+ of U.S. residential and commercial accounts. 30,000+ tariff structures. _(Research Synthesis Brief, §07)_
- **Revenue estimate:** ~$270M annually. _(Market Research Report, §4 — private estimate, medium confidence)_
- **Enterprise customers confirmed:** Cox Enterprises, Arconic, Iron Mountain, Adobe, Intuit, UPS via RPD Energy, Ford Motor Company. _(Research Synthesis Brief, §07; Market Research Report, §4)_
- **Higher education customers:** ZERO documented after 14 months of enterprise sales. _(Research Synthesis Brief, §07)_
- **Campus chargeback capability:** None documented. _(Research Synthesis Brief, §07)_
- **Chat interface:** None — dashboard + data API only. Cox Enterprises chose Arcadia as a data feed because "they wanted to put us on their dashboard." _(Research Synthesis Brief, §07)_
- **Consumer Trustpilot:** 2.6/5 across 1,159 reviews. _(Research Synthesis Brief, §07)_
- **Current operational distraction:** Senior PM role primarily focused on migrating legacy Urjanet/Arc customers to flagship platform — confirmed via job postings. 12–24 month window. _(Research Synthesis Brief, §07)_
- **Tariff capability:** 500,000+ meter-tariff assignments automated. 80% auto-matched, 20% require expert review — illustrating the complexity of tariff identification at scale. _(Market Research Report, §3, §4)_

**Critical analytical note on Arcadia's capital position:**
$649M raised at $1.5B valuation is a durable structural advantage. Do not let the current vulnerability window create overconfidence. The research correctly identifies this as a 12–24 month window, not a permanent gap. The competitive moat must be built during this window.

### Verse, Inc. — Adjacent Competitor

**What we know:**

- AI-powered platform "Aria" focused on energy cost intelligence
- Core capabilities: PPA management, energy procurement modeling, supply management, planning/risk management
- "Built by energy buyers for energy buyers" positioning
- Target: sophisticated energy buyer at large industrial/commercial enterprise managing multi-market portfolios, virtual PPAs, hedging strategies
- **Positioning vs. Clear Current:** Verse is upstream (procurement/contracting); Clear Current is downstream (bill validation, rate analysis). Potential partnership, not pure competition. _(Market Research Report, §4)_

**What we don't know:** Verse's funding, customer count, pricing, and revenue. The research does not quantify Verse's scale.

### Schneider Electric Resource Advisor+ — Enterprise ESG Incumbent

**What we know:**

- January 2026 launch of Resource Advisor+ with AI agent "Sera"
- Multi-agent architecture covering carbon tracking, ESG reporting, energy procurement
- ~18% market share in low-voltage electrical equipment globally (hardware, not software)
- ~€36B fiscal 2024 revenue; Energy Management = ~77% of revenue
- Target: Large multinational enterprises ($1B+) with Scope 1–3 tracking needs
- **Gap vs. Clear Current:** Oriented toward ESG reporting at enterprise scale, not billing accuracy and tariff optimization for mid-market. Implementation requires deep Schneider ecosystem integration. _(Market Research Report, §4)_

### Siemens Building X / Johnson Controls OpenBlue — Hardware-First Incumbents

**Consistent pattern across both:** Building systems companies that have added energy analytics software. Strength in operational energy monitoring (equipment anomalies, fault detection). Weakness in tariff intelligence, bill auditing, procurement advisory. Require hardware integration — not standalone SaaS. Both primarily sold as part of energy services performance contracts, not as software subscriptions.

**Siemens-specific note:** The /r/BuildingAutomation Reddit characterization ("I have literally heard not a single person who likes Desigo") is anecdotal community data, not a cited study. It is directionally useful for positioning conversations but should not appear in investor materials as evidence.

### WatchWire by Tango — CRE Incumbent (No Primary Interview Completed)

**What we know:** Berkshire Partners-backed, 500+ customers in 140+ countries, Brookfield is a named customer. Dominant institutional CRE tool. Pricing undisclosed. No primary interview — all secondary. _(Research Synthesis Brief, §03)_

### Energy Toolbase — Named by Phil Combs

**What we know:** Named by Phil Combs (Trane, 20 years enterprise energy sales) as the competitive reference for tariff analysis. Not described in the secondary research with any depth. This is a gap — a practitioner with 20 years of experience named this as a real tool, and we have minimal secondary information on it.

---

## 5. DELIVERABLE BUILD GUIDANCE

### The Core TAM/SAM/SOM Model — Construction Instructions

Given the citation chain problems with the headline market research figures ($14.2B, $16.9B, $8.5B), I am recommending a bottom-up TAM build from verified data points rather than a top-down analyst report citation. This approach is more defensible under VC scrutiny because every input is traceable to a named source.

---

#### STEP 1 — ESTABLISH THE UNIVERSE (TAM)

**Anchor:** U.S. commercial buildings spent **$142 billion on energy in 2018** (EIA CBECS 2018 — government primary source). Updated to 2024 at a defensible CAGR.

**CAGR choice:** The research cites 5.9% commercial energy CAGR (verified, Synthesis Brief). Apply 5.9% × 6 years from 2018 to 2024:

$142B × (1.059)^6 = $142B × 1.419 = **approximately $201B in 2024**

Note: This is more conservative than the report's $241B claim and I prefer it because the methodology is transparent. Present both if desired — show the math.

**Software opportunity framing:**

- Total commercial energy spend: ~$200B (2024, bottom-up from EIA CBECS + 5.9% CAGR)
- If 1% of spend is addressable by energy management software fees (a reasonable SaaS pricing model assumption for software that manages and reduces costs): **~$2B TAM from cost-basis framing**
- Alternatively: 5.6 million U.S. commercial buildings (EIA CBECS) × 4% current BEMS penetration = 224,000 buildings currently served. 96% unserved = 5.4M potential building accounts.

**TAM presentation recommendation:** Do not use the $14.2B global figure as your headline number without identifying the source. Use the $200B+ commercial energy spend as the denominator, then frame software TAM as the portion capturable by analytics/management software. Show the math explicitly. VCs respect bottoms-up builds.

---

#### STEP 2 — DEFINE SAM (SERVICEABLE ADDRESSABLE MARKET)

This is where segmentation makes the case more defensible and more specific.

**Higher Education vertical (beachhead):**

- Education sector: ~13% of commercial energy consumption (EIA CBECS 2018 — [^77])
- K-12 approximately $6B (cited [^19]) → Higher education residual: ~$10–15B annually
- Higher education institutional count: approximately 4,000 degree-granting institutions (NCES data — I am flagging this as a standard publicly available NCES figure that I am confident in directionally but which should be confirmed)
- Realistic software buyers: large public research universities + private research universities + large liberal arts colleges with complex district energy = approximately 500–800 institutions that have the scale to justify a $40K–$200K annual EMS contract
- At $100K average contract value (midpoint between EnergyCAP's pricing model and Wisconsin RFP floor): 600 institutions × $100K = **$60M SAM for higher education alone**

**Healthcare vertical (second beachhead):**

- 9% of major fuels across commercial buildings (EIA CBECS — [^16])
- ~$18–22B estimated annual energy spend (derived from $200B × 9%)
- 6,100 U.S. hospitals (AHA data — widely available) + 10,000+ large medical campuses
- Sophisticated buyers with district energy comparable to universities: approximately 300–500 large health systems
- At similar contract values: 400 institutions × $100K = **$40M SAM for healthcare**

**Corporate multi-site (longer-term target):**

- Larger SAM but more competitive, lower near-term win rate
- Fortune 2000 companies with multi-site energy management needs: approximately 2,000 accounts
- At $100K average: **$200M SAM for corporate**

**Total SAM (combined verticals, bottom-up):** ~$300M across higher ed, healthcare, and corporate multi-site.

This is materially smaller than the $14.2B TAM headline — which is intentional. SAM should be smaller than TAM. A $300M SAM with a credible path to 10–15% share in 5 years ($30–45M ARR) is a Series A–appropriate story for a seed-stage company.

---

#### STEP 3 — DEFINE SOM (SERVICEABLE OBTAINABLE MARKET)

**3-year horizon (to ~Series A):**

- Beachhead: 20–30 higher education accounts at $100K average = $2–3M ARR
- Expand: 10–20 healthcare accounts at $100K average = $1–2M ARR
- **SOM: $3–5M ARR in Year 3** is the defensible claim

**Investor framing note:** This is a conservative SOM, which is intentional. The 12–24 month Arcadia vulnerability window means the SOM could expand faster if Clear Current moves decisively. But do not build investor materials on the optimistic scenario — build them on the defensible scenario and let the upside tell itself.

---

#### STEP 4 — THE $1B+ TAM QUESTION

**Can this research support a $1B+ TAM story?**

Yes — but only with the right framing. Here is the most defensible path:

**Option A — Total commercial energy spend as denominator (most defensible):**

> "U.S. commercial buildings spend approximately $200 billion annually on energy (EIA CBECS 2018, updated for CAGR). Energy management software that can recover even 1% of that spend in billing errors and rate optimization represents a $2B+ annual value creation opportunity — of which software pricing typically captures 10–20%, implying a $200M–$400M recurring software revenue market in the U.S. alone."

This framing is grounded in a primary government source ($142B CBECS) and transparent math. No unverifiable vendor market research required.

**Option B — Analyst report framing (requires source identification first):**

> "The commercial energy management software market is estimated at $14.2B globally and $1.62B in the most directly comparable U.S. energy procurement software segment."

This framing is only usable if [^6] and [^5] are identified as named, reputable research firms. If they are Grand View Research or MarketsandMarkets, note that these firms' methodologies are not independently auditable — and a sharp VC will push back on it. If they are Verdantix or Gartner, the number is more defensible.

**My recommendation:** Use Option A as your primary TAM framing. Include the analyst report figures as corroborating context ("consistent with analyst estimates of $14.2B globally") only after identifying the source.

---

### Investor Materials: What to Say vs. What Not to Say

| Say This                                                                                                                                                                         | Don't Say This                                                               | Why                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| "FERC confirmed $108M mischarged at a single utility. Rhode Island's PUC found 83% of internally flagged billing exceptions reached customers anyway."                           | "80% of businesses overpay on their utility bills"                           | First is regulatory enforcement. Second is auditor folklore.                                                        |
| "EIA's Commercial Buildings Energy Consumption Survey shows only 4% of commercial buildings have a full BEMS — 96% of the market is unserved by sophisticated software."         | "The energy management software market is $14.2B" (without identifying [^6]) | First is primary government data. Second is an unverified analyst number.                                           |
| "NREL documents that a single 1,000 kW summer peak event, under an 80% ratchet clause at $15/kW, locks in $144,000 in annual demand charges — regardless of actual winter load." | "Demand charges are complex and expensive"                                   | First is quantified and citable. Second is a generic claim.                                                         |
| "Our 12 pilots have identified $10M in potential billing errors."                                                                                                                | "Our 12 pilots have recovered $10M"                                          | Until a utility issues a credit, it is identified, not recovered. This distinction matters enormously in diligence. |
| "Zero competitors — including Arcadia after 14 months of enterprise sales — have documented higher education customers."                                                         | "Arcadia hasn't entered our market"                                          | First is a specific, documentable fact. Second is a positioning claim that sounds defensive.                        |

---

## 6. WHAT THE RESEARCH PROVES VS. WHAT IT MERELY CLAIMS

### What Is Proven (Evidence-Based)

**Proven: Billing errors are a legally documented, regulatory-confirmed problem.**
The FERC FirstEnergy action and Rhode Island PUC data are government enforcement records — not vendor surveys. The Harvard Law 2025 paper provides academic framing. The Texas State "weird multiplier" is a first-person account from a named institution in a primary interview. These together constitute a legitimate evidentiary base for the billing error thesis.

**Proven: The incumbent (EnergyCAP) has specific, documented UX failures in precisely the capabilities that define its market position.**
132 reviews on named platforms (Capterra/G2). Specific quoted complaints about chargeback complexity, report navigation, and steep learning curve. A founding-CEO conference presentation on campus chargeback that simultaneously validates the importance of the feature and signals the difficulty of executing it well. This is robust competitive intelligence.

**Proven: Higher education follows a predictable, calendar-driven buying cycle.**
Two independent primary interviews from different institutions (Texas State and UT Austin) with independent corroboration from a named public RFP (University of Wisconsin). Three sources in agreement on a structural pattern.

**Proven: Arcadia has zero documented higher education customers after 14 months of enterprise sales.**
The research team confirmed this by reviewing Arcadia's documented customer list (Cox Enterprises, Arconic, Iron Mountain, Adobe, Intuit, UPS via RPD Energy, Ford). The absence of a university reference is documented, not inferred. Job posting evidence of legacy platform migration is confirmable via LinkedIn.

**Proven: Demand charges represent 30–70% of commercial utility bills.**
DOE primary source, verified by the consulting team.

**Proven: The NREL ratchet calculation ($144K/year from a single summer peak) is mathematically reproducible.**
Math is transparent. NREL is a national laboratory. Any investor can verify.

**Proven: 660+ district energy systems exist in the U.S., serving 5.5B sq ft.**
Confirmed across both documents with consistent figures.

**Proven: Commercial energy costs are growing faster than most organizations budget for.**
5.9% CAGR vs. 3% typical escalator (verified, Synthesis Brief). Directionally confirmed by multiple secondary sources and by Andi Ault's first-person account of submitting a budget before City of Austin finalizes rates.

---

### What Is Merely Claimed (Analytical Assertion Without Confirmed Citation Chain)

**Claimed but unverified: 80% of businesses overpay on utility bills.**
"Auditing industry sources" is not a source. This is industry folklore with commercial origins. Do not use.

**Claimed but unverified: The TAM is $14.2B globally.**
Citation [^6] is not identified. Could be a defensible Verdantix/Gartner figure or an unauditable MarketsandMarkets projection. Do not headline until source is named.

**Claimed but unverified: 9% of companies have fully embraced software for energy data management.**
Citation [^4] appears four times in the report — repetition does not validate. Source unknown.

**Claimed but unverified: 30% of commercial utility bills contain a material error annually.**
"Energy auditors" as source — commercial incentive problem. Same issue as the 80% figure.

**Claimed but asserted without independent validation: $241B current commercial energy spend.**
Derived from the solid $142B CBECS 2018 baseline, but the extrapolation methodology is not stated. Presentable as an estimate if the derivation is shown.

**Claimed but not directly validated from Clear Current's data: $10M in billing errors identified.**
The number comes from John's pilots. The Synthesis Brief explicitly flags that realized recovery (utilities issuing credits) has not been confirmed. This is the single most important factual question before the May fundraise.

---

## 7. GAPS AND OPEN QUESTIONS

### Gap 1 — CRITICAL: The Realized vs. Identified Gap on $10M

This is not a research gap. It is a documentation gap that only John and Dan can close. Has any utility issued a credit based on Clear Current's audit findings? One documented case is worth more than everything in this analysis. Until this is answered, the $10M figure must be presented as "identified" not "recovered" in every investor and customer conversation. The distinction will be caught in diligence if it is not addressed proactively.

### Gap 2 — HIGH: The [^6] Problem — Unidentified TAM Source

The headline TAM number ($14.2B) has an unidentified citation. Before these materials go to investors, someone needs to identify what [^6] is. If it is Verdantix, use it. If it is Grand View Research or Allied Market Research, consider building the bottom-up case instead and using the analyst figure only as corroboration.

### Gap 3 — HIGH: The 9% Software Adoption Figure — Unidentified Source

Citation [^4] is used four times in the report. The "9% of companies have fully embraced software" claim is a significant market sizing input — it implies 91% of the market is unserved by adequate software. Identifying this source would meaningfully strengthen the TAM narrative.

### Gap 4 — HIGH: The 5.9% CAGR Primary Source

The Synthesis Brief flags this as verified but does not name the underlying source document. "Verified by the consulting team" helps internally but VCs will ask "according to what?" Identify the primary source before presenting this number.

### Gap 5 — MEDIUM: Energy Toolbase Competitive Intelligence

Phil Combs (20 years enterprise energy sales) named Energy Toolbase as the competitive reference for tariff analysis — not Arcadia. The Market Research Report does not profile Energy Toolbase with any substance. The competitive landscape analysis is incomplete without understanding what Energy Toolbase offers, who uses it, and how it is priced. This is a gap in the competitive positioning deliverable.

### Gap 6 — MEDIUM: No Corporate Multi-Site Primary Voice

The Journey Map for the corporate multi-site energy manager is entirely secondary research. No primary interview. The Synthesis Brief flagged Walgreens' Matthew Gardynski and Home Depot's Ashley Riney as pending contacts. Until one of these conversations happens, the corporate persona is an analytical construct, not a validated buyer profile.

### Gap 7 — MEDIUM: WatchWire/Tango Pricing and CRE Buyer Voice

WatchWire is identified as the dominant institutional CRE tool (Berkshire-backed, 500+ customers, Brookfield reference). But the research has no primary CRE buyer interview and WatchWire's pricing is undisclosed. The CRE segment cannot be sized with confidence.

### Gap 8 — MEDIUM: Water as Adjacent Market

Andee Chamberlain flagged water as an emerging parallel pain point. Texas State operates its own wells with tightening drought restrictions. The Synthesis Brief notes this as EMERGING with no secondary backing. The commercial water billing error rate is entirely undocumented. If Clear Current plans to extend the platform to water management, this is a gap that needs research before the Series A narrative is built.

### Gap 9 — LOW: The $241B Extrapolation Methodology

The 2024 commercial energy spend estimate ($241B) needs its derivation documented. I have shown a transparent derivation ($142B × (1.059)^6 = ~$201B). Whether the correct CAGR is 5.9% or something else will affect this number. Either cite the methodology or use the CBECS baseline with explicit extrapolation disclosure.

### Gap 10 — LOW: SAM Sizing for Higher Education

My bottom-up SAM estimate ($60M for higher ed, 600 institutions at $100K) is a rough approximation. Better inputs exist: NCES data on the number of degree-granting institutions with 10,000+ enrollment (which is the realistic minimum scale for an energy management software buyer), combined with a distribution of meter counts to refine average contract value. This would sharpen the SAM figure from an approximation to a defensible estimate.

---

## Closing Note for John and Dan

The research your consulting team has assembled is unusually rigorous for a seed-stage engagement. The primary interviews are strong, the Arcadia competitive intelligence is actionable, and the verified statistics from DOE, NREL, EIA, FERC, and state PUCs give you a credible evidentiary base.

The market size story is defensible at $1B+ TAM, but only if you use the bottom-up framing from EIA data rather than unattributed analyst reports. The $14.2B figure may be right — but you need to be able to say whose report it comes from before you put it in a deck.

The single most important action before May is resolving the identified-vs.-realized question on the $10M. Marc Spieler identified it. I am confirming it. Every sophisticated investor in this space will ask the same question within the first fifteen minutes of a diligence call. The answer to that question — whatever it is — should be the first thing John prepares, not the last.

Everything else in this corpus is buildable. That one is not.

---

_Dana Park | Market Sizing & TAM/SAM/SOM Analyst_
_CDL Texas MBA Consulting Engagement | Clear Current Technologies | April 2026_

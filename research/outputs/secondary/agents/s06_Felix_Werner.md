# Agent: Felix Werner | Energy Technology & Product Landscape Analyst

# Run: 2026-04-17T16:39:46.988148

---

# Technology Landscape Analysis: Clear Current Technologies

## AI Capabilities, Product Architecture, and Competitive Positioning

**Prepared by:** Felix Werner, Energy Technology & Product Landscape Analyst
**Engagement:** Clear Current Technologies — May 2026 Fundraise Preparation
**Sources:** Research Synthesis Brief (CDL MBA Team, April 6, 2026) + Compass Market Analysis (April 16, 2026)
**Date:** April 2026

---

## 1. SOURCE INVENTORY

### Research Synthesis Brief — What It Contains and What I'm Working From

The Synthesis Brief consolidates five primary interviews and secondary research. For technology landscape purposes, the most useful material is:

- **Phil Combs interview (Trane):** The single most technology-specific primary source. Describes Excel as the operative incumbent for sophisticated analysis, articulates the actual performance bar for any AI tool ("faster and more insightful than my well-structured Excel workbook"), and names Energy Toolbase as the relevant competitor for tariff analysis — not Arcadia. This is primary evidence, not secondary claim.
- **James Norton interview (Texas State):** Names anomaly detection as the highest-value feature from an active EnergyCAP user's perspective. First-person, specific.
- **Arcadia competitive intelligence section (Section 07):** Documents the product architecture of the most-capitalized AI-native competitor. Distinguishes between Arcadia's forward-looking rate case intelligence gap and its backward-looking 30,000+ tariff database. The "Cox Enterprises chose Arcadia as a data feed because they wanted to put us on their dashboard" quote is the sharpest intelligence in the document.
- **Dan Schreiber's three-tier model (Chat/React, Dashboard/Push, Autonomous/Do):** Referenced but not detailed in the Synthesis Brief. I will work from the description as given.
- **Verdantix 2023 claim:** Cited as secondary validation that all 15 leading EMS vendors are incorporating AI. The document cites Verdantix but does not reproduce the underlying methodology. I will flag this.
- **EIA CBECS 4% BEMS deployment figure:** Cited with source attribution. One of the more defensible market-penetration statistics in the corpus.

### Compass Market Analysis — What It Contains and What I'm Working From

The Compass document is operationally richer than the Synthesis Brief on technology landscape. The most relevant threads for my focus:

- **Thread 1 (Corporate multi-site persona):** Documents the actual technology stack in use at 100–500 location operators — spreadsheets, AP clerks, bill-audit consultants (ENGIE Impact, UtiliSave, Cass, SpyGlass). No AI in this stack. This is important negative evidence about AI adoption.
- **Thread 3 (Churn and competitive displacement):** The Parsepoint detail that EnergyCAP lacks built-in OCR is a specific, citable technology gap. This is more useful than generic "EnergyCAP is outdated" framing.
- **Thread 4 (Bill-pay ecosystem):** Documents Schneider Electric's "Sera" agentic AI launch (2025) and their 39M bills/year processing scale. This is the most credible AI deployment claim in the competitive landscape — it has operational context. EnergyCAP "Watts AI" is named but not detailed. Both matter for positioning.
- **Thread 5 (Healthcare):** Contains the most specific billing error recovery statistics with source attribution (UtiliSave 93% hit rate across 16,000+ properties, $650M recovered since 1991). These are vendor-marketed figures but UtiliSave at least has an operational track record that makes them more defensible than generic "80% overpaying" claims.
- **Thread 2 (Investor benchmarks):** Energize Capital's climate SaaS benchmarks matter for how Clear Current frames its AI-powered claims to investors — the bar is different from generic SaaS.

**Critical observation before proceeding:** Neither document contains primary evidence of any competitor's AI actually working as described. Verdantix confirms vendors are _incorporating_ AI. That is not the same as confirming AI is delivering measurable accuracy improvements at commercial scale. I will track this distinction throughout.

---

## 2. KEY FINDINGS

**Finding 1: The real technology competition is not AI vs. AI — it is AI vs. Excel.**

Phil Combs (Trane, 20 years enterprise energy sales) described the competitive benchmark explicitly: "most energy analysis done in Excel pivot tables." He stated the adoption bar is "faster and more insightful than my well-structured Excel workbook." This is primary evidence, not secondary inference. The Compass Thread 1 corroborates it independently: "Spreadsheets remain the default for 100–300 location operators that haven't adopted a platform — Clear Current's sweet spot."

**What this means for product positioning:** Clear Current is not primarily competing against Arcadia's AI or EnergyCAP's "Watts AI." It is competing against a skilled energy analyst's Excel workflow. The product has to beat that specific thing — not a generic "traditional approach."

_Sources: Research Synthesis Brief (Phil Combs interview); Compass Thread 1._

---

**Finding 2: The only named AI competitor with documented operational scale is Schneider Electric's Sera, processing 39 million bills per year — not Arcadia.**

Compass Thread 4 documents Schneider Electric's EcoStruxure Resource Advisor+ launched "Sera" (described as "agentic AI") in 2025, supported by approximately 400 AI professionals globally and processing 39M+ utility bills per year. This is scale that actually matters for AI model training — 39 million bills is a training corpus. Arcadia processes utility data at large scale (9,500+ utilities, 95%+ US coverage per Thread 4) but their AI claims are not described with the same operational specificity.

**The implication:** Schneider Electric, not Arcadia, is the technology-depth competitor in commercial AI energy management. This is buried in the Compass document and not surfaced in the Synthesis Brief's competitive framing.

_Source: Compass Thread 4 (Schneider Electric section)._

**Caveat:** "Agentic AI" and "400 AI professionals globally" are Schneider marketing claims. I have no independent validation of Sera's accuracy or deployment status.

---

**Finding 3: EnergyCAP's documented AI gap is specific and citable — missing OCR, not missing "AI."**

Compass Thread 3 cites Parsepoint directly: "EnergyCAP lacks built-in OCR — teams either enter data manually or purchase a separate OCR tool and build an integration." This is a product gap claim with a named source. It is more defensible than characterizing EnergyCAP as generally "not AI-powered."

EnergyCAP has launched "Watts AI" (named in Compass Thread 4) but no detail is provided on what it does or how it performs. The Synthesis Brief's description of EnergyCAP as a "glorified spreadsheet" comes from G2/Capterra user reviews — those are buyer perceptions, not technical assessments.

**What this means for positioning:** Clear Current should be specific: "EnergyCAP requires a separate OCR integration for bill ingestion; we built it in." That is a testable, falsifiable claim. "We have AI and they don't" is not.

_Sources: Compass Thread 3 (Parsepoint citation); Compass Thread 4 (Watts AI mention)._

---

**Finding 4: Arcadia's AI capability is data infrastructure, not energy manager tooling — confirmed by a customer quote.**

The Synthesis Brief's competitive intelligence section contains the sharpest product evidence in the corpus: "Cox Enterprises chose Arcadia as a data feed because 'they wanted to put us on their dashboard.'" This is not an interpretation — it is a described customer behavior. Cox could not use Arcadia's interface as delivered and built their own.

Arcadia's "30,000+ tariff structures" and "automated 500K+ meter-tariff assignments" (cited in the Synthesis Brief's opportunity heatmap section) are backward-looking rate database applications. The Synthesis Brief explicitly distinguishes this from "forward-looking rate case intelligence." These are not the same product.

**What this means for the AI claims:** Arcadia's AI is demonstrably real in data ingestion and tariff matching at scale. It is not real as an energy manager's working interface. The absence of a natural language interface is not an oversight — it reflects Arcadia's product DNA as developer infrastructure, not user tooling.

_Source: Research Synthesis Brief (Section 07, Arcadia Competitive Intelligence)._

---

**Finding 5: The commercial deployment bar for anomaly detection in energy management is "biggest thing we'd want to know about right away" — i.e., high sensitivity, not high precision.**

James Norton (Texas State, active EnergyCAP user managing 1,500 meters across 98 buildings) named anomaly detection as the highest-value feature. The Synthesis Brief quotes him directly: "biggest thing we'd want to know about right away."

This preference — maximize sensitivity, tolerate some false positives — is the opposite of the design requirement for, say, a fraud detection system where false positives have cost. In energy management, a missed anomaly (undetected billing error or equipment fault) has a real dollar cost; a false positive creates an investigation workflow but doesn't cost money. This should drive Clear Current's anomaly detection design philosophy.

**There are no published accuracy benchmarks for commercial energy anomaly detection in either document.** No false positive rate, no recall figure, no F1 score is cited for any system including EnergyCAP, Arcadia, or Schneider. This is a genuine gap.

_Source: Research Synthesis Brief (James Norton interview, Texas State)._

---

**Finding 6: AI in the bill-pay and audit ecosystem is primarily rules-based, not ML-based — and the market knows it.**

Compass Thread 4 describes the bill-pay ecosystem vendors (Cass, ENGIE Impact, Vervantis, EnergyCAP) with their audit layers characterized as "still largely rules-based" — the document recommends Clear Current pursue API/data-partnership with Cass (50M invoices/year) and Schneider (39M bills/year) specifically because "their audit layers are still rules-based and would value AI anomaly detection."

Thread 1 documents ENGIE Impact reporting "~17% of utility invoices contain an exception or error." UtiliSave claims a "94% audit-hit rate" across 16,000+ properties. These are achieved through rules-based audits and human review, not AI. This establishes the baseline Clear Current must beat.

_Sources: Compass Thread 4 (bill-pay ecosystem section); Compass Thread 1 (ENGIE Impact citation); Compass Thread 5 (UtiliSave statistics)._

---

**Finding 7: No competitor has a documented natural language chat interface for energy management — and the market has not demanded one yet.**

The Synthesis Brief confirms Arcadia has no NLP chat interface. The Compass document adds no evidence of any competitor with an NLP-based energy management interface. The thread on corporate multi-site personas describes the workflow tool stack (spreadsheets, Cass, EnergyCAP, ENGIE Impact) with no mention of chat-based interaction.

This is both an opportunity and a product risk: the absence of competitors suggests the market has not been trained to expect this interface. Dan Schreiber's Chat/React tier is a product bet, not a market response. That is not inherently wrong — but it needs to be framed correctly in investor materials. Clear Current is creating demand for a new interaction paradigm, not responding to expressed demand.

_Sources: Research Synthesis Brief (Section 07, Arcadia competitive intelligence); Compass Thread 1 (tool landscape description)._

---

**Finding 8: The IT security gate is a technology adoption bottleneck that is now documented at the category level, not just by one interviewee.**

Phil Combs (primary evidence) described IT security as a genuine enterprise gate. The Synthesis Brief notes this gap is now "CLOSED" with secondary validation: "SOC 2 Type II is the primary gate; 76% of organizations increasing SaaS security budgets; commercial utility data classified as competitively sensitive."

Compass Thread 4 adds relevant context: the American Water Works ransomware attack (October 2024, 14M customers, 6-week disruption) is listed as a trend raising cybersecurity concerns in the utility data space. This is not an abstract concern — it is a named incident that will appear in IT security conversations.

_Sources: Research Synthesis Brief (Section 06, IT security gap update); Compass Thread 4 (cybersecurity trend note)._

---

**Finding 9: The four-week Measurabl free-tier result (11,000+ buildings onboarded) demonstrates what a friction-free data onboarding experience can accomplish — and sets a new expectation.**

The Synthesis Brief mentions Measurabl launched a free tier in July 2025 and onboarded 11,000+ buildings in four weeks. This is in the CRE context, but it has technology architecture implications: Measurabl's onboarding velocity implies automated data ingestion at scale. This sets a user expectation for how fast any energy platform should onboard a new customer.

For Clear Current: if the product requires weeks of manual meter mapping before delivering value, it will fail against this new benchmark — regardless of how good the AI is once configured.

_Source: Research Synthesis Brief (Section 03, CRE finding)._

---

**Finding 10: Cass Information Systems processes 50 million invoices per year and acquired AcuAudit in Q4 2024 — this is the most significant unreported competitive signal in the corpus.**

Compass Thread 4 documents Cass's scale (50M invoices/year, ~$130M TTM fee revenue, publicly traded) and its Q4 2024 acquisition of AcuAudit. The AcuAudit acquisition is explicitly an AI audit capability bolt-on. Cass's facility payment volume grew 23–26% YoY in 2024. This is a publicly traded company moving into AI-augmented bill auditing with 50 million invoices as its training corpus.

The Compass document's recommendation treats Cass as a potential partner. It could also become a competitor. An investor will ask this question. Clear Current needs an answer.

_Source: Compass Thread 4 (Cass Information Systems section, Q4 2024 AcuAudit acquisition)._

---

**Finding 11: "AI-powered" EMS is a vendor positioning claim with no standardized capability definition — Verdantix confirms adoption direction, not AI quality.**

The Synthesis Brief cites "Verdantix 2023: all 15 leading EMS vendors actively incorporating AI because buyers want automation over manual spreadsheet workflows." This is an important finding but it requires precise framing. "Incorporating AI" in 2023 could mean machine learning anomaly detection, GPT-based chat wrappers, rule-based automation labeled as AI, or OCR document processing. Verdantix's 2023 dataset predates the current LLM deployment wave and does not distinguish between these categories.

What the Verdantix citation proves: AI incorporation is now table stakes for market positioning. What it does not prove: any specific AI capability works better than alternatives for any specific task.

_Source: Research Synthesis Brief (Section 03, Excel incumbent finding, Verdantix citation)._

---

**Finding 12: Dan Schreiber's three-tier product model maps correctly to documented user preference patterns — but only two of three tiers have primary evidence support.**

The Synthesis Brief references Dan's Chat/React, Dashboard/Push, and Autonomous/Do architecture. Cross-referencing against primary evidence:

- **Dashboard/Push** is strongly supported: James Norton's "biggest thing we'd want to know about right away" is a push request. Andi Ault "wants flags not chat." Don Johnson's reactive buyer profile requires proactive surfacing. Three independent primary data points confirm pull-first design is wrong for this market.
- **Chat/React** has indirect support from Phil Combs' sophisticated analyst persona and the Excel incumbent framing. But no primary interviewee asked for a chat interface by name. The market hasn't expressed demand for this; it is a product hypothesis.
- **Autonomous/Do** has no primary evidence support in either document. Zero interviewees described a workflow where they would delegate energy decisions to an autonomous agent.

_Source: Research Synthesis Brief (Sections 03, 04, multiple interview citations)._

---

## 3. STATISTICS THAT ARE DEFENSIBLE

I am applying strict citation-chain requirements. Each entry: the number, the document it appears in, the document's stated source, and my confidence rating.

---

**Stat 1: 4% of commercial buildings have a full BEMS deployed**

- Document: Research Synthesis Brief, Section 03 ("Fake Energy Manager" finding)
- Source cited in document: EIA CBECS (Commercial Buildings Energy Consumption Survey)
- Confidence: **HIGH.** CBECS is a federal government survey with defined methodology. The EIA publishes CBECS data publicly and it is the standard reference for commercial building characteristics. Note: "full BEMS" requires Clear Current to specify what CBECS measured, as BEMS definitions vary across survey years. The underlying data is real; the specific framing should be checked against the CBECS instrument.

---

**Stat 2: 76% of commercial energy buyers expect utility costs to rise but 69% remain reactive on cost reduction**

- Document: Research Synthesis Brief, Section 03
- Source cited in document: EnergyCAP State of Utility (SoU) 2026
- Confidence: **MEDIUM.** EnergyCAP is a vendor publishing this survey about its own market. The sample is likely EnergyCAP customers and prospects — a self-selected population that overrepresents organizations that have already decided energy management matters. The directional finding (reactive buyers are common) is strongly corroborated by primary interviews (Don Johnson, Phil Combs). Use the primary interview corroboration as the anchor; reference the EnergyCAP survey as supporting, not leading, evidence.

---

**Stat 3: FERC audit found $108M mischarged at FirstEnergy**

- Document: Research Synthesis Brief, Section 03 (Billing Errors finding) and Section 04 (Finding 3)
- Source cited in document: FERC audit (no docket number provided)
- Confidence: **HIGH** on the existence of a FERC enforcement action involving FirstEnergy; **MEDIUM** on the specific $108M figure without a docket citation. FERC enforcement actions are public record. For investor materials, pull the specific FERC docket and cite it directly. The number is almost certainly real — FERC actions are specific — but an investor doing diligence will want the docket number.

---

**Stat 4: Rhode Island PUC — 83% of internally flagged billing exceptions sent to customers anyway**

- Document: Research Synthesis Brief, Section 03 and Section 04
- Source cited in document: RI PUC (no case number provided)
- Confidence: **MEDIUM-HIGH.** State PUC decisions are public record. The specific finding — that a utility's own internal quality control failed to catch exceptions before billing — is the type of finding that appears in formal commission proceedings. For investor materials, locate the specific RI PUC proceeding and cite it by docket. As stated, this is a strong finding but not fully citable without the case reference.

---

**Stat 5: NREL — 1,000 kW summer peak at 80% ratchet = $144K/year locked in regardless of winter demand**

- Document: Research Synthesis Brief, Section 03 (Demand Charges finding)
- Source cited in document: NREL (no publication title or date)
- Confidence: **HIGH** on the math (this is arithmetic from ratchet clause definitions); **MEDIUM** on NREL as the cited source for this specific figure, because ratchet clause arithmetic is widely documented and not unique to any NREL publication. The underlying economics are real. Confirm which NREL publication this comes from before using in investor materials.

---

**Stat 6: Demand charges represent 30–70% of total commercial utility bills**

- Document: Research Synthesis Brief, Section 03 (Demand Charges finding); Compass Thread 5 (healthcare section) also cites "30–70% of commercial electric bills per Inertia Resources"
- Source cited in document: DOE (Synthesis Brief) / Inertia Resources (Compass Thread 5)
- Confidence: **MEDIUM.** The 30–70% range is correct in direction — demand charges are a major component of commercial bills — but "30–70%" is a wide range that reflects genuine rate-structure variation across utilities, customer classes, and regions. "DOE" without a publication title is weak attribution. The Inertia Resources citation in Thread 5 is a vendor source. This finding is defensible in principle but needs a specific DOE publication or EIA data table citation to be investor-grade.

---

**Stat 7: UtiliSave — 93–94% audit-hit rate across 16,000+ properties, $650M refunds recovered since 1991**

- Document: Compass Thread 5 (healthcare section) and Thread 1 (corporate multi-site)
- Source cited in document: UtiliSave (vendor marketing)
- Confidence: **LOW-MEDIUM.** UtiliSave is a contingency-fee bill auditor with strong incentive to publish high hit rates. However, 30+ years of operations and $650M in documented refunds is an operational track record, not just a marketing claim. The Thread 5 source quality flag explicitly notes "UtiliSave: most credible published figure" in the context of billing error statistics. Use this with appropriate framing: "UtiliSave, which operates on contingency and has audited 16,000+ properties since 1991, reports..." — let the reader assess the incentive structure.

---

**Stat 8: ENGIE Impact — ~17% of utility invoices contain an exception or error**

- Document: Compass Thread 1 and Thread 5
- Source cited in document: ENGIE Impact (vendor)
- Confidence: **LOW-MEDIUM.** ENGIE Impact is a managed utility expense service with strong incentive to report high error rates (justifying their fees). However, they manage $20B in utility expenses and their operations are large enough that their internal exception rates have operational basis. Same caveat as UtiliSave. The Compass document's Thread 5 source quality flag explicitly notes "ENGIE Impact reports ~17%" as vendor-marketed. Use cautiously.

---

**Stat 9: Cass Information Systems — ~50M invoices/year, ~$130M TTM fee revenue, facility dollar volume ~$5–6B/quarter with +23–26% YoY growth in 2024**

- Document: Compass Thread 4
- Source cited in document: Cass 10-K filings (SEC)
- Confidence: **HIGH.** Cass is publicly traded (CASS on NASDAQ). Their 10-K is audited and publicly available. These numbers can be independently verified. This is the highest-confidence statistic in the Compass document.

---

**Stat 10: Schneider Electric — 39M+ utility bills processed per year; ~400 AI professionals globally**

- Document: Compass Thread 4
- Source cited in document: Verdantix; Schneider press releases (implied)
- Confidence: **MEDIUM.** The 39M bills figure is operationally specific in a way that suggests it comes from Schneider's own marketing materials — this is plausible for a company of this scale. The "400 AI professionals" figure is a workforce claim that appears in press/recruiting materials. Neither has been independently audited. Use directionally: Schneider operates at a scale that gives their AI claims training-data credibility.

---

**Stat 11: Arcadia — $649M raised, $1.5B valuation, 9,500+ utilities in 52 countries, 30,000+ tariff structures**

- Document: Research Synthesis Brief, Section 07
- Source cited in document: Arcadia/Axios (per Compass Thread 4); investment announcements
- Confidence: **HIGH** on capital raised and tariff count (these are the type of claims in investor press releases and likely reflected in deal announcements); **MEDIUM** on the $1.5B valuation (private company valuations are self-reported). For investor materials, Arcadia's capital position is a documented fact; the valuation figure should be treated as reported, not verified.

---

**Stat 12: EnergyCAP — $40–52/meter/year pricing; 2,100+ organizations; 10,000+ energy managers**

- Document: Research Synthesis Brief (pricing); Compass Thread 1 and Thread 3 (customer counts and pricing)
- Source cited: EnergyCAP marketing/pricing pages (Compass Thread 1); Synthesis Brief notes $50–75K/year for 1,500 meters via reseller
- Confidence: **HIGH** on pricing (this is published marketing data); **MEDIUM** on customer counts (vendor-reported, no independent audit). The pricing arithmetic is internally consistent: $40–52/meter × 1,500 meters = $60–78K, consistent with the $50–75K reseller figure.

---

**Stat 13: "80% of commercial invoices contain errors" (multiple vendor claims)**

- Document: Compass Thread 5 attributes this to "OEO/National Utilities Refund: self-serving contingency marketing"
- Source cited in document: Compass Thread 5 explicitly labels this as unreliable
- Confidence: **DO NOT USE.** The Research Synthesis Brief already correctly identified this as unusable. The Compass document confirms it is a contingency-fee auditor marketing claim. This statistic should be explicitly removed from all Clear Current investor and customer materials.

---

## 4. COMPETITIVE INTELLIGENCE

### Arcadia — The Primary AI-Native Competitor

**What the evidence confirms:**

- Raised $649M; valued at ~$1.5B; JPMorgan credit facility in place (Synthesis Brief, Section 07)
- 9,500+ utilities in 52 countries; 30,000+ tariff structures (Synthesis Brief; Compass Thread 4)
- Acquired Urjanet in May 2022 — now actively migrating Urjanet/Arc customers to flagship platform (Synthesis Brief, Section 07; job posting evidence)
- Senior PM role primarily "migrating complex customer workflows from legacy platform to flagship platform" (Synthesis Brief, Section 07 — source: job postings)
- Zero documented higher education or hospital customers after 14 months of enterprise sales (Synthesis Brief, Section 07)
- Enterprise customer list is entirely corporate Fortune 500: Cox Enterprises, Arconic, Iron Mountain, Adobe, Intuit, UPS (Synthesis Brief, Section 07)
- Cox Enterprises chose Arcadia as a data feed; built their own dashboard on top (Synthesis Brief, Section 07)
- No natural language chat interface — UX is dashboard and data API (Synthesis Brief, Section 07)
- No campus chargeback capability (Synthesis Brief, Section 07)
- No PUC rate case monitoring feature — 30,000+ tariff database is backward-looking (Synthesis Brief, Section 07)
- Trustpilot 2.6/5 across 1,159 reviews (consumer product); 25+ BBB complaints (Synthesis Brief, Section 07)
- Automated 500K+ meter-tariff assignments (Synthesis Brief, Section 03, Opportunity Heatmap)
- Enterprise pivot launched January 2025 (Synthesis Brief, Section 07)

**My read on the competitive window:** The 12–24 month migration distraction claim is real but needs calibration. Arcadia's capital position means they can hire their way out of a migration backlog faster than a startup can anticipate. The structural gap — developer infrastructure DNA vs. energy manager UX — is more durable than the operational distraction. That should be Clear Current's emphasis.

---

### EnergyCAP — The Incumbent

**What the evidence confirms:**

- Founded 1980; PE-backed by Resurgens Technology Partners since March 2021 (Compass Thread 3 — note: the Synthesis Brief had "Resolute" which Thread 3 corrects to "Resurgens")
- Resurgens' thesis includes "execute acquisitions to expand product breadth" — active roll-up platform (Compass Thread 3)
- 2,100+ organizations; 10,000+ energy managers (Compass Thread 3, vendor-reported)
- Pricing: $40–52/meter/year; $2,600/yr for 100 meters to $50K+/year at portfolio scale; implementation $5K–$100K+ (Compass Threads 1, 3)
- Texas State University: active customer; $50–75K/year via YearOut Energy reseller (Synthesis Brief)
- Missing OCR: requires separate tool and integration for bill ingestion (Compass Thread 3, Parsepoint citation)
- "Watts AI" product named in Compass Thread 4 — no capability detail provided
- G2/Capterra 4.7/132 reviews — high satisfaction but specific complaints about chargeback complexity and interface (Synthesis Brief, Section 03)
- User review language: "outdated, un-intuitive, glorified spreadsheet"; "chargebacks and splits are hard to understand" (Synthesis Brief, Section 03)
- Explicitly marketed healthcare vertical and campus chargeback — but execution is the documented pain point (Synthesis Brief; Compass Thread 5)
- Per-meter pricing breaks down for 100–400 location operators; built for 1,000+ location portfolios (Compass Thread 3, Parsepoint)
- Mid-market mismatch is the documented displacement opportunity, not feature inferiority at enterprise scale

---

### Schneider Electric / EcoStruxure Resource Advisor+ / Sera

**What the evidence confirms:**

- Processes 39M+ utility bills per year (Compass Thread 4 — source quality: vendor/Verdantix, not independently verified)
- Launched "Sera" agentic AI in 2025 (Compass Thread 4)
- ~400 AI professionals globally (Compass Thread 4 — vendor claim)
- Bundled with energy procurement services — not a standalone product
- Enterprise-only; not accessible to mid-market or higher education without procurement bundling

**My read:** Schneider is the most credible AI deployment at scale in this space but they are enterprise-only, procurement-bundled, and not competing for the higher education or 100–400 site mid-market segment. They are relevant as proof-of-concept that AI can work at commercial energy scale, not as a direct competitor to Clear Current's initial market.

---

### Cass Information Systems

**What the evidence confirms:**

- Publicly traded (CASS); ~$130M TTM fee revenue; 1,027 FTE (Compass Thread 4, 10-K citations)
- ~50M invoices processed per year; facility dollar volume $5–6B/quarter (Compass Thread 4)
- Acquired AcuAudit Q4 2024 — AI audit capability bolt-on (Compass Thread 4)
- +23–26% YoY facility payment volume growth in 2024 (Compass Thread 4)
- Dominant in AP-centric retail/QSR bill processing (Compass Thread 1)

**My read:** The AcuAudit acquisition is the most underappreciated competitive signal in the research corpus. Cass has 50 million invoices as a training dataset and just acquired an AI audit company. This is a potential competitor-at-scale in 18–36 months, not a permanent partnership opportunity. Clear Current should not build a GTM strategy that depends on Cass remaining a rules-based auditor.

---

### ENGIE Impact

**What the evidence confirms:**

- Acquired by GDF SUEZ (ENGIE) in 2014 for $335M; 700,000+ client sites at acquisition (Compass Thread 4)
- 900+ multi-site clients; 25%+ of Fortune 500 as customers; ~$3.2B savings claimed over 5 years (Compass Thread 4)
- Model: full-service outsourced utility expense management — bill ingestion, audit, rate optimization, payment, sustainability reporting
- Reports ~17% exception rate on invoices (Compass Thread 1, vendor claim)

**My read:** ENGIE Impact is positioned as a potential partner in the Compass document, not a competitor. Their enterprise customer relationships are described as "too sticky" to displace directly. The partnership logic is sound: Clear Current's AI layer improves ENGIE Impact's audit economics. But this is a strategic option, not a go-to-market recommendation — ENGIE Impact would need to see Clear Current's documented error recovery proof point (Marc Spieler's open question) before any serious partnership conversation.

---

### Energy Toolbase

**What the evidence confirms:**

- Named by Phil Combs as the closest competitor for tariff analysis (Synthesis Brief, Section 02 and 03)
- Phil Combs queried it for: "which tariff is more beneficial based on last 24 months?"
- Named competitor for the tariff optimization module specifically (Synthesis Brief, Section 05)

**What the evidence does not confirm:** Pricing, scale, customer base, AI capabilities, or technology architecture. This is a primary-interview-only competitive reference with no secondary research in either document.

---

### WatchWire / Tango

**What the evidence confirms:**

- Berkshire Partners-backed; 500+ customers in 140+ countries; Brookfield is a named customer (Synthesis Brief, Section 03)
- Dominant institutional CRE tool (Synthesis Brief)
- Pricing: ~$100/month entry, enterprise custom (Compass Thread 1)
- G2/Capterra: 4.8/16 reviews (Compass Thread 3 — very limited review count)

**My read:** WatchWire is the CRE segment incumbent. It is not competing for higher education or mid-market multi-site corporate. The 500+ customer / 140+ country scale is large enough that their AI capabilities are likely more mature than their low review count suggests. No AI capability detail is documented for WatchWire in either source.

---

### Measurabl

**What the evidence confirms:**

- Launched free tier July 2025; onboarded 11,000+ buildings in four weeks (Synthesis Brief)
- Listed as a G2/Capterra alternative to EnergyCAP (Compass Thread 3)

**My read:** Measurabl's 11,000-building onboarding in four weeks is the most interesting product-velocity signal in the corpus. It demonstrates that automated utility data onboarding at scale is technically achievable. Clear Current should study this as a product benchmark, not just a competitive data point.

---

## 5. DELIVERABLE BUILD GUIDANCE

### Technology Landscape Section — Competitive Positioning Document

**The core narrative:** Use this structure.

_Layer 1 — Market Technology State:_ "Commercial energy management software is at a defined technology transition point. The incumbent tooling (EnergyCAP, spreadsheets, bill-audit consultants) is rules-based and human-intensive. The leading market entrants are incorporating AI at the data-ingestion and pattern-matching layer. The user interaction layer — how energy managers actually interact with these tools — has not materially changed."

Source this to: Compass Thread 4 ("audit layers are still largely rules-based"), Phil Combs Excel quote (Synthesis Brief), Verdantix 2023 citation (Synthesis Brief).

_Layer 2 — Where AI Works Today in This Market:_ Be specific about what AI is doing at scale in this category:

- Tariff matching at scale (Arcadia: 500K+ meter-tariff assignments automated) — this is real
- Bill ingestion via OCR/ML (EnergyCAP bolt-on, Schneider at 39M bills/year) — this is real
- Rules-based exception flagging (ENGIE Impact 17% exception rate) — not AI, but labeled as such by some vendors
- Anomaly detection for consumption patterns — claimed by multiple vendors, no published accuracy data

_Layer 3 — Where AI Does Not Yet Exist in This Market:_

- Natural language interface for energy manager queries (zero documented deployments)
- PUC/regulatory rate case monitoring (zero competitors confirmed)
- Campus cost allocation with AI-assisted chargeback logic (zero AI-native competitors)
- Forward-looking scenario modeling for budget impact of regulatory changes (zero competitors)

_Layer 4 — Clear Current's Differentiated Position:_ Map each proposed module to a specific gap in the landscape.

---

### Product Module Recommendations — Technology Framing

For each of the five modules, here is what the research supports as the specific AI contribution, and how to describe it defensibly:

**Module 1: Billing Error Audit Engine**

Defensible AI claim: Statistical anomaly detection on utility invoice data — flagging deviations from historical baseline patterns (demand, usage, rates, fees) that human reviewers miss at volume. The competitive gap is that EnergyCAP requires manual review plus a separate OCR integration (Parsepoint/Compass Thread 3). The operational baseline is ENGIE Impact's rules-based 17% exception rate. Clear Current's claim should be: "ML-based anomaly detection that catches exceptions rules-based systems miss, fully integrated with bill ingestion."

Do not claim: "80% of bills contain errors." Use: FERC $108M FirstEnergy action and RI PUC 83% exception pass-through finding as documented evidence of systematic billing error at the institutional level.

**Module 2: Anomaly Detection + Alerting (Push to User)**

Defensible AI claim: Continuous threshold monitoring against learned consumption baselines, with dollar-denominated alerts pushed to the relevant persona (ops vs. finance). The differentiation is push architecture — delivering insights to the user without requiring them to log in and investigate.

Do not claim specific accuracy rates until Clear Current has internal benchmarking data. No competitor has published accuracy benchmarks; this creates an opportunity to establish the measurement standard, not just claim superiority.

The Phil Combs adoption bar ("faster and more insightful than my well-structured Excel workbook") means the anomaly detection must surface insights the analyst's own Excel pivot tables would not catch — specifically, multi-variable correlations across billing periods, demand ratchet trajectories, and rate component changes that exceed what a single-variable threshold rule can detect.

**Module 3: Regulatory Intelligence Monitor**

Defensible AI claim: This module requires the least AI and the most data infrastructure. PUC docket monitoring, rate case timeline tracking, and regulatory alert delivery are primarily scraping, parsing, and notification workflows. The "AI" component is natural language summarization of regulatory filings — converting a 200-page rate case filing into a 3-paragraph budget impact alert.

This is actually where LLM capability is most clearly applicable and most likely to work: summarizing structured regulatory documents with defined templates, not open-ended energy analysis. This module's AI claims are the most defensible in the product suite.

Competitive positioning: Zero documented competitors. The product exists as confirmed white space in both documents. (Synthesis Brief, Section 07; Phil Combs primary interview.)

**Module 4: Tariff Optimization / Rate Switch Analysis**

Defensible AI claim: 24-month usage profile analysis against available tariff schedules, with rate switch recommendations and projected savings calculations. Arcadia does this at 500K+ meter scale as a data pipeline function. Energy Toolbase does this as analyst tooling (Phil Combs' named alternative). Clear Current's differentiation is doing it within a chat interface — allowing an analyst to query "which tariff is more beneficial based on our last 24 months" in natural language rather than building an Excel model.

The Phil Combs adoption test applies most directly here: this is the module that has to beat his Excel pivot table. The AI claim is: "natural language query against your own billing history, returning the same analysis a skilled analyst would build in Excel, in under 60 seconds."

**Module 5: Campus Chargeback Intelligence**

Defensible AI claim: This is primarily logic engineering, not ML. The AI contribution is: (a) automated extraction of cost allocation inputs from bill data; (b) application of district energy cost allocation formulas across multiple commodities; (c) ERP-ready export formatting. The "intelligence" is in automating a workflow that EnergyCAP's users describe as requiring manual interpretation ("hard to understand"). The competitive gap is not AI sophistication — it is that no AI-native competitor has built the underlying district energy cost allocation logic at all.

Do not over-AI-claim this module. Position it as "the workflow EnergyCAP makes you do manually, automated" — which is accurate and defensible.

---

### Investor Narrative — AI Capability Framing

For the May 2026 fundraise, the AI capability claims should be organized in a three-tier credibility structure:

**Tier 1 (Proven by independent evidence):** Statistical anomaly detection on utility invoices. The billing error problem is documented by FERC, RI PUC, and Harvard Law — not by Clear Current. The AI solution to that problem is ML-based pattern recognition against a historical invoice baseline. This is deployable with current technology and does not require novel AI research.

**Tier 2 (Market-validated gap, no competitor):** PUC regulatory monitoring with LLM-based summarization. This is confirmed white space. The LLM summarization use case is well-established. The competitive differentiation is data sourcing (PUC docket monitoring) and domain-specific output templates (budget impact format), not novel AI capability.

**Tier 3 (Product hypothesis, demand to be demonstrated):** Natural language chat interface for energy management queries. This is the most technically sophisticated claim and the least validated by existing market demand. Frame it to investors as: "We are building the interaction paradigm the market has not yet asked for but that our user research suggests energy analysts want — the ability to query their utility data the way they query an expert colleague." Do not claim this is a proven buyer preference. It is a product conviction.

---

## 6. WHAT THE RESEARCH PROVES vs. WHAT IT MERELY CLAIMS

### Proven by Cited Independent Evidence

| Claim                                                                                      | What It Is Proven By                                                                                                                                        |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Commercial energy buyers are predominantly reactive                                        | Phil Combs (primary); Don Johnson (primary); EnergyCAP SoU 2026 survey (vendor, but directionally consistent)                                               |
| Billing errors at institutional scale are documented in government enforcement records     | FERC action (FirstEnergy, $108M); RI PUC proceeding (83% exception pass-through) — both regulatory proceedings, not vendor claims                           |
| EnergyCAP requires a separate OCR tool and integration for bill ingestion                  | Parsepoint comparison guide, cited in Compass Thread 3                                                                                                      |
| Arcadia has zero documented higher education customers after 14 months of enterprise sales | Arcadia's own customer list (Cox, Arconic, Iron Mountain, Adobe, Intuit, UPS) — absence of evidence is the evidence; Synthesis Brief Section 07             |
| Arcadia's Senior PM role is primarily managing legacy platform migration                   | Job postings cited in Synthesis Brief Section 07                                                                                                            |
| Cox Enterprises built its own dashboard on top of Arcadia's data                           | Cox Enterprises customer behavior described in Synthesis Brief Section 07 — attributed quote                                                                |
| PUC rate case timelines create a documented budget impact gap for universities             | Ohio PUC 275-day statutory timeline; PPL PA rate case Oct 2025/July 1 2026 final decision; Boston University March budget lock (Synthesis Brief, Finding 4) |
| Cass acquired AcuAudit in Q4 2024                                                          | Cass 10-K filings (SEC), cited in Compass Thread 4 — publicly verifiable                                                                                    |
| EnergyCAP's campus chargeback is its most complained-about feature                         | G2/Capterra user reviews (132 reviews); Texas State primary interview corroboration (Synthesis Brief)                                                       |

### Analytical Assertions (Directionally Supported, Not Independently Proven)

| Claim                                                                                          | What It Actually Is                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| "Arcadia cannot build campus chargeback without rebuilding from scratch"                       | Analytical inference from product architecture observation; no Arcadia engineer has confirmed this                                                                                               |
| "All 15 leading EMS vendors actively incorporating AI" (Verdantix 2023)                        | Verdantix is a research firm, but the methodology, sample, and definition of "AI" are not provided; "incorporating AI" is undefined                                                              |
| The 12–24 month competitive window before Arcadia can respond                                  | Analytical estimate based on migration job postings and organizational attention argument; Arcadia's capital position ($649M) means they can hire their way out faster than this estimate allows |
| "76% of organizations increasing SaaS security budgets"                                        | Cited in Synthesis Brief's IT security gap update with no source attribution — cannot evaluate                                                                                                   |
| UtiliSave's 94% audit-hit rate is "the most credible published figure" for billing error rates | This is Compass Thread 5's own editorial judgment — reasonable but it remains a vendor-marketed statistic                                                                                        |
| Clear Current's chat interface is a "genuine structural differentiation"                       | True that no competitor has it; not proven that buyers want it. These are different claims.                                                                                                      |

### Claims That Should Not Be Used

| Claim                                                               | Why                                                                                                                                                                 |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "80% of commercial customers are overpaying on energy bills"        | Compass Thread 5 explicitly identifies source as "OEO/National Utilities Refund: self-serving contingency marketing"; Synthesis Brief also flagged this as unusable |
| "50% of hospital budget goes to energy"                             | Compass Thread 5 corrects this: "~50% of the _facilities-department budget_, not organization-wide" — the misquotation is documented                                |
| Specific AI accuracy rates for anomaly detection                    | No accuracy data exists in either document for any system. Publishing a claim without a benchmark invites disproof.                                                 |
| "Verdantix confirms AI works better than traditional tools for EMS" | Verdantix 2023 confirms AI _adoption_, not AI _performance_. Different claim.                                                                                       |

---

## 7. GAPS AND OPEN QUESTIONS

### Gap 1: No Published Accuracy Benchmarks for Commercial Energy Anomaly Detection — From Any Vendor

Neither document contains any published accuracy metric (precision, recall, F1) for anomaly detection in commercial utility billing. EnergyCAP, Arcadia, Schneider Electric, ENGIE Impact — none publish these numbers. This is either because: (a) the numbers are proprietary; (b) performance is not measured rigorously; or (c) "anomaly detection" is implemented as rules-based threshold alerts that don't have traditional ML accuracy metrics.

**Why this matters for Clear Current:** When an investor or enterprise customer asks "how accurate is your anomaly detection, and what's your false positive rate?" — neither document provides competitive context. Clear Current cannot benchmark against competitors because competitors haven't published benchmarks. This is an opportunity to define the standard. But it means Clear Current needs its own internal accuracy data from the pilot customers before the May raise.

### Gap 2: "Watts AI" — EnergyCAP's AI Product — Has No Documented Capability Detail

EnergyCAP launched "Watts AI" (named in Compass Thread 4) but neither document describes what it does, when it launched, which customer tiers have access, or how it performs. This is a significant intelligence gap. If Watts AI is a functional anomaly detection product with 2,100+ organizations as a training corpus, it changes the competitive displacement narrative meaningfully. If it is a GPT wrapper on the help documentation, it doesn't.

**How to close:** Review EnergyCAP's product documentation and any conference presentation on Watts AI. This can be done with secondary research and does not require primary interviews.

### Gap 3: No Primary Evidence for Natural Language Chat as a Desired Energy Management Interface

The Chat/React tier of Dan's product model is the most innovative product bet in the architecture. It has no primary interview support — no interviewee asked for a chat interface. Phil Combs is the closest: his "well-structured Excel workbook" framing suggests he interacts with his data analytically and would benefit from conversational query. But he didn't ask for chat; he described a high bar for any interface.

**Why this matters:** Investors familiar with enterprise SaaS will ask whether buyers have expressed demand for natural language interfaces or whether Clear Current is building supply ahead of demand. The honest answer from this research corpus is: the latter. That is not disqualifying — many transformative products do this — but it requires a different framing. Frame the chat interface as a retention and engagement feature (it keeps sophisticated analysts in the tool rather than exporting to Excel) rather than as a primary acquisition argument.

### Gap 4: No Technology Architecture Documentation for How Clear Current's AI Actually Works

Neither document describes Clear Current's actual AI implementation. For the investor narrative, this is a critical gap that the research team correctly cannot fill — it requires information from Dan Schreiber directly (Synthesis Brief, Ask 3: Platform Access). Specifically: what is the underlying model architecture? How is billing data structured for anomaly detection? What is the training dataset? How is the regulatory monitoring system implemented?

**Why this matters for my deliverable:** I can describe what the AI should do based on the problem it is solving. I cannot confirm whether Clear Current's current implementation actually does it. The most important AI capability claim in investor materials — "our ML model detects billing errors that rules-based systems miss" — requires a working model and some validation data to support it. That validation needs to come from the pilot.

### Gap 5: What Exactly Schneider's "Sera" Agentic AI Does at Customer Sites

Compass Thread 4 mentions Sera but provides no operational detail beyond "agentic AI" and the 39M bills/year scale claim. If Sera is doing what the "agentic" label implies — taking autonomous actions on behalf of energy managers — it is the most operationally advanced AI deployment in the market. If it is doing automated report generation with "agentic" as a marketing label, it is not a threat. The research does not distinguish between these.

### Gap 6: Energy Toolbase's AI Capabilities and Competitive Position

Phil Combs named Energy Toolbase as the relevant competitor for tariff analysis. The Synthesis Brief lists it in the tariff optimization module as a competitive reference. Neither document provides any product detail, pricing, customer count, or technology architecture for Energy Toolbase. Given that it is the primary named competitor for one of Clear Current's five proposed modules, this is a notable gap.

### Gap 7: The Realized Error Recovery Number — Which Is Also a Technology Validation Problem

Marc Spieler's question — whether any utility has actually issued a refund based on Clear Current's audit work — is documented as the highest-priority open item in the Synthesis Brief (Finding 7; Gap table). From a technology perspective, this is the validation question for the Billing Error Audit Engine. AI that identifies billing errors on paper is not the same as AI that produces actionable findings that utilities credit. The gap between "identified" and "recovered" is partly a workflow question and partly a model accuracy question. A single documented recovery case closes both gaps simultaneously.

---

_Felix Werner | Energy Technology & Product Landscape Analyst_
_April 2026 | Clear Current Technologies engagement_

_All findings cited to source documents as specified. Claims without citation chains flagged accordingly. Statistics rated by confidence tier based on source quality, citation chain completeness, and potential for incentive bias in originating source. This analysis is intended for investor and product decision-making use and should be reviewed against original source documents before publication in external materials._

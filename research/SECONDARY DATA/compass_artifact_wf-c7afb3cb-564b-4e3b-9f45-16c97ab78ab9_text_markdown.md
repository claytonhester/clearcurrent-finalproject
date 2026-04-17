# Six-thread research brief for Clear Current Technologies

**Prepared:** April 16, 2026 | **Deliverables due:** April 20, 2026
**Purpose:** Fill intelligence gaps for Engagement Trigger Map, Seasonal Energy Management Calendar, User Journey Maps, Opportunity Heatmap, and Product Module Recommendations.

**Note on execution:** Three of six subagent threads (1, 2, 4, 5) completed successfully; Threads 3 and 6 experienced infrastructure errors during subagent delegation. Thread 3 (switching/churn) was compiled from direct search results and triangulated from Thread 1's competitive data; Thread 6 (LL97/BPS calendar) was completed via direct web research. All findings below include source citations and source-quality flags.

---

## Thread 1 — Corporate multi-site energy manager persona

### Key findings

**Role ownership is fragmented; a dedicated "Energy Manager" title is rare below 500 sites.** In 100–500 location organizations, utility bill ownership splits across **AP/Finance (pays the bill), VP of Operations or Director of Facilities (handles exceptions), and an outsourced bill-audit vendor** (ENGIE Impact, UtiliSave, Cass, SpyGlass, Spring Global). Named Energy Manager roles exist at <30% of mid-market multi-site operators based on LinkedIn title prevalence. A qualified in-house energy manager commands **$120–160K base, ~$200K fully loaded** (GWT2Energy, serving Panda Express, Red Robin, Taco Bell) — which is why outsourcing is the default below ~1,000 units.

**Convenience retail archetype:** Wawa created a formal energy group only after **12–15% YoY utility cost increases for five consecutive years**; the lead was titled "Energy & Petroleum Operations Manager" (Scott Boorse), not Energy Manager. Hotels at enterprise scale (Marriott, Hilton) run a **split model**: corporate VP of Global ESG sets targets; each property's Director of Property Operations/Engineering is accountable on kBTU/m² and CO₂e. Hilton has LightStay (ISO 50001-certified across 6,700+ hotels).

**Workflow:** A 200-site operator processes **400–1,000+ monthly utility invoices** across electric, gas, water, sewer, trash, telecom. Manual invoice entry consumes **~60% of AP staff time**; centralized automation cuts approval cycles from **20.8 days to 2–3 days** (Facilio). ENGIE Impact reports **~17% of utility invoices contain an exception or error**; UtiliSave's audit-hit rate is **94%** (16,000+ properties audited; $650M refunds recovered since 1991). EnergyCAP markets that **1 in 5 bills contain errors** and that 98% of users take monthly action on flagged bills, yielding ~7.5% YoY cost savings (vendor-attested).

**Tool landscape by tier:** EnergyCAP dominates government/education/healthcare/mid-market corporate, priced ~$2,600/yr (100 meters) to $9,000–$50K+/yr at portfolio scale; implementation $5K–$100K+. WatchWire leads REITs, retail/franchise, PE, data centers (~$100/mo entry). ENGIE Impact is the enterprise outsourced standard. Cass Information Systems dominates AP-centric retail/QSR. **Spreadsheets remain the default for 100–300 location operators that haven't adopted a platform — Clear Current's sweet spot.**

**Procurement thresholds:** Director $5–10K; VP/Sr. Director $25–50K; CFO $50–100K+; Board/multi-year >$250K. **Most energy SaaS deals for 100–500 sites land in the $15–75K ARR range** (EnergyCAP Enterprise starts $9K/250 meters; a 300-site operator with 600–900 meters lands $25–50K). This puts decisions at VP/Director level with CFO sign-off — not board.

**Top buying triggers (ranked by case-study frequency):** (1) **double-digit utility rate shock** — Wawa's 12–15% YoY trigger is the canonical example; (2) **M&A/portfolio chaos** where acquired sites' utility accounts are invisible; (3) **ESG/climate disclosure mandates** (California SB 253, CSRD, CDP) demanding audit-grade Scope 2 data; (4) **new sustainability or CEM hire** (software typically purchased within first 90 days); (5) **discovered billing error or fraud incident**; (6) **BPS compliance mandates** (LL97, BERDO, DC BEPS); (7) **CFO cost-pressure initiative** when utilities become the 2nd–4th largest controllable expense.

**FTE benchmarks:** IFMA North America cites **1 maintenance FTE per ~47,000 RSF** (general O&M, not energy-specific). Dedicated energy FTEs at 100–500 location operators are typically **0–1 internal**; effective locations-per-energy-FTE ratio is **200–500:1** or fully outsourced. GWT2Energy benchmarks suggest an in-house energy team is justified only at **1,000+ corporate-owned locations** (3–4 person team).

**Sources:** AEE 2015 Jobs Report; Hilton CDP 2023; Wawa/CSTORE Decisions; UtiliSave; ENGIE Impact; Facilio; EnergyCAP pricing/marketing pages; IFMA O&M benchmarks; GWT2Energy; Tallyfy/Procurify/Moxo approval-matrix data.

**Source quality flags:** Wawa data is 2008-era. Approval thresholds synthesized across SaaS procurement vendor blogs (directional, not survey-validated). "7.5% savings" and "1M errors flagged" are EnergyCAP marketing claims, not independently verified. No authoritative survey publishes "energy FTE per 100 locations" for QSR/c-store.

### So what for Clear Current
The ICP is a **VP of Operations or Director of Facilities at a 150–400 location operator** (QSR, casual dining, c-store, fitness, small hotel groups) currently stitching together spreadsheets, AP clerks, and a legacy bill-audit consultant — below the ~1,000-unit threshold where a dedicated Energy Manager is justified. The three sharpest triggers — **double-digit rate shock, M&A-driven portfolio chaos, and new ESG/finance mandates** — push decisions into the **$15–75K ARR VP/CFO band**, below board scrutiny. Position against the *status quo* (spreadsheets + Cass/ENGIE/SpyGlass outsourcing) with a land wedge of "bill-shock prevention + GL-coded ERP-ready data" — not head-on against EnergyCAP in its entrenched government/education/healthcare base.

---

## Thread 2 — Vertical SaaS investor benchmarks (seed → Series A)

### Key findings

**NRR compressed meaningfully from 2021 peaks.** Median NRR across private B2B SaaS is now **101–104%** (Benchmarkit 2025, n≈900–1,600; Pavilion 2025), down from ~110% in 2021. By ACV tier: SMB (<$12K) ~100% median; mid-market ($25K–100K) **103–108%**; enterprise (>$100K) **110–115%**. Energize Capital benchmarks climate/energy software separately at **~130%+ NRR** at Series B (strong land-and-expand via multi-BU replication). Hybrid subscription+usage pricing delivers the best NRR in the 2025 dataset (110% median).

**GRR median is 88% across B2B SaaS; the Series A bar is 90%+, best-in-class 95%+.** For ACVs above $100K, median GRR reaches 90%+ with top-quartile 95%+. GRR below 85% is a documented red flag for Series A in vertical/enterprise SaaS. Proptech-specific benchmarks from MetaProp/Fifth Wall cite **92%+ annual logo retention** and **<8% annual churn** as Series A readiness thresholds.

**CAC payback has lengthened substantially.** All-company median jumped from 12–14 months historically to **18–20 months in 2024** (Benchmarkit, KeyBanc 15th Annual). At enterprise ACV (>$100K), median is **~24 months** and can exceed 30. The NRR-adjusted guidance (Kyle Poyar): <100% NRR → target <12mo; 100–120% NRR → 12–18mo acceptable; 150% NRR → 18–24mo acceptable. Magic Number median fell to 0.90 in 2024; New CAC Ratio median is $2.00 of S&M spent per $1 of new ARR.

**Series A ARR bar has risen to $1.5–2M median** for B2B SaaS in 2025 (some at $1M; crowded categories demanding $2–3M). Growth expectations: 2–3x YoY minimum; ICONIQ 2025 reports top-quartile $1–10M ARR companies grew 515% YoY (AI-skewed). Series B has reset from $3–5M pre-correction to **$5–8M ARR** today. **Energize Capital explicitly rejects T2D3/T3D3 for climate SaaS** — median climate Series B YoY growth is **~70%**, gross margins **60–80%** (not 80%+), but growth decay is <5% and capital efficiency is 8× better than public climate peers ($100M gross profit on $88M capital vs. $704M).

**LTV:CAC**: 3:1 minimum healthy; 2024 median 3.6:1; best-in-class 5:1+. Less diligenced at seed (too noisy); CAC payback + NRR + GRR combo preferred.

**Gross margins:** Target 75–80%+ subscription for traditional SaaS; **climate/energy SaaS accepted at 60–80%** with explicit justification (data integration, implementation services, hosting). Below 60% subscription GM triggers "is this really software?" concern. Services revenue median is 15% of total.

**Red flags** (cited repeatedly across 2025 diligence sources): customer concentration >10–15% from any single logo; services revenue bundled into ARR; CAC payback >18mo mid-market / >24mo enterprise; burn multiple >2.5x at Series A (median now 1.6x); GM below 70% total / 60% subscription; GRR <85%; NRR <100%; lengthening sales cycles without cohort improvement. **Green flags**: net-negative churn, multi-year auto-renewal contracts, 3–5 referenceable enterprise logos pre-A, burn multiple <1.5x, hybrid pricing, clean ARR bridge.

**Sources:** Bessemer Cloud 100 Benchmarks 2024 (no "State of the Cloud 2025/2026" published); ICONIQ State of Software 2025; SaaS Capital 2023/2025; Benchmarkit 2025; KeyBanc 15th Annual; High Alpha 2025 (OpenView-successor dataset, n=800+); Energize Capital "10 Ways to Win in Climate Software"; MetaProp/Fifth Wall; CFO Advisors 2025.

**Flags:** Energize's climate benchmarks are ~3 years old but still authoritative. ICONIQ's 515% top-quartile growth is AI-skewed — traditional top-quartile is closer to 150–200%. Proptech numbers from Qubit/Ellty are database-derived, not primary publications.

### So what for Clear Current
Clear Current should privately target **$500K–$1M ARR, 3–5 referenceable enterprise logos, 90%+ GRR, 110%+ trending NRR, and burn multiple <1.5x** to credibly reach Series A in 12–18 months at the $1.5–2M median bar — but pitch against the **Energize climate-SaaS benchmark set** (70% YoY growth, 60–80% GM, <5% growth decay), not T2D3. The highest-leverage metrics to overperform on are **NRR (target 115%+), CAC Payback (<18mo despite enterprise ACVs), and GRR (95%+)** — these three drive the most variance in 2025 Series A valuations. Preempt the three deal-killers: **no customer >15% of ARR, zero services revenue bundled into ARR, subscription GM above 60%**.

---

## Thread 3 — Churn, switching costs, and competitive displacement

### Key findings

**EnergyCAP ownership context (critical for trigger mapping):** Founded 1980 (FASER); acquired by Enron 1996; repurchased post-bankruptcy; renamed EnergyCAP in 2010. **Resurgens Technology Partners took a strategic equity investment in March 2021** (not "Resolute" — this was a common misattribution; Resolute Capital Partners is an unrelated Nashville PE firm). Resurgens' explicit thesis includes **"execute acquisitions to expand product breadth"** — meaning EnergyCAP is an active roll-up platform, creating integration disruption opportunities for challengers. EnergyCAP reports 2,100+ organizations and 10,000+ energy managers, claims "top-decile customer satisfaction and retention."

**Switching friction is high but manageable.** Primary costs: (1) **historical utility bill data migration** (often 3–5 years of meter-level bills); (2) meter inventory re-mapping; (3) retraining of Facilities + AP users; (4) re-integration with ERP (NetSuite, SAP, Oracle, Sage Intacct) and ESG/carbon platforms (Persefoni, Watershed, Workiva Envizi); (5) multi-year auto-renewal contract terms.

**Published churn/NRR data is sparse** — none of EnergyCAP, Gridium, WatchWire, Tango, or Brightly publish specific retention metrics. Triangulation: Capterra gives EnergyCAP 4.7/132 reviews, WatchWire 4.8/16 reviews — high satisfaction consistent with EnergyCAP's "top-decile retention" claim. Implied annual logo retention across category likely sits in the **90–95% band** for enterprise/mid-market energy SaaS, consistent with MetaProp/Fifth Wall proptech norms.

**Contract terms:** Multi-year is standard. EnergyCAP pricing model is **per meter-year** (~$40–52/meter); WatchWire uses per-account/per-meter with enterprise custom; Gridium roughly **$5,000–$6,000 per facility/year**; EnergyCAP base deployments start ~$5K/yr and scale to $50K+ for large portfolios. Implementation is a separate $5K–$100K+ one-time fee.

**Switch triggers:**
1. **PE-driven price escalation post-acquisition.** Resurgens' roll-up thesis at EnergyCAP creates predictable pricing pressure at renewal — a standard PE SaaS playbook.
2. **Version EOL / forced cloud migration.** EnergyCAP's transition from legacy on-prem (EnergyCAP 7) to cloud UtilityManagement created re-implementation pain for a portion of the base.
3. **Feature gaps in AI/billing error detection.** Parsepoint explicitly notes EnergyCAP lacks built-in OCR — "teams either enter data manually or purchase a separate OCR tool and build an integration."
4. **Personnel change** (new energy manager or CFO with a preferred tool).
5. **Mid-market mismatch.** Parsepoint: "For teams managing 10 to 50 sites, the cost-per-location math often doesn't work. EnergyCap's value proposition is built around large portfolios where the per-site cost is absorbed across hundreds or thousands of locations."

**Winning displacement pitch vs. EnergyCAP specifically:** (a) AI-native billing-error detection built in, not bolted on; (b) cloud-native architecture without legacy migration baggage; (c) shorter implementation than "months before teams see value"; (d) pricing that works for 100–400 sites rather than 1,000+. Competitors on G2/Capterra most frequently positioned as alternatives: WatchWire, Measurabl, Spacewell Energy, Energy Elephant, Brightly Energy Manager, Facilio.

**Sources:** EnergyCAP Wikipedia; Resurgens Tech Partners portfolio page; G2; Capterra; SourceForge; Parsepoint comparison guide; Software Equity Group transaction advisor announcement.

**Flags:** No public NRR/GRR for energy SaaS vendors — triangulated from review counts, vendor claims, and category norms. "Resolute" reference in the task brief was incorrect — **Resurgens** is the correct investor.

### So what for Clear Current
The displacement motion against EnergyCAP is strongest at **100–400 site mid-market operators** where EnergyCAP's per-meter pricing math breaks down, its lack of native OCR forces bolt-on spend, and Resurgens' roll-up/re-pricing thesis creates renewal-window openings. Position on three wedges: **(1) AI-native billing-error detection replaces the EnergyCAP + separate OCR + audit-consultant stack; (2) cloud-native shortens implementation from "months" to weeks; (3) transparent all-in pricing under $75K ARR versus opaque per-meter escalators.** The highest-probability switch window is **12–18 months after a PE re-pricing event or forced cloud migration** — build a renewal-cohort monitoring capability into demand generation.

---

## Thread 4 — NG Insight / ENGIE Impact and the bill-pay ecosystem

### Key findings

**"NG Insight" is almost certainly a misreference to ENGIE Insight (now ENGIE Impact, formerly Ecova).** Two unrelated entities use similar naming: (1) **Northrop Grumman "NG InSight"** — defense/C5ISR product line, irrelevant; (2) **ENGIE Insight / ENGIE Impact** — the utility-bill-management business. The latter is the only plausible target for Clear Current's market mapping.

**ENGIE Impact profile:** Acquired by GDF SUEZ (now ENGIE) from Avista in 2014 for **$335M**. At acquisition: 700,000+ client sites, 1,450 employees, $20B in utility expenses managed, ~$180M 2013 revenue. By 2018 rebrand: 900+ multi-site clients, $3.2B claimed savings delivered over 5 years, **25%+ of Fortune 500 as customers**. 1,000+ employees at Spokane HQ. Divested utility solutions (retrofits) to CLEAResult Q1 2018; retained software + managed services (Data Management/20/20 Platform, now ENGIE Ellipse). **Model:** full-service outsourced utility expense management — bill ingestion, audit, rate optimization, payment initiation, sustainability reporting.

**Major players in the bill-pay / utility expense management ecosystem:**

| Vendor | Position | Scale |
|---|---|---|
| **Cass Information Systems (CASS)** | Publicly traded; St. Louis; largest U.S. transport + facility/utility bill processor | **~$90B annual payments volume; ~50M invoices/yr; ~$130M TTM fee revenue; 1,027 FTE**; acquired AcuAudit Q4 2024; facility dollar volume ~$5–6B/qtr with **+23–26% YoY growth** in 2024 |
| **ENGIE Impact** | Enterprise outsourced (software + managed service) | 900+ multi-site clients; 25%+ F500 |
| **Schneider Electric EcoStruxure Resource Advisor/RA+** | Bundled with energy procurement; launched agentic AI "Sera" in 2025 | **Processes 39M+ utility bills/year**; ~400 AI professionals globally |
| **Arcadia (Arc platform, acquired Urjanet May 2022)** | Largest utility data aggregator — not direct bill-pay but the dominant data-API layer | **>95% of US residential + commercial utility accounts**; 9,500+ utilities in 52 countries; Arcadia valued ~$1.45B |
| **EnergyCAP** | Utility accounting SaaS + Bill CAPture / Bill Pay / Vendor Mgmt Services | 2,100+ customers |
| **Vervantis** | Mid-market bill processing for C&I | 1M+ invoices/yr; $3B+ managed |
| **RealPage Utility Management** | Multifamily-focused | 2.2M+ submetered devices across 4,000+ properties |
| **Yardi Energy Suite** | Bundled with Voyager property mgmt | Multifamily/CRE |
| **Paymentus (PAY)** | B2C utility payment platform | 20+ years in utility; 450+ integrations |

Additional niche players: Cost Control Associates, UMC Solutions (EnergyCAP dealer), Commercial Water & Energy, Spring Global, SpyGlass Group.

**Market size** (wide variance; source methodologies differ):
- Market Research Future: **$2.89B (2024) → $6.86B (2035), 8.18% CAGR**
- Zion Market Research: $5.83B (2023) → $12.41B (2032), 7.8% CAGR
- Verified Market Reports: $1.2B (2024) → $2.5B (2033), 8.9% CAGR
- Research and Markets: $4.49B (2025) → $6.43B (2031), 6.17% CAGR

North America holds ~38% share. **Treat these as directional ranges, not authoritative.**

**Key 2024–26 trends:** AI-integrated bill audit (Schneider RA+, EnergyCAP Watts AI, Vervantis, Oracle Opower); carbon/ESG reporting as primary demand driver; consolidation (Arcadia/Urjanet 2022, Cass/AcuAudit 2024); post-American Water Works ransomware (Oct 2024, 14M customers, 6-week disruption) raising cybersecurity concerns; smart-meter rollouts driving data volumes.

**Integration path for Clear Current:** Three options:
1. **Channel partner layer** on top of Cass/ENGIE/Schneider (they provide bill-pay transaction processing; Clear Current provides AI error detection)
2. **Direct competitor to audit function** within bill-pay bundles (riskier, longer sales cycle)
3. **API/data partner** to bill-pay vendors who lack AI

**Sources:** Cass 10-K filings (SEC); ENGIE press releases; Arcadia/Axios; Verdantix; market research firms.

### So what for Clear Current
The likely "NG Insight" reference is **ENGIE Impact** — a **potential channel partner, not a pure competitor**, since their model is full-service outsourcing where AI billing-error detection would strengthen their audit economics. The cleanest GTM pattern is a **hybrid: compete directly at mid-market 100–400 site operators currently using spreadsheets or EnergyCAP, while pursuing API/data-partnership with Cass (50M invoices/yr) and Schneider (39M bills/yr)** — both are bill-pay aggregators whose audit layers are still largely rules-based and would value AI anomaly detection. Avoid ENGIE Impact and Cass as direct replacements; their enterprise customer relationships are too sticky — instead, integrate under them for the top 25% of F500 logos while winning the mid-market directly.

---

## Thread 5 — Healthcare energy management

### Key findings

**Spend & intensity benchmarks:**
- **U.S. hospital aggregate energy spend: ~$8.3B/year** (DOE); broader healthcare sector 4.1B sq ft spends **>$5B/year** on energy (DOE Better Buildings).
- **Energy = 1–3% of hospital operating budget**; an estimated **15%+ of profit margin** (DOE Better Buildings). The widely-misquoted "50% of budget" figure is actually ~**50% of the facilities-department budget**, not organization-wide (ASHE/HFM Magazine).
- **Per-bed**: ~$10,900–$13,611/year electricity+gas (E SOURCE/DOE/EIA).
- **Per square foot**: ~**$2.84/sf electricity + $0.94/sf gas ≈ $3.78/sf** (DOE/E SOURCE, 2003 CBECS basis — likely conservative today).
- **Order-of-magnitude 100-facility health system spend**: $3.78/sf × 100 facilities × ~300K sf avg ≈ **$110M/year** — fits HCA, CommonSpirit, Ascension, Providence profiles.

**Energy intensity (ENERGY STAR Portfolio Manager, Aug 2024 national median table):** General Medical/Surgical Hospital **site EUI 234.3 kBtu/sf, source EUI 426.9**; Medical Office 97.7 site / 232.8 source; Office 52.9 site / 116.4 source. **Hospitals use ~2.5–3× the energy intensity of commercial offices.** Older DataTrends data (n=4,939) showed hospital median source EUI 467, range <100 to >1,400.

**Ownership:** Default is **Facilities/Engineering (Director → VP Facilities → COO or Chief Facilities Officer)**. Exemplars: HCA runs facility mgmt via HealthTrust Supply Chain; Ascension via wholly-owned Medxcel Facilities Management; UPMC has a centralized Energy Management & Engineering Department. **Kaiser Permanente has a Chief Energy Officer + Executive Director of Environmental Stewardship — best-in-class, not typical.** Parkland (Dallas) hired a dedicated in-house energy manager in 2021 for ENERGY STAR certification. Practice Greenhealth 2023 benchmark: **~66% of respondents have appointed someone to lead sustainability at the facility level**; ~90% of top-performing institutions have an executive-level sustainability champion.

**Regulatory/accreditation drivers:**
- **Joint Commission Environment of Care standards**: EC.02.05.01 (utility systems) accounts for ~28% of all EC findings per OXMaint analysis; >65% of 2025-surveyed hospitals received EC citations (flag: vendor-sourced stat).
- **CMS Conditions of Participation §482.41**: Physical environment compliance tied to Medicare reimbursement — the biggest regulatory stick.
- **HHS Health Sector Climate Pledge** (launched Earth Day 2022): voluntary but reputationally significant; **143 organizations/960 hospitals signed by Nov 2024**; with federal (VHA, IHS, MHS) >1,200 hospitals (~19% of U.S. hospitals). Targets: 50% Scope 1+2 reduction by 2030, net zero 2050, Scope 3 inventory by end 2024. After 2025 federal admin change, Health Care Without Harm relaunched the **Health Sector CARES Pledge** to preserve the commitment pathway.
- **NYC LL97**: Hospitals NOT exempt. Nonprofits get an **Article 321 adjustment** (limit = 85% of 2018 emissions for 2024–2029; 70% for 2030–2034); adjustment applications closed **January 1, 2025**. Envigilance estimates a 200,000 sf hospital exceeding 2030 limit by ~1,100 tons could face **~$295K/year** in penalties.
- **California SB 253/261** (effective 2026 for large entities): pulls in large health systems with CA operations (Kaiser, Sutter, Providence, CommonSpirit/Dignity) for Scope 1/2/3 reporting.

**Tools:** **Brightly (Siemens, formerly Dude Solutions)** dominates healthcare CMMS — built-in ICRA/PCRA/ISLM workflows, Joint Commission compliance binder, 12,000+ clients, $321B in assets managed. **EnergyCAP** explicitly markets a healthcare vertical ($5K entry → $50K+ portfolios); emphasizes the "finance-facilities divide." Nuvolo (ServiceNow-based) for medical equipment/EAM. Accruent for space/lease. FM:Systems, Archibus as IWMS generalists. **Spreadsheets + contingency-fee bill-audit firms (UtiliSave, ENGIE Impact, OEO, Honeydew, Emergent) remain dominant outside the top-50 systems.** Energy analytics / AI-driven optimization is a white space.

**Billing error/overpay benchmarks** (all vendor-marketed; flag heavily):
- UtiliSave (16,000+ properties audited): **overcharges for large institutions average 2.5–10%** of spend; **93% hit rate** on finding mistakes — most credible published figure.
- EnergyPrint: "~17% of utility invoices contain an error."
- OEO/National Utilities Refund: "80% of commercial invoices contain errors" — self-serving contingency marketing.
- Emergent Energy: "5–15% overpayment."
- **Implied healthcare overpay pool: $8.3B × 3% = ~$250M/yr recoverable; at 5% = ~$415M/yr.**

**Pain points specific to hospital billing:** multi-commodity complexity (electric/gas/fuel oil/steam/chilled water/water-sewer/medical gases); 24/7 demand charges ratcheted by ICU/OR/ER load (demand charges = 30–70% of commercial electric bills per Inertia Resources); tenant chargeback to physician MOBs; rate-schedule mismatches; frequent sales-tax/franchise-fee exemption errors on nonprofit accounts.

**Market size:** Verdantix: global smart-buildings software market **$6.9B (2022)**. Space/workplace software $1.1B (2022) → $2.1B (2027), 15% CAGR. Healthcare is a top-3 buyer vertical. **Narrow U.S. hospital energy/utility SaaS TAM: ~$60–300M/yr** (~6,000 hospitals × $10–50K ACV), expanding to **~$500M+** bundled with ambulatory/MOB/compliance modules.

**Sources:** ENERGY STAR Portfolio Manager PDF; DOE Better Buildings; ASHE; Practice Greenhealth; HHS OCCHE; Joint Commission; Brightly; EnergyCAP healthcare page; Verdantix; UtiliSave.

### So what for Clear Current
Healthcare is **accessible but contested**: the pain is large and quantifiable (**~$8.3B U.S. hospital energy spend; 1–3% of operating budget; 2.5–10% overpay on large-institution bills; 30–40% EUI gap between median and top quartile hospitals**), and regulatory tailwinds are strong (960+ HHS Pledge hospitals, LL97 at $268/ton, Joint Commission EC.02.05 creating a compliance spine) — but Brightly/Siemens, EnergyCAP, and Nuvolo are entrenched. **ICP**: mid-to-large systems (20–200 facilities, $30–200M energy spend) that (a) signed HHS/CARES Pledge or operate in a BPS jurisdiction, (b) have a sustainability exec + facilities director, and (c) have fragmented utility data across legacy systems — **CommonSpirit, Providence, Advocate Health, NYU Langone, Mass General Brigham** rather than Kaiser (too mature) or small community hospitals (budget-constrained). The dollarized pitch is straightforward: sq ft × $3.78/sf × (3% billing-error recovery + EUI-gap consumption savings) → $2–10M/year identifiable per mid-size system, plus avoided LL97-style penalties — but expect **12–24 month sales cycles** and incumbent displacement as the real challenge.

---

## Thread 6 — NYC LL97 and CRE energy compliance calendar 2025–2026

### Key findings

**NYC LL97 exact deadlines and penalties:**

| Date | Obligation |
|---|---|
| **May 1, 2025** | First LL97 compliance report due (for CY2024 emissions) — registered design professional-certified |
| **June 30, 2025** | 60-day grace period end — unpenalized filing window |
| **Aug 29, 2025** | Extension application deadline ($60 fee) |
| **Dec 31, 2025** | Extended filing deadline for those granted extension |
| **May 1, 2026** | CY2025 LL97 report due |
| **June 30, 2026** | 60-day grace period end for CY2025 report |
| **Aug 29, 2026** | Extension deadline for CY2025 report |
| **May 1, 2027** | First LL97 report due for buildings with 1 to <35% rent-regulated units |
| **May 1, 2036** | First LL97 report due for specific rent-regulated housing pathways |
| **2030–2034** | Stricter emissions caps (70% of 2018 baseline for nonprofit hospitals) |
| **2050** | Net-zero requirement |

**Fine escalation:**
- **Emissions exceedance: $268/metric ton CO₂e over limit per year** (Class 2 violation)
- **Late filing: $0.50/sf/month** (applies even during grace period if filing later)
- **Failure to file: $10,000 plus additional $10,000 for non-compliance**
- **False filing: up to $500,000 and/or imprisonment**
- **Extension fee: $60** via BEAM Portal

**Coverage:** Approximately **50,000 buildings** covered (buildings >25,000 sf, or multiple buildings on same tax lot totaling >50,000 sf). Buildings account for **~70% of NYC GHG emissions**. In the first 2024 compliance period, roughly **70% of covered buildings are projected to comply without action**; ~25–30% require intervention. Article 321 pathway covers affordable housing and houses of worship with prescriptive ECM options.

**LL84 (benchmarking, annual) and LL88 (lighting/submetering) run alongside LL97.** LL84 annual due May 1; missing = $500/quarter up to $2,000/yr. LL88: $1,500/yr for missing reports, $500 per non-compliant tenant space. LL87 (energy audits every 10 years for >50K sf): $3,000 starting penalty.

**Utility billing data feeds LL97 via ENERGY STAR Portfolio Manager** (via LL84 benchmarking) → certified RDP report → DOB BEAM portal. Data accuracy failures expose owners to the $500K false-filing penalty. **Tenant cost pass-throughs** are contractually negotiated; tenants are responsible for 50–70% of building energy use but landlords own the obligation.

**Other major BPS and CRE reporting deadlines 2025–2026:**

| Jurisdiction | Key 2025–26 Deadline | Penalty |
|---|---|---|
| **GRESB 2026** | Submission **July 1, 2026 (23:59 PDT)**; prelim results Sept 1; final Oct 1 | Score impact only (competitive) |
| **Boston BERDO 2.0** | 2025 emissions compliance began; **Aug 15, 2026 extended reporting deadline**; five-year verification cycles 2026/2031/2036/2041 | $234/MT over limit; $1,000/day for >35K sf non-compliant; $300/day reporting violation (large) / $150/day (small); $1,000–$5,000 for unresolved discrepancies |
| **Washington DC BEPS** | First compliance cycle ends 2026 | Up to **$10/sf** gross floor area — **$1M exposure for 100,000 sf building** |
| **Denver Energize Denver** | Annual benchmarking June 1; 30% reduction target by 2030 | **$0.30/kBtu** over threshold |
| **Washington State Clean Buildings** | **June 1, 2026: Tier 1 compliance deadline** (>50,000 sf commercial) | Up to $5,000 + $1/sf/yr |
| **Oregon statewide BPS** | Benchmarking began Jan 2025; compliance 2028–2030 | Up to $0.85/sf early-adopter incentive |
| **Maryland BEPS (Climate Solutions Now Act)** | 2025 benchmarking began; **June 1, 2026 third-party verification of 2025 data**; 2030 compliance | **$230/MT CO₂e** |
| **Chicago Energy Benchmarking** | Annual reporting | Fines per ordinance |
| **Seattle BEPS** | Active | GHG-based, tiered |
| **Philadelphia Building Tune-Ups** | Annual benchmarking + periodic audits | **$300/day late** |
| **Montgomery County MD BEPS** | Active | Tiered |
| **St. Louis BEPS** | Active | Tiered |
| **California AB 802** | Annual benchmarking June 1 (>50K sf) | Enforcement via Energy Commission |
| **California SB 253/261** | **Effective 2026** for large entities — Scope 1/2/3 reporting | SEC-like attestation required |
| **SEC Climate Disclosure Rule** | **Stayed / effectively dormant as of April 2026** | TBD |
| **CDP** | July–August annual submission | Scoring only |

**40+ U.S. cities will have active BPS by end of 2026 (JLL research), up from 13 in early 2024.** JLL reports **penalties increase an average of 82% between first and second compliance periods**.

**How CRE managers are preparing:** Most use ENERGY STAR Portfolio Manager for LL84/benchmarking baseline. Tool gaps: jurisdiction-specific metric conversions (GHG-based for NYC/Boston/Seattle/Chicago vs. EUI-based for Denver/Philadelphia/DC/Washington State) require separate tracking unless using a multi-BPS platform. Retro-commissioning agents and RDPs (Bright Power, ERS, Steven Winter Associates, Cozen O'Connor) are dominant compliance consultants. **Data quality is the binding constraint** — Boston BERDO program manager Aidan Callan: "Building owners have to be absolutely confident in the data that they're looking at if they're going to make well-informed decisions."

**Sources:** NYC Mayor's Office / NYC Accelerator; NYC DOB LL97 BEAM portal; Urban Green Council; Cozen O'Connor; Harris Beach Murtha; Phillips Lytle; Greenberg Traurig E2 Law Blog; NYC HPD LL97 FAQs (July 2025); RAND Engineering; CooperatorNews; Boston.gov BERDO; GRESB.com; GBCI.org; Envigilance BPS tracker; Environ Energy; Facilities Dive; JLL ESG & Risk.

**Source quality:** NYC primary sources (DOB, HPD, Mayor's Office, Urban Green Council) are authoritative. Envigilance/Environ Energy/Deepki/JLL citations are consistent but secondary. Boston BERDO details align across FirstService Residential, Facilities Dive, and Boston.gov.

### So what for Clear Current
The GTM calendar has three clear annual pressure windows: **Q1 (Jan–Mar) for LL97 RDP engagement and data gathering; Q2 (Apr–Jun) for filing season (LL97 May 1, LL84/LL88 May 1, California AB 802 June 1, WA State Clean Buildings June 1, MD verification June 1, GRESB submission late June)**; and **Q3 (Jul–Aug) for GRESB July 1 and extension deadlines**. Clear Current should time demand generation around **late-February through April** (the panic window when owners realize their utility data is unreliable) and again **June–July** for GRESB participants. Product-wise, **jurisdiction-specific conversion logic (GHG-based vs. EUI-based) and an audit-trail for LL97 RDP-certification defensibility are table-stakes module features** — the $500K false-filing penalty makes data-accuracy attestation a CFO-level value prop, not a facilities-level one.

---

## Cross-thread synthesis for the five deliverables

**Engagement Trigger Map (Thread 1 + 3 + 6):** The top-5 triggers ranked by recency and buying-intent signal strength are: (1) utility rate-shock event (double-digit YoY), (2) M&A/portfolio acquisition creating utility account chaos, (3) BPS filing panic window (Q1–Q2 annually), (4) EnergyCAP/incumbent post-acquisition renewal re-pricing, (5) new sustainability/CEM hire.

**Seasonal Energy Management Calendar (Thread 6):** Q1 planning/data-gathering; **Q2 filing crunch (May 1 LL97 + LL84, June 1 CA/WA/MD, July 1 GRESB)**; Q3 grace-period/extension handling + GRESB review; Q4 budget planning + ENERGY STAR recert.

**User Journey Maps (Threads 1 + 5):** Build 4–6 around (a) QSR/c-store VP Ops 200–400 units, (b) Director of Facilities casual dining 100–300 units, (c) Hotel Chief Engineer + corporate VP ESG split, (d) Health system Director of Facilities + Chief Sustainability Officer, (e) Optional: CRE asset manager in NYC/Boston/DC BPS jurisdiction.

**Opportunity Heatmap (Thread 2 + 5):** Healthcare TAM $60–500M narrow; Multi-site QSR/c-store biggest white space (spreadsheet-dominant); CRE in BPS jurisdictions has regulatory urgency but incumbent saturation (WatchWire, Measurabl).

**Product Module Recommendations (Threads 3 + 4 + 6):** (1) AI-native billing-error detection (wedge vs. EnergyCAP's missing OCR), (2) BPS-jurisdiction compliance module with GHG/EUI conversions, (3) ESG-ready Scope 2 data export (Persefoni, Watershed, Envizi connectors), (4) Cass/ENGIE Impact API integration to bolt on as an audit layer, (5) CFO-grade audit trail for LL97 $500K false-filing defense.
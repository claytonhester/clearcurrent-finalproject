# Arcadia Competitive Intelligence Report
**Prepared for: Clear Current Technologies**
**Date: April 2026**
**Classification: Internal Strategic Use**

***

## Executive Summary

Arcadia is the most well-funded AI-native competitor in the commercial energy data and enterprise energy management space, having raised approximately $649–658 million in total capital since 2014. With a January 2025 pivot into enterprise solutions, an aggressive acquisition strategy, and the industry's most comprehensive utility data infrastructure, Arcadia represents the primary AI-native threat to Clear Current Technologies. However, Arcadia's enterprise product is less than 18 months old, is built on a data and API platform architected primarily for energy tech developers (not energy managers), and exhibits clear structural gaps in the vertical markets most relevant to Clear Current — particularly higher education, campus district energy systems, and domestic utility billing complexity. This report documents Arcadia's funding, products, customers, strategy, hiring, partnerships, and exploitable weaknesses in granular detail.[^1][^2]

**Intelligence confidence rating by section:**
- Funding history: **HIGH** (primary press releases, CB Insights, Growjo)
- Product architecture: **HIGH** (primary source: Arcadia's own llms.txt, press releases, blog posts)
- Customers: **MEDIUM-HIGH** (verified customer stories; some customer list items from llms.txt marketing claims)
- Revenue/headcount: **LOW-MEDIUM** (no public financials; third-party estimates conflict widely)
- Pricing: **LOW** (no published pricing; no verified procurement data found)
- Strategic weaknesses: **HIGH** (triangulated from job postings, product gaps, no higher-ed customers identified)

***

## Section 1: Company Overview and Funding History

### Founding Story

Arcadia was founded in 2014 in Washington, D.C. by Kiran Bhatraju (CEO), Ryan Nesbitt (President), and Kate Henningsen (COO). Bhatraju, a University of Pennsylvania graduate and former Capitol Hill staffer, founded the company after observing the complexity of U.S. energy markets and the lack of consumer access to clean energy options. The company's original mission was to connect residential consumers to renewable energy — specifically community solar — without upfront costs.[^3]

Co-founder Ryan Nesbitt departed in 2018 to pursue web3 investing. Patrick McCamley joined as CCO in 2020 and replaced Nesbitt as President in 2022. Kate Henningsen remains as COO. Prior to founding Arcadia, Bhatraju founded American Efficient (2010), a company that sold energy management software to utilities — directly relevant context for understanding how Arcadia thinks about the enterprise energy market.[^3]

### Complete Funding History

| Round | Date | Amount | Lead Investor(s) | Notable Participants |
|-------|------|--------|-----------------|----------------------|
| Seed/Early | 2014–2016 | $1.9M | Undisclosed | BoxGroup, Wonder Ventures [^4] |
| Series A | 2017 | ~$6M | EIP | BoxGroup, Wonder Ventures [^4] |
| Debt | Jan 2018 | $5.5M | Undisclosed | — [^4] |
| Series B | Aug 2018 | $25M | G2 Venture Partners | ValueAct, EIP, BoxGroup, McKnight Foundation, Cendana Capital [^5][^4] |
| Series C | Dec 2019 | $30M | G2 Venture Partners | Macquarie Group, EIP, Mitsui USA, ValueAct Spring, Seek Ventures [^6][^4] |
| Series C-1 | Dec 2020 | $21M | Undisclosed | Existing investors (undisclosed at time) [^7] |
| Series D | Sep 2021 | $100M | Tiger Global + Drawdown Fund | Wellington, Reimagined Ventures, Camber Creek, MCJ Collective, EIP, G2VP, Inclusive Capital, BoxGroup [^7] |
| Series E | May 2022 | $200M | J.P. Morgan Asset Management | Broadscale Group, Salesforce Ventures, Tiger Global, Wellington, Camber Creek, Drawdown Fund, MCJ Collective, Keyframe Capital, Triangle Peak [^8] |
| Venture | Dec 2022 | $125M | Magnetar Capital | Existing investors [^5] |
| Growth | Apr 2024 | $50M + $30M JPMorgan credit facility | Macquarie Asset Management (new equity) | EIP, JPMorgan AM, BoxGroup, G2VP, Camber Creek, Triangle Peak, Broadscale [^9][^10] |

**Total raised:** ~$649.9M (CB Insights) to ~$658M (Growjo)[^2][^1]

**Last known valuation:** $1.5 billion (May 2022 Series E). No valuation disclosed in the April 2024 round.[^1]

**Key investors** still active as of 2024: G2 Venture Partners, J.P. Morgan Asset Management, Macquarie Asset Management, Energy Impact Partners, Camber Creek, Tiger Global, Broadscale Group, Triangle Peak Partners.

### Headcount and Revenue Estimates

Arcadia does not publish revenue or headcount. Available third-party estimates conflict significantly, likely because Arcadia has restructured around its Perch Energy community solar spinout, and analysts are estimating the combined entity differently.

| Source | Headcount | Revenue Estimate | Date |
|--------|-----------|-----------------|------|
| Contrary Research | ~620 employees | Not disclosed | Sep 2023 [^3] |
| ZoomInfo | 763 employees | $160.3M | 2025 [^11] |
| Growjo | 856 employees | $270M est. | 2025 [^1] |
| Indeed (company-reported) | 201–500 range | $5–25M | 2025 [^12] |
| CB Insights | Not disclosed | Not disclosed | 2025 [^2] |

**Assessment:** The Growjo $270M figure at 856 employees yields ~$315K revenue per employee, consistent with a data/SaaS business. The Indeed self-reported figure of $5–25M is clearly an underestimate, likely reflecting only one business unit. The ZoomInfo $160.3M figure is likely closer to reality for the enterprise/platform business pre-Perch merger. No confirmed public figure exists.

**No layoffs or restructuring news** was identified in the 18-month period from October 2024 to April 2026. The Perch Energy community solar spin-out (March 2025) effectively moved a large employee segment into a separate legal entity, which may have reduced Arcadia's parent headcount without a formal layoff announcement.[^13]

***

## Section 2: Product Architecture — What They Actually Built

Arcadia's product stack has two distinct layers: (1) the Arc developer/API platform, and (2) the January 2025 Enterprise Solutions suite built on top of that platform. Understanding this architecture is critical for Clear Current's positioning.

### The Arc Developer Platform (B2B API Infrastructure)

The Arc platform, launched in October 2021, was built as a "Plaid for energy" — an API-first infrastructure layer that lets any company access standardized utility data regardless of which utility serves a given account. Its customers are energy tech companies and developers, not energy managers. The platform's five sub-products are:[^14][^3]

**Plug:** The core data-access API. Connects to 9,500+ utilities across 52 countries and delivers utility billing data (bill images, line-item charges, usage) and interval data (15/30/60-minute consumption) in standardized format. As of January 2026, covers nearly 400 utilities for interval data (expanded from 60 at the start of Q4 2024). This rapid interval coverage expansion is a significant platform investment signal.[^15][^16]

**Signal:** The tariff intelligence engine. Maintains 25,000+ North American tariff structures (30,000+ globally), processes 75,000 rate updates per month, and performs approximately 1 billion tariff calculations annually. This is the most mature component of the Arc stack — Genability (a tariff database company acquired by Arcadia) was the foundation for Signal. Ford uses Signal specifically for EV home-charging rate optimization — not for enterprise energy management.[^17][^18][^19][^20]

**Switch:** Solar and storage savings modeling tool. Achieves 99.5% accuracy per independent NREL review. Not relevant to Clear Current's competitive analysis.[^20]

**Bundle:** Energy billing workflow product for community solar and retail energy providers. Not relevant to enterprise energy management.[^3]

**Spark:** Advanced analytics and EV/smart device optimization. Developer-facing.[^3]

**How data gets into the platform:** Arcadia primarily uses utility portal credential scraping (users provide utility login credentials via Arcadia's "Connect" embeddable widget), supplemented by direct EDI feeds established through Urjanet's network, and Green Button Connect where available. PDF bill ingestion is part of the bill parsing workflow. Interval data is pulled directly via AMI meter portals for the ~400 utilities where this is now available.[^16][^15][^3]

### The January 2025 Enterprise Solutions Suite

On January 29, 2025, Arcadia launched three enterprise modules built on the Arc platform foundation:[^21][^22]

#### Module 1: Utility Bill Management
This is the most developed enterprise module and most directly competitive with Clear Current. It includes:
- **Automated data capture:** Pull billing data from 9,500+ utilities via Plug, validated against the tariff database
- **Automated Tariff Assignment (ATA):** Processes 500,000+ meter-tariff assignments automatically; achieves 80% full-auto match rate, 20% requires expert analyst review[^17]
- **Cost Validation Service (CVS):** Recreates bills using interval data + tariff database + calculation engine; achieves 98.4% median bill recreation accuracy at portfolio scale[^17]
- **Bill auditing:** Identifies billing errors by comparing calculated-correct charges to actual billed charges[^17]
- **Tariff optimization:** Identifies alternative rate structures that would lower cost[^21]
- **Automated bill payment:** End-to-end payment processing[^21]
- **Budgeting & forecasting:** Uses validated historical data for forward projections[^17]

**Key claim (marketing, verify independently):** "One hyperscaler identified over $10 million in billing errors within a few months of using Arcadia to aggregate and standardize utility bills" — stated by Kiran Bhatraju on LinkedIn, January 2026. Customer not named.[^23]

#### Module 2: Energy Procurement Advisory
This is a services-plus-software hybrid built on the February 2025 acquisition of RPD Energy:[^24][^25]
- Co-optimization across all supply options: flexible retail supply agreements (0–100% clean), community solar, direct purchases from renewable generators, behind-the-meter solar and storage, demand-side management, demand response, utility tariff optimization, RECs and offsets[^26]
- Rohit Marwaha (formerly Constellation Energy) brought in to lead[^24]
- RPD Energy's customer base (Iron Mountain, Adobe, Intuit, UPS) inherited[^24]
- Scenario modeling for strategic procurement decisions[^27]

**Critical distinction for Clear Current:** This module is primarily a procurement advisory and execution service, not a contract analytics or billing error detection product. It helps customers *buy* energy; it does not help them audit *what they've been billed*.

#### Module 3: Sustainability Reporting
- Scope 1 and 2 emissions tracking from standardized utility data[^20]
- Supports GRI, SASB, TCFD, CSRD, and SEC climate disclosure frameworks[^20]
- Audit-ready data with source traceability[^20]
- Integrates with Cority (EHS/ESG platform) and Sweep (EU sustainability)[^28][^29]

**CORRECTION on "Supply Management" module:** The Part 4 research referred to a "Supply Management" module. This does not appear to be a separate product. The three official modules as named in Arcadia's January 2025 press release and current website are: Utility Bill Management, Energy Procurement Advisory, and Sustainability Reporting. The earlier reference likely conflated "Energy Procurement Advisory" with "Supply Management."[^30][^21]

### Customer UX: Dashboard or API?

The enterprise UX is primarily a **dashboard** — Arcadia describes its offering as delivering "actionable insights" through a centralized platform view. However, the platform's DNA is API-first; Cox Enterprises, for example, uses Arcadia as a **data feed into their own in-house Energy Dashboard**, explicitly choosing Arcadia over competitors that "wanted to put us on their dashboard". This data-connectivity use case (API-out rather than dashboard-in) is a core pattern in Arcadia's current enterprise base.[^31]

There is **no documented natural language AI chat interface** for energy managers. Arcadia's AI capabilities are embedded in automated processes (ATA, CVS, gap-filling) rather than user-facing chat.[^20]

***

## Section 3: The Urjanet Acquisition — What They Bought

Arcadia acquired Urjanet in May 2022. The acquisition was the single most strategically important move in Arcadia's history because it transformed Arcadia's data coverage from residential-focused to fully commercial.[^32][^33]

**What Urjanet was before the acquisition:** Atlanta-based Urjanet was the largest global utility data aggregator in the world, providing automated access to utility billing data from 6,500+ utility, telecom, and cable providers worldwide. Urjanet's flagship product at the time of acquisition was *Utility Cloud*, which provided on-demand access to credentialed utility account information for ESG reporting and energy management. Urjanet's commercial focus was notable: approximately **30% of the Fortune 500's utility bills** were being captured through Urjanet's technology prior to acquisition.[^34]

**What Arcadia gained from Urjanet:**
- Expansion from Arc's original 125 residential providers covering ~80% of U.S. residential accounts to 9,500+ utilities covering 95%+ of both residential **and commercial** accounts in the U.S.[^35][^32]
- Global coverage expanded to 52 countries[^33]
- Electric, gas, water, and waste data (not just electric)[^33]
- The Fortune 500 commercial enterprise client relationships Urjanet had built[^34]
- Connection to 1.35 million utility accounts and $20B+ in annual utility bills[^32]

**Coverage expansion since acquisition:** Since the Urjanet acquisition in May 2022, Arcadia has expanded interval (AMI) data coverage from approximately 60 utilities to nearly 400 utilities as of January 2026. Commercial account utility bill coverage remains claimed at 95%+.[^16][^28]

**Commercial account interval data gap:** The 95% commercial coverage claim applies to **billing data**. Interval data coverage (which enables demand charge optimization and real-time rate analysis) is far more limited — Arcadia's own documentation claims coverage of "over 75% of AMI meters for interval data", but this is portfolio-wide and does not mean 75% of commercial accounts specifically have interval data available. The expansion to ~400 utility providers for interval data is significant progress from the prior year's 60, but many mid-size and smaller commercial utilities where Clear Current's target customers have facilities remain uncovered.[^16][^17]

***

## Section 4: Customers and Use Cases

### Documented Enterprise Customers

| Customer | Use Case | Data Source | Notes |
|----------|----------|------------|-------|
| Cox Enterprises | Utility data aggregation for 40,000 accounts (~$120M annual spend); energy dashboard data feed; billing optimization | Primary (case study) [^31] | Chose Arcadia specifically to feed their *own* internal dashboard — not to use Arcadia's dashboard. Found $43K+ in savings from zero-kWh accounts and rate optimization. |
| Fox Corporation | Utility data collection for emissions reporting; ESG/sustainability | Marketing (llms.txt)[^20] | Use case is ESG reporting, not billing audit |
| Arconic | Fortune 500 manufacturer; utility data + energy insights | Customer story page[^31] | Details sparse |
| Iron Mountain | Renewable energy procurement (via RPD Energy) | Press release[^24] | Procurement advisory, not billing management |
| Adobe | Renewable energy procurement (via RPD Energy) | Press release[^24] | Procurement advisory |
| Intuit | Clean energy procurement (via RPD Energy) | Press release[^24][^31] | Community solar + retail contract |
| UPS | Clean energy procurement (via RPD Energy) | Press release[^24] | Procurement advisory |
| Conagra | Listed as customer | llms.txt[^20] | No case study available |
| Penske | Listed as customer | llms.txt[^20] | No case study available |
| Unnamed hyperscaler | Billing error identification ($10M+) | CEO LinkedIn post[^23] | **Not independently verified** — marketing claim only |

### Ford: What the Relationship Actually Is
The Ford relationship is a **developer API (Signal) use case for EV charging optimization**, not an enterprise energy management relationship. Ford uses Signal's tariff database to help EV owners identify the cheapest home-charging tariffs. This is entirely different from enterprise utility bill management or procurement advisory. Arcadia markets this prominently because Ford is a recognizable brand, but it does not indicate Ford uses Arcadia for corporate facility energy management.[^18]

### Developer/API-Only Customers (Not Enterprise Competitors)
These are customers of the Arc developer platform — they should not be mistaken for enterprise energy management customers: Oracle, Aurora Solar, EVgo, Enphase, Stem, Stable Auto, Backpack, Station A, WatchWire by Tango (which uses Arcadia as a data *source* for its own energy management product).[^31][^3]

The WatchWire by Tango relationship is noteworthy: WatchWire is a direct competitor to EnergyCAP in commercial real estate energy management, and it uses Arcadia's Plug API as a utility data feed — suggesting Arcadia is *upstream supplier* to some of Clear Current's competitors as well as being a direct competitor itself.

### Higher Education Customers
**No documented higher education customers exist in any Arcadia customer story, case study, press release, or marketing material.** Arcadia's enterprise customer base appears to be predominantly corporate (manufacturing, media, automotive services, tech) rather than institutional. This is a significant gap.

### User Reviews
No G2 or Capterra reviews exist for Arcadia's enterprise energy management product (the product launched January 2025 and has no G2/Capterra profile). Trustpilot shows 1,159 reviews at 2.6 stars and BBB shows 25+ complaints, but **all reviews are about Arcadia's consumer community solar product** (billing transparency issues, unauthorized charges, poor customer support) — not the enterprise platform. These reviews should not be conflated with the enterprise product experience but do indicate operational debt in the consumer business that was adjacent to the enterprise business until the community solar spinout.[^36][^37][^38]

***

## Section 5: Pricing and Commercial Model

### Published Pricing
Arcadia **does not publish pricing** for any enterprise solution. No contract values, pricing tiers, or benchmark figures were identified in any press release, procurement record, analyst report, or third-party source.

### Arc Developer Platform Pricing (Inferred)
The Arc developer platform (Plug, Signal, Switch) uses API consumption-based pricing. Signal's pricing has historically been compared to Genability's pricing by developers, suggesting a per-call or volume-tiered model. No specific figures are publicly available.[^19]

### Enterprise Solutions Pricing (Inferred)
Based on the use case profile — multi-site enterprises with thousands of accounts — the enterprise pricing model is likely:
- **Per-account or per-meter** pricing for Utility Bill Management (analogous to EnergyCAP's $40–52/meter/year model)
- **Percentage of procurement spend or advisory fee** for Energy Procurement Advisory (standard in energy broker/advisory models)
- **Flat or tiered SaaS fee** for Sustainability Reporting, potentially bundled

Cox Enterprises' case study ($120M annual energy spend, 40,000 accounts) represents a very large enterprise contract. Arcadia's positioning ("built on a decade of providing utility bill data automation for leading Fortune 500 brands") suggests the enterprise tier targets $50M+ energy spend portfolios. This implies pricing that would be out of reach for Clear Current's mid-market targets (e.g., community colleges, regional health systems, mid-size commercial real estate).[^31]

### Competitive Pricing Position vs. EnergyCAP
At EnergyCAP's ~$40–52/meter/year benchmark, a 5,000-meter university would pay $200K–260K/year. Arcadia's enterprise pricing is likely *higher* given the data infrastructure cost and premium AI positioning, making it similarly inaccessible to budget-constrained public institutions.

***

## Section 6: Geographic Focus and Market Coverage

### U.S. Coverage
Arcadia claims 95%+ coverage of U.S. utility billing accounts for both residential and commercial. However, gaps exist:[^28]
- **Interval data:** Only ~400 of thousands of U.S. utilities support interval data pull as of January 2026, though this covers the largest utilities serving most commercial load[^16]
- **Manual utility portals:** Some utilities (particularly smaller municipal utilities, rural co-ops, and state agencies) may not have machine-readable portal access
- **Data freshness:** Utility portal scraping can lag or fail when utilities change their login portals — a documented operational challenge in the utility data aggregation space

### ERCOT/Texas Deregulated Market
With the RPD Energy acquisition (Houston-based), Arcadia now has procurement advisory capabilities in ERCOT. However, ERCOT has no utility tariff structure in the traditional sense (prices are market-based, not regulated rate schedules), which means Arcadia's tariff database advantage (the core of Signal and ATA/CVS) is less applicable there for supply pricing. Arcadia's tariff intelligence would still apply to transmission and distribution charges from wires-only utilities (Oncor, CenterPoint, etc.) within ERCOT's footprint, but the supply pricing complexity of 100+ retail electricity providers is a different analytical problem than tariff classification.[^39][^24]

### International
Arcadia claims coverage in 52 countries for utility billing data. The Sweep partnership (April 2024) was explicitly described as Arcadia's "first EU-based software vendor partner" and supports CSRD compliance. Enterprise solution availability outside the U.S. is not documented — the enterprise pivot appears U.S.-focused.[^40][^28][^20]

***

## Section 7: Strategic Weaknesses and Competitive Gaps

This section is the most actionable for Clear Current's go-to-market strategy. The following gaps are assessed with HIGH confidence based on product documentation, customer evidence, and job postings.

### Gap 1: No Higher Education Customers or Vertical Expertise
**Zero documented higher education customers exist.** Arcadia's customer stories, case studies, press releases, and marketing materials show corporate enterprises (Cox, Fox, Arconic) and Fortune 500 procurement relationships. There is no evidence of university, community college, or K-12 school district customers anywhere in Arcadia's documented customer base.[^41][^20]

Higher education has distinctive requirements — district energy systems, cost allocation across schools and departments, public procurement compliance, fiscal year reporting that doesn't match calendar year, and ENERGY STAR Campus reporting — that Arcadia's corporate-oriented platform does not address. **This is Clear Current's clearest vertical differentiation opportunity.**

### Gap 2: No Campus Chargeback or Cost Allocation
Arcadia's enterprise UX is designed for a single corporate entity managing its utility spend. There is no evidence of chargeback functionality (allocating energy costs to sub-tenants, academic departments, or campus buildings with district energy corrections). This is table stakes for universities and multi-tenant commercial real estate but absent from Arcadia's documented feature set.[^30]

### Gap 3: No Regulatory Intelligence
Arcadia monitors tariff *changes* (75,000 updates/month) but there is no documented feature for proactive regulatory intelligence — monitoring PUC filings, tracking proposed rate cases, alerting customers to pending rate hike proceedings, or providing context on why rates are changing. This is a pain point for sophisticated commercial energy buyers, especially utilities with active rate cases in California, New York, and Illinois.[^17]

### Gap 4: No Natural Language AI Chat Interface
Arcadia's AI capabilities are embedded in automated back-end processes (ATA matching, CVS calculation, gap-filling, data standardization). The user experience is a dashboard and data API. There is **no documented conversational AI interface** — no ability for an energy manager to ask "why did my bill spike 18% in October" or "what would my savings be if I shifted to TOU rate schedule E-19S?" in natural language. This is a genuine differentiation opportunity for a platform built for energy managers rather than data engineers.[^42][^17]

### Gap 5: Legacy Platform Migration in Progress
Job postings as of late 2025 and early 2026 explicitly reveal that Arcadia is in the middle of a complex legacy platform migration — transitioning enterprise customers from older Urjanet/Arc workflows to a new flagship platform. One active Senior Product Manager job description states the primary responsibility is "migrating complex customer workflows and data from a legacy platform to our flagship platform" and "working closely with enterprise customers to ensure they have consistent and clear communication about migration processes". This is a significant operational distraction and a sales vulnerability window.[^43][^44]

**Clear Current implication:** Arcadia's enterprise team is simultaneously selling new accounts, migrating existing accounts from legacy systems, and building new AI features. This creates focus fragmentation that an agile startup can exploit.

### Gap 6: Enterprise Pivot is Very New
The Enterprise Solutions suite launched January 29, 2025. As of April 2026, it is 14 months old. The procurement advisory product was strengthened by the RPD Energy acquisition in February 2025 but the bill management and sustainability reporting modules are still maturing. Customer references for the enterprise platform are sparse — only Cox Enterprises and Arconic have detailed case studies for utility data management.[^21][^31]

### Gap 7: No Dedicated Energy Manager-Facing UX
Arcadia's platform was built for developers and data engineers. Cox Enterprises explicitly chose Arcadia as a **data feed** because competing products "wanted to put us on their dashboard" — i.e., they found Arcadia's dashboard insufficient and preferred to build their own. This is a structural limitation: the platform is architected for API consumers, not energy managers who want actionable insights without engineering overhead.[^31]

### Gap 8: Consumer Business Reputation Drag
Arcadia's consumer Trustpilot rating is 2.6/5 stars across 1,159 reviews and has 25+ BBB complaints. These reviews describe billing confusion, unauthorized charges, poor customer support, and lack of billing transparency in Arcadia's community solar product. While these are consumer complaints rather than enterprise reviews, they exist in the same Google search results as Arcadia's enterprise marketing. For procurement committees evaluating vendors, this public reputation risk matters.[^38][^36]

### Gap 9: No Deregulated Supply Contract Audit Capability
Arcadia's Energy Procurement Advisory helps clients *structure* energy supply contracts. But there is no documented capability to **audit existing supply contracts** for billing errors — a separate and high-value problem in deregulated markets where retail electricity providers bill on complex index-based, block-and-index, or swing-tolerance structures. This is a clear opportunity for Clear Current in deregulated markets (ERCOT, PJM, NEISO, NYISO).

***

## Section 8: Hiring Patterns and Product Roadmap Signals

### Current Open Roles (Greenhouse.io, April 2026)
Arcadia is currently hiring across three clear functional areas:[^45]

**Engineering/AI (heaviest hiring area):**
- Director, Data Engineering & Analytics ($183,000–329,000 at Indeed)[^12]
- Senior AI Engineer
- Senior Engineering Manager - AI
- Staff Software Engineer ($165,000–295,000)[^12]
- Software Engineer II - Salesforce (signals a Salesforce CRM integration)
- Data Engineer III (Perch Energy subsidiary)

**Enterprise Sales:**
- Account Executive, Enterprise Solutions

**Product:**
- Senior Product Manager - AI
- Senior Product Manager - Tariff Data
- Senior Product Manager - Tooling and Telemetry
- Senior Product Operations Manager

### What the Hiring Pattern Reveals

**AI infrastructure is the top priority:** The concentration of AI engineering roles (Senior AI Engineer, Senior Engineering Manager - AI, Senior Product Manager - AI) confirms Arcadia is investing heavily in AI-embedding within its existing data products. The stated direction from CEO Kiran Bhatraju — "Building energy superintelligence in 2026" and describing the "Arcadia Data Model" as an enterprise system of record — is being staffed.[^45][^42]

**Tariff data is a sustained investment area:** A Senior PM for Tariff Data signals ongoing expansion and improvement of the Signal tariff database — Arcadia's primary technical moat.[^46][^47]

**Legacy platform migration is a current constraint:** Multiple product and engineering roles explicitly mention migrating customers from legacy platforms — this is not future roadmap but current operational burden. One PM description says the role will eventually "transition to contributing to new features...that streamline complex commercial bill pay and energy procurement processes" — but only after migration is complete.[^44][^43]

**Enterprise sales hiring is thin:** Only one Account Executive, Enterprise Solutions position is open. This suggests either (a) Arcadia's enterprise sales motion is more land-and-expand via data partnerships than field sales, or (b) they are selling primarily through existing customer relationships from Urjanet and RPD Energy rather than building a large outbound sales force.

**Domain specialists vs. technologists:** The Account Executive role explicitly requires "a background in retail energy markets, retail energy brokerage or corporate energy procurement" — suggesting Arcadia recognizes it needs energy domain expertise in sales. However, the engineering and product roles show no requirements for energy domain knowledge. This creates a potential credibility gap in customer-facing technical discussions.[^48]

**Salesforce integration:** The Software Engineer II - Salesforce role confirms Arcadia is building deeper Salesforce CRM integration, likely for enterprise customer management and sales pipeline tracking — a sign of scaling enterprise go-to-market infrastructure.[^45]

**No energy domain specialists in engineering:** There are no postings for Certified Energy Managers (CEM), utility regulatory analysts, or former utility executives in engineering or product roles. The energy domain expertise sits in the 50+ tariff analysts (operations) and the RPD Energy acquisition team (procurement), not in product development.[^17]

***

## Section 9: Partnerships and Integrations

### Documented Partnerships (2024–2026)

| Partner | Type | Date | Strategic Significance |
|---------|------|------|----------------------|
| Cority | EHS/ESG software integration | Feb 2025[^28][^49] | Positions Arcadia as utility data layer inside enterprise EHS platforms; expands to Cority's customer base |
| Sweep | EU sustainability platform | Apr 2024[^29][^40] | First EU partnership; targets CSRD compliance; expands to European enterprises |
| Perch Energy | Community solar JV (spinout) | Mar 2025, closing Q2 2026[^13][^50] | Separates community solar from enterprise platform; largest community solar platform in U.S.; 3GW across 1,000 projects |
| RPD Energy | Acquisition | Feb 2025[^24] | Insources renewable procurement advisory capability; brings Rohit Marwaha (Constellation veteran) and blue-chip customer relationships |
| WatchWire by Tango | Data supply (Arc Plug customer) | Ongoing[^31] | Arcadia supplies utility data to a competing energy management platform — upstream supplier relationship |
| Verse | Data supply (Arc Plug customer) | Ongoing[^31] | Same pattern — Arcadia supplies data to a competing energy analytics startup |
| SoftwareOne Marketplace | Distribution | Listed 2024[^22] | Listed on SoftwareOne Marketplace for enterprise discovery |
| 300+ unnamed partners | Partner network | Ongoing[^20] | Mostly developers building on Arc APIs; some energy consultants and retail energy providers |

### Notable Integration Gaps
- **No documented ERP integrations:** No SAP, Oracle ERP, Microsoft Dynamics, or Infor integrations are mentioned in any product documentation or press release. This is a gap for enterprise buyers whose finance teams work in ERP systems.
- **No utility-side partnerships:** Arcadia does not appear to sell to utilities (the Plug product relies on credential scraping and Urjanet's pre-built connections rather than utility partnerships). Bhatraju's pre-Arcadia company sold to utilities; his explicit pivot was away from utilities.[^3]
- **No CMMS integrations:** No documented integration with facility management / CMMS platforms (Maximo, Archibus, FM:Systems), which is a key integration point for facility-manager-driven buyers.
- **No higher education consortia partnerships:** No documented partnerships with NACUBO, APPA, E&I Cooperative Services, or Educause, which are the primary distribution channels for higher education software.

***

## Section 10: Leadership and Founding Team

### Key Executives

| Name | Role | Background | Notable |
|------|------|-----------|---------|
| Kiran Bhatraju | Founder & CEO | UPenn → Capitol Hill → American Efficient (utility software) → Arcadia 2014[^3] | Public voice of Arcadia; prolific LinkedIn poster and newsletter contributor on energy strategy |
| Kate Henningsen | Co-Founder & COO | Corporate litigation lawyer → Arcadia 2015[^3] | Operations and legal; low public profile |
| Paul Mulé | CFO | — | Current CFO per Growjo[^1]; replaced John Rucker (joined 2021 from Slice) |
| Barbara Clay | CLO | — | Chief Legal Officer per Arcadia llms.txt[^20] |
| Patrick McCamley | President | Skyline Partners International (partner) → Arcadia CCO 2020 → President 2022[^3] | Commercial leadership |
| Curtis Snyder | SVP & GM, Arc Enterprise Platform | — | Leads enterprise platform; named at Growjo[^1] |
| Joel Gamoran | VP & GM, Energy Services | — | Energy services division leadership[^1] |
| Rohit Marwaha | Procurement Leadership | Constellation Energy veteran → RPD Energy → Arcadia Feb 2025[^24] | Most senior energy-domain hire; heads procurement advisory |

### CEO Public Statements and Strategic Direction (2024–2026)

Bhatraju's public communications show a clear strategic narrative: **"energy scarcity"** as the organizing frame for the enterprise pivot. Key quotes and publications:

- January 2025 enterprise launch: "We're about to enter a world of energy scarcity... Now is the time for businesses to rethink, manage, and streamline their energy strategies"[^21]
- March 2025 Latitude Media article: "The old model is broken — reliant on manual processes and narrow solutions that lack data-driven insights"[^51]
- May 2025 MCJ Newsletter: Detailed piece on corporate energy strategy in the face of AI-driven demand growth and grid constraints[^52][^53]
- January 2026 LinkedIn: "Building energy superintelligence in 2026" — describes creating the "Arcadia Data Model" as an "enterprise system of record"[^42]
- March 2026: Named TIME/Statista Top GreenTech Companies for third consecutive year[^54]

**Assessment:** Bhatraju is positioning Arcadia as the enterprise system of record for energy data — a platform play, not a point solution. This is an ambitious positioning that directly competes with EnergyCAP's installed base and with the emerging category of AI-native energy management. However, the "system of record" positioning requires deep enterprise workflow integration that Arcadia's current product does not yet fully deliver.

***

## Section 11: Positioning and Messaging

### Pre-Pivot Positioning (Before Jan 2025)
"Global utility data and community solar platform" — emphasizing community solar access and developer APIs[^10]

### Post-Pivot Positioning (Jan 2025–Present)
"Global utility data and energy solutions platform" — emphasizing enterprise energy management and the "energy scarcity" macro narrative[^55][^21][^20]

### Current Messaging Pillars (from website and recent materials)
1. **Comprehensive data:** "9,500+ utilities, 52 countries, 95%+ US utility account coverage, 30K+ tariff structures"[^20]
2. **AI-powered accuracy:** "98.4% median bill recreation accuracy... 99% at portfolio scale"[^17]
3. **End-to-end solutions:** "From raw data access via APIs to full-service enterprise energy management"[^20]
4. **Energy scarcity framing:** "Businesses need to navigate increased energy complexity" — positioning energy management as a strategic, not operational, function[^56][^21]
5. **Decade of data:** "Built on a foundational data platform developed and scaled for over a decade"[^21]

### Competitive Differentiation from EnergyCAP
Arcadia does not mention EnergyCAP by name in any public materials found. The implicit differentiation is:
- **Coverage scale** (95%+ US accounts vs. EnergyCAP's bill entry model)
- **AI automation** vs. EnergyCAP's more manual data entry workflow
- **Procurement advisory** — EnergyCAP does not offer procurement services
- **ESG/Scope 2 integration** — positioned for modern sustainability reporting requirements

### How Clear Current Should Respond to Arcadia's Positioning
Arcadia's messaging creates a specific vulnerability: it emphasizes data scale and platform breadth, implying that any energy management problem can be solved with the right data infrastructure. This leaves space for Clear Current to own **domain-specific workflow depth** — the actual energy manager experience of managing district energy allocations, navigating PUC proceedings, understanding ratchet clause mechanics, or getting a plain-language explanation of why a demand charge spike occurred. Arcadia's platform knows what the data says; Clear Current can know what the data *means* to an energy manager.

***

## Section 12: Recent News and Strategic Moves (April 2025 – April 2026)

| Date | Move | Significance |
|------|------|-------------|
| Jan 2025 | Enterprise Solutions launch (Utility Bill Management, Energy Procurement Advisory, Sustainability Reporting)[^21] | The enterprise pivot; defines Arcadia as direct competitor |
| Feb 2025 | RPD Energy acquisition; Rohit Marwaha joins[^24] | Bolsters procurement advisory; insources Constellation-level energy expertise |
| Feb 2025 | Cority partnership (EHS/sustainability integration)[^28] | ESG channel expansion |
| Mar 2025 | Perch Energy community solar JV announced (closing Q2 2026)[^13] | Spin-out community solar to focus enterprise resources |
| Mar 2025 | Named TIME Top GreenTech for second year[^57] | Brand recognition; no financial significance |
| Q4 2025–Q1 2026 | Interval data expanded from 60 to ~400 utilities[^16] | Major platform infrastructure investment; enables demand charge optimization at scale |
| Jan 2026 | First Annual Commercial Electricity Rate Report published (81 utilities, 5 building types, 2020–2025)[^58][^59] | Content marketing targeting enterprise energy buyers; 97.5% of facilities saw rate increases; median CAGR 5.9% |
| Jan 2026 | "Energy Data Model" blog post; CEO announces "energy superintelligence" direction[^42] | Signals platform product direction for 2026 |
| Mar 2026 | Named TIME Top GreenTech for third year[^54] | |

### Analyst Coverage Assessment
- **Verdantix:** Arcadia does **not** appear in the 2026 Verdantix Green Quadrant: Enterprise Carbon Management Software, which recognized Cority, IBM, Schneider Electric, Sphera, Sweep, UL Solutions, Watershed, and Wolters Kluwer as leaders. This is notable given that Arcadia partners with Cority and Sweep, both of which *are* recognized. Arcadia's positioning is as a data infrastructure layer *beneath* these platforms, not as a carbon management platform itself.[^60]
- **Gartner:** No Gartner Magic Quadrant mention found for any relevant category.
- **Forrester:** No Forrester Wave mention found.
- **TIME/Statista:** Three consecutive years on Top GreenTech list — editorial recognition, not analyst assessment.[^54]

***

## Strategic Implications for Clear Current Technologies

### Where Clear Current Can Win Against Arcadia

**1. Higher education as an uncontested vertical:** Arcadia has zero documented higher education customers. The specific requirements of universities — district energy cost allocation, departmental chargeback, ENERGY STAR Campus, fiscal year reporting, public procurement compliance — are absent from Arcadia's product. A focused higher education play gives Clear Current a beachhead where Arcadia cannot compete without significant product development.

**2. Energy manager UX vs. data engineer UX:** Arcadia built for developers. Clear Current can build for energy managers — the person who actually receives a 3,000-line utility bill, doesn't know why the demand charge is 40% higher than last month, and needs a system to tell them in plain language. A conversational AI interface for non-technical energy managers is a structural advantage over Arcadia's API-first DNA.

**3. District energy and campus billing complexity:** Arcadia has no documented capability for district energy cost allocation — the complex problem of fairly distributing chilling plant, steam plant, and central utility costs to individual buildings or departments. This is table stakes for university and hospital energy management.

**4. Regulatory intelligence:** No competitor — including Arcadia — offers proactive PUC monitoring and rate case intelligence. This is an unoccupied product category that creates significant value for large commercial energy buyers facing rate increases.

**5. Mid-market and institutional pricing:** Arcadia's enterprise tier appears priced for Fortune 500 complexity. A cleaner, more affordable product built for mid-to-large organizations ($5M–$50M annual energy spend) with purpose-built vertical workflow leaves the door open for Clear Current to price competitively in markets Arcadia ignores.

**6. The migration window:** Arcadia is actively migrating enterprise customers from a legacy platform while simultaneously trying to launch new enterprise features and acquire new enterprise customers. This is a 12–24 month window of competitive vulnerability. Arcadia's attention is divided; Clear Current's can be focused.[^43][^44]

**7. Deregulated supply contract auditing:** Arcadia's Utility Bill Management audits utility bills from regulated utilities. It does not appear to audit third-party retail electricity provider contracts in deregulated markets for billing accuracy against contract terms (wrong index pricing, incorrect swing tolerances, volumetric billing errors). This is a specific capability gap in ERCOT, PJM, and other deregulated markets.

### Where Arcadia Has Durable Advantages
- **Data coverage breadth:** 9,500+ utilities and 95%+ commercial account coverage is a genuine moat. Replicating Urjanet's network would take years and hundreds of millions of dollars.[^34]
- **Tariff database depth:** 30,000+ tariff structures, 75K monthly updates, 50+ tariff analysts. This is the core Signal product and represents a decade of investment.[^17]
- **Capital position:** ~$650M raised, $1.5B last known valuation, JPMorgan credit facility. Arcadia can sustain losses to expand into new verticals.[^5][^1]
- **Fortune 500 brand relationships:** RPD Energy's existing customers (Iron Mountain, Adobe, Intuit, UPS) and Urjanet's Fortune 500 installed base give Arcadia enterprise credibility Clear Current must earn.

---

## References

1. [Arcadia: Revenue, Competitors, Alternatives - Growjo](https://growjo.com/company/ARCADIA) - Arcadia top competitors are American Wind Energy Association, American Forest Foundation and Center ...

2. [Arcadia - Products, Competitors, Financials, Employees ...](https://www.cbinsights.com/company/arcadia-power) - Arcadia provides utility data and energy solutions within the clean energy sector. Use the CB Insigh...

3. [Arcadia's Business Breakdown & Founding Story - Contrary Research](https://research.contrary.com/company/arcadia) - A report from Contrary Research. Discover Arcadia's founding story, product, business model, and an ...

4. [Arcadia powers up $100m series D - Global Corporate Venturing](https://globalventuring.com/corporate/arcadia-powers-up-100m-series-d/) - The company has raised $180m of funding to date including a previously undisclosed $21m series C1 ro...

5. [How Much Did Arcadia Raise? Funding & Key Investors - TexAu](https://www.texau.com/profiles/arcadia) - Arcadia has raised a total of $566 million across multiple funding rounds, most recently securing $5...

6. [Arcadia Raises $30M Series C to Accelerate Nationwide Consumer ...](https://www.prnewswire.com/news-releases/arcadia-raises-30m-series-c-to-accelerate-nationwide-consumer-access-to-renewables-300971911.html) - The company's data and billing platform manages consumer utility accounts to bundle clean energy, en...

7. [Arcadia Raises $100M Series D to Democratize Access to Clean ...](https://www.businesswire.com/news/home/20210915005320/en/Arcadia-Raises-$100M-Series-D-to-Democratize-Access-to-Clean-Energy) - Combined with the Company's previously undisclosed $21 million Series C-1 in December 2020, Arcadia ...

8. [Arcadia raises $200M led by J.P. Morgan's Sustainable Growth ...](https://www.arcadia.com/press/arcadia-raises-200-million) - Arcadia, the technology company empowering energy innovators to fight the climate crisis, today anno...

9. [Arcadia Secures $50 Million Financing - Mercom Capital Group](https://mercomcapital.com/arcadia-secures-50-million-financing/) - Arcadia, a utility data and community solar company, secured $50 million in financing to support the...

10. [Arcadia raises $50M to accelerate product innovation and fuel ...](https://www.prnewswire.com/news-releases/arcadia-raises-50m-to-accelerate-product-innovation-and-fuel-continued-growth-302114460.html) - The round includes a fund managed by Macquarie Asset Management ("Macquarie") as a new equity invest...

11. [Arcadia Power - Overview, News & Similar companies | ZoomInfo.com](https://www.zoominfo.com/c/arcadia-power-inc/359017932) - With a significant operational footprint indicated by 42 locations, Arcadia Power employs between 50...

12. [Arcadia Careers and Employment | Indeed.com](https://www.indeed.com/cmp/Arcadia-2) - Jobs ; Sr Director, Data Engineering & · $183,000 - $329,000 a year. 30+ days ago ; Staff Software E...

13. [Perch Energy and Arcadia's Community Solar Subsidiary Merge](https://www.globenewswire.com/news-release/2025/03/11/3040730/0/en/Perch-Energy-and-Arcadia-s-Community-Solar-Subsidiary-Merge-to-Form-New-Venture.html) - Arcadia and Perch join forces to combine their fast-growing community solar businesses; together wil...

14. [Introducing Arc™ by Arcadia®: The technology platform accelerating ...](https://www.arcadia.com/press/introducing-arc-by-arcadia) - A technology platform creating unprecedented access to the data and clean energy needed to decarboni...

15. [Utility Bill & Interval Data | High-resolution utility data at scale - Arcadia](https://www.arcadia.com/platform/utility-bill-interval-data) - Gain direct, automated access to utility data from thousands of providers. Here's how Arcadia provid...

16. [Plug Intervals now covers nearly 400 utilities - Arcadia](https://www.arcadia.com/blog/intervals-utility-coverage-expansion) - Unprecedented Energy Insights: Plug Intervals now covers nearly 400 utilities · AI-Powered Data Infe...

17. [How Arcadia achieves energy cost accuracy at scale](https://www.arcadia.com/blog/energy-cost-accuracy-scale) - Arcadia automates collection of utility billing and interval data through our Plug product, validati...

18. [Ford helps EV owners charge smarter | Customer Stories - Arcadia](https://www.arcadia.com/customer-stories/ford) - Ford uses Signal to enable new features that help their drivers save money on home charging.

19. [Genability | Made for Planet](https://madeforplanet.com/resource/genability) - Genability provides electricity tariff data and APIs, enabling businesses to optimize energy costs, ...

20. [llms.txt - Arcadia](https://www.arcadia.com/llms.txt) - The company offers three core product lines: an **energy data platform** with APIs for developers an...

21. [Arcadia launches AI-powered Enterprise Solutions to help ...](https://www.prnewswire.com/news-releases/arcadia-launches-ai-powered-enterprise-solutions-to-help-businesses-navigate-increased-energy-complexity-302363279.html) - With the launch of Arcadia Enterprise Solutions, this platform has been transformed into a powerful ...

22. [Arcadia Power - SoftwareOne Marketplace](https://platform.softwareone.com/vendor/arcadia-power/VND-7243-4139) - Arcadia automates utility bill management, from data capture and validation to payment processing an...

23. [Detecting $10M in Billing Errors with Arcadia - LinkedIn](https://www.linkedin.com/posts/kiran-bhatraju_building-the-energy-data-foundation-that-activity-7420205226135121921-RDfr) - Within a few months of using Arcadia to aggregate and standardize utility bills, one hyperscaler ide...

24. [Arcadia acquires RPD Energy, empowering businesses to purchase ...](https://www.prnewswire.com/news-releases/arcadia-acquires-rpd-energy-empowering-businesses-to-purchase-cleaner-more-resilient-energy-302372348.html) - RPD's customer list includes blue-chip corporations such as Iron Mountain, Adobe, Intuit, and UPS. "...

25. [Arcadia acquires RPD Energy, empowering businesses to purchase ...](https://www.arcadia.com/press/rpd-energy-procurement) - RPD's customer list includes blue-chip corporations such as Iron Mountain, Adobe, Intuit, and UPS. "...

26. [Energy Procurement Advisory with Arcadia: Strategic optimization ...](https://www.arcadia.com/blog/energy-procurement-advisory) - Arcadia's Energy Procurement Advisory offering is designed to simplify and optimize the procurement ...

27. [Co-optimized solutions for energy procurement - Arcadia](https://www.arcadia.com/solutions/energy-procurement-advisory) - Arcadia brings together comprehensive data, AI-powered analytics, market expertise, and a strong par...

28. [Cority and Arcadia Partner to Automate Utility Data](https://www.cority.com/news-media/automate-utility-data-for-esg-compliance-with-arcadia/) - The Arcadia partnership unlocks easy access to accurate global energy data for Cority customers. Arc...

29. [Arcadia partners with Sweep, its first EU-based sustainability ...](https://www.arcadia.com/press/arcadia-sweep-partnership) - Arcadia, the technology company connecting the clean energy future, is partnering with Sweep, the su...

30. [AI-powered energy management - Arcadia](https://www.arcadia.com/solutions) - Arcadia aggregates and standardizes energy data from multiple sources, creating a unified foundation...

31. [Cox Enterprises cuts energy spend with utility data - Arcadia](https://www.arcadia.com/customer-stories/cox-enterprises) - Cox Enterprises leverages Arcadia to automate utility data collection across its 40000 accounts, pro...

32. [Arcadia acquires Urjanet](https://www.arcadia.com/blog/arcadia-acquires-urjanet) - The Urjanet data network will significantly expand Arc to include more than 95% of residential and c...

33. [Arcadia Acquires Urjanet to Accelerate the Transition to a Zero ...](https://www.prnewswire.com/news-releases/arcadia-acquires-urjanet-to-accelerate-the-transition-to-a-zero-carbon-economy-301553440.html) - Urjanet significantly expands Arc's data coverage in the US to more than 95% of residential and comm...

34. [Arcadia Acquires Data Aggregator Urjanet to Help Promote a "Zero ...](https://finovate.com/arcadia-acquires-data-aggregator-urjanet-to-help-promote-a-zero-carbon-future/) - Utility data aggregator Urjanet has been acquired by energy technology company Arcadia. Urjanet made...

35. [GreenTech Company Arcadia Acquires Data Provider Urjanet - Built In](https://builtin.com/articles/arcadia-urjanet-acquisition-hiring-052422) - Along with launching Arc in November, the company saw 155 percent revenue growth year-over-year in 2...

36. [Arcadia Reviews 1159 - Trustpilot](https://www.trustpilot.com/review/www.arcadiapower.com) - DO NOT ENROLL WITH ARCADIA POWER! Just don't do it. Very poorly run business with minimal customer s...

37. [Calling Out G2 & Capterra - The Dark Side of App Directories ...](https://www.linkedin.com/pulse/calling-out-g2-capterra-dark-side-app-directories-reviews-moore-ev6wc) - This distorts the very essence of unbiased directories and user reviews. Moreover, businesses that a...

38. [Arcadia Power, Inc. | BBB Complaints | Better Business Bureau](https://www.bbb.org/us/dc/washington/profile/energy-service-company/arcadia-power-inc-0241-236000288/complaints) - Their billing shows a complete lack of transparency. Each month the bill is a pie chart that says no...

39. [Arcadia Acquires Clean Energy Procurement Platform RPD Energy](https://www.esgtoday.com/arcadia-acquires-clean-energy-procurement-platform-rpd-energy/) - RPD's customer list includes blue-chip corporations such as Iron Mountain, Adobe, Intuit, and UPS. T...

40. [Arcadia partners with Sweep, its first EU-based sustainability ...](https://www.linkedin.com/posts/arcadiahq_arcadia-partners-with-sweep-its-first-eu-based-activity-7189264291450007552-scD1) - Announcing our partnership with SWEEP, the sustainability data management platform, to streamline ca...

41. [Customer stories | Arcadia](https://www.arcadia.com/customer-stories) - We're making it easier for businesses to create a zero-carbon future. Learn more about what our cust...

42. [Energy Data Aggregation and Standardization with Arcadia - LinkedIn](https://www.linkedin.com/posts/kiran-bhatraju_arcadias-integrated-approach-to-enterprise-activity-7415129345289129984-lvG4) - Energy Data Aggregation and Standardization with Arcadia. View profile for Kiran Bhatraju. Kiran Bha...

43. [Jobs at Arcadia - Greenhouse](https://job-boards.greenhouse.io/arcadiacareers/jobs/8306807002) - Current openings at Arcadia. Create a Job Alert. Level-up your career by having opportunities at Arc...

44. [Senior Product Manager, Platform | Arcadia | Remote](https://www.climatechangecareers.com/job/arcadia/remote/senior-product-manager-platform/) - We are seeking an experienced Senior Product Manager to join our Product team in the U.S. This role ...

45. [Jobs at Arcadia - Greenhouse](http://job-boards.greenhouse.io/arcadiacareers) - Current openings at Arcadia. Create a Job Alert. Level-up your career by having opportunities at Arc...

46. [Senior Product Manager - Tariff Data @ Arcadia - G2 Venture Partners](https://jobs.g2vp.com/companies/arcadia/jobs/36291022-senior-product-manager-tariff-data) - See open jobs similar to "Senior Product Manager - Tariff Data" G2 Venture Partners. ... Arcadia is ...

47. [Senior Product Manager -Tariff Data - Arcadia.com | Built In](https://builtin.com/job/senior-product-manager-tariff-data/6872599) - Arcadia.com is hiring for a Senior Product Manager -Tariff Data in Chennai, Tamil Nadu, IND. Find mo...

48. [Account Executive, Enterprise Solutions - Arcadia | - climate jobs](https://workingreen.jobs/offers/account-executive-enterprise-solutions-at-arcadia-united-states) - We're seeking a motivated Account Executive with a background in the retail energy markets, who can ...

49. [Cority Integrates Arcadia's Platform to Automate Utility](https://www.globenewswire.com/news-release/2025/02/26/3032968/0/en/Cority-Integrates-Arcadia-s-Platform-to-Automate-Utility-Data-for-ESG-Compliance.html) - The integration aligns Arcadia's utility data platform with CorityOne, the company's comprehensive a...

50. [Sustainable Energy & Infrastructure Client Feature — June 2025](https://www.mintz.com/insights-center/viewpoints/2151/2025-05-30-sustainable-energy-infrastructure-client-feature-june) - The new merger business will operate as Perch Energy going forward and will be the largest pure-play...

51. [How businesses can navigate energy's new complexity](https://www.latitudemedia.com/news/how-businesses-can-navigate-energys-new-complexity/) - In 2025, the energy landscape faces a crossroads: rising demand coupled with strained supply. The le...

52. [Energy Scarcity: How Companies Can Navigate and Manage an ...](https://newsletter.mcj.vc/p/arcadia/comments) - Explore how businesses can respond with smarter energy procurement strategies ... by Kiran Bhatraju,...

53. [MCJ's Post - Energy Scarcity - LinkedIn](https://www.linkedin.com/posts/mcjvc_energy-scarcity-how-companies-can-navigate-activity-7325515464623689728-0_E_) - In this week's MCJ Newsletter, Kiran Bhatraju, CEO of Arcadia, unpacks how AI-driven demand, tariffs...

54. [America's Top GreenTech Companies of 2026 | Kiran Bhatraju](https://www.linkedin.com/posts/kiran-bhatraju_americas-top-greentech-companies-of-2026-activity-7442995784649920513-VU9d) - We're honored that Arcadia has been named to TIME and Statista's Top GreenTech Companies list for th...

55. [Arcadia: Connecting the clean energy future. | Arcadia](https://www.arcadia.com) - Arcadia helps businesses unlock a future of abundant, affordable clean energy. With our advanced uti...

56. [Five forces reshaping enterprise energy management - Arcadia](https://www.arcadia.com/blog/five-trends-enterprise-energy-management) - Rather than worry about short-term policy roadblocks, companies are continuing to procure renewable ...

57. [Arcadia - America's Top GreenTech Companies of 2025 - LinkedIn](https://www.linkedin.com/posts/arcadiahq_americas-top-greentech-companies-of-2025-activity-7311036624006504448-ZV8i) - We're honored that Arcadia has been named one of TIME and Statista's Top GreenTech Companies for the...

58. [Whitepaper: Commercial Electricity Rate Report 2026 - Arcadia](https://www.arcadia.com/resources/commercial-electricity-rate-report-january-2026) - Arcadia's Commercial Electricity Rate Report covers: The New Baseline: Why 5.9% is the new median CA...

59. [2026 Commercial Electricity Rate Report Reveals 97.5 ... - LinkedIn](https://www.linkedin.com/posts/arcadiahq_out-now-commercial-electricity-rate-report-activity-7421939954794201089-WOOJ) - - 97.5% of facilities saw rate increases - 71% experienced increases that outpaced inflation. - The ...

60. [Verdantix Green Quadrant Report Shows Firms Turning To ...](https://www.verdantix.com/insights/press-release/verdantix-green-quadrant-report-shows-firms-turning-to-operational-decarbonization-to-unlock-financial-value-and-strengthen-competitiveness) - Verdantix Green Quadrant Report Shows Firms Turning To Operational Decarbonization To Unlock Financi...


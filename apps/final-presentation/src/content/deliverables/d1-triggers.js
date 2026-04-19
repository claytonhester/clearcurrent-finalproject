export const D1 = {
  title: 'Engagement Trigger Map',
  tagline:
    'What makes the phone ring for commercial energy teams — and when Clear Current must already be in the room.',
  openingProblem:
    'Commercial energy managers do not go looking for problems; problems find them, and facilities leaders are buried in day-to-day emergencies rather than proactive monitoring. A product that waits for logins misses the window. This map names the forced-action moments when alerts, dollar impact, and calendar-aware outreach matter most. Triggers cluster by vertical, season, and event type so product push logic and sales timing can align to peak receptivity.',
  tldrBullets: [
    'Buyers are pulled into problems; they are not browsing for another dashboard — meet them in forced-action moments.',
    'Login-first products miss the window; push alerts, dollar impact, and calendar-aware outreach win receptivity.',
    'Triggers cluster by vertical, season, and event so product logic and sales timing can align.',
  ],
  typeLabels: {
    REACTIVE: 'Reactive',
    PROACTIVE: 'Proactive',
    REGULATORY: 'Regulatory',
    SYSTEM: 'System / Vendor',
  },
  triggers: [
    {
      id: 'R-01',
      name: 'Monthly bill shows unexplained cost spike',
      type: 'REACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'peak',
      seasonality: 'Year-round; Jun–Aug and Jan–Feb highest',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote:
        'We had a weird multiplier happen in one of our bills. They listed 35,000 gallons instead of 3,500 — a 10× error in a pattern that should have been obvious.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Highest-volume trigger in primary research. Anomaly and dollar impact must surface before the PDF is opened.',
      productTag: 'FITS',
    },
    {
      id: 'R-02',
      name: 'Demand charge disconnected from perceived usage',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare', 'manufacturing'],
      urgency: 'high',
      seasonality: 'Aug–Sep post-summer; Feb–Mar post-winter',
      primarySource: 'Don Johnson · Trane Technologies',
      additionalSources:
        'Ross Snow · Matt Wilson · Bart Peacock · Intermountain Health',
      quote:
        'Most customers don’t know what rate structure they’re on. They don’t know if they have a demand ratchet. They just pay the bill. Even hospitals.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Structural information asymmetry converts when you monetize and explain the mechanism on the bill.',
      productTag: 'FITS',
    },
    {
      id: 'R-03',
      name: 'Wrong account, address, or meter attribution',
      type: 'REACTIVE',
      verticals: ['healthcare', 'cre'],
      urgency: 'high',
      seasonality: 'Quarterly budget reconciliation',
      primarySource: 'John Culver · AdventHealth',
      additionalSources: 'Scott Sukits · AdventHealth (field / controls)',
      quote:
        'Bills are not always matching the addresses of our sites. Bills for one hospital campus are being paid by another.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Site-to-invoice association is the automation prerequisite for everything else at multi-site scale.',
      productTag: 'FITS',
    },
    {
      id: 'R-04',
      name: 'Tax exemption not applied on utility bills',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'medium',
      seasonality: 'Annual tax/audit review',
      primarySource: 'John Culver · AdventHealth',
      additionalSources: 'Scott Sukits · AdventHealth',
      quote:
        'Non-profit tax exemptions — a real billing error category that goes undiscovered for months because nobody is systematically checking the tax line.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Recoverable dollars and credit claims close the loop from identified error to realized savings.',
      productTag: 'FITS',
    },
    {
      id: 'R-05',
      name: 'Power-factor penalty without explanation',
      type: 'REACTIVE',
      verticals: ['healthcare', 'manufacturing'],
      urgency: 'medium',
      seasonality: 'Year-round when monitoring exists',
      primarySource: 'Sean Sevy · Houston Methodist',
      quote:
        'We’re seeing power factor readings of 79–81% at one of our campuses. Below where we should be — but I’m not sure if it’s equipment or meter malfunction.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Even sophisticated buyers need a fast second opinion separating billing error from operations.',
      productTag: 'FITS',
    },
    {
      id: 'R-06',
      name: 'Ratchet locks after unexpected demand event',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare', 'manufacturing'],
      urgency: 'peak',
      seasonality: 'Aug–Sep after spike; cost persists 12 months',
      primarySource: 'Don Johnson · Trane Technologies',
      quote:
        'If a customer hits a high demand in July, they may pay for that demand for the next 12 months. Most don’t know until the bill is already high.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'High-dollar and poorly understood. Modeling and warnings beat post-bill surprise.',
      productTag: 'FITS',
    },
    {
      id: 'R-07',
      name: 'Utility dispute with no historical documentation',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'high',
      seasonality: 'Year-round',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote:
        'We had someone doing our bill processing for 10 to 15 years and she recently left, so we’re scrambling a little.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Archived bills and patterns are the evidence base for disputes — and continuity after turnover.',
      productTag: 'FITS',
    },
    {
      id: 'R-08',
      name: 'Retail supplier transition billing overlap or gap',
      type: 'REACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'high',
      seasonality: 'Contract anniversaries; Q4 budget cycle',
      primarySource: 'Marc Spieler · NVIDIA',
      quote:
        'ERCOT has 100+ REPs, an 87% commercial switching rate, and overlapping billing cycles during supplier transitions.',
      ccSurface: 'Deal Center',
      whyItMatters:
        'Structural complexity in home markets like ERCOT is a repeatable wedge for transition-error detection.',
      productTag: 'FITS',
    },
    {
      id: 'R-09',
      name: 'TOU tier misclassification on the bill',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare', 'manufacturing', 'qsr'],
      urgency: 'high',
      seasonality: 'Year-round; costliest in summer peak',
      primarySource: 'John Culver · AdventHealth',
      additionalSources: 'Scott Sukits · AdventHealth',
      quote:
        'On-peak, off-peak, discounted off-peak, super off-peak, extreme on-peak — all actual names. Wrong tier and nobody catches it without line-by-line review.',
      ccSurface: 'Rate Analyst',
      whyItMatters: 'Automated tariff cross-check beats manual workbook lookup at scale.',
      productTag: 'FITS',
    },
    {
      id: 'R-10',
      name: 'Water or wastewater consumption anomaly',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare', 'cre'],
      urgency: 'medium',
      seasonality: 'Summer irrigation; leaks year-round',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote: 'They listed 35,000 gallons instead of the typical 3,500 gallons.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Multi-utility anomaly detection expands the platform beyond electrons alone.',
      productTag: 'EXTENDS',
    },
    {
      id: 'P-01',
      name: 'Supply contract 9–12 months from expiration',
      type: 'PROACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'high',
      seasonality: 'Spring or fall evaluation',
      primarySource: 'Don Johnson · Trane Technologies',
      quote:
        'The contract renewal window is the moment when customers actually pay attention to their energy costs.',
      ccSurface: 'Deal Center',
      whyItMatters:
        'Known calendar event with a finite decision window suits Deal Center + renewal alerts.',
      productTag: 'FITS',
    },
    {
      id: 'P-02',
      name: 'Annual budget season opens',
      type: 'PROACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'high',
      seasonality: 'Higher-ed Jan–Mar; corporate Q3–Q4',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote:
        'Our budget is submitted in March, but the City of Austin’s rate changes are often not finalized until after we’ve already submitted. So we’re guessing.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Budget-vs-actual and rate intelligence close the gap finance cannot defend without data.',
      productTag: 'EXTENDS',
    },
    {
      id: 'P-03',
      name: 'Natural gas purchasing window (spring)',
      type: 'PROACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'high',
      seasonality: 'Mar–May before summer pricing',
      primarySource: 'Andi Ault · UT Austin',
      quote:
        'We buy $20 million in natural gas every year plus or minus depending on pricing. That’s a proactive decision we make in the spring.',
      ccSurface: 'Deal Center',
      whyItMatters:
        'Large commodity decisions need baseline data and structured comparison in a narrow season.',
      productTag: 'EXTENDS',
    },
    {
      id: 'P-04',
      name: 'New fiscal year reset and reconciliation',
      type: 'PROACTIVE',
      verticals: ['higher-ed'],
      urgency: 'medium',
      seasonality: 'Sep 1 FY start; Aug close-out',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote:
        'Our fiscal year is September 1 through August 31. That’s when everything resets — budgets, building assignments, everything.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Portfolio onboarding and prior-year actuals anchor the new-year baseline.',
      productTag: 'FITS',
    },
    {
      id: 'P-05',
      name: 'Scheduled generator test risks summer peak',
      type: 'PROACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'high',
      seasonality: 'Jun–Aug testing season',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote:
        'We test emergency generators at 80% load bank during summer — required for accreditation. But we’re not always thinking about what that does to our peak demand.',
      ccSurface: 'Dashboard',
      whyItMatters:
        'Proactive calendar insert prevents a scheduled event from becoming a 12-month ratchet problem.',
      productTag: 'FITS',
    },
    {
      id: 'P-06',
      name: 'New energy manager or expanded role',
      type: 'PROACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'medium',
      seasonality: 'Year-round',
      primarySource: 'Secondary research · industry pattern',
      quote:
        'Industry pattern: new hire evaluates existing vendor relationships in first 60–90 days.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Secondary-only trigger in synthesis (no primary sound bite); orientation and fast answers compress time-to-value for a fresh owner.',
      productTag: 'NET-NEW',
    },
    {
      id: 'P-07',
      name: 'ESG reporting deadline approaching',
      type: 'PROACTIVE',
      verticals: ['cre', 'healthcare', 'higher-ed'],
      urgency: 'medium',
      seasonality: 'Q1 for calendar-year filers; rule-specific',
      primarySource: 'Andi Ault · UT Austin (passing) + regulatory secondary',
      quote:
        'Annual ESG or carbon reporting deadlines require consumption, emissions, and utility documentation that is not yet organized or audit-ready.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Audit-ready consumption and utility documentation supports disclosure workloads.',
      productTag: 'EXTENDS',
    },
    {
      id: 'P-08',
      name: 'Capital project needs ROI for budget committee',
      type: 'PROACTIVE',
      verticals: ['healthcare', 'higher-ed'],
      urgency: 'high',
      seasonality: 'Healthcare Q4 planning; higher-ed Jan–Mar',
      primarySource: 'John Culver · AdventHealth',
      additionalSources: 'Scott Sukits · AdventHealth',
      quote:
        'A lot of the work for determining — hey, here\'s the energy conservation measures or the facility improvement measures we want to pursue next year — that has to come before budgeting cycle so that we\'re able to have and provide that package to our financial leaders at the hospital level.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Bill and rate scenarios translate technical projects into CFO-ready dollars.',
      productTag: 'FITS',
    },
    {
      id: 'P-09',
      name: 'Multi-year gas contract renewal',
      type: 'PROACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'high',
      seasonality: 'Mar–May; 3–6 month lead',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote:
        'We typically do three-year terms on gas. Every few years, that procurement decision comes around and we have to think through strips versus market again.',
      ccSurface: 'Deal Center',
      whyItMatters:
        'Repeating procurement cadence rewards Deal Center modeling and benchmarks.',
      productTag: 'EXTENDS',
    },
    {
      id: 'REG-01',
      name: 'Rate case filed before budget is locked',
      type: 'REGULATORY',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'peak',
      seasonality: 'Filings year-round; pain at budget season',
      primarySource: 'Phil Combs · Trane Technologies',
      quote:
        'Monitoring PUC filings, utility board meetings, rate hike proposals, grid-operator decisions — that’s forward intelligence nobody is providing.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Differentiated forward intelligence with dollar impact for a specific load profile.',
      productTag: 'EXTENDS',
    },
    {
      id: 'REG-02',
      name: 'PJM capacity auction flows to bills',
      type: 'REGULATORY',
      verticals: ['healthcare', 'higher-ed'],
      urgency: 'peak',
      seasonality: 'Results spring/summer; bill impact January',
      primarySource: 'Ann Walston · Bon Secours Mercy Health',
      additionalSources: 'Scott Czubkowski · Medxcel (Ascension)',
      quote:
        'Capacity charges in PJM have increased tenfold in the last two years due to data center construction in Ohio. Most urgent and least controllable billing issue for our PJM hospitals.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Wholesale regulatory mechanics need forecasted bill impact before charges land.',
      productTag: 'EXTENDS',
    },
    {
      id: 'REG-03',
      name: 'Carbon charges on gas bills',
      type: 'REGULATORY',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'medium',
      seasonality: '2026–2028 phase-ins by jurisdiction',
      primarySource: 'Troy Nevells · UT Austin Engineering',
      quote:
        'In northeastern states, carbon charges are now appearing on natural gas bills. Another layer of potential error and another tariff to interpret.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'New line items need jurisdiction-specific tariff interpretation and audit.',
      productTag: 'EXTENDS',
    },
    {
      id: 'REG-04',
      name: 'NYC Local Law 97 fine risk',
      type: 'REGULATORY',
      verticals: ['cre'],
      urgency: 'high',
      seasonality: 'May 1 reporting annually',
      primarySource: 'Secondary research · NYC LL97',
      additionalSources: 'Jamare Bates · JLL (CRE compliance / portfolio advisory)',
      quote:
        'Local Law 97 of 2019 requires buildings over 25,000 square feet to meet GHG emissions limits beginning in 2024, with an annual carbon emissions report due May 1 of each year.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Portfolio compliance status and exposure quantification drive capital and reporting action.',
      productTag: 'NET-NEW',
    },
    {
      id: 'REG-05',
      name: 'Rate redesign shifts fixed vs variable charges',
      type: 'REGULATORY',
      verticals: ['qsr', 'manufacturing', 'cre'],
      urgency: 'high',
      seasonality: 'Effective dates vary; year-round filings',
      primarySource: 'Walt Taylor · Panda Restaurant Group',
      additionalSources: 'Roger Goldstein · Panda Restaurant Group',
      quote:
        'Utilities will always adjust their rate structures to remain profitable. Energy managers who track only current rates will continually be caught behind.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Modeling redesign impact prevents silent erosion of efficiency economics.',
      productTag: 'FITS',
    },
    {
      id: 'F-01',
      name: 'Utility spend blows budget variance threshold',
      type: 'REACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'peak',
      seasonality: 'Monthly close; acute Q1 and Q3',
      primarySource: 'Phil Combs · Trane Technologies',
      additionalSources:
        'Scott Czubkowski · Medxcel (Ascension); Randy Dawes · Hyatt',
      quote:
        'Nobody cares until you monetize it. If you can’t put a dollar sign on the problem and put it in front of a CFO, it doesn’t get acted on.',
      ccSurface: 'Dashboard',
      whyItMatters:
        'Dollar-denominated variance answers before the CFO asks preserves credibility.',
      productTag: 'FITS',
    },
    {
      id: 'F-02',
      name: 'Unexplained YoY utility increase at quarterly close',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'high',
      seasonality: 'Quarterly; acute Feb and Aug',
      primarySource: 'Andi Ault · UT Austin',
      quote:
        'Flagging anomalies would be the first process — featured and flagged rather than looking for it. That would be time-saving.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Automated decomposition replaces manual bill-by-bill scavenger hunts.',
      productTag: 'FITS',
    },
    {
      id: 'F-03',
      name: 'Chargeback dispute on flat allocation',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'medium',
      seasonality: 'Year-round; acute at FY end',
      primarySource: 'James Norton · Texas State',
      additionalSources:
        'Andee Chamberlain · Carl Teague · Texas State (same interview)',
      quote:
        'Right now we charge buildings for utilities based on square footage. With actual usage data we could drive conservation.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Usage-based chargeback is a structural switching-cost wedge versus incumbents.',
      productTag: 'EXTENDS',
    },
    {
      id: 'F-04',
      name: 'Energy spend crosses C-suite materiality',
      type: 'PROACTIVE',
      verticals: ['healthcare', 'higher-ed', 'qsr', 'manufacturing'],
      urgency: 'high',
      seasonality: 'Annual board and quarterly earnings rhythm',
      primarySource: 'Marc Spieler · NVIDIA',
      quote:
        'Once energy spend hits $5M annually, it’s on the CFO’s radar. Below that, facilities problem. Above, a financial one.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Executive dashboards must summarize portfolio cost and opportunity at a glance.',
      productTag: 'FITS',
    },
    {
      id: 'F-05',
      name: 'Broker or consultant review finds nothing actionable',
      type: 'REACTIVE',
      verticals: ['healthcare', 'higher-ed'],
      urgency: 'medium',
      seasonality: 'Annual renewal; some quarterly cycles',
      primarySource: 'Sean Sevy · Houston Methodist',
      quote:
        'Prism does a cursory review of our invoices, but they’re not catching everything — we’re still seeing power factor anomalies.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Continuous audit layer augments outsourced review without replacing relationships.',
      productTag: 'FITS',
    },
    {
      id: 'REL-01',
      name: 'OEM rep uses bill story before equipment sale',
      type: 'PROACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'medium',
      seasonality: 'Fall and spring proposal peaks',
      primarySource: 'Don Johnson · Trane Technologies',
      quote:
        'If I could generate an energy profile for a customer — that would make my job a lot easier. And it gives the customer a reason to act.',
      ccSurface: 'Build Engine',
      whyItMatters:
        'Channel-led discovery embeds Clear Current in the equipment justification motion.',
      productTag: 'FITS',
    },
    {
      id: 'REL-02',
      name: 'Broker contract lacks independent rate-structure check',
      type: 'PROACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'high',
      seasonality: '9–12 month pre-expiration windows',
      primarySource: 'Don Johnson · Trane Technologies',
      additionalSources: 'Jamare Bates · JLL (CRE advisory)',
      quote:
        'The broker has their interests. The customer needs to understand not just the headline price, but whether the rate structure fits their usage.',
      ccSurface: 'Deal Center',
      whyItMatters:
        'Independent fit analysis de-risks procurement decisions in deregulated markets.',
      productTag: 'FITS',
    },
    {
      id: 'REL-03',
      name: 'Post-M&V audit asks “who monitors next month?”',
      type: 'REACTIVE',
      verticals: ['healthcare', 'higher-ed', 'manufacturing'],
      urgency: 'medium',
      seasonality: 'Any time post-audit',
      primarySource: 'Phil Combs · Trane Technologies',
      quote:
        'After we do an audit, the client always asks: what about next month? I can come back quarterly — but they need something watching continuously.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Continuous monitoring captures buyers at peak receptivity after baseline work.',
      productTag: 'FITS',
    },
    {
      id: 'REL-04',
      name: 'EnergyCAP renewal without AI upgrade path',
      type: 'PROACTIVE',
      verticals: ['higher-ed', 'healthcare'],
      urgency: 'high',
      seasonality: 'Annual renewal; Jan–Mar evaluations',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote: 'EnergyCAP tells us they can do that stuff, but it’s harder than it sounds.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Renewal timing is the competitive bake-off against familiar but stagnant tooling.',
      productTag: 'NET-NEW',
    },
    {
      id: 'REL-05',
      name: 'Long-tenured bill processor departs',
      type: 'REACTIVE',
      verticals: ['higher-ed', 'healthcare', 'cre'],
      urgency: 'peak',
      seasonality: '30–60 days post-departure',
      primarySource: 'Andee Chamberlain · Texas State',
      additionalSources:
        'Carl Teague · James Norton · Texas State (same interview)',
      quote:
        'We had someone doing our bill processing for 10 to 15 years and she recently left — so we’re scrambling. We’ll probably outsource that.',
      ccSurface: 'Rate Analyst',
      whyItMatters: 'Platform memory replaces single-point-of-failure tribal knowledge.',
      productTag: 'FITS',
    },
    {
      id: 'REL-06',
      name: 'Incumbent fails security or SOC 2 bar',
      type: 'SYSTEM',
      verticals: [
        'healthcare',
        'higher-ed',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'high',
      seasonality: 'Annual vendor audit cycles',
      primarySource: 'Phil Combs · Trane Technologies',
      quote:
        'You’ve got guys like me that would love to use this, and then IT says no, no, no.',
      ccSurface: 'Energy HQ',
      whyItMatters:
        'Enterprise readiness and security posture unlock procurement, not just features.',
      productTag: 'EXTENDS',
    },
    {
      id: 'REL-07',
      name: 'ENGIE-style aggregation without interpretation',
      type: 'PROACTIVE',
      verticals: ['healthcare'],
      urgency: 'high',
      seasonality: 'Annual contract review',
      primarySource: 'John Culver · AdventHealth',
      additionalSources:
        'Adam Zavadsky · ENGIE Impact; Scott Sukits · AdventHealth',
      quote:
        'ENGIE just aggregates and pays the bottom line. Being smarter — knowing how to interpret the bills and tell us why we should care — would be great.',
      ccSurface: 'Rate Analyst',
      whyItMatters:
        'Intelligence layer on top of pay-and-aggregate incumbents is a land-and-expand wedge.',
      productTag: 'FITS',
    },
    {
      id: 'OP-01',
      name: 'Summer peak demand season begins',
      type: 'PROACTIVE',
      verticals: [
        'higher-ed',
        'healthcare',
        'cre',
        'qsr',
        'hospitality',
        'manufacturing',
      ],
      urgency: 'peak',
      seasonality: 'Jun–Aug',
      primarySource: 'Andee Chamberlain · Texas State; Don Johnson · Trane',
      additionalSources:
        'Carl Teague · James Norton · Texas State; Ross Snow · Matt Wilson · Bart Peacock · Intermountain Health; Randy Dawes · Hyatt',
      quote:
        'Summer is when the numbers get real. Peak demand in July can set your charges for the next 12 months.',
      ccSurface: 'Dashboard',
      whyItMatters:
        'Highest financial-exposure window needs proactive warnings before events set the peak.',
      productTag: 'FITS',
    },
  ],
  alertDesign: [
    'Push anomaly and dollar-impact alerts before customers open bills — especially on monthly cycles.',
    'Encode vertical and fiscal calendars (higher-ed FY, healthcare capital season, QSR summer exposure) into notification timing.',
    'Pair reactive bill triggers with proactive calendar triggers (renewals, generator tests, peak season).',
    'Layer regulatory and wholesale signals (PUC dockets, PJM capacity) into forward charge forecasts, not just historical variance.',
    'Every alert should answer cost, cause hypothesis, and next action in language finance recognizes.',
  ],
  salesImplications: [
    'Time outbound and pipeline reviews to clustered triggers, not generic quarterly blitzes.',
    'Lead with monetized stories (spike, ratchet, transition error) before feature tours.',
    'Prioritize Texas and deregulated footprints where switching and overlap errors concentrate.',
    'Use channel (OEM, M&V, broker-adjacent) motions to manufacture discovery when buyers are not searching.',
    'Treat incumbent renewal, staff turnover, and aggregator gaps as named plays with short windows.',
  ],
}

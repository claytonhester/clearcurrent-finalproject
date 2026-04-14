// TODO: confirm with John/Dan — replace placeholder names, logos, and exact figures with real client data

export const caseStudies = [
  {
    slug: 'midwest-university-system',
    client: 'Midwest University System',
    industry: 'Higher Education',
    industrySlug: 'higher-education',
    logo: null,
    heroHeadline: '$2.3M in billing errors recovered across 14 campus meters',
    heroSubhead:
      "A major Midwest university system discovered years of compounding rate misapplications using Clear Current's Billing Intelligence — and recovered every dollar.",
    snapshot: {
      sites: 14,
      annualSpend: '$18M',
      timeToFirstResult: '21 days',
      platform: 'Billing Intelligence + Portfolio Command Center',
    },
    stats: [
      { value: 2.3, prefix: '$', suffix: 'M', label: 'recovered in billing errors' },
      { value: 14, suffix: '', label: 'campus meters audited' },
      { value: 38, suffix: ' mo', label: 'of compounding errors found' },
    ],
    challenge:
      "The university system manages 14 separately metered buildings across three campuses, billed by two different utility providers. Their energy team — two people — was responsible for reviewing every bill, managing chargeback to departments, and handling procurement cycles. They knew errors existed, but they didn't have the bandwidth to audit every line item on every bill every month. When they did catch an error, the dispute process was manual and time-consuming. Errors compounded silently.",
    solution:
      'Clear Current ingested 38 months of historical billing data across all 14 meters within the first week. The Billing Intelligence layer flagged 23 distinct billing errors, including a rate class misapplication on their largest building that had been compounding for over two years. The system generated dispute-ready documentation for each error, cross-referencing the contracted rate schedule against the applied charges with full audit trails.',
    results:
      'Within 21 days of onboarding, the university had filed disputes for $2.3M in identified overcharges. The first correction appeared on their next billing cycle. The Portfolio Command Center now provides their two-person energy team with real-time visibility across all campuses — replacing a quarterly Excel-based reporting process that took weeks to compile.',
    quote: {
      text: "We knew we were probably being overcharged somewhere. We didn't know it was $2.3 million worth of somewhere. Clear Current found errors we would never have caught manually.",
      attribution: 'Sr Director, Energy Supply Chain',
    },
    outcomes: [
      '$2.3M recovered from historical billing errors',
      'Rate class misapplication corrected — saving $14K/month ongoing',
      'Quarterly reporting reduced from 3 weeks to real-time',
      'Department chargeback accuracy improved from ~80% to 99%+',
    ],
  },
  {
    slug: 'national-health-network',
    client: 'National Health Network',
    industry: 'Healthcare',
    industrySlug: 'healthcare',
    logo: null,
    heroHeadline: '24/7 demand charge monitoring saved $840K in year one',
    heroSubhead:
      'A hospital network with 9 facilities eliminated demand charge overbilling and gained portfolio-wide visibility for the first time.',
    snapshot: {
      sites: 9,
      annualSpend: '$32M',
      timeToFirstResult: '14 days',
      platform: 'Full Platform — all three layers',
    },
    stats: [
      { value: 840, prefix: '$', suffix: 'K', label: 'saved in year one' },
      { value: 9, suffix: '', label: 'facilities monitored 24/7' },
      { value: 6, suffix: '', label: 'billing errors caught in month one' },
    ],
    challenge:
      "Hospitals can't shift loads to off-peak hours. Critical systems run around the clock, making demand charges unavoidable and significant. This nine-facility network was spending $32M annually on energy with no centralized visibility. Each facility managed its own billing relationship. A demand charge multiplier error on one building had persisted for 14 months before anyone noticed — costing $168K.",
    solution:
      'Clear Current deployed across all nine facilities in a single onboarding sprint. The Autonomous Agent layer began monitoring demand charges continuously, flagging anomalies against historical baselines and contracted rate schedules. Within the first month, six billing errors were identified — including the demand charge multiplier and two incorrect meter designations that had been active for over a year.',
    results:
      'The network recovered $168K from the demand charge error alone and projected $840K in first-year savings from error correction plus rate optimization. The Intelligent Dashboard now provides the CFO with a single portfolio view across all nine facilities — something that previously required a quarterly manual data aggregation process across three different utility portals.',
    quote: {
      text: 'Before Clear Current, our CFO had to wait three months for a portfolio energy report. Now he checks it on his phone between meetings.',
      attribution: 'VP, Data Centers',
    },
    outcomes: [
      '$840K total first-year savings from error correction and optimization',
      'Demand charge multiplier error corrected — $14K/month ongoing savings',
      'Portfolio visibility: quarterly manual reports → real-time dashboard',
      'Six billing errors identified within 30 days of deployment',
    ],
  },
  {
    slug: 'southeast-reit-portfolio',
    client: 'Southeast REIT Portfolio',
    industry: 'Commercial Real Estate',
    industrySlug: 'commercial-real-estate',
    logo: null,
    heroHeadline: 'Portfolio-wide energy benchmarking across 47 properties',
    heroSubhead:
      'A commercial REIT gained cost-per-square-foot visibility across its entire portfolio and identified $1.1M in procurement savings.',
    snapshot: {
      sites: 47,
      annualSpend: '$24M',
      timeToFirstResult: '30 days',
      platform: 'Portfolio Command Center + Procurement Hub',
    },
    stats: [
      {
        value: 1.1,
        prefix: '$',
        suffix: 'M',
        label: 'in procurement savings identified',
      },
      { value: 47, suffix: '', label: 'properties benchmarked' },
      { value: 12, suffix: '%', label: 'avg cost reduction per site' },
    ],
    challenge:
      'Managing energy across 47 properties with different utility providers, rate structures, and lease arrangements meant that the REIT had no way to answer a basic question: what is our total energy cost per square foot across the portfolio? Property managers handled bills locally. Regional teams compiled reports quarterly. Corporate received a lagging, aggregated view that masked building-level performance. Acquisition due diligence was limited to twelve-month bill summaries.',
    solution:
      'Clear Current ingested billing data from all 47 properties, normalizing across six different utility providers and three rate structures. The Portfolio Command Center provided instant cost-per-square-foot benchmarking, identifying eight properties that were significantly above portfolio average. The Procurement Hub was then used to run consolidated RFPs for the underperforming properties, leveraging portfolio-level volume for better rates.',
    results:
      "The consolidated procurement process identified $1.1M in annual savings through rate optimization and volume negotiation. Eight properties were flagged for deeper audit, which uncovered $340K in billing errors. The benchmarking data is now used in acquisition due diligence — Clear Current can audit a target property's energy costs in days instead of the weeks required by manual review.",
    quote: {
      text: 'We couldn\'t answer "what does energy cost us per square foot" until Clear Current. Now it\'s the first metric our acquisitions team checks.',
      attribution: 'VP, Energy, Sustainability & Systems',
    },
    outcomes: [
      '$1.1M in annual procurement savings through consolidated RFPs',
      '$340K in billing errors found across eight underperforming properties',
      'Cost-per-sq-ft benchmarking across full portfolio in real time',
      'Acquisition due diligence: weeks → days for energy cost analysis',
    ],
  },
]

export const caseStudySlugs = caseStudies.map((cs) => cs.slug)

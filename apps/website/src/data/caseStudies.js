// Composites from primary research (university, national health system, multi-site food retail).
// Numeric callouts cite interview / synthesis patterns — not a single named customer outcome.

export const caseStudies = [
  {
    slug: 'midwest-university-system',
    client: 'Large public university (research composite)',
    industry: 'Higher Education',
    industrySlug: 'higher-education',
    logo: null,
    heroHeadline: 'When a 10× utility line item still looked “normal” on the bill',
    heroSubhead:
      'Primary research: campus operations flagged water usage jumping from thousands of gallons per month to tens of thousands — a structural anomaly easy to miss when averages drift slowly.',
    snapshot: {
      sites: 'Multi-building campus',
      annualSpend: 'Eight-figure utility budget (typical)',
      timeToFirstResult: 'Pattern surfaced in ops review',
      platform: 'Billing Intelligence + chargeback-ready views',
    },
    stats: [
      { value: 10, suffix: '×', label: 'reported spike vs prior usage' },
      { value: 2, suffix: '', label: 'internal audiences (ops vs finance/AP)' },
      {
        value: 132,
        suffix: '+',
        label: 'peer reviews citing legacy EM tool friction',
      },
    ],
    challenge:
      'Energy teams and accounts payable often need opposite cuts of the same bill: consumption and demand for operations, dollars and accruals for finance. Spreadsheets and quarterly rollups hide step-changes when every month still “looks fine” against a moving average. That is the dual-audience problem we heard repeatedly in higher-ed interviews.',
    solution:
      'Clear Current ingests bills and contracts, keeps usage and cost views in sync, and surfaces step-changes and rate-structure mismatches with citations back to tariff language. Chargeback and variance narratives can be shared without re-keying data between teams.',
    results:
      'The platform is designed so the next time usage or cost departs from contract and history, both facilities and finance see it in the same week — not after the anomaly becomes the new baseline.',
    quote: {
      text: 'I care more about demand and usage… the bill processing folks care more about the bottom line numbers.',
      attribution: 'Energy & water manager',
    },
    outcomes: [
      'Single source of truth for ops and finance on the same meters',
      'Step-change detection instead of only month-over-month thresholds',
      'Dispute-ready excerpts tied to tariff and contract clauses',
    ],
  },
  {
    slug: 'national-health-network',
    client: 'National health system operator (research composite)',
    industry: 'Healthcare',
    industrySlug: 'healthcare',
    logo: null,
    heroHeadline: 'Ghost meters, storm exposure, and 24/7 load',
    heroSubhead:
      'Primary research: one network described seven-figure storm costs in days and seven-figure annual bleed from meters that should have been off — the kind of issues that require portfolio-scale vigilance.',
    snapshot: {
      sites: '100+ acute & ambulatory sites',
      annualSpend: 'Nine-figure utility spend (typical)',
      timeToFirstResult: 'Flags prioritized by materiality',
      platform: 'Full platform — audit + monitoring + portfolio view',
    },
    stats: [
      {
        value: 7.2,
        prefix: '$',
        suffix: 'M',
        label: 'three-day weather event cost (reported)',
        decimals: 1,
      },
      {
        value: 1,
        prefix: '$',
        suffix: 'M+',
        label: 'annual ghost-meter payments (paraphrased)',
      },
      { value: 100, suffix: '+', label: 'facilities in one interviewed network' },
    ],
    challenge:
      'Hospitals cannot treat energy like an office park: clinical loads run continuously, storms create nonlinear cost shocks, and vacated space can keep billing if meters are not retired cleanly. Finance often lacks a real-time portfolio roll-up; facilities chase exceptions manually.',
    solution:
      'Continuous ingestion and normalization across utilities, with demand-charge and ratchet monitoring, ghost-meter checks against occupancy, and portfolio dashboards that leadership can scan without waiting for quarterly consolidations.',
    results:
      'Teams shift from reactive firefighting after a budget miss to proactive flags when bills diverge from contracts, occupancy, or weather-adjusted expectations.',
    quote: {
      text: 'Over $1M per year in payments for vacated sites.',
      attribution: 'National director, energy & facility performance (paraphrased)',
    },
    outcomes: [
      'Demand and ratchet risk tracked against history and contract',
      'Vacancy and meter-status checks to reduce “zombie” accounts',
      'Executive-ready portfolio KPIs without manual consolidation',
    ],
  },
  {
    slug: 'southeast-reit-portfolio',
    client: 'Multi-site food retail operator (research composite)',
    industry: 'Food & retail (multi-site)',
    industrySlug: 'commercial-real-estate',
    logo: null,
    heroHeadline: 'Thousands of sites, one missed handoff can idle a store',
    heroSubhead:
      'Primary research: the most feared failures are operational — service disruptions from administrative mistakes — not just line-item variances. Shared-meter and neighbor-allocation errors can persist until someone asks the right question.',
    snapshot: {
      sites: '2,600+ locations (public interview context)',
      annualSpend: 'Ten-figure utility spend (typical)',
      timeToFirstResult: 'Cross-site questions in plain language',
      platform: 'Portfolio Command Center + conversational audit',
    },
    stats: [
      { value: 2600, suffix: '+', label: 'sites in one interviewed chain' },
      {
        value: 12,
        suffix: ' mo',
        label: 'neighbor allocation error duration (reported)',
      },
      {
        value: 30,
        suffix: 'K+',
        label: 'U.S. water utilities — many still paper-heavy',
      },
    ],
    challenge:
      'At extreme scale, continuity beats marginal cents per kWh: a bill routed to the wrong inbox can ripple into a shutoff. Finance asks why costs differ across cities and rate schedules; answering today means downloading PDFs from multiple portals.',
    solution:
      'Clear Current centralizes bills and contracts, answers cross-site questions in natural language with citations, and highlights allocation and shared-meter risks before they become year-long baselines.',
    results:
      'Operators move from tribal knowledge and heroics to repeatable monitoring — with audit trails when procurement or legal needs to intervene.',
    quote: {
      text: "I think if you could ask that question… instead of going, downloading the bills, reviewing the bills… You're on three different utilities.",
      attribution: 'Energy manager, multi-site dining brand',
    },
    outcomes: [
      'Portfolio-wide Q&A on tariffs, riders, and site exceptions',
      'Shared-meter and allocation drift flagged early',
      'Continuity-focused alerting for payment and service risk',
    ],
  },
]

export const caseStudySlugs = caseStudies.map((cs) => cs.slug)

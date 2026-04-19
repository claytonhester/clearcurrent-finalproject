/**
 * Editorial targets for strengthening primary research — not a pipeline tracker.
 * Grounded in coverage gaps called out in D5/D7 notes.
 */

export interface CoverageGapRow {
  vertical: string
  coverageToday: string
  addInterviews: string
  rationale: string
  /** When set, row is one of the three core GTM markets (beachhead + parallel + long-term). */
  tierLabel?: string
  /** Illustrative organizations only—not contacted, not endorsements, not a named outreach list. */
  companyTargets?: string[]
}

export const COVERAGE_GAP_ROWS: CoverageGapRow[] = [
  {
    vertical: 'Higher education',
    tierLabel: 'Beachhead — highest priority',
    coverageToday: 'Strong start — two institutions, finance + ops; still narrow vs the full segment.',
    addInterviews: '8–12+',
    rationale:
      'Treat this as a deep vertical study, not a handful of anecdotes. Add breadth across public vs private, R1 vs regional, different utility regulatory environments, district-energy vs non-district campuses, and distinct procurement paths. Sub-segments likely behave differently on budget timing, chargeback politics, and EnergyCAP posture—interviews should surface where playbooks diverge.',
    companyTargets: [
      'Ohio State University',
      'University of Michigan',
      'Arizona State University',
      'University of Wisconsin System',
      'Georgia Institute of Technology',
      'University of Florida',
    ],
  },
  {
    vertical: 'Healthcare systems',
    tierLabel: 'Long-term enterprise — priority',
    coverageToday: 'Strong start — multiple IDNs and corporate + field roles; still one corner of a huge segment.',
    addInterviews: '8–12+',
    rationale:
      'Scale interviews to map how energy, finance, supply chain, and IT interact across system types (community vs academic medical center, outsourced vs insourced bill pay, different processor relationships). Sub-system economics and security gates vary; the corpus needs enough depth to see patterns vs one-off stories.',
    companyTargets: [
      'Kaiser Permanente',
      'HCA Healthcare',
      'CommonSpirit Health',
      'Mayo Clinic',
      'Cleveland Clinic',
      'Trinity Health',
    ],
  },
  {
    vertical: 'Multi-site retail & restaurants',
    tierLabel: 'Parallel pipeline — priority',
    coverageToday: 'Moderate — one multi-site operator (two voices); not yet a market map.',
    addInterviews: '8–12+',
    rationale:
      'Build a real sample across corporate vs franchise-heavy models, QSR vs casual vs big-box-adjacent footprints, deregulated vs regulated markets, and ESCO/processor dependence. Billing, ratchet, and renewal mechanics differ by sub-sector—need volume to tell what generalizes.',
    companyTargets: [
      'Walmart',
      'Target',
      'The Kroger Co.',
      'Starbucks',
      'Yum! Brands',
      'Chipotle Mexican Grill',
      'Restaurant Brands International',
    ],
  },
  {
    vertical: 'Hospitality',
    coverageToday: 'Thin — single brand-level voice.',
    addInterviews: '2',
    rationale:
      'Confirm energy vs finance split and brand vs property-level controls across another flag; supports calendar and trigger maps.',
    companyTargets: [
      'Marriott International',
      'Hilton Worldwide Holdings',
      'IHG Hotels & Resorts',
      'Host Hotels & Resorts',
    ],
  },
  {
    vertical: 'Commercial real estate (operators)',
    coverageToday: 'Thin — advisor lens only (no portfolio owner).',
    addInterviews: '2',
    rationale:
      'Landlord vs tenant billing and savings capture require an asset-manager or REIT energy lead, not only advisory.',
    companyTargets: [
      'Prologis',
      'Simon Property Group',
      'Boston Properties',
      'Realty Income',
    ],
  },
  {
    vertical: 'Channel & OEM / advisor',
    coverageToday: 'Strong — Trane, ENGIE, NVIDIA-class coverage.',
    addInterviews: '0–1',
    rationale:
      'Optional utility or rates desk perspective if positioning shifts toward regulated-side corroboration.',
    companyTargets: ['Duke Energy', 'Southern Company', 'Exelon'],
  },
  {
    vertical: 'Data centers',
    coverageToday: 'None — no completed primary interview yet.',
    addInterviews: '2–3',
    rationale:
      'Minimum set to validate tariff complexity, hedging, and whether invoice intelligence maps to buyer motion.',
    companyTargets: ['Equinix', 'Digital Realty Trust', 'QTS Realty Trust', 'CyrusOne'],
  },
  {
    vertical: 'Industrial & manufacturing',
    coverageToday: 'None — no completed primary interview yet.',
    addInterviews: '2',
    rationale:
      'Load-shape and tariff exposure differ materially; needed before treating triggers and calendar as universal.',
    companyTargets: ['3M', 'Dow', 'Ford Motor Company', 'Toyota Motor North America'],
  },
  {
    vertical: 'Corporate multi-site offices',
    coverageToday: 'Under-represented — mostly inferred via channel.',
    addInterviews: '2',
    rationale:
      'Standalone willingness-to-pay vs embedded processor stack (brief proof gap); pair one processor-dependent buyer with one not.',
    companyTargets: ['Amazon', 'Salesforce', 'Meta Platforms'],
  },
]

export interface NewVerticalTarget {
  vertical: string
  pitch: string
}

/** Verticals with little or no primary voice today — exploratory list for future waves. */
export const RECOMMENDED_NEW_VERTICALS: NewVerticalTarget[] = [
  {
    vertical: 'Data centers & colocation',
    pitch:
      'Validates tariff, hedging, and contract-heavy load vs campus narratives; high complexity buyers.',
  },
  {
    vertical: 'Industrial / heavy manufacturing',
    pitch:
      'Demand charges, riders, and shift work without district energy — tests Rate Analyst generalizability.',
  },
  {
    vertical: 'Grocery, big-box & national retail (non-QSR)',
    pitch:
      'Multi-site footprint and brand procurement; complements QSR evidence with different margin and utility mix.',
  },
  {
    vertical: 'Logistics, warehousing & e-commerce fulfillment',
    pitch:
      'Large flat loads, ratchet risk, and operator vs landlord splits on utility billing.',
  },
  {
    vertical: 'K-12 school districts & county facilities',
    pitch:
      'Public procurement, bond-driven capital, and facilities finance—adjacent calendar and politics to higher ed.',
  },
  {
    vertical: 'Life sciences, pharma & cold-chain processing',
    pitch:
      'High reliability loads, tariff riders, and validation-heavy environments—different buyer than general retail.',
  },
  {
    vertical: 'Airports, transit & large public infrastructure',
    pitch:
      'Enterprise energy teams with mixed regulated exposure; long procurement cycles.',
  },
  {
    vertical: 'Owner-operated CRE (REIT / institutional landlord)',
    pitch:
      'Closes advisor-only CRE gap; landlord vs tenant billing and savings capture.',
  },
  {
    vertical: 'National corporate facilities (office portfolio)',
    pitch:
      'Standalone SaaS willingness-to-pay vs embedded processor stack.',
  },
  {
    vertical: 'State / local government (non K-12)',
    pitch:
      'Public transparency and procurement rules differ from private higher ed—good fit test after core beachhead.',
  },
]

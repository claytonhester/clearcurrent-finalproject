/**
 * Editorial targets for strengthening primary research — not a pipeline tracker.
 * Grounded in corpus limitations called out in D5/D7 gap notes.
 */

export interface CoverageGapRow {
  vertical: string
  corpusToday: string
  addInterviews: string
  rationale: string
}

export const COVERAGE_GAP_ROWS: CoverageGapRow[] = [
  {
    vertical: 'Higher education',
    corpusToday: 'Strong — two institutions, finance + ops covered.',
    addInterviews: '1–2',
    rationale:
      'Add a third flagship or large public system (distinct geography) to stress-test district energy, chargebacks, and procurement without overfitting to Texas.',
  },
  {
    vertical: 'Healthcare systems',
    corpusToday: 'Strong — multiple IDNs and corporate + field roles.',
    addInterviews: '1–2',
    rationale:
      'Bias toward enterprise energy and engineering; add procurement / supply-chain or treasury voice if contracting and SOC posture become diligence themes.',
  },
  {
    vertical: 'Multi-site retail & restaurants',
    corpusToday: 'Moderate — one multi-site operator (two voices).',
    addInterviews: '2',
    rationale:
      'Franchisee vs corporate billing variance and processor dependence need a second chain profile for comparability.',
  },
  {
    vertical: 'Hospitality',
    corpusToday: 'Thin — single brand-level voice.',
    addInterviews: '2',
    rationale:
      'Confirm energy vs finance split and brand vs property-level controls across another flag; supports calendar and trigger maps.',
  },
  {
    vertical: 'Commercial real estate (operators)',
    corpusToday: 'Thin — advisor lens only (no portfolio owner).',
    addInterviews: '2',
    rationale:
      'Landlord vs tenant billing and savings capture require an asset-manager or REIT energy lead, not only advisory.',
  },
  {
    vertical: 'Channel & OEM / advisor',
    corpusToday: 'Strong — Trane, ENGIE, NVIDIA-class coverage.',
    addInterviews: '0–1',
    rationale:
      'Optional utility or rates desk perspective if positioning shifts toward regulated-side corroboration.',
  },
  {
    vertical: 'Data centers',
    corpusToday: 'None — no completed primary in corpus.',
    addInterviews: '2–3',
    rationale:
      'Minimum set to validate tariff complexity, hedging, and whether invoice intelligence maps to buyer motion.',
  },
  {
    vertical: 'Industrial & manufacturing',
    corpusToday: 'None — no completed primary in corpus.',
    addInterviews: '2',
    rationale:
      'Load-shape and tariff exposure differ materially; needed before treating triggers and calendar as universal.',
  },
  {
    vertical: 'Corporate multi-site offices',
    corpusToday: 'Under-represented — mostly inferred via channel.',
    addInterviews: '2',
    rationale:
      'Standalone willingness-to-pay vs embedded processor stack (brief proof gap); pair one processor-dependent buyer with one not.',
  },
]

export interface NewVerticalTarget {
  vertical: string
  pitch: string
}

/** Verticals with little or no primary voice today — ordered roughly by research priority. */
export const RECOMMENDED_NEW_VERTICALS: NewVerticalTarget[] = [
  {
    vertical: 'Data centers & colocation',
    pitch:
      'Highest gap vs current corpus; validates whether product narrative extends to hedged / contract-heavy tariffs.',
  },
  {
    vertical: 'Industrial / heavy manufacturing',
    pitch:
      'Demand charge and rider complexity without campus-style district energy — tests generalizability of Rate Analyst.',
  },
  {
    vertical: 'Owner-operated CRE (REIT / institutional landlord)',
    pitch:
      'Closes the “advisor-only” CRE gap and grounds landlord–tenant savings mechanics.',
  },
  {
    vertical: 'National corporate facilities (office portfolio)',
    pitch:
      'Addresses under-representation vs hospitality + retail; clarifies standalone SaaS willingness-to-pay.',
  },
  {
    vertical: 'State / local government & higher-ed adjacent',
    pitch:
      'Optional expansion wave — procurement rules and public transparency differ from private HE — after core beachhead is saturated.',
  },
]

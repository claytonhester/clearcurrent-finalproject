import type { Source } from './types'

export const SOURCES: Record<string, Source> = {
  // =========================================================================
  // Strategic spine — Decision Brief
  // =========================================================================
  'db-proof-1': {
    id: 'db-proof-1',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §1 Proof 1 — Reactive by Design',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'proof-1',
  },
  'db-proof-2': {
    id: 'db-proof-2',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §1 Proof 2 — Billing Errors Are Legally Documented',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'proof-2',
  },
  'db-proof-3': {
    id: 'db-proof-3',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §1 Proof 3 — Finance/Ops Dual-Audience',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'proof-3',
  },
  'db-proof-4': {
    id: 'db-proof-4',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §1 Proof 4 — Regulatory Intelligence White Space',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'proof-4',
  },
  'db-proof-5': {
    id: 'db-proof-5',
    kind: 'writtenDeliverable',
    title: "Decision Brief §1 Proof 5 — Arcadia's Competitive Gap",
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'proof-5',
  },
  'db-open-q1': {
    id: 'db-open-q1',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §2 Open Q1 — Has a Dollar Been Recovered?',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'open-q1',
  },
  'db-open-q2': {
    id: 'db-open-q2',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §2 Open Q2 — Will IT Security Gate Adoption?',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'open-q2',
  },
  'db-open-q3': {
    id: 'db-open-q3',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §2 Open Q3 — Corporate Multi-Site Voice',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'open-q3',
  },
  'db-beachhead': {
    id: 'db-beachhead',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §3 — Beachhead Recommendation',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'section-3',
  },
  'db-module-priority': {
    id: 'db-module-priority',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §4 — Module Priority',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'section-4',
  },
  'db-assumptions': {
    id: 'db-assumptions',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §5 — What Changes If You Are Wrong',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'section-5',
  },
  'db-decisions': {
    id: 'db-decisions',
    kind: 'writtenDeliverable',
    title: 'Decision Brief §6 — 30-Day Decision Checklist',
    file: 'research/outputs/synthesis/00_decision_brief.md',
    anchor: 'section-6',
  },

  // =========================================================================
  // D1–D8 written source memos (backing markdown)
  // =========================================================================
  'd1-triggers': {
    id: 'd1-triggers',
    kind: 'writtenDeliverable',
    title: 'D1 — Engagement Trigger Map',
    file: 'research/outputs/synthesis/D1_Engagement_Trigger_Map.md',
  },
  'd2-calendar': {
    id: 'd2-calendar',
    kind: 'writtenDeliverable',
    title: 'D2 — Seasonal Energy Management Calendar',
    file: 'research/outputs/synthesis/D2_Seasonal_Energy_Management_Calendar.md',
  },
  'd3-journeys': {
    id: 'd3-journeys',
    kind: 'writtenDeliverable',
    title: 'D3 — Customer Journey Maps',
    file: 'research/outputs/synthesis/D3_Customer_Journey_Maps.md',
  },
  'd4-modules': {
    id: 'd4-modules',
    kind: 'writtenDeliverable',
    title: 'D4 — Product Module Recommendations',
    file: 'research/outputs/synthesis/D4_Product_Module_Recommendations.md',
  },
  'd5-heatmap': {
    id: 'd5-heatmap',
    kind: 'writtenDeliverable',
    title: 'D5 — Market Opportunity Heatmap',
    file: 'research/outputs/synthesis/D5_Market_Opportunity_Heatmap.md',
  },
  'd6-competitive': {
    id: 'd6-competitive',
    kind: 'writtenDeliverable',
    title: 'D6 — Competitive Intelligence Brief',
    file: 'research/outputs/synthesis/D6_Competitive_Intelligence_Brief.md',
  },
  'd6-competitive-deep-dive': {
    id: 'd6-competitive-deep-dive',
    kind: 'writtenDeliverable',
    title:
      'Competitive research — utility bill intelligence & energy management platforms',
    file: 'research/SECONDARY DATA/Competitive Research - Utility Bill Intelligence and Energy Management Platforms.md',
    note: 'Internal research memo (not surfaced in portal UI). Vendor matrix + citations; feeds D6 updates.',
  },
  'd6-compass-energycap': {
    id: 'd6-compass-energycap',
    kind: 'writtenDeliverable',
    title: 'Compass — EnergyCAP and the utility bill intelligence competitive set',
    file: 'research/SECONDARY DATA/Compass - EnergyCAP and utility bill intelligence competitive set.md',
    note: 'Internal memo (not surfaced in portal UI). PE ownership, Wattics, Watts AI, Schneider RA+, wedge framing.',
  },
  'd6-whitespace': {
    id: 'd6-whitespace',
    kind: 'writtenDeliverable',
    title: 'D6 §3 — White Space Analysis',
    file: 'research/outputs/synthesis/D6_Competitive_Intelligence_Brief.md',
    anchor: 'section-3',
  },
  'd6-objections': {
    id: 'd6-objections',
    kind: 'writtenDeliverable',
    title: 'D6 §5 — Objection Handling',
    file: 'research/outputs/synthesis/D6_Competitive_Intelligence_Brief.md',
    anchor: 'section-5',
  },
  'd7-investor': {
    id: 'd7-investor',
    kind: 'writtenDeliverable',
    title: 'D7 — Investor Narrative & Pitch Framework',
    file: 'research/outputs/synthesis/D7_Investor_Narrative_and_Pitch_Framework.md',
  },
  'd8-gtm': {
    id: 'd8-gtm',
    kind: 'writtenDeliverable',
    title: 'D8 — GTM Strategy Playbook',
    file: 'research/outputs/synthesis/D8_GTM_Strategy_Playbook.md',
  },

  // =========================================================================
  // Primary research — quote banks, contacts, compiled transcripts/summaries
  // =========================================================================
  'primary-quotes': {
    id: 'primary-quotes',
    kind: 'primary-quote-bank',
    title: 'Primary quote bank',
    file: 'research/outputs/primary/02_quote_bank.md',
  },
  'master-quotes': {
    id: 'master-quotes',
    kind: 'primary-quote-bank',
    title: 'Master quote bank',
    file: 'research/outputs/02_quote_bank.md',
  },
  'primary-contacts': {
    id: 'primary-contacts',
    kind: 'primary-contact-list',
    title: 'Primary contact list',
    file: 'research/outputs/primary/01_contact_list.md',
  },

  // =========================================================================
  // Primary interviews (company cards)
  // =========================================================================
  'cc-texas-state': {
    id: 'cc-texas-state',
    kind: 'primary-company-card',
    title: 'Texas State University — Andee Chamberlain, James Norton',
    file: 'research/outputs/primary/company_cards/co-01_Texas_State_University.md',
  },
  'cc-ut-austin-finance': {
    id: 'cc-ut-austin-finance',
    kind: 'primary-company-card',
    title: 'UT Austin Finance — Andi Ault',
    file: 'research/outputs/primary/company_cards/co-02_UT_Austin_Finance.md',
  },
  'cc-ut-austin-ops': {
    id: 'cc-ut-austin-ops',
    kind: 'primary-company-card',
    title: 'UT Austin Operations',
    file: 'research/outputs/primary/company_cards/co-03_UT_Austin_Operations.md',
  },
  'cc-medxcel': {
    id: 'cc-medxcel',
    kind: 'primary-company-card',
    title: 'Medxcel / Ascension — Scott Czubkowski',
    file: 'research/outputs/primary/company_cards/co-04_Ascension_Medxcel.md',
  },
  'cc-bon-secours': {
    id: 'cc-bon-secours',
    kind: 'primary-company-card',
    title: 'Bon Secours Mercy Health',
    file: 'research/outputs/primary/company_cards/co-05_Bon_Secours_Mercy_Health.md',
  },
  'cc-houston-methodist': {
    id: 'cc-houston-methodist',
    kind: 'primary-company-card',
    title: 'Houston Methodist',
    file: 'research/outputs/primary/company_cards/co-06_Houston_Methodist.md',
  },
  'cc-intermountain': {
    id: 'cc-intermountain',
    kind: 'primary-company-card',
    title: 'Intermountain Health',
    file: 'research/outputs/primary/company_cards/co-07_Intermountain_Health.md',
  },
  'cc-adventhealth': {
    id: 'cc-adventhealth',
    kind: 'primary-company-card',
    title: 'AdventHealth — Sukits',
    file: 'research/outputs/primary/company_cards/co-08_AdventHealth.md',
  },
  'cc-panda-goldstein': {
    id: 'cc-panda-goldstein',
    kind: 'primary-company-card',
    title: 'Panda Restaurant Group — Roger Goldstein',
    file: 'research/outputs/primary/company_cards/co-09_Panda_Roger_Goldstein.md',
  },
  'cc-panda-taylor': {
    id: 'cc-panda-taylor',
    kind: 'primary-company-card',
    title: 'Panda Restaurant Group — Walt Taylor',
    file: 'research/outputs/primary/company_cards/co-10_Panda_Walt_Taylor.md',
  },
  'cc-hyatt': {
    id: 'cc-hyatt',
    kind: 'primary-company-card',
    title: 'Hyatt — Randy Dawes',
    file: 'research/outputs/primary/company_cards/co-11_Hyatt_Randy_Dawes.md',
  },
  'cc-jll': {
    id: 'cc-jll',
    kind: 'primary-company-card',
    title: 'JLL — Jamare Bates',
    file: 'research/outputs/primary/company_cards/co-12_JLL_Jamare_Bates.md',
  },
  'cc-nvidia-spieler': {
    id: 'cc-nvidia-spieler',
    kind: 'primary-company-card',
    title: 'NVIDIA — Marc Spieler',
    file: 'research/outputs/primary/company_cards/co-13_NVIDIA_Marc_Spieler.md',
  },
  'cc-engie-zavadsky': {
    id: 'cc-engie-zavadsky',
    kind: 'primary-company-card',
    title: 'ENGIE Impact — Adam Zavadsky',
    file: 'research/outputs/primary/company_cards/co-14_ENGIE_Impact_Adam_Zavadsky.md',
  },
  'cc-trane-johnson': {
    id: 'cc-trane-johnson',
    kind: 'primary-company-card',
    title: 'Trane Technologies — Don Johnson',
    file: 'research/outputs/primary/company_cards/co-15_Trane_Don_Johnson.md',
  },
  'cc-trane-combs': {
    id: 'cc-trane-combs',
    kind: 'primary-company-card',
    title: 'Trane Technologies — Phil Combs',
    file: 'research/outputs/primary/company_cards/co-16_Trane_Phil_Combs.md',
  },

  // =========================================================================
  // Product context + pipeline
  // =========================================================================
  'product-context': {
    id: 'product-context',
    kind: 'product-context',
    title: 'Clear Current Product Context',
    file: 'research/CLEAR_CURRENT_PRODUCT_CONTEXT.md',
  },
  'pipeline-primary': {
    id: 'pipeline-primary',
    kind: 'pipeline',
    title: 'Primary research pipeline',
    file: 'research/pipeline_1_primary.py',
  },
  'pipeline-secondary': {
    id: 'pipeline-secondary',
    kind: 'pipeline',
    title: 'Secondary research pipeline',
    file: 'research/pipeline_2_secondary.py',
  },
  'pipeline-consolidation': {
    id: 'pipeline-consolidation',
    kind: 'pipeline',
    title: 'Consolidation pipeline (D0–D8)',
    file: 'research/pipeline_3_synthesis.py',
  },

  // =========================================================================
  // External / regulatory / trade press citations
  // =========================================================================
  'ferc-firstenergy-108m': {
    id: 'ferc-firstenergy-108m',
    kind: 'external',
    title: 'FERC audit: $108M mischarged at FirstEnergy',
    url: 'https://energyandpolicy.org/firstenergy-accounting-foul-up/',
    note: 'Public reporting on FERC audit context (secondary research citation chain).',
  },
  'ri-puc-83': {
    id: 'ri-puc-83',
    kind: 'external',
    title: 'Rhode Island PUC: 83% of flagged billing exceptions sent to customers anyway',
    note: 'Rhode Island regulatory and broadcast coverage summarized in secondary claim verification.',
  },
  'harvard-law-2025': {
    id: 'harvard-law-2025',
    kind: 'external',
    title:
      'Harvard Environmental & Energy Law Program (2025): utility ratepayer asymmetry',
    url: 'https://eelp.law.harvard.edu/wp-content/uploads/2025/03/Harvard-ELI-Extracting-Profits-from-the-Public.pdf',
    note: 'PDF working paper cited in secondary research.',
  },
  'energycap-2026-survey': {
    id: 'energycap-2026-survey',
    kind: 'external',
    title: 'EnergyCAP 2026 State of the Industry Survey',
    url: 'https://www.energycap.com/',
    note: 'Vendor survey statistics (reactive buyers, cost expectations) used in secondary synthesis.',
  },
  'mcmorrow-2023': {
    id: 'mcmorrow-2023',
    kind: 'external',
    title:
      'McMorrow Reports (2023): deferred maintenance culture in 30%+ of facility orgs',
    note: 'Facilities workforce / maintenance culture statistics cited in secondary market synthesis.',
  },
  'energycap-reviews': {
    id: 'energycap-reviews',
    kind: 'external',
    title: 'EnergyCAP: 132 G2 + Capterra reviews',
    url: 'https://www.g2.com/products/energycap/reviews',
    note: 'Aggregated user-review themes (chargebacks, allocation) used as secondary signal.',
  },
  'ohio-puc-275': {
    id: 'ohio-puc-275',
    kind: 'external',
    title: 'Ohio PUC: 275-day statutory rate-case timelines',
    note: 'Regulatory calendar benchmark used in secondary regulatory-intelligence framing.',
  },
  'aes-ohio-2024': {
    id: 'aes-ohio-2024',
    kind: 'external',
    title: 'AES Ohio 2024 rate case: ~9% commercial rate increase',
    note: 'Illustrative rate-case outcome from secondary utility regulatory monitoring.',
  },
  'ppl-pennsylvania': {
    id: 'ppl-pennsylvania',
    kind: 'external',
    title: 'PPL Pennsylvania rate case — filed Oct 2025, decision July 1, 2026',
    note: 'Pennsylvania utility commission docket timeline summarized from secondary regulatory monitoring.',
  },
  'tango-watchwire-2023': {
    id: 'tango-watchwire-2023',
    kind: 'external',
    title: 'Tango acquires WatchWire (2023)',
    note: 'CRE software competitive landscape — M&A noted in secondary competitive brief.',
  },
  'arcadia-urjanet-2022': {
    id: 'arcadia-urjanet-2022',
    kind: 'external',
    title: 'Arcadia acquires Urjanet (2022)',
    note: 'M&A and platform history summarized from trade press in secondary competitive research.',
  },
  'arcadia-rpd-2025': {
    id: 'arcadia-rpd-2025',
    kind: 'external',
    title: 'Arcadia acquires RPD Energy (2025)',
    note: 'Competitive M&A timeline from trade coverage in secondary research.',
  },
  'perch-spinout-2026': {
    id: 'perch-spinout-2026',
    kind: 'external',
    title: 'Perch spinout (2026)',
    note: 'Retail energy / platform competitive move summarized from secondary trade notes.',
  },
  'jci-hack': {
    id: 'jci-hack',
    kind: 'external',
    title: 'Johnson Controls cyber incident (trade / security reporting)',
    note: 'Industry cyber incident context used alongside primary buyer interviews on IT gates.',
  },
}

export function getSource(id: string): Source {
  const s = SOURCES[id]
  if (!s) {
    throw new Error(`Unknown sourceId: ${id}`)
  }
  return s
}

export function sourceExists(id: string): boolean {
  return Boolean(SOURCES[id])
}

export const ALL_SOURCE_IDS = Object.keys(SOURCES)

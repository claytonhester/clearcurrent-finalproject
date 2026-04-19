export const D5 = {
  title: 'Market Opportunity Heatmap',
  tagline:
    'Higher ed leads the GTM scorecard; multi-site retail and QSR run in parallel; healthcare is the long-term enterprise prize—and recovery proof is still the biggest pre-raise gap.',
  tldrBullets: [
    'Higher ed scores best on problem, readiness, deal path, and fit with what ships today — first beachhead.',
    'Multi-site retail and QSR: strong structural fit and primary voice (Panda); run as a parallel pipeline while higher ed carries the calendar story—not pushed to a vague “phase two.”',
    'Healthcare has the highest ceiling but IT security and documented recovery proof are hard gates—invest for the long win, not the first close.',
    'Before May, ship one case file: detected problem → action taken → lower bill or budget line—not just a dashboard total of “savings we flagged.”',
    'Heatmap dimensions: problem severity, buyer readiness, deal economics, competitive opening, data availability.',
  ],
  threeDecisions: [
    {
      headline: 'Higher education comes first',
      bullets: [
        'Leads the scorecard: problem pain, buyer readiness, deal path, and fit with what ships today.',
        'EnergyCAP frustration, predictable fiscal calendar, and documented deal economics.',
        'Many campuses mix grid purchases with district or on-site generation.',
        'Rates, peaks, and internal allocation still need the same intelligence.',
        'Land modules by acute pain—billing and regulatory first; campus chargeback when district metering is the bottleneck.',
      ],
    },
    {
      headline: 'Multi-site retail and QSR in parallel',
      bullets: [
        'Same job as campuses: billing intelligence—not payment rails alone.',
        'Threshold-style ESCO analytics and franchise OCR gaps leave money on the table.',
        'Buyers want interpretation, not another dashboard export.',
        'Run parallel to higher ed; regional and franchise footprints often lead parent HQ.',
      ],
    },
    {
      headline: 'Healthcare is the long-term prize',
      bullets: [
        'Ascension-scale spend (~$265M single-system) shows the ceiling.',
        'Hard gates: IT security, SOC 2 Type II, and proof-of-recovery documentation.',
        'Prove credibility in higher ed and parallel retail first—then compound into health systems over 18–36 months.',
      ],
    },
    {
      headline: 'CASE STUDY: Document one recover-to-cash story before May',
      bullets: [
        'Investors and CFOs ask whether cash actually moved.',
        'A slide total of “savings we found” is not the proof.',
        'One thread: what broke → what changed → proof on the invoice or ledger.',
      ],
    },
  ],
  verticals: [
    {
      vertical: 'Higher Education',
      total: 20,
      scores: { problem: 5, readiness: 4, deal: 4, competition: 4, data: 3 },
      stage: 'Beachhead now',
      verdict:
        'Highest composite. Closest alignment with today’s shipped product. Two institutional relationships established. Shortest time-to-first-dollar in the research to date. Interviews stress district energy and on-site generation: the account is rarely “utility bills only,” but that increases—not removes—need for rate logic, anomaly detection, peak events, and internal allocation; scope the deal to the modules that match the buyer, not every CC surface on contract one.',
      keyEvidence: [
        'Texas State: 1,500 meters, 98 buildings, multiplier error (3,500 → 35,000 gallons) — Andee Chamberlain.',
        'UT Austin: $20M annual gas spend; budget submitted before City of Austin rates final — Andi Ault; district / central-plant context in engineering interviews (e.g. load shed, BAS) — Troy Nevells.',
        'University of Wisconsin RFP: $500K–$2M documented contract value.',
        'EnergyCAP 132 reviews name chargebacks and UX as weaknesses.',
      ],
    },
    {
      vertical: 'Healthcare',
      total: 18,
      scores: { problem: 5, readiness: 3, deal: 5, competition: 3, data: 2 },
      stage: 'Long-term enterprise target',
      verdict:
        'Highest deal ceiling, longest cycle. IT security + proof-of-recovery are the gates. Win here over time as higher ed and parallel retail proof harden security story and recovery documentation.',
      keyEvidence: [
        'Ascension: $265M annual utility spend, 2,500+ sites — Scott Czubkowski.',
        'Bon Secours: $5–6M single error, $1M recovery, board-level — Ann Walston.',
        'AdventHealth: 2.5 years for BrainBox AI through IT post-Johnson Controls hack.',
        'Intermountain: $40K → $140K spike missed by third-party processor.',
      ],
    },
    {
      vertical: 'Energy Services (Channel)',
      total: 18,
      scores: { problem: 4, readiness: 4, deal: 2, competition: 4, data: 4 },
      stage: 'Channel parallel',
      verdict:
        'Distribution amplifier, not revenue driver. Trane has two advocates; IT posture is the risk.',
      keyEvidence: [
        'Don Johnson (Trane): billing intelligence is complementary to building ops.',
        'Phil Combs (Trane): most energy analysis still done in Excel.',
        'Zavadsky (ENGIE): own threshold-based alerts miss slow drift.',
      ],
    },
    {
      vertical: 'Multi-Site Restaurant',
      total: 17,
      scores: { problem: 4, readiness: 3, deal: 3, competition: 4, data: 3 },
      stage: 'Parallel pipeline',
      verdict:
        'Strong structural fit; runs in parallel with higher ed. Right entry is often regional franchisees or multi-site operators (25–100 sites); parent HQ and large chains are expansion targets as proof stacks—not the required first logo.',
      keyEvidence: [
        'Panda: Georgia Power ratchet, sewer overbilling, Alabama 45+ rate structures — Walt Taylor.',
        'ENGIE OCR coverage ~90% — gap at franchisee tier.',
        'Arcadia’s enterprise pivot leaves franchisee segment open.',
      ],
    },
    {
      vertical: 'Commercial Real Estate',
      total: 14,
      scores: { problem: 3, readiness: 2, deal: 4, competition: 2, data: 3 },
      stage: 'M&A target / channel later',
      verdict:
        'Most competitive landscape in the research base. JLL (primary interview) described JLL Technologies building internal AI energy-management and utility-bill intelligence on data they already hold—enterprise outcomes skew partnership, license, or M&A, not a default per-seat SaaS sale.',
      keyEvidence: [
        'WatchWire by Tango: 500+ CRE customers, Berkshire-backed.',
        'Measurabl free tier onboarded 11,000+ buildings in 4 weeks.',
        'JLL Technologies: in-house AI energy-management / billing tooling in motion — Jamare Bates.',
      ],
    },
    {
      vertical: 'Hospitality',
      total: 13,
      scores: { problem: 3, readiness: 2, deal: 3, competition: 2, data: 3 },
      stage: 'Later wave',
      verdict:
        'No primary voice-of-customer yet; WatchWire and Measurabl are crowded on ESG reporting. Revisit after higher ed and parallel retail/QSR evidence deepen—and after healthcare enterprise motion justifies a distinct lodging play.',
      keyEvidence: [
        'GRESB 2025: 1,002 fund managers, 2,382 assessments — ESG pressure real.',
        'NYC Local Law 97 compliance trigger.',
        'No primary interview captured for this vertical yet.',
      ],
    },
  ],
  personas: [
    {
      name: 'Energy Operations Manager',
      entry: 'Primary champion',
      authority: 'Influencer ($10K–$50K discretionary)',
      trigger: 'Billing anomaly, staff departure, unanswerable question',
      surface: 'Rate Analyst, Energy HQ Chat',
      quote:
        '“We had a weird multiplier happen in one of our bills… 3,500 → 35,000 gallons.” — Andee Chamberlain',
    },
    {
      name: 'Finance / Budget Owner',
      entry: 'Yes — for regulatory-intel pitch',
      authority: 'Budget holder',
      trigger: 'Rate change after budget, large unexplained variance',
      surface: 'Proactive alerts, Regulatory Intelligence',
      quote:
        '“Flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it.” — Andi Ault',
    },
    {
      name: 'Sustainability Director',
      entry: 'Secondary validator (later)',
      authority: 'Growing',
      trigger: 'ESG/compliance deadline',
      surface: '[EXTENDS ROADMAP] — carbon reporting',
      quote: '',
    },
    {
      name: 'Procurement / IT',
      entry: 'Gatekeeper only',
      authority: 'Veto',
      trigger: 'Responds to champion',
      surface: 'Security documentation, SOC 2',
      quote:
        '“You’ve got guys like me that would love to use this, and then IT says no, no, no.” — Phil Combs',
    },
    {
      name: 'C-Suite / Board',
      entry: 'Final sponsor',
      authority: 'Budget approval',
      trigger: 'Board-visible error; ESG commitment',
      surface: 'Energy HQ portfolio view',
      quote:
        '“Is my building using more energy than a sister building? What would be my projected bill?” — Scott Czubkowski',
    },
  ],
  moduleFit: [
    {
      module: 'Rate Analyst (billing error detection)',
      tooltip:
        'Finds likely billing mistakes and line items that don’t match tariffs or history—so finance and ops catch errors before they compound.',
      he: 5,
      hc: 5,
      rest: 5,
      ch: 4,
      cre: 3,
      evidence: 'STRONG — primary evidence across all three starred verticals.',
    },
    {
      module: 'Rate Analyst (tariff / rate modeling)',
      tooltip:
        'Tariff and rate “what-if” work: schedules, riders, ratchets, time-of-use—what you should pay under the rules, not only what the bill shows.',
      he: 4,
      hc: 3,
      rest: 4,
      ch: 5,
      cre: 3,
      evidence: 'STRONG for Higher Ed and channel; moderate for healthcare.',
    },
    {
      module: 'Energy HQ (portfolio visibility)',
      tooltip:
        'Portfolio roll-up: map- and dashboard-style view of sites, usage, and spend—built for sponsors who need the big picture, not invoice-by-invoice chat.',
      he: 4,
      hc: 5,
      rest: 3,
      ch: 3,
      cre: 4,
      evidence: 'STRONG at healthcare scale; moderate for Higher Ed.',
    },
    {
      module: 'Regulatory Intelligence',
      tooltip:
        'Tracks what utilities and regulators are doing (e.g. rate cases, dockets) and turns filings into “what this could cost your portfolio” before the budget locks.',
      he: 5,
      hc: 3,
      rest: 3,
      ch: 4,
      cre: 2,
      evidence: 'STRONG for Higher Ed only — Combs + Ault direct evidence.',
    },
    {
      module: 'Campus Chargeback',
      tooltip:
        'Allocates central plant or district energy costs to buildings or departments—internal “who pays what” after the utility bill is understood.',
      he: 5,
      hc: 3,
      rest: 1,
      ch: 1,
      cre: 1,
      evidence: 'STRONG for Higher Ed; emerging for healthcare district energy.',
    },
    {
      module: 'Proactive alerts layer',
      tooltip:
        'Surfaces important issues to users (ranked, usually with dollars) so they don’t have to log in to hunt—paired with Energy HQ-style surfacing in the research.',
      he: 4,
      hc: 5,
      rest: 4,
      ch: 3,
      cre: 3,
      evidence:
        'STRONG — confirmed as highest-value delivery mode for non-technical users across all primary interviews (proactive alerts / push-to-user delivery; Energy HQ surface in D5 Market Opportunity Heatmap).',
    },
    {
      module: 'Autonomous agent tier',
      tooltip:
        'More automated “agent” workflows; in the materials this is not the default shipped path—disputes and recovery still expect people in the loop.',
      he: 2,
      hc: 2,
      rest: 2,
      ch: 3,
      cre: 2,
      evidence:
        'LOW — not yet the shipped default; recovery requires human-in-the-loop across all verticals (D5 Market Opportunity Heatmap synthesis, autonomous agent tier row).',
    },
  ],
  moat: [
    {
      n: 1,
      name: 'Billing data network effects',
      horizon: '18+ months',
      why: 'Multi-customer rate pattern data gets more accurate with scale — mirrors ENGIE’s 20-year Panda advantage, but AI-native.',
    },
    {
      n: 2,
      name: 'Regulatory intelligence infrastructure',
      horizon: 'Build now',
      why: 'PUC docket feed maintenance is a moat by maintenance cost, not just AI. Zero competitors have it.',
    },
    {
      n: 3,
      name: 'Campus chargeback as switching cost',
      horizon: 'Ship by 2026',
      why: 'Once district energy allocation is running, leaving means rebuilding 18 months of metering relationships.',
    },
  ],
}

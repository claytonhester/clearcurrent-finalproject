import type { Quote, QuoteBankSectionKey } from './types'

/**
 * Curated quote library. Every quote extracted from primary interviews and summaries
 * has explicit attribution (name, role, org) and a sourceId linking back to the
 * interview transcript or company card. Paraphrases and do-not-use flags are
 * labelled explicitly so the UI can enforce attribution policy.
 */
export const QUOTES: Record<string, Quote> = {
  // ---------- Trane / channel ----------
  'johnson-reactive': {
    id: 'johnson-reactive',
    text: 'Most customers are still reactive... even hospitals.',
    speaker: 'Don Johnson',
    role: 'Sr. Account Manager',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-johnson',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    quoteBankSection: 'reactive-incentives',
  },
  'combs-tyranny': {
    id: 'combs-tyranny',
    text: 'The tyranny of the urgent.',
    speaker: 'Phil Combs',
    role: 'M&V / Digital Services',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context: 'Describing the organizing principle of commercial energy management.',
    quoteBankSection: 'reactive-incentives',
  },
  'combs-it-blocks': {
    id: 'combs-it-blocks',
    text: "You've got guys like me that would love to use this, and then IT says no, no, no.",
    speaker: 'Phil Combs',
    role: 'M&V / Digital Services',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    persona: 'it-security',
    attribution: 'full',
    quoteBankSection: 'buying-friction',
  },

  // ---------- Higher Ed — Texas State ----------
  'chamberlain-multiplier': {
    id: 'chamberlain-multiplier',
    text: "We had a weird multiplier happen in one of our bills... spending 3,500 gallons every month, and now it's 35,000.",
    speaker: 'Andee Chamberlain',
    role: 'Energy & Water Conservation Manager',
    org: 'Texas State University',
    sourceId: 'cc-texas-state',
    industry: 'higher-ed',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context: 'A 10x billing anomaly caught only by operational context.',
    quoteBankSection: 'billing-anomalies',
  },
  'chamberlain-dual': {
    id: 'chamberlain-dual',
    text: 'I care more about demand and usage... the bill processing folks care more about the bottom line.',
    speaker: 'Andee Chamberlain',
    role: 'Energy & Water Conservation Manager',
    org: 'Texas State University',
    sourceId: 'cc-texas-state',
    industry: 'higher-ed',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context:
      'Structural description of the dual-audience problem — one platform, two jobs.',
    quoteBankSection: 'dual-audience',
  },
  'chamberlain-sounds-like-energycap': {
    id: 'chamberlain-sounds-like-energycap',
    text: 'It sounds like what EnergyCAP already provides.',
    speaker: 'Andee Chamberlain',
    role: 'Energy & Water Conservation Manager',
    org: 'Texas State University',
    sourceId: 'cc-texas-state',
    industry: 'higher-ed',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context:
      'First reaction to Clear Current, walked back as the interview progressed. Preserved here to calibrate positioning.',
    quoteBankSection: 'buying-friction',
  },
  'norton-anomaly': {
    id: 'norton-anomaly',
    text: 'Flag anomalies for me. I should not have to go ask.',
    speaker: 'James Norton',
    role: 'Asst. Director, Energy & Utilities',
    org: 'Texas State University',
    sourceId: 'cc-texas-state',
    industry: 'higher-ed',
    persona: 'energy-ops-manager',
    attribution: 'paraphrase',
    context:
      'Paraphrased from interview notes; the explicit request for proactive (Push to User) dashboard behavior.',
    quoteBankSection: 'dual-audience',
  },

  // ---------- Higher Ed — UT Austin Finance ----------
  'ault-budget-timing': {
    id: 'ault-budget-timing',
    text: 'My budget must be submitted in March. The City of Austin does not finalize utility rates until after that.',
    speaker: 'Andi Ault',
    role: 'Sr. Associate Director of Finance',
    org: 'UT Austin',
    sourceId: 'cc-ut-austin-finance',
    industry: 'higher-ed',
    persona: 'finance-director',
    attribution: 'paraphrase',
    context:
      'Paraphrased from interview. The exact calendar gap the Regulatory Intelligence module closes.',
    quoteBankSection: 'regulatory-timing',
  },
  'ault-not-energy-data': {
    id: 'ault-not-energy-data',
    text: 'I do not want to interact with the energy data. I want to know what changed and what it means for my budget.',
    speaker: 'Andi Ault',
    role: 'Sr. Associate Director of Finance',
    org: 'UT Austin',
    sourceId: 'cc-ut-austin-finance',
    industry: 'higher-ed',
    persona: 'finance-director',
    attribution: 'paraphrase',
    quoteBankSection: 'dual-audience',
  },

  // ---------- Healthcare — Medxcel / Ascension ----------
  'czubkowski-polar-vortex': {
    id: 'czubkowski-polar-vortex',
    text: 'A single polar vortex event cost $7.2M in three days — absorbed and investigated after the fact.',
    speaker: 'Scott Czubkowski',
    role: 'National Director, Energy & Facility Performance',
    org: 'Medxcel / Ascension',
    sourceId: 'cc-medxcel',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'paraphrase',
    quoteBankSection: 'billing-anomalies',
  },
  'czubkowski-ghost-meter': {
    id: 'czubkowski-ghost-meter',
    text: 'Over $1M per year in payments for vacated sites.',
    speaker: 'Scott Czubkowski',
    role: 'National Director, Energy & Facility Performance',
    org: 'Medxcel / Ascension',
    sourceId: 'cc-medxcel',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'paraphrase',
    context:
      'Ghost-meter losses — utilities billing for locations the operator no longer occupies.',
    quoteBankSection: 'billing-anomalies',
  },

  // ---------- Restaurant / multi-site ----------
  'goldstein-baseline-drift': {
    id: 'goldstein-baseline-drift',
    text: "A neighbor's electricity bill was absorbed for a full year because the error had become the new rolling average before anyone noticed.",
    speaker: 'Roger Goldstein',
    role: 'Energy & Sustainability',
    org: 'Panda Restaurant Group',
    sourceId: 'cc-panda-goldstein',
    industry: 'restaurant-retail',
    persona: 'energy-ops-manager',
    attribution: 'paraphrase',
    context:
      'Baseline drift: threshold-based exception systems are blind to gradual error accumulation.',
    quoteBankSection: 'billing-anomalies',
  },

  // ---------- NVIDIA / channel ----------
  'spieler-identified-recovered': {
    id: 'spieler-identified-recovered',
    text: 'Have utilities actually issued refunds based on errors Clear Current found, or is the savings still theoretical on paper?',
    speaker: 'Marc Spieler',
    role: 'Sr. Managing Director, Global Energy Industry',
    org: 'NVIDIA',
    sourceId: 'cc-nvidia-spieler',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context: 'The identified-vs-realized question every sophisticated investor will ask.',
    quoteBankSection: 'channel-investor-economics',
  },
  'spieler-savings-share-trap': {
    id: 'spieler-savings-share-trap',
    text: 'Savings-sharing ties revenue to recovery — that is auditor economics, not software economics.',
    speaker: 'Marc Spieler',
    role: 'Sr. Managing Director, Global Energy Industry',
    org: 'NVIDIA',
    sourceId: 'cc-nvidia-spieler',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'paraphrase',
    quoteBankSection: 'channel-investor-economics',
  },

  // ---------- Other corroborating quotes (used in appendix / persona pages) ----------
  'chamberlain-glorified-spreadsheet': {
    id: 'chamberlain-glorified-spreadsheet',
    text: 'EnergyCAP is a glorified spreadsheet.',
    speaker: 'Characterization — EnergyCAP reviews',
    role: 'Aggregated user review language',
    org: 'G2 / Capterra (132 reviews)',
    sourceId: 'energycap-reviews',
    attribution: 'paraphrase',
    context: 'Recurring review language across 132 aggregated EnergyCAP reviews.',
    quoteBankSection: 'buying-friction',
  },
  'sukits-25-year-cycle': {
    id: 'sukits-25-year-cycle',
    text: 'AdventHealth procurement: a 2.5-year cycle to approve a new software vendor.',
    speaker: 'Sukits',
    role: 'Energy leadership',
    org: 'AdventHealth',
    sourceId: 'cc-adventhealth',
    industry: 'healthcare',
    persona: 'procurement',
    attribution: 'paraphrase',
    quoteBankSection: 'buying-friction',
  },
  'dawes-hospitality-ops': {
    id: 'dawes-hospitality-ops',
    text: 'Energy decisions live between the engineer in the basement and finance on another coast.',
    speaker: 'Randy Dawes',
    role: 'Energy & Engineering Leadership',
    org: 'Hyatt',
    sourceId: 'cc-hyatt',
    industry: 'hospitality',
    persona: 'facilities-director',
    attribution: 'paraphrase',
    quoteBankSection: 'reactive-incentives',
  },
  'bates-cre-splits': {
    id: 'bates-cre-splits',
    text: 'Landlord pays the bill, tenant controls the load. Whoever saves first does not get paid.',
    speaker: 'Jamare Bates',
    role: 'Energy Services',
    org: 'JLL',
    sourceId: 'cc-jll',
    industry: 'commercial-real-estate',
    persona: 'facilities-director',
    attribution: 'paraphrase',
    quoteBankSection: 'reactive-incentives',
  },
  'zavadsky-processor': {
    id: 'zavadsky-processor',
    text: 'We are the invoice plumbing. The analytics layer on top is where most customers still run on Excel.',
    speaker: 'Adam Zavadsky',
    role: 'ENGIE Impact',
    org: 'ENGIE Impact',
    sourceId: 'cc-engie-zavadsky',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'paraphrase',
    quoteBankSection: 'channel-investor-economics',
  },

  // ---------- Master quote bank additions (research/outputs/02_quote_bank.md) ----------
  'norton-usage-based-chargeback': {
    id: 'norton-usage-based-chargeback',
    text: "If we had better information about usage in our buildings, we can charge based on usage. And so that's a cost recovery thing that we could shift to. What happens from that is you can encourage efficiency or conservation. It's hard to drive that if you're charging people based on square footage.",
    speaker: 'James Norton',
    role: 'Supervisor, Electrical Distribution',
    org: 'Texas State University',
    sourceId: 'cc-texas-state',
    industry: 'higher-ed',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context:
      'Asked what additional insights would most change operations — tying chargebacks to usage instead of square footage.',
    quoteBankSection: 'reactive-incentives',
  },
  'ault-budget-cycle-oct-through-march': {
    id: 'ault-budget-cycle-oct-through-march',
    text: "Budgeting starts like in October. We deliver our budgets in March and then we start working on the next year's budget.",
    speaker: 'Andi Ault',
    role: 'Sr. Associate Director, Finance',
    org: 'UT Austin',
    sourceId: 'cc-ut-austin-finance',
    industry: 'higher-ed',
    persona: 'finance-director',
    attribution: 'full',
    context: 'Asked when the annual budgeting cycle begins and how it runs.',
    quoteBankSection: 'regulatory-timing',
  },
  'ault-flag-anomalies-first': {
    id: 'ault-flag-anomalies-first',
    text: 'Definitely flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it. That would be time saving.',
    speaker: 'Andi Ault',
    role: 'Sr. Associate Director, Finance',
    org: 'UT Austin',
    sourceId: 'cc-ut-austin-finance',
    industry: 'higher-ed',
    persona: 'finance-director',
    attribution: 'full',
    context:
      'Asked how she would use an AI energy platform from finance — anomaly surfacing before manual hunt.',
    quoteBankSection: 'dual-audience',
  },
  'ault-fixed-vs-volumetric-blend': {
    id: 'ault-fixed-vs-volumetric-blend',
    text: 'Fixed costs versus the volumetric costs — that makes your average, it skews your rate maybe from month to month based on your actual consumption. So maybe flagging where somewhere like do we have, do we have the right meter?',
    speaker: 'Andi Ault',
    role: 'Sr. Associate Director, Finance',
    org: 'UT Austin',
    sourceId: 'cc-ut-austin-finance',
    industry: 'higher-ed',
    persona: 'finance-director',
    attribution: 'full',
    context:
      'Asked where it is hard to tell a billing problem from normal rate-structure noise across similar buildings.',
    quoteBankSection: 'billing-anomalies',
  },
  'ault-erp-integration-wish': {
    id: 'ault-erp-integration-wish',
    text: 'The ability to build budgets and forecasts within our financial system would be or have it be integrated with our financial system would be very helpful.',
    speaker: 'Andi Ault',
    role: 'Sr. Associate Director, Finance',
    org: 'UT Austin',
    sourceId: 'cc-ut-austin-finance',
    industry: 'higher-ed',
    persona: 'finance-director',
    attribution: 'full',
    context:
      'Asked what one automation would remove the most pain — pushing intelligence into the financial system.',
    quoteBankSection: 'buying-friction',
  },
  'taylor-question-not-download-bills': {
    id: 'taylor-question-not-download-bills',
    text: "I think if you could ask that question. I can help answer this question instead of going, downloading the bills, reviewing the bills, and saying, OK, well, here's the difference. You're on three different utilities. Two of the utilities have their own rate and another one you're on the contracted rate.",
    speaker: 'Walt Taylor',
    role: 'Energy Manager (Contractor)',
    org: 'Panda Restaurant Group',
    sourceId: 'cc-panda-taylor',
    industry: 'restaurant-retail',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context:
      'Describing what it takes when an operator asks why bills differ across locations — versus asking the platform that question directly.',
    quoteBankSection: 'competitive-landscape',
  },
  'taylor-overflow-gas-order': {
    id: 'taylor-overflow-gas-order',
    text: "You'll get overflow orders where the utility will call you and say, I don't care what your contract says you're paying. We don't have enough gas to supply everybody.",
    speaker: 'Walt Taylor',
    role: 'Energy Manager (Contractor)',
    org: 'Panda Restaurant Group',
    sourceId: 'cc-panda-taylor',
    industry: 'restaurant-retail',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context:
      'Explaining peak / emergency pricing — when tight markets override contract pricing.',
    quoteBankSection: 'regulatory-timing',
  },
  'combs-watch-puc-board-filings': {
    id: 'combs-watch-puc-board-filings',
    text: "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board — they're putting a price increase before the Public Utility Commission. Things like that are what really could be powerful because that saves somebody like me so much time.",
    speaker: 'Phil Combs',
    role: 'Sr. Digital Services Engineer',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context:
      'Asked what forward-looking regulatory surveillance would save beyond reading historical bills.',
    quoteBankSection: 'regulatory-timing',
  },
  'combs-rate-case-to-facility-dollars': {
    id: 'combs-rate-case-to-facility-dollars',
    text: "I can tell you six months from now this utility is actively talking to the Public Utility Commission. They're proposing this rate hike. This rate hike is going to mean this change in the cost of energy for you based on the last 12 months of operation.",
    speaker: 'Phil Combs',
    role: 'Sr. Digital Services Engineer',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context:
      'Asked what “good” regulatory intelligence looks like in dollar terms for a customer.',
    quoteBankSection: 'regulatory-timing',
  },
  'johnson-power-factor-penalties': {
    id: 'johnson-power-factor-penalties',
    text: 'Are they looking at power factor? Because all utilities now are penalizing for low power factor and it can be pretty big charges. Power factor correction is usually a quick return on investment.',
    speaker: 'Don Johnson',
    role: 'Sr. Account Manager',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-johnson',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context:
      'Reacting to the product pitch — the first bill elements he wants checked beyond usage.',
    quoteBankSection: 'billing-anomalies',
  },
  'combs-bill-format-heterogeneity': {
    id: 'combs-bill-format-heterogeneity',
    text: 'Utilities are still so varied and different. It can be frustrating because what they put on a bill and the format they put it on a bill, it can just vary.',
    speaker: 'Phil Combs',
    role: 'Sr. Digital Services Engineer',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context:
      'Asked why earlier AI energy tools failed in the field — bill layout and semantics vary by utility.',
    quoteBankSection: 'competitive-landscape',
  },
  'combs-firefighting-not-strategy': {
    id: 'combs-firefighting-not-strategy',
    text: "A lot of clients unfortunately are firefighting — tyranny of the urgent. They're the people keeping the wheels on the car day-to-day.",
    speaker: 'Phil Combs',
    role: 'Sr. Digital Services Engineer',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context: 'Asked why strategic energy tools often sit unused after purchase.',
    quoteBankSection: 'reactive-incentives',
  },
  'combs-nobody-cares-until-monetized': {
    id: 'combs-nobody-cares-until-monetized',
    text: "There's all this stuff where you go in and figure out how a facility or how equipment's using energy. But then it's like nobody cares until you monetize it.",
    speaker: 'Phil Combs',
    role: 'Sr. Digital Services Engineer',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context: 'Asked what makes a technical finding actually drive action.',
    quoteBankSection: 'channel-investor-economics',
  },
  'combs-avoided-cost-framing': {
    id: 'combs-avoided-cost-framing',
    text: "Even though we may be able to help them save energy, their costs have continued to go up. So one of the stories we help them explain is, yeah, your costs are going up, but if you did nothing, they'd go up even more — and by this amount.",
    speaker: 'Phil Combs',
    role: 'Sr. Digital Services Engineer',
    org: 'Trane Technologies',
    sourceId: 'cc-trane-combs',
    industry: 'channel-advisory',
    persona: 'channel-partner',
    attribution: 'full',
    context:
      'Asked how to prove value when utility rates rise regardless of efficiency work.',
    quoteBankSection: 'channel-investor-economics',
  },
  'walston-million-recovery-rare': {
    id: 'walston-million-recovery-rare',
    text: 'We recuperated over $1,000,000 from the utility company. And that is incredibly unheard of. I mean, that is incredibly rare.',
    speaker: 'Ann Walston',
    role: 'VP Acute Care Facilities Management',
    org: 'Bon Secours Mercy Health',
    sourceId: 'cc-bon-secours',
    industry: 'healthcare',
    persona: 'facilities-director',
    attribution: 'full',
    context:
      'Asked whether she had ever recovered serious money from utility billing mistakes.',
    quoteBankSection: 'billing-anomalies',
  },
  'walston-meter-failure-looks-normal': {
    id: 'walston-meter-failure-looks-normal',
    text: "I've had two major meter failures in which what you're talking about, overbillings — millions of dollars. And if you're not monitoring, and if you can't see when the meter changed, then it just looks normal, right? Every month looks normal.",
    speaker: 'Ann Walston',
    role: 'VP Acute Care Facilities Management',
    org: 'Bon Secours Mercy Health',
    sourceId: 'cc-bon-secours',
    industry: 'healthcare',
    persona: 'facilities-director',
    attribution: 'full',
    context:
      'Reflecting on systematic overbilling when month-to-month bills stay internally consistent.',
    quoteBankSection: 'billing-anomalies',
  },
  'walston-capacity-tenfold-data-centers': {
    id: 'walston-capacity-tenfold-data-centers',
    text: "Our capacity charges went up tenfold in the last two years and they're anticipating it to go up again. Short answer is data centers.",
    speaker: 'Ann Walston',
    role: 'VP Acute Care Facilities Management',
    org: 'Bon Secours Mercy Health',
    sourceId: 'cc-bon-secours',
    industry: 'healthcare',
    persona: 'facilities-director',
    attribution: 'full',
    context: 'Asked what was driving rapid capacity charge increases.',
    quoteBankSection: 'regulatory-timing',
  },
  'walston-biggest-bang-portfolio': {
    id: 'walston-biggest-bang-portfolio',
    text: "In all reality, I would be looking for where to invest the dollars that I have to work on energy consumption reduction. Where's the biggest bang for my buck?",
    speaker: 'Ann Walston',
    role: 'VP Acute Care Facilities Management',
    org: 'Bon Secours Mercy Health',
    sourceId: 'cc-bon-secours',
    industry: 'healthcare',
    persona: 'facilities-director',
    attribution: 'full',
    context:
      'Asked what she would ask an AI platform first if it had full visibility across systems.',
    quoteBankSection: 'channel-investor-economics',
  },
  'walston-meter-mapping-year-plus': {
    id: 'walston-meter-mapping-year-plus',
    text: "That was over a year's worth of work, just to identify who's got what — just to identify what's influencing what.",
    speaker: 'Ann Walston',
    role: 'VP Acute Care Facilities Management',
    org: 'Bon Secours Mercy Health',
    sourceId: 'cc-bon-secours',
    industry: 'healthcare',
    persona: 'facilities-director',
    attribution: 'full',
    context:
      'Asked what had to happen before analytics were trustworthy — mapping meters to buildings.',
    quoteBankSection: 'buying-friction',
  },
  'culver-engie-for-bill-pay': {
    id: 'culver-engie-for-bill-pay',
    text: "We don't, we use them for paying those thousand bills every day, and they do a great job of that. We didn't sign on with NG ages ago because of energy management needs. It was bill pay needs.",
    speaker: 'John Culver',
    role: 'Corporate Sustainability',
    org: 'AdventHealth Corporate',
    sourceId: 'cc-adventhealth',
    industry: 'healthcare',
    persona: 'sustainability-director',
    attribution: 'full',
    context:
      'Asked why AdventHealth brought on ENGIE — original purchase was payment logistics, not analytics.',
    quoteBankSection: 'channel-investor-economics',
  },
  'culver-smarter-than-bottom-line': {
    id: 'culver-smarter-than-bottom-line',
    text: "NG just aggregates those and pays the bottom line dollar. But it being a little bit smarter and knowing how to interpret what's on the bills and not just interpret, but tell us why we should care and what we can do to change it would be great.",
    speaker: 'John Culver',
    role: 'Corporate Sustainability',
    org: 'AdventHealth Corporate',
    sourceId: 'cc-adventhealth',
    industry: 'healthcare',
    persona: 'sustainability-director',
    attribution: 'full',
    context: 'Asked what he wishes the billing partner did beyond paying the total.',
    quoteBankSection: 'competitive-landscape',
  },
  'culver-meter-to-address-foundation': {
    id: 'culver-meter-to-address-foundation',
    text: "It would be that the bills and the choose it therms, deca therms, CCF, KWH, whatever, match the addresses of our sites every time. Which sounds basic, but again, with an organization this size and that grows, matching — hey, that electron or that piece of gas went into that site on this date, and I'm 100% positive of that fact — is foundational.",
    speaker: 'John Culver',
    role: 'Corporate Sustainability',
    org: 'AdventHealth Corporate',
    sourceId: 'cc-adventhealth',
    industry: 'healthcare',
    persona: 'sustainability-director',
    attribution: 'full',
    context:
      'Asked what one task he would automate tomorrow — meter/bill units ↔ site truth before “analytics.”',
    quoteBankSection: 'billing-anomalies',
  },
  'sukits-it-two-years-questionnaires': {
    id: 'sukits-it-two-years-questionnaires',
    text: "I've been trying to implement it at a medical office building for 2 and a half years now. And I've been working with our IT folks for that long to try to get it pushed through. And it's just question after questionnaire after questionnaire before they'll even consider approving it.",
    speaker: 'Scott Sukits',
    role: 'Director, Control Systems & Energy Mgmt',
    org: 'AdventHealth',
    sourceId: 'cc-adventhealth',
    industry: 'healthcare',
    persona: 'it-security',
    attribution: 'full',
    context:
      'Asked what blocks new energy software — cybersecurity review for a BAS-integrated AI tool.',
    quoteBankSection: 'buying-friction',
  },
  'sukits-jci-hack-dashboards-gone': {
    id: 'sukits-jci-hack-dashboards-gone',
    text: 'Johnson Controls was hacked. And because that name was hacked, everything changed overnight. We went from being able to see our control dashboards to stuff just disappearing on our own dashboards in-house.',
    speaker: 'Scott Sukits',
    role: 'Director, Control Systems & Energy Mgmt',
    org: 'AdventHealth',
    sourceId: 'cc-adventhealth',
    industry: 'healthcare',
    persona: 'it-security',
    attribution: 'full',
    context: 'Asked what changed how IT treats building controls access.',
    quoteBankSection: 'buying-friction',
  },
  'czubkowski-peer-flat-meter-flag': {
    id: 'czubkowski-peer-flat-meter-flag',
    text: 'Peer AI identified a location paying $32/month, exactly the same amount, for months — flagging it as a dead meter nobody had turned off.',
    speaker: 'Scott Czubkowski',
    role: 'National Director, Energy & Facility Performance',
    org: 'Medxcel / Ascension',
    sourceId: 'cc-medxcel',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'paraphrase',
    context:
      'Case study paraphrased from interview summary — consistent small charges as dead-meter signal.',
    quoteBankSection: 'billing-anomalies',
  },
  'czubkowski-sister-building-questions': {
    id: 'czubkowski-sister-building-questions',
    text: "It's how I get administrators to interact with the system without being technical, right? Is my building using more energy than a sister building? What would be my projected utility bill for next month based on current weather outlook?",
    speaker: 'Scott Czubkowski',
    role: 'National Director, Energy & Facility Performance',
    org: 'Medxcel / Ascension',
    sourceId: 'cc-medxcel',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context:
      'Asked what he would prioritize if designing a platform — non-technical admins asking plain-language questions.',
    quoteBankSection: 'dual-audience',
  },
  'czubkowski-training-vs-capex-roi': {
    id: 'czubkowski-training-vs-capex-roi',
    text: "I've got $35 million of savings. Well, remember, to do the $35 million of savings, I spend 5x on the capital side compared to the training side, yet I got more out of this side.",
    speaker: 'Scott Czubkowski',
    role: 'National Director, Energy & Facility Performance',
    org: 'Medxcel / Ascension',
    sourceId: 'cc-medxcel',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context: 'Asked where the biggest savings came from — capex vs training/behavior.',
    quoteBankSection: 'reactive-incentives',
  },
  'snow-identify-vs-fix': {
    id: 'snow-identify-vs-fix',
    text: "Where the rubber really hits the road is not identifying the problems, it's fixing them. And that's where companies, they will come tell you all the reasons your building is inefficient and why you could save $100,000 a year — but they won't solve them.",
    speaker: 'Ross Snow',
    role: 'Director of Energy Management',
    org: 'Intermountain Health',
    sourceId: 'cc-intermountain',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context:
      'Asked why he is skeptical of AI pitches — execution needs trades, not just analytics.',
    quoteBankSection: 'competitive-landscape',
  },
  'snow-processor-missed-accountant-caught': {
    id: 'snow-processor-missed-accountant-caught',
    text: "We had in Colorado earlier a few utility bills that typically they're $40,000 and they came in at $140,000 kind of thing. And one of our accountants flagged that. We actually pay a third party company that should have flagged it and they didn't even flag it.",
    speaker: 'Ross Snow',
    role: 'Director of Energy Management',
    org: 'Intermountain Health',
    sourceId: 'cc-intermountain',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context: 'Asked for an example of a spike their outsourced bill processor missed.',
    quoteBankSection: 'billing-anomalies',
  },
  'snow-trades-shortage-six-figures': {
    id: 'snow-trades-shortage-six-figures',
    text: "I cannot overstate how short that staffing is across our country right now. It's a major problem — we would literally hire somebody tomorrow if they could fill those skill sets. And they would get paid well into six figures.",
    speaker: 'Ross Snow',
    role: 'Director of Energy Management',
    org: 'Intermountain Health',
    sourceId: 'cc-intermountain',
    industry: 'healthcare',
    persona: 'energy-ops-manager',
    attribution: 'full',
    context: 'Broader point on skilled-trades scarcity constraining physical retrofits.',
    quoteBankSection: 'reactive-incentives',
  },
}

/** Ordered sections for the appendix Quote bank (subset may be empty). */
export const QUOTE_BANK_SECTIONS: readonly {
  key: QuoteBankSectionKey
  title: string
  description: string
}[] = [
  {
    key: 'billing-anomalies',
    title: 'Billing anomalies & drift',
    description:
      'Multiplier errors, acute shocks, ghost meters, and gradual baseline drift—failure modes incumbent tools often miss.',
  },
  {
    key: 'dual-audience',
    title: 'Finance vs. operations',
    description:
      'The split chair: ops wants usage and anomalies; finance wants budget impact without raw meter literacy.',
  },
  {
    key: 'reactive-incentives',
    title: 'Reactive culture & split economics',
    description:
      'Why urgency wins, and why landlord/tenant and cross-functional incentives block savings capture.',
  },
  {
    key: 'regulatory-timing',
    title: 'Regulatory intelligence & calendar',
    description:
      'Forward-looking rate and tariff signals—and the budget calendar gap they must bridge.',
  },
  {
    key: 'buying-friction',
    title: 'Buying, IT, and incumbent gaps',
    description:
      'Procurement cycles, security gates, and how buyers compare new intelligence to legacy bill tools.',
  },
  {
    key: 'channel-investor-economics',
    title: 'Channel, diligence & economics',
    description:
      'Investor questions, savings-share traps, and how invoice plumbing vendors describe the whitespace.',
  },
  {
    key: 'competitive-landscape',
    title: 'Competitive posture',
    description:
      'How rivals position feeds and dashboards vs. end-user operational intelligence.',
  },
]

export function getQuoteBankSections(): Array<{
  key: QuoteBankSectionKey
  title: string
  description: string
  quotes: Quote[]
}> {
  const map = new Map<QuoteBankSectionKey, Quote[]>(
    QUOTE_BANK_SECTIONS.map((s) => [s.key, []]),
  )
  for (const q of Object.values(QUOTES)) {
    const bucket = map.get(q.quoteBankSection)
    if (!bucket) {
      throw new Error(`Unknown quoteBankSection on quote ${q.id}: ${q.quoteBankSection}`)
    }
    bucket.push(q)
  }
  for (const list of map.values()) {
    list.sort((a, b) => {
      const bySpeaker = a.speaker.localeCompare(b.speaker)
      if (bySpeaker !== 0) return bySpeaker
      return a.org.localeCompare(b.org)
    })
  }
  return QUOTE_BANK_SECTIONS.filter((meta) => (map.get(meta.key)?.length ?? 0) > 0).map(
    (meta) => ({
      ...meta,
      quotes: map.get(meta.key) ?? [],
    }),
  )
}

export function getQuote(id: string) {
  const q = QUOTES[id]
  if (!q) throw new Error(`Unknown quoteId: ${id}`)
  return q
}

export const ALL_QUOTE_IDS = Object.keys(QUOTES)

export const D8 = {
  title: 'GTM Strategy Playbook',
  tagline:
    'Land with a free billing audit, expand with anomaly alerts, retain with regulatory intel — direct sales, higher ed first with retail/QSR in parallel, healthcare over the long term; one recovery proof before May.',
  tldrBullets: [
    'Show up when the bill hurts — reactive buyers will not reliably come to you via passive product discovery.',
    'Higher ed is the primary beachhead: two ICPs, incumbent UX pain, predictable calendar, and cleaner Arcadia whitespace. Multi-site retail and QSR are a parallel pipeline (ICP 2)—not sequenced “after” higher ed closes.',
    'Healthcare systems stay on the roadmap as the long-term enterprise win; defer heavy pilots until SOC 2 / recovery proof match the gate.',
    'Before May: ship one fully documented error-to-recovery loop — identified savings ≠ realized credits.',
    'Arcadia’s migration window is 12–24 months of distraction, not a permanent competitive freeze.',
  ],
  executiveScan: [
    'Buyers are reactive. Clear Current must appear at the moment the bill hurts — not when they go looking.',
    'Higher ed is the primary beachhead: two primary ICPs, structural incumbent weakness, predictable fiscal calendar, and zero Arcadia presence. Run multi-site retail and QSR in parallel where ESCO contracts, drift, and deregulated complexity create urgency.',
    'Healthcare: invest for the long win—IT and recovery documentation are the gates.',
    'Most important action before May: one fully documented error-recovery loop. Identified ≠ realized.',
    'Arcadia’s migration distraction is a 12–24 month window. It is not permanent.',
  ],
  oemChannel: {
    title: 'Solutions-provider persona (Trane-class channel)',
    body: 'OEM and ESCO reps are not buyers — they are accelerators: they need customer-ready energy profiles, peak stories, and finance-friendly summaries before a joint call. Speed to credible numbers beats another analyst login; referral or pilot economics before formal reseller.',
    associations: [
      'TEMA (Texas Energy Managers Association)',
      'AEE — Association of Energy Engineers',
      'ASHRAE chapters',
    ],
  },
  buyerCalibration: [
    {
      vertical: 'Hospitality · brand HQ',
      guidance:
        'Corporate sustainability often owns reporting, not invoice review — billing error land is usually owners, asset managers, and management companies holding utility P&L.',
    },
    {
      vertical: 'Healthcare · IT gate',
      guidance:
        'Separate BrainBox/BAS reviews from Clear Current explicitly: invoices and procurement data, not patient or BAS tunnels — lower HIPAA surface if positioned cleanly.',
    },
  ],
  icps: [
    {
      n: 1,
      name: 'Large research university (primary beachhead)',
      description:
        'Flagship/large regional research university. District energy system. 800–2,000 meters/submeters. Roughly mid–high seven figures annual utility spend typical at this scale. EnergyCAP incumbent (often via YearOut / Lobo resellers). Often a recently vacated / newly filled energy manager role.',
      champions: [
        'Energy & Water Conservation Manager (e.g., Andee Chamberlain, Texas State)',
        'Plant Engineer / Director of Utilities (Teague, Nevels)',
        'Sr. Associate Director of Finance (Andi Ault, UT Austin)',
        'Facilities Procurement (anonymous function)',
        'InfoSec / Enterprise IT (Combs-flagged blocker)',
      ],
      triggers: [
        'Unexpected billing error or rate change on recent invoice',
        'Jan–Feb budget planning cycle',
        'EnergyCAP renewal approaching',
        'Budget submitted before utility finalizes rates',
        'Bill processing staff turnover',
      ],
      disqualifiers: [
        '<300 meters — insufficient complexity',
        'No district energy system',
        'Year 1–2 of EnergyCAP contract with no complaints',
        'IT policy requiring 18+ month review',
        'Procurement requiring competitive solicitation with no sole-source exception',
      ],
      pilot: {
        duration: '90 days',
        scope: '3–5 buildings or 1 central plant + 3 downstream meters',
        day30:
          'One Rate Analyst output showing verified discrepancy or tariff opportunity',
        day90: 'Portfolio anomaly summary + one regulatory intelligence brief',
        fee: 'Waived or 20% contingency, capped at $30K',
        conversionEvent:
          'Joint meeting with energy manager + finance gatekeeper. Frame: “here is what the budget gap would have been if we had been live before March.”',
      },
    },
    {
      n: 2,
      name: 'Multi-site retail / QSR (parallel pipeline)',
      description:
        'Multi-site manufacturer, retail chain, or QSR operator—Panda anchors research; large national chains are expansion targets as proof compounds. 20–200 locations in deregulated markets (ERCOT preferred). $5–50M annual spend. Facilities Director / VP Ops owns energy function. Often spreadsheets plus an ESCO like ENGIE Impact; renewal and pilot timing can open the door alongside higher-ed pursuits.',
      champions: [
        'VP Facilities / Director of Operations / Energy Manager',
        'CFO or VP Finance',
        'Facilities Engineering',
      ],
      triggers: [
        'Regulatory change in deregulated market — supplier switching confusion',
        'ESG disclosure requirement (CSRD, CA SB 253/261)',
        'Discovery of dead/neighbor meter — ENGIE thresholds missed baseline drift',
        'CFO review of energy % of COGS',
      ],
      disqualifiers: [
        '<15 locations',
        'All in regulated single-utility markets',
        'Long-term outsourced ENGIE/Ameresco contract',
        'No internal champion with budget influence',
      ],
      pilot: {
        duration: '60 days',
        scope: '10–20 ERCOT locations',
        day30: 'Billing audit report by error category',
        day60: 'Portfolio anomaly dashboard + regulatory brief on highest-spend REP',
        fee: '20–25% contingency; moves to subscription at 12 months',
        conversionEvent:
          'CFO presentation on annualized recovery vs subscription ROI — “subscription is covered in the first identified cluster.”',
      },
    },
    {
      n: 3,
      name: 'Large health system (long-term enterprise target)',
      description:
        'Regional/national system. 10–50 campuses. $20M–$265M annual utility spend. Third-party bill processor (Peer AI, Get Choice) + energy broker. Single CEM covering entire portfolio. Highest ceiling, longest cycle—win here over time as higher-ed and parallel retail proof harden security posture and named recoveries.',
      champions: [
        'Director of Facilities / VP Sustainability',
        'CFO / VP Supply Chain',
        'CISO (most restrictive IT posture of any vertical)',
      ],
      triggers: [
        'Polar vortex / extreme weather exposing demand charge management gaps',
        'CMS Energy Star reporting requirement',
        'Joint Commission sustainability mandate',
        'Ghost meter discovery — Ascension: $32/mo for months, $1M/yr impact',
      ],
      disqualifiers: [
        'No plan for 12-month meter-mapping onboarding obstacle',
        'No SOC 2 Type II / HIPAA readiness',
      ],
      pilot: {
        duration: 'Defer heavy pilots — long-term track',
        scope:
          'Sequence after higher-ed wins and parallel retail proof raise SOC 2 / recovery story; do not prioritize without one primary health-system interview first',
        day30: '—',
        day90: '—',
        fee: '—',
        conversionEvent: '—',
      },
    },
  ],
  tracks: [
    {
      n: 1,
      name: 'Land — billing error audit ROI',
      message:
        'Commercial utility billing error rates are documented by FERC ($108M at FirstEnergy) and state PUCs (RI PUC 83% of flagged bills still sent) — not by vendors. We can tell you within 30 days whether you have errors and what they’re worth. No software purchase required to find out.',
      quotes: [
        {
          speaker: 'Andee Chamberlain · Texas State',
          text: '“We had a weird multiplier happen in one of our bills.”',
          context:
            'Billing anomaly at a large, active university — not a neglected account.',
        },
        {
          speaker: 'Adam Zavadsky · ENGIE Impact',
          text: '“We’re looking at past history to see if it’s within a certain tolerance… we don’t know why.”',
          context:
            'Incumbent catches spikes, misses drift — CC technical differentiator in their own words.',
        },
      ],
      hardStop:
        '“80% of commercial buildings are overbilled” is not traceable. Replace with FERC enforcement + PUC audit findings.',
    },
    {
      n: 2,
      name: 'Expand — anomaly alerting',
      message:
        'The error we found in your March invoice was detectable 47 days earlier in your February interval data. The question is not whether your bills have errors — you’ve seen that they do. The question is how long you want to wait before finding the next one.',
      quotes: [
        {
          speaker: 'Phil Combs · Trane',
          text: '“If it could say, hey, I’ve also been looking at the publishings and the meetings of this utility’s CEO and board…”',
          context:
            'Sophisticated energy managers want proactive so they don’t have to be.',
        },
        {
          speaker: 'Don Johnson · Trane',
          text: '“Most customers are still reactive… even hospitals.”',
          context:
            'Reactive is the norm. Expansion value prop: be proactive on their behalf.',
        },
      ],
      rule: 'Every alert must earn the interruption. Surface only alerts with dollar magnitude attached.',
    },
    {
      n: 3,
      name: 'Retain — regulatory intelligence',
      message:
        'Your budget was built before the utility finalized its rates. Again. Next year, we flag the pending rate case in November, model two scenarios, and give you a budget range you can defend to your CFO in March — before the utility makes its final decision.',
      quotes: [
        {
          speaker: 'Phil Combs · Trane',
          text: "If it could say, hey, I've also been looking at the publishings and the meetings of this utility's CEO and board — they're putting a price increase before the Public Utility Commission.",
          context:
            'Forward-looking regulatory surveillance — primary interview language on what saves practitioner time.',
        },
        {
          speaker: 'Andi Ault · UT Austin',
          text: 'Budget submitted in March. City of Austin finalizes rates after — every year.',
          context:
            'Structural budget problem at every university with a September fiscal year.',
        },
      ],
      rule: 'Zero competitive offer: EnergyCAP, Arcadia, WatchWire — none do this. Switching cost is institutional knowledge, not just data migration.',
    },
  ],
  salesProcess: {
    room: 'Three simultaneous conversations: energy manager champion (product value), finance gatekeeper (ROI, budget), IT security (data handling, SOC 2). Missing any one stalls the deal after verbal commitment.',
    stages: [
      {
        stage: 'Trigger',
        duration: '0–2 weeks',
        what: 'Billing event, contract expiration, or budget cycle creates felt need. CC’s job: be findable at the moment of trigger.',
      },
      {
        stage: 'Champion engagement',
        duration: '2–6 weeks',
        what: 'Demo must surface a plausible error or opportunity in first 15 minutes using prospect data. Bar (Combs): “faster and more insightful than my Excel.”',
      },
      {
        stage: 'Internal coalition',
        duration: '6–12 weeks',
        what: 'Champion builds case. Arm with finance-formatted ROI and proactive IT security docs. Do not wait for IT to raise barriers.',
      },
      {
        stage: 'Procurement',
        duration: '12–24 weeks (universities)',
        what: 'Above certain thresholds, competitive solicitation required. Know the threshold before proposing. Wisconsin RFP is the template.',
      },
      {
        stage: 'Pilot → paid',
        duration: '90-day pilot + contract',
        what: 'Conversion meeting includes champion and finance gatekeeper. Structure: errors identified, regulatory brief preview, subscription ROI.',
      },
    ],
    dealKillers: [
      'IT says no. Pre-empt with SOC 2 documentation. Do not wait to be asked.',
      'Finance doesn’t see the number. Every pilot deliverable needs a dollar-denominated executive summary.',
      'Procurement extends beyond the fundraise window. Get LOI/commitment letters as evidence.',
      'Savings-sharing ceiling (Spieler’s trap). Cap contingency or pre-define the subscription transition point.',
    ],
  },
  pricing: {
    benchmarks: [
      'EnergyCAP: $40–52/meter/year. Texas State: $50–75K/yr for 1,500 meters.',
      'Clear Current implied: ~$923/location/yr at $120K / 130 locations — 2–4× per-meter vs EnergyCAP.',
      'UtiliSave contingency: 40% of recovered errors for 36 months (high end of market).',
    ],
    tiers: [
      {
        tier: 'Pilot (90 days, Higher Ed)',
        fee: '20% contingency, capped at $30K',
        includes:
          'Zero upfront. Below UtiliSave 40% benchmark. At day 75, present subscription conversion math.',
      },
      {
        tier: 'Annual subscription',
        fee: '$120K–$250K/yr flat (anchor $120K; GTM research Part 4 enterprise license band)',
        includes:
          'Rate Analyst (audit) + Energy HQ (anomaly alerting) + regulatory intelligence (quarterly or rate-case triggered). Position as % of utility spend (e.g. ~1–2% on a large campus bill), not per-meter.',
      },
      {
        tier: 'Enterprise expansion',
        fee: '$200–400K/yr',
        includes:
          'Portfolios >200 locations or >$25M spend. Deal Center procurement workflow, custom regulatory scope, dedicated CS. Gate: requires a complete documented recovery proof point first.',
      },
    ],
    rule: 'Do not structure contingency fees where the customer sees total savings before fee structure is fixed (Spieler’s trap). Cap or pre-transition.',
  },
  channel: {
    posture:
      'Direct sales for the first five customers. Non-negotiable. Founders must hear objections directly, close the proof-of-recovery gap, and understand the coalition before handing to channel.',
    partners: [
      {
        name: 'Trane (Don Johnson relationship)',
        play: 'Complementary, not competing. Start with referral fee on closed deals. No formal reseller economics at seed.',
      },
      {
        name: 'TEMA (Texas Energy Managers Association)',
        play: 'Speaking slots, case studies, referrals. Named by Don Johnson as the right peer channel for energy managers.',
      },
      {
        name: 'AEE (Association of Energy Engineers)',
        play: 'CEM certification holders = primary Rate Analyst users. Conference presence + content placement.',
      },
    ],
    risk: 'ESCO sales cycles are 12–24 months — longer than CC’s target. Channel = awareness + referral. Direct = everything that must close before May.',
  },
  onboarding: [
    {
      n: 1,
      obstacle: 'Bill format variation across utilities',
      response:
        'Lead with the bill upload experience. Show output from a real bill in the first 30 minutes — the confidence moment that determines whether the champion becomes an advocate or a skeptic.',
    },
    {
      n: 2,
      obstacle: 'Meter-to-site mapping at scale',
      response:
        'Don’t assume clean mapping exists. Site association intake uses their floor plans, account numbers, prior EnergyCAP exports. Set expectation: 90% at day 30, 98%+ by day 90.',
    },
    {
      n: 3,
      obstacle: 'Dual-audience permissions',
      response:
        'During intake, configure two named views: ops (demand/usage/anomalies) for the energy manager; finance (cost/budget/regulatory forecast) for the gatekeeper.',
    },
    {
      n: 4,
      obstacle: 'Pipeline reliability / staff turnover',
      response:
        'Internal data-health dashboard flags stale feeds. Customer success contacts the customer before they notice the gap themselves.',
    },
    {
      n: 5,
      obstacle: 'Identified-vs-realized expectation gap',
      response:
        'Scripted kickoff message: “We identify and document errors with enough specificity to dispute them. The dispute process currently involves your team contacting the utility with our documentation as evidence. We’ll walk you through the first one.”',
    },
  ],
  ninetyDayPlan: {
    precondition:
      'Close one documented error recovery loop before the clock starts. Without it, weeks 1–4 produce interest but not pilots.',
    weeks: [
      {
        range: 'Weeks 1–2',
        name: 'ICP qualification & pipeline prioritization',
        tasks: [
          'Map every pilot against ICP criteria, stack-rank by conversion readiness.',
          'Schedule joint champion+finance meeting for every pilot where finance hasn’t seen the output.',
          'Book two prospect discovery calls against Jan–March budget trigger.',
        ],
        target:
          'ICP-scored pilot list, ≥2 joint champion-finance meetings scheduled, ≥2 prospect discovery calls booked.',
      },
      {
        range: 'Weeks 3–4',
        name: 'Champion arming & IT gate preparation',
        tasks: [
          'One-page billing-audit summary per priority pilot, formatted for finance — dollars, methodology, regulatory context, subscription ROI.',
          'IT security package: data handling policy, SOC 2 status, data classification, access controls.',
          'Ask each champion: “What would your IT team want to know?” Customize the package.',
        ],
        target:
          'Finance summaries prepared, IT package complete, ≥1 affirmative finance response.',
      },
      {
        range: 'Weeks 5–8',
        name: 'Conversion events & contract structuring',
        tasks: [
          'Schedule pilot conclusion meetings for every pilot ending before May — champion + finance + facilities director.',
          'Present subscription math explicitly: $120K/yr vs identified errors per cycle.',
          'For procurement-gated deals, pivot to LOI/commitment letter immediately.',
          'Offer free 30-day audit on 3–5 bills as no-commitment entry for discovery-stage prospects.',
        ],
        target:
          '≥2 pilot conclusion meetings completed, ≥1 subscription proposal delivered, ≥1 LOI in hand.',
      },
      {
        range: 'Weeks 9–12',
        name: 'Pipeline expansion & fundraise evidence',
        tasks: [
          'Package the one documented recovery as a one-page customer story + two-slide deck insert.',
          'Use TEMA and AEE for first outbound — trigger-based outreach, not cold pitch.',
          'Two ERCOT multi-site discovery calls (ICP 2). Lead with drift-beats-threshold frame (Panda/Frito-Lay).',
          'Identify universities Arcadia may be pursuing (LinkedIn) — get there before migration ends.',
        ],
        target:
          'Minimum: 2 signed annual subscriptions, 1 LOI, 1 complete recovery case study, 3+ prospects in 30-day audit stage.',
      },
    ],
  },
  metrics: [
    {
      n: 1,
      name: 'Pilot-to-paid conversion rate',
      target:
        '≥33% within 90 days of pilot conclusion (SaaStr strong-PMF benchmark: 70%+)',
      leading:
        'Joint champion-finance meeting by day 60. If no, the deal is unlikely to convert.',
    },
    {
      n: 2,
      name: 'Days to first documented finding',
      target: '≤30 days from kickoff to first Rate Analyst finding with dollar magnitude',
      leading: '% of pilots producing a dollar finding within first 30 days',
    },
    {
      n: 3,
      name: 'Identified-vs-realized ratio',
      target:
        'At least one documented recovery by May 2026 (amount matters less than proof)',
      leading:
        'By customer + error type — which categories actually result in utility credit',
    },
    {
      n: 4,
      name: 'Sales cycle length by ICP',
      target: '≤120 days for university ICP (given May fundraise constraint)',
      leading:
        'Days from discovery call to joint champion-finance meeting (>30 = too long)',
    },
    {
      n: 5,
      name: 'IT security gate frequency',
      target: 'Resolve in ≥80% of raised cases with documentation alone',
      leading: 'If >1 IT kill before May → accelerate SOC 2 Type II as 90-day priority',
    },
    {
      n: 6,
      name: 'Regulatory intelligence engagement',
      target: '≥60% of active customers engage with one regulatory output per quarter',
      leading: 'Chat query mix — are they asking regulatory questions?',
    },
    {
      n: 7,
      name: 'Finance gatekeeper engagement per active pilot',
      target: 'Engaged (email/meeting/access) in ≥75% within 45 days of kickoff',
      leading:
        'At 30-day check-in, ask: has finance seen the output? If no, offer a 20-min finance meeting directly.',
    },
  ],
}

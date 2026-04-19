export const D8 = {
  title: 'GTM Strategy Playbook',
  tagline:
    'Land on billing truth, expand on alerts, retain on regulatory intel — higher ed first, retail/QSR in parallel; one documented recovery before May.',
  tldrBullets: [
    'Meet buyers when the bill hurts; passive discovery is not the main pipe.',
    'Beachhead: higher ed. Parallel: multi-site retail/QSR. Healthcare later behind IT + recovery proof.',
    'Before May: one documented error-to-recovery loop (identified ≠ credited).',
  ],
  icps: [
    {
      n: 1,
      name: 'Large research university (primary beachhead)',
      description:
        'Large research university: district energy, 800–2,000 meters, mid–high seven-figure spend, EnergyCAP incumbent. Lead with billing/regulatory and portfolio truth; chargeback when allocation is the live problem.',
      champions: [
        'Energy & Water Conservation Manager (e.g., Andee Chamberlain, Texas State)',
        'Plant Engineer / Director of Utilities (Teague, Nevells)',
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
        '20–200 sites in deregulated markets (ERCOT preferred), ~$5–50M spend. Ops-led; often ESCO + spreadsheets. Panda-class proof; national chains as follow-on.',
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
        '10–50 campuses, $20M–$265M spend, bill processor + broker, single CEM. Highest ceiling; sequence after higher-ed and retail proof (SOC 2, recovery story).',
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
          speaker: 'Andee Chamberlain · Texas State University',
          text: "We had a weird multiplier happen in one of our bills... spending 3,500 gallons every month, and now it's 35,000.",
          context:
            'Operational context caught a 10× water line before “bill processing” treated it as normal — the land pitch is paid discovery, not another dashboard.',
        },
        {
          speaker: 'Scott Czubkowski · Medxcel / Ascension',
          text: 'Over $1M per year in payments for vacated sites.',
          context:
            'Ghost-meter / vacated-site pay — land narrative is material, recurring error classes incumbents miss until someone audits line by line.',
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
          speaker: 'Andi Ault · UT Austin',
          text: 'Definitely flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it. That would be time saving.',
          context:
            'Finance gatekeeper asking for the product to interrupt her with ranked problems — expand is push with magnitude, not another login hunt.',
        },
        {
          speaker: 'Roger Goldstein · Panda Restaurant Group',
          text: "A neighbor's electricity bill was absorbed for a full year because the error had become the new rolling average before anyone noticed.",
          context:
            'Baseline drift: threshold tools miss slow creep — expansion narrative is “catch the March bill in February,” not prettier charts.',
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
          speaker: 'Andi Ault · UT Austin',
          text: 'My budget must be submitted in March. The City of Austin does not finalize utility rates until after that.',
          context:
            'Calendar gap the CFO cannot close from invoices alone — retain is forward cases and scenarios, not historical PDFs.',
        },
        {
          speaker: 'Phil Combs · Trane Technologies',
          text: "I can tell you six months from now this utility is actively talking to the Public Utility Commission. They're proposing this rate hike. This rate hike is going to mean this change in the cost of energy for you based on the last 12 months of operation.",
          context:
            'Channel engineer defining “good” regulatory intelligence in facility dollars — the renewal story is institutional memory, not a spreadsheet export.',
        },
      ],
      rule: 'Zero competitive offer: EnergyCAP, Arcadia, WatchWire — none do this. Switching cost is institutional knowledge, not just data migration.',
    },
  ],
  salesProcess: {
    room: 'Three simultaneous conversations: energy manager champion (product value), finance gatekeeper (ROI, budget), IT security (data handling, SOC 2). Missing any one stalls the deal after verbal commitment.',
    dealKillers: [
      'IT says no. Pre-empt with SOC 2 documentation. Do not wait to be asked.',
      'Finance doesn’t see the number. Every pilot deliverable needs a dollar-denominated executive summary.',
      'Procurement extends beyond the fundraise window. Get LOI/commitment letters as evidence.',
      'Savings-sharing ceiling (Spieler’s trap). Cap contingency or pre-define the subscription transition point.',
    ],
  },
  pricing: {
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
      'Direct for the first five closes — non-negotiable. Founders own objections, recovery proof, and the champion–finance–IT coalition. Referral awareness only: Trane (complementary), TEMA and AEE (peer reach) — not a substitute for direct.',
    risk: 'ESCO-led deals can run 12–24 months. Treat channel as introductions; direct still owns what must land before May.',
  },
}

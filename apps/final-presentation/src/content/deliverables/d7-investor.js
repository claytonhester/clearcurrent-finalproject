export const D7 = {
  title: 'Investor Narrative & Pitch Framework',
  tagline:
    'Six-beat narrative and tiered market math — anchored on government enforcement, not vendor surveys.',
  tldrBullets: [
    'Six-beat arc: broken market → buyer constraint → why now → what CC is (honest boundaries) → landscape → why us.',
    'Evidence anchor is regulators and case law, not vendor NPS — misbilling is documented at scale.',
    'Market math is tiered; identified ≠ realized and IT gates stay explicit in the narrative.',
    'Differentiator story includes practitioner-grounded regulatory surveillance, not generic “AI on bills.”',
  ],
  arc: [
    {
      beat: 1,
      title: 'Why commercial energy management is broken',
      body: 'US commercial buyers spend $241B/year on energy and are systematically overbilled. RI PUC: 83% of utility-flagged bills still sent to customers. FERC: $108M mischarged at one utility. Harvard Law: information asymmetry makes errors self-concealing. 4% BEMS penetration (EIA CBECS).',
    },
    {
      beat: 2,
      title: 'Why buyers cannot solve it themselves',
      body: 'Walston (Bon Secours) runs 36 hospitals alone. Czubkowski (Ascension) oversees $265M across ~100 hospitals. Johnson (Trane): “Most customers are still reactive… even hospitals.” EnergyCAP 2026 survey: 76% expect costs to rise, 69% remain reactive. Reactive posture is rational — understaffed and under-tooled.',
    },
    {
      beat: 3,
      title: 'Why now — the window',
      body: 'LLMs cross the capability threshold for bill parsing and natural language analysis in 2023. Arcadia’s 14-month-old enterprise pivot is migration-bound for 12–24 months. Commercial energy CAGR 5.9% vs 3% budgeted — rising shortfalls. Zero competitors offer PUC monitoring. GTM is intentionally dual-track: higher ed first for calendar and evidence density; multi-site retail and QSR in parallel for the same ESCO-and-threshold gaps; health systems later once security and recovery proof match the ticket. Window is open; not permanent.',
    },
    {
      beat: 4,
      title: 'What Clear Current is',
      body: 'AI-native energy intelligence platform for large commercial buyers. Today: identify billing errors, tariff Q&A in plain language, multi-site invoice association. Honest boundary: Spot ≠ Resolve, Identify ≠ Realize. Building workflow toward recovery, not conflating it.',
    },
    {
      beat: 5,
      title: 'The competitive landscape',
      body: 'EnergyCAP owns Higher Ed with “glorified spreadsheet” UX. Arcadia has $649M and a data API, not intelligence. ENGIE outsources processing and keeps AI internal. None have a natural language interface, PUC monitoring, or campus chargeback. None touches 660+ district energy systems.',
    },
    {
      beat: 6,
      title: 'Why us',
      body: 'Phil Combs on regulatory surveillance — monitoring PUC filings and utility leadership signals for pending rate hikes, translated into facility-specific dollars. Not a customer; a long-tenured practitioner. That demand signal is what Rate Analyst exists to satisfy.',
    },
  ],
  market: {
    tam: {
      value: '$241B',
      label: 'Total U.S. commercial energy spend (2024)',
      source: 'EIA CBECS 2018 projected forward at 5.9% CAGR (Tier 1)',
    },
    sam: [
      {
        vertical: 'Higher education (beachhead)',
        accounts: '≈1,800 four-year institutions with meaningful energy complexity',
        acv: '$30–50K average (below EnergyCAP comparable)',
        sam: '$54M–$90M',
      },
      {
        vertical: 'Healthcare',
        accounts: '400–600 integrated health systems',
        acv: '$50–150K',
        sam: '$20M–$90M',
      },
      {
        vertical: 'Multi-site commercial (ERCOT-first)',
        accounts: '18 deregulated states mapped',
        acv: '$25–50K',
        sam: 'Parallel to higher ed — not “after” in time, secondary in sales focus',
      },
    ],
    som: [
      {
        seg: 'Higher education (beachhead)',
        accounts: '10–15',
        acv: '$30–75K',
        rev: '$300K–$1.1M',
      },
      { seg: 'Healthcare systems', accounts: '3–5', acv: '$75–150K', rev: '$225K–$750K' },
      {
        seg: 'Multi-site commercial (ERCOT-first)',
        accounts: '5–10',
        acv: '$25–50K',
        rev: '$125K–$500K',
      },
      { seg: 'Total SOM (24-month)', accounts: '18–30', acv: '—', rev: '$650K–$2.4M' },
    ],
  },
  evidence: [
    {
      n: 1,
      headline: 'The incumbent is visibly losing customer trust',
      finding:
        'Texas State (1,500 meters) on EnergyCAP: chargebacks “hard to understand,” help docs “lacking details.” 132 G2/Capterra reviews corroborate.',
      confidence: 'STRONG (primary + secondary)',
    },
    {
      n: 2,
      headline: 'The finance/ops split is structural and unsolved',
      finding:
        'Chamberlain (ops): “I care more about demand and usage.” Ault (finance): same split, opposite chair. No tool serves both from one platform.',
      confidence: 'STRONG (multi-source primary)',
    },
    {
      n: 3,
      headline: 'Regulatory intelligence is confirmed white space',
      finding:
        'Combs: “super powerful.” PPL Pennsylvania decision date 7/1/2026 = universities’ first fiscal day. Zero competitors offer it.',
      confidence: 'STRONG (primary + secondary + regulatory)',
    },
    {
      n: 4,
      headline: 'Dead meter detection has a named ROI',
      finding:
        'Czubkowski (Ascension): “more than $1M/year” recovered on ghost meters alone. $265M spend across ~100 hospitals.',
      confidence: 'PRIMARY (inherently credible at scale)',
    },
    {
      n: 5,
      headline: 'Billing errors are government-documented, not folklore',
      finding:
        'FERC $108M FirstEnergy; RI PUC 83% pass-through; PPL PA investigation; Harvard Law information asymmetry.',
      confidence: 'STRONG (all government / regulatory / academic)',
    },
    {
      n: 6,
      headline: 'Third-party segmentation from a credible engineer',
      finding:
        'Troy Nevells (UT Austin): “if UT didn’t have a district energy system…” — named Panda and Frito-Lay unprompted as Clear Current use cases.',
      confidence: 'PRIMARY (unusually strong qualitative signal)',
    },
    {
      n: 7,
      headline: 'The incumbent’s data backbone is not proprietary',
      finding:
        'ENGIE Impact uses Arcadia’s Arc API. 20-year moat is historical data, not analytics. Walt Taylor (Panda): ENGIE should “just bolt on” an LLM.',
      confidence: 'STRONG (primary + technical documentation)',
    },
    {
      n: 8,
      headline:
        'Demand ratchets: NREL-cited example — 1,000 kW summer peak at 80% ratchet can lock ~$144K/year',
      finding:
        'D1 synthesis secondary corroboration: NREL ratchet math; DOE band that demand charges are 30–70% of commercial bills; Panda (Georgia Power) ratchet narrative in primary.',
      confidence: 'STRONG (government + primary industry)',
    },
  ],
  quotes: [
    {
      n: 1,
      text: 'The regulatory intelligence piece I think is super powerful. Knowing what’s happening at the state PUC level — what rates are changing and when — I don’t know anything else that does that.',
      speaker: 'Phil Combs · M&V / Digital Services, Trane Technologies',
      useFor: 'Competitive differentiation slide. Outside voice = no spin risk.',
    },
    {
      n: 2,
      text: 'Flagging anomalies would be the first process so that that is streamlined and featured and flagged rather than looking for it.',
      speaker: 'Andi Ault · Sr. Associate Director of Finance, UT Austin',
      useFor: 'Product/persona slide. Exact buyer says exactly what the Push tier does.',
    },
    {
      n: 3,
      text: 'It being a little bit smarter and knowing how to interpret what’s on the bills and not just interpret, but tell us why we should care and what we can do to change it.',
      speaker: 'John Culver / Scott Sukits · AdventHealth',
      useFor: 'Problem/solution slide. A 55-hospital ENGIE customer names the gap.',
    },
  ],
  pilotStory: {
    raw: 'Pilots surface billing issues and dollar estimates — recovery still runs through the customer’s dispute process.',
    distinction:
      'Identified ≠ realized. Spieler’s question is the one every investor asks. Lead with whether a documented utility credit exists for a CC-supported finding — not an unaudited aggregate headline.',
    investorReady:
      '“We structure audits and dispute packages so customers can pursue credits with their utilities. We track identified vs. realized explicitly and will cite named recovery cases when utility documentation exists — we do not equate modeled savings with cash recovered.”',
    pricingScenarios: [
      { model: 'Fixed SaaS (low end)', assumption: '$30K/yr × 12', arr: '$360K' },
      { model: 'Fixed SaaS (comparable)', assumption: '$50K/yr × 12', arr: '$600K' },
      {
        model: '% of identified savings (2%)',
        assumption: 'Illustrative $2M identified-value pool × 2%',
        arr: '$40K recurring',
      },
      {
        model: '% of recovered savings (10%)',
        assumption: 'Illustrative 30% of pool × 10%',
        arr: '$60K contingent',
      },
      {
        model: 'Hybrid (recommended)',
        assumption: '$25K base + 5% recovered',
        arr: '$300K–$750K',
      },
    ],
  },
  moat: [
    {
      n: 1,
      name: 'Institutional data network effect',
      horizon: '36 months',
      why: 'Outcome-linked ingestion (error → dispute → credit → utility → rate case environment). Can’t be bought. Competitor faces 3-year data disadvantage that compounds.',
    },
    {
      n: 2,
      name: 'Campus chargeback as structural switching cost',
      horizon: '6–12 months to build',
      why: 'Once a university’s chargeback model is configured, switching = re-entering years of institutional logic. 15–20 university configs by 2028 = ERP-level lock-in.',
    },
    {
      n: 3,
      name: 'Regulatory intelligence as recurring urgency',
      horizon: '12–18 month build',
      why: 'Ingests unstructured filings from 50 PUCs, maps to accounts, translates to dollars. Rate cases are continuous. Zero competitors have started. First mover compounds.',
    },
    {
      n: 4,
      name: 'Workflow integration depth',
      horizon: '20+ integrations by 2028',
      why: 'Ault’s #1 wish: financial system integration. Once embedded in budget planning, removing Clear Current = rebuilding integration. Concur/Coupa precedent.',
    },
  ],
}

export const journeyMaps = {
  journeys: [
    // ── Journey 1: Hospital bill anomaly & capacity charge investigation ──
    {
      id: 'hospital-anomaly',
      status: 'final',
      persona: {
        name: 'Ann Walston',
        title: 'VP, Acute Care Facilities Management',
        companyType: 'Bon Secours Mercy Health — 36 U.S. hospitals',
        painLevel: 'High',
      },
      trigger: 'Capacity charges increase tenfold; $140K bill spike missed by third-party processor',
      clearCurrentStageId: 's4',
      emotionalSeries: [72, 80, 55, 35, 25, 30, 48],
      quoteId: 'ann-capacity',
      stages: [
        {
          id: 's1',
          title: 'Anomaly surfaces',
          shortLabel: 'Trigger',
          description:
            'Finance flags a utility invoice far outside historical range. At Intermountain, a $40K bill jumped to $140K and the third-party processor missed it entirely.',
        },
        {
          id: 's2',
          title: 'Manual investigation',
          shortLabel: 'Actions',
          description:
            'Energy manager pulls data from bill processor (GET or ENGIE), cross-references meters, and contacts the utility. Ann Walston describes a meter-to-wing mapping study that took over a year.',
        },
        {
          id: 's3',
          title: 'Root cause identification',
          shortLabel: 'Decision',
          description:
            'Team determines whether the spike is a rate change, meter error, capacity market shift (PJM), or operational issue. Hospitals cannot shed load ("Can you wait 20 minutes to run that MRI?").',
        },
        {
          id: 's4',
          title: 'Clear Current reconciles',
          shortLabel: 'Output',
          description:
            'Clear Current ties the meter interval, contract clause, capacity market data, and billed line items into a single narrative—replacing months of spreadsheet archaeology.',
        },
        {
          id: 's5',
          title: 'Recovery and negotiation',
          shortLabel: 'Follow-up',
          description:
            'Armed with evidence, the team negotiates with the utility or landlord. Bon Secours recovered over $1,000,000 from meter errors—but Ann notes that level of recovery is "incredibly rare" without data.',
        },
        {
          id: 's6',
          title: 'Guardrails set',
          shortLabel: 'Follow-up',
          description:
            'Monitoring rules are established for future capacity charge shifts, meter mapping is updated, and the pattern enters the institutional knowledge base.',
        },
        {
          id: 's7',
          title: 'Board-level report',
          shortLabel: 'Output',
          description:
            'Leadership receives a brief with drivers, dollars at risk, and mitigation actions. Credibility depends on traceable evidence from bills to meters to contracts.',
        },
      ],
    },

    // ── Journey 2: Multi-site QSR exception management ──
    {
      id: 'qsr-exceptions',
      status: 'final',
      persona: {
        name: 'Roger Goldstein',
        title: 'Executive Director, Facilities & Energy',
        companyType: 'Panda Restaurant Group — 2,600 U.S. locations, ~10,000 bills/month',
        painLevel: 'High',
      },
      trigger: 'Shared meter paying neighbor\'s electricity; threshold monitoring misses baseline drift',
      clearCurrentStageId: 'q4',
      emotionalSeries: [65, 75, 60, 40, 30, 25, 45],
      quoteId: 'roger-drift',
      stages: [
        {
          id: 'q1',
          title: 'Exception report arrives',
          shortLabel: 'Trigger',
          description:
            'NG Insight flags invoices that exceed historical tolerance bands. Energy manager and associate review exceptions daily—but threshold-based monitoring misses slow drift.',
        },
        {
          id: 'q2',
          title: 'Data extraction and scrub',
          shortLabel: 'Actions',
          description:
            'Team extracts data from NG in Excel format. Roger monitors monthly spend with auto-generated YoY comparison charts. Anything outside the expected range triggers deeper investigation.',
        },
        {
          id: 'q3',
          title: 'Drift or error identified',
          shortLabel: 'Decision',
          description:
            'Accounting or operations catches something the exception system missed. Panda discovered they were paying a neighbor\'s electricity for a full year via a shared meter that no tolerance band would catch.',
        },
        {
          id: 'q4',
          title: 'Clear Current detects pattern',
          shortLabel: 'Output',
          description:
            'Clear Current analyzes consumption patterns across all 2,600 locations, identifying drift that threshold monitoring misses—baseline shifts, seasonal anomalies, and meter allocation errors.',
        },
        {
          id: 'q5',
          title: 'Utility negotiation',
          shortLabel: 'Follow-up',
          description:
            'Team negotiates with the utility for reimbursement, then works with the landlord on sub-metering. Roger notes "we circle back, negotiate, and get them to reimburse us."',
        },
        {
          id: 'q6',
          title: 'Water correlation check',
          shortLabel: 'Follow-up',
          description:
            'Panda deploys H2NO water sensors for real-time leak detection. Equivalent monitoring for electricity and gas remains manual. Clear Current bridges this gap across utility types.',
        },
        {
          id: 'q7',
          title: 'Portfolio-level report',
          shortLabel: 'Output',
          description:
            'Leadership receives a consolidated view: top outliers, driver explanations, recovery amounts, and recommended monitoring changes across the full restaurant portfolio.',
        },
      ],
    },

    // ── Journey 3: University sustainability and budget reporting ──
    {
      id: 'university-reporting',
      status: 'final',
      persona: {
        name: 'Andi Ault & Andee Chamberlain',
        title: 'Finance & Energy Conservation',
        companyType: 'UT Austin & Texas State University — large campus district energy',
        painLevel: 'Medium',
      },
      trigger: 'Budget submission deadline with rates still unknown; trustees demand auditable sustainability metrics',
      clearCurrentStageId: 'u4',
      emotionalSeries: [50, 58, 72, 55, 35, 42],
      quoteId: 'andi-budget',
      stages: [
        {
          id: 'u1',
          title: 'Budget cycle opens',
          shortLabel: 'Trigger',
          description:
            'Andi Ault starts budget planning in October and must deliver by March—but City of Austin rate changes may not be finalized. Texas State submits requests in Jan–Feb for a Sep 1 fiscal year.',
        },
        {
          id: 'u2',
          title: 'Data collection across systems',
          shortLabel: 'Actions',
          description:
            'Teams pull from EnergyCAP, BAS exports, utility bills, and internal metering. Texas State manages 1,500 meters. Blending district energy data with purchased utility data in EnergyCAP is a persistent challenge.',
        },
        {
          id: 'u3',
          title: 'Finance challenges assumptions',
          shortLabel: 'Decision',
          description:
            'Finance questions why rates changed, why buildings deviate from peers, and whether the sustainability story holds up. Andi notes "our financial systems are pretty outdated." Andee wants EUI, energy per person, and biggest users.',
        },
        {
          id: 'u4',
          title: 'Clear Current reconciles',
          shortLabel: 'Output',
          description:
            'Clear Current becomes the reconciliation layer connecting metering, billing, and procurement—surfacing anomalies with financial context and producing traceable metrics for both finance and sustainability audiences.',
        },
        {
          id: 'u5',
          title: 'Trustee communication',
          shortLabel: 'Output',
          description:
            'Narrative is simplified for trustees and board: drivers, dollars, conservation impact, and next steps. Universities need transparency about where the utility dollar went.',
        },
        {
          id: 'u6',
          title: 'Operational follow-through',
          shortLabel: 'Follow-up',
          description:
            'Projects are sequenced with cash and carbon constraints for the next fiscal cycle. Carl Teague (Texas State) wants event-correlated usage: did a football game cause that Saturday spike?',
        },
      ],
    },

    // ── Journey 4: Ghost meter detection at scale ──
    {
      id: 'ghost-meters',
      status: 'final',
      persona: {
        name: 'Scott Czubkowski',
        title: 'National Director, Energy & Facility Performance',
        companyType: 'Medxcel (Ascension) — ~100 hospitals, 2,500+ sites, $265M/yr utility spend',
        painLevel: 'High',
      },
      trigger: 'Paying $1M/year on buildings no longer owned; finance asks why budget doesn\'t match bills',
      clearCurrentStageId: 'g4',
      emotionalSeries: [55, 65, 78, 42, 28, 35],
      quoteId: 'scott-ghost',
      stages: [
        {
          id: 'g1',
          title: 'Budget-to-bill mismatch',
          shortLabel: 'Trigger',
          description:
            'An administrator asks "why is my utility bill not matching my budget?" The answer may be ghost meters—active accounts on divested or closed facilities that no one turned off.',
        },
        {
          id: 'g2',
          title: 'Account audit initiated',
          shortLabel: 'Actions',
          description:
            'Energy team cross-references active utility accounts against current site roster. At Ascension\'s scale (2,500+ sites), this is a massive manual exercise. Ghost meters went undetected for over two years.',
        },
        {
          id: 'g3',
          title: 'Scope of leakage quantified',
          shortLabel: 'Decision',
          description:
            'Scott estimates $1M/year in payments for buildings Ascension no longer owns. Leadership must decide: invest in continuous monitoring or accept periodic leakage between manual audits.',
        },
        {
          id: 'g4',
          title: 'Clear Current automates detection',
          shortLabel: 'Output',
          description:
            'Clear Current continuously matches active accounts against the site portfolio, flagging meters on divested properties, closed locations, and accounts with no corresponding active facility.',
        },
        {
          id: 'g5',
          title: 'Recovery and termination',
          shortLabel: 'Follow-up',
          description:
            'Team files for account termination and credit recovery with each utility. Savings are immediate and quantifiable—the simplest ROI proof point for the platform.',
        },
        {
          id: 'g6',
          title: 'Ongoing portfolio hygiene',
          shortLabel: 'Follow-up',
          description:
            'As M&A activity continues (acquisitions, divestitures, site closures), Clear Current maintains a living audit of meter-to-site alignment, preventing future ghost meter accumulation.',
        },
      ],
    },

    // ── Journey 5: Budget forecasting for growing health systems ──
    {
      id: 'budget-forecasting',
      status: 'final',
      persona: {
        name: 'Sean Sevy',
        title: 'Director of Operations, System Facilities',
        companyType: 'Houston Methodist — 8 hospitals, 300+ locations, growing system',
        painLevel: 'Medium',
      },
      trigger: 'Existing forecasting tool breaks when new campuses are added; historical trends no longer apply',
      clearCurrentStageId: 'b4',
      emotionalSeries: [48, 55, 68, 50, 32, 40],
      quoteId: 'sean-forecast',
      stages: [
        {
          id: 'b1',
          title: 'Growth breaks the model',
          shortLabel: 'Trigger',
          description:
            'Houston Methodist is adding new campuses and wings. Energy Print\'s forecasting tool works for stable portfolios but "is a little bit weaker" when square footage and load profiles change.',
        },
        {
          id: 'b2',
          title: 'Manual parameter adjustment',
          shortLabel: 'Actions',
          description:
            'Team manually adjusts baselines for new construction, renovations, and expansions. Historical trends are unreliable—each new building changes the portfolio\'s energy profile.',
        },
        {
          id: 'b3',
          title: 'Finance demands explanation',
          shortLabel: 'Decision',
          description:
            'Budget variance looks like cost overrun when it\'s actually growth. Sean needs growth-parameterized forecasting that separates organic usage changes from new capacity additions.',
        },
        {
          id: 'b4',
          title: 'Clear Current growth-aware forecast',
          shortLabel: 'Output',
          description:
            'Clear Current builds forecasts that account for portfolio changes—new buildings, closed wings, renovated spaces—while separating rate variance, weather effects, and operational drift.',
        },
        {
          id: 'b5',
          title: 'Finance-ready deliverable',
          shortLabel: 'Output',
          description:
            'Forecast pack with scenarios (expansion plan A vs. B), driver attribution, and variance explanations exported in a format finance teams can present directly to leadership.',
        },
        {
          id: 'b6',
          title: 'Continuous recalibration',
          shortLabel: 'Follow-up',
          description:
            'As new campuses come online, baselines are automatically recalibrated. The model improves with each billing cycle rather than degrading as the portfolio evolves.',
        },
      ],
    },
  ],
}

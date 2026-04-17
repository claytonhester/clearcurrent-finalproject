export const productModules = {
  modules: [
    {
      id: 'bill-error-detection',
      title: 'Bill Error & Anomaly Detection',
      status: 'final',
      badge: 'High Priority',
      problem:
        'Third-party bill processors (ENGIE, NG Insight, GET) catch invoices that exceed tolerance thresholds—but miss baseline drift, shared meter allocations, and pattern-level anomalies. Intermountain\'s processor missed a $40K→$140K spike. Panda paid a neighbor\'s power for a full year.',
      persona: 'Energy manager + AP analyst + Finance',
      businessValue:
        'Quantifies dollars at risk with traceable evidence. Reduces investigation time from weeks to hours. Enables credit recovery and prevents future leakage.',
      frequency: 'high',
      differentiation:
        'Goes beyond threshold-based exceptions by analyzing consumption patterns, correlating across meter types (electric, gas, water), and separating rate changes from operational anomalies. Unlike EnergyCAP or static spreadsheets, ties obligation → meter → bill line with root-cause narrative.',
      mvpScope:
        'Ingest bills and key contract terms; flag top variances with driver attribution; correlate across utility types; export finance-ready reconciliation pack.',
      quoteId: 'intermountain-spike',
    },
    {
      id: 'tariff-rate-engine',
      title: 'Tariff & Rate Analysis Engine',
      status: 'final',
      badge: 'High Priority',
      problem:
        'Utilities offer dozens of rate classes per jurisdiction—Alabama Power alone has 45. Rate changes are filed with state PUCs but rarely monitored proactively. Teams discover unfavorable rate classes months or years after they took effect. Phil Combs: "Nobody cares until you monetize it."',
      persona: 'Energy manager + Procurement lead',
      businessValue:
        'Identifies rate class optimization opportunities across the portfolio. Quantifies the dollar impact of pending regulatory filings before they take effect. Supports procurement negotiations with tariff-level intelligence.',
      frequency: 'medium',
      differentiation:
        'Monitors PUC and regulatory body filings; summarizes tariff documents in plain language; recommends optimal rate class per site; projects billed impact of proposed rate changes. No current competitor integrates regulatory monitoring with bill-level analysis.',
      mvpScope:
        'Tariff document ingestion and summarization; rate class comparison per site; alert on regulatory filings affecting active accounts; projected cost impact of rate changes.',
      quoteId: 'heatmap-phil-tariff',
    },
    {
      id: 'ghost-meter-detection',
      title: 'Ghost Meter & Inactive Account Detection',
      status: 'final',
      badge: 'Quick Win',
      problem:
        'Organizations pay for meters on divested properties, closed facilities, and accounts that should have been terminated. Ascension estimates $1M/year in ghost meter leakage. AdventHealth faces continuous M&A meter churn across 55 hospitals. These errors persist for years because no system cross-references active sites against billed accounts.',
      persona: 'Energy manager + Corporate development + AP',
      businessValue:
        'Immediate, quantifiable savings with zero operational disruption. Every ghost meter terminated is pure recovered cost. Strongest ROI proof point for platform adoption and sales demos.',
      frequency: 'low',
      differentiation:
        'Continuously matches active utility accounts against the site portfolio. Flags meters on divested properties, closed locations, and accounts with no corresponding active facility. Integrates with M&A workflows to prevent future accumulation.',
      mvpScope:
        'Site roster ingestion and matching against active utility accounts; automated flagging of orphaned meters; recovery workflow with utility contact templates; ongoing portfolio hygiene monitoring.',
      quoteId: 'scott-ghost',
    },
    {
      id: 'budget-forecasting',
      title: 'Budget Forecasting & Variance Explanation',
      status: 'final',
      badge: 'High Priority',
      problem:
        'Budget season requires a coherent story for finance, but energy teams fight baselines that no longer reflect reality. Andi Ault must deliver March budgets before rates are finalized. Sean Sevy\'s forecasting tool breaks when new campuses are added. Scott Czubkowski\'s administrators ask "why doesn\'t my bill match my budget?" and need plain-English answers.',
      persona: 'Finance / Budget owner + Energy manager + Facilities director',
      businessValue:
        'Defensible forecasts with driver attribution and scenario modeling. Fewer rounds of rework before board review. Enables finance teams to explain variance without energy expertise.',
      frequency: 'high',
      differentiation:
        'Growth-aware forecasting that accounts for portfolio changes (new buildings, divestitures, renovations). Separates rate variance, weather effects, equipment drift, and operational changes. Exports to finance templates with traceable calculations.',
      mvpScope:
        'Driver-based forecast for top sites; scenario modeling (expansion plans, rate change projections); variance attribution report; export to finance template; version history.',
      quoteId: 'scott-budget',
    },
    {
      id: 'contract-intelligence',
      title: 'Contract Intelligence & Procurement Support',
      status: 'final',
      badge: 'MVP Ready',
      problem:
        'Contract PDFs and amendments live outside operational systems. Renewal deadlines surprise teams with rider changes. Ann Walston manages UPSC quarterly procurement; Don Johnson sees customers blindsided by demand ratchets embedded in contract terms they never fully parsed.',
      persona: 'Procurement lead + Energy manager',
      businessValue:
        'Surfaces exposure before signature. Aligns negotiation strategy to actual usage patterns and market conditions. Prevents costly auto-renewals and missed optimization windows.',
      frequency: 'medium',
      differentiation:
        'Moves beyond document storage by linking contract clauses to billed outcomes and calendar milestones. Flags ratchet exposure, volume thresholds, and renewal windows proactively.',
      mvpScope:
        'Clause tagging for key riders and obligations; renewal calendar with automated reminders; alert on volume thresholds and ratchet triggers; contract-to-bill reconciliation.',
      quoteId: 'walt-rates',
    },
  ],
}

const months = [
  {
    id: 'jan',
    label: 'Jan',
    monthIndex: 0,
    seasonTag: 'Budgeting',
    customerActivity: 'Budget planning intensifies; Texas State and UT Austin lock FY requests (Jan–Feb). Panda finalizes Jan–Dec fiscal year budgets built in Oct.',
    clearCurrentEntry: 'Deliver variance explanations and driver-based forecasts for budget submissions.',
    isPeakOpportunity: true,
    detail:
      'Finance teams need defensible numbers before budget lock. Clear Current surfaces year-over-year drivers, rate change impacts, and weather-adjusted baselines to reduce rework cycles.',
    status: 'final',
  },
  {
    id: 'feb',
    label: 'Feb',
    monthIndex: 1,
    seasonTag: 'Sustainability',
    customerActivity: 'ESG and sustainability reporting drafts due. Hyatt compiles prior-year metrics (Q1 deadline). Energy Star monthly updates ongoing.',
    clearCurrentEntry: 'Package auditable emissions and consumption metrics with traceable bill-to-meter sources.',
    isPeakOpportunity: false,
    detail:
      'Sustainability narratives need numbers tied to invoices and meters. Traceability matters for CDP, Energy Star, and board communications.',
    status: 'final',
  },
  {
    id: 'mar',
    label: 'Mar',
    monthIndex: 2,
    seasonTag: 'Procurement',
    customerActivity: 'Andi Ault (UT Austin) delivers budget in March; gas purchasing decisions at Texas State; procurement RFPs refined before summer start.',
    clearCurrentEntry: 'Contract intelligence connecting actual usage to proposed terms and riders.',
    isPeakOpportunity: true,
    detail:
      'High-intent window: decisions happen with finance in the room. Clear Current positions as the reconciliation layer that compares contract clauses to real volumes.',
    status: 'final',
  },
  {
    id: 'apr',
    label: 'Apr',
    monthIndex: 3,
    seasonTag: 'Procurement',
    customerActivity: 'Spring procurement deadlines; Ann Walston (Bon Secours) manages UPSC quarterly meetings; chillers begin coming online in southern climates.',
    clearCurrentEntry: 'Decision-ready scenarios for contract renewal versus renegotiation.',
    isPeakOpportunity: true,
    detail:
      'Procurement windows close fast. Teams need apples-to-apples comparisons of contract terms against actual consumption and market conditions.',
    status: 'final',
  },
  {
    id: 'may',
    label: 'May',
    monthIndex: 4,
    seasonTag: 'Capital planning',
    customerActivity: 'Capital project sequencing: HVAC replacements, LED retrofits, EMS rollouts. Ann Walston schedules boiler maintenance for summer downtime.',
    clearCurrentEntry: 'Portfolio ROI ranking across sites with cash and carbon constraints in one view.',
    isPeakOpportunity: false,
    detail:
      'Capital planning benefits from forecasts that translate technical measures into budget-year impact. Clear Current helps prioritize which sites to invest in first.',
    status: 'final',
  },
  {
    id: 'jun',
    label: 'Jun',
    monthIndex: 5,
    seasonTag: 'Capital planning',
    customerActivity: 'Peak demand season begins. Roger Goldstein (Panda) sees electricity peak Jun–Sep. Implementation kickoffs for approved capital projects.',
    clearCurrentEntry: 'Lock baselines before/after for savings verification; monitor demand ratchet exposure.',
    isPeakOpportunity: false,
    detail:
      'Summer peak onset. Verification plans matter for proving project ROI. Clear Current locks baselines tied to invoices so savings are defensible.',
    status: 'final',
  },
  {
    id: 'jul',
    label: 'Jul',
    monthIndex: 6,
    seasonTag: 'Budgeting',
    customerActivity: 'Peak demand and cooling load across all verticals. Intermountain shoulder season (simultaneous heat AM, cool PM). Mid-year performance reviews.',
    clearCurrentEntry: 'Variance diagnostics during peak periods; demand charge impact projections.',
    isPeakOpportunity: false,
    detail:
      'Peak events stress budgets and expose equipment issues. Clear Current shows demand drivers, supplier impacts, and ratchet risk in real time.',
    status: 'final',
  },
  {
    id: 'aug',
    label: 'Aug',
    monthIndex: 7,
    seasonTag: 'Budgeting',
    customerActivity: 'Highest cooling demand (Houston, Florida, Texas markets). Texas State YE reconciliation (FY ends Aug 31). Reliability narratives for leadership.',
    clearCurrentEntry: 'Reliability and cost storytelling with interval context for leadership briefings.',
    isPeakOpportunity: false,
    detail:
      'August merges reliability and cost narratives. Tie operational decisions to billed outcomes so leadership sees the full picture.',
    status: 'final',
  },
  {
    id: 'sep',
    label: 'Sep',
    monthIndex: 8,
    seasonTag: 'Budgeting',
    customerActivity: 'Texas State and UT Austin FY starts Sep 1. Budget builds for next fiscal year accelerate across most organizations. Cooling demand begins to taper.',
    clearCurrentEntry: 'Forecast packs for finance with defensible drivers, not anecdotes.',
    isPeakOpportunity: true,
    detail:
      'Finance asks "what changed?" as budget season opens. Clear Current answers with reconciled drivers: rate changes, weather variance, equipment drift, and portfolio changes.',
    status: 'final',
  },
  {
    id: 'oct',
    label: 'Oct',
    monthIndex: 9,
    seasonTag: 'Budgeting',
    customerActivity: 'Andi Ault (UT Austin) begins Oct budget planning. Panda Restaurant Group Oct budget for Jan FY. Leadership reviews and scenario comparisons.',
    clearCurrentEntry: 'Board-ready charts with traceable calculations and scenario comparisons.',
    isPeakOpportunity: true,
    detail:
      'Peak opportunity: leadership scrutiny. Deliver narratives anchored in reconciled data. Scott Czubkowski needs answers for administrators asking "why doesn\'t my bill match my budget?"',
    status: 'final',
  },
  {
    id: 'nov',
    label: 'Nov',
    monthIndex: 10,
    seasonTag: 'Procurement',
    customerActivity: 'Supplier negotiations for winter gas; hedging windows (Scott Czubkowski avoids mid-winter hedging). Ann Walston boiler season prep; shoulder optimization.',
    clearCurrentEntry: 'Contract risk flags and hedging context tied to market positions and actuals.',
    isPeakOpportunity: false,
    detail:
      'Winter risk conversations benefit from clear contract positions versus actuals. Hedging decisions need forecasted consumption tied to weather and operational patterns.',
    status: 'final',
  },
  {
    id: 'dec',
    label: 'Dec',
    monthIndex: 11,
    seasonTag: 'Budgeting',
    customerActivity: 'Year-end true-ups and accruals. Panda Jan FY close. Gas peak approaching for heating-heavy portfolios. Holiday occupancy shifts in hospitality.',
    clearCurrentEntry: 'Close the books with fewer surprises; bill-to-meter alignment for accruals.',
    isPeakOpportunity: false,
    detail:
      'Year-end surprises erode trust with finance. Close loops on accruals by reconciling billed amounts against metered consumption and contractual obligations.',
    status: 'final',
  },
]

const themeColors = {
  Budgeting: '#0A1628',
  Procurement: '#D4A800',
  Sustainability: '#059669',
  'Capital planning': '#6D28D9',
}

export const seasonalCalendar = {
  intro:
    'Energy teams move through budgeting, procurement, sustainability reporting, and capital planning cycles throughout the year. Across 16 interviews, the pattern was consistent: Clear Current wins when it plugs into the moments finance and operations already care about—not by creating new workflows.',
  months,
  chart: {
    title: 'Seasonal emphasis by month (based on interview patterns)',
    themeColors,
    /** One row per month for Recharts BarChart */
    bars: months.map((m) => ({
      name: m.label,
      emphasis: m.isPeakOpportunity ? 5 : 3,
      theme: m.seasonTag,
      fill: themeColors[m.seasonTag] ?? '#6B7280',
    })),
  },
  quoteIds: ['andi-budget', 'phil-monetize'],
}

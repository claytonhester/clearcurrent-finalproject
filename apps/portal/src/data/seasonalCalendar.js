const months = [
  {
    id: 'jan',
    label: 'Jan',
    monthIndex: 0,
    seasonTag: 'Budgeting',
    customerActivity: 'Annual planning refresh; baselines carried forward.',
    clearCurrentEntry: 'Establish reconciliation targets for the year.',
    isPeakOpportunity: false,
    detail:
      'Teams set preliminary targets. Clear Current can align metering, budgets, and supplier baselines so later variances are explainable.',
    status: 'placeholder',
  },
  {
    id: 'feb',
    label: 'Feb',
    monthIndex: 1,
    seasonTag: 'Sustainability',
    customerActivity: 'Reporting drafts; board prep for ESG storylines.',
    clearCurrentEntry: 'Package auditable metrics with traceable sources.',
    isPeakOpportunity: false,
    detail:
      'Sustainability narratives need numbers that tie to bills and meters. This is a strong window to demonstrate traceability.',
    status: 'placeholder',
  },
  {
    id: 'mar',
    label: 'Mar',
    monthIndex: 2,
    seasonTag: 'Procurement',
    customerActivity: 'RFP refinements; supplier negotiations heat up.',
    clearCurrentEntry: 'Contract intelligence against actual usage patterns.',
    isPeakOpportunity: true,
    detail:
      'Procurement needs apples-to-apples comparisons. Clear Current can connect clauses to real volumes and riders.',
    status: 'placeholder',
  },
  {
    id: 'apr',
    label: 'Apr',
    monthIndex: 3,
    seasonTag: 'Procurement',
    customerActivity: 'Deadlines for summer start; budget owners engaged.',
    clearCurrentEntry: 'Decision-ready scenarios for renewal vs. alternative.',
    isPeakOpportunity: true,
    detail:
      'High intent window: decisions are made with finance in the room. Position Clear Current as the reconciliation layer.',
    status: 'placeholder',
  },
  {
    id: 'may',
    label: 'May',
    monthIndex: 4,
    seasonTag: 'Capital planning',
    customerActivity: 'Project sequencing; HVAC and lighting pipelines.',
    clearCurrentEntry: 'Cash and carbon constraints in one view.',
    isPeakOpportunity: false,
    detail:
      'Capital planning benefits from forecasts that translate technical measures into budget years.',
    status: 'placeholder',
  },
  {
    id: 'jun',
    label: 'Jun',
    monthIndex: 5,
    seasonTag: 'Capital planning',
    customerActivity: 'Implementation kickoffs; measurement plans.',
    clearCurrentEntry: 'Baseline before/after for savings verification.',
    isPeakOpportunity: false,
    detail:
      'Verification plans matter for internal audit. Clear Current can lock baselines tied to invoices.',
    status: 'placeholder',
  },
  {
    id: 'jul',
    label: 'Jul',
    monthIndex: 6,
    seasonTag: 'Sustainability',
    customerActivity: 'Mid-year performance reviews; campus peak demand.',
    clearCurrentEntry: 'Variance diagnostics during peak periods.',
    isPeakOpportunity: false,
    detail:
      'Peak events stress budgets. Good moment to show demand drivers and supplier impacts.',
    status: 'placeholder',
  },
  {
    id: 'aug',
    label: 'Aug',
    monthIndex: 7,
    seasonTag: 'Sustainability',
    customerActivity: 'Heat waves; resilience narratives for leadership.',
    clearCurrentEntry: 'Reliability + cost storytelling with interval context.',
    isPeakOpportunity: false,
    detail:
      'Reliability and cost merge in August stories. Tie operations to billed outcomes.',
    status: 'placeholder',
  },
  {
    id: 'sep',
    label: 'Sep',
    monthIndex: 8,
    seasonTag: 'Budgeting',
    customerActivity: 'Budget builds for next fiscal year accelerate.',
    clearCurrentEntry: 'Forecast packs for finance with defensible drivers.',
    isPeakOpportunity: true,
    detail:
      'Finance asks “what changed?” Clear Current helps answer with reconciled drivers, not anecdotes.',
    status: 'placeholder',
  },
  {
    id: 'oct',
    label: 'Oct',
    monthIndex: 9,
    seasonTag: 'Budgeting',
    customerActivity: 'Leadership reviews; scenario comparisons.',
    clearCurrentEntry: 'Board-ready charts with traceable calculations.',
    isPeakOpportunity: true,
    detail:
      'Peak opportunity: leadership scrutiny. Deliver a narrative anchored in reconciled data.',
    status: 'placeholder',
  },
  {
    id: 'nov',
    label: 'Nov',
    monthIndex: 10,
    seasonTag: 'Procurement',
    customerActivity: 'Supplier negotiations; risk conversations for winter.',
    clearCurrentEntry: 'Contract risk flags and hedging context.',
    isPeakOpportunity: false,
    detail: 'Winter risk conversations benefit from clear contract position vs. actuals.',
    status: 'placeholder',
  },
  {
    id: 'dec',
    label: 'Dec',
    monthIndex: 11,
    seasonTag: 'Budgeting',
    customerActivity: 'Year-end true-ups; accruals and close.',
    clearCurrentEntry: 'Close the books with fewer surprises.',
    isPeakOpportunity: false,
    detail:
      'Year-end surprises erode trust. Close loops on accruals with bill-to-meter alignment.',
    status: 'placeholder',
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
    'Energy teams move through budgeting, procurement, sustainability reporting, and capital planning cycles. Clear Current wins when it plugs into the moments finance and operations already care about.',
  months,
  chart: {
    title: 'Seasonal emphasis by month',
    themeColors,
    /** One row per month for Recharts BarChart */
    bars: months.map((m) => ({
      name: m.label,
      emphasis: m.isPeakOpportunity ? 5 : 3,
      theme: m.seasonTag,
      fill: themeColors[m.seasonTag] ?? '#6B7280',
    })),
  },
  quoteIds: ['phil-1'],
}

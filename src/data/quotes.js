export const quotes = [
  {
    id: 'don-1',
    text: 'Most of the customers, believe it or not, are still reactive on the maintenance and billing side—they chase issues after the invoice lands, not before.',
    source: 'Don Johnson',
    title: 'Territory Sales Manager, Trane Technologies',
    tag: 'reactive-behavior',
    page: 'trigger-map',
    status: 'final',
  },
  {
    id: 'phil-1',
    text: 'Budget gets real in Q3 when leadership asks what changed year over year. That is when energy teams need defensible numbers, not another spreadsheet tab.',
    source: 'Phil Combs',
    title: 'Facilities & Energy Leader',
    tag: 'budget-cycles',
    page: 'seasonal-calendar',
    status: 'final',
  },
  {
    id: 'andee-1',
    text: 'Universities want transparency for trustees and students. If you cannot show where the utility dollar went, the sustainability story does not stick.',
    source: 'Andee Chamberlain',
    title: 'Higher Ed Energy Programs',
    tag: 'transparency',
    page: 'journey-maps',
    status: 'final',
  },
  {
    id: 'don-2',
    text: 'When a bill looks wrong, the first call is not to analytics—it is to AP and the supplier. The team needs a single place that ties the contract to the line items.',
    source: 'Don Johnson',
    title: 'Territory Sales Manager, Trane Technologies',
    tag: 'bill-accuracy',
    page: 'modules',
    status: 'final',
  },
  {
    id: 'overview-featured',
    text: 'The gap is not lack of data—it is lack of a decision-ready narrative that connects metering, billing, and procurement in one workflow.',
    source: 'Interview synthesis',
    title: 'GTM research — Clear Current',
    tag: 'summary',
    page: 'overview',
    status: 'placeholder',
  },
  {
    id: 'heatmap-1',
    text: 'Prioritize what repeats every month and what finance actually sees. High frequency plus visible dollar impact wins the internal business case.',
    source: 'Research team',
    title: 'Prioritization note',
    tag: 'priority',
    page: 'heatmap',
    status: 'placeholder',
  },
]

export function quoteById(id) {
  return quotes.find((q) => q.id === id) ?? null
}

export function quotesByIds(ids) {
  if (!ids?.length) return []
  return ids.map((id) => quoteById(id)).filter(Boolean)
}

export const opportunityHeatmap = {
  intro:
    'Opportunities are scored by business value (x), operational frequency (y), and strategic impact (bubble size) based on how often each capability was cited across 16 interviews, the dollar magnitude described, and alignment with Clear Current\'s differentiation.',
  scales: {
    x: { key: 'value', label: 'Value', min: 0, max: 100 },
    y: { key: 'frequency', label: 'Frequency', min: 0, max: 100 },
    z: { key: 'strategicImpact', label: 'Strategic impact', min: 40, max: 100 },
  },
  quadrants: {
    labels: {
      highPriority: 'High Priority',
      niche: 'Niche',
      highVolume: 'High Volume',
      noise: 'Noise',
    },
    xMid: 50,
    yMid: 50,
  },
  opportunities: [
    {
      id: 'opp-1',
      name: 'Bill error & anomaly detection',
      value: 88,
      frequency: 85,
      strategicImpact: 92,
      status: 'final',
      detail:
        'Cited by every interviewee. Intermountain missed a $40K→$140K spike; Panda paid a neighbor\'s electricity for a year; Ascension pays ~$1M/yr on ghost meters. The strongest wedge into AP and finance workflows.',
    },
    {
      id: 'opp-2',
      name: 'Tariff & rate optimization',
      value: 78,
      frequency: 72,
      strategicImpact: 85,
      status: 'final',
      detail:
        'Phil Combs wants regulatory intelligence—PUC filings, rate class comparisons, tariff impact analysis. Walt Taylor notes Alabama Power has 45 rate classes. No current tool connects rate changes to billed impact automatically.',
    },
    {
      id: 'opp-3',
      name: 'Budget forecasting',
      value: 75,
      frequency: 82,
      strategicImpact: 78,
      status: 'final',
      detail:
        'Every budget cycle (Oct–Mar). Andi Ault needs forecasts before rates are finalized. Sean Sevy needs growth-aware models. Scott Czubkowski needs plain-English answers for administrators. Repeats annually with high finance visibility.',
    },
    {
      id: 'opp-4',
      name: 'Ghost meter & inactive account detection',
      value: 82,
      frequency: 55,
      strategicImpact: 80,
      status: 'final',
      detail:
        'Lower frequency but massive per-incident value. Ascension: $1M/yr leakage. Panda: year-long shared meter error. AdventHealth: M&A churn creates continuous meter orphaning. Simplest ROI proof point for sales.',
    },
    {
      id: 'opp-5',
      name: 'Contract intelligence',
      value: 72,
      frequency: 60,
      strategicImpact: 76,
      status: 'final',
      detail:
        'Critical during procurement windows (Mar–Apr, Nov). Ties contract clauses to actual usage patterns and riders. Ann Walston manages UPSC quarterly; Don Johnson sees customers blindsided by ratchets and rider changes.',
    },
    {
      id: 'opp-6',
      name: 'Peak demand diagnostics',
      value: 68,
      frequency: 70,
      strategicImpact: 65,
      status: 'final',
      detail:
        'Operational rhythm during Jun–Sep peaks. Ann Walston\'s tenfold capacity charge increase. Don Johnson flags power factor penalties and ratchet exposure. Supports both cost management and reliability narratives.',
    },
    {
      id: 'opp-7',
      name: 'Sustainability & ESG reporting',
      value: 58,
      frequency: 48,
      strategicImpact: 62,
      status: 'final',
      detail:
        'Important for board storytelling and compliance (Energy Star, CDP, 2030 goals). Randy Dawes (Hyatt) tracks metrics quarterly. Lower urgency than billing—but growing as regulatory requirements tighten.',
    },
    {
      id: 'opp-8',
      name: 'Deposit & credit recovery',
      value: 52,
      frequency: 35,
      strategicImpact: 48,
      status: 'final',
      detail:
        'Roger Goldstein: utilities hold 10-year-old deposits they\'ll only return if you ask. Niche but concrete, and the recovery is pure found money. Works well as a feature within bill error detection.',
    },
  ],
  quoteIds: ['heatmap-walston', 'heatmap-phil-tariff'],
}

export const opportunityHeatmap = {
  intro:
    'Opportunities are scored by business value (x), operational frequency (y), and strategic impact (bubble size). Use this view to prioritize modules that combine visibility with repeatability.',
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
    /** Divide lines in data units (0–100 scale) */
    xMid: 50,
    yMid: 50,
  },
  opportunities: [
    {
      id: 'opp-1',
      name: 'Bill error detection',
      value: 82,
      frequency: 78,
      strategicImpact: 88,
      status: 'placeholder',
      detail:
        'High frequency and visible dollars. Strong wedge into AP and supplier workflows.',
    },
    {
      id: 'opp-2',
      name: 'Contract intelligence',
      value: 76,
      frequency: 62,
      strategicImpact: 80,
      status: 'placeholder',
      detail: 'Critical during renewals; ties procurement to actual usage and riders.',
    },
    {
      id: 'opp-3',
      name: 'Budget forecasting',
      value: 70,
      frequency: 85,
      strategicImpact: 72,
      status: 'placeholder',
      detail: 'Repeats every budget cycle; finance-facing narrative is the core value.',
    },
    {
      id: 'opp-4',
      name: 'Carbon reporting pack',
      value: 58,
      frequency: 45,
      strategicImpact: 65,
      status: 'placeholder',
      detail:
        'Important for sustainability storytelling; slightly lower frequency than billing.',
    },
    {
      id: 'opp-5',
      name: 'Peak demand diagnostics',
      value: 64,
      frequency: 70,
      strategicImpact: 60,
      status: 'placeholder',
      detail: 'Operational rhythm during summer peaks; supports cost and reliability.',
    },
    {
      id: 'opp-6',
      name: 'IDR data quality',
      value: 48,
      frequency: 55,
      strategicImpact: 52,
      status: 'placeholder',
      detail: 'Foundational but often invisible until something breaks.',
    },
  ],
  quoteIds: ['heatmap-1'],
}

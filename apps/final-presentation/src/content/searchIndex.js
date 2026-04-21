import { APPENDIX_ITEMS, DELIVERABLES, RESEARCH_ASSISTANT } from '../navConfig.js'

export const SEARCH_INDEX = [
  {
    path: '/',
    label: 'Decision Brief',
    description:
      'Five proofs, three open questions; beachhead, build-first module, marketing and online presence',
    keywords: [
      'brief',
      'decision',
      'summary',
      'executive',
      'proofs',
      'calls',
      'marketing',
      'website',
      'beachhead',
    ],
  },
  {
    path: '/triggers',
    label: 'D1 · Engagement Trigger Map',
    description:
      'Reactive, proactive, and regulatory triggers with urgency and CC entry point',
    keywords: [
      'd1',
      'triggers',
      'reactive',
      'proactive',
      'regulatory',
      'alerts',
      '/triggers',
    ],
  },
  {
    path: '/calendar',
    label: 'D2 · Seasonal Energy Calendar',
    description: '12-month view of fiscal cycles, weather peaks, and rate-case timing',
    keywords: ['d2', 'calendar', 'seasonal', 'budget', 'peak', 'fy', '/calendar'],
  },
  {
    path: '/journeys',
    label: 'D3 · Customer Journey Maps',
    description: 'Before/after swim lanes across six buyer and channel-adjacent journeys',
    keywords: ['d3', 'journey', 'workflow', 'before', 'after', '/journeys'],
  },
  {
    path: '/modules',
    label: 'D4 · Product Module Recommendations',
    description:
      'Five modules, phased build, maturity snapshot, ranked MVP scope',
    keywords: [
      'd4',
      'd4-2',
      'd42',
      'd4-modules-v2',
      'modules-v2',
      'modules',
      'product',
      'mvp',
      'roadmap',
      'anomaly',
      'chargeback',
      'phase 3',
      'layman',
      'autonomy',
      'mcp',
      'sql',
      'evolution',
      'maturity',
      'push',
      'chat',
      '/modules',
    ],
  },
  {
    path: '/market',
    label: 'D5 · Market Opportunity Heatmap',
    description: 'Vertical scorecard, beachhead, and ARR path to Series A',
    keywords: [
      'd5',
      'market',
      'heatmap',
      'beachhead',
      'higher ed',
      'healthcare',
      '/market',
    ],
  },
  {
    path: '/competition',
    label: 'D6 · Competitive Intelligence Brief',
    description: 'Three poles, competitor cards, and white space',
    keywords: [
      'd6',
      'competition',
      'arcadia',
      'energycap',
      'urjanet',
      'watchwire',
      'engie',
      'energy toolbase',
      'brainbox',
      '/competition',
    ],
  },
  {
    path: '/investor',
    label: 'D7 · Investor Narrative & Pitch',
    description: 'Six-beat arc, tiered market math, and objection handling',
    keywords: ['d7', 'investor', 'pitch', 'tam', 'sam', 'som', '/investor'],
  },
  {
    path: '/gtm',
    label: 'D8 · GTM Strategy Playbook',
    description: 'ICPs, land–expand–retain tracks, pricing, deal killers, channel posture',
    keywords: ['d8', 'gtm', 'playbook', 'icp', 'pilot', 'sales', '/gtm'],
  },
  {
    path: RESEARCH_ASSISTANT.path,
    label: 'Research Assistant (full page)',
    description:
      'AI chat over the same research as the portal—deliverables, interviews, and secondary data',
    keywords: [
      'assistant',
      'ai',
      'llm',
      'chat',
      'questions',
      'research',
      'rag',
      'corpus',
      '/chat',
    ],
  },
  {
    path: '/appendix/quotes',
    label: 'Evidence & diligence · Quote bank',
    description: 'Verbatim named quotes from primary interviews',
    keywords: ['quotes', 'evidence', 'diligence', 'verbatim', 'primary'],
  },
  {
    path: '/appendix/interviews',
    label: 'Evidence & diligence · Interview roster',
    description:
      'Confirmed interviewees, coverage gaps, and recommended verticals for stronger primary research',
    keywords: [
      'interviews',
      'roster',
      'coverage',
      'gaps',
      'verticals',
      'evidence',
      'diligence',
      'primary',
    ],
  },
  {
    path: '/appendix/chat-prompts',
    label: 'Evidence & diligence · User chat prompt library',
    description:
      'Buyer-style chat prompts elicited during primary interviews — for demos, journeys, and eval coverage',
    keywords: [
      'prompts',
      'chat',
      'llm',
      'questions',
      'users',
      'buyers',
      'elicitation',
      'primary',
      'evidence',
      'diligence',
      'industry',
      'healthcare',
      'higher ed',
      'qsr',
      'channel',
      'filter',
    ],
  },
  {
    path: '/appendix/companies',
    label: 'Evidence & diligence · Company cards',
    description:
      'Interview account cards with expandable diligence snapshots and bullet highlights from primary research',
    keywords: ['company', 'cards', 'diligence', 'interviews', 'profiles', 'evidence'],
  },
  {
    path: '/appendix/sources',
    label: 'Evidence & diligence · Sources & citations',
    description:
      'Primary interview accounts and secondary citations with public links where available',
    keywords: ['sources', 'citations', 'primary', 'secondary', 'links', 'evidence'],
  },
]

/** One row per route: nav labels + enriched copy from SEARCH_INDEX (no duplicate paths). */
export function getSearchCatalog() {
  const byPath = new Map()

  for (const d of DELIVERABLES) {
    byPath.set(d.path, {
      path: d.path,
      label: d.label,
      kind: 'deliverable',
      keywords: [],
    })
  }
  byPath.set(RESEARCH_ASSISTANT.path, {
    path: RESEARCH_ASSISTANT.path,
    label: RESEARCH_ASSISTANT.label,
    kind: 'deliverable',
    keywords: [],
  })
  for (const a of APPENDIX_ITEMS) {
    byPath.set(a.path, {
      path: a.path,
      label: a.label,
      kind: 'appendix',
      keywords: [],
    })
  }
  for (const row of SEARCH_INDEX) {
    const prev = byPath.get(row.path)
    const kind = row.path.startsWith('/appendix') ? 'appendix' : 'deliverable'
    const mergedKeywords = [
      ...new Set([...(prev?.keywords ?? []), ...(row.keywords ?? [])]),
    ]
    byPath.set(row.path, {
      ...prev,
      ...row,
      kind: prev?.kind ?? kind,
      keywords: mergedKeywords,
    })
  }

  const order = [
    ...DELIVERABLES.map((d) => d.path),
    RESEARCH_ASSISTANT.path,
    ...APPENDIX_ITEMS.map((a) => a.path),
  ]
  return order.map((p) => byPath.get(p)).filter(Boolean)
}

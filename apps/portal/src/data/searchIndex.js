/**
 * Curated in-app search (client-only). Update when routes or anchor IDs change.
 * @type {{ id: string, title: string, path: string, hash?: string, keywords: string[] }[]}
 */
export const SEARCH_INDEX = [
  {
    id: 'overview',
    title: 'Executive Summary',
    path: '/',
    keywords: ['home', 'summary', 'stats', 'roster'],
  },
  {
    id: 'at-a-glance',
    title: 'At a glance',
    path: '/',
    hash: 'at-a-glance',
    keywords: ['kpi', 'metrics'],
  },
  {
    id: 'what-we-found',
    title: 'What we found',
    path: '/',
    hash: 'what-we-found',
    keywords: ['findings'],
  },
  {
    id: 'ceo-brief',
    title: 'CEO brief',
    path: '/brief',
    keywords: ['decisions', 'methodology', 'privacy', 'async'],
  },
  {
    id: 'decision-asks',
    title: 'Decision asks',
    path: '/brief',
    hash: 'decision-asks',
    keywords: ['asks', 'leadership'],
  },
  {
    id: 'triggers',
    title: 'Engagement Triggers',
    path: '/triggers',
    keywords: ['reactive', 'proactive', 'pie'],
  },
  {
    id: 'trigger-list',
    title: 'Trigger list',
    path: '/triggers',
    hash: 'trigger-list',
    keywords: ['personas'],
  },
  {
    id: 'calendar',
    title: 'Seasonal Calendar',
    path: '/calendar',
    keywords: ['months', 'season', 'peaks'],
  },
  {
    id: 'seasonal-chart',
    title: 'Seasonal chart',
    path: '/calendar',
    hash: 'seasonal-chart',
    keywords: ['emphasis', 'bars'],
  },
  {
    id: 'journeys',
    title: 'User Journey Maps',
    path: '/journeys',
    keywords: ['persona', 'flow', 'frustration'],
  },
  {
    id: 'journey-emotional-arc',
    title: 'Emotional arc',
    path: '/journeys',
    hash: 'journey-emotional-arc',
    keywords: ['line chart'],
  },
  {
    id: 'heatmap',
    title: 'Opportunity Heatmap',
    path: '/heatmap',
    keywords: ['scatter', 'priority', 'bubbles'],
  },
  {
    id: 'priority-map',
    title: 'Priority map',
    path: '/heatmap',
    hash: 'priority-map',
    keywords: ['quadrant'],
  },
  {
    id: 'modules',
    title: 'Product Modules',
    path: '/modules',
    keywords: ['mvp', 'EnergyCAP'],
  },
  {
    id: 'module-detail',
    title: 'Module detail',
    path: '/modules',
    hash: 'module-detail',
    keywords: ['differentiation'],
  },
  {
    id: 'bonus',
    title: 'Bonus deliverables',
    path: '/bonus',
    keywords: ['extra'],
  },
]

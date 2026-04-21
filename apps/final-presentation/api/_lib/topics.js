/**
 * Topic catalog used by both the picker UI and the API.
 * Keep this list in sync with src/components/chat/topics.js.
 */

export const TOPICS = {
  all: { id: 'all', label: 'All research', focusSourceId: null, focusSourceType: null },
  d0: { id: 'd0', label: 'D0 — Decision Brief', focusSourceId: 'd0', focusSourceType: 'deliverable' },
  d1: { id: 'd1', label: 'D1 — Engagement Trigger Map', focusSourceId: 'd1', focusSourceType: 'deliverable' },
  d2: { id: 'd2', label: 'D2 — Seasonal Energy Management Calendar', focusSourceId: 'd2', focusSourceType: 'deliverable' },
  d3: { id: 'd3', label: 'D3 — Customer Journey Maps', focusSourceId: 'd3', focusSourceType: 'deliverable' },
  d4: { id: 'd4', label: 'D4 — Product Module Recommendations', focusSourceId: 'd4', focusSourceType: 'deliverable' },
  d5: { id: 'd5', label: 'D5 — Market Opportunity Heatmap', focusSourceId: 'd5', focusSourceType: 'deliverable' },
  d6: { id: 'd6', label: 'D6 — Competitive Intelligence Brief', focusSourceId: 'd6', focusSourceType: 'deliverable' },
  d7: { id: 'd7', label: 'D7 — Investor Narrative & Pitch Framework', focusSourceId: 'd7', focusSourceType: 'deliverable' },
  d8: { id: 'd8', label: 'D8 — GTM Strategy Playbook', focusSourceId: 'd8', focusSourceType: 'deliverable' },
  interviews: {
    id: 'interviews',
    label: 'Primary Interviews',
    focusSourceId: 'interviews',
    focusSourceType: 'interview',
  },
  secondary: {
    id: 'secondary',
    label: 'Secondary Data',
    focusSourceId: 'secondary',
    focusSourceType: 'secondary',
  },
}

export function resolveTopic(topicId) {
  return TOPICS[topicId] || TOPICS.all
}

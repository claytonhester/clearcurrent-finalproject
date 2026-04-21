/**
 * Executive deliverable tabs — Decision Brief + D1–D8.
 * Each tab is a self-contained artifact for leadership, rendered from structured data.
 */

/** Shell copy: portal reads as a confidential briefing to founders, not a researcher microsite. */
export const PORTAL_SHELL = {
  brandEyebrow: 'Leadership briefing',
  brandSubtitle: 'Executive deliverables',
  appendixNavLabel: 'Evidence & diligence',
  defaultTopBarEyebrow: 'Clear Current · Leadership briefing',
}

export const DELIVERABLES = [
  {
    id: 'brief',
    slug: 'brief',
    path: '/',
    shortLabel: 'D0',
    label: 'Decision Brief',
    title: 'Decision Brief',
    artifact: 'Executive summary',
    eyebrow: 'Decision Brief · Strategic spine',
    oneLiner:
      'Five proofs, three open questions, three calls: beachhead, build-first product, marketing & web presence.',
  },
  {
    id: 'triggers',
    slug: 'd1',
    path: '/triggers',
    shortLabel: 'D1',
    label: 'Engagement Trigger Map',
    title: 'Engagement Trigger Map',
    artifact: 'Trigger matrix',
    eyebrow: 'D1 · When buyers pick up the phone',
    oneLiner:
      'Reactive, proactive, and regulatory triggers with urgency and CC entry point.',
  },
  {
    id: 'calendar',
    slug: 'd2',
    path: '/calendar',
    shortLabel: 'D2',
    label: 'Seasonal Energy Calendar',
    title: 'Seasonal Energy Management Calendar',
    artifact: 'Twelve-month calendar',
    eyebrow: 'D2 · Fiscal years, weather peaks, rate cycles',
    oneLiner: 'When to reach each vertical, and which module opens the door.',
  },
  {
    id: 'journeys',
    slug: 'd3',
    path: '/journeys',
    shortLabel: 'D3',
    label: 'Customer Journey Maps',
    title: 'Customer Journey Maps',
    artifact: 'Five before/after swim lanes',
    eyebrow: 'D3 · What the day looks like, with and without CC',
    oneLiner:
      'Five core journeys, grounded in named-interview reality — and honest about what ships now.',
  },
  {
    id: 'modules',
    slug: 'd4',
    path: '/modules',
    shortLabel: 'D4',
    label: 'Product Module Recommendations',
    title: 'Product Module Recommendations',
    artifact: 'Five modules, three phases',
    eyebrow: 'D4 · What to build, in what order',
    oneLiner:
      'Five prioritized modules with MVP scope, honest gaps, and a phased build plan.',
  },
  {
    id: 'market',
    slug: 'd5',
    path: '/market',
    shortLabel: 'D5',
    label: 'Market Opportunity Heatmap',
    title: 'Market Opportunity Heatmap',
    artifact: 'Vertical × dimension scorecard',
    eyebrow: 'D5 · Where to start, where to defer',
    oneLiner: 'Scored verticals, a named beachhead, and the ARR path to Series A.',
  },
  {
    id: 'competition',
    slug: 'd6',
    path: '/competition',
    shortLabel: 'D6',
    label: 'Competitive Intelligence Brief',
    title: 'Competitive Intelligence Brief',
    artifact: 'Three-pole map + white space',
    eyebrow: 'D6 · Three poles of competitors, three gaps',
    oneLiner: 'How the landscape is actually structured — and where Clear Current wins.',
  },
  {
    id: 'investor',
    slug: 'd7',
    path: '/investor',
    shortLabel: 'D7',
    label: 'Investor Narrative & Pitch',
    title: 'Investor Narrative & Pitch Framework',
    artifact: 'Six-beat arc + objection book',
    eyebrow: 'D7 · The fundraising argument, with receipts',
    oneLiner:
      'Six-beat narrative, tiered evidence, and an honest objection handling book.',
  },
  {
    id: 'gtm',
    slug: 'd8',
    path: '/gtm',
    shortLabel: 'D8',
    label: 'GTM Strategy Playbook',
    title: 'GTM Strategy Playbook',
    artifact: 'ICPs · tracks · pricing · deal killers',
    eyebrow: 'D8 · How to get the first accounts',
    oneLiner: 'Beachhead ICPs, land–expand–retain tracks, pricing, and what kills deals.',
  },
]

/** Shown in the main deliverables list directly under D8 — full-page research chat (not a deliverable doc). */
export const RESEARCH_ASSISTANT = {
  id: 'research-assistant',
  path: '/chat',
  shortLabel: 'RA',
  label: 'Research Assistant',
  title: 'Research Assistant',
  eyebrow: 'Research Assistant · Full page',
  oneLiner: 'Ask the AI assistant about any deliverable, interview, or research file.',
}

export const APPENDIX_ITEMS = [
  {
    id: 'app-quotes',
    label: 'Quote bank',
    path: '/appendix/quotes',
    eyebrow: 'Evidence & diligence · Verbatim buyer quotes',
  },
  {
    id: 'app-interviews',
    label: 'Interview roster',
    path: '/appendix/interviews',
    eyebrow: 'Evidence & diligence · Primary interviews',
  },
  {
    id: 'app-chat-prompts',
    label: 'User chat prompt library',
    path: '/appendix/chat-prompts',
    eyebrow: 'Evidence & diligence · User chat prompt library',
  },
  {
    id: 'app-companies',
    label: 'Company cards',
    path: '/appendix/companies',
    eyebrow: 'Evidence & diligence · Account profiles',
  },
  {
    id: 'app-sources',
    label: 'Sources & citations',
    path: '/appendix/sources',
    eyebrow: 'Evidence & diligence · Sources',
  },
]

/** Helper: returns prev/next deliverable for in-page navigation. */
export function getDeliverableNeighbors(pathname) {
  const idx = DELIVERABLES.findIndex((d) => d.path === pathname)
  if (idx === -1) return { prev: null, next: null, current: null }
  return {
    prev: idx > 0 ? DELIVERABLES[idx - 1] : null,
    next: idx < DELIVERABLES.length - 1 ? DELIVERABLES[idx + 1] : null,
    current: DELIVERABLES[idx],
  }
}

/**
 * Like getDeliverableNeighbors, but the walk continues from D8 → full-page Research Assistant (/chat), and
 * /chat has previous = D8. Appendix routes still get no walk footer (current: null).
 */
export function getWalkNavNeighbors(pathname) {
  const idx = DELIVERABLES.findIndex((d) => d.path === pathname)
  if (idx !== -1) {
    const current = DELIVERABLES[idx]
    const prev = idx > 0 ? DELIVERABLES[idx - 1] : null
    const next =
      idx < DELIVERABLES.length - 1
        ? DELIVERABLES[idx + 1]
        : RESEARCH_ASSISTANT
    return { prev, next, current }
  }
  if (pathname === RESEARCH_ASSISTANT.path) {
    return {
      prev: DELIVERABLES[DELIVERABLES.length - 1] ?? null,
      next: null,
      current: RESEARCH_ASSISTANT,
    }
  }
  return { prev: null, next: null, current: null }
}

export function getDeliverableByPath(pathname) {
  return DELIVERABLES.find((d) => d.path === pathname) ?? null
}

/** Browser tab title: deliverable full title or appendix label, then brand. */
export function getDocumentTitle(pathname) {
  const brand = 'Clear Current'
  const d = DELIVERABLES.find((x) => x.path === pathname)
  if (d) return `${d.title} · ${brand}`
  if (pathname === RESEARCH_ASSISTANT.path) return `${RESEARCH_ASSISTANT.title} · ${brand}`
  const a = APPENDIX_ITEMS.find((x) => x.path === pathname)
  if (a) return `${a.label} · ${brand}`
  return `${brand} · Leadership briefing`
}

export function getAppendixByPath(pathname) {
  return APPENDIX_ITEMS.find((i) => i.path === pathname) ?? null
}

/** Legacy helper retained for appendix pages — returns an eyebrow label by appendix id. */
export function appendixEyebrow(id) {
  const map = {
    'app-quote-bank': 'Evidence & diligence · Quote bank',
    'app-industry-cards': 'Evidence & diligence · Company cards',
    'app-roster': 'Evidence & diligence · Interview roster',
    'app-chat-prompts': 'Evidence & diligence · User chat prompt library',
    'app-sources': 'Evidence & diligence · Sources & citations',
  }
  return map[id] ?? 'Evidence & diligence'
}

/** CEO-facing brief: decisions, methodology, limitations, privacy — edit copy here. */
export const ceoBrief = {
  meta: {
    title: 'CEO brief — decisions & context',
    audience: 'For John Reuter and Dan Schreiber (async review after the presentation).',
    asOf: 'April 2026',
    status: 'placeholder',
  },
  intro:
    'This page distills what leadership may want to decide or discuss, how the engagement was conducted, and what the static portal can and cannot guarantee about confidentiality.',
  decisionAsks: [
    {
      id: 'd1',
      title: 'Prioritize GTM proof points for the next fiscal chapter',
      context:
        'Align on which opportunity themes from the heatmap and modules deserve narrative and pipeline focus first.',
      suggestedOwner: 'CEO / GTM lead',
      status: 'placeholder',
    },
    {
      id: 'd2',
      title: 'Confirm appetite for workflow-led demos vs. dashboard-only positioning',
      context:
        'Stakeholder interviews emphasized reconciling data into finance-ready answers; validate how aggressively to message workflow.',
      suggestedOwner: 'CEO / Product',
      status: 'placeholder',
    },
    {
      id: 'd3',
      title: 'Set boundaries on vertical and persona depth for the next research sprint',
      context:
        'Decide whether to deepen higher-ed vs. commercial narratives or keep horizontal for now.',
      suggestedOwner: 'CEO',
      status: 'placeholder',
    },
  ],
  opportunities: [
    {
      id: 'o1',
      headline: '“Reconcile and explain” as the wedge',
      detail:
        'Personas want defensible answers tied to dollars and obligations—not another chart without a path to action.',
    },
    {
      id: 'o2',
      headline: 'Seasonal and procurement windows',
      detail:
        'Budget proof and renewals create narrow windows where energy teams must translate technical work into finance-ready stories.',
    },
  ],
  risks: [
    {
      id: 'r1',
      headline: 'Sample breadth',
      detail:
        'Insights are directional from a limited set of interviews and desk research—not a statistical census of the market.',
    },
    {
      id: 'r2',
      headline: 'Competitive moves',
      detail:
        'Incumbents and adjacent tools evolve quickly; module recommendations should be validated against live competitive intel.',
    },
  ],
  methodology: {
    title: 'How this report was built',
    paragraphs: [
      'Primary input: structured interviews with stakeholders in target personas (see Executive Summary roster), plus internal working sessions with the Clear Current team.',
      'Secondary input: desk review of public materials, category norms, and workflow assumptions documented in the engagement.',
      'Synthesis: findings were triangulated into triggers, seasonal patterns, journeys, a priority heatmap, and product module narratives—all editable in plain data files shipped with this site.',
    ],
    bullets: [
      'No backend database: all numbers and copy live in static JavaScript modules bundled at deploy time.',
      'Charts are illustrative scoring for discussion, not audited financial statements.',
    ],
  },
  limitations: {
    title: 'Limitations',
    items: [
      'Not all segments or geographies are represented; quotes and examples are indicative.',
      'Forward-looking statements depend on assumptions that may change with regulation, tariffs, or customer budgets.',
      'The portal does not replace legal, compliance, or investment due diligence.',
    ],
  },
  privacy: {
    title: 'Privacy & sharing',
    paragraphs: [
      'This site is a static front end: research text and figures are included in the public JavaScript bundle served to the browser. Anyone with the URL can load the app unless you add access control at the host (or distribute an offline PDF instead).',
      'Sharing a live URL is convenient but hard to revoke; forwarding a PDF snapshot may be preferable when you need tighter control over circulation.',
      'Optional analytics (e.g. Plausible), if enabled on the host, collects only aggregate traffic—not per-reader identity.',
    ],
  },
}

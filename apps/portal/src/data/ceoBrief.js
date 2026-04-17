/** CEO-facing brief: decisions, methodology, limitations, privacy — edit copy here. */
export const ceoBrief = {
  meta: {
    title: 'CEO brief — decisions & context',
    audience: 'For John Reuter and Dan Schreiber (async review after the presentation).',
    asOf: 'April 2026',
    status: 'final',
  },
  intro:
    'Sixteen interviews across healthcare, restaurants, universities, real estate, and energy services revealed a consistent market gap. This page distills the three strategic decisions the research demands, how the engagement was conducted, and what the portal can and cannot guarantee.',
  decisionAsks: [
    {
      id: 'd1',
      title: 'Lead with healthcare or go horizontal?',
      context:
        'Five of twelve organizations interviewed were health systems (AdventHealth, Bon Secours, Intermountain, Ascension, Houston Methodist). They share massive bill volumes (1,000–2,000/day), high spend ($265M/yr at Ascension alone), and acute pain around ghost meters, capacity charges, and M&A meter churn. Healthcare may be the fastest wedge—but locking in too early narrows TAM.',
      suggestedOwner: 'CEO / GTM lead',
      status: 'final',
    },
    {
      id: 'd2',
      title: 'Partner with bill-pay incumbents or compete against them?',
      context:
        'Every multi-site organization outsources bill payment to ENGIE Impact, NG Insight, or GET/Get Choice. These processors hold the data but lack interpretive intelligence. Walt Taylor said it directly: "It would be great if Engie would incorporate an LLM—they already have all the data." Clear Current can be the intelligence layer on top of their data, or build its own ingestion moat.',
      suggestedOwner: 'CEO / Product',
      status: 'final',
    },
    {
      id: 'd3',
      title: 'Subscription, savings-share, or embedded pricing?',
      context:
        'Marc Spieler (NVIDIA) laid out the tension: "If bills are consistently wrong, they\'ll want a subscription. But as soon as you save them $20 million, they\'ll push for fixed fee." Roger Goldstein prefers capital ownership for stable companies. Jamare Bates (JLL) noted mid-market is the sweet spot—enterprise builds internally, small firms can\'t justify the ROI.',
      suggestedOwner: 'CEO / Finance',
      status: 'final',
    },
  ],
  opportunities: [
    {
      id: 'o1',
      headline: '"Reconcile and explain" as the wedge',
      detail:
        'Bill processors pay bills but don\'t interpret them. AdventHealth\'s John Culver captured the gap: "NG pays the bottom line dollar—tell us why we should care and what we can do to change it." Clear Current wins by turning billing data into actionable narratives.',
    },
    {
      id: 'o2',
      headline: 'Ghost meter and inactive account detection',
      detail:
        'Ascension pays an estimated $1M/year on meters for buildings they no longer own. Panda paid a neighbor\'s electricity for a full year via a shared meter. This is a concrete, quantifiable module with immediate ROI proof.',
    },
    {
      id: 'o3',
      headline: 'Tariff and rate intelligence',
      detail:
        'Phil Combs wants regulatory monitoring—PUC filings, rate class optimization, tariff comparisons. Walt Taylor notes Alabama Power alone has 45 rate classes. No tool today connects rate changes to billed impact automatically.',
    },
  ],
  risks: [
    {
      id: 'r1',
      headline: 'Incumbent AI adoption',
      detail:
        'ENGIE, NG Insight, and Constellation (Peer AI) are actively exploring AI features. Walt Taylor and Adam Zavadsky both expect bill-pay processors to bolt on LLM capabilities. Speed to market matters.',
    },
    {
      id: 'r2',
      headline: 'Data access requires trust and security clearance',
      detail:
        'Healthcare organizations face HIPAA-adjacent concerns and IT security review cycles of 2+ years (AdventHealth\'s BrainBox experience). Jamare Bates (JLL) emphasized that Fortune 200 companies will not tolerate invoice data exposure. SOC 2 and data residency are table stakes.',
    },
    {
      id: 'r3',
      headline: 'Sample breadth',
      detail:
        'Insights are directional from 16 interviews across 12 organizations—not a statistical census. Healthcare is over-represented; manufacturing and retail are absent. Validate with broader outreach before committing vertical strategy.',
    },
  ],
  methodology: {
    title: 'How this report was built',
    paragraphs: [
      'Primary input: 16 structured interviews with energy managers, finance leaders, facilities directors, sustainability officers, and procurement advisors across healthcare, QSR, higher education, real estate, and energy services.',
      'Secondary input: working sessions with the Clear Current team, desk review of competitive tools (EnergyCAP, Peer AI, Energy Print, Arcadia), and analysis of public rate structures and regulatory filings.',
      'Synthesis: findings were triangulated into engagement triggers, seasonal patterns, user journeys, an opportunity heatmap, and product module narratives—all stored as editable JavaScript data files shipped with this portal.',
    ],
    bullets: [
      'No backend database: all numbers and copy live in static JavaScript modules bundled at deploy time.',
      'Charts are scored for discussion based on interview frequency and urgency—not audited financial statements.',
      'Interviewee quotes are lightly edited for clarity and length; full transcripts available on request.',
    ],
  },
  limitations: {
    title: 'Limitations',
    items: [
      'Healthcare represents 5 of 12 organizations; manufacturing, retail, and government are not represented.',
      'Forward-looking statements depend on assumptions about regulation, tariffs, and customer budgets that may shift.',
      'Competitive landscape is based on interviewee mentions and public information as of April 2026.',
      'The portal does not replace legal, compliance, or investment due diligence.',
    ],
  },
  privacy: {
    title: 'Privacy & sharing',
    paragraphs: [
      'This site is a static front end: research text and figures are included in the public JavaScript bundle served to the browser. Anyone with the URL can load the app unless you add access control at the host (or distribute an offline PDF instead).',
      'Interviewees consented to research use; names and titles are included with permission. If any participant requests removal, update the data files and redeploy.',
      'Optional analytics (e.g. Plausible), if enabled on the host, collects only aggregate traffic—not per-reader identity.',
    ],
  },
}

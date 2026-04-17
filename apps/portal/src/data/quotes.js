export const quotes = [
  // ── Overview ──
  {
    id: 'overview-featured',
    text: 'Every organization we spoke with described the same gap: they have data in five systems and no single layer that reconciles metering, billing, and procurement into a decision-ready narrative.',
    source: 'Research synthesis',
    title: 'GTM research — Clear Current',
    tag: 'summary',
    page: 'overview',
    status: 'final',
  },

  // ── Trigger Map ──
  {
    id: 'roger-shutoff',
    text: 'The most common cause of a shut off or a disruption in service is a bill got overlooked and didn\u2019t get paid. It\u2019s always a mistake\u2014somebody just missed it, lost it, bad address keyed in wrong.',
    source: 'Roger Goldstein',
    title: 'Executive Director, Facilities & Energy, Panda Restaurant Group',
    tag: 'bill-errors',
    page: 'trigger-map',
    status: 'final',
  },
  {
    id: 'ann-capacity',
    text: 'Our capacity charges went up tenfold in the last two years. Short answer is data centers. They\u2019re consuming so much of the grid that capacity costs are being pushed onto everyone else.',
    source: 'Ann Walston',
    title: 'VP, Acute Care Facilities Management, Bon Secours Mercy Health',
    tag: 'capacity-charges',
    page: 'trigger-map',
    status: 'final',
  },
  {
    id: 'don-reactive',
    text: 'Most of the customers, believe it or not, are still reactive on the maintenance and billing side\u2014they chase issues after the invoice lands, not before.',
    source: 'Don Johnson',
    title: 'CEM, Sr. Account Manager, Trane Technologies',
    tag: 'reactive-behavior',
    page: 'trigger-map',
    status: 'final',
  },

  // ── Seasonal Calendar ──
  {
    id: 'andi-budget',
    text: 'For me, the finance is really reactive. The one proactive thing we do is hedging our fuel\u2014we buy $20 million in natural gas every year plus or minus.',
    source: 'Andi Ault',
    title: 'Sr. Assoc. Director, Finance & Admin Services, UT Austin',
    tag: 'budget-cycles',
    page: 'seasonal-calendar',
    status: 'final',
  },
  {
    id: 'phil-monetize',
    text: 'Nobody cares until you monetize it. If it could say here\u2019s the statistical anomaly and here\u2019s what it\u2019s costing you\u2014that changes the conversation.',
    source: 'Phil Combs',
    title: 'Sr. Digital Services Engineer (CEM, CMVP), Trane Technologies',
    tag: 'monetization',
    page: 'seasonal-calendar',
    status: 'final',
  },

  // ── Journey Maps ──
  {
    id: 'scott-ghost',
    text: 'We probably pay $1,000,000 a year on buildings that nobody turned a meter off on. Paying for sites that we no longer own\u2014over two years before we caught it.',
    source: 'Scott Czubkowski',
    title: 'National Director, Energy & Facility Performance, Medxcel (Ascension)',
    tag: 'ghost-meters',
    page: 'journey-maps',
    status: 'final',
  },
  {
    id: 'advent-bills',
    text: 'Somewhere between like one and 2,000 bills a day. We didn\u2019t sign on with NG ages ago because of energy management needs\u2014it was bill pay needs.',
    source: 'John Culver',
    title: 'Corporate Sustainability, AdventHealth',
    tag: 'bill-volume',
    page: 'journey-maps',
    status: 'final',
  },
  {
    id: 'roger-drift',
    text: 'We didn\u2019t know there was a single meter covering two outlets on a shared space. For a year, we paid the neighbor\u2019s electricity before anyone caught it.',
    source: 'Roger Goldstein',
    title: 'Executive Director, Facilities & Energy, Panda Restaurant Group',
    tag: 'drift-detection',
    page: 'journey-maps',
    status: 'final',
  },
  {
    id: 'intermountain-rubber',
    text: 'Where the rubber really hits the road is not identifying the problems, it\u2019s fixing them. We have a glutton of AI developers and a vacuum of problem solvers.',
    source: 'Ross Snow',
    title: 'Director of Energy Management, Intermountain Health',
    tag: 'execution-gap',
    page: 'journey-maps',
    status: 'final',
  },
  {
    id: 'advent-interpret',
    text: 'NG just aggregates those and pays the bottom line dollar. What we want is someone to tell us why we should care and what we can do to change it.',
    source: 'John Culver',
    title: 'Corporate Sustainability, AdventHealth',
    tag: 'interpretation',
    page: 'journey-maps',
    status: 'final',
  },

  // ── Heatmap ──
  {
    id: 'heatmap-walston',
    text: 'That was over a year\u2019s worth of work mapping every meter to every wing. We recuperated over $1,000,000\u2014but that kind of recovery is incredibly rare without the data.',
    source: 'Ann Walston',
    title: 'VP, Acute Care Facilities Management, Bon Secours Mercy Health',
    tag: 'meter-mapping',
    page: 'heatmap',
    status: 'final',
  },
  {
    id: 'heatmap-phil-tariff',
    text: 'If it could say they\u2019re putting a price increase before the PUC and here\u2019s how it affects your rate class\u2014that\u2019s regulatory intelligence nobody has today.',
    source: 'Phil Combs',
    title: 'Sr. Digital Services Engineer (CEM, CMVP), Trane Technologies',
    tag: 'tariff-intelligence',
    page: 'heatmap',
    status: 'final',
  },

  // ── Product Modules ──
  {
    id: 'walt-llm',
    text: 'It would be great if Engie would incorporate a large language model because they already have all the data. But they haven\u2019t\u2014that\u2019s the gap.',
    source: 'Walt Taylor',
    title: 'Energy Manager (Contractor), Panda Restaurant Group',
    tag: 'ai-opportunity',
    page: 'modules',
    status: 'final',
  },
  {
    id: 'scott-budget',
    text: 'Why is my utility bill not matching my budget? That\u2019s the number one question from every administrator. They need it in layman\u2019s terms on their phone.',
    source: 'Scott Czubkowski',
    title: 'National Director, Energy & Facility Performance, Medxcel (Ascension)',
    tag: 'exec-access',
    page: 'modules',
    status: 'final',
  },
  {
    id: 'walt-rates',
    text: 'Alabama Power probably has 45 rates. Every utility is different. Whether you have 2,000 locations, to manage all the rate data would be difficult without tools.',
    source: 'Walt Taylor',
    title: 'Energy Manager (Contractor), Panda Restaurant Group',
    tag: 'rate-complexity',
    page: 'modules',
    status: 'final',
  },

  // ── Bonus / GTM ──
  {
    id: 'jamare-energy',
    text: 'Now the number one question is: where is the cheapest energy? The workforce will come to me. That\u2019s a complete reversal from five years ago.',
    source: 'Jamare Bates',
    title: 'VP, Clean Energy & Infrastructure Advisory, JLL',
    tag: 'market-shift',
    page: 'bonus',
    status: 'final',
  },
  {
    id: 'marc-subscription',
    text: 'If the bills are consistently wrong, they\u2019ll want a subscription. But as soon as they see you\u2019re on a trajectory to save them 20 million bucks, they\u2019ll push for fixed fee.',
    source: 'Marc Spieler',
    title: 'Sr. Managing Director, Global Energy Industry, NVIDIA',
    tag: 'pricing-model',
    page: 'bonus',
    status: 'final',
  },
  {
    id: 'engie-measure',
    text: 'You can\u2019t manage what you can\u2019t measure. We can\u2019t help you if we don\u2019t pay your bills because otherwise we\u2019d have no idea what we\u2019re doing.',
    source: 'Adam Zavadsky',
    title: 'Senior Account Manager, ENGIE Impact',
    tag: 'data-moat',
    page: 'bonus',
    status: 'final',
  },
  {
    id: 'intermountain-program',
    text: 'Our program more than pays for itself more than twice every year. Fourteen people, 14 billion data points\u2014the ROI is undeniable.',
    source: 'Ross Snow',
    title: 'Director of Energy Management, Intermountain Health',
    tag: 'program-roi',
    page: 'bonus',
    status: 'final',
  },
  {
    id: 'scott-spend',
    text: 'Our utility bill is like $265 million a year. That one polar vortex event cost us $7.2 million in three days.',
    source: 'Scott Czubkowski',
    title: 'National Director, Energy & Facility Performance, Medxcel (Ascension)',
    tag: 'spend-scale',
    page: 'overview',
    status: 'final',
  },
  {
    id: 'sean-forecast',
    text: 'Their forecasting tool is a little bit weaker. When you\u2019re a growing system adding new campuses, historical trends break\u2014you need growth-aware models.',
    source: 'Sean Sevy',
    title: 'Director of Operations, System Facilities, Houston Methodist',
    tag: 'forecasting',
    page: 'modules',
    status: 'final',
  },
  {
    id: 'intermountain-spike',
    text: 'The third party completely missed it. A bill went from $40,000 to $140,000 in one month and nobody flagged it.',
    source: 'Intermountain Health Team',
    title: 'Energy Management, Intermountain Health',
    tag: 'missed-anomaly',
    page: 'trigger-map',
    status: 'final',
  },
  {
    id: 'advent-cyber',
    text: 'Everything changed overnight after the J&J hack. I\u2019ve been trying to implement BrainBox for two and a half years\u2014pushing a rope through IT security.',
    source: 'Scott Sukits',
    title: 'Director, Control Systems & Energy Management, AdventHealth',
    tag: 'cybersecurity',
    page: 'bonus',
    status: 'final',
  },
]

export function quoteById(id) {
  return quotes.find((q) => q.id === id) ?? null
}

export function quotesByIds(ids) {
  if (!ids?.length) return []
  return ids.map((id) => quoteById(id)).filter(Boolean)
}

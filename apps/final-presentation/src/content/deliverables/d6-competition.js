export const D6 = {
  title: 'Competitive Intelligence Brief',
  tagline:
    'Three poles of competitors — enterprise ESMP, AI-native data infra, and services outsourcers — each buying distribution, not intelligence. Clear Current owns the gap.',
  leadershipFraming: {
    productScope:
      'Clear Current is utility billing, tariff, and procurement intelligence — not HVAC optimization or building-automation analytics. For sophisticated healthcare and campus buyers, pitch as complementary to ROC / SkySpark / BrainBox-class stacks: outside-the-meter truth for finance and procurement; those systems stay the demand-side toolkit.',
    silentIncumbent:
      'Before SaaS displaces anything, large portfolios often rely on outsourced energy-management firms plus spreadsheets — bill processors custodied the data before you arrived. Competitive reality is consultants + OEM reps + incumbent bill pay, not three logos alone.',
    partnershipNote:
      'ENGIE-class operators: lead with bolt-on analytics and partnership where bill custody is locked—then expand scope at renewal, RFP, or when pilot-stage “AI” fails against drift and interpretation demand. Their moat is historical custody; yours is reliable NL intelligence on top.',
  },
  marketStructure:
    'The market is consolidating around three poles. None has built the conversational, AI-native intelligence layer Clear Current is building. Incumbents are buying distribution (Tango + WatchWire, Arcadia + RPD/Urjanet), not deepening intelligence — which is the window.',
  tldrBullets: [
    'Three poles: enterprise ESMP, AI-native data infra, services outsourcers — each optimizing distribution, not invoice intelligence depth.',
    'M&A stacks custody and routes; it does not close the NL “what does this bill mean in dollars?” gap.',
    'Position CC as outside-the-meter truth for finance and procurement — complementary to BAS / analytics stacks.',
    'Silent incumbent is often consultants + spreadsheets + bill processors before any SaaS logo “wins.”',
  ],
  poles: [
    {
      id: 'esmp',
      name: 'Enterprise ESMP platforms',
      examples: 'EnergyCAP, WatchWire',
      thesis:
        'Built for large portfolios. Sticky due to chargebacks and contracts. Users describe them as “glorified spreadsheets.”',
    },
    {
      id: 'ai-native',
      name: 'AI-native data infrastructure',
      examples: 'Arcadia',
      thesis:
        'Fortune 500 procurement and reporting. Data API, not intelligence layer. Cox Enterprises built their own dashboard on top.',
    },
    {
      id: 'services',
      name: 'Energy services outsourcers',
      examples: 'ENGIE Impact',
      thesis:
        'Software as retention wrapper around human consulting. Client-facing AI doesn’t exist by design — it would cannibalize consulting revenue.',
    },
  ],
  competitors: [
    {
      name: 'EnergyCAP',
      primaryMarket: 'Higher ed, government, healthcare — large portfolios',
      pricing: '≈$50–75K/year for 1,500 meters via reseller',
      strengths: [
        '20+ years of Higher Ed relationships',
        'Reseller channels',
        'Institutional familiarity',
      ],
      weaknesses: [
        '“Outdated,” “glorified spreadsheet” (132 G2/Capterra reviews)',
        'Chargebacks and splits “hard to understand” — stickiest and most complained-about feature',
        'No NL interface; no LLM layer',
        'Own 2026 survey: 76% of customers reactive — indicts platform proactivity',
      ],
      winCondition:
        'Better chargeback experience + NL interface + one documented university recovery case. Not lost to attrition — lost to frustration + compelling alternative.',
      quote:
        '“Chargebacks and splits are hard to understand. I tried to use the help, but it is lacking details.” — EnergyCAP G2 review',
    },
    {
      name: 'Arcadia',
      primaryMarket: 'Fortune 500 corporate, hyperscalers (enterprise pivot Jan 2025)',
      pricing: 'No public pricing. Enterprise contract + API usage (LOW confidence)',
      strengths: [
        '$649M raised, last $1.5B valuation',
        '9,500+ utilities via Arc Plug API',
        'Urjanet + RPD acquisitions',
      ],
      weaknesses: [
        'No NL interface — dashboard + API only',
        'Zero documented Higher Ed customers after 14 months',
        'Senior PM role primarily migrating legacy Urjanet — not new features',
        'No campus chargeback; no PUC monitoring',
        'Trustpilot 2.6/5 (1,159 reviews) — Perch spinout pending',
        'Practitioner quote (Walt Taylor · Panda): variance work is still download-the-bills, not conversational intelligence.',
      ],
      winCondition:
        'Three conditions together: Higher Ed / district-energy customer; buyer wants conversational AI; decision happens before Arcadia finishes migration. 12–24 month window.',
      quote:
        'I think if you could ask that question. I can help answer this question instead of going, downloading the bills, reviewing the bills',
    },
    {
      name: 'WatchWire (Tango)',
      primaryMarket:
        'Institutional CRE, 500+ customers, 140+ countries; Brookfield named',
      pricing: 'Not disclosed in available sources',
      strengths: [
        'Berkshire-backed via Tango (2023 acquisition)',
        'GRESB, CDP, GRI reporting',
      ],
      weaknesses: [
        'Data infrastructure dependent on Arcadia’s Arc Plug API — not proprietary',
        'No campus chargeback; no NL interface',
        'No documented Higher Ed vertical',
      ],
      winCondition:
        'Not a direct Higher Ed competitor. CRE is a future expansion. A WatchWire dissatisfied buyer cannot solve it by moving to Arcadia — same pipeline.',
      quote: 'Gap flag: no primary interviewee mentioned WatchWire by name.',
    },
    {
      name: 'ENGIE Impact',
      primaryMarket:
        'Large enterprise / multi-site — restaurants, retailers, manufacturers',
      pricing:
        'Calibrated to labor avoidance — 4–6 accounting headcount replaced (Goldstein / Panda)',
      strengths: [
        '20-year data moat at accounts like Panda',
        'Outsourced bill payment creates dependency',
      ],
      weaknesses: [
        'Client-facing AI nonexistent by design',
        'Threshold-based anomaly detection misses baseline drift',
        'Uses Arcadia Arc API for electronic bills — not proprietary',
        'OCR coverage ≈90% — 10% gap structural',
      ],
      winCondition:
        'Land as the analytics layer on ENGIE-custodied data (Walt Taylor bolt-on frame). Displace or rebid at contract renewal, pilot fatigue, or when threshold-only workflows miss material drift—especially as higher ed and parallel retail proof widen the gap.',
      quote:
        '“It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on.” — Walt Taylor, Panda',
    },
    {
      name: 'Energy Toolbase',
      primaryMarket: 'Commercial/industrial engineers and consultants',
      pricing: 'Not documented',
      strengths: ['Named by Phil Combs for rate/tariff analysis'],
      weaknesses: [
        'No NL interface',
        'No billing anomaly detection',
        'No PUC monitoring',
        'No portfolio management',
      ],
      winCondition:
        'On Rate Analyst head-to-head: lead with regulatory intelligence differentiator. Combs: “super powerful… saves somebody like me so much time.”',
      quote:
        '“I can tell you six months from now this utility is actively talking to the Public Utility Commission…” — Phil Combs, Trane',
    },
    {
      name: 'BrainBox AI (Trane)',
      primaryMarket: 'Building operations — HVAC optimization',
      pricing: 'Not documented',
      strengths: ['AI-based HVAC scheduling using real-time sensors'],
      weaknesses: [
        'Does not analyze utility bills, tariffs, or portfolio billing anomalies',
      ],
      winCondition:
        'Not a competitor — a referral endpoint. When Clear Current finds HVAC-driven drift, Trane/BrainBox is the resolution pathway.',
      quote:
        '“Trane purchased BrainBox AI… we can offer AI building optimization even to customers who don’t have our BAS.” — Don Johnson, Trane',
    },
  ],
  whiteSpace: [
    {
      n: 1,
      name: 'AI-native NL interface for energy analysis',
      confidence: 'STRONG (primary + secondary)',
      status: 'FITS CURRENT PRODUCT',
      why: 'Every primary interviewee requested or described an NL interface. Cox built their own rather than use Arcadia’s dashboard. No competitor has a documented equivalent.',
    },
    {
      n: 2,
      name: 'Forward-looking regulatory intelligence (PUC monitoring)',
      confidence: 'STRONG (primary + secondary)',
      status: 'EXTENDS ROADMAP',
      why: 'Zero competitors. Combs calls it “super powerful.” Ohio PUC 275-day timelines; PPL Pennsylvania decision date 7/1/2026 hits universities on day one of new fiscal year.',
    },
    {
      n: 3,
      name: 'Campus chargeback for district energy',
      confidence: 'STRONG (primary + secondary)',
      status: 'EXTENDS ROADMAP',
      why: '660+ district energy systems, concentrated in Higher Ed and hospitals. Only EnergyCAP has it — and users say it’s the worst feature. Arcadia can’t build it without a rebuild.',
    },
    {
      n: 4,
      name: 'Dual-audience platform (ops + finance from one system)',
      confidence: 'STRONG (two independent primary sources)',
      status: 'FITS CURRENT PRODUCT',
      why: 'Chamberlain (ops) + Ault (finance) confirm the same structural split. Three-tier delivery model answers it: chat for experts, dashboard for finance.',
    },
    {
      n: 5,
      name: 'Proactive insight delivery (vs reactive query)',
      confidence: 'STRONG (primary + secondary)',
      status: 'FITS CURRENT PRODUCT',
      why: 'EnergyCAP 2026 survey: 76% reactive despite rising costs. Threshold alerts miss drift. Push layer is the product requirement, not a nice-to-have.',
    },
    {
      n: 6,
      name: 'Sewer/water overbilling detection',
      confidence: 'EMERGING (one primary, no secondary)',
      status: 'NET NEW / RESEARCH-ONLY',
      why: 'Walt Taylor (Panda): “no meter about how much water is actually leaving the restaurant.” Investigate before building.',
    },
  ],
  positioning: {
    recommended: 'B',
    options: [
      {
        id: 'A',
        label: 'Most aggressive',
        headline: '“The only platform that finds your money and gets it back.”',
        useWhen: 'Reserve until one documented named recovery case study exists.',
        risk: 'The word “recovers” — Spieler’s question. Overstates current shipped capability (“assists manual completion”).',
      },
      {
        id: 'B',
        label: 'Recommended',
        headline:
          '“The energy intelligence platform your finance and operations teams will actually use.”',
        useWhen: 'Primary positioning through May fundraise.',
        risk: '“Will actually use” needs adoption evidence. Show the personas — chat for engineer, dashboard for finance.',
      },
      {
        id: 'C',
        label: 'Most conservative',
        headline: '“The AI energy manager for multi-site commercial portfolios.”',
        useWhen: 'Website copy; context-setting. Not the lead in investor rooms.',
        risk: 'Already the public positioning — does not differentiate.',
      },
    ],
  },
  objections: [
    {
      n: 1,
      claim: 'Arcadia already does this, and they have $649M and 9,500 utilities.',
      response:
        'Cox Enterprises chose Arcadia as a data feed, not a platform. Cox built their own dashboard. 14 months into enterprise, zero documented Higher Ed customers. No NL, no PUC, no chargeback. We compete on intelligence, not data breadth.',
    },
    {
      n: 2,
      claim: 'You find billing errors in pilots — how much has actually been recovered?',
      response:
        'The honest two-part answer: government record establishes the errors are structural (FERC $108M, RI PUC 83%). Recovery is a documented, named case study we are generating now. If one pilot credit exists — name it. If not — state the timeline.',
    },
    {
      n: 3,
      claim: 'EnergyCAP has deep relationships in Higher Ed. Universities won’t switch.',
      response:
        'We don’t ask them to rip it out year one. We start with what EnergyCAP cannot do — proactive anomaly surfacing, NL Q&A, PUC monitoring — and prove value in 90 days before the replacement conversation.',
    },
    {
      n: 4,
      claim: 'Our IT department will never approve this. Too much security risk.',
      response:
        'Valid concern, not an objection to overcome with rhetoric. Procedural response: SOC 2 Type II [status], documented data handling policies, IT involved early. Trane’s internal restriction shows the salesperson must educate IT, not work around them.',
    },
    {
      n: 5,
      claim:
        'The energy management market is fragmented. What makes you a platform, not a point solution?',
      response:
        'Point solutions serve one persona. Combs (ops) asks tariff questions, Ault (finance) needs budget exposure, Chamberlain (ops) traces anomalies — same data, same engine, three tiers. Cox and Taylor both demonstrated platform demand by building their own.',
    },
  ],
}

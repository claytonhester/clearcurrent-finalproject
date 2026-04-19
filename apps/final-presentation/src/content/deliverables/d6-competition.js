export const D6 = {
  title: 'Competitive Intelligence Brief',
  tagline:
    'Three poles of competitors — enterprise ESMP, AI-native data infra, and services outsourcers — each buying distribution, not intelligence. Clear Current owns the gap.',
  leadershipFraming: {
    productScope:
      'Clear Current is utility billing, tariff, and procurement intelligence — not HVAC optimization or building-automation analytics. For sophisticated healthcare and campus buyers, pitch as complementary to ROC / SkySpark / BrainBox-class stacks: outside-the-meter truth for finance and procurement; those systems stay the demand-side toolkit.',
    silentIncumbent:
      'Before SaaS displaces anything, large portfolios often rely on outsourced energy-management firms plus spreadsheets — bill processors custodied the data before you arrived. Competitive reality is consultants + OEM reps + incumbent bill pay, not three logos alone. JLL (Jamare Bates) described JLL Technologies actively building internal AI energy-management and utility-bill tooling on custodied client data—another enterprise “build first” pattern, not an automatic SaaS buyer.',
    partnershipNote:
      'ENGIE-class operators: lead with bolt-on analytics and partnership where bill custody is locked—then expand scope at renewal, RFP, or when pilot-stage “AI” fails against drift and interpretation demand. Their moat is historical custody; yours is reliable natural-language intelligence on top.',
  },
  marketStructure:
    'The market is consolidating around three poles. None has built the conversational, AI-native intelligence layer Clear Current is building. Incumbents are buying distribution (Tango + WatchWire, Arcadia + Urjanet), not deepening intelligence — which is the window. Enterprise ESG stacks are also adding agentic AI (e.g. Schneider Resource Advisor+ / Sera, early 2026) — that raises the bar for “AI” language without closing bill-level tariff truth + PUC monitoring in one product.',
  tldrBullets: [
    'Three poles: enterprise ESMP, AI-native data infra, services outsourcers — each optimizing distribution, not invoice intelligence depth.',
    'M&A stacks custody and routes; it does not close the natural-language “what does this bill mean in dollars?” gap.',
    'Position CC as outside-the-meter truth for finance and procurement — complementary to BAS / analytics stacks (BrainBox/Trane = HVAC ops AI, not bill intelligence).',
    'Deck hygiene: Arcadia means arcadia.com (utility data), not arcadia.io (healthcare). Urjanet is inside Arcadia — not a separate current peer.',
    'Silent incumbent is often consultants + spreadsheets + bill processors before any SaaS logo “wins.”',
  ],
  poles: [
    {
      id: 'esmp',
      name: 'Enterprise ESMP platforms',
      examples: 'EnergyCAP, WatchWire (Tango), Schneider Resource Advisor+',
      thesis:
        'Built for large portfolios. Sticky due to chargebacks and contracts. EnergyCAP remains the documented higher-ed bill-accounting incumbent; others skew CRE/ESG or global F500. Users still describe legacy UX as spreadsheet-era — even as vendors add AI marketing.',
    },
    {
      id: 'ai-native',
      name: 'AI-native data infrastructure',
      examples: 'Arcadia (Arc / Urjanet)',
      thesis:
        'Fortune 500 procurement and reporting. Normalized bill + interval data and APIs — not a full conversational bill-intelligence or chargeback layer. Cox Enterprises built their own dashboard on top.',
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
      primaryMarket:
        'Higher ed, K-12, government — strongest documented campus bill-accounting fit; healthcare secondary',
      pricing:
        'Meter-based enterprise SaaS + options (e.g. OCR, services); ≈$50–75K/yr for ~1,500 meters cited via Texas State / reseller context',
      strengths: [
        'System-of-record positioning: bill capture, accrual, chargeback/GHG, ENERGY STAR — named campuses (e.g. KU, UCSD, CMU scale in public stories)',
        'SOC 2 Type II + FedRAMP Low — procurement-grade vs most challengers',
        'Wattics → SmartAnalytics (2022): interval/M&V bolt-on; deep campus chargeback workflows where submeters exist',
      ],
      weaknesses: [
        '“Outdated,” “glorified spreadsheet” (132 G2/Capterra reviews)',
        'Chargebacks and splits “hard to understand” — stickiest and most complained-about feature',
        'Watts AI (2025+) is public, but materials read as reporting/Q&A assist on a bills-first tree UX — not documented: PUC docket monitoring, dollar-ranked proactive alerts, or mature NL bill copilot',
        'Own 2026 survey: 76% of customers reactive — indicts platform proactivity',
      ],
      winCondition:
        'Avoid head-on chargeback replacement in year one where EnergyCAP owns district-energy math. Lead NL Q&A, proactive dollar-ranked alerts, and PUC/tariff truth — prove value in 90 days; pair with one documented recovery. Win frustration + capability gap, not logo swap by default.',
      quote:
        '“Chargebacks and splits are hard to understand. I tried to use the help, but it is lacking details.” — EnergyCAP G2 review',
    },
    {
      name: 'Arcadia',
      primaryMarket:
        'Fortune 500 / enterprise data layer — arcadia.com utility-data company (not arcadia.io healthcare analytics)',
      pricing: 'No public pricing. Enterprise contract + API usage (LOW confidence)',
      strengths: [
        '$649M raised, last $1.5B valuation',
        'Urjanet (2022) inside Arc — normalized bill + interval data at scale; Arc APIs',
        '9,500+ utilities via data network (Arc Plug / platform narrative)',
      ],
      weaknesses: [
        'AI enterprise messaging real; public record still thin for mature conversational bill Q&A vs data/platform story',
        'Weak documented higher-ed facilities traction in utility-bill context vs EnergyCAP',
        'Migration/integration load post-Urjanet — decks that treat Urjanet as standalone are stale',
        'No campus chargeback workflow; no PUC docket monitoring in public product record reviewed',
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
        'CRE / portfolio sustainability — Tango-owned (2023); reporting and compliance-led',
      pricing: 'Not disclosed in available sources',
      strengths: [
        'Berkshire-backed via Tango (2023 acquisition)',
        'GRESB, CDP, GRI reporting; building performance standards workflows',
      ],
      weaknesses: [
        'Public differentiation is sustainability/reporting — easy to over-read as deep bill-intelligence',
        'Integration-led data; not a documented tariff-truth or NL bill-Q&A leader',
        'No campus chargeback; limited higher-ed proof vs EnergyCAP',
      ],
      winCondition:
        'Parallel CRE track — not the primary higher-ed swap. Win where buyer needs dollar-level bill truth and regulatory foresight, not ESG dashboard parity alone.',
      quote: 'Gap flag: no primary interviewee mentioned WatchWire by name.',
    },
    {
      name: 'ENGIE Impact',
      primaryMarket:
        'Large enterprise / multi-site — restaurants, retailers, manufacturers; services-led',
      pricing:
        'Calibrated to labor avoidance — 4–6 accounting headcount replaced (Goldstein / Panda)',
      strengths: [
        '20-year data moat at accounts like Panda',
        'Outsourced bill payment + managed workflows create dependency',
      ],
      weaknesses: [
        'Value prop is often services + process — not a transparent product-led AI bill stack for evaluators',
        'Client-facing AI nonexistent by design',
        'Threshold-based anomaly detection misses baseline drift',
        'Uses Arcadia-class feeds for electronic bills — not proprietary bill intelligence',
        'OCR coverage ≈90% — 10% gap structural',
      ],
      winCondition:
        'Land as the analytics layer on ENGIE-custodied data (Walt Taylor bolt-on frame). Displace or rebid at contract renewal, pilot fatigue, or when threshold-only workflows miss material drift—especially as higher ed and parallel retail proof widen the gap.',
      quote:
        '“It would be much better if, since NG already houses all that data, they would just work with Anthropic or whoever and bolt you on.” — Walt Taylor, Panda',
    },
    {
      name: 'Energy Toolbase',
      primaryMarket:
        'C&I solar/storage developers — tariff modeling, ETB Developer/Monitor/Controller; not enterprise bill system-of-record',
      pricing: 'Public pricing signals on parts of stack; enterprise nuance limited',
      strengths: [
        'Strongest public tariff/rate engine in the DER project stack — named by Phil Combs for rate work',
      ],
      weaknesses: [
        'Category mismatch if placed beside campus finance bill intelligence — built for project economics, not portfolio utility accounting',
        'No enterprise bill Q&A, chargeback, or PUC monitoring narrative',
      ],
      winCondition:
        'On Rate Analyst head-to-head: lead with regulatory intelligence differentiator. Combs: “super powerful… saves somebody like me so much time.”',
      quote:
        '“I can tell you six months from now this utility is actively talking to the Public Utility Commission…” — Phil Combs, Trane',
    },
    {
      name: 'BrainBox AI (Trane)',
      primaryMarket:
        'Building operations — HVAC/BMS optimization (Trane acquisition closed Jan 2025)',
      pricing: 'Not documented',
      strengths: [
        'Documented generative assistant (ARIA) for building ops — not bill chat',
        'AI-based HVAC scheduling using real-time sensors',
      ],
      weaknesses: [
        'Does not analyze utility bills, tariffs, or portfolio billing anomalies — do not conflate “building AI” with bill intelligence',
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
      name: 'AI-native natural language interface for energy analysis',
      confidence: 'STRONG (primary + secondary)',
      status: 'FITS CURRENT PRODUCT',
      why: 'Every primary interviewee requested or described a natural language interface. Cox built their own rather than use Arcadia’s dashboard. No competitor has a documented equivalent.',
    },
    {
      n: 2,
      name: 'Forward-looking regulatory intelligence (PUC monitoring)',
      confidence: 'STRONG (primary + secondary)',
      status: 'EXTENDS ROADMAP',
      why: 'No profiled bill platform documents native PUC docket → dollar impact in public materials; adjacent tools (e.g. Halcyon, Stateside-class monitoring) sell regulation separately. Combs calls it “super powerful.” Ohio PUC 275-day timelines; PPL Pennsylvania decision date 7/1/2026 hits universities on day one of new fiscal year.',
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
        'Mean arcadia.com (utility data), not arcadia.io. Urjanet is inside Arcadia — a data-normalization layer, not a campus chargeback or PUC copilot. Cox Enterprises chose Arcadia as a feed and built their own UI. Weak documented higher-ed bill traction vs EnergyCAP. We compete on conversational intelligence + regulatory foresight, not API breadth alone.',
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
        'We don’t ask them to rip it out year one. We start with what EnergyCAP cannot do — proactive anomaly surfacing, natural language Q&A, PUC monitoring — and prove value in 90 days before the replacement conversation.',
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

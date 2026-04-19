export const BRIEF = {
  title: 'Decision Brief',
  tagline:
    'Higher ed leads; multi-site retail and QSR run in parallel; healthcare is the long win—same reactive-buyer reality, with recovery proof and IT gates to close before May.',
  leadStatement:
    'Primary and secondary research align: commercial energy buyers are reactive, billing errors are structurally real, finance and ops need different surfaces, regulatory intelligence is white space, and Arcadia’s window is real but finite. John and Dan should walk out knowing higher education is the first beachhead—with Rate Analyst’s regulatory layer as first engineering priority—while multi-site retail and restaurant chains (Panda-class today; large chains as expansion) stay an active parallel pipeline, and health systems remain the long-term enterprise prize behind SOC 2, HIPAA posture, and proof-of-recovery. One documented dollar recovered matters more than aggregate identified-error dollars for fundraise and enterprise credibility.',
  tldrBullets: [
    'Research aligns: reactive buyers, real billing pain, a structural finance ↔ ops split, and regulatory intel as white space.',
    'First beachhead is higher education (regulatory layer in Rate Analyst first). Multi-site retail and QSR run in parallel—not deferred. Healthcare systems are the long-term enterprise win once security and recovery proof match the deal size.',
    'One documented dollar recovered beats aggregate “identified error” totals for fundraise and enterprise credibility.',
    'Arcadia’s distraction window is real but finite — don’t confuse migration lag with a permanent moat.',
  ],
  proofs: [
    {
      n: 1,
      headline: 'Buyers are reactive by design',
      oneLiner:
        'Reactive operations are the norm across verticals; the product must proactively find users with prioritized signals.',
      evidence:
        'Primary: Trane (Johnson, Combs), Texas State, Panda, Medxcel. Secondary: EnergyCAP 2026 survey (76% expect rising costs yet reactive); McMorrow deferred maintenance.',
      quote: 'Most customers are still reactive… even hospitals.',
      speaker: 'Don Johnson · Trane Technologies',
    },
    {
      n: 2,
      headline: 'Billing errors are documented, persistent, and material',
      oneLiner:
        'Enforcement and case law show misbilling at scale; interviews show 10× multipliers, vacated-site pay, baseline drift.',
      evidence:
        'Secondary: FERC ($108M FirstEnergy), RI PUC (83% exceptions still billed), Harvard Law asymmetry. Primary: Chamberlain, Czubkowski, Goldstein.',
      quote:
        'Have utilities actually issued refunds based on errors Clear Current found, or is the savings still theoretical on paper?',
      speaker: 'Marc Spieler · NVIDIA',
    },
    {
      n: 3,
      headline: 'The finance ↔ ops split is structural',
      oneLiner:
        'Two independent institutions name the same divide: ops cares usage, finance cares bottom line.',
      evidence:
        'Primary: Andee Chamberlain (Texas State), Andi Ault (UT Austin). Secondary: 132 G2/Capterra EnergyCAP reviews flag chargeback weakness.',
      quote:
        'I care more about demand and usage... the bill processing folks care more about the bottom line.',
      speaker: 'Andee Chamberlain · Texas State University',
    },
    {
      n: 4,
      headline: 'Regulatory intelligence is confirmed white space',
      oneLiner:
        'PUC docket monitoring with dollarized impact has enthusiastic practitioner demand and zero documented competitors.',
      evidence:
        'Primary: Phil Combs (Trane), Andi Ault (budget before rates final). Secondary: Ohio PUC timelines, AES Ohio ~9%, PPL Pennsylvania case, BU budget-timing study.',
      quote:
        'The regulatory intelligence piece is super powerful. I don’t know anything else that does that.',
      speaker: 'Phil Combs · Trane Technologies',
    },
    {
      n: 5,
      headline: 'Arcadia’s gap is structural and time-bounded',
      oneLiner:
        'A well-funded AI rival is corporate/API-first, with no higher-ed footprint and a migration-heavy 12–24 months — the window to build a Higher Ed moat.',
      evidence:
        'New intelligence confirms Arcadia has zero documented higher education customers after 14 months of enterprise sales. Their UX is a dashboard and data API — not a natural language interface for energy managers. Arcadia is simultaneously selling new enterprise accounts while migrating existing customers off a legacy Urjanet/Arc platform — job postings confirm this is the Senior PM\'s primary responsibility. Their attention is divided for 12–24 months.',
      quote:
        'I think if you could ask that question. I can help answer this question instead of going, downloading the bills, reviewing the bills',
      speaker: 'Walt Taylor · Panda Restaurant Group',
    },
  ],
  openQuestions: [
    {
      n: 1,
      headline: 'Has a single dollar actually been recovered?',
      why: 'Research cannot verify whether pilot-stage findings have become documented utility credits or refunds. Investors and procurement will ask.',
      howToClose:
        'Audit pilots for one dispute supported by Clear Current output with documented recovery and permission to cite.',
    },
    {
      n: 2,
      headline: 'Will IT security gate adoption, and when?',
      why: 'Trane internally blocks AI tools despite advocate demand. SOC 2 is the cited enterprise threshold, but no Clear Current–specific security review appears in available research yet.',
      howToClose:
        'Confirm SOC 2 status, start Type II (or Type I bridge), and ask pilots early whether IT must approve before data share.',
    },
    {
      n: 3,
      headline: 'What is the corporate multi-site buyer voice?',
      why: 'Strong higher-ed and channel evidence — but no completed interview with a corporate multi-site energy buyer on paying standalone vs. processor-channel.',
      howToClose:
        'Two interviews minimum (one processor-dependent, one not) on willingness to pay for an analytical layer vs. embedding.',
    },
  ],
  strategicDecisions: {
    beachhead: [
      'Higher education first: research universities with district energy, large meter count, EnergyCAP in place, and a real split between finance and ops. Primary interviews surface meaningful on-site or district generation—invoice mix can look different from a pure “retail load” portfolio, but buyers still need tariff and purchased-power truth, peak/demand discipline, and internal allocation; sell the modules that match the pain, not a hypothetical all-features purchase.',
      'In parallel, pursue multi-site retail and QSR—ESCO-dependent or franchise-heavy footprints and deregulated markets where it fits. Panda anchors the thesis; national chains are expansion targets as proof compounds, not implied logos.',
      'Healthcare systems are the long-term win: huge spend and the same billing pain, but IT security and recovery documentation are gates. Build credibility in higher ed and parallel retail first—then compound into health systems.',
    ],
    firstModule: [
      'Regulatory intelligence in Rate Analyst means watching what utilities and regulators are doing—state PUC dockets, rate cases, pending increases.',
      'Turn that into concrete dollar impact (“if this rate change goes through, you’re exposed to about $X”) plus proactive alerts so finance and ops see it before the bill lands or the budget locks.',
      'Lead engineering here first: research shows strong buyer pull and a thin competitive field for this layer.',
      'Use billing error detection to open the door; campus chargeback is the long-term stickiness play, not the first wedge.',
    ],
    marketingHeadline: 'Marketing & online presence',
    marketing: [
      'Compared to competitors, Clear Current’s public footprint—site, story, and socials—doesn’t yet reflect how strong the product is. Buyers form an impression before they ever book a demo.',
      'Prioritize a modern web and visual system: clearer offer, credible enterprise polish, and layouts that feel current next to how prospects shop the category.',
      'Systematically collect permissioned wins and named references (big-label logos where contracts allow), then market them—homepage, case studies, sales decks, and social—not just internal slide fodder.',
    ],
  },
  whatChangesIfWrong: [
    'If universities won’t pay alongside EnergyCAP: drop replacement framing, sell an intelligence layer on top, and clarify RFP/discretionary-buy path or face 6–12-month procurement drag.',
    'If regulatory intelligence is a delighter, not a trigger: lead with billing errors (with recovery proof) and demote the rate-case story to expansion.',
    'If Arcadia exits migration faster: compress the timeline — start chargeback roadmap by month four, not after pilots.',
    'If Arcadia permanently skips higher ed: pressure on Higher Ed may ease, but monitor hires and announcements quarterly — don’t assume.',
  ],
  calloutCaveats: [
    'Do not circulate unaudited aggregate “identified savings” figures externally. Frame detection vs. customer-owned dispute/recovery honestly.',
    'The “80% overpaying” statistic is flagged unverifiable in the claim audit and tied to a vendor with financial interest. Prefer FERC / RI PUC / Harvard enforcement framing.',
    'Do not imply unattended auto-recovery. CC Engine maturity is assists manual completion; claiming otherwise is diligence and misrepresentation risk.',
  ],
}

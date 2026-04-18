export const BRIEF = {
  title: 'Decision Brief',
  tagline:
    'Reactive buyers and documented billing pain point to higher ed and proactive push intelligence—but recovery proof and IT gates must be closed before May.',
  leadStatement:
    'Primary and secondary research align: commercial energy buyers are reactive, billing errors are structurally real, finance and ops need different surfaces, regulatory intelligence is white space, and Arcadia’s window is real but finite. John and Dan should walk out knowing the beachhead is higher education with Rate Analyst’s regulatory layer as first engineering priority — and that one documented dollar recovered matters more than aggregate identified-error dollars for fundraise and enterprise credibility.',
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
        'A well-funded AI rival is corporate/API-first, with no higher-ed footprint and a migration-heavy 12–24 months — the window to build an HE moat.',
      evidence:
        'Competitor intel: $649M raised, zero documented HE customers 14 months post-pivot, Urjanet migration drag. Primary: Panda — answering cross-site variance today means downloading and reconciling bills utility-by-utility. Combs names Energy Toolbase for tariffs, not Arcadia.',
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
      why: 'Trane internally blocks AI tools despite advocate demand. SOC 2 is the cited enterprise threshold, but no CC-specific review is in the corpus.',
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
    beachhead:
      'Higher education — research universities with district energy, large meter count, EnergyCAP in place, separate finance and ops. Pain, incumbent weakness, calendar, and chargeback moat all align; healthcare / CRE / corporate lack the same combined proof or speed.',
    firstModule:
      'Regulatory intelligence inside Rate Analyst (PUC monitoring, dollarized impact, push alerts). Only uncrowded feature with named buyer timing (March budget lock) and no named competitor. Billing detection is the hook but not unique; chargeback is moat, not entry.',
    window:
      '12–24 months while Arcadia focuses on Urjanet/Arc migration and corporate dashboard/API posture. Ship HE-specific chargeback and district allocation before that advantage narrows.',
  },
  whatChangesIfWrong: [
    'If universities won’t pay alongside EnergyCAP: drop replacement framing, sell an intelligence layer on top, and clarify RFP/discretionary-buy path or face 6–12-month procurement drag.',
    'If regulatory intelligence is a delighter, not a trigger: lead with billing errors (with recovery proof) and demote the rate-case story to expansion.',
    'If Arcadia exits migration faster: compress the timeline — start chargeback roadmap by month four, not after pilots.',
    'If Arcadia permanently skips higher ed: pressure on HE may ease, but monitor hires and announcements quarterly — don’t assume.',
  ],
  calloutCaveats: [
    'Do not circulate unaudited aggregate “identified savings” figures externally. Frame detection vs. customer-owned dispute/recovery honestly.',
    'The “80% overpaying” statistic is flagged unverifiable in the claim audit and tied to a vendor with financial interest. Prefer FERC / RI PUC / Harvard enforcement framing.',
    'Do not imply unattended auto-recovery. CC Engine maturity is assists manual completion; claiming otherwise is diligence and misrepresentation risk.',
  ],
}

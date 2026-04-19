export const D2 = {
  title: 'Seasonal Energy Management Calendar',
  tagline:
    'Commercial energy work clusters into predictable seasonal beats — budget, procurement, summer demand, compliance — so GTM should ride that rhythm, not run flat outreach.',
  openingProblem:
    'Energy managers face recurring fiscal cliffs: budgets and forecasts lock while utility rates, capacity charges, and contract terms are still moving. That timing gap — especially before March budget submission for many schools and before October healthcare fiscal years — creates recurring moments when invoice-level intelligence and regulatory foresight are most valuable. Multi-site retail and QSR add parallel beats—supplier renewals, franchise reporting, and deregulated-market volatility—while health systems remain the longest-cycle enterprise prize.',
  tldrBullets: [
    'Work clusters into predictable seasonal beats — budget, procurement, summer demand, compliance — not flat year-round urgency.',
    'Forecasts often freeze before rates, capacity charges, and contract terms finish moving — that gap is the leverage point.',
    'March (many schools) and October (healthcare FY) are recurring cliffs for invoice intelligence and regulatory foresight.',
    'Retail / QSR: run overlapping calendar plays (contracts, franchise cycles, ERCOT-style complexity) in parallel with higher ed—not parked for a vague later phase.',
    'GTM should ride the calendar rhythm instead of steady generic outreach.',
  ],
  months: [
    {
      month: 'Jan',
      headline: 'Year-end hangover · heating peaks · Q1 carbon reporting kickoff',
      activities: [
        'Close prior year; reconcile Dec/Jan bills under peak heating loads',
        'Start or deepen budget baselines (higher ed on Sept 1 FY)',
        'CRE begins CDP-style data pulls; healthcare sees full PJM capacity charges',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Rate Analyst',
      salesPlay:
        'Lead with Dec/Jan bill anomaly review and portfolio YoY variance — “close the year right.”',
      intensity: 'high',
    },
    {
      month: 'Feb',
      headline:
        'Higher-ed budget narratives peak · finance–ops “rate vs budget” gap widest',
      activities: [
        'Sept 1 FY schools assemble budget narratives from usage, demand, cost',
        'Jul 1 FY schools face pending rate cases while assumptions must harden',
        'Healthcare winter peak risk; CRE deep in CDP audit paths',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Regulatory Intelligence',
      salesPlay:
        'Quantify pending rate-case exposure before assumptions freeze — “know the rate you’re budgeting against.”',
      intensity: 'peak',
    },
    {
      month: 'Mar',
      headline: 'Budget lock (Jul 1 FY schools) · gas execution · compliance sprint',
      activities: [
        'Jul 1 FY higher ed: budget submission month with uncertain rate assumptions',
        'Healthcare and higher ed execute / lock natural-gas positions',
        'CRE races to April CDP deadlines; spring PUC / rate activity intensifies',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Regulatory Intelligence',
      salesPlay:
        'Last-call regulatory briefing tied to imminent budget lock; pair with procurement scenario support.',
      intensity: 'peak',
    },
    {
      month: 'Apr',
      headline:
        'Shoulder month · procurement closes · summer prep · CRE CDP/GRESB crunch',
      activities: [
        'Healthcare finishes / closes many gas contracting cycles',
        'CRE hits CDP deadlines; GRESB portal opens; compliance demand spikes',
        'Higher ed shifts from budget submission to summer readiness',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Rate Analyst',
      salesPlay:
        'Position invoice-organized data as the compliance substrate — “your CDP/GRESB inputs already exist in the bills.”',
      intensity: 'high',
    },
    {
      month: 'May',
      headline: 'Shift from planning to pre-summer operational risk',
      activities: [
        'Memorial Day marks hospitality/QSR climb toward summer electricity peaks',
        'CRE: major deadlines (NYC LL97 May 1) and ongoing GRESB work',
        'Urgency shifts to ratchets, summer tariffs, and peak risk',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Energy HQ',
      salesPlay:
        'Pre-summer demand-charge risk map + summer rate-structure change audit before peaks land.',
      intensity: 'medium',
    },
    {
      month: 'Jun',
      headline: 'Summer peaks begin setting 12-month demand charges',
      activities: [
        'One bad peak day can lock elevated demand charges for the next year',
        'QSR electricity peaks (AC-driven) open; hospitals run flat-out cooling',
        'Interval / real-time workflows matter most for curtailment and DR',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Rate Analyst',
      salesPlay:
        'Sell peak monitoring / alerts and site-level exposure — “summer is when the bill sets the tax for the year.”',
      intensity: 'peak',
    },
    {
      month: 'Jul',
      headline: 'Operational crucible · Jul 1 FY vs Jul 1 rate resolutions',
      activities: [
        'Jul 1 FY schools compare March assumptions to July bills (variance shows immediately)',
        'Healthcare remains in max cooling / capacity-charge pain',
        'CRE: many GRESB submission deadlines land',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Regulatory Intelligence',
      salesPlay:
        'Retrospective proof: show what changed effective Jul 1 and the portfolio dollar impact, then convert to monitoring.',
      intensity: 'peak',
    },
    {
      month: 'Aug',
      headline:
        'Last month of peak demand · healthcare Oct 1 FY budget build accelerates',
      activities: [
        'August bills encode max summer peaks that drive next-year demand charges',
        'Healthcare pulls 12 months of bills to build October budgets',
        'Sept 1 FY schools approach year-end complexity',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Energy HQ',
      salesPlay:
        'Healthcare baseline pack + annual demand-charge audit — “where is the most impact?”',
      intensity: 'high',
    },
    {
      month: 'Sep',
      headline:
        'Pivot · cooling eases · Sept 1 FY launches · healthcare budget finalization',
      activities: [
        'Higher ed (Sept 1 FY): new year, new loads, max openness',
        'Healthcare: last edits to Oct 1 FY forecasts and narratives',
        'Fall PUC filing season begins — early warning for next year’s rates',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Energy HQ',
      salesPlay:
        'FY-launch audit: clean consolidated bill history + watchlist; attach Build Engine for new buildings/meters.',
      intensity: 'peak',
    },
    {
      month: 'Oct',
      headline:
        'Healthcare Oct 1 FY reset · corporate Q4 planning · fall rate-case intake',
      activities: [
        'Healthcare: new FY baseline bills establish targets',
        'Hospitality / retail: Q4 planning for next calendar-year budgets',
        'Filings now often resolve 9–12 months out — intelligence narrative strengthens',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Rate Analyst',
      salesPlay:
        'Fall rate-case monitor tied to forward budget risk (actual utility cost growth vs escalators).',
      intensity: 'peak',
    },
    {
      month: 'Nov',
      headline: 'Heating season · Q4 budget lock · winter gas decisions intensify',
      activities: [
        'Corporate / hospitality / retail finalize next-year budgets with imperfect commodity visibility',
        'Healthcare compares early FY actuals and rehears winter hedging posture',
        'Winter tariff / rate-structure changes often flip Nov 1 in many jurisdictions',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Deal Center',
      salesPlay:
        'Winter gas hedge decision support — predictability and variance reduction, not “cheapest trade.”',
      intensity: 'high',
    },
    {
      month: 'Dec',
      headline:
        'Year-end close · holiday ops · PJM capacity inputs · low new-logo season',
      activities: [
        'Minimal tool evaluation; focus on close, audits, volatility (polar-vortex risk)',
        'Capacity auction results land Dec/Jan and flow into next-year charge expectations',
        'Prep January re-engagement packs from full-year invoice datasets',
      ],
      verticalsActive: ['higher-ed', 'healthcare', 'cre', 'qsr'],
      leadModule: 'Energy HQ',
      salesPlay:
        'Customer success: ingest December bills, year-end portfolio summary, retention setup for January.',
      intensity: 'low',
    },
  ],
  fiscalYears: [
    {
      vertical: 'Higher ed',
      fyStart: 'Jul 1 (most); Sep 1 (Texas exemplars)',
      budgetLock: 'Mar (Jul 1 FY); Jan–Feb build (Sep 1 FY)',
      notes:
        'Peak demand season Jun–Aug. Budget timing gap is the core wedge — rates finalize after assumptions lock.',
    },
    {
      vertical: 'Healthcare',
      fyStart: 'Oct 1 (most nonprofit systems)',
      budgetLock: 'Jul–Aug (with Oct FY finalization pressure in Aug–Sep)',
      notes:
        'Peak demand season Jun–Aug. UPSC-driven gas/electric procurement is highly seasonal.',
    },
    {
      vertical: 'CRE',
      fyStart: 'Jan 1 or fund-dependent',
      budgetLock: 'Sep–Oct (GRESB cycle); Q4 corporate planning cross-cuts',
      notes: 'Compliance clusters Q1 (CDP) and Apr–Jul (GRESB); peak demand Jun–Aug.',
    },
  ],
  priorityWindows: [
    {
      window: 'Feb–Mar',
      why: 'Higher-ed Jul 1 FY budgets lock in March while pending rate cases can still be material — dollar-quantified regulatory intelligence is the highest-converting wedge.',
      module: 'Regulatory Intelligence',
    },
    {
      window: 'Sep–Oct',
      why: 'Healthcare Oct 1 FY reset + higher-ed Sept 1 FY launch creates simultaneous openness; institutional RFP/procurement patterns cluster in fall.',
      module: 'Rate Analyst',
    },
  ],
  bigTakeaways: [
    'Calendar the motion to four beats — budget, procurement, summer demand, compliance/reporting. Buyer attention is not evenly distributed.',
    'The recurring win is the budget timing gap: finance locks forecasts before utilities finalize rates. Time intel + invoice forensics to those cliffs.',
    'Treat Feb–Mar as the highest-converting higher-ed window (Jul 1 FY lock) and Aug–Sep as the second (healthcare FY close/launch + Sept FY fresh start).',
    'Summer (Jun–Aug) is the dollars-at-risk season for demand charges. Lead with peak-setting risk and portfolio prioritization.',
    'CRE compliance (CDP / GRESB / LL97) creates acute April–May tool demand; lead with invoice-level data readiness even if full carbon productization is adjacent.',
    'Be honest in pitch: detection + intelligence convert best paired with a credible “dollars recovered” case. Calendar creates the moments; proof converts them.',
  ],
}

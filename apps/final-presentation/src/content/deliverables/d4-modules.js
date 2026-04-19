export const D4 = {
  title: 'Product Module Recommendations',
  tagline:
    'Five build tracks—some net-new from recent interviews, others tightened with more validation. Site and coverage is now its own product; meter-to-site mapping kept surfacing as year-one work. Tariff audit and rate optimization fold into one tariff-intelligence module. Regulatory and chargeback stay in Phase 2 as the moat. Chat, files, MCP→SQL, and proactive association remain the platform baseline; these five tracks are the product work we layer on top.',
  ceoScan:
    'John and Dan: the earlier D4 list sounded like “same modules, sharper copy.” This version changes the **set** of products. Interview after interview, bad or incomplete meter↔site↔bill truth killed trust before analytics started (BSMH meter study, AdventHealth on matching units to addresses, Panda shared-meter story). Proactive association is a start — buyers still need a **coverage and exception product**: missing bills, identity conflicts, onboarding after M&A, and reconciliation queues. **Rank 1 — Site, Meter & Coverage Integrity** is that product, not a footnote. **Rank 2 — Anomaly Detection** stays push-first drift and pattern alerts (Texas State, UT Austin, Intermountain). **Rank 3 — Tariff, Audit & Rate Health** merges the old billing-audit and tariff-optimization modules: one tariff-intelligence surface for wrong line items and wrong schedules/ratchets, one trust curve, one natural-language path (Panda, Trane). **Rank 4 — Regulatory Intelligence** is forward docket → budget dollars. **Rank 5 — Campus Chargeback** lands once upstream truth is boringly reliable. Resolve errors and autonomous utility action stay manual until credited recovery is documented.',
  tldrBullets: [
    'Structural change: **Site & coverage integrity** is its own ranked module — not only a prerequisite buried in “we already associate invoices.”',
    'Structural change: **Tariff audit + rate / schedule optimization** = one module so GTM and engineering do not fork “error team vs rate team.”',
    'Unchanged insight: push beats pull; the “did the credit actually hit the bill?” bar still requires case stages and at least one proof of money back.',
    'Regulatory + chargeback remain Phase 2 depth — high moat, high config — after Phase 1 proves dollars.',
    'Phase 3: non-expert-friendly Rate Analyst on top of all five modules (MCP→SQL), without replacing push.',
  ],
  buyerNamedAlerts: [
    'Each alert should point to a real line on the bill: what the charge is, what month it hit, and roughly how many dollars. Customers already get “something looks off” flags from **bill-pay vendors** — they will compare you to those.',
    'Before you flag “weird usage,” catch broken basics: a bill that never showed up, an account that’s out of date, or the wrong building tied to a meter. **Fix coverage first** — then drift and pattern alerts are trustworthy.',
    'Demand ratchets, creeping into a higher rate tier, and power-factor charges — partners and hospitals brought these up; use them as a **quick credibility** check in demos.',
    'Wrong math on the bill, bad meter reads, bad power factor — interview stories where the problem hid behind bills that **looked normal every month**.',
    'Money for power nobody is using, bills still running after a site closes, or paying for another tenant’s meter — **unused power**, **closed sites still billing**, and **shared meters** (e.g. Panda, health systems).',
  ],
  modules: [
    {
      id: 'm0',
      rank: 1,
      phase: 'Phase 1',
      name: 'Site, Meter & Coverage Integrity',
      oneLiner:
        'Reconciliation queues and health metrics so every downstream alert is tied to the right site.',
      buildsOn:
        'You already invest in proactive invoice→site association — this module productizes the **gap cases** buyers actually burn time on: conflicts, duplicates, onboarding after growth, “is this the right meter for this address?”, and portfolio coverage (missing bills, stale meters). Without it, Modules 2–3 produce noise or false confidence.',
      problem:
        'Health systems and campuses spend months mapping meters to buildings; chains lose money when one meter serves two tenants or bills never arrive. AdventHealth asked for basic certainty that usage landed at the right site. Panda’s year-long neighbor bill is an identity problem, not a threshold problem. No drift model fixes bad graph truth.',
      persona:
        'Daily: energy manager or bill operations lead owning portfolio hygiene. Economic buyer: CFO / VP Ops — audit-ready certainty before trusting savings numbers.',
      evidence: [
        '**AdventHealth:** electrons/gas matched to site addresses — “foundational,” not flashy.',
        '**BSMH:** meter study over a year before analytics were trustworthy.',
        '**Panda:** shared-meter bleed invisible until manual discovery.',
        '**UT Austin:** hard to tell billing noise from wrong meter / blend of fixed vs volumetric.',
      ],
      mvpScope: [
        'Coverage dashboard: expected vs received bills per account, missed-cycle flags.',
        'Exception queue for identity conflicts (two invoices one meter, one invoice two sites, etc.).',
        'Manual resolution workflow with audit log — no silent auto-merge in MVP.',
        'Site onboarding checklist for M&A / new stores tying into ingestion.',
        'Exports for internal audit: “what we believe is true” snapshot by site.',
      ],
      notInMvp: [
        'Fully automated entity resolution at national scale without human sign-off.',
        'Replacing third-party bill pay — this module coordinates truth on top of pay workflows.',
      ],
      aiTiers: {
        push: 'Coverage and conflict digests to ops — “these accounts need human resolution this week.”',
        chat: 'Rate Analyst answers “which meter feeds this building?” and “what is broken in coverage?” from structured graph + bills.',
        autonomous: 'Suggest merges only; humans approve identity changes.',
      },
      competitive:
        'Bill partners optimize payment throughput, not portfolio graph health. This is how you differentiate “we pay bills” from “we know what happened at each site.”',
      productTag: 'FITS',
    },
    {
      id: 'm2',
      rank: 2,
      phase: 'Phase 1',
      name: 'Anomaly Detection & Alerting',
      oneLiner:
        'Drift, pattern, and peer consistency — after coverage is trustworthy.',
      buildsOn:
        'Runs on clean site/meter linkage from Site & Coverage Integrity. Extends “spot errors” with push-ranked signals threshold workflows miss: baseline drift, structural shared-load issues, stable-looking bad reads.',
      problem:
        'Processors and exception rules catch spikes and missed bills; they miss gradual re-basing and failures that look normal month to month. Reactive buyers will not hunt dashboards — Texas State and UT Austin both pointed to push-first behavior.',
      persona:
        'Daily: multi-site energy or facilities lead. Economic buyer: VP Ops / CFO buying scalable vigilance.',
      evidence: [
        '**Texas State:** flag anomalies; should not have to go ask (paraphrase).',
        '**UT Austin:** streamlined anomaly flagging vs manual hunt.',
        '**Intermountain:** large step-change missed by processor; accountant caught it.',
        '**Medxcel / Ascension:** peer-style flat suspicious usage patterns.',
        '**Panda / BSMH:** drift and “looks normal” meter failures.',
      ],
      mvpScope: [
        'Per-meter baselines (rolling + same-period history).',
        'Sigma- and dollar-weighted scoring; spike vs drift typing.',
        'Peer / cohort checks where metadata allows.',
        'Queue ranked by estimated annual $ impact.',
        'Alert cards: expected vs actual, delta, investigation hint, exec rollup.',
      ],
      notInMvp: [
        'Weather-normalized causal models (v2).',
        'Autonomous utility or vendor outreach.',
      ],
      aiTiers: {
        push: 'Primary tier — scheduled digests for reactive buyers.',
        chat: 'Deep history and comparisons after a flag.',
        autonomous: 'None; humans investigate.',
      },
      competitive:
        'Threshold-first incumbents are blind to structural drift; you pair pattern intelligence with your own ingestion and graph.',
      productTag: 'FITS',
    },
    {
      id: 'm1',
      rank: 3,
      phase: 'Phase 1.5',
      name: 'Tariff, Audit & Rate Health',
      oneLiner:
        'One module: tariff-expected line items and eligible schedule / ratchet / savings scenarios — dispute packets + rate cards + plain-language prompts.',
      buildsOn:
        'Merges the former “billing error audit” and “tariff optimization” tracks. Buyers do not experience “wrong charge” and “wrong schedule” as two products — Trane’s channel lens and Panda’s multi-site operations both need both in one conversation. Same tariff engine, one trust curve: prove line-item correctness, then rank alternatives and ratchet risk. Case stages that prove credits landed (NVIDIA-style diligence asks) stay in MVP for pilots.',
      problem:
        'Utilities can bill errors through; recovery needs evidence. At the same time, customers sit on wrong schedules for years (Trane customer pattern) and variance work is still manual bill forensics (Panda). Pitching rate savings before line-item tariff trust reads as black box — one module sequences audit → rate health → savings cards.',
      persona:
        'Daily: energy manager, M&V, or channel partner. Economic buyer: VP Facilities / CFO on recoveries + no-capex rate fixes.',
      evidence: [
        '**Texas State:** multiplier error found by vigilance.',
        '**NVIDIA:** identified vs credited?',
        '**Panda:** variance should be a question, not a research project.',
        '**Trane:** rate literacy, PF, ratchet reality; Excel + Toolbase workflows — gap is holistic natural-language rate health.',
      ],
      mvpScope: [
        'Line extraction; tariff-expected vs billed; prioritized exception queue + error taxonomy.',
        'Dispute packet export + pilot case stages (flagged → disputed → response → credit recorded).',
        'Rate simulation over historical load; rank alternatives by annual $ with eligibility gates.',
        'Recommendation + ratchet / peak diagnostics cards; assumptions explicit.',
        'Layman Rate Analyst prompts (“wrong charge?”, “wrong schedule?”) with guardrails.',
      ],
      notInMvp: [
        'Full TOU / DR playbooks (v2).',
        'Autonomous utility correspondence or savings guarantees without proof.',
      ],
      aiTiers: {
        push: 'Exception queue + proactive savings / risk cards when thresholds trip.',
        chat: 'Unified Q&A across errors and schedules — one analyst surface.',
        autonomous: 'Deterministic tariff math; AI explains — does not auto-switch utilities.',
      },
      competitive:
        'Split bill-QA tools from rate tools and buyers rebuild the story in Excel. Integrated “wrong charge + wrong rate + ratchet” is the channel and enterprise narrative.',
      productTag: 'FITS',
    },
    {
      id: 'm3',
      rank: 4,
      phase: 'Phase 2',
      name: 'Regulatory Intelligence Monitor',
      oneLiner:
        'Dockets and forward utility actions → T12 dollars and budget timelines.',
      buildsOn:
        'Net-new monitoring: filing → impact → alert → FP&A export. Trane called docket surveillance “super powerful”; UT Austin flagged the budget-calendar gap.',
      problem:
        'Finance locks budgets before rates finalize; multi-utility systems cannot mine every docket. Needs dollars, not PDFs.',
      persona:
        'Daily: energy / M&V lead. Economic buyer: finance VP.',
      evidence: [
        '**Trane:** PUC/board surveillance → facility dollar impact.',
        '**UT Austin:** March budget vs later rate finality.',
        '**AdventHealth:** interpret many utilities — why we should care.',
        'Synthesis: rare competitor coverage for docket → portfolio $.',
      ],
      mvpScope: [
        'Starter geography with honest completeness metrics.',
        'Material filing alerts for in-portfolio utilities.',
        'Impact estimate: proposed components × T12.',
        'Docket cards + budget-oriented export.',
      ],
      notInMvp: [
        '50-state day one.',
        'Full ISO capacity automation (v2).',
      ],
      aiTiers: {
        push: 'Filing and $-impact alerts.',
        chat: 'Docket Q&A and scenarios.',
        autonomous: 'Ingestion/classification unattended; humans own budget bets.',
      },
      competitive:
        'Backward tariffs and pay partners do not own forward docket → budget bridge.',
      productTag: 'EXTENDS',
    },
    {
      id: 'm5',
      rank: 5,
      phase: 'Phase 2',
      name: 'Campus Chargeback Intelligence',
      oneLiner:
        'Finance-grade allocations on top of trusted usage, tariff, and anomaly data.',
      buildsOn:
        'Consumes graph + tariff + anomaly truth from Site/Coverage, Anomaly, and Tariff modules. Chargeback before truth invites political failure.',
      problem:
        'Ops vs finance split (Texas State); sq-ft chargebacks miss efficiency levers (Texas State); district energy complexity breaks weak UX (G2 on EnergyCAP).',
      persona:
        'Daily: campus energy manager. Economic buyer: CFO / budget director.',
      evidence: [
        '**Texas State:** ops vs finance tension; usage-based internal chargeback when data allows.',
        'G2/Capterra: chargeback / split confusion recurring.',
      ],
      mvpScope: [
        'Allocation rules; plant / purchased passthrough where data exists.',
        'Monthly cost-center statements; portfolio rollup; variance flags.',
        'PDF + methodology audit trail.',
      ],
      notInMvp: [
        'Department portals v1.',
        'Deep rollout before upstream modules are stable.',
      ],
      aiTiers: {
        push: 'Scheduled allocation + variance highlights.',
        chat: 'Natural-language explanation of allocation changes.',
        autonomous: 'Deterministic calcs; no silent reallocations.',
      },
      competitive:
        'Explainable splits synced with audit + rate findings — not a standalone spreadsheet module.',
      productTag: 'EXTENDS',
    },
  ],
  buildSequence: [
    {
      phase: 'Phase 1',
      modules: ['m0', 'm2'],
      why: 'Parallel: **coverage integrity** (AdventHealth/BSMH/Panda) and **push anomalies** (Texas State/UT Austin/Intermountain). Bad graph poisons alerts; alerts prove value while graph hardens.',
    },
    {
      phase: 'Phase 1.5',
      modules: ['m1'],
      why: 'Single **tariff intelligence** shipment: line-item audit + rate / ratchet / savings cards + credited-recovery case stages — one GTM story, one trust curve after Phase 1 signal quality.',
    },
    {
      phase: 'Phase 2',
      modules: ['m3', 'm5'],
      why: 'Regulatory monitor = finance beachhead whitespace. Chargeback = stickiness once Site/Coverage, Anomaly, and Tariff modules are referenceable — highest config, land last for most accounts.',
    },
    {
      phase: 'Phase 3',
      modules: [],
      why: 'When Phases 1–2 are in market: Rate Analyst answers in plain language for the same outputs experts get from queues and exports — MCP→SQL–grounded, non-expert presets optional, push unchanged.',
    },
  ],
  priorityRationale: [
    'We elevated **Site, Meter & Coverage Integrity** to Rank 1 because buyers named mapping and identity as year-one work — not a silent prerequisite.',
    '**Anomaly Detection** stays the reactive-buyer hook — but it now explicitly depends on cleaner coverage from Rank 1.',
    '**Tariff, Audit & Rate Health** (single module) replaces separate audit + optimization SKUs so GTM and engineering stay one tariff story.',
    '**Regulatory Intelligence** stays Phase 2 for build cost — thin spike earlier only if the beachhead forces it.',
    '**Campus Chargeback** remains the EnergyCAP displacement lever: wrong first wedge, right retention play after truth is proven.',
    'Proof of **credited recovery** is still the diligence gate — case stages live in Tariff, Audit & Rate Health.',
    'Phase 3 is access, not a sixth SKU: natural language on the same artifacts once all five modules are real.',
  ],
  maturitySnapshot: [
    {
      capability: 'Identify invoices of interest',
      today: 'Plain-language Q&A on bills and tariffs.',
      gap: 'Show how much money is on the line and a simple “how do we compare?” view—without needing an expert to set everything up first.',
    },
    {
      capability: 'Associate invoices with sites / meters',
      today: 'Bill ↔ site/meter match is the strongest automation.',
      gap: 'Work at full portfolio size: catch shared meters, split landlord and tenant bills, and keep rechecking so nothing slowly attaches to the wrong place.',
    },
    {
      capability: 'Spot errors',
      today: 'Clearer for non-experts; dispute-ready packets still improving.',
      gap: 'Buyers need to see the credit show up on a later bill—not only an alert that something might be wrong.',
    },
    {
      capability: 'Resolve errors',
      today: 'People drive disputes; the product does not email the utility alone.',
      gap: 'If the product ever takes action for the customer, it should follow rules the customer and their lawyers are comfortable with—clear steps, no surprises.',
    },
    {
      capability: 'Spot / package opportunities',
      today: 'Still needs someone who knows rates and real usage.',
      gap: 'A facilities or finance lead should be able to ask “Are we on the wrong rate?” and get a straight answer, with the math shown in the open.',
    },
    {
      capability: 'Realize opportunities',
      today: 'Savings captured outside the tool: sign-offs and changing how the account runs.',
      gap: 'Spell out who does what next—no messaging that sounds like the software fixes your rates in one click.',
    },
    {
      capability: 'Spot / predict trends & budgets',
      today: 'Alerts over open-ended analysis; deep dives still specialist-led.',
      gap: 'Save “what will this cost us?” for times the business actually plans around—like a known rate hike or a big rule change—not open-ended chart surfing.',
    },
  ],
}

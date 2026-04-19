/**
 * Expandable diligence summaries for Primary company cards — distilled from
 * research/outputs/primary/company_cards/*.md (not loaded at runtime).
 */

export interface CompanyCardDiligence {
  /** One-line context for investors skimming the grid */
  snapshot: string
  /** Major findings: pains, buyer signals, and diligence hooks */
  bullets: string[]
}

export const COMPANY_CARD_DETAILS: Record<string, CompanyCardDiligence> = {
  'cc-texas-state': {
    snapshot:
      '~98 buildings, ~1,500 meters, district energy; EnergyCAP in use (bill processing module not fully used); strong ops + finance split.',
    bullets: [
      'District-energy metering is hard — blending central plant sub-meters with city utility data is still unsolved; EnergyCAP oversells ease.',
      'Bill-processing expertise recently left; 10× water multiplier and similar errors surface only through audit discipline.',
      'Ops wants usage/demand signal; finance wants cost/variance — same data, competing asks from one platform.',
      'Square-footage chargeback kills conservation incentives; usage-based internal billing is the CFO story if data supports it.',
      'Buyer readiness trending medium→high: clear pain, calendar hooks, and a path to joint ops + finance evaluation.',
    ],
  },
  'cc-ut-austin-finance': {
    snapshot:
      'Finance owner for utility spend and internal rates; ~$20M+ gas scale referenced; explicitly not the energy-ops owner.',
    bullets: [
      'Structural gap: budget submitted before City of Austin rates finalize — regulatory foresight is the wedge.',
      'Finance is reactive except hedging; anomalies are found late via surprise bills, not proactive flags.',
      'Fixed vs volumetric blending distorts perceived rates month to month — finance-specific error class.',
      'Wants anomalies flagged without hunting spreadsheets; packaging for CFO matters more than raw meter chat.',
      'Confirmed dual-audience model: ops/chat for engineers, translated financial outputs for finance — emphatic yes.',
    ],
  },
  'cc-ut-austin-ops': {
    snapshot:
      'Director of engineering for district generation (~60 MW load, major chilled water); rebuilding dormant building energy management.',
    bullets: [
      'Heavy internal generation limits external invoice volume — billing “Intel” SKU is narrower here than at multi-meter portfolios.',
      'Manual monthly utility vs internal meter reconciliation; no automated discrepancy detection.',
      'Load shedding is crude (whole buildings); wants intelligent prioritization tied to building use.',
      'Names retail / multi-site chains unprompted as natural fit where Clear Current’s volume story applies.',
      'Buyer readiness: low for pure billing SKU, higher for meter reconciliation + building EUI as onsite team returns.',
    ],
  },
  'cc-medxcel': {
    snapshot:
      '~$265M portfolio energy cited; Peer AI (Constellation) live ~9 months; sophisticated natural language query + ghost-meter wins already.',
    bullets: [
      'Ghost meters at vacated sites — stable small bills evaded thresholds; ~$1M/yr category after pattern-based detection.',
      '$7.2M polar-vortex shock in three days; gas nomination + weather intel is the ROI narrative.',
      'Administration keeps asking why bill ≠ budget — needs plain-language variance, not more dashboards.',
      'Data security / third-party data handling is institutional scar tissue — SOC and terms are table stakes.',
      'Displacement pitch must be gap vs Peer AI (e.g. occupancy-linked ghost meter, deeper tariff narrative), not “another AI bill tool.”',
    ],
  },
  'cc-bon-secours': {
    snapshot:
      'VP over 36 US hospitals; 2,000+ utility bills/month; Get Choice already runs AI/algorithmic invoice review.',
    bullets: [
      'Major meter failures and recoveries are rare and political — board-level escalation for large credits.',
      'Capacity charges exploded (e.g. PJM / grid drivers); hospital load can’t behaviorally shed like office.',
      'Meter-to-building mapping was >1 year of work — foundational data quality before analytics trust.',
      'One certified energy manager for 36 hospitals — portfolio prioritization ROI is an explicit ask.',
      'Clear entry: intelligence on top of processor (explain + recover + capacity exposure), not rip-and-replace.',
    ],
  },
  'cc-houston-methodist': {
    snapshot:
      'System facilities leader; Energy Print + broker Prism; heavy growth → forecasting and “guesstimated” new-campus budgets.',
    bullets: [
      'Forecasting breaks when campuses add square footage or service lines — needs scenario inputs, not flat YoY.',
      'Live suspected meter/power-factor issue — credibility play is flag statistical inconsistency vs equipment profile.',
      'Broker review described as “cursory” — room for systematic tariff/demand verification.',
      'AI culture thawing; willing to compare next-gen billing intelligence to incumbent benchmarking stack.',
      'Sees integrated BAS + billing intelligence on a 3–5 year horizon — billing layer is the near-term buy.',
    ],
  },
  'cc-intermountain': {
    snapshot:
      'Central ROC + SkySpark; 14-person energy bench; paid third party missed a $100K-class billing spike an accountant caught.',
    bullets: [
      'Third-party bill oversight failed on material variance — strongest “catch what we missed” demo narrative.',
      'Already drowning in flags from equipment AI; bottleneck is triage and field execution, not more noise.',
      'Symptoms vs root cause across intertwined systems — integrated narrative matters for dispatch efficiency.',
      'Leadership compares program to weaker peers — financial proof of energy team ROI stays important internally.',
      'Pitch: utility anomalies fed into ROC workflow + correlation with equipment signals they already run.',
    ],
  },
  'cc-adventhealth': {
    snapshot:
      '55 hospitals; ENGIE pays bills; active M&A; BrainBox AI stuck 2.5 years on cyber — Johnson Controls hack sharpened fear.',
    bullets: [
      'Bills don’t reliably match site addresses post-deal — foundational attribution gap before any analytics.',
      'Manual meter data entry into portfolio tools; wants automated ingestion + dashboard anomaly visibility.',
      'Processor pays bottom line but doesn’t interpret rates/taxes — nonprofit exemption and rate complexity are live leaks.',
      'Monthly utility feedback too slow vs BAS moves — wants faster closed loop on operational experiments.',
      'Facility directors often can’t read bills; central team must translate for hospital CEOs/CFOs at scale.',
    ],
  },
  'cc-panda-goldstein': {
    snapshot:
      'Executive facilities/energy; NG Insight at massive bill volume; threshold tools missed slow-burn neighbor-meter error.',
    bullets: [
      'Baseline drift: wrong meter shared with neighbor — looked stable enough to never spike alerts.',
      'HVAC degradation vs billing creep — weak linkage today between EMS signal and invoice outcome.',
      'Shutoff risk from operational bill-handling errors at extreme scale — process risk, not just cost.',
      'Stranded utility deposits across thousands of accounts — recovery category with weak internal process.',
      'Annual manual rate-class review — continuous tariff intelligence is an upsell wedge.',
    ],
  },
  'cc-panda-taylor': {
    snapshot:
      'Contract energy leader over enormous multi-utility footprint; expert on ratchets, rates, and operator support calls.',
    bullets: [
      'Industry assumes ~90% error catch — 10% “accepted loss” at world-class operations maturity.',
      'Rate heterogeneity makes naive automation suspect; trusts repeatable code over black-box claims.',
      'Operator explanation calls burn expert time — multi-utility, multi-rate storytelling is the workflow killer.',
      'Ratchet demand charges lock pain for months off one interval — confirmed real-world severity.',
      'Sewer vs water intake mismatch for QSR — structural overbill category that’s hard to dispute.',
    ],
  },
  'cc-hyatt': {
    snapshot:
      'Corporate sustainability lens; owner/operator/management fracture — corporate often blind to property billing accuracy.',
    bullets: [
      'Metrics exist but aren’t comparable across partners — normalization is the corporate reporting bottleneck.',
      'Late invoices and late fees still hit properties; automation is the operational fix Randy named.',
      'Corporate explicitly does not review utility errors — buyer for Clear Current is property/management co., not Hyatt HQ.',
      '2030-style goals need translation to on-property behavior — same “dual audience” pattern as campuses.',
      'Card value: sharp segmentation of who in hospitality actually holds the utility P&L.',
    ],
  },
  'cc-jll': {
    snapshot:
      'CRE advisory — enterprise clients may build or acquire tools; mid-market relies on advisors + manual bill forensics.',
    bullets: [
      'JLL Technologies is building internal AI energy-management and utility-bill intelligence on data JLL already holds through facility contracts (Jamare Bates).',
      'Clients delayed efficiency capex until crisis — five-year infrastructure lead times now.',
      'Data access + confidentiality are the enterprise AI gate — trust and terms beat feature slides.',
      'At JLL scale, outcome may be partnership, license, or acquisition — not a simple SaaS seat sale.',
      'Position tool as augmenting auditors, not replacing them, to avoid organizational antibodies.',
      'Channel path: arm JLL advisors for mid-market tenants with bill intelligence they can’t build in-house.',
    ],
  },
  'cc-nvidia-spieler': {
    snapshot:
      'Ecosystem voice — not a utility bill buyer; validates market structure, pricing traps, and distribution strategy.',
    bullets: [
      'Large portfolios often stop auditing — complexity cost exceeds recovery effort; errors become “accepted.”',
      'Savings-share economics blow up when savings scale — political reset to fixed fees.',
      'Underbilling asymmetry: buyers rarely speak up — true error rate is unknowable from disputes alone.',
      'Suggests embedding in billing stacks / utilities as distribution, not only end-customer sales.',
      'Inception + stack alignment (e.g. confirm GPU/cloud use) as path to intros and co-marketing.',
    ],
  },
  'cc-engie-zavadsky': {
    snapshot:
      'Processor posture — invoice plumbing, OCR, exceptions; Panda-scale water/muni paper as operational reality.',
    bullets: [
      '~30k municipalities with inconsistent formats — scanner + human eyeball still required at scale.',
      'Exceptions are threshold-based — gradual drift and slow-creep errors stay under radar.',
      'Sees numbers, not site context — must ask client why usage moved; diagnosis friction on every alert.',
      'Internal tension on AI energy use vs sustainability brand — may slow aggressive AI rollout.',
      '“Pretty dashboard” competitors lack payment + data moat — collection is the hard part, not charts.',
    ],
  },
  'cc-trane-johnson': {
    snapshot:
      'Account manager — reactive daily firefight; manual profiles for rates, solar, and demand studies when time allows.',
    bullets: [
      'Customer utility data access requires permission — slows every engagement before analysis starts.',
      'Customers don’t know their own rate structures — misalignment is invisible without expert review.',
      'Demand tiers and ratchets can domino into year-long cost impact — controls value is early warning.',
      'Power factor penalties widespread — quick-win capex story if flagged systematically.',
      'Large orgs already pay humans for this work — AI automation is differentiation vs status quo.',
    ],
  },
  'cc-trane-combs': {
    snapshot:
      'M&V / digital services — 10–15 min/meter prep before any analysis; regulatory intel is manual today.',
    bullets: [
      'Bill format heterogeneity broke prior AI tools — extraction reliability is the category blocker.',
      'PUC filings and board/rate politics are not monitored systematically — “super powerful” if automated.',
      'Most of day is data janitor work — automation ROI is immediate before advanced analytics.',
      'Insights don’t land until monetized — ROI translation must be native in outputs.',
      'Enterprise IT blocks internal AI assistants — vendor SOC narrative required for serious rollout.',
    ],
  },
}

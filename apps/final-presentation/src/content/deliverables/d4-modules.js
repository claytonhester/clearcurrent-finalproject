export const D4 = {
  title: 'Product Module Recommendations',
  tagline:
    'Five buyer-grounded modules turn invoice and tariff depth into pushed answers, not another dashboard to hunt.',
  ceoScan:
    'These modules are grounded in what buyers need now — not generic AI — and sequenced for what Clear Current can ship honestly. The core tension: buyers want answers before they go looking; push beats pull. Modules 1–2 are the wedge, 3 is documented white space, 4–5 deepen rate intelligence and campus stickiness once trust is earned.',
  tldrBullets: [
    'Grounded in buyer jobs-to-be-done, sequenced for what CC can ship without overpromising.',
    'Core tension: answers must arrive before buyers go looking — push beats another login.',
    'Modules 1–2 are the wedge; 3 is confirmed white space; 4–5 deepen rate intel and stickiness after trust.',
    'Interview-named alert families (ratchets, class thresholds, power factor) are fast credibility wins.',
  ],
  buyerNamedAlerts:
    'Interview-grounded alert families leadership should expect in the roadmap and demo story: demand ratchets locking minimum demand after seasonal peaks; proximity to rate-class kW thresholds; power-factor penalties with capacitor ROI — often the fastest trust-building wins Don Johnson and Sean Sevy flagged.',
  modules: [
    {
      id: 'm2',
      rank: 1,
      phase: 'Phase 1',
      name: 'Anomaly Detection & Alerting',
      oneLiner:
        'Drift and pattern alerts beyond static thresholds for huge meter portfolios.',
      problem:
        'Threshold rules catch spikes, not gradual baseline drift, shared-meter bleed, or meters that re-base wrong — so costs compound for months. No team can eyeball every account every cycle.',
      persona:
        'Daily: energy/facilities manager receiving pushed alerts. Economic buyer: VP Ops / CFO buying coverage volume humans cannot scan.',
      evidence: [
        'Roger Goldstein (Panda): paid a neighbor’s power a year — shared meter invisible to thresholds.',
        'James Norton (Texas State): “biggest thing” is knowing anomalies immediately — EnergyCAP gap.',
        'Sean Sevy (Houston Methodist): suspicious PF 80–81%; broker caught it, not Energy Print.',
        'Ann Walston (BSMH): two major meter failures drove multi-million-dollar overbilling; recovery required board-level utility negotiation.',
      ],
      mvpScope: [
        'Per-meter baselines (rolling stats vs same-month history).',
        'Sigma- and dollar-weighted deviation scoring.',
        'Spike vs drift classification and pattern typing.',
        'Alert queue prioritized by estimated dollar impact.',
        'Fast-read alert cards: expected vs actual, delta, investigation hint, portfolio rollup.',
      ],
      notInMvp: [
        'Weather-normalized anomaly models (v2).',
        'Replacing human investigation / utility outreach — alerts start the workflow.',
      ],
      aiTiers: {
        push: 'Unattended runs produce digest alerts — primary tier for reactive buyers.',
        chat: 'Post-alert interrogation: history, peer sites, pattern context via Rate Analyst.',
        autonomous: 'None as default; humans act on alerts.',
      },
      competitive:
        'Differentiator is drift/baseline-shift detection vs NG Insight–style threshold rules and EnergyCAP variance limits — documented failure modes in interviews and synthesis.',
      productTag: 'FITS',
    },
    {
      id: 'm1',
      rank: 2,
      phase: 'Phase 1',
      name: 'Billing Error Audit Engine',
      oneLiner:
        'Tariff-aware audit flags mischarges with dispute-ready evidence, not autonomous fixes.',
      problem:
        'Portfolio energy teams cannot manually catch multiplier, demand, and rate-component errors across thousands of meters; utilities can flag issues yet still bill them through. Recovery requires a documented, quantified case — not a hunch.',
      persona:
        'Daily: campus/portfolio energy manager investigating flags. Economic buyer: VP Facilities / CFO on ROI from recoveries and avoided contingency auditors.',
      evidence: [
        'RI PUC: 83% of internally flagged billing exceptions still reached customers.',
        'FERC: $108M mischarged at a single utility (FirstEnergy).',
        'Andee Chamberlain (Texas State): 10× wastewater multiplier caught by vigilance, not tooling.',
        'Marc Spieler (NVIDIA): asks whether identified errors actually become credits/refunds.',
      ],
      mvpScope: [
        'Invoice ingestion with line-item extraction (usage, demand, components, multipliers).',
        'Historical baselines per meter/line item; deviation vs history and tariff-expected value.',
        'Rules for multiplier, demand, rate class, component, and read anomalies.',
        'Prioritized exception queue with dollar delta and confidence.',
        'Dispute package: invoice excerpt, tariff cite, historical comparison chart.',
      ],
      notInMvp: [
        'Autonomous utility correspondence, dispute tracking, credit monitoring.',
        'Positioning as unattended “resolution” without closed-loop case studies.',
      ],
      aiTiers: {
        push: 'Nightly/weekly runs populate a prioritized exception queue without user-initiated queries.',
        chat: 'Rate Analyst answers scoped questions on discrepancies, periods, and error classes.',
        autonomous:
          'Roadmap: automated correspondence and credit monitoring — ship only with named closed-loop proof.',
      },
      competitive:
        'Vs threshold/OCR bill stores (e.g., EnergyCAP) and spike-only processors: tariff-expected comparison plus structured dispute outputs. Arcadia lacks this workflow UX.',
      productTag: 'FITS',
    },
    {
      id: 'm4',
      rank: 3,
      phase: 'Phase 1.5',
      name: 'Tariff Optimization Engine',
      oneLiner:
        'Simulates every eligible rate against your load; ranks savings and switch path.',
      problem:
        'Customers often sit on wrong rate schedules for years. Demand ratchets and TOU interactions are combinatorial, and many don’t know their current schedule. Mis-fit is persistent overpayment without a labeled “billing error.”',
      persona:
        'Daily: analyst / M&V / energy manager on scenarios. Economic buyer: VP Facilities / CFO on no-capex savings from a rate change request.',
      evidence: [
        'Walt Taylor (Panda): bill variance calls need manual reconstruction across utilities, rate structures, and usage profiles — the scale problem NL Q&A must absorb.',
        'Don Johnson (Trane): most customers do not know their rate structure.',
        'DOE-cited band: demand charges often 30–70% of commercial bills.',
        'Phil Combs (Trane): Excel is the primary daily driver; Energy Toolbase is the named rate/tariff reference — a holistic NL monitor is the gap.',
      ],
      mvpScope: [
        'Rate simulation engine over historical interval or monthly load.',
        'Rank alternatives by annual $ vs current schedule with confidence.',
        'Eligibility/feasibility gates (class, demand thresholds, terms).',
        'Recommendation cards: current vs alt schedules, savings, next steps.',
        'Ratchet/peak-event diagnostics for demand-charge unlock scenarios.',
      ],
      notInMvp: [
        'Full TOU operational playbooks and DR enrollment optimizer (v2).',
        'Pitching optimizations before tariff-model trust from audit wins.',
      ],
      aiTiers: {
        push: 'Proactive cards when savings exceed configurable thresholds.',
        chat: 'Deep what-if and schedule exploration via Rate Analyst.',
        autonomous:
          'Deterministic tariff math with AI assist on parsing/rules — not hands-free switching.',
      },
      competitive:
        'Vs Energy Toolbase / Arcadia / brokers: continuous, platform-integrated optimization paired with Module 1 findings — combined “wrong charge + wrong rate” narrative.',
      productTag: 'FITS',
    },
    {
      id: 'm3',
      rank: 4,
      phase: 'Phase 2',
      name: 'Regulatory Intelligence Monitor',
      oneLiner:
        'PUC filings become dollarized budget alerts before final rates hit bills.',
      problem:
        'Rate cases are public, but institutions lack the bandwidth and expertise to monitor dockets across many utilities — so budgets lock before cost impacts are knowable. Finance needs dollars, not PDFs.',
      persona:
        'Daily: energy manager / M&V engineer on dockets. Economic buyer: CFO / VP Finance on budget variance and hedging levers.',
      evidence: [
        'Across interviews and competitive synthesis: zero named competitors offer PUC docket monitoring — white space.',
        'Andi Ault (UT Austin): budget in March vs Austin rates finalized later — timing gap.',
        'Phil Combs (Trane): “super powerful” to monitor filings and dollarize customer impact.',
        'AdventHealth (Culver): 73 utilities — needs “why we should care,” not just aggregation.',
      ],
      mvpScope: [
        'PUC monitoring for priority states (TX, CA, OH, PA starter set).',
        'Filing alerts when a served utility opens or updates material rate proposals.',
        'Impact calculator: proposed components × trailing 12-month consumption.',
        'Alert cards: docket, dates, projected $, decision timeline, suggested actions.',
        'Budget-oriented export of revised energy-line forecast.',
      ],
      notInMvp: [
        'Full 50-state coverage day one; heterogeneous source maturity.',
        'Full PJM capacity auction automation (v2 track).',
      ],
      aiTiers: {
        push: 'Structured filing and dollar-impact alerts to ops and finance dashboards.',
        chat: 'Expert queries on docket contents, exposure by site, scenarios.',
        autonomous:
          'Continuous monitoring/classification runs unattended; human approves budget actions.',
      },
      competitive:
        'Confirmed gap vs EnergyCAP, Arcadia (backward tariffs), Energy Toolbase (analysis without forward docket mining), ENGIE/Schneider bill-scale without this monitor.',
      productTag: 'EXTENDS',
    },
    {
      id: 'm5',
      rank: 5,
      phase: 'Phase 2',
      name: 'Campus Chargeback Intelligence',
      oneLiner:
        'Tariff-faithful allocations from shared utility costs to departments — explained.',
      problem:
        'District-energy campuses must split energy, demand, and passthrough components across many cost centers. Ops needs kW/kWh, finance needs dollars — bad splits drive political disputes and opaque variances. Incumbent tools are sticky but weak on UX and district complexity.',
      persona:
        'Daily: campus energy manager configuring rules and reviewing cycles. Economic buyer: CFO / budget director on allocation accuracy and audit readiness.',
      evidence: [
        'Andee Chamberlain (Texas State): tension — ops cares demand/usage, finance cares bottom line.',
        'G2/Capterra: EnergyCAP chargebacks/splits “hard to understand.”',
        '660+ U.S. district energy systems — concentrated Higher Ed/health buyer base.',
        'Arcadia competitive intel: no documented campus chargeback / district-energy parity.',
      ],
      mvpScope: [
        'Configurable allocation engine (consumption, SF, hybrid; demand allocation logic).',
        'District-energy passthrough / internal transfer pricing from inputs + production.',
        'Monthly per cost-center statements with portfolio finance rollup.',
        'Variance vs prior month and budget with materiality flags.',
        'Exportable/PDF statements and audit trail of methodology.',
      ],
      notInMvp: [
        'Self-service departmental portals and formal dispute ticketing (v2).',
        'Lightweight pilots before allocation rules and sub-meter integrations are mature.',
      ],
      aiTiers: {
        push: 'Monthly auto-run notices to finance with variance highlights and exports.',
        chat: 'NL explanations of allocation jumps and hypotheticals (Energy HQ / Rate Analyst).',
        autonomous:
          'Deterministic calcs. AI assists config and variance narration, not silent reallocations.',
      },
      competitive:
        'Vs EnergyCAP module (poor UX, weak district story) and absent Arcadia chargeback — NL explanations plus sync to billing errors and rate changes.',
      productTag: 'EXTENDS',
    },
  ],
  buildSequence: [
    {
      phase: 'Phase 1',
      modules: ['m2', 'm1'],
      why: 'Shared ingestion, mapping, and baselines. Push-first alerts convert passive buyers (Norton/Ault priority), then layer tariff-vs-actual audit on stable signals.',
    },
    {
      phase: 'Phase 1.5',
      modules: ['m4'],
      why: 'Leverages shipped tariff engine for savings-ranked scenarios and channel “Rate Health Check” after audit proof builds tariff trust.',
    },
    {
      phase: 'Phase 2',
      modules: ['m3', 'm5'],
      why: 'PUC data layer is high build complexity but budget whitespace. Chargeback needs deepest config / integration — land stickiness once core billing intelligence is proven.',
    },
  ],
  priorityRationale: [
    'Push beats pull: research shows reactive buyers. Anomaly + audit must surface findings without login hunting.',
    'Modules 1–2 share one Billing Intelligence foundation — efficient to co-develop as complementary outputs (pattern vs tariff correctness).',
    'Spieler’s identified-vs-realized recovery gap demands a full credit-received case study before scaling recovery claims in fundraising.',
    'Module 4 is incremental on existing tariff depth but should follow early audit wins so customers trust the tariff model.',
    'Modules 3 and 5 are highest moat but highest integration/config cost — justify after wedge adoption and multi-state PUC scoping.',
    'Chargeback is the EnergyCAP displacement lever for long-term stickiness in district-energy Higher Ed/health accounts.',
  ],
}

export const D3 = {
  title: 'Customer Journey Maps',
  tagline:
    'Five reactive workflows where late discovery, manual multi-source investigation, and brittle resolution leave teams flying blind until dollars and credibility are already lost.',
  openingProblem:
    'Each map is built from primary interviews first and secondary research second, with product stages naming Clear Current products (Rate Analyst, Energy HQ, Deal Center) and tiers (Dashboard push, Chat). The recurring pattern is backward-looking, threshold-based detection that misses baseline drift, expertise concentrated in people who may leave, and resolution that is political, slow, and often partial — while CC’s honest position is spot-and-assist with human-in-the-loop completion.',
  tldrBullets: [
    'Built interviews-first: stages name real CC products (Rate Analyst, Energy HQ, Deal Center) and push vs chat tiers.',
    'Status quo is backward-looking, threshold-based detection — easy to miss baseline drift until money is already gone.',
    'Investigation is multi-source and expert-heavy; resolution is often political, slow, and partial.',
    'Honest CC posture: spot-and-assist with human-in-the-loop completion — not autonomous recovery promises.',
  ],
  journeys: [
    {
      id: 'j1',
      name: 'Monthly Bill Review & Validation',
      persona:
        'Commercial energy manager at a multi-site institution reviewing many meters per cycle.',
      personaArchetype: 'Andee Chamberlain · Sean Sevy · John Culver',
      trigger:
        'Monthly utility bills arrive as a high-volume mix of formats, cycles, and providers across the portfolio.',
      stagesWithoutCC: [
        {
          name: 'Discovery',
          summary:
            'Invoices arrive via mail, email, or portals. Tools are backward-looking and deviation-based.',
          painPoint:
            'Threshold rules miss errors that have become the new baseline. Comprehensive review is impossible at scale.',
        },
        {
          name: 'Investigation',
          summary:
            'Teams pull history, reconcile units, and cross-check meters, brokers, and utilities when something flags.',
          painPoint:
            'Attribution and format chaos make each invoice a multi-system, expert-heavy slog with no guaranteed resolution.',
        },
        {
          name: 'Resolution',
          summary:
            'Confirmed errors require utility contact, documentation, credits, and internal escalation.',
          painPoint:
            'Identified errors often diverge from realized recovery. Politics and time swallow outcomes.',
        },
      ],
      stagesWithCC: [
        {
          name: 'CC Product: Rate Analyst — Dashboard + Chat',
          capability:
            'Ingest and associate invoices to sites/meters; push ranked anomalies; NL investigation with baselines and annotated history; generate an evidence package for disputes.',
          bounds:
            'Does not autonomously file disputes or guarantee credits. Resolution timeline and utility dynamics stay human. Not every ingestion/association edge case is solved.',
        },
      ],
      emotionalArcWithout: ['Anxious', 'Overwhelmed', 'Trapped'],
      emotionalArcWith: ['Oriented', 'In control', 'Credible'],
      productTag: 'FITS',
    },
    {
      id: 'j2',
      name: 'Anomaly Detection & Response',
      persona:
        'Energy operations manager responding to spikes or broken consumption patterns.',
      personaArchetype: 'James Norton · Sean Sevy · Intermountain Health team',
      trigger:
        'A meter spikes, a bill shows an inexplicable number, or a pattern breaks from historical shape — often noticed late or by accident.',
      stagesWithoutCC: [
        {
          name: 'Discovery',
          summary:
            'Detection is periodic review, threshold rules, or non-energy staff noticing a big number.',
          painPoint:
            'Late, accidental discovery lets losses accumulate. Baseline drift and shared-meter blind spots evade rules.',
        },
        {
          name: 'Investigation',
          summary:
            'Triage spans bills, interval data, work orders, utilities, and brokers to separate billing vs equipment vs ops causes.',
          painPoint:
            'Non-linear, multi-source work with unit and domain mismatches. Hard to monetize the finding for the org.',
        },
        {
          name: 'Resolution',
          summary:
            'Path splits across utility disputes, facilities / capital work, or policy — often needing finance and ops alignment.',
          painPoint:
            'Correct diagnosis still hits politics, capital gates, and hesitation to escalate without airtight proof.',
        },
      ],
      stagesWithCC: [
        {
          name: 'CC Product: Energy HQ + Rate Analyst — Dashboard primary, Chat for triage',
          capability:
            'Portfolio anomaly alerts prioritized by dollar impact. NL triage and annotated history. Evidence packaging and financial framing for escalation.',
          bounds:
            'Does not complete utility negotiation, capital approval, or org politics. Sub-hour real-time BAS monitoring is not described as shipped — alerts tie to invoice-level data.',
        },
      ],
      emotionalArcWithout: ['Alarmed', 'Overwhelmed', 'Exposed'],
      emotionalArcWith: ['Alerted', 'In control', 'Grounded'],
      productTag: 'FITS',
    },
    {
      id: 'j3',
      name: 'Campus Chargeback & Departmental Billing',
      persona:
        'University utility billing manager allocating real utility costs across departments and auxiliaries.',
      personaArchetype: 'Andee Chamberlain · Andi Ault',
      trigger:
        'Period close forces internal allocation of paid utility costs as the campus footprint and metering reality keep shifting.',
      stagesWithoutCC: [
        {
          name: 'Discovery',
          summary:
            'Mixed metering and district-energy complexity collide with tools that promised more integration than they deliver.',
          painPoint:
            'Data for usage-based chargeback is missing or siloed. Monthly reconciliation is manual on a deadline.',
        },
        {
          name: 'Investigation',
          summary:
            'Teams disaggregate central plant costs, convert units, and defend assumptions ops and finance each need differently.',
          painPoint:
            'Dual-audience tension — usage vs dollars — with no system that serves both. Iterative approximations get contested.',
        },
        {
          name: 'Resolution',
          summary:
            'Charges go out; departments accept or dispute under square-footage or weak signals.',
          painPoint:
            'Charges feel arbitrary, so conservation incentives fail. Disputes stay painful to defend with assembled evidence.',
        },
      ],
      stagesWithCC: [
        {
          name: 'CC Product: Rate Analyst + Energy HQ — Dashboard + Chat',
          capability:
            'Stronger meter-to-building association, validation, anomaly flags, building-level consumption and cost views, and role-shaped NL queries from one dataset.',
          bounds:
            'Does not replace a full chargeback/ERP system. District-energy disaggregation, departmental allocation logic, and deep ERP integration are roadmap-level for this vertical wedge.',
        },
      ],
      emotionalArcWithout: ['Dread', 'Frustrated', 'Defensive'],
      emotionalArcWith: ['Steadier', 'In control', 'Defensible'],
      productTag: 'EXTENDS',
    },
    {
      id: 'j4',
      name: 'Regulatory Intelligence & Budget Impact',
      persona:
        'Energy manager or finance director exposed when rate cases land after budgets are set.',
      personaArchetype: 'Andi Ault · Phil Combs',
      trigger:
        'Budget uses forward rate assumptions; later, utilities finalize increases on a regulatory calendar misaligned with institutional budgeting.',
      stagesWithoutCC: [
        {
          name: 'Discovery',
          summary:
            'Dockets are public but dense; in practice people learn from bills, irregular notices, brokers, or luck.',
          painPoint:
            'The mismatch stays invisible until variance hits. No bridge between PUC process and budget calendar.',
        },
        {
          name: 'Investigation',
          summary:
            'Finance models dollar impact across schedules and buildings; ops and finance wrestle the same data in different shapes.',
          painPoint:
            'Manual rate-schedule mapping and updates make precise, timely portfolio math expensive.',
        },
        {
          name: 'Resolution',
          summary:
            'Teams update budgets or absorb variance and rarely execute proactive mitigation in the reactive scramble.',
          painPoint:
            'Mitigation and class-review opportunities are missed. Explanations to leadership stay technical and slow.',
        },
      ],
      stagesWithCC: [
        {
          name: 'CC Product: Rate Analyst — Dashboard + Chat',
          capability:
            'Vision in the map: docket-aware alerts with portfolio impact, instant scenario Q&A, and CFO-ready variance memos tied to tariff logic.',
          bounds:
            'Automated PUC docket monitoring integrated with impact modeling is explicitly not described as shipped. Tariff/scenario engine exists, but the monitoring/intake layer is the roadmap extension.',
        },
      ],
      emotionalArcWithout: ['Blindsided', 'Overwhelmed', 'Cornered'],
      emotionalArcWith: ['Forewarned', 'Oriented', 'Equipped'],
      productTag: 'EXTENDS',
    },
    {
      id: 'j5',
      name: 'Budgeting & Forecasting (Annual Cycle)',
      persona:
        'Energy and finance leaders building a defensible annual energy budget and multi-year view.',
      personaArchetype: 'Andi Ault · Andee Chamberlain · Phil Combs',
      trigger:
        'Annual budget season starts — energy is a scrutinized line item amid rising costs and opaque drivers.',
      stagesWithoutCC: [
        {
          name: 'Discovery',
          summary:
            'Teams blend last-year actuals with escalation guesses and parallel finance assumptions.',
          painPoint:
            'Rate-case timing vs budget lock guarantees structural error. Risk stays hidden until variance reports.',
        },
        {
          name: 'Investigation',
          summary:
            'Forecasting splits into volume, rate, and schedule/contract mix — usually only partially supported by tools.',
          painPoint:
            'Rate path is the broken component. Optimization never gets attention during the crunch.',
        },
        {
          name: 'Resolution',
          summary:
            'Budget submits with known weak assumptions. Later variance erodes credibility and capital asks.',
          painPoint:
            'Wrong for structural reasons outside the energy manager’s control still burns organizational trust.',
        },
      ],
      stagesWithCC: [
        {
          name: 'CC Product: Rate Analyst + Deal Center — Dashboard + Chat',
          capability:
            'Budget-open briefings from monitored portfolio context; NL scenario modeling for finance and ops; gas/strip context alongside consumption via Deal Center; documented assumptions for CFO questions.',
          bounds:
            'PUC monitoring layer remains roadmap. Full M&V-grade baselines and ranked multi-year capital ROI are directional roadmap — not fully shipped as described.',
        },
      ],
      emotionalArcWithout: ['Uneasy', 'Overextended', 'Undermined'],
      emotionalArcWith: ['Prepared', 'Aligned', 'Credible'],
      productTag: 'FITS',
    },
  ],
  crossMapFindings: [
    'Every journey starts reactive. Stage 1 is routinely late discovery, and stress peaks in investigation and resolution — not always at the trigger.',
    'A single structural theme repeats: flying blind until problems surface with accumulated time and dollars lost.',
    'Expertise and memory concentrated in one long-tenured person creates brittle detection that disappears when they leave.',
    'The dual-audience fracture (ops wants usage; finance wants dollars) runs across higher ed and large commercial accounts.',
    'Three CC strengths span the maps: proactive dollar-ranked alerts, NL investigation on shared data, and monetized CFO-ready outputs.',
    'The honest cross-cutting hole is identified-vs-realized recovery. Faster evidence does not equal guaranteed refunds or credits.',
  ],
  productHonesty: [
    'Ships now: Dashboard push alerts, Chat investigation, invoice ingestion with strong site-invoice association, anomaly flagging from invoice-level data, and tariff/contract scenario analysis from Rate Analyst. Deal Center supports procurement context in the budget journey.',
    'Roadmap / extends: automated PUC docket monitoring tied to portfolio impact; deep campus chargeback (district energy disaggregation, allocation logic, ERP paths); richer forecasting/M&V baselines; multi-year capital ROI ranking.',
    'Hard boundary: CC spots and assists. It does not autonomously resolve disputes, secure credits, or replace human utility and executive politics.',
    'Proof gaps: documented recovered-dollar case studies; optional net-new scans like long-held deposit recovery and confirmed water-invoice ingestion breadth.',
    'Positioning risk: investors and customers will ask whether identified errors become realized dollars. The product accelerates evidence, not guaranteed outcomes.',
  ],
}

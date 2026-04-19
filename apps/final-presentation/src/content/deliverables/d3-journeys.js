export const D3 = {
  title: 'Customer Journey Maps',
  tagline:
    'Six buyer- and channel-adjacent workflows where late discovery, manual multi-source investigation, and brittle resolution leave teams flying blind until dollars and credibility are already lost.',
  openingProblem:
    'Each map is built from primary interviews first and secondary research second, with product stages naming Clear Current products (Rate Analyst, Energy HQ, Deal Center) and tiers (Proactive alerts, Chat). The recurring pattern is backward-looking, threshold-based detection that misses baseline drift, expertise concentrated in people who may leave, and resolution that is political, slow, and often partial — while CC’s honest position is spot-and-assist with human-in-the-loop completion.',
  tldrBullets: [
    'Built interviews-first: six maps (five core buyer workflows plus procurement/channel/continuous assurance) name real CC products and push vs chat tiers.',
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
      personaArchetype:
        'Texas State University · Houston Methodist · AdventHealth · Medxcel (Ascension) · Bon Secours Mercy Health · Panda Restaurant Group · Hyatt',
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
            'Ingest and associate invoices to sites/meters; push ranked anomalies; natural language investigation with baselines and annotated history; generate an evidence package for disputes.',
          bounds:
            'Does not autonomously file disputes or guarantee credits. Resolution timeline and utility dynamics stay human. Not every ingestion/association edge case is solved.',
        },
      ],
      emotionalArcWithout: ['Anxious', 'Overwhelmed', 'Trapped'],
      emotionalArcWith: ['Oriented', 'In control', 'Credible'],
      productTag: 'FITS',
      evidenceQuotes: [
        {
          organization: 'Texas State University',
          d1TriggerId: 'R-01',
          quote:
            'We had a weird multiplier happen in one of our bills. They listed 35,000 gallons instead of 3,500 — a 10× error in a pattern that should have been obvious.',
        },
        {
          organization: 'Houston Methodist',
          d1TriggerId: 'F-05',
          quote:
            'Prism does a cursory review of our invoices, but they’re not catching everything — we’re still seeing power factor anomalies.',
        },
        {
          organization: 'AdventHealth',
          d1TriggerId: 'R-03',
          quote:
            'Bills are not always matching the addresses of our sites. Bills for one hospital campus are being paid by another.',
        },
        {
          organization: 'Bon Secours Mercy Health · Medxcel (Ascension)',
          d1TriggerId: 'REG-02',
          quote:
            'Capacity charges in PJM have increased tenfold in the last two years due to data center construction in Ohio. Most urgent and least controllable billing issue for our PJM hospitals.',
        },
        {
          organization: 'Panda Restaurant Group',
          d1TriggerId: 'REG-05',
          quote:
            'Utilities will always adjust their rate structures to remain profitable. Energy managers who track only current rates will continually be caught behind.',
        },
        {
          organization: 'AdventHealth',
          d1TriggerId: 'R-09',
          quote:
            'On-peak, off-peak, discounted off-peak, super off-peak, extreme on-peak — all actual names. Wrong tier and nobody catches it without line-by-line review.',
        },
        {
          organization: 'Trane Technologies · Hyatt · Medxcel (Ascension)',
          d1TriggerId: 'F-01',
          quote:
            'Nobody cares until you monetize it. If you can’t put a dollar sign on the problem and put it in front of a CFO, it doesn’t get acted on.',
        },
      ],
    },
    {
      id: 'j2',
      name: 'Anomaly Detection & Response',
      persona:
        'Energy operations manager responding to spikes or broken consumption patterns.',
      personaArchetype:
        'Texas State University · Houston Methodist · Intermountain Health · UT Austin · AdventHealth',
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
            'Portfolio anomaly alerts prioritized by dollar impact. natural language triage and annotated history. Evidence packaging and financial framing for escalation.',
          bounds:
            'Does not complete utility negotiation, capital approval, or org politics. Sub-hour real-time BAS monitoring is not described as shipped — alerts tie to invoice-level data.',
        },
      ],
      emotionalArcWithout: ['Alarmed', 'Overwhelmed', 'Exposed'],
      emotionalArcWith: ['Alerted', 'In control', 'Grounded'],
      productTag: 'FITS',
      evidenceQuotes: [
        {
          organization: 'Texas State University',
          d1TriggerId: 'P-05',
          quote:
            'We test emergency generators at 80% load bank during summer — required for accreditation. But we’re not always thinking about what that does to our peak demand.',
        },
        {
          organization: 'Houston Methodist',
          d1TriggerId: 'R-05',
          quote:
            'We’re seeing power factor readings of 79–81% at one of our campuses. Below where we should be — but I’m not sure if it’s equipment or meter malfunction.',
        },
        {
          organization: 'Intermountain Health',
          d1TriggerId: 'R-02',
          quote:
            'Most customers don’t know what rate structure they’re on. They don’t know if they have a demand ratchet. They just pay the bill. Even hospitals.',
        },
        {
          organization: 'UT Austin',
          d1TriggerId: 'REG-03',
          quote:
            'In northeastern states, carbon charges are now appearing on natural gas bills. Another layer of potential error and another tariff to interpret.',
        },
        {
          organization: 'AdventHealth',
          d1TriggerId: 'P-08',
          quote:
            "A lot of the work for determining — hey, here's the energy conservation measures or the facility improvement measures we want to pursue next year — that has to come before budgeting cycle so that we're able to have and provide that package to our financial leaders at the hospital level.",
        },
        {
          organization: 'Trane Technologies',
          d1TriggerId: 'R-06',
          quote:
            'If a customer hits a high demand in July, they may pay for that demand for the next 12 months. Most don’t know until the bill is already high.',
        },
      ],
    },
    {
      id: 'j3',
      name: 'Campus Chargeback & Departmental Billing',
      persona:
        'University utility billing manager allocating real utility costs across departments and auxiliaries.',
      personaArchetype: 'Texas State University · UT Austin',
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
            'Stronger meter-to-building association, validation, anomaly flags, building-level consumption and cost views, and role-shaped natural language queries from one dataset.',
          bounds:
            'Does not replace a full chargeback/ERP system. District-energy disaggregation, departmental allocation logic, and deep ERP integration are roadmap-level for this vertical wedge.',
        },
      ],
      emotionalArcWithout: ['Dread', 'Frustrated', 'Defensive'],
      emotionalArcWith: ['Steadier', 'In control', 'Defensible'],
      productTag: 'EXTENDS',
      evidenceQuotes: [
        {
          organization: 'Texas State University',
          d1TriggerId: 'F-03',
          quote:
            'Right now we charge buildings for utilities based on square footage. With actual usage data we could drive conservation.',
        },
        {
          organization: 'UT Austin',
          d1TriggerId: 'F-02',
          quote:
            'Flagging anomalies would be the first process — featured and flagged rather than looking for it. That would be time-saving.',
        },
      ],
    },
    {
      id: 'j4',
      name: 'Regulatory Intelligence & Budget Impact',
      persona:
        'Energy manager or finance director exposed when rate cases land after budgets are set.',
      personaArchetype:
        'UT Austin · Trane Technologies · Bon Secours Mercy Health · Medxcel (Ascension) · JLL',
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
      evidenceQuotes: [
        {
          organization: 'UT Austin',
          d1TriggerId: 'P-02',
          quote:
            'Our budget is submitted in March, but the City of Austin’s rate changes are often not finalized until after we’ve already submitted. So we’re guessing.',
        },
        {
          organization: 'Trane Technologies',
          d1TriggerId: 'REG-01',
          quote:
            'Monitoring PUC filings, utility board meetings, rate hike proposals, grid-operator decisions — that’s forward intelligence nobody is providing.',
        },
        {
          organization: 'Bon Secours Mercy Health · Medxcel (Ascension)',
          d1TriggerId: 'REG-02',
          quote:
            'Capacity charges in PJM have increased tenfold in the last two years due to data center construction in Ohio. Most urgent and least controllable billing issue for our PJM hospitals.',
        },
        {
          organization: 'UT Austin',
          d1TriggerId: 'REG-03',
          quote:
            'In northeastern states, carbon charges are now appearing on natural gas bills. Another layer of potential error and another tariff to interpret.',
        },
        {
          organization: 'Trane Technologies · JLL',
          d1TriggerId: 'REL-02',
          quote:
            'The broker has their interests. The customer needs to understand not just the headline price, but whether the rate structure fits their usage.',
        },
      ],
    },
    {
      id: 'j5',
      name: 'Budgeting & Forecasting (Annual Cycle)',
      persona:
        'Energy and finance leaders building a defensible annual energy budget and multi-year view.',
      personaArchetype:
        'UT Austin · Texas State University · Trane Technologies · NVIDIA · Medxcel (Ascension) · JLL',
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
            'Budget-open briefings from monitored portfolio context; natural language scenario modeling for finance and ops; gas/strip context alongside consumption via Deal Center; documented assumptions for CFO questions.',
          bounds:
            'PUC monitoring layer remains roadmap. Full M&V-grade baselines and ranked multi-year capital ROI are directional roadmap — not fully shipped as described.',
        },
      ],
      emotionalArcWithout: ['Uneasy', 'Overextended', 'Undermined'],
      emotionalArcWith: ['Prepared', 'Aligned', 'Credible'],
      productTag: 'FITS',
      evidenceQuotes: [
        {
          organization: 'UT Austin',
          d1TriggerId: 'P-03',
          quote:
            'We buy $20 million in natural gas every year plus or minus depending on pricing. That’s a proactive decision we make in the spring.',
        },
        {
          organization: 'Texas State University',
          d1TriggerId: 'P-02',
          quote:
            'Our budget is submitted in March, but the City of Austin’s rate changes are often not finalized until after we’ve already submitted. So we’re guessing.',
        },
        {
          organization: 'Texas State University',
          d1TriggerId: 'P-09',
          quote:
            'We typically do three-year terms on gas. Every few years, that procurement decision comes around and we have to think through strips versus market again.',
        },
        {
          organization: 'NVIDIA',
          d1TriggerId: 'F-04',
          quote:
            'Once energy spend hits $5M annually, it’s on the CFO’s radar. Below that, facilities problem. Above, a financial one.',
        },
        {
          organization: 'Trane Technologies',
          d1TriggerId: 'REG-01',
          quote:
            'Monitoring PUC filings, utility board meetings, rate hike proposals, grid-operator decisions — that’s forward intelligence nobody is providing.',
        },
        {
          organization: 'Bon Secours Mercy Health · Medxcel (Ascension)',
          d1TriggerId: 'REG-02',
          quote:
            'Capacity charges in PJM have increased tenfold in the last two years due to data center construction in Ohio. Most urgent and least controllable billing issue for our PJM hospitals.',
        },
      ],
    },
    {
      id: 'j6',
      name: 'Procurement, Channel & Continuous Assurance',
      persona:
        'Energy or facilities leader at contract renewal, post-audit handoff, or outsourced bill-pay — with OEM reps and advisors shaping the table.',
      personaArchetype:
        'Trane Technologies · JLL · AdventHealth · ENGIE Impact · NVIDIA',
      trigger:
        'A supply or broker contract window opens, an OEM needs a defensible bill-based load story, a professional audit ends, or a pay-and-aggregate processor delivers totals without variance explanation.',
      stagesWithoutCC: [
        {
          name: 'Discovery',
          summary:
            'Renewal calendars, channel proposals, and outsourced processors show up as episodic events — not as a continuous interpretation layer on the bill stack.',
          painPoint:
            'Attention goes to headline price and relationships. After M&V or a big study, nobody is chartered to own “next month” the same way.',
        },
        {
          name: 'Investigation',
          summary:
            'Teams compare quotes, riders, and usage fit in spreadsheets — in parallel with IT/security and incumbent renewal politics.',
          painPoint:
            'Independent rate-structure fit versus real load shape is hard to get. Advisor and channel incentives are not the same as the buyer’s.',
        },
        {
          name: 'Resolution',
          summary:
            'Sign, renew, or defer; equipment moves ahead with thin bill evidence; aggregator or broker relationships continue without a durable “why did this change?” owner.',
          painPoint:
            'Convenience wins over structural truth. Spend crosses materiality for the CFO without a persistent monitor tied to the same dataset.',
        },
      ],
      stagesWithCC: [
        {
          name: 'CC Product: Deal Center + Rate Analyst + Build Engine — Proactive alerts, Chat, channel-facing artifacts',
          capability:
            'Renewal-window briefings with tariff and usage-fit clarity; bill-derived load and variance stories for OEM justification; narrative for continuous monitoring after audits; natural language explanations of stacked charges for finance when a processor pays the line.',
          bounds:
            'Does not replace brokers, OEMs, or aggregators — documents fit and assumptions they can challenge. IT/security and SOC gates remain separate. Build Engine is channel-adjacent justification, not autonomous equipment dispatch.',
        },
      ],
      emotionalArcWithout: ['Boxed in', 'Skeptical', 'Dependent'],
      emotionalArcWith: ['Equipped', 'Defensible', 'Persistent'],
      productTag: 'FITS',
      evidenceQuotes: [
        {
          organization: 'Trane Technologies',
          d1TriggerId: 'REL-01',
          quote:
            'If I could generate an energy profile for a customer — that would make my job a lot easier. And it gives the customer a reason to act.',
        },
        {
          organization: 'Trane Technologies · JLL',
          d1TriggerId: 'REL-02',
          quote:
            'The broker has their interests. The customer needs to understand not just the headline price, but whether the rate structure fits their usage.',
        },
        {
          organization: 'Trane Technologies',
          d1TriggerId: 'P-01',
          quote:
            'The contract renewal window is the moment when customers actually pay attention to their energy costs.',
        },
        {
          organization: 'Trane Technologies',
          d1TriggerId: 'REL-03',
          quote:
            'After we do an audit, the client always asks: what about next month? I can come back quarterly — but they need something watching continuously.',
        },
        {
          organization: 'AdventHealth · ENGIE Impact',
          d1TriggerId: 'REL-07',
          quote:
            'ENGIE just aggregates and pays the bottom line. Being smarter — knowing how to interpret the bills and tell us why we should care — would be great.',
        },
        {
          organization: 'NVIDIA',
          d1TriggerId: 'R-08',
          quote:
            'ERCOT has 100+ REPs, an 87% commercial switching rate, and overlapping billing cycles during supplier transitions.',
        },
        {
          organization: 'Trane Technologies',
          d1TriggerId: 'REL-06',
          quote:
            'You’ve got guys like me that would love to use this, and then IT says no, no, no.',
        },
      ],
    },
  ],
  crossMapFindings: [
    'Every journey starts reactive. Stage 1 is routinely late discovery, and stress peaks in investigation and resolution — not always at the trigger.',
    'A single structural theme repeats: flying blind until problems surface with accumulated time and dollars lost.',
    'Expertise and memory concentrated in one long-tenured person creates brittle detection that disappears when they leave.',
    'The dual-audience fracture (ops wants usage; finance wants dollars) runs across higher ed and large commercial accounts.',
    'Three CC strengths span the maps: proactive dollar-ranked alerts, natural language investigation on shared data, and monetized CFO-ready outputs.',
    'The honest cross-cutting hole is identified-vs-realized recovery. Faster evidence does not equal guaranteed refunds or credits.',
    'Renewal, channel, and outsourced-pay moments create receptivity — but buyers still need independent structure-and-usage fit and continuity after consultant visits.',
  ],
  productHonesty: [
    'Ships now: Proactive alerts to users, Chat investigation, invoice ingestion with strong site-invoice association, anomaly flagging from invoice-level data, and tariff/contract scenario analysis from Rate Analyst. Deal Center supports procurement and renewal context (budget journey j5 and procurement journey j6).',
    'Roadmap / extends: automated PUC docket monitoring tied to portfolio impact; deep campus chargeback (district energy disaggregation, allocation logic, ERP paths); richer forecasting/M&V baselines; multi-year capital ROI ranking.',
    'Hard boundary: CC spots and assists. It does not autonomously resolve disputes, secure credits, or replace human utility and executive politics.',
    'Proof gaps: documented recovered-dollar case studies; optional net-new scans like long-held deposit recovery and confirmed water-invoice ingestion breadth.',
    'Positioning risk: investors and customers will ask whether identified errors become realized dollars. The product accelerates evidence, not guaranteed outcomes.',
  ],
}

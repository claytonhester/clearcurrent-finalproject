export const solutionsData = {
  'billing-intelligence': {
    name: 'Billing Intelligence',
    tagline:
      "AI that reads every line of every bill and finds what you're being overcharged.",
    heroHeadline: "Your utility bills have errors. You just haven't found them yet.",
    heroSubhead:
      "Clear Current's Billing Intelligence reads every line item on every bill across your portfolio and flags discrepancies your team doesn't have time to catch.",
    sections: [
      {
        headline: 'Line-item analysis at machine scale',
        body: "Enterprise utility bills are dense, inconsistent, and formatted differently by every provider. A single bill can span dozens of pages with hundreds of line items covering demand charges, capacity charges, transmission fees, regulatory adjustments, and taxes. Your energy team is skilled — but they're not reading every line of every bill every month. Nobody is. That's where the errors live.\n\nClear Current's Billing Intelligence reads every character. It cross-references each charge against your rate schedule, contract terms, and historical patterns. When something doesn't match — a demand charge that exceeds your contracted rate, a fee that was removed in your last renegotiation, a meter that's being billed at the wrong address — the system flags it with a full audit trail.",
      },
      {
        headline: 'Errors that compound silently',
        body: "The most expensive billing errors aren't the ones that appear once. They're the ones that repeat month after month because nobody caught the first instance. A misapplied rate class, a meter multiplier that's off by a factor of two, a capacity charge that doesn't reflect your actual peak — these errors compound.\n\nBilling Intelligence tracks patterns across time. It doesn't just find today's error — it finds the error that's been on your bill for fourteen months and calculates the total overpayment. That's the number your CFO needs to see.",
      },
      {
        headline: 'From detection to resolution',
        body: "Finding the error is only half the value. The other half is getting the money back. Clear Current doesn't just flag discrepancies — it prepares the dispute documentation with the evidence your utility provider needs to process a correction. Specific line items, date ranges, rate comparisons, and contract references are compiled automatically.\n\nYour team reviews and submits. The system tracks resolution status. When the credit appears on a future bill, Billing Intelligence confirms the correction was applied correctly. End to end.",
      },
    ],
    stats: [
      {
        value: 83,
        suffix: '%',
        label: 'problematic bills still mailed (R.I. PUC review)',
      },
      {
        value: 10,
        prefix: '$',
        suffix: 'M+',
        label: 'billing issues flagged in early pilots (internal)',
      },
      {
        value: 23,
        suffix: '+',
        label: 'primary operator interviews (2025–26)',
      },
    ],
    cta: "Ready to find what's hiding in your bills?",
  },

  'portfolio-command': {
    name: 'Portfolio Command Center',
    tagline:
      'A real-time operational view of your entire energy portfolio across every site.',
    heroHeadline: 'You manage hundreds of sites. You should see them in one place.',
    heroSubhead:
      'The Portfolio Command Center gives energy managers a single operational view of every site, every contract, every bill, and every opportunity — updated in real time.',
    sections: [
      {
        headline: 'One screen for your entire portfolio',
        body: "Enterprise energy management means juggling dozens of utility providers, hundreds of meters, thousands of bills, and contracts that expire on different cycles across different jurisdictions. The typical tool for managing this complexity is a spreadsheet. Or several spreadsheets. Maintained by a team that's already stretched thin.\n\nThe Portfolio Command Center replaces that fragmentation with a single, live interface. Every site in your portfolio is visible. Every contract's status is tracked. Every bill is ingested and analyzed automatically. When something needs attention — an expiring contract, an anomalous charge, a procurement window — it surfaces at the top.",
      },
      {
        headline: 'Operational intelligence, not just data',
        body: "Dashboards that show you historical consumption data are table stakes. What energy managers actually need is a system that tells them what to do next. The Portfolio Command Center prioritizes actions by financial impact. It doesn't just show you that a contract is expiring — it tells you the estimated cost of inaction and the recommended next step.\n\nThe view adapts to your role. Energy managers see operational priorities. Finance teams see cost trends and variance analysis. Executives see portfolio-level KPIs and the bottom-line impact of the team's work.",
      },
      {
        headline: 'Built for multi-site complexity',
        body: 'The Command Center is designed for organizations that operate across multiple utility territories, rate classes, and regulatory environments. It normalizes data across providers so you can compare apples to apples — cost per square foot, cost per kWh, cost per degree day — regardless of how each utility formats their bills.\n\nWhen you acquire a new facility, the onboarding process is straightforward: ingest the bills, map the meters, and the system begins analysis immediately. No six-month implementation. No consulting engagement. Data in, intelligence out.',
      },
    ],
    stats: [
      {
        value: 2600,
        suffix: '+',
        label: 'sites in one multi-site chain we studied',
      },
      {
        value: 241,
        prefix: '$',
        suffix: 'B+',
        label: 'U.S. commercial building energy spend (est.)',
      },
      { value: 24, suffix: '/7', label: 'continuous portfolio monitoring' },
    ],
    cta: 'Ready to see your entire portfolio in one place?',
  },

  procurement: {
    name: 'Procurement Hub',
    tagline:
      'Issue RFPs, compare responses, and close PPAs without leaving the platform.',
    heroHeadline: "Energy procurement shouldn't take six months and a consultant.",
    heroSubhead:
      'The Procurement Hub streamlines the entire procurement cycle — from RFP creation to response comparison to contract execution — in one integrated workflow.',
    sections: [
      {
        headline: 'Procurement built for energy, not adapted from IT',
        body: "Most procurement tools were designed for office supplies and software licenses, then awkwardly extended to handle energy. They don't understand rate structures, demand charges, escalation clauses, renewable energy credits, or the difference between a fixed-rate contract and a block-and-index structure.\n\nClear Current's Procurement Hub was built from the ground up for energy procurement. It speaks the language your team speaks. When you create an RFP, the system knows what fields matter for your specific utility territory and rate class. When responses come back, the comparison isn't just price — it's total cost of ownership including demand charges, capacity charges, and regulatory pass-throughs.",
      },
      {
        headline: 'Apples-to-apples comparison at scale',
        body: 'Comparing energy proposals is notoriously difficult because providers structure their offers differently. One bidder quotes a flat rate. Another quotes a base rate with a demand charge rider. A third offers a block structure with seasonal adjustments. Your team spends weeks normalizing these into a comparable format.\n\nThe Procurement Hub normalizes automatically. Every proposal is converted into a standardized total-cost view based on your actual load profile. You see what each offer actually costs you — not what the bidder wants you to think it costs. Side-by-side comparison takes minutes, not weeks.',
      },
      {
        headline: 'From RFP to signed contract',
        body: "The Procurement Hub manages the full lifecycle. Create RFPs from templates or from scratch. Distribute to your preferred suppliers. Receive and normalize responses. Score and rank by your criteria. Negotiate terms within the platform. Execute contracts with full audit trail.\n\nWhen the contract is signed, it flows directly into the Portfolio Command Center and Billing Intelligence modules. Contract terms become the baseline against which every future bill is audited. There's no handoff gap, no re-entry, no lost institutional knowledge.",
      },
    ],
    stats: [
      {
        value: 2.5,
        suffix: ' yr',
        label: 'buyer-reported enterprise software approval (example)',
        decimals: 1,
      },
      {
        value: 23,
        suffix: '+',
        label: 'interviews informing procurement + finance workflows',
      },
      {
        value: 100,
        suffix: '+',
        label: 'accounts visible to advisors we interviewed (region)',
      },
    ],
    cta: 'Ready to streamline your energy procurement?',
  },
}

export const solutionSlugs = Object.keys(solutionsData)

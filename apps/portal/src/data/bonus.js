/** Bonus deliverables: competitive landscape, pricing insights, AI interaction flows, and supplementary analysis. */
export const bonus = {
  intro:
    'Supplementary deliverables drawn from the 16 interviews: a competitive landscape of incumbent tools, pricing model analysis, and sample AI chat interactions based on questions interviewees said they would actually ask.',
  sections: [
    {
      id: 'competitive-landscape',
      title: 'Competitive landscape',
      status: 'final',
      body: `**Bill-pay processors (data custodians):**
- **ENGIE Impact** — Used by Panda and AdventHealth. Outsourced bill receipt, validation, and payment. Strong data position but limited interpretive intelligence. Walt Taylor: "It would be great if Engie would incorporate a large language model." Adam Zavadsky positions ENGIE's moat as data collection, not analytics.
- **NG Insight** — Used by Panda for exception monitoring. Threshold-based anomaly detection with historical data (10+ years). Processes ~10,000 bills/month for Panda alone. Uses Arcadia for electronic utility feeds.
- **GET / Get Choice** — Used by Bon Secours Mercy Health. Bill processing with some AI anomaly detection. Ann Walston manages ~2,000 bills/month through GET.

**Analytics & benchmarking platforms:**
- **EnergyCAP** — Used by Texas State. Portfolio energy management with billing, budgeting, and reporting. Andee Chamberlain noted overlap with Clear Current concept ("sounds kind of like what we already have") but acknowledged gaps in district energy, AI, and chat-based interaction.
- **Energy Print** — Used by Houston Methodist. Benchmarking, bill analytics, and Energy Star compliance. Sean Sevy noted its forecasting tool is "a little bit weaker" for growing systems.
- **Peer AI (Constellation)** — Used by Ascension/Medxcel. Bill analytics with anomaly detection and benchmarking. Scott Czubkowski questions whether some "AI" features are actually rules-based.

**Adjacent players:**
- **Arcadia** — Data intermediary providing electronic utility feeds. Used by ENGIE (per Walt Taylor). Dashboard-focused but positioned more as infrastructure than end-user analytics.
- **SkySpark** — Used by Intermountain Health (14 billion data points). BAS analytics and fault detection. Strong on equipment-side diagnostics but does not address billing or procurement.
- **Trane / BrainBox AI** — HVAC optimization and building controls. AdventHealth has been blocked from implementation for 2.5 years due to IT/cybersecurity concerns.

**Clear Current's differentiation:** None of these tools connect metering, billing, and contract data into a single interpretive layer. Bill processors hold data but lack intelligence. Analytics platforms analyze but don't reconcile to contracts. Clear Current occupies the "reconcile and explain" gap that every interviewee described.`,
    },
    {
      id: 'pricing-insights',
      title: 'Pricing model analysis',
      status: 'final',
      body: `Pricing model preferences varied by organization size, stability, and procurement maturity:

**Subscription (SaaS):**
Marc Spieler (NVIDIA): "If the bills are consistently wrong, they'll want a subscription." Best for recurring value delivery where error patterns are systemic. Scott Czubkowski mentioned Peer AI charges ~$7/bill as a subscription reference point.

**Savings-share / Performance-based:**
Marc Spieler: "As soon as they see you're on a trajectory to save them 20 million bucks, they'll push for fixed fee." Gain-share works for initial adoption (low friction, aligned incentives) but large customers will renegotiate once savings are proven. Property tax analogy: 50% savings share is standard in adjacent industries.

**Capital purchase / Ownership:**
Roger Goldstein: "My best value in ROI is almost always capital purchase of assets." Stable, well-capitalized companies prefer owning savings directly. Panda evaluates both models but leans toward ownership for long-term efficiency.

**Embedded / White-label:**
Marc Spieler suggested a low-cost embedded module (~$3/mo) integrated into existing billing or ERP systems (Oracle, SAP, QuickBooks). This reaches the widest addressable market but generates lowest per-account revenue.

**Recommendation:** Offer both subscription and savings-share with a contractual flip mechanism. Lead with savings-share for new customer acquisition (proves value), then convert to subscription as the relationship matures. Consider white-label partnerships with bill-pay processors for scale.`,
    },
    {
      id: 'ai-interaction-flows',
      title: 'Sample AI chat interactions',
      status: 'final',
      body: `Based on questions interviewees said they would actually ask an AI energy management tool:

**Roger Goldstein (Panda):**
"Is any store's electricity usage higher or lower than it's been in the last three months?" → Triggers cross-portfolio anomaly scan with location-level drill-down.
"Show me all deposits we've paid that haven't been refunded." → Deposit tracking and recovery workflow.

**Phil Combs (Trane):**
"Pull the last 24 months for this meter and break out cost, demand, and consumption. Are there statistically significant month-to-month changes?" → Time-series analysis with statistical testing.
"What regulatory filings are pending that affect my rate class in the next 6 months?" → Regulatory monitoring feed.
"Which tariff is better for this site—compare my current rate to alternatives." → Rate class optimization.

**Scott Czubkowski (Ascension):**
"Why is my utility bill not matching my budget?" → Variance attribution in plain English.
"Is my building using more energy than a sister building?" → Peer benchmarking across the portfolio.

**Andee Chamberlain (Texas State):**
"Who are our biggest energy users?" → EUI ranking across buildings.
"What is our energy use per person?" → Normalized metrics for sustainability reporting.

**Ann Walston (Bon Secours):**
"Where should I invest my next capital dollar for maximum energy savings?" → Portfolio-level ROI ranking across hospitals.

**Sean Sevy (Houston Methodist):**
"Forecast next year's energy cost assuming the new campus wing opens in Q3." → Growth-parameterized scenario modeling.

These interactions validate the chat-based interface as a core UX paradigm—not a nice-to-have. Users across every vertical described wanting to ask natural-language questions and receive answers tied to specific dollars and obligations.`,
    },
    {
      id: 'gtm-segmentation',
      title: 'Go-to-market segmentation',
      status: 'final',
      body: `Jamare Bates (JLL) provided the clearest segmentation framework:

**Enterprise (Fortune 200+):** Builds or acquires internally. Long sales cycles, high security requirements (SOC 2, data residency). AdventHealth's 2.5-year IT security review for BrainBox illustrates the timeline. Potential acquirer of Clear Current technology, not a typical subscription buyer.

**Mid-market (50–500 locations):** The sweet spot. Large enough for meaningful savings, small enough to lack internal analytics capacity. Panda (2,600 locations) and Ascension ($265M utility spend) sit at the upper boundary. These organizations outsource bill pay but lack the intelligence layer.

**Small commercial (< 50 locations):** ROI may not justify platform adoption. Marc Spieler suggested embedded pricing ($3/mo) or white-label through existing billing systems for this segment.

**Channel strategy opportunities:**
- Partner with ENGIE, NG Insight, or GET as an intelligence add-on to their bill-pay data
- White-label into ERP billing workflows (Oracle, SAP, QuickBooks)
- Channel through Trane and OEM service organizations who need customer energy profiles
- Utility-side deployment for billing accuracy and regulatory compliance`,
    },
  ],
  externalLinks: [],
}

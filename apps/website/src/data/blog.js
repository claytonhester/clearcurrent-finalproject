// TODO: replace with real blog content or CMS integration
export const blogPosts = [
  {
    slug: 'enterprise-energy-bills-wrong',
    title: 'Why enterprise energy bills are wrong more often than you think',
    category: 'Industry Insights',
    excerpt:
      "The average enterprise utility bill contains errors that persist for months. Here's why — and what the real cost of inaction looks like.",
    date: 'April 2026',
    body: `Every month, enterprises across the country receive utility bills that contain errors. Not edge cases. Not rounding discrepancies. Real, material billing errors that cost organizations thousands — sometimes tens of thousands — of dollars per month.

The industry data is striking. Studies consistently show that between 15% and 20% of enterprise utility bills contain errors of some kind. Some are small — a misapplied late fee, a rounding issue on a tax calculation. But many are significant: wrong rate classes, incorrect demand charge multipliers, fees that should have been removed after a contract renegotiation, meters billed to the wrong account.

The reason these errors persist is simple: nobody is looking. Enterprise energy teams are understaffed relative to the complexity of their portfolios. A single organization might receive hundreds of bills per month across dozens of utility providers, each with different formats, rate structures, and billing cycles. Manually auditing every line item on every bill every month is not feasible with human resources alone.

This is the gap that AI-powered bill auditing fills. Not by replacing energy managers, but by giving them a system that reads every line of every bill — automatically, continuously, and with perfect recall. When the system finds a discrepancy between what was charged and what should have been charged based on the rate schedule and contract terms, it flags it with a full audit trail.

The most expensive errors are the ones that repeat. A misapplied rate class doesn't correct itself. A demand charge multiplier that's off by a factor will be wrong next month too, and the month after that. The compounding effect of a single undetected error can reach six figures over a year.

The question isn't whether your bills have errors. The question is how long those errors have been there.`,
  },
  {
    slug: 'ai-energy-manager',
    title: 'The AI energy manager: what it actually does and how it works',
    category: 'Product',
    excerpt:
      "AI in energy management isn't a buzzword — it's a specific set of capabilities that replace manual processes. Here's what that looks like in practice.",
    date: 'April 2026',
    body: `The phrase "AI-powered" has been applied to so many products that it's lost most of its meaning. In energy management, it's worth being specific about what AI actually does — and doesn't do.

Clear Current's platform uses AI across three distinct layers, each designed to replace a specific set of manual processes that enterprise energy teams currently perform.

The first layer is conversational. Energy managers and finance teams can ask natural language questions about their energy portfolio and receive instant, cited answers. "What was our demand charge at the downtown campus last quarter?" "Which sites had the highest year-over-year cost increase?" "Are we being billed at the correct rate class at facility 47?" These questions currently require someone to dig through bills, spreadsheets, and contract files. The AI answers them in seconds, with citations back to the source documents.

The second layer is proactive monitoring. The system continuously analyzes every data point in your portfolio — bills, contracts, tariffs, consumption patterns — and surfaces anomalies and opportunities without being asked. A sudden spike in demand charges at one site. A contract approaching renewal with unfavorable terms. A rate change from a utility that affects your bottom line. These alerts are prioritized by financial impact, not chronological order.

The third layer is autonomous action. When the system identifies a billing error, it doesn't just flag it — it prepares the dispute documentation. When a contract needs renewal analysis, it runs the comparison. When procurement is needed, it can generate RFP templates based on your portfolio's requirements.

None of these capabilities require the AI to be creative or speculative. They require it to be precise, thorough, and tireless — qualities that are well-suited to current AI technology and poorly suited to human teams that are already stretched thin.

The result is not a replacement for energy managers. It's a multiplication of their capacity. The work that took a team of five analysts a week can be done continuously, automatically, and with a complete audit trail.`,
  },
  {
    slug: 'billing-errors-deregulated-markets',
    title:
      "Billing errors in deregulated markets: the audit that doesn't happen often enough",
    category: 'Technical',
    excerpt:
      "Deregulated energy markets create unique billing complexity — and unique opportunities for errors to go undetected. Here's what to look for.",
    date: 'April 2026',
    body: `Deregulated energy markets were designed to give consumers choice. In practice, they also give utility providers significantly more opportunities to bill incorrectly.

In a regulated market, an enterprise typically has one utility provider per site, with a rate structure approved by the public utility commission. The billing is relatively straightforward — consumption times rate, plus demand charges, plus taxes and fees. Errors still occur, but the surface area is limited.

In a deregulated market, the picture is far more complex. The electricity supply is unbundled from distribution. Customers choose their generation supplier independently from their utility. Bills arrive from multiple entities for the same meter. Rate structures can include fixed rates, indexed rates, block-and-index structures, and hybrid arrangements. Capacity charges, transmission charges, and ancillary service charges add further complexity.

Each of these layers is an opportunity for error. The most common errors in deregulated markets include: incorrect application of contracted supply rates, especially after contract amendments or renewals; misallocation of capacity tags that inflate demand-related charges; double-billing of charges that appear on both the supply and distribution bills; and failure to apply negotiated credits or rebates.

The challenge is that auditing these bills requires understanding both the supply contract and the distribution tariff, and being able to reconcile charges across multiple billing entities. Most energy teams don't have the bandwidth to do this for every bill every month.

Automated bill auditing is particularly valuable in deregulated markets because the complexity is exactly the kind of problem that AI handles well: structured data, clear rules, and a need for exhaustive comparison across large volumes of documents. Every charge on every bill is compared against the applicable rate schedule, contract terms, and historical patterns. When something doesn't match, it's flagged.

The ROI in deregulated markets tends to be higher than in regulated markets, precisely because the error surface area is larger. Organizations operating in states like Texas, Pennsylvania, Ohio, Illinois, and New York — where retail choice is available — should consider automated auditing a baseline requirement, not a nice-to-have.`,
  },
]

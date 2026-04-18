export const industriesData = {
  'higher-education': {
    name: 'Higher Education',
    heroHeadline:
      'Your campus energy bills are more complex than your consultants realize.',
    heroSubhead:
      'Universities manage sprawling, multi-meter campuses with bills from multiple providers, complex chargeback models, and procurement cycles that never align. Clear Current was built for exactly this level of complexity.',
    painPoints: [
      {
        headline: 'Campus chargeback is broken',
        body: "Allocating energy costs across departments, buildings, and auxiliary services is the most complained-about process in higher ed energy management. The data is inconsistent, the methodology is disputed, and the manual effort is enormous. Clear Current automates chargeback with accurate, auditable allocation based on actual metered consumption — not estimates, not square footage proxies, not last year's numbers adjusted for inflation.",
      },
      {
        headline: 'EnergyCAP shows you data. Clear Current acts on it.',
        body: "EnergyCAP is the dominant incumbent in higher education energy management. It's a capable database. But it doesn't read your bills for errors. It doesn't flag when you're being charged the wrong rate class. It doesn't prepare dispute documentation. It doesn't compare procurement responses or manage your contract lifecycle. Clear Current does all of this — and it integrates the data EnergyCAP already has.",
      },
      {
        headline: 'Multi-provider complexity at scale',
        body: 'A single university campus can have meters from three or four different utility providers, each with different rate structures, billing cycles, and formats. Add satellite campuses, research facilities, and hospital systems, and the complexity multiplies. Clear Current normalizes all of it into a single view — regardless of provider, format, or jurisdiction.',
      },
    ],
    capabilities: [
      {
        headline: 'Automated bill audit across every campus meter',
        body: 'Every bill from every provider is ingested, parsed, and audited against your rate schedules and contract terms. Errors are flagged with dispute-ready documentation.',
      },
      {
        headline: 'Accurate chargeback allocation',
        body: 'Allocate costs to departments and buildings based on actual consumption data. Generate reports that stand up to internal audit.',
      },
      {
        headline: 'Procurement support for complex university RFPs',
        body: 'Create and manage energy RFPs that reflect the unique needs of higher education — from distributed generation to demand response programs to renewable energy credits.',
      },
    ],
    quote: {
      text: 'I care more about demand and usage… the bill processing folks care more about the bottom line numbers.',
      attribution: 'Energy & water manager, large public university (primary research)',
    },
  },

  healthcare: {
    name: 'Healthcare',
    heroHeadline:
      "Healthcare energy costs are critical. Your visibility into them shouldn't be optional.",
    heroSubhead:
      'Hospitals and health systems operate 24/7 facilities with massive energy footprints, district energy complexity, and regulatory requirements that make cost management uniquely challenging.',
    painPoints: [
      {
        headline: 'District energy creates billing blind spots',
        body: "Many hospital systems receive energy through district energy arrangements — centralized plants that distribute steam, chilled water, and electricity across multiple buildings. The billing for these services is opaque, the rate structures are unique, and the contracts are often legacy agreements that haven't been renegotiated in years. Clear Current audits district energy billing with the same rigor it applies to standard utility bills.",
      },
      {
        headline: '24/7 operations mean 24/7 exposure',
        body: 'Unlike commercial buildings that can shift loads to off-peak hours, hospitals operate critical systems around the clock. Demand charges are unavoidable and significant. A single billing error on a demand charge multiplier can cost tens of thousands of dollars per month — and persist for years without detection. Clear Current monitors demand charges continuously and flags anomalies in real time.',
      },
      {
        headline: 'Regulatory and sustainability pressure is growing',
        body: 'Healthcare systems face increasing pressure to reduce carbon emissions and report on sustainability metrics. Energy procurement decisions now require balancing cost, reliability, and environmental impact. Clear Current provides the data foundation for sustainability reporting and the procurement tools for evaluating renewable energy options.',
      },
    ],
    capabilities: [
      {
        headline: 'District energy and complex billing audit',
        body: 'Audit billing for district energy, co-generation, and non-standard utility arrangements with the same precision as standard bills.',
      },
      {
        headline: 'Demand charge monitoring and optimization',
        body: 'Track demand charges across all facilities and identify opportunities to reduce peak demand exposure without compromising patient care.',
      },
      {
        headline: 'Sustainability data for reporting and procurement',
        body: 'Consolidate energy data for ESG reporting and evaluate renewable energy procurement options with full cost-benefit analysis.',
      },
    ],
    quote: {
      text: 'Most customers are still reactive… even hospitals.',
      attribution: 'Channel advisor with 100+ commercial accounts (primary research)',
    },
  },

  'commercial-real-estate': {
    name: 'Commercial Real Estate',
    heroHeadline: "Your portfolio's energy costs are a black box. They don't have to be.",
    heroSubhead:
      'Commercial real estate operators manage energy across dozens or hundreds of properties with different utility providers, lease structures, and tenant arrangements. Clear Current gives you portfolio-level visibility and site-level precision.',
    painPoints: [
      {
        headline: "Portfolio-level visibility doesn't exist",
        body: 'Most CRE operators cannot answer a basic question: what is our total energy cost per square foot across the portfolio? The data lives in different systems, different formats, and different hands. Property managers handle bills locally. Regional teams compile reports quarterly. Corporate gets a lagging, aggregated view that masks the details. Clear Current consolidates everything in real time.',
      },
      {
        headline: 'Lease structures complicate cost recovery',
        body: "Triple-net, modified gross, full-service — every lease structure creates a different relationship between property owner and tenant when it comes to energy costs. Ensuring that the right costs are passed through to the right tenants, correctly and on time, is a manual process that's prone to error. Clear Current tracks lease terms alongside energy billing to ensure accurate cost recovery.",
      },
      {
        headline: 'Acquisition due diligence is slow and shallow',
        body: "When evaluating a property acquisition, energy cost analysis is typically limited to a summary of the last twelve months of bills. That's not an audit — it's a guess. Clear Current can ingest historical bills for a target property and deliver a full audit in days, identifying billing errors, rate optimization opportunities, and procurement risks before the deal closes.",
      },
    ],
    capabilities: [
      {
        headline: 'Portfolio-wide cost benchmarking',
        body: 'Compare energy costs across properties on a normalized basis — per square foot, per kWh, per degree day — regardless of utility provider or rate structure.',
      },
      {
        headline: 'Tenant billing and cost recovery automation',
        body: 'Track lease terms and automate the allocation and recovery of energy costs across tenant portfolios.',
      },
      {
        headline: 'Acquisition energy due diligence',
        body: 'Deliver comprehensive energy audits for target properties during due diligence, identifying cost risks and optimization opportunities before close.',
      },
    ],
    quote: {
      text: 'Energy decisions live between the engineer in the basement and finance on another coast.',
      attribution: 'Global head of engineering, hospitality portfolio (primary research)',
    },
  },
}

export const industrySlugs = Object.keys(industriesData)

export const productModules = {
  modules: [
    {
      id: 'bill-error-detection',
      title: 'Bill Error Detection',
      status: 'placeholder',
      badge: 'High Priority',
      problem:
        'Invoices arrive with line items that do not match expected drivers; teams spend weeks reconciling across AP, supplier portals, and spreadsheets.',
      persona: 'Energy manager + AP analyst',
      businessValue:
        'Reduces leakage and accelerates resolution; quantifies dollars in dispute with traceable evidence.',
      frequency: 'high',
      differentiation:
        'Unlike EnergyCAP alone or static spreadsheets, ties obligation → meter → bill line with exception alerts.',
      mvpScope:
        'Ingest bills + key contract terms; flag top variances; export a finance-ready reconciliation pack.',
      quoteId: 'don-2',
    },
    {
      id: 'contract-intelligence',
      title: 'Contract Intelligence',
      status: 'placeholder',
      badge: 'MVP Ready',
      problem:
        'Contract PDFs and amendments live outside operational systems; renewals surprise teams with rider changes.',
      persona: 'Procurement lead',
      businessValue:
        'Surfaces exposure before signature; aligns negotiation to actual usage patterns.',
      frequency: 'medium',
      differentiation:
        'Moves beyond document storage by linking clauses to billed outcomes and calendar milestones.',
      mvpScope:
        'Clause tagging for key riders; renewal calendar; alert on volume thresholds.',
      quoteId: 'don-1',
    },
    {
      id: 'budget-forecasting',
      title: 'Budget Forecasting',
      status: 'placeholder',
      badge: 'High Priority',
      problem:
        'Budget season requires a coherent story for finance; energy teams fight last-year baselines that no longer reflect reality.',
      persona: 'Director of facilities + finance partner',
      businessValue:
        'Defensible forecast with drivers and scenarios; fewer rounds of rework before board review.',
      frequency: 'high',
      differentiation:
        'Combines metering trends with bill actuals and procurement scenarios—less manual stitching than spreadsheets.',
      mvpScope:
        'Driver-based forecast for top sites; export to finance template; version history.',
      quoteId: 'phil-1',
    },
    {
      id: 'slot-4',
      title: 'Module slot (TBD)',
      status: 'placeholder',
      badge: 'TBD',
      problem: '—',
      persona: '—',
      businessValue: '—',
      frequency: '—',
      differentiation: '—',
      mvpScope: '—',
      quoteId: null,
    },
    {
      id: 'slot-5',
      title: 'Module slot (TBD)',
      status: 'placeholder',
      badge: 'TBD',
      problem: '—',
      persona: '—',
      businessValue: '—',
      frequency: '—',
      differentiation: '—',
      mvpScope: '—',
      quoteId: null,
    },
  ],
}

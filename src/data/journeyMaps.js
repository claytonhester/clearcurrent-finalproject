export const journeyMaps = {
  journeys: [
    {
      id: 'jem',
      status: 'placeholder',
      persona: {
        name: 'Jordan Lee',
        title: 'Energy Manager',
        companyType: 'Regional industrial manufacturer',
        painLevel: 'High',
      },
      trigger: 'Unexpected electricity variance vs. production plan',
      clearCurrentStageId: 's4',
      emotionalSeries: [62, 78, 55, 40, 35, 28],
      quoteId: 'don-1',
      stages: [
        {
          id: 's1',
          title: 'Notice spike',
          shortLabel: 'Trigger',
          description:
            'Finance forwards the invoice; operations sees a demand charge jump without a clear operational explanation.',
        },
        {
          id: 's2',
          title: 'Triage in spreadsheets',
          shortLabel: 'Actions',
          description:
            'Analyst pulls interval data into a workbook and emails peers for “what changed last month.”',
        },
        {
          id: 's3',
          title: 'Supplier + AP loop',
          shortLabel: 'Decision',
          description:
            'Supplier points to a rider; AP wants proof before accrual adjustments. Time is lost reconciling versions.',
        },
        {
          id: 's4',
          title: 'Reconcile to obligation',
          shortLabel: 'Output',
          description:
            'Clear Current ties the meter interval, contract clause, and line item into a single narrative for sign-off.',
        },
        {
          id: 's5',
          title: 'Implement guardrail',
          shortLabel: 'Follow-up',
          description:
            'A threshold alert is set for next month—still manual if systems remain disconnected.',
        },
        {
          id: 's6',
          title: 'Report to leadership',
          shortLabel: 'Output',
          description:
            'Leadership receives a short brief with drivers and dollars—credibility hinges on traceability.',
        },
      ],
    },
    {
      id: 'uni',
      status: 'placeholder',
      persona: {
        name: 'Sam Rivera',
        title: 'Director of Facilities',
        companyType: 'Public university',
        painLevel: 'Medium',
      },
      trigger: 'Trustees ask for auditable sustainability metrics',
      clearCurrentStageId: 'u4',
      emotionalSeries: [45, 52, 68, 50, 32, 42],
      quoteId: 'andee-1',
      stages: [
        {
          id: 'u1',
          title: 'Reporting deadline',
          shortLabel: 'Trigger',
          description:
            'Sustainability office needs campus-wide numbers that align with utility bills and metering.',
        },
        {
          id: 'u2',
          title: 'Data collection',
          shortLabel: 'Actions',
          description:
            'Teams pull exports from BAS, utilities, and spreadsheets; mismatches appear at the meter boundary.',
        },
        {
          id: 'u3',
          title: 'Internal review',
          shortLabel: 'Decision',
          description:
            'Finance challenges assumptions; facilities needs a single reconciled chain of evidence.',
        },
        {
          id: 'u4',
          title: 'Publish traceable metrics',
          shortLabel: 'Output',
          description:
            'Clear Current becomes the reconciliation layer that connects metering, billing, and procurement.',
        },
        {
          id: 'u5',
          title: 'Board communication',
          shortLabel: 'Output',
          description:
            'Narrative is simplified for trustees: drivers, dollars, and next steps.',
        },
        {
          id: 'u6',
          title: 'Operational follow-through',
          shortLabel: 'Follow-up',
          description:
            'Projects are sequenced with cash and carbon constraints for the next fiscal cycle.',
        },
      ],
    },
    {
      id: 'shell-hospital',
      status: 'placeholder',
      persona: {
        name: 'TBD — Hospital network',
        title: 'Energy & infrastructure',
        companyType: 'Healthcare system',
        painLevel: 'TBD',
      },
      trigger: 'TBD',
      clearCurrentStageId: null,
      emotionalSeries: [50, 50],
      quoteId: null,
      stages: [
        {
          id: 'h1',
          title: 'Stage 1',
          shortLabel: 'TBD',
          description: 'Journey outline to be completed when interview notes are finalized.',
        },
        {
          id: 'h2',
          title: 'Stage 2',
          shortLabel: 'TBD',
          description: '—',
        },
      ],
    },
    {
      id: 'shell-retail',
      status: 'placeholder',
      persona: {
        name: 'TBD — Retail portfolio',
        title: 'Operations',
        companyType: 'Retail',
        painLevel: 'TBD',
      },
      trigger: 'TBD',
      clearCurrentStageId: null,
      emotionalSeries: [50],
      quoteId: null,
      stages: [
        {
          id: 'r1',
          title: 'Stage 1',
          shortLabel: 'TBD',
          description: 'Journey outline to be completed when interview notes are finalized.',
        },
      ],
    },
  ],
}

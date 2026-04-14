// TODO: confirm with John/Dan — real press coverage URLs
export const pressItems = [
  {
    publication: 'Business Wire',
    headline:
      'Clear Current Technologies Raises $4.275M Seed Round to Bring AI to Enterprise Energy Management',
    date: 'May 2025',
    url: '#', // TODO: real URL
  },
  // TODO: add CDL-Texas mention and other coverage when available
]

// Fallback: show investors if fewer than 3 press items at launch
export const showInvestorFallback = pressItems.length < 3

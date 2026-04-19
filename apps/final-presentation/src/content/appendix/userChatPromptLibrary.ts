/**
 * User Chat Prompt Library — questions participants said they would ask (or
 * would want to ask) an AI energy / bill intelligence tool. Imperatives and
 * product “insights” are omitted; only interrogative-style chat prompts are kept.
 * Wording is adapted into first-person chat style; substance matches transcript answers.
 *
 * Completeness: cross-checked against research/outputs/primary/00_primary_corpus.txt
 * (all Call Transcript sources). Interviews with no analogous elicitation: ENGIE
 * (Zavadsky), NVIDIA (Spieler), Ascension (Czubkowski), JLL (Bates — channel ask
 * only), AdventHealth.
 */

export const CHAT_PROMPT_INDUSTRY_FILTERS = [
  { id: 'higher-ed', label: 'Higher education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'qsr', label: 'QSR & multi-site' },
  { id: 'channel', label: 'Channel (OEM / partner)' },
] as const

export type ChatPromptIndustryId = (typeof CHAT_PROMPT_INDUSTRY_FILTERS)[number]['id']

export function industryLabel(id: ChatPromptIndustryId): string {
  return CHAT_PROMPT_INDUSTRY_FILTERS.find((f) => f.id === id)?.label ?? id
}

export interface ChatPromptPersona {
  id: string
  name: string
  role: string
  organization: string
  /** Primary industry for filtering (interview account context) */
  industry: ChatPromptIndustryId
  /** Optional sub-context (persona slice within the industry) */
  vertical?: string
  /** Questions the buyer might type to the chatbot (no standalone “insights”) */
  prompts: string[]
}

export const USER_CHAT_PROMPT_PERSONAS: ChatPromptPersona[] = [
  {
    id: 'andi-ault',
    name: 'Andi Ault',
    role: 'Sr. Associate Director, Finance & Admin Services',
    organization: 'UT Austin (Utilities Finance)',
    industry: 'higher-ed',
    vertical: 'Finance / internal utilities',
    prompts: [
      'Which months did our effective purchased-energy rate swing because fixed vs volumetric cost components moved—and can you show me the math?',
      'Do we have the right meter and account setup for this building’s charges?',
      'Why is this cost dramatically higher than an equivalent site every single month?',
      'Are we being charged correctly? What billing anomalies should I send to our analysts?',
    ],
  },
  {
    id: 'ann-walston',
    name: 'Ann Walston',
    role: 'VP Acute Care Facilities Management',
    organization: 'Bon Secours Mercy Health',
    industry: 'healthcare',
    vertical: 'System facilities',
    prompts: [
      'Which accounts and meters map to which buildings—and which wing or addition is driving which meter?',
      'We grew by acquisition and additions—what feeds what so I’m not flying blind on the basics?',
      'Where are capacity charges crushing us and what’s driving ratchets / peak exposure in our region?',
      'Given our portfolio spend and constraints, where should we invest the next dollar to reduce energy consumption—biggest impact first?',
      'What’s the right ROI comparison between LEDs, HVAC upgrades, and tariff / rate work for our system?',
      'Where is our greatest opportunity to move the needle with the capital we already have allocated?',
    ],
  },
  {
    id: 'matt-wilson-intermountain',
    name: 'Matt Wilson',
    role: 'Manager, Remote Operations Center',
    organization: 'Intermountain Health',
    industry: 'healthcare',
    vertical: 'Operations / ROC',
    prompts: [
      'This room is hot—is this a new problem or has it been a chronic issue for months?',
      'For this hot-room ticket, what quick diagnostics should we run first: airflow, air handler, chilled water, or is it system-wide?',
      'What starter context from BAS should we attach to this ticket so the technician doesn’t re-discover what we already know?',
    ],
  },
  {
    id: 'ross-snow-intermountain',
    name: 'Ross Snow',
    role: 'Director, Energy Management',
    organization: 'Intermountain Health',
    industry: 'healthcare',
    vertical: 'Energy program',
    prompts: [
      'We see a symptom on this air-side equipment—which other subsystem or plant interaction is the more likely root cause?',
      'If I correlate symptoms across multiple pieces of equipment, do they point to a single failure elsewhere in the facility?',
      'Which interaction traces would take a human team days to follow—what’s a ranked hypothesis list with evidence from trend data?',
    ],
  },
  {
    id: 'sean-sevy',
    name: 'Sean Sevy',
    role: 'Director of Operations, System Facilities',
    organization: 'Houston Methodist',
    industry: 'healthcare',
    vertical: 'System facilities',
    prompts: [
      'Are we being billed correctly—and where might we be paying for things we shouldn’t?',
      'Benchmark us: what percentile are we in vs other healthcare organizations like ours?',
      'What performance tier should we target and what do our cost models look like if we get there?',
      'If we cut or shift load at this time of day, how much could we move the demand charge — give me scenarios, not just raw data.',
      'What are industry leaders achieving and where are they operating so we can compare?',
    ],
  },
  {
    id: 'roger-goldstein',
    name: 'Roger Goldstein',
    role: 'Executive Director, Facilities & Energy',
    organization: 'Panda Restaurant Group',
    industry: 'qsr',
    vertical: 'Corporate energy',
    prompts: [
      'Which stores have electric usage materially higher or lower than the last three months—what outliers should I investigate?',
      'What utility deposits do we have on file, what did we pay, and what refunds or credits should we have received by now?',
      'What rate or percentage changes hit our portfolio recently across utilities?',
      'Are we on the best rate class for each utility given our usage pattern—how does that compare to what we already re-study annually?',
    ],
  },
  {
    id: 'troy-nevells',
    name: 'Troy Nevells',
    role: 'Director of Engineering & Technical Services',
    organization: 'UT Austin',
    industry: 'higher-ed',
    vertical: 'District energy / central plant',
    prompts: [
      'If we lose central plant capacity or island the campus, which buildings or loads should we shed first based on criticality and building type?',
      'When frequency dips, what finer-grained BAS load relief would preserve research and cut dorms first instead of shedding whole buildings in big chunks?',
      'How do we tie prioritized load relief to each building’s automation system and operator playbooks?',
    ],
  },
  {
    id: 'walt-taylor',
    name: 'Walt Taylor',
    role: 'Energy Manager (contractor)',
    organization: 'Panda Restaurant Group',
    industry: 'qsr',
    vertical: 'Field / contractor',
    prompts: [
      'Why are these stores paying different effective electricity costs when an operator only sees total dollars on the P&L?',
      'What’s driving the spread—different utilities, contracted vs utility rates, usage trends, and peak demand rules?',
      'We have top 10 usage outliers—what can we actually do in operations to move each location?',
      'Water meter shows a 20-minute run at 11am—what should I ask the store to tell operator-driven use apart from equipment failure?',
    ],
  },
  {
    id: 'don-johnson',
    name: 'Don Johnson',
    role: 'CEM, Sr. Account Manager',
    organization: 'Trane Technologies',
    industry: 'channel',
    vertical: 'Account / CEM',
    prompts: [
      'Can you generate a full energy profile for this customer for the time period I specify?',
      'When did they hit their highest peak demand, and what drove it?',
      'Which month used the most kWh, and how did peak vs off-peak consumption compare?',
      'Where are we paying power-factor penalties, and would a quick capacitor-bank-style fix pencil?',
      'Given their actual load shape, are they on the wrong rate vs today’s time-of-use reality (e.g. EVs shifting peak)?',
    ],
  },
  {
    id: 'texas-state-andee',
    name: 'Andee Chamberlain',
    role: 'Energy & Water Conservation Manager',
    organization: 'Texas State University',
    industry: 'higher-ed',
    vertical: 'Conservation / utilities',
    prompts: [
      'Who are our biggest energy users across the portfolio?',
      'Rank every building by EUI per square foot and per person — where should we focus conservation?',
      'Where is our biggest bang for the buck on efficiency spend?',
    ],
  },
  {
    id: 'texas-state-carl',
    name: 'Carl Teague',
    role: 'Assistant Director, Maintenance',
    organization: 'Texas State University',
    industry: 'higher-ed',
    vertical: 'Maintenance',
    prompts: [
      'We held an off-hours event at the event center — how did consumption compare to a normal school day?',
      'If I give you the event schedule and estimated attendance in advance, what should we plan for next time?',
      'This recurring annual event is coming — how did last year’s load profile look so we can prepare?',
    ],
  },
  {
    id: 'texas-state-james',
    name: 'James Norton',
    role: 'Supervisor, Electrical Distribution',
    organization: 'Texas State University',
    industry: 'higher-ed',
    vertical: 'Electrical distribution',
    prompts: [
      'Can you alert me immediately when any building breaks from its normal usage baseline?',
      'This building jumped from typical usage X—is that a leak, equipment fault, or occupancy change?',
    ],
  },
]

import type { PersonaKey } from './types'

export interface PersonaMeta {
  key: PersonaKey
  label: string
  short: string
  role: 'ops' | 'finance' | 'exec' | 'blocker' | 'channel'
}

export const PERSONAS: PersonaMeta[] = [
  {
    key: 'energy-ops-manager',
    label: 'Energy / Operations Manager',
    short: 'Energy Ops',
    role: 'ops',
  },
  {
    key: 'finance-director',
    label: 'Finance Director / Controller',
    short: 'Finance',
    role: 'finance',
  },
  {
    key: 'sustainability-director',
    label: 'Sustainability Director',
    short: 'Sustainability',
    role: 'ops',
  },
  { key: 'cfo', label: 'CFO / VP Finance', short: 'CFO', role: 'exec' },
  {
    key: 'facilities-director',
    label: 'Facilities Director',
    short: 'Facilities',
    role: 'ops',
  },
  {
    key: 'it-security',
    label: 'IT / Security Gate',
    short: 'IT / Security',
    role: 'blocker',
  },
  {
    key: 'procurement',
    label: 'Procurement / Vendor Mgmt',
    short: 'Procurement',
    role: 'blocker',
  },
  {
    key: 'channel-partner',
    label: 'Channel / Advisory Partner',
    short: 'Channel',
    role: 'channel',
  },
]

export const PERSONA_MAP = Object.fromEntries(PERSONAS.map((p) => [p.key, p])) as Record<
  PersonaKey,
  PersonaMeta
>

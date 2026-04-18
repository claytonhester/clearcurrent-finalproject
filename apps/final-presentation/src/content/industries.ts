import type { IndustryKey } from './types'

export interface IndustryMeta {
  key: IndustryKey
  label: string
  short: string
  accent: string
}

export const INDUSTRIES: IndustryMeta[] = [
  { key: 'higher-ed', label: 'Higher Education', short: 'Higher Ed', accent: '#0a1628' },
  { key: 'healthcare', label: 'Healthcare', short: 'Healthcare', accent: '#b91c1c' },
  {
    key: 'restaurant-retail',
    label: 'Restaurant & Retail Multi-site',
    short: 'Restaurant',
    accent: '#b45309',
  },
  { key: 'hospitality', label: 'Hospitality', short: 'Hospitality', accent: '#7c3aed' },
  {
    key: 'commercial-real-estate',
    label: 'Commercial Real Estate',
    short: 'CRE',
    accent: '#0f766e',
  },
  {
    key: 'channel-advisory',
    label: 'Channel & Advisory',
    short: 'Channel',
    accent: '#1f2937',
  },
  { key: 'data-center', label: 'Data Centers', short: 'Data Centers', accent: '#374151' },
  {
    key: 'industrial',
    label: 'Industrial / Manufacturing',
    short: 'Industrial',
    accent: '#4b5563',
  },
]

export const INDUSTRY_MAP = Object.fromEntries(
  INDUSTRIES.map((i) => [i.key, i]),
) as Record<IndustryKey, IndustryMeta>

export type SourceKind =
  | 'writtenDeliverable'
  | 'primary-interview'
  | 'primary-company-card'
  | 'primary-quote-bank'
  | 'primary-contact-list'
  | 'primary-agent'
  | 'secondary-agent'
  | 'product-context'
  | 'pipeline'
  | 'external'
  | 'internal-claim'

export interface Source {
  id: string
  kind: SourceKind
  title: string
  file?: string
  anchor?: string
  url?: string
  author?: string
  note?: string
}

export type ClaimTag =
  | 'FITS'
  | 'EXTENDS'
  | 'NET-NEW'
  | 'INTERNAL-UNVERIFIED'
  | 'NEEDS-VERIFICATION'

export interface Claim {
  id: string
  text: string
  sourceIds: string[]
  tag?: ClaimTag
  caveat?: string
}

/** Buckets for the appendix Quote bank (theme + stable sort order). */
export type QuoteBankSectionKey =
  | 'billing-anomalies'
  | 'dual-audience'
  | 'reactive-incentives'
  | 'regulatory-timing'
  | 'buying-friction'
  | 'channel-investor-economics'
  | 'competitive-landscape'

export interface Quote {
  id: string
  text: string
  speaker: string
  role: string
  org: string
  sourceId: string
  industry?: string
  persona?: string
  attribution?: 'full' | 'initials' | 'paraphrase' | 'do-not-use'
  context?: string
  /** Appendix Quote bank grouping */
  quoteBankSection: QuoteBankSectionKey
}

export type IndustryKey =
  | 'higher-ed'
  | 'healthcare'
  | 'restaurant-retail'
  | 'channel-advisory'
  | 'data-center'
  | 'industrial'
  | 'hospitality'
  | 'commercial-real-estate'

export type PersonaKey =
  | 'energy-ops-manager'
  | 'finance-director'
  | 'sustainability-director'
  | 'cfo'
  | 'facilities-director'
  | 'it-security'
  | 'procurement'
  | 'channel-partner'

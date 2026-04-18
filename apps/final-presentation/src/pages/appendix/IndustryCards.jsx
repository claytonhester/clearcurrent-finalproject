import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { appendixEyebrow } from '../../navConfig.js'
import { PageHeader } from '../../components/shared/PageHeader.jsx'
import { SectionHeader } from '../../components/shared/SectionHeader.jsx'
import { COMPANY_CARD_DETAILS } from '../../content/appendix/companyCardsExpanded.ts'

const CARDS = [
  {
    id: 'cc-texas-state',
    org: 'Texas State University',
    industry: 'Higher Education',
    people: 'Andee Chamberlain · James Norton · Carl Teague',
    signal:
      '10x water-bill multiplier caught only by operational context; "it sounds like EnergyCAP" first-reaction; dual-audience structure (ops + bill processing) explicit.',
  },
  {
    id: 'cc-ut-austin-finance',
    org: 'UT Austin — Finance',
    industry: 'Higher Education',
    people: 'Andi Ault',
    signal:
      'Budget-rate-cycle gap (Mar submit vs. utility rate finalization). Does not want to interact with energy data. Endorses dual-audience architecture.',
  },
  {
    id: 'cc-ut-austin-ops',
    org: 'UT Austin — Operations',
    industry: 'Higher Education',
    people: 'Troy Nevells',
    signal:
      'Engineering-led operations; references AI-native load-forecasting student venture (Texas Energy Consultants).',
  },
  {
    id: 'cc-medxcel',
    org: 'Medxcel (Ascension)',
    industry: 'Healthcare',
    people: 'Scott Czubkowski',
    signal:
      '$7.2M polar-vortex absorbed after the fact; >$1M/yr in ghost-meter losses; threshold-based alerts miss baseline drift.',
  },
  {
    id: 'cc-bon-secours',
    org: 'Bon Secours Mercy Health',
    industry: 'Healthcare',
    people: 'Ann Walston',
    signal:
      'Portfolio procurement + invoice-volume pain. Enterprise procurement cycle. SOC 2 is a threshold.',
  },
  {
    id: 'cc-houston-methodist',
    org: 'Houston Methodist',
    industry: 'Healthcare',
    people: 'Sean Sevy',
    signal:
      'System-facilities operations; ERCOT-market buyer; potential higher-ed neighbor dynamic.',
  },
  {
    id: 'cc-intermountain',
    org: 'Intermountain Health',
    industry: 'Healthcare',
    people: 'Ross Snow · Matt Wilson · Bart Peacock',
    signal:
      'Centralized ROC + energy management function. Multi-site variance absorbed and investigated.',
  },
  {
    id: 'cc-adventhealth',
    org: 'AdventHealth',
    industry: 'Healthcare',
    people: 'Scott Sukits · John Culver',
    signal:
      'Named 2.5-year cycle to approve new software vendor. IT/security posture is decisive.',
  },
  {
    id: 'cc-panda-goldstein',
    org: 'Panda Restaurant Group — Goldstein',
    industry: 'Restaurant multi-site',
    people: 'Roger Goldstein',
    signal:
      "Baseline-drift absorbed a neighbor's bill for a year. Offered intro to NG Insight.",
  },
  {
    id: 'cc-panda-taylor',
    org: 'Panda Restaurant Group — Taylor',
    industry: 'Restaurant multi-site',
    people: 'Walt Taylor',
    signal:
      'Contracted energy manager across 1,000s of sites; sewer/water reconciliation pain.',
  },
  {
    id: 'cc-hyatt',
    org: 'Hyatt',
    industry: 'Hospitality',
    people: 'Randy Dawes',
    signal:
      'Energy decisions live between the engineer in the basement and finance on another coast.',
  },
  {
    id: 'cc-jll',
    org: 'JLL',
    industry: 'CRE',
    people: 'Jamare Bates',
    signal:
      'Landlord/tenant cost-split asymmetry; WatchWire incumbency recognized; GRESB-driven selection calendar.',
  },
  {
    id: 'cc-nvidia-spieler',
    org: 'NVIDIA',
    industry: 'Channel / advisory',
    people: 'Marc Spieler',
    signal:
      'Identified-vs-recovered question is the investor gating question. Warned on savings-share trap.',
  },
  {
    id: 'cc-engie-zavadsky',
    org: 'ENGIE Impact',
    industry: 'Channel / services',
    people: 'Adam Zavadsky',
    signal:
      'Services processor posture; analytics layer underbuilt; natural partner for corporate multi-site.',
  },
  {
    id: 'cc-trane-johnson',
    org: 'Trane Technologies — Johnson',
    industry: 'Channel / advisory',
    people: 'Don Johnson',
    signal:
      'Cross-industry reactive posture ("even hospitals"). Market-intelligence distribution node.',
  },
  {
    id: 'cc-trane-combs',
    org: 'Trane Technologies — Combs',
    industry: 'Channel / advisory',
    people: 'Phil Combs',
    signal:
      'PUC/board and rate-case surveillance (Combs); "tyranny of the urgent" on reactive posture; IT-gate quote.',
  },
]

export function IndustryCards() {
  const [openId, setOpenId] = useState(null)

  return (
    <article className="flex flex-col gap-8">
      <PageHeader
        eyebrow={appendixEyebrow('app-industry-cards')}
        title="Primary company cards"
        lede="One card per interview account. Open a card for a concise diligence snapshot and the main interview-derived findings — distilled from the full primary company cards in research."
      />

      <SectionHeader number={1} title={`${CARDS.length} primary interview cards`} />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {CARDS.map((c) => {
          const detail = COMPANY_CARD_DETAILS[c.id]
          const isOpen = openId === c.id

          return (
            <div
              key={c.id}
              className={`evidence-card flex flex-col gap-0 p-0 ${isOpen ? 'ring-1 ring-cc-navy/15' : ''}`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : c.id)}
                className="flex w-full flex-col gap-2 rounded-lg p-4 text-left transition-colors hover:bg-cc-pale-gray/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-navy"
                aria-expanded={isOpen}
                aria-controls={`card-detail-${c.id}`}
                id={`card-trigger-${c.id}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-cc-yellow">
                    {c.industry}
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 flex-shrink-0 text-cc-mid-gray transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden
                  />
                </div>
                <h3 className="text-[15px] font-bold leading-snug text-cc-navy">
                  {c.org}
                </h3>
                <div className="text-[11px] font-semibold text-cc-mid-gray">
                  {c.people}
                </div>
                <p className="text-[12.5px] leading-snug text-cc-dark-text">{c.signal}</p>
                <span className="text-[11px] font-medium text-cc-navy underline decoration-dotted underline-offset-2">
                  {isOpen ? 'Hide diligence detail' : 'View diligence detail'}
                </span>
              </button>

              {isOpen && detail ? (
                <div
                  id={`card-detail-${c.id}`}
                  role="region"
                  aria-labelledby={`card-trigger-${c.id}`}
                  className="border-t border-cc-border/70 bg-cc-pale-gray/30 px-4 pb-4 pt-3"
                >
                  <p className="mb-3 text-[12px] font-medium leading-snug text-cc-navy">
                    {detail.snapshot}
                  </p>
                  <p className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
                    Interview & diligence highlights
                  </p>
                  <ul className="list-disc space-y-2 pl-4 text-[12.5px] leading-snug text-cc-dark-text">
                    {detail.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </article>
  )
}

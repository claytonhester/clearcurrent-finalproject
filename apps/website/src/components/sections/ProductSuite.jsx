import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FileSearch,
  LayoutDashboard,
  ShoppingCart,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { fadeUp, stagger, viewportOptions } from '../../lib/motion'
import SectionLabel from '../ui/SectionLabel'

const modules = [
  {
    icon: FileSearch,
    name: 'Billing Intelligence',
    description:
      "AI that reads every line of every bill and finds what you're being overcharged. Catches errors your team doesn't have time to look for.",
    href: '/solutions/billing-intelligence',
    featured: true,
    visual: 'billing',
  },
  {
    icon: LayoutDashboard,
    name: 'Portfolio Command Center',
    description:
      'A real-time operational view of your entire energy portfolio across every site. One screen, every decision.',
    href: '/solutions/portfolio-command',
    visual: 'dashboard',
  },
  {
    icon: ShoppingCart,
    name: 'Procurement Hub',
    description:
      'Issue RFPs, compare responses, and close PPAs without leaving the platform.',
    href: '/solutions/procurement',
    visual: 'procurement',
  },
  {
    icon: Layers,
    name: 'Platform Overview',
    description: 'Three layers of AI that manage your energy spend automatically.',
    href: '/platform',
    visual: 'platform',
  },
]

function CardVisual({ type }) {
  if (type === 'billing') {
    return (
      <div className="mt-6 rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.06] p-4">
        {[0, 1, 2, 3].map((i) => {
          const isError = i === 1
          return (
            <div
              key={i}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg mb-1.5 ${isError ? 'bg-[var(--gold)]/[0.08] border border-[var(--gold)]/20' : ''}`}
            >
              <div
                className={`w-2 h-2 rounded-full ${isError ? 'bg-[var(--gold)]' : 'bg-white/20'}`}
              />
              <div className="flex-1 h-2.5 rounded bg-white/10" />
              <div className="w-16 h-2.5 rounded bg-white/[0.06]" />
              {isError && (
                <span className="text-[9px] font-bold text-[var(--gold)] tracking-wider">
                  ERROR
                </span>
              )}
            </div>
          )
        })}
      </div>
    )
  }

  if (type === 'dashboard') {
    return (
      <div className="mt-6 rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.06] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {['$2.4M', '147', '99.8%'].map((v, i) => (
            <div key={i} className="text-center py-2 rounded-lg bg-white/[0.04]">
              <div className="text-[var(--gold)] text-sm font-bold font-[var(--font-display)]">
                {v}
              </div>
              <div className="text-[8px] text-white/30 mt-0.5">metric</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 50, 80, 60, 75, 90, 70, 85, 95, 80, 70].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[var(--gold)]/20 to-[var(--gold)]/5"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (type === 'procurement') {
    return (
      <div className="mt-6 rounded-xl overflow-hidden bg-white/[0.04] border border-white/[0.06] p-4">
        {['Vendor A', 'Vendor B', 'Vendor C'].map((name, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-2 px-3 rounded-lg mb-1.5 ${i === 0 ? 'bg-[var(--gold)]/[0.06] border border-[var(--gold)]/15' : ''}`}
          >
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[8px] text-white/40">
                {i + 1}
              </div>
              <span className="text-xs text-white/50">{name}</span>
            </div>
            <span
              className={`text-xs font-semibold ${i === 0 ? 'text-[var(--gold)]' : 'text-white/30'}`}
            >
              {i === 0 ? 'Best match' : '—'}
            </span>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default function ProductSuite() {
  return (
    <section className="relative bg-[var(--navy)] overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(245,197,24,0.03)_0%,transparent_70%)]" />
      {/* Top gradient transition */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--off-white)] to-transparent z-10" />

      <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pb-24 lg:pb-[120px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mb-16 max-w-xl"
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Solutions</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-[52px] leading-[1.1] tracking-[-0.02em] text-white"
          >
            One platform. <span className="text-white/50">Every energy decision.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg text-white/50 font-[var(--font-sans)]"
          >
            Built for the complexity of real enterprise energy management.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-12 gap-5"
        >
          {modules.map((mod, idx) => {
            const Icon = mod.icon
            const isFeatured = mod.featured
            return (
              <motion.div
                key={mod.name}
                variants={fadeUp}
                className={
                  isFeatured
                    ? 'md:col-span-7'
                    : idx === 1
                      ? 'md:col-span-5'
                      : idx === 2
                        ? 'md:col-span-5'
                        : 'md:col-span-7'
                }
              >
                <Link
                  to={mod.href}
                  className={`group relative block h-full rounded-2xl p-8 lg:p-10 transition-all duration-300 border overflow-hidden ${
                    isFeatured
                      ? 'bg-white/[0.05] border-l-[3px] border-l-[var(--gold)] border-t-white/[0.08] border-r-white/[0.08] border-b-white/[0.08] hover:bg-white/[0.07]'
                      : 'bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05]'
                  } hover:-translate-y-1`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--gold)]/10 flex items-center justify-center">
                        <Icon
                          size={20}
                          className="text-[var(--gold)]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white font-[var(--font-sans)]">
                        {mod.name}
                      </h3>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-white/20 group-hover:text-[var(--gold)] group-hover:translate-x-1 transition-all mt-2.5"
                    />
                  </div>
                  <p className="mt-4 text-[15px] leading-[1.65] text-white/50 font-[var(--font-sans)]">
                    {mod.description}
                  </p>
                  <CardVisual type={mod.visual} />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

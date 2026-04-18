import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '../../lib/motion'
import { pressItems, showInvestorFallback } from '../../data/press'
import { investors, fundingAmount, fundingNote } from '../../data/team'
import SectionLabel from '../ui/SectionLabel'

export default function PressSection() {
  if (showInvestorFallback) {
    return <InvestorFallback />
  }

  return (
    <section className="bg-[var(--off-white)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>In the News</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-[48px] leading-[1.15] tracking-[-0.02em] text-[var(--navy)]"
          >
            Clear Current in the press
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-12 grid md:grid-cols-12 gap-5"
        >
          {pressItems.map((item, i) => (
            <motion.a
              key={i}
              variants={fadeUp}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block bg-white rounded-2xl border border-[var(--gray-200)] p-8 hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300 ${
                i === 0 ? 'md:col-span-7' : 'md:col-span-5'
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--gray-400)] font-[var(--font-sans)]">
                {item.publication}
              </p>
              <h3
                className={`mt-3 font-semibold text-[var(--navy)] font-[var(--font-sans)] leading-snug ${
                  i === 0 ? 'text-xl' : 'text-lg'
                }`}
              >
                {item.headline}
              </h3>
              <p className="mt-4 text-[13px] text-[var(--gray-400)] font-[var(--font-sans)]">
                {item.date}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function InvestorFallback() {
  return (
    <section className="bg-[var(--off-white)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>Backed By</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-[52px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)] max-w-[600px]"
          >
            Backed by leading{' '}
            <span className="text-[var(--gray-600)]">energy and deep-tech investors</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {investors.map((inv, i) => (
              <motion.div
                key={inv.name}
                variants={fadeUp}
                className={`rounded-2xl border border-[var(--gray-200)] bg-white p-6 text-center ${
                  i === 0
                    ? 'shadow-[0_2px_8px_rgba(10,22,40,0.06)] border-[var(--navy)]/10'
                    : ''
                }`}
              >
                <p className="text-base font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                  {inv.name}
                </p>
                <p className="text-[11px] text-[var(--gray-400)] font-[var(--font-sans)] mt-1 tracking-wide uppercase">
                  {inv.role}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--gray-200)] hidden sm:block" />
            <p className="text-[var(--navy)] font-[var(--font-display)] text-xl sm:text-2xl text-center w-full sm:w-auto sm:shrink-0">
              {fundingAmount}
              <span className="text-sm sm:text-base text-[var(--gray-600)] font-[var(--font-sans)] ml-2 sm:ml-3">
                {fundingNote}
              </span>
            </p>
            <div className="h-px flex-1 bg-[var(--gray-200)] hidden sm:block" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

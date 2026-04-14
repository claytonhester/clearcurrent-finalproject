import { motion } from 'framer-motion'
import { fadeUp, blurUp, stagger, staggerSlow, viewportOptions } from '../../lib/motion'
import { pressItems } from '../../data/press'
import { investors, fundingAmount, fundingNote } from '../../data/team'
import SectionLabel from '../../components/ui/SectionLabel'
import CtaBanner from '../../components/sections/CtaBanner'

export default function Press() {
  return (
    <>
      {/* Hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--off-white)]/80 to-transparent z-10" />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24"
        >
          <motion.div variants={blurUp}>
            <SectionLabel variant="pill">Press</SectionLabel>
          </motion.div>
          <motion.h1
            variants={blurUp}
            className="mt-6 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white"
          >
            Clear Current <span className="text-white/40">in the news</span>
          </motion.h1>
        </motion.div>
      </section>

      {/* Press items */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col gap-4"
          >
            {pressItems.map((item, i) => (
              <motion.a
                key={i}
                variants={fadeUp}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl border border-[var(--gray-200)] p-8 hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--gray-400)] font-[var(--font-sans)]">
                      {item.publication}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-[var(--navy)] font-[var(--font-sans)] leading-snug">
                      {item.headline}
                    </h2>
                  </div>
                  <span className="text-[13px] text-[var(--gray-400)] font-[var(--font-sans)] shrink-0">
                    {item.date}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Investors */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mt-20"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Investors</SectionLabel>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4"
            >
              {investors.map((inv, i) => (
                <div
                  key={inv.name}
                  className={`rounded-2xl border border-[var(--gray-200)] bg-white p-5 text-center transition-all hover:-translate-y-0.5 ${
                    i === 0 ? 'shadow-[0_2px_8px_rgba(10,22,40,0.06)]' : ''
                  }`}
                >
                  <p className="text-sm font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                    {inv.name}
                  </p>
                  <p className="text-[10px] text-[var(--gray-400)] font-[var(--font-sans)] mt-1 tracking-wider uppercase">
                    {inv.role}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-4">
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

      <CtaBanner />
    </>
  )
}

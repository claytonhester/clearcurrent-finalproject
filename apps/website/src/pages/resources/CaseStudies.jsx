import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, blurUp, stagger, staggerSlow, viewportOptions } from '../../lib/motion'
import { caseStudies } from '../../data/caseStudies'
import SectionLabel from '../../components/ui/SectionLabel'
import AnimatedNumber from '../../components/ui/AnimatedNumber'
import CtaBanner from '../../components/sections/CtaBanner'

export default function CaseStudies() {
  return (
    <>
      {/* Hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_40%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,197,24,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--off-white)]/80 to-transparent z-10" />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-28"
        >
          <motion.div variants={blurUp}>
            <SectionLabel variant="pill">Case Studies</SectionLabel>
          </motion.div>
          <motion.h1
            variants={blurUp}
            className="mt-6 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white max-w-[700px]"
          >
            Real results from <span className="text-[var(--gold)]">real portfolios</span>
          </motion.h1>
          <motion.p
            variants={blurUp}
            className="mt-5 text-xl text-white/50 max-w-[520px] leading-[1.7] font-[var(--font-sans)]"
          >
            See how enterprises across industries are recovering millions in billing
            errors and gaining visibility they never had before.
          </motion.p>
        </motion.div>
      </section>

      {/* Case study cards */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-col gap-8"
          >
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.slug} variants={fadeUp}>
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group block bg-white rounded-2xl border border-[var(--gray-200)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(10,22,40,0.1)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                >
                  <div className="grid md:grid-cols-12 items-stretch">
                    {/* Left — dark panel with stats */}
                    <div
                      className={`p-8 lg:p-10 bg-[var(--navy)] text-white ${
                        i === 0
                          ? 'md:col-span-5'
                          : i === 1
                            ? 'md:col-span-4'
                            : 'md:col-span-5'
                      }`}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
                        {cs.industry}
                      </span>
                      <h3 className="mt-3 text-xl font-[var(--font-display)] leading-snug">
                        {cs.client}
                      </h3>

                      <div className="mt-6 flex flex-col gap-4">
                        {cs.stats.slice(0, 2).map((stat, j) => (
                          <div key={j}>
                            <AnimatedNumber
                              value={stat.value}
                              prefix={stat.prefix}
                              suffix={stat.suffix}
                              label={stat.label}
                              numberClassName="text-[var(--gold)] text-3xl"
                              labelClassName="text-white/40"
                            />
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-white/[0.08]">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] text-white/30 font-[var(--font-sans)] uppercase tracking-wider">
                            Time to results
                          </span>
                          <span className="text-sm text-white/70 font-semibold font-[var(--font-sans)]">
                            {cs.snapshot.timeToFirstResult}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right — story preview */}
                    <div
                      className={`p-8 lg:p-10 flex flex-col justify-between ${
                        i === 0
                          ? 'md:col-span-7'
                          : i === 1
                            ? 'md:col-span-8'
                            : 'md:col-span-7'
                      }`}
                    >
                      <div>
                        <h2 className="text-2xl md:text-[28px] font-[var(--font-display)] text-[var(--navy)] leading-snug">
                          {cs.heroHeadline}
                        </h2>
                        <p className="mt-4 text-[16px] leading-[1.7] text-[var(--gray-600)] font-[var(--font-sans)]">
                          {cs.heroSubhead}
                        </p>
                      </div>

                      <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-4">
                          <span className="text-[12px] text-[var(--gray-400)] font-[var(--font-sans)]">
                            {cs.snapshot.sites} sites
                          </span>
                          <span className="text-[var(--gray-200)]">·</span>
                          <span className="text-[12px] text-[var(--gray-400)] font-[var(--font-sans)]">
                            {cs.snapshot.annualSpend} annual spend
                          </span>
                        </div>
                        <span className="text-sm text-[var(--gold)] font-semibold font-[var(--font-sans)] group-hover:underline shrink-0">
                          Read case study →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

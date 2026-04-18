import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '../../lib/motion'
import { caseStudies } from '../../data/caseStudies'
import SectionLabel from '../ui/SectionLabel'
import AnimatedNumber from '../ui/AnimatedNumber'

export default function CaseStudiesPreview() {
  const featured = caseStudies[0]
  const others = caseStudies.slice(1, 3)

  return (
    <section className="relative bg-[var(--navy)] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,197,24,0.03)_0%,transparent_50%)]" />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-end justify-between mb-12 flex-wrap gap-4"
          >
            <div>
              <SectionLabel>Case Studies</SectionLabel>
              <h2 className="mt-4 text-4xl md:text-[52px] leading-[1.1] tracking-[-0.02em] text-white">
                Grounded in <span className="text-white/40">operator research</span>
              </h2>
            </div>
            <Link
              to="/case-studies"
              className="text-sm text-[var(--gold)] font-semibold font-[var(--font-sans)] hover:underline shrink-0"
            >
              View all case studies →
            </Link>
          </motion.div>

          {/* Featured case study — large card */}
          <motion.div variants={fadeUp}>
            <Link
              to={`/case-studies/${featured.slug}`}
              className="group block rounded-2xl border border-white/[0.08] bg-white/[0.03] overflow-hidden hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="grid md:grid-cols-12">
                <div className="md:col-span-5 p-8 lg:p-10 border-b md:border-b-0 md:border-r border-white/[0.06]">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
                    {featured.industry}
                  </span>
                  <h3 className="mt-3 text-xl font-[var(--font-display)] text-white leading-snug">
                    {featured.client}
                  </h3>

                  <div className="mt-8 flex flex-col gap-5">
                    {featured.stats.map((stat, i) => (
                      <AnimatedNumber
                        key={i}
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        label={stat.label}
                        decimals={stat.decimals ?? 0}
                        numberClassName="text-[var(--gold)] text-3xl"
                        labelClassName="text-white/30"
                        className="items-start"
                      />
                    ))}
                  </div>
                </div>

                <div className="md:col-span-7 p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <h4 className="text-2xl md:text-[28px] font-[var(--font-display)] text-white leading-snug">
                      {featured.heroHeadline}
                    </h4>
                    <p className="mt-4 text-[16px] leading-[1.7] text-white/50 font-[var(--font-sans)]">
                      {featured.heroSubhead}
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-[12px] text-white/25 font-[var(--font-sans)]">
                      {featured.snapshot.sites} sites · {featured.snapshot.annualSpend}{' '}
                      annual spend
                    </span>
                    <span className="text-sm text-[var(--gold)] font-semibold font-[var(--font-sans)] group-hover:underline shrink-0">
                      Read case study →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller cards */}
          <div className="mt-5 grid md:grid-cols-12 gap-5">
            {others.map((cs, i) => (
              <motion.div
                key={cs.slug}
                variants={fadeUp}
                className={i === 0 ? 'md:col-span-7' : 'md:col-span-5'}
              >
                <Link
                  to={`/case-studies/${cs.slug}`}
                  className="group block h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-white/[0.12] transition-all duration-300"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
                    {cs.industry}
                  </span>
                  <h3 className="mt-2 text-lg font-[var(--font-display)] text-white leading-snug">
                    {cs.heroHeadline}
                  </h3>
                  <p className="mt-2 text-[14px] text-white/40 font-[var(--font-sans)]">
                    {cs.client} · {cs.snapshot.sites} sites
                  </p>

                  <div className="mt-6 flex items-center gap-6">
                    <AnimatedNumber
                      value={cs.stats[0].value}
                      prefix={cs.stats[0].prefix}
                      suffix={cs.stats[0].suffix}
                      label={cs.stats[0].label}
                      decimals={cs.stats[0].decimals ?? 0}
                      numberClassName="text-[var(--gold)] text-2xl"
                      labelClassName="text-white/25 text-[11px]"
                      className="items-start"
                    />
                  </div>

                  <span className="mt-6 inline-block text-sm text-[var(--gold)] font-semibold font-[var(--font-sans)] group-hover:underline">
                    Read case study →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

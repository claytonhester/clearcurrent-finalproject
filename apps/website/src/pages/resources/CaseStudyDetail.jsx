import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import {
  fadeUp,
  blurUp,
  stagger,
  staggerSlow,
  viewportOptions,
  EASE,
} from '../../lib/motion'
import { caseStudies } from '../../data/caseStudies'
import SectionLabel from '../../components/ui/SectionLabel'
import AnimatedNumber from '../../components/ui/AnimatedNumber'
import Button from '../../components/ui/Button'
import CtaBanner from '../../components/sections/CtaBanner'

export default function CaseStudyDetail() {
  const { slug } = useParams()
  const cs = caseStudies.find((c) => c.slug === slug)

  if (!cs) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 text-center">
        <h1 className="text-4xl text-[var(--navy)]">Case study not found</h1>
        <Link
          to="/case-studies"
          className="mt-4 inline-block text-[var(--gold)] font-semibold font-[var(--font-sans)]"
        >
          View all case studies →
        </Link>
      </div>
    )
  }

  const otherStudies = caseStudies.filter((c) => c.slug !== slug).slice(0, 2)

  return (
    <>
      {/* Hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,197,24,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent z-10" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-32">
          <p className="text-[13px] text-white/30 font-[var(--font-sans)] mb-10 break-words">
            <Link to="/case-studies" className="hover:text-white/60 transition-colors">
              Case Studies
            </Link>
            {' / '}
            <span className="text-white/60">{cs.client}</span>
          </p>

          <motion.div variants={staggerSlow} initial="hidden" animate="visible">
            <motion.div variants={blurUp} className="flex items-center gap-3 mb-4">
              <SectionLabel variant="pill">{cs.industry}</SectionLabel>
            </motion.div>
            <motion.h1
              variants={blurUp}
              className="text-4xl md:text-6xl lg:text-[64px] leading-[1.05] tracking-[-0.03em] text-white max-w-[800px]"
            >
              {cs.heroHeadline}
            </motion.h1>
            <motion.p
              variants={blurUp}
              className="mt-6 text-xl text-white/50 max-w-[600px] leading-[1.7] font-[var(--font-sans)]"
            >
              {cs.heroSubhead}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Snapshot bar */}
      <section className="bg-white border-b border-[var(--gray-200)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-8">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Client', value: cs.client },
              { label: 'Sites', value: cs.snapshot.sites },
              { label: 'Annual Spend', value: cs.snapshot.annualSpend },
              { label: 'Platform', value: cs.snapshot.platform },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] font-[var(--font-sans)]">
                  {item.label}
                </span>
                <p className="mt-1 text-[15px] font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Challenge */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-12 lg:gap-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] font-[var(--font-sans)]">
                The Challenge
              </span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <p className="text-[17px] leading-[1.8] text-[var(--gray-900)] font-[var(--font-sans)]">
                {cs.challenge}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-12 lg:gap-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] font-[var(--font-sans)]">
                The Solution
              </span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <p className="text-[17px] leading-[1.8] text-[var(--gray-900)] font-[var(--font-sans)]">
                {cs.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stat band — dark */}
      <section className="relative bg-[var(--navy)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(245,197,24,0.03)_0%,transparent_70%)]" />
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="flex flex-wrap items-center justify-center gap-y-8"
          >
            {cs.stats.map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-12 bg-white/10 mx-6 sm:mx-10 md:mx-14 shrink-0 hidden sm:block" />
                )}
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  numberClassName="text-[var(--gold)] text-4xl md:text-5xl"
                  labelClassName="text-[var(--gray-400)]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <div className="grid lg:grid-cols-[0.3fr_0.7fr] gap-12 lg:gap-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] font-[var(--font-sans)]">
                The Results
              </span>
            </motion.div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.p
                variants={fadeUp}
                className="text-[17px] leading-[1.8] text-[var(--gray-900)] font-[var(--font-sans)]"
              >
                {cs.results}
              </motion.p>

              <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-3">
                {cs.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-md bg-[var(--gold)]/10 flex items-center justify-center mt-0.5 shrink-0">
                      <Check size={12} className="text-[var(--gold)]" strokeWidth={3} />
                    </div>
                    <span className="text-[16px] leading-[1.65] text-[var(--navy)] font-[var(--font-sans)]">
                      {outcome}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote */}
      {cs.quote && (
        <section className="bg-[var(--off-white)]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="max-w-3xl mx-auto text-center"
            >
              <span
                className="text-5xl text-[var(--gold)]/20 font-[var(--font-display)] leading-none"
                aria-hidden="true"
              >
                "
              </span>
              <p className="mt-4 text-xl md:text-2xl leading-[1.5] text-[var(--navy)] font-[var(--font-sans)]">
                {cs.quote.text}
              </p>
              <p className="mt-6 text-sm text-[var(--gray-600)] font-[var(--font-sans)]">
                — {cs.quote.attribution}, {cs.client}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Related industry page */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] font-[var(--font-sans)]">
                Industry
              </span>
              <p className="mt-1 text-lg font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                {cs.industry}
              </p>
            </div>
            <Link
              to={`/industries/${cs.industrySlug}`}
              className="text-sm text-[var(--gold)] font-semibold font-[var(--font-sans)] hover:underline"
            >
              See how we help {cs.industry.toLowerCase()} →
            </Link>
          </div>
        </div>
      </section>

      {/* Other case studies */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          <h3 className="text-xl text-[var(--navy)] font-[var(--font-sans)] font-semibold mb-6">
            More case studies
          </h3>
          <div className="grid md:grid-cols-12 gap-5">
            {otherStudies.map((other, i) => (
              <Link
                key={other.slug}
                to={`/case-studies/${other.slug}`}
                className={`group bg-white rounded-2xl border border-[var(--gray-200)] p-8 hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300 ${
                  i === 0 ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
                  {other.industry}
                </span>
                <h4 className="mt-2 text-lg font-semibold text-[var(--navy)] font-[var(--font-sans)] leading-snug">
                  {other.heroHeadline}
                </h4>
                <p className="mt-2 text-[14px] text-[var(--gray-600)] font-[var(--font-sans)]">
                  {other.client}
                </p>
                <span className="mt-4 inline-block text-sm text-[var(--gold)] font-semibold font-[var(--font-sans)] group-hover:underline">
                  Read case study →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

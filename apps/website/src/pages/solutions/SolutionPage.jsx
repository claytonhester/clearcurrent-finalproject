import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  fadeUp,
  blurUp,
  stagger,
  staggerSlow,
  viewportOptions,
  EASE,
} from '../../lib/motion'
import { solutionsData } from '../../data/solutions'
import SectionLabel from '../../components/ui/SectionLabel'
import AnimatedNumber from '../../components/ui/AnimatedNumber'
import Button from '../../components/ui/Button'
import CtaBanner from '../../components/sections/CtaBanner'

export default function SolutionPage() {
  const { slug } = useParams()
  const data = solutionsData[slug]

  if (!data) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 text-center">
        <h1 className="text-4xl text-[var(--navy)]">Solution not found</h1>
        <Link
          to="/"
          className="mt-4 inline-block text-[var(--gold)] font-semibold font-[var(--font-sans)]"
        >
          Back to home →
        </Link>
      </div>
    )
  }

  const otherSolutions = Object.entries(solutionsData)
    .filter(([key]) => key !== slug)
    .slice(0, 2)

  return (
    <>
      {/* Hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,197,24,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--off-white)]/80 to-transparent z-10" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-28 pb-32">
          <p className="text-[13px] text-white/30 font-[var(--font-sans)] mb-10 break-words">
            <Link to="/" className="hover:text-white/60 transition-colors">
              Home
            </Link>
            {' / '}
            <span className="text-white/40">Solutions</span>
            {' / '}
            <span className="text-white/60">{data.name}</span>
          </p>

          <motion.div variants={staggerSlow} initial="hidden" animate="visible">
            <motion.div variants={blurUp}>
              <SectionLabel variant="pill">{data.name}</SectionLabel>
            </motion.div>
            <motion.h1
              variants={blurUp}
              className="mt-6 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white max-w-[750px]"
            >
              {data.heroHeadline}
            </motion.h1>
            <motion.p
              variants={blurUp}
              className="mt-6 text-xl text-white/50 max-w-[560px] leading-[1.7] font-[var(--font-sans)]"
            >
              {data.heroSubhead}
            </motion.p>
            <motion.div variants={blurUp} className="mt-10">
              <Button variant="primary" href="/contact" large>
                Request Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value sections — prose only */}
      {data.sections.map((section, i) => (
        <section
          key={i}
          className={`relative ${i % 2 === 0 ? 'bg-[var(--off-white)]' : 'bg-white'}`}
        >
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start"
            >
              <div>
                <motion.h2
                  variants={fadeUp}
                  className="text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)]"
                >
                  {section.headline}
                </motion.h2>
                {section.body.split('\n\n').map((para, j) => (
                  <motion.p
                    key={j}
                    variants={fadeUp}
                    className="mt-6 text-[16px] leading-[1.75] text-[var(--gray-900)] font-[var(--font-sans)]"
                  >
                    {para}
                  </motion.p>
                ))}
              </div>
              {i === 0 && (
                <motion.div variants={fadeUp} className="hidden lg:block">
                  <div className="rounded-2xl border border-[var(--gray-200)] bg-white p-6 shadow-[0_2px_8px_rgba(10,22,40,0.04)]">
                    <div className="text-[11px] font-semibold uppercase tracking-widest text-[var(--gray-400)] font-[var(--font-sans)] mb-4">
                      Key Capability
                    </div>
                    <p className="text-lg font-[var(--font-display)] text-[var(--navy)] leading-snug">
                      {data.tagline}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>
      ))}

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
            {data.stats.map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-12 bg-white/10 mx-6 sm:mx-10 md:mx-14 shrink-0 hidden sm:block" />
                )}
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  decimals={stat.decimals ?? 0}
                  numberClassName="text-[var(--gold)] text-4xl md:text-5xl"
                  labelClassName="text-[var(--gray-400)]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)]">
              {data.cta}
            </h2>
            <p className="mt-3 text-lg text-[var(--gray-600)] font-[var(--font-sans)]">
              Speak with our team.
            </p>
            <div className="mt-8">
              <Button variant="primary" href="/contact" large>
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-16">
          <h3 className="text-xl text-[var(--navy)] font-[var(--font-sans)] font-semibold mb-6">
            Explore other solutions
          </h3>
          <div className="grid md:grid-cols-12 gap-5">
            {otherSolutions.map(([key, sol], i) => (
              <Link
                key={key}
                to={`/solutions/${key}`}
                className={`group bg-[var(--off-white)] rounded-2xl border border-[var(--gray-200)] p-8 hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300 ${
                  i === 0 ? 'md:col-span-7' : 'md:col-span-5'
                }`}
              >
                <h4 className="text-lg font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                  {sol.name}
                </h4>
                <p className="mt-2 text-[15px] text-[var(--gray-600)] font-[var(--font-sans)]">
                  {sol.tagline}
                </p>
                <span className="mt-4 inline-block text-[var(--gold)] text-sm font-semibold font-[var(--font-sans)] group-hover:underline">
                  Learn more →
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

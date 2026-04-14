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
import { industriesData } from '../../data/industries'
import SectionLabel from '../../components/ui/SectionLabel'
import Button from '../../components/ui/Button'
import CtaBanner from '../../components/sections/CtaBanner'

export default function IndustryPage() {
  const { slug } = useParams()
  const data = industriesData[slug]

  if (!data) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 text-center">
        <h1 className="text-4xl text-[var(--navy)]">Industry not found</h1>
        <Link
          to="/"
          className="mt-4 inline-block text-[var(--gold)] font-semibold font-[var(--font-sans)]"
        >
          Back to home →
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_40%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(245,197,24,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent z-10" />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-32"
        >
          <motion.div variants={blurUp}>
            <SectionLabel variant="pill">{data.name}</SectionLabel>
          </motion.div>
          <motion.h1
            variants={blurUp}
            className="mt-7 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white max-w-[750px]"
          >
            {data.heroHeadline}
          </motion.h1>
          <motion.p
            variants={blurUp}
            className="mt-7 text-xl text-white/50 max-w-[560px] leading-[1.7] font-[var(--font-sans)]"
          >
            {data.heroSubhead}
          </motion.p>
          <motion.div variants={blurUp} className="mt-10">
            <Button variant="primary" href="/contact" large>
              Request Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Pain points — editorial alternation */}
      {data.painPoints.map((point, i) => (
        <section key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--off-white)]'}>
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start"
            >
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <motion.div variants={fadeUp}>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] font-[var(--font-sans)]">
                    Challenge {i + 1}
                  </span>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  className="mt-3 text-3xl md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)]"
                >
                  {point.headline}
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  className="mt-6 text-[16px] leading-[1.75] text-[var(--gray-900)] font-[var(--font-sans)]"
                >
                  {point.body}
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Capabilities — dark section */}
      <section className="relative bg-[var(--navy)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_0%,rgba(245,197,24,0.03)_0%,transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--off-white)] to-transparent z-10" />

        <div className="relative z-20 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pb-24 lg:pb-[120px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mb-14"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>How Clear Current Helps</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl md:text-[48px] leading-[1.1] tracking-[-0.02em] text-white max-w-[600px]"
            >
              Built for {data.name.toLowerCase()}{' '}
              <span className="text-white/40">complexity</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid md:grid-cols-12 gap-5"
          >
            {data.capabilities.map((cap, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-0.5 ${
                  i === 0
                    ? 'md:col-span-5 bg-white/[0.05] border-l-[3px] border-l-[var(--gold)] border-t-white/[0.08] border-r-white/[0.08] border-b-white/[0.08]'
                    : i === 1
                      ? 'md:col-span-4 bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12]'
                      : 'md:col-span-3 bg-white/[0.03] border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <h3 className="text-lg font-semibold text-white font-[var(--font-sans)] mb-3">
                  {cap.headline}
                </h3>
                <p className="text-[15px] leading-[1.65] text-white/50 font-[var(--font-sans)]">
                  {cap.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote — if available */}
      {data.quote && (
        <section className="bg-[var(--off-white)]">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 text-center">
            <span className="text-6xl text-[var(--gold)]/20 font-[var(--font-display)] leading-none">
              "
            </span>
            <p className="mt-4 text-xl leading-[1.6] text-[var(--navy)] font-[var(--font-sans)] max-w-[640px] mx-auto">
              {data.quote.text}
            </p>
            <p className="mt-4 text-sm text-[var(--gray-600)] font-[var(--font-sans)]">
              {data.quote.attribution}
            </p>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  )
}

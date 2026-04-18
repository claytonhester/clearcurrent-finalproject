import { motion } from 'framer-motion'
import { fadeUp, stagger, staggerSlow, viewportOptions } from '../../lib/motion'
import { testimonials, proofStats } from '../../data/testimonials'
import SectionLabel from '../ui/SectionLabel'
import AnimatedNumber from '../ui/AnimatedNumber'

export default function SocialProof() {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>What Energy Leaders Say</SectionLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-[52px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)] max-w-[600px]"
          >
            The pain is real.{' '}
            <span className="text-[var(--gray-600)]">So is the solution.</span>
          </motion.h2>
        </motion.div>

        {/* Asymmetric quote layout — first card large */}
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-14 grid md:grid-cols-12 gap-5"
        >
          {/* Featured quote — large */}
          <motion.div variants={fadeUp} className="md:col-span-7">
            <div className="h-full bg-[var(--off-white)] rounded-2xl p-10 lg:p-12 relative">
              <div className="relative">
                <blockquote className="m-0 mt-2 border-l-[3px] border-[var(--gold)]/35 pl-6 text-xl md:text-2xl leading-[1.5] text-[var(--navy)] font-[var(--font-sans)]">
                  &ldquo;{testimonials[0].quote}&rdquo;
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--gray-200)] overflow-hidden shrink-0">
                    {testimonials[0].photo && (
                      <img
                        src={testimonials[0].photo}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                  <div>
                    {testimonials[0].name && (
                      <p className="text-sm font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                        {testimonials[0].name}
                      </p>
                    )}
                    <p className="text-[13px] text-[var(--gray-600)] font-[var(--font-sans)]">
                      {testimonials[0].title}
                      {testimonials[0].company ? ` · ${testimonials[0].company}` : ''}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two smaller quotes stacked */}
          <div className="md:col-span-5 flex flex-col gap-5">
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex-1 bg-white rounded-2xl border border-[var(--gray-200)] p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <blockquote className="m-0 mt-0 border-l-[3px] border-[var(--gold)]/35 pl-5 text-[15px] leading-[1.65] text-[var(--navy)] font-[var(--font-sans)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 pt-4 border-t border-[var(--gray-200)]">
                  {t.name && (
                    <p className="text-sm font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                      {t.name}
                    </p>
                  )}
                  <p className="text-[13px] text-[var(--gray-600)] font-[var(--font-sans)]">
                    {t.title}
                    {t.company ? ` · ${t.company}` : ''}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics — regulatory + market context (see data/stats research notes) */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-20 flex items-center justify-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-y-8">
            {proofStats.map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <div className="w-px h-12 bg-[var(--gray-200)] mx-6 sm:mx-10 md:mx-14 shrink-0 hidden sm:block" />
                )}
                <div className="text-center">
                  <div className="w-8 h-[2px] bg-[var(--gold)] mx-auto mb-4" />
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    label={stat.label}
                    numberClassName="text-[var(--navy)] text-4xl md:text-5xl"
                    labelClassName="text-[var(--gray-600)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

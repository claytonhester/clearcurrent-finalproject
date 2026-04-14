import { motion } from 'framer-motion'
import { Linkedin } from 'lucide-react'
import {
  fadeUp,
  blurUp,
  stagger,
  staggerSlow,
  slideInRight,
  viewportOptions,
  EASE,
} from '../lib/motion'
import { team, investors, fundingAmount, fundingNote } from '../data/team'
import SectionLabel from '../components/ui/SectionLabel'
import CtaBanner from '../components/sections/CtaBanner'

export default function About() {
  return (
    <>
      {/* Mission Hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,197,24,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent z-10" />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-32"
        >
          <motion.div variants={blurUp}>
            <SectionLabel variant="pill">Our Mission</SectionLabel>
          </motion.div>
          <motion.h1
            variants={blurUp}
            className="mt-7 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white max-w-[780px]"
          >
            Transparency is the only tool that fixes{' '}
            <span className="text-[var(--gold)]">energy management.</span>
          </motion.h1>
          <motion.p
            variants={blurUp}
            className="mt-7 text-xl text-white/50 max-w-[580px] leading-[1.7] font-[var(--font-sans)]"
          >
            We enable organizations to instantly access all insights embedded in energy
            contracts, PPAs, and tariffs — eliminating manual processes that cost
            enterprises millions in hidden overpayments every year.
          </motion.p>
        </motion.div>
      </section>

      {/* Origin Story */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 lg:gap-24 items-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div variants={fadeUp}>
                <SectionLabel variant="subtle">Our Story</SectionLabel>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)]"
              >
                Built by people who've seen{' '}
                <span className="text-[var(--gray-600)]">the problem firsthand</span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="mt-6 text-[16px] leading-[1.75] text-[var(--gray-900)] font-[var(--font-sans)]"
              >
                The founding team comes from Bloom Energy, where they scaled from $0 to
                $4B+ in sales and $0 to $1B in product revenue. They saw firsthand how
                enterprise energy management operated — fragmented data, opaque billing,
                and decisions made on gut instinct instead of real intelligence.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="mt-4 text-[16px] leading-[1.75] text-[var(--gray-900)] font-[var(--font-sans)]"
              >
                The problem they kept seeing: enterprises with complex energy bills across
                dozens or hundreds of sites, no time to audit them, and no tools built for
                their level of complexity. Clear Current was built to fix that — not with
                another dashboard, but with AI that actually reads, understands, and acts
                on energy data.
              </motion.p>
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(245,197,24,0.04)_0%,transparent_70%)]" />
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop"
                    alt="Modern office with open floor plan and natural light"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/30 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>The Team</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl md:text-[52px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)]"
            >
              Veterans of the{' '}
              <span className="text-[var(--gray-600)]">energy transition</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="mt-14 grid md:grid-cols-12 gap-5"
          >
            {team.map((person, i) => (
              <motion.div
                key={person.name}
                variants={fadeUp}
                className={`bg-white rounded-2xl border border-[var(--gray-200)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] ${
                  i === 0
                    ? 'md:col-span-5 shadow-[0_2px_8px_rgba(10,22,40,0.06)] border-l-[3px] border-l-[var(--gold)]'
                    : i === 1
                      ? 'md:col-span-4'
                      : 'md:col-span-3'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-[var(--gray-100)] mb-5 overflow-hidden">
                  {person.photo ? (
                    <img
                      src={person.photo}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-[var(--gray-400)] text-lg font-[var(--font-display)]">
                        {person.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                  {person.name}
                </h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-[var(--gold)] font-semibold font-[var(--font-sans)]">
                  {person.title}
                </p>
                <p className="mt-4 text-[15px] leading-[1.65] text-[var(--gray-600)] font-[var(--font-sans)]">
                  {person.bio}
                </p>
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 py-2 pr-3 text-[var(--gray-400)] hover:text-[var(--navy)] transition-colors min-h-[44px]"
                >
                  <Linkedin size={16} />
                  <span className="text-sm font-[var(--font-sans)]">LinkedIn</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investors */}
      <section id="investors" className="bg-white">
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

            <motion.div
              variants={fadeUp}
              className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4"
            >
              {investors.map((inv, i) => (
                <div
                  key={inv.name}
                  className={`rounded-2xl border border-[var(--gray-200)] bg-[var(--off-white)] p-5 text-center transition-all duration-300 hover:-translate-y-0.5 ${
                    i === 0
                      ? 'shadow-[0_2px_8px_rgba(10,22,40,0.06)] border-[var(--navy)]/10'
                      : ''
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

            {/* TODO: confirm with John/Dan — can we publicly state this? */}
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

      <CtaBanner />
    </>
  )
}

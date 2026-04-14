import { motion } from 'framer-motion'
import { MessageSquare, BarChart3, Bot } from 'lucide-react'
import { fadeUp, stagger, slideInRight, viewportOptions, EASE } from '../../lib/motion'
import SectionLabel from '../ui/SectionLabel'

const layers = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Chat Interface',
    body: 'Ask any question about your energy portfolio. Get instant, cited answers.',
    color: 'var(--gold)',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Intelligent Dashboard',
    body: 'Proactively surfaces anomalies, trends, and opportunities without you asking.',
    color: 'var(--gold)',
  },
  {
    number: '03',
    icon: Bot,
    title: 'Autonomous Agent',
    body: 'Takes action on your behalf — flagging errors, filing disputes, and optimizing spend.',
    color: 'var(--gold)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[var(--off-white)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-20 items-start">
          {/* Left column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>The Platform</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl md:text-[52px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)] max-w-[560px]"
            >
              Three layers of AI{' '}
              <span className="text-[var(--gray-600)]">working for you</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg leading-[1.7] text-[var(--gray-900)] max-w-[520px] font-[var(--font-sans)]"
            >
              Clear Current's platform doesn't just show you data — it acts on it. From
              instant answers in chat to proactive dashboard alerts to fully autonomous
              action, the system meets you where you need it.
            </motion.p>

            <div className="mt-12 flex flex-col gap-0">
              {layers.map((layer, i) => {
                const Icon = layer.icon
                return (
                  <motion.div
                    key={layer.number}
                    variants={fadeUp}
                    className={`flex gap-5 py-6 ${i < layers.length - 1 ? 'border-b border-[var(--gray-200)]' : ''}`}
                  >
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <div className="w-11 h-11 rounded-xl bg-[var(--navy)] flex items-center justify-center">
                        <Icon
                          size={18}
                          className="text-[var(--gold)]"
                          strokeWidth={1.5}
                        />
                      </div>
                      <span className="text-[11px] font-semibold text-[var(--gray-400)] tracking-wider font-[var(--font-sans)]">
                        {layer.number}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--navy)] font-[var(--font-sans)] leading-tight">
                        {layer.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-[1.65] text-[var(--gray-600)] font-[var(--font-sans)]">
                        {layer.body}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right column — layered product visual */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="hidden lg:block sticky top-32"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute -inset-12 bg-[radial-gradient(circle,rgba(245,197,24,0.04)_0%,transparent_70%)]" />

              <div className="relative space-y-4">
                {layers.map((layer, i) => {
                  const Icon = layer.icon
                  const widths = ['100%', '92%', '84%']
                  return (
                    <motion.div
                      key={layer.number}
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: EASE }}
                      viewport={viewportOptions}
                      style={{ width: widths[i] }}
                      className="ml-auto"
                    >
                      <div
                        className={`rounded-2xl p-6 border ${
                          i === 0
                            ? 'bg-[var(--navy)] border-[var(--gold)]/20 shadow-[0_8px_32px_rgba(10,22,40,0.3)]'
                            : i === 1
                              ? 'bg-[var(--navy)]/90 border-[var(--gold)]/10 shadow-[0_4px_16px_rgba(10,22,40,0.2)]'
                              : 'bg-[var(--navy)]/80 border-white/[0.06] shadow-[0_2px_8px_rgba(10,22,40,0.15)]'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/10 flex items-center justify-center">
                            <Icon
                              size={14}
                              className="text-[var(--gold)]"
                              strokeWidth={1.5}
                            />
                          </div>
                          <span className="text-sm font-semibold text-white font-[var(--font-sans)]">
                            {layer.title}
                          </span>
                          <span className="ml-auto text-[9px] tracking-wider uppercase text-[var(--gold)]/60 font-[var(--font-sans)]">
                            Layer {i + 1}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          {[0, 1, 2].map((j) => (
                            <div
                              key={j}
                              className="flex-1 h-2 rounded-full bg-white/[0.06]"
                            >
                              <div
                                className="h-full rounded-full bg-[var(--gold)]/20"
                                style={{ width: `${[65, 80, 50][j]}%` }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}

                {/* Connecting lines */}
                <svg
                  className="absolute left-[calc(100%-60px)] top-[72px] w-px h-[calc(100%-144px)]"
                  viewBox="0 0 2 200"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="200"
                    stroke="var(--gold)"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                    opacity="0.2"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

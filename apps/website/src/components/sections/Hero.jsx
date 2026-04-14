import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { blurUp, staggerSlow, slideInRight, fadeUp, EASE } from '../../lib/motion'
import { heroStats } from '../../data/stats'
import SectionLabel from '../ui/SectionLabel'
import AnimatedNumber from '../ui/AnimatedNumber'
import Button from '../ui/Button'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[var(--navy-mid)]"
    >
      {/* Layered atmosphere */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(26,51,87,0.9)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_70%,rgba(10,22,40,1)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,197,24,0.04)_0%,transparent_50%)]" />
      </motion.div>

      {/* Animated grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '512px 512px',
        }}
      />

      {/* Bottom gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent z-10" />

      <motion.div style={{ opacity }} className="relative z-10 w-full">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-40">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            {/* Left column — copy */}
            <motion.div variants={staggerSlow} initial="hidden" animate="visible">
              <motion.div variants={blurUp}>
                <SectionLabel variant="pill">AI-Powered Energy Management</SectionLabel>
              </motion.div>

              <motion.h1
                variants={blurUp}
                className="mt-7 text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[88px] leading-[1.04] tracking-[-0.03em] text-white"
                style={{ textWrap: 'balance' }}
              >
                Your energy bills are wrong.{' '}
                <span className="text-[var(--gold)]">We can prove it.</span>
              </motion.h1>

              <motion.p
                variants={blurUp}
                className="mt-7 text-xl text-white/60 max-w-[520px] leading-[1.7] font-[var(--font-sans)]"
              >
                Clear Current finds billing errors, identifies hidden savings, and gives
                energy managers the intelligence to make every dollar count.
              </motion.p>

              <motion.div
                variants={blurUp}
                className="mt-10 flex flex-col sm:flex-row items-start gap-4"
              >
                <Button variant="primary" href="/contact" large>
                  Request Demo
                </Button>
                <Button variant="ghost-white" href="#how-it-works" arrow={false}>
                  See how it works
                </Button>
              </motion.div>
            </motion.div>

            {/* Right column — abstract energy visualization */}
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate="visible"
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Glow behind the visual */}
                <div className="absolute -inset-8 bg-[radial-gradient(circle,rgba(245,197,24,0.08)_0%,transparent_70%)] blur-2xl" />

                <svg
                  viewBox="0 0 480 440"
                  fill="none"
                  className="w-full max-w-[480px] ml-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  {/* Background card */}
                  <rect
                    x="24"
                    y="20"
                    width="432"
                    height="400"
                    rx="24"
                    fill="rgba(255,255,255,0.03)"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="1"
                  />

                  {/* Header bar */}
                  <rect
                    x="48"
                    y="44"
                    width="384"
                    height="48"
                    rx="12"
                    fill="rgba(255,255,255,0.04)"
                  />
                  <circle cx="72" cy="68" r="6" fill="var(--gold)" opacity="0.6" />
                  <rect
                    x="88"
                    y="62"
                    width="100"
                    height="12"
                    rx="4"
                    fill="rgba(255,255,255,0.12)"
                  />
                  <rect
                    x="340"
                    y="58"
                    width="72"
                    height="20"
                    rx="6"
                    fill="var(--gold)"
                    opacity="0.15"
                  />
                  <text
                    x="376"
                    y="72"
                    textAnchor="middle"
                    fill="var(--gold)"
                    fontSize="9"
                    fontWeight="600"
                    fontFamily="Geist, system-ui, sans-serif"
                  >
                    LIVE
                  </text>

                  {/* Bill analysis rows with error highlights */}
                  {[0, 1, 2, 3, 4, 5].map((i) => {
                    const y = 116 + i * 42
                    const isError = i === 1 || i === 4
                    const colWidths = [
                      [82, 54, 62],
                      [96, 48, 58],
                      [70, 66, 54],
                      [88, 52, 68],
                      [78, 60, 56],
                      [92, 44, 64],
                    ]
                    return (
                      <g key={i}>
                        <rect
                          x="48"
                          y={y}
                          width="384"
                          height="34"
                          rx="8"
                          fill={
                            isError ? 'rgba(245,197,24,0.08)' : 'rgba(255,255,255,0.02)'
                          }
                          stroke={
                            isError ? 'rgba(245,197,24,0.25)' : 'rgba(255,255,255,0.04)'
                          }
                          strokeWidth="1"
                        />
                        <rect
                          x="60"
                          y={y + 11}
                          width={colWidths[i][0]}
                          height="12"
                          rx="4"
                          fill="rgba(255,255,255,0.1)"
                        />
                        <rect
                          x="180"
                          y={y + 11}
                          width={colWidths[i][1]}
                          height="12"
                          rx="4"
                          fill="rgba(255,255,255,0.07)"
                        />
                        <rect
                          x="280"
                          y={y + 11}
                          width={colWidths[i][2]}
                          height="12"
                          rx="4"
                          fill="rgba(255,255,255,0.07)"
                        />
                        {isError && (
                          <>
                            <rect
                              x="370"
                              y={y + 7}
                              width="50"
                              height="20"
                              rx="6"
                              fill="rgba(245,197,24,0.15)"
                            />
                            <text
                              x="395"
                              y={y + 21}
                              textAnchor="middle"
                              fill="var(--gold)"
                              fontSize="9"
                              fontWeight="600"
                              fontFamily="Geist, system-ui, sans-serif"
                            >
                              ERROR
                            </text>
                          </>
                        )}
                      </g>
                    )
                  })}

                  {/* Bottom metrics bar */}
                  <rect
                    x="48"
                    y="372"
                    width="384"
                    height="32"
                    rx="8"
                    fill="rgba(245,197,24,0.06)"
                    stroke="rgba(245,197,24,0.12)"
                    strokeWidth="1"
                  />
                  <text
                    x="72"
                    y="393"
                    fill="var(--gold)"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="Geist, system-ui, sans-serif"
                    opacity="0.8"
                  >
                    2 errors found
                  </text>
                  <text
                    x="220"
                    y="393"
                    fill="rgba(255,255,255,0.4)"
                    fontSize="10"
                    fontFamily="Geist, system-ui, sans-serif"
                  >
                    $14,200 recoverable
                  </text>
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Stat bar — contained with separators */}
          {/* TODO: confirm with John/Dan — replace placeholders with real stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-20 mx-auto max-w-3xl"
          >
            <div className="flex flex-wrap items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm py-8 px-6 gap-y-6">
              {heroStats.map((stat, i) => (
                <div key={i} className="flex items-center">
                  {i > 0 && (
                    <div className="w-px h-10 bg-white/10 mx-6 sm:mx-10 md:mx-12 shrink-0 hidden sm:block" />
                  )}
                  <AnimatedNumber
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    label={stat.label}
                    decimals={stat.decimals}
                    numberClassName="text-[var(--gold)] text-3xl md:text-4xl"
                    labelClassName="text-[var(--gray-400)]"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

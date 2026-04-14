import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MessageSquare, BarChart3, Bot, ArrowRight } from 'lucide-react'
import {
  fadeUp,
  blurUp,
  stagger,
  staggerSlow,
  viewportOptions,
  EASE,
} from '../lib/motion'
import SectionLabel from '../components/ui/SectionLabel'
import Button from '../components/ui/Button'
import CtaBanner from '../components/sections/CtaBanner'

const layers = [
  {
    icon: MessageSquare,
    name: 'Chat Interface',
    tagline: 'Ask anything. Get answers instantly.',
    body: 'The conversational layer gives energy managers and finance teams the ability to ask any question about their energy portfolio and receive a real, cited answer in seconds. No dashboards to navigate. No analysts to email. Ask a question, get the truth.',
    body2:
      'The chat interface draws from every bill, contract, tariff, and data source in your portfolio. Answers are sourced and traceable — not generated from thin air. When your CFO asks why costs spiked last quarter, you have the answer before you leave the meeting.',
  },
  {
    icon: BarChart3,
    name: 'Intelligent Dashboard',
    tagline: 'Proactive intelligence, not passive data.',
    body: "Most energy dashboards show you what happened. Clear Current's dashboard tells you what to do about it. The system continuously monitors every data point in your portfolio and surfaces anomalies, trends, and opportunities before they become problems.",
    body2:
      "Alerts are prioritized by impact — not chronological order. You see what matters most first: billing errors that need disputes, contracts approaching renewal, rate changes that affect your bottom line, and procurement windows you're about to miss.",
  },
  {
    icon: Bot,
    name: 'Autonomous Agent',
    tagline: 'The system works while you sleep.',
    body: "The autonomous layer takes action on your behalf. When the platform identifies a billing error, it doesn't just flag it — it prepares the dispute documentation. When a contract is approaching renewal, it doesn't just alert you — it runs the analysis.",
    body2:
      "This layer turns Clear Current from a tool into a team member. It handles the work that your energy managers don't have time for, at a speed and accuracy that manual processes can't match.",
  },
]

const solutionLinks = [
  {
    name: 'Billing Intelligence',
    href: '/solutions/billing-intelligence',
    desc: "Find what you're being overcharged",
  },
  {
    name: 'Portfolio Command Center',
    href: '/solutions/portfolio-command',
    desc: 'See every site in one view',
  },
  {
    name: 'Procurement Hub',
    href: '/solutions/procurement',
    desc: 'Streamline energy procurement',
  },
]

export default function Platform() {
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
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-32"
        >
          <motion.div variants={blurUp}>
            <SectionLabel variant="pill">The Platform</SectionLabel>
          </motion.div>
          <motion.h1
            variants={blurUp}
            className="mt-7 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white max-w-[700px]"
          >
            Three layers of AI <span className="text-[var(--gold)]">working for you</span>
          </motion.h1>
          <motion.p
            variants={blurUp}
            className="mt-7 text-xl text-white/50 max-w-[560px] leading-[1.7] font-[var(--font-sans)]"
          >
            Clear Current doesn't just show you data — it acts on it. From instant answers
            to fully autonomous action, the platform meets you where you need it.
          </motion.p>
          <motion.div variants={blurUp} className="mt-10">
            <Button variant="primary" href="/contact" large>
              Request Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Three layers — alternating with gradient transitions */}
      {layers.map((layer, i) => {
        const Icon = layer.icon
        const isLight = i % 2 === 0
        return (
          <section
            key={layer.name}
            className={`relative ${isLight ? 'bg-[var(--off-white)]' : 'bg-white'}`}
          >
            <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOptions}
                >
                  <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[var(--navy)] flex items-center justify-center">
                      <Icon size={18} className="text-[var(--gold)]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-400)] font-[var(--font-sans)]">
                      Layer {i + 1}
                    </span>
                  </motion.div>
                  <motion.h2
                    variants={fadeUp}
                    className="text-3xl md:text-[44px] leading-[1.1] tracking-[-0.02em] text-[var(--navy)]"
                  >
                    {layer.name}:{' '}
                    <span className="text-[var(--gray-600)]">{layer.tagline}</span>
                  </motion.h2>
                  <motion.p
                    variants={fadeUp}
                    className="mt-6 text-[16px] leading-[1.75] text-[var(--gray-900)] font-[var(--font-sans)]"
                  >
                    {layer.body}
                  </motion.p>
                  <motion.p
                    variants={fadeUp}
                    className="mt-4 text-[16px] leading-[1.75] text-[var(--gray-900)] font-[var(--font-sans)]"
                  >
                    {layer.body2}
                  </motion.p>
                </motion.div>

                {/* Unique visual per layer */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
                  viewport={{ once: true }}
                  className="hidden lg:block"
                >
                  {i === 0 && <ChatVisual />}
                  {i === 1 && <DashboardVisual />}
                  {i === 2 && <AgentVisual />}
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* Cross-links */}
      <section className="bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20">
          <h3 className="text-2xl text-[var(--navy)] mb-8">
            Explore what each module does
          </h3>
          <div className="grid md:grid-cols-12 gap-5">
            {solutionLinks.map((link, i) => (
              <Link
                key={link.href}
                to={link.href}
                className={`group flex flex-col justify-between bg-white rounded-2xl border border-[var(--gray-200)] p-6 hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300 ${
                  i === 0 ? 'md:col-span-5' : i === 1 ? 'md:col-span-4' : 'md:col-span-3'
                }`}
              >
                <div>
                  <span className="text-[var(--navy)] font-semibold font-[var(--font-sans)]">
                    {link.name}
                  </span>
                  <p className="text-[13px] text-[var(--gray-600)] font-[var(--font-sans)] mt-1">
                    {link.desc}
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[var(--gold)] group-hover:translate-x-1 transition-transform mt-4"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

function ChatVisual() {
  const messages = [
    { from: 'user', text: 'Why did our demand charges spike in March?' },
    {
      from: 'ai',
      text: 'Your Building 7 meter recorded a 340kW peak on March 12 — 28% above your 12-month average. This coincided with a chiller startup after the maintenance window.',
    },
    { from: 'user', text: 'What would that cost us if it repeats?' },
    {
      from: 'ai',
      text: '$4,200/mo in additional demand charges based on your current rate schedule.',
    },
  ]

  return (
    <div className="rounded-2xl bg-white border border-[var(--gray-200)] shadow-[0_2px_8px_rgba(10,22,40,0.04)] overflow-hidden">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-[var(--gray-200)] bg-[var(--off-white)]">
        <div className="w-6 h-6 rounded-md bg-[var(--navy)] flex items-center justify-center">
          <MessageSquare size={10} className="text-[var(--gold)]" strokeWidth={2} />
        </div>
        <span className="text-[13px] font-semibold text-[var(--navy)] font-[var(--font-sans)]">
          Clear Current Chat
        </span>
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[10px] text-[var(--gray-400)] font-[var(--font-sans)]">
            Live
          </span>
        </div>
      </div>
      <div className="p-5 space-y-3">
        {messages.map((msg, j) => (
          <div
            key={j}
            className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-xl px-4 py-2.5 text-[12px] leading-[1.6] font-[var(--font-sans)] ${
                msg.from === 'user'
                  ? 'bg-[var(--navy)] text-white/90 rounded-br-sm'
                  : 'bg-[var(--off-white)] text-[var(--navy)] border border-[var(--gray-200)] rounded-bl-sm'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-2 border-t border-[var(--gray-200)]">
          <div className="flex-1 h-8 rounded-lg bg-[var(--off-white)] border border-[var(--gray-200)] px-3 flex items-center">
            <span className="text-[11px] text-[var(--gray-400)] font-[var(--font-sans)]">
              Ask about your portfolio...
            </span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-[var(--gold)] flex items-center justify-center">
            <ArrowRight size={12} className="text-[var(--navy)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DashboardVisual() {
  const alerts = [
    {
      severity: 'high',
      label: 'Billing error detected',
      site: 'Building 7 — Duke Energy',
      value: '$14,200',
      color: 'bg-red-500',
    },
    {
      severity: 'med',
      label: 'Contract renewal in 45 days',
      site: 'Campus West — AEP Ohio',
      value: '3 sites',
      color: 'bg-amber-500',
    },
    {
      severity: 'low',
      label: 'Rate optimization available',
      site: 'HQ — ConEd',
      value: '$2,800/yr',
      color: 'bg-emerald-500',
    },
  ]

  return (
    <div className="rounded-2xl bg-white border border-[var(--gray-200)] shadow-[0_2px_8px_rgba(10,22,40,0.04)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--gray-200)] bg-[var(--off-white)]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[var(--navy)] flex items-center justify-center">
            <BarChart3 size={10} className="text-[var(--gold)]" strokeWidth={2} />
          </div>
          <span className="text-[13px] font-semibold text-[var(--navy)] font-[var(--font-sans)]">
            Priority Alerts
          </span>
        </div>
        <span className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-semibold font-[var(--font-sans)]">
          3 active
        </span>
      </div>

      <div className="p-4 space-y-3">
        {alerts.map((alert, j) => (
          <div
            key={j}
            className="flex items-start gap-3 p-3 rounded-xl border border-[var(--gray-200)] hover:border-[var(--gray-400)]/30 transition-colors"
          >
            <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${alert.color}`} />
            <div className="flex-1 min-w-0">
              <p className="text-[12px] font-semibold text-[var(--navy)] font-[var(--font-sans)] truncate">
                {alert.label}
              </p>
              <p className="text-[11px] text-[var(--gray-400)] font-[var(--font-sans)] mt-0.5 truncate">
                {alert.site}
              </p>
            </div>
            <span className="text-[12px] font-semibold text-[var(--navy)] font-[var(--font-sans)] shrink-0 tabular-nums">
              {alert.value}
            </span>
          </div>
        ))}
      </div>

      {/* Mini chart */}
      <div className="px-5 pb-5">
        <div className="rounded-xl border border-[var(--gray-200)] p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-semibold text-[var(--gray-400)] font-[var(--font-sans)] uppercase tracking-wider">
              Portfolio spend — 12mo
            </span>
            <span className="text-[11px] text-[var(--navy)] font-semibold font-[var(--font-sans)]">
              $18.2M
            </span>
          </div>
          <svg viewBox="0 0 240 48" className="w-full" aria-hidden="true">
            <polyline
              points="0,40 20,38 40,36 60,32 80,34 100,28 120,30 140,24 160,20 180,18 200,22 220,16 240,12"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="0,40 20,38 40,36 60,32 80,34 100,28 120,30 140,24 160,20 180,18 200,22 220,16 240,12"
              fill="url(#chartGrad)"
              stroke="none"
              opacity="0.08"
            />
            <defs>
              <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--navy)" />
                <stop offset="100%" stopColor="var(--navy)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

function AgentVisual() {
  const tasks = [
    { status: 'done', label: 'Detected billing error — Building 7', time: '2 min ago' },
    {
      status: 'done',
      label: 'Cross-referenced rate schedule TOU-GS-3',
      time: '2 min ago',
    },
    {
      status: 'done',
      label: 'Calculated overpayment: $14,200 over 8 months',
      time: '1 min ago',
    },
    { status: 'active', label: 'Generating dispute documentation...', time: 'Now' },
    { status: 'pending', label: 'Submit to Duke Energy dispute portal', time: 'Queued' },
  ]

  return (
    <div className="rounded-2xl bg-white border border-[var(--gray-200)] shadow-[0_2px_8px_rgba(10,22,40,0.04)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--gray-200)] bg-[var(--off-white)]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[var(--navy)] flex items-center justify-center">
            <Bot size={10} className="text-[var(--gold)]" strokeWidth={2} />
          </div>
          <span className="text-[13px] font-semibold text-[var(--navy)] font-[var(--font-sans)]">
            Agent Activity
          </span>
        </div>
        <span className="text-[10px] bg-[var(--gold)]/10 text-[var(--gold)] px-2 py-0.5 rounded-full font-semibold font-[var(--font-sans)]">
          Working
        </span>
      </div>

      <div className="p-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[var(--gray-200)]" />

          <div className="space-y-0">
            {tasks.map((task, j) => (
              <div key={j} className="flex items-start gap-3 py-2.5 relative">
                <div
                  className={`w-[15px] h-[15px] rounded-full border-2 shrink-0 z-10 bg-white flex items-center justify-center ${
                    task.status === 'done'
                      ? 'border-emerald-500'
                      : task.status === 'active'
                        ? 'border-[var(--gold)]'
                        : 'border-[var(--gray-200)]'
                  }`}
                >
                  {task.status === 'done' && (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path
                        d="M1.5 4L3.5 6L6.5 2"
                        stroke="rgb(16,185,129)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {task.status === 'active' && (
                    <div className="w-[5px] h-[5px] rounded-full bg-[var(--gold)] animate-pulse" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-[12px] font-[var(--font-sans)] leading-snug truncate ${
                      task.status === 'pending'
                        ? 'text-[var(--gray-400)]'
                        : 'text-[var(--navy)]'
                    } ${task.status === 'active' ? 'font-semibold' : ''}`}
                  >
                    {task.label}
                  </p>
                  <p className="text-[10px] text-[var(--gray-400)] font-[var(--font-sans)] mt-0.5">
                    {task.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Output preview */}
      <div className="px-5 pb-5">
        <div className="rounded-xl bg-[var(--off-white)] border border-[var(--gray-200)] p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold text-[var(--navy)] font-[var(--font-sans)]">
              dispute_building7_duke.pdf
            </span>
            <span className="text-[10px] text-[var(--gray-400)] font-[var(--font-sans)]">
              Generating...
            </span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-[var(--gray-200)] w-full" />
            <div className="h-2 rounded bg-[var(--gray-200)] w-[85%]" />
            <div className="h-2 rounded bg-[var(--gray-200)] w-[60%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Shield, Clock, CheckCircle } from 'lucide-react'
import {
  fadeUp,
  blurUp,
  stagger,
  staggerSlow,
  viewportOptions,
  EASE,
} from '../lib/motion'
import { contactStats } from '../data/stats'
import { testimonials } from '../data/testimonials'
import SectionLabel from '../components/ui/SectionLabel'
import AnimatedNumber from '../components/ui/AnimatedNumber'
import Button from '../components/ui/Button'

const interestOptions = [
  'Billing Audit',
  'Portfolio Management',
  'Energy Procurement',
  'Platform Overview',
  'Other',
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    interest: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // TODO: wire to form backend (HubSpot, Resend, etc.)
    console.log('Demo request:', formData)
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero band */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_30%_50%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(245,197,24,0.03)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--off-white)]/80 to-transparent z-10" />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-28"
        >
          <motion.div variants={blurUp}>
            <SectionLabel variant="pill">Contact</SectionLabel>
          </motion.div>
          <motion.h1
            variants={blurUp}
            className="mt-6 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white max-w-[700px]"
          >
            Let's find what your bills{' '}
            <span className="text-[var(--gold)]">are hiding.</span>
          </motion.h1>
          <motion.p
            variants={blurUp}
            className="mt-5 text-xl text-white/50 max-w-[520px] leading-[1.7] font-[var(--font-sans)]"
          >
            Most enterprises overpay on energy without knowing it. Our team will show you
            exactly what's in your portfolio — no commitment required.
          </motion.p>
        </motion.div>
      </section>

      {/* Form + selling section */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-20 items-start">
            {/* Left column — form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="bg-white rounded-3xl border border-[var(--gray-200)] shadow-[0_4px_24px_rgba(10,22,40,0.06)] p-12 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[var(--gold)]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={28} className="text-[var(--gold)]" />
                  </div>
                  <h2 className="text-2xl text-[var(--navy)] mb-3">
                    Demo request received.
                  </h2>
                  <p className="text-[var(--gray-600)] font-[var(--font-sans)]">
                    We respond within one business day. Check your inbox for a
                    confirmation.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-3xl border border-[var(--gray-200)] shadow-[0_4px_24px_rgba(10,22,40,0.06)] p-8 md:p-10 lg:p-12">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-[var(--navy)] flex items-center justify-center">
                      <Send size={16} className="text-[var(--gold)]" />
                    </div>
                    <h2 className="text-[22px] font-semibold text-[var(--navy)] font-[var(--font-sans)]">
                      Request a Demo
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormInput
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="Work Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                    <FormInput
                      name="jobTitle"
                      placeholder="Job Title"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                    />
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      aria-label="Area of Interest"
                      className="w-full px-4 py-3.5 rounded-xl border border-[var(--gray-200)] text-sm font-[var(--font-sans)] text-[var(--gray-900)] bg-white focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all appearance-none hover:border-[var(--gray-400)]"
                    >
                      <option value="" disabled>
                        Area of Interest
                      </option>
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message (optional)"
                      aria-label="Message"
                      rows={3}
                      className="w-full px-4 py-3.5 rounded-xl border border-[var(--gray-200)] text-sm font-[var(--font-sans)] text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all resize-none hover:border-[var(--gray-400)]"
                    />
                    <Button type="submit" variant="primary" fullWidth>
                      Request Demo
                    </Button>

                    <div className="flex items-center justify-center gap-4 mt-2">
                      <span className="flex items-center gap-1.5 text-[12px] text-[var(--gray-400)] font-[var(--font-sans)]">
                        <Clock size={12} /> Responds in 1 business day
                      </span>
                      <span className="flex items-center gap-1.5 text-[12px] text-[var(--gray-400)] font-[var(--font-sans)]">
                        <Shield size={12} /> No commitment required
                      </span>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Right column — selling */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              className="lg:sticky lg:top-32"
            >
              {/* Quotes — primary research (anonymized attributions) */}
              <div className="flex flex-col gap-5">
                {testimonials.slice(0, 2).map((t, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white rounded-2xl border border-[var(--gray-200)] p-6"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-[var(--gray-200)] shrink-0 overflow-hidden">
                        {t.photo && (
                          <img
                            src={t.photo}
                            alt=""
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div>
                        <p className="text-[15px] leading-[1.65] text-[var(--navy)] font-[var(--font-sans)]">
                          "{t.quote.slice(0, 140)}…"
                        </p>
                        <p className="mt-2 text-[13px] text-[var(--gray-600)] font-[var(--font-sans)]">
                          {t.title}
                          {t.company ? ` · ${t.company}` : ''}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="mt-8 grid grid-cols-2 gap-5"
              >
                {contactStats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white rounded-2xl border border-[var(--gray-200)] p-5"
                  >
                    <AnimatedNumber
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      label={stat.label}
                      className="items-start"
                      numberClassName="text-[var(--navy)] text-3xl"
                      labelClassName="text-[var(--gray-600)]"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

function FormInput({ name, type = 'text', placeholder, value, onChange, required }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      aria-label={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-3.5 rounded-xl border border-[var(--gray-200)] text-sm font-[var(--font-sans)] text-[var(--gray-900)] placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:border-transparent transition-all hover:border-[var(--gray-400)]"
    />
  )
}

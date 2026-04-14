import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Zap } from 'lucide-react'
import { footerLinks } from '../../data/navigation'
import Button from '../ui/Button'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    // TODO: wire to newsletter provider
    console.log('Subscribe:', email)
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-[var(--navy)]">
      {/* Newsletter */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-20 pb-14">
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 md:p-12">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <h3 className="text-white text-2xl leading-snug">
                Stay ahead of energy cost complexity.
              </h3>
              <p className="mt-2 text-white/30 text-sm font-[var(--font-sans)]">
                Monthly insights on billing errors, procurement, and AI in energy
                management. No spam.
              </p>
            </div>
            <div>
              {subscribed ? (
                <p className="text-[var(--gold)] text-sm font-semibold font-[var(--font-sans)]">
                  ✓ Subscribed. Check your inbox.
                </p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <div className="relative flex-1">
                    <Mail
                      size={16}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20"
                    />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Work email"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder:text-white/25 text-sm font-[var(--font-sans)] focus:outline-none focus:border-[var(--gold)]/40 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="shrink-0 px-6 py-3.5 rounded-xl bg-white/10 text-white text-sm font-semibold font-[var(--font-sans)] border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center">
                <Zap size={14} className="text-[var(--gold)]" strokeWidth={2} />
              </div>
              <span className="font-[var(--font-display)] text-white text-lg">
                Clear Current
              </span>
            </div>
            <p className="text-[13px] text-white/25 font-[var(--font-sans)] leading-relaxed max-w-[240px]">
              Energy intelligence for enterprises that refuse to overpay.
            </p>
          </div>

          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Industries" links={footerLinks.industries} />
          <FooterColumn
            title="Company"
            links={[...footerLinks.company, ...footerLinks.resources]}
          />
          <FooterColumn title="Contact" links={footerLinks.contact} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pb-8">
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-white/20 text-[13px] font-[var(--font-sans)]">
            © Clear Current Technologies Inc. {new Date().getFullYear()}
          </span>
          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="py-2 px-1 text-white/20 text-[13px] font-[var(--font-sans)] hover:text-[var(--gold)] transition-colors min-h-[44px] flex items-center sm:min-h-0"
            >
              Privacy Policy
            </Link>
            <span className="text-white/10 flex items-center">·</span>
            <Link
              to="/terms"
              className="py-2 px-1 text-white/20 text-[13px] font-[var(--font-sans)] hover:text-[var(--gold)] transition-colors min-h-[44px] flex items-center sm:min-h-0"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/30 font-[var(--font-sans)] mb-4">
        {title}
      </h4>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.name}>
            {link.href.startsWith('http') || link.href.startsWith('mailto') ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1.5 text-white/40 text-[13px] font-[var(--font-sans)] hover:text-[var(--gold)] transition-colors min-h-[44px] flex items-center sm:min-h-0"
              >
                {link.name}
              </a>
            ) : (
              <Link
                to={link.href}
                className="block py-1.5 text-white/40 text-[13px] font-[var(--font-sans)] hover:text-[var(--gold)] transition-colors min-h-[44px] flex items-center sm:min-h-0"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

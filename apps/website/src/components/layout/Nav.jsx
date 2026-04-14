import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Zap } from 'lucide-react'
import { solutions, industries } from '../../data/navigation'
import Button from '../ui/Button'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const dropdownTimeout = useRef(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  function openDropdown(name) {
    clearTimeout(dropdownTimeout.current)
    setActiveDropdown(name)
  }

  function closeDropdown() {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-16">
          {/* Logo with mark */}
          <Link to="/" className="shrink-0 flex items-center gap-2.5 group">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                scrolled ? 'bg-[var(--navy)]' : 'bg-white/10'
              }`}
            >
              <Zap size={16} className="text-[var(--gold)]" strokeWidth={2} />
            </div>
            <span
              className={`font-[var(--font-display)] text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-[var(--navy)]' : 'text-white'
              }`}
            >
              Clear Current
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            <DropdownTrigger
              label="Solutions"
              isOpen={activeDropdown === 'solutions'}
              onOpen={() => openDropdown('solutions')}
              onClose={closeDropdown}
              scrolled={scrolled}
            >
              <DropdownPanel
                onMouseEnter={() => openDropdown('solutions')}
                onMouseLeave={closeDropdown}
              >
                {solutions.map((item) => (
                  <DropdownItem key={item.href} {...item} />
                ))}
              </DropdownPanel>
            </DropdownTrigger>

            <NavLink to="/platform" scrolled={scrolled}>
              Platform
            </NavLink>

            <DropdownTrigger
              label="Industries"
              isOpen={activeDropdown === 'industries'}
              onOpen={() => openDropdown('industries')}
              onClose={closeDropdown}
              scrolled={scrolled}
            >
              <DropdownPanel
                onMouseEnter={() => openDropdown('industries')}
                onMouseLeave={closeDropdown}
                narrow
              >
                {industries.map((item) => (
                  <DropdownItem key={item.href} name={item.name} href={item.href} />
                ))}
              </DropdownPanel>
            </DropdownTrigger>

            <DropdownTrigger
              label="Resources"
              isOpen={activeDropdown === 'resources'}
              onOpen={() => openDropdown('resources')}
              onClose={closeDropdown}
              scrolled={scrolled}
            >
              <DropdownPanel
                onMouseEnter={() => openDropdown('resources')}
                onMouseLeave={closeDropdown}
                narrow
              >
                <DropdownItem
                  name="Case Studies"
                  href="/case-studies"
                  description="Real results from real portfolios"
                />
                <DropdownItem
                  name="Blog"
                  href="/blog"
                  description="Insights on energy and AI"
                />
                <DropdownItem name="Press" href="/press" />
              </DropdownPanel>
            </DropdownTrigger>
            <NavLink to="/about" scrolled={scrolled}>
              About
            </NavLink>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="primary" href="/contact" arrow>
              Request Demo
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2.5 -mr-2.5 min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} className={scrolled ? 'text-[var(--navy)]' : 'text-white'} />
            ) : (
              <Menu
                size={24}
                className={scrolled ? 'text-[var(--navy)]' : 'text-white'}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[var(--navy)] flex flex-col pt-20 px-6 pb-8 overflow-y-auto"
          >
            {/* Ambient texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,197,24,0.04)_0%,transparent_50%)] pointer-events-none" />

            <div className="relative flex flex-col gap-1 flex-1">
              <MobileSection title="Solutions">
                {solutions.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <MobileLink to={item.href}>{item.name}</MobileLink>
                  </motion.div>
                ))}
              </MobileSection>
              <MobileLink to="/platform" large>
                Platform
              </MobileLink>
              <MobileSection title="Industries">
                {industries.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <MobileLink to={item.href}>{item.name}</MobileLink>
                  </motion.div>
                ))}
              </MobileSection>
              <MobileSection title="Resources">
                {[
                  { href: '/case-studies', name: 'Case Studies' },
                  { href: '/blog', name: 'Blog' },
                  { href: '/press', name: 'Press' },
                ].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <MobileLink to={item.href}>{item.name}</MobileLink>
                  </motion.div>
                ))}
              </MobileSection>
              <MobileLink to="/about" large>
                About
              </MobileLink>
            </div>

            <div className="relative mt-6 pt-6 border-t border-white/10">
              <p className="text-white/30 text-sm font-[var(--font-sans)] mb-4">
                transparency@clearcurrent.ai
              </p>
              <Button variant="primary" href="/contact" fullWidth large>
                Request Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function NavLink({ to, children, scrolled }) {
  return (
    <Link
      to={to}
      className={`relative px-3.5 py-2 text-[14px] font-medium font-[var(--font-sans)] transition-colors duration-200 group rounded-lg ${
        scrolled
          ? 'text-[var(--gray-600)] hover:text-[var(--navy)] hover:bg-[var(--gray-100)]'
          : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
      }`}
    >
      {children}
    </Link>
  )
}

function DropdownTrigger({ label, isOpen, onOpen, onClose, scrolled, children }) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={`flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium font-[var(--font-sans)] transition-colors duration-200 rounded-lg ${
          scrolled
            ? 'text-[var(--gray-600)] hover:text-[var(--navy)] hover:bg-[var(--gray-100)]'
            : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
        }`}
      >
        {label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>{isOpen && children}</AnimatePresence>
    </div>
  )
}

function DropdownPanel({ children, onMouseEnter, onMouseLeave, narrow }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-0 pt-3 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`bg-white rounded-2xl shadow-[0_24px_48px_-12px_rgba(10,22,40,0.12),0_0_0_1px_rgba(0,0,0,0.04)] p-2 ${
          narrow ? 'min-w-[240px]' : 'min-w-[360px]'
        }`}
      >
        <div className="flex flex-col">{children}</div>
      </div>
    </motion.div>
  )
}

function DropdownItem({ name, href, description }) {
  return (
    <Link
      to={href}
      className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-[var(--gray-100)] transition-colors group/item"
    >
      <span className="text-[14px] font-semibold text-[var(--navy)] font-[var(--font-sans)] group-hover/item:text-[var(--navy)]">
        {name}
      </span>
      {description && (
        <span className="text-[12px] text-[var(--gray-600)] font-[var(--font-sans)] leading-relaxed">
          {description}
        </span>
      )}
    </Link>
  )
}

function MobileSection({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex items-center justify-between w-full py-4 text-xl text-white font-medium font-[var(--font-sans)]"
      >
        {title}
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 text-white/40 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden pl-4 pb-3"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileLink({ to, children, large }) {
  return (
    <Link
      to={to}
      className={`block py-3.5 text-white/70 hover:text-white font-[var(--font-sans)] transition-colors ${
        large
          ? 'text-xl font-medium text-white border-b border-white/[0.06]'
          : 'text-base'
      }`}
    >
      {children}
    </Link>
  )
}

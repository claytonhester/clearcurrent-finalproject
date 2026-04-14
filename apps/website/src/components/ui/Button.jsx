import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { cn } from '../../lib/cn'

const variantStyles = {
  primary:
    'bg-[var(--gold)] text-[var(--navy)] shadow-[0_1px_0_rgba(0,0,0,0.06),0_6px_20px_-4px_rgba(10,22,40,0.35)] hover:bg-[var(--gold-hover)] hover:shadow-[0_1px_0_rgba(0,0,0,0.06),0_12px_28px_-4px_rgba(10,22,40,0.4)] active:shadow-[0_1px_0_rgba(0,0,0,0.06),0_2px_6px_-2px_rgba(10,22,40,0.3)] active:translate-y-[0.5px] before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-b before:from-white/25 before:to-transparent before:pointer-events-none',
  secondary:
    'border border-[var(--navy)]/15 text-[var(--navy)] shadow-[0_1px_2px_rgba(0,0,0,0.05)] hover:bg-[var(--navy)] hover:text-white hover:shadow-[0_4px_12px_-2px_rgba(10,22,40,0.3)] active:translate-y-[0.5px]',
  ghost: 'text-[var(--gray-600)] hover:text-[var(--navy)]',
  'ghost-white':
    'text-white/70 hover:text-white border border-white/10 hover:border-white/25 hover:bg-white/[0.06] backdrop-blur-sm',
}

export default function Button({
  variant = 'primary',
  href,
  children,
  className,
  large,
  fullWidth,
  type = 'button',
  arrow,
  ...props
}) {
  const showArrow = arrow ?? variant === 'primary'
  const base = cn(
    'relative inline-flex items-center justify-center gap-2 font-[var(--font-sans)] font-semibold text-[15px] tracking-[0.01em] rounded-xl transition-all duration-200 cursor-pointer overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2',
    large ? 'px-10 py-[18px] text-base' : 'px-7 py-3.5',
    fullWidth && 'w-full',
    variantStyles[variant],
    (variant === 'ghost' || variant === 'ghost-white') && 'group',
    className,
  )

  const motionProps = {
    whileHover: {
      y: variant === 'primary' || variant === 'secondary' ? -2 : 0,
      transition: { type: 'spring', stiffness: 400, damping: 25 },
    },
    whileTap: { scale: 0.97, y: 0 },
  }

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
      {(variant === 'ghost' || variant === 'ghost-white') && <GhostUnderline />}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto')
    if (isExternal) {
      return (
        <motion.a
          href={href}
          className={base}
          target="_blank"
          rel="noopener noreferrer"
          {...motionProps}
          {...props}
        >
          {content}
        </motion.a>
      )
    }
    return (
      <motion.div {...motionProps} className="inline-flex">
        <Link to={href} className={base} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button type={type} className={base} {...motionProps} {...props}>
      {content}
    </motion.button>
  )
}

function GhostUnderline() {
  return (
    <span className="absolute bottom-2.5 left-7 right-7 h-px bg-current scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
  )
}

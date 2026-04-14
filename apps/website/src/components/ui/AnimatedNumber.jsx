import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, motion, animate } from 'framer-motion'
import { cn } from '../../lib/cn'

export default function AnimatedNumber({
  value,
  prefix = '',
  suffix = '',
  label,
  decimals = 0,
  className,
  numberClassName,
  labelClassName,
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const displayRef = useRef(null)

  useEffect(() => {
    if (!isInView) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      if (displayRef.current) {
        displayRef.current.textContent =
          decimals > 0 ? value.toFixed(decimals) : Math.round(value)
      }
      return
    }

    const controls = animate(motionValue, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (displayRef.current) {
          displayRef.current.textContent =
            decimals > 0 ? v.toFixed(decimals) : Math.round(v)
        }
      },
    })

    return controls.stop
  }, [isInView, motionValue, value, decimals])

  return (
    <div ref={ref} className={cn('flex flex-col items-center', className)}>
      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'font-[var(--font-display)] text-5xl md:text-6xl tabular-nums',
          numberClassName,
        )}
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {prefix}
        <span ref={displayRef}>0</span>
        {suffix}
      </motion.div>
      {label && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={cn('text-[13px] tracking-[0.02em] mt-2', labelClassName)}
        >
          {label}
        </motion.p>
      )}
    </div>
  )
}

import { motion } from 'framer-motion'
import { fadeIn, viewportOptions } from '../../lib/motion'
import LogoMarquee from '../ui/LogoMarquee'

export default function LogoWall() {
  return (
    <section className="bg-white py-16 md:py-20">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20"
      >
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-center">
          <div>
            <p className="text-[13px] tracking-[0.08em] uppercase text-[var(--gray-400)] font-semibold font-[var(--font-sans)]">
              Trusted by energy leaders
            </p>
            <p className="text-[13px] text-[var(--gray-400)] font-[var(--font-sans)] mt-1">
              Across industries and scale
            </p>
          </div>
          {/* TODO: confirm with John/Dan — replace badges with real customer logos when available */}
          <LogoMarquee />
        </div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOptions } from '../../lib/motion'
import Button from '../ui/Button'

export default function CtaBanner() {
  return (
    <section className="relative bg-[var(--navy)] overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_120%,rgba(245,197,24,0.06)_0%,transparent_70%)]" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative"
        >
          {/* Inner container — glass panel */}
          <div className="max-w-3xl mx-auto rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm px-10 py-16 md:px-16 md:py-20 text-center">
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-[48px] leading-[1.1] tracking-[-0.02em] text-white"
            >
              Ready to stop overpaying on energy?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-lg text-white/50 font-[var(--font-sans)]"
            >
              Most audits find errors in the first 30 days. Let's start with yours.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10">
              <Button variant="primary" href="/contact" large>
                Request Demo
              </Button>
            </motion.div>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[13px] text-white/30 font-[var(--font-sans)]"
            >
              No commitment required.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

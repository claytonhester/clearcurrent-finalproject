import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, blurUp, stagger, staggerSlow, viewportOptions } from '../../lib/motion'
import { blogPosts } from '../../data/blog'
import SectionLabel from '../../components/ui/SectionLabel'
import CtaBanner from '../../components/sections/CtaBanner'

export default function Blog() {
  return (
    <>
      {/* Hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_40%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[var(--off-white)]/80 to-transparent z-10" />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-24"
        >
          <motion.div variants={blurUp}>
            <SectionLabel variant="pill">Resources</SectionLabel>
          </motion.div>
          <motion.h1
            variants={blurUp}
            className="mt-6 text-4xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-[-0.03em] text-white"
          >
            Blog
          </motion.h1>
          <motion.p
            variants={blurUp}
            className="mt-4 text-xl text-white/50 font-[var(--font-sans)]"
          >
            Insights on energy management, billing errors, and AI.
          </motion.p>
        </motion.div>
      </section>

      {/* Post grid */}
      <section className="bg-[var(--off-white)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-24 lg:py-[120px]">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid md:grid-cols-12 gap-5"
          >
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.slug}
                variants={fadeUp}
                className={i === 0 ? 'md:col-span-7' : 'md:col-span-5'}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block h-full bg-white rounded-2xl border border-[var(--gray-200)] p-8 lg:p-10 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(10,22,40,0.08)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
                    {post.category}
                  </span>
                  <h2
                    className={`mt-3 font-semibold text-[var(--navy)] font-[var(--font-sans)] leading-snug group-hover:text-[var(--navy)]/80 transition-colors ${
                      i === 0 ? 'text-2xl' : 'text-xl'
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.65] text-[var(--gray-600)] font-[var(--font-sans)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-[13px] text-[var(--gray-400)] font-[var(--font-sans)]">
                      {post.date}
                    </span>
                    <span className="text-sm text-[var(--gold)] font-semibold font-[var(--font-sans)]">
                      Read more →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

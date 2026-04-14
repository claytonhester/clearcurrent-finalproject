import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, blurUp, stagger, staggerSlow, viewportOptions } from '../../lib/motion'
import { blogPosts } from '../../data/blog'
import Button from '../../components/ui/Button'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 text-center">
        <h1 className="text-4xl text-[var(--navy)]">Post not found</h1>
        <Link
          to="/blog"
          className="mt-4 inline-block text-[var(--gold)] font-semibold font-[var(--font-sans)]"
        >
          Back to blog →
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Article hero — dark */}
      <section className="relative bg-[var(--navy-mid)] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(26,51,87,0.8)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/80 to-transparent z-10" />

        <motion.div
          variants={staggerSlow}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[720px] mx-auto px-6 md:px-12 pt-32 pb-24"
        >
          <motion.div variants={blurUp}>
            <Link
              to="/blog"
              className="inline-flex items-center py-2 pr-3 text-sm text-white/30 font-[var(--font-sans)] hover:text-white/60 transition-colors min-h-[44px]"
            >
              ← Back to blog
            </Link>
          </motion.div>

          <motion.div variants={blurUp} className="mt-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
              {post.category}
            </span>
          </motion.div>

          <motion.h1
            variants={blurUp}
            className="mt-3 text-3xl md:text-[44px] leading-[1.1] tracking-[-0.02em] text-white"
          >
            {post.title}
          </motion.h1>

          <motion.p
            variants={blurUp}
            className="mt-4 text-sm text-white/30 font-[var(--font-sans)]"
          >
            {post.date}
          </motion.p>
        </motion.div>
      </section>

      {/* Article body */}
      <article className="bg-white">
        <div className="max-w-[720px] mx-auto px-6 md:px-12 py-16 md:py-20 lg:py-24">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            {post.body.split('\n\n').map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className="mb-6 text-[17px] leading-[1.8] text-[var(--gray-900)] font-[var(--font-sans)]"
              >
                {para}
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              className="mt-16 pt-10 border-t border-[var(--gray-200)]"
            >
              <p className="text-2xl text-[var(--navy)] font-[var(--font-display)] leading-snug">
                Ready to see what's in your bills?
              </p>
              <div className="mt-5">
                <Button variant="primary" href="/contact">
                  Request Demo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </article>
    </>
  )
}

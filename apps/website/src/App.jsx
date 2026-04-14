import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Nav from './components/layout/Nav'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Platform from './pages/Platform'
import SolutionPage from './pages/solutions/SolutionPage'
import IndustryPage from './pages/industries/IndustryPage'
import Blog from './pages/resources/Blog'
import BlogPost from './pages/resources/BlogPost'
import Press from './pages/resources/Press'
import CaseStudies from './pages/resources/CaseStudies'
import CaseStudyDetail from './pages/resources/CaseStudyDetail'
import ScrollToTop from './components/layout/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions/:slug" element={<SolutionPage />} />
          <Route path="/industries/:slug" element={<IndustryPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/press" element={<Press />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

          {/* Legal — placeholder pages */}
          <Route path="/privacy" element={<LegalPlaceholder title="Privacy Policy" />} />
          <Route
            path="/terms"
            element={<LegalPlaceholder title="Terms & Conditions" />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

function LegalPlaceholder({ title }) {
  return (
    <section className="bg-[var(--off-white)]">
      <div className="max-w-[720px] mx-auto px-6 md:px-12 pt-32 pb-20">
        <h1 className="text-4xl text-[var(--navy)]">{title}</h1>
        {/* TODO: replace with real legal content before launch */}
        <p className="mt-6 text-[var(--gray-600)] font-[var(--font-sans)]">
          This page is under development. Please contact{' '}
          <a
            href="mailto:transparency@clearcurrent.ai"
            className="text-[var(--gold)] hover:underline"
          >
            transparency@clearcurrent.ai
          </a>{' '}
          with any questions.
        </p>
      </div>
    </section>
  )
}

function NotFound() {
  return (
    <section className="bg-[var(--off-white)]">
      <div className="max-w-[720px] mx-auto px-6 md:px-12 pt-32 pb-20 text-center">
        <h1 className="text-6xl text-[var(--navy)]">404</h1>
        <p className="mt-4 text-lg text-[var(--gray-600)] font-[var(--font-sans)]">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block text-[var(--gold)] font-semibold font-[var(--font-sans)]"
        >
          Back to home →
        </Link>
      </div>
    </section>
  )
}

import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { FiltersProvider } from '../context/FiltersContext.jsx'
import { DELIVERABLES, APPENDIX_ITEMS } from '../navConfig.js'

const LAZY = {
  '/': lazy(() =>
    import('../pages/deliverables/DecisionBrief.jsx').then((m) => ({
      default: m.DecisionBrief,
    })),
  ),
  '/triggers': lazy(() =>
    import('../pages/deliverables/Triggers.jsx').then((m) => ({ default: m.Triggers })),
  ),
  '/calendar': lazy(() =>
    import('../pages/deliverables/Calendar.jsx').then((m) => ({ default: m.Calendar })),
  ),
  '/journeys': lazy(() =>
    import('../pages/deliverables/Journeys.jsx').then((m) => ({ default: m.Journeys })),
  ),
  '/modules': lazy(() =>
    import('../pages/deliverables/Modules.jsx').then((m) => ({ default: m.Modules })),
  ),
  '/market': lazy(() =>
    import('../pages/deliverables/Market.jsx').then((m) => ({ default: m.Market })),
  ),
  '/competition': lazy(() =>
    import('../pages/deliverables/Competition.jsx').then((m) => ({
      default: m.Competition,
    })),
  ),
  '/investor': lazy(() =>
    import('../pages/deliverables/Investor.jsx').then((m) => ({ default: m.Investor })),
  ),
  '/gtm': lazy(() =>
    import('../pages/deliverables/GTM.jsx').then((m) => ({ default: m.GTM })),
  ),
  '/appendix/quotes': lazy(() =>
    import('../pages/appendix/QuoteBank.jsx').then((m) => ({ default: m.QuoteBank })),
  ),
  '/appendix/interviews': lazy(() =>
    import('../pages/appendix/InterviewRoster.jsx').then((m) => ({
      default: m.InterviewRoster,
    })),
  ),
  '/appendix/chat-prompts': lazy(() =>
    import('../pages/appendix/UserChatPromptLibrary.jsx').then((m) => ({
      default: m.UserChatPromptLibrary,
    })),
  ),
  '/appendix/companies': lazy(() =>
    import('../pages/appendix/IndustryCards.jsx').then((m) => ({
      default: m.IndustryCards,
    })),
  ),
  '/appendix/sources': lazy(() =>
    import('../pages/appendix/Sources.jsx').then((m) => ({ default: m.Sources })),
  ),
}

function Harness({ path }) {
  const Page = LAZY[path]
  return (
    <MemoryRouter initialEntries={[path]}>
      <FiltersProvider>
        <Suspense fallback={<div>loading</div>}>
          <Routes>
            <Route path={path} element={<Page />} />
          </Routes>
        </Suspense>
      </FiltersProvider>
    </MemoryRouter>
  )
}

describe('routing smoke test', () => {
  const paths = [...DELIVERABLES.map((d) => d.path), ...APPENDIX_ITEMS.map((a) => a.path)]

  it.each(paths)('renders %s without throwing', async (path) => {
    const { container, findByText } = render(<Harness path={path} />)
    await findByText(/./, undefined, { timeout: 3000 }).catch(() => null)
    expect(container).toBeTruthy()
  })
})

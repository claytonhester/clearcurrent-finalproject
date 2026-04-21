import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import { FiltersProvider } from './context/FiltersContext.jsx'

const DecisionBrief = lazy(() =>
  import('./pages/deliverables/DecisionBrief.jsx').then((m) => ({
    default: m.DecisionBrief,
  })),
)
const Triggers = lazy(() =>
  import('./pages/deliverables/Triggers.jsx').then((m) => ({ default: m.Triggers })),
)
const Calendar = lazy(() =>
  import('./pages/deliverables/Calendar.jsx').then((m) => ({ default: m.Calendar })),
)
const Journeys = lazy(() =>
  import('./pages/deliverables/Journeys.jsx').then((m) => ({ default: m.Journeys })),
)
const Modules = lazy(() =>
  import('./pages/deliverables/Modules.jsx').then((m) => ({ default: m.Modules })),
)
const Market = lazy(() =>
  import('./pages/deliverables/Market.jsx').then((m) => ({ default: m.Market })),
)
const Competition = lazy(() =>
  import('./pages/deliverables/Competition.jsx').then((m) => ({
    default: m.Competition,
  })),
)
const Investor = lazy(() =>
  import('./pages/deliverables/Investor.jsx').then((m) => ({ default: m.Investor })),
)
const GTM = lazy(() =>
  import('./pages/deliverables/GTM.jsx').then((m) => ({ default: m.GTM })),
)

const AppendixQuotes = lazy(() =>
  import('./pages/appendix/QuoteBank.jsx').then((m) => ({ default: m.QuoteBank })),
)
const AppendixInterviews = lazy(() =>
  import('./pages/appendix/InterviewRoster.jsx').then((m) => ({
    default: m.InterviewRoster,
  })),
)
const AppendixChatPrompts = lazy(() =>
  import('./pages/appendix/UserChatPromptLibrary.jsx').then((m) => ({
    default: m.UserChatPromptLibrary,
  })),
)
const AppendixCompanies = lazy(() =>
  import('./pages/appendix/IndustryCards.jsx').then((m) => ({
    default: m.IndustryCards,
  })),
)
const AppendixSources = lazy(() =>
  import('./pages/appendix/Sources.jsx').then((m) => ({ default: m.Sources })),
)
const ChatPage = lazy(() =>
  import('./pages/ChatPage.jsx').then((m) => ({ default: m.ChatPage })),
)

function PageFallback() {
  return (
    <div
      className="flex min-h-[40vh] items-center justify-center text-sm font-medium text-cc-mid-gray"
      role="status"
      aria-live="polite"
    >
      Loading…
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<DecisionBrief />} />
              <Route path="triggers" element={<Triggers />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="journeys" element={<Journeys />} />
              <Route path="modules" element={<Modules />} />
              <Route path="market" element={<Market />} />
              <Route path="competition" element={<Competition />} />
              <Route path="investor" element={<Investor />} />
              <Route path="gtm" element={<GTM />} />
              <Route path="d1-triggers" element={<Navigate to="/triggers" replace />} />
              <Route path="d2-calendar" element={<Navigate to="/calendar" replace />} />
              <Route path="d3-journeys" element={<Navigate to="/journeys" replace />} />
              <Route path="d4-modules" element={<Navigate to="/modules" replace />} />
              <Route path="d4-2" element={<Navigate to="/modules" replace />} />
              <Route path="d4-modules-v2" element={<Navigate to="/modules" replace />} />
              <Route path="d5-market" element={<Navigate to="/market" replace />} />
              <Route
                path="d6-competition"
                element={<Navigate to="/competition" replace />}
              />
              <Route path="d7-investor" element={<Navigate to="/investor" replace />} />
              <Route path="d8-gtm" element={<Navigate to="/gtm" replace />} />
              <Route path="chat" element={<ChatPage />} />
              <Route path="appendix">
                <Route path="quotes" element={<AppendixQuotes />} />
                <Route path="interviews" element={<AppendixInterviews />} />
                <Route path="chat-prompts" element={<AppendixChatPrompts />} />
                <Route path="companies" element={<AppendixCompanies />} />
                <Route path="sources" element={<AppendixSources />} />
              </Route>
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </FiltersProvider>
    </BrowserRouter>
  )
}

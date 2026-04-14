import { lazy, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from './components/Analytics'
import { Layout } from './components/layout/Layout'

const Overview = lazy(() =>
  import('./pages/Overview').then((m) => ({ default: m.Overview })),
)
const CeoBrief = lazy(() =>
  import('./pages/CeoBrief').then((m) => ({ default: m.CeoBrief })),
)
const TriggerMap = lazy(() =>
  import('./pages/TriggerMap').then((m) => ({ default: m.TriggerMap })),
)
const SeasonalCalendar = lazy(() =>
  import('./pages/SeasonalCalendar').then((m) => ({ default: m.SeasonalCalendar })),
)
const JourneyMaps = lazy(() =>
  import('./pages/JourneyMaps').then((m) => ({ default: m.JourneyMaps })),
)
const OpportunityHeatmap = lazy(() =>
  import('./pages/OpportunityHeatmap').then((m) => ({ default: m.OpportunityHeatmap })),
)
const ProductModules = lazy(() =>
  import('./pages/ProductModules').then((m) => ({ default: m.ProductModules })),
)
const BonusDeliverables = lazy(() =>
  import('./pages/BonusDeliverables').then((m) => ({ default: m.BonusDeliverables })),
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
      <Analytics />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="brief" element={<CeoBrief />} />
            <Route path="triggers" element={<TriggerMap />} />
            <Route path="calendar" element={<SeasonalCalendar />} />
            <Route path="journeys" element={<JourneyMaps />} />
            <Route path="heatmap" element={<OpportunityHeatmap />} />
            <Route path="modules" element={<ProductModules />} />
            <Route path="bonus" element={<BonusDeliverables />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

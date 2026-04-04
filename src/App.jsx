import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Overview } from './pages/Overview'
import { TriggerMap } from './pages/TriggerMap'
import { SeasonalCalendar } from './pages/SeasonalCalendar'
import { JourneyMaps } from './pages/JourneyMaps'
import { OpportunityHeatmap } from './pages/OpportunityHeatmap'
import { ProductModules } from './pages/ProductModules'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="triggers" element={<TriggerMap />} />
          <Route path="calendar" element={<SeasonalCalendar />} />
          <Route path="journeys" element={<JourneyMaps />} />
          <Route path="heatmap" element={<OpportunityHeatmap />} />
          <Route path="modules" element={<ProductModules />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

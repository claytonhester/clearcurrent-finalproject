import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { INDUSTRIES } from '../content/industries.ts'
import { PERSONAS } from '../content/personas.ts'

const FiltersContext = createContext(null)

const DEFAULT_INDUSTRY = 'all'
const DEFAULT_PERSONA = 'all'

const INDUSTRY_KEYS = new Set(['all', ...INDUSTRIES.map((i) => i.key)])
const PERSONA_KEYS = new Set(['all', ...PERSONAS.map((p) => p.key)])

function readFromLocation(search) {
  const params = new URLSearchParams(search)
  const rawIndustry = params.get('industry') ?? DEFAULT_INDUSTRY
  const rawPersona = params.get('persona') ?? DEFAULT_PERSONA
  return {
    industry: INDUSTRY_KEYS.has(rawIndustry) ? rawIndustry : DEFAULT_INDUSTRY,
    persona: PERSONA_KEYS.has(rawPersona) ? rawPersona : DEFAULT_PERSONA,
  }
}

export function FiltersProvider({ children }) {
  const location = useLocation()
  const navigate = useNavigate()

  const initial = readFromLocation(location.search)
  const [industry, setIndustryState] = useState(initial.industry)
  const [persona, setPersonaState] = useState(initial.persona)
  const [compareSet, setCompareSet] = useState(() => new Set())

  // Keep state in sync if the URL changes externally (e.g., nav link click)
  useEffect(() => {
    const fromUrl = readFromLocation(location.search)
    if (fromUrl.industry !== industry) setIndustryState(fromUrl.industry)
    if (fromUrl.persona !== persona) setPersonaState(fromUrl.persona)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search])

  const writeToUrl = useCallback(
    (nextIndustry, nextPersona) => {
      const params = new URLSearchParams(location.search)
      if (nextIndustry && nextIndustry !== DEFAULT_INDUSTRY) {
        params.set('industry', nextIndustry)
      } else {
        params.delete('industry')
      }
      if (nextPersona && nextPersona !== DEFAULT_PERSONA) {
        params.set('persona', nextPersona)
      } else {
        params.delete('persona')
      }
      const qs = params.toString()
      navigate(
        {
          pathname: location.pathname,
          search: qs ? `?${qs}` : '',
          hash: location.hash,
        },
        { replace: true },
      )
    },
    [location, navigate],
  )

  const setIndustry = useCallback(
    (value) => {
      setIndustryState(value)
      writeToUrl(value, persona)
    },
    [persona, writeToUrl],
  )

  const setPersona = useCallback(
    (value) => {
      setPersonaState(value)
      writeToUrl(industry, value)
    },
    [industry, writeToUrl],
  )

  const toggleCompare = useCallback((id) => {
    setCompareSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) {
        next.delete(id)
      } else if (next.size < 3) {
        next.add(id)
      }
      return next
    })
  }, [])

  const clearCompare = useCallback(() => setCompareSet(new Set()), [])

  const value = useMemo(
    () => ({
      industry,
      setIndustry,
      persona,
      setPersona,
      compareSet,
      toggleCompare,
      clearCompare,
    }),
    [industry, setIndustry, persona, setPersona, compareSet, toggleCompare, clearCompare],
  )

  return <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
}

export function useFilters() {
  const ctx = useContext(FiltersContext)
  if (!ctx) {
    throw new Error('useFilters must be used inside <FiltersProvider>')
  }
  return ctx
}

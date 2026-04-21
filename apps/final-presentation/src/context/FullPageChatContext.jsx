import { createContext, useContext, useMemo, useState } from 'react'

const noop = () => {}

/**
 * Lets the full-page /chat panel register the active topic chip + "Switch topic" in the site TopBar.
 * Default value is inert so unit tests can render a page without the provider.
 */
const FullPageChatContext = createContext({
  fullPageChatControls: null,
  setFullPageChatControls: noop,
})

export function FullPageChatProvider({ children }) {
  const [controls, setControls] = useState(null)

  const value = useMemo(
    () => ({
      fullPageChatControls: controls,
      setFullPageChatControls: setControls,
    }),
    [controls],
  )

  return (
    <FullPageChatContext.Provider value={value}>{children}</FullPageChatContext.Provider>
  )
}

export function useFullPageChatContext() {
  return useContext(FullPageChatContext)
}

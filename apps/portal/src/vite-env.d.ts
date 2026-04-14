/// <reference types="vite/client" />

declare const __APP_BUILD_TIME__: string

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string
  readonly VITE_PLAUSIBLE_DOMAIN?: string
}

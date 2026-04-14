import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Injects absolute OG/canonical URLs when `VITE_SITE_URL` is set at build time (e.g. on Vercel). */
function injectSiteMeta() {
  return {
    name: 'inject-site-meta',
    transformIndexHtml(html) {
      const raw = process.env.VITE_SITE_URL?.trim() ?? ''
      const base = raw.replace(/\/$/, '')
      let out = html
      if (base) {
        out = out.replace(/__OG_URL__/g, `${base}/`)
        out = out.replace(/__OG_IMAGE__/g, `${base}/og-image.svg`)
        out = out.replace(/__TWITTER_IMAGE__/g, `${base}/og-image.svg`)
        out = out.replace(
          '</head>',
          `    <link rel="canonical" href="${base}/" />\n  </head>`,
        )
      } else {
        out = out.replace(/\s*<meta property="og:url" content="__OG_URL__" \/>/g, '')
        out = out.replace(/__OG_IMAGE__/g, '/og-image.svg')
        out = out.replace(/__TWITTER_IMAGE__/g, '/og-image.svg')
      }
      return out
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  define: {
    __APP_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  plugins: [react(), tailwindcss(), injectSiteMeta()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  },
  build: {
    chunkSizeWarningLimit: 700,
  },
})

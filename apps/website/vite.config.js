import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://clearcurrent.ai').replace(
    /\/$/,
    '',
  )

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'index-site-url',
        transformIndexHtml(html) {
          return html.replaceAll('%SITE_URL%', siteUrl)
        },
      },
    ],
  }
})

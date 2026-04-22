import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { localChatApiPlugin } from './vite-plugin-local-chat-api.mjs'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL || 'https://clearcurrent.ai').replace(
    /\/$/,
    '',
  )

  return {
  define: {
    __APP_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  },
  /** Dev-only: POST /api/chat without `vercel dev` (see vite-plugin-local-chat-api.mjs). */
  plugins: [
    {
      name: 'index-site-url',
      transformIndexHtml(html) {
        return html.replaceAll('%SITE_URL%', siteUrl)
      },
    },
    localChatApiPlugin(),
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  },
  build: {
    chunkSizeWarningLimit: 900,
  },
}
})

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outDir = path.join(__dirname, '../public')
const W = 1200
const H = 630

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1628"/>
      <stop offset="100%" stop-color="#0f2040"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#bg)"/>
  <rect x="0" y="${H - 4}" width="100%" height="4" fill="#f5c518" fill-opacity="0.65"/>
  <g transform="translate(72, 200)">
    <g transform="scale(2)">
      <rect width="32" height="32" rx="7" fill="rgba(10, 22, 40, 0.9)"/>
      <path fill="#f5c518" d="M18.2 2.5L7.5 16.1h4.2l-2.1 11.2 9.2-9.1h-4.5l1.1-3.1 5.1-1.1L18.2 2.5z"/>
    </g>
  </g>
  <text x="72" y="340" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="400" fill="#ffffff" letter-spacing="-0.02em">Clear Current</text>
  <text x="72" y="410" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-size="32" font-weight="500" fill="#f5c518" letter-spacing="0.02em">AI Energy Management</text>
  <text x="72" y="475" font-family="ui-sans-serif, system-ui, -apple-system, sans-serif" font-size="22" font-weight="400" fill="rgba(247,248,250,0.75)">Find billing errors, surface savings, and act with confidence.</text>
</svg>`

const buf = await sharp(Buffer.from(svg)).png({ quality: 92 }).toBuffer()
const out = path.join(outDir, 'og.png')
fs.writeFileSync(out, buf)

const appleSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#0a1628" rx="40"/>
  <g transform="translate(54, 54) scale(2.25)">
    <rect width="32" height="32" rx="7" fill="#1a3357"/>
    <path fill="#f5c518" d="M18.2 2.5L7.5 16.1h4.2l-2.1 11.2 9.2-9.1h-4.5l1.1-3.1 5.1-1.1L18.2 2.5z"/>
  </g>
</svg>`
const apple = path.join(outDir, 'apple-touch-icon.png')
await sharp(Buffer.from(appleSvg)).png({ quality: 95 }).toFile(apple)
console.log('Wrote', out, 'and', apple)

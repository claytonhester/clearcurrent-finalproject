#!/usr/bin/env node
/**
 * Builds the research knowledge index for the chat assistant.
 *
 * Walks:
 *   - apps/final-presentation/src/content/deliverables/*.js  (D0–D8)
 *   - research/Call Transcripts/Clear Current — *.md         (14 interviews)
 *   - research/SECONDARY DATA/*.md                            (compendium + reports)
 *   - research/CLEAR_CURRENT_PRODUCT_CONTEXT.md
 *
 * Chunks each source (~600 tokens, ~150 token overlap), tokenizes for BM25,
 * computes corpus stats, writes a single JSON index to:
 *   apps/final-presentation/public/research-index.json
 *
 * Run: npm run build:research-index   (from apps/final-presentation)
 *      OR: node scripts/build-research-index.mjs
 *
 * Re-run anytime research files or deliverables change.
 */

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const APP_DIR = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const REPO_ROOT = path.resolve(APP_DIR, '..', '..')
const RESEARCH_DIR = path.join(REPO_ROOT, 'research')
const DELIVERABLES_DIR = path.join(APP_DIR, 'src', 'content', 'deliverables')
const OUT_PATH = path.join(APP_DIR, 'api', '_data', 'research-index.json')

const TARGET_TOKENS = 600
const OVERLAP_TOKENS = 150
const APPROX_CHARS_PER_TOKEN = 4 // rough English heuristic

const STOPWORDS = new Set([
  'a', 'about', 'above', 'after', 'again', 'against', 'all', 'am', 'an', 'and',
  'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'below',
  'between', 'both', 'but', 'by', 'can', 'did', 'do', 'does', 'doing', 'down',
  'during', 'each', 'few', 'for', 'from', 'further', 'had', 'has', 'have',
  'having', 'he', 'her', 'here', 'hers', 'herself', 'him', 'himself', 'his',
  'how', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'itself', 'just', 'me',
  'more', 'most', 'my', 'myself', 'no', 'nor', 'not', 'now', 'of', 'off', 'on',
  'once', 'only', 'or', 'other', 'our', 'ours', 'ourselves', 'out', 'over',
  'own', 's', 'same', 'she', 'should', 'so', 'some', 'such', 't', 'than',
  'that', 'the', 'their', 'theirs', 'them', 'themselves', 'then', 'there',
  'these', 'they', 'this', 'those', 'through', 'to', 'too', 'under', 'until',
  'up', 'very', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while',
  'who', 'whom', 'why', 'will', 'with', 'you', 'your', 'yours', 'yourself',
  'yourselves',
])

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[\u2018\u2019\u201c\u201d]/g, "'")
    .replace(/[^a-z0-9']+/g, ' ')
    .split(/\s+/)
    .filter((t) => t && t.length > 1 && !STOPWORDS.has(t))
}

function chunkText(text, source, baseMeta = {}) {
  const targetChars = TARGET_TOKENS * APPROX_CHARS_PER_TOKEN
  const overlapChars = OVERLAP_TOKENS * APPROX_CHARS_PER_TOKEN
  const cleaned = text.replace(/\r\n/g, '\n').trim()
  if (cleaned.length <= targetChars) {
    return [{ text: cleaned, source, ...baseMeta, chunkIndex: 0 }]
  }
  const chunks = []
  let start = 0
  let chunkIndex = 0
  while (start < cleaned.length) {
    let end = Math.min(start + targetChars, cleaned.length)
    if (end < cleaned.length) {
      // try to break on a paragraph or sentence boundary
      const slice = cleaned.slice(start, end)
      const lastBreak = Math.max(
        slice.lastIndexOf('\n\n'),
        slice.lastIndexOf('. '),
        slice.lastIndexOf('? '),
        slice.lastIndexOf('! '),
      )
      if (lastBreak > targetChars * 0.5) end = start + lastBreak + 1
    }
    chunks.push({
      text: cleaned.slice(start, end).trim(),
      source,
      chunkIndex: chunkIndex++,
      ...baseMeta,
    })
    if (end >= cleaned.length) break
    start = end - overlapChars
    if (start < 0) start = 0
  }
  return chunks
}

/** Convert a deliverable JS module's exported object into searchable text. */
function deliverableToText(name, mod) {
  const parts = [`# ${name}`]
  const seen = new WeakSet()
  const walk = (val, depth = 0) => {
    if (val == null) return
    if (typeof val === 'string') {
      parts.push(val)
      return
    }
    if (typeof val === 'number' || typeof val === 'boolean') {
      parts.push(String(val))
      return
    }
    if (Array.isArray(val)) {
      val.forEach((item) => walk(item, depth + 1))
      return
    }
    if (typeof val === 'object') {
      if (seen.has(val)) return
      seen.add(val)
      for (const [k, v] of Object.entries(val)) {
        if (typeof v === 'string') parts.push(`${k}: ${v}`)
        else walk(v, depth + 1)
      }
    }
  }
  walk(mod)
  return parts.join('\n\n')
}

async function loadDeliverables() {
  const files = await fs.readdir(DELIVERABLES_DIR)
  const docs = []
  // Map filename → topic id used by the picker
  const topicMap = {
    'brief.js': { id: 'd0', label: 'D0 — Decision Brief' },
    'd1-triggers.js': { id: 'd1', label: 'D1 — Engagement Trigger Map' },
    'd2-calendar.js': { id: 'd2', label: 'D2 — Seasonal Energy Management Calendar' },
    'd3-journeys.js': { id: 'd3', label: 'D3 — Customer Journey Maps' },
    'd4-modules.js': { id: 'd4', label: 'D4 — Product Module Recommendations' },
    'd5-market.js': { id: 'd5', label: 'D5 — Market Opportunity Heatmap' },
    'd6-competition.js': { id: 'd6', label: 'D6 — Competitive Intelligence Brief' },
    'd7-investor.js': { id: 'd7', label: 'D7 — Investor Narrative & Pitch Framework' },
    'd8-gtm.js': { id: 'd8', label: 'D8 — GTM Strategy Playbook' },
  }
  for (const file of files) {
    if (!file.endsWith('.js')) continue
    const meta = topicMap[file]
    if (!meta) continue
    const filePath = path.join(DELIVERABLES_DIR, file)
    const url = pathToFileURL(filePath).href
    const mod = await import(url)
    const exported = Object.values(mod).find((v) => v && typeof v === 'object')
    if (!exported) continue
    const text = deliverableToText(meta.label, exported)
    docs.push({
      sourceId: meta.id,
      sourceLabel: meta.label,
      sourceType: 'deliverable',
      relPath: path.relative(REPO_ROOT, filePath),
      text,
    })
  }
  return docs
}

async function loadMarkdownDir(dir, sourceType, predicate = null) {
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return []
  }
  const docs = []
  for (const entry of entries) {
    if (!entry.isFile()) continue
    if (!entry.name.endsWith('.md')) continue
    if (predicate && !predicate(entry.name)) continue
    const filePath = path.join(dir, entry.name)
    const text = await fs.readFile(filePath, 'utf8')
    if (!text.trim()) continue
    const baseLabel = entry.name.replace(/\.md$/, '')
    const sourceId =
      sourceType === 'interview' ? 'interviews' : sourceType === 'secondary' ? 'secondary' : sourceType
    docs.push({
      sourceId,
      sourceLabel: baseLabel,
      sourceType,
      relPath: path.relative(REPO_ROOT, filePath),
      text,
    })
  }
  return docs
}

async function loadProductContext() {
  const filePath = path.join(RESEARCH_DIR, 'CLEAR_CURRENT_PRODUCT_CONTEXT.md')
  try {
    const text = await fs.readFile(filePath, 'utf8')
    return [{
      sourceId: 'product-context',
      sourceLabel: 'Clear Current Product & Strategy Context',
      sourceType: 'product-context',
      relPath: path.relative(REPO_ROOT, filePath),
      text,
    }]
  } catch {
    return []
  }
}

function buildBM25(chunks) {
  // BM25 prep: doc lengths, avg length, term doc frequency, idf
  const N = chunks.length
  const docFreq = new Map()
  const docs = chunks.map((c) => {
    const tokens = tokenize(c.text)
    const tf = new Map()
    for (const t of tokens) tf.set(t, (tf.get(t) || 0) + 1)
    for (const t of tf.keys()) docFreq.set(t, (docFreq.get(t) || 0) + 1)
    return { tokens, tf: Object.fromEntries(tf), len: tokens.length }
  })
  const avgLen = docs.reduce((s, d) => s + d.len, 0) / Math.max(1, N)
  const idf = {}
  for (const [term, df] of docFreq.entries()) {
    // Robertson/Spärck Jones IDF (with +1 smoothing)
    idf[term] = Math.log(1 + (N - df + 0.5) / (df + 0.5))
  }
  return { N, avgLen, idf, docs }
}

async function main() {
  console.log('Loading sources…')
  const [deliverables, interviews, secondary, productCtx] = await Promise.all([
    loadDeliverables(),
    loadMarkdownDir(
      path.join(RESEARCH_DIR, 'Call Transcripts'),
      'interview',
      (name) => name.startsWith('Clear Current'),
    ),
    loadMarkdownDir(path.join(RESEARCH_DIR, 'SECONDARY DATA'), 'secondary'),
    loadProductContext(),
  ])

  const allDocs = [...deliverables, ...interviews, ...secondary, ...productCtx]
  console.log(
    `Sources loaded: ${deliverables.length} deliverables · ${interviews.length} interviews · ${secondary.length} secondary · ${productCtx.length} product-context`,
  )

  console.log('Chunking…')
  const chunks = []
  let id = 0
  for (const doc of allDocs) {
    const docChunks = chunkText(doc.text, doc.relPath, {
      sourceId: doc.sourceId,
      sourceLabel: doc.sourceLabel,
      sourceType: doc.sourceType,
    })
    for (const ch of docChunks) {
      chunks.push({ id: id++, ...ch })
    }
  }
  console.log(`Total chunks: ${chunks.length}`)

  console.log('Building BM25 stats…')
  const stats = buildBM25(chunks)

  // Strip the per-doc tokens array (we only need tf for scoring at query time;
  // tokens were only needed for building docFreq).
  const compactDocs = stats.docs.map((d) => ({ tf: d.tf, len: d.len }))

  const out = {
    builtAt: new Date().toISOString(),
    chunkCount: chunks.length,
    avgLen: stats.avgLen,
    idf: stats.idf,
    chunks: chunks.map((c, i) => ({
      id: c.id,
      sourceId: c.sourceId,
      sourceLabel: c.sourceLabel,
      sourceType: c.sourceType,
      source: c.source,
      chunkIndex: c.chunkIndex,
      text: c.text,
      tf: compactDocs[i].tf,
      len: compactDocs[i].len,
    })),
  }

  await fs.mkdir(path.dirname(OUT_PATH), { recursive: true })
  await fs.writeFile(OUT_PATH, JSON.stringify(out))
  const sizeMb = ((await fs.stat(OUT_PATH)).size / (1024 * 1024)).toFixed(2)
  console.log(`Wrote ${OUT_PATH} (${sizeMb} MB, ${chunks.length} chunks)`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

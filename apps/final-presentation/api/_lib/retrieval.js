/**
 * BM25 retrieval over the prebuilt research index.
 *
 * Loads `_data/research-index.json` (built by scripts/build-research-index.mjs)
 * and exposes `search(query, { topK, focusSourceId, focusSourceType })`.
 *
 * The optional `focus` parameters BIAS retrieval toward the user's selected
 * topic without hard-filtering — chunks from the focused source get a score
 * multiplier, but other chunks can still surface if highly relevant.
 */

import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

let cachedIndex = null

async function loadIndex() {
  if (cachedIndex) return cachedIndex
  const indexPath = path.join(__dirname, '..', '_data', 'research-index.json')
  const raw = await readFile(indexPath, 'utf8')
  cachedIndex = JSON.parse(raw)
  return cachedIndex
}

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

const K1 = 1.5
const B = 0.75
const FOCUS_BOOST = 1.6 // multiply BM25 score for chunks matching focused source

export async function search(query, options = {}) {
  const { topK = 6, focusSourceId = null, focusSourceType = null } = options
  const index = await loadIndex()
  const terms = [...new Set(tokenize(query))]
  if (terms.length === 0) return []
  const { idf, avgLen, chunks } = index

  const scored = []
  for (const ch of chunks) {
    let score = 0
    for (const term of terms) {
      const tf = ch.tf[term]
      if (!tf) continue
      const termIdf = idf[term] || 0
      if (termIdf <= 0) continue
      const norm = 1 - B + B * (ch.len / avgLen)
      score += termIdf * ((tf * (K1 + 1)) / (tf + K1 * norm))
    }
    if (score <= 0) continue

    // Focus bias: boost chunks matching the user's selected topic
    if (focusSourceId && ch.sourceId === focusSourceId) score *= FOCUS_BOOST
    else if (focusSourceType && ch.sourceType === focusSourceType) score *= FOCUS_BOOST

    scored.push({ chunk: ch, score })
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topK).map(({ chunk, score }) => ({
    id: chunk.id,
    score,
    text: chunk.text,
    sourceId: chunk.sourceId,
    sourceLabel: chunk.sourceLabel,
    sourceType: chunk.sourceType,
    source: chunk.source,
    chunkIndex: chunk.chunkIndex,
  }))
}

export async function getIndexMeta() {
  const index = await loadIndex()
  return { builtAt: index.builtAt, chunkCount: index.chunkCount }
}

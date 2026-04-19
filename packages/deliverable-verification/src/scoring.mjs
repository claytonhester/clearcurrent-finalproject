const STOP = new Set([
  'the',
  'and',
  'for',
  'are',
  'but',
  'not',
  'you',
  'all',
  'can',
  'her',
  'was',
  'one',
  'our',
  'out',
  'day',
  'get',
  'has',
  'him',
  'his',
  'how',
  'its',
  'may',
  'new',
  'now',
  'old',
  'see',
  'two',
  'way',
  'who',
  'boy',
  'did',
  'let',
  'put',
  'say',
  'she',
  'too',
  'use',
  'that',
  'this',
  'with',
  'from',
  'have',
  'than',
  'what',
  'when',
  'your',
  'more',
  'will',
  'just',
  'like',
  'into',
  'only',
  'some',
  'also',
  'back',
  'them',
  'then',
  'very',
  'even',
  'most',
  'about',
  'there',
  'their',
  'would',
  'could',
  'these',
  'other',
  'which',
  'after',
  'first',
  'where',
  'being',
  'those',
  'through',
])

export function normalizeText(s) {
  return s
    .toLowerCase()
    .replace(/[\u2018\u2019\u201A\u201B\u2032\u2035]/g, "'")
    .replace(/[\u201C\u201D\u201E\u201F\u2033\u2036]/g, '"')
    .replace(/\s+/g, ' ')
    .trim()
}

export function tokens(s) {
  return normalizeText(s)
    .split(/[^a-z0-9$%]+/)
    .filter((t) => t.length > 2 && !STOP.has(t))
}

export function jaccardTokens(a, b) {
  const A = new Set(a)
  const B = new Set(b)
  if (A.size === 0 || B.size === 0) return 0
  let inter = 0
  for (const x of A) if (B.has(x)) inter++
  const union = A.size + B.size - inter
  return union ? inter / union : 0
}

/** Token coverage: what fraction of claim tokens appear in chunk (good for paraphrased quotes). */
export function tokenCoverage(claim, chunk) {
  const ct = tokens(claim)
  const ch = new Set(tokens(chunk))
  if (ct.length === 0) return 0
  let hit = 0
  for (const t of ct) if (ch.has(t)) hit++
  return hit / ct.length
}

export function excerpt(text, max = 220) {
  const t = text.replace(/\s+/g, ' ').trim()
  if (t.length <= max) return t
  return `${t.slice(0, max)}…`
}

/** Skip ultra-common tokens that explode postings (keeps verify runs fast). */
const MAX_POSTINGS_PER_TOKEN = 4500
const MAX_CANDIDATE_CHUNKS = 400
const FALLBACK_SEED_CHUNKS = 120

/**
 * @param {{ files: Array<{ relPath: string, chunks: string[], kind?: string }> }} corpus
 * @returns {Map<string, Array<{ relPath: string, chunkIndex: number, kind: string }>>}
 */
export function buildInvertedIndex(corpus) {
  const index = new Map()
  for (const file of corpus.files) {
    const kind = file.kind || 'other'
    for (let i = 0; i < file.chunks.length; i++) {
      const toks = new Set(tokens(file.chunks[i]))
      for (const t of toks) {
        if (t.length < 3) continue
        if (!index.has(t)) index.set(t, [])
        index.get(t).push({ relPath: file.relPath, chunkIndex: i, kind })
      }
    }
  }
  return index
}

/**
 * Candidate chunks that share at least one claim token with the inverted index.
 */
function gatherCandidates(claimTokens, invertedIndex) {
  const uniq = [...new Set(claimTokens)]
  const hitCounts = new Map()

  for (const t of uniq) {
    const postings = invertedIndex.get(t)
    if (!postings || postings.length > MAX_POSTINGS_PER_TOKEN) continue
    for (const ref of postings) {
      const key = `${ref.relPath}\t${ref.chunkIndex}`
      hitCounts.set(key, (hitCounts.get(key) || 0) + 1)
    }
  }

  let keys = [...hitCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_CANDIDATE_CHUNKS)
    .map(([k]) => k)

  if (keys.length < 30) {
    for (const t of uniq) {
      const postings = invertedIndex.get(t)
      if (!postings) continue
      const cap = Math.min(postings.length, MAX_POSTINGS_PER_TOKEN, FALLBACK_SEED_CHUNKS)
      for (let j = 0; j < cap; j++) {
        const ref = postings[j]
        keys.push(`${ref.relPath}\t${ref.chunkIndex}`)
      }
      if (keys.length >= MAX_CANDIDATE_CHUNKS) break
    }
    keys = [...new Set(keys)]
  }

  return new Set(keys)
}

/**
 * @param {string} claimText
 * @param {{ files: Array<{ relPath: string, chunks: string[], kind?: string }> }} corpus
 * @param {number} topK
 * @param {Map<string, Array<{ relPath: string, chunkIndex: number, kind: string }>> | null} invertedIndex
 */
export function scoreCorpus(claimText, corpus, topK = 8, invertedIndex = null) {
  const ct = tokens(claimText)
  if (ct.length === 0) return []

  const candidateKeys = invertedIndex ? gatherCandidates(ct, invertedIndex) : null

  const scored = []
  for (const file of corpus.files) {
    for (let i = 0; i < file.chunks.length; i++) {
      if (candidateKeys && !candidateKeys.has(`${file.relPath}\t${i}`)) continue

      const chunk = file.chunks[i]
      const jac = jaccardTokens(ct, tokens(chunk))
      const cov = tokenCoverage(claimText, chunk)
      const sub =
        normalizeText(claimText).length >= 20 &&
        normalizeText(chunk).includes(normalizeText(claimText).slice(0, Math.min(80, claimText.length)))

      const score = Math.max(jac, cov * 0.85, sub ? 0.55 : 0)
      if (score < 0.04) continue
      scored.push({
        relPath: file.relPath,
        kind: file.kind,
        chunkIndex: i,
        jaccard: Math.round(jac * 1000) / 1000,
        coverage: Math.round(cov * 1000) / 1000,
        score: Math.round(score * 1000) / 1000,
        excerpt: excerpt(chunk),
      })
    }
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, topK)
}

export function classifyClaim(kind, best, second) {
  const top = best?.score ?? 0
  const gap = top - (second?.score ?? 0)

  if (kind === 'quote' || kind === 'evidence_line') {
    if (best?.coverage >= 0.72 || best?.jaccard >= 0.38) return 'supported'
    if (best?.coverage >= 0.5 || best?.jaccard >= 0.22) return 'partially_supported'
    if (top >= 0.18 && gap > 0.04) return 'weak_match'
    return 'unsupported'
  }

  if (top >= 0.42) return 'supported'
  if (top >= 0.26) return 'partially_supported'
  if (top >= 0.14 && gap > 0.02) return 'weak_match'
  return 'unsupported'
}

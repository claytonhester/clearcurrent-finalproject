import fs from 'node:fs/promises'
import path from 'node:path'
import fg from 'fast-glob'
import YAML from 'yaml'
import { REGISTRY_PATH, RESEARCH_DIR } from './paths.mjs'

/**
 * @returns {Promise<{
 *   metadata: { transcripts_dir: string, summaries_dir: string },
 *   interviews: Array<Record<string, unknown>>
 * }>}
 */
export async function loadRegistry() {
  const raw = await fs.readFile(REGISTRY_PATH, 'utf8')
  const doc = YAML.parse(raw)
  return {
    metadata: doc.metadata || {},
    interviews: doc.interviews || [],
  }
}

/**
 * Resolve registry globs to repo-relative POSIX paths (research/...).
 */
export async function resolveInterviewCorpusPaths(registry) {
  const transcriptsDir = path.join(RESEARCH_DIR, registry.metadata.transcripts_dir || 'Call Transcripts')
  const summariesDir = path.join(RESEARCH_DIR, registry.metadata.summaries_dir || 'Interview Summary Documents')

  const transcriptsSub = String(registry.metadata.transcripts_dir || 'Call Transcripts').replace(/\\/g, '/')
  const summariesSub = String(registry.metadata.summaries_dir || 'Interview Summary Documents').replace(
    /\\/g,
    '/',
  )

  const out = []
  for (const inv of registry.interviews) {
    const transcriptFiles = inv.transcript_glob
      ? await fg(String(inv.transcript_glob), { cwd: transcriptsDir, onlyFiles: true })
      : []
    const summaryFiles = inv.summary_glob
      ? await fg(String(inv.summary_glob), { cwd: summariesDir, onlyFiles: true })
      : []

    const transcriptRel = transcriptFiles.map((f) =>
      path.posix.join('research', transcriptsSub, f.split(path.sep).join('/')),
    )
    const summaryRel = summaryFiles.map((f) =>
      path.posix.join('research', summariesSub, f.split(path.sep).join('/')),
    )

    const keywords = collectInterviewKeywords(inv)

    out.push({
      id: inv.id,
      portal_source_id: inv.portal_source_id,
      transcriptRel: transcriptRel,
      summaryRel: summaryRel,
      keywords,
    })
  }
  return out
}

function collectInterviewKeywords(inv) {
  const k = new Set()
  k.add(inv.id)
  if (inv.portal_source_id) k.add(inv.portal_source_id)
  const labels = inv.corpus_labels || {}
  for (const v of Object.values(labels)) {
    for (const w of String(v).toLowerCase().split(/[^a-z0-9]+/)) {
      if (w.length > 2) k.add(w)
    }
  }
  for (const part of String(inv.id).split('-')) {
    if (part.length > 2) k.add(part)
  }
  return [...k]
}

/**
 * Rank interviews that best match an attribution hint ("Name · Org").
 */
export function matchInterviewsForHint(hint, resolvedInterviews, topN = 3) {
  if (!hint || typeof hint !== 'string') return []
  const h = hint.toLowerCase()
  const scored = resolvedInterviews.map((inv) => {
    let score = 0
    for (const kw of inv.keywords) {
      if (kw.length < 3) continue
      if (h.includes(kw.toLowerCase())) score += kw.length > 5 ? 3 : 2
    }
    const paths = [...inv.transcriptRel, ...inv.summaryRel].join(' ').toLowerCase()
    for (const token of h.split(/[^a-z0-9]+/).filter((t) => t.length > 3)) {
      if (paths.includes(token)) score += 2
    }
    return { id: inv.id, score, paths: [...inv.transcriptRel, ...inv.summaryRel] }
  })
  return scored
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN)
}

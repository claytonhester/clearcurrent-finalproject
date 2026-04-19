import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import crypto from 'node:crypto'
import { extractClaims } from './claim-extract.mjs'
import { buildInvertedIndex, scoreCorpus, classifyClaim } from './scoring.mjs'
import { loadRegistry, resolveInterviewCorpusPaths, matchInterviewsForHint } from './registry.mjs'
import { DELIVERABLES_DIR, VERIFICATION_OUT } from './paths.mjs'

function attributionHint(claim) {
  return claim.primarySource || claim.speaker || ''
}

function evidenceInExpectedPaths(evidence, expectedPaths) {
  if (!expectedPaths.length || !evidence.length) return null
  const set = new Set(expectedPaths.map((p) => p.replace(/\\/g, '/')))
  const top = evidence[0]?.relPath?.replace(/\\/g, '/')
  if (!top) return null
  return set.has(top)
}

function corpusFingerprint(corpus) {
  const h = crypto.createHash('sha256')
  for (const f of corpus.files) {
    h.update(f.relPath)
    h.update(f.sha256)
  }
  return h.digest('hex').slice(0, 16)
}

/**
 * @param {import('./deliverables.mjs').DELIVERABLE_MODULES[number]} spec
 * @param {object} corpus
 * @param {Awaited<ReturnType<import('./registry.mjs').resolveInterviewCorpusPaths>>} resolvedInterviews
 */
export async function verifyDeliverable(spec, corpus, resolvedInterviews, invertedIndex) {
  const modPath = path.join(DELIVERABLES_DIR, spec.file)
  const mod = await import(pathToFileURL(modPath).href)
  const root = mod[spec.exportName]
  if (!root || typeof root !== 'object') {
    throw new Error(`Missing export ${spec.exportName} in ${spec.file}`)
  }

  const index = invertedIndex || buildInvertedIndex(corpus)

  const claims = extractClaims(root)
  const results = []
  const summary = {
    supported: 0,
    partially_supported: 0,
    weak_match: 0,
    unsupported: 0,
  }

  for (let i = 0; i < claims.length; i++) {
    const c = claims[i]
    const hint = attributionHint(c)
    const ranked = matchInterviewsForHint(hint, resolvedInterviews, 4)
    const expectedPaths = ranked.flatMap((r) => r.paths)

    const hits = scoreCorpus(c.text, corpus, 8, index)
    const best = hits[0]
    const second = hits[1]
    const status = classifyClaim(c.kind, best, second)

    summary[status]++

    const inExpected = evidenceInExpectedPaths(hits, expectedPaths)

    results.push({
      claimId: `${spec.id}:${i}:${c.path}`,
      jsonPath: c.path,
      kind: c.kind,
      text: c.text,
      attributionHint: hint || null,
      matchedInterviewIds: ranked.map((r) => r.id),
      status,
      heuristic: {
        bestScore: best?.score ?? 0,
        bestCoverage: best?.coverage ?? 0,
        bestJaccard: best?.jaccard ?? 0,
      },
      evidence: hits.slice(0, 4).map((h) => ({
        file: h.relPath,
        chunkIndex: h.chunkIndex,
        corpusKind: h.kind,
        score: h.score,
        excerpt: h.excerpt,
      })),
      inExpectedSourceFile: inExpected,
    })
  }

  const report = {
    deliverableId: spec.id,
    label: spec.label,
    sourceModule: `apps/final-presentation/src/content/deliverables/${spec.file}`,
    generatedAt: new Date().toISOString(),
    corpusFingerprint: corpusFingerprint(corpus),
    claimCount: claims.length,
    summary,
    claims: results,
  }

  await fs.mkdir(VERIFICATION_OUT, { recursive: true })
  const outFile = path.join(VERIFICATION_OUT, `${spec.id}-verification.json`)
  await fs.writeFile(outFile, JSON.stringify(report, null, 2), 'utf8')
  return { report, outFile }
}

export async function loadRegistryBundle() {
  const registry = await loadRegistry()
  const resolvedInterviews = await resolveInterviewCorpusPaths(registry)
  return { registry, resolvedInterviews }
}

#!/usr/bin/env node
import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import { buildCorpus, loadCorpus } from './corpus-builder.mjs'
import { DELIVERABLE_MODULES } from './deliverables.mjs'
import { CORPUS_CACHE, VERIFICATION_OUT } from './paths.mjs'
import { buildInvertedIndex } from './scoring.mjs'
import { loadRegistryBundle, verifyDeliverable } from './verify-deliverable.mjs'
import { exportClaimRegister } from './export-register.mjs'

function parseArgs(argv) {
  const args = { cmd: argv[2] || 'all', only: null }
  for (let i = 3; i < argv.length; i++) {
    if (argv[i] === '--only' && argv[i + 1]) {
      args.only = argv[++i]
    }
  }
  return args
}

function humanReviewReasons(c) {
  const reasons = []
  if (c.status === 'unsupported' || c.status === 'weak_match') reasons.push(c.status)
  if (c.kind === 'quote' || c.kind === 'evidence_line') {
    if (c.status === 'partially_supported') reasons.push('partial_quote_or_evidence')
    // Synthesis often outranks raw transcripts in retrieval; ignore when already supported.
    if (
      c.status !== 'supported' &&
      c.kind === 'quote' &&
      c.attributionHint &&
      c.inExpectedSourceFile === false
    ) {
      reasons.push('attribution_top_evidence_not_registry_file')
    }
  }
  if (
    (/\$[\d,]+|\d+%|\b20\d{2}\b|\b\d{3,}\b/.test(c.text) || /\d+\.\d+%/.test(c.text)) &&
    c.status !== 'supported'
  ) {
    reasons.push('numeric_or_year_not_strong_match')
  }
  return reasons
}

async function ensureCorpus() {
  try {
    await fs.access(CORPUS_CACHE)
    return loadCorpus()
  } catch {
    console.log('No corpus cache; building…')
    return buildCorpus()
  }
}

function fingerprintCorpus(corpus) {
  const h = crypto.createHash('sha256')
  for (const f of corpus.files) {
    h.update(f.relPath)
    h.update(f.sha256)
  }
  return h.digest('hex').slice(0, 16)
}

async function writeSummaryReports(files, corpus) {
  const combined = {
    generatedAt: new Date().toISOString(),
    corpusFingerprint: corpus.files ? fingerprintCorpus(corpus) : null,
    deliverables: [],
  }

  for (const f of files) {
    const raw = await fs.readFile(f, 'utf8')
    const r = JSON.parse(raw)
    combined.deliverables.push({
      id: r.deliverableId,
      label: r.label,
      summary: r.summary,
      claimCount: r.claimCount,
      file: path.basename(f),
    })
  }

  const needsReview = []
  const humanReviewQueue = []
  for (const f of files) {
    const raw = await fs.readFile(f, 'utf8')
    const r = JSON.parse(raw)
    for (const c of r.claims) {
      if (c.status === 'unsupported' || c.status === 'weak_match') {
        needsReview.push({
          deliverable: r.deliverableId,
          status: c.status,
          jsonPath: c.jsonPath,
          text: c.text.slice(0, 200),
        })
      }
      const reasons = humanReviewReasons(c)
      if (reasons.length) {
        humanReviewQueue.push({
          deliverable: r.deliverableId,
          jsonPath: c.jsonPath,
          kind: c.kind,
          status: c.status,
          reasons,
          attributionHint: c.attributionHint ?? null,
          inExpectedSourceFile: c.inExpectedSourceFile ?? null,
          text: c.text.slice(0, 280),
          topEvidence: c.evidence?.[0]?.file ?? null,
        })
      }
    }
  }

  combined.needsReview = needsReview
  combined.humanReviewQueue = humanReviewQueue
  combined.humanReviewQueueNote =
    'Heuristic queue: blockers (unsupported/weak), quote/evidence partial matches, attribution file mismatches, weak numeric matches. Still spot-check supported quotes in production.'
  const out = path.join(VERIFICATION_OUT, 'summary.json')
  await fs.writeFile(out, JSON.stringify(combined, null, 2), 'utf8')
  console.log(`Wrote ${out}`)
}

async function main() {
  const { cmd, only } = parseArgs(process.argv)

  if (cmd === 'export') {
    await exportClaimRegister()
    return
  }

  if (cmd === 'corpus') {
    await buildCorpus()
    return
  }

  let corpus
  if (cmd === 'verify' || cmd === 'all') {
    if (cmd === 'all') await buildCorpus()
    corpus = await ensureCorpus()
  } else {
    console.error(`Unknown command: ${cmd}. Use: corpus | verify | all | export`)
    process.exit(1)
  }

  const { resolvedInterviews } = await loadRegistryBundle()
  console.log('Building chunk index…')
  const invertedIndex = buildInvertedIndex(corpus)

  const modules = only ? DELIVERABLE_MODULES.filter((m) => m.id === only) : DELIVERABLE_MODULES
  if (only && modules.length === 0) {
    console.error(`Unknown deliverable id: ${only}. Use: brief, d1, … d8`)
    process.exit(1)
  }

  const written = []
  for (const spec of modules) {
    const { outFile } = await verifyDeliverable(spec, corpus, resolvedInterviews, invertedIndex)
    written.push(outFile)
    console.log(`${spec.id}: ${outFile}`)
  }

  await writeSummaryReports(written, corpus)
  await exportClaimRegister()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

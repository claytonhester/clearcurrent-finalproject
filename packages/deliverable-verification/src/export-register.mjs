import fs from 'node:fs/promises'
import path from 'node:path'
import fg from 'fast-glob'
import { VERIFICATION_OUT } from './paths.mjs'

function csvEscape(s) {
  if (s == null) return ''
  const t = String(s).replace(/"/g, '""')
  return `"${t}"`
}

/**
 * Flatten *-verification.json into CSV + full JSON register for spreadsheets / second review.
 */
export async function exportClaimRegister() {
  const files = await fg('*-verification.json', { cwd: VERIFICATION_OUT, onlyFiles: true })
  if (files.length === 0) {
    console.warn('No *-verification.json in', VERIFICATION_OUT, '— run verify first.')
    return
  }

  const all = []
  const headers = [
    'deliverableId',
    'claimId',
    'jsonPath',
    'kind',
    'status',
    'attributionHint',
    'inExpectedSourceFile',
    'bestScore',
    'topEvidenceFile',
    'text',
  ]

  for (const f of files.sort()) {
    const raw = await fs.readFile(path.join(VERIFICATION_OUT, f), 'utf8')
    const r = JSON.parse(raw)
    for (const c of r.claims) {
      all.push({
        deliverableId: r.deliverableId,
        claimId: c.claimId,
        jsonPath: c.jsonPath,
        kind: c.kind,
        status: c.status,
        attributionHint: c.attributionHint ?? '',
        inExpectedSourceFile: c.inExpectedSourceFile ?? '',
        bestScore: c.heuristic?.bestScore ?? '',
        topEvidenceFile: c.evidence?.[0]?.file ?? '',
        text: c.text.replace(/\s+/g, ' ').trim(),
      })
    }
  }

  const csvLines = [headers.join(',')]
  for (const row of all) {
    csvLines.push(headers.map((h) => csvEscape(row[h])).join(','))
  }

  const csvPath = path.join(VERIFICATION_OUT, 'claims-register.csv')
  const jsonPath = path.join(VERIFICATION_OUT, 'claims-register.json')
  await fs.writeFile(csvPath, csvLines.join('\n'), 'utf8')
  await fs.writeFile(jsonPath, JSON.stringify({ generatedAt: new Date().toISOString(), rows: all }, null, 2), 'utf8')
  console.log(`Wrote ${csvPath} (${all.length} rows)`)
  console.log(`Wrote ${jsonPath}`)
}

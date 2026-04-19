import fs from 'node:fs/promises'
import path from 'node:path'
import crypto from 'node:crypto'
import fg from 'fast-glob'
import mammoth from 'mammoth'
import { REPO_ROOT, CORPUS_CACHE, VERIFICATION_OUT } from './paths.mjs'

const CORPUS_GLOBS = [
  'research/**/*.md',
  'research/**/*.txt',
  'research/**/*.docx',
]

const IGNORE = ['**/node_modules/**', 'research/outputs/verification/**']

/**
 * Split text into overlapping chunks for retrieval-style matching.
 */
export function chunkText(text, maxSize = 1100, overlap = 120) {
  const normalized = text.replace(/\r\n/g, '\n').trim()
  if (!normalized) return []

  const paragraphs = normalized.split(/\n\s*\n/)
  const chunks = []
  let buf = ''

  const flush = () => {
    const t = buf.trim()
    if (t.length >= 25) chunks.push(t)
    buf = ''
  }

  for (const p of paragraphs) {
    const piece = p.trim()
    if (!piece) continue
    if (buf.length + piece.length + 2 > maxSize && buf.length > 0) {
      flush()
      buf = piece
    } else {
      buf = buf ? `${buf}\n\n${piece}` : piece
    }
  }
  flush()

  const withOverlap = []
  for (let i = 0; i < chunks.length; i++) {
    const c = chunks[i]
    withOverlap.push(c)
    if (i < chunks.length - 1 && c.length > overlap) {
      const tail = c.slice(-overlap)
      const nextHead = chunks[i + 1].slice(0, Math.min(400, chunks[i + 1].length))
      const merged = `${tail}\n\n${nextHead}`.trim()
      if (merged.length >= 40) withOverlap.push(merged)
    }
  }

  return [...new Set(withOverlap)]
}

async function readFileAsText(absPath) {
  const ext = path.extname(absPath).toLowerCase()
  if (ext === '.docx') {
    const buf = await fs.readFile(absPath)
    try {
      const { value } = await mammoth.extractRawText({ buffer: buf })
      if (value?.trim()) return value
    } catch {
      // Some paths use .docx but store UTF-8 text/markdown (invalid ZIP).
    }
    const asText = buf.toString('utf8')
    if (asText.trim()) return asText
    return ''
  }
  return fs.readFile(absPath, 'utf8')
}

function corpusKind(relPosix) {
  if (relPosix.includes('/Call Transcripts/') || relPosix.includes('/transcripts/')) return 'primary_transcript'
  if (relPosix.includes('/Interview Summary Documents/') || relPosix.includes('/summaries/'))
    return 'primary_summary'
  if (relPosix.includes('/SECONDARY DATA/') || relPosix.includes('/outputs/secondary/'))
    return 'secondary'
  if (relPosix.includes('/outputs/synthesis/')) return 'synthesis'
  if (relPosix.includes('/outputs/primary/')) return 'primary_output'
  return 'other'
}

/**
 * @returns {Promise<{ version: number, builtAt: string, files: Array<{ relPath: string, sha256: string, kind: string, chunks: string[] }> }>}
 */
export async function buildCorpus() {
  const entries = await fg(CORPUS_GLOBS, {
    cwd: REPO_ROOT,
    onlyFiles: true,
    ignore: IGNORE,
    dot: false,
  })

  const files = []
  for (const rel of entries.sort()) {
    const abs = path.join(REPO_ROOT, rel)
    let text
    try {
      text = await readFileAsText(abs)
    } catch (e) {
      console.warn(`Skip (read error): ${rel}`, e.message)
      continue
    }
    const chunks = chunkText(text)
    if (chunks.length === 0) continue

    const hash = crypto.createHash('sha256').update(text, 'utf8').digest('hex')
    files.push({
      relPath: rel.split(path.sep).join('/'),
      sha256: hash,
      kind: corpusKind(rel.split(path.sep).join('/')),
      chunks,
    })
  }

  const manifest = {
    version: 1,
    builtAt: new Date().toISOString(),
    files,
  }

  await fs.mkdir(VERIFICATION_OUT, { recursive: true })
  await fs.writeFile(CORPUS_CACHE, JSON.stringify(manifest, null, 2), 'utf8')
  console.log(`Wrote ${files.length} files, ${files.reduce((n, f) => n + f.chunks.length, 0)} chunks → ${CORPUS_CACHE}`)
  return manifest
}

export async function loadCorpus() {
  const raw = await fs.readFile(CORPUS_CACHE, 'utf8')
  return JSON.parse(raw)
}

import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** Repository root (clear-current-portal) */
export const REPO_ROOT = path.resolve(__dirname, '..', '..', '..')

export const RESEARCH_DIR = path.join(REPO_ROOT, 'research')

export const VERIFICATION_OUT = path.join(RESEARCH_DIR, 'outputs', 'verification')

export const CORPUS_CACHE = path.join(VERIFICATION_OUT, 'corpus.json')

export const REGISTRY_PATH = path.join(RESEARCH_DIR, 'interviews_registry.yaml')

export const DELIVERABLES_DIR = path.join(
  REPO_ROOT,
  'apps',
  'final-presentation',
  'src',
  'content',
  'deliverables',
)

/**
 * Persist research-assistant threads in the browser (localStorage).
 * Per topic: a **current** thread plus an **archived** list of past "New chat" sessions.
 * Not sent to the server; stays on the user’s device.
 */

const PREFIX = 'cc-research-assistant'
const MAX_MESSAGE_OBJECTS = 100
const MAX_PAST_SESSIONS = 30

function isBrowser() {
  return typeof localStorage !== 'undefined'
}

export function getChatStorageKey(topicId) {
  if (!topicId || typeof topicId !== 'string') return null
  return `${PREFIX}:v1:topic:${topicId}`
}

function serializeMessagesForStorage(messages) {
  const trimmed =
    messages.length > MAX_MESSAGE_OBJECTS
      ? messages.slice(-MAX_MESSAGE_OBJECTS)
      : messages
  return trimmed.map((m) => ({
    role: m.role,
    content: m.content,
    ...(m.model != null && { model: m.model }),
    ...(Array.isArray(m.retrieved) && m.retrieved.length
      ? { retrieved: m.retrieved }
      : {}),
  }))
}

/**
 * v2: { v:2, current:{ messages, updatedAt }, pastSessions: [{ id, savedAt, preview, messages }, ...] }
 * v1 (legacy): { v:1, messages, updatedAt } — treated as current only.
 */
export function loadTopicState(topicId) {
  const key = getChatStorageKey(topicId)
  if (!key || !isBrowser()) {
    return { v: 2, current: { messages: [], updatedAt: '' }, pastSessions: [] }
  }
  try {
    const raw = localStorage.getItem(key)
    if (!raw) {
      return { v: 2, current: { messages: [], updatedAt: '' }, pastSessions: [] }
    }
    const data = JSON.parse(raw)
    if (data && data.v === 2 && data.current && Array.isArray(data.pastSessions)) {
      return {
        v: 2,
        current: {
          messages: data.current.messages || [],
          updatedAt: data.current.updatedAt || '',
        },
        pastSessions: Array.isArray(data.pastSessions) ? data.pastSessions : [],
      }
    }
    if (data && Array.isArray(data.messages)) {
      return {
        v: 2,
        current: {
          messages: data.messages,
          updatedAt: data.updatedAt || '',
        },
        pastSessions: [],
      }
    }
  } catch {
    /* ignore */
  }
  return { v: 2, current: { messages: [], updatedAt: '' }, pastSessions: [] }
}

function previewFromMessages(messages) {
  const first = messages.find((m) => m.role === 'user' && m.content?.trim())
  if (!first) return 'Conversation'
  const t = first.content.replace(/\s+/g, ' ').trim()
  return t.length > 72 ? `${t.slice(0, 72)}…` : t
}

function writeFullState(key, state) {
  const payload = { v: 2, current: state.current, pastSessions: state.pastSessions }
  const str = JSON.stringify(payload)
  if (str.length > 4_200_000 && state.pastSessions.length) {
    try {
      const trimmed = {
        current: {
          ...state.current,
          messages: state.current.messages?.slice(-40) || [],
        },
        pastSessions: state.pastSessions.slice(0, 15),
      }
      localStorage.setItem(
        key,
        JSON.stringify({ v: 2, ...trimmed, current: { ...trimmed.current } }),
      )
    } catch (e) {
      console.warn('[chatStorage] save failed (pruned), storage may be full', e)
    }
    return
  }
  try {
    localStorage.setItem(key, str)
  } catch (e) {
    console.warn('[chatStorage] save failed', e)
  }
}

/** Saves the active thread only; preserves archived sessions. */
export function saveCurrentMessages(topicId, messages) {
  const key = getChatStorageKey(topicId)
  if (!key || !isBrowser()) return
  const existing = loadTopicState(topicId)
  const next = {
    current: {
      messages: serializeMessagesForStorage(messages),
      updatedAt: new Date().toISOString(),
    },
    pastSessions: existing.pastSessions || [],
  }
  const str = JSON.stringify({ v: 2, ...next })
  if (str.length > 4_200_000 && messages.length > 20) {
    saveCurrentMessages(topicId, messages.slice(-40))
    return
  }
  writeFullState(key, { current: next.current, pastSessions: next.pastSessions })
}

/**
 * Moves the current thread into `pastSessions` (if non-empty) and starts an empty current.
 * @returns the updated `pastSessions` (newest first).
 */
export function archiveCurrentAndStartNew(topicId, currentMessages) {
  const key = getChatStorageKey(topicId)
  if (!key || !isBrowser()) return []
  const state = loadTopicState(topicId)
  let past = [...(state.pastSessions || [])]
  if (Array.isArray(currentMessages) && currentMessages.length > 0) {
    past = [
      {
        id: `s-${Date.now()}`,
        savedAt: new Date().toISOString(),
        preview: previewFromMessages(currentMessages),
        messages: serializeMessagesForStorage(currentMessages),
      },
      ...past,
    ].slice(0, MAX_PAST_SESSIONS)
  }
  const next = {
    current: {
      messages: [],
      updatedAt: new Date().toISOString(),
    },
    pastSessions: past,
  }
  writeFullState(key, next)
  return next.pastSessions
}

export function clearThread(topicId) {
  const key = getChatStorageKey(topicId)
  if (!key || !isBrowser()) return
  try {
    localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

// --- Backwards compatibility ---

export function loadThread(topicId) {
  const s = loadTopicState(topicId)
  return {
    messages: s.current?.messages || [],
    updatedAt: s.current?.updatedAt || '',
  }
}

export function saveThread(topicId, messages) {
  saveCurrentMessages(topicId, messages)
}

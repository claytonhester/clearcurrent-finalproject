import { ChatPanel } from '../components/chat/ChatPanel.jsx'

/**
 * Full-page Research Assistant — main content is the chat only (header + side nav
 * come from Layout). Also reachable as the “RA” item under D8 in navigation.
 */
export function ChatPage() {
  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col">
      <ChatPanel variant="full" />
    </div>
  )
}

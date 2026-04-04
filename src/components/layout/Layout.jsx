import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export function Layout() {
  return (
    <div className="flex min-h-svh">
      <Sidebar />
      <div className="flex min-h-svh min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 overflow-y-auto bg-cc-light-gray px-6 py-8">
          <div className="mx-auto w-full max-w-[1100px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

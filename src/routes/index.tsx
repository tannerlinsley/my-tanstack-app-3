import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to TanStack Start
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Full-stack React framework powered by TanStack Router
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://tanstack.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          >
            Documentation
          </a>
          <a
            href="https://github.com/tanstack/router"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

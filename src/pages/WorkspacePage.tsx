import Workspace from '../components/Workspace'

export default function WorkspacePage() {
  return (
    <div className="pt-[80px] pb-8 px-4 min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Code Generation Workspace</h1>
        <Workspace />
      </div>
    </div>
  )
}

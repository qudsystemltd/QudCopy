import ResumeEditor from '../components/ResumeEditor'

export default function ResumePage() {
  return (
    <div className="pt-[80px] pb-8 px-4 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Resume Builder</h1>
        <ResumeEditor />
      </div>
    </div>
  )
}

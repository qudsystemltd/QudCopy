const positions = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    location: 'Cairo, Egypt (Remote)',
    type: 'Full-time',
    team: 'Engineering',
    description: 'We are looking for a Senior Frontend Engineer to help build the next generation of our AI-powered platform.',
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    location: 'Cairo, Egypt (Remote)',
    type: 'Full-time',
    team: 'AI',
    description: 'Join our AI team to develop and improve our code generation models.',
  },
  {
    id: 3,
    title: 'Product Designer',
    location: 'Cairo, Egypt (Remote)',
    type: 'Full-time',
    team: 'Design',
    description: 'Help shape the future of developer tools through beautiful and intuitive design.',
  },
]

export default function CareersPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-300">
            Help us revolutionize how developers write code
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Why QudCopy?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="font-semibold mb-2">Impact</h3>
              <p className="text-gray-300">Work on technology that's changing how developers build software</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="font-semibold mb-2">Growth</h3>
              <p className="text-gray-300">Learn and develop alongside talented peers</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="font-semibold mb-2">Benefits</h3>
              <p className="text-gray-300">Competitive salary, equity, and comprehensive benefits</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="font-semibold mb-2">Remote-First</h3>
              <p className="text-gray-300">Work from anywhere in the world</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position) => (
              <div 
                key={position.id}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{position.title}</h3>
                    <p className="text-gray-300">{position.team}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{position.location}</span>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

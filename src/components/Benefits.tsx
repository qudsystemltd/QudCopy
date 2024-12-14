import { Clock, Code, Zap } from 'lucide-react'

const benefits = [
  {
    title: "50% Time Savings",
    description: "Cut your development time in half with AI-powered code generation",
    icon: Clock,
  },
  {
    title: "Error-Free Code",
    description: "Minimize manual coding errors with AI-generated solutions",
    icon: Code,
  },
  {
    title: "Instant Results",
    description: "Get production-ready code in seconds, not hours or days",
    icon: Zap,
  },
]

export default function Benefits() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose QudCopy?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Experience the future of development with our AI-powered platform
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
                <div className="mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

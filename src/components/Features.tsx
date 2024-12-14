import { Code2, Sparkles, Zap, FileImage, Bot, Workflow } from 'lucide-react'

const features = [
  {
    name: 'Visual Upload',
    description: 'Simply upload your design files and let our AI analyze the visuals instantly',
    icon: FileImage,
  },
  {
    name: 'AI Analysis',
    description: 'Advanced AI understands your designs and generates optimal code suggestions',
    icon: Bot,
  },
  {
    name: 'Smart Prompts',
    description: 'Receive tailored code prompts that match your design requirements perfectly',
    icon: Sparkles,
  },
  {
    name: 'Rapid Development',
    description: 'Build applications in record time with AI-assisted development',
    icon: Zap,
  },
  {
    name: 'Tool Integration',
    description: 'Seamless integration with Figma and other popular design tools',
    icon: Workflow,
  },
  {
    name: 'Multiple Formats',
    description: 'Support for a wide range of design formats and coding frameworks',
    icon: Code2,
  },
]

export default function Features() {
  return (
    <div id="features" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-16">
            Transform Your
            <br />
            <span className="gradient-text">Development Workflow</span>
          </h2>
        </div>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors">
                <dt className="text-xl font-semibold leading-7 text-white mb-4">
                  <div className="mb-4">
                    <feature.icon className="h-6 w-6 text-blue-500" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="text-base leading-7 text-gray-400">{feature.description}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

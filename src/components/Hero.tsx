import { ArrowRight } from 'lucide-react'

interface HeroProps {
  onGetStarted: () => void;
}

export default function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="px-6 lg:px-8 pt-24 pb-16 max-w-4xl mx-auto">
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="gradient-text">Clone Your Code</span>
          <br />
          <span className="text-white">QudCopy - The Ultimate AI Tool</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
          Transform your development workflow with AI-powered code generation. 
          Upload designs, get production-ready code instantly, and cut development time by 50%.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={onGetStarted}
            className="rounded-lg bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
          >
            Get Started <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

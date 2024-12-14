import { ArrowRight } from 'lucide-react'

interface CTAProps {
  onStart: () => void;
}

export default function CTA({ onStart }: CTAProps) {
  return (
    <div className="py-24">
      <div className="px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to revolutionize your workflow?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400">
            Join thousands of developers who are already building faster with AI. Transform how you code today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={onStart}
              className="rounded-lg bg-blue-500 px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-blue-600 transition-all duration-200 flex items-center gap-2"
            >
              Start Using QudCopy <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About QudCopy</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            QudCopy is revolutionizing the way developers work by bringing AI-powered code generation to everyone.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-8">
            We're on a mission to make development faster, more efficient, and more accessible to everyone. 
            By leveraging the latest in AI technology, we're helping developers focus on what matters most: building great products.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Story</h2>
          <p className="text-gray-300 mb-8">
            Founded in 2024, QudCopy emerged from a simple observation: developers spend too much time on repetitive coding tasks. 
            Our team of engineers and AI specialists came together to create a solution that would transform the development workflow.
          </p>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-4 mb-8">
            <li>Innovation: We're constantly pushing the boundaries of what's possible with AI</li>
            <li>Quality: We believe in delivering the highest quality code generation tools</li>
            <li>Community: We're building a community of developers who help each other succeed</li>
            <li>Accessibility: We're making advanced development tools available to everyone</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-12 mb-4">Join Us</h2>
          <p className="text-gray-300">
            We're always looking for talented individuals who share our passion for innovation and technology. 
            Check out our careers page to see current opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

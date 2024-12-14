export default function DocumentationPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Documentation</h1>
        
        <div className="prose prose-invert max-w-none">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 mb-6">
              <p className="text-gray-300 mb-4">
                QudCopy is an AI-powered code generation tool that helps you write code faster and more efficiently.
              </p>
              <div className="bg-black rounded-lg p-4">
                <code className="text-sm text-gray-300">
                  npm install qudcopy
                </code>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
            <p className="text-gray-300 mb-4">
              Learn how to use QudCopy's main features to generate code from your designs.
            </p>
            <ol className="list-decimal pl-6 space-y-4 text-gray-300">
              <li>Upload your design file</li>
              <li>Select the type of code you want to generate</li>
              <li>Review and customize the generated code</li>
              <li>Copy and use in your project</li>
            </ol>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Advanced Features</h2>
            <div className="space-y-6">
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="font-semibold mb-2">Custom Templates</h3>
                <p className="text-gray-300">
                  Create and save your own templates for frequently used components.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="font-semibold mb-2">API Integration</h3>
                <p className="text-gray-300">
                  Integrate QudCopy into your own applications using our API.
                </p>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
                <h3 className="font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-300">
                  Share and collaborate on designs and generated code with your team.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What file formats are supported?</h3>
                <p className="text-gray-300">
                  We support PNG, JPG, and SVG files up to 10MB in size.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How accurate is the code generation?</h3>
                <p className="text-gray-300">
                  Our AI model achieves 95% accuracy for standard web components.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I modify the generated code?</h3>
                <p className="text-gray-300">
                  Yes, all generated code is fully customizable in the editor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const endpoints = [
  {
    method: 'POST',
    path: '/api/v1/generate',
    description: 'Generate code from design file',
    parameters: [
      { name: 'file', type: 'File', required: true, description: 'Design file (PNG, JPG, SVG)' },
      { name: 'type', type: 'string', required: true, description: 'Type of code to generate (react, vue, angular)' },
      { name: 'options', type: 'object', required: false, description: 'Additional generation options' },
    ],
  },
  {
    method: 'GET',
    path: '/api/v1/templates',
    description: 'List available templates',
    parameters: [
      { name: 'page', type: 'number', required: false, description: 'Page number for pagination' },
      { name: 'limit', type: 'number', required: false, description: 'Items per page' },
    ],
  },
  {
    method: 'POST',
    path: '/api/v1/templates',
    description: 'Create new template',
    parameters: [
      { name: 'name', type: 'string', required: true, description: 'Template name' },
      { name: 'code', type: 'string', required: true, description: 'Template code' },
      { name: 'tags', type: 'string[]', required: false, description: 'Template tags' },
    ],
  },
]

export default function ApiReferencePage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">API Reference</h1>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <p className="text-gray-300 mb-4">
              All API endpoints require authentication using an API key. Include your API key in the request headers:
            </p>
            <div className="bg-black rounded-lg p-4">
              <code className="text-sm text-gray-300">
                Authorization: Bearer your_api_key_here
              </code>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <p className="text-gray-300">
              Free tier: 100 requests/hour<br />
              Pro tier: 1000 requests/hour<br />
              Enterprise tier: Custom limits
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8">Endpoints</h2>
          <div className="space-y-8">
            {endpoints.map((endpoint) => (
              <div 
                key={endpoint.path}
                className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden"
              >
                <div className="p-6 border-b border-zinc-800">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      ${endpoint.method === 'GET' ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}
                    `}>
                      {endpoint.method}
                    </span>
                    <code className="text-gray-300">{endpoint.path}</code>
                  </div>
                  <p className="text-gray-300">{endpoint.description}</p>
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold mb-4">Parameters</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-zinc-800">
                          <th className="pb-2 pr-4 font-medium">Name</th>
                          <th className="pb-2 px-4 font-medium">Type</th>
                          <th className="pb-2 px-4 font-medium">Required</th>
                          <th className="pb-2 pl-4 font-medium">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        {endpoint.parameters.map((param) => (
                          <tr key={param.name} className="border-b border-zinc-800 last:border-0">
                            <td className="py-3 pr-4 text-blue-400">{param.name}</td>
                            <td className="py-3 px-4 text-gray-300">{param.type}</td>
                            <td className="py-3 px-4 text-gray-300">{param.required ? 'Yes' : 'No'}</td>
                            <td className="py-3 pl-4 text-gray-300">{param.description}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

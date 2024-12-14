const faqs = [
  {
    question: 'How do I get started with QudCopy?',
    answer: 'Getting started is easy! Simply sign up for an account, upload your design file, and our AI will generate the corresponding code instantly.',
  },
  {
    question: 'What file formats are supported?',
    answer: 'We currently support PNG, JPG, and SVG files up to 10MB in size.',
  },
  {
    question: 'How accurate is the code generation?',
    answer: 'Our AI model achieves 95% accuracy for standard web components. However, you can always customize the generated code to match your exact needs.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes, we offer a 30-day money-back guarantee if you are not satisfied with our service.',
  },
]

export default function SupportPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Support Center</h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions or get in touch with our team
          </p>
        </div>

        <div className="mb-16">
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-zinc-800"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
            <p className="text-gray-300 mb-4">
              Need help? Our support team is available 24/7 to assist you.
            </p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Contact Us
            </button>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
            <h2 className="text-xl font-semibold mb-4">Documentation</h2>
            <p className="text-gray-300 mb-4">
              Check out our detailed documentation for guides and tutorials.
            </p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              View Docs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

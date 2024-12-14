const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Perfect for trying out QudCopy',
    features: [
      'Up to 10 generations per month',
      'Basic components only',
      'Community support',
      'Standard response time',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$19',
    description: 'Best for professional developers',
    features: [
      'Unlimited generations',
      'All component types',
      'Priority support',
      'Custom templates',
      'API access',
      'Team collaboration',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large teams and organizations',
    features: [
      'Everything in Pro',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Training sessions',
      'Custom AI model',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-300">
          Choose the plan that's right for you
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`
              relative bg-zinc-900 rounded-xl border
              ${plan.popular ? 'border-blue-500' : 'border-zinc-800'}
              p-8 flex flex-col
            `}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-400">/month</span>}
              </div>
              <p className="text-gray-300">{plan.description}</p>
            </div>

            <ul className="mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 mb-3">
                  <svg
                    className="h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`
                w-full px-4 py-2 rounded-lg font-medium
                ${
                  plan.popular
                    ? 'bg-blue-500 text-white hover:bg-blue-600'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }
                transition-colors
              `}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-300">
          All plans include: Secure data encryption, 99.9% uptime guarantee, and automatic updates
        </p>
      </div>
    </div>
  )
}

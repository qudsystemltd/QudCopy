import { Github, Twitter, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import PoweredBy from '../PoweredBy'

const navigation = {
  product: [
    { name: 'Workspace', href: '/workspace' },
    { name: 'Features', href: '/#features' },
    { name: 'Pricing', href: '/pricing' },
  ],
  support: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Support', href: '/support' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
  social: [
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link
              to="/"
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"
            >
              QudCopy
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Transform your development workflow with AI-powered code generation.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-800 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} QudCopy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <PoweredBy />
              <span 
                className="
                  relative group inline-flex items-center
                  px-4 py-1.5 rounded-full
                  bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#BD9732]
                  hover:from-[#FDB931] hover:via-[#BD9732] hover:to-[#FFD700]
                  transition-all duration-300
                  cursor-default
                  shadow-[0_0_15px_rgba(253,185,49,0.3)]
                  hover:shadow-[0_0_20px_rgba(253,185,49,0.5)]
                "
              >
                <span className="
                  font-semibold text-zinc-900
                  tracking-wide
                  flex items-center gap-1.5
                ">
                  <svg 
                    viewBox="0 0 36 36" 
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M18 2l4.5 9.2L33 12.9l-7.5 7.3L27 30.8l-9-4.7-9 4.7 1.5-10.6L3 12.9l10.5-1.7z"/>
                  </svg>
                  Made in Egypt
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

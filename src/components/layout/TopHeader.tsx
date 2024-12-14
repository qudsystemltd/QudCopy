import { useNavigate } from 'react-router-dom'
import { Code2 } from 'lucide-react'

const navigation = [
  { name: 'Workspace', href: '/workspace', icon: Code2 },
]

export default function TopHeader() {
  const navigate = useNavigate()

  return (
    <header 
      className="
        fixed top-0 left-0 right-0 z-50 h-[60px]
        bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50
        supports-[backdrop-filter]:bg-zinc-900/60
      "
    >
      <div className="h-full max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 
            onClick={() => navigate('/')} 
            className="
              text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-blue-400 to-blue-600
              cursor-pointer transition-opacity hover:opacity-80
            "
          >
            QudCopy
          </h1>
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.href)}
                className="
                  flex items-center space-x-2 px-4 py-2 rounded-lg
                  text-zinc-400 hover:text-white
                  hover:bg-white/5 active:bg-white/10
                  transition-all duration-200
                "
              >
                <item.icon className="h-4 w-4" />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Right side - could be used for additional actions/buttons */}
        <div className="flex items-center space-x-4">
          {/* Placeholder for future buttons/elements */}
        </div>
      </div>
    </header>
  )
}

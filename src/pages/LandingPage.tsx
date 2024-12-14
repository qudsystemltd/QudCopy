import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Benefits from '../components/Benefits'
import CTA from '../components/CTA'
import Footer from '../components/layout/Footer'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/workspace')
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      <div className="container mx-auto px-4 flex-1">
        <header className="h-[60px] flex justify-between items-center">
          <div className="flex items-center gap-6">
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
          </div>
          <nav className="space-x-6">
            <button 
              onClick={() => navigate('/workspace')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Workspace
            </button>
          </nav>
        </header>
        <main>
          <Hero onGetStarted={handleGetStarted} />
          <Features />
          <Benefits />
          <CTA onStart={handleGetStarted} />
        </main>
      </div>
      <Footer />
    </div>
  )
}

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import PageLayout from './components/layout/PageLayout'
import './index.css'

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'))
const WorkspacePage = lazy(() => import('./pages/WorkspacePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'))
const ApiReferencePage = lazy(() => import('./pages/ApiReferencePage'))
const SupportPage = lazy(() => import('./pages/SupportPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))

// Loading component for suspense fallback
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />

          {/* Layout wrapped routes */}
          <Route element={<PageLayout />}>
            <Route path="/workspace" element={<WorkspacePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/api" element={<ApiReferencePage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Route>

          {/* 404 and catch-all route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App

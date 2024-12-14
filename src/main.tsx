import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Get root element
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

// Create root and render app with error boundary
const root = createRoot(rootElement)

// Render the app
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

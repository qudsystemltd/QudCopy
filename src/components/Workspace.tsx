import { useState, useRef, useCallback, useEffect } from 'react'
import { Upload, Code2, Loader2, Copy, Check, Wand2, Trash2, RefreshCw, Star } from 'lucide-react'
import Editor from "@monaco-editor/react"
import { AnimatePresence, motion } from 'framer-motion'
import Confetti from 'react-confetti'

type FileStatus = 'idle' | 'loading' | 'success' | 'error'
type GenerationType = 'code' | 'prompt'
type ToastType = 'success' | 'error'

interface Toast {
  message: string
  type: ToastType
}

export default function Workspace() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string>('')
  const [status, setStatus] = useState<FileStatus>('idle')
  const [result, setResult] = useState<string>('')
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<string>('')
  const [generationType, setGenerationType] = useState<GenerationType>('code')
  const [showConfetti, setShowConfetti] = useState(false)
  const [rating, setRating] = useState<number | null>(null)
  const [showRating, setShowRating] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const [toast, setToast] = useState<Toast | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropZoneRef = useRef<HTMLDivElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (status === 'success' && result) {
      setShowConfetti(true)
      setShowRating(true)
      setTimeout(() => {
        setShowConfetti(false)
      }, 3000)
      
      resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [status, result])

  // Toast management
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const showToast = (message: string, type: ToastType) => {
    setToast({ message, type })
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.add('border-blue-500')
    }
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-blue-500')
    }
  }, [])

  const validateFile = (file: File): string | null => {
    if (file.size > 10 * 1024 * 1024) {
      return 'File size must be less than 10MB'
    }
    if (!file.type.startsWith('image/')) {
      return 'Please upload an image file only'
    }
    return null
  }

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (dropZoneRef.current) {
      dropZoneRef.current.classList.remove('border-blue-500')
    }

    const droppedFile = e.dataTransfer.files[0]
    if (!droppedFile) return

    const error = validateFile(droppedFile)
    if (error) {
      setError(error)
      return
    }

    setFile(droppedFile)
    setError('')
    
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(droppedFile)
  }, [])

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]
    if (!selectedFile) return

    const error = validateFile(selectedFile)
    if (error) {
      setError(error)
      return
    }

    setFile(selectedFile)
    setError('')
    
    const reader = new FileReader()
    reader.onloadend = () => {
      setPreview(reader.result as string)
    }
    reader.readAsDataURL(selectedFile)
  }

  const generateTemplateCode = (imageName: string) => {
    return `// Generated React Component
import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
}

export default function GeneratedComponent({ className = '' }: Props) {
  return (
    <div className={\`max-w-md mx-auto bg-zinc-900 rounded-xl overflow-hidden shadow-xl \${className}\`}>
      <div className="md:flex">
        <div className="md:shrink-0">
          <Image
            src="${imageName}"
            alt="Generated Design"
            width={384}
            height={512}
            className="h-48 w-full object-cover md:h-full md:w-48"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
            Generated Component
          </div>
          <p className="mt-2 text-gray-300">
            This component was generated based on your uploaded design.
            Customize it to fit your needs!
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg
              hover:bg-blue-600 transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Interactive Button
          </button>
        </div>
      </div>
    </div>
  )`
  }

  const generatePrompt = (imageName: string) => {
    return `Design Description and Implementation Guide

Key Visual Elements:
- Layout: Modern card-based design with rounded corners
- Colors: Dark theme with accent colors
- Typography: Clean, hierarchical text structure
- Spacing: Consistent padding and margins
- Images: Prominent image placement

Component Structure:
1. Container
   - Max-width card
   - Dark background (#0f172a)
   - Elevation shadow
   - Rounded corners (xl)

2. Image Section
   - Responsive image container
   - Maintain aspect ratio
   - Object-fit: cover
   - Optional lazy loading

3. Content Section
   - Padding: 2rem (32px)
   - Text alignment: left
   - Clear hierarchy

Interactive Elements:
- Button hover states
- Smooth transitions
- Focus states for accessibility
- Keyboard navigation support

Accessibility Considerations:
- Semantic HTML structure
- ARIA labels where needed
- Sufficient color contrast
- Keyboard navigation support

Responsive Behavior:
- Stack layout on mobile
- Flexible image sizing
- Adaptive spacing
- Text size adjustments

This design emphasizes:
1. Modern aesthetics
2. Responsive layout
3. Accessibility
4. Performance
5. User interaction`
  }

  const processDesign = async () => {
    if (!file) return

    setStatus('loading')
    setShowRating(false)
    setRating(null)
    
    try {
      // Simulated API call with delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      const generated = generationType === 'code' 
        ? generateTemplateCode(file.name)
        : generatePrompt(file.name)
      setResult(generated)
      setStatus('success')
    } catch (error) {
      console.error('Error processing design:', error)
      setStatus('error')
      setError('Failed to process design. Please try again.')
    }
  }

  const copyToClipboard = async () => {
    if (!result) return
    
    try {
      await navigator.clipboard.writeText(result)
      setCopied(true)
      showToast('Copied to clipboard!', 'success')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Copy failed:', err)
      showToast('Failed to copy to clipboard. Please try again.', 'error')
    }
  }

  const clearAll = () => {
    setFile(null)
    setPreview('')
    setResult('')
    setError('')
    setStatus('idle')
    setShowRating(false)
    setRating(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleTypeSwitch = (type: GenerationType) => {
    setGenerationType(type)
    if (file && status === 'success') {
      setStatus('loading')
      setTimeout(() => {
        setResult(type === 'code' ? generateTemplateCode(file.name) : generatePrompt(file.name))
        setStatus('success')
      }, 800)
    }
  }

  return (
    <>
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className={`
              fixed bottom-4 right-4 z-50
              px-4 py-3 rounded-lg shadow-lg
              flex items-center gap-2
              ${toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white
            `}
          >
            {toast.type === 'success' ? (
              <Check className="h-5 w-5" />
            ) : (
              <div className="h-5 w-5 rounded-full border-2 border-white flex items-center justify-center">
                !
              </div>
            )}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            gravity={0.3}
          />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-8 space-y-6 border border-zinc-800">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Upload Design</h2>
                <div className="flex items-center gap-2 bg-zinc-800 rounded-lg p-1">
                  <button
                    onClick={() => handleTypeSwitch('code')}
                    className={`px-3 py-1.5 rounded-md flex items-center gap-2 text-sm transition-colors ${
                      generationType === 'code' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Code2 className="h-4 w-4" />
                    Code
                  </button>
                  <button
                    onClick={() => handleTypeSwitch('prompt')}
                    className={`px-3 py-1.5 rounded-md flex items-center gap-2 text-sm transition-colors ${
                      generationType === 'prompt' 
                        ? 'bg-blue-500 text-white' 
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Wand2 className="h-4 w-4" />
                    Prompt
                  </button>
                </div>
              </div>
              
              <div
                ref={dropZoneRef}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                  border-2 border-dashed rounded-xl p-8 text-center
                  transition-colors duration-200
                  ${error ? 'border-red-500 bg-red-500/10' : 'border-zinc-700 hover:border-zinc-600'}
                `}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center gap-4"
                >
                  <AnimatePresence mode="wait">
                    {preview ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative w-full max-w-[200px]"
                      >
                        <img 
                          src={preview} 
                          alt="Preview" 
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                          <RefreshCw className="h-8 w-8 text-white" />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-zinc-400"
                      >
                        <Upload className="h-12 w-12 mx-auto" />
                        <p className="text-lg font-medium mt-2">
                          Drop design file here or click to upload
                        </p>
                        <p className="text-sm text-zinc-500 mt-1">
                          Supports PNG, JPG up to 10MB
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </label>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm"
                >
                  {error}
                </motion.div>
              )}

              <div className="flex gap-4">
                <button
                  onClick={processDesign}
                  disabled={!file || status === 'loading'}
                  className={`
                    flex-1 px-4 py-3 rounded-lg
                    flex items-center justify-center gap-2
                    text-white font-medium
                    transition-colors duration-200
                    ${!file || status === 'loading'
                      ? 'bg-zinc-700 cursor-not-allowed'
                      : 'bg-blue-500 hover:bg-blue-600'}
                  `}
                >
                  {status === 'loading' ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : generationType === 'code' ? (
                    <Code2 className="h-5 w-5" />
                  ) : (
                    <Wand2 className="h-5 w-5" />
                  )}
                  <span>
                    {status === 'loading' 
                      ? 'Processing...' 
                      : `Generate ${generationType === 'code' ? 'Code' : 'Prompt'}`}
                  </span>
                </button>

                {file && (
                  <button
                    onClick={clearAll}
                    className="p-3 text-zinc-400 hover:text-zinc-300 transition-colors"
                    title="Clear All"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div ref={resultRef} className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
            <div className="h-full">
              <div className="bg-[#1E1E1E] h-full">
                <div className="flex items-center justify-between p-4 border-b border-zinc-800">
                  <h3 className="text-lg font-medium text-white">
                    {generationType === 'code' ? 'Generated Code' : 'Generated Prompt'}
                  </h3>
                  {result && (
                    <button
                      onClick={copyToClipboard}
                      className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-zinc-800 transition-colors text-white"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="text-sm">{copied ? 'Copied!' : 'Copy'}</span>
                    </button>
                  )}
                </div>
                <div className="h-[600px] font-mono text-sm">
                  <Editor
                    height="100%"
                    defaultLanguage={generationType === 'code' ? 'typescript' : 'markdown'}
                    value={result || `// Generated ${generationType === 'code' ? 'code' : 'prompt'} will appear here...`}
                    theme="vs-dark"
                    options={{
                      readOnly: true,
                      minimap: { enabled: false },
                      fontSize: 14,
                      wordWrap: 'on',
                      lineNumbers: 'on',
                      scrollBeyondLastLine: false,
                      automaticLayout: true,
                      padding: { top: 20 },
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <AnimatePresence>
          {showRating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 p-6 bg-zinc-900 rounded-xl border border-zinc-800"
            >
              <h4 className="text-lg font-medium text-white mb-4">How satisfied are you with the result?</h4>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-1 transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= (rating || 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-zinc-600'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-green-400"
                >
                  Thanks for your feedback!
                </motion.p>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

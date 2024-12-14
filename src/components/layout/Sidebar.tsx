'use client'

import { 
  PlusCircle, 
  MoveVertical, 
  Layout, 
  Paintbrush, 
  FileEdit, 
  CheckCircle,
  Bot,
  Download,
  Share2,
  History,
  Landmark
} from 'lucide-react'

const sidebarItems = [
  { name: 'Add section', icon: PlusCircle },
  { name: 'Rearrange', icon: MoveVertical },
  { name: 'Templates', icon: Layout },
  { name: 'Design & Font', icon: Paintbrush },
  { name: 'Improve text', icon: FileEdit },
  { name: 'Check', icon: CheckCircle },
  { name: 'AI Assistant', icon: Bot },
  { name: 'Download', icon: Download },
  { name: 'Share', icon: Share2 },
  { name: 'History', icon: History },
  { name: 'Branding', icon: Landmark },
]

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside 
      className={`
        fixed left-0 top-[60px] bottom-0 
        w-[300px] bg-[#2E8555] text-white
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <div className="p-4 space-y-6">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -right-8 top-4 bg-[#2E8555] p-1 rounded-r-md text-white"
        >
          {isOpen ? '←' : '→'}
        </button>
        
        {sidebarItems.map((item) => (
          <button
            key={item.name}
            className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-[#236743] transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </button>
        ))}
      </div>
    </aside>
  )
}

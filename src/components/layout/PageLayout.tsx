import { Outlet } from 'react-router-dom'
import TopHeader from './TopHeader'
import Footer from './Footer'

export default function PageLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <main className="flex-1 pt-[60px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

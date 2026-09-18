import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { MotionFooter } from '@/components/motion-footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Experience } from '@/sections/Experience'
import { Testimonials } from '@/sections/Testimonials'
import { Blog } from '@/sections/Blog'
import { Contact } from '@/sections/Contact'
import { AdminPanel } from '@/admin/AdminPanel'

const sections = [
  { id: 'home', component: Hero },
  { id: 'about', component: About },
  { id: 'skills', component: Skills },
  { id: 'projects', component: Projects },
  { id: 'experience', component: Experience },
  { id: 'testimonials', component: Testimonials },
  { id: 'blog', component: Blog },
  { id: 'contact', component: Contact },
]

export const App = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [showAdmin, setShowAdmin] = useState(false)

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section.id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Keyboard shortcut for admin panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault()
        setShowAdmin(!showAdmin)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showAdmin])

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <MotionFooter />

      {/* Admin Panel Toggle Button (hidden on production) */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => setShowAdmin(!showAdmin)}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full glass flex items-center justify-center text-gold hover:bg-gold/20 transition-colors"
        title="Admin Panel (Ctrl+A)"
      >
        <svg width={20} height={20} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0-1 .9-2 2-2s2 1 2 2-.9 2-2 2-2-1-2-2zM9 11c0-1 .9-2 2-2s2 1 2 2-.9 2-2 2-2-1-2-2zM6 11c0-1 .9-2 2-2s2 1 2 2-.9 2-2 2-2-1-2-2zM15 11c0-1 .9-2 2-2s2 1 2 2-.9 2-2 2-2-1-2-2zM12 6c0-1 .9-2 2-2s2 1 2 2-.9 2-2 2-2-1-2-2zM9 6c0-1 .9-2 2-2s2 1 2 2-.9 2-2 2-2-1-2-2zM6 6c0-1 .9-2 2-2s2 1 2 2-.9 2-2 2-2-1-2-2z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {showAdmin && (
          <AdminPanel onClose={() => setShowAdmin(false)} />
        )}
      </AnimatePresence>
    </div>
  )
}
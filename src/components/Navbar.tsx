import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface NavbarProps {
  activeSection: string
  onNavigate: (section: string) => void
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

export const Navbar = ({ activeSection, onNavigate }: NavbarProps) => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('home')}
          className="font-display font-bold text-xl gold-gradient"
        >
          THOREX STACK
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={cn(
                'text-sm font-medium transition-colors relative py-1',
                activeSection === link.id
                  ? 'text-gold'
                  : 'text-gray-400 hover:text-white'
              )}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"
                />
              )}
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onNavigate('contact')}
          className="hidden md:block btn-gold text-sm px-4 py-2"
        >
          Let's Talk
        </motion.button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2" aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
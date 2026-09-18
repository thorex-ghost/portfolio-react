import { motion } from 'framer-motion'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const MotionFooter = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="border-t border-gold/10 bg-surface/50 py-12"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <div className="font-display font-bold text-2xl gold-gradient mb-2">
              THOREX STACK
            </div>
            <p className="text-gray-500 text-sm">
              Crafting digital experiences with precision and passion.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-gold transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} THOREX STACK. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
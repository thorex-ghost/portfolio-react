import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className="border-t border-gold/10 bg-surface/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-2xl gold-gradient mb-2">THOREX STACK</div>
            <p className="text-gray-500 text-sm">
              Crafted with passion & precision © {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-6">
            {['Twitter', 'GitHub', 'LinkedIn', 'Dribbble'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ y: -4, color: '#D4AF37' }}
                className="text-gray-400 hover:text-gold transition-colors text-sm"
              >
                {social}
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-500 text-sm"
          >
            <span>Scroll to top</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown size={16} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
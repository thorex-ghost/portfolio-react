import { motion } from 'framer-motion'
import { Award, Code, Coffee, Zap } from 'lucide-react'

const stats = [
  { number: 50, suffix: '+', label: 'Projects Completed' },
  { number: 6, suffix: '+', label: 'Years Experience' },
  { number: 30, suffix: '+', label: 'Happy Clients' },
  { number: 15, suffix: '+', label: 'Awards Won' },
]

const highlights = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Building scalable applications from concept to deployment using modern technologies.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing for Core Web Vitals and creating lightning-fast user experiences.',
  },
  {
    icon: Award,
    title: 'Award-Winning Design',
    description: 'Recognized for visual excellence and user-centered design approach.',
  },
  {
    icon: Coffee,
    title: 'Passionate Creator',
    description: 'Loving every moment of building digital products that make a difference.',
  },
]

export const About = () => {
  return (
    <section id="about" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden glass p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-2xl" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                    <span className="font-display text-4xl font-bold gold-gradient">THOREX</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">THOREX STACK</h3>
                  <p className="text-gold text-sm">Web Developer & Designer</p>
                </div>
                <div className="flex gap-2">
                  {['React', 'TypeScript', 'Three.js', 'Node.js'].map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 glass rounded-xl p-4"
            >
              <div className="text-2xl font-bold gold-gradient">6+</div>
              <div className="text-xs text-gray-400">Years Exp</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -left-4 glass rounded-xl p-4"
            >
              <div className="text-2xl font-bold gold-gradient">50+</div>
              <div className="text-xs text-gray-400">Projects</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold text-sm font-medium tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              I turn complex problems into{' '}
              <span className="gold-gradient">elegant solutions</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              With over 6 years of experience in web development and design, I specialize
              in creating digital experiences that are both beautiful and functional.
              My approach blends technical expertise with creative intuition to deliver
              products that users love.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I believe great design is invisible—it's the seamless intersection of
              aesthetics, usability, and performance. When I'm not coding, you'll find me
              exploring new technologies, contributing to open source, or mentoring
              aspiring developers.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-3xl md:text-4xl font-bold gold-gradient">
                    {stat.number}{stat.suffix}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold px-8 py-3 rounded-lg inline-flex items-center gap-2"
            >
              Work With Me
            </motion.a>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon size={24} className="text-gold" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
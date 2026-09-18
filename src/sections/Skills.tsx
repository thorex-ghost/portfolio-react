import { motion } from 'framer-motion'
import { Code, Palette, Terminal, Cpu } from 'lucide-react'
import { skills } from '@/data/skills'

const categoryConfig = {
  frontend: { icon: Code, color: '#D4AF37', label: 'Frontend' },
  backend: { icon: Terminal, color: '#F0D060', label: 'Backend' },
  design: { icon: Palette, color: '#D4AF37', label: 'Design' },
  tools: { icon: Cpu, color: '#B8941F', label: 'Tools' },
}

const skillCategories = ['frontend', 'backend', 'design', 'tools'] as const

// Coding animation component
const CodeAnimation = () => {
  const codeLines = [
    'const portfolio = () => {',
    '  return (',
    '    <motion.div',
    '      initial={{ opacity: 0 }}',
    '      animate={{ opacity: 1 }}',
    '      transition={{ duration: 0.5 }}',
    '    >',
    '      <Hero />',
    '      <Projects />',
    '    </motion.div>',
    '  )',
    '}'
  ]

  return (
    <div className="bg-[#0d0d0d] rounded-xl border border-gold/20 p-6 font-mono text-sm overflow-hidden">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-gray-500 text-xs">portfolio.tsx</span>
      </div>
      <div className="space-y-1">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="text-gray-300 text-xs md:text-sm"
          >
            <span className="text-purple-400 mr-4 select-none">{i + 1}</span>
            <span dangerouslySetInnerHTML={{ __html: line.replace(/(const|return|initial|animate|transition|duration|Hero|Projects)/g, '<span class="text-blue-400">$1</span>').replace(/(=>|<|>|\/)/g, '<span class="text-gold">$1</span>') }} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold text-sm font-medium tracking-wider uppercase block mb-4"
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-4xl md:text-5xl font-bold"
          >
            What I <span className="gold-gradient">bring</span> to the table
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills by category */}
          <div className="space-y-8">
            {skillCategories.map((category, catIndex) => {
              const config = categoryConfig[category]
              const categorySkills = skills.filter(s => s.category === category)
              const Icon = config.icon

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${config.color}20` }}
                    >
                      <Icon size={20} style={{ color: config.color }} />
                    </div>
                    <h3 className="font-display font-bold text-lg" style={{ color: config.color }}>
                      {config.label}
                    </h3>
                  </div>
                  <div className="space-y-3 pl-13">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.05 }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-gray-300">{skill.name}</span>
                          <span className="text-xs text-gold">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: skillIndex * 0.05 + 0.2 }}
                            className="h-full rounded-full"
                            style={{
                              background: `linear-gradient(90deg, ${config.color}, ${config.color}88)`,
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-32"
          >
            <CodeAnimation />
            
            {/* Tech icons */}
            <div className="grid grid-cols-4 gap-4 mt-6">
              {['React', 'TypeScript', 'Next.js', 'Three.js', 'Node.js', 'Tailwind', 'GSAP', 'AWS'].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, color: '#D4AF37' }}
                  className="glass rounded-lg p-3 text-center text-xs text-gray-300 hover:text-gold cursor-pointer transition-colors"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
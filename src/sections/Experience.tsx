import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experiences } from '@/data/experience'
import { cn } from '@/lib/utils'

export const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-wider uppercase block mb-4">
            Career Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Work <span className="gold-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-24"
              >
                <div className="absolute left-6 top-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className={cn(
                      'w-5 h-5 rounded-full border-2 border-gold',
                      exp.current ? 'bg-gold animate-pulse' : 'bg-background'
                    )}
                  />
                </div>

                <div className="glass rounded-xl p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="font-display font-bold text-xl">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-gold text-sm mt-1">
                        <Briefcase size={14} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-2 sm:mt-0">
                      <Calendar size={14} />
                      {exp.period}
                      {exp.current && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-xs">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
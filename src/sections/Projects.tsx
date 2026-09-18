import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Project } from '@/data/projects'
import { fetchProjects } from '@/lib/projects'

const categories = ['All', 'AI / SaaS', 'E-Commerce', 'Brand / 3D', 'AI / Fashion', 'Booking / Web App', 'Tool / SaaS', '3D / Interior']

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    fetchProjects()
      .then((data) => {
        if (!cancelled) {
          setProjects(data)
          setLoading(false)
        }
      })
      .catch((err) => {
        console.error('Failed to fetch projects:', err)
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold text-sm font-medium tracking-wider uppercase block mb-4">
              My Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Featured <span className="gold-gradient">Projects</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeCategory === cat
                    ? 'bg-gold text-background'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                )}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No projects found in this category.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative rounded-2xl overflow-hidden glass card-hover">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gold/20 to-transparent">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Code size={64} className="text-gold/30" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-gold border border-gold/20">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.liveLink ? (
                        <motion.a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full bg-gold text-background flex items-center justify-center"
                        >
                          <ExternalLink size={14} />
                        </motion.a>
                      ) : (
                        <span className="px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm text-xs text-gray-400 border border-white/10">
                          Coming Soon
                        </span>
                      )}
                      {project.githubLink && (
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center"
                        >
                          <Github size={14} />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl mb-2 group-hover:text-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-1 rounded bg-white/5 text-xs text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{project.year}</span>
                      {project.liveLink ? (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                        >
                          View Live
                          <ExternalLink size={14} />
                        </a>
                      ) : (
                        <span className="text-gray-500 text-sm">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
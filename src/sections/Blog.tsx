import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ChevronRight, BookOpen } from 'lucide-react'
import { blogPosts } from '@/data/blog'

export const Blog = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6"
        >
          <div>
            <span className="text-gold text-sm font-medium tracking-wider uppercase block mb-4">
              Knowledge Base
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              From the <span className="gold-gradient">Blog</span>
            </h2>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-2xl overflow-hidden card-hover">
                <div className="relative h-44 bg-gradient-to-br from-gold/20 to-transparent flex items-center justify-center">
                  <BookOpen size={64} className="text-gold/30" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-gold border border-gold/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-gray-500">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a href="#" className="text-gold text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Read More
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
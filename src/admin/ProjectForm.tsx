import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { X, Save } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectFormProps {
  project: Project | null
  onSubmit: (project: Omit<Project, 'id'> | Project) => void
  onCancel: () => void
}

export const ProjectForm = ({ project, onSubmit, onCancel }: ProjectFormProps) => {
  const [formData, setFormData] = useState<Omit<Project, 'id'>>({
    title: '',
    description: '',
    category: '',
    tech: [],
    image: '',
    liveLink: '',
    githubLink: '',
    year: new Date().getFullYear(),
    featured: false,
  })
  const [techInput, setTechInput] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title,
        description: project.description,
        category: project.category,
        tech: project.tech,
        image: project.image,
        liveLink: project.liveLink,
        githubLink: project.githubLink,
        year: project.year,
        featured: project.featured,
      })
      setTechInput(project.tech.join(', '))
    } else {
      setFormData({
        title: '',
        description: '',
        category: '',
        tech: [],
        image: '',
        liveLink: '',
        githubLink: '',
        year: new Date().getFullYear(),
        featured: false,
      })
      setTechInput('')
    }
  }, [project])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleTechChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTechInput(e.target.value)
    const techs = e.target.value.split(',').map(t => t.trim()).filter(Boolean)
    setFormData(prev => ({ ...prev, tech: techs }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.title || !formData.description || !formData.category) {
      setError('Please fill in all required fields')
      return
    }

    if (formData.tech.length === 0) {
      setError('Please add at least one technology')
      return
    }

    onSubmit(formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="glass rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-xl font-bold">
          {project ? 'Edit Project' : 'Add New Project'}
        </h3>
        <button
          onClick={onCancel}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Title *</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-input"
              placeholder="Project title"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-input"
            >
              <option value="">Select category</option>
              <option value="AI / SaaS">AI / SaaS</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Brand / 3D">Brand / 3D</option>
              <option value="AI / Fashion">AI / Fashion</option>
              <option value="Booking / Web App">Booking / Web App</option>
              <option value="Tool / SaaS">Tool / SaaS</option>
              <option value="3D / Interior">3D / Interior</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="form-input resize-none"
            placeholder="Describe the project..."
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-2">Technologies (comma-separated) *</label>
          <input
            type="text"
            value={techInput}
            onChange={handleTechChange}
            className="form-input"
            placeholder="React, TypeScript, Three.js"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Live Link</label>
            <input
              type="url"
              name="liveLink"
              value={formData.liveLink}
              onChange={handleChange}
              className="form-input"
              placeholder="https://project.vercel.app"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">GitHub Link</label>
            <input
              type="url"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              className="form-input"
              placeholder="https://github.com/..."
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="form-input"
              placeholder="/projects/image.jpg"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Year</label>
            <input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-4 h-4 rounded border-gold/30 bg-background text-gold"
          />
          <label className="text-sm text-gray-400">Featured project</label>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="btn-gold px-6 py-2.5 rounded-lg flex items-center gap-2"
          >
            <Save size={18} />
            {project ? 'Save Changes' : 'Add Project'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-2.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  )
}
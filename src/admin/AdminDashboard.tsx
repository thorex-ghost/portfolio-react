import { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit2, Trash2, Plus } from 'lucide-react'
import { Project } from '@/data/projects'
import { ProjectForm } from './ProjectForm'

interface AdminDashboardProps {
  projects?: Project[]
  onAddProject?: (project: Omit<Project, 'id'>) => void
  onEditProject?: (project: Project) => void
  onDeleteProject?: (id: string) => void
}

export const AdminDashboard = ({ 
  projects = [], 
  onAddProject, 
  onEditProject, 
  onDeleteProject 
}: AdminDashboardProps) => {
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const handleAddNew = () => {
    setEditingProject(null)
    setShowForm(true)
  }

  const handleEdit = (project: Project) => {
    setEditingProject(project)
    setShowForm(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      onDeleteProject?.(id)
    }
  }

  const handleSubmit = (project: Omit<Project, 'id'> | Project) => {
    if (editingProject) {
      onEditProject?.({ ...project, id: editingProject.id } as Project)
    } else {
      onAddProject?.(project as Omit<Project, 'id'>)
    }
    setShowForm(false)
    setEditingProject(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-2xl font-bold">Manage Projects</h3>
          <p className="text-gray-400 text-sm">Add, edit, or remove portfolio projects</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddNew}
          className="btn-gold px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <Plus size={18} />
          Add Project
        </motion.button>
      </div>

      {showForm ? (
        <ProjectForm
          project={editingProject}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false)
            setEditingProject(null)
          }}
        />
      ) : (
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Project</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Category</th>
                  <th className="text-left px-6 py-4 text-sm font-medium text-gray-400">Year</th>
                  <th className="text-right px-6 py-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {projects.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                      No projects yet. Click "Add Project" to get started.
                    </td>
                  </tr>
                ) : (
                  projects.map((project) => (
                    <tr key={project.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                            <span className="text-gold font-bold text-xs">
                              {project.title.slice(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <div className="font-medium">{project.title}</div>
                            <div className="text-sm text-gray-500 line-clamp-1 max-w-xs">
                              {project.description}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">{project.category}</td>
                      <td className="px-6 py-4 text-sm text-gray-400">{project.year}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleEdit(project)}
                            className="p-2 rounded-lg hover:bg-gold/10 text-gray-400 hover:text-gold transition-colors"
                          >
                            <Edit2 size={16} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDelete(project.id)}
                            className="p-2 rounded-lg hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={16} />
                          </motion.button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
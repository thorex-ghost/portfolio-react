import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { X, Lock, LayoutDashboard, LogOut, Eye, EyeOff } from 'lucide-react'
import { AdminDashboard } from './AdminDashboard'
import { Project } from '@/data/projects'
import { fetchProjects, saveProjects, deleteProject } from '@/lib/projects'

interface AdminPanelProps {
  onClose: () => void
}

export const AdminLogin = ({ onLogin }: { onLogin: () => void }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD as string | undefined
    if (password === 'THOREX130412' || (adminPassword && password === adminPassword)) {
      localStorage.setItem('adminAuth', 'true')
      onLogin()
    } else {
      setError('Invalid password')
      setPassword('')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="glass rounded-2xl p-8 w-full max-w-md"
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
            <Lock size={32} className="text-gold" />
          </div>
          <h2 className="font-display text-2xl font-bold">Admin Access</h2>
          <p className="text-gray-400 text-sm mt-2">Enter password to access admin panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input pr-12"
              placeholder="Enter password"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm text-center"
            >
              {error}
            </motion.p>
          )}

          <button type="submit" className="btn-gold w-full py-3 rounded-lg font-medium">
            Access Panel
          </button>
        </form>

        <p className="text-center text-gray-600 text-xs mt-6">
          Enter your admin password
        </p>
      </motion.div>
    </div>
  )
}

export const AdminPanel = ({ onClose }: AdminPanelProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [projects, setProjects] = useState<Project[]>([])
  const [saving, setSaving] = useState(false)

  const reloadProjects = useCallback(async () => {
    const data = await fetchProjects()
    setProjects(data)
  }, [])

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      reloadProjects()
    }
  }, [reloadProjects])

  const handleLogin = () => {
    setIsAuthenticated(true)
    reloadProjects()
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setIsAuthenticated(false)
    setProjects([])
    onClose()
  }

  const handleAddProject = async (project: Omit<Project, 'id'>) => {
    setSaving(true)
    const next = [...projects, { ...project, id: `temp-${Date.now()}` } as Project]
    setProjects(next)
    const ok = await saveProjects(next)
    setSaving(false)
    if (!ok) {
      await reloadProjects()
    }
  }

  const handleEditProject = async (project: Project) => {
    setSaving(true)
    const next = projects.map((p) => (p.id === project.id ? project : p))
    setProjects(next)
    const ok = await saveProjects(next)
    setSaving(false)
    if (!ok) {
      await reloadProjects()
    }
  }

  const handleDeleteProject = async (id: string) => {
    setSaving(true)
    const next = projects.filter((p) => p.id !== id)
    setProjects(next)
    const ok = await deleteProject(id)
    setSaving(false)
    if (!ok) {
      await reloadProjects()
    }
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm overflow-y-auto"
    >
      <div className="min-h-screen">
        <div className="sticky top-0 z-10 glass border-b border-gold/20">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutDashboard size={24} className="text-gold" />
              <h2 className="font-display text-xl font-bold">Admin Dashboard</h2>
              {saving && <span className="text-xs text-gray-500">Saving…</span>}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400">THOREX STACK</span>
              <button
                onClick={handleLogout}
                className="text-gray-400 hover:text-red-400 transition-colors flex items-center gap-2 text-sm"
              >
                <LogOut size={16} />
                Logout
              </button>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <AdminDashboard
            projects={projects}
            onAddProject={handleAddProject}
            onEditProject={handleEditProject}
            onDeleteProject={handleDeleteProject}
          />
        </div>
      </div>
    </motion.div>
  )
}
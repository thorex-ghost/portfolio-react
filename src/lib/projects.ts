import { supabase, isSupabaseConfigured } from './supabase'
import { Project, seedProjects } from '@/data/projects'

// Supabase row shape (snake_case) as returned by the portfolio_projects table.
type SupabaseProjectRow = {
  id: string
  title: string
  category: string
  cover_image: string
  metric: string
  description: string
  tech_stack: string[]
  live_url: string
  created_at: string
}

// Maps a Supabase row to the Project interface the UI expects.
function formatProject(row: SupabaseProjectRow): Project {
  return {
    id: row.id,
    title: row.title,
    category: row.category,
    description: row.description,
    tech: row.tech_stack ?? [],
    image: row.cover_image ?? '',
    liveLink: row.live_url ?? '',
    githubLink: '',
    year: row.created_at ? new Date(row.created_at).getFullYear() : new Date().getFullYear(),
    featured: false,
  }
}

// PUBLIC READS — intentionally use the anon key directly from the browser.
export async function fetchProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured) {
    return seedProjects
  }

  const { data, error } = await supabase
    .from('portfolio_projects')
    .select(
      'id, title, category, cover_image, metric, description, tech_stack, live_url, created_at'
    )
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Supabase error fetching projects:', error)
    return seedProjects
  }

  if (!data || data.length === 0) {
    return seedProjects
  }

  return data.map(formatProject)
}

// ADMIN WRITES — routed through the Netlify serverless function so the
// service-role key never touches the browser.
const ADMIN_SECRET =
  (import.meta.env.VITE_ADMIN_PASSWORD as string | undefined) ?? 'THOREX130412'

function toRow(p: Project): {
  title: string
  category: string
  cover_image: string
  metric: string
  description: string
  tech_stack: string[]
  live_url: string
} {
  return {
    title: p.title,
    category: p.category,
    cover_image: p.image,
    metric: '',
    description: p.description,
    tech_stack: p.tech,
    live_url: p.liveLink,
  }
}

export async function saveProjects(projects: Project[]): Promise<boolean> {
  try {
    const res = await fetch('/.netlify/functions/admin-projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-secret': ADMIN_SECRET,
      },
      body: JSON.stringify({ action: 'replace', projects: projects.map(toRow) }),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('admin-projects write failed:', res.status, text)
      return false
    }
    return true
  } catch (err) {
    console.error('admin-projects write error:', err)
    return false
  }
}

export async function deleteProject(id: string): Promise<boolean> {
  try {
    const res = await fetch('/.netlify/functions/admin-projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-secret': ADMIN_SECRET,
      },
      body: JSON.stringify({ action: 'delete', id }),
    })
    return res.ok
  } catch (err) {
    console.error('admin-projects delete error:', err)
    return false
  }
}
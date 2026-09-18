import { createClient } from '@supabase/supabase-js'

// Server-only env vars — never exposed to the browser bundle.
const SUPABASE_URL = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL ?? ''
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? ''
const ADMIN_SECRET = process.env.ADMIN_SECRET ?? ''

let client: ReturnType<typeof createClient> | null = null

function getSupabase() {
  if (!client) {
    client = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
      auth: { persistSession: false, autoRefreshToken: false },
    })
  }
  return client
}

interface ProjectBody {
  id?: string
  title: string
  category: string
  cover_image?: string
  metric?: string
  description: string
  tech_stack: string[]
  live_url: string
}

interface RequestBody {
  action: 'replace' | 'delete' | 'insert'
  projects?: ProjectBody[]
  id?: string
}

export const handler = async (event: {
  httpMethod: string
  headers: Record<string, string | undefined>
  body: string | null
}) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) }
  }

  // Server-side secret check (not the VITE_ prefixed client var).
  const secret = event.headers['x-admin-secret'] ?? event.headers['X-Admin-Secret']
  if (!secret || secret !== ADMIN_SECRET) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) }
  }

  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Server not configured: missing SUPABASE_SERVICE_ROLE_KEY' }),
    }
  }

  let body: RequestBody
  try {
    body = event.body ? JSON.parse(event.body) : { action: 'replace', projects: [] }
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) }
  }

  const supabase = getSupabase()

  try {
    if (body.action === 'delete' && body.id) {
      const { error } = await supabase
        .from('portfolio_projects')
        .delete()
        .eq('id', body.id)
      if (error) throw error
      return { statusCode: 200, body: JSON.stringify({ ok: true, action: 'delete' }) }
    }

    if (body.action === 'insert' && body.projects && body.projects.length > 0) {
      const { error } = await supabase.from('portfolio_projects').insert(body.projects)
      if (error) throw error
      return { statusCode: 200, body: JSON.stringify({ ok: true, action: 'insert' }) }
    }

    // Default: replace the whole table (matches the admin UI's save-all behaviour).
    const projects = body.projects ?? []

    const { error: deleteError } = await supabase
      .from('portfolio_projects')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000')

    if (deleteError) throw deleteError

    if (projects.length > 0) {
      const { error: insertError } = await supabase.from('portfolio_projects').insert(projects)
      if (insertError) throw insertError
    }

    return { statusCode: 200, body: JSON.stringify({ ok: true, action: 'replace' }) }
  } catch (err) {
    console.error('admin-projects error:', err)
    return { statusCode: 500, body: JSON.stringify({ error: 'Write failed' }) }
  }
}
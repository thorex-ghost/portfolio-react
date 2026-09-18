import { createClient, SupabaseClient } from '@supabase/supabase-js'

let supabaseInstance: SupabaseClient | null = null

function getSupabase(): SupabaseClient {
  if (!supabaseInstance) {
    const url = (import.meta.env.VITE_SUPABASE_URL as string | undefined) ?? ''
    const key = (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined) ?? ''
    supabaseInstance = createClient(url, key)
  }
  return supabaseInstance
}

export const supabase = {
  from: (table: string) => getSupabase().from(table),
}

export const isSupabaseConfigured = Boolean(
  (import.meta.env.VITE_SUPABASE_URL as string | undefined) &&
    (import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined)
)
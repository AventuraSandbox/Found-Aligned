import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Environment variables for Supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// If env vars are missing, export a safe mock client so the app can still render
function createMockSupabase() {
  const notConfigured = (method: string) => ({
    data: null as any,
    error: { message: `Supabase not configured: ${method}` } as any,
  });

  return {
    auth: {
      async getSession() { return { data: { session: null }, error: { message: 'Supabase not configured: getSession' } as any }; },
      onAuthStateChange() { return { data: { subscription: { unsubscribe() {} } } } as any; },
      async signOut() { return { error: { message: 'Supabase not configured: signOut' } as any }; },
      async getUser() { return { data: { user: null }, error: { message: 'Supabase not configured: getUser' } as any }; },
    },
    from() { return { insert: async () => notConfigured('from().insert()'), select: async () => notConfigured('from().select()') } as any; },
    functions: { async invoke() { return notConfigured('functions.invoke'); } },
    async rpc() { return notConfigured('rpc'); },
  } as any;
}

export const supabase = (SUPABASE_URL && SUPABASE_ANON_KEY)
  ? createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: {
        storage: typeof window !== 'undefined' ? localStorage : undefined,
        persistSession: true,
        autoRefreshToken: true,
      }
    })
  : createMockSupabase();
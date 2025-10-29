import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Environment variables for Supabase configuration
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check for required environment variables
// In production, these must be set in Netlify/Vercel environment variables
if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  if (import.meta.env.DEV) {
    console.error('Missing Supabase environment variables. Please check your .env file.');
    console.error('Required variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY');
  }
  // Don't throw in production to allow error boundary to handle it gracefully
  // Actual Supabase operations will fail, but the app can still render
}

export const supabase = createClient<Database>(
  SUPABASE_URL || '',
  SUPABASE_ANON_KEY || '',
  {
    auth: {
      storage: typeof window !== 'undefined' ? localStorage : undefined,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);
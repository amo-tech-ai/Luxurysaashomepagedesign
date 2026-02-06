/**
 * Supabase Client Configuration
 * 
 * This file initializes the Supabase client for database operations
 * and authentication. Make sure to set up your environment variables:
 * 
 * VITE_SUPABASE_URL - Your Supabase project URL
 * VITE_SUPABASE_ANON_KEY - Your Supabase anon/public key
 */

import { createClient } from '@supabase/supabase-js';

// Get environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env.local file.'
  );
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

// Export types for TypeScript support
export type { User, Session } from '@supabase/supabase-js';

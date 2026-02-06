/**
 * Canvas API Helpers
 * 
 * Functions for loading and saving Lean Canvas data to Supabase.
 * Handles startup creation and canvas CRUD operations.
 */

import { supabase } from './supabase';

export interface CanvasData {
  // Row 1 - Strategy Core
  problem: string;
  solution: string;
  unique_value_proposition: string;
  unfair_advantage: string;
  customer_segments: string;
  
  // Row 2 - Validation
  existing_alternatives: string;
  key_metrics: string;
  high_level_concept: string;
  channels: string;
  early_adopters: string;
  
  // Row 3 - Economics
  cost_structure: string;
  revenue_streams: string;
}

/**
 * Get or create a startup for the current user
 * Creates a default startup if none exists
 */
export async function getOrCreateStartup() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error('User not authenticated');
  }

  // Check if startup exists
  const { data: startups, error: fetchError } = await supabase
    .from('startups')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false })
    .limit(1);

  if (fetchError) throw fetchError;

  if (startups && startups.length > 0) {
    return startups[0];
  }

  // Create first startup
  const { data: newStartup, error: createError } = await supabase
    .from('startups')
    .insert({
      user_id: user.id,
      name: 'My Startup',
      stage: 'idea',
    })
    .select()
    .single();

  if (createError) throw createError;
  return newStartup;
}

/**
 * Load canvas data from database
 * Returns empty canvas if none exists
 */
export async function loadCanvas(): Promise<CanvasData> {
  const startup = await getOrCreateStartup();

  const { data, error } = await supabase
    .from('lean_canvases')
    .select('*')
    .eq('startup_id', startup.id)
    .maybeSingle();

  if (error) throw error;

  // Return empty canvas if none exists
  if (!data) {
    return {
      problem: '',
      solution: '',
      unique_value_proposition: '',
      unfair_advantage: '',
      customer_segments: '',
      existing_alternatives: '',
      key_metrics: '',
      high_level_concept: '',
      channels: '',
      early_adopters: '',
      cost_structure: '',
      revenue_streams: '',
    };
  }

  return {
    problem: data.problem || '',
    solution: data.solution || '',
    unique_value_proposition: data.unique_value_proposition || '',
    unfair_advantage: data.unfair_advantage || '',
    customer_segments: data.customer_segments || '',
    existing_alternatives: data.existing_alternatives || '',
    key_metrics: data.key_metrics || '',
    high_level_concept: data.high_level_concept || '',
    channels: data.channels || '',
    early_adopters: data.early_adopters || '',
    cost_structure: data.cost_structure || '',
    revenue_streams: data.revenue_streams || '',
  };
}

/**
 * Save canvas data to database
 * Uses upsert to insert or update as needed
 */
export async function saveCanvas(canvasData: CanvasData) {
  const startup = await getOrCreateStartup();

  const { data, error } = await supabase
    .from('lean_canvases')
    .upsert(
      {
        startup_id: startup.id,
        ...canvasData,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'startup_id',
      }
    )
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Convert array-based canvas items to text format for storage
 */
export function itemsToText(items: string[]): string {
  return items.join('\n');
}

/**
 * Convert text format to array-based items for display
 */
export function textToItems(text: string): string[] {
  return text
    .split('\n')
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

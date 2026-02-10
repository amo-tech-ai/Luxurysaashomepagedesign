// Value Proposition Canvas - Type Definitions
// Based on Strategyzer v2.1 official template

export type ItemType = 
  | 'customer_job' 
  | 'pain' 
  | 'gain' 
  | 'product' 
  | 'pain_reliever' 
  | 'gain_creator';

export type Stage = 'idea' | 'MVP' | 'selling';

export interface ValuePropItem {
  id: string;
  type: ItemType;
  text: string;
  order: number;
  impact?: 'high' | 'medium' | 'low'; // Priority/importance
  matched_to?: string[]; // IDs of connected items
  created_at: Date;
  updated_at: Date;
}

export interface FitScore {
  overall: number; // 0-100
  pains_matched: number;
  pains_total: number;
  gains_matched: number;
  gains_total: number;
  unmatched_pains: string[]; // IDs
  unmatched_gains: string[]; // IDs
}

export interface ValuePropositionCanvas {
  id: string;
  startup_id: string;
  
  // Customer Profile (Left Side)
  customer_jobs: ValuePropItem[];
  pains: ValuePropItem[];
  gains: ValuePropItem[];
  
  // Value Map (Right Side)
  products: ValuePropItem[];
  pain_relievers: ValuePropItem[];
  gain_creators: ValuePropItem[];
  
  // Metadata
  fit_score: FitScore;
  source_lean_canvas: boolean;
  source_validator: boolean;
  last_regenerated?: Date;
  created_at: Date;
  updated_at: Date;
}

export interface MatchedPair {
  customer_item: ValuePropItem;
  value_item: ValuePropItem;
  match_type: 'pain_reliever' | 'gain_creator';
}

export interface Suggestion {
  id: string;
  type: 'add_reliever' | 'add_creator' | 'add_product' | 'improve_match';
  for_item: ValuePropItem;
  suggestion_text: string;
  priority: 'high' | 'medium' | 'low';
}

export interface FitAnalysis {
  matched_pairs: MatchedPair[];
  unmatched_pains: ValuePropItem[];
  unmatched_gains: ValuePropItem[];
  suggestions: Suggestion[];
}

// Immersive Experience Canvas - Type Definitions
// Based on Deloitte Digital XR/AR/VR Canvas Template

export type ExperienceType = 
  | 'entertainment' 
  | 'shopping' 
  | 'social_interaction' 
  | 'edutainment' 
  | 'assistance' 
  | 'gaming' 
  | 'wellbeing';

export type LifecyclePhase = 
  | 'become_aware' 
  | 'purchase' 
  | 'wait' 
  | 'use' 
  | 'stay_loyal';

export interface ImmersiveBarometer {
  position: number; // 0-100 (0=real world, 100=virtual world)
}

export interface ExperienceDimension {
  type: ExperienceType;
  reach: number; // 0-100 (0=niche, 100=mainstream)
  lifecycle_phases: LifecyclePhase[]; // Which phases affected
}

export interface ValueDimensionScore {
  // Customer Impact (a-e)
  eliminates_pain: number; // 0-5
  increases_convenience: number; // 0-5
  increases_personalization: number; // 0-5
  increases_efficiency: number; // 0-5
  delights_innovation: number; // 0-5
  
  // Brand Impact (f-k)
  omnichannel_integration: number; // 0-5
  brand_values_alignment: number; // 0-5
  competitor_differentiation: number; // 0-5
  positive_brand_perception: number; // 0-5
  increases_loyalty: number; // 0-5
  improves_positioning: number; // 0-5
  
  // Business Impact (l-o)
  improves_targeting: number; // 0-5
  data_driven_decisions: number; // 0-5
  creates_revenue: number; // 0-5
  reaches_new_groups: number; // 0-5
}

export interface ValueDimensionSummary {
  customer_impact: number; // average of a-e
  brand_impact: number; // average of f-k
  business_impact: number; // average of l-o
  overall_score: number; // average of all three
  weak_dimensions: WeakDimension[];
}

export interface WeakDimension {
  dimension: 'customer' | 'brand' | 'business';
  criterion: string; // e.g., "eliminates_pain"
  criterion_label: string; // e.g., "Eliminates pain points"
  current_score: number;
  target_score: number;
}

export interface ImmersiveExperienceCanvas {
  id: string;
  startup_id: string;
  
  // 12 Main Sections
  use_case_name: string;
  use_case_description: string;
  to_be_journey: string;
  customer_segments: string;
  customer_adoption: string;
  technology_stack: string;
  channels_devices: string;
  key_resources: string;
  cost_structure: string;
  revenue_generation: string;
  key_partners: string;
  mvp_state: string;
  
  // Special Elements
  immersive_barometer: ImmersiveBarometer;
  experience_dimension: ExperienceDimension;
  value_dimensions: ValueDimensionScore;
  value_summary: ValueDimensionSummary;
  
  // Metadata
  source_lean_canvas: boolean;
  source_value_proposition: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface AISuggestion {
  id: string;
  dimension: 'customer' | 'brand' | 'business';
  weak_criterion: string;
  criterion_label: string;
  suggestion_text: string;
  suggested_section: number; // 1-12, which canvas section to update
  priority: 'high' | 'medium' | 'low';
}

// Experience Type Definitions
export const EXPERIENCE_TYPES: Record<ExperienceType, { label: string; description: string }> = {
  entertainment: {
    label: 'Entertainment',
    description: 'Captivating, fun experiences; brand engagement',
  },
  shopping: {
    label: 'Shopping',
    description: 'Personalised, interactive (online) shopping',
  },
  social_interaction: {
    label: 'Social Interaction',
    description: 'Real/virtual spaces for connection and collaboration',
  },
  edutainment: {
    label: 'Edutainment',
    description: 'Memorable, engaging learning journey',
  },
  assistance: {
    label: 'Assistance',
    description: 'Support and explanation for product/service usage',
  },
  gaming: {
    label: 'Gaming',
    description: 'Immersive, dynamic gaming experiences',
  },
  wellbeing: {
    label: 'Wellbeing',
    description: 'Mental/physical health; relaxation, mindfulness',
  },
};

// Lifecycle Phase Definitions
export const LIFECYCLE_PHASES: Record<LifecyclePhase, string> = {
  become_aware: 'Become Aware',
  purchase: 'Purchase',
  wait: 'Wait',
  use: 'Use',
  stay_loyal: 'Stay Loyal',
};

// Value Dimension Criterion Labels
export const VALUE_CRITERIA = {
  customer: {
    eliminates_pain: 'Eliminates pain points',
    increases_convenience: 'Increases convenience',
    increases_personalization: 'Increases personalization',
    increases_efficiency: 'Increases personal efficiency',
    delights_innovation: 'Delights with innovative experience',
  },
  brand: {
    omnichannel_integration: 'Integrates omni-channel',
    brand_values_alignment: 'Aligns with brand values',
    competitor_differentiation: 'Differentiates from competitors',
    positive_brand_perception: 'Positive brand perception',
    increases_loyalty: 'Increases loyalty',
    improves_positioning: 'Improves positioning',
  },
  business: {
    improves_targeting: 'Improves customer targeting',
    data_driven_decisions: 'Fosters data-driven decisions',
    creates_revenue: 'Creates revenue streams',
    reaches_new_groups: 'Reaches new target groups',
  },
};

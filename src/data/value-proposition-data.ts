// Value Proposition Canvas - Mock Data
// Production-ready sample for pitch deck SaaS startup

import type {
  ValuePropositionCanvas,
  ValuePropItem,
  FitScore,
  FitAnalysis,
} from './value-proposition-types';

// CUSTOMER PROFILE - Left Side

export const SAMPLE_CUSTOMER_JOBS: ValuePropItem[] = [
  {
    id: 'job-001',
    type: 'customer_job',
    text: 'Create investor-ready pitch deck for fundraising',
    order: 1,
    impact: 'high',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'job-002',
    type: 'customer_job',
    text: 'Tell compelling startup story to investors',
    order: 2,
    impact: 'high',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'job-003',
    type: 'customer_job',
    text: 'Coordinate team input on deck content',
    order: 3,
    impact: 'medium',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'job-004',
    type: 'customer_job',
    text: 'Iterate deck based on investor feedback',
    order: 4,
    impact: 'medium',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
];

export const SAMPLE_PAINS: ValuePropItem[] = [
  {
    id: 'pain-001',
    type: 'pain',
    text: 'Spend 20+ hours creating deck from scratch',
    order: 1,
    impact: 'high',
    matched_to: ['reliever-001'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'pain-002',
    type: 'pain',
    text: 'Generic templates make deck look unprofessional',
    order: 2,
    impact: 'high',
    matched_to: ['reliever-002'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'pain-003',
    type: 'pain',
    text: 'Don\'t know how to structure narrative',
    order: 3,
    impact: 'high',
    matched_to: ['reliever-003'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'pain-004',
    type: 'pain',
    text: 'Version control chaos with multiple collaborators',
    order: 4,
    impact: 'medium',
    matched_to: ['reliever-004'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'pain-005',
    type: 'pain',
    text: 'No visibility on which slides investors care about',
    order: 5,
    impact: 'medium',
    matched_to: [], // UNMATCHED - gap to highlight
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
];

export const SAMPLE_GAINS: ValuePropItem[] = [
  {
    id: 'gain-001',
    type: 'gain',
    text: 'Faster deck creation (under 5 hours)',
    order: 1,
    impact: 'high',
    matched_to: ['creator-001'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'gain-002',
    type: 'gain',
    text: 'Professional design that stands out',
    order: 2,
    impact: 'high',
    matched_to: ['creator-002'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'gain-003',
    type: 'gain',
    text: 'Clear, investor-tested narrative structure',
    order: 3,
    impact: 'high',
    matched_to: ['creator-003'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'gain-004',
    type: 'gain',
    text: 'Easy collaboration with co-founders',
    order: 4,
    impact: 'medium',
    matched_to: ['creator-004'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'gain-005',
    type: 'gain',
    text: 'Confidence when presenting to investors',
    order: 5,
    impact: 'high',
    matched_to: [], // UNMATCHED - gap to highlight
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'gain-006',
    type: 'gain',
    text: 'Reusable deck templates for different audiences',
    order: 6,
    impact: 'low',
    matched_to: [], // UNMATCHED - gap to highlight
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
];

// VALUE MAP - Right Side

export const SAMPLE_PRODUCTS: ValuePropItem[] = [
  {
    id: 'product-001',
    type: 'product',
    text: 'AI-powered pitch deck generator',
    order: 1,
    impact: 'high',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'product-002',
    type: 'product',
    text: 'Premium investor-grade templates',
    order: 2,
    impact: 'high',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'product-003',
    type: 'product',
    text: 'Guided narrative builder',
    order: 3,
    impact: 'high',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'product-004',
    type: 'product',
    text: 'Real-time collaboration workspace',
    order: 4,
    impact: 'medium',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
  {
    id: 'product-005',
    type: 'product',
    text: 'Deck analytics dashboard',
    order: 5,
    impact: 'medium',
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-01'),
  },
];

export const SAMPLE_PAIN_RELIEVERS: ValuePropItem[] = [
  {
    id: 'reliever-001',
    type: 'pain_reliever',
    text: 'Generate complete deck in 10 minutes with AI',
    order: 1,
    impact: 'high',
    matched_to: ['pain-001'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'reliever-002',
    type: 'pain_reliever',
    text: 'Premium templates designed by top agencies',
    order: 2,
    impact: 'high',
    matched_to: ['pain-002'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'reliever-003',
    type: 'pain_reliever',
    text: 'Step-by-step guided flow with investor-tested frameworks',
    order: 3,
    impact: 'high',
    matched_to: ['pain-003'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'reliever-004',
    type: 'pain_reliever',
    text: 'Built-in version control and team comments',
    order: 4,
    impact: 'medium',
    matched_to: ['pain-004'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
];

export const SAMPLE_GAIN_CREATORS: ValuePropItem[] = [
  {
    id: 'creator-001',
    type: 'gain_creator',
    text: 'AI auto-fill reduces creation time by 75%',
    order: 1,
    impact: 'high',
    matched_to: ['gain-001'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'creator-002',
    type: 'gain_creator',
    text: 'Professional templates from Y Combinator partners',
    order: 2,
    impact: 'high',
    matched_to: ['gain-002'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'creator-003',
    type: 'gain_creator',
    text: 'Proven narrative structure (Problem-Solution-Traction)',
    order: 3,
    impact: 'high',
    matched_to: ['gain-003'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
  {
    id: 'creator-004',
    type: 'gain_creator',
    text: 'Google Docs-style real-time editing',
    order: 4,
    impact: 'medium',
    matched_to: ['gain-004'],
    created_at: new Date('2026-02-01'),
    updated_at: new Date('2026-02-09'),
  },
];

// FIT SCORE CALCULATION

export function calculateFitScore(
  pains: ValuePropItem[],
  gains: ValuePropItem[]
): FitScore {
  const painsMatched = pains.filter(
    p => p.matched_to && p.matched_to.length > 0
  ).length;
  
  const gainsMatched = gains.filter(
    g => g.matched_to && g.matched_to.length > 0
  ).length;
  
  const painsTotal = pains.length;
  const gainsTotal = gains.length;
  
  const totalItems = painsTotal + gainsTotal;
  const totalMatched = painsMatched + gainsMatched;
  
  const overall = totalItems > 0 
    ? Math.round((totalMatched / totalItems) * 100) 
    : 0;
  
  const unmatchedPains = pains
    .filter(p => !p.matched_to || p.matched_to.length === 0)
    .map(p => p.id);
  
  const unmatchedGains = gains
    .filter(g => !g.matched_to || g.matched_to.length === 0)
    .map(g => g.id);
  
  return {
    overall,
    pains_matched: painsMatched,
    pains_total: painsTotal,
    gains_matched: gainsMatched,
    gains_total: gainsTotal,
    unmatched_pains: unmatchedPains,
    unmatched_gains: unmatchedGains,
  };
}

// SAMPLE CANVAS STATE

export const SAMPLE_VALUE_PROPOSITION: ValuePropositionCanvas = {
  id: 'vp-001',
  startup_id: 'startup-001',
  
  // Customer Profile
  customer_jobs: SAMPLE_CUSTOMER_JOBS,
  pains: SAMPLE_PAINS,
  gains: SAMPLE_GAINS,
  
  // Value Map
  products: SAMPLE_PRODUCTS,
  pain_relievers: SAMPLE_PAIN_RELIEVERS,
  gain_creators: SAMPLE_GAIN_CREATORS,
  
  // Metadata
  fit_score: calculateFitScore(SAMPLE_PAINS, SAMPLE_GAINS),
  source_lean_canvas: true,
  source_validator: true,
  last_regenerated: new Date('2026-02-09T14:30:00'),
  created_at: new Date('2026-02-01'),
  updated_at: new Date('2026-02-09T19:45:00'),
};

// FIT ANALYSIS

export const SAMPLE_FIT_ANALYSIS: FitAnalysis = {
  matched_pairs: [
    {
      customer_item: SAMPLE_PAINS[0],
      value_item: SAMPLE_PAIN_RELIEVERS[0],
      match_type: 'pain_reliever',
    },
    {
      customer_item: SAMPLE_PAINS[1],
      value_item: SAMPLE_PAIN_RELIEVERS[1],
      match_type: 'pain_reliever',
    },
    {
      customer_item: SAMPLE_PAINS[2],
      value_item: SAMPLE_PAIN_RELIEVERS[2],
      match_type: 'pain_reliever',
    },
    {
      customer_item: SAMPLE_PAINS[3],
      value_item: SAMPLE_PAIN_RELIEVERS[3],
      match_type: 'pain_reliever',
    },
    {
      customer_item: SAMPLE_GAINS[0],
      value_item: SAMPLE_GAIN_CREATORS[0],
      match_type: 'gain_creator',
    },
    {
      customer_item: SAMPLE_GAINS[1],
      value_item: SAMPLE_GAIN_CREATORS[1],
      match_type: 'gain_creator',
    },
    {
      customer_item: SAMPLE_GAINS[2],
      value_item: SAMPLE_GAIN_CREATORS[2],
      match_type: 'gain_creator',
    },
    {
      customer_item: SAMPLE_GAINS[3],
      value_item: SAMPLE_GAIN_CREATORS[3],
      match_type: 'gain_creator',
    },
  ],
  unmatched_pains: [SAMPLE_PAINS[4]], // pain-005: No visibility on which slides investors care about
  unmatched_gains: [
    SAMPLE_GAINS[4], // gain-005: Confidence when presenting
    SAMPLE_GAINS[5], // gain-006: Reusable templates
  ],
  suggestions: [
    {
      id: 'sug-001',
      type: 'add_product',
      for_item: SAMPLE_PAINS[4],
      suggestion_text: 'Add "Deck analytics dashboard" feature to show which slides investors view longest. This addresses the pain: "No visibility on which slides investors care about."',
      priority: 'high',
    },
    {
      id: 'sug-002',
      type: 'add_creator',
      for_item: SAMPLE_GAINS[4],
      suggestion_text: 'Add "Presentation coaching tips" to create the gain: "Confidence when presenting to investors." Consider AI-powered pitch practice mode.',
      priority: 'medium',
    },
    {
      id: 'sug-003',
      type: 'add_creator',
      for_item: SAMPLE_GAINS[5],
      suggestion_text: 'Add "Multi-version deck manager" to enable reusable templates for different audiences (seed vs Series A, VC vs angels).',
      priority: 'low',
    },
  ],
};

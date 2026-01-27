/**
 * TypeScript Type Definitions for Pitch Deck Generator
 * 
 * Centralized type definitions for type safety across the application
 * 
 * @version 1.0.0
 */

/**
 * Core Data Types
 */

export type FundingStage = 'pre-seed' | 'seed' | 'series-a';
export type DeckStyle = 'minimal' | 'bold' | 'classic';
export type ToneType = 'professional' | 'bold' | 'technical';
export type WizardStep = 'startup-info' | 'market-traction' | 'deck-style' | 'review';

export interface DeckData {
  // Step 1: Startup Info
  companyName: string;
  oneLiner: string;
  industry: string;
  subCategory: string;
  deckType: FundingStage;
  
  // Step 2: Market & Traction
  problem: string;
  solution: string;
  differentiator: string;
  marketSize: string;
  users: string;
  revenue: string;
  growth: string;
  competitors: string;
  
  // Step 3: Deck Style
  deckStyle: DeckStyle;
  tone: ToneType;
  
  // Optional
  teamSize?: string;
  foundedYear?: string;
  website?: string;
}

/**
 * Industry Categories
 */

export interface IndustryOption {
  id: string;
  name: string;
  subCategories: string[];
}

export const INDUSTRIES: IndustryOption[] = [
  {
    id: 'enterprise-saas',
    name: 'Enterprise SaaS',
    subCategories: [
      'Sales & CRM',
      'Marketing Automation',
      'HR & Recruiting',
      'Analytics & BI',
      'Developer Tools',
      'Collaboration',
      'Security',
      'Customer Support',
      'Workflow Automation',
      'Data Management',
    ],
  },
  {
    id: 'healthcare',
    name: 'Health Care',
    subCategories: [
      'Telemedicine',
      'Digital Health',
      'Medical Devices',
      'Healthcare Analytics',
      'Mental Health',
      'Pharma Tech',
      'Care Management',
      'Health Insurance',
    ],
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    subCategories: [
      'Payments',
      'Lending',
      'Insurance',
      'Investment',
      'Banking',
      'Crypto & Web3',
      'Compliance',
      'Wealth Management',
    ],
  },
  {
    id: 'retail-ecommerce',
    name: 'Retail & eCommerce',
    subCategories: [
      'B2B Marketplace',
      'B2C Marketplace',
      'D2C Brands',
      'Vertical Commerce',
      'Retail Tech',
      'Supply Chain',
      'Fulfillment',
      'Inventory Management',
    ],
  },
  {
    id: 'sales-marketing',
    name: 'Sales & Marketing',
    subCategories: [
      'Marketing Automation',
      'Sales Enablement',
      'Advertising Tech',
      'Content Marketing',
      'SEO & Analytics',
      'Social Media',
      'Email Marketing',
      'Affiliate & Partners',
    ],
  },
  {
    id: 'communication',
    name: 'Communication',
    subCategories: [
      'Messaging',
      'Video Conferencing',
      'Team Collaboration',
      'Customer Communication',
      'VoIP & Telephony',
      'Unified Communications',
      'Contact Centers',
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    subCategories: [
      'Mobile Apps',
      'Gaming',
      'Social',
      'Productivity',
      'Entertainment',
      'Utilities',
      'Mobile Commerce',
    ],
  },
  {
    id: 'education',
    name: 'Education',
    subCategories: [
      'EdTech',
      'Online Learning',
      'Corporate Training',
      'K-12',
      'Higher Education',
      'Test Prep',
      'Language Learning',
      'Skill Development',
    ],
  },
];

/**
 * Analysis Types
 */

export type AnalysisLevel = 'Weak' | 'Adequate' | 'Strong';
export type ConfidenceLevel = 'Building' | 'Medium' | 'High';

export interface DeckAnalysis {
  storyClarity: AnalysisLevel;
  problemSolutionFit: AnalysisLevel;
  tractionStrength: string; // Stage-aware label
  marketNarrative: AnalysisLevel;
  investorPreview: string[];
  potentialGaps: string[];
  deckComparison: string;
  deckScope: string;
  confidenceLevel: ConfidenceLevel;
  confidenceScore: number;
}

/**
 * Slide Types
 */

export type SlideType =
  | 'cover'
  | 'problem'
  | 'solution'
  | 'market'
  | 'product'
  | 'traction'
  | 'business-model'
  | 'competition'
  | 'team'
  | 'financials'
  | 'ask'
  | 'closing';

export interface SlideContent {
  slideNumber: number;
  title: string;
  type: SlideType;
  bulletPoints: string[];
  visualSuggestion: string;
  speakerNotes: string;
}

export interface GeneratedDeck {
  deckId: string;
  companyName: string;
  fundingStage: FundingStage;
  slides: SlideContent[];
  totalSlides: number;
  generatedAt: Date;
  estimatedPresentationTime: string;
}

/**
 * Readiness Checklist
 */

export interface ReadinessItem {
  label: string;
  status: 'complete' | 'incomplete' | 'warning';
  targetStep: WizardStep;
}

/**
 * Deck Style Options
 */

export interface DeckStyleOption {
  id: DeckStyle;
  name: string;
  description: string;
  example: string;
}

export const DECK_STYLES: DeckStyleOption[] = [
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Clean, text-focused',
    example: 'Like Stripe or Linear',
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'Visual-first, punchy',
    example: 'Like Airbnb or Uber',
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional, data-heavy',
    example: 'Like YC decks',
  },
];

/**
 * Tone Options
 */

export interface ToneOption {
  id: ToneType;
  name: string;
  desc: string;
}

export const TONE_OPTIONS: ToneOption[] = [
  { id: 'professional', name: 'Professional', desc: 'Clear and measured' },
  { id: 'bold', name: 'Bold', desc: 'Confident and direct' },
  { id: 'technical', name: 'Technical', desc: 'Data-driven' },
];

/**
 * Validation Types
 */

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
}

export interface ValidationError {
  field: string;
  message: string;
  severity: 'error' | 'warning';
}

export interface ValidationWarning {
  field: string;
  message: string;
  suggestion?: string;
}

/**
 * Export Types
 */

export type ExportFormat = 'json' | 'markdown' | 'pdf' | 'pptx';

export interface ExportOptions {
  format: ExportFormat;
  includeNotes: boolean;
  includeVisuals?: boolean;
}

export interface ExportResult {
  success: boolean;
  data?: string | Blob;
  error?: string;
}

/**
 * AI Assistant Types
 */

export interface AIFeedback {
  type: 'tip' | 'warning' | 'success';
  message: string;
  priority: number; // 1-10, higher = more important
}

export interface AISuggestion {
  field: string;
  originalValue: string;
  suggestedValue: string;
  reason: string;
}

/**
 * API Response Types
 */

export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}

export interface AnalysisAPIResponse extends APIResponse<DeckAnalysis> {}
export interface GenerationAPIResponse extends APIResponse<GeneratedDeck> {}
export interface ExportAPIResponse extends APIResponse<{ downloadUrl: string }> {}

/**
 * UI State Types
 */

export interface WizardState {
  currentStep: WizardStep;
  completedSteps: WizardStep[];
  canProceed: boolean;
  hasChanges: boolean;
}

export interface LoadingState {
  isLoading: boolean;
  message?: string;
  progress?: number; // 0-100
}

export interface ErrorState {
  hasError: boolean;
  errorMessage?: string;
  errorDetails?: any;
}

/**
 * Analytics Types
 */

export interface AnalyticsEvent {
  event: string;
  category: 'navigation' | 'generation' | 'export' | 'validation';
  label?: string;
  value?: number;
  metadata?: Record<string, any>;
}

export interface DeckMetrics {
  timeToComplete: number; // seconds
  revisitedSteps: WizardStep[];
  finalScore: number;
  exportFormat?: ExportFormat;
}
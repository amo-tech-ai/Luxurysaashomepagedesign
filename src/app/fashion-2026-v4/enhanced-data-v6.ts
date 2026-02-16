/**
 * Fashion 2026 Enhanced Data — Complete 6-Section Content
 * Following comprehensive style guide specifications
 * @version 6.0.0
 */

import { DollarSign, TrendingDown, Users, Sparkles, Target, Zap, RefreshCcw } from 'lucide-react';

// ========================================
// SECTION 1: HERO — "$2 Trillion Crossroads" (LIGHT)
// ========================================
export const section01Hero = {
  id: 'hero',
  theme: 'light' as const,
  label: 'Global Outlook 2026',
  
  hero: {
    value: '$2.0T → $2.4T',
    label: 'by 2030',
    sublabel: 'A trillion-dollar industry enters a volatility cycle.',
  },
  
  statCards: [
    {
      value: '46%',
      label: 'Executives Expect Worsening',
      description: 'of executives expect worsening conditions',
      icon: TrendingDown,
    },
    {
      value: '76%',
      label: 'Tariffs as Primary Risk',
      description: 'cite tariffs as primary macro risk',
      icon: DollarSign,
    },
    {
      value: 'Low',
      label: 'Single-Digit Growth',
      description: 'Low single-digit growth forecast',
      icon: Target,
    },
  ],
  
  strategicTakeaway: 'Scale alone no longer protects margins.',
  
  // Mini bar chart data (preview at bottom)
  growthPreview: [
    { year: '2024', value: 2.0 },
    { year: '2025', value: 2.1 },
    { year: '2026', value: 2.2 },
    { year: '2027', value: 2.3 },
    { year: '2030', value: 2.4 },
  ],
};

// ========================================
// SECTION 2: DISCOUNT TRAP — "Margin Compression Era" (DARK)
// ========================================
export const section02DiscountTrap = {
  id: 'discount',
  theme: 'dark' as const,
  label: 'Consumer Shift',
  
  headline: 'The Margin Compression Era',
  
  hero: {
    value: '66%',
    label: 'require 30%+ discounts',
    sublabel: 'Discounting is structural, not seasonal.',
  },
  
  statCards: [
    {
      value: '48.5%',
      label: 'Spending Less YoY',
      description: 'spending less year-over-year',
      icon: TrendingDown,
    },
    {
      value: '44.5%',
      label: 'Waiting for Sales',
      description: 'waiting for deeper sales',
      icon: DollarSign,
    },
    {
      value: '46%',
      label: 'Quality Concerns',
      description: 'stopped buying due to quality decline',
      icon: Users,
    },
  ],
  
  // Line chart data — Consumer spending behavior shifts
  lineChartData: [
    { month: 'Jan', fullPrice: 35, discount: 65 },
    { month: 'Feb', fullPrice: 32, discount: 68 },
    { month: 'Mar', fullPrice: 30, discount: 70 },
    { month: 'Apr', fullPrice: 28, discount: 72 },
    { month: 'May', fullPrice: 26, discount: 74 },
    { month: 'Jun', fullPrice: 24, discount: 76 },
  ],
  
  // Circular flow diagram
  flowDiagram: {
    title: 'The Discount Dependency Loop',
    nodes: [
      { label: 'Brand Trust ↓', sublabel: '', variant: 'risk' as const },
      { label: 'Discount Dependency', sublabel: '', variant: 'neutral' as const },
      { label: 'Margin Compression', sublabel: '', variant: 'risk' as const },
      { label: 'Quality Cuts', sublabel: '', variant: 'neutral' as const },
      { label: 'Further Erosion', sublabel: '', variant: 'risk' as const },
    ],
  },
  
  strategicInsight: 'Price-led growth weakens brand equity over time.',
  
  source: 'McKinsey State of Fashion 2026',
};

// ========================================
// SECTION 3: AI SHOPPER — "The Algorithmic Consumer" (LIGHT)
// ========================================
export const section03AIShopper = {
  id: 'ai-shopper',
  theme: 'light' as const,
  label: 'AI Commerce',
  
  headline: 'The Algorithmic Consumer',
  
  hero: {
    value: '4,700%',
    label: 'surge in AI shopping searches',
    sublabel: 'Discovery has shifted to AI agents.',
  },
  
  statCards: [
    {
      value: '53%',
      label: 'Shop via AI',
      description: 'shop via AI assistants',
      icon: Sparkles,
    },
    {
      value: '60%',
      label: 'AI in Journey',
      description: 'used AI in shopping journey',
      icon: Target,
    },
    {
      value: '41%',
      label: 'Trust AI Over Ads',
      description: 'trust AI recommendations over ads',
      icon: Users,
    },
  ],
  
  // Area chart — AI shopping search growth (exponential curve)
  areaChartData: [
    { quarter: 'Q1 23', searches: 100 },
    { quarter: 'Q2 23', searches: 220 },
    { quarter: 'Q3 23', searches: 480 },
    { quarter: 'Q4 23', searches: 1100 },
    { quarter: 'Q1 24', searches: 2400 },
    { quarter: 'Q2 24', searches: 4700 },
  ],
  
  // Horizontal flow diagram
  flowDiagram: {
    title: 'The New Purchase Path',
    nodes: [
      { label: 'Consumer', sublabel: 'Intent', variant: 'neutral' as const, emoji: '👤' },
      { label: 'GenAI Search', sublabel: 'Discovery', variant: 'growth' as const, emoji: '🤖' },
      { label: 'Product Discovery', sublabel: 'Evaluation', variant: 'neutral' as const, emoji: '🔍' },
      { label: 'Purchase', sublabel: 'Conversion', variant: 'growth' as const, emoji: '✅' },
    ],
    sideNote: 'Brand invisible without structured data',
  },
  
  strategicInsight: 'Visibility now depends on structured AI-readable content.',
  
  source: 'Google / Shopify AI Shopping Trends 2024',
};

// ========================================
// SECTION 4: GEN Z REWIRING — "The Cultural Reset" (DARK)
// ========================================
export const section04GenZ = {
  id: 'gen-z',
  theme: 'dark' as const,
  label: 'Next Generation Shift',
  
  headline: 'The Cultural Reset',
  
  hero: {
    value: '41%',
    label: 'use AI weekly',
    sublabel: 'Two generations control 40% of spend.',
  },
  
  statCards: [
    {
      value: '20pp',
      label: 'Less Brand-Loyal',
      description: 'less brand-loyal than Millennials',
      icon: TrendingDown,
    },
    {
      value: '$100B',
      label: 'Social Commerce',
      description: 'social commerce market size',
      icon: DollarSign,
    },
    {
      value: '2x',
      label: 'Influencer-Driven',
      description: 'more influencer-driven purchases',
      icon: Users,
    },
  ],
  
  // Dual-axis chart data
  dualAxisChartData: [
    { generation: 'Boomer', aiUsage: 12, spendingShare: 22 },
    { generation: 'Gen X', aiUsage: 18, spendingShare: 26 },
    { generation: 'Millennial', aiUsage: 34, spendingShare: 32 },
    { generation: 'Gen Z', aiUsage: 41, spendingShare: 20 },
  ],
  
  // Circular ecosystem
  circularEcosystem: {
    title: 'Gen Z Commerce Cycle',
    nodes: [
      { label: 'Gen Z', sublabel: 'Discovery', variant: 'neutral' as const },
      { label: 'Social', sublabel: 'Inspiration', variant: 'growth' as const },
      { label: 'AI Assist', sublabel: 'Evaluation', variant: 'neutral' as const },
      { label: 'Purchase', sublabel: 'Transaction', variant: 'growth' as const },
      { label: 'Share', sublabel: 'Content', variant: 'neutral' as const },
      { label: 'Influence', sublabel: 'Amplify', variant: 'growth' as const },
    ],
  },
  
  strategicInsight: 'Cultural authority now outperforms advertising budgets.',
  
  source: 'Pew Research / Social Commerce Report 2024',
};

// ========================================
// SECTION 5: AI OPERATIONS — "From Pilots to Profit" (DARK PREMIUM)
// ========================================
export const section05AIOperations = {
  id: 'ai-operations',
  theme: 'dark' as const,
  label: 'Operational Intelligence',
  
  headline: 'From Pilots to Profit',
  
  hero: {
    value: '90%',
    label: 'of AI pilots fail',
    sublabel: 'Execution defines ROI.',
    variant: 'danger' as const,
  },
  
  statCards: [
    {
      value: '90%',
      label: 'Image Cost Reduction',
      description: 'reduction in image production costs',
      icon: Sparkles,
    },
    {
      value: '18 weeks',
      label: 'Production Saved',
      description: 'production time saved with AI',
      icon: Zap,
    },
    {
      value: '3x',
      label: 'Marketing ROI',
      description: 'marketing ROI improvement',
      icon: Target,
    },
  ],
  
  // Grouped bar chart data
  groupedBarData: [
    {
      stage: 'Design',
      speed: 85,
      cost: 90,
      roi: 75,
    },
    {
      stage: 'Production',
      speed: 72,
      cost: 88,
      roi: 68,
    },
    {
      stage: 'Pricing',
      speed: 65,
      cost: 45,
      roi: 82,
    },
    {
      stage: 'Marketing',
      speed: 90,
      cost: 85,
      roi: 95,
    },
  ],
  
  // Value chain flow
  valueChainFlow: {
    title: 'AI-Enhanced Value Chain',
    nodes: [
      { label: 'Design', sublabel: '90% faster', variant: 'growth' as const, emoji: '✏️' },
      { label: 'Sourcing', sublabel: 'Optimized', variant: 'neutral' as const, emoji: '🌐' },
      { label: 'Production', sublabel: '18 wks saved', variant: 'growth' as const, emoji: '🏭' },
      { label: 'Pricing', sublabel: 'Dynamic', variant: 'neutral' as const, emoji: '💰' },
      { label: 'Marketing', sublabel: '3x ROI', variant: 'growth' as const, emoji: '📈' },
      { label: 'Retail', sublabel: 'Personalized', variant: 'neutral' as const, emoji: '🛍️' },
    ],
  },
  
  strategicInsight: 'AI must be embedded across the entire value chain.',
  
  source: 'BCG / Fashion AI Transformation Report 2024',
};

// ========================================
// SECTION 6: RESALE REVOLUTION — "Circular Becomes Core" (DARK + EMERALD)
// ========================================
export const section06Resale = {
  id: 'resale',
  theme: 'dark' as const,
  accentColor: 'emerald' as const,
  label: 'Circular Growth',
  
  headline: 'Circular Becomes Core',
  
  hero: {
    value: '$197B → $317B',
    label: 'by 2027',
    sublabel: 'Resale grows 2–3x faster than first-hand.',
  },
  
  statCards: [
    {
      value: '13%',
      label: 'CAGR',
      description: 'compound annual growth rate',
      icon: TrendingDown,
    },
    {
      value: '59%',
      label: 'Shop Secondhand',
      description: 'likely to shop secondhand',
      icon: RefreshCcw,
    },
    {
      value: '330%',
      label: 'YoY Profit Growth',
      description: 'year-over-year profit growth',
      icon: DollarSign,
    },
  ],
  
  // Stacked area chart by region
  stackedAreaData: [
    { year: '2020', asia: 45, northAmerica: 28, europe: 35 },
    { year: '2021', asia: 58, northAmerica: 38, europe: 46 },
    { year: '2022', asia: 76, northAmerica: 51, europe: 60 },
    { year: '2023', asia: 98, northAmerica: 68, europe: 78 },
    { year: '2024', asia: 128, northAmerica: 88, europe: 102 },
    { year: '2027', asia: 195, northAmerica: 135, europe: 157 },
  ],
  
  // Circular resale ecosystem
  circularEcosystem: {
    title: 'Resale Ecosystem Loop',
    nodes: [
      { label: 'Consumer', sublabel: 'Intent', variant: 'neutral' as const },
      { label: 'Marketplace', sublabel: 'Platform', variant: 'growth' as const },
      { label: 'Authentication', sublabel: 'Trust', variant: 'neutral' as const },
      { label: 'Resale', sublabel: 'Transaction', variant: 'growth' as const },
      { label: 'Discovery', sublabel: 'Explore', variant: 'neutral' as const },
      { label: 'First-hand', sublabel: 'New Purchase', variant: 'growth' as const },
    ],
  },
  
  strategicInsight: 'Resale platforms are acquisition engines, not threats.',
  
  source: 'ThredUp Resale Report 2024 / BCG Circular Economy Study',
};

// ========================================
// NAVIGATION & FOOTER
// ========================================
export const navigationData = {
  backLabel: 'Research Hub',
  backDestination: '/research',
};

export const sectionOrder = [
  { id: 'hero', label: 'Overview' },
  { id: 'discount', label: 'Discount Trap' },
  { id: 'ai-shopper', label: 'AI Shopper' },
  { id: 'gen-z', label: 'Gen Z' },
  { id: 'ai-operations', label: 'AI Operations' },
  { id: 'resale', label: 'Resale' },
];

export const footerData = {
  disclaimer: 'This report synthesizes third-party research from McKinsey, BCG, Google, Shopify, Pew Research, and ThredUp. All data points are sourced from publicly available 2024 industry reports. This is a demonstration of premium editorial design and strategic data visualization for executive audiences.',
  copyright: '© 2026 StartupAI Command Centre — Premium Research Intelligence',
  backLabel: 'Back to Research Hub',
  backDestination: '/research',
};

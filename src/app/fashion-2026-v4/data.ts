/**
 * Fashion 2026 V4 — Data Layer
 * 
 * All content and data separated from components
 * Easy to update, maintain, and internationalize
 */

import { DollarSign, TrendingDown, Sparkles, TrendingUp, AlertTriangle } from 'lucide-react';

// 1️⃣ SECTION 01 — HERO DATA
export const heroData = {
  label: 'State of Fashion 2026',
  headline: "Fashion's Critical",
  headlineLine2: 'Inflection Point',
  subtitle: 'Strategic analysis of trade disruption, consumer psychology, and AI transformation reshaping a $2.4 trillion industry',
  
  primaryStat: {
    value: '$2.4T',
    label: 'Global Fashion Market by 2030',
  },
  
  signalCards: [
    {
      icon: DollarSign,
      label: 'Trade Impact',
      value: '$27B',
      description: 'Annual tariff cost',
      color: '#DC2626',
    },
    {
      icon: TrendingDown,
      label: 'Margin Pressure',
      value: '66%',
      description: 'Expect discounts',
      color: '#F59E0B',
    },
    {
      icon: Sparkles,
      label: 'AI Disruption',
      value: '4,700%',
      description: 'Assistant growth',
      color: '#6366F1',
    },
  ],
};

// 2️⃣ SECTION 02 — DISCOUNT TRAP DATA
export const discountTrapData = {
  label: 'Consumer Behavior Shift',
  headline: 'THE DISCOUNT TRAP',
  
  heroStat: {
    value: '66%',
    label: 'of shoppers now delay purchases, waiting for markdowns',
    sublabel: 'Up from 51% in 2023',
    color: '#6366F1',
  },
  
  statCards: [
    {
      value: '48%',
      label: 'Average Discount Depth',
      description: 'End-of-season sales',
      trend: 'up' as const,
    },
    {
      value: '3.2x',
      label: 'Markdown Frequency',
      description: 'vs. 2020 baseline',
      trend: 'up' as const,
    },
    {
      value: '-23%',
      label: 'Full-Price Sales',
      description: 'Margin erosion',
      trend: 'down' as const,
    },
  ],
  
  chartData: {
    title: 'Discount Dependency Over Time',
    years: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    values: [32, 38, 42, 47, 51, 58, 63, 66],
  },
  
  cycleSteps: [
    'Heavy Discounting',
    'Consumer Expects Sales',
    'Wait for Markdowns',
    'Margin Pressure',
  ],
  
  source: 'McKinsey Consumer Behavior Study, Q4 2025',
};

// 3️⃣ SECTION 03 — TRADE DISRUPTION DATA
export const tradeDisruptionData = {
  label: 'Global Supply Chain Risk',
  headline: 'THE $27B TARIFF TAX',
  subtitle: 'New trade policies threaten to reshape global fashion supply chains with direct impact on consumer pricing and brand profitability',
  
  primaryStat: {
    value: '$27B',
    label: 'Estimated annual tariff cost to U.S. fashion industry',
    sublabel: 'Based on 2025 import data and proposed trade policies',
    color: '#DC2626',
  },
  
  supportingStats: [
    {
      value: '71%',
      label: 'Import Dependency',
      description: 'Products manufactured abroad',
    },
    {
      value: '28%',
      label: 'Price Increase',
      description: 'Projected consumer impact',
    },
    {
      value: '145K',
      label: 'Jobs at Risk',
      description: 'Direct & indirect employment',
    },
  ],
  
  importSources: [
    { country: 'China', value: 42 },
    { country: 'Vietnam', value: 24 },
    { country: 'Bangladesh', value: 18 },
    { country: 'Indonesia', value: 9 },
    { country: 'India', value: 7 },
  ],
  
  source: 'U.S. Office of Textiles and Apparel, 2025 Trade Data',
};

// 4️⃣ SECTION 04 — AI TRANSFORMATION DATA
export const aiTransformationData = {
  label: 'Technology Disruption',
  headline: 'THE AI SHOPPING SHIFT',
  subtitle: 'Generative AI is fundamentally changing how consumers discover, evaluate, and purchase fashion products',
  
  heroStat: {
    value: '4,700%',
    label: 'Year-over-year growth in AI shopping assistant usage',
    sublabel: 'ChatGPT, Perplexity, and specialized fashion AI tools',
    color: '#10B981',
  },
  
  adoptionCards: [
    {
      value: '38%',
      label: 'Gen Z Adoption',
      description: 'Use AI for discovery',
    },
    {
      value: '62%',
      label: 'Trust Shift',
      description: 'Trust AI over influencers',
    },
    {
      value: '5.2x',
      label: 'Conversion Boost',
      description: 'AI-assisted purchases',
    },
  ],
  
  chartData: {
    title: 'AI Shopping Assistant Adoption',
    labels: ['Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24', 'Q4 24'],
    // Path coordinates for area chart
    path: 'M 0 215 L 87.5 210 L 175 200 L 262.5 185 L 350 160 L 437.5 120 L 525 70 L 612.5 35 L 700 15',
  },
  
  flowSteps: [
    { emoji: '💬', label: 'Query AI' },
    { emoji: '✨', label: 'Get Recommendations' },
    { emoji: '⚖️', label: 'Compare Options' },
    { emoji: '✓', label: 'Verify Reviews' },
    { emoji: '🛍️', label: 'Purchase' },
  ],
  
  riskAlert: {
    title: 'Brand Risk Warning',
    description: '73% of AI recommendations prioritize price over brand loyalty, potentially commoditizing premium fashion segments',
  },
  
  source: 'Perplexity AI Shopping Trends Report, January 2026',
};

// 5️⃣ NAVIGATION DATA
export const navigationData = {
  backLabel: 'Back',
  backDestination: 'home-v8',
};

// 6️⃣ FOOTER DATA
export const footerData = {
  copyright: '© 2026 StartupAI · Strategic Intelligence Platform',
  backLabel: 'Back to Dashboard',
  backDestination: 'home-v8',
};

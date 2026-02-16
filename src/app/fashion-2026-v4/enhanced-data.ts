/**
 * Fashion 2026 V4 — Enhanced Data Layer
 * 
 * Complete content for 6-section luxury infographic
 * Following all 9 master prompts
 */

import { DollarSign, TrendingDown, TrendingUp, Sparkles, AlertTriangle, Users, Target, Zap } from 'lucide-react';

// ========================================
// SECTION 01: HERO (LIGHT) — Prompt #2
// ========================================
export const section01Hero = {
  id: 'hero',
  theme: 'dark' as const,
  label: 'State of Fashion 2026',
  
  headline: "Fashion's Critical Inflection Point",
  
  hero: {
    value: '$2.4T',
    label: 'Global Fashion Market by 2030',
    sublabel: 'Strategic analysis of trade disruption, consumer psychology, and AI transformation reshaping a $2.4 trillion industry',
  },
  
  statCards: [
    {
      value: '66%',
      label: 'Discount Conditioning',
      description: 'Consumers now wait for markdowns before purchasing',
      icon: TrendingDown,
      iconColor: '#F59E0B',
    },
    {
      value: '4,700%',
      label: 'AI Shopping Growth',
      description: 'Year-over-year increase in AI assistant usage for fashion',
      icon: Sparkles,
      iconColor: '#6366F1',
    },
  ],
  
  barChartData: {
    title: 'Market Size by Region (2026)',
    data: [
      { region: 'North America', value: 420, color: '#6366F1' },
      { region: 'Europe', value: 380, color: '#8B5CF6' },
      { region: 'Asia Pacific', value: 890, color: '#10B981' },
      { region: 'Latin America', value: 120, color: '#F59E0B' },
      { region: 'Middle East', value: 95, color: '#EC4899' },
    ],
  },
};

// ========================================
// SECTION 02: DISCOUNT TRAP (DARK) — Prompt #3
// ========================================
export const section02DiscountTrap = {
  id: 'discount',
  theme: 'dark' as const,
  label: 'Consumer Behavior Crisis',
  headline: 'THE DISCOUNT TRAP',
  
  hero: {
    value: '66%',
    label: 'of shoppers now delay purchases, waiting for markdowns',
    sublabel: 'Up from 51% in 2023 — a 29% increase in just 3 years',
  },
  
  statCards: [
    {
      value: '48%',
      label: 'Average Discount Depth',
      description: 'End-of-season sales now routinely cut prices in half',
      icon: TrendingDown,
    },
    {
      value: '3.2x',
      label: 'Markdown Frequency',
      description: 'Compared to pre-pandemic 2020 baseline',
      icon: TrendingUp,
    },
    {
      value: '-23%',
      label: 'Full-Price Sales',
      description: 'Margin erosion from discount dependency',
      icon: AlertTriangle,
    },
  ],
  
  flowDiagram: {
    title: 'The Conditioning Cycle',
    nodes: [
      { label: 'Heavy Discounting', sublabel: 'Brands compete', variant: 'risk' as const },
      { label: 'Consumer Expects Sales', sublabel: 'Conditioning effect', variant: 'neutral' as const },
      { label: 'Wait for Markdowns', sublabel: 'Purchase delay', variant: 'neutral' as const },
      { label: 'Margin Pressure', sublabel: 'Profitability squeeze', variant: 'risk' as const },
    ],
  },
  
  lineChartData: {
    title: 'Discount Dependency Over Time',
    years: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    values: [32, 38, 42, 47, 51, 58, 63, 66],
  },
  
  source: 'McKinsey Consumer Behavior Study, Q4 2025',
};

// ========================================
// SECTION 03: AI TRANSFORMATION (DARK)
// ========================================
export const section03AITransformation = {
  id: 'ai',
  theme: 'dark' as const,
  label: 'Technology Disruption',
  headline: 'THE AI SHOPPING SHIFT',
  subtitle: 'Generative AI is fundamentally changing how consumers discover, evaluate, and purchase fashion products',
  
  hero: {
    value: '4,700%',
    label: 'Year-over-year growth in AI shopping assistant usage',
    sublabel: 'ChatGPT, Perplexity, and specialized fashion AI tools',
  },
  
  statCards: [
    {
      value: '38%',
      label: 'Gen Z Adoption',
      description: 'Use AI for product discovery and recommendations',
      icon: Sparkles,
    },
    {
      value: '62%',
      label: 'Trust Shift',
      description: 'Trust AI recommendations over influencers',
      icon: Target,
    },
    {
      value: '5.2x',
      label: 'Conversion Boost',
      description: 'Higher conversion on AI-assisted purchases',
      icon: TrendingUp,
    },
  ],
  
  flowDiagram: {
    title: 'AI Shopping Journey',
    nodes: [
      { label: 'Query AI Assistant', sublabel: 'Natural language', variant: 'neutral' as const, emoji: '💬' },
      { label: 'Get Recommendations', sublabel: 'Personalized results', variant: 'growth' as const, emoji: '✨' },
      { label: 'Compare Options', sublabel: 'AI analysis', variant: 'neutral' as const, emoji: '⚖️' },
      { label: 'Verify Reviews', sublabel: 'Sentiment check', variant: 'neutral' as const, emoji: '✓' },
      { label: 'Purchase Decision', sublabel: 'Confident buy', variant: 'growth' as const, emoji: '🛍️' },
    ],
  },
  
  areaChartData: {
    title: 'AI Shopping Assistant Adoption',
    labels: ['Q1 23', 'Q2 23', 'Q3 23', 'Q4 23', 'Q1 24', 'Q2 24', 'Q3 24', 'Q4 24'],
    values: [2, 4, 7, 12, 20, 35, 58, 94],
  },
  
  riskAlert: {
    title: 'Brand Risk Warning',
    description: '73% of AI recommendations prioritize price over brand loyalty, potentially commoditizing premium fashion segments',
  },
  
  source: 'Perplexity AI Shopping Trends Report, January 2026',
};

// ========================================
// SECTION 04: SUSTAINABILITY IMPERATIVE (LIGHT)
// ========================================
export const section04Sustainability = {
  id: 'sustainability',
  theme: 'light' as const,
  label: 'Environmental Transformation',
  headline: 'THE CIRCULARITY MANDATE',
  subtitle: 'Consumer demand for sustainable fashion is reshaping business models, with circular economy principles becoming table stakes',
  
  hero: {
    value: '78%',
    label: 'Consumers expect brands to reduce environmental impact',
    sublabel: 'Up from 52% in 2020 — sustainability is now mainstream',
  },
  
  statCards: [
    {
      value: '$350B',
      label: 'Resale Market',
      description: 'By 2028, driven by circular fashion models',
      icon: TrendingUp,
    },
    {
      value: '35%',
      label: 'Emissions Reduction',
      description: 'Target set by leading brands for 2030',
      icon: Target,
    },
    {
      value: '92M',
      label: 'Tons of Waste',
      description: 'Annual textile waste that must be addressed',
      icon: AlertTriangle,
    },
  ],
  
  circularDiagram: {
    title: 'Circular Fashion Economy',
    nodes: [
      { label: 'Design', sublabel: 'Sustainable materials', variant: 'growth' as const },
      { label: 'Production', sublabel: 'Ethical manufacturing', variant: 'growth' as const },
      { label: 'Distribution', sublabel: 'Efficient logistics', variant: 'neutral' as const },
      { label: 'Consumer Use', sublabel: 'Extended lifecycle', variant: 'neutral' as const },
      { label: 'Collection', sublabel: 'Take-back programs', variant: 'growth' as const },
      { label: 'Recycling', sublabel: 'Material recovery', variant: 'growth' as const },
    ],
  },
  
  stackedBarData: {
    title: 'Sustainability Initiatives Adoption',
    years: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    data: [
      { label: 'Recycled Materials', values: [15, 22, 31, 42, 54, 65, 74] },
      { label: 'Circular Programs', values: [8, 14, 21, 30, 41, 52, 63] },
      { label: 'Carbon Neutral', values: [5, 9, 15, 23, 33, 45, 58] },
    ],
  },
  
  source: 'Ellen MacArthur Foundation, Circular Fashion Report 2026',
};

// ========================================
// SECTION 05: STRATEGIC OUTLOOK (DARK)
// ========================================
export const section05Outlook = {
  id: 'outlook',
  theme: 'dark' as const,
  label: 'Strategic Outlook',
  headline: 'NAVIGATING TRANSFORMATION',
  subtitle: 'Five strategic imperatives for fashion brands to thrive in an era of disruption',
  
  imperatives: [
    {
      number: '01',
      title: 'Price Architecture Discipline',
      description: 'Break the discount cycle through value-based pricing, limited editions, and exclusive experiences that rebuild full-price demand.',
      icon: DollarSign,
      variant: 'risk' as const,
    },
    {
      number: '02',
      title: 'Supply Chain Resilience',
      description: 'Diversify manufacturing across regions, build strategic inventory buffers, and develop nearshoring capabilities to mitigate trade risk.',
      icon: Target,
      variant: 'neutral' as const,
    },
    {
      number: '03',
      title: 'AI-First Customer Experience',
      description: 'Deploy proprietary AI shopping assistants, optimize for AI discovery, and build direct data relationships to counter platform disintermediation.',
      icon: Sparkles,
      variant: 'growth' as const,
    },
    {
      number: '04',
      title: 'Circular Business Models',
      description: 'Integrate resale, rental, and repair into core offerings. Design for longevity and recyclability. Capture value across product lifecycle.',
      icon: Zap,
      variant: 'growth' as const,
    },
    {
      number: '05',
      title: 'Brand Authority Rebuilding',
      description: 'Invest in storytelling, craftsmanship, and community to differentiate in an AI-mediated, price-transparent marketplace.',
      icon: Users,
      variant: 'neutral' as const,
    },
  ],
  
  closingStatement: {
    quote: '"The fashion industry stands at a crossroads. Brands that embrace transformation will emerge stronger. Those that resist will become casualties of disruption."',
    attribution: 'McKinsey & Company, State of Fashion 2026',
  },
};

// ========================================
// NAVIGATION & META
// ========================================
export const navigationData = {
  backLabel: 'Back to Dashboard',
  backDestination: 'home-v8',
};

export const sectionOrder = [
  'hero',
  'discount',
  'ai',
  'sustainability',
  'outlook',
];

export const footerData = {
  copyright: '© 2026 StartupAI · Strategic Intelligence Platform',
  disclaimer: 'Data compiled from McKinsey, BCG, Perplexity AI, Ellen MacArthur Foundation, and U.S. Office of Textiles',
  backLabel: 'Back to Dashboard',
  backDestination: 'home-v8',
};
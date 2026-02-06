/**
 * Mock Market Analysis Data
 * 
 * Sample data for FashionOS - AI Event Management Platform
 */

export const marketAnalysisData = {
  // Header
  status: 'complete' as const,
  step: { current: 2, total: 3 },
  counts: {
    competitors: 7,
    sources: 60,
    risks: 2,
  },

  // Metrics
  tam: '$3.1B',
  sam: '$310M-620M',
  som: '$25M-$75M',
  cagr: '19.8%',
  europeMarket: '$1.2B (est. 2024 @ 36% regional share)',

  // Summary
  topOpportunity: 'Being first to market with AI workflow OS for fashion events',
  topRisk: 'Limited market demand by niche segment',
  revenueModel: 'SaaS Subscription',

  // Market
  marketBreakdown: [
    { segment: 'AI Event Management Platforms', value: '$3.1B', percentage: 91 },
    { segment: 'Fashion-specific Platforms', value: '$310M-$620M', percentage: 9 },
  ],

  // Target Audience
  demographics: {
    description: 'Fashion brands & event organizers',
    age: '25-45',
    industries: 'Mid-to-large global fashion designers, planning teams, production agencies',
    gender: 'All',
  },
  psychographics: {
    title: 'Efficiency Seekers',
    description: 'Value streamlined tools for project management, automation, and faster team workflows',
  },

  // Trends
  trends: [
    {
      id: 1,
      timeframe: 'medium' as const,
      description: 'Adoption of AI-driven workflow platforms for creative event planning',
      impact: 'high' as const,
    },
    {
      id: 2,
      timeframe: 'short' as const,
      description: 'Content automation via AI brief and shot list generation',
      impact: 'medium' as const,
    },
  ],

  // Benchmarks
  benchmarks: {
    cac: 200,
    ltv: 1000,
    ltvCac: 5,
  },

  // Competitors
  competitors: [
    {
      name: 'FashionGPT',
      website: 'https://fashiongpt.com',
      marketShare: '<0.5%',
      stage: 'Seed',
      funding: 'Undisclosed',
      pricing: '$49-99/mo (est.)',
      products: ['AI Fashion Assistant', 'AI design', 'Mfg integration'],
      strengths: ['AI-driven design suggestions', 'Direct mfg integrations'],
      weaknesses: ['Limited brand recognition', 'Narrow focus'],
      opportunity: 'FashionOS can cover the full workflow, content creation, and event management stack.',
      position: { price: 30, quality: 50 },
    },
    {
      name: 'SpreeAI',
      website: 'https://spreeai.com',
      marketShare: '<1%',
      stage: 'Series A',
      funding: '$5M',
      pricing: '$99-299/mo',
      products: ['Virtual try-on', 'Product recommendations', 'Personalization'],
      strengths: ['Strong AI capabilities', 'E-commerce focus'],
      weaknesses: ['No event planning features', 'High pricing'],
      opportunity: 'Add event management capabilities to capture fashion show market.',
      position: { price: 25, quality: 75 },
    },
    {
      name: 'Perfect Corp',
      website: 'https://perfectcorp.com',
      marketShare: '2-3%',
      stage: 'Series C',
      funding: '$50M+',
      pricing: 'Enterprise only',
      products: ['AR beauty', 'Virtual makeup', 'Skin diagnostics'],
      strengths: ['Established brand', 'Large customer base', 'Strong tech'],
      weaknesses: ['Not fashion-event focused', 'Enterprise only'],
      opportunity: 'Target SMB fashion brands that need affordable event planning.',
      position: { price: 75, quality: 85 },
    },
    {
      name: 'EventStylePro',
      website: 'https://eventstylepro.com',
      marketShare: '<1%',
      stage: 'Bootstrap',
      funding: 'Self-funded',
      pricing: '$29-79/mo',
      products: ['Mood boards', 'Vendor management', 'Timeline'],
      strengths: ['Event-specific', 'Simple UX'],
      weaknesses: ['No AI features', 'Limited automation'],
      opportunity: 'Add AI-powered workflow automation and content generation.',
      position: { price: 65, quality: 55 },
    },
    {
      name: 'Aisle Planner',
      website: 'https://aisleplanner.com',
      marketShare: '1-2%',
      stage: 'Growth',
      funding: '$10M',
      pricing: '$39-99/mo',
      products: ['Wedding planning', 'Client management', 'Contracts'],
      strengths: ['Market leader in weddings', 'Comprehensive features'],
      weaknesses: ['Wedding-focused', 'Not fashion-specific'],
      opportunity: 'Differentiate with fashion-specific AI workflows.',
      position: { price: 20, quality: 25 },
    },
    {
      name: 'Posh',
      website: 'https://posh.vip',
      marketShare: '<0.5%',
      stage: 'Seed',
      funding: '$2M',
      pricing: 'Commission-based',
      products: ['Ticketing', 'Guest list', 'Check-in'],
      strengths: ['Performance-based pricing', 'Event ticketing'],
      weaknesses: ['Limited planning features', 'No AI'],
      opportunity: 'Offer comprehensive planning tools beyond just ticketing.',
      position: { price: 70, quality: 30 },
    },
    {
      name: 'Asana + Zapier',
      website: 'https://asana.com',
      marketShare: '10%+ (general PM)',
      stage: 'Public',
      funding: 'IPO',
      pricing: '$10-25/user/mo',
      products: ['Project management', 'Workflow automation', 'Integrations'],
      strengths: ['Established', 'Flexible', 'Large ecosystem'],
      weaknesses: ['Not event-specific', 'Requires heavy customization'],
      opportunity: 'Pre-built fashion event workflows vs generic project management.',
      position: { price: 50, quality: 60 },
    },
  ],

  // Partners
  partners: [
    {
      name: 'Fashion Weeks (NY, Paris, Milan)',
      type: 'strategic' as const,
      description: 'Integrate platform as official planning tool',
      timeline: '12 months',
    },
    {
      name: 'AI SaaS Providers',
      type: 'technology' as const,
      description: 'API integrations for marketing, logistics, analytics',
      timeline: '3-6 months',
    },
  ],

  // GTM
  gtmChannels: [
    {
      name: 'Industry Conferences',
      effort: 'medium' as const,
      impact: 'high' as const,
      description: 'Showcase FashionOS at NYFW, Pitti Uomo, Copenhagen Fashion',
      cost: '$150K',
      time: '6 months',
    },
    {
      name: 'Direct Sales',
      effort: 'high' as const,
      impact: 'high' as const,
      description: 'Target creative directors, agencies, event organizers',
      cost: '$300K',
      time: '6-18 months',
    },
    {
      name: 'Content Marketing/Webinars',
      effort: 'medium' as const,
      impact: 'medium' as const,
      description: 'Educate market on AI event planning benefits',
      cost: '$85K',
      time: '6-12 months',
    },
  ],
  earlyAdopters: [
    'Top 500 fashion event organizers',
    'Mid-to-large designer brands in US/EU/Asia',
  ],
  launchStrategy: 'Target 1-3 fashion capitals with flagship launch, secure high-profile pilot events, build case studies, viral PR via influencers and industry press.',

  // Roadmap
  phases: [
    {
      name: 'Phase 1',
      duration: '3 months',
      budget: '$500K',
      activities: ['MVP launch', 'Pilot with 3 organizers'],
      milestones: ['First event via FashionOS'],
    },
    {
      name: 'Phase 2',
      duration: '6 months',
      budget: '$750K',
      activities: ['GTM ramp-up', 'Partner onboarding'],
      milestones: ['10+ events onboarded', '1 strategic partnership'],
    },
  ],

  // Budget
  budget: {
    total: '$2.5M (Year 1)',
    breakdown: [
      { category: 'Product Dev', amount: '$1M', percentage: 40 },
      { category: 'Marketing', amount: '$700K', percentage: 28 },
      { category: 'Sales/Partners', amount: '$500K', percentage: 20 },
      { category: 'Admin/Ops', amount: '$300K', percentage: 12 },
    ],
  },

  // Revenue Models
  revenueModels: [
    {
      name: 'SaaS Subscription',
      fit: 'high' as const,
      complexity: 'medium' as const,
      description: 'Annual or monthly subscription per seat or per event',
      advantages: ['Predictable cash flow', 'Scalable with client growth'],
      challenges: ['Needs constant customer value delivery'],
      timeline: '3-6 months',
      examples: ['FashionGPT', 'EventStylePro', 'Aisle Planner'],
    },
    {
      name: 'Commission per Event',
      fit: 'medium' as const,
      complexity: 'low' as const,
      description: 'Take rate per ticket or event (as in Posh)',
      advantages: ['Aligns with event success', 'Performance-based'],
      challenges: ['Volatility, less predictable MRR'],
      timeline: '6-12 months',
      examples: ['Posh'],
    },
  ],

  // Risks
  risks: [
    {
      title: 'Limited market demand by niche segment',
      impact: 'medium' as const,
      impactDescription: 'Can restrict revenue ceiling or growth rate',
      mitigation: 'Expand to adjacent creative industries, refine PMF',
    },
    {
      title: 'Slow adoption by conservative/luxury brands',
      impact: 'medium' as const,
      impactDescription: 'Longer sales cycles, delayed ARR',
      mitigation: 'Prove ROI through pilot programs and case studies',
    },
  ],

  // Sources
  sources: [
    { title: 'Global Event Management Software Market Report 2024', domain: 'marketsandmarkets.com', type: 'Industry Report', url: '#' },
    { title: 'Fashion Industry AI Adoption Survey', domain: 'mckinsey.com', type: 'Survey', url: '#' },
    { title: 'FashionGPT Company Profile', domain: 'crunchbase.com', type: 'Database', url: '#' },
    { title: 'SpreeAI Series A Announcement', domain: 'techcrunch.com', type: 'News', url: '#' },
    { title: 'Perfect Corp Financial Analysis', domain: 'pitchbook.com', type: 'Financial', url: '#' },
  ],
};

export type MarketAnalysis = typeof marketAnalysisData;

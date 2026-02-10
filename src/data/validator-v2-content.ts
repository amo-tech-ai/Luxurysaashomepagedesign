// Validator V2 - Right Panel Content Library
// All section details, risks, and validation steps

export type SectionId = 
  | 'problem-clarity'
  | 'customer-profile'
  | 'market-sizing'
  | 'competition'
  | 'risks-assumptions'
  | 'mvp-scope'
  | 'next-steps'
  | 'scores-matrix'
  | 'tech-stack'
  | 'revenue-model'
  | 'team-hiring'
  | 'financials';

export interface RightPanelContent {
  sectionId: SectionId;
  title: string;
  moreDetail: string;
  whyThisMatters: string;
  risksAndGaps: string[];
  validateNext: string[];
}

export const rightPanelData: Record<SectionId, RightPanelContent> = {
  'problem-clarity': {
    sectionId: 'problem-clarity',
    title: 'Problem Clarity',
    moreDetail: 'Travelers face unexpected disruptions during trips from weather, venue closures, and preference changes. Current solutions (Google Maps, TripAdvisor) require manual cross-checking across multiple apps with no real-time verification. This creates a trust breakdown at the exact moment when users need rapid, reliable replanning help.',
    whyThisMatters: 'This is the moment when trust is either earned or lost. Solving mid-trip chaos drives adoption and willingness to pay premium pricing.',
    risksAndGaps: [
      'Trust fails permanently if venue recommendation is wrong even once',
      'Heavy dependency on third-party APIs for real-time accuracy',
      'No live user validation data—only assumptions about problem severity'
    ],
    validateNext: [
      'Run 100-venue accuracy audit across 5 cities to test data reliability',
      'Launch manual WhatsApp concierge MVP to validate problem urgency',
      'Recruit 50 beta users and measure engagement within 48 hours of disruption'
    ]
  },

  'customer-profile': {
    sectionId: 'customer-profile',
    title: 'Customer Profile',
    moreDetail: 'Target customer is a premium leisure traveler aged 35-55 with household income of $150K+. They value spontaneity and trust, travel 3-4 times per year, and experience mid-trip chaos 2-3 times annually. They currently use Google Maps, TripAdvisor, and Instagram but find manual cross-checking frustrating during disruptions.',
    whyThisMatters: 'This narrow persona has high willingness to pay ($15-30/trip) but also high expectations. Mismatch here derails go-to-market strategy and CAC assumptions.',
    risksAndGaps: [
      'Assumption that premium travelers will adopt AI-first planning is unproven',
      'Limited data on actual willingness to pay for real-time replanning',
      'No evidence they prefer AI over human concierge services'
    ],
    validateNext: [
      'Survey 100 target customers on willingness to pay for mid-trip replanning',
      'Run pricing sensitivity test ($5, $10, $20, $30 per trip)',
      'Measure repeat usage across 3 trips to validate annual frequency assumptions'
    ]
  },

  'market-sizing': {
    sectionId: 'market-sizing',
    title: 'Market Opportunity',
    moreDetail: 'TAM of $4.15B reflects the global premium travel planning market. SAM of $1.0B narrows to high-income travelers ($150K+ household income) needing real-time replanning services. SOM of $500M assumes 5% market penetration in Year 5, focusing on premium adoption in urban travel hubs and tech-savvy demographics.',
    whyThisMatters: 'Overestimating SAM inflates revenue projections and creates unrealistic investor expectations. Market sizing drives fundraising, hiring, and burn rate assumptions.',
    risksAndGaps: [
      'Assumes premium travelers will pay repeatedly—not validated',
      'Limited data on annual trip frequency and disruption rates',
      'May overestimate conversion from free to paid tiers'
    ],
    validateNext: [
      'Test pricing at $5-10 per trip and measure conversion rates',
      'Track repeat usage across 3+ trips to validate LTV assumptions',
      'Survey 100 target customers on annual travel disruption frequency'
    ]
  },

  'competition': {
    sectionId: 'competition',
    title: 'Competition Landscape',
    moreDetail: 'Four major competitors dominate: Google Maps (navigation giant with massive distribution), Mindtrip ($20M raised, AI-first travel planning), Expedia (booking platform with travel concierge), and Layla (AI assistant for trip planning). Each has strong moats: Google has data, Mindtrip has VC backing, Expedia has bookings, and Layla has AI-native experience.',
    whyThisMatters: 'Competition score of 35/100 signals EXTREME risk. Google could launch AI replanning tomorrow and kill the market. Differentiation must be crystal clear.',
    risksAndGaps: [
      'Google launches AI-powered mid-trip replanning feature within 12 months',
      'Expedia integrates real-time concierge into existing booking flow',
      'No clear moat or defensibility beyond "AI + real-time data"'
    ],
    validateNext: [
      'Run competitive feature audit: What can Google NOT do today?',
      'Identify 3 sustainable moats (e.g., B2B partnerships, proprietary data)',
      'Test user perception: Does AI replanning feel differentiated vs. Google?'
    ]
  },

  'risks-assumptions': {
    sectionId: 'risks-assumptions',
    title: 'Risk Analysis',
    moreDetail: 'Three critical risks threaten viability: (1) Google launches competitive AI replanning, (2) AI hallucinations destroy user trust after one bad recommendation, (3) CAC exceeds $50 making unit economics unsustainable. Each risk has high impact and medium-to-high probability within the next 12-18 months.',
    whyThisMatters: 'One AI hallucination kills trust permanently. CAC > $50 means negative margins. Google entering the market makes fundraising impossible.',
    risksAndGaps: [
      'No hallucination detection or guardrails in place today',
      'CAC assumptions ($25-35) are purely theoretical—not tested',
      'Google competitive threat has no mitigation strategy beyond "move fast"'
    ],
    validateNext: [
      'Implement hallucination audit system: Verify 100 AI recommendations manually',
      'Run $500 Facebook Ads test to measure real CAC across 3 cohorts',
      'Identify 2-3 B2B partnerships (travel agencies, corporate travel) as moat'
    ]
  },

  'mvp-scope': {
    sectionId: 'mvp-scope',
    title: 'MVP Roadmap',
    moreDetail: 'Three-phase MVP strategy: Phase 1 (4 weeks) is manual WhatsApp concierge with human agents to validate problem urgency. Phase 2 (6 weeks) is hybrid AI + human system to test automation. Phase 3 (8 weeks) is full AI automation with hallucination guardrails. Total timeline: 18 weeks from start to automated product.',
    whyThisMatters: 'Starting with manual concierge de-risks AI hallucination concerns and validates willingness to pay before building expensive automation.',
    risksAndGaps: [
      'Manual WhatsApp concierge may not scale beyond 50-100 users',
      'Hybrid model delays full automation and extends time to product-market fit',
      'No clear success metrics defined for each phase transition'
    ],
    validateNext: [
      'Launch WhatsApp concierge with 20 beta users within 2 weeks',
      'Define Phase 1 success: 80% response satisfaction + 60% willingness to pay',
      'Set Phase 2 trigger: 50 active users with 3+ requests per month'
    ]
  },

  'next-steps': {
    sectionId: 'next-steps',
    title: 'Action Plan (Next Steps)',
    moreDetail: 'Three immediate actions required: (1) Hallucination audit of 100 AI-generated venue recommendations, (2) Beta user recruitment (target: 50 premium travelers), (3) B2B agency interviews with 10 travel agencies to explore partnership revenue. Timeline: Complete all three within 4-6 weeks to validate core assumptions before fundraising.',
    whyThisMatters: 'These actions directly test the three highest-risk assumptions: AI accuracy, customer adoption, and sustainable CAC through B2B channels.',
    risksAndGaps: [
      'Hallucination audit may reveal AI is not ready for production',
      'Beta recruitment may fail if problem is not urgent enough',
      'B2B agencies may not want to partner with unproven startup'
    ],
    validateNext: [
      'Complete 100-venue hallucination audit within 2 weeks',
      'Recruit 50 beta users via targeted Facebook/Instagram ads ($500 budget)',
      'Schedule 10 B2B agency calls to gauge partnership interest and pricing'
    ]
  },

  'scores-matrix': {
    sectionId: 'scores-matrix',
    title: 'Scoring Matrix',
    moreDetail: 'Overall score of 62/100 signals CAUTION. Strong problem clarity (85/100) and customer profile (72/100) are offset by weak competition score (35/100) and business model (58/100). Market opportunity (68/100) is moderate. Team score (70/100) is solid but lacks technical AI expertise.',
    whyThisMatters: 'Competition risk is the biggest blocker to investor confidence. Score below 70 typically requires proof of traction before raising pre-seed.',
    risksAndGaps: [
      'Competition score of 35/100 is a red flag for investors',
      'Business model score of 58/100 suggests unclear path to profitability',
      'No clear plan to improve weak scores before fundraising'
    ],
    validateNext: [
      'Define 3 sustainable moats to improve competition score to 50+',
      'Test pricing and measure LTV:CAC to improve business model score',
      'Hire ML engineer to strengthen team score and address AI risks'
    ]
  },

  'tech-stack': {
    sectionId: 'tech-stack',
    title: 'Technology Stack',
    moreDetail: 'Tech stack includes React Native (cross-platform mobile), GPT-4 (AI planning engine), Google Places API (real-time venue data), Supabase (backend infrastructure), and Stripe (payment processing). Stack is proven, cost-effective, and allows rapid MVP iteration. Estimated infrastructure cost: $200-500/month for first 1,000 users.',
    whyThisMatters: 'Over-engineering early tech stack wastes time and money. This stack enables Phase 1-2 MVP without custom infrastructure, keeping burn rate low.',
    risksAndGaps: [
      'GPT-4 API costs may spike if usage exceeds $0.03/request',
      'Google Places API has rate limits that may constrain scaling',
      'No hallucination detection layer built into current stack'
    ],
    validateNext: [
      'Test GPT-4 cost per user session (target: <$0.50/session)',
      'Evaluate Google Places API alternatives (Yelp, Foursquare) for redundancy',
      'Implement hallucination detection middleware (e.g., fact-checking layer)'
    ]
  },

  'revenue-model': {
    sectionId: 'revenue-model',
    title: 'Revenue Model',
    moreDetail: 'Three-tier pricing: Basic ($10/trip), Premium ($20/trip), Pro ($30/trip). Target LTV of $120-180 per user (6-9 trips/year). CAC target of $25-35 yields LTV:CAC ratio of 3.6:1. Revenue model assumes 70% Premium adoption. Break-even at 1,400 active users paying $20/trip average.',
    whyThisMatters: 'LTV:CAC ratio of 3.6:1 is strong IF assumptions hold. But CAC of $35 is unproven, and 70% Premium adoption may be optimistic.',
    risksAndGaps: [
      'CAC assumptions are theoretical—no real paid acquisition data',
      'Premium tier adoption rate of 70% is not validated',
      'Assumes 6-9 trips/year but target customer may only travel 3-4x/year'
    ],
    validateNext: [
      'Run $500 Facebook Ads test to measure real CAC',
      'Test pricing tiers with 50 beta users and measure tier selection',
      'Survey users on annual trip frequency to validate LTV assumptions'
    ]
  },

  'team-hiring': {
    sectionId: 'team-hiring',
    title: 'Team & Hiring',
    moreDetail: 'Three critical hires needed: ML Engineer (hallucination detection and AI reliability), Product Designer (trust signals and premium UX), Growth Marketer (B2B partnerships and CAC optimization). Total hiring cost: $150K-200K annually for 3 roles. Timeline: Hire ML Engineer first (within 4 weeks), then Product Designer and Growth Marketer in parallel.',
    whyThisMatters: 'ML Engineer is critical to de-risk AI hallucination concerns. Without this hire, product cannot scale beyond manual concierge phase.',
    risksAndGaps: [
      'ML talent is expensive and competitive—may require equity + salary',
      'Product Designer hire may be premature before product-market fit',
      'Growth Marketer hire assumes B2B strategy is validated (not yet proven)'
    ],
    validateNext: [
      'Recruit ML Engineer contractor for Phase 1-2 MVP (lower cost, faster)',
      'Define Product Designer success metrics before full-time hire',
      'Validate B2B strategy with 10 agency calls before hiring Growth Marketer'
    ]
  },

  'financials': {
    sectionId: 'financials',
    title: 'Financial Projections',
    moreDetail: 'Seed round target: $500K at $3M valuation. Runway: 18 months at $28K/month burn rate. Break-even: 1,400 active users paying $20/trip average (7,000 trips/year). Key assumptions: CAC of $35, LTV of $120, 60% gross margin. First 12 months focus on beta validation, not revenue growth.',
    whyThisMatters: 'Burn rate of $28K/month is lean but requires disciplined hiring. Missing break-even by 20% means running out of cash at Month 15.',
    risksAndGaps: [
      'CAC of $35 is unproven—real CAC may be $50-75',
      'Break-even assumes 1,400 users but no clear acquisition strategy yet',
      '18-month runway leaves no room for delays or pivots'
    ],
    validateNext: [
      'Run $500 ads test to measure real CAC before finalizing fundraising deck',
      'Model scenarios: What if CAC is $50? What if LTV is $80?',
      'Extend runway to 24 months by reducing burn rate to $21K/month'
    ]
  }
};

// Section icons mapping
export const sectionIcons = {
  'problem-clarity': 'Target',
  'customer-profile': 'Users',
  'market-sizing': 'TrendingUp',
  'competition': 'Shield',
  'risks-assumptions': 'AlertTriangle',
  'mvp-scope': 'Rocket',
  'next-steps': 'Lightbulb',
  'scores-matrix': 'BarChart3',
  'tech-stack': 'Code',
  'revenue-model': 'DollarSign',
  'team-hiring': 'Award',
  'financials': 'TrendingDown'
};

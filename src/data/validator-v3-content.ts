export interface ValidationSection {
  id: string;
  title: 'Problem Clarity',
  summary: 'Travelers experience "mid-trip pivot chaos" when plans fail due to weather, closures, or preference changes, requiring rapid replanning with trusted real-time information. Current solutions require juggling 4–6 apps, creating decision fatigue and trust erosion.',
  metrics: [
    { label: 'Problem Score', value: 87, type: 'score' },
    { label: 'Trust Impact', value: 'Critical', type: 'text' },
    { label: 'Apps Used', value: '4–6', type: 'text' },
  ],
  intelligence: {
    deeperContext: 'Travelers lose trust when a single venue or plan fails mid-trip, forcing them to manually cross-check Maps, reviews, weather apps, and social media. This "verification loop" consumes 15–30 minutes per pivot and increases anxiety during time-sensitive travel moments.',
    visualType: 'flowchart',
    visualData: {
      steps: [
        { label: 'Plan Disruption', impact: 'high' },
        { label: 'Manual Search', impact: 'medium' },
        { label: 'Cross-Verification', impact: 'high' },
        { label: 'Decision Delay', impact: 'medium' },
        { label: 'Trust Loss', impact: 'critical' },
      ],
    },
    whyThisMatters: 'This moment determines user trust and willingness to pay for real-time solutions.',
    risksAndGaps: [
      'One incorrect venue recommendation can permanently damage trust',
      'Heavy dependency on external API accuracy and uptime',
      'User expectations for "perfect" information may be unrealistic',
      'Problem severity varies by traveler type (solo vs. family)',
    ],
    validateNext: [
      'Run 100-venue accuracy audit across 3 cities',
      'Test WhatsApp concierge MVP with 50 users',
      'Measure trust recovery after 1 failed recommendation',
    ],
  },
};

export const validatorV3Data: ValidationSection[] = [
  {
    id: 'problem-clarity',
    title: 'Problem Clarity',
    summary: 'Travelers experience "mid-trip pivot chaos" when plans fail due to weather, closures, or preference changes, requiring rapid replanning with trusted real-time information. Current solutions require juggling 4–6 apps, creating decision fatigue and trust erosion.',
    metrics: [
      { label: 'Problem Score', value: 87, type: 'score' },
      { label: 'Trust Impact', value: 'Critical', type: 'text' },
      { label: 'Apps Used', value: '4–6', type: 'text' },
    ],
    intelligence: {
      deeperContext: 'Travelers lose trust when a single venue or plan fails mid-trip, forcing them to manually cross-check Maps, reviews, weather apps, and social media. This "verification loop" consumes 15–30 minutes per pivot and increases anxiety during time-sensitive travel moments.',
      visualType: 'flowchart',
      visualData: {
        steps: [
          { label: 'Plan Disruption', impact: 'high' },
          { label: 'Manual Search', impact: 'medium' },
          { label: 'Cross-Verification', impact: 'high' },
          { label: 'Decision Delay', impact: 'medium' },
          { label: 'Trust Loss', impact: 'critical' },
        ],
      },
      whyThisMatters: 'This moment determines user trust and willingness to pay for real-time solutions.',
      risksAndGaps: [
        'One incorrect venue recommendation can permanently damage trust',
        'Heavy dependency on external API accuracy and uptime',
        'User expectations for "perfect" information may be unrealistic',
        'Problem severity varies by traveler type (solo vs. family)',
      ],
      validateNext: [
        'Run 100-venue accuracy audit across 3 cities',
        'Test WhatsApp concierge MVP with 50 users',
        'Measure trust recovery after 1 failed recommendation',
      ],
    },
  },
  {
    id: 'customer-use-case',
    title: 'Customer Use Case',
    summary: 'Primary persona is the "Spontaneous Explorer" – travelers aged 25–45 who value flexibility and authentic local experiences. They pivot plans 2–3 times per trip and prioritize real-time accuracy over exhaustive pre-planning.',
    metrics: [
      { label: 'Use Case Fit', value: 82, type: 'score' },
      { label: 'Target Age', value: '25–45', type: 'text' },
      { label: 'Pivots/Trip', value: '2–3', type: 'text' },
    ],
    intelligence: {
      deeperContext: 'This segment represents 34% of leisure travelers and 67% of solo travelers. They book accommodations in advance but leave 40–60% of activities unplanned. Their willingness to pay peaks during "crisis moments" when existing plans fail.',
      visualType: 'diagram',
      visualData: {
        segments: [
          { name: 'Spontaneous Explorer', size: 34, fit: 'high' },
          { name: 'Hyper-Planner', size: 28, fit: 'low' },
          { name: 'Budget Backpacker', size: 22, fit: 'medium' },
          { name: 'Luxury Traveler', size: 16, fit: 'medium' },
        ],
      },
      whyThisMatters: 'Targeting this segment ensures product-market fit before expanding to adjacent personas.',
      risksAndGaps: [
        'Segment may be too price-sensitive for subscription model',
        'Behavior data based on self-reported surveys, not actual usage',
        'Secondary personas (families, groups) have different needs',
      ],
      validateNext: [
        'Shadow 10 travelers during mid-trip pivots',
        'Test pricing: $4.99/trip vs. $9.99/month',
        'Validate persona split with actual booking data',
      ],
    },
  },
  {
    id: 'market-sizing',
    title: 'Market Sizing',
    summary: 'Global travel tech market presents a $127B TAM opportunity, narrowing to a $3.2B SAM for real-time travel assistance, with an achievable $180M SOM targeting spontaneous leisure travelers in urban destinations over the next 3 years.',
    metrics: [
      { label: 'TAM', value: '$127B', type: 'currency' },
      { label: 'SAM', value: '$3.2B', type: 'currency' },
      { label: 'SOM', value: '$180M', type: 'currency' },
    ],
    intelligence: {
      deeperContext: 'TAM calculated from $1.4T global travel market × 9% tech spend. SAM derived from 67M monthly active users seeking real-time travel tools × $48 avg. annual spend. SOM assumes 3% market penetration in Year 3 across 12 target cities.',
      visualType: 'funnel',
      visualData: {
        stages: [
          { name: 'TAM', value: 127, color: '#0d5f4e' },
          { name: 'SAM', value: 3.2, color: '#6b9d89' },
          { name: 'SOM', value: 0.18, color: '#0E3E1B' },
        ],
      },
      whyThisMatters: 'SOM validates venture-scale opportunity while remaining achievable with focused city-by-city expansion.',
      risksAndGaps: [
        'TAM assumes stable travel growth; pandemic risk not modeled',
        'SAM relies on willingness-to-pay survey data, not actual transactions',
        '3% penetration is aggressive for new category',
        'SOM requires $8M+ in city launch capital',
      ],
      validateNext: [
        'Validate $48 ARPU with 1,000-user pilot',
        'Test penetration in single city before scaling',
        'Model downside scenario: 1% penetration, $24 ARPU',
      ],
    },
  },
  {
    id: 'competition',
    title: 'Competition',
    summary: 'Direct competitors include TripIt (itinerary focus, weak real-time), Google Travel (broad but generic), and local concierge apps (city-specific, low tech). Indirect competition comes from social media browsing and manual research across multiple platforms.',
    metrics: [
      { label: 'Competitive Score', value: 76, type: 'score' },
      { label: 'Direct Rivals', value: '3 major', type: 'text' },
      { label: 'Differentiation', value: 'Strong', type: 'text' },
    ],
    intelligence: {
      deeperContext: 'Competitors excel at pre-trip planning but lack real-time pivot intelligence. TripIt has 15M users but minimal mid-trip engagement. Google Travel prioritizes search ads over curated recommendations. Local apps lack cross-city scalability.',
      visualType: 'matrix',
      visualData: {
        competitors: [
          { name: 'TripIt', realTime: 3, curation: 6, scale: 9 },
          { name: 'Google Travel', realTime: 5, curation: 4, scale: 10 },
          { name: 'Local Apps', realTime: 7, curation: 8, scale: 2 },
          { name: 'Your Product', realTime: 9, curation: 9, scale: 5 },
        ],
      },
      whyThisMatters: 'Differentiation window exists for 18–24 months before incumbents copy real-time features.',
      risksAndGaps: [
        'Google could bundle real-time features into Search/Maps',
        'TripIt parent (Concur/SAP) has enterprise distribution advantage',
        'Low barriers to entry for copycat startups',
        'User switching costs are minimal',
      ],
      validateNext: [
        'Monitor competitor app releases monthly',
        'Build 3 defensible moats: data network effects, city partnerships, AI curation',
        'Patent real-time recommendation algorithm',
      ],
    },
  },
  {
    id: 'risks-assumptions',
    title: 'Risks & Assumptions',
    summary: 'Primary risks include API dependency (60% data reliance on Google/Yelp), user trust requirements (90%+ accuracy needed), and city expansion costs ($120K per new city). Key assumption: travelers will pay $5–10 per trip for real-time assistance.',
    metrics: [
      { label: 'Risk Level', value: 'Medium-High', type: 'text' },
      { label: 'Critical Risks', value: 5, type: 'text' },
      { label: 'Mitigation Score', value: 68, type: 'score' },
    ],
    intelligence: {
      deeperContext: 'API risk is existential—loss of Google Places access would eliminate 60% of data foundation. User trust requires 90%+ recommendation accuracy; competitors operate at 70–75%. City launches need $120K for local partnerships, data collection, and marketing.',
      visualType: 'chart',
      visualData: {
        risks: [
          { name: 'API Dependency', severity: 9, likelihood: 6 },
          { name: 'Trust Threshold', severity: 8, likelihood: 7 },
          { name: 'Expansion Capital', severity: 7, likelihood: 5 },
          { name: 'Competitor Response', severity: 6, likelihood: 8 },
          { name: 'Seasonal Demand', severity: 5, likelihood: 9 },
        ],
      },
      whyThisMatters: 'Addressing these risks determines survival probability in the first 18 months.',
      risksAndGaps: [
        'No backup plan if Google restricts API access',
        'Accuracy testing limited to 200 venues; need 5,000+',
        'City expansion assumes linear growth; may require geometric capital',
        'Monetization untested beyond surveys',
      ],
      validateNext: [
        'Negotiate multi-year Google API contract',
        'Build proprietary data layer (20% coverage target)',
        'Test freemium model: free basic, $9.99/month premium',
      ],
    },
  },
  {
    id: 'mvp-scope',
    title: 'MVP Scope',
    summary: 'MVP launches in Austin, TX with WhatsApp-based concierge, covering 500 curated venues. Core features: real-time recommendations, weather/event integration, and 1-hour response time. Launch target: 100 beta users in 8 weeks.',
    metrics: [
      { label: 'MVP Score', value: 84, type: 'score' },
      { label: 'Venues', value: 500, type: 'text' },
      { label: 'Beta Users', value: 100, type: 'text' },
    ],
    intelligence: {
      deeperContext: 'Austin chosen for high concentration of spontaneous travelers (SXSW, ACL), strong local data availability, and team proximity for on-ground partnerships. WhatsApp reduces development time by 12 weeks vs. native app.',
      visualType: 'diagram',
      visualData: {
        phases: [
          { name: 'Week 1–2', task: 'Venue curation', status: 'complete' },
          { name: 'Week 3–4', task: 'WhatsApp bot build', status: 'in-progress' },
          { name: 'Week 5–6', task: 'Beta user recruitment', status: 'pending' },
          { name: 'Week 7–8', task: 'Live testing + iteration', status: 'pending' },
        ],
      },
      whyThisMatters: 'MVP validates core value prop with 1/10th the cost of a native app launch.',
      risksAndGaps: [
        'WhatsApp limits rich media and interactive features',
        '500 venues may not cover all use cases',
        '100 users insufficient for statistical significance',
        'Austin demographics may not represent broader market',
      ],
      validateNext: [
        'Hit 100 users by Week 6',
        'Measure: 60%+ users make 2+ requests',
        'Collect: 80+ qualitative feedback sessions',
      ],
    },
  },
  {
    id: 'next-steps',
    title: 'Next Steps',
    summary: 'Immediate priorities: (1) Complete 500-venue audit by Feb 15, (2) Launch WhatsApp MVP by March 1, (3) Recruit 100 beta users by March 15, (4) Validate $5/trip pricing by April 1. Success criteria: 60%+ retention, 4.2+ star rating.',
    metrics: [
      { label: 'Timeline', value: '8 weeks', type: 'text' },
      { label: 'Milestones', value: 4, type: 'text' },
      { label: 'Success Rate', value: '60%+', type: 'percentage' },
    ],
    intelligence: {
      deeperContext: 'Timeline assumes team of 3 (1 eng, 1 ops, 1 marketing). Venue audit requires manual verification of hours, photos, and real-time availability. Beta users sourced from Austin travel Facebook groups, hotel partnerships, and Reddit.',
      visualType: 'diagram',
      visualData: {
        milestones: [
          { date: 'Feb 15', task: 'Venue audit complete', owner: 'Ops' },
          { date: 'Mar 1', task: 'WhatsApp MVP live', owner: 'Eng' },
          { date: 'Mar 15', task: '100 beta users', owner: 'Marketing' },
          { date: 'Apr 1', task: 'Pricing validated', owner: 'All' },
        ],
      },
      whyThisMatters: 'This timeline gates a $500K seed raise and determines 2025 expansion plan.',
      risksAndGaps: [
        'Venue audit may uncover <70% usable data',
        'WhatsApp API approval can take 2–4 weeks',
        'Beta user recruitment depends on unpredictable organic channels',
        'Pricing validation requires actual payment, not just surveys',
      ],
      validateNext: [
        'Build venue audit tool to scale beyond Austin',
        'Pre-apply for WhatsApp Business API',
        'Negotiate hotel partnerships for user referrals',
      ],
    },
  },
  {
    id: 'scores-matrix',
    title: 'Scores Matrix',
    summary: 'Overall validation score: 81/100. Strengths in problem clarity (87) and MVP scope (84). Areas for improvement: competitive moat (76) and risk mitigation (68). Score methodology weighs customer evidence, market data, and execution readiness.',
    metrics: [
      { label: 'Overall Score', value: 81, type: 'score' },
      { label: 'Highest', value: 'Problem (87)', type: 'text' },
      { label: 'Lowest', value: 'Risks (68)', type: 'text' },
    ],
    intelligence: {
      deeperContext: 'Scores calculated from weighted criteria: problem evidence (25%), customer validation (20%), market size (15%), competition (15%), MVP feasibility (15%), risk mitigation (10%). Scores above 80 indicate fundable startups; 70–79 need iteration; below 70 suggest pivot.',
      visualType: 'chart',
      visualData: {
        scores: [
          { category: 'Problem Clarity', score: 87 },
          { category: 'Customer Use Case', score: 82 },
          { category: 'Market Sizing', score: 79 },
          { category: 'Competition', score: 76 },
          { category: 'MVP Scope', score: 84 },
          { category: 'Risk Mitigation', score: 68 },
          { category: 'Team', score: 80 },
          { category: 'Financial Model', score: 77 },
        ],
      },
      whyThisMatters: 'Score of 81 places this startup in the top 15% of validated ideas we\'ve assessed.',
      risksAndGaps: [
        'Risk score (68) below investor comfort threshold of 75+',
        'Competition score may drop if Google launches similar feature',
        'Scores based on assumptions; real-world testing could lower by 10–15 points',
      ],
      validateNext: [
        'Raise risk score to 75+ by addressing API dependency',
        'Revalidate scores after MVP results',
        'Benchmark against 10 comparable startups',
      ],
    },
  },
  {
    id: 'technology-stack',
    title: 'Technology Stack',
    summary: 'Tech stack prioritizes speed and cost-efficiency: WhatsApp Business API (frontend), Python/FastAPI (backend), Postgres (database), Google Cloud Run (hosting). Leverages Google Places, Yelp Fusion, and OpenWeather APIs for data.',
    metrics: [
      { label: 'Tech Complexity', value: 'Low-Medium', type: 'text' },
      { label: 'Monthly Cost', value: '$450', type: 'currency' },
      { label: 'Build Time', value: '6 weeks', type: 'text' },
    ],
    intelligence: {
      deeperContext: 'WhatsApp chosen over native app to reduce MVP timeline from 20 weeks to 6 weeks. Cloud Run provides auto-scaling with $0 cost at low usage. External APIs cost $0.02 per request; breakeven at 150 users/month.',
      visualType: 'diagram',
      visualData: {
        layers: [
          { name: 'Frontend', tech: 'WhatsApp Business API' },
          { name: 'Backend', tech: 'Python FastAPI' },
          { name: 'Database', tech: 'PostgreSQL' },
          { name: 'Hosting', tech: 'Google Cloud Run' },
          { name: 'Data APIs', tech: 'Google Places, Yelp, OpenWeather' },
        ],
      },
      whyThisMatters: 'Low-cost stack extends runway and enables rapid iteration without technical debt.',
      risksAndGaps: [
        'WhatsApp limits long-term product differentiation',
        'Cloud Run cold starts may impact response time',
        'API costs scale linearly; could hit $5K/month at 1,000 users',
        'No machine learning layer for personalization',
      ],
      validateNext: [
        'Test Cloud Run performance at 500 concurrent users',
        'Model API cost scenarios: 100, 1K, 10K users',
        'Plan native app migration timeline (post-PMF)',
      ],
    },
  },
  {
    id: 'revenue-model',
    title: 'Revenue Model',
    summary: 'Freemium model: free 3 requests/trip, $4.99 per trip for unlimited, or $9.99/month subscription. Target mix: 70% per-trip, 30% subscription. Year 1 revenue goal: $180K from 3,000 paying users.',
    metrics: [
      { label: 'Per-Trip Price', value: '$4.99', type: 'currency' },
      { label: 'Subscription', value: '$9.99/mo', type: 'currency' },
      { label: 'Y1 Revenue', value: '$180K', type: 'currency' },
    ],
    intelligence: {
      deeperContext: 'Freemium threshold (3 requests) validated through beta surveys—85% of users need 5+ requests/trip. Per-trip pricing captures occasional travelers; subscription targets frequent flyers (8+ trips/year). Blended ARPU: $60/year.',
      visualType: 'chart',
      visualData: {
        breakdown: [
          { model: 'Per-Trip ($4.99)', users: 2100, revenue: 126000 },
          { model: 'Subscription ($9.99)', users: 900, revenue: 54000 },
        ],
      },
      whyThisMatters: 'Dual model balances user acquisition (low barrier) with revenue optimization (subscription upsell).',
      risksAndGaps: [
        '$4.99 per-trip pricing untested with real payments',
        'Subscription churn rate unknown (assuming 5%/month)',
        '3,000 paying users requires 15,000 signups (20% conversion)',
        'Payment processing fees (3%) not modeled',
      ],
      validateNext: [
        'A/B test: $4.99 vs. $6.99 per trip',
        'Offer annual plan: $79/year (33% discount)',
        'Measure free-to-paid conversion in beta',
      ],
    },
  },
  {
    id: 'team-hiring',
    title: 'Team & Hiring',
    summary: 'Current team: 2 co-founders (eng + ops). Immediate hires: Growth marketer (March), Senior engineer (May), Customer success (July). Founder equity: 60/40 split. Employee equity pool: 15%.',
    metrics: [
      { label: 'Team Size', value: '2 → 5', type: 'text' },
      { label: 'Hiring Budget', value: '$180K/year', type: 'currency' },
      { label: 'Equity Pool', value: '15%', type: 'percentage' },
    ],
    intelligence: {
      deeperContext: 'Co-founders bring 8 years combined experience in travel tech and AI. Growth marketer critical for beta-to-1K user transition. Senior engineer enables native app migration. Customer success required at 500+ active users to maintain 4.2+ star rating.',
      visualType: 'diagram',
      visualData: {
        hires: [
          { role: 'Growth Marketer', timing: 'March', salary: '$60K', equity: '0.5%' },
          { role: 'Senior Engineer', timing: 'May', salary: '$80K', equity: '1.0%' },
          { role: 'Customer Success', timing: 'July', salary: '$40K', equity: '0.3%' },
        ],
      },
      whyThisMatters: 'Right hires at right time maximize runway and prevent founder burnout.',
      risksAndGaps: [
        'Hiring delays could miss summer travel season',
        'Salary estimates assume remote; may need +20% for in-person',
        'No technical advisor or board member identified',
        'Co-founder equity split not vesting schedule defined',
      ],
      validateNext: [
        'Start marketer interviews in February',
        'Define 4-year vesting with 1-year cliff for all hires',
        'Recruit 3 advisors: travel industry, AI/ML, growth',
      ],
    },
  },
  {
    id: 'financial-projections',
    title: 'Financial Projections',
    summary: 'Year 1: $180K revenue, $420K expenses, -$240K cash flow. Break-even: Month 18 at 5,000 paying users. Seed funding needed: $500K. Key drivers: 20% free-to-paid conversion, $60 ARPU, 5% monthly churn.',
    metrics: [
      { label: 'Y1 Revenue', value: '$180K', type: 'currency' },
      { label: 'Break-Even', value: 'Month 18', type: 'text' },
      { label: 'Seed Need', value: '$500K', type: 'currency' },
    ],
    intelligence: {
      deeperContext: 'Projections assume: 15,000 signups in Y1 (1,250/month avg), 20% conversion to paid, 5% monthly churn, $60 annual ARPU. Expenses: $180K salaries, $80K marketing, $60K ops, $100K buffer. Seed funding covers 18-month runway to break-even.',
      visualType: 'chart',
      visualData: {
        projection: [
          { month: 'M1-3', revenue: 5000, expenses: 35000 },
          { month: 'M4-6', revenue: 18000, expenses: 45000 },
          { month: 'M7-9', revenue: 42000, expenses: 55000 },
          { month: 'M10-12', revenue: 75000, expenses: 60000 },
          { month: 'M13-15', revenue: 120000, expenses: 65000 },
          { month: 'M16-18', revenue: 180000, expenses: 70000 },
        ],
      },
      whyThisMatters: '18-month break-even timeline aligns with typical seed-to-Series A fundraising cycle.',
      risksAndGaps: [
        '20% conversion rate based on industry benchmarks, not actual data',
        'Marketing spend may need 2x to hit signup targets',
        'Churn rate unknown; 10% vs 5% changes break-even by 6 months',
        'No contingency plan if break-even extends to Month 24',
      ],
      validateNext: [
        'Model downside: 10% conversion, $40 ARPU, 8% churn',
        'Identify Series A milestones: $1M ARR, 3 cities live',
        'Track unit economics weekly: CAC, LTV, payback period',
      ],
    },
  },
];

export const getValidationSection = (id: string): ValidationSection | undefined => {
  return validatorV3Data.find((section) => section.id === id);
};
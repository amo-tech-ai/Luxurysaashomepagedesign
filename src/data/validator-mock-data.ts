// Validator Mock Data - Dental AI Scheduling Tool
// Complete 14-section validation report

import type {
  ValidatorReport,
  ExecutionTrace,
  PipelineProgress,
} from './validator-types';

// ============================================
// MOCK REPORT: Dental AI Scheduling Tool
// ============================================

export const mockValidatorReport: ValidatorReport = {
  id: 'report-dental-001',
  session_id: 'session-dental-001',
  score: 72,
  verdict: 'GO',
  summary: 'Strong problem-solution fit with clear market need. Dental practices lose $200+ per unfilled appointment slot. MVP is feasible with existing tech. Main risk: competitive positioning against established players like Dentrix.',
  idea_name: 'Dental AI Scheduling Tool',
  
  details: {
    // SECTION 1: Problem Clarity
    problem_clarity: {
      problem_statement: 'Dental practices lose $200 per unfilled appointment slot due to manual follow-up processes. Current systems require staff to manually call patients for confirmations and reminders, leading to 20-30% no-show rates and frustrated administrative staff.',
      problem_magnitude: '$200 per unfilled slot × 5 slots/day × 250 days = $250,000 annual loss per practice',
      current_solutions: [
        'Manual phone calls by front desk staff (2-3 hours/day)',
        'Generic reminder systems (Dentrix, Eaglesoft) with no AI',
        'Calendly for online booking (no dental-specific logic)',
      ],
      problem_validation: 'Validated through 23 dental practice interviews. 87% report scheduling as top-3 pain point. Evidence: 2-3 hours daily spent on manual confirmations.',
    },

    // SECTION 2: Customer & Use Case
    customer_use_case: {
      primary_customer: {
        persona: 'Independent dental practices with 1-5 dentists',
        demographics: [
          'Urban and suburban US markets',
          '$500K-$2M annual revenue',
          '5-15 staff members',
          '500-2000 active patients',
        ],
        psychographics: 'Value efficiency, patient experience, and staff satisfaction. Willing to adopt technology that reduces administrative burden.',
      },
      secondary_customers: [
        {
          persona: 'Dental Service Organizations (DSOs)',
          use_case: 'Multi-location scheduling optimization across 10-50 practices',
        },
        {
          persona: 'Specialty dental practices (orthodontics, oral surgery)',
          use_case: 'Complex appointment scheduling with multi-step procedures',
        },
      ],
      use_case_description: 'AI predicts no-show risk, automatically sends personalized SMS reminders, handles rescheduling requests via chatbot, and fills last-minute cancellations by prioritizing waitlist patients based on urgency and proximity.',
      buying_process: 'Decision maker: Practice owner/office manager. 30-day trial typical. Procurement: Direct purchase or through dental software reseller. Price sensitivity: Moderate ($200-300/month acceptable).',
    },

    // SECTION 3: Market Sizing
    market_sizing: {
      tam: {
        value: 2100000000, // $2.1B
        description: 'Global dental software market',
        methodology: 'Top-down analysis of dental practice management software market globally',
        sources: [
          {
            id: 1,
            title: 'Global Dental Software Market 2024',
            url: 'https://www.statista.com/statistics/dental-software-market',
            source_type: 'report',
            accessed_date: '2024-02-10',
            snippet: 'The global dental software market is valued at $2.1 billion in 2024',
          },
        ],
      },
      sam: {
        value: 420000000, // $420M
        description: 'US SMB dental practices (1-5 dentists)',
        calculation: '$2.1B × 40% (US market) × 50% (SMB segment) = $420M',
        sources: [
          {
            id: 2,
            title: 'Dental Practice Management Software Analysis 2023-28',
            url: 'https://www.grandviewresearch.com/dental-software',
            source_type: 'report',
            accessed_date: '2024-02-10',
          },
        ],
      },
      som: {
        value: 8400000, // $8.4M
        description: '2% market capture, Year 3 target',
        assumptions: [
          '2% market penetration achievable in 3 years',
          '$200/month average revenue per practice',
          '3,500 practices by Year 3',
        ],
        timeline: 'Year 3 target (2027)',
      },
      growth_rate: {
        cagr: 3.2,
        timeframe: '2024-2028',
        sources: [
          {
            id: 3,
            title: '2024 Dental Technology Trends Report',
            url: 'https://www.dentaleconomics.com/tech-trends-2024',
            source_type: 'article',
            accessed_date: '2024-02-10',
          },
        ],
      },
    },

    // SECTION 4: Competition
    competition: {
      direct_competitors: [
        {
          name: 'Dentrix',
          description: 'Market leader in dental practice management software with scheduling module',
          strengths: ['Established brand (40% market share)', 'Integrated billing', 'Large customer base'],
          weaknesses: ['No AI features', 'Complex UI', 'Expensive ($500+/month)'],
          pricing: '$500-800/month',
          market_share: '40%',
          url: 'https://www.dentrix.com',
        },
        {
          name: 'Eaglesoft',
          description: 'Comprehensive practice management with scheduling features',
          strengths: ['Patterson Dental distribution', 'Strong support network'],
          weaknesses: ['Legacy software', 'No AI', 'Desktop-only'],
          pricing: '$400-600/month',
          market_share: '15%',
          url: 'https://www.eaglesoft.com',
        },
        {
          name: 'OpenDental',
          description: 'Open-source dental software with scheduling',
          strengths: ['Free/low-cost', 'Customizable', 'Active community'],
          weaknesses: ['No AI', 'Requires technical setup', 'Limited support'],
          pricing: 'Free or $100/month (hosted)',
          market_share: '10%',
          url: 'https://www.opendental.com',
        },
        {
          name: 'Curve Dental',
          description: 'Cloud-based practice management with modern UI',
          strengths: ['Cloud-native', 'Mobile-friendly', 'Good UX'],
          weaknesses: ['No AI scheduling', 'Smaller market share', 'Limited integrations'],
          pricing: '$300-450/month',
          market_share: '5%',
          url: 'https://www.curvedental.com',
        },
      ],
      indirect_competitors: [
        {
          name: 'Calendly + Manual Systems',
          description: 'Generic online scheduling combined with manual processes',
          substitution_risk: 'medium',
        },
        {
          name: 'Practice-built spreadsheet systems',
          description: 'Custom Excel/Google Sheets scheduling',
          substitution_risk: 'low',
        },
      ],
      feature_matrix: {
        features: ['AI Scheduling', 'SMS Reminders', 'No-show Prediction', 'Waitlist Management', 'Billing Integration', 'Cloud-based'],
        competitors: ['Us', 'Dentrix', 'Eaglesoft', 'OpenDental', 'Curve'],
        grid: [
          [true, false, false, false, false], // AI Scheduling
          [true, true, true, false, true],    // SMS Reminders
          [true, false, false, false, false], // No-show Prediction
          [true, false, false, false, false], // Waitlist Management
          [false, true, true, true, false],   // Billing Integration
          [true, false, false, false, true],  // Cloud-based
        ],
      },
      positioning_map: {
        x_axis: 'Price (Low → High)',
        y_axis: 'AI Capability (Low → High)',
        competitors: [
          { name: 'Us', x: 30, y: 90 },
          { name: 'Dentrix', x: 80, y: 10 },
          { name: 'Eaglesoft', x: 70, y: 10 },
          { name: 'OpenDental', x: 10, y: 5 },
          { name: 'Curve', x: 50, y: 20 },
        ],
      },
      competitive_moat: 'AI-powered scheduling engine specifically trained on dental appointment patterns. Proprietary no-show prediction model using 2+ years of historical dental data. Dental-specific logic for appointment types, insurance, and chair time optimization.',
    },

    // SECTION 5: Risks & Assumptions
    risks_assumptions: {
      risks: [
        {
          category: 'market',
          risk: 'Dentrix launches AI scheduling within 12 months',
          severity: 'high',
          likelihood: 'medium',
          mitigation: 'Build dental-specific features (insurance integration, chair optimization) that generic AI cannot replicate. Establish customer lock-in through historical data training.',
        },
        {
          category: 'execution',
          risk: 'No-show prediction accuracy below 70% damages trust',
          severity: 'critical',
          likelihood: 'medium',
          mitigation: 'Start with rule-based system (patient history, weather, traffic) before full AI. Require 90-day pilot with 5 practices before scaling.',
        },
        {
          category: 'technical',
          risk: 'SMS delivery failures cause appointment gaps',
          severity: 'high',
          likelihood: 'low',
          mitigation: 'Use Twilio with 99.95% uptime SLA. Implement backup email reminders. Monitor delivery rates in real-time.',
        },
        {
          category: 'financial',
          risk: 'Customer acquisition cost exceeds $500/practice',
          severity: 'medium',
          likelihood: 'medium',
          mitigation: 'Partner with dental equipment suppliers (Patterson, Henry Schein) for co-marketing. Target dental conferences and associations.',
        },
      ],
      assumptions: [
        {
          assumption: 'Practices will pay $200-300/month for AI scheduling',
          impact_if_wrong: 'Revenue model fails, must pivot to per-appointment pricing',
          validation_method: 'Survey 50 practices on pricing sensitivity. Offer 3-tier pricing test: $150, $250, $350.',
        },
        {
          assumption: 'AI can reduce no-show rate from 25% to 10%',
          impact_if_wrong: 'Value proposition weakened, harder to justify pricing',
          validation_method: 'Run 90-day pilot with 3 practices. Measure baseline no-show rate for 30 days, then enable AI and compare.',
        },
        {
          assumption: 'Integration with Dentrix/Eaglesoft APIs is feasible',
          impact_if_wrong: 'Cannot access patient data, must build standalone system',
          validation_method: 'Contact Dentrix developer relations. Build proof-of-concept integration in 2 weeks.',
        },
      ],
    },

    // SECTION 6: MVP Scope
    mvp_scope: {
      phases: [
        {
          phase: 1,
          name: 'Core Scheduling Engine',
          duration: '8 weeks',
          features: [
            { feature: 'AI appointment slot optimization', priority: 'must', effort: 'high' },
            { feature: 'SMS reminder system (Twilio)', priority: 'must', effort: 'medium' },
            { feature: 'Basic no-show prediction (rules-based)', priority: 'must', effort: 'medium' },
            { feature: 'Patient waitlist management', priority: 'should', effort: 'low' },
            { feature: 'Admin dashboard with analytics', priority: 'should', effort: 'medium' },
          ],
          success_criteria: [
            '3 pilot practices onboarded',
            'No-show rate reduced by 5-10%',
            '95%+ SMS delivery rate',
            'Admin setup completed in <30 minutes',
          ],
        },
        {
          phase: 2,
          name: 'Integration & Scaling',
          duration: '6 weeks',
          features: [
            { feature: 'Dentrix API integration', priority: 'must', effort: 'high' },
            { feature: 'Advanced AI no-show prediction', priority: 'must', effort: 'high' },
            { feature: 'Automated rescheduling chatbot', priority: 'should', effort: 'medium' },
            { feature: 'Multi-location support', priority: 'could', effort: 'medium' },
          ],
          success_criteria: [
            'Seamless Dentrix sync (patient data, appointments)',
            'No-show prediction accuracy >75%',
            '20 practices onboarded',
            '$40K MRR',
          ],
        },
        {
          phase: 3,
          name: 'Polish & Expansion',
          duration: '6 weeks',
          features: [
            { feature: 'Insurance verification automation', priority: 'should', effort: 'high' },
            { feature: 'Chairside assistant app', priority: 'could', effort: 'medium' },
            { feature: 'Patient self-scheduling portal', priority: 'should', effort: 'medium' },
          ],
          success_criteria: [
            '50 practices onboarded',
            '$100K MRR',
            'Net Promoter Score >50',
          ],
        },
      ],
      tech_dependencies: [
        'Twilio SMS API',
        'Dentrix/Eaglesoft APIs (or HL7 FHIR)',
        'OpenAI GPT-4 for chatbot',
        'Google Maps API for traffic/weather data',
      ],
      team_requirements: '1 FE engineer (React), 1 BE engineer (Node.js), 1 AI/ML engineer (Python), 1 designer (part-time)',
    },

    // SECTION 7: Next Steps
    next_steps: {
      immediate: [
        {
          action: 'Survey 20 dental practices on scheduling pain points',
          why: 'Validate problem severity and feature prioritization',
          timeline: 'This week',
          owner: 'Founder',
        },
        {
          action: 'Verify $200-300/month willingness to pay',
          why: 'Confirm revenue model before building',
          timeline: '2 weeks',
          owner: 'Founder',
        },
        {
          action: 'Contact Dentrix developer relations',
          why: 'Understand API access requirements and costs',
          timeline: '2 weeks',
          owner: 'Tech Lead',
        },
      ],
      short_term: [
        {
          action: 'Build SMS reminder proof-of-concept',
          timeline: '3-4 weeks',
        },
        {
          action: 'Recruit 3 pilot practices for beta',
          timeline: '4 weeks',
        },
        {
          action: 'Set up Twilio account and test SMS delivery',
          timeline: '1 week',
        },
      ],
      medium_term: [
        {
          action: 'Launch MVP with 3 pilot practices',
          timeline: '8-10 weeks',
        },
        {
          action: 'Measure no-show rate improvement',
          timeline: '12-16 weeks',
        },
        {
          action: 'Secure $250K seed funding',
          timeline: '3-4 months',
        },
      ],
    },

    // SECTION 8: Scores Matrix
    scores_matrix: {
      overall_score: 72,
      verdict: 'GO',
      dimensions: [
        {
          dimension: 'Market Opportunity',
          score: 78,
          weight: 0.25,
          rationale: 'Large TAM ($2.1B), growing at 3.2% CAGR. Dental practices have clear pain point and budget for solutions.',
          sub_scores: [
            { factor: 'TAM size', score: 85 },
            { factor: 'Market growth', score: 70 },
            { factor: 'Customer budget', score: 80 },
          ],
        },
        {
          dimension: 'Problem Clarity',
          score: 85,
          weight: 0.15,
          rationale: 'Well-defined problem with quantified impact ($200/slot loss). Validated through 23 interviews.',
          sub_scores: [
            { factor: 'Problem severity', score: 90 },
            { factor: 'Problem frequency', score: 85 },
            { factor: 'Problem validation', score: 80 },
          ],
        },
        {
          dimension: 'Solution Fit',
          score: 75,
          weight: 0.15,
          rationale: 'AI scheduling addresses core pain. Technology is proven (Twilio, GPT-4). Integration risk with Dentrix.',
          sub_scores: [
            { factor: 'Technical feasibility', score: 80 },
            { factor: 'Differentiation', score: 70 },
            { factor: 'Integration complexity', score: 75 },
          ],
        },
        {
          dimension: 'Competitive Moat',
          score: 62,
          weight: 0.10,
          rationale: 'Dental-specific AI is defensible, but Dentrix could launch AI features. Network effects weak initially.',
          sub_scores: [
            { factor: 'Technology moat', score: 70 },
            { factor: 'Data moat', score: 50 },
            { factor: 'Brand moat', score: 65 },
          ],
        },
        {
          dimension: 'Execution Feasibility',
          score: 80,
          weight: 0.20,
          rationale: 'MVP is buildable in 8 weeks with 3-person team. Tech stack is standard (React, Node, Twilio).',
          sub_scores: [
            { factor: 'MVP complexity', score: 85 },
            { factor: 'Team skills fit', score: 75 },
            { factor: 'Time to market', score: 80 },
          ],
        },
        {
          dimension: 'Founder Advantage',
          score: 55,
          weight: 0.10,
          rationale: 'No direct dental industry experience. Strong tech background. Need dental advisor.',
          sub_scores: [
            { factor: 'Domain expertise', score: 40 },
            { factor: 'Technical skills', score: 80 },
            { factor: 'Network access', score: 45 },
          ],
        },
        {
          dimension: 'Innovation Potential',
          score: 68,
          weight: 0.05,
          rationale: 'AI scheduling is innovative for dental, but similar solutions exist in other verticals (restaurants, salons).',
          sub_scores: [
            { factor: 'Novelty', score: 65 },
            { factor: 'Future potential', score: 70 },
            { factor: 'Platform extensibility', score: 70 },
          ],
        },
      ],
      market_factors: {
        tam_quality: 78,
        growth_rate: 70,
        competition_intensity: 65,
      },
      execution_factors: {
        founder_fit: 55,
        mvp_feasibility: 80,
        go_to_market_clarity: 72,
      },
    },

    // SECTION 9: Technology Stack
    tech_stack: {
      frontend: [
        {
          tech: 'React + TypeScript',
          rationale: 'Standard for admin dashboards, large talent pool, good tooling',
          risk_level: 'low',
        },
        {
          tech: 'Tailwind CSS',
          rationale: 'Fast UI development, matches design system',
          risk_level: 'low',
        },
      ],
      backend: [
        {
          tech: 'Node.js + Express',
          rationale: 'JavaScript full-stack, good for API integrations',
          risk_level: 'low',
        },
        {
          tech: 'PostgreSQL',
          rationale: 'Relational data (appointments, patients), HIPAA-compliant hosting available',
          risk_level: 'low',
        },
        {
          tech: 'Python + scikit-learn (AI)',
          rationale: 'No-show prediction model, existing dental datasets',
          risk_level: 'medium',
        },
      ],
      infrastructure: [
        {
          tech: 'AWS (EC2, RDS, S3)',
          rationale: 'HIPAA BAA available, proven at scale',
          risk_level: 'low',
        },
        {
          tech: 'Vercel (admin dashboard)',
          rationale: 'Fast deployment, good DX for React',
          risk_level: 'low',
        },
      ],
      third_party_apis: [
        {
          name: 'Twilio SMS',
          purpose: 'Send appointment reminders and confirmations',
          cost: '$0.0079/SMS (US), ~$200/month for 500 patients',
          risk: 'Low - 99.95% uptime SLA',
        },
        {
          name: 'OpenAI GPT-4',
          purpose: 'Rescheduling chatbot, natural language processing',
          cost: '$0.03/1K tokens, ~$300/month estimated',
          risk: 'Medium - API rate limits, cost variability',
        },
        {
          name: 'Dentrix API',
          purpose: 'Sync patient data and appointments',
          cost: 'TBD - need to contact Dentrix developer relations',
          risk: 'High - API access may require partnership or certification',
        },
        {
          name: 'Google Maps API',
          purpose: 'Traffic and weather data for no-show prediction',
          cost: '$5/1K requests, ~$100/month estimated',
          risk: 'Low - well-documented, stable',
        },
      ],
      technical_risks: [
        'Dentrix API access may require lengthy certification process',
        'HIPAA compliance adds development overhead (encryption, audit logs)',
        'AI model accuracy may vary across different practice types',
        'SMS delivery failures in rural areas with poor cell coverage',
      ],
      estimated_timeline: {
        setup: '2 weeks (AWS setup, Twilio account, dev environment)',
        mvp: '8-10 weeks (Phase 1 core features)',
      },
    },

    // SECTION 10: Revenue Model
    revenue_model: {
      recommended_model: 'SaaS',
      rationale: 'Recurring revenue aligns with dental practice budgets. Predictable cash flow for investors. Industry standard for practice management software.',
      pricing_strategy: {
        model: 'per_chair',
        tiers: [
          {
            tier: 'Starter',
            price: 149,
            features: [
              'Up to 2 dentists/chairs',
              'SMS reminders (500/month)',
              'Basic no-show prediction',
              'Email support',
            ],
          },
          {
            tier: 'Professional',
            price: 249,
            features: [
              'Up to 5 dentists/chairs',
              'SMS reminders (2000/month)',
              'Advanced AI no-show prediction',
              'Automated rescheduling chatbot',
              'Dentrix/Eaglesoft integration',
              'Phone support',
            ],
          },
          {
            tier: 'Enterprise',
            price: 499,
            features: [
              'Unlimited dentists/chairs',
              'Unlimited SMS',
              'Multi-location support',
              'Custom integrations',
              'Dedicated account manager',
              'Priority support',
            ],
          },
        ],
      },
      unit_economics: {
        cac: 350, // Customer Acquisition Cost
        ltv: 7140, // Lifetime Value ($249/mo × 30 months avg retention)
        ltv_cac_ratio: 20.4, // 7140 / 350 = 20.4 (excellent, >3 is good)
        payback_period: 1.4, // months (350 / 249 = 1.4)
      },
      revenue_streams: [
        {
          stream: 'SaaS subscriptions',
          contribution: 85,
        },
        {
          stream: 'SMS overage fees',
          contribution: 10,
        },
        {
          stream: 'Setup/onboarding fees',
          contribution: 5,
        },
      ],
    },

    // SECTION 11: Team & Hiring
    team_hiring: {
      team_gaps: [
        {
          role: 'Dental Industry Advisor',
          why_needed: 'Validate product decisions, open doors to practices for pilots',
          priority: 'critical',
          timeline: 'Month 1',
        },
        {
          role: 'Full-stack Engineer',
          why_needed: 'Build MVP (React + Node.js), integrate with Dentrix API',
          priority: 'critical',
          timeline: 'Month 1',
        },
        {
          role: 'AI/ML Engineer',
          why_needed: 'Build no-show prediction model, train on dental appointment data',
          priority: 'high',
          timeline: 'Month 2',
        },
        {
          role: 'Product Designer',
          why_needed: 'Design admin dashboard, chatbot UX',
          priority: 'high',
          timeline: 'Month 3',
        },
        {
          role: 'Customer Success Manager',
          why_needed: 'Onboard pilot practices, gather feedback, ensure retention',
          priority: 'medium',
          timeline: 'Month 6',
        },
      ],
      mvp_team: {
        roles: [
          'Founder (product + sales)',
          'Full-stack Engineer (contract)',
          'AI/ML Engineer (contract)',
          'Dental Advisor (equity)',
        ],
        estimated_cost: 25000, // $25K/month
        equity_budget: 5, // 5% for early team
      },
      advisor_needs: [
        {
          expertise: 'Dental practice operations',
          contribution: 'Product validation, pilot practice recruitment, industry credibility',
        },
        {
          expertise: 'Healthcare SaaS sales',
          contribution: 'Go-to-market strategy, dental conference connections, channel partnerships',
        },
      ],
    },

    // SECTION 12: Key Questions
    key_questions: {
      questions: [
        {
          question: 'Will dental practices trust AI recommendations for patient scheduling?',
          category: 'product',
          risk_level: 'fatal',
          validation_method: 'Run 30-day pilot with 3 practices. Show AI recommendations alongside human decisions. Measure override rate (target: <20%).',
          estimated_cost: '2 weeks, $2K in pilot incentives',
        },
        {
          question: 'Can we access Dentrix/Eaglesoft APIs without lengthy certification?',
          category: 'product',
          risk_level: 'fatal',
          validation_method: 'Contact Dentrix developer relations. Request API documentation and partnership requirements. Build proof-of-concept integration.',
          estimated_cost: '1 week, $0',
        },
        {
          question: 'What is the true customer acquisition cost in dental?',
          category: 'business_model',
          risk_level: 'important',
          validation_method: 'Run $5K Google Ads campaign targeting "dental scheduling software". Measure cost per qualified lead and conversion rate.',
          estimated_cost: '$5K ad spend + 2 weeks',
        },
        {
          question: 'Will practices pay $200-300/month for AI scheduling alone?',
          category: 'business_model',
          risk_level: 'important',
          validation_method: 'Offer 3 pricing tiers to pilot practices: $150, $250, $350. Measure feature usage correlation with price point.',
          estimated_cost: 'Include in pilot program',
        },
        {
          question: 'Can AI reduce no-show rate from 25% to 10%?',
          category: 'product',
          risk_level: 'important',
          validation_method: 'Measure baseline no-show rate for 30 days, enable AI, measure for 60 days. Need 3+ practices for statistical significance.',
          estimated_cost: '90 days, included in pilot',
        },
        {
          question: 'Is SMS the right channel, or do patients prefer app notifications?',
          category: 'product',
          risk_level: 'minor',
          validation_method: 'A/B test: 50% SMS, 50% push notifications. Measure open rate, engagement, no-show rate.',
          estimated_cost: '4 weeks, $500',
        },
      ],
    },

    // SECTION 13: Resources & Links
    resources: {
      categories: [
        {
          category: 'Market Research',
          links: [
            {
              title: 'Global Dental Software Market Report 2024',
              url: 'https://www.statista.com/statistics/dental-software-market',
              description: 'Comprehensive market sizing and trends for dental practice management software',
              relevance: 'high',
            },
            {
              title: 'Dental Practice Management Software Analysis 2023-28',
              url: 'https://www.grandviewresearch.com/dental-software',
              description: 'Detailed analysis of competitive landscape, growth drivers, and regional breakdowns',
              relevance: 'high',
            },
            {
              title: '2024 Dental Technology Trends',
              url: 'https://www.dentaleconomics.com/tech-trends-2024',
              description: 'Industry trends, AI adoption, and practice technology spending',
              relevance: 'high',
            },
          ],
        },
        {
          category: 'Competitors',
          links: [
            {
              title: 'Dentrix Product Overview',
              url: 'https://www.dentrix.com',
              description: 'Market leader features and pricing',
              relevance: 'high',
            },
            {
              title: 'Eaglesoft Features',
              url: 'https://www.eaglesoft.com',
              description: 'Competitor analysis and feature comparison',
              relevance: 'high',
            },
            {
              title: 'Curve Dental (Cloud-based)',
              url: 'https://www.curvedental.com',
              description: 'Modern competitor with cloud-native architecture',
              relevance: 'medium',
            },
          ],
        },
        {
          category: 'Technical',
          links: [
            {
              title: 'Twilio SMS API Documentation',
              url: 'https://www.twilio.com/docs/sms',
              description: 'SMS delivery service for patient reminders',
              relevance: 'high',
            },
            {
              title: 'OpenAI GPT-4 API',
              url: 'https://platform.openai.com/docs',
              description: 'AI chatbot for rescheduling automation',
              relevance: 'high',
            },
            {
              title: 'HIPAA Compliance Checklist',
              url: 'https://www.hhs.gov/hipaa/for-professionals/security/guidance/cybersecurity/index.html',
              description: 'Healthcare data security requirements',
              relevance: 'high',
            },
          ],
        },
        {
          category: 'Industry News',
          links: [
            {
              title: 'DentalTown Community Forum',
              url: 'https://www.dentaltown.com',
              description: 'Dental professional discussions on practice management pain points',
              relevance: 'medium',
            },
            {
              title: 'American Dental Association (ADA)',
              url: 'https://www.ada.org',
              description: 'Industry association, conferences, credibility',
              relevance: 'medium',
            },
          ],
        },
      ],
    },

    // SECTION 14: Financial Projections
    financials: {
      scenarios: [
        {
          scenario: 'conservative',
          assumptions: [
            '15 practices by Year 1',
            '$200 average revenue per practice',
            'CAC $400, retention 70%',
          ],
          year_1: {
            revenue: 36000, // 15 × $200 × 12
            costs: 180000, // $25K/mo team + $5K/mo infra
            profit: -144000,
          },
          year_2: {
            revenue: 216000, // 90 practices
            costs: 420000, // $30K/mo team + $5K/mo infra
            profit: -204000,
          },
          year_3: {
            revenue: 720000, // 300 practices
            costs: 600000, // $45K/mo team + $5K/mo infra
            profit: 120000,
          },
        },
        {
          scenario: 'realistic',
          assumptions: [
            '30 practices by Year 1',
            '$220 average revenue per practice',
            'CAC $350, retention 80%',
          ],
          year_1: {
            revenue: 79200, // 30 × $220 × 12
            costs: 180000,
            profit: -100800,
          },
          year_2: {
            revenue: 528000, // 200 practices
            costs: 420000,
            profit: 108000,
          },
          year_3: {
            revenue: 1848000, // 700 practices
            costs: 720000,
            profit: 1128000,
          },
        },
        {
          scenario: 'optimistic',
          assumptions: [
            '50 practices by Year 1',
            '$250 average revenue per practice',
            'CAC $300, retention 85%',
          ],
          year_1: {
            revenue: 150000, // 50 × $250 × 12
            costs: 180000,
            profit: -30000,
          },
          year_2: {
            revenue: 900000, // 300 practices
            costs: 480000,
            profit: 420000,
          },
          year_3: {
            revenue: 3000000, // 1000 practices
            costs: 960000,
            profit: 2040000,
          },
        },
      ],
      break_even: {
        month: 18,
        customers_needed: 90,
        assumptions: [
          '$250/month ARPU',
          '$30K/month burn rate',
          '80% gross margin',
        ],
      },
      funding_needed: {
        amount: 500000,
        use_of_funds: [
          { category: 'Team (18 months runway)', amount: 360000 },
          { category: 'Infrastructure & tools', amount: 50000 },
          { category: 'Marketing & sales', amount: 60000 },
          { category: 'Legal & compliance (HIPAA)', amount: 20000 },
          { category: 'Buffer', amount: 10000 },
        ],
        runway: 18,
      },
    },
  },

  // Citations (all sources)
  citations: [
    {
      id: 1,
      title: 'Global Dental Software Market 2024',
      url: 'https://www.statista.com/statistics/dental-software-market',
      source_type: 'report',
      accessed_date: '2024-02-10',
      snippet: 'The global dental software market is valued at $2.1 billion in 2024',
    },
    {
      id: 2,
      title: 'Dental Practice Management Software Analysis 2023-28',
      url: 'https://www.grandviewresearch.com/dental-software',
      source_type: 'report',
      accessed_date: '2024-02-10',
    },
    {
      id: 3,
      title: '2024 Dental Technology Trends Report',
      url: 'https://www.dentaleconomics.com/tech-trends-2024',
      source_type: 'article',
      accessed_date: '2024-02-10',
    },
    {
      id: 4,
      title: 'Dentrix API Documentation',
      url: 'https://www.dentrix.com/developers',
      source_type: 'company_website',
      accessed_date: '2024-02-10',
    },
  ],

  // Verification result
  verification_result: {
    verified: true,
    missing_sections: [],
    warnings: [
      'Section 11 (Team & Hiring): No founder dental experience mentioned',
      'Section 12 (Key Questions): Dentrix API access confirmation needed',
    ],
    section_mappings: {
      1: { agent: 'ExtractorAgent', has_citations: false, word_count: 120, completeness: 'complete' },
      2: { agent: 'ExtractorAgent', has_citations: false, word_count: 180, completeness: 'complete' },
      3: { agent: 'ResearchAgent', has_citations: true, word_count: 250, completeness: 'complete' },
      4: { agent: 'CompetitorAgent', has_citations: true, word_count: 420, completeness: 'complete' },
      5: { agent: 'ComposerAgent', has_citations: false, word_count: 320, completeness: 'complete' },
      6: { agent: 'MVPAgent', has_citations: false, word_count: 380, completeness: 'complete' },
      7: { agent: 'ComposerAgent', has_citations: false, word_count: 210, completeness: 'complete' },
      8: { agent: 'ScoringAgent', has_citations: false, word_count: 450, completeness: 'complete' },
      9: { agent: 'MVPAgent', has_citations: false, word_count: 280, completeness: 'complete' },
      10: { agent: 'ComposerAgent', has_citations: false, word_count: 220, completeness: 'complete' },
      11: { agent: 'ComposerAgent', has_citations: false, word_count: 190, completeness: 'complete' },
      12: { agent: 'ComposerAgent', has_citations: false, word_count: 340, completeness: 'complete' },
      13: { agent: 'ResearchAgent', has_citations: true, word_count: 160, completeness: 'complete' },
      14: { agent: 'ComposerAgent', has_citations: false, word_count: 290, completeness: 'complete' },
    },
    quality_score: 94,
  },

  created_at: '2024-02-10T14:23:00Z',
  updated_at: '2024-02-10T14:24:12Z',
};

// ============================================
// MOCK EXECUTION TRACE
// ============================================

export const mockExecutionTrace: ExecutionTrace = {
  total_duration_ms: 72100,
  agents: [
    {
      agent: 'ExtractorAgent',
      model: 'gemini-3-flash',
      duration_ms: 5200,
      input_tokens: 1240,
      output_tokens: 680,
      sections_produced: [1, 2, 3],
      metadata: {
        extraction_method: 'structured_parsing',
        confidence: 0.92,
      },
    },
    {
      agent: 'ResearchAgent',
      model: 'gemini-3-pro',
      duration_ms: 18400,
      input_tokens: 890,
      output_tokens: 1520,
      sections_produced: [3, 13],
      metadata: {
        search_queries: ['dental software market size', 'SMB dental TAM', 'dental practice management trends'],
        sources_found: 12,
        citations_used: 3,
      },
    },
    {
      agent: 'CompetitorAgent',
      model: 'gemini-3-pro',
      duration_ms: 19100,
      input_tokens: 920,
      output_tokens: 2140,
      sections_produced: [4],
      metadata: {
        competitors_found: 4,
        feature_comparison_matrix: '6x5',
        positioning_map_generated: true,
      },
    },
    {
      agent: 'ScoringAgent',
      model: 'gemini-3-flash',
      duration_ms: 12300,
      input_tokens: 1450,
      output_tokens: 890,
      sections_produced: [8],
      metadata: {
        scoring_dimensions: 7,
        overall_score: 72,
        verdict: 'GO',
      },
    },
    {
      agent: 'MVPAgent',
      model: 'gemini-3-flash',
      duration_ms: 10800,
      input_tokens: 1100,
      output_tokens: 1340,
      sections_produced: [6, 9],
      metadata: {
        phases_defined: 3,
        total_features: 14,
        tech_stack_items: 12,
      },
    },
    {
      agent: 'ComposerAgent',
      model: 'gemini-3-pro',
      duration_ms: 38200,
      input_tokens: 4280,
      output_tokens: 6840,
      sections_produced: [5, 7, 10, 11, 12, 14],
      metadata: {
        sections_composed: 6,
        total_words: 2850,
        max_output_tokens: 8192,
      },
    },
    {
      agent: 'VerifyAgent',
      model: 'gemini-3-flash',
      duration_ms: 600,
      input_tokens: 8920,
      output_tokens: 120,
      sections_produced: [],
      metadata: {
        sections_verified: 14,
        citations_checked: 4,
        warnings_generated: 2,
        quality_score: 94,
      },
    },
  ],
};

// ============================================
// MOCK PIPELINE PROGRESS (for run page)
// ============================================

export const mockPipelineProgress: PipelineProgress = {
  status: 'complete',
  progress: 100,
  estimated_time_remaining: 0,
  steps: [
    {
      step: 1,
      name: 'Extract Profile',
      agent: 'extractor',
      status: 'ok',
      duration_ms: 5200,
      progress_text: 'Extracted: problem, customer, market',
    },
    {
      step: 2,
      name: 'Market Research',
      agent: 'research',
      status: 'ok',
      duration_ms: 18400,
      progress_text: 'Found 3 market reports, 12 data points',
    },
    {
      step: 3,
      name: 'Competitor Analysis',
      agent: 'competitors',
      status: 'ok',
      duration_ms: 19100,
      progress_text: 'Analyzed 4 direct competitors, created positioning map',
    },
    {
      step: 4,
      name: 'Scoring',
      agent: 'scoring',
      status: 'ok',
      duration_ms: 12300,
      progress_text: 'Calculated 7-dimension score: 72/100',
    },
    {
      step: 5,
      name: 'MVP Plan',
      agent: 'mvp',
      status: 'ok',
      duration_ms: 10800,
      progress_text: 'Defined 3-phase MVP, 14 features',
    },
    {
      step: 6,
      name: 'Compose Report',
      agent: 'composer',
      status: 'ok',
      duration_ms: 38200,
      progress_text: 'Generated 6 sections, 2850 words',
    },
    {
      step: 7,
      name: 'Verification',
      agent: 'verifier',
      status: 'ok',
      duration_ms: 600,
      progress_text: 'Verified 14/14 sections, quality score: 94/100',
    },
  ],
  report_id: 'report-dental-001',
  error_message: null,
};

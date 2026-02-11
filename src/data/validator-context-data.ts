// Validator Context Panel Data
// AI-generated insights for all 14 report sections
// 4 blocks per section: More Detail, Why This Matters, Risks & Gaps, Validate Next

import type { PanelDetailResponse } from './validator-types';

export const mockContextData: Record<number, PanelDetailResponse> = {
  // SECTION 1: Problem Clarity
  1: {
    section: 1,
    more_detail: 'The $200 lost revenue per unfilled slot compounds across practices with 4-6 chairs operating 8 hours daily. No-show rates of 20-30% translate to 8-12 empty slots per day per practice. Manual confirmation calls consume 2-3 hours of front desk time daily, creating opportunity cost beyond direct revenue loss. Current systems lack predictive intelligence to identify high-risk appointments before they become no-shows.',
    why_matters: 'Problem severity directly correlates with willingness to pay. Quantified pain points ($250K annual loss) enable value-based pricing. Deep problem validation reduces customer education burden during sales.',
    risks_gaps: [
      'Problem magnitude based on single market ($200/slot) - may vary by geography',
      'No-show rate (20-30%) needs validation across practice sizes',
      'Current solution inadequacy assumes practices have tried alternatives',
      'Manual call time (2-3hrs) not validated with time-motion study',
    ],
    validate_next: [
      'Survey 50 practices: measure actual no-show rate and lost revenue',
      'Time-track front desk staff for 5 days to quantify manual effort',
      'Interview 10 practices that tried Calendly/Dentrix - why did they fail?',
    ],
    generated_at: '2024-02-10T14:24:00Z',
  },

  // SECTION 2: Customer & Use Case
  2: {
    section: 2,
    more_detail: 'Independent dental practices (1-5 dentists) represent 68% of US dental market but are underserved by enterprise software like Dentrix ($500+/mo). Primary persona: practice owner/office manager, age 35-55, tech-savvy but time-constrained. Decision cycle: 30-day trial standard, annual contracts preferred. Buying triggers: staff turnover, patient complaints, revenue decline. Secondary markets (DSOs, specialists) offer expansion path but require different feature sets (multi-location, complex scheduling).',
    why_matters: 'ICP clarity drives all go-to-market decisions: pricing, messaging, channel strategy. SMB focus enables bootstrapping (shorter sales cycles, lower CAC). Dental-specific use cases create defensibility vs generic scheduling tools.',
    risks_gaps: [
      'ICP based on founder assumptions, not customer development interviews',
      'Buying process assumes direct sales - channel partnerships unexplored',
      'Secondary customers (DSOs) may require enterprise features beyond MVP',
      'No mention of patient-facing use cases (self-scheduling)',
    ],
    validate_next: [
      'Interview 20 practices: map buying journey from awareness to purchase',
      'Shadow 3 office managers for a day to understand scheduling workflow',
      'Test messaging with 5 practices: does "AI scheduling" resonate or scare?',
    ],
    generated_at: '2024-02-10T14:24:05Z',
  },

  // SECTION 3: Market Sizing
  3: {
    section: 3,
    more_detail: 'TAM ($2.1B global dental software) represents entire practice management market, not just scheduling. SAM calculation ($420M = US × SMB segment) assumes 40% US market share and 50% SMB penetration. SOM ($8.4M = 2% capture) based on 3,500 practices at $200/mo ARPU. Growth rate (3.2% CAGR) driven by dental practice growth, technology adoption, and AI integration. Market dynamics: consolidation (DSOs acquiring independents), cloud migration, mobile-first demands.',
    why_matters: 'TAM validation confirms venture-scale opportunity ($100M+ exit potential). SAM sizing guides realistic revenue targets and fundraising asks. SOM calculation tests achievability - 2% capture requires clear competitive advantage.',
    risks_gaps: [
      'SAM relies on single Statista source - cross-validation needed',
      'No regional breakdown (urban vs rural adoption rates differ)',
      'Growth rate extrapolated from 2021-2023 data, may not reflect AI disruption',
      'SOM assumes linear growth - distribution strategy not detailed',
    ],
    validate_next: [
      'Cross-validate TAM with 3+ industry reports (Grand View, McKinsey, Gartner)',
      'Survey 100 practices: willingness to pay $200-300/mo for AI scheduling',
      'Model bottom-up SAM: count practices in top 50 US cities',
    ],
    generated_at: '2024-02-10T14:24:10Z',
  },

  // SECTION 4: Competition
  4: {
    section: 4,
    more_detail: 'Competitive landscape dominated by legacy players (Dentrix 40%, Eaglesoft 15%) with high switching costs but weak AI capabilities. Emerging cloud competitors (Curve, Weave) have modern UX but limited AI. Indirect competition from generic tools (Calendly, Google Calendar) lack dental-specific logic. Feature gap analysis shows AI scheduling, no-show prediction, and waitlist automation are unaddressed. Positioning opportunity: premium AI layer for existing systems vs full-stack replacement.',
    why_matters: 'Competitive moat determines defensibility and pricing power. Weak moat = commoditization and price competition. Strong moat (AI + data network effects) enables premium pricing and VC fundability.',
    risks_gaps: [
      'Competitor analysis based on public info, not hands-on product testing',
      'Dentrix could launch AI features - no timeline or insider intelligence',
      'Integration strategy unclear: partner with incumbents or compete directly?',
      'Feature matrix assumes features are equally valuable - needs customer validation',
    ],
    validate_next: [
      'Sign up for Dentrix/Eaglesoft trials - test actual scheduling workflows',
      'Contact Dentrix product team: ask about AI roadmap timeline',
      'Interview 10 practices using Dentrix: what would make them switch?',
      'Test "AI scheduling add-on" positioning vs "full replacement" with 20 prospects',
    ],
    generated_at: '2024-02-10T14:24:15Z',
  },

  // SECTION 5: Risks & Assumptions
  5: {
    section: 5,
    more_detail: 'Top risks cluster around competitive response (Dentrix launches AI), trust erosion (AI hallucinations damage reputation), and unit economics (CAC exceeds $500). Risk severity weighted by likelihood and time horizon. Critical assumptions: user trust in AI during stressful situations, real-time venue data availability, and pricing validation. Mitigation strategies focus on speed to market, human-in-the-loop systems, and B2B distribution channels.',
    why_matters: 'Risk identification demonstrates founder realism and preparedness for investor diligence. Assumption testing roadmap shows scientific approach to validation. Clear mitigation strategies reduce perceived execution risk.',
    risks_gaps: [
      'Risk likelihood estimates lack supporting data or benchmarks',
      'No mention of regulatory risks (HIPAA compliance, data privacy)',
      'Assumption testing methods described but not costed or scheduled',
      'Missing technology risks (API rate limits, SMS delivery failures)',
    ],
    validate_next: [
      'Run pre-mortem exercise: "It\'s 2026, we failed. Why?" to surface blind spots',
      'Build assumption testing budget: allocate $10K for validation experiments',
      'Research HIPAA compliance costs: legal review, BAA agreements, audit prep',
    ],
    generated_at: '2024-02-10T14:24:20Z',
  },

  // SECTION 6: MVP Scope
  6: {
    section: 6,
    more_detail: 'MVP follows phased approach: Phase 1 (8 weeks) builds core scheduling engine with SMS reminders, Phase 2 (6 weeks) adds Dentrix integration and advanced AI, Phase 3 (6 weeks) adds insurance automation and self-scheduling. MoSCoW prioritization: must-have features tested first, should-have features added iteratively, could-have features deferred. Success criteria tied to user retention (80% would recommend), system performance (95%+ SMS delivery), and business metrics ($40K MRR by Phase 2).',
    why_matters: 'MVP scope determines time to market and capital efficiency. Phased approach enables early revenue and customer feedback loops. Clear success criteria prevent scope creep and enable data-driven pivots.',
    risks_gaps: [
      'MVP timeline (8 weeks Phase 1) assumes experienced team - hiring plan unclear',
      'Dentrix API integration feasibility unproven - could block Phase 2',
      'Success criteria measurable but thresholds (80% recommend, <5min response) not validated',
      'No mention of MVP platform decision (web, mobile, WhatsApp)',
    ],
    validate_next: [
      'Build "Wizard of Oz" WhatsApp MVP in 2 weeks - test with 5 practices',
      'Contact Dentrix developer relations: confirm API access and timeline',
      'Shadow front desk staff: time key workflows to set performance baselines',
    ],
    generated_at: '2024-02-10T14:24:25Z',
  },

  // SECTION 7: Next Steps
  7: {
    section: 7,
    more_detail: 'Immediate actions (this week) focus on customer validation: survey 20 practices, verify pricing, and contact Dentrix. Short-term (1-4 weeks) builds proof-of-concept and recruits beta users. Medium-term (1-3 months) launches MVP and measures impact. Action sequencing prioritizes de-risking fatal assumptions before building. Resource allocation: founder time (customer development), engineering (POC), capital ($5K for pilots).',
    why_matters: 'Clear next steps demonstrate execution readiness and enable team alignment. Prioritized actions maximize learning per dollar spent. Timeline shows realistic path from validation to revenue.',
    risks_gaps: [
      'Action ownership vague - "Founder" and "Tech Lead" roles undefined',
      'No budget allocated for customer development (travel, incentives, tools)',
      'Timeline assumes full-time commitment - part-time founder constraints not addressed',
      'Missing quick win: could launch landing page for email signups today',
    ],
    validate_next: [
      'Create Week 1 sprint plan: 5 customer interviews + Dentrix contact + landing page',
      'Allocate $2K budget: $1K for pilot incentives, $1K for tools (Twilio, Calendly)',
      'Define success metrics for Month 1: 20 interviews, 3 beta signups, API access confirmed',
    ],
    generated_at: '2024-02-10T14:24:30Z',
  },

  // SECTION 8: Scores Matrix
  8: {
    section: 8,
    more_detail: 'Overall score (72/100) aggregates 7 weighted dimensions: Market Opportunity (78, 25% weight), Problem Clarity (85, 15%), Solution Fit (75, 15%), Competitive Moat (62, 10%), Execution Feasibility (80, 20%), Founder Advantage (55, 10%), Innovation Potential (68, 5%). Verdict "GO" indicates strong fundamentals with manageable risks. Weak dimensions: Competitive Moat (risk of Dentrix response) and Founder Advantage (no dental experience). Strong dimensions: Problem Clarity (validated pain) and Execution Feasibility (buildable MVP).',
    why_matters: 'Scoring methodology provides objective framework for go/no-go decisions. Weighted dimensions reflect investor priorities (market > innovation). Sub-scores identify specific improvement areas (domain expertise, data moat).',
    risks_gaps: [
      'Scoring rubric subjective - no benchmark comparison to successful dental startups',
      'Founder Advantage (55) flags lack of domain expertise - critical for sales',
      'Competitive Moat (62) suggests weak defensibility - could limit VC interest',
      'Innovation score (68) implies incremental vs breakthrough - may limit upside',
    ],
    validate_next: [
      'Recruit dental advisor/co-founder to close expertise gap (boost Founder score to 75+)',
      'Define data moat strategy: proprietary dataset of 100K appointments by Year 2',
      'Research breakthrough features: real-time chair optimization, dynamic pricing',
    ],
    generated_at: '2024-02-10T14:24:35Z',
  },

  // SECTION 9: Technology Stack
  9: {
    section: 9,
    more_detail: 'Frontend (React + TypeScript + Tailwind) enables fast iteration with large talent pool. Backend (Node.js + PostgreSQL) optimized for API integrations (Dentrix, Twilio, OpenAI). AI layer (Python + scikit-learn) for no-show prediction model. Infrastructure (AWS with HIPAA BAA) meets compliance requirements. Third-party dependencies: Twilio ($200/mo SMS), OpenAI ($300/mo chatbot), Dentrix API (cost TBD), Google Maps ($100/mo). Total estimated cost: $600-800/mo + team salaries ($25K/mo).',
    why_matters: 'Tech stack determines development speed, talent availability, and operational costs. HIPAA-compliant infrastructure non-negotiable for healthcare. Dependency risks (Dentrix API access, OpenAI rate limits) could block launch.',
    risks_gaps: [
      'Dentrix API access unconfirmed - could require lengthy certification process',
      'HIPAA compliance costs underestimated - legal review, security audits add $20K+',
      'AI model accuracy assumptions (70%+ no-show prediction) not validated',
      'SMS delivery in rural areas with poor cell coverage not addressed',
    ],
    validate_next: [
      'Build Twilio SMS POC in 1 week - test delivery rates in 3 geographic regions',
      'Consult healthcare attorney: scope HIPAA compliance requirements and costs',
      'Train baseline no-show prediction model on public dental datasets (if available)',
    ],
    generated_at: '2024-02-10T14:24:40Z',
  },

  // SECTION 10: Revenue Model
  10: {
    section: 10,
    more_detail: 'SaaS model with per-chair pricing: Starter ($149, 2 chairs), Professional ($249, 5 chairs), Enterprise ($499, unlimited). Unit economics: CAC $350, LTV $7,140 (30-month retention), LTV:CAC ratio 20.4x (excellent, >3 is good), payback 1.4 months. Revenue mix: 85% subscriptions, 10% SMS overage, 5% setup fees. Pricing validated through competitor benchmarking (Dentrix $500+, Curve $300-450) but not customer willingness-to-pay surveys.',
    why_matters: 'SaaS model provides predictable recurring revenue valued by investors. Strong unit economics (20x LTV:CAC, 1.4mo payback) enable capital-efficient growth. Per-chair pricing aligns value with practice size.',
    risks_gaps: [
      'Pricing assumptions ($200-300/mo) not validated with target customers',
      'LTV calculation (30-month retention) aspirational - dental software churn typically 15-20% annually',
      'CAC estimate ($350) assumes direct sales - channel partnerships may increase to $500+',
      'No mention of freemium/trial strategy to reduce sales friction',
    ],
    validate_next: [
      'Van Westendorp pricing survey with 50 practices: test $150/$250/$350 price points',
      'Interview 10 practices using competitors: what would make them switch? At what price?',
      'Model CAC by channel: Google Ads ($400-600), dental conferences ($200-300), referrals ($100-150)',
    ],
    generated_at: '2024-02-10T14:24:45Z',
  },

  // SECTION 11: Team & Hiring
  11: {
    section: 11,
    more_detail: 'Critical hires: Dental Industry Advisor (Month 1, equity-based), Full-stack Engineer (Month 1, $120K), AI/ML Engineer (Month 2, $140K contract), Product Designer (Month 3, $80K contract). MVP team burn rate: $25K/month. Equity budget: 5% for early team. Advisor needs: dental operations expert (product validation, practice recruitment) and healthcare SaaS sales (GTM strategy, conference connections). Founder gaps: no dental industry experience, no prior healthcare startup experience.',
    why_matters: 'Team gaps directly impact execution risk and fundraising viability. Dental advisor critical for product-market fit and sales credibility. Technical team (full-stack + AI) determines MVP timeline and quality.',
    risks_gaps: [
      'Founder dental experience gap is critical - hard to sell without domain credibility',
      'Advisor equity budget (5%) may be insufficient to attract experienced dental professionals',
      'Hiring timeline assumes immediate availability - engineering talent shortage could delay',
      'Customer Success role deferred to Month 6 - early churn risk without onboarding support',
    ],
    validate_next: [
      'Network into dental communities: attend DentalTown Summit, join ADA groups',
      'Recruit dental advisor immediately: offer 2-3% equity + $2K/mo advisory fee',
      'Post full-stack role on AngelList, Indie Hackers: target React + healthcare experience',
    ],
    generated_at: '2024-02-10T14:24:50Z',
  },

  // SECTION 12: Key Questions
  12: {
    section: 12,
    more_detail: 'Six key questions span product risk (AI trust, API access, no-show reduction), business model risk (CAC, pricing), and execution risk (channel selection). Fatal risks (AI trust, API access) must be validated before MVP investment. Important risks (CAC, pricing) impact unit economics and scalability. Minor risks (SMS vs push notifications) can be tested during beta. Validation methods range from pilots ($2K, 2 weeks) to ad campaigns ($5K, 2 weeks) to A/B tests (included in pilot).',
    why_matters: 'Explicit question framing demonstrates scientific approach to validation. Risk categorization (fatal/important/minor) enables resource prioritization. Cost and timeline estimates make validation roadmap actionable.',
    risks_gaps: [
      'Questions focus on known unknowns - missing unknown unknowns (use pre-mortem)',
      'Validation costs ($5K for ads, $2K for pilots) seem low - may underestimate',
      'No questions about regulatory compliance (HIPAA), partnership strategy, or team gaps',
      'Success criteria for each question not defined (e.g., what CAC is acceptable?)',
    ],
    validate_next: [
      'Prioritize question validation: fatal risks first (API access, AI trust), then important',
      'Run lean experiments: spend $500 on Google Ads before committing $5K',
      'Add questions about HIPAA compliance costs and timeline to de-risk legal blockers',
    ],
    generated_at: '2024-02-10T14:24:55Z',
  },

  // SECTION 13: Resources & Links
  13: {
    section: 13,
    more_detail: 'Resource library organized by category: Market Research (Statista, Grand View Research), Competitors (Dentrix, Eaglesoft, Curve), Technical (Twilio SMS, OpenAI API, HIPAA guidance), Industry News (DentalTown forum, ADA website). High-relevance resources (market reports, competitor sites, technical docs) essential for validation. Medium-relevance resources (industry forums, associations) useful for networking and credibility. Resource gaps: no customer development tools (UserInterviews, Calendly), no competitive intelligence platforms (SimilarWeb, BuiltWith).',
    why_matters: 'Curated resources accelerate self-serve validation and reduce information search costs. Market reports provide authoritative data for pitch decks. Technical documentation enables feasibility assessment before engineering hire.',
    risks_gaps: [
      'Resource list incomplete - missing tools for customer development (UserInterviews, Typeform)',
      'No dental-specific publications or influencers listed (Dental Economics, Howard Farran)',
      'Competitor intelligence limited to public websites - need SimilarWeb, BuiltWith for traffic data',
      'No startup resources: YC library, Lenny\'s Newsletter, SaaS metrics benchmarks',
    ],
    validate_next: [
      'Subscribe to Dental Economics and DentalTown for industry insights',
      'Use SimilarWeb to analyze Dentrix and Curve traffic sources (SEO, paid, direct)',
      'Join dental Facebook groups and LinkedIn communities to understand practitioner pain points',
    ],
    generated_at: '2024-02-10T14:25:00Z',
  },

  // SECTION 14: Financial Projections
  14: {
    section: 14,
    more_detail: 'Three scenarios model uncertainty: Conservative (15 practices Y1 → 300 Y3, -$144K → +$120K profit), Realistic (30 → 700, -$101K → +$1.1M), Optimistic (50 → 1000, -$30K → +$2M). Break-even at Month 18 with 90 practices. Funding need: $500K for 18-month runway ($360K team, $50K infra, $60K marketing). Scenarios assume 70-85% retention and $350-$400 CAC. Conservative case provides downside protection, realistic case supports $5-10M Series A valuation.',
    why_matters: 'Financial projections demonstrate business viability and capital efficiency. Multiple scenarios show risk awareness and planning rigor. 18-month runway targets Series A fundraising milestone.',
    risks_gaps: [
      'Projections lack sensitivity analysis - what if CAC is $600 or retention is 60%?',
      'Revenue ramp (15 → 90 practices in 18 months) requires aggressive sales - channel strategy undefined',
      'Break-even at Month 18 assumes flawless execution - risk buffer insufficient',
      'No mention of follow-on funding strategy if growth exceeds plan (Series A at Month 18)',
    ],
    validate_next: [
      'Build financial model with sensitivity analysis: test CAC ($300-$600), retention (60-85%)',
      'Define sales capacity: how many practices can founder close per month? When to hire SDR?',
      'Model Series A scenario: if realistic case, raise $3M at $15M valuation in Month 18',
    ],
    generated_at: '2024-02-10T14:25:05Z',
  },
};

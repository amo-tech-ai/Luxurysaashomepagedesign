/**
 * AI Readiness Canvas - Sample Data
 * Use Case: SaaS Startup - Customer Support Automation with AI
 */

import type { 
  AIReadinessCanvas,
  AISuggestion,
  ReadinessScore
} from './ai-readiness-types';

// ============================================================================
// SAMPLE CANVAS: Customer Support Automation with AI
// ============================================================================

export const SAMPLE_AI_READINESS_CANVAS: AIReadinessCanvas = {
  id: 'ai-canvas-001',
  startup_id: 'startup-001',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  
  // #1 AI VISION & BUSINESS OUTCOMES
  ai_vision: {
    vision_statement: 'Transform customer support from reactive cost center to proactive revenue driver through AI-powered automation and insights.',
    business_outcomes: [
      'Reduce support costs by 40% within 12 months',
      'Improve customer satisfaction (CSAT) from 78% to 92%',
      'Scale support capacity 3x without adding headcount',
      'Unlock $2M+ annual revenue from proactive upsell insights',
      'Enter new market segment (SMB) with self-service AI support'
    ],
    competitive_advantage: 'First in our vertical to offer instant 24/7 multilingual support with human-level accuracy. Differentiate on "AI-first CX" positioning.',
    transformational_opportunities: [
      'Shift brand positioning from "tool" to "intelligent partner"',
      'Launch AI-as-a-Service white-label product for partners',
      'Create data flywheel: more customers → better AI → better product → more customers'
    ],
    timeline: '18-month roadmap (Q1 2026-Q2 2027)',
    target_metrics: {
      cost_reduction_percentage: 40,
      revenue_increase: 2000000,
      customer_satisfaction_improvement: 18,
      capacity_multiplier: 3
    }
  },
  
  // #2 AI VALUE PROPOSITION
  value_proposition: {
    customer_benefits: [
      'Instant answers 24/7 (no wait times)',
      'Multilingual support (10 languages, automatic)',
      'Consistent quality (90%+ accuracy vs 78% today)',
      'Personalized recommendations based on history',
      'Proactive outreach (AI detects issues early)'
    ],
    business_benefits: [
      '$800K annual cost savings (headcount, tools)',
      '3x capacity: Handle 10K→30K tickets/month',
      '$2M revenue from AI-detected upsell triggers',
      'Enter SMB market (new $5M ARR opportunity)',
      'Competitive moat: AI-first positioning'
    ],
    new_products_services: [
      'AI Support API: White-label for partners ($200/mo per partner)',
      'Premium tier: "AI Concierge" (+$50/user/mo)',
      'Data insights dashboard for enterprise clients'
    ],
    unique_differentiation: [
      'Only vertical SaaS with industry-trained LLM',
      '"AI Trust Score" transparency (explainability)',
      'Human-in-loop for complex issues (hybrid model)'
    ],
    customer_problems_solved: [
      {
        pain_point: 'I can\'t get help outside business hours',
        ai_solution: 'AI chatbot handles 90% of Tier-1 tickets 24/7'
      },
      {
        pain_point: 'Support quality varies by agent',
        ai_solution: 'AI ensures consistent, accurate answers across all interactions'
      }
    ]
  },
  
  // #3 KEY USE CASES & PRIORITISATION
  key_use_cases: {
    use_cases: [
      {
        id: 'uc-001',
        name: 'AI Chatbot for Tier-1 Support',
        description: 'FAQ, billing questions, and intelligent routing',
        priority: 'high',
        timeframe: 'Q1-Q2 2026',
        impact_score: 5,
        impact_rationale: '70% ticket deflection, $800K cost savings',
        feasibility_score: 4,
        feasibility_rationale: 'Existing training data (2M tickets), off-the-shelf LLM',
        viability_score: 5,
        viability_rationale: 'ROI in <6 months, proven technology',
        status: 'in-progress',
        roi_estimate: 234
      },
      {
        id: 'uc-002',
        name: 'Sentiment Analysis on Support Tickets',
        description: 'Identify escalation risks and customer churn signals',
        priority: 'high',
        timeframe: 'Q1-Q2 2026',
        impact_score: 4,
        impact_rationale: 'Prevent $500K annual churn, improve CSAT by 10%',
        feasibility_score: 5,
        feasibility_rationale: 'Off-the-shelf sentiment models, minimal training',
        viability_score: 4,
        viability_rationale: 'Low cost ($500/mo), quick win (4-week deployment)',
        status: 'not-started',
        roi_estimate: 2000
      },
      {
        id: 'uc-003',
        name: 'AI-Powered Knowledge Base Auto-Generation',
        description: 'Automatically create and update help articles from ticket patterns',
        priority: 'medium',
        timeframe: 'Q3-Q4 2026',
        impact_score: 4,
        impact_rationale: 'Reduce documentation effort by 60%, improve findability',
        feasibility_score: 3,
        feasibility_rationale: 'Requires RAG implementation, content review workflow',
        viability_score: 3,
        viability_rationale: 'Longer ROI timeline (12 months), higher setup cost',
        status: 'not-started',
        roi_estimate: 150
      },
      {
        id: 'uc-004',
        name: 'Predictive Churn Detection',
        description: 'ML model to identify at-risk customers from support patterns',
        priority: 'medium',
        timeframe: 'Q3-Q4 2026',
        impact_score: 5,
        impact_rationale: 'Prevent $500K annual churn (35% of at-risk customers)',
        feasibility_score: 2,
        feasibility_rationale: 'Complex ML model, significant data preparation needed',
        viability_score: 4,
        viability_rationale: 'High value, but higher risk and longer timeline',
        status: 'not-started',
        roi_estimate: 250
      },
      {
        id: 'uc-005',
        name: 'Generative AI Response Drafts',
        description: 'AI suggests response drafts for agents (human-in-loop)',
        priority: 'low',
        timeframe: '2027+',
        impact_score: 3,
        impact_rationale: 'Save 30 min/day per agent, improve consistency',
        feasibility_score: 4,
        feasibility_rationale: 'LLM-based, similar to chatbot but agent-facing',
        viability_score: 3,
        viability_rationale: 'Lower priority, focus on customer-facing AI first',
        status: 'not-started',
        roi_estimate: 120
      }
    ],
    evaluation_criteria: [
      'Impact: Business value, customer benefit, competitive edge',
      'Feasibility: Tech readiness, data availability, talent on hand',
      'Viability: ROI, cost, time-to-value, risk level'
    ],
    prioritization_framework: 'Quick Wins (High Impact + High Feasibility) → Strategic Bets (High Impact + Medium Feasibility) → Moonshots (defer to future)'
  },
  
  // #4 DATA STRATEGY & ASSETS
  data_strategy: {
    internal_data_sources: [
      { name: 'Support Tickets', description: 'Historical customer support interactions', volume: '2M+', timespan: '5 years', quality_score: 85 },
      { name: 'Customer Profiles', description: 'User demographics, subscription history', volume: '50K+', timespan: '3 years', quality_score: 90 },
      { name: 'Product Usage Logs', description: 'User behavior, feature usage, session data', volume: '500K+/day', timespan: '2 years', quality_score: 75 },
      { name: 'CRM Data', description: 'Salesforce records, account history', volume: '100K+ records', timespan: '5 years', quality_score: 95 },
      { name: 'NPS Surveys', description: 'Customer satisfaction feedback', volume: 'Quarterly', timespan: '3 years', quality_score: 80 }
    ],
    external_data_sources: [
      { name: 'Industry Benchmarks', description: 'Zendesk support metrics', volume: 'Annual reports', timespan: 'N/A' },
      { name: 'Open Datasets', description: 'Public support conversation datasets for model training', volume: '10M+ samples', timespan: 'N/A' },
      { name: 'Third-Party Enrichment', description: 'Clearbit firmographic data for B2B customers', volume: 'Real-time API', timespan: 'N/A' }
    ],
    data_quality: {
      cleanliness_percentage: 85,
      labeling_status: '85% of tickets have clean intent/sentiment labels',
      pii_handling: 'Automated PII scrubbing (GDPR-compliant), regex + NER models',
      audit_frequency: 'Quarterly InfoSec review + annual SOC 2 audit'
    },
    data_accessibility: {
      data_warehouse: 'Snowflake (centralized, all teams have read access)',
      api_access: ['REST API', 'GraphQL for real-time queries'],
      self_service_tools: ['Looker dashboards for product/marketing teams', 'Jupyter notebooks for data science'],
      compliance_standards: ['SOC 2', 'GDPR', 'CCPA']
    },
    data_governance: [
      'Data Engineering owns infrastructure, quality, governance',
      'Product teams own domain-specific datasets (Support owns tickets)',
      'Legal/Compliance approves all external data sharing',
      'RBAC: Role-based access control (analysts can\'t see PII without audit)'
    ],
    ai_flywheel_design: 'Product generates data (user behavior) → AI analyzes patterns (personalization) → Improves product (better recommendations) → Attracts more users → More data → Better AI → Repeat. Example: Chatbot interactions improve model accuracy weekly.'
  },
  
  // #5 AI PLATFORM & TECHNOLOGY STACK
  ai_platform: {
    cloud_infrastructure: ['AWS (primary)', 'Azure (disaster recovery)'],
    llm_providers: ['OpenAI GPT-4o', 'Anthropic Claude (fallback)'],
    vector_databases: ['Pinecone for RAG (semantic search)'],
    orchestration_tools: ['LangChain', 'Custom Python pipelines'],
    monitoring_tools: ['Datadog (infrastructure)', 'Custom logs for AI metrics'],
    build_vs_buy: {
      build: [
        'Custom chatbot orchestration logic',
        'Fine-tuned routing model for ticket classification',
        'Data pipeline (dbt, Airflow for ETL)'
      ],
      buy: [
        'OpenAI API (LLM inference)',
        'Pinecone (vector database)',
        'Datadog (monitoring)'
      ],
      partner: [
        'Zendesk AI integration',
        'AWS managed services (SageMaker for experimentation)'
      ]
    },
    ai_lifecycle: {
      experiment_phase: 'Dev: Jupyter notebooks, local GPU workstation, W&B for tracking',
      staging_phase: 'Staging: AWS SageMaker, A/B testing framework, shadow mode (run alongside production)',
      production_phase: 'Prod: Containerized (ECS), auto-scaled, blue-green deployment',
      rollback_strategy: 'Feature flags, blue-green deployment, instant revert if accuracy drops >5%'
    },
    operating_model: 'Hub-and-spoke: Centralized AI platform team (5 people) provides reusable infra (feature store, model registry, deployment pipelines), product teams own domain use cases (Sales AI, Support AI)',
    deployment_strategy: 'Phased rollout: 10% of users for 1 week → monitor metrics → 50% for 1 week → 100% over 8 weeks'
  },
  
  // #6 PEOPLE, SKILLS & CULTURE
  people_skills: {
    current_talent: {
      ml_engineers: 0,
      data_scientists: 1,
      ai_product_managers: 0,
      mlops_engineers: 0,
      ai_ethicists: 0,
      other_roles: [
        { role: 'Product Engineers (with ML experience)', count: 3 },
        { role: 'Support Agents (AI trainers)', count: 12 }
      ]
    },
    hiring_roadmap: [
      {
        quarter: 'Q1 2026',
        roles: [
          { role: 'Senior ML Engineer', count: 2, salary_range: '$180K-$220K' },
          { role: 'Junior ML Engineer', count: 1, salary_range: '$120K' },
          { role: 'AI Product Manager', count: 1, salary_range: '$160K' }
        ],
        total_cost: 680000
      },
      {
        quarter: 'Q2 2026',
        roles: [
          { role: 'MLOps Engineer', count: 1, salary_range: '$150K' },
          { role: 'Conversational AI Designer', count: 1, salary_range: '$130K' }
        ],
        total_cost: 280000
      },
      {
        quarter: 'Q3 2026',
        roles: [
          { role: 'AI Strategist / Head of AI', count: 1, salary_range: '$200K+' }
        ],
        total_cost: 200000
      }
    ],
    skills_development: {
      all_employees: [
        'AI Fluency Fundamentals workshop (2-day, mandatory for PMs/engineers)',
        'Monthly AI Town Halls: CTO shares progress, demos, Q&A',
        'Access to Coursera/Udemy AI courses (company-paid)'
      ],
      product_managers: [
        'AI Product Management certification (Reforge, 6-week program)',
        'Hands-on: Build a chatbot prototype using no-code tools (Voiceflow)'
      ],
      engineers: [
        'Practical Machine Learning bootcamp (fast.ai, 10-week course)',
        'Pair programming with ML engineers on real projects',
        'Monthly 2-day AI hack days (winner gets $5K bonus)'
      ],
      support_staff: [
        'New "AI Trainer" role created (10% of agents, +$10K/yr salary bump)',
        'Responsibilities: Label training data, review AI responses, escalate edge cases',
        'Career path: Agent → AI Trainer → CX Specialist → CX Manager'
      ],
      leadership: [
        'Executive GenAI workshop (Harvard Business School, 3-day program)',
        'Site visits to AI-first companies (OpenAI, Anthropic, Scale AI)'
      ]
    },
    culture_shifts: [
      {
        from_state: 'AI will replace us',
        to_state: 'AI augments us',
        tactics: [
          'Weekly "AI in Plain English" email from CTO (no jargon)',
          'Slack #ai-updates channel with real-time progress',
          'Open roadmap: Everyone can see what\'s being built and why',
          'Support agents co-design chatbot personality, tone, escalation rules',
          'No-layoff pledge for 18 months while AI is being implemented'
        ]
      }
    ],
    change_management: {
      employee_concerns: [
        {
          concern: 'Will AI take my job?',
          response: 'No layoffs for 18 months (written policy). AI handles tier-1 (FAQs), humans handle tier-2/3 (complex, emotional). New roles created: AI Trainer, CX Specialist.'
        },
        {
          concern: 'I don\'t understand AI, I\'ll fall behind',
          response: 'Mandatory AI fluency training (paid work time, not after-hours). Buddy system: Pair non-technical staff with ML engineers. Learning stipend: $2K/year for courses.'
        },
        {
          concern: 'AI will make mistakes and I\'ll get blamed',
          response: 'Human-in-loop for high-stakes decisions. AI confidence scores visible. Agents have override button. Blameless postmortems: Fix the system, not punish people.'
        }
      ],
      pilot_team_approach: 'Start with 5 "AI Champion" support agents (volunteers). They test chatbot, provide feedback, become internal advocates. After 3 months, expand to 20 agents, then full team.',
      metrics_tracked: [
        'Employee AI fluency score: Quarterly quiz (target: 80% pass rate)',
        'AI tool adoption: % of employees using AI features weekly (target: 60%)',
        'Employee NPS on AI tools (target: 8+/10)',
        'Retention rate of AI-adjacent roles (target: >90%)'
      ]
    }
  },
  
  // #7 GOVERNANCE & RESPONSIBLE AI
  governance: {
    accountability_structure: {
      steering_committee: 'AI Steering Committee (CEO, CTO, CFO, Head of Product, Head of Legal). Meets monthly. Approves high-risk use cases.',
      ai_ethics_officer: 'Head of Product (interim), hiring dedicated AI Ethicist in Q2. Quarterly bias audits, reviews all customer-facing AI.',
      data_privacy_lead: 'Legal Counsel + VP of Security. GDPR/CCPA compliance, PII scrubbing, data retention.',
      model_owners: 'Each AI use case has a Product Manager owner accountable for performance, fairness, customer impact, financial ROI.'
    },
    responsible_ai_framework: {
      fairness: [
        'Bias audits quarterly (test model on demographic slices: gender, age, language)',
        'Fairness metrics: Equal opportunity, demographic parity',
        'Mitigation: Re-weight training data, adversarial debiasing'
      ],
      transparency: [
        '"Why this answer?" feature in chatbot (show sources, confidence score)',
        'Model cards published for all production models (architecture, training data, limitations)',
        'Customer-facing AI disclaimer: "This response is AI-generated, reviewed by humans"'
      ],
      privacy: [
        'PII scrubbing: Automated removal of emails, SSNs, addresses',
        'On-device inference: Sensitive data (health, financial) processed locally',
        'Data minimization: Collect only what\'s needed, delete after 3 years (GDPR)',
        'Encryption: All AI training data encrypted at rest and in transit'
      ],
      safety: [
        'Human-in-loop for high-stakes: Billing disputes >$500, account deletions, medical/legal advice',
        'Guardrails: Input validation (block prompt injection), output filtering (no harmful content)',
        'Fallback: If AI confidence <80%, escalate to human'
      ],
      accountability: [
        'Audit logs: Every AI decision logged with model version, input, output, timestamp',
        'Version control: All prompts, model weights versioned (Git, MLflow)',
        'Incident response: 24-hour SLA for critical AI failures, root cause analysis within 72 hours',
        'Customer recourse: "Report AI error" button → human reviews within 4 hours'
      ],
      reliability: [
        'Uptime SLA: 99.9% for customer-facing AI',
        'Monitoring: Real-time dashboards for accuracy, latency, error rate',
        'Automated rollback: If error rate >1%, auto-revert to previous model',
        'Redundancy: Fallback to rule-based system if LLM API is down'
      ]
    },
    risks_and_mitigation: [
      {
        risk_type: 'bias',
        description: 'AI gives worse responses to non-English speakers',
        severity: 'high',
        mitigation_strategies: [
          'Quarterly bias audits across 10 languages',
          'Balanced training data (equal samples per language)',
          'Fairness metrics in production dashboards',
          'Escalation: If bias detected, pause rollout, retrain model'
        ],
        status: 'mitigated'
      },
      {
        risk_type: 'hallucination',
        description: 'AI makes up facts, provides wrong answers',
        severity: 'critical',
        mitigation_strategies: [
          'Confidence scores: Show "80% confident" to users',
          'Source attribution: AI cites knowledge base article',
          '10% of AI responses randomly reviewed by agents',
          'Fallback: If no confident answer, say "I don\'t know, connecting you to human"'
        ],
        status: 'mitigated'
      },
      {
        risk_type: 'prompt-injection',
        description: 'Malicious users manipulate AI with crafted prompts',
        severity: 'medium',
        mitigation_strategies: [
          'Input validation: Block common injection patterns',
          'Rate limiting: Max 20 requests/minute per user',
          'Monitoring: Flag unusual input patterns',
          'Sandboxing: AI cannot access internal systems, only predefined knowledge base'
        ],
        status: 'mitigated'
      },
      {
        risk_type: 'data-leakage',
        description: 'AI reveals customer PII or sensitive data',
        severity: 'critical',
        mitigation_strategies: [
          'PII scrubbing before training',
          'Encrypted storage (AES-256)',
          'RBAC: Only ML engineers can access raw data',
          'Annual penetration testing, SOC 2 compliance'
        ],
        status: 'mitigated'
      },
      {
        risk_type: 'model-drift',
        description: 'AI accuracy degrades over time as data changes',
        severity: 'medium',
        mitigation_strategies: [
          'Real-time monitoring: Arize AI tracks accuracy daily',
          'Quarterly model retraining with latest data',
          'A/B testing: Always compare new model vs current',
          'Alerts: If accuracy drops >5%, auto-notify ML team'
        ],
        status: 'in-progress'
      }
    ],
    compliance_requirements: [
      {
        regulation: 'GDPR',
        requirements: [
          'Right to explanation: Customers can request "Why did AI make this decision?"',
          'Data portability: Customers can export all their data, including AI interactions',
          'Right to deletion: Automated data deletion within 30 days of request',
          'Data minimization: Only collect necessary data, delete after 3 years'
        ],
        status: 'compliant'
      },
      {
        regulation: 'EU AI Act',
        requirements: [
          'High-risk classification: Customer-facing chatbot',
          'Risk management system: Document all risks, mitigations',
          'Data governance: Quality, bias audits (quarterly)',
          'Transparency: Customers must know they\'re interacting with AI',
          'Human oversight: Human-in-loop for high-stakes decisions',
          'Accuracy: 95%+ accuracy SLA, robust validation',
          'Cybersecurity: Encryption, access control, SOC 2'
        ],
        status: 'in-progress'
      },
      {
        regulation: 'SOC 2 Type II',
        requirements: [
          'Annual audit covering AI systems',
          'Controls: Audit logs, encryption, access control, incident response',
          'AI-specific: Model versioning, data lineage, bias monitoring'
        ],
        status: 'compliant'
      }
    ],
    human_in_loop_rules: [
      { trigger: 'Financial transactions >$500', description: 'Refunds, credits, discounts', approval_required: true },
      { trigger: 'Account deletions or suspensions', description: 'Permanent actions require human approval', approval_required: true },
      { trigger: 'Medical/legal advice requests', description: 'AI refuses, routes to human expert', approval_required: true },
      { trigger: 'Escalations marked "urgent" or "angry"', description: 'Sentiment analysis triggers human review', approval_required: true },
      { trigger: 'AI confidence <70%', description: 'Low confidence triggers automatic escalation', approval_required: false }
    ]
  },
  
  // #8 COST STRUCTURE & FINANCIAL MANAGEMENT
  costs: {
    cost_drivers: [
      { category: 'LLM API calls', monthly_cost: 15000, annual_cost: 180000, percentage_of_total: 70, notes: 'OpenAI GPT-4o, spikes at launch' },
      { category: 'Compute (training, inference)', monthly_cost: 5000, annual_cost: 60000, percentage_of_total: 20, notes: 'AWS SageMaker, ECS Fargate' },
      { category: 'Storage (vectors, logs)', monthly_cost: 1000, annual_cost: 12000, percentage_of_total: 5, notes: 'Pinecone, S3, Snowflake' },
      { category: 'Tooling/licenses', monthly_cost: 3000, annual_cost: 36000, percentage_of_total: 5, notes: 'Arize AI, W&B, GitHub Copilot' },
      { category: 'Talent (salaries)', annual_cost: 792500, percentage_of_total: 0, notes: 'ML engineers, AI PM, MLOps' }
    ],
    year_1_total: 1016500,
    zig_zag_pattern: {
      launch_spike_multiplier: 3,
      optimization_drop_month: 6,
      plateau_percentage: 0.7
    },
    compute_optimization: [
      'Caching: 40% cost reduction (cache common questions for 24 hours)',
      'Model distillation: Switch to GPT-3.5 for 60% of requests (10x cheaper)',
      'Batch inference: Run off-peak hours with spot instances (70% discount)',
      'Right-size compute: GPUs for training, CPUs for inference (80% reduction)',
      'Prompt optimization: Shorten prompts from 500 to 200 tokens (40% reduction)'
    ],
    finops_strategy: {
      cost_allocation_method: 'Tag every LLM API call with use case ID. Monthly report per team.',
      budget_alert_threshold: 80,
      review_frequency: 'Monthly cost review (Product + Finance + ML team, 1st Monday)',
      roi_tracking_method: 'Track ROI per initiative. Kill initiatives with <2x ROI. Chatbot: 4x, Sentiment: 20x, Churn: 25x.'
    },
    tco_3_years: {
      year_1: 1016500,
      year_2: 580000,
      year_3: 450000,
      total_3_year: 2046500,
      value_created_3_year: 8400000,
      roi_percentage: 310
    }
  },
  
  // #9 SUCCESS METRICS & ROI
  success_metrics: {
    business_kpis: [
      { metric_name: 'Support cost per ticket', current_value: '$12', target_value: '$5', timeframe: '12 months', category: 'operational-efficiency', measurement_method: 'Total support costs / # of tickets resolved' },
      { metric_name: 'Ticket deflection rate', current_value: '0%', target_value: '70%', timeframe: '6 months', category: 'operational-efficiency', measurement_method: '# AI-resolved tickets / total tickets' },
      { metric_name: 'Customer satisfaction (CSAT)', current_value: '78%', target_value: '92%', timeframe: '12 months', category: 'customer-satisfaction', measurement_method: 'Post-interaction survey: "How satisfied?" (4-5 stars)' },
      { metric_name: 'Support team capacity', current_value: '10K tickets/mo', target_value: '30K tickets/mo', timeframe: '12 months', category: 'scalability', measurement_method: '# of tickets handled without adding headcount' },
      { metric_name: 'Time to resolution', current_value: '4 hours', target_value: '15 minutes', timeframe: '6 months', category: 'operational-efficiency', measurement_method: 'Time from ticket creation to resolution' },
      { metric_name: 'Upsell revenue from AI insights', current_value: '$0', target_value: '$2M/year', timeframe: '12 months', category: 'revenue', measurement_method: 'Revenue attributed to AI-detected upsell opportunities' }
    ],
    financial_roi: {
      investment_year_1: 1016500,
      cost_savings_year_1: 800000,
      new_revenue_year_1: 2000000,
      total_value_created: 2800000,
      net_gain: 1783500,
      roi_percentage: 175,
      payback_period_months: 4.4
    },
    non_financial_metrics: [
      { category: 'employee-satisfaction', metric_name: 'AI tool NPS (internal)', target: '8+/10', measurement_method: 'Quarterly survey to support agents', why_it_matters: 'If agents hate AI, they won\'t use it or train it well' },
      { category: 'employee-satisfaction', metric_name: 'Employee retention (AI-adjacent roles)', target: '>90%', measurement_method: '% of ML engineers, data scientists who stay >12 months', why_it_matters: 'High turnover = lost knowledge, project delays' },
      { category: 'brand-perception', metric_name: '"AI-first CX" positioning awareness', target: '40% of target market', measurement_method: 'Brand survey: "Which companies are leaders in AI customer experience?"', why_it_matters: 'Differentiation, competitive moat, premium pricing' },
      { category: 'innovation-velocity', metric_name: 'AI experiments shipped per quarter', target: '3 per quarter', measurement_method: '# of new AI features/use cases launched in production', why_it_matters: 'Speed of innovation, competitive advantage' }
    ],
    three_es_framework: {
      efficiency: {
        description: 'Do more with less',
        metrics: [
          { name: 'Cost per ticket', improvement: '↓58% ($12 → $5)' },
          { name: 'Agent productivity', improvement: '↑200% (handle 3x tickets with same team)' },
          { name: 'Time to resolution', improvement: '↓94% (4 hours → 15 minutes)' }
        ]
      },
      effectiveness: {
        description: 'Better outcomes',
        metrics: [
          { name: 'First-contact resolution', improvement: '↑40% (60% → 84%)' },
          { name: 'Answer accuracy', improvement: '↑15% (78% → 90%+)' },
          { name: 'Customer retention', improvement: '↑8% (AI flags churn risks early)' }
        ]
      },
      user_experience: {
        description: 'Delightful interactions',
        metrics: [
          { name: 'Wait time', improvement: '↓94% (4 hours → 15 minutes)' },
          { name: 'CSAT', improvement: '↑18% (78% → 92%)' },
          { name: '24/7 availability', improvement: '0% → 100% (AI never sleeps)' },
          { name: 'Multilingual support', improvement: '1 language → 10 languages' }
        ]
      }
    },
    post_deployment_tracking: {
      dashboards: ['Looker dashboard (updated hourly): Deflection rate, AI accuracy, CSAT, cost per ticket, time to resolution'],
      weekly_reviews: 'ML team + Product + Support leads review: What spiked? Any AI failures? Customer feedback?',
      monthly_reviews: 'Exec team + Finance review: ROI per use case, cost trends, roadmap progress',
      quarterly_audits: ['Bias audits (fairness)', 'Accuracy regression tests', 'Cost audits', 'Security audits'],
      annual_review: 'Board presentation: 3-year ROI trajectory, competitive landscape, Year 2 roadmap'
    },
    justification_statement: 'For every $1 invested in AI, we generate $2.75 in value within 12 months, with 58% cost efficiency improvement (cost per ticket $12 → $5), 18% customer satisfaction improvement (CSAT 78% → 92%), 94% reduction in wait times (4 hours → 15 minutes), $2M in new revenue from AI-driven upsell insights, payback period of 4.4 months, 175% ROI in Year 1, 310% ROI over 3 years. AI is not a cost center — it\'s a revenue and efficiency multiplier that enables us to scale 3x without adding headcount, enter new markets (SMB), and differentiate on "AI-first customer experience" positioning.'
  },
  
  // Meta
  assessment_mode: 'nine-box',
  completion_percentage: 95,
  last_edited_section: 'success_metrics'
};

// ============================================================================
// AI SUGGESTIONS PER SECTION (For Right Panel)
// ============================================================================

export const AI_SUGGESTIONS: Record<string, AISuggestion> = {
  '1': {
    section_id: '1',
    section_name: 'AI Vision & Business Outcomes',
    key_questions: [
      'What are your primary business objectives for AI?',
      'What long-term AI-driven vision sets you apart?',
      'How does AI create competitive advantage in your market?',
      'What transformational opportunities (new business models, markets) could AI unlock?',
      'What measurable outcomes do you expect within 12-18 months?'
    ],
    examples: [
      'Vision: "Become the first AI-native healthcare platform that predicts patient needs before they arise"',
      'Outcome: "Reduce patient readmission rates by 35% within 18 months"',
      'Competitive advantage: "Proprietary AI model trained on 10M+ patient records (largest dataset in our vertical)"',
      'Transformation: "Launch B2B2C Wellness Coach API for insurance partners ($10M ARR potential)"'
    ],
    templates: [
      'Vision Statement: Transform [function] from [current state] to [future state] through AI-powered [capability].',
      'Business Outcomes: Reduce [metric] by X% within Y months | Improve [metric] from X to Y | Scale [capability] Nx without adding [resource]',
      'Competitive Advantage: First/only in [vertical] to offer [unique AI capability]',
      'Transformational Opportunities: Shift brand positioning from [X] to [Y] | Launch [new product/service] | Create data flywheel: [cycle description]'
    ],
    industry_best_practices: [
      'Start with "Why": AI for AI\'s sake fails. Tie to clear business outcomes.',
      'Be specific: "Improve CSAT" is vague. "Improve CSAT from 78% to 92% in 12 months" is measurable.',
      'Think big, start small: Articulate 3-year vision, but execute 6-month MVPs.',
      'Competitive moat: How will AI create defensibility? (Data flywheel, proprietary models, network effects)',
      'Communicate broadly: Vision should inspire engineers, support agents, customers, investors.'
    ]
  },
  
  '2': {
    section_id: '2',
    section_name: 'AI Value Proposition',
    key_questions: [
      'What new products or services will AI enable?',
      'How will AI create hyper-personalized experiences at scale?',
      'What unique customer problems can AI solve that competitors can\'t?',
      'How will AI differentiate you in the market?',
      'What specific pain points does AI eliminate for customers?'
    ],
    examples: [
      'Customer benefit: "Instant visual search: Upload photo, find exact match in <2 seconds"',
      'Business benefit: "$3M annual revenue increase from AI-driven upsell/cross-sell"',
      'New product: "Style Studio AI subscription tier (+$15/mo): Unlimited virtual try-ons"',
      'Differentiation: "Only fashion retailer with proprietary body-scanning AI (patented tech)"',
      'Problem solved: Pain: "I order 5 sizes because I don\'t know what fits" → Solution: "AI body scan recommends exact size with 95% accuracy"'
    ],
    templates: [
      'Customer Benefits: [Action] [frequency] ([elimination of pain point])',
      'Business Benefits: [Financial metric] [value] ([mechanism])',
      'New Products: [Product name]: [Description] ([pricing])',
      'Unique Differentiation: Only [company type] with [unique capability]',
      'Problem/Solution: Pain: "[customer quote]" → Solution: "[AI capability solves it]"'
    ],
    industry_best_practices: [
      'Quantify value: "Better support" is vague. "90%+ accuracy vs 78% today" is concrete.',
      'Separate customer vs business value: Customers care about speed/quality, business cares about cost/revenue.',
      'New revenue streams: AI often unlocks entirely new products (APIs, premium tiers, data insights).',
      'Hybrid model: Best AI solutions augment humans, not replace them entirely.',
      'Proof points: Cite pilot results, competitor benchmarks, industry studies.'
    ]
  },
  
  '3': {
    section_id: '3',
    section_name: 'Key Use Cases & Prioritisation',
    key_questions: [
      'What are the top 3-5 business problems AI can solve?',
      'How do you prioritise by impact, feasibility, and time-to-value?',
      'Which are quick wins (deploy in <3 months) vs long-term bets?',
      'Common industry use cases: Predictive maintenance, fraud detection, conversational AI, churn prediction, personalization, content generation, code assistance?',
      'How will you evaluate ROI per use case?'
    ],
    examples: [
      'High priority: AI chatbot for sales qualification (Impact: ★★★★★, Feasibility: ★★★★★, Viability: ★★★★★) → ROI in 3 months',
      'Medium priority: AI-powered contract review (Impact: ★★★★☆, Feasibility: ★★★☆☆, Viability: ★★★☆☆) → Hard to quantify ROI',
      'Low priority: Generative AI for blog content (defer to 2027+)',
      'Evaluation criteria: Impact (business value, customer benefit) | Feasibility (data, tech, talent) | Viability (ROI, cost, risk)'
    ],
    templates: [
      'Use Case: [Name] | Description: [1 sentence] | Priority: [High/Medium/Low] | Timeframe: [Q1-Q2 2026]',
      'Impact: ★★★★★ ([quantified business value])',
      'Feasibility: ★★★★☆ ([data availability, tech readiness])',
      'Viability: ★★★★★ ([ROI timeline, cost])',
      'Status: [Not started / In progress / Completed]'
    ],
    industry_best_practices: [
      'Prioritize ruthlessly: Do 1-2 use cases well vs 10 poorly.',
      'Quick wins first: High impact + High feasibility = momentum, budget, buy-in.',
      'Kill low-ROI: If a use case doesn\'t show 2x ROI, pause or kill it.',
      'Common AI use cases by industry: Healthcare (churn prediction, diagnosis assist), Retail (personalization, visual search), Finance (fraud detection, credit scoring), Support (chatbots, sentiment analysis)',
      'Avoid "AI for AI\'s sake": Every use case must tie to a business outcome.'
    ]
  },
  
  '4': {
    section_id: '4',
    section_name: 'Data Strategy & Assets',
    key_questions: [
      'What internal and external data sources are available?',
      'What makes data "usable" for AI? (Quality, labels, accessibility, volume)',
      'How will you govern data? (Privacy, compliance, ownership)',
      'How can you design an AI flywheel? (Product → Data → AI → Product)',
      'What is your data quality baseline and improvement plan?'
    ],
    examples: [
      'Internal: 15M user sessions, 2M transactions, 500K support tickets, Product catalog (50K SKUs)',
      'External: Industry benchmarks (Forrester), Open datasets (Common Crawl), Third-party enrichment (Clearbit)',
      'Quality: 70% of tickets have clean labels → Goal: 90% by Q2 via automated tagging',
      'Accessibility: BigQuery (centralized), REST + GraphQL APIs, Looker dashboards, RBAC for PII',
      'AI flywheel: Product generates data (user behavior) → AI analyzes → Improves product (recommendations) → More users → More data → Better AI'
    ],
    templates: [
      'Internal Data: [Source name]: [Volume] ([timespan], [quality score]/100)',
      'External Data: [Source name]: [Description]',
      'Data Quality: [X]% clean, [labeling status], [PII handling], [audit frequency]',
      'Accessibility: Warehouse: [tool] | APIs: [type] | Self-service: [dashboards] | Compliance: [standards]',
      'AI Flywheel: [Product action] → [Data generated] → [AI improvement] → [Product improvement] → [More users] → Repeat'
    ],
    industry_best_practices: [
      'Garbage in, garbage out: AI is only as good as your data. Invest in data quality first.',
      'Data labeling bottleneck: Budget 30-40% of AI project time for data labeling.',
      'Privacy by design: PII scrubbing, encryption, RBAC from day 1 (not retrofitted).',
      'Data flywheel: Best AI companies design products that generate data to improve AI (Netflix, Amazon, Google).',
      'Self-service data: Empower product teams to access data without data engineering bottlenecks (Looker, Tableau, dbt).'
    ]
  },
  
  '5': {
    section_id: '5',
    section_name: 'AI Platform & Technology Stack',
    key_questions: [
      'Which tech stack will you use? (Cloud, hardware, vendors, frameworks)',
      'Build vs Buy vs Partner decisions?',
      'How will you manage the AI lifecycle from experiment to production?',
      'What operating model? (Centralized platform, hub-and-spoke, decentralized)',
      'How will you deploy AI safely? (Phased rollout, A/B testing, rollback strategy)'
    ],
    examples: [
      'Cloud: GCP (primary), AWS (secondary)',
      'LLMs: OpenAI GPT-4o, Anthropic Claude 3.5, Custom fine-tuned model on Vertex AI',
      'Build vs Buy: BUILD (custom churn model) | BUY (OpenAI API, Weaviate) | PARTNER (Google Cloud managed services)',
      'AI lifecycle: Experiment (Jupyter, W&B) → Staging (SageMaker, A/B tests) → Production (Dockerized, auto-scaled)',
      'Operating model: Hub-and-spoke (centralized platform team provides infra, product teams own domain use cases)',
      'Deployment: Phased rollout (10% → 50% → 100% over 8 weeks), blue-green deployment, feature flags for instant rollback'
    ],
    templates: [
      'Cloud: [Primary provider] ([use case]) | [Secondary provider] ([use case])',
      'LLMs: [Provider] [Model] ([use case])',
      'Build vs Buy: BUILD: [components] | BUY: [components] | PARTNER: [components]',
      'AI Lifecycle: Experiment: [tools] → Staging: [tools, testing] → Production: [deployment, monitoring]',
      'Operating Model: [Centralized / Hub-and-spoke / Decentralized]: [description]'
    ],
    industry_best_practices: [
      'Build vs Buy: Build competitive differentiators (proprietary models), buy commodities (LLM APIs, monitoring).',
      'Cloud-native: Use managed services (SageMaker, Vertex AI) vs managing infrastructure yourself.',
      'Hub-and-spoke: Centralized platform team provides reusable infra, product teams own domain logic (scales better than centralized-only).',
      'Deployment safety: Never deploy AI to 100% of users at once. Phased rollout (10%→50%→100%) catches issues early.',
      'Rollback strategy: Feature flags, blue-green deployment, automated rollback if accuracy drops >5%.'
    ]
  },
  
  '6': {
    section_id: '6',
    section_name: 'People, Skills & Culture',
    key_questions: [
      'What AI talent do you need? (Data scientists, ML engineers, AI strategists)',
      'How will you build an AI-ready culture?',
      'What\'s your AI fluency strategy for non-technical staff?',
      'How will you address change management and employee concerns about job displacement?',
      'What career paths exist for AI-adjacent roles?'
    ],
    examples: [
      'Current: 0 ML engineers, 1 data scientist (part-time)',
      'Hiring: Q1 (2 ML engineers, 1 AI PM), Q2 (1 MLOps engineer), Q3 (1 AI Strategist)',
      'Upskilling: All PMs (2-day AI fluency workshop), Engineers (Coursera ML cert), Support (AI trainer role)',
      'Culture shift: From "AI will replace us" → "AI augments us" (weekly town halls, no-layoff pledge, AI champions program)',
      'Change management: 1:1s to address anxiety, reskilling agents → AI trainers → CX strategists, pilot team of 5 volunteers'
    ],
    templates: [
      'Current Talent: [Role]: [Count] ([notes])',
      'Hiring Roadmap: [Quarter]: [Role] (count: [X], salary: [$Y])',
      'Upskilling: [Team]: [Training programs]',
      'Culture Shift: FROM "[old mindset]" → TO "[new mindset]" | Tactics: [list]',
      'Change Management: Concern: "[employee quote]" | Response: "[company response]"'
    ],
    industry_best_practices: [
      'Hire for AI fluency, not just ML skills: Product managers need to understand AI limitations, not code models.',
      'Culture shift takes time: Expect 6-12 months to shift from "AI is scary" to "AI is helpful".',
      'Transparency > Secrecy: Share AI roadmap, progress, failures openly (weekly town halls, Slack updates).',
      'Reskilling > Replacing: Retrain support agents to become AI trainers (cheaper than hiring, better culture).',
      'Career paths: Create AI specialist tracks (not just manager track) to retain top talent.'
    ]
  },
  
  '7': {
    section_id: '7',
    section_name: 'Governance & Responsible AI',
    key_questions: [
      'Who is accountable for AI decisions in your organization?',
      'What is your Responsible AI framework? (Fairness, transparency, privacy, safety)',
      'What are the top AI risks and mitigation strategies? (Bias, hallucinations, prompt injection)',
      'Which regulations apply? (GDPR, EU AI Act, industry standards)',
      'When do humans override AI? (High-stakes decisions, low confidence, customer request)'
    ],
    examples: [
      'Accountability: AI Steering Committee (CEO, CTO, CFO), AI Ethics Officer (Head of Product), Model owners (Product teams)',
      'Responsible AI: Fairness (quarterly bias audits), Transparency ("Why this answer?" feature), Privacy (PII scrubbing), Safety (human-in-loop for refunds >$500)',
      'Risks: Bias (mitigation: balanced training data), Hallucinations (mitigation: confidence scores, source attribution), Prompt injection (mitigation: input validation)',
      'Compliance: GDPR (right to explanation, data portability), EU AI Act (high-risk classification, transparency obligations), SOC 2 (audit logs)',
      'Human-in-loop: All refunds >$500, account deletions, medical/legal advice, AI confidence <70%'
    ],
    templates: [
      'Accountability: Steering Committee: [members, frequency] | Ethics Officer: [role] | Privacy Lead: [role] | Model Owners: [team]',
      'Responsible AI: Fairness: [practices] | Transparency: [practices] | Privacy: [practices] | Safety: [practices]',
      'Risks: [Risk type]: [Description] | Severity: [Critical/High/Medium/Low] | Mitigation: [strategies]',
      'Compliance: [Regulation]: [Requirements] | Status: [Compliant / In-progress / Not started]',
      'Human-in-loop: [Trigger]: [Description] | Approval required: [Yes/No]'
    ],
    industry_best_practices: [
      'Governance from day 1: Don\'t retrofit ethics/compliance after AI is in production.',
      'Bias audits: Test AI on demographic slices (gender, race, language) quarterly, not annually.',
      'Transparency wins trust: Show customers why AI made a decision (explainability).',
      'Human-in-loop: Always allow escalation to human, especially for high-stakes decisions.',
      'Compliance: GDPR (if EU customers), EU AI Act (if high-risk use case), SOC 2 (if enterprise customers).'
    ]
  },
  
  '8': {
    section_id: '8',
    section_name: 'Cost Structure & Financial Management',
    key_questions: [
      'What are the main cost drivers? (Compute, storage, talent, licensing, API calls)',
      'How will you optimize compute costs? (Caching, batching, right-sizing, model distillation)',
      'What is your FinOps strategy for AI? (Budget alerts, cost allocation, ROI tracking)',
      'What\'s the total cost of ownership (TCO) over 3 years, including maintenance?',
      'How will you handle zig-zag cost patterns (spikes at launch, drops after optimization)?'
    ],
    examples: [
      'Cost drivers: LLM API (70%, $15K/mo), Compute (20%, $5K/mo), Storage (5%, $1K/mo), Talent ($792K/yr)',
      'Year 1 total: $1.02M (Setup: $50K, Ongoing: $288K, Talent: $792K)',
      'Zig-zag: Launch month 3x spike (testing), Month 6 optimization drop (caching), Plateau at 0.7x (efficient inference)',
      'Optimization: Caching (40% reduction), Model distillation (60% reduction via smaller models), Batch inference (30% reduction)',
      'FinOps: Tag API calls by use case, budget alerts at 80%, monthly cost review, kill <2x ROI initiatives',
      'TCO (3yr): Year 1 ($1.02M), Year 2 ($580K), Year 3 ($450K) = $2.05M total | Value created: $8.4M → 310% ROI'
    ],
    templates: [
      'Cost Driver: [Category]: [Monthly cost] ([percentage of total]%) | [Notes]',
      'Year 1: Setup: [$X] | Ongoing: [$Y/mo × 12] | Talent: [$Z] | Total: [$Total]',
      'Zig-Zag: Launch spike: [X]x | Optimization month: [Y] | Plateau: [Z]x',
      'Optimization: [Strategy]: [% reduction] ([mechanism])',
      'FinOps: Allocation: [method] | Alerts: [threshold]% | Review: [frequency] | ROI: [tracking method]',
      'TCO (3yr): Y1: [$X] | Y2: [$Y] | Y3: [$Z] | Total: [$Total] | Value: [$V] | ROI: [R]%'
    ],
    industry_best_practices: [
      'Zig-zag costs: AI costs spike unpredictably (experimentation, launch), then drop (optimization). Budget for 3x spikes.',
      'Compute optimization: Caching (40% reduction), smaller models for simple tasks (60% reduction), batch inference (30% reduction).',
      'FinOps: Tag every AI call with use case ID, cost allocation per team, budget alerts at 80%, monthly reviews.',
      'TCO: Calculate 3-year total cost (setup, ongoing, talent, maintenance) vs value created (cost savings + new revenue).',
      'Kill low-ROI: If a use case shows <2x ROI after 6 months, pause or kill it.'
    ]
  },
  
  '9': {
    section_id: '9',
    section_name: 'Success Metrics & ROI',
    key_questions: [
      'What KPIs are linked to business outcomes? (Revenue, cost, satisfaction, retention)',
      'What\'s the financial vs non-financial ROI?',
      'How will you track value post-deployment? (Dashboards, reviews, audits)',
      'How do you measure the 3Es: Efficiency, Effectiveness, User Experience?',
      'What\'s your justification statement for investors/board?'
    ],
    examples: [
      'Business KPIs: Cost per ticket ($12→$5), Deflection rate (0%→70%), CSAT (78%→92%), Time to resolution (4hr→15min)',
      'Financial ROI: Investment ($1.02M), Cost savings ($800K), New revenue ($2M), Net gain ($1.78M), ROI (175%), Payback (4.4 months)',
      'Non-financial: Employee AI tool NPS (8+/10), Brand perception (40% awareness), Innovation velocity (3 experiments/quarter)',
      '3Es: Efficiency (Cost per ticket ↓58%), Effectiveness (CSAT ↑18%), UX (Wait time ↓94%)',
      'Justification: "For every $1 invested in AI, we generate $2.75 in value within 12 months, with 58% cost efficiency, 18% CSAT improvement, 4.4-month payback, 175% ROI."'
    ],
    templates: [
      'Business KPI: [Metric name]: [Current] → [Target] ([timeframe]) | Measure: [method]',
      'Financial ROI: Investment: [$X] | Savings: [$Y] | Revenue: [$Z] | Net: [$N] | ROI: [R]% | Payback: [M] months',
      'Non-financial: [Category]: [Metric] | Target: [T] | Measure: [method] | Why: [reason]',
      '3Es: Efficiency: [metrics with % improvement] | Effectiveness: [metrics] | UX: [metrics]',
      'Justification: "For every $1 invested in AI, we generate $[X] in value within [Y] months, with [key improvements]."'
    ],
    industry_best_practices: [
      'Measure what matters: Tie AI metrics to business outcomes (revenue, cost, retention), not vanity metrics (model accuracy alone).',
      'Financial + Non-financial: ROI matters, but also measure employee satisfaction, brand perception, innovation velocity.',
      '3Es framework: AI must improve Efficiency (do more with less), Effectiveness (better outcomes), UX (delightful experiences).',
      'Post-deployment tracking: Weekly dashboards, monthly business reviews, quarterly audits (bias, accuracy, cost), annual strategic review.',
      'Justification statement: Board wants 1 sentence: "For every $1 in AI, we get $X back in Y months, with Z% improvement in [key metric]."'
    ]
  }
};

// ============================================================================
// READINESS SCORE (Gap Analysis)
// ============================================================================

export const SAMPLE_READINESS_SCORE: ReadinessScore = {
  overall_score: 85,
  strategy_readiness: 90,
  legal_readiness: 75,
  business_readiness: 85,
  systems_data_readiness: 90,
  
  strengths: [
    'Clear AI vision tied to business outcomes (transform support, reduce costs 40%, improve CSAT 18%)',
    'Prioritized use cases with strong ROI (AI chatbot: 234% ROI, Sentiment: 2000% ROI)',
    'Robust data assets (2M+ tickets, 50K profiles, 85% data quality)',
    'Strong tech stack (AWS, OpenAI, Pinecone, hub-and-spoke model)',
    'Comprehensive governance framework (AI Steering Committee, quarterly bias audits, EU AI Act compliance)'
  ],
  
  gaps: [
    'Legal readiness: EU AI Act compliance in-progress (not yet fully compliant)',
    'Talent gap: Need to hire 2 ML engineers, 1 MLOps engineer, 1 AI Ethicist',
    'Culture shift: Support agents concerned about job displacement (change management needed)',
    'Model drift monitoring: Real-time monitoring in-progress (not yet fully automated)'
  ],
  
  next_steps: [
    'Q1 2026: Hire 2 ML engineers, 1 AI PM → Close talent gap',
    'Q1 2026: Launch AI chatbot pilot (10% traffic) → Validate ROI assumptions',
    'Q2 2026: Complete EU AI Act compliance audit → Achieve full legal readiness',
    'Q2 2026: Implement real-time model drift monitoring (Arize AI) → Reduce model degradation risk',
    'Q2-Q3 2026: Run AI fluency workshops for all employees → Address culture concerns',
    'Q4 2026: Evaluate Year 1 results vs targets → Adjust roadmap for Year 2'
  ]
};

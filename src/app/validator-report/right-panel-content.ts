// Right Panel Content for Each Section

export interface RightPanelContent {
  details: string;
  whyItMatters: string;
  risksGaps: string[];
  validateNext: string[];
}

export const rightPanelData: Record<string, RightPanelContent> = {
  'summary': {
    details: "The overall verdict synthesizes all dimensions into a single recommendation: GO, CAUTION, or NO-GO. This particular startup scores 62/100, landing in CAUTION territory—promising core idea with significant execution risks.",
    whyItMatters: "This verdict determines whether to proceed with full build-out, conduct more validation, or pivot. CAUTION means the idea has merit but requires de-risking before heavy investment.",
    risksGaps: [
      "Score doesn't account for founder execution capability",
      "Single-point assessment may miss emerging market dynamics",
      "Assumes validation data is accurate and unbiased"
    ],
    validateNext: [
      "Run 5 user interviews to pressure-test pain point severity",
      "Build competitive feature matrix to confirm differentiation",
      "Calculate unit economics with real CAC estimates"
    ]
  },
  
  'problem-clarity': {
    details: "Travelers face 'mid-trip pivot chaos' when plans fail due to weather, closures, or preference changes. This scores 8/10 severity because it creates immediate stress and wastes premium travel time.",
    whyItMatters: "Without a clear, painful problem, users won't pay for the solution. High severity (8/10) and frequency (7/10) indicate strong product-market fit potential.",
    risksGaps: [
      "Is this pain felt urgently enough to trigger immediate action?",
      "Do travelers currently solve this 'good enough' with Google Maps?",
      "Severity may vary by trip type (business vs leisure)"
    ],
    validateNext: [
      "Interview 10 travelers within 24 hours of a mid-trip disruption",
      "Analyze Google Maps reviews for 'last-minute change' complaints",
      "Survey premium hotel concierges about most common guest requests"
    ]
  },

  'customer-use-case': {
    details: "Primary customer: premium leisure travelers (35-55, $150K+ income) who value spontaneity and trust over rigid planning. They experience mid-trip chaos 2-3 times per year and currently waste 2+ hours manually researching alternatives.",
    whyItMatters: "Knowing exactly who buys and when they care determines go-to-market strategy, pricing, and feature prioritization. Willingness to pay ($15-30/trip) validates revenue model feasibility.",
    risksGaps: [
      "Is this segment large enough to build a venture-scale business?",
      "Will premium travelers trust AI recommendations in high-stakes moments?",
      "Customer acquisition cost may exceed LTV if segment is too narrow"
    ],
    validateNext: [
      "Run Facebook ads targeting 'luxury travel' to test CAC",
      "Partner with 1-2 boutique travel agencies to validate B2B channel",
      "Conduct 5 'mom test' interviews to confirm pain point resonates"
    ]
  },

  'market-sizing': {
    details: "TAM: $4.15B (global travel app market) → SAM: $1.0B (premium segment × real-time planning) → SOM: $500M (3-year addressable market). This is a venture-scale opportunity if execution is strong.",
    whyItMatters: "Market size determines investment attractiveness and exit potential. $500M SOM suggests potential for $100M+ ARR business, making this VC-fundable.",
    risksGaps: [
      "TAM calculation assumes travel market returns to pre-COVID levels",
      "SAM estimate relies on 'premium segment' definition which may be fuzzy",
      "Doesn't account for market saturation from Google Maps expansion"
    ],
    validateNext: [
      "Validate TAM with 2 industry analyst reports (Phocuswright, Skift)",
      "Interview 3 VCs who invest in travel tech for market sizing feedback",
      "Model sensitivity: what if SAM is 50% lower? Does business still work?"
    ]
  },

  'competition': {
    details: "4 major competitors: Google Maps (navigation giant), Mindtrip ($20M raised, pre-trip focus), Expedia (booking platform), and Layla (AI assistant). Competition is EXTREME with well-funded players.",
    whyItMatters: "Extreme competition (35/100 score) is the biggest risk. If you can't differentiate fast, Google will crush you within 12 months by adding AI planning to Maps.",
    risksGaps: [
      "Google could launch competitive feature in next product cycle",
      "Mindtrip has 2-year head start and VC backing",
      "Incumbent booking platforms have distribution and brand trust"
    ],
    validateNext: [
      "Map Google Maps product roadmap via patent filings and PM LinkedIn activity",
      "Interview 5 users of Mindtrip to identify weaknesses to exploit",
      "Build 'trust signal' prototype that incumbents can't easily replicate"
    ]
  },

  'risks-assumptions': {
    details: "Top 3 risks: (1) Google launches AI planning, (2) AI hallucinations destroy trust, (3) CAC exceeds $50 making unit economics negative. Each has a mitigation strategy but requires active validation.",
    whyItMatters: "These risks could kill the business in months. Proactive de-risking through Wizard of Oz MVP and B2B partnerships is critical before scaling spend.",
    risksGaps: [
      "Mitigation strategies are theoretical—need real-world testing",
      "Risk probability and impact estimates are subjective",
      "Black swan risks (regulatory, pandemic 2.0) not modeled"
    ],
    validateNext: [
      "Run hallucination audit: test GPT-4 on 100 venues, measure false positive rate",
      "Interview 3 boutique travel agencies about white-label partnership terms",
      "Model break-even CAC: at what point does business become unviable?"
    ]
  },

  'mvp-scope': {
    details: "3-phase approach: (1) Manual WhatsApp concierge (4 weeks), (2) Hybrid AI + human verification (6 weeks), (3) Full automation (8 weeks). Total: 18 weeks to launch. This de-risks AI trust and data pipeline before automating.",
    whyItMatters: "MVP scope determines time-to-market and burn rate. Wizard of Oz approach (manual concierge) tests value prop without building full tech stack, saving $100K+ in dev costs.",
    risksGaps: [
      "Manual concierge won't scale beyond 20 users—growth bottleneck",
      "18 weeks may be too slow if Google is moving fast",
      "Phase 2-3 tech complexity could blow timeline by 2-3x"
    ],
    validateNext: [
      "Recruit 5 beta users for WhatsApp concierge test in next 2 weeks",
      "Prototype real-time venue verification API (Google Places + scraping)",
      "Hire contract ML engineer to assess hallucination detection feasibility"
    ]
  },

  'next-steps': {
    details: "5 immediate actions prioritized by impact and urgency: hallucination audit (HIGH), beta recruitment (HIGH), B2B agency interviews (MEDIUM), competitive research (MEDIUM), UI mockups (LOW).",
    whyItMatters: "These actions de-risk the top 3 threats (AI trust, CAC, competition) in the next 4 weeks. Completing HIGH-priority items determines whether to proceed or pivot.",
    risksGaps: [
      "Action list assumes solo founder—may need team to execute in parallel",
      "Effort estimates may be optimistic (1 week tasks could take 3 weeks)",
      "Doesn't account for opportunity cost of other startup ideas"
    ],
    validateNext: [
      "Block calendar for next 4 weeks with specific action item time slots",
      "Hire VA to help with beta user recruitment and scheduling",
      "Set hard decision date: if HIGH actions fail, pivot or kill idea"
    ]
  },

  'scores-matrix': {
    details: "6-dimensional assessment: Problem Clarity (85), Solution (72), Market (68), Competition (35), Business Model (58), Team (70). Competition score tanks overall rating despite strong problem-solution fit.",
    whyItMatters: "Multi-dimensional view reveals why overall score is 62. Strong problem (85) is undermined by extreme competition (35). Focus efforts on competitive moat and business model.",
    risksGaps: [
      "Scores are AI-generated estimates—human judgment may differ",
      "Weighting assumes all dimensions are equally important",
      "Doesn't capture founder-market fit or domain expertise"
    ],
    validateNext: [
      "Ask 2 experienced founders to independently score your idea",
      "Weight dimensions by stage: pre-PMF, focus on problem-solution fit only",
      "Track score changes weekly as you de-risk—use as progress metric"
    ]
  },

  'revenue-model': {
    details: "Freemium model: Basic ($10), Premium ($20), Pro ($30) per trip. Primary revenue (70%) from Premium tier subscriptions. LTV:CAC target of 3.6:1 assumes $180 LTV and $50 CAC.",
    whyItMatters: "Unit economics determine whether business is fundable. 3.6:1 LTV:CAC is healthy, but assumes $50 CAC which is unvalidated. If CAC is $100, model breaks.",
    risksGaps: [
      "LTV assumes 12-month retention—may churn faster if value isn't delivered",
      "CAC of $50 is aspirational—travel tech CAC is typically $80-150",
      "Revenue model doesn't account for B2B (agency partnerships) upside"
    ],
    validateNext: [
      "Run $500 Facebook ad test to estimate real CAC",
      "Survey 20 target users: would they pay $20/trip? A/B test $10 vs $30",
      "Model scenario: if CAC = $100 and LTV = $120, can business still work?"
    ]
  },

  'team-hiring': {
    details: "Critical first 3 hires: ML Engineer (hallucination detection), Product Designer (trust signals UI), Growth Marketer (B2B partnerships). Each role addresses a top-3 risk.",
    whyItMatters: "Hiring determines execution speed and burn rate. Wrong first hire (e.g., hiring designer before ML engineer) could waste 6 months while AI trust remains unvalidated.",
    risksGaps: [
      "Can't afford 3 full-time hires on pre-seed budget—may need contractors",
      "ML engineer talent is expensive ($200K+ in SF)",
      "Founder may lack network to recruit A-players in these domains"
    ],
    validateNext: [
      "Post contract gigs on Upwork for ML hallucination audit ($5K budget)",
      "Recruit product designer from Dribbble with travel tech portfolio",
      "Join YC or On Deck to access curated founder-friendly talent pool"
    ]
  },

  'key-questions': {
    details: "4 critical unknowns: (1) Will users trust AI mid-trip? (2) Can venue data be sourced at <$0.10/query? (3) Will users pay $20-30? (4) Can B2B distribution achieve <$50 CAC? Each has a validation method.",
    whyItMatters: "These questions determine whether the business model works. If answers are 'no' to 2+ questions, idea may not be viable. Validation methods provide roadmap for de-risking.",
    risksGaps: [
      "Validation methods are time/cost estimates—may take longer",
      "Binary framing ('yes/no') misses nuance—reality is often 'it depends'",
      "Doesn't prioritize which question to answer first"
    ],
    validateNext: [
      "Rank questions by: which answer, if negative, kills the business?",
      "Start with highest-risk question (likely: user trust in AI mid-trip)",
      "Set decision criteria: e.g., if <60% of beta users trust AI, pivot"
    ]
  },

  'resources': {
    details: "13 cited sources: market research (Allied, McKinsey), competitive intel (TechCrunch, Mindtrip press), travel trends (Skift). Each source validates a specific claim in the report.",
    whyItMatters: "Citations provide traceability and allow you to audit assumptions. If a key source is outdated or low-quality, downstream analysis may be flawed.",
    risksGaps: [
      "Some sources may be behind paywalls or inaccessible",
      "Industry reports can have bias (e.g., funded by incumbents)",
      "Market data from 2023-2024 may not reflect 2026 reality"
    ],
    validateNext: [
      "Verify 3 most critical claims by cross-referencing 2 independent sources",
      "Flag any sources older than 18 months—may need to refresh data",
      "Interview 1-2 domain experts to pressure-test market sizing assumptions"
    ]
  },

  'tech-stack': {
    details: "React Native for cross-platform mobile app, GPT-4 for AI planning engine, Google Places API + web scraping for real-time venue data, Supabase for auth and database, Stripe for subscription billing.",
    whyItMatters: "Tech stack choices determine development speed, costs, and scalability. Heavy reliance on Google Places API creates vendor lock-in risk if pricing changes or API access is restricted.",
    risksGaps: [
      "Google Places API costs could spike at scale ($0.017/call × 100K users = $1,700/mo)",
      "GPT-4 hallucinations require manual verification layer—adds latency",
      "React Native may struggle with complex mapping features vs native iOS/Android"
    ],
    validateNext: [
      "Run 100-venue test with Places API to measure accuracy and cost",
      "Prototype hallucination detection layer using GPT-4 with retrieval augmentation",
      "Compare React Native vs native for map rendering performance"
    ]
  },

  'financials': {
    details: "$500K seed round provides 18-month runway at $28K/mo burn rate (2 founders + 1 contractor). Break-even at 1,400 paying users assuming $20 average revenue and 60% margin. Series A target: $50M ARR within 3 years.",
    whyItMatters: "Runway determines how long you have to hit PMF before needing more capital. 18 months is tight—need to show traction within 12 months to raise Series A on favorable terms.",
    risksGaps: [
      "Burn rate assumes no paid marketing—may need to increase to $50K/mo for growth",
      "Break-even math assumes 60% margin which is optimistic with API costs",
      "Series A fundraising environment could tighten if macro conditions worsen"
    ],
    validateNext: [
      "Model cash flow scenarios: conservative (50% margin) vs aggressive (paid ads)",
      "Set milestone-based burn rate: $20K pre-PMF, $40K post-PMF growth mode",
      "Build relationship with 2-3 Series A VCs now to de-risk future fundraising"
    ]
  }
};
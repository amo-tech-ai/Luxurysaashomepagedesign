interface Card {
  id: string;
  title: string;
  source: string;
  successCriteria: string;
  evidenceStatus: 'not-started' | 'in-progress' | 'complete';
  aiTip: string;
  columnId: string;
  sprintId: number;
}

export function generateKanbanCards(leanCanvas: any, opportunityCanvas: any): Card[] {
  const cards: Card[] = [];

  // Sprint 1: Foundation (Problem Validation)
  cards.push({
    id: 's1-1',
    title: 'Identify top 3 problem assumptions',
    source: 'Problem',
    successCriteria: 'Extract 3 testable assumptions from problem statement: severity, frequency, and urgency of pain',
    evidenceStatus: 'not-started',
    aiTip: 'Look for words like "struggle," "frustrated," or "manual" in your problem description. Each represents a testable assumption.',
    columnId: 'backlog',
    sprintId: 1
  });

  cards.push({
    id: 's1-2',
    title: 'Define ideal customer profile (ICP)',
    source: 'Customer',
    successCriteria: 'Create specific persona: industry, role, company size, pain triggers, budget authority',
    evidenceStatus: 'not-started',
    aiTip: 'Be specific: "VP of Sales at 50-200 person B2B SaaS companies" not "salespeople." Specificity = faster validation.',
    columnId: 'backlog',
    sprintId: 1
  });

  cards.push({
    id: 's1-3',
    title: 'Design customer interview script',
    source: 'Opportunity',
    successCriteria: '10-15 open-ended questions focusing on past behavior, not hypothetical future actions',
    evidenceStatus: 'not-started',
    aiTip: 'Ask "Tell me about the last time you faced [problem]" not "Would you use [solution]?" Past behavior predicts future action.',
    columnId: 'backlog',
    sprintId: 1
  });

  cards.push({
    id: 's1-4',
    title: 'Conduct 10 customer interviews',
    source: 'Problem',
    successCriteria: 'Complete 10 interviews, record notes, identify if 7+ confirm problem severity (70% validation threshold)',
    evidenceStatus: 'not-started',
    aiTip: 'Listen for unprompted mentions of the pain. If they don\'t bring it up naturally, the pain may not be severe enough.',
    columnId: 'backlog',
    sprintId: 1
  });

  // Sprint 2: Solution Fit
  cards.push({
    id: 's2-1',
    title: 'Map existing alternatives analysis',
    source: 'Competition',
    successCriteria: 'Document 3-5 current solutions customers use: features, pricing, satisfaction gaps',
    evidenceStatus: 'not-started',
    aiTip: 'Ask "What are you using today to solve this?" Their workarounds reveal what they value most.',
    columnId: 'backlog',
    sprintId: 2
  });

  cards.push({
    id: 's2-2',
    title: 'Create solution mockup/prototype',
    source: 'Solution',
    successCriteria: 'Build clickable prototype (Figma/Balsamiq) showing core workflow in 3-5 screens',
    evidenceStatus: 'not-started',
    aiTip: 'Focus on the "magic moment"—the one action that delivers your UVP. Don\'t build everything yet.',
    columnId: 'backlog',
    sprintId: 2
  });

  cards.push({
    id: 's2-3',
    title: 'Run 5 solution demos',
    source: 'Solution',
    successCriteria: 'Show prototype to 5 target customers, measure: completion rate, confusion points, "wow" moments',
    evidenceStatus: 'not-started',
    aiTip: 'Watch their mouse/finger movements. Where do they hesitate? That\'s where your UX needs work.',
    columnId: 'backlog',
    sprintId: 2
  });

  cards.push({
    id: 's2-4',
    title: 'Document solution-fit insights',
    source: 'Opportunity',
    successCriteria: 'Compile: which features are must-haves vs nice-to-haves, workflow improvements needed',
    evidenceStatus: 'not-started',
    aiTip: 'Look for patterns across 5 demos. If 4/5 mention the same issue, it\'s critical. 1/5 = edge case.',
    columnId: 'backlog',
    sprintId: 2
  });

  // Sprint 3: Willingness to Pay
  cards.push({
    id: 's3-1',
    title: 'Design pricing experiments',
    source: 'Business Model',
    successCriteria: 'Test 3 price points ($X, $2X, $0.5X) with different customer segments',
    evidenceStatus: 'not-started',
    aiTip: 'Start high. It\'s easier to discount than to raise prices later. Test until you hear "ouch" then back off 20%.',
    columnId: 'backlog',
    sprintId: 3
  });

  cards.push({
    id: 's3-2',
    title: 'Create "Mafia Offer" campaign',
    source: 'Opportunity',
    successCriteria: 'Design irresistible early-access offer: price + guarantee + exclusivity + urgency',
    evidenceStatus: 'not-started',
    aiTip: 'Example: "First 10 customers: 50% off lifetime + 60-day money-back + exclusive Slack channel." Make them feel special.',
    columnId: 'backlog',
    sprintId: 3
  });

  cards.push({
    id: 's3-3',
    title: 'Collect 3 pre-orders or LOIs',
    source: 'Business Model',
    successCriteria: 'Get 3 paying customers (credit card) or signed Letters of Intent with purchase timeline',
    evidenceStatus: 'not-started',
    aiTip: 'LOIs are proof of intent. Pre-orders are proof of commitment. Always push for payment—it validates real demand.',
    columnId: 'backlog',
    sprintId: 3
  });

  cards.push({
    id: 's3-4',
    title: 'Analyze pricing feedback',
    source: 'Business Model',
    successCriteria: 'Document: conversion rate per price point, objections, willingness-to-pay ceiling',
    evidenceStatus: 'not-started',
    aiTip: 'If 80%+ say "too expensive," your positioning is wrong or ICP is wrong. If 80%+ say "yes immediately," you\'re underpriced.',
    columnId: 'backlog',
    sprintId: 3
  });

  // Sprint 4: Channel Validation
  cards.push({
    id: 's4-1',
    title: 'Test primary acquisition channel',
    source: 'Opportunity',
    successCriteria: 'Run 1 focused campaign (LinkedIn ads, cold email, community posts) for 100+ leads',
    evidenceStatus: 'not-started',
    aiTip: 'Test 1 channel deeply before spreading thin. You need 100+ data points to know if a channel works.',
    columnId: 'backlog',
    sprintId: 4
  });

  cards.push({
    id: 's4-2',
    title: 'Measure channel economics',
    source: 'Business Model',
    successCriteria: 'Calculate: Cost per lead, lead-to-trial %, trial-to-paid %, CAC, LTV',
    evidenceStatus: 'not-started',
    aiTip: 'Target CAC < 1/3 of LTV for healthy unit economics. If CAC > LTV, pivot channel or improve conversion rate.',
    columnId: 'backlog',
    sprintId: 4
  });

  cards.push({
    id: 's4-3',
    title: 'Optimize messaging & positioning',
    source: 'Solution',
    successCriteria: 'A/B test 3 value propositions, track click-through rate and conversion rate',
    evidenceStatus: 'not-started',
    aiTip: 'Test outcome-focused vs feature-focused messaging. "Save 10 hours/week" usually beats "AI-powered automation."',
    columnId: 'backlog',
    sprintId: 4
  });

  cards.push({
    id: 's4-4',
    title: 'Document channel playbook',
    source: 'Opportunity',
    successCriteria: 'Create repeatable process: ad copy templates, email sequences, conversion funnel',
    evidenceStatus: 'not-started',
    aiTip: 'Write down exactly what worked so you can hand it off to a contractor or team member later.',
    columnId: 'backlog',
    sprintId: 4
  });

  // Sprint 5: MVP Build
  cards.push({
    id: 's5-1',
    title: 'Define MVP scope',
    source: 'Solution',
    successCriteria: 'List must-have features only (what delivers core value), defer everything else to v2',
    evidenceStatus: 'not-started',
    aiTip: 'MVP = Minimum Viable Product, not Barely Functioning Product. It must deliver the promised outcome, even if manually.',
    columnId: 'backlog',
    sprintId: 5
  });

  cards.push({
    id: 's5-2',
    title: 'Recruit 5 design partners',
    source: 'Customer',
    successCriteria: 'Get 5 customers to commit to weekly feedback calls during build phase',
    evidenceStatus: 'not-started',
    aiTip: 'Offer free lifetime access in exchange for weekly 30-min feedback calls. Their input will save you months of wasted build time.',
    columnId: 'backlog',
    sprintId: 5
  });

  cards.push({
    id: 's5-3',
    title: 'Ship MVP to design partners',
    source: 'Solution',
    successCriteria: 'Launch functional MVP (even if buggy) to 5 design partners, track usage daily',
    evidenceStatus: 'not-started',
    aiTip: 'Ship early. If you\'re not embarrassed by v1, you shipped too late. Design partners expect bugs—they want to see progress.',
    columnId: 'backlog',
    sprintId: 5
  });

  cards.push({
    id: 's5-4',
    title: 'Collect product feedback',
    source: 'Solution',
    successCriteria: 'Weekly calls with design partners: what works, what\'s broken, what\'s missing',
    evidenceStatus: 'not-started',
    aiTip: 'Ask "What would make you use this daily?" not "What features do you want?" Focus on usage patterns, not feature requests.',
    columnId: 'backlog',
    sprintId: 5
  });

  // Sprint 6: Early Traction
  cards.push({
    id: 's6-1',
    title: 'Launch to broader audience',
    source: 'Opportunity',
    successCriteria: 'Open signups publicly, target 50 active users or $5K MRR',
    evidenceStatus: 'not-started',
    aiTip: 'Launch on ProductHunt, Hacker News, or niche communities. Timing matters—avoid Fridays and holidays.',
    columnId: 'backlog',
    sprintId: 6
  });

  cards.push({
    id: 's6-2',
    title: 'Track key usage metrics',
    source: 'Market',
    successCriteria: 'Monitor: DAU/MAU ratio, feature adoption, churn rate, NPS score',
    evidenceStatus: 'not-started',
    aiTip: 'DAU/MAU > 20% = sticky product. <10% = users aren\'t finding value. Track this weekly, not monthly.',
    columnId: 'backlog',
    sprintId: 6
  });

  cards.push({
    id: 's6-3',
    title: 'Achieve traction milestone',
    source: 'Business Model',
    successCriteria: '$5K MRR or 50 active users—proof you\'ve achieved product-market fit signal',
    evidenceStatus: 'not-started',
    aiTip: 'This isn\'t PMF yet, but it\'s a strong signal. If you hit this, you\'re in the top 10% of startups. Time to scale.',
    columnId: 'backlog',
    sprintId: 6
  });

  cards.push({
    id: 's6-4',
    title: 'Document 90-day learnings',
    source: 'Opportunity',
    successCriteria: 'Write retrospective: what validated, what failed, what\'s next, key pivots made',
    evidenceStatus: 'not-started',
    aiTip: 'This document becomes your pitch deck story. Investors love to see systematic validation—it shows you\'re not guessing.',
    columnId: 'backlog',
    sprintId: 6
  });

  return cards;
}
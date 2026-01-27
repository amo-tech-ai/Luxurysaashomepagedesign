/**
 * Deck Analysis Service
 * 
 * Provides intelligent analysis of pitch deck data using AI
 * Can integrate with OpenAI, Anthropic, or other LLM providers
 * 
 * @version 1.0.0
 */

export interface DeckAnalysisInput {
  fundingStage: string;
  industry: string;
  subCategory?: string;
  problem: string;
  solution: string;
  differentiator?: string;
  users: string;
  revenue: string;
  growth?: string;
  companyName: string;
  oneLiner: string;
  marketSize?: string;
  competitors?: string;
}

export interface DeckAnalysisResult {
  storyClarity: 'Weak' | 'Adequate' | 'Strong';
  problemSolutionFit: 'Weak' | 'Adequate' | 'Strong';
  tractionStrength: string; // e.g., "Good for Seed"
  marketNarrative: 'Weak' | 'Adequate' | 'Strong';
  investorPreview: string[];
  potentialGaps: string[];
  deckComparison: string;
  deckScope: string;
  confidenceLevel: 'Building' | 'Medium' | 'High';
  confidenceScore: number; // 0-100
}

/**
 * Analyzes deck data and returns intelligent insights
 * Uses rule-based logic (can be replaced with AI API)
 */
export async function analyzeDeck(
  input: DeckAnalysisInput
): Promise<DeckAnalysisResult> {
  // Parse numeric values
  const users = parseInt(input.users) || 0;
  const revenue = parseFloat(input.revenue.replace(/[^0-9.]/g, '')) || 0;
  const growth = parseFloat(input.growth || '0') || 0;

  // Determine stage
  const stage = getStageLabel(input.fundingStage);

  // Calculate story clarity
  const storyClarity = calculateStoryClarity(input);

  // Calculate problem-solution fit
  const problemSolutionFit = calculateProblemSolutionFit(input);

  // Calculate traction strength (stage-aware)
  const tractionStrength = calculateTractionStrength(
    users,
    revenue,
    input.fundingStage
  );

  // Calculate market narrative
  const marketNarrative = calculateMarketNarrative(input);

  // Generate investor preview
  const investorPreview = generateInvestorPreview(input, stage);

  // Detect potential gaps
  const potentialGaps = detectGaps(input, users, revenue);

  // Generate deck comparison
  const deckComparison = generateDeckComparison(input, stage);

  // Generate deck scope
  const deckScope = generateDeckScope(stage);

  // Calculate confidence
  const { level, score } = calculateConfidence(input, users, revenue);

  return {
    storyClarity,
    problemSolutionFit,
    tractionStrength,
    marketNarrative,
    investorPreview,
    potentialGaps,
    deckComparison,
    deckScope,
    confidenceLevel: level,
    confidenceScore: score,
  };
}

/**
 * Calculate story clarity based on completeness
 */
function calculateStoryClarity(
  input: DeckAnalysisInput
): 'Weak' | 'Adequate' | 'Strong' {
  if (input.problem && input.solution && input.oneLiner) {
    return 'Strong';
  }
  if (input.problem && input.solution) {
    return 'Adequate';
  }
  return 'Weak';
}

/**
 * Calculate problem-solution fit
 */
function calculateProblemSolutionFit(
  input: DeckAnalysisInput
): 'Weak' | 'Adequate' | 'Strong' {
  if (input.problem && input.solution && input.differentiator) {
    return 'Strong';
  }
  if (input.problem && input.solution) {
    return 'Adequate';
  }
  return 'Weak';
}

/**
 * Calculate traction strength with stage-aware benchmarks
 */
function calculateTractionStrength(
  users: number,
  revenue: number,
  fundingStage: string
): string {
  const stage = getStageLabel(fundingStage);

  if (fundingStage === 'pre-seed') {
    if (users > 100 || revenue > 1) {
      return `Strong for ${stage}`;
    }
    return `Early for ${stage}`;
  } else if (fundingStage === 'seed') {
    if (users > 1000 || revenue > 10) {
      return `Good for ${stage}`;
    }
    return `Light for ${stage}`;
  } else if (fundingStage === 'series-a') {
    if (users > 10000 || revenue > 100) {
      return `Strong for ${stage}`;
    }
    return `Needs growth for ${stage}`;
  }

  return `Adequate for ${stage}`;
}

/**
 * Calculate market narrative strength
 */
function calculateMarketNarrative(
  input: DeckAnalysisInput
): 'Weak' | 'Adequate' | 'Strong' {
  if (input.marketSize && input.competitors) {
    return 'Strong';
  }
  if (input.marketSize) {
    return 'Adequate';
  }
  return 'Weak';
}

/**
 * Generate investor preview bullets
 */
function generateInvestorPreview(
  input: DeckAnalysisInput,
  stage: string
): string[] {
  const preview: string[] = [];

  // Always include problem clarity
  if (input.problem) {
    preview.push('A clear problem statement backed by market context');
  }

  // Include traction if available
  const users = parseInt(input.users) || 0;
  const revenue = parseFloat(input.revenue.replace(/[^0-9.]/g, '')) || 0;

  if (users > 0 || revenue > 0) {
    const tractionType = revenue > 0 ? 'revenue' : 'user growth';
    preview.push(`Evidence of product-market fit through early ${tractionType}`);
  } else {
    preview.push('Foundational narrative appropriate for early-stage');
  }

  // Always include stage-focused narrative
  preview.push(`A focused narrative appropriate for ${stage} stage`);

  return preview;
}

/**
 * Detect potential gaps and risks
 */
function detectGaps(
  input: DeckAnalysisInput,
  users: number,
  revenue: number
): string[] {
  const gaps: string[] = [];

  // Check traction
  if (users < 100 && revenue < 1) {
    gaps.push('Traction metrics are early');
  }

  // Check market size
  if (!input.marketSize) {
    gaps.push('Market size will be directional, not exact');
  }

  // Check competitive landscape
  if (!input.competitors) {
    gaps.push('Competitive landscape may be limited');
  }

  // Check differentiation
  if (!input.differentiator) {
    gaps.push('Unique value proposition could be stronger');
  }

  // Return max 3 gaps
  return gaps.slice(0, 3);
}

/**
 * Generate deck comparison statement
 */
function generateDeckComparison(input: DeckAnalysisInput, stage: string): string {
  const hasGoodTraction =
    parseInt(input.users) > 100 ||
    parseFloat(input.revenue.replace(/[^0-9.]/g, '')) > 1;

  const hasClearStory = input.problem && input.solution && input.oneLiner;

  if (hasGoodTraction && hasClearStory) {
    return `This deck is similar to strong ${stage}-stage decks in that it has clear problem-solution alignment and meaningful early traction signals.`;
  } else if (hasClearStory) {
    return `This deck is similar to strong ${stage}-stage decks in that it has clear problem-solution alignment and a focused narrative.`;
  } else if (hasGoodTraction) {
    return `This deck is similar to strong ${stage}-stage decks in that it demonstrates early traction and market validation.`;
  }

  return `This deck has the foundational elements expected in ${stage}-stage pitches, with room to strengthen narrative clarity.`;
}

/**
 * Generate deck scope explanation
 */
function generateDeckScope(stage: string): string {
  return `The deck will follow a standard ${stage} narrative: Problem → Solution → Market → Traction → Team → Ask, spanning 10-12 slides.`;
}

/**
 * Calculate AI confidence level and score
 */
function calculateConfidence(
  input: DeckAnalysisInput,
  users: number,
  revenue: number
): { level: 'Building' | 'Medium' | 'High'; score: number } {
  let score = 0;

  // Problem + Solution (25 points)
  if (input.problem && input.solution) {
    score += 25;
  }

  // Traction (25 points)
  if (users > 0 || revenue > 0) {
    score += 25;
  }

  // Market Size (20 points)
  if (input.marketSize) {
    score += 20;
  }

  // One-liner (15 points)
  if (input.oneLiner) {
    score += 15;
  }

  // Differentiator (15 points)
  if (input.differentiator) {
    score += 15;
  }

  // Determine level
  let level: 'Building' | 'Medium' | 'High';
  if (score >= 80) {
    level = 'High';
  } else if (score >= 60) {
    level = 'Medium';
  } else {
    level = 'Building';
  }

  return { level, score };
}

/**
 * Get readable stage label
 */
function getStageLabel(fundingStage: string): string {
  if (fundingStage === 'pre-seed') return 'Pre-Seed';
  if (fundingStage === 'seed') return 'Seed';
  if (fundingStage === 'series-a') return 'Series A';
  return 'Seed';
}

/**
 * AI-powered analysis (for future integration)
 * Uncomment and configure when ready to use real AI
 */
/*
export async function analyzeWithAI(
  input: DeckAnalysisInput
): Promise<DeckAnalysisResult> {
  const prompt = buildAnalysisPrompt(input);
  
  // Example: OpenAI integration
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'You are an expert startup investor and pitch deck analyst.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    }),
  });

  const data = await response.json();
  return parseAIResponse(data.choices[0].message.content);
}

function buildAnalysisPrompt(input: DeckAnalysisInput): string {
  return `
Analyze this startup pitch deck:

Context:
- Startup stage: ${input.fundingStage}
- Industry: ${input.industry}
- Sub-category: ${input.subCategory || 'Not specified'}
- Problem: ${input.problem}
- Solution: ${input.solution}
- Differentiation: ${input.differentiator || 'Not specified'}
- Users: ${input.users}
- Revenue (MRR): ${input.revenue}
- Growth (%): ${input.growth || 'Not specified'}

Provide analysis in this format:
- Story clarity: [Weak/Adequate/Strong]
- Problem-solution fit: [Weak/Adequate/Strong]
- Traction strength: [description] for ${input.fundingStage}
- Market narrative: [Weak/Adequate/Strong]

Also provide:
- What investors will see (2-3 bullets)
- Potential gaps (up to 3)
- Deck comparison (1 sentence)
- Deck scope (1 sentence about slide structure)
  `;
}
*/

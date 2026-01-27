/**
 * Deck Generation Service
 * 
 * Generates complete pitch deck content based on founder inputs
 * Provides slide-by-slide content generation
 * 
 * @version 1.0.0
 */

export interface SlideContent {
  slideNumber: number;
  title: string;
  type: 'cover' | 'problem' | 'solution' | 'market' | 'product' | 'traction' | 'business-model' | 'competition' | 'team' | 'financials' | 'ask' | 'closing';
  bulletPoints: string[];
  visualSuggestion: string;
  speakerNotes: string;
}

export interface GeneratedDeck {
  deckId: string;
  companyName: string;
  fundingStage: string;
  slides: SlideContent[];
  totalSlides: number;
  generatedAt: Date;
  estimatedPresentationTime: string; // e.g., "10-12 minutes"
}

export interface DeckGenerationInput {
  companyName: string;
  oneLiner: string;
  industry: string;
  subCategory?: string;
  fundingStage: string;
  problem: string;
  solution: string;
  differentiator?: string;
  users: string;
  revenue: string;
  growth?: string;
  marketSize?: string;
  competitors?: string;
  teamSize?: string;
  deckStyle: 'minimal' | 'bold' | 'classic';
  tone: 'professional' | 'bold' | 'technical';
}

/**
 * Generate complete pitch deck
 */
export async function generateDeck(
  input: DeckGenerationInput
): Promise<GeneratedDeck> {
  const slides: SlideContent[] = [];
  const deckId = generateDeckId();

  // Slide 1: Cover
  slides.push(generateCoverSlide(input));

  // Slide 2: Problem
  slides.push(generateProblemSlide(input));

  // Slide 3: Solution
  slides.push(generateSolutionSlide(input));

  // Slide 4: Market Opportunity
  if (input.marketSize) {
    slides.push(generateMarketSlide(input));
  }

  // Slide 5: Product/How It Works
  slides.push(generateProductSlide(input));

  // Slide 6: Traction
  if (input.users || input.revenue) {
    slides.push(generateTractionSlide(input));
  }

  // Slide 7: Business Model
  if (input.fundingStage === 'seed' || input.fundingStage === 'series-a') {
    slides.push(generateBusinessModelSlide(input));
  }

  // Slide 8: Competition
  if (input.competitors) {
    slides.push(generateCompetitionSlide(input));
  }

  // Slide 9: Why Now
  slides.push(generateWhyNowSlide(input));

  // Slide 10: Team (if applicable)
  if (input.teamSize) {
    slides.push(generateTeamSlide(input));
  }

  // Slide 11: The Ask
  slides.push(generateAskSlide(input));

  // Slide 12: Closing
  slides.push(generateClosingSlide(input));

  return {
    deckId,
    companyName: input.companyName,
    fundingStage: input.fundingStage,
    slides,
    totalSlides: slides.length,
    generatedAt: new Date(),
    estimatedPresentationTime: calculatePresentationTime(slides.length),
  };
}

/**
 * Generate individual slides
 */

function generateCoverSlide(input: DeckGenerationInput): SlideContent {
  return {
    slideNumber: 1,
    title: input.companyName,
    type: 'cover',
    bulletPoints: [
      input.oneLiner,
      `${getFundingStageLabel(input.fundingStage)} Pitch Deck`,
    ],
    visualSuggestion: 'Company logo with clean background',
    speakerNotes: `Introduce yourself and the company. Keep it brief (30 seconds).`,
  };
}

function generateProblemSlide(input: DeckGenerationInput): SlideContent {
  const bullets = [input.problem];

  // Add context if industry is specialized
  if (input.industry === 'healthcare' || input.industry === 'fintech') {
    bullets.push(
      `This affects ${input.industry} companies managing complex workflows`
    );
  }

  return {
    slideNumber: 2,
    title: 'The Problem',
    type: 'problem',
    bulletPoints: bullets,
    visualSuggestion: 'Icon or illustration showing pain point',
    speakerNotes: `Explain the problem in relatable terms. Use a customer story if possible.`,
  };
}

function generateSolutionSlide(input: DeckGenerationInput): SlideContent {
  const bullets = [input.solution];

  if (input.differentiator) {
    bullets.push(`Our approach: ${input.differentiator}`);
  }

  return {
    slideNumber: 3,
    title: 'Our Solution',
    type: 'solution',
    bulletPoints: bullets,
    visualSuggestion: 'Product screenshot or demo flow',
    speakerNotes: `Show how your solution solves the problem. Keep it simple.`,
  };
}

function generateMarketSlide(input: DeckGenerationInput): SlideContent {
  const bullets = [];

  if (input.marketSize) {
    bullets.push(`Total Addressable Market: ${input.marketSize}`);
  }

  bullets.push(`Focus: ${input.industry} ${input.subCategory || 'sector'}`);

  return {
    slideNumber: 4,
    title: 'Market Opportunity',
    type: 'market',
    bulletPoints: bullets,
    visualSuggestion: 'TAM/SAM/SOM pyramid or market sizing chart',
    speakerNotes: `Explain market size and your specific focus area.`,
  };
}

function generateProductSlide(input: DeckGenerationInput): SlideContent {
  return {
    slideNumber: 5,
    title: 'How It Works',
    type: 'product',
    bulletPoints: [
      'Step 1: [Customer discovers problem]',
      'Step 2: [Implements solution]',
      'Step 3: [Sees results]',
    ],
    visualSuggestion: 'Product flow diagram or 3-step visual',
    speakerNotes: `Walk through the product flow. Use simple, clear steps.`,
  };
}

function generateTractionSlide(input: DeckGenerationInput): SlideContent {
  const bullets = [];

  const users = parseInt(input.users) || 0;
  const revenue = parseFloat(input.revenue.replace(/[^0-9.]/g, '')) || 0;
  const growth = parseFloat(input.growth || '0') || 0;

  if (users > 0) {
    bullets.push(`${users.toLocaleString()} users`);
  }

  if (revenue > 0) {
    bullets.push(`$${revenue.toLocaleString()}K MRR`);
  }

  if (growth > 0) {
    bullets.push(`${growth}% month-over-month growth`);
  }

  if (bullets.length === 0) {
    bullets.push('Early product validation in progress');
  }

  return {
    slideNumber: 6,
    title: 'Traction',
    type: 'traction',
    bulletPoints: bullets,
    visualSuggestion: 'Growth chart showing upward trend',
    speakerNotes: `Highlight your strongest metrics. Tell the growth story.`,
  };
}

function generateBusinessModelSlide(input: DeckGenerationInput): SlideContent {
  const bullets = [];

  // Infer business model from industry
  if (input.industry === 'enterprise-saas') {
    bullets.push('SaaS subscription model');
    bullets.push('Tiered pricing based on usage');
  } else if (input.industry === 'retail-ecommerce') {
    bullets.push('Transaction fee model');
    bullets.push('Revenue from both sides of marketplace');
  } else if (input.industry === 'financial-services') {
    bullets.push('Transaction-based revenue');
    bullets.push('Premium features for enterprise');
  } else if (input.industry === 'sales-marketing') {
    bullets.push('Performance-based pricing');
    bullets.push('Subscription with usage tiers');
  } else {
    bullets.push('Recurring revenue model');
    bullets.push('Customer acquisition via [channel]');
  }

  return {
    slideNumber: 7,
    title: 'Business Model',
    type: 'business-model',
    bulletPoints: bullets,
    visualSuggestion: 'Revenue model diagram or pricing tiers',
    speakerNotes: `Explain how you make money. Be clear and concise.`,
  };
}

function generateCompetitionSlide(input: DeckGenerationInput): SlideContent {
  const bullets = [
    input.competitors || 'Existing alternatives in the market',
    `We differentiate through: ${input.differentiator || 'unique approach'}`,
  ];

  return {
    slideNumber: 8,
    title: 'Competition',
    type: 'competition',
    bulletPoints: bullets,
    visualSuggestion: '2x2 competitive matrix or comparison table',
    speakerNotes: `Acknowledge competition but show your unique advantage.`,
  };
}

function generateWhyNowSlide(input: DeckGenerationInput): SlideContent {
  const bullets = [
    'Market timing is critical for this solution',
    `${input.industry} is rapidly evolving`,
    'Customer behavior has shifted to demand better solutions',
  ];

  return {
    slideNumber: 9,
    title: 'Why Now',
    type: 'market',
    bulletPoints: bullets,
    visualSuggestion: 'Timeline showing market shifts',
    speakerNotes: `Explain why this is the perfect time for your solution.`,
  };
}

function generateTeamSlide(input: DeckGenerationInput): SlideContent {
  return {
    slideNumber: 10,
    title: 'Team',
    type: 'team',
    bulletPoints: [
      `Team of ${input.teamSize || '3-5'} with deep industry expertise`,
      'Combined experience in [relevant areas]',
      'Previously at [notable companies]',
    ],
    visualSuggestion: 'Team photos with brief bios',
    speakerNotes: `Highlight relevant experience and why you're the team to execute.`,
  };
}

function generateAskSlide(input: DeckGenerationInput): SlideContent {
  const stage = input.fundingStage;
  let amount = '';

  if (stage === 'pre-seed') {
    amount = '$500K - $1M';
  } else if (stage === 'seed') {
    amount = '$2M - $5M';
  } else if (stage === 'series-a') {
    amount = '$8M - $15M';
  }

  return {
    slideNumber: 11,
    title: 'The Ask',
    type: 'ask',
    bulletPoints: [
      `Raising ${amount} ${getFundingStageLabel(stage)} round`,
      'Use of funds: Product development, team expansion, go-to-market',
      '18-month runway to achieve [key milestones]',
    ],
    visualSuggestion: 'Pie chart showing fund allocation',
    speakerNotes: `Be specific about amount, use of funds, and what you'll achieve.`,
  };
}

function generateClosingSlide(input: DeckGenerationInput): SlideContent {
  return {
    slideNumber: 12,
    title: 'Thank You',
    type: 'closing',
    bulletPoints: [
      input.companyName,
      'Questions?',
      '[Contact information]',
    ],
    visualSuggestion: 'Company logo with contact details',
    speakerNotes: `Open for questions. Have your contact info ready.`,
  };
}

/**
 * Helper functions
 */

function generateDeckId(): string {
  return `deck_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

function getFundingStageLabel(stage: string): string {
  if (stage === 'pre-seed') return 'Pre-Seed';
  if (stage === 'seed') return 'Seed';
  if (stage === 'series-a') return 'Series A';
  return 'Seed';
}

function calculatePresentationTime(slideCount: number): string {
  const minMinutes = Math.floor(slideCount * 0.8);
  const maxMinutes = Math.ceil(slideCount * 1.2);
  return `${minMinutes}-${maxMinutes} minutes`;
}

/**
 * Export deck to different formats
 */

export interface ExportOptions {
  format: 'json' | 'markdown' | 'pdf';
  includeNotes: boolean;
}

export async function exportDeck(
  deck: GeneratedDeck,
  options: ExportOptions
): Promise<string | Blob> {
  switch (options.format) {
    case 'json':
      return JSON.stringify(deck, null, 2);

    case 'markdown':
      return generateMarkdown(deck, options.includeNotes);

    case 'pdf':
      // TODO: Implement PDF generation
      throw new Error('PDF export not yet implemented. Use print-to-PDF for now.');

    default:
      throw new Error(`Unsupported format: ${options.format}`);
  }
}

function generateMarkdown(deck: GeneratedDeck, includeNotes: boolean): string {
  let markdown = `# ${deck.companyName}\n\n`;
  markdown += `**Funding Stage:** ${getFundingStageLabel(deck.fundingStage)}\n`;
  markdown += `**Total Slides:** ${deck.totalSlides}\n`;
  markdown += `**Estimated Time:** ${deck.estimatedPresentationTime}\n\n`;
  markdown += `---\n\n`;

  deck.slides.forEach((slide) => {
    markdown += `## Slide ${slide.slideNumber}: ${slide.title}\n\n`;
    
    slide.bulletPoints.forEach((point) => {
      markdown += `- ${point}\n`;
    });

    if (includeNotes) {
      markdown += `\n**Visual:** ${slide.visualSuggestion}\n`;
      markdown += `**Notes:** ${slide.speakerNotes}\n`;
    }

    markdown += `\n---\n\n`;
  });

  return markdown;
}

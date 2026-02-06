/**
 * Comprehensive Validator Edge Function
 * 
 * Generates 14-section validation reports with:
 * - Executive Summary with GO/CAUTION/NO-GO verdict
 * - 7-dimension scoring
 * - TAM/SAM/SOM analysis
 * - Highlights & Red Flags
 * - Market & Execution factors
 * 
 * Environment Variables Required:
 * - GEMINI_API_KEY: Google AI Studio API key
 */

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ValidationRequest {
  startupId: string;
  canvasData?: any;
}

interface DimensionScore {
  name: string;
  score: number;
  weight: number;
  factors: string[];
}

interface ValidationReport {
  // Executive Summary
  verdict: 'go' | 'caution' | 'no_go';
  overallScore: number;
  summary: string;
  
  // 7-Dimension Scoring
  dimensions: {
    problemClarity: DimensionScore;
    solutionStrength: DimensionScore;
    marketSize: DimensionScore;
    competition: DimensionScore;
    businessModel: DimensionScore;
    teamFit: DimensionScore;
    timing: DimensionScore;
  };
  
  // Highlights & Red Flags
  highlights: string[];
  redFlags: string[];
  
  // Market Sizing
  tam: number;
  sam: number;
  som: number;
  marketMethodology: string;
  
  // 14 Sections
  sections: {
    executiveSummary: ReportSection;
    problemAnalysis: ReportSection;
    solutionAssessment: ReportSection;
    marketSize: ReportSection;
    competition: ReportSection;
    businessModel: ReportSection;
    goToMarket: ReportSection;
    teamAssessment: ReportSection;
    timingAnalysis: ReportSection;
    riskAssessment: ReportSection;
    financialProjections: ReportSection;
    validationStatus: ReportSection;
    recommendations: ReportSection;
    appendix: ReportSection;
  };
}

interface ReportSection {
  title: string;
  content: string;
  score?: number;
  insights?: string[];
  citations?: string[];
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { startupId, canvasData } = await req.json() as ValidationRequest;

    if (!startupId) {
      throw new Error('Missing required parameter: startupId');
    }

    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get canvas data if not provided
    let canvas = canvasData;
    if (!canvas) {
      const { data } = await supabaseClient
        .from('lean_canvases')
        .select('*')
        .eq('startup_id', startupId)
        .maybeSingle();
      canvas = data;
    }

    // Get conversation history for context
    const { data: sessions } = await supabaseClient
      .from('validation_sessions')
      .select('id')
      .eq('startup_id', startupId)
      .eq('is_active', true)
      .limit(1);

    let conversationContext = '';
    if (sessions && sessions.length > 0) {
      const { data: conversations } = await supabaseClient
        .from('validation_conversations')
        .select('role, content')
        .eq('session_id', sessions[0].id)
        .order('created_at', { ascending: false })
        .limit(30);

      if (conversations && conversations.length > 0) {
        conversationContext = conversations
          .reverse()
          .map((c) => `${c.role}: ${c.content}`)
          .join('\n');
      }
    }

    // Generate comprehensive report with Gemini
    const report = await generateComprehensiveReport(canvas, conversationContext);

    // Save to database
    const { data: savedReport } = await supabaseClient
      .from('validation_reports')
      .insert({
        startup_id: startupId,
        verdict: report.verdict,
        overall_score: report.overallScore,
        dimension_scores: {
          problemClarity: report.dimensions.problemClarity.score,
          solutionStrength: report.dimensions.solutionStrength.score,
          marketSize: report.dimensions.marketSize.score,
          competition: report.dimensions.competition.score,
          businessModel: report.dimensions.businessModel.score,
          teamFit: report.dimensions.teamFit.score,
          timing: report.dimensions.timing.score,
        },
        tam: report.tam,
        sam: report.sam,
        som: report.som,
        highlights: report.highlights,
        red_flags: report.redFlags,
      })
      .select()
      .single();

    return new Response(
      JSON.stringify(report),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in validator-run function:', error);
    return new Response(
      JSON.stringify({
        error: error.message || 'Internal server error',
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

async function generateComprehensiveReport(
  canvas: any,
  conversationContext: string
): Promise<ValidationReport> {
  const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
  if (!geminiApiKey) {
    throw new Error('GEMINI_API_KEY not configured');
  }

  const prompt = buildComprehensivePrompt(canvas, conversationContext);

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [{ text: prompt }],
          },
        ],
        generationConfig: {
          temperature: 0.3,
          maxOutputTokens: 4000,
        },
      }),
    }
  );

  if (!response.ok) {
    throw new Error(`Gemini API error: ${response.status}`);
  }

  const data = await response.json();
  const aiResponse = data.candidates[0].content.parts[0].text;

  // Parse JSON response
  try {
    const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }
  } catch (e) {
    console.error('Failed to parse AI response:', e);
  }

  // Fallback
  return generateFallbackReport(canvas);
}

function buildComprehensivePrompt(canvas: any, conversationContext: string): string {
  return `You are a startup validation expert. Generate a comprehensive 14-section validation report.

CANVAS DATA:
${JSON.stringify(canvas, null, 2)}

CONVERSATION CONTEXT:
${conversationContext || 'No conversations yet'}

Generate a COMPLETE JSON report with this EXACT structure:

{
  "verdict": "go" | "caution" | "no_go",
  "overallScore": 0-100,
  "summary": "3-sentence executive summary",
  "dimensions": {
    "problemClarity": {
      "name": "Problem Clarity",
      "score": 0-10,
      "weight": 15,
      "factors": ["Pain severity: X/10", "Frequency: Daily", "Urgency: High"]
    },
    "solutionStrength": {
      "name": "Solution Strength",
      "score": 0-10,
      "weight": 15,
      "factors": ["Uniqueness: X/10", "Feasibility: High", "Defensibility: Medium"]
    },
    "marketSize": {
      "name": "Market Size",
      "score": 0-10,
      "weight": 15,
      "factors": ["TAM: $XB", "Growth rate: X%", "Accessibility: High"]
    },
    "competition": {
      "name": "Competition",
      "score": 0-10,
      "weight": 10,
      "factors": ["Differentiation: Strong", "Barriers: Medium", "Market gaps: Identified"]
    },
    "businessModel": {
      "name": "Business Model",
      "score": 0-10,
      "weight": 15,
      "factors": ["Unit economics: Healthy", "Scalability: High", "Revenue model: Validated"]
    },
    "teamFit": {
      "name": "Team Fit",
      "score": 0-10,
      "weight": 15,
      "factors": ["Domain expertise: High", "Execution ability: Strong", "Commitment: Full-time"]
    },
    "timing": {
      "name": "Timing",
      "score": 0-10,
      "weight": 15,
      "factors": ["Market readiness: High", "Trends: Favorable", "Competition timing: Good"]
    }
  },
  "highlights": [
    "Strength 1 (specific)",
    "Strength 2 (specific)",
    "Strength 3 (specific)",
    "Strength 4 (specific)"
  ],
  "redFlags": [
    "Concern 1 (specific)",
    "Concern 2 (specific)",
    "Concern 3 (specific)",
    "Concern 4 (specific)"
  ],
  "tam": 12000000000,
  "sam": 1200000000,
  "som": 120000000,
  "marketMethodology": "Brief explanation of how TAM/SAM/SOM were calculated",
  "sections": {
    "executiveSummary": {
      "title": "Executive Summary",
      "content": "Comprehensive 3-paragraph summary covering verdict, key strengths, main concerns, and recommendation",
      "score": 72,
      "insights": ["Key insight 1", "Key insight 2"]
    },
    "problemAnalysis": {
      "title": "Problem Analysis",
      "content": "Deep analysis of problem clarity, pain severity, frequency, urgency, and target customer segments",
      "score": 8,
      "insights": ["Problem insight 1", "Problem insight 2"]
    },
    "solutionAssessment": {
      "title": "Solution Assessment",
      "content": "Evaluation of solution uniqueness, feasibility, 10x improvement factor, and competitive advantages",
      "score": 7,
      "insights": ["Solution insight 1", "Solution insight 2"]
    },
    "marketSize": {
      "title": "Market Size Analysis",
      "content": "TAM/SAM/SOM breakdown with methodology, growth rates, market trends, and addressable segments",
      "score": 8,
      "insights": ["Market insight 1", "Market insight 2"]
    },
    "competition": {
      "title": "Competitive Landscape",
      "content": "Direct competitors, indirect alternatives, competitive advantages, barriers to entry, and market positioning",
      "score": 6,
      "insights": ["Competition insight 1", "Competition insight 2"]
    },
    "businessModel": {
      "title": "Business Model",
      "content": "Revenue streams, pricing strategy, unit economics, cost structure, and scalability assessment",
      "score": 7,
      "insights": ["Business model insight 1", "Business model insight 2"]
    },
    "goToMarket": {
      "title": "Go-to-Market Strategy",
      "content": "Customer acquisition channels, sales strategy, marketing approach, and growth tactics",
      "score": 6,
      "insights": ["GTM insight 1", "GTM insight 2"]
    },
    "teamAssessment": {
      "title": "Team Assessment",
      "content": "Founder-market fit, domain expertise, team completeness, and execution capability",
      "score": 7,
      "insights": ["Team insight 1", "Team insight 2"]
    },
    "timingAnalysis": {
      "title": "Timing Analysis",
      "content": "Market readiness, macro trends, technology maturity, and competitive timing assessment",
      "score": 8,
      "insights": ["Timing insight 1", "Timing insight 2"]
    },
    "riskAssessment": {
      "title": "Risk Assessment",
      "content": "Top 5 risks with severity ratings and mitigation strategies",
      "insights": ["Risk 1: High severity", "Risk 2: Medium severity", "Risk 3: Medium severity"]
    },
    "financialProjections": {
      "title": "Financial Projections",
      "content": "3-year forecast assumptions, revenue projections, cost structure, and key financial metrics",
      "insights": ["Year 1: $XM ARR", "Year 3: $YM ARR", "Break-even: Month Z"]
    },
    "validationStatus": {
      "title": "Validation Status",
      "content": "Customer interviews completed, traction evidence, assumption validation, and next validation steps",
      "score": 5,
      "insights": ["Validation insight 1", "Validation insight 2"]
    },
    "recommendations": {
      "title": "Next Steps",
      "content": "Top 3 prioritized actions with rationale and success metrics",
      "insights": ["Action 1: Highest priority", "Action 2: Quick win", "Action 3: Strategic move"]
    },
    "appendix": {
      "title": "Appendix",
      "content": "Data sources, methodology notes, benchmark comparisons, and reference materials",
      "citations": ["Source 1", "Source 2", "Source 3"]
    }
  }
}

VERDICT LOGIC:
- GO (75-100): Strong foundation, proceed with confidence
- CAUTION (50-74): Address red flags before scaling
- NO-GO (0-49): Significant pivot or validation needed

SCORING RULES:
- Overall score = weighted average of 7 dimensions
- Each dimension: 0-10 scale
- Be specific in factors and insights
- Base TAM/SAM/SOM on real market data or reasonable estimates
- Include at least 4 highlights and 4 red flags

Generate the complete JSON report now:`;
}

function generateFallbackReport(canvas: any): ValidationReport {
  const hasData = canvas && (canvas.problem || canvas.solution);
  const overallScore = hasData ? 65 : 35;
  const verdict = overallScore >= 75 ? 'go' : overallScore >= 50 ? 'caution' : 'no_go';

  return {
    verdict,
    overallScore,
    summary: hasData
      ? 'Your startup shows potential with a clear problem and solution. Focus on customer validation and market sizing to strengthen your case.'
      : 'Complete your Lean Canvas to receive a comprehensive validation report with market analysis and recommendations.',
    dimensions: {
      problemClarity: {
        name: 'Problem Clarity',
        score: hasData ? 7 : 3,
        weight: 15,
        factors: [
          hasData ? 'Problem articulated' : 'Problem not defined',
          'Customer validation needed',
          'Pain severity assessment needed',
        ],
      },
      solutionStrength: {
        name: 'Solution Strength',
        score: hasData ? 6 : 3,
        weight: 15,
        factors: [
          hasData ? 'Solution proposed' : 'Solution not defined',
          'Uniqueness needs validation',
          'Feasibility not assessed',
        ],
      },
      marketSize: {
        name: 'Market Size',
        score: 5,
        weight: 15,
        factors: [
          'TAM calculation needed',
          'Market growth unknown',
          'Addressable market unclear',
        ],
      },
      competition: {
        name: 'Competition',
        score: 5,
        weight: 10,
        factors: [
          'Competitive analysis needed',
          'Differentiation unclear',
          'Market gaps not identified',
        ],
      },
      businessModel: {
        name: 'Business Model',
        score: 4,
        weight: 15,
        factors: [
          'Revenue model not validated',
          'Unit economics unknown',
          'Pricing not set',
        ],
      },
      teamFit: {
        name: 'Team Fit',
        score: 5,
        weight: 15,
        factors: [
          'Team composition unknown',
          'Domain expertise unclear',
          'Commitment level not assessed',
        ],
      },
      timing: {
        name: 'Timing',
        score: 6,
        weight: 15,
        factors: [
          'Market trends favorable',
          'Technology readiness unclear',
          'Competitive timing unknown',
        ],
      },
    },
    highlights: hasData
      ? [
          'Lean Canvas started',
          'Problem identified',
          'Solution proposed',
          'Early stage validation',
        ]
      : [
          'Getting started',
          'Platform available',
          'AI guidance ready',
          'Validation tools accessible',
        ],
    redFlags: hasData
      ? [
          'No customer validation yet',
          'Market size unknown',
          'Competition not analyzed',
          'No traction evidence',
        ]
      : [
          'Canvas incomplete',
          'No problem validation',
          'No solution validation',
          'No market research',
        ],
    tam: 10000000000,
    sam: 1000000000,
    som: 100000000,
    marketMethodology: 'Estimated based on similar markets. Requires detailed research.',
    sections: {
      executiveSummary: {
        title: 'Executive Summary',
        content: hasData
          ? 'Your startup idea has been documented in the Lean Canvas with a defined problem and solution. To move forward confidently, you need to validate these assumptions with customer interviews, research market size, analyze competition, and test your business model assumptions. The foundation is in place, but execution depends on rigorous validation.'
          : 'Complete your Lean Canvas to unlock a comprehensive validation report. Define your problem, solution, target customers, and unique value proposition to receive detailed analysis across 14 dimensions including market sizing, competitive landscape, and financial projections.',
        score: overallScore,
        insights: [
          'Canvas completion is first priority',
          'Customer validation critical',
          'Market research needed',
        ],
      },
      problemAnalysis: {
        title: 'Problem Analysis',
        content: hasData
          ? 'Your problem statement provides a starting point. To strengthen this section, conduct 15-20 customer interviews to validate problem severity, frequency, and urgency. Document specific pain points, quantify the cost of the problem, and identify what alternatives customers currently use.'
          : 'Define the problem your startup solves. Who experiences this problem? How often? What does it cost them? What solutions have they tried?',
        score: hasData ? 7 : 3,
        insights: [
          'Interview target customers',
          'Quantify pain severity',
          'Document alternatives tried',
        ],
      },
      solutionAssessment: {
        title: 'Solution Assessment',
        content: hasData
          ? 'Your solution addresses the stated problem. Validate solution-problem fit by showing prototypes to customers, measuring their willingness to pay, and identifying your unique advantages over existing alternatives.'
          : 'Describe your solution. Why is it better than alternatives? What makes it defensible? How will you build it?',
        score: hasData ? 6 : 3,
        insights: [
          'Build minimum prototype',
          'Test with customers',
          'Identify unique advantages',
        ],
      },
      marketSize: {
        title: 'Market Size Analysis',
        content: 'Calculate TAM (Total Addressable Market), SAM (Serviceable Addressable Market), and SOM (Serviceable Obtainable Market). Research market growth rates, trends, and your realistic market share capture over 3-5 years.',
        score: 5,
        insights: [
          'Research TAM/SAM/SOM',
          'Identify growth trends',
          'Define target segments',
        ],
      },
      competition: {
        title: 'Competitive Landscape',
        content: 'Analyze direct competitors, indirect alternatives, and substitutes. Identify their strengths, weaknesses, pricing, and market positioning. Define your competitive advantages and barriers to entry.',
        score: 5,
        insights: [
          'Map competitor landscape',
          'Identify market gaps',
          'Define differentiation',
        ],
      },
      businessModel: {
        title: 'Business Model',
        content: 'Define revenue streams, pricing strategy, cost structure, and unit economics. Calculate LTV (Lifetime Value), CAC (Customer Acquisition Cost), and payback period. Ensure LTV/CAC ratio is healthy (>3x).',
        score: 4,
        insights: [
          'Test pricing models',
          'Calculate unit economics',
          'Validate revenue assumptions',
        ],
      },
      goToMarket: {
        title: 'Go-to-Market Strategy',
        content: 'Identify customer acquisition channels, develop sales process, and plan marketing strategy. Test different channels to find most cost-effective customer acquisition approach.',
        score: 4,
        insights: [
          'Test acquisition channels',
          'Build sales process',
          'Measure CAC by channel',
        ],
      },
      teamAssessment: {
        title: 'Team Assessment',
        content: 'Evaluate founder-market fit, team completeness, and execution capability. Identify skill gaps and plan for key hires. Demonstrate domain expertise and commitment.',
        score: 5,
        insights: [
          'Assess domain expertise',
          'Identify skill gaps',
          'Plan key hires',
        ],
      },
      timingAnalysis: {
        title: 'Timing Analysis',
        content: 'Analyze why now is the right time for this solution. Identify enabling technologies, market trends, regulatory changes, and competitive dynamics that create opportunity.',
        score: 6,
        insights: [
          'Identify enabling trends',
          'Research market readiness',
          'Analyze competitive timing',
        ],
      },
      riskAssessment: {
        title: 'Risk Assessment',
        content: 'Identify top 5 risks: market risk, execution risk, competition risk, team risk, and timing risk. For each risk, define severity (High/Medium/Low) and mitigation strategy.',
        insights: [
          'Market risk: No customer validation (High) - Start interviews',
          'Execution risk: No MVP (High) - Build prototype',
          'Competition risk: Unknown landscape (Medium) - Research competitors',
        ],
      },
      financialProjections: {
        title: 'Financial Projections',
        content: '3-year financial forecast needed. Project revenue, costs, headcount, and key metrics. Start with bottom-up assumptions based on validated unit economics.',
        insights: [
          'Year 1: Establish unit economics',
          'Year 2: Scale proven model',
          'Year 3: Accelerate growth',
        ],
      },
      validationStatus: {
        title: 'Validation Status',
        content: hasData
          ? 'Validation just beginning. Complete 15-20 customer interviews, build MVP, test pricing, and collect early traction metrics before scaling.'
          : 'No validation completed yet. Start with problem validation through customer interviews.',
        score: hasData ? 3 : 1,
        insights: [
          '0/15 customer interviews',
          'No MVP built',
          'No traction metrics',
        ],
      },
      recommendations: {
        title: 'Next Steps',
        content: 'Focus on three immediate priorities to strengthen your validation and move forward.',
        insights: [
          '1. Complete Lean Canvas with specific details',
          '2. Interview 15 target customers to validate problem',
          '3. Research market size and competitive landscape',
        ],
      },
      appendix: {
        title: 'Appendix',
        content: 'This report generated from preliminary Lean Canvas data. Complete validation requires customer interviews, market research, competitive analysis, and financial modeling.',
        citations: [
          'Lean Canvas methodology',
          'Startup validation best practices',
          'Market sizing frameworks',
        ],
      },
    },
  };
}

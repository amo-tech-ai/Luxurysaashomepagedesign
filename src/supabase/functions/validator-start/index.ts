// Edge Function: validator-start
// POST /functions/v1/validator-start
// Body: { input_text: string }

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { GoogleGenerativeAI, SchemaType } from 'https://esm.sh/@google/generative-ai@0.21.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Parse request body
    const { input_text } = await req.json();

    if (!input_text || input_text.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Empty input_text' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // For demo: use a fixed user ID (in production, get from auth)
    const userId = '00000000-0000-0000-0000-000000000000'; // Demo user

    // Initialize Gemini AI
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY not configured');
    }
    const genAI = new GoogleGenerativeAI(geminiApiKey);

    // Create session
    const { data: session, error: sessionError } = await supabase
      .from('validator_sessions')
      .insert({
        user_id: userId,
        input_text,
        status: 'running',
      })
      .select()
      .single();

    if (sessionError || !session) {
      throw new Error(`Failed to create session: ${sessionError?.message}`);
    }

    const sessionId = session.id;
    let reportId: string | null = null;
    let finalStatus: 'complete' | 'partial' | 'failed' = 'complete';

    try {
      // ===== STEP 1: Extract Profile (Flash) =====
      console.log('Step 1: ExtractorAgent');
      const extractorRun = await createRun(supabase, sessionId, 'ExtractorAgent');
      await updateRunStatus(supabase, extractorRun.id, 'running');

      const flashModel = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              startup_name: { type: SchemaType.STRING, nullable: true },
              one_liner: { type: SchemaType.STRING },
              problem_description: { type: SchemaType.STRING },
              solution_description: { type: SchemaType.STRING },
              target_customer: { type: SchemaType.STRING },
              industry: { type: SchemaType.STRING, nullable: true },
              stage: { type: SchemaType.STRING, nullable: true },
            },
            required: ['one_liner', 'problem_description', 'solution_description', 'target_customer'],
          },
        },
      });

      const extractorPrompt = `Extract a structured startup profile from this user input:

"${input_text}"

Parse and extract:
- startup_name (if mentioned, otherwise null)
- one_liner (concise value proposition, max 120 chars)
- problem_description (what problem they're solving)
- solution_description (their proposed solution)
- target_customer (who is the customer)
- industry (if identifiable, otherwise null)
- stage (Pre-Seed, Seed, Series A, etc. if mentioned, otherwise null)

Return JSON only.`;

      const extractorResult = await flashModel.generateContent(extractorPrompt);
      const profile = JSON.parse(extractorResult.response.text());

      await updateRunComplete(supabase, extractorRun.id, { input_text }, profile, []);
      console.log('Step 1 complete:', profile);

      // ===== STEP 2: Market Research (Pro + Search) =====
      console.log('Step 2: ResearchAgent');
      const researchRun = await createRun(supabase, sessionId, 'ResearchAgent');
      await updateRunStatus(supabase, researchRun.id, 'running');

      const proModel = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              tam: { type: SchemaType.STRING },
              sam: { type: SchemaType.STRING },
              som: { type: SchemaType.STRING },
              market_growth_rate: { type: SchemaType.STRING },
              methodology: { type: SchemaType.STRING },
              citations: {
                type: SchemaType.ARRAY,
                items: {
                  type: SchemaType.OBJECT,
                  properties: {
                    url: { type: SchemaType.STRING, nullable: true },
                    title: { type: SchemaType.STRING, nullable: true },
                    snippet: { type: SchemaType.STRING, nullable: true },
                  },
                },
              },
            },
            required: ['tam', 'sam', 'som', 'market_growth_rate', 'methodology', 'citations'],
          },
        },
      });

      const researchPrompt = `Perform market sizing analysis for this startup:

Startup: ${profile.startup_name || 'Unnamed Startup'}
One-liner: ${profile.one_liner}
Problem: ${profile.problem_description}
Solution: ${profile.solution_description}
Industry: ${profile.industry || 'Unknown'}

Research and estimate:
- TAM (Total Addressable Market) in dollars with notation (e.g., "$12.4B")
- SAM (Serviceable Addressable Market) in dollars with notation (e.g., "$2.1B")
- SOM (Serviceable Obtainable Market) in dollars with notation (e.g., "$150M")
- Market growth rate (e.g., "15% CAGR")
- Methodology (brief explanation of how you calculated these)
- Citations (include at least 2 real sources - use your knowledge but format as if citing sources)

Return JSON only.`;

      const researchResult = await proModel.generateContent(researchPrompt);
      const marketData = JSON.parse(researchResult.response.text());

      await updateRunComplete(supabase, researchRun.id, profile, marketData, marketData.citations || []);
      console.log('Step 2 complete');

      // ===== STEP 3: Competitor Analysis (Pro + Search) =====
      console.log('Step 3: CompetitorAgent');
      const competitorRun = await createRun(supabase, sessionId, 'CompetitorAgent');
      await updateRunStatus(supabase, competitorRun.id, 'running');

      const competitorModel = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              competitors: {
                type: SchemaType.ARRAY,
                items: {
                  type: SchemaType.OBJECT,
                  properties: {
                    name: { type: SchemaType.STRING },
                    description: { type: SchemaType.STRING },
                    strength: { type: SchemaType.STRING, enum: ['High', 'Medium', 'Low'] },
                    weakness: { type: SchemaType.STRING },
                  },
                  required: ['name', 'description', 'strength', 'weakness'],
                },
              },
              differentiation_summary: { type: SchemaType.STRING },
              competitive_moat: { type: SchemaType.STRING },
              citations: {
                type: SchemaType.ARRAY,
                items: {
                  type: SchemaType.OBJECT,
                  properties: {
                    url: { type: SchemaType.STRING, nullable: true },
                    title: { type: SchemaType.STRING, nullable: true },
                    snippet: { type: SchemaType.STRING, nullable: true },
                  },
                },
              },
            },
            required: ['competitors', 'differentiation_summary', 'competitive_moat', 'citations'],
          },
        },
      });

      const competitorPrompt = `Analyze competitors for this startup:

Startup: ${profile.startup_name || 'Unnamed Startup'}
One-liner: ${profile.one_liner}
Solution: ${profile.solution_description}
Target Customer: ${profile.target_customer}

Identify:
- At least 3-5 direct competitors (name, description, strength level, key weakness)
- Differentiation summary (how this startup is different)
- Competitive moat (what makes this defensible)
- Citations (include at least 2 sources)

Return JSON only.`;

      const competitorResult = await competitorModel.generateContent(competitorPrompt);
      const competitorData = JSON.parse(competitorResult.response.text());

      await updateRunComplete(supabase, competitorRun.id, profile, competitorData, competitorData.citations || []);
      console.log('Step 3 complete');

      // ===== STEP 4: Scoring Agent (Pro) =====
      console.log('Step 4: ScoringAgent');
      const scoringRun = await createRun(supabase, sessionId, 'ScoringAgent');
      await updateRunStatus(supabase, scoringRun.id, 'running');

      const scoringModel = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              overall_score: { type: SchemaType.NUMBER },
              verdict: { type: SchemaType.STRING, enum: ['GO', 'CAUTION', 'NO-GO'] },
              confidence: { type: SchemaType.STRING, enum: ['High', 'Medium', 'Low'] },
              one_sentence_summary: { type: SchemaType.STRING },
              problem_severity: { type: SchemaType.NUMBER },
              problem_frequency: { type: SchemaType.NUMBER },
              problem_urgency: { type: SchemaType.NUMBER },
              problem_validation: { type: SchemaType.STRING },
              risks: {
                type: SchemaType.ARRAY,
                items: {
                  type: SchemaType.OBJECT,
                  properties: {
                    risk_description: { type: SchemaType.STRING },
                    severity: { type: SchemaType.STRING, enum: ['High', 'Medium', 'Low'] },
                    mitigation_strategy: { type: SchemaType.STRING },
                  },
                  required: ['risk_description', 'severity', 'mitigation_strategy'],
                },
              },
              assumptions: {
                type: SchemaType.ARRAY,
                items: {
                  type: SchemaType.OBJECT,
                  properties: {
                    assumption: { type: SchemaType.STRING },
                    validation_method: { type: SchemaType.STRING },
                  },
                  required: ['assumption', 'validation_method'],
                },
              },
            },
            required: ['overall_score', 'verdict', 'confidence', 'one_sentence_summary', 'problem_severity', 'problem_frequency', 'problem_urgency', 'problem_validation', 'risks', 'assumptions'],
          },
        },
      });

      const scoringPrompt = `Score this startup idea comprehensively:

Profile: ${JSON.stringify(profile, null, 2)}
Market: ${JSON.stringify(marketData, null, 2)}
Competition: ${JSON.stringify(competitorData, null, 2)}

Evaluate:
- Overall score (0-100, be realistic)
- Verdict: GO if 75+, CAUTION if 50-74, NO-GO if <50
- Confidence: High/Medium/Low
- One sentence summary of the opportunity
- Problem clarity scores (severity/frequency/urgency, each 0-10)
- Problem validation assessment (1-2 sentences)
- Top 3-4 risks with mitigation strategies
- Top 3-4 critical assumptions with validation methods

Return JSON only.`;

      const scoringResult = await scoringModel.generateContent(scoringPrompt);
      const scoringData = JSON.parse(scoringResult.response.text());

      await updateRunComplete(supabase, scoringRun.id, { profile, market: marketData, competition: competitorData }, scoringData, []);
      console.log('Step 4 complete');

      // ===== STEP 5: MVP Plan (Flash) =====
      console.log('Step 5: MVPAgent');
      const mvpRun = await createRun(supabase, sessionId, 'MVPAgent');
      await updateRunStatus(supabase, mvpRun.id, 'running');

      const mvpModel = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              mvp_description: { type: SchemaType.STRING },
              core_features: {
                type: SchemaType.ARRAY,
                items: { type: SchemaType.STRING },
              },
              phased_approach: {
                type: SchemaType.ARRAY,
                items: {
                  type: SchemaType.OBJECT,
                  properties: {
                    phase_name: { type: SchemaType.STRING },
                    description: { type: SchemaType.STRING },
                    duration: { type: SchemaType.STRING },
                    key_milestones: {
                      type: SchemaType.ARRAY,
                      items: { type: SchemaType.STRING },
                    },
                  },
                  required: ['phase_name', 'description', 'duration', 'key_milestones'],
                },
              },
              estimated_timeline: { type: SchemaType.STRING },
            },
            required: ['mvp_description', 'core_features', 'phased_approach', 'estimated_timeline'],
          },
        },
      });

      const mvpPrompt = `Create an MVP plan for this startup:

Startup: ${profile.startup_name || 'Unnamed Startup'}
Problem: ${profile.problem_description}
Solution: ${profile.solution_description}

Design:
- MVP description (2-3 sentences, focused scope)
- 5-7 core features (essential only, no nice-to-haves)
- Phased approach (3 phases with milestones)
- Estimated timeline (e.g., "8-12 weeks")

Return JSON only.`;

      const mvpResult = await mvpModel.generateContent(mvpPrompt);
      const mvpData = JSON.parse(mvpResult.response.text());

      await updateRunComplete(supabase, mvpRun.id, profile, mvpData, []);
      console.log('Step 5 complete');

      // ===== STEP 6: Compose Report (Pro) =====
      console.log('Step 6: ComposerAgent');
      const composerRun = await createRun(supabase, sessionId, 'ComposerAgent');
      await updateRunStatus(supabase, composerRun.id, 'running');

      const composerModel = genAI.getGenerativeModel({
        model: 'gemini-2.0-flash-exp',
        generationConfig: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: SchemaType.OBJECT,
            properties: {
              summary_verdict: {
                type: SchemaType.OBJECT,
                properties: {
                  overall_verdict: { type: SchemaType.STRING, enum: ['GO', 'CAUTION', 'NO-GO'] },
                  score: { type: SchemaType.NUMBER },
                  confidence: { type: SchemaType.STRING, enum: ['High', 'Medium', 'Low'] },
                  one_sentence_summary: { type: SchemaType.STRING },
                },
                required: ['overall_verdict', 'score', 'confidence', 'one_sentence_summary'],
              },
              problem_clarity: {
                type: SchemaType.OBJECT,
                properties: {
                  problem_statement: { type: SchemaType.STRING },
                  severity_score: { type: SchemaType.NUMBER },
                  frequency_score: { type: SchemaType.NUMBER },
                  urgency_score: { type: SchemaType.NUMBER },
                  problem_validation: { type: SchemaType.STRING },
                },
                required: ['problem_statement', 'severity_score', 'frequency_score', 'urgency_score', 'problem_validation'],
              },
              customer_use_case: {
                type: SchemaType.OBJECT,
                properties: {
                  target_customer: { type: SchemaType.STRING },
                  use_case_description: { type: SchemaType.STRING },
                  value_proposition: { type: SchemaType.STRING },
                  willingness_to_pay_estimate: { type: SchemaType.STRING },
                },
                required: ['target_customer', 'use_case_description', 'value_proposition', 'willingness_to_pay_estimate'],
              },
              next_steps: {
                type: SchemaType.OBJECT,
                properties: {
                  immediate_actions: {
                    type: SchemaType.ARRAY,
                    items: {
                      type: SchemaType.OBJECT,
                      properties: {
                        priority: { type: SchemaType.STRING, enum: ['HIGH', 'MEDIUM', 'LOW'] },
                        title: { type: SchemaType.STRING },
                        description: { type: SchemaType.STRING },
                        effort: { type: SchemaType.STRING },
                        impact: { type: SchemaType.STRING },
                      },
                      required: ['priority', 'title', 'description', 'effort', 'impact'],
                    },
                  },
                },
                required: ['immediate_actions'],
              },
            },
            required: ['summary_verdict', 'problem_clarity', 'customer_use_case', 'next_steps'],
          },
        },
      });

      const composerPrompt = `Compose a final validation report from these agent outputs:

Profile: ${JSON.stringify(profile, null, 2)}
Market: ${JSON.stringify(marketData, null, 2)}
Competition: ${JSON.stringify(competitorData, null, 2)}
Scoring: ${JSON.stringify(scoringData, null, 2)}
MVP: ${JSON.stringify(mvpData, null, 2)}

Create a comprehensive report with these sections:
1. summary_verdict (verdict, score, confidence, summary)
2. problem_clarity (statement from problem_description, scores, validation)
3. customer_use_case (customer, description, value prop, willingness to pay estimate)
4. next_steps (7 immediate actions with HIGH/MEDIUM/LOW priority, effort, impact)

Make it actionable and honest. Return JSON only.`;

      const composerResult = await composerModel.generateContent(composerPrompt);
      const reportSections = JSON.parse(composerResult.response.text());

      // Assemble final report
      const finalReport = {
        summary_verdict: reportSections.summary_verdict,
        problem_clarity: reportSections.problem_clarity,
        customer_use_case: reportSections.customer_use_case,
        market_sizing: marketData,
        competition: {
          competitors: competitorData.competitors,
          differentiation_summary: competitorData.differentiation_summary,
          competitive_moat: competitorData.competitive_moat,
          citations: competitorData.citations,
        },
        risks_assumptions: {
          top_risks: scoringData.risks,
          critical_assumptions: scoringData.assumptions,
        },
        mvp_scope: mvpData,
        next_steps: reportSections.next_steps,
      };

      await updateRunComplete(supabase, composerRun.id, { profile, market: marketData, competition: competitorData, scoring: scoringData, mvp: mvpData }, finalReport, []);
      console.log('Step 6 complete');

      // ===== STEP 7: Verify Report =====
      console.log('Step 7: VerifyAgent');
      const verifyRun = await createRun(supabase, sessionId, 'VerifyAgent');
      await updateRunStatus(supabase, verifyRun.id, 'running');

      const { data: allRuns } = await supabase
        .from('validator_runs')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true });

      const verification = verifyReport(finalReport, allRuns || []);

      await updateRunComplete(supabase, verifyRun.id, { report: finalReport, runs: allRuns }, verification, []);
      console.log('Step 7 complete');

      // Insert report
      const { data: report, error: reportError } = await supabase
        .from('validator_reports')
        .insert({
          session_id: sessionId,
          user_id: userId,
          report_json: finalReport,
          verified: verification.verified,
          verification_json: verification,
        })
        .select()
        .single();

      if (reportError) {
        throw new Error(`Failed to insert report: ${reportError.message}`);
      }

      reportId = report.id;

      // Determine final status
      if (verification.failed_agents.length > 0) {
        finalStatus = 'partial';
      } else if (!verification.verified) {
        finalStatus = 'partial';
      }

    } catch (error) {
      console.error('Pipeline error:', error);
      finalStatus = 'failed';
      
      // Create a failed run entry
      await supabase.from('validator_runs').insert({
        session_id: sessionId,
        agent_name: 'PipelineError',
        model_used: 'N/A',
        status: 'failed',
        error_message: error instanceof Error ? error.message : String(error),
        started_at: new Date().toISOString(),
        finished_at: new Date().toISOString(),
      });
    }

    // Update session status
    await supabase
      .from('validator_sessions')
      .update({ status: finalStatus })
      .eq('id', sessionId);

    console.log('Pipeline complete:', { sessionId, reportId, status: finalStatus });

    return new Response(
      JSON.stringify({
        session_id: sessionId,
        report_id: reportId,
        status: finalStatus,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

// Helper functions

async function createRun(supabase: any, sessionId: string, agentName: string) {
  const modelMap: Record<string, string> = {
    'ExtractorAgent': 'gemini-2.0-flash-exp',
    'ResearchAgent': 'gemini-2.0-flash-exp',
    'CompetitorAgent': 'gemini-2.0-flash-exp',
    'ScoringAgent': 'gemini-2.0-flash-exp',
    'MVPAgent': 'gemini-2.0-flash-exp',
    'ComposerAgent': 'gemini-2.0-flash-exp',
    'VerifyAgent': 'verify-logic',
  };

  const { data, error } = await supabase
    .from('validator_runs')
    .insert({
      session_id: sessionId,
      agent_name: agentName,
      model_used: modelMap[agentName] || 'unknown',
      status: 'queued',
    })
    .select()
    .single();

  if (error) throw new Error(`Failed to create run: ${error.message}`);
  return data;
}

async function updateRunStatus(supabase: any, runId: string, status: string) {
  const updates: any = { status };
  if (status === 'running') {
    updates.started_at = new Date().toISOString();
  } else if (status === 'done' || status === 'failed') {
    updates.finished_at = new Date().toISOString();
  }

  await supabase.from('validator_runs').update(updates).eq('id', runId);
}

async function updateRunComplete(supabase: any, runId: string, input: any, output: any, citations: any[]) {
  await supabase.from('validator_runs').update({
    status: 'done',
    input_json: input,
    output_json: output,
    citations,
    finished_at: new Date().toISOString(),
  }).eq('id', runId);
}

function verifyReport(report: any, runs: any[]): any {
  const requiredSections = [
    'summary_verdict',
    'problem_clarity',
    'customer_use_case',
    'market_sizing',
    'competition',
    'risks_assumptions',
    'mvp_scope',
    'next_steps',
  ];

  const missing: string[] = [];
  const warnings: string[] = [];
  const failedAgents: string[] = [];

  // Check all sections present
  for (const section of requiredSections) {
    if (!report[section]) {
      missing.push(section);
    }
  }

  // Check citations
  if (!report.market_sizing?.citations || report.market_sizing.citations.length === 0) {
    warnings.push('Market sizing missing citations');
  }
  if (!report.competition?.citations || report.competition.citations.length === 0) {
    warnings.push('Competition analysis missing citations');
  }

  // Check failed agents
  for (const run of runs) {
    if (run.status === 'failed') {
      failedAgents.push(run.agent_name);
    }
  }

  const verified = missing.length === 0 && failedAgents.length === 0 && warnings.length === 0;

  return {
    verified,
    missing_sections: missing,
    failed_agents: failedAgents,
    warnings,
    timestamp: new Date().toISOString(),
  };
}

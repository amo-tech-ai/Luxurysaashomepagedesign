/**
 * AI Chat Edge Function
 * 
 * Handles chat conversations with Gemini AI, providing context-aware
 * responses based on user's canvas data and validation state.
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

interface ChatRequest {
  message: string;
  startupId: string;
  sessionId?: string;
}

interface CanvasContext {
  problem?: string;
  solution?: string;
  unique_value_proposition?: string;
  customer_segments?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { message, startupId, sessionId } = await req.json() as ChatRequest;

    if (!message || !startupId) {
      throw new Error('Missing required parameters: message and startupId');
    }

    // Initialize Supabase client with user's auth token
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    );

    // Get canvas context for personalized responses
    const { data: canvas } = await supabaseClient
      .from('lean_canvases')
      .select('problem, solution, unique_value_proposition, customer_segments')
      .eq('startup_id', startupId)
      .maybeSingle();

    // Get or create validation session
    let currentSessionId = sessionId;
    if (!currentSessionId) {
      const { data: existingSessions } = await supabaseClient
        .from('validation_sessions')
        .select('id')
        .eq('startup_id', startupId)
        .eq('is_active', true)
        .limit(1);

      if (existingSessions && existingSessions.length > 0) {
        currentSessionId = existingSessions[0].id;
      } else {
        const { data: newSession } = await supabaseClient
          .from('validation_sessions')
          .insert({
            startup_id: startupId,
            state: { phase: 'onboarding', scores: {} },
            is_active: true,
          })
          .select('id')
          .single();
        
        currentSessionId = newSession.id;
      }
    }

    // Get recent conversation history (last 10 messages)
    const { data: history } = await supabaseClient
      .from('validation_conversations')
      .select('role, content')
      .eq('session_id', currentSessionId)
      .order('created_at', { ascending: false })
      .limit(10);

    // Reverse to get chronological order
    const conversationHistory = (history || []).reverse();

    // Build context-aware system prompt
    const systemPrompt = buildSystemPrompt(canvas);

    // Build conversation for Gemini
    const conversationMessages = [
      { role: 'user', parts: [{ text: systemPrompt }] },
      ...conversationHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }],
      })),
      { role: 'user', parts: [{ text: message }] },
    ];

    // Call Gemini API
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');
    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY not configured');
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: conversationMessages,
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
            topP: 0.95,
            topK: 40,
          },
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error('Gemini API error:', error);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.candidates[0].content.parts[0].text;

    // Save user message to conversation history
    await supabaseClient.from('validation_conversations').insert({
      session_id: currentSessionId,
      role: 'user',
      content: message,
    });

    // Save AI response to conversation history
    await supabaseClient.from('validation_conversations').insert({
      session_id: currentSessionId,
      role: 'assistant',
      content: aiResponse,
    });

    return new Response(
      JSON.stringify({
        message: aiResponse,
        sessionId: currentSessionId,
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in ai-chat function:', error);
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

/**
 * Build context-aware system prompt based on user's canvas data
 */
function buildSystemPrompt(canvas: CanvasContext | null): string {
  const hasCanvas = canvas && (canvas.problem || canvas.solution);

  if (!hasCanvas) {
    return `You are Atlas, a startup coach for StartupAI. You help founders validate their ideas and build successful businesses.

Your role:
- Guide founders through the validation process
- Ask strategic questions to uncover insights
- Provide actionable next steps
- Be encouraging but honest about challenges
- Focus on customer validation before building

Keep responses:
- Concise (2-3 paragraphs max)
- Actionable (always suggest next steps)
- Encouraging but realistic
- Focused on validation over perfection

The user hasn't completed their Lean Canvas yet. Help them get started.`;
  }

  return `You are Atlas, a startup coach for StartupAI. You help founders validate their ideas and build successful businesses.

FOUNDER'S CURRENT CANVAS:
${canvas.problem ? `Problem: ${canvas.problem}` : ''}
${canvas.solution ? `Solution: ${canvas.solution}` : ''}
${canvas.unique_value_proposition ? `Value Proposition: ${canvas.unique_value_proposition}` : ''}
${canvas.customer_segments ? `Target Customers: ${canvas.customer_segments}` : ''}

Your role:
- Reference their canvas data in your responses
- Challenge assumptions with specific questions
- Suggest experiments to validate their hypotheses
- Focus on customer validation before building
- Help them identify their biggest constraint (acquisition, monetization, or retention)

Keep responses:
- Concise (2-3 paragraphs max)
- Specific to their business model
- Actionable (always suggest next steps)
- Encouraging but honest about risks
- Focused on validation over perfection

Communication style:
- Professional but friendly
- Strategic consultant, not cheerleader
- Ask probing questions
- Use founder's language, not jargon`;
}

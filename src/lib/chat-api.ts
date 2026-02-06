/**
 * Chat API Helpers
 * 
 * Functions for managing AI chat conversations with Gemini.
 * Handles conversation history loading, message sending, and persistence.
 */

import { supabase } from './supabase';
import { getOrCreateStartup } from './canvas-api';

export interface Message {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  created_at: string;
}

/**
 * Get or create active validation session for chat
 */
async function getOrCreateSession(startupId: string): Promise<string> {
  // Check for active session
  const { data: existingSessions } = await supabase
    .from('validation_sessions')
    .select('id')
    .eq('startup_id', startupId)
    .eq('is_active', true)
    .limit(1);

  if (existingSessions && existingSessions.length > 0) {
    return existingSessions[0].id;
  }

  // Create new session
  const { data: newSession, error } = await supabase
    .from('validation_sessions')
    .insert({
      startup_id: startupId,
      state: { phase: 'onboarding', scores: {} },
      is_active: true,
    })
    .select('id')
    .single();

  if (error) throw error;
  return newSession.id;
}

/**
 * Load conversation history from database
 * Returns messages in chronological order
 */
export async function loadConversationHistory(limit: number = 50): Promise<Message[]> {
  const startup = await getOrCreateStartup();
  const sessionId = await getOrCreateSession(startup.id);

  const { data, error } = await supabase
    .from('validation_conversations')
    .select('id, role, content, created_at')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data || [];
}

/**
 * Send message to AI and get response
 * Automatically saves both user message and AI response to database
 */
export async function sendMessage(message: string): Promise<{
  response: string;
  sessionId: string;
}> {
  const startup = await getOrCreateStartup();
  const sessionId = await getOrCreateSession(startup.id);

  // Call edge function
  const { data, error } = await supabase.functions.invoke('ai-chat', {
    body: {
      message,
      startupId: startup.id,
      sessionId,
    },
  });

  if (error) {
    console.error('Chat error:', error);
    throw new Error(`Failed to get AI response: ${error.message}`);
  }

  return {
    response: data.message,
    sessionId: data.sessionId,
  };
}

/**
 * Clear conversation history (start fresh)
 */
export async function clearConversationHistory(): Promise<void> {
  const startup = await getOrCreateStartup();
  const sessionId = await getOrCreateSession(startup.id);

  const { error } = await supabase
    .from('validation_conversations')
    .delete()
    .eq('session_id', sessionId);

  if (error) throw error;
}

/**
 * Get conversation statistics
 */
export async function getConversationStats(): Promise<{
  totalMessages: number;
  userMessages: number;
  aiMessages: number;
  firstMessageDate: string | null;
  lastMessageDate: string | null;
}> {
  const startup = await getOrCreateStartup();
  const sessionId = await getOrCreateSession(startup.id);

  const { data, error } = await supabase
    .from('validation_conversations')
    .select('role, created_at')
    .eq('session_id', sessionId);

  if (error) throw error;

  if (!data || data.length === 0) {
    return {
      totalMessages: 0,
      userMessages: 0,
      aiMessages: 0,
      firstMessageDate: null,
      lastMessageDate: null,
    };
  }

  const userMessages = data.filter((m) => m.role === 'user').length;
  const aiMessages = data.filter((m) => m.role === 'assistant').length;
  const dates = data.map((m) => new Date(m.created_at).getTime()).sort();

  return {
    totalMessages: data.length,
    userMessages,
    aiMessages,
    firstMessageDate: new Date(dates[0]).toISOString(),
    lastMessageDate: new Date(dates[dates.length - 1]).toISOString(),
  };
}

/**
 * Chat Test Page
 * 
 * Simple page to test the AI chatbot functionality.
 * Shows the chatbot in action with a clean interface.
 */

import { ProtectedRoute } from '../../components/ProtectedRoute';
import { AIChatbotDB } from '../../components/ai-chatbot/AIChatbotDB';
import { Home } from 'lucide-react';

export default function ChatTestPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#FAF9F7]">
        {/* Header */}
        <header className="bg-white border-b border-[#E8E6E1] px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            {onNavigate && (
              <button
                onClick={() => onNavigate('home')}
                className="text-[#0D5F4E] hover:text-[#0a4a3c] transition-colors"
              >
                <Home className="w-5 h-5" />
              </button>
            )}
            <div>
              <h1 className="font-serif text-2xl text-[#2D2D2D]">Chat with Atlas</h1>
              <p className="text-sm text-[#A3A3A3]">Your AI startup coach</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="bg-white border-2 border-[#E8E6E1] rounded-lg p-8">
            <h2 className="text-xl font-serif mb-4">Test the AI Coach</h2>
            <p className="text-gray-600 mb-6">
              Click the chat button in the bottom-right corner to start a conversation with Atlas.
              The AI has access to your Lean Canvas and can provide personalized guidance.
            </p>

            <div className="space-y-4">
              <div className="bg-[#F5F3EF] p-4 rounded-lg">
                <h3 className="font-medium mb-2">Try these questions:</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• "What should I focus on next?"</li>
                  <li>• "How do I validate my problem?"</li>
                  <li>• "What are the risks in my business model?"</li>
                  <li>• "Help me identify my biggest constraint"</li>
                  <li>• "What experiments should I run?"</li>
                </ul>
              </div>

              <div className="bg-[#E8F5F1] p-4 rounded-lg">
                <h3 className="font-medium mb-2 text-[#0D5F4E]">Context-Aware Responses</h3>
                <p className="text-sm text-gray-700">
                  Atlas analyzes your Lean Canvas before responding. If you've filled out your
                  canvas, you'll get personalized advice specific to your business model.
                </p>
              </div>

              <div className="bg-[#FFF4E6] p-4 rounded-lg border border-[#FFB84D]">
                <h3 className="font-medium mb-2 text-[#FF8C00]">Conversation History</h3>
                <p className="text-sm text-gray-700">
                  Your conversation is saved automatically. Come back anytime and Atlas will
                  remember your previous discussions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chatbot Component */}
        <AIChatbotDB currentContext="chat-test" startupStage="validation" />
      </div>
    </ProtectedRoute>
  );
}

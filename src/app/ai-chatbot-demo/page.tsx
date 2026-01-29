import { useState } from 'react';
import { AIChatbot } from '../../components/ai-chatbot/AIChatbot';
import { Home, MessageSquare, Lightbulb } from 'lucide-react';

export default function AIChatbotDemoPage() {
  const [currentContext, setCurrentContext] = useState<'onboarding' | 'lean-canvas' | 'pitch-deck' | 'dashboard' | 'crm'>('dashboard');
  const [startupStage, setStartupStage] = useState<'idea' | 'validation' | 'mvp' | 'growth'>('validation');

  const handleNavigate = (route: string) => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: route }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-medium text-gray-900 mb-1">AI Startup Guide Chatbot</h1>
              <p className="text-gray-600">Interactive demo of the AI advisor system</p>
            </div>
            <button
              onClick={() => handleNavigate('home')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Controls */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-6">Chatbot Controls</h2>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Context Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Current Context
              </label>
              <div className="space-y-2">
                {[
                  { value: 'dashboard', label: 'Dashboard' },
                  { value: 'onboarding', label: 'Onboarding Wizard' },
                  { value: 'lean-canvas', label: 'Lean Canvas' },
                  { value: 'pitch-deck', label: 'Pitch Deck Editor' },
                  { value: 'crm', label: 'CRM' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setCurrentContext(option.value as any)}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-all ${
                      currentContext === option.value
                        ? 'bg-[#0D5F4E] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Stage Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Startup Stage
              </label>
              <div className="space-y-2">
                {[
                  { value: 'idea', label: 'Idea Stage', desc: 'Just starting out' },
                  { value: 'validation', label: 'Validation', desc: 'Testing assumptions' },
                  { value: 'mvp', label: 'MVP', desc: 'Building first product' },
                  { value: 'growth', label: 'Growth', desc: 'Scaling up' }
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setStartupStage(option.value as any)}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-all ${
                      startupStage === option.value
                        ? 'bg-[#0D5F4E] text-white'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-medium">{option.label}</div>
                    <div className={`text-xs mt-0.5 ${
                      startupStage === option.value ? 'text-white/70' : 'text-gray-500'
                    }`}>
                      {option.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0D5F4E]/10 to-[#0D5F4E]/20 flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-[#0D5F4E]" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">3 States</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Collapsed (icon), Peek (suggestions), and Expanded (full chat)
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/20 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">7 AI Agents</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Specialized agents for strategy, analysis, pitch, writing, fundraising, planning, and risk
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/20 flex items-center justify-center mb-4">
              <div className="text-2xl">⚡</div>
            </div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Action Cards</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              AI suggestions with preview, impact level, and apply/edit/dismiss controls
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-br from-[#0D5F4E]/5 to-[#0D5F4E]/10 rounded-2xl border border-[#0D5F4E]/20 p-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Try These Commands</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm font-medium text-gray-900 mb-2">"What should I do next?"</div>
              <div className="text-xs text-gray-600">Get personalized next steps based on your stage</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm font-medium text-gray-900 mb-2">"Help me with my pitch deck"</div>
              <div className="text-xs text-gray-600">Start the AI-powered pitch deck creation flow</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm font-medium text-gray-900 mb-2">"Review my readiness"</div>
              <div className="text-xs text-gray-600">Get an investor readiness assessment</div>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm font-medium text-gray-900 mb-2">"Generate for me"</div>
              <div className="text-xs text-gray-600">AI will create content for your current context</div>
            </div>
          </div>
        </div>

        {/* Mock Dashboard Content */}
        <div className="mt-12 bg-white rounded-2xl border border-gray-200 p-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Sample Dashboard Content</h2>
          <div className="space-y-4">
            <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg flex items-center px-6">
              <span className="text-gray-400">Mock content area - Chatbot is active on the right →</span>
            </div>
            <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg flex items-center px-6">
              <span className="text-gray-400">Click the chatbot icon in the bottom right to start</span>
            </div>
            <div className="h-20 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg flex items-center px-6">
              <span className="text-gray-400">Try different contexts and stages above to see context-aware responses</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chatbot Component */}
      <AIChatbot 
        currentContext={currentContext}
        startupStage={startupStage}
        onActionApply={(actionId) => {
          console.log('Action applied:', actionId);
        }}
      />
    </div>
  );
}

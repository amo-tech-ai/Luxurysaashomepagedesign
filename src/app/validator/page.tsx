import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ValidatorPageProps {
  onNavigate?: (route: string) => void;
}

export default function ValidatorPage({ onNavigate }: ValidatorPageProps) {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!input.trim()) {
      setError('Please describe your startup idea');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Call Supabase edge function
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase not configured');
      }

      // Get auth token (for now, use anon key)
      const authToken = supabaseAnonKey;

      const response = await fetch(`${supabaseUrl}/functions/v1/validator-start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({ input_text: input }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to start validation');
      }

      const data = await response.json();

      // Navigate to progress page
      if (data.session_id) {
        onNavigate?.(`validator/run/${data.session_id}`);
      } else {
        throw new Error('No session ID returned');
      }

    } catch (err) {
      console.error('Validation error:', err);
      setError(err instanceof Error ? err.message : 'Failed to start validation');
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <button 
            onClick={() => onNavigate?.('home-v5')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-light text-[#212427]">StartupAI</span>
          </button>

          <button
            onClick={() => onNavigate?.('dashboard-main')}
            className="px-5 py-2 bg-[#0d5f4e] hover:bg-[#0a4a3a] text-white text-sm font-light rounded-lg transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1100px] w-full mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DCF9E3] text-[#0d5f4e] text-xs font-medium rounded-full mb-6">
            <Sparkles className="w-3 h-3" />
            AI-VERIFIED VALIDATION
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-[#212427] mb-4">
            From idea to execution.
          </h1>
          <p className="text-lg text-gray-600 font-light">
            Get a comprehensive validation report with full AI traceability.
          </p>
        </div>

        {/* Chat Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 lg:p-12">
          <div className="mb-6">
            <h2 className="text-2xl text-[#212427] mb-2">
              Describe your startup idea
            </h2>
            <p className="text-base text-[#6B7280] font-light">
              Share your problem, solution, and target customer. The more detail, the better the analysis.
            </p>
          </div>

          <div className="space-y-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Example: We're building an AI-powered operating system for founders that guides them from initial idea validation through daily execution. The problem is that early-stage founders spend weeks researching tools, creating pitch decks, and validating ideas manually when they should be building. Our solution uses AI agents to handle strategy, validation, and execution planning in one guided flow..."
              className="w-full h-48 px-4 py-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent text-[#212427] placeholder:text-gray-400"
              disabled={isSubmitting}
            />

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                {error}
              </div>
            )}

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Press Enter to submit • Typically takes 30-60 seconds
              </p>
              <button
                onClick={handleSubmit}
                disabled={!input.trim() || isSubmitting}
                className="px-6 py-3 bg-[#0d5f4e] hover:bg-[#0a4a3a] disabled:bg-gray-300 disabled:cursor-not-allowed text-white rounded-lg transition-all flex items-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Running validation...
                  </>
                ) : (
                  <>
                    Generate Report
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-sm font-medium text-[#0d5f4e] mb-2">7 AI Agents</div>
            <p className="text-sm text-gray-600">
              Each section is generated and verified by specialized AI agents
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-sm font-medium text-[#0d5f4e] mb-2">Full Traceability</div>
            <p className="text-sm text-gray-600">
              Every insight is traceable to a specific agent with citations
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200">
            <div className="text-sm font-medium text-[#0d5f4e] mb-2">8 Report Sections</div>
            <p className="text-sm text-gray-600">
              Comprehensive analysis from market sizing to MVP roadmap
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

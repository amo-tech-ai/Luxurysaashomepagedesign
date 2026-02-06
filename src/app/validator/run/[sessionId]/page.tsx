import { useState, useEffect } from 'react';
import { Check, Loader, X, AlertCircle } from 'lucide-react';

interface ValidatorRunPageProps {
  sessionId: string;
  onNavigate?: (route: string) => void;
}

interface AgentStep {
  name: string;
  label: string;
  status: 'queued' | 'running' | 'done' | 'failed';
  error?: string;
}

export default function ValidatorRunPage({ sessionId, onNavigate }: ValidatorRunPageProps) {
  const [steps, setSteps] = useState<AgentStep[]>([
    { name: 'ExtractorAgent', label: 'Extract profile', status: 'queued' },
    { name: 'ResearchAgent', label: 'Market research', status: 'queued' },
    { name: 'CompetitorAgent', label: 'Competitors', status: 'queued' },
    { name: 'ScoringAgent', label: 'Score', status: 'queued' },
    { name: 'MVPAgent', label: 'MVP plan', status: 'queued' },
    { name: 'ComposerAgent', label: 'Compose report', status: 'queued' },
    { name: 'VerifyAgent', label: 'Verify report', status: 'queued' },
  ]);
  const [sessionStatus, setSessionStatus] = useState<'running' | 'complete' | 'partial' | 'failed'>('running');
  const [reportId, setReportId] = useState<string | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    // Poll for status updates
    const pollStatus = async () => {
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
          throw new Error('Supabase not configured');
        }

        const response = await fetch(
          `${supabaseUrl}/functions/v1/validator-status?session_id=${sessionId}`,
          {
            headers: {
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error('Failed to fetch status');
        }

        const data = await response.json();
        setSessionStatus(data.status);

        // Update step statuses
        const updatedSteps = steps.map(step => {
          const run = data.runs?.find((r: any) => r.agent_name === step.name);
          if (run) {
            return {
              ...step,
              status: run.status,
              error: run.error_message,
            };
          }
          return step;
        });
        setSteps(updatedSteps);

        // If complete, navigate to report
        if ((data.status === 'complete' || data.status === 'partial') && data.report_id) {
          setReportId(data.report_id);
          setTimeout(() => {
            onNavigate?.(`validator/report/${data.report_id}`);
          }, 1500);
        }

        // If failed, show error
        if (data.status === 'failed') {
          setError('Validation failed. Please try again.');
        }

      } catch (err) {
        console.error('Status poll error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch status');
      }
    };

    // Poll every 2 seconds
    const interval = setInterval(pollStatus, 2000);
    pollStatus(); // Initial fetch

    return () => clearInterval(interval);
  }, [sessionId, onNavigate]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <Check className="w-5 h-5 text-[#0d5f4e]" />;
      case 'running':
        return <Loader className="w-5 h-5 text-[#0d5f4e] animate-spin" />;
      case 'failed':
        return <X className="w-5 h-5 text-red-600" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'done':
        return 'text-[#0d5f4e]';
      case 'running':
        return 'text-[#0d5f4e] font-medium';
      case 'failed':
        return 'text-red-600';
      default:
        return 'text-gray-400';
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
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Status Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DCF9E3] text-[#0d5f4e] text-xs font-medium rounded-full mb-4">
            {sessionStatus === 'running' && <Loader className="w-3 h-3 animate-spin" />}
            {sessionStatus === 'complete' && <Check className="w-3 h-3" />}
            {sessionStatus === 'failed' && <X className="w-3 h-3" />}
            {sessionStatus.toUpperCase()}
          </div>
          <h1 className="text-4xl font-light text-[#212427] mb-2">
            {sessionStatus === 'running' && 'Generating your validation report'}
            {sessionStatus === 'complete' && 'Report complete'}
            {sessionStatus === 'partial' && 'Report partially complete'}
            {sessionStatus === 'failed' && 'Validation failed'}
          </h1>
          <p className="text-base text-gray-600">
            {sessionStatus === 'running' && 'AI agents are analyzing your startup idea...'}
            {sessionStatus === 'complete' && 'Redirecting to your report...'}
            {sessionStatus === 'partial' && 'Some sections may need regeneration'}
            {sessionStatus === 'failed' && 'Please try again or contact support'}
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div 
                key={step.name}
                className={`flex items-start gap-4 p-4 rounded-lg transition-all ${
                  step.status === 'running' ? 'bg-[#DCF9E3]/30' : 
                  step.status === 'failed' ? 'bg-red-50' : ''
                }`}
              >
                <div className="flex-shrink-0 mt-0.5">
                  {getStatusIcon(step.status)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 font-medium">
                      STEP {idx + 1}
                    </span>
                    <span className={`text-base ${getStatusColor(step.status)}`}>
                      {step.label}
                    </span>
                  </div>
                  {step.error && (
                    <p className="text-sm text-red-600 mt-1">{step.error}</p>
                  )}
                </div>
                <div className="flex-shrink-0">
                  {step.status === 'done' && (
                    <span className="text-xs text-gray-500">Complete</span>
                  )}
                  {step.status === 'running' && (
                    <span className="text-xs text-[#0d5f4e]">Processing...</span>
                  )}
                  {step.status === 'failed' && (
                    <span className="text-xs text-red-600">Failed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-900">Error</p>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Session Info */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Session ID: {sessionId}
        </div>
      </main>
    </div>
  );
}

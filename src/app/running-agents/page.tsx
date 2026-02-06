import { useState, useEffect } from 'react';
import { Check, Loader } from 'lucide-react';

interface RunningAgentsPageProps {
  onNavigate?: (route: string) => void;
}

interface Agent {
  id: string;
  name: string;
  role: string;
  status: 'completed' | 'running' | 'pending';
  executionTime?: string;
  startTime?: number;
}

export default function RunningAgentsPage({ onNavigate }: RunningAgentsPageProps) {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [overallProgress, setOverallProgress] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'ExtractorAgent',
      role: 'Parsing startup description and extracting structured profile',
      status: 'running',
      startTime: Date.now()
    },
    {
      id: '2',
      name: 'ResearchAgent',
      role: 'Analyzing market size and gathering competitive intelligence',
      status: 'pending'
    },
    {
      id: '3',
      name: 'CompetitorAgent',
      role: 'Identifying competitors and differentiation opportunities',
      status: 'pending'
    },
    {
      id: '4',
      name: 'ScoringAgent',
      role: 'Evaluating opportunity strength across 7 dimensions',
      status: 'pending'
    },
    {
      id: '5',
      name: 'MVPAgent',
      role: 'Defining minimum viable product scope and timeline',
      status: 'pending'
    },
    {
      id: '6',
      name: 'ComposerAgent',
      role: 'Assembling comprehensive validation report',
      status: 'pending'
    },
    {
      id: '7',
      name: 'VerifyAgent',
      role: 'Verifying report completeness and citation integrity',
      status: 'pending'
    }
  ]);

  // Simulate agent progression
  useEffect(() => {
    const agentDurations = [4000, 10000, 10000, 7000, 4000, 7000, 1000]; // milliseconds
    
    if (currentAgentIndex < agents.length) {
      const timer = setTimeout(() => {
        setAgents(prev => prev.map((agent, idx) => {
          if (idx === currentAgentIndex) {
            const elapsed = Date.now() - (agent.startTime || Date.now());
            return {
              ...agent,
              status: 'completed',
              executionTime: `${(elapsed / 1000).toFixed(1)}s`
            };
          }
          if (idx === currentAgentIndex + 1) {
            return {
              ...agent,
              status: 'running',
              startTime: Date.now()
            };
          }
          return agent;
        }));
        
        setCurrentAgentIndex(prev => prev + 1);
      }, agentDurations[currentAgentIndex]);

      return () => clearTimeout(timer);
    }
  }, [currentAgentIndex]);

  // Update progress bar
  useEffect(() => {
    const completedCount = agents.filter(a => a.status === 'completed').length;
    const runningCount = agents.filter(a => a.status === 'running').length;
    const progress = ((completedCount + (runningCount * 0.5)) / agents.length) * 100;
    setOverallProgress(progress);
  }, [agents]);

  // Track elapsed time
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
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

          <div className="text-xs text-gray-500">
            {formatTime(elapsedTime)} elapsed
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[900px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        {/* Top Status Area */}
        <div className="mb-16">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#DCF9E3]/40 text-[#0d5f4e] text-xs font-medium rounded-full mb-6">
            <div className="w-2 h-2 bg-[#0d5f4e] rounded-full animate-pulse" />
            RUNNING
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-light text-[#212427] mb-4">
            Running AI Agents…
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 font-light mb-8">
            Multi-agent pipeline analyzing your startup idea
          </p>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Overall Progress</span>
              <span className="font-medium text-[#212427]">{Math.round(overallProgress)}%</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-[#0d5f4e] transition-all duration-500 ease-out rounded-full"
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Agent Pipeline */}
        <div className="space-y-3">
          {agents.map((agent, index) => (
            <div
              key={agent.id}
              className={`
                relative bg-white rounded-xl border transition-all duration-500
                ${agent.status === 'completed' 
                  ? 'border-gray-200 bg-gray-50/50' 
                  : agent.status === 'running'
                  ? 'border-[#0d5f4e] shadow-sm'
                  : 'border-gray-200 opacity-60'
                }
              `}
            >
              <div className="p-6 flex items-start gap-4">
                {/* Status Indicator */}
                <div className="flex-shrink-0 mt-1">
                  {agent.status === 'completed' ? (
                    <div className="w-6 h-6 rounded-full bg-[#DCF9E3] flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#0d5f4e]" />
                    </div>
                  ) : agent.status === 'running' ? (
                    <div className="relative w-6 h-6">
                      <div className="absolute inset-0 rounded-full border-2 border-[#0d5f4e] opacity-20" />
                      <div className="absolute inset-0 rounded-full border-2 border-[#0d5f4e] border-t-transparent animate-spin" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                  )}
                </div>

                {/* Agent Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className={`text-lg font-medium ${
                      agent.status === 'completed' 
                        ? 'text-gray-700' 
                        : agent.status === 'running'
                        ? 'text-[#212427]'
                        : 'text-gray-500'
                    }`}>
                      {agent.name}
                    </h3>
                    
                    {/* Execution Time */}
                    {agent.executionTime && (
                      <span className="text-xs text-gray-500 flex-shrink-0">
                        {agent.executionTime}
                      </span>
                    )}
                    {agent.status === 'running' && (
                      <span className="text-xs text-[#0d5f4e] flex-shrink-0 animate-pulse">
                        processing…
                      </span>
                    )}
                  </div>
                  
                  <p className={`text-sm ${
                    agent.status === 'completed'
                      ? 'text-gray-500'
                      : agent.status === 'running'
                      ? 'text-gray-600'
                      : 'text-gray-400'
                  }`}>
                    {agent.role}
                  </p>
                </div>
              </div>

              {/* Active Agent Glow */}
              {agent.status === 'running' && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#0d5f4e]/5 to-transparent pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Completion State */}
        {currentAgentIndex >= agents.length && (
          <div className="mt-12 p-8 bg-white rounded-2xl border border-[#0d5f4e] shadow-sm text-center">
            <div className="w-16 h-16 bg-[#DCF9E3] rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-[#0d5f4e]" />
            </div>
            <h3 className="text-xl font-medium text-[#212427] mb-2">
              Analysis Complete
            </h3>
            <p className="text-gray-600 mb-6">
              All agents have finished processing your startup idea
            </p>
            <button
              onClick={() => onNavigate?.('validator-report/demo-report-id')}
              className="px-6 py-3 bg-[#0d5f4e] hover:bg-[#0a4a3a] text-white rounded-lg transition-colors font-medium"
            >
              View Validation Report
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

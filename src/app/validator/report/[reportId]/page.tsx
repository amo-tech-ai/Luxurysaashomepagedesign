import { useState, useEffect } from 'react';
import { CheckCircle2, AlertCircle, FileText, TrendingUp, Target, Shield, Rocket, ChevronRight, X, Database } from 'lucide-react';
import type { ValidatorReport, ValidatorRun, ReportContent } from '@/types/validator';

interface ValidatorReportPageProps {
  reportId: string;
  onNavigate?: (route: string) => void;
}

export default function ValidatorReportPage({ reportId, onNavigate }: ValidatorReportPageProps) {
  const [report, setReport] = useState<ValidatorReport | null>(null);
  const [runs, setRuns] = useState<ValidatorRun[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [traceOpen, setTraceOpen] = useState(false);

  useEffect(() => {
    fetchReport();
  }, [reportId]);

  const fetchReport = async () => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase not configured');
      }

      // Fetch report
      const reportResponse = await fetch(
        `${supabaseUrl}/rest/v1/validator_reports?id=eq.${reportId}&select=*`,
        {
          headers: {
            'apikey': supabaseAnonKey,
            'Authorization': `Bearer ${supabaseAnonKey}`,
          },
        }
      );

      if (!reportResponse.ok) {
        throw new Error('Failed to fetch report');
      }

      const reportData = await reportResponse.json();
      if (!reportData || reportData.length === 0) {
        throw new Error('Report not found');
      }

      setReport(reportData[0]);

      // Fetch runs
      const runsResponse = await fetch(
        `${supabaseUrl}/rest/v1/validator_runs?session_id=eq.${reportData[0].session_id}&select=*&order=created_at.asc`,
        {
          headers: {
            'apikey': supabaseAnonKey,
            'Authorization': `Bearer ${supabaseAnonKey}`,
          },
        }
      );

      if (runsResponse.ok) {
        const runsData = await runsResponse.json();
        setRuns(runsData || []);
      }

      setLoading(false);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(err instanceof Error ? err.message : 'Failed to load report');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#0d5f4e] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading report...</p>
        </div>
      </div>
    );
  }

  if (error || !report) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-2xl font-light text-[#212427] mb-2">Error Loading Report</h1>
          <p className="text-gray-600 mb-6">{error || 'Report not found'}</p>
          <button
            onClick={() => onNavigate?.('validator')}
            className="px-6 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0a4a3a] transition-colors"
          >
            Start New Validation
          </button>
        </div>
      </div>
    );
  }

  const reportContent: ReportContent = report.report_json as ReportContent;
  const verification = report.verification_json as any;

  const verdictColors = {
    GO: { bg: 'bg-[#0d5f4e]', text: 'text-[#0d5f4e]', border: 'border-[#0d5f4e]' },
    CAUTION: { bg: 'bg-[#6b9d89]', text: 'text-[#6b9d89]', border: 'border-[#6b9d89]' },
    'NO-GO': { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-600' },
  };

  const verdict = reportContent.summary_verdict.overall_verdict;
  const colors = verdictColors[verdict];

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

          <div className="flex items-center gap-3">
            {report.verified && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#DCF9E3] text-[#0d5f4e] rounded-lg text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">AI-Verified</span>
              </div>
            )}
            <button
              onClick={() => setTraceOpen(true)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all flex items-center gap-2"
            >
              <Database className="w-4 h-4" />
              View Trace
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1000px] mx-auto px-6 lg:px-12 py-12">
        {/* Verification Warning */}
        {!report.verified && (
          <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-yellow-900">Partial Verification</p>
              <p className="text-sm text-yellow-700 mt-1">
                {verification.warnings?.length > 0 && `Warnings: ${verification.warnings.join(', ')}`}
                {verification.missing_sections?.length > 0 && ` • Missing: ${verification.missing_sections.join(', ')}`}
              </p>
            </div>
          </div>
        )}

        {/* Summary Verdict */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center`}>
                <span className="text-white text-2xl font-bold">
                  {reportContent.summary_verdict.score}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl font-light text-[#212427]">Validation Report</h1>
                  <span className={`px-3 py-1 ${colors.bg} text-white rounded-lg text-sm font-medium`}>
                    {verdict}
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Confidence: {reportContent.summary_verdict.confidence}
                </p>
              </div>
            </div>
          </div>
          <p className="text-lg text-[#212427] leading-relaxed">
            {reportContent.summary_verdict.one_sentence_summary}
          </p>
        </div>

        {/* Report Sections */}
        <div className="space-y-6">
          {/* Problem Clarity */}
          <SectionCard
            icon={<Target className="w-5 h-5" />}
            title="Problem Clarity"
            content={
              <div className="space-y-4">
                <p className="text-base text-gray-700 leading-relaxed">
                  {reportContent.problem_clarity.problem_statement}
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <ScoreBar label="Severity" score={reportContent.problem_clarity.severity_score} />
                  <ScoreBar label="Frequency" score={reportContent.problem_clarity.frequency_score} />
                  <ScoreBar label="Urgency" score={reportContent.problem_clarity.urgency_score} />
                </div>
                <p className="text-sm text-gray-600">
                  {reportContent.problem_clarity.problem_validation}
                </p>
              </div>
            }
          />

          {/* Customer Use Case */}
          <SectionCard
            icon={<FileText className="w-5 h-5" />}
            title="Customer Use Case"
            content={
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">TARGET CUSTOMER</p>
                  <p className="text-base text-gray-900">{reportContent.customer_use_case.target_customer}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">USE CASE</p>
                  <p className="text-base text-gray-700">{reportContent.customer_use_case.use_case_description}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">VALUE PROPOSITION</p>
                  <p className="text-base text-gray-700">{reportContent.customer_use_case.value_proposition}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">WILLINGNESS TO PAY</p>
                  <p className="text-base text-gray-900">{reportContent.customer_use_case.willingness_to_pay_estimate}</p>
                </div>
              </div>
            }
          />

          {/* Market Sizing */}
          <SectionCard
            icon={<TrendingUp className="w-5 h-5" />}
            title="Market Sizing"
            verified={reportContent.market_sizing.citations?.length > 0}
            content={
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[#F5F3EF] rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">TAM</p>
                    <p className="text-xl font-light text-gray-900">{reportContent.market_sizing.tam}</p>
                  </div>
                  <div className="p-4 bg-[#F5F3EF] rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">SAM</p>
                    <p className="text-xl font-light text-gray-900">{reportContent.market_sizing.sam}</p>
                  </div>
                  <div className="p-4 bg-[#F5F3EF] rounded-lg">
                    <p className="text-xs text-gray-600 mb-1">SOM</p>
                    <p className="text-xl font-light text-gray-900">{reportContent.market_sizing.som}</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">GROWTH RATE</p>
                  <p className="text-base text-gray-900">{reportContent.market_sizing.market_growth_rate}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">METHODOLOGY</p>
                  <p className="text-sm text-gray-600">{reportContent.market_sizing.methodology}</p>
                </div>
                {reportContent.market_sizing.citations && reportContent.market_sizing.citations.length > 0 && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">SOURCES ({reportContent.market_sizing.citations.length})</p>
                    <div className="space-y-2">
                      {reportContent.market_sizing.citations.map((citation, idx) => (
                        <div key={idx} className="text-xs text-gray-600">
                          <span className="font-medium">{citation.title || 'Source'}</span>
                          {citation.url && <span className="text-gray-400 ml-2">• {citation.url}</span>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            }
          />

          {/* Competition */}
          <SectionCard
            icon={<Shield className="w-5 h-5" />}
            title="Competition"
            verified={reportContent.competition.citations?.length > 0}
            content={
              <div className="space-y-4">
                <p className="text-sm text-gray-700">{reportContent.competition.differentiation_summary}</p>
                <div className="space-y-3">
                  {reportContent.competition.competitors.map((competitor, idx) => (
                    <div key={idx} className="p-4 bg-[#F5F3EF] rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{competitor.name}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          competitor.strength === 'High' ? 'bg-red-100 text-red-700' :
                          competitor.strength === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {competitor.strength}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{competitor.description}</p>
                      <p className="text-xs text-gray-500">Weakness: {competitor.weakness}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-[#DCF9E3] rounded-lg">
                  <p className="text-xs text-[#0d5f4e] font-medium mb-1">YOUR COMPETITIVE MOAT</p>
                  <p className="text-sm text-gray-800">{reportContent.competition.competitive_moat}</p>
                </div>
              </div>
            }
          />

          {/* Risks & Assumptions */}
          <SectionCard
            icon={<AlertCircle className="w-5 h-5" />}
            title="Risks & Assumptions"
            content={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-3">TOP RISKS</p>
                  <div className="space-y-3">
                    {reportContent.risks_assumptions.top_risks.map((risk, idx) => (
                      <div key={idx} className="p-3 bg-red-50 rounded-lg border border-red-100">
                        <div className="flex items-start justify-between mb-1">
                          <p className="text-sm text-gray-900 font-medium">{risk.risk_description}</p>
                          <span className="text-xs text-red-600">{risk.severity}</span>
                        </div>
                        <p className="text-xs text-gray-600">Mitigation: {risk.mitigation_strategy}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-3">CRITICAL ASSUMPTIONS</p>
                  <div className="space-y-3">
                    {reportContent.risks_assumptions.critical_assumptions.map((assumption, idx) => (
                      <div key={idx} className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                        <p className="text-sm text-gray-900 mb-1">{assumption.assumption}</p>
                        <p className="text-xs text-gray-600">Validate: {assumption.validation_method}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {/* MVP Scope */}
          <SectionCard
            icon={<Rocket className="w-5 h-5" />}
            title="MVP Scope"
            content={
              <div className="space-y-4">
                <p className="text-base text-gray-700">{reportContent.mvp_scope.mvp_description}</p>
                <div>
                  <p className="text-xs text-gray-500 mb-2">CORE FEATURES</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {reportContent.mvp_scope.core_features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-3">PHASED APPROACH</p>
                  <div className="space-y-3">
                    {reportContent.mvp_scope.phased_approach.map((phase, idx) => (
                      <div key={idx} className="p-4 bg-[#F5F3EF] rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{phase.phase_name}</h4>
                          <span className="text-xs text-gray-500">{phase.duration}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{phase.description}</p>
                        <div className="space-y-1">
                          {phase.key_milestones.map((milestone, midx) => (
                            <div key={midx} className="flex items-start gap-2 text-xs text-gray-600">
                              <ChevronRight className="w-3 h-3 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                              <span>{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-3 bg-[#DCF9E3] rounded-lg">
                  <p className="text-xs text-[#0d5f4e] font-medium">
                    Estimated Timeline: {reportContent.mvp_scope.estimated_timeline}
                  </p>
                </div>
              </div>
            }
          />

          {/* Next Steps */}
          <SectionCard
            icon={<FileText className="w-5 h-5" />}
            title="Next Steps"
            content={
              <div className="space-y-3">
                {reportContent.next_steps.immediate_actions.map((action, idx) => (
                  <div key={idx} className="p-4 bg-[#F5F3EF] rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${
                          action.priority === 'HIGH' ? 'bg-gray-900 text-white' :
                          action.priority === 'MEDIUM' ? 'bg-[#6b9d89] text-white' :
                          'bg-gray-300 text-gray-700'
                        }`}>
                          {action.priority}
                        </span>
                        <h4 className="font-medium text-gray-900">{action.title}</h4>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{action.description}</p>
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <span>Effort: {action.effort}</span>
                      <span>•</span>
                      <span>Impact: {action.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
        </div>
      </main>

      {/* Trace Drawer */}
      {traceOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setTraceOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-2xl bg-white shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-medium text-[#212427]">Validation Trace</h2>
                <p className="text-sm text-gray-600">Full AI agent execution history</p>
              </div>
              <button
                onClick={() => setTraceOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {runs.map((run, idx) => (
                <div key={run.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-medium text-gray-900">{run.agent_name}</h3>
                      <p className="text-xs text-gray-500 mt-1">Model: {run.model_used}</p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      run.status === 'done' ? 'bg-green-100 text-green-700' :
                      run.status === 'failed' ? 'bg-red-100 text-red-700' :
                      run.status === 'running' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {run.status}
                    </span>
                  </div>
                  {run.citations && run.citations.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-600 mb-1">Citations: {run.citations.length}</p>
                    </div>
                  )}
                  {run.started_at && run.finished_at && (
                    <div className="text-xs text-gray-500">
                      Duration: {Math.round((new Date(run.finished_at).getTime() - new Date(run.started_at).getTime()) / 1000)}s
                    </div>
                  )}
                  {run.error_message && (
                    <div className="mt-2 text-xs text-red-600">{run.error_message}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SectionCard({ icon, title, content, verified }: { icon: React.ReactNode; title: string; content: React.ReactNode; verified?: boolean }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#0d5f4e]/10 flex items-center justify-center text-[#0d5f4e]">
            {icon}
          </div>
          <h2 className="text-lg font-medium text-[#212427]">{title}</h2>
        </div>
        {verified && (
          <div className="flex items-center gap-1 text-xs text-[#0d5f4e]">
            <CheckCircle2 className="w-3 h-3" />
            <span>Verified</span>
          </div>
        )}
      </div>
      {content}
    </div>
  );
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  const percentage = (score / 10) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-600">{label}</span>
        <span className="text-xs font-medium text-gray-900">{score}/10</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-[#0d5f4e] rounded-full transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

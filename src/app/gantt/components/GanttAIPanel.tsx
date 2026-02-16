// Gantt AI Panel Component
// Right panel with AI analysis, risks, dependencies, and actions

import { X, AlertTriangle, TrendingUp, Loader } from 'lucide-react';
import type { Task, AIAnalysis } from '@/data/gantt-types';
import AIPanelHeader from './AIPanelHeader';
import AIInsightCard from './AIInsightCard';
import ImpactCard from './ImpactCard';
import DependencyCard from './DependencyCard';
import AIActionGroup from './AIActionGroup';

interface GanttAIPanelProps {
  task: Task | null;
  aiAnalysis: AIAnalysis | null;
  loading: boolean;
  onClose: () => void;
  onGenerateSubtasks: (taskId: string) => void;
  onRecalculateTimeline: (taskId: string) => void;
  onIdentifyBlockers: (taskId: string) => void;
}

export default function GanttAIPanel({
  task,
  aiAnalysis,
  loading,
  onClose,
  onGenerateSubtasks,
  onRecalculateTimeline,
  onIdentifyBlockers,
}: GanttAIPanelProps) {
  if (!task) return null;

  return (
    <div className="w-96 bg-white border-l border-gray-200 overflow-y-auto flex-shrink-0" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        {/* Close button */}
        <div className="flex items-center justify-between p-4">
          <h3 className="text-sm font-medium text-[#6B7280] uppercase tracking-wide">
            AI Strategy
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>

        {/* Task header */}
        <AIPanelHeader task={task} />
      </div>

      {/* Panel content */}
      <div className="p-6 space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader className="w-8 h-8 text-[#0d5f4e] animate-spin mb-3" />
            <p className="text-sm text-[#6B7280]">Analyzing task...</p>
            <p className="text-xs text-[#9CA3AF] mt-1">This may take a moment</p>
          </div>
        ) : aiAnalysis ? (
          <>
            {/* Risk Analysis */}
            <AIInsightCard
              type="risk"
              title="Risk Assessment"
              riskLevel={aiAnalysis.risk_level}
              riskScore={aiAnalysis.risk_score}
              content={`Risk Score: ${aiAnalysis.risk_score}/100`}
              confidence={aiAnalysis.confidence}
            />

            {/* Dependency Health */}
            {aiAnalysis.dependency_health.issues.length > 0 && (
              <DependencyCard
                status={aiAnalysis.dependency_health.status}
                issues={aiAnalysis.dependency_health.issues}
                missingDependencies={aiAnalysis.dependency_health.missing_dependencies}
              />
            )}

            {/* Blockers */}
            {aiAnalysis.blockers.length > 0 && (
              <div className="bg-[#FEF2F2] border border-[#FCA5A5] rounded-lg p-4">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#212427] mb-1">
                      Blockers ({aiAnalysis.blockers.length})
                    </h4>
                  </div>
                </div>
                <div className="space-y-2">
                  {aiAnalysis.blockers.map((blocker, index) => (
                    <div key={index} className="bg-white rounded p-3 text-xs">
                      <div className="font-medium text-[#212427] mb-1">
                        {blocker.task_name}
                      </div>
                      <div className="text-[#6B7280] mb-2">{blocker.reason}</div>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className={`px-2 py-0.5 rounded uppercase font-medium ${
                          blocker.severity === 'high' ? 'bg-[#EF4444] text-white' :
                          blocker.severity === 'medium' ? 'bg-[#F59E0B] text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {blocker.severity}
                        </span>
                        <span className="text-[#9CA3AF]">
                          +{blocker.estimated_delay_days} days delay
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline Assessment */}
            {!aiAnalysis.timeline_assessment.is_realistic && (
              <AIInsightCard
                type="warning"
                title="Timeline Concern"
                content={aiAnalysis.timeline_assessment.reason}
                confidence={aiAnalysis.confidence}
                action={`Suggest +${aiAnalysis.timeline_assessment.suggested_shift_days} days`}
              />
            )}

            {/* Downstream Impact */}
            {aiAnalysis.downstream_impact.length > 0 && (
              <ImpactCard
                impacts={aiAnalysis.downstream_impact}
                totalDelayDays={aiAnalysis.timeline_assessment.suggested_shift_days}
              />
            )}

            {/* Strategic Recommendations */}
            {aiAnalysis.strategic_recommendations.length > 0 && (
              <div className="bg-[#E8F4F1] border border-[#6b9d89] rounded-lg p-4">
                <div className="flex items-start gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-[#0d5f4e] flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-sm font-semibold text-[#212427] mb-1">
                      Recommendations
                    </h4>
                  </div>
                </div>
                <ul className="space-y-2">
                  {aiAnalysis.strategic_recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs text-[#212427]">
                      <span className="text-[#0d5f4e] font-bold mt-0.5">•</span>
                      <span className="flex-1">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <AIActionGroup
              taskId={task.id}
              hasSubtasks={aiAnalysis.suggested_subtasks.length > 0}
              onGenerateSubtasks={onGenerateSubtasks}
              onRecalculateTimeline={onRecalculateTimeline}
              onIdentifyBlockers={onIdentifyBlockers}
            />

            {/* Suggested Subtasks Preview */}
            {aiAnalysis.suggested_subtasks.length > 0 && (
              <div className="bg-[#FAF9F7] border border-gray-200 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-[#212427] mb-3">
                  Suggested Subtasks ({aiAnalysis.suggested_subtasks.length})
                </h4>
                <div className="space-y-2">
                  {aiAnalysis.suggested_subtasks.slice(0, 3).map((subtask, index) => (
                    <div key={index} className="bg-white rounded p-3 text-xs">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <div className="font-medium text-[#212427] flex-1">
                          {subtask.title}
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-medium flex-shrink-0 ${
                          subtask.priority === 'high' ? 'bg-[#F59E0B] text-white' :
                          subtask.priority === 'medium' ? 'bg-[#6b9d89] text-white' :
                          'bg-gray-200 text-gray-700'
                        }`}>
                          {subtask.priority}
                        </span>
                      </div>
                      {subtask.description && (
                        <div className="text-[#6B7280] mb-2">{subtask.description}</div>
                      )}
                      <div className="flex items-center gap-3 text-[10px] text-[#9CA3AF]">
                        <span>{subtask.estimated_hours}h estimated</span>
                        <span>•</span>
                        <span>{subtask.reason}</span>
                      </div>
                    </div>
                  ))}
                  {aiAnalysis.suggested_subtasks.length > 3 && (
                    <button className="w-full py-2 text-xs text-[#0d5f4e] hover:underline">
                      View all {aiAnalysis.suggested_subtasks.length} subtasks
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* AI Confidence Footer */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#9CA3AF]">AI Confidence</span>
                <span className="font-medium text-[#212427]">{aiAnalysis.confidence}%</span>
              </div>
              <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#0d5f4e] rounded-full transition-all duration-500"
                  style={{ width: `${aiAnalysis.confidence}%` }}
                />
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="text-sm text-[#6B7280] mb-2">No AI analysis available</div>
            <p className="text-xs text-[#9CA3AF]">
              Click "Analyze Task" to generate insights
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

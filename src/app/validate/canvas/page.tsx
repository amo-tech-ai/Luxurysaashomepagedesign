import { useState } from 'react';
import { DashboardLayout } from '../../../components/DashboardLayout';
import { CurrentBetCard } from './components/CurrentBetCard';
import { PivotLogCard } from './components/PivotLogCard';
import { AssumptionCard } from './components/AssumptionCard';
import { RiskiestFocusCard } from './components/RiskiestFocusCard';
import { StageProgressionCard } from './components/StageProgressionCard';
import { AISuggestionsPanel, type AISuggestionRequest } from './components/AISuggestionsPanel';
import { SAMPLE_VALIDATION_STATE } from '../../../data/validation-board-data';
import { FlaskConical, Plus, Sparkles } from 'lucide-react';

interface ValidationCanvasPageProps {
  onNavigate?: (page: string) => void;
}

export default function ValidationCanvasPage({ onNavigate }: ValidationCanvasPageProps) {
  const [selectedCard, setSelectedCard] = useState<AISuggestionRequest | null>(null);

  const handleAISuggest = (request: AISuggestionRequest) => {
    setSelectedCard(request);
  };

  const handleClosePanel = () => {
    setSelectedCard(null);
  };

  const handleAddToCard = (suggestionId: string, text: string, target: 'card' | 'experiment') => {
    console.log('Add to card:', { suggestionId, text, target });
    // In production, this would update the actual card content
    // For now, just log to console
    alert(`Suggestion added to ${target}:\n\n${text}`);
  };

  return (
    <DashboardLayout
      title="Validation Board"
      subtitle="From strategy to daily execution, in one guided flow."
      onNavigate={onNavigate}
      activeNav="validate-canvas"
    >
      <div className="flex h-full relative">
        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="space-y-6 max-w-[900px] mx-auto">
            {/* Pivot Log */}
            <PivotLogCard
              pivots={SAMPLE_VALIDATION_STATE.pivots}
              onAISuggest={() =>
                handleAISuggest({
                  entityType: 'pivot_log',
                  entityId: SAMPLE_VALIDATION_STATE.pivots[0]?.id || 'pivot-1',
                  entityTitle: SAMPLE_VALIDATION_STATE.pivots[0]?.what_changed || 'Latest Pivot',
                  entityContent: SAMPLE_VALIDATION_STATE.pivots[0]?.reason || '',
                  startupContext: {
                    audience: SAMPLE_VALIDATION_STATE.current_bet?.audience,
                    pain: SAMPLE_VALIDATION_STATE.current_bet?.pain_point,
                    stage: SAMPLE_VALIDATION_STATE.current_bet?.stage,
                  },
                })
              }
              isAIActive={selectedCard?.entityType === 'pivot_log'}
            />

            {/* Current Bet */}
            <CurrentBetCard
              bet={SAMPLE_VALIDATION_STATE.current_bet!}
              onAISuggest={() =>
                handleAISuggest({
                  entityType: 'current_bet',
                  entityId: 'current-bet',
                  entityTitle: `${SAMPLE_VALIDATION_STATE.current_bet!.audience} - ${SAMPLE_VALIDATION_STATE.current_bet!.pain_point}`,
                  entityContent: `Audience: ${SAMPLE_VALIDATION_STATE.current_bet!.audience}\nPain: ${SAMPLE_VALIDATION_STATE.current_bet!.pain_point}\nSolution: ${SAMPLE_VALIDATION_STATE.current_bet!.solution || 'TBD'}`,
                  startupContext: {
                    audience: SAMPLE_VALIDATION_STATE.current_bet!.audience,
                    pain: SAMPLE_VALIDATION_STATE.current_bet!.pain_point,
                    stage: SAMPLE_VALIDATION_STATE.current_bet!.stage,
                  },
                })
              }
              isAIActive={selectedCard?.entityType === 'current_bet'}
            />

            {/* Core Assumptions */}
            <div className="bg-white rounded-lg border border-[#E8E6E1] p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#E8F4F1] flex items-center justify-center">
                    <FlaskConical className="w-5 h-5 text-[#0d5f4e]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-light text-[#0E3E1B]" style={{ fontFamily: 'Georgia, serif' }}>
                      Core Assumptions
                    </h2>
                    <p className="text-sm text-gray-600">
                      ({SAMPLE_VALIDATION_STATE.current_bet!.stage} stage)
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm text-[#0d5f4e] hover:bg-[#E8F4F1] rounded-lg transition-colors flex items-center gap-2 border border-[#E8E6E1]">
                    <Sparkles className="w-4 h-4" />
                    Extract from Canvas
                  </button>
                  <button className="px-4 py-2 text-sm text-[#0d5f4e] hover:bg-[#E8F4F1] rounded-lg transition-colors flex items-center gap-2 border border-[#E8E6E1]">
                    <Plus className="w-4 h-4" />
                    Add Assumption
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {SAMPLE_VALIDATION_STATE.assumptions.map((assumption) => (
                  <AssumptionCard
                    key={assumption.id}
                    assumption={assumption}
                    onAISuggest={() =>
                      handleAISuggest({
                        entityType: 'assumption',
                        entityId: assumption.id,
                        entityTitle: assumption.text,
                        entityContent: `Risk: ${assumption.risk_level}, Impact: ${assumption.impact_level}, Status: ${assumption.status}`,
                        startupContext: {
                          audience: SAMPLE_VALIDATION_STATE.current_bet?.audience,
                          pain: SAMPLE_VALIDATION_STATE.current_bet?.pain_point,
                          stage: SAMPLE_VALIDATION_STATE.current_bet?.stage,
                        },
                      })
                    }
                    isAIActive={selectedCard?.entityId === assumption.id}
                  />
                ))}
              </div>
            </div>

            {/* Riskiest Assumption Focus */}
            <RiskiestFocusCard
              assumption={SAMPLE_VALIDATION_STATE.assumptions.find(a => a.is_riskiest)!}
              experiment={SAMPLE_VALIDATION_STATE.experiments.find(
                e => e.assumption_id === SAMPLE_VALIDATION_STATE.assumptions.find(a => a.is_riskiest)?.id
              )}
              interviews={SAMPLE_VALIDATION_STATE.interviews.filter(
                i => i.experiment_id === SAMPLE_VALIDATION_STATE.experiments.find(
                  e => e.assumption_id === SAMPLE_VALIDATION_STATE.assumptions.find(a => a.is_riskiest)?.id
                )?.id
              )}
            />

            {/* Stage Progression */}
            <StageProgressionCard
              currentStage={SAMPLE_VALIDATION_STATE.current_bet!.stage}
              stageGates={SAMPLE_VALIDATION_STATE.stage_gates}
            />
          </div>
        </div>

        {/* Right Coach Panel */}
        <aside className="w-[380px] bg-[#F5F3EF] border-l border-[#E8E6E1] p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Next Action */}
            <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4F1] flex items-center justify-center">
                  <span className="text-[#0d5f4e] text-lg">🎯</span>
                </div>
                <h3 className="font-medium text-[#0E3E1B]">Next Action</h3>
              </div>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  → Run interview for assumption: <span className="font-medium">"Will they switch from Canva/PPT?"</span>
                </p>
                <div className="pt-3 border-t border-[#E8E6E1]">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Why This Matters</p>
                  <p className="text-sm text-gray-600">
                    Riskiest assumption has no final result yet. You're at 4/10 interviews (40%). Complete 6 more to reach success criterion.
                  </p>
                </div>
              </div>
            </div>

            {/* AI Agents */}
            <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4F1] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#0d5f4e]" />
                </div>
                <h3 className="font-medium text-[#0E3E1B]">AI Agents</h3>
              </div>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm text-gray-700">
                  ✨ Extract from Canvas
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm text-gray-700">
                  💡 Suggest Experiment
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm text-gray-700">
                  🎯 Pick Riskiest
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm text-gray-700">
                  📊 Coach Nudge
                </button>
              </div>
            </div>

            {/* Stage Progress */}
            <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#E8F4F1] flex items-center justify-center">
                  <span className="text-[#0d5f4e] text-lg">📊</span>
                </div>
                <h3 className="font-medium text-[#0E3E1B]">Stage Progress</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#0d5f4e] text-white flex items-center justify-center font-medium">
                    I
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-400 flex items-center justify-center font-medium">
                    M
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-400 flex items-center justify-center font-medium">
                    S
                  </div>
                </div>
                <div className="text-sm font-medium text-[#0E3E1B] mb-2">
                  BRAINSTORM (Idea)
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-[#0d5f4e]">
                    <span>☑</span>
                    <span>Idea clarity</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0d5f4e]">
                    <span>☑</span>
                    <span>5+ interviews</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>☐</span>
                    <span>Riskiest tested</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span>☐</span>
                    <span>Market view</span>
                  </div>
                </div>
                <div className="pt-3 border-t border-[#E8E6E1] text-xs text-gray-600">
                  → Need 1 validated assumption to advance to BUILD
                </div>
              </div>
            </div>

            {/* Bias Nudge */}
            <div className="bg-[#FEF2F2] rounded-lg border border-[#FCA5A5] p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">💬</span>
                <h3 className="font-medium text-[#0E3E1B]">Quality Nudge</h3>
              </div>
              <div className="space-y-3 text-sm text-gray-700">
                <p>
                  ⚠️ "Have you talked to customers or only guessed?"
                </p>
                <p>
                  💡 "One assumption per experiment keeps signal clean"
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🔗</span>
                <h3 className="font-medium text-[#0E3E1B]">Quick Actions</h3>
              </div>
              <div className="space-y-2">
                <button className="w-full px-3 py-2 bg-[#3B5F52] text-white rounded-lg hover:bg-[#2D4840] transition-colors text-sm">
                  Add Experiment
                </button>
                <button className="w-full px-3 py-2 border border-[#E8E6E1] text-gray-700 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm">
                  Pick Riskiest
                </button>
                <button className="w-full px-3 py-2 border border-[#E8E6E1] text-gray-700 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm">
                  Pivot
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      {selectedCard && (
        <AISuggestionsPanel
          selectedCard={selectedCard}
          onClose={handleClosePanel}
          onAddToCard={handleAddToCard}
        />
      )}
    </DashboardLayout>
  );
}
/**
 * AI Readiness Canvas - Right Panel Intelligence Component
 * Shows AI suggestions when a section is selected
 */

import { useState } from 'react';
import { Sparkles, X, FileText, Lightbulb, BookOpen, TrendingUp } from 'lucide-react';
import type { AISuggestion } from '@/data/ai-readiness-types';
import { SAMPLE_READINESS_SCORE } from '@/data/ai-readiness-data';

interface AIIntelligencePanelProps {
  selectedSection: string | null;
  suggestion: AISuggestion | null;
  onApply: (content: string) => void;
  onClear: () => void;
}

export function AIIntelligencePanel({
  selectedSection,
  suggestion,
  onApply,
  onClear
}: AIIntelligencePanelProps) {
  const [generatedDraft, setGeneratedDraft] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateDraft = () => {
    setIsGenerating(true);
    // Simulate AI generation
    setTimeout(() => {
      setGeneratedDraft(
        `AI-generated draft for ${suggestion?.section_name}:\n\n` +
        `Based on best practices and your startup context...\n\n` +
        `${suggestion?.templates[0] || 'Sample content here'}`
      );
      setIsGenerating(false);
    }, 1500);
  };

  const handleApply = () => {
    if (generatedDraft) {
      onApply(generatedDraft);
      setGeneratedDraft(null);
    }
  };

  return (
    <div className="w-96 border-l border-[#0d5f4e]/10 bg-white flex flex-col h-screen">
      {/* Header */}
      <div className="p-6 border-b border-[#0d5f4e]/10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#0d5f4e]" />
            <h2 className="text-lg font-medium text-[#0d5f4e]">AI Intelligence</h2>
          </div>
          {selectedSection && (
            <button
              onClick={onClear}
              className="p-1 rounded hover:bg-[#F5F3EF] transition-colors"
              title="Clear selection"
            >
              <X className="w-4 h-4 text-[#0d5f4e]" />
            </button>
          )}
        </div>
        <p className="text-xs text-[#0d5f4e]/60">
          {selectedSection 
            ? `Section ${selectedSection}: ${suggestion?.section_name}` 
            : 'Click any box to see AI suggestions'
          }
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {!selectedSection ? (
          // Default View: Readiness Score & Deloitte 4 Questions
          <DefaultPanelContent />
        ) : (
          // Section-Specific Suggestions
          <SectionSuggestions
            suggestion={suggestion!}
            generatedDraft={generatedDraft}
            isGenerating={isGenerating}
            onGenerateDraft={handleGenerateDraft}
            onApply={handleApply}
            onClear={() => setGeneratedDraft(null)}
          />
        )}
      </div>
    </div>
  );
}

function DefaultPanelContent() {
  const score = SAMPLE_READINESS_SCORE;

  return (
    <div className="space-y-6">
      {/* Overall Readiness Score */}
      <div>
        <h3 className="text-sm font-medium text-[#0d5f4e] mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Readiness Score
        </h3>
        <div className="bg-[#F5F3EF] rounded-lg p-4">
          <div className="text-center mb-4">
            <div className="text-4xl font-serif text-[#0d5f4e] mb-1">
              {score.overall_score}
              <span className="text-xl text-[#0d5f4e]/50">/100</span>
            </div>
            <p className="text-xs text-[#0d5f4e]/60">Overall AI Readiness</p>
          </div>
          
          <div className="space-y-2">
            <ScoreBar label="Strategy" score={score.strategy_readiness} />
            <ScoreBar label="Legal" score={score.legal_readiness} />
            <ScoreBar label="Business" score={score.business_readiness} />
            <ScoreBar label="Systems & Data" score={score.systems_data_readiness} />
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div>
        <h3 className="text-sm font-medium text-[#0d5f4e] mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4" />
          Strengths
        </h3>
        <ul className="space-y-2">
          {score.strengths.slice(0, 3).map((strength, i) => (
            <li key={i} className="text-sm text-[#0d5f4e]/80 flex gap-2">
              <span className="text-[#6b9d89] mt-1">✓</span>
              <span>{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Gaps */}
      <div>
        <h3 className="text-sm font-medium text-[#0d5f4e] mb-3 flex items-center gap-2">
          <span className="w-4 h-4 flex items-center justify-center text-xs">⚠</span>
          Gaps to Address
        </h3>
        <ul className="space-y-2">
          {score.gaps.map((gap, i) => (
            <li key={i} className="text-sm text-[#0d5f4e]/80 flex gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>{gap}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Deloitte 4 Questions */}
      <div className="border-t border-[#0d5f4e]/10 pt-6">
        <h3 className="text-sm font-medium text-[#0d5f4e] mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4" />
          Deloitte 4 Questions
        </h3>
        <div className="space-y-3 text-xs text-[#0d5f4e]/70">
          <p><strong>1.</strong> How can GenAI inform or validate your customer strategy?</p>
          <p><strong>2.</strong> Have you evaluated use cases for impact, feasibility, viability?</p>
          <p><strong>3.</strong> Do you have risk mitigation processes in place?</p>
          <p><strong>4.</strong> How will you build trust and maintain ethical AI?</p>
        </div>
      </div>
    </div>
  );
}

function SectionSuggestions({
  suggestion,
  generatedDraft,
  isGenerating,
  onGenerateDraft,
  onApply,
  onClear
}: {
  suggestion: AISuggestion;
  generatedDraft: string | null;
  isGenerating: boolean;
  onGenerateDraft: () => void;
  onApply: () => void;
  onClear: () => void;
}) {
  return (
    <div className="space-y-6">
      {/* Key Questions */}
      <div>
        <h3 className="text-sm font-medium text-[#0d5f4e] mb-3">Key Questions</h3>
        <ul className="space-y-2">
          {suggestion.key_questions.map((question, i) => (
            <li key={i} className="text-sm text-[#0d5f4e]/80 pl-4 border-l-2 border-[#6b9d89]">
              {question}
            </li>
          ))}
        </ul>
      </div>

      {/* Examples */}
      {suggestion.examples.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-[#0d5f4e] mb-3">Examples</h3>
          <div className="space-y-2">
            {suggestion.examples.slice(0, 2).map((example, i) => (
              <div key={i} className="p-3 bg-[#F5F3EF] rounded text-xs text-[#0d5f4e]/80">
                {example}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Templates */}
      {suggestion.templates.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-[#0d5f4e] mb-3">Templates</h3>
          <div className="space-y-2">
            {suggestion.templates.slice(0, 2).map((template, i) => (
              <div key={i} className="p-3 bg-[#F5F3EF] rounded text-xs text-[#0d5f4e]/80 font-mono">
                {template}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Best Practices */}
      {suggestion.industry_best_practices.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-[#0d5f4e] mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Best Practices
          </h3>
          <ul className="space-y-2">
            {suggestion.industry_best_practices.slice(0, 3).map((practice, i) => (
              <li key={i} className="text-sm text-[#0d5f4e]/80 flex gap-2">
                <span className="text-[#6b9d89] mt-1">✓</span>
                <span>{practice}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Action Buttons */}
      <div className="space-y-3 pt-4 border-t border-[#0d5f4e]/10">
        {!generatedDraft ? (
          <button
            onClick={onGenerateDraft}
            disabled={isGenerating}
            className="w-full py-2 px-4 rounded bg-[#0d5f4e] text-white hover:bg-[#0E3E1B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Generate Draft</span>
              </>
            )}
          </button>
        ) : (
          <>
            <div className="p-4 bg-[#F5F3EF] rounded text-sm text-[#0d5f4e]/80 max-h-48 overflow-auto">
              <pre className="whitespace-pre-wrap font-sans">{generatedDraft}</pre>
            </div>
            <div className="flex gap-2">
              <button
                onClick={onApply}
                className="flex-1 py-2 px-4 rounded bg-[#0d5f4e] text-white hover:bg-[#0E3E1B] transition-colors"
              >
                Apply to Box
              </button>
              <button
                onClick={onClear}
                className="py-2 px-4 rounded border border-[#0d5f4e]/20 text-[#0d5f4e] hover:bg-[#F5F3EF] transition-colors"
              >
                Clear
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ScoreBar({ label, score }: { label: string; score: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs text-[#0d5f4e]/70 mb-1">
        <span>{label}</span>
        <span>{score}/100</span>
      </div>
      <div className="h-2 bg-white rounded-full overflow-hidden">
        <div
          className="h-full bg-[#0d5f4e] transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

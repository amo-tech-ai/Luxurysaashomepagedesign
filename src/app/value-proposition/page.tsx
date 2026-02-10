import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { FitScoreCard } from './components/FitScoreCard';
import { CustomerProfilePanel } from './components/CustomerProfilePanel';
import { ValueMapPanel } from './components/ValueMapPanel';
import { FitAnalysisPanel } from './components/FitAnalysisPanel';
import { AISuggestionsPanel, type AISuggestionRequest, type ItemType } from './components/AISuggestionsPanel';
import {
  SAMPLE_VALUE_PROPOSITION,
  SAMPLE_FIT_ANALYSIS,
} from '../../data/value-proposition-data';

interface ValuePropositionPageProps {
  onNavigate?: (page: string) => void;
}

export default function ValuePropositionPage({ onNavigate }: ValuePropositionPageProps) {
  const canvas = SAMPLE_VALUE_PROPOSITION;
  const analysis = SAMPLE_FIT_ANALYSIS;
  const [aiRequest, setAiRequest] = useState<AISuggestionRequest | null>(null);

  const handleOpenAIPanel = (itemType: ItemType) => {
    // Build context based on item type
    const existingItems = getExistingItems(itemType);
    
    setAiRequest({
      action: 'add_item_suggestions',
      itemType,
      canvasContext: {
        existingItems,
        matchedGaps: analysis.unmatched_pains.concat(analysis.unmatched_gains),
        startupStage: 'seed', // Could pull from actual data
        audience: 'Solo SaaS founders',
        solution: 'AI-powered pitch deck platform',
      },
    });
  };

  const getExistingItems = (itemType: ItemType): string[] => {
    switch (itemType) {
      case 'job':
        return canvas.customer_jobs.map(j => j.text);
      case 'pain':
        return canvas.pains.map(p => p.text);
      case 'gain':
        return canvas.gains.map(g => g.text);
      case 'product':
        return canvas.products.map(p => p.text);
      case 'reliever':
        return canvas.pain_relievers.map(r => r.text);
      case 'creator':
        return canvas.gain_creators.map(c => c.text);
      default:
        return [];
    }
  };

  const handleClosePanel = () => {
    setAiRequest(null);
  };

  const handleAddItem = (itemType: ItemType, text: string) => {
    console.log('Add item:', { itemType, text });
    // In production, this would update the canvas state and persist to database
    alert(`Added to ${itemType}:\n\n${text}`);
  };
  
  return (
    <DashboardLayout
      title="Value Proposition Canvas"
      subtitle="Does our product truly address what customers need?"
      onNavigate={onNavigate}
      activeNav="value-proposition"
    >
      <div className="flex h-full relative">
        {/* Left Panel - Fit Score & Context */}
        <aside className="w-[280px] bg-[#F5F3EF] border-r border-[#E8E6E1] p-6 overflow-y-auto">
          <FitScoreCard fitScore={canvas.fit_score} />
        </aside>
        
        {/* Center - 6-Box Canvas */}
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-[1200px] mx-auto">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-light text-[#0E3E1B] mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                Value Proposition Canvas
              </h1>
              <p className="text-gray-600">
                Map customer needs against product value to identify gaps and validate product-market fit.
              </p>
            </div>
            
            {/* 6-Box Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Left Side - Customer Profile */}
              <div>
                <CustomerProfilePanel
                  customerJobs={canvas.customer_jobs}
                  pains={canvas.pains}
                  gains={canvas.gains}
                  onAddJob={() => handleOpenAIPanel('job')}
                  onAddPain={() => handleOpenAIPanel('pain')}
                  onAddGain={() => handleOpenAIPanel('gain')}
                />
              </div>
              
              {/* Right Side - Value Map */}
              <div>
                <ValueMapPanel
                  products={canvas.products}
                  painRelievers={canvas.pain_relievers}
                  gainCreators={canvas.gain_creators}
                  onAddProduct={() => handleOpenAIPanel('product')}
                  onAddReliever={() => handleOpenAIPanel('reliever')}
                  onAddCreator={() => handleOpenAIPanel('creator')}
                />
              </div>
            </div>
            
            {/* Instructions */}
            <div className="mt-8 bg-white rounded-lg border border-[#E8E6E1] p-6">
              <div className="grid grid-cols-2 gap-8 text-sm">
                <div>
                  <h3 className="font-medium text-[#0E3E1B] mb-2">How to Use</h3>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Drag items to reorder by priority</li>
                    <li>• Click text to edit inline</li>
                    <li>• Use [+ Add] to create new items</li>
                    <li>• Match pains to relievers, gains to creators</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-[#0E3E1B] mb-2">Goal</h3>
                  <p className="text-gray-600">
                    Achieve 75%+ fit score by ensuring every high-impact pain has a reliever 
                    and every high-impact gain has a creator. Unmatched items indicate missing 
                    product features or unnecessary customer expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        
        {/* Right Panel - AI Intelligence */}
        <aside className="w-[380px] bg-[#F5F3EF] border-l border-[#E8E6E1] p-6 overflow-y-auto">
          <FitAnalysisPanel analysis={analysis} onNavigate={onNavigate} />
        </aside>
      </div>

      {/* AI Suggestions Panel */}
      {aiRequest && (
        <AISuggestionsPanel
          request={aiRequest}
          onClose={handleClosePanel}
          onAddItem={handleAddItem}
        />
      )}
    </DashboardLayout>
  );
}
import React, { useState, useEffect } from 'react';
import { SignalStrengthIndicator } from './SignalStrengthIndicator';
import { AgentSection } from './AgentSection';
import { GlobalActionsFooter, GlobalAction } from './GlobalActionsFooter';
import { IndustryFormData, getAgentStates } from '@/lib/ai-suggestions/agentConfigs';
import { calculateSignalStrength } from '@/lib/ai-suggestions/signalStrength';

interface AISuggestionsPanelProps {
  formData: IndustryFormData;
  onApplySuggestion: (field: string, value: string) => void;
}

export function AISuggestionsPanel({ formData, onApplySuggestion }: AISuggestionsPanelProps) {
  const [signalStrength, setSignalStrength] = useState(0);
  const [agents, setAgents] = useState(() => getAgentStates(formData, onApplySuggestion));

  // Update signal strength and agent states when form data changes
  useEffect(() => {
    const newStrength = calculateSignalStrength(formData);
    setSignalStrength(newStrength);

    const updatedAgents = getAgentStates(formData, onApplySuggestion);
    setAgents(updatedAgents);
  }, [formData, onApplySuggestion]);

  // Handle bulk add for an agent
  const handleBulkAdd = async (agentId: string) => {
    const agent = agents.find(a => a.id === agentId);
    if (!agent) return;

    // Apply all unapplied actions sequentially
    for (const action of agent.actions) {
      if (!action.applied) {
        await action.onClick();
        // Small delay between actions for better UX
        await new Promise(resolve => setTimeout(resolve, 200));
      }
    }
  };

  // Global AI actions
  const globalActions: GlobalAction[] = [
    {
      id: 'tighten-revenue',
      label: 'Tighten revenue framing',
      description: 'Add revenue focus to all sections',
      onClick: async () => {
        await simulateGlobalAction();
        alert('Revenue framing enhancement applied to all sections');
      },
    },
    {
      id: 'compare-decks',
      label: 'Compare to top Seed decks',
      description: 'Benchmark against successful decks',
      onClick: async () => {
        await simulateGlobalAction();
        alert('Your deck: 88/100. Top 10% Seed decks average: 92/100. Main gap: Add competitive moat.');
      },
    },
    {
      id: 'investor-rewrite',
      label: 'Generate investor-ready rewrite',
      description: 'Rewrite pitch for investors',
      onClick: async () => {
        await simulateGlobalAction();
        alert('AI-generated investor-ready version available. Review and apply suggested changes.');
      },
    },
    {
      id: 'simulate-objections',
      label: 'Simulate investor objections',
      description: 'Prepare for tough questions',
      onClick: async () => {
        await simulateGlobalAction();
        alert(
          'Potential objections:\n1. "What\'s your competitive moat?"\n2. "How do you plan to scale without headcount?"\n3. "What happens if larger CRMs build this feature?"'
        );
      },
    },
  ];

  return (
    <div className="ai-suggestions-panel h-full flex flex-col bg-gray-50 rounded-xl p-6">
      {/* Signal Strength Indicator */}
      <SignalStrengthIndicator value={signalStrength} />

      {/* Scrollable Agents Container */}
      <div className="flex-1 overflow-y-auto space-y-6 pb-4">
        {agents.map((agent) => (
          <AgentSection 
            key={agent.id} 
            agent={agent} 
            onBulkAdd={() => handleBulkAdd(agent.id)} 
          />
        ))}
      </div>

      {/* Global Actions Footer */}
      <GlobalActionsFooter actions={globalActions} />
    </div>
  );
}

/**
 * Simulate global action processing
 */
async function simulateGlobalAction(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, 500 + Math.random() * 300); // 500-800ms delay
  });
}
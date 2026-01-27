import React from 'react';
import { LucideIcon } from 'lucide-react';
import { SuggestionButton } from './SuggestionButton';
import { BulkAddButton } from './BulkAddButton';
import { SampleOutputCard } from './SampleOutputCard';
import { RealWorldExample } from './RealWorldExample';
import { StatusIndicator, StatusType } from './StatusIndicator';

export interface AgentAction {
  id: string;
  label: string;
  description: string;
  icon?: React.ReactNode;
  onClick: () => Promise<void>;
  applied?: boolean;
}

export interface AgentSectionData {
  id: string;
  name: string;
  icon: LucideIcon;
  insight: string;
  actions: AgentAction[];
  sampleOutput: string;
  realWorldExample: string;
  status: StatusType;
  statusMessage: string;
}

interface AgentSectionProps {
  agent: AgentSectionData;
  onBulkAdd?: () => Promise<void>;
}

export function AgentSection({ agent, onBulkAdd }: AgentSectionProps) {
  const Icon = agent.icon;
  const unappliedActions = agent.actions.filter(action => !action.applied);

  return (
    <div className="agent-section mb-6 last:mb-0">
      <div className="p-4 bg-white border border-gray-200 rounded-xl">
        {/* Agent Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="p-1.5 bg-gray-100 rounded-lg">
            <Icon className="w-4 h-4 text-gray-600" />
          </div>
          <h3 className="text-sm font-medium text-gray-900">{agent.name}</h3>
        </div>

        {/* Insight */}
        <div className="mb-4 p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-blue-600 text-sm">💡</span>
            <p className="text-xs text-blue-900 leading-relaxed flex-1">
              {agent.insight}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 mb-4">
          <div className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-1">
            <span className="text-sm">✨</span>
            <span>AI Suggestions</span>
          </div>
          
          {/* Bulk Add Button */}
          {onBulkAdd && unappliedActions.length > 0 && (
            <div className="mb-3">
              <BulkAddButton
                count={unappliedActions.length}
                onAddAll={onBulkAdd}
              />
            </div>
          )}
          
          {/* Individual Suggestion Buttons */}
          {agent.actions.map((action) => (
            <SuggestionButton
              key={action.id}
              label={action.label}
              icon={action.icon}
              onClick={action.onClick}
              applied={action.applied}
            />
          ))}
        </div>

        {/* Sample Output */}
        <SampleOutputCard content={agent.sampleOutput} />

        {/* Real-World Example */}
        <RealWorldExample content={agent.realWorldExample} />

        {/* Status */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <StatusIndicator 
            status={agent.status} 
            message={agent.statusMessage} 
          />
        </div>
      </div>
    </div>
  );
}
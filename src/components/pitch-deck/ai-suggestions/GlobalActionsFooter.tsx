import React from 'react';
import { Zap } from 'lucide-react';
import { ActionButton } from './ActionButton';

export interface GlobalAction {
  id: string;
  label: string;
  description: string;
  onClick: () => Promise<void>;
}

interface GlobalActionsFooterProps {
  actions: GlobalAction[];
}

export function GlobalActionsFooter({ actions }: GlobalActionsFooterProps) {
  return (
    <div className="global-actions-footer sticky bottom-0 left-0 right-0 pt-4 pb-0 bg-gradient-to-t from-gray-50 to-transparent">
      <div className="p-4 bg-white border border-emerald-200 rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-emerald-600" />
          <h3 className="text-sm font-medium text-gray-900">Global AI Actions</h3>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          {actions.map((action) => (
            <ActionButton
              key={action.id}
              label={action.label}
              onClick={action.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

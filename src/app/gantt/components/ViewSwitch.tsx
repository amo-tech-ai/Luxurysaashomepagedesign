// View Switch Component
// Segmented control for view mode (Timeline / Phase / Agent)

import { LayoutGrid, Layers, Zap } from 'lucide-react';
import type { ViewMode } from '@/data/gantt-types';

interface ViewSwitchProps {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export default function ViewSwitch({ viewMode, onChange }: ViewSwitchProps) {
  const views: Array<{ mode: ViewMode; label: string; icon: React.ReactNode }> = [
    { mode: 'timeline', label: 'Timeline', icon: <LayoutGrid className="w-3.5 h-3.5" /> },
    { mode: 'phase', label: 'Phase', icon: <Layers className="w-3.5 h-3.5" /> },
    { mode: 'agent', label: 'Agent', icon: <Zap className="w-3.5 h-3.5" /> },
  ];

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-1 flex gap-1">
      {views.map(({ mode, label, icon }) => (
        <button
          key={mode}
          onClick={() => onChange(mode)}
          className={`flex-1 px-2 py-1.5 text-xs font-medium rounded transition-all duration-200 ${
            viewMode === mode
              ? 'bg-[#0d5f4e] text-white shadow-sm'
              : 'text-[#6B7280] hover:bg-[#E8F4F1] hover:text-[#0d5f4e]'
          }`}
        >
          <div className="flex items-center justify-center gap-1.5">
            {icon}
            <span>{label}</span>
          </div>
        </button>
      ))}
    </div>
  );
}

// AI Action Group Component
// Action buttons: Generate Subtasks, Recalculate Timeline, Identify Blockers

import { Layers, RefreshCw, AlertTriangle } from 'lucide-react';

interface AIActionGroupProps {
  taskId: string;
  hasSubtasks: boolean;
  onGenerateSubtasks: (taskId: string) => void;
  onRecalculateTimeline: (taskId: string) => void;
  onIdentifyBlockers: (taskId: string) => void;
}

export default function AIActionGroup({
  taskId,
  hasSubtasks,
  onGenerateSubtasks,
  onRecalculateTimeline,
  onIdentifyBlockers,
}: AIActionGroupProps) {
  return (
    <div className="bg-[#F5F3EF] border border-gray-300 rounded-lg p-4">
      <h4 className="text-sm font-semibold text-[#212427] mb-3">AI Actions</h4>
      
      <div className="space-y-2">
        {/* Generate Subtasks */}
        <button
          onClick={() => onGenerateSubtasks(taskId)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-[#E8F4F1] border border-gray-200 hover:border-[#6b9d89] rounded-lg transition-all duration-200 group"
        >
          <div className="w-8 h-8 bg-[#E8F4F1] group-hover:bg-[#0d5f4e] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
            <Layers className="w-4 h-4 text-[#0d5f4e] group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-[#212427]">
              Generate Subtasks
            </div>
            <div className="text-xs text-[#6B7280]">
              {hasSubtasks ? 'AI has suggestions ready' : 'Break down into steps'}
            </div>
          </div>
          {hasSubtasks && (
            <div className="w-5 h-5 bg-[#0d5f4e] text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0">
              !
            </div>
          )}
        </button>

        {/* Recalculate Timeline */}
        <button
          onClick={() => onRecalculateTimeline(taskId)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-[#E8F4F1] border border-gray-200 hover:border-[#6b9d89] rounded-lg transition-all duration-200 group"
        >
          <div className="w-8 h-8 bg-[#E8F4F1] group-hover:bg-[#0d5f4e] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
            <RefreshCw className="w-4 h-4 text-[#0d5f4e] group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-[#212427]">
              Recalculate Timeline
            </div>
            <div className="text-xs text-[#6B7280]">
              Update dependent tasks
            </div>
          </div>
        </button>

        {/* Identify Blockers */}
        <button
          onClick={() => onIdentifyBlockers(taskId)}
          className="w-full flex items-center gap-3 px-4 py-3 bg-white hover:bg-[#FFF7ED] border border-gray-200 hover:border-[#F59E0B] rounded-lg transition-all duration-200 group"
        >
          <div className="w-8 h-8 bg-[#FFF7ED] group-hover:bg-[#F59E0B] rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B] group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-[#212427]">
              Identify Blockers
            </div>
            <div className="text-xs text-[#6B7280]">
              Find critical path issues
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

import { FileText, Target, Download } from 'lucide-react';

interface ImportActionsCardProps {
  onNavigate?: (page: string) => void;
}

export function ImportActionsCard({ onNavigate }: ImportActionsCardProps) {
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        Import From
      </h3>
      
      <div className="space-y-2">
        <button
          onClick={() => onNavigate?.('lean-canvas-v4')}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 border border-[#E8E6E1] rounded-lg hover:bg-[#E8F4F1] hover:border-[#0d5f4e] transition-colors"
        >
          <FileText className="w-4 h-4 text-[#0d5f4e]" />
          <span>Lean Canvas</span>
        </button>
        
        <button
          onClick={() => onNavigate?.('value-proposition')}
          className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 border border-[#E8E6E1] rounded-lg hover:bg-[#E8F4F1] hover:border-[#0d5f4e] transition-colors"
        >
          <Target className="w-4 h-4 text-[#0d5f4e]" />
          <span>Value Proposition</span>
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-[#E8E6E1]">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-sm text-white bg-[#0d5f4e] rounded-lg hover:bg-[#0E3E1B] transition-colors">
          <Download className="w-4 h-4" />
          <span>Export Canvas</span>
        </button>
      </div>
      
      <div className="mt-3">
        <p className="text-xs text-gray-500">
          Import customer segments, problems, and solutions to jumpstart your canvas.
        </p>
      </div>
    </div>
  );
}

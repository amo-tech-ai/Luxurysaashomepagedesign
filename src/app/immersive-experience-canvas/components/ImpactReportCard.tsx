import { FileText, Download, Share2 } from 'lucide-react';

export function ImpactReportCard() {
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-4 h-4 text-[#0d5f4e]" />
        <h3 className="font-medium text-[#0E3E1B]">Impact Report</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        Generate a comprehensive impact report for stakeholders, showing value across all three dimensions.
      </p>
      
      <div className="space-y-2">
        <button className="w-full px-3 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors text-sm flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Generate Report (PDF)
        </button>
        
        <button className="w-full px-3 py-2 border border-[#E8E6E1] text-gray-700 rounded-lg hover:bg-[#E8F4F1] transition-colors text-sm flex items-center justify-center gap-2">
          <Share2 className="w-4 h-4" />
          Share Link
        </button>
      </div>
      
      <div className="mt-4 pt-4 border-t border-[#E8E6E1]">
        <p className="text-xs text-gray-500">
          Report includes: Canvas overview, value dimension scores, gap analysis, AI suggestions, and implementation roadmap.
        </p>
      </div>
    </div>
  );
}

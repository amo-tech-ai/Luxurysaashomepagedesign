import React from 'react';
import { FileText } from 'lucide-react';

interface SampleOutputCardProps {
  content: string;
  title?: string;
}

export function SampleOutputCard({ content, title = 'Sample Output' }: SampleOutputCardProps) {
  return (
    <div className="sample-output-card mt-3">
      <div className="flex items-start gap-2 p-3 bg-white border border-gray-200 rounded-lg">
        <FileText className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <div className="text-xs font-medium text-gray-500 mb-1">{title}</div>
          <div className="text-xs text-gray-700 leading-relaxed italic">
            "{content}"
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { Lightbulb } from 'lucide-react';

interface RealWorldExampleProps {
  content: string;
}

export function RealWorldExample({ content }: RealWorldExampleProps) {
  return (
    <div className="real-world-example mt-3">
      <div className="flex items-start gap-2 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
        <Lightbulb className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <div className="text-xs font-medium text-emerald-900 mb-1">Real-World Example</div>
          <div className="text-xs text-emerald-800 leading-relaxed">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

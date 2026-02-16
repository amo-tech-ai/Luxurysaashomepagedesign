// Impact Card Component
// Downstream task impact visualization

import type { DownstreamImpact } from '@/data/gantt-types';
import { TrendingDown } from 'lucide-react';

interface ImpactCardProps {
  impacts: DownstreamImpact[];
  totalDelayDays: number;
}

export default function ImpactCard({ impacts, totalDelayDays }: ImpactCardProps) {
  const highImpact = impacts.filter(i => i.impact_level === 'high').length;
  const mediumImpact = impacts.filter(i => i.impact_level === 'medium').length;

  return (
    <div className="bg-white border-2 border-[#F59E0B] rounded-lg p-4">
      <div className="flex items-start gap-2 mb-3">
        <TrendingDown className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-[#212427] mb-1">
            Downstream Impact
          </h4>
          <p className="text-xs text-[#6B7280]">
            {impacts.length} task{impacts.length !== 1 ? 's' : ''} affected
            {totalDelayDays > 0 && ` • +${totalDelayDays} days total delay`}
          </p>
        </div>
      </div>

      {/* Impact summary badges */}
      <div className="flex gap-2 mb-3">
        {highImpact > 0 && (
          <div className="px-2 py-1 bg-[#EF4444] text-white text-xs font-medium rounded">
            {highImpact} High
          </div>
        )}
        {mediumImpact > 0 && (
          <div className="px-2 py-1 bg-[#F59E0B] text-white text-xs font-medium rounded">
            {mediumImpact} Medium
          </div>
        )}
        {impacts.length - highImpact - mediumImpact > 0 && (
          <div className="px-2 py-1 bg-gray-300 text-gray-700 text-xs font-medium rounded">
            {impacts.length - highImpact - mediumImpact} Low
          </div>
        )}
      </div>

      {/* Impact list */}
      <div className="space-y-2">
        {impacts.slice(0, 5).map((impact, index) => (
          <div key={index} className="bg-[#FAF9F7] rounded p-3">
            <div className="flex items-start justify-between gap-2 mb-1">
              <div className="text-xs font-medium text-[#212427] flex-1">
                {impact.task_name}
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-medium flex-shrink-0 ${
                impact.impact_level === 'high' ? 'bg-[#EF4444] text-white' :
                impact.impact_level === 'medium' ? 'bg-[#F59E0B] text-white' :
                'bg-gray-200 text-gray-700'
              }`}>
                {impact.impact_level}
              </span>
            </div>
            <div className="text-xs text-[#6B7280] mb-1">{impact.reason}</div>
            {impact.estimated_delay_days > 0 && (
              <div className="text-[10px] text-[#9CA3AF]">
                +{impact.estimated_delay_days} day{impact.estimated_delay_days !== 1 ? 's' : ''} delay
              </div>
            )}
          </div>
        ))}
        {impacts.length > 5 && (
          <button className="w-full py-2 text-xs text-[#0d5f4e] hover:underline">
            View all {impacts.length} impacted tasks
          </button>
        )}
      </div>
    </div>
  );
}

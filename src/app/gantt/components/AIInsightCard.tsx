// AI Insight Card Component
// Risk/Suggestion/Warning/Info cards

import { AlertCircle, Lightbulb, AlertTriangle, Info } from 'lucide-react';
import type { RiskLevel } from '@/data/gantt-types';

interface AIInsightCardProps {
  type: 'risk' | 'suggestion' | 'warning' | 'info';
  title: string;
  content: string;
  riskLevel?: RiskLevel;
  riskScore?: number;
  confidence?: number;
  action?: string;
}

export default function AIInsightCard({
  type,
  title,
  content,
  riskLevel,
  riskScore,
  confidence,
  action,
}: AIInsightCardProps) {
  const getTypeStyle = () => {
    const styles = {
      risk: {
        bg: riskLevel === 'high' ? 'bg-[#FEF2F2]' : riskLevel === 'medium' ? 'bg-[#FFF7ED]' : 'bg-[#F0FDF4]',
        border: riskLevel === 'high' ? 'border-[#FCA5A5]' : riskLevel === 'medium' ? 'border-[#FCD34D]' : 'border-[#86EFAC]',
        icon: <AlertCircle className={`w-4 h-4 ${
          riskLevel === 'high' ? 'text-[#EF4444]' : riskLevel === 'medium' ? 'text-[#F59E0B]' : 'text-[#10B981]'
        }`} />,
        color: riskLevel === 'high' ? 'text-[#EF4444]' : riskLevel === 'medium' ? 'text-[#F59E0B]' : 'text-[#10B981]',
      },
      suggestion: {
        bg: 'bg-[#E8F4F1]',
        border: 'border-[#6b9d89]',
        icon: <Lightbulb className="w-4 h-4 text-[#0d5f4e]" />,
        color: 'text-[#0d5f4e]',
      },
      warning: {
        bg: 'bg-[#FFF7ED]',
        border: 'border-[#FCD34D]',
        icon: <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />,
        color: 'text-[#F59E0B]',
      },
      info: {
        bg: 'bg-[#F0F9FF]',
        border: 'border-[#7DD3FC]',
        icon: <Info className="w-4 h-4 text-[#0284C7]" />,
        color: 'text-[#0284C7]',
      },
    };
    
    return styles[type];
  };

  const style = getTypeStyle();

  return (
    <div className={`${style.bg} border ${style.border} rounded-lg p-4`}>
      {/* Header */}
      <div className="flex items-start gap-2 mb-3">
        {style.icon}
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-[#212427] mb-1">{title}</h4>
          {riskLevel && (
            <span className={`text-xs font-medium uppercase ${style.color}`}>
              {riskLevel} Risk
            </span>
          )}
        </div>
        {riskScore !== undefined && (
          <div className="flex flex-col items-end">
            <span className={`text-lg font-bold ${style.color}`}>
              {riskScore}
            </span>
            <span className="text-[10px] text-[#9CA3AF]">/100</span>
          </div>
        )}
      </div>

      {/* Content */}
      <p className="text-xs text-[#212427] mb-3">{content}</p>

      {/* Action */}
      {action && (
        <div className="pt-2 border-t border-gray-300">
          <span className="text-xs font-medium text-[#6B7280]">
            Recommendation: <span className={style.color}>{action}</span>
          </span>
        </div>
      )}

      {/* Confidence */}
      {confidence !== undefined && (
        <div className="mt-3 pt-3 border-t border-gray-300">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="text-[#9CA3AF]">Confidence</span>
            <span className="font-medium text-[#212427]">{confidence}%</span>
          </div>
          <div className="h-1 bg-white rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                type === 'risk' && riskLevel === 'high' ? 'bg-[#EF4444]' :
                type === 'risk' && riskLevel === 'medium' ? 'bg-[#F59E0B]' :
                'bg-[#0d5f4e]'
              }`}
              style={{ width: `${confidence}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

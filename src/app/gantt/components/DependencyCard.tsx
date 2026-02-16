// Dependency Card Component
// Dependency health visualization

import type { DependencyHealthStatus } from '@/data/gantt-types';
import { Link2, AlertCircle } from 'lucide-react';

interface DependencyCardProps {
  status: DependencyHealthStatus;
  issues: string[];
  missingDependencies: string[];
}

export default function DependencyCard({ 
  status, 
  issues, 
  missingDependencies 
}: DependencyCardProps) {
  const getStatusStyle = () => {
    const styles = {
      healthy: {
        bg: 'bg-[#F0FDF4]',
        border: 'border-[#86EFAC]',
        color: 'text-[#10B981]',
        label: 'Healthy',
      },
      weak: {
        bg: 'bg-[#FFF7ED]',
        border: 'border-[#FCD34D]',
        color: 'text-[#F59E0B]',
        label: 'Weak',
      },
      critical: {
        bg: 'bg-[#FEF2F2]',
        border: 'border-[#FCA5A5]',
        color: 'text-[#EF4444]',
        label: 'Critical',
      },
    };
    
    return styles[status];
  };

  const style = getStatusStyle();

  return (
    <div className={`${style.bg} border ${style.border} rounded-lg p-4`}>
      <div className="flex items-start gap-2 mb-3">
        <Link2 className={`w-4 h-4 ${style.color} flex-shrink-0 mt-0.5`} />
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-[#212427] mb-1">
            Dependency Health
          </h4>
          <span className={`text-xs font-medium uppercase ${style.color}`}>
            {style.label}
          </span>
        </div>
      </div>

      {/* Issues */}
      {issues.length > 0 && (
        <div className="space-y-2 mb-3">
          {issues.map((issue, index) => (
            <div key={index} className="flex items-start gap-2 text-xs">
              <AlertCircle className={`w-3.5 h-3.5 ${style.color} flex-shrink-0 mt-0.5`} />
              <span className="flex-1 text-[#212427]">{issue}</span>
            </div>
          ))}
        </div>
      )}

      {/* Missing dependencies */}
      {missingDependencies.length > 0 && (
        <div className="pt-3 border-t border-gray-300">
          <div className="text-xs font-medium text-[#6B7280] mb-2">
            Missing Dependencies:
          </div>
          <ul className="space-y-1">
            {missingDependencies.map((dep, index) => (
              <li key={index} className="text-xs text-[#212427] flex items-start gap-2">
                <span className={`${style.color} font-bold mt-0.5`}>•</span>
                <span className="flex-1">{dep}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

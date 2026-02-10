import { Plus, Briefcase, AlertTriangle, TrendingUp } from 'lucide-react';
import type { ValuePropItem } from '../../../data/value-proposition-types';
import { ValuePropItemCard } from './ValuePropItemCard';

interface CustomerProfilePanelProps {
  customerJobs: ValuePropItem[];
  pains: ValuePropItem[];
  gains: ValuePropItem[];
  onAddJob?: () => void;
  onAddPain?: () => void;
  onAddGain?: () => void;
}

export function CustomerProfilePanel({ 
  customerJobs, 
  pains, 
  gains,
  onAddJob,
  onAddPain,
  onAddGain
}: CustomerProfilePanelProps) {
  return (
    <div className="bg-[#FFF9F5] rounded-xl border border-[#E8E6E1] p-6 h-full">
      <div className="mb-6">
        <h2 className="text-2xl font-light text-[#0E3E1B] mb-1" style={{ fontFamily: 'Georgia, serif' }}>
          Customer Profile
        </h2>
        <p className="text-sm text-gray-600">
          What customers need, want, and experience
        </p>
      </div>
      
      <div className="space-y-6">
        {/* Customer Jobs */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-[#0d5f4e]" />
            <h3 className="text-base font-medium text-[#0E3E1B]">
              Customer Jobs
            </h3>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            What are customers trying to accomplish?
          </p>
          <div className="space-y-2">
            {customerJobs.map((job) => (
              <ValuePropItemCard
                key={job.id}
                item={job}
                isMatched={false} // Jobs don't need matching
              />
            ))}
          </div>
          <button className="w-full mt-2 px-3 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-dashed border-gray-300"
            onClick={onAddJob}
          >
            <Plus className="w-4 h-4" />
            Add Job
          </button>
        </section>
        
        {/* Pains */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-4 h-4 text-[#DC2626]" />
            <h3 className="text-base font-medium text-[#0E3E1B]">
              Pains
            </h3>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            What frustrates customers or prevents success?
          </p>
          <div className="space-y-2">
            {pains.map((pain) => (
              <ValuePropItemCard
                key={pain.id}
                item={pain}
                isMatched={pain.matched_to && pain.matched_to.length > 0}
              />
            ))}
          </div>
          <button className="w-full mt-2 px-3 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-dashed border-gray-300"
            onClick={onAddPain}
          >
            <Plus className="w-4 h-4" />
            Add Pain
          </button>
        </section>
        
        {/* Gains */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-4 h-4 text-[#0d5f4e]" />
            <h3 className="text-base font-medium text-[#0E3E1B]">
              Gains
            </h3>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            What outcomes and benefits do customers want?
          </p>
          <div className="space-y-2">
            {gains.map((gain) => (
              <ValuePropItemCard
                key={gain.id}
                item={gain}
                isMatched={gain.matched_to && gain.matched_to.length > 0}
              />
            ))}
          </div>
          <button className="w-full mt-2 px-3 py-2 text-sm text-gray-600 hover:text-[#0d5f4e] hover:bg-white rounded-lg transition-colors flex items-center justify-center gap-2 border border-dashed border-gray-300"
            onClick={onAddGain}
          >
            <Plus className="w-4 h-4" />
            Add Gain
          </button>
        </section>
      </div>
    </div>
  );
}
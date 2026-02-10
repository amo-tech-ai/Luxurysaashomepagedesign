import { AlertCircle } from 'lucide-react';
import type { WeakDimension } from '../../../data/immersive-experience-types';

interface WeakDimensionsCardProps {
  weakDimensions: WeakDimension[];
}

export function WeakDimensionsCard({ weakDimensions }: WeakDimensionsCardProps) {
  if (weakDimensions.length === 0) {
    return (
      <div className="bg-[#E8F4F1] rounded-lg border border-[#0d5f4e] p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">✓</span>
          <h3 className="font-medium text-[#0E3E1B]">All Dimensions Strong</h3>
        </div>
        <p className="text-sm text-gray-700">
          All criteria are scoring above 3.0. Your use case demonstrates strong value across customer, brand, and business dimensions.
        </p>
      </div>
    );
  }
  
  // Group by dimension
  const customerWeak = weakDimensions.filter((d) => d.dimension === 'customer');
  const brandWeak = weakDimensions.filter((d) => d.dimension === 'brand');
  const businessWeak = weakDimensions.filter((d) => d.dimension === 'business');
  
  return (
    <div className="bg-[#FEF2F2] rounded-lg border border-[#FCA5A5] p-5">
      <div className="flex items-center gap-2 mb-3">
        <AlertCircle className="w-4 h-4 text-[#DC2626]" />
        <h3 className="font-medium text-[#0E3E1B]">Weak Dimensions</h3>
      </div>
      
      <p className="text-xs text-gray-600 mb-4">
        {weakDimensions.length} {weakDimensions.length === 1 ? 'criterion' : 'criteria'} scoring below 3.0 — address these to strengthen your value proposition.
      </p>
      
      <div className="space-y-4">
        {customerWeak.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Customer Impact
            </p>
            <ul className="space-y-2">
              {customerWeak.map((weak, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">•</span>
                  <div className="flex-1">
                    <span>{weak.criterion_label}</span>
                    <span className="text-xs text-gray-500 ml-2">
                      ({weak.current_score}/5)
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {brandWeak.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Brand Impact
            </p>
            <ul className="space-y-2">
              {brandWeak.map((weak, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">•</span>
                  <div className="flex-1">
                    <span>{weak.criterion_label}</span>
                    <span className="text-xs text-gray-500 ml-2">
                      ({weak.current_score}/5)
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {businessWeak.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
              Business Impact
            </p>
            <ul className="space-y-2">
              {businessWeak.map((weak, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                  <span className="text-[#DC2626] mt-0.5">•</span>
                  <div className="flex-1">
                    <span>{weak.criterion_label}</span>
                    <span className="text-xs text-gray-500 ml-2">
                      ({weak.current_score}/5)
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

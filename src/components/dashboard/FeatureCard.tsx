import React from 'react';
import { Feature } from '@/types/dashboard';
import { Tag } from './ui/Tag';
import { Button } from './ui/Button';

interface FeatureCardProps {
  feature: Feature;
  onSelect?: (feature: Feature) => void;
  onBuild?: (feature: Feature) => void;
  isSelected?: boolean;
}

export function FeatureCard({ feature, onSelect, onBuild, isSelected = false }: FeatureCardProps) {
  const priorityColors = {
    'must-have': 'red' as const,
    'should-have': 'blue' as const,
    'could-have': 'green' as const,
    'wont-have': 'gray' as const,
  };

  const impactColors = {
    'high': 'red' as const,
    'medium': 'yellow' as const,
    'low': 'gray' as const,
  };

  return (
    <div
      onClick={() => onSelect?.(feature)}
      className={`
        relative bg-white rounded-xl p-4 mb-3 cursor-pointer
        border transition-all duration-150
        ${
          isSelected
            ? 'border-[#0D5F4E] border-2 bg-[rgba(13,95,78,0.02)] shadow-[0_0_0_3px_rgba(13,95,78,0.1)]'
            : 'border-[#E8E6E1] hover:border-[#0D5F4E] hover:shadow-[0_4px_8px_rgba(0,0,0,0.08)] hover:-translate-y-[2px]'
        }
      `}
    >
      {/* Priority Badge */}
      <div className="absolute top-3 left-3">
        <Tag color={priorityColors[feature.priority]}>
          {feature.priority.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')}
        </Tag>
      </div>

      {/* Category Badge */}
      <div className="absolute top-3 right-3">
        <Tag color="gray">{feature.category}</Tag>
      </div>

      {/* Content */}
      <div className="pt-10">
        <h3 className="text-base font-semibold text-[#2D2D2D] leading-snug mb-2 pr-20">
          {feature.title}
        </h3>

        <p className="text-sm text-[#737373] leading-relaxed mb-3 line-clamp-2">
          {feature.description}
        </p>

        {/* Impact Tag */}
        <div className="mb-3">
          <Tag color={impactColors[feature.impact]}>
            Impact: {feature.impact.charAt(0).toUpperCase() + feature.impact.slice(1)}
          </Tag>
        </div>

        {/* Action Button */}
        <div className="flex justify-end">
          {feature.status === 'under-review' && onBuild && (
            <Button
              size="sm"
              onClick={(e) => {
                e?.stopPropagation();
                onBuild(feature);
              }}
            >
              Build
            </Button>
          )}
          {feature.status === 'planned' && (
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e?.stopPropagation();
              }}
            >
              Task
            </Button>
          )}
          {feature.status === 'in-progress' && (
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e?.stopPropagation();
              }}
            >
              View
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

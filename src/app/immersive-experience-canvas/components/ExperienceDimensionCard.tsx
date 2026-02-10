import { useState } from 'react';
import type { ExperienceType, LifecyclePhase } from '../../../data/immersive-experience-types';
import { EXPERIENCE_TYPES, LIFECYCLE_PHASES } from '../../../data/immersive-experience-types';

interface ExperienceDimensionCardProps {
  type: ExperienceType;
  reach: number; // 0-100
  lifecyclePhases: LifecyclePhase[];
  onTypeChange?: (type: ExperienceType) => void;
  onReachChange?: (reach: number) => void;
  onPhasesChange?: (phases: LifecyclePhase[]) => void;
}

export function ExperienceDimensionCard({
  type,
  reach,
  lifecyclePhases,
  onTypeChange,
  onReachChange,
  onPhasesChange,
}: ExperienceDimensionCardProps) {
  const togglePhase = (phase: LifecyclePhase) => {
    const newPhases = lifecyclePhases.includes(phase)
      ? lifecyclePhases.filter((p) => p !== phase)
      : [...lifecyclePhases, phase];
    onPhasesChange?.(newPhases);
  };
  
  return (
    <div className="bg-white rounded-lg border border-[#E8E6E1] p-5">
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Experience Dimension
      </h3>
      
      {/* Experience Type */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-2">
          What type of experience?
        </label>
        <select
          value={type}
          onChange={(e) => onTypeChange?.(e.target.value as ExperienceType)}
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
        >
          {Object.entries(EXPERIENCE_TYPES).map(([key, { label, description }]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-1">
          {EXPERIENCE_TYPES[type].description}
        </p>
      </div>
      
      {/* Reach Slider */}
      <div className="mb-4">
        <label className="block text-xs font-medium text-gray-700 mb-2">
          Target Reach
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={reach}
          onChange={(e) => onReachChange?.(Number(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-[#6b9d89] to-[#0d5f4e] rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex items-center justify-between mt-1 text-xs">
          <span className="text-gray-500">Niche</span>
          <span className="font-medium text-[#0d5f4e]">{reach}</span>
          <span className="text-gray-500">Mainstream</span>
        </div>
      </div>
      
      {/* Customer Lifecycle */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-2">
          Customer Lifecycle Phase(s)
        </label>
        <div className="space-y-2">
          {Object.entries(LIFECYCLE_PHASES).map(([key, label]) => (
            <label
              key={key}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
            >
              <input
                type="checkbox"
                checked={lifecyclePhases.includes(key as LifecyclePhase)}
                onChange={() => togglePhase(key as LifecyclePhase)}
                className="w-4 h-4 text-[#0d5f4e] border-gray-300 rounded focus:ring-[#0d5f4e]"
              />
              <span className="text-sm text-gray-700">{label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

// Gantt Sidebar Component
// Left panel with filters, phase navigation, and view toggle

import { LayoutGrid, Layers, Zap } from 'lucide-react';
import type { GanttFilters, ViewMode, Phase } from '@/data/gantt-types';
import FilterChip from './FilterChip';
import ViewSwitch from './ViewSwitch';
import PhaseProgress from './PhaseProgress';

interface GanttSidebarProps {
  phases: Phase[];
  filters: GanttFilters;
  viewMode: ViewMode;
  onFiltersChange: (filters: GanttFilters) => void;
  onViewModeChange: (mode: ViewMode) => void;
}

export default function GanttSidebar({
  phases,
  filters,
  viewMode,
  onFiltersChange,
  onViewModeChange,
}: GanttSidebarProps) {
  // Available filter options
  const statusOptions = [
    { value: 'in_progress', label: 'In Progress', color: '#0d5f4e' },
    { value: 'not_started', label: 'Not Started', color: '#9CA3AF' },
    { value: 'blocked', label: 'Blocked', color: '#EF4444' },
    { value: 'completed', label: 'Completed', color: '#10B981' },
  ];

  const layerOptions = [
    { value: 'Foundation', label: 'Foundation' },
    { value: 'Core Screens', label: 'Core Screens' },
    { value: 'Business Systems', label: 'Business Systems' },
    { value: 'AI Intelligence', label: 'AI Intelligence' },
    { value: 'Automation', label: 'Automation' },
  ];

  const priorityOptions = [
    { value: 'critical', label: 'Critical', color: '#EF4444' },
    { value: 'high', label: 'High', color: '#F59E0B' },
    { value: 'medium', label: 'Medium', color: '#6b9d89' },
    { value: 'low', label: 'Low', color: '#9CA3AF' },
  ];

  // Toggle filter
  const toggleStatus = (status: string) => {
    const current = filters.statuses || [];
    const updated = current.includes(status as any)
      ? current.filter(s => s !== status)
      : [...current, status as any];
    
    onFiltersChange({ ...filters, statuses: updated });
  };

  const toggleLayer = (layer: string) => {
    const current = filters.layers || [];
    const updated = current.includes(layer as any)
      ? current.filter(l => l !== layer)
      : [...current, layer as any];
    
    onFiltersChange({ ...filters, layers: updated });
  };

  const togglePriority = (priority: string) => {
    const current = filters.priorities || [];
    const updated = current.includes(priority as any)
      ? current.filter(p => p !== priority)
      : [...current, priority as any];
    
    onFiltersChange({ ...filters, priorities: updated });
  };

  const togglePhase = (phaseId: string) => {
    const current = filters.phases || [];
    const updated = current.includes(phaseId)
      ? current.filter(p => p !== phaseId)
      : [...current, phaseId];
    
    onFiltersChange({ ...filters, phases: updated });
  };

  // Clear all filters
  const clearFilters = () => {
    onFiltersChange({
      phases: [],
      layers: [],
      statuses: [],
      priorities: [],
      assigned_to: [],
      search: '',
    });
  };

  const hasActiveFilters = 
    (filters.statuses?.length || 0) + 
    (filters.layers?.length || 0) + 
    (filters.priorities?.length || 0) + 
    (filters.phases?.length || 0) > 0;

  return (
    <div className="w-60 bg-[#F5F3EF] border-r border-gray-200 overflow-y-auto" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-lg font-light text-[#212427] mb-1">Roadmap</h2>
          <p className="text-xs text-[#6B7280]">Product timeline & dependencies</p>
        </div>

        {/* View Toggle */}
        <div>
          <label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide mb-2 block">
            View Mode
          </label>
          <ViewSwitch viewMode={viewMode} onChange={onViewModeChange} />
        </div>

        {/* Phase Progress */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
              Phases
            </label>
            {filters.phases && filters.phases.length > 0 && (
              <button
                onClick={() => onFiltersChange({ ...filters, phases: [] })}
                className="text-xs text-[#0d5f4e] hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          <div className="space-y-2">
            {phases.map(phase => (
              <PhaseProgress
                key={phase.id}
                phase={phase}
                isActive={filters.phases?.includes(phase.id) || false}
                onClick={() => togglePhase(phase.id)}
              />
            ))}
          </div>
        </div>

        {/* Status Filters */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
              Status
            </label>
            {filters.statuses && filters.statuses.length > 0 && (
              <button
                onClick={() => onFiltersChange({ ...filters, statuses: [] })}
                className="text-xs text-[#0d5f4e] hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map(option => (
              <FilterChip
                key={option.value}
                label={option.label}
                color={option.color}
                isActive={filters.statuses?.includes(option.value as any) || false}
                onClick={() => toggleStatus(option.value)}
              />
            ))}
          </div>
        </div>

        {/* Layer Filters */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
              Layer
            </label>
            {filters.layers && filters.layers.length > 0 && (
              <button
                onClick={() => onFiltersChange({ ...filters, layers: [] })}
                className="text-xs text-[#0d5f4e] hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          <div className="space-y-1.5">
            {layerOptions.map(option => (
              <FilterChip
                key={option.value}
                label={option.label}
                isActive={filters.layers?.includes(option.value as any) || false}
                onClick={() => toggleLayer(option.value)}
                fullWidth
              />
            ))}
          </div>
        </div>

        {/* Priority Filters */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-medium text-[#6B7280] uppercase tracking-wide">
              Priority
            </label>
            {filters.priorities && filters.priorities.length > 0 && (
              <button
                onClick={() => onFiltersChange({ ...filters, priorities: [] })}
                className="text-xs text-[#0d5f4e] hover:underline"
              >
                Clear
              </button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {priorityOptions.map(option => (
              <FilterChip
                key={option.value}
                label={option.label}
                color={option.color}
                isActive={filters.priorities?.includes(option.value as any) || false}
                onClick={() => togglePriority(option.value)}
              />
            ))}
          </div>
        </div>

        {/* Clear All */}
        {hasActiveFilters && (
          <div className="pt-4 border-t border-gray-300">
            <button
              onClick={clearFilters}
              className="w-full px-4 py-2 bg-white hover:bg-gray-50 border border-gray-300 text-sm text-[#212427] rounded-lg transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

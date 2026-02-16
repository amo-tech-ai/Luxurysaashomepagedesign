// Gantt Main Page
// 3-panel interactive timeline with AI strategy

import { useState, useMemo } from 'react';
import { differenceInWeeks } from 'date-fns';
import type { GanttFilters, ViewMode, Task } from '@/data/gantt-types';
import { mockGanttProject } from '@/data/gantt-mock-data';
import { getAIAnalysisForTask, generateMockAIAnalysis } from '@/data/gantt-ai-analysis';
import GanttSidebar from './components/GanttSidebar';
import GanttCanvas from './components/GanttCanvas';
import GanttAIPanel from './components/GanttAIPanel';

interface GanttPageProps {
  onNavigate?: (page: string) => void;
}

export default function GanttPage({ onNavigate }: GanttPageProps) {
  // State management
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [aiPanelLoading, setAIPanelLoading] = useState(false);
  const [filters, setFilters] = useState<GanttFilters>({
    phases: [],
    layers: [],
    statuses: [],
    priorities: [],
    assigned_to: [],
    search: '',
  });
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');

  // Project data
  const project = mockGanttProject;

  // Calculate week count
  const weekCount = differenceInWeeks(
    new Date(project.end_date),
    new Date(project.start_date)
  ) + 1;

  // Filter tasks
  const filteredTasks = useMemo(() => {
    let tasks = project.tasks;

    // Filter by phase
    if (filters.phases && filters.phases.length > 0) {
      tasks = tasks.filter(t => filters.phases.includes(t.phase));
    }

    // Filter by layer
    if (filters.layers && filters.layers.length > 0) {
      tasks = tasks.filter(t => filters.layers.includes(t.layer));
    }

    // Filter by status
    if (filters.statuses && filters.statuses.length > 0) {
      tasks = tasks.filter(t => filters.statuses.includes(t.status));
    }

    // Filter by priority
    if (filters.priorities && filters.priorities.length > 0) {
      tasks = tasks.filter(t => filters.priorities.includes(t.priority));
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      tasks = tasks.filter(t => 
        t.name.toLowerCase().includes(searchLower) ||
        t.description.toLowerCase().includes(searchLower)
      );
    }

    return tasks;
  }, [project.tasks, filters]);

  // Filter dependencies (only show if both tasks are visible)
  const filteredDependencies = useMemo(() => {
    const visibleTaskIds = new Set(filteredTasks.map(t => t.id));
    return project.dependencies.filter(
      dep => visibleTaskIds.has(dep.task_id) && visibleTaskIds.has(dep.depends_on_task_id)
    );
  }, [project.dependencies, filteredTasks]);

  // Get selected task
  const selectedTask = selectedTaskId 
    ? project.tasks.find(t => t.id === selectedTaskId) || null
    : null;

  // Get AI analysis for selected task
  const aiAnalysis = selectedTaskId ? getAIAnalysisForTask(selectedTaskId) : null;

  // Handle task click
  const handleTaskClick = async (taskId: string) => {
    setSelectedTaskId(taskId);
    
    // If no pre-generated analysis, generate mock analysis
    if (!getAIAnalysisForTask(taskId)) {
      setAIPanelLoading(true);
      await generateMockAIAnalysis(taskId, {});
      setAIPanelLoading(false);
    }
  };

  // Handle AI panel close
  const handleCloseAIPanel = () => {
    setSelectedTaskId(null);
  };

  // Handle AI actions
  const handleGenerateSubtasks = (taskId: string) => {
    console.log('Generate subtasks for:', taskId);
    // TODO: Implement subtask generation
    alert(`Generating subtasks for task: ${taskId}\n\nThis would create subtasks based on AI recommendations.`);
  };

  const handleRecalculateTimeline = (taskId: string) => {
    console.log('Recalculate timeline for:', taskId);
    // TODO: Implement timeline recalculation
    alert(`Recalculating timeline for task: ${taskId}\n\nThis would adjust downstream task dates based on dependency changes.`);
  };

  const handleIdentifyBlockers = (taskId: string) => {
    console.log('Identify blockers for:', taskId);
    // TODO: Implement blocker identification
    alert(`Identifying blockers for task: ${taskId}\n\nThis would analyze critical path and flag blocking dependencies.`);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-30">
        <div className="px-6 lg:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => onNavigate?.('home-v5')}
              className="flex items-center gap-3 group"
            >
              <div className="w-8 h-8 bg-[#0d5f4e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-light text-[#212427]">StartupAI</span>
            </button>

            <div className="hidden md:block w-px h-6 bg-gray-300" />

            <div className="hidden md:block">
              <h1 className="text-lg font-light text-[#212427]">{project.name}</h1>
              <p className="text-xs text-[#6B7280] mt-0.5">
                {weekCount} weeks • {project.tasks.length} tasks • {project.overall_progress}% complete
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Overall progress */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm font-medium text-[#212427]">{project.overall_progress}%</div>
                <div className="text-xs text-[#9CA3AF]">Complete</div>
              </div>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#0d5f4e] rounded-full transition-all duration-500"
                  style={{ width: `${project.overall_progress}%` }}
                />
              </div>
            </div>

            <button
              onClick={() => onNavigate?.('dashboard-main')}
              className="px-4 py-2 bg-[#0d5f4e] hover:bg-[#0a4a3a] text-white text-sm font-light rounded-lg transition-colors"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      {/* 3-Panel Layout */}
      <div className="flex">
        {/* Left Panel: Filters */}
        <GanttSidebar
          phases={project.phases}
          filters={filters}
          viewMode={viewMode}
          onFiltersChange={setFilters}
          onViewModeChange={setViewMode}
        />

        {/* Main Panel: Timeline */}
        <div className="flex-1 p-6 overflow-x-auto">
          <GanttCanvas
            tasks={filteredTasks}
            dependencies={filteredDependencies}
            projectStartDate={project.start_date}
            weekCount={weekCount}
            selectedTaskId={selectedTaskId}
            onTaskClick={handleTaskClick}
            showDependencies={true}
          />

          {/* Empty state */}
          {filteredTasks.length === 0 && (
            <div className="text-center py-12">
              <p className="text-sm text-[#6B7280] mb-2">No tasks match your filters</p>
              <button
                onClick={() => setFilters({
                  phases: [],
                  layers: [],
                  statuses: [],
                  priorities: [],
                  assigned_to: [],
                  search: '',
                })}
                className="text-sm text-[#0d5f4e] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Right Panel: AI Strategy */}
        {selectedTask && (
          <GanttAIPanel
            task={selectedTask}
            aiAnalysis={aiAnalysis}
            loading={aiPanelLoading}
            onClose={handleCloseAIPanel}
            onGenerateSubtasks={handleGenerateSubtasks}
            onRecalculateTimeline={handleRecalculateTimeline}
            onIdentifyBlockers={handleIdentifyBlockers}
          />
        )}
      </div>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import { 
  Search, 
  RefreshCw, 
  CheckCircle, 
  Plus, 
  Filter,
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  Zap,
  Layout,
  ChevronDown,
} from 'lucide-react';
import { Task } from '@/types/dashboard';
import { useDashboard } from '@/lib/dashboard/DashboardContext';
import { useToast } from './ui/Toast';
import { PHASES, CATEGORIES } from '@/lib/dashboard/mockData';
import { LeftNav } from './LeftNav';
import { KanbanColumn } from './KanbanColumn';
import { RightPanel } from './RightPanel';
import { TaskModal } from './TaskModal';
import { CreateTaskModal } from './CreateTaskModal';

export function DashboardContainer({ onNavigate }: { onNavigate?: (route: string) => void }) {
  const {
    tasks,
    selectedTask,
    project,
    filters,
    selectTask,
    startTask,
    setFilters,
    createTask,
    deleteTask,
    getTasksByStatus,
  } = useDashboard();

  const { showToast } = useToast();

  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [isRightPanelCollapsed, setIsRightPanelCollapsed] = useState(true); // Start collapsed

  const planningTasks = getTasksByStatus('planning');
  const queueTasks = getTasksByStatus('queue');
  const inProgressTasks = getTasksByStatus('in-progress');
  const aiReviewTasks = getTasksByStatus('ai-review');

  const handleTaskStart = (task: Task) => {
    const newStatus = startTask(task.id);
    
    if (newStatus === 'queue') {
      showToast('Task moved to queue. Parallel limit reached.', 'info');
    } else {
      showToast('Task started successfully.', 'success');
    }
  };

  const handleTaskSelect = (task: Task) => {
    selectTask(task);
    setIsRightPanelCollapsed(false); // Auto-expand when task selected
  };

  const handleClosePanel = () => {
    selectTask(null);
    setIsRightPanelCollapsed(true); // Auto-collapse when closing
  };

  const handleOpenFullTask = () => {
    if (selectedTask) {
      setIsTaskModalOpen(true);
    }
  };

  const handleDeleteTask = (task: Task) => {
    if (confirm(`Are you sure you want to delete "${task.title}"?`)) {
      deleteTask(task.id);
      setIsTaskModalOpen(false);
      showToast('Task deleted successfully.', 'success');
    }
  };

  const handleCreateTask = (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
    createTask(taskData);
    showToast('Task created successfully.', 'success');
  };

  const handleRefresh = () => {
    showToast('Tasks refreshed.', 'info');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#FAFAF8] via-[#FAFAF8] to-[#F5F5F3]">
      {/* Left Navigation */}
      <LeftNav activeView="kanban" onNavigate={onNavigate} />

      {/* Main Workspace */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Premium Header Strip */}
        <div className="bg-white border-b border-[#E8E6E1] shadow-sm">
          <div className="px-8 py-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <h1 className="font-serif text-4xl text-[#2D2D2D] tracking-tight">
                    {project.name}
                  </h1>
                  <span className="px-3 py-1.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    Active
                  </span>
                </div>
                <p className="text-sm text-[#A3A3A3] flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-[#0D5F4E]" />
                    Verified 2026-01-27
                  </span>
                  {onNavigate && (
                    <>
                      <span className="text-[#E8E6E1]">•</span>
                      <button
                        onClick={() => onNavigate('home')}
                        className="text-[#0D5F4E] hover:underline font-medium transition-all duration-200"
                      >
                        ← Back to Home
                      </button>
                    </>
                  )}
                </p>
              </div>
              
              {/* Quick Stats */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-1">
                    Progress
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[#0D5F4E]">{project.progress}</span>
                    <span className="text-sm text-[#4A4A4A]">%</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#A3A3A3] font-semibold uppercase tracking-wider mb-1">
                    Completed
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-[#2D2D2D]">{project.completedTasks}</span>
                    <span className="text-sm text-[#A3A3A3]">/ {project.totalTasks}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-[#F5F5F3] rounded-full overflow-hidden shadow-inner mb-6">
              <div 
                className="h-full bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            {/* Project Tabs */}
            <div className="flex items-center gap-2">
              <button className="px-5 py-2.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-lg text-sm font-semibold shadow-md shadow-[#0D5F4E]/20">
                {project.name}
              </button>
              <button className="px-5 py-2.5 bg-[#F5F5F3] text-[#4A4A4A] rounded-lg text-sm font-medium hover:bg-white hover:text-[#0D5F4E] transition-all duration-200">
                ilmv10
              </button>
              <button className="px-5 py-2.5 bg-[#F5F5F3] text-[#4A4A4A] rounded-lg text-sm font-medium hover:bg-white hover:text-[#0D5F4E] transition-all duration-200">
                fashionossv11
              </button>
              <button className="ml-2 p-2.5 bg-white border border-[#E8E6E1] rounded-lg hover:border-[#0D5F4E] transition-all duration-200">
                <Plus className="w-4 h-4 text-[#A3A3A3]" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Filter Row */}
        <div className="bg-white border-b border-[#E8E6E1] px-8 py-4 shadow-sm">
          <div className="flex items-center gap-3">
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                showFilters 
                  ? 'bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white shadow-md' 
                  : 'bg-[#F5F5F3] text-[#4A4A4A] hover:bg-white'
              }`}
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Filters (conditionally shown) */}
            {showFilters && (
              <>
                <select
                  value={filters.phase}
                  onChange={(e) => setFilters({ ...filters, phase: e.target.value })}
                  className="px-4 py-2.5 border border-[#E8E6E1] rounded-lg text-sm bg-white hover:border-[#0D5F4E] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E] focus:ring-opacity-10 transition-all duration-200"
                >
                  {PHASES.map(phase => (
                    <option key={phase} value={phase}>{phase}</option>
                  ))}
                </select>

                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="px-4 py-2.5 border border-[#E8E6E1] rounded-lg text-sm bg-white hover:border-[#0D5F4E] focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E] focus:ring-opacity-10 transition-all duration-200"
                >
                  {CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </>
            )}

            {/* Search */}
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A3A3A3] group-focus-within:text-[#0D5F4E] transition-colors duration-200" />
              <input
                type="text"
                placeholder="Search tasks by title, tags, or description..."
                value={filters.search || ''}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
                className="w-full pl-11 pr-4 py-2.5 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E] focus:ring-opacity-10 transition-all duration-200"
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-[#0D5F4E] to-[#0a4a3c] text-white rounded-lg hover:shadow-lg hover:shadow-[#0D5F4E]/20 transition-all duration-200 flex items-center gap-2 text-sm font-semibold"
              >
                <Plus className="w-4 h-4" />
                New Task
              </button>

              <button
                onClick={handleRefresh}
                className="p-2.5 rounded-lg bg-white border border-[#E8E6E1] hover:border-[#0D5F4E] hover:bg-[#F5F5F3] transition-all duration-200"
              >
                <RefreshCw className="w-4 h-4 text-[#4A4A4A]" />
              </button>

              <button className="p-2.5 rounded-lg bg-white border border-[#E8E6E1] hover:border-[#0D5F4E] hover:bg-[#F5F5F3] transition-all duration-200">
                <Layout className="w-4 h-4 text-[#4A4A4A]" />
              </button>

              <button className="p-2.5 rounded-lg bg-white border border-[#E8E6E1] hover:border-[#0D5F4E] hover:bg-[#F5F5F3] transition-all duration-200">
                <MoreHorizontal className="w-4 h-4 text-[#4A4A4A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-hidden p-6">
          <div className="grid grid-cols-4 gap-6 h-full">
            <KanbanColumn
              title="Planning"
              count={planningTasks.length}
              tasks={planningTasks}
              emptyMessage="No tasks in planning"
              emptyDescription="Create new tasks to get started"
              onTaskSelect={handleTaskSelect}
              onTaskStart={handleTaskStart}
              selectedTaskId={selectedTask?.id}
              icon={<div className="text-5xl">📋</div>}
              statusColor="blue"
            />

            <KanbanColumn
              title="Queue"
              count={queueTasks.length}
              tasks={queueTasks}
              emptyMessage="Queue is clear"
              emptyDescription="Tasks wait here when parallel capacity is reached"
              onTaskSelect={handleTaskSelect}
              selectedTaskId={selectedTask?.id}
              icon={<div className="text-5xl">⏸️</div>}
              statusColor="amber"
            />

            <KanbanColumn
              title="In Progress"
              count={inProgressTasks.length}
              maxCapacity={3}
              tasks={inProgressTasks}
              emptyMessage="Nothing running"
              emptyDescription="Start a task from Planning when you're ready"
              onTaskSelect={handleTaskSelect}
              selectedTaskId={selectedTask?.id}
              icon={<div className="text-5xl">▶️</div>}
              statusColor="emerald"
            />

            <KanbanColumn
              title="AI Review"
              count={aiReviewTasks.length}
              tasks={aiReviewTasks}
              emptyMessage="No tasks in review"
              emptyDescription="Completed work appears here automatically"
              onTaskSelect={handleTaskSelect}
              selectedTaskId={selectedTask?.id}
              icon={<div className="text-5xl">✓</div>}
              statusColor="purple"
            />
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <RightPanel
        task={selectedTask}
        onClose={handleClosePanel}
        onOpenFullTask={handleOpenFullTask}
        onStartTask={handleTaskStart}
        isCollapsed={isRightPanelCollapsed}
        onToggleCollapse={() => setIsRightPanelCollapsed(!isRightPanelCollapsed)}
      />

      {/* Task Modal */}
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          isOpen={isTaskModalOpen}
          onClose={() => setIsTaskModalOpen(false)}
          onDelete={handleDeleteTask}
          onStartTask={handleTaskStart}
        />
      )}

      {/* Create Task Modal */}
      <CreateTaskModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateTask}
      />
    </div>
  );
}
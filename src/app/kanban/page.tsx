'use client';

import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { TaskAIPanel } from '../../components/TaskAIPanel';
import { Plus, MoreVertical, Clock, User, Tag, Calendar, Sparkles } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  assignee?: string;
  dueDate?: string;
  tags: string[];
  column: 'backlog' | 'todo' | 'in-progress' | 'review' | 'done';
}

interface KanbanProps {
  onNavigate?: (page: string) => void;
}

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Write 1-sentence UVP',
    description: 'Craft a clear, compelling unique value proposition',
    priority: 'High',
    assignee: 'You',
    dueDate: '2026-02-09',
    tags: ['Strategy', 'Marketing'],
    column: 'todo',
  },
  {
    id: '2',
    title: 'Define ICP persona',
    description: 'Create detailed ideal customer profile with demographics and pain points',
    priority: 'High',
    assignee: 'You',
    dueDate: '2026-02-10',
    tags: ['Strategy', 'Customer'],
    column: 'todo',
  },
  {
    id: '3',
    title: 'Draft pricing assumption',
    description: 'Define initial pricing model and validate assumptions',
    priority: 'Medium',
    assignee: 'You',
    dueDate: '2026-02-12',
    tags: ['Revenue', 'Strategy'],
    column: 'todo',
  },
  {
    id: '4',
    title: 'Complete Lean Canvas',
    description: 'Fill out all 9 boxes with validated assumptions',
    priority: 'High',
    tags: ['Strategy'],
    column: 'in-progress',
  },
  {
    id: '5',
    title: 'Research competitor pricing',
    description: 'Analyze 3-5 competitors to understand market pricing',
    priority: 'Medium',
    tags: ['Market Research'],
    column: 'in-progress',
  },
  {
    id: '6',
    title: 'Set up founder LinkedIn profile',
    description: 'Optimize profile for networking and credibility',
    priority: 'Low',
    tags: ['Personal Brand'],
    column: 'backlog',
  },
  {
    id: '7',
    title: 'Initial market sizing',
    description: 'Calculate TAM, SAM, SOM for target market',
    priority: 'High',
    tags: ['Market Research', 'Strategy'],
    column: 'backlog',
  },
  {
    id: '8',
    title: 'Customer interview #1',
    description: 'Conduct first validation interview with potential customer',
    priority: 'High',
    tags: ['Validation', 'Customer'],
    column: 'done',
  },
];

const COLUMNS = [
  { id: 'backlog', title: 'Backlog', color: 'bg-[#F5F3EF]' },
  { id: 'todo', title: 'To Do', color: 'bg-[#FAF9F7]' },
  { id: 'in-progress', title: 'In Progress', color: 'bg-[#E8F4F1]' },
  { id: 'review', title: 'Review', color: 'bg-[#F5F3EF]' },
  { id: 'done', title: 'Done', color: 'bg-[#DCF9E3]' },
] as const;

export default function KanbanPage({ onNavigate }: KanbanProps) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [draggedTask, setDraggedTask] = useState<string | null>(null);
  const [aiPanelOpen, setAiPanelOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-[#DCF9E3] text-[#0d5f4e] border-[#3B5F52]';
      case 'Medium':
        return 'bg-[#E8F4F1] text-[#6b9d89] border-[#6b9d89]';
      case 'Low':
        return 'bg-gray-100 text-gray-600 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const handleDragStart = (taskId: string) => {
    setDraggedTask(taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (columnId: string) => {
    if (!draggedTask) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTask
          ? { ...task, column: columnId as Task['column'] }
          : task
      )
    );
    setDraggedTask(null);
  };

  const getTasksByColumn = (columnId: string) => {
    return tasks.filter((task) => task.column === columnId);
  };

  const getColumnStats = (columnId: string) => {
    const columnTasks = getTasksByColumn(columnId);
    const highPriority = columnTasks.filter((t) => t.priority === 'High').length;
    return { total: columnTasks.length, high: highPriority };
  };

  const handleOpenAI = (task: Task) => {
    setSelectedTask(task);
    setAiPanelOpen(true);
  };

  const handleCloseAI = () => {
    setAiPanelOpen(false);
    // Keep selectedTask for a smooth transition
    setTimeout(() => setSelectedTask(null), 200);
  };

  const handleApplySuggestion = (taskId: string, suggestion: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? {
              ...task,
              description: task.description
                ? `${task.description}\n\n${suggestion}`
                : suggestion
            }
          : task
      )
    );
  };

  return (
    <DashboardLayout
      title="Kanban Board"
      subtitle="Visualize and manage your execution workflow"
      onNavigate={onNavigate}
      activeNav="kanban"
    >
      <div className="p-8">
        {/* Header Actions */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-light text-[#212427] mb-2" style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}>Sprint Board</h1>
            <p className="text-sm text-[#6B7280]">
              Current Sprint • Week of Feb 8–14, 2026 • {tasks.length} total tasks
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#3B5F52] text-white rounded-lg hover:bg-[#2D4840] transition-all">
            <Plus className="w-4 h-4" />
            Add Task
          </button>
        </div>

        {/* Kanban Columns */}
        <div className="grid grid-cols-5 gap-4 overflow-x-auto pb-4">
          {COLUMNS.map((column) => {
            const stats = getColumnStats(column.id);
            const columnTasks = getTasksByColumn(column.id);

            return (
              <div key={column.id} className="min-w-[280px]">
                {/* Column Header */}
                <div className={`${column.color} rounded-t-lg border-t-2 border-[#3B5F52] p-4`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-[#212427]">{column.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#6B7280] bg-white px-2 py-1 rounded border border-[#E5E7EB]">
                        {stats.total}
                      </span>
                      {stats.high > 0 && (
                        <span className="text-xs text-[#0d5f4e] bg-[#DCF9E3] px-2 py-1 rounded font-medium border border-[#3B5F52]">
                          {stats.high} high
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Tasks Container */}
                <div
                  className="bg-[#FAF9F7] rounded-b-lg border border-[#E5E7EB] border-t-0 p-3 min-h-[600px]"
                  onDragOver={handleDragOver}
                  onDrop={() => handleDrop(column.id)}
                >
                  <div className="space-y-3">
                    {columnTasks.map((task) => (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task.id)}
                        className={`relative bg-white rounded-lg p-4 border border-[#E5E7EB] hover:border-[#D1D5DB] hover:shadow-md transition-all cursor-move ${
                          draggedTask === task.id ? 'opacity-50' : ''
                        }`}
                      >
                        {/* AI Assist Icon - Top Right */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenAI(task);
                          }}
                          className={`
                            absolute top-3 right-3 p-1.5 rounded-lg
                            transition-all hover:scale-110
                            ${selectedTask?.id === task.id && aiPanelOpen
                              ? 'text-[#0d5f4e] bg-[#DCF9E3]'
                              : 'text-[#6b9d89] hover:text-[#0d5f4e] hover:bg-[#E8F4F1]'
                            }
                          `}
                          aria-label="AI Assist"
                        >
                          <Sparkles className="w-4 h-4" />
                        </button>

                        {/* Task Header */}
                        <div className="flex items-start justify-between mb-2 pr-8">
                          <h4 className="text-sm font-medium text-[#212427] flex-1">
                            {task.title}
                          </h4>
                        </div>

                        {/* Task Description */}
                        {task.description && (
                          <p className="text-xs text-[#6B7280] mb-3 line-clamp-2">
                            {task.description}
                          </p>
                        )}

                        {/* Task Metadata */}
                        <div className="space-y-2">
                          {/* Priority Badge */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`text-xs px-2 py-1 rounded border font-medium ${getPriorityColor(
                                task.priority
                              )}`}
                            >
                              {task.priority}
                            </span>
                          </div>

                          {/* Tags */}
                          {task.tags.length > 0 && (
                            <div className="flex items-center gap-1 flex-wrap">
                              <Tag className="w-3 h-3 text-gray-400" />
                              {task.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Assignee and Due Date */}
                          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                            {task.assignee && (
                              <div className="flex items-center gap-1 text-xs text-gray-600">
                                <User className="w-3 h-3" />
                                <span>{task.assignee}</span>
                              </div>
                            )}
                            {task.dueDate && (
                              <div className="flex items-center gap-1 text-xs text-gray-600">
                                <Calendar className="w-3 h-3" />
                                <span>{new Date(task.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Board Stats */}
        <div className="mt-6 grid grid-cols-4 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Total Tasks</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">{tasks.length}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">In Progress</div>
            <div className="text-2xl font-semibold text-[#6b9d89]">
              {getTasksByColumn('in-progress').length}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Completed</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">
              {getTasksByColumn('done').length}
            </div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">High Priority</div>
            <div className="text-2xl font-semibold text-[#3B5F52]">
              {tasks.filter((t) => t.priority === 'High').length}
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant Panel */}
      <TaskAIPanel
        task={selectedTask}
        isOpen={aiPanelOpen}
        onClose={handleCloseAI}
        onApplySuggestion={handleApplySuggestion}
      />
    </DashboardLayout>
  );
}
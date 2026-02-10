'use client';

import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  Plus, 
  Search, 
  Filter, 
  Calendar, 
  CheckCircle2, 
  Circle, 
  Clock,
  Tag,
  ChevronRight
} from 'lucide-react';

interface Task {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'todo' | 'in-progress' | 'completed';
  dueDate?: string;
  tags: string[];
  estimatedTime?: string;
  category: string;
}

interface TasksProps {
  onNavigate?: (page: string) => void;
}

const INITIAL_TASKS: Task[] = [
  {
    id: '1',
    title: 'Write 1-sentence UVP',
    description: 'Craft a clear, compelling unique value proposition that resonates with target customers',
    priority: 'High',
    status: 'todo',
    dueDate: '2026-02-09',
    tags: ['Strategy', 'Marketing'],
    estimatedTime: '20m',
    category: 'Strategy',
  },
  {
    id: '2',
    title: 'Define ICP persona',
    description: 'Create detailed ideal customer profile including demographics, behaviors, and pain points',
    priority: 'High',
    status: 'todo',
    dueDate: '2026-02-10',
    tags: ['Strategy', 'Customer'],
    estimatedTime: '30m',
    category: 'Strategy',
  },
  {
    id: '3',
    title: 'Draft pricing assumption',
    description: 'Define initial pricing model based on value, market comparison, and customer willingness to pay',
    priority: 'Medium',
    status: 'todo',
    dueDate: '2026-02-12',
    tags: ['Revenue', 'Strategy'],
    estimatedTime: '25m',
    category: 'Strategy',
  },
  {
    id: '4',
    title: 'Complete monthly burn rate field',
    description: 'Calculate and enter current monthly operational expenses',
    priority: 'High',
    status: 'todo',
    dueDate: '2026-02-09',
    tags: ['Finance', 'Data'],
    estimatedTime: '10m',
    category: 'Finance',
  },
  {
    id: '5',
    title: 'Update funding status',
    description: 'Specify current funding situation and runway',
    priority: 'High',
    status: 'todo',
    dueDate: '2026-02-09',
    tags: ['Finance', 'Data'],
    estimatedTime: '5m',
    category: 'Finance',
  },
  {
    id: '6',
    title: 'Research top 3 competitors',
    description: 'Analyze competitor positioning, pricing, and key features',
    priority: 'Medium',
    status: 'in-progress',
    tags: ['Market Research'],
    estimatedTime: '45m',
    category: 'Market Research',
  },
  {
    id: '7',
    title: 'Complete Lean Canvas draft',
    description: 'Fill out all 9 boxes with initial assumptions',
    priority: 'High',
    status: 'in-progress',
    tags: ['Strategy'],
    estimatedTime: '60m',
    category: 'Strategy',
  },
  {
    id: '8',
    title: 'Validate UVP with 3 customers',
    description: 'Conduct informal interviews to test value proposition resonance',
    priority: 'Medium',
    status: 'completed',
    dueDate: '2026-02-07',
    tags: ['Validation', 'Customer'],
    estimatedTime: '90m',
    category: 'Validation',
  },
];

export default function TasksPage({ onNavigate }: TasksProps) {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'todo' | 'in-progress' | 'completed'>('all');
  const [filterPriority, setFilterPriority] = useState<'all' | 'High' | 'Medium' | 'Low'>('all');

  const toggleTaskStatus = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: task.status === 'completed' ? 'todo' : 'completed',
            }
          : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesPriority = filterPriority === 'all' || task.priority === filterPriority;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-[#0d5f4e] font-semibold';
      case 'Medium':
        return 'text-[#6b9d89] font-medium';
      case 'Low':
        return 'text-gray-500';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed || status === 'completed') {
      return <CheckCircle2 className="w-5 h-5 text-[#0d5f4e]" />;
    }
    if (status === 'in-progress') {
      return <Clock className="w-5 h-5 text-[#6b9d89]" />;
    }
    return <Circle className="w-5 h-5 text-gray-400" />;
  };

  const stats = {
    total: tasks.length,
    todo: tasks.filter((t) => t.status === 'todo').length,
    inProgress: tasks.filter((t) => t.status === 'in-progress').length,
    completed: tasks.filter((t) => t.status === 'completed').length,
    highPriority: tasks.filter((t) => t.priority === 'High' && t.status !== 'completed').length,
  };

  const groupedByCategory = filteredTasks.reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = [];
    }
    acc[task.category].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  return (
    <DashboardLayout
      title="Tasks"
      subtitle="Manage and prioritize your execution checklist"
      onNavigate={onNavigate}
      activeNav="tasks"
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0E3E1B] mb-2">All Tasks</h1>
          <p className="text-sm text-gray-600">
            {stats.total} total • {stats.completed} completed • {stats.highPriority} high priority remaining
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">To Do</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">{stats.todo}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">In Progress</div>
            <div className="text-2xl font-semibold text-[#6b9d89]">{stats.inProgress}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Completed</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">{stats.completed}</div>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Completion Rate</div>
            <div className="text-2xl font-semibold text-[#0d5f4e]">
              {Math.round((stats.completed / stats.total) * 100)}%
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e] focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-500" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as any)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
              >
                <option value="all">All Status</option>
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            {/* Priority Filter */}
            <select
              value={filterPriority}
              onChange={(e) => setFilterPriority(e.target.value as any)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
            >
              <option value="all">All Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Add Task Button */}
            <button className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
        </div>

        {/* Task List - Grouped by Category */}
        <div className="space-y-6">
          {Object.entries(groupedByCategory).map(([category, categoryTasks]) => (
            <div key={category} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Category Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-6 py-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">{category}</h3>
                  <span className="text-sm text-gray-600">{categoryTasks.length} tasks</span>
                </div>
              </div>

              {/* Tasks */}
              <div className="divide-y divide-gray-200">
                {categoryTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`p-6 hover:bg-gray-50 transition-colors ${
                      task.status === 'completed' ? 'opacity-60' : ''
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleTaskStatus(task.id)}
                        className="mt-0.5 hover:scale-110 transition-transform"
                      >
                        {getStatusIcon(task.status, task.status === 'completed')}
                      </button>

                      {/* Task Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4
                              className={`text-base font-medium mb-1 ${
                                task.status === 'completed'
                                  ? 'line-through text-gray-500'
                                  : 'text-gray-800'
                              }`}
                            >
                              {task.title}
                            </h4>
                            <p className="text-sm text-gray-600">{task.description}</p>
                          </div>

                          {/* Priority Badge */}
                          <span
                            className={`ml-4 text-xs font-medium px-2 py-1 rounded ${getPriorityColor(
                              task.priority
                            )}`}
                          >
                            {task.priority}
                          </span>
                        </div>

                        {/* Metadata */}
                        <div className="flex items-center gap-4 mt-3 text-sm text-gray-600">
                          {task.dueDate && (
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>
                                Due {new Date(task.dueDate).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: 'numeric' 
                                })}
                              </span>
                            </div>
                          )}
                          {task.estimatedTime && (
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{task.estimatedTime}</span>
                            </div>
                          )}
                          {task.tags.length > 0 && (
                            <div className="flex items-center gap-2">
                              <Tag className="w-4 h-4" />
                              <div className="flex gap-1">
                                {task.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <button className="text-gray-400 hover:text-gray-600">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
            <div className="text-gray-400 mb-2">
              <Search className="w-12 h-12 mx-auto mb-4" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">No tasks found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
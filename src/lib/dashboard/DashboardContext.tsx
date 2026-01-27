'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Task, Project, DashboardFilters } from '@/types/dashboard';
import { MOCK_TASKS, MOCK_PROJECT } from './mockData';

interface DashboardContextType {
  // State
  tasks: Task[];
  selectedTask: Task | null;
  project: Project;
  filters: DashboardFilters;
  activeView: string;
  
  // Actions
  setTasks: (tasks: Task[]) => void;
  selectTask: (task: Task | null) => void;
  updateTask: (taskId: string, updates: Partial<Task>) => void;
  createTask: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  deleteTask: (taskId: string) => void;
  startTask: (taskId: string) => void;
  setFilters: (filters: DashboardFilters) => void;
  setActiveView: (view: string) => void;
  
  // Computed
  getTasksByStatus: (status: Task['status']) => Task[];
  getFilteredTasks: () => Task[];
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [project] = useState<Project>(MOCK_PROJECT);
  const [filters, setFilters] = useState<DashboardFilters>({
    phase: 'All Phases',
    category: 'All Categories',
    search: '',
  });
  const [activeView, setActiveView] = useState('kanban');

  // Get tasks by status
  const getTasksByStatus = useCallback(
    (status: Task['status']) => {
      return tasks.filter(task => task.status === status);
    },
    [tasks]
  );

  // Get filtered tasks
  const getFilteredTasks = useCallback(() => {
    let filtered = tasks;

    if (filters.phase && filters.phase !== 'All Phases') {
      filtered = filtered.filter(task => task.phase === filters.phase);
    }

    if (filters.category && filters.category !== 'All Categories') {
      filtered = filtered.filter(task => task.category === filters.category);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        task =>
          task.title.toLowerCase().includes(searchLower) ||
          task.description.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [tasks, filters]);

  // Select task
  const selectTask = useCallback((task: Task | null) => {
    setSelectedTask(task);
  }, []);

  // Update task
  const updateTask = useCallback(
    (taskId: string, updates: Partial<Task>) => {
      setTasks(prevTasks =>
        prevTasks.map(task =>
          task.id === taskId
            ? { ...task, ...updates, updatedAt: new Date() }
            : task
        )
      );

      // Update selected task if it's the one being updated
      setSelectedTask(prev =>
        prev?.id === taskId ? { ...prev, ...updates, updatedAt: new Date() } : prev
      );
    },
    []
  );

  // Create task
  const createTask = useCallback(
    (taskData: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => {
      const newTask: Task = {
        ...taskData,
        id: `task-${Date.now()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      setTasks(prevTasks => [...prevTasks, newTask]);
    },
    []
  );

  // Delete task
  const deleteTask = useCallback(
    (taskId: string) => {
      setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
      if (selectedTask?.id === taskId) {
        setSelectedTask(null);
      }
    },
    [selectedTask]
  );

  // Start task (with queue logic)
  const startTask = useCallback(
    (taskId: string) => {
      const inProgressCount = tasks.filter(t => t.status === 'in-progress').length;
      const newStatus: Task['status'] = inProgressCount >= 3 ? 'queue' : 'in-progress';

      updateTask(taskId, { status: newStatus });

      // Return status for toast notification
      return newStatus;
    },
    [tasks, updateTask]
  );

  const value: DashboardContextType = {
    tasks,
    selectedTask,
    project,
    filters,
    activeView,
    setTasks,
    selectTask,
    updateTask,
    createTask,
    deleteTask,
    startTask,
    setFilters,
    setActiveView,
    getTasksByStatus,
    getFilteredTasks,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}

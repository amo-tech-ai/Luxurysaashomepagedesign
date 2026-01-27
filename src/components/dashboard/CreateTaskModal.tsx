'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Task } from '@/types/dashboard';
import { Button } from './ui/Button';

interface CreateTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
}

export function CreateTaskModal({ isOpen, onClose, onCreate }: CreateTaskModalProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'feature' as Task['type'],
    priority: 'p2' as Task['priority'],
    phase: 'Phase 1',
    category: 'Feature',
    skills: [] as string[],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTask: Omit<Task, 'id' | 'createdAt' | 'updatedAt'> = {
      title: formData.title,
      description: formData.description,
      status: 'planning',
      type: formData.type,
      priority: formData.priority,
      phase: formData.phase,
      category: formData.category,
      skills: formData.skills,
      completionPercentage: 0,
      tags: ['Pending', formData.type === 'feature' ? 'Feature' : 'Enhancement'],
    };

    onCreate(newTask);
    onClose();
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      type: 'feature',
      priority: 'p2',
      phase: 'Phase 1',
      category: 'Feature',
      skills: [],
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 animate-[dashboardFadeIn_200ms_ease-out]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.16)] w-full max-w-2xl animate-[dashboardSlideIn_300ms_ease-out]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-[#E8E6E1]">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="font-serif text-3xl font-medium text-[#2D2D2D] leading-tight mb-2">
                  Create New Task
                </h2>
                <p className="text-sm text-[#737373]">
                  Add a new task to your project workflow
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-[#F5F5F3] transition-colors"
              >
                <X className="w-4 h-4 text-[#A3A3A3]" />
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                Task Title *
              </label>
              <input
                type="text"
                id="title"
                value={formData.title}
                onChange={e => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Build authentication system"
                required
                className="w-full px-4 py-3 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/20 transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                Description *
              </label>
              <textarea
                id="description"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
                placeholder="Provide a detailed description of the task..."
                required
                rows={4}
                className="w-full px-4 py-3 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/20 transition-colors resize-none"
              />
            </div>

            {/* Grid: Type, Priority */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Type *
                </label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={e => setFormData({ ...formData, type: e.target.value as Task['type'] })}
                  className="w-full px-4 py-3 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/20 transition-colors"
                >
                  <option value="feature">Feature</option>
                  <option value="bug">Bug Fix</option>
                  <option value="enhancement">Enhancement</option>
                  <option value="research">Research</option>
                </select>
              </div>

              <div>
                <label htmlFor="priority" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Priority *
                </label>
                <select
                  id="priority"
                  value={formData.priority}
                  onChange={e => setFormData({ ...formData, priority: e.target.value as Task['priority'] })}
                  className="w-full px-4 py-3 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/20 transition-colors"
                >
                  <option value="p1">P1 - Critical</option>
                  <option value="p2">P2 - High</option>
                  <option value="p3">P3 - Medium</option>
                  <option value="p4">P4 - Low</option>
                </select>
              </div>
            </div>

            {/* Grid: Phase, Category */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="phase" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Phase
                </label>
                <select
                  id="phase"
                  value={formData.phase}
                  onChange={e => setFormData({ ...formData, phase: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/20 transition-colors"
                >
                  <option value="Phase 1">Phase 1</option>
                  <option value="Phase 2">Phase 2</option>
                  <option value="Phase 3">Phase 3</option>
                </select>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={e => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/20 transition-colors"
                >
                  <option value="Feature">Feature</option>
                  <option value="Integration">Integration</option>
                  <option value="UI/UX">UI/UX</option>
                  <option value="Analytics">Analytics</option>
                  <option value="AI">AI</option>
                  <option value="Payments">Payments</option>
                  <option value="Foundation">Foundation</option>
                </select>
              </div>
            </div>

            {/* Skills */}
            <div>
              <label htmlFor="skills" className="block text-sm font-semibold text-[#2D2D2D] mb-2">
                Skills (comma separated)
              </label>
              <input
                type="text"
                id="skills"
                placeholder="e.g., /frontend, /backend, /api"
                onChange={e => {
                  const skills = e.target.value.split(',').map(s => s.trim()).filter(Boolean);
                  setFormData({ ...formData, skills });
                }}
                className="w-full px-4 py-3 border border-[#E8E6E1] rounded-lg text-sm bg-white focus:outline-none focus:border-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E]/20 transition-colors"
              />
              <p className="text-xs text-[#A3A3A3] mt-2">
                Example: /frontend, /backend, /api
              </p>
            </div>
          </form>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-[#E8E6E1] bg-[#FAFAF8] flex items-center justify-end gap-3">
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleSubmit}>
              Create Task
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

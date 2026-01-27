'use client';

import React, { useState } from 'react';
import { X, Edit2, Trash2, Clock, FileText, List } from 'lucide-react';
import { Task } from '@/types/dashboard';
import { Tag } from './ui/Tag';
import { Button } from './ui/Button';
import { getTimeAgo } from '@/lib/dashboard/mockData';

interface TaskModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onDelete?: (task: Task) => void;
  onStartTask?: (task: Task) => void;
}

type TabType = 'overview' | 'subtasks' | 'logs' | 'files';

export function TaskModal({ task, isOpen, onClose, onDelete, onStartTask }: TaskModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

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
          className="bg-white rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.16)] w-full max-w-4xl max-h-[90vh] flex flex-col animate-[dashboardSlideIn_300ms_ease-out]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-[#E8E6E1]">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h2 className="font-serif text-3xl font-medium text-[#2D2D2D] leading-tight mb-2">
                  {task.title}
                </h2>
                <p className="text-xs text-[#A3A3A3] font-mono">{task.id}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {/* Edit functionality */}}
                  className="p-2 rounded-lg hover:bg-[#F5F5F3] transition-colors"
                >
                  <Edit2 className="w-4 h-4 text-[#A3A3A3]" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-[#F5F5F3] transition-colors"
                >
                  <X className="w-4 h-4 text-[#A3A3A3]" />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Tag color="yellow">{task.status}</Tag>
              <Tag color="blue">{task.type}</Tag>
              {task.phase && <Tag color="gray">{task.phase}</Tag>}
            </div>
          </div>

          {/* Tabs */}
          <div className="px-8 border-b border-[#E8E6E1] bg-[#FAFAF8] flex gap-1">
            <TabButton
              label="Overview"
              isActive={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            />
            <TabButton
              label="Subtasks"
              count={0}
              isActive={activeTab === 'subtasks'}
              onClick={() => setActiveTab('subtasks')}
            />
            <TabButton
              label="Logs"
              isActive={activeTab === 'logs'}
              onClick={() => setActiveTab('logs')}
            />
            <TabButton
              label="Files"
              isActive={activeTab === 'files'}
              onClick={() => setActiveTab('files')}
            />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-8 py-6">
            {activeTab === 'overview' && <OverviewTab task={task} />}
            {activeTab === 'subtasks' && <SubtasksTab />}
            {activeTab === 'logs' && <LogsTab task={task} />}
            {activeTab === 'files' && <FilesTab />}
          </div>

          {/* Footer */}
          <div className="px-8 py-5 border-t border-[#E8E6E1] bg-[#FAFAF8] flex items-center justify-between">
            <Button
              variant="danger"
              onClick={() => onDelete?.(task)}
            >
              <Trash2 className="w-4 h-4" />
              Delete Task
            </Button>

            <div className="flex items-center gap-3">
              {task.status === 'planning' && onStartTask && (
                <Button onClick={() => onStartTask(task)}>
                  Start Task
                </Button>
              )}
              <Button variant="secondary" onClick={onClose}>
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface TabButtonProps {
  label: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ label, count, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-5 py-3 text-sm font-medium border-b-2 transition-all duration-150
        ${
          isActive
            ? 'border-[#0D5F4E] text-[#2D2D2D] bg-white'
            : 'border-transparent text-[#737373] hover:text-[#2D2D2D] hover:bg-[rgba(13,95,78,0.04)]'
        }
      `}
    >
      {label}
      {count !== undefined && (
        <span className="ml-2 text-xs text-[#A3A3A3]">({count})</span>
      )}
    </button>
  );
}

function OverviewTab({ task }: { task: Task }) {
  const [checkedCriteria, setCheckedCriteria] = useState<boolean[]>([false, false, false]);

  return (
    <div className="space-y-8">
      {/* Title */}
      <div>
        <h3 className="font-serif text-3xl font-normal text-[#2D2D2D] leading-tight mb-4">
          {task.title}
        </h3>
        <p className="text-base text-[#4A4A4A] leading-relaxed">
          {task.description}
        </p>
      </div>

      <hr className="border-[#E8E6E1]" />

      {/* Rationale */}
      <div>
        <h4 className="font-serif text-xl font-semibold text-[#2D2D2D] mb-3">
          Rationale
        </h4>
        <p className="text-sm text-[#4A4A4A] leading-relaxed">
          This task addresses a key user need and aligns with our product roadmap priorities.
          By implementing this feature, we'll improve the overall user experience and provide
          value to our customers.
        </p>
      </div>

      <hr className="border-[#E8E6E1]" />

      {/* User Stories */}
      <div>
        <h4 className="font-serif text-xl font-semibold text-[#2D2D2D] mb-3">
          User Stories
        </h4>
        <ul className="space-y-3">
          <li className="text-sm text-[#4A4A4A] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#0D5F4E] before:font-bold">
            As a founder preparing for fundraising, I want to {task.title.toLowerCase()} so
            that I can quickly produce professional materials
          </li>
          <li className="text-sm text-[#4A4A4A] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#0D5F4E] before:font-bold">
            As a first-time founder, I want this feature so that I don't start from a blank slate
          </li>
          <li className="text-sm text-[#4A4A4A] leading-relaxed pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-[#0D5F4E] before:font-bold">
            As a founder iterating on my approach, I want flexible editing so that I can
            customize based on feedback
          </li>
        </ul>
      </div>

      <hr className="border-[#E8E6E1]" />

      {/* Acceptance Criteria */}
      <div>
        <h4 className="font-serif text-xl font-semibold text-[#2D2D2D] mb-3">
          Acceptance Criteria
        </h4>
        <div className="space-y-2">
          {[
            'Feature is implemented and tested',
            'Documentation is updated',
            'UI/UX is approved by design team',
          ].map((criteria, index) => (
            <label
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#F5F5F3] cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={checkedCriteria[index]}
                onChange={() => {
                  const newChecked = [...checkedCriteria];
                  newChecked[index] = !newChecked[index];
                  setCheckedCriteria(newChecked);
                }}
                className="mt-0.5 w-5 h-5 rounded border-2 border-[#D1D5DB] text-[#0D5F4E] focus:ring-2 focus:ring-[#0D5F4E] focus:ring-offset-0"
              />
              <span className="text-sm text-[#4A4A4A] leading-relaxed flex-1">
                {criteria}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function SubtasksTab() {
  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4">📋</div>
      <h4 className="text-base font-medium text-[#4A4A4A] mb-2">No subtasks yet</h4>
      <p className="text-sm text-[#A3A3A3] mb-6 max-w-sm mx-auto">
        Break this task into smaller pieces to track progress.
      </p>
      <Button>
        <List className="w-4 h-4" />
        Add Subtask
      </Button>
    </div>
  );
}

function LogsTab({ task }: { task: Task }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-lg border border-[#E8E6E1]">
        <Clock className="w-4 h-4 text-[#A3A3A3] mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <div className="text-xs text-[#A3A3A3] mb-1">
            {getTimeAgo(task.createdAt)}
          </div>
          <div className="text-sm text-[#4A4A4A]">Task created</div>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-[#FAFAF8] rounded-lg border border-[#E8E6E1]">
        <Clock className="w-4 h-4 text-[#A3A3A3] mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <div className="text-xs text-[#A3A3A3] mb-1">
            {getTimeAgo(task.updatedAt)}
          </div>
          <div className="text-sm text-[#4A4A4A]">Status changed: {task.status}</div>
        </div>
      </div>
    </div>
  );
}

function FilesTab() {
  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4">📎</div>
      <h4 className="text-base font-medium text-[#4A4A4A] mb-2">No files attached</h4>
      <p className="text-sm text-[#A3A3A3] mb-6 max-w-sm mx-auto">
        Drag files here or click to upload.
      </p>
      <Button>
        <FileText className="w-4 h-4" />
        Upload File
      </Button>
    </div>
  );
}

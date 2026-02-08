'use client';

import { useState } from 'react';
import { User, Star, AlertTriangle, Plus } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  activity: string;
  aboveCutline: boolean;
  isValueMoment?: boolean;
  isRisk?: boolean;
}

interface Activity {
  name: string;
  order: number;
}

export default function StoryMap() {
  const [activities] = useState<Activity[]>([
    { name: 'DISCOVER', order: 1 },
    { name: 'ONBOARD', order: 2 },
    { name: 'PLAN', order: 3 },
    { name: 'EXECUTE', order: 4 },
    { name: 'SHARE', order: 5 },
    { name: 'EXPAND', order: 6 },
  ]);

  const [tasks] = useState<Task[]>([
    // DISCOVER
    { id: '1', title: 'See Twitter thread about "what I built"', activity: 'DISCOVER', aboveCutline: true },
    { id: '2', title: 'Click link to landing page', activity: 'DISCOVER', aboveCutline: true },
    { id: '3', title: 'Read value prop + see social proof', activity: 'DISCOVER', aboveCutline: true },
    { id: '4', title: 'Watch 60s demo video', activity: 'DISCOVER', aboveCutline: false, isRisk: true },

    // ONBOARD
    { id: '5', title: 'Sign up (Google OAuth)', activity: 'ONBOARD', aboveCutline: true },
    { id: '6', title: 'See welcome message + quick tour', activity: 'ONBOARD', aboveCutline: true },
    { id: '7', title: 'Choose goal (10 paying customers in 90 days)', activity: 'ONBOARD', aboveCutline: true },
    {
      id: '8',
      title: 'Skip or complete profile',
      activity: 'ONBOARD',
      aboveCutline: false,
      isRisk: true,
    },

    // PLAN
    { id: '9', title: 'Answer 5 questions about startup', activity: 'PLAN', aboveCutline: true },
    { id: '10', title: 'AI generates 90-day plan with sprints', activity: 'PLAN', aboveCutline: true },
    { id: '11', title: 'See sprint 1 tasks listed', activity: 'PLAN', aboveCutline: true },
    { id: '12', title: 'Customize plan if needed', activity: 'PLAN', aboveCutline: false },

    // EXECUTE
    { id: '13', title: 'See daily task list for today', activity: 'EXECUTE', aboveCutline: true },
    { id: '14', title: 'Review sprint 1 goals', activity: 'EXECUTE', aboveCutline: true },
    {
      id: '15',
      title: 'Complete first task',
      activity: 'EXECUTE',
      aboveCutline: true,
      isValueMoment: true,
    },
    { id: '16', title: 'Mark task as done', activity: 'EXECUTE', aboveCutline: true },

    // SHARE
    { id: '17', title: 'Share plan with co-founder', activity: 'SHARE', aboveCutline: false },
    { id: '18', title: 'Export plan as PDF', activity: 'SHARE', aboveCutline: false },
    { id: '19', title: 'Share report with investor', activity: 'SHARE', aboveCutline: false },

    // EXPAND
    { id: '20', title: 'Invite co-founder to collaborate', activity: 'EXPAND', aboveCutline: false },
    { id: '21', title: 'Team sprint planning', activity: 'EXPAND', aboveCutline: false },
    { id: '22', title: 'Upgrade to Pro plan', activity: 'EXPAND', aboveCutline: false },
  ]);

  const getTasksByActivity = (activityName: string) => {
    return tasks.filter((task) => task.activity === activityName);
  };

  const aboveCutlineCount = tasks.filter((t) => t.aboveCutline).length;
  const belowCutlineCount = tasks.filter((t) => !t.aboveCutline).length;

  return (
    <div className="min-h-screen bg-[#FAF9F7] p-6">
      <div className="max-w-[1800px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Story Map</h1>
          <p className="text-gray-600">Map how users experience value — then cut to the minimum</p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Panel - Persona & Stats */}
          <div className="col-span-2">
            <div className="bg-[#F5F3EF] rounded-lg p-6 sticky top-6">
              {/* User Persona */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-5 h-5 text-[#0d5f4e]" />
                  <h3 className="text-sm font-medium">USER PERSONA</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span> <span className="font-medium">Alex</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Role:</span> <span className="font-medium">Solo SaaS founder</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Goal:</span>{' '}
                    <span className="font-medium">Ship first product</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Pain:</span>{' '}
                    <span className="font-medium">Planning paralysis</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Persona source: Validation report</p>
              </div>

              {/* Journey Stats */}
              <div className="border-t border-gray-300 pt-6 mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">JOURNEY STATS</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Activities:</span>
                    <span className="font-medium">{activities.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tasks:</span>
                    <span className="font-medium">{tasks.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Above cutline:</span>
                    <span className="font-medium">{aboveCutlineCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Below cutline:</span>
                    <span className="font-medium">{belowCutlineCount}</span>
                  </div>
                </div>
              </div>

              {/* MVP Scope */}
              <div className="border-t border-gray-300 pt-6 mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">MVP SCOPE</h3>
                <div className="text-sm">
                  <p className="text-gray-600">4 activities</p>
                  <p className="text-gray-600">{aboveCutlineCount} tasks</p>
                </div>
              </div>

              {/* Legend */}
              <div className="border-t border-gray-300 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">LEGEND</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-white border-2 border-[#0d5f4e]"></div>
                    <span>MVP task</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-gray-100 border border-dashed border-gray-400"></div>
                    <span>Deferred</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-3 h-3 text-red-600" />
                    <span>Risk hotspot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-amber-500" />
                    <span>Value moment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center Panel - Story Map */}
          <div className="col-span-7">
            <div className="bg-white rounded-lg border border-gray-200 p-6 overflow-x-auto">
              {/* Activities Header */}
              <div className="flex gap-4 mb-6 pb-4 border-b-2 border-gray-300">
                {activities.map((activity) => (
                  <div key={activity.name} className="flex-1 min-w-[180px]">
                    <h3 className="text-center font-medium text-sm">{activity.name}</h3>
                  </div>
                ))}
              </div>

              {/* Tasks Grid */}
              <div className="flex gap-4 relative">
                {/* Vertical dividers */}
                {activities.map((activity, idx) => (
                  <div
                    key={`divider-${activity.name}`}
                    className="absolute top-0 bottom-0 w-px bg-gray-200"
                    style={{ left: `${((idx + 1) / activities.length) * 100}%` }}
                  />
                ))}

                {activities.map((activity) => (
                  <div key={activity.name} className="flex-1 min-w-[180px] space-y-3">
                    {getTasksByActivity(activity.name).map((task) => (
                      <div
                        key={task.id}
                        className={`
                          p-3 rounded text-sm relative
                          ${
                            task.aboveCutline
                              ? 'bg-white border-l-4 border-[#0d5f4e] shadow-sm hover:shadow-md'
                              : 'bg-gray-50 border border-dashed border-gray-400 opacity-60'
                          }
                          transition-shadow cursor-move
                        `}
                      >
                        {task.isValueMoment && (
                          <Star className="absolute -top-2 -right-2 w-5 h-5 text-amber-500 fill-amber-500" />
                        )}
                        {task.isRisk && (
                          <AlertTriangle className="absolute -top-2 -right-2 w-5 h-5 text-red-600 fill-red-100" />
                        )}
                        <p className="text-xs leading-relaxed">{task.title}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* MVP Cutline */}
              <div className="relative my-8">
                <div className="border-t-4 border-dashed border-[#0d5f4e]"></div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0d5f4e] text-white px-4 py-1 rounded text-xs font-medium whitespace-nowrap">
                  MVP CUTLINE — everything above is v1, everything below is v2+
                </div>
              </div>

              {/* Add Task */}
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded text-sm text-gray-600 hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors flex items-center justify-center gap-2">
                <Plus className="w-4 h-4" />
                Add task
              </button>

              {/* Actions */}
              <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
                <button className="px-4 py-2 bg-[#F5F3EF] text-gray-700 rounded hover:bg-gray-300 transition-colors text-sm">
                  Save Map
                </button>
                <button className="px-4 py-2 bg-[#0d5f4e] text-white rounded hover:bg-[#0a4a3c] transition-colors text-sm">
                  Create Experiments from Risks →
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel - AI Journey Coach */}
          <div className="col-span-3">
            <div className="space-y-4 sticky top-6">
              {/* First Value Moment */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-500" />
                  FIRST VALUE MOMENT
                </h3>
                <div className="bg-[#F5F3EF] rounded p-3 mb-3">
                  <p className="text-sm font-medium">"First task completed"</p>
                </div>
                <p className="text-sm text-gray-700">
                  This is the moment the founder feels "this is worth paying for." Everything before this moment is
                  onboarding. Everything after is retention.
                </p>
              </div>

              {/* Time to Value */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">TIME TO VALUE</h3>
                <div className="text-2xl font-medium text-[#0d5f4e] mb-2">&lt; 10 min</div>
                <p className="text-xs text-gray-600">Target: from signup to first task</p>
              </div>

              {/* Drop-off Risks */}
              <div className="bg-white rounded-lg border border-amber-500 p-6">
                <h3 className="text-sm font-medium mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  DROP-OFF RISKS
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">1. Onboarding</span>
                    <p className="text-gray-600 text-xs mt-1">
                      (5 questions may feel like too much work before seeing value)
                    </p>
                  </div>
                  <div>
                    <span className="font-medium">2. First plan generation</span>
                    <p className="text-gray-600 text-xs mt-1">
                      (if plan feels generic, user loses trust in AI)
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Suggestion */}
              <div className="bg-[#F5F3EF] rounded-lg p-6">
                <h3 className="text-sm font-medium mb-3">AI SUGGESTION</h3>
                <p className="text-sm text-gray-700">
                  "Remove the demo video from MVP. It adds friction before signup. Replace with a single screenshot
                  showing a sample 90-day plan."
                </p>
              </div>

              {/* Journey Stats Summary */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-sm font-medium mb-3">JOURNEY SUMMARY</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">MVP activities:</span>
                    <span className="font-medium">4 of 6</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">MVP tasks:</span>
                    <span className="font-medium">{aboveCutlineCount} of {tasks.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Risk hotspots:</span>
                    <span className="font-medium text-amber-600">
                      {tasks.filter((t) => t.isRisk).length}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Value moments:</span>
                    <span className="font-medium text-[#0d5f4e]">
                      {tasks.filter((t) => t.isValueMoment).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

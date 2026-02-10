'use client';

import { useState } from 'react';
import { DashboardLayout } from '../../components/DashboardLayout';
import { 
  User, 
  Mail, 
  Building2, 
  Globe,
  Bell,
  Shield,
  Palette,
  Save,
  Camera
} from 'lucide-react';

interface WorkspaceProps {
  onNavigate?: (page: string) => void;
}

export default function WorkspacePage({ onNavigate }: WorkspaceProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'workspace' | 'notifications' | 'security'>('profile');

  const [profile, setProfile] = useState({
    name: 'Alex Johnson',
    email: 'alex@startup.com',
    role: 'Founder & CEO',
    company: 'StartupAI Platform',
  });

  const [workspace, setWorkspace] = useState({
    companyName: 'StartupAI',
    industry: 'SaaS',
    stage: 'Pre-seed',
    teamSize: '1-5',
    website: 'https://startup.ai',
  });

  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    taskReminders: true,
    weeklyDigest: false,
    investorActivity: true,
  });

  return (
    <DashboardLayout
      title="Settings"
      subtitle="Manage your account and workspace preferences"
      onNavigate={onNavigate}
      activeNav="workspace"
    >
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#0E3E1B] mb-2">Workspace Settings</h1>
          <p className="text-sm text-gray-600">
            Configure your personal and workspace preferences
          </p>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Left Sidebar - Tabs */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <nav className="divide-y divide-gray-200">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                    activeTab === 'profile' ? 'bg-[#E8F4F1] text-[#0d5f4e]' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm font-medium">Profile</span>
                </button>
                <button
                  onClick={() => setActiveTab('workspace')}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                    activeTab === 'workspace' ? 'bg-[#E8F4F1] text-[#0d5f4e]' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Workspace</span>
                </button>
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                    activeTab === 'notifications' ? 'bg-[#E8F4F1] text-[#0d5f4e]' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Bell className="w-4 h-4" />
                  <span className="text-sm font-medium">Notifications</span>
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                    activeTab === 'security' ? 'bg-[#E8F4F1] text-[#0d5f4e]' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Security</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Personal Information</h3>

                {/* Avatar */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Profile Photo</label>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-[#E8F4F1] flex items-center justify-center text-[#0d5f4e] text-2xl font-bold">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      <Camera className="w-4 h-4" />
                      Change Photo
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      value={profile.role}
                      onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      value={profile.company}
                      onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Workspace Tab */}
            {activeTab === 'workspace' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Workspace Settings</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={workspace.companyName}
                      onChange={(e) => setWorkspace({ ...workspace, companyName: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select
                      value={workspace.industry}
                      onChange={(e) => setWorkspace({ ...workspace, industry: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    >
                      <option value="SaaS">SaaS</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Fintech">Fintech</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stage
                    </label>
                    <select
                      value={workspace.stage}
                      onChange={(e) => setWorkspace({ ...workspace, stage: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    >
                      <option value="Idea">Idea</option>
                      <option value="Pre-seed">Pre-seed</option>
                      <option value="Seed">Seed</option>
                      <option value="Series A">Series A</option>
                      <option value="Series B+">Series B+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Team Size
                    </label>
                    <select
                      value={workspace.teamSize}
                      onChange={(e) => setWorkspace({ ...workspace, teamSize: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    >
                      <option value="1-5">1-5</option>
                      <option value="6-10">6-10</option>
                      <option value="11-20">11-20</option>
                      <option value="21-50">21-50</option>
                      <option value="50+">50+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={workspace.website}
                      onChange={(e) => setWorkspace({ ...workspace, website: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors">
                    <Save className="w-4 h-4" />
                    Save Changes
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Notification Preferences</h3>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Email Updates</div>
                      <div className="text-sm text-gray-600">Receive important product updates via email</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.emailUpdates}
                      onChange={(e) => setNotifications({ ...notifications, emailUpdates: e.target.checked })}
                      className="w-5 h-5 text-[#0d5f4e] border-gray-300 rounded focus:ring-[#0d5f4e]"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Task Reminders</div>
                      <div className="text-sm text-gray-600">Get notified about upcoming tasks and deadlines</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.taskReminders}
                      onChange={(e) => setNotifications({ ...notifications, taskReminders: e.target.checked })}
                      className="w-5 h-5 text-[#0d5f4e] border-gray-300 rounded focus:ring-[#0d5f4e]"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Weekly Digest</div>
                      <div className="text-sm text-gray-600">Summary of your weekly progress and insights</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.weeklyDigest}
                      onChange={(e) => setNotifications({ ...notifications, weeklyDigest: e.target.checked })}
                      className="w-5 h-5 text-[#0d5f4e] border-gray-300 rounded focus:ring-[#0d5f4e]"
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-800">Investor Activity</div>
                      <div className="text-sm text-gray-600">Alerts when investors view your materials</div>
                    </div>
                    <input
                      type="checkbox"
                      checked={notifications.investorActivity}
                      onChange={(e) => setNotifications({ ...notifications, investorActivity: e.target.checked })}
                      className="w-5 h-5 text-[#0d5f4e] border-gray-300 rounded focus:ring-[#0d5f4e]"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors">
                    <Save className="w-4 h-4" />
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-6">Security Settings</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Change Password</h4>
                    <div className="space-y-3">
                      <input
                        type="password"
                        placeholder="Current password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                      />
                      <input
                        type="password"
                        placeholder="New password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                      />
                      <input
                        type="password"
                        placeholder="Confirm new password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d5f4e]"
                      />
                    </div>
                    <button className="mt-3 px-4 py-2 bg-[#0d5f4e] text-white rounded-lg hover:bg-[#0E3E1B] transition-colors">
                      Update Password
                    </button>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-3">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Add an extra layer of security to your account
                    </p>
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                      Enable 2FA
                    </button>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-medium text-gray-800 mb-3">Active Sessions</h4>
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-medium text-gray-800">Current Session</div>
                            <div className="text-xs text-gray-600">San Francisco, CA • Chrome</div>
                          </div>
                          <span className="text-xs text-emerald-600">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

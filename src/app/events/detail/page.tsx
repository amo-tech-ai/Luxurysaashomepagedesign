import { ArrowLeft, Calendar, MapPin, Users, DollarSign, CheckCircle2, Clock, Edit, Share2, Copy, Sparkles, AlertCircle, FileText, Video, Mail, Target, TrendingUp, AlertTriangle, ChevronRight, Download, ExternalLink, Mic, BookOpen, UserCheck, Briefcase } from 'lucide-react';
import { useState } from 'react';

// Mock event data
const eventData = {
  id: 1,
  name: 'AI Founders Summit 2026',
  tagline: 'The Glass Pavilion',
  date: 'February 24, 2026',
  shortDate: 'Feb 24, 2026',
  time: '9:00 AM - 6:00 PM',
  location: 'SF Tech Hub, Mission District',
  type: 'Networking & Speaker Event',
  status: 'confirmed',
  description: 'Premier gathering of AI founders, investors, and industry leaders. Features keynote speakers, panel discussions, and curated networking sessions focused on the future of AI in enterprise and consumer applications.',
  goals: ['Connect with 50+ AI founders and investors', 'Secure 3 strategic partnerships', 'Generate media coverage and brand awareness', 'Identify potential advisors and mentors'],
  progress: 72,
  currentPhase: 2, // 0-4 index
  metrics: {
    budget: { used: 18500, total: 25000 },
    guests: { confirmed: 147, invited: 200, capacity: 200 },
    tasks: { completed: 15, total: 19 },
    sponsors: { confirmed: 4, target: 5 },
  },
  networkingScore: 92,
  roiEstimate: 15,
};

const tasks = [
  { id: 1, title: 'Confirm keynote speakers', status: 'completed', dueDate: '2026-02-05', priority: 'high' },
  { id: 2, title: 'Finalize venue AV setup', status: 'completed', dueDate: '2026-02-08', priority: 'high' },
  { id: 3, title: 'Send attendee welcome emails', status: 'in-progress', dueDate: '2026-02-12', priority: 'medium' },
  { id: 4, title: 'Prepare networking session materials', status: 'in-progress', dueDate: '2026-02-13', priority: 'medium' },
  { id: 5, title: 'Brief event staff and volunteers', status: 'pending', dueDate: '2026-02-14', priority: 'low' },
  { id: 6, title: 'Test livestream setup', status: 'pending', dueDate: '2026-02-14', priority: 'high' },
];

const guests = [
  { name: 'Dr. Yann LeCun', role: 'Chief AI Scientist, Meta', status: 'confirmed', avatar: 'YL', type: 'Keynote' },
  { name: 'Dario Amodei', role: 'CEO, Anthropic', status: 'confirmed', avatar: 'DA', type: 'Keynote' },
  { name: 'Sarah Guo', role: 'Founder, Conviction', status: 'confirmed', avatar: 'SG', type: 'Panelist' },
  { name: 'Andrew Ng', role: 'Founder, DeepLearning.AI', status: 'pending', avatar: 'AN', type: 'Keynote' },
  { name: 'Fei-Fei Li', role: 'Professor, Stanford HAI', status: 'confirmed', avatar: 'FL', type: 'Panelist' },
];

const timeline = [
  { time: '9:00 AM', title: 'Registration & Welcome Coffee', duration: '45 min', type: 'networking' },
  { time: '9:45 AM', title: 'Opening Keynote: The Future of AI Infrastructure', duration: '45 min', type: 'keynote', speaker: 'Dr. Yann LeCun' },
  { time: '10:30 AM', title: 'Panel Discussion: AI Safety & Ethics', duration: '45 min', type: 'panel' },
  { time: '11:15 AM', title: 'Networking Break', duration: '30 min', type: 'networking' },
  { time: '11:45 AM', title: 'Breakout Sessions (3 tracks)', duration: '60 min', type: 'workshop' },
  { time: '12:45 PM', title: 'Lunch & Structured Networking', duration: '75 min', type: 'networking' },
  { time: '2:00 PM', title: 'Fireside Chat: Building AI Startups in 2026', duration: '40 min', type: 'fireside', speaker: 'Dario Amodei' },
  { time: '2:40 PM', title: 'Lightning Talks (5 x 10 min)', duration: '50 min', type: 'talk' },
  { time: '3:30 PM', title: 'Afternoon Break & Demos', duration: '30 min', type: 'demo' },
  { time: '4:00 PM', title: 'Closing Keynote: AI & The Next Decade', duration: '45 min', type: 'keynote', speaker: 'Fei-Fei Li' },
  { time: '4:45 PM', title: 'Closing Remarks & Happy Hour', duration: '75 min', type: 'networking' },
];

const phases = [
  { label: 'Planning', status: 'completed' },
  { label: 'Booking', status: 'completed' },
  { label: 'Promotion', status: 'active' },
  { label: 'Live', status: 'upcoming' },
  { label: 'Post-Event', status: 'upcoming' },
];

export default function EventDetailPage() {
  const [showCoach, setShowCoach] = useState(false);

  const handleBackToEvents = () => {
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'events' }));
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-[#1a1a1a] border-opacity-[0.08] sticky top-0 z-40">
        <div className="max-w-[1920px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={handleBackToEvents}
              className="flex items-center gap-2 text-sm text-[#1a1a1a] hover:text-[#0d5f4e] transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2} />
              <span className="font-medium">Back to Events</span>
            </button>
            
            <div className="h-5 w-px bg-[#1a1a1a] opacity-10" />
            
            <div>
              <h2 className="text-sm font-medium text-[#1a1a1a]">{eventData.name}</h2>
              <p className="text-xs text-[#1a1a1a] opacity-50">{eventData.tagline}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f3] rounded-md transition-all duration-200">
              <Download className="w-4 h-4 inline-block mr-2" strokeWidth={2} />
              Export
            </button>
            <button className="px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f3] rounded-md transition-all duration-200">
              <Share2 className="w-4 h-4 inline-block mr-2" strokeWidth={2} />
              Share
            </button>
            <button className="px-4 py-2 bg-[#0d5f4e] text-white text-sm rounded-md hover:bg-[#0a4d3e] transition-all duration-300">
              <Edit className="w-4 h-4 inline-block mr-2" strokeWidth={2} />
              Edit Event
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile AI Coach Toggle */}
      <button
        onClick={() => setShowCoach(!showCoach)}
        className="xl:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0d5f4e] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0a4d3e] transition-all duration-300"
      >
        <Sparkles className="w-5 h-5" strokeWidth={2} />
      </button>

      {/* Mobile AI Coach Drawer */}
      {showCoach && (
        <div className="xl:hidden fixed inset-0 z-40 bg-black bg-opacity-30" onClick={() => setShowCoach(false)}>
          <div 
            className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <AICoachContent />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex">
        
        {/* CENTER PANEL - Event Detail */}
        <main className="flex-1 max-w-6xl mx-auto px-8 py-12">
          
          {/* Hero Header */}
          <div className="mb-16">
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                  eventData.status === 'confirmed' 
                    ? 'bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e]' 
                    : 'bg-[#1a1a1a] bg-opacity-5 text-[#1a1a1a] opacity-60'
                }`}>
                  {eventData.status.toUpperCase()}
                </span>
                <h1 className="text-6xl lg:text-7xl text-[#1a1a1a] mb-4 leading-tight">{eventData.name}</h1>
                <p className="text-xl text-[#0d5f4e] italic mb-6">{eventData.tagline}</p>
                
                <div className="flex flex-wrap items-center gap-6 text-[#1a1a1a] opacity-60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-base">{eventData.shortDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-base">{eventData.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-base">{eventData.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-lg text-[#1a1a1a] opacity-70 leading-relaxed max-w-4xl">
              {eventData.description}
            </p>
          </div>

          {/* Event Intelligence Dashboard */}
          <div className="mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-8">Event Intelligence</h2>
            
            {/* Top Row - Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-[#1a1a1a] opacity-50 uppercase tracking-wider">Total Events</span>
                  <TrendingUp className="w-4 h-4 text-[#0d5f4e] opacity-40" strokeWidth={1.5} />
                </div>
                <p className="text-4xl text-[#1a1a1a] font-light mb-1">24</p>
                <p className="text-xs text-[#0d5f4e] font-medium">+2% this month</p>
              </div>
              
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-[#1a1a1a] opacity-50 uppercase tracking-wider">Confirmed</span>
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] opacity-40" strokeWidth={1.5} />
                </div>
                <p className="text-4xl text-[#1a1a1a] font-light mb-1">12</p>
                <p className="text-xs text-[#1a1a1a] opacity-50">Active events</p>
              </div>
              
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-[#1a1a1a] opacity-50 uppercase tracking-wider">Networking Score</span>
                  <Target className="w-4 h-4 text-[#0d5f4e] opacity-40" strokeWidth={1.5} />
                </div>
                <p className="text-4xl text-[#0d5f4e] font-light mb-1">{eventData.networkingScore}%</p>
                <p className="text-xs text-[#0d5f4e] font-medium">↑ Excellent</p>
              </div>
              
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs text-[#1a1a1a] opacity-50 uppercase tracking-wider">ROI Estimate</span>
                  <DollarSign className="w-4 h-4 text-[#0d5f4e] opacity-40" strokeWidth={1.5} />
                </div>
                <p className="text-4xl text-[#0d5f4e] font-light mb-1">+{eventData.roiEstimate}%</p>
                <p className="text-xs text-[#0d5f4e] font-medium">↑ Projected growth</p>
              </div>
            </div>

            {/* Visual Progress Flow Chart */}
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl text-[#1a1a1a] mb-1">Event Progress</h3>
                  <p className="text-sm text-[#1a1a1a] opacity-50">{eventData.progress}% complete • On track for success</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-light text-[#0d5f4e]">{eventData.progress}%</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-[#f5f5f3] rounded-full h-3 mb-8">
                <div 
                  className="bg-[#0d5f4e] h-3 rounded-full transition-all duration-500 relative"
                  style={{ width: `${eventData.progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-2 border-[#0d5f4e] rounded-full" />
                </div>
              </div>

              {/* Phase Flow Diagram */}
              <div className="grid grid-cols-5 gap-3">
                {phases.map((phase, index) => (
                  <div key={phase.label} className="relative">
                    <div className={`text-center p-4 rounded-lg border transition-all duration-300 ${
                      phase.status === 'completed' 
                        ? 'bg-[#0d5f4e] bg-opacity-5 border-[#0d5f4e] border-opacity-20' 
                        : phase.status === 'active'
                        ? 'bg-[#0d5f4e] bg-opacity-10 border-[#0d5f4e]'
                        : 'bg-[#f5f5f3] border-[#1a1a1a] border-opacity-5'
                    }`}>
                      <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                        phase.status === 'completed' 
                          ? 'bg-[#0d5f4e] text-white' 
                          : phase.status === 'active'
                          ? 'bg-[#0d5f4e] text-white'
                          : 'bg-[#1a1a1a] bg-opacity-5 text-[#1a1a1a] opacity-40'
                      }`}>
                        {phase.status === 'completed' && <CheckCircle2 className="w-4 h-4" strokeWidth={2} />}
                        {phase.status === 'active' && <Clock className="w-4 h-4" strokeWidth={2} />}
                        {phase.status === 'upcoming' && <span className="text-xs">{index + 1}</span>}
                      </div>
                      <p className={`text-xs font-medium ${
                        phase.status !== 'upcoming' ? 'text-[#1a1a1a]' : 'text-[#1a1a1a] opacity-40'
                      }`}>
                        {phase.label}
                      </p>
                    </div>
                    {index < phases.length - 1 && (
                      <ChevronRight className="absolute top-1/2 -right-3 -translate-y-1/2 w-4 h-4 text-[#1a1a1a] opacity-20 z-10" strokeWidth={2} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Metrics Grid */}
          <div className="mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-8">Key Metrics</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Guests Metric with Visual */}
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#1a1a1a] opacity-50 uppercase tracking-wider mb-2">Guests</p>
                    <p className="text-4xl font-light text-[#1a1a1a]">{eventData.metrics.guests.confirmed}</p>
                  </div>
                  <Users className="w-8 h-8 text-[#0d5f4e] opacity-20" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#1a1a1a] opacity-60">Confirmed</span>
                      <span className="text-[#1a1a1a] font-medium">{eventData.metrics.guests.confirmed} / {eventData.metrics.guests.capacity}</span>
                    </div>
                    <div className="w-full bg-[#f5f5f3] rounded-full h-2">
                      <div 
                        className="bg-[#0d5f4e] h-2 rounded-full"
                        style={{ width: `${(eventData.metrics.guests.confirmed / eventData.metrics.guests.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#1a1a1a] opacity-60">Invited</span>
                      <span className="text-[#1a1a1a] font-medium">{eventData.metrics.guests.invited} total</span>
                    </div>
                    <div className="w-full bg-[#f5f5f3] rounded-full h-2">
                      <div 
                        className="bg-[#6b9d89] h-2 rounded-full"
                        style={{ width: '100%' }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-[#0d5f4e] font-medium mt-4">
                    ✓ {Math.round((eventData.metrics.guests.confirmed / eventData.metrics.guests.invited) * 100)}% acceptance rate
                  </p>
                </div>
              </div>

              {/* Budget Metric with Visual */}
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#1a1a1a] opacity-50 uppercase tracking-wider mb-2">Budget</p>
                    <p className="text-4xl font-light text-[#1a1a1a]">${(eventData.metrics.budget.used / 1000).toFixed(1)}k</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-[#0d5f4e] opacity-20" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#1a1a1a] opacity-60">Spent</span>
                      <span className="text-[#1a1a1a] font-medium">${eventData.metrics.budget.used.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-[#f5f5f3] rounded-full h-2">
                      <div 
                        className="bg-[#0d5f4e] h-2 rounded-full"
                        style={{ width: `${(eventData.metrics.budget.used / eventData.metrics.budget.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#1a1a1a] opacity-60">Remaining</span>
                      <span className="text-[#1a1a1a] font-medium">${(eventData.metrics.budget.total - eventData.metrics.budget.used).toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-[#f5f5f3] rounded-full h-2">
                      <div 
                        className="bg-[#6b9d89] h-2 rounded-full"
                        style={{ width: `${((eventData.metrics.budget.total - eventData.metrics.budget.used) / eventData.metrics.budget.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-[#1a1a1a] opacity-60 mt-4">
                    Total budget: ${eventData.metrics.budget.total.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Tasks Metric with Visual */}
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-[#1a1a1a] opacity-50 uppercase tracking-wider mb-2">Tasks</p>
                    <p className="text-4xl font-light text-[#1a1a1a]">{eventData.metrics.tasks.completed}/{eventData.metrics.tasks.total}</p>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-[#0d5f4e] opacity-20" strokeWidth={1.5} />
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#1a1a1a] opacity-60">Completed</span>
                      <span className="text-[#1a1a1a] font-medium">{eventData.metrics.tasks.completed} tasks</span>
                    </div>
                    <div className="w-full bg-[#f5f5f3] rounded-full h-2">
                      <div 
                        className="bg-[#0d5f4e] h-2 rounded-full"
                        style={{ width: `${(eventData.metrics.tasks.completed / eventData.metrics.tasks.total) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-[#1a1a1a] opacity-60">Remaining</span>
                      <span className="text-[#1a1a1a] font-medium">{eventData.metrics.tasks.total - eventData.metrics.tasks.completed} tasks</span>
                    </div>
                    <div className="w-full bg-[#f5f5f3] rounded-full h-2">
                      <div 
                        className="bg-amber-200 h-2 rounded-full"
                        style={{ width: `${((eventData.metrics.tasks.total - eventData.metrics.tasks.completed) / eventData.metrics.tasks.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <p className="text-xs text-[#0d5f4e] font-medium mt-4">
                    ✓ {Math.round((eventData.metrics.tasks.completed / eventData.metrics.tasks.total) * 100)}% complete
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Event Goals */}
          <div className="mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-8">Strategic Goals</h2>
            
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventData.goals.map((goal, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#fafaf8] rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                      <Target className="w-4 h-4 text-[#0d5f4e]" strokeWidth={2} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-[#1a1a1a] leading-relaxed">{goal}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event Schedule - Visual Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-8">Event Schedule</h2>
            
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    {/* Timeline Connector */}
                    <div className="flex flex-col items-center">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        item.type === 'keynote' 
                          ? 'bg-[#0d5f4e] border-[#0d5f4e] text-white' 
                          : item.type === 'networking'
                          ? 'bg-[#6b9d89] bg-opacity-20 border-[#6b9d89] text-[#0d5f4e]'
                          : 'bg-white border-[#1a1a1a] border-opacity-10 text-[#1a1a1a] opacity-60'
                      }`}>
                        {item.type === 'keynote' && <Mic className="w-4 h-4" strokeWidth={2} />}
                        {item.type === 'networking' && <Users className="w-4 h-4" strokeWidth={2} />}
                        {item.type === 'panel' && <UserCheck className="w-4 h-4" strokeWidth={2} />}
                        {item.type === 'workshop' && <BookOpen className="w-4 h-4" strokeWidth={2} />}
                        {item.type === 'fireside' && <Briefcase className="w-4 h-4" strokeWidth={2} />}
                        {item.type === 'talk' && <Mic className="w-4 h-4" strokeWidth={2} />}
                        {item.type === 'demo' && <Target className="w-4 h-4" strokeWidth={2} />}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-[#1a1a1a] opacity-5 my-1" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex items-baseline justify-between mb-2">
                        <div>
                          <p className="text-sm font-medium text-[#1a1a1a] opacity-50">{item.time}</p>
                          <h3 className="text-lg text-[#1a1a1a] font-normal mt-1">{item.title}</h3>
                          {item.speaker && (
                            <p className="text-sm text-[#0d5f4e] italic mt-1">{item.speaker}</p>
                          )}
                        </div>
                        <span className="text-xs text-[#1a1a1a] opacity-40 whitespace-nowrap ml-4">{item.duration}</span>
                      </div>
                      <span className={`inline-block px-2 py-1 rounded text-xs capitalize ${
                        item.type === 'keynote' 
                          ? 'bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e]' 
                          : 'bg-[#1a1a1a] bg-opacity-5 text-[#1a1a1a] opacity-60'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Speakers & Guests */}
          <div className="mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-8">Speakers & Guests</h2>
            
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
              <div className="space-y-4">
                {guests.map((guest, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-5 bg-[#fafaf8] rounded-lg hover:bg-[#f5f5f3] transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                        <span className="text-sm font-medium text-[#0d5f4e]">{guest.avatar}</span>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-[#1a1a1a]">{guest.name}</h3>
                        <p className="text-sm text-[#1a1a1a] opacity-60">{guest.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs text-[#1a1a1a] opacity-40 uppercase tracking-wider">
                        {guest.type}
                      </span>
                      <span className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                        guest.status === 'confirmed' 
                          ? 'bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e]' 
                          : 'bg-amber-50 text-amber-700'
                      }`}>
                        {guest.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 border border-[#1a1a1a] border-opacity-10 rounded-lg text-sm text-[#1a1a1a] hover:border-opacity-20 hover:bg-[#fafaf8] transition-all duration-300">
                + Invite More Guests
              </button>
            </div>
          </div>

          {/* Tasks Checklist */}
          <div className="mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-8">Tasks & Checklist</h2>
            
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-8">
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div 
                    key={task.id} 
                    className="flex items-center justify-between p-4 bg-[#fafaf8] rounded-lg hover:bg-[#f5f5f3] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <input 
                        type="checkbox" 
                        checked={task.status === 'completed'}
                        onChange={() => {}}
                        readOnly
                        className="w-5 h-5 rounded border-[#1a1a1a] border-opacity-20 text-[#0d5f4e] focus:ring-[#0d5f4e] focus:ring-offset-0 cursor-pointer"
                      />
                      <div className="flex-1">
                        <h3 className={`text-sm font-medium ${
                          task.status === 'completed' 
                            ? 'text-[#1a1a1a] opacity-50 line-through' 
                            : 'text-[#1a1a1a]'
                        }`}>
                          {task.title}
                        </h3>
                        <p className="text-xs text-[#1a1a1a] opacity-50 mt-0.5">Due: {task.dueDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 rounded text-xs ${
                        task.priority === 'high' 
                          ? 'bg-red-50 text-red-700' 
                          : task.priority === 'medium'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-[#f5f5f3] text-[#1a1a1a] opacity-60'
                      }`}>
                        {task.priority}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        task.status === 'completed' 
                          ? 'bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e]' 
                          : task.status === 'in-progress'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-[#1a1a1a] bg-opacity-5 text-[#1a1a1a] opacity-60'
                      }`}>
                        {task.status === 'completed' ? 'Done' : task.status === 'in-progress' ? 'In Progress' : 'Pending'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 bg-[#0d5f4e] text-white rounded-lg text-sm hover:bg-[#0a4d3e] transition-all duration-300">
                + Add Task
              </button>
            </div>
          </div>

          {/* Documents & Resources */}
          <div className="mb-16">
            <h2 className="text-3xl text-[#1a1a1a] mb-8">Documents & Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                  <ExternalLink className="w-4 h-4 text-[#1a1a1a] opacity-0 group-hover:opacity-40 transition-opacity" strokeWidth={2} />
                </div>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-1">Event Brief & Agenda</h3>
                <p className="text-xs text-[#1a1a1a] opacity-50">Updated 2 days ago • PDF</p>
              </div>

              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <Video className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                  <ExternalLink className="w-4 h-4 text-[#1a1a1a] opacity-0 group-hover:opacity-40 transition-opacity" strokeWidth={2} />
                </div>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-1">Speaker Intro Videos</h3>
                <p className="text-xs text-[#1a1a1a] opacity-50">5 videos • 12 minutes total</p>
              </div>

              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <Mail className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                  <ExternalLink className="w-4 h-4 text-[#1a1a1a] opacity-0 group-hover:opacity-40 transition-opacity" strokeWidth={2} />
                </div>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-1">Email Templates</h3>
                <p className="text-xs text-[#1a1a1a] opacity-50">Invitations & reminders</p>
              </div>

              <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-opacity-15 transition-all duration-300 group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <FileText className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                  <ExternalLink className="w-4 h-4 text-[#1a1a1a] opacity-0 group-hover:opacity-40 transition-opacity" strokeWidth={2} />
                </div>
                <h3 className="text-base font-medium text-[#1a1a1a] mb-1">Venue Floor Plans</h3>
                <p className="text-xs text-[#1a1a1a] opacity-50">Updated yesterday • PDF</p>
              </div>
            </div>

            <button className="w-full mt-6 py-3 border border-[#1a1a1a] border-opacity-10 rounded-lg text-sm text-[#1a1a1a] hover:border-opacity-20 hover:bg-[#fafaf8] transition-all duration-300">
              <Download className="w-4 h-4 inline-block mr-2" strokeWidth={2} />
              Upload Document
            </button>
          </div>

        </main>

        {/* RIGHT PANEL - AI Event Coach */}
        <aside className="hidden xl:block w-96 border-l border-[#1a1a1a] border-opacity-[0.08] bg-white h-screen sticky top-0 overflow-y-auto">
          <div className="p-8">
            <AICoachContent />
          </div>
        </aside>

      </div>
    </div>
  );
}

// AI Coach Component
function AICoachContent() {
  return (
    <>
      {/* AI Coach Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#0d5f4e]" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#1a1a1a]">AI Event Coach</h3>
            <p className="text-xs text-[#1a1a1a] opacity-50">Smart suggestions</p>
          </div>
        </div>
      </div>

      {/* Event Health Card */}
      <div className="bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] rounded-lg p-6 mb-6 text-white">
        <p className="text-sm opacity-90 leading-relaxed mb-4">
          Your summit is <strong>72% ready</strong> and on track. Strong speaker lineup confirmed. Focus on attendee engagement and final logistics.
        </p>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-white bg-opacity-20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '72%' }} />
          </div>
          <span className="text-xs font-medium">72%</span>
        </div>
      </div>

      {/* On Track Section */}
      <div className="mb-6">
        <h4 className="text-xs font-medium text-[#0d5f4e] uppercase tracking-wider mb-4">✓ On Track</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-[#1a1a1a] opacity-70">
            <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span>All keynote speakers confirmed</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1a1a1a] opacity-70">
            <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span>147 attendees registered</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1a1a1a] opacity-70">
            <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span>Venue AV setup complete</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1a1a1a] opacity-70">
            <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span>4 sponsors secured</span>
          </li>
        </ul>
      </div>

      <div className="h-px bg-[#1a1a1a] opacity-5 my-6" />

      {/* Needs Attention Section */}
      <div className="mb-6">
        <h4 className="text-xs font-medium text-amber-700 uppercase tracking-wider mb-4">⚠ Needs Attention</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-[#1a1a1a] opacity-70">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span>1 keynote RSVP pending</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1a1a1a] opacity-70">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span>Livestream test needed</span>
          </li>
          <li className="flex items-start gap-3 text-sm text-[#1a1a1a] opacity-70">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
            <span>53 guests haven't RSVP'd</span>
          </li>
        </ul>
      </div>

      <div className="h-px bg-[#1a1a1a] opacity-5 my-6" />

      {/* Suggested Actions */}
      <div className="mb-6">
        <h4 className="text-xs font-medium text-[#1a1a1a] uppercase tracking-wider mb-4">Suggested Actions</h4>
        
        <div className="space-y-2">
          <button className="w-full flex items-start gap-3 p-4 bg-[#fafaf8] rounded-lg hover:bg-[#f5f5f3] transition-all duration-200 text-left group">
            <Users className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#1a1a1a] font-medium mb-0.5">Follow up with Andrew Ng</p>
              <p className="text-xs text-[#1a1a1a] opacity-60">Keynote RSVP still pending</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#1a1a1a] opacity-0 group-hover:opacity-40 transition-opacity" strokeWidth={2} />
          </button>
          
          <button className="w-full flex items-start gap-3 p-4 bg-[#fafaf8] rounded-lg hover:bg-[#f5f5f3] transition-all duration-200 text-left group">
            <Mail className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#1a1a1a] font-medium mb-0.5">Send welcome emails</p>
              <p className="text-xs text-[#1a1a1a] opacity-60">Include agenda & logistics</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#1a1a1a] opacity-0 group-hover:opacity-40 transition-opacity" strokeWidth={2} />
          </button>
          
          <button className="w-full flex items-start gap-3 p-4 bg-[#fafaf8] rounded-lg hover:bg-[#f5f5f3] transition-all duration-200 text-left group">
            <Video className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-[#1a1a1a] font-medium mb-0.5">Schedule livestream test</p>
              <p className="text-xs text-[#1a1a1a] opacity-60">Run full tech rehearsal</p>
            </div>
            <ChevronRight className="w-4 h-4 text-[#1a1a1a] opacity-0 group-hover:opacity-40 transition-opacity" strokeWidth={2} />
          </button>
        </div>
      </div>

      <div className="h-px bg-[#1a1a1a] opacity-5 my-6" />

      {/* AI Can Help */}
      <div>
        <h4 className="text-xs font-medium text-[#1a1a1a] uppercase tracking-wider mb-4">AI Can Help</h4>
        
        <div className="space-y-2">
          <button className="w-full px-4 py-3 bg-[#0d5f4e] bg-opacity-5 text-[#0d5f4e] text-sm font-medium rounded-lg hover:bg-opacity-10 transition-all duration-200 text-left flex items-center gap-2 group">
            <Sparkles className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
            <span className="flex-1">Generate networking icebreakers</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
          </button>
          
          <button className="w-full px-4 py-3 bg-[#0d5f4e] bg-opacity-5 text-[#0d5f4e] text-sm font-medium rounded-lg hover:bg-opacity-10 transition-all duration-200 text-left flex items-center gap-2 group">
            <Sparkles className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
            <span className="flex-1">Draft speaker intro scripts</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
          </button>
          
          <button className="w-full px-4 py-3 bg-[#0d5f4e] bg-opacity-5 text-[#0d5f4e] text-sm font-medium rounded-lg hover:bg-opacity-10 transition-all duration-200 text-left flex items-center gap-2 group">
            <Sparkles className="w-4 h-4 flex-shrink-0" strokeWidth={2} />
            <span className="flex-1">Create post-event survey</span>
            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Event Health Insight */}
      <div className="mt-8 p-4 bg-[#f5f5f3] rounded-lg">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-6 h-6 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-3 h-3 text-[#0d5f4e]" strokeWidth={2} />
          </div>
          <div>
            <p className="text-xs font-medium text-[#1a1a1a] mb-1">Event Health</p>
            <p className="text-xs text-[#1a1a1a] opacity-60 leading-relaxed">
              Guest ratio is optimal for networking intimacy. Add ignites, plussed tasks early for Ops confidence.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-[#1a1a1a] opacity-50">Networking Score</span>
          <span className="text-sm font-medium text-[#0d5f4e]">92% • Excellent</span>
        </div>
      </div>
    </>
  );
}

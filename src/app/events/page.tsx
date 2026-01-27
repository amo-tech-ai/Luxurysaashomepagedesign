import { Calendar, Plus, Search, Filter, Grid3x3, List, CalendarDays, Clock, CheckCircle2, CalendarCheck, Sparkles, AlertCircle, MapPin, Users, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

// Mock data for events
const mockEvents = [
  {
    id: 1,
    name: 'Seed Round Pitch Event',
    date: '2026-01-24',
    time: '2:00 PM',
    status: 'upcoming',
    owner: 'Sarah Chen',
    location: 'Virtual',
    attendees: 12,
  },
  {
    id: 2,
    name: 'Product Demo Webinar',
    date: '2026-01-20',
    time: '11:00 AM',
    status: 'confirmed',
    owner: 'Michael Ross',
    location: 'Zoom',
    attendees: 45,
  },
  {
    id: 3,
    name: 'Investor Networking Mixer',
    date: '2026-01-18',
    time: '6:30 PM',
    status: 'upcoming',
    owner: 'Sarah Chen',
    location: 'WeWork SF',
    attendees: 28,
  },
];

export default function EventsPage() {
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [showCoach, setShowCoach] = useState(false);

  const handleBackToHome = () => {
    // Trigger a custom event that App.tsx can listen to
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'home' }));
  };

  const handleViewEvent = (eventId: number) => {
    // Navigate to event detail page
    window.dispatchEvent(new CustomEvent('navigate', { detail: 'event-detail' }));
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Back to Home button */}
      <div className="fixed top-4 left-4 z-50 lg:left-auto lg:right-4">
        <button
          onClick={handleBackToHome}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-[#1a1a1a] border-opacity-[0.08] text-sm text-[#1a1a1a] rounded-md hover:border-opacity-20 transition-all duration-300 shadow-sm"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={2} />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Mobile AI Coach Toggle (bottom right) */}
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
            {/* AI Coach Content (same as desktop) */}
            <div className="bg-[#0d5f4e] bg-opacity-[0.05] border border-[#0d5f4e] border-opacity-10 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#0d5f4e]" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-medium text-[#1a1a1a]">Event Coach</h3>
              </div>
              
              <p className="text-sm text-[#1a1a1a] opacity-70 leading-relaxed mb-6">
                You have a seed pitch event in 6 days. Make sure your materials are investor-ready.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-md border border-[#1a1a1a] border-opacity-[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1a1a1a] font-medium mb-1">Finalize pitch deck</p>
                    <p className="text-xs text-[#1a1a1a] opacity-60">Review and update slides</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-md border border-[#1a1a1a] border-opacity-[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1a1a1a] font-medium mb-1">Send calendar invites</p>
                    <p className="text-xs text-[#1a1a1a] opacity-60">12 attendees pending</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-md border border-[#1a1a1a] border-opacity-[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1a1a1a] font-medium mb-1">Prepare Q&A brief</p>
                    <p className="text-xs text-[#1a1a1a] opacity-60">Common investor questions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 border-opacity-30 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-amber-900 font-medium mb-1">Missing venue details</p>
                  <p className="text-xs text-amber-800 opacity-80 mb-3">
                    Investor Networking Mixer needs location confirmation
                  </p>
                  <button className="text-xs text-amber-700 font-medium hover:text-amber-900 transition-colors duration-200">
                    Update event →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Three-panel layout */}
      <div className="flex">
        
        {/* LEFT PANEL - Navigation */}
        <aside className="hidden lg:block w-64 border-r border-[#1a1a1a] border-opacity-[0.08] bg-white h-screen sticky top-0">
          <div className="p-8">
            <div className="mb-12">
              <h1 className="text-2xl text-[#1a1a1a] font-normal">StartupAI</h1>
              <p className="text-sm text-[#1a1a1a] opacity-50 mt-1">Operating System</p>
            </div>
            
            <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#1a1a1a] opacity-50 hover:opacity-100 hover:bg-[#f5f5f3] rounded-md transition-all duration-200">
                <CalendarDays className="w-4 h-4" />
                <span>Dashboard</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#1a1a1a] bg-[#0d5f4e] bg-opacity-[0.08] rounded-md">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">Events</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#1a1a1a] opacity-50 hover:opacity-100 hover:bg-[#f5f5f3] rounded-md transition-all duration-200">
                <Users className="w-4 h-4" />
                <span>Investors</span>
              </a>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#1a1a1a] opacity-50 hover:opacity-100 hover:bg-[#f5f5f3] rounded-md transition-all duration-200">
                <CheckCircle2 className="w-4 h-4" />
                <span>Tasks</span>
              </a>
            </nav>
          </div>
        </aside>

        {/* CENTER PANEL - Events Directory */}
        <main className="flex-1 max-w-5xl mx-auto px-6 lg:px-12 py-12">
          
          {/* 1. Page Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1 className="text-4xl lg:text-5xl text-[#1a1a1a] mb-3">Events</h1>
              <p className="text-[#1a1a1a] opacity-60">3 upcoming · 1 this week · 2 confirmed</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-[#0d5f4e] text-white rounded-md hover:bg-[#0a4d3e] transition-all duration-300 shadow-sm">
              <Plus className="w-4 h-4" strokeWidth={2} />
              <span className="font-medium">New Event</span>
            </button>
          </div>

          {/* 2. KPI Summary Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#1a1a1a] opacity-60">Upcoming</span>
                <CalendarDays className="w-4 h-4 text-[#0d5f4e] opacity-60" strokeWidth={1.5} />
              </div>
              <p className="text-3xl text-[#1a1a1a] font-normal">3</p>
            </div>
            
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#1a1a1a] opacity-60">This Week</span>
                <Clock className="w-4 h-4 text-[#0d5f4e] opacity-60" strokeWidth={1.5} />
              </div>
              <p className="text-3xl text-[#1a1a1a] font-normal">1</p>
            </div>
            
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#1a1a1a] opacity-60">Confirmed</span>
                <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] opacity-60" strokeWidth={1.5} />
              </div>
              <p className="text-3xl text-[#1a1a1a] font-normal">2</p>
            </div>
            
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-[#1a1a1a] opacity-60">Completed</span>
                <CalendarCheck className="w-4 h-4 text-[#0d5f4e] opacity-60" strokeWidth={1.5} />
              </div>
              <p className="text-3xl text-[#1a1a1a] font-normal">12</p>
            </div>
          </div>

          {/* 3. Search & Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#1a1a1a] opacity-40" strokeWidth={2} />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-md text-sm text-[#1a1a1a] placeholder:text-[#1a1a1a] placeholder:opacity-40 focus:outline-none focus:border-[#0d5f4e] focus:border-opacity-30 transition-all duration-200"
              />
            </div>
            
            <button className="flex items-center justify-center gap-2 px-5 py-3 bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-md text-sm text-[#1a1a1a] hover:border-opacity-20 transition-all duration-200">
              <Filter className="w-4 h-4" strokeWidth={2} />
              <span>Filters</span>
            </button>
            
            <div className="flex items-center gap-1 bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-md p-1">
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-[#0d5f4e] bg-opacity-[0.08]' : 'hover:bg-[#f5f5f3]'} transition-all duration-200`}
              >
                <List className="w-4 h-4 text-[#1a1a1a]" strokeWidth={2} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-[#0d5f4e] bg-opacity-[0.08]' : 'hover:bg-[#f5f5f3]'} transition-all duration-200`}
              >
                <Grid3x3 className="w-4 h-4 text-[#1a1a1a]" strokeWidth={2} />
              </button>
            </div>
          </div>

          {/* 4. Events List */}
          <div className="space-y-3">
            {mockEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-6 hover:border-[#0d5f4e] hover:border-opacity-30 hover:shadow-sm transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg text-[#1a1a1a] font-medium">{event.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.status === 'confirmed' 
                          ? 'bg-[#0d5f4e] bg-opacity-10 text-[#0d5f4e]' 
                          : 'bg-[#1a1a1a] bg-opacity-5 text-[#1a1a1a] opacity-60'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#1a1a1a] opacity-60">
                      <div className="flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5" strokeWidth={2} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" strokeWidth={2} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" strokeWidth={2} />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button className="px-4 py-2 text-sm text-[#1a1a1a] hover:bg-[#f5f5f3] rounded-md transition-all duration-200">
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 text-sm text-[#0d5f4e] font-medium hover:bg-[#0d5f4e] hover:bg-opacity-[0.08] rounded-md transition-all duration-200"
                      onClick={() => handleViewEvent(event.id)}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State (show when no events) */}
          {mockEvents.length === 0 && (
            <div className="bg-white border border-[#1a1a1a] border-opacity-[0.08] rounded-lg p-16 text-center">
              <Calendar className="w-12 h-12 text-[#1a1a1a] opacity-20 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl text-[#1a1a1a] mb-2 font-normal">No events yet</h3>
              <p className="text-sm text-[#1a1a1a] opacity-60 mb-8 max-w-md mx-auto">
                Create your first event to start building momentum with investors and stakeholders.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d5f4e] text-white rounded-md hover:bg-[#0a4d3e] transition-all duration-300">
                <Plus className="w-4 h-4" strokeWidth={2} />
                <span className="font-medium">Create Event</span>
              </button>
            </div>
          )}
        </main>

        {/* RIGHT PANEL - AI Event Coach */}
        <aside className="hidden xl:block w-80 border-l border-[#1a1a1a] border-opacity-[0.08] bg-white h-screen sticky top-0">
          <div className="p-8">
            
            {/* AI Coach Card */}
            <div className="bg-[#0d5f4e] bg-opacity-[0.05] border border-[#0d5f4e] border-opacity-10 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#0d5f4e] bg-opacity-10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-[#0d5f4e]" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-medium text-[#1a1a1a]">Event Coach</h3>
              </div>
              
              <p className="text-sm text-[#1a1a1a] opacity-70 leading-relaxed mb-6">
                You have a seed pitch event in 6 days. Make sure your materials are investor-ready.
              </p>
              
              {/* Suggested Actions */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-md border border-[#1a1a1a] border-opacity-[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1a1a1a] font-medium mb-1">Finalize pitch deck</p>
                    <p className="text-xs text-[#1a1a1a] opacity-60">Review and update slides</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-md border border-[#1a1a1a] border-opacity-[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1a1a1a] font-medium mb-1">Send calendar invites</p>
                    <p className="text-xs text-[#1a1a1a] opacity-60">12 attendees pending</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-white bg-opacity-60 rounded-md border border-[#1a1a1a] border-opacity-[0.05]">
                  <CheckCircle2 className="w-4 h-4 text-[#0d5f4e] mt-0.5 flex-shrink-0" strokeWidth={2} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#1a1a1a] font-medium mb-1">Prepare Q&A brief</p>
                    <p className="text-xs text-[#1a1a1a] opacity-60">Common investor questions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Card */}
            <div className="bg-amber-50 border border-amber-200 border-opacity-30 rounded-lg p-5">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-amber-900 font-medium mb-1">Missing venue details</p>
                  <p className="text-xs text-amber-800 opacity-80 mb-3">
                    Investor Networking Mixer needs location confirmation
                  </p>
                  <button className="text-xs text-amber-700 font-medium hover:text-amber-900 transition-colors duration-200">
                    Update event →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}
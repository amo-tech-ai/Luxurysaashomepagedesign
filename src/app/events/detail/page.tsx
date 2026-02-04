import { Calendar, Clock, MapPin, Users, DollarSign, Share2, Star, ArrowRight, Check } from 'lucide-react';

interface EventDetailPageProps {
  onNavigate?: (route: string) => void;
}

export default function EventDetailPage({ onNavigate }: EventDetailPageProps) {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <button
            onClick={() => onNavigate?.('events-discover')}
            className="text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors"
          >
            ← Back to Events
          </button>
        </div>
      </nav>

      {/* Hero / Header */}
      <section className="bg-gradient-to-br from-white via-[#fafaf8] to-[#f5f5f3] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto">
            {/* Top Row: Date Card + Badge */}
            <div className="flex items-start justify-between mb-12">
              {/* Date Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 text-center min-w-[140px]">
                <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">
                  February
                </div>
                <div className="text-6xl text-gray-900 font-light leading-none mb-2">
                  15
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  Saturday
                </div>
              </div>

              {/* Hosted Badge */}
              <div className="flex flex-col items-end gap-3">
                <span className="px-5 py-2 bg-[#0d5f4e] text-white rounded-full text-sm font-medium shadow-lg">
                  Hosted Event
                </span>
                <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-xs uppercase tracking-wider">
                  Pitch Night
                </span>
              </div>
            </div>

            {/* Event Title */}
            <div className="mb-10">
              <h1 className="text-6xl text-gray-900 mb-6 font-light tracking-tight leading-tight">
                San Francisco Startup Pitch Night
              </h1>
              <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
                Present your startup to investors and get real-time feedback in an intimate, high-energy setting.
              </p>
            </div>

            {/* Metadata Row */}
            <div className="flex flex-wrap items-center gap-8 mb-10 pb-10 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0d5f4e]/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Date</div>
                  <div className="text-base text-gray-900">Saturday, Feb 15, 2026</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0d5f4e]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Time</div>
                  <div className="text-base text-gray-900">6:00 PM - 9:00 PM PST</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0d5f4e]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#0d5f4e]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Location</div>
                  <div className="text-base text-gray-900">Mission Bay Conference Center, SF</div>
                </div>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex items-center gap-4">
              <button className="group px-10 py-5 bg-[#0d5f4e] text-white rounded-2xl hover:bg-[#0a4a3b] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg font-medium inline-flex items-center gap-3">
                Register Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all duration-300 text-lg inline-flex items-center gap-3">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - 2 Column */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* LEFT COLUMN - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* About This Event */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">
                <h2 className="text-3xl text-gray-900 mb-6 font-light tracking-tight">
                  About This Event
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6 font-light text-lg">
                    Join us for an evening of innovation and entrepreneurship as early-stage startups present their ideas to a panel of experienced investors and founders. This intimate event provides a unique opportunity to showcase your vision, receive constructive feedback, and connect with the San Francisco startup community.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6 font-light text-lg">
                    Whether you're pitching or attending, you'll be part of meaningful conversations about building the future. Network with fellow founders, meet potential co-founders, and learn from real-time investor feedback.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-light text-lg">
                    Each startup will have 5 minutes to pitch, followed by 10 minutes of Q&A with our investor panel. After the pitches, enjoy refreshments and networking in our lounge area.
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">
                <h2 className="text-3xl text-gray-900 mb-8 font-light tracking-tight">
                  What to Expect
                </h2>
                <div className="space-y-5">
                  <ExpectationItem 
                    icon={<Users className="w-6 h-6" strokeWidth={1.5} />}
                    title="Intimate Setting"
                    description="Limited to 120 attendees for meaningful connections and focused discussions."
                  />
                  <ExpectationItem 
                    icon={<Star className="w-6 h-6" strokeWidth={1.5} />}
                    title="Expert Investor Panel"
                    description="Get feedback from VCs and angel investors who have funded 100+ startups."
                  />
                  <ExpectationItem 
                    icon={<Check className="w-6 h-6" strokeWidth={1.5} />}
                    title="Networking Opportunities"
                    description="Connect with founders, investors, and potential co-founders over refreshments."
                  />
                  <ExpectationItem 
                    icon={<ArrowRight className="w-6 h-6" strokeWidth={1.5} />}
                    title="Real-Time Feedback"
                    description="Receive actionable insights and constructive criticism to improve your pitch."
                  />
                </div>
              </div>

              {/* Schedule */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-10">
                <h2 className="text-3xl text-gray-900 mb-8 font-light tracking-tight">
                  Event Schedule
                </h2>
                <div className="space-y-6">
                  <ScheduleItem time="6:00 PM" title="Registration & Welcome Reception" />
                  <ScheduleItem time="6:30 PM" title="Opening Remarks" />
                  <ScheduleItem time="6:45 PM" title="Startup Pitches Begin" />
                  <ScheduleItem time="8:15 PM" title="Networking & Refreshments" />
                  <ScheduleItem time="9:00 PM" title="Event Concludes" />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Event Details Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 sticky top-6">
                <h3 className="text-xl text-gray-900 mb-6 font-light tracking-tight">
                  Event Details
                </h3>
                <div className="space-y-6">
                  <DetailItem
                    icon={<Users className="w-5 h-5" />}
                    label="Capacity"
                    value="120 attendees"
                    sublabel="87 spots remaining"
                  />
                  <DetailItem
                    icon={<DollarSign className="w-5 h-5" />}
                    label="Ticket Price"
                    value="Free"
                    sublabel="Registration required"
                    highlight
                  />
                  <DetailItem
                    icon={<Star className="w-5 h-5" />}
                    label="Rating"
                    value="4.8/5"
                    sublabel="From 156 reviews"
                  />
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-3">
                    Hosted By
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0d5f4e] to-[#6b9d89] flex items-center justify-center text-white font-medium">
                      SA
                    </div>
                    <div>
                      <div className="text-base text-gray-900 font-medium">StartupAI</div>
                      <div className="text-sm text-gray-500">Event Organizer</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-xl text-gray-900 mb-6 font-light tracking-tight">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  <TagPill text="Pitch Event" active />
                  <TagPill text="Early Stage" />
                  <TagPill text="Networking" />
                  <TagPill text="Investors" />
                  <TagPill text="San Francisco" />
                  <TagPill text="Free" active />
                  <TagPill text="In-Person" />
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-xl text-gray-900 mb-6 font-light tracking-tight">
                  Location
                </h3>
                <div className="space-y-4">
                  <div className="text-base text-gray-900 font-medium">
                    Mission Bay Conference Center
                  </div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    1675 Owens Street<br />
                    San Francisco, CA 94158
                  </div>
                  <div className="w-full h-48 bg-[#f5f5f3] rounded-2xl flex items-center justify-center border border-gray-200">
                    <MapPin className="w-8 h-8 text-gray-400" />
                  </div>
                  <button className="w-full px-4 py-3 bg-[#fafaf8] border border-gray-200 text-gray-700 rounded-xl hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors text-sm">
                    View on Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-gradient-to-br from-[#f5f5f3] to-[#e8f4f0] py-24 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl text-gray-900 mb-6 font-light tracking-tight">
            Hosting your own event?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Create and manage demo days, pitch nights, and networking events with AI-powered tools designed for startup communities.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate?.('events')}
              className="group px-10 py-5 bg-[#0d5f4e] text-white rounded-2xl hover:bg-[#0a4a3b] transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg font-medium inline-flex items-center gap-3"
            >
              Create Your Event
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-all duration-300 text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#fafaf8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Product</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Events</h3>
              <ul className="space-y-4">
                <li>
                  <button 
                    onClick={() => onNavigate?.('events-discover')}
                    className="text-sm text-[#0d5f4e] hover:text-[#6b9d89] transition-colors"
                  >
                    Discover Events
                  </button>
                </li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Create Event</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Manage Events</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Resources</h3>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-6 font-light tracking-tight">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4 font-light">
                Get updates on events and features.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0d5f4e] focus:ring-2 focus:ring-[#0d5f4e]/20 text-sm"
                />
                <button className="px-5 py-2.5 bg-[#0d5f4e] text-white rounded-xl hover:bg-[#0a4a3b] transition-colors text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-sm text-gray-500">© 2026 StartupAI. All rights reserved.</p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-[#0d5f4e] transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Detail Item Component
function DetailItem({ 
  icon, 
  label, 
  value, 
  sublabel, 
  highlight 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: string; 
  sublabel: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
        highlight ? 'bg-[#0d5f4e] text-white' : 'bg-[#f5f5f3] text-gray-600'
      }`}>
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">{label}</div>
        <div className={`text-base font-medium mb-1 ${
          highlight ? 'text-[#0d5f4e]' : 'text-gray-900'
        }`}>
          {value}
        </div>
        <div className="text-xs text-gray-500">{sublabel}</div>
      </div>
    </div>
  );
}

// Tag Pill Component
function TagPill({ text, active }: { text: string; active?: boolean }) {
  return (
    <span className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
      active 
        ? 'bg-[#0d5f4e] text-white shadow-md' 
        : 'bg-[#f5f5f3] text-gray-700 hover:bg-gray-200'
    }`}>
      {text}
    </span>
  );
}

// Expectation Item Component
function ExpectationItem({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) {
  return (
    <div className="flex items-start gap-5 p-6 bg-[#fafaf8] rounded-2xl border border-gray-100 hover:border-[#0d5f4e]/30 hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-[#0d5f4e]/10 flex items-center justify-center text-[#0d5f4e] flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-base text-gray-900 font-medium mb-2">{title}</h4>
        <p className="text-sm text-gray-600 leading-relaxed font-light">{description}</p>
      </div>
    </div>
  );
}

// Schedule Item Component
function ScheduleItem({ time, title }: { time: string; title: string }) {
  return (
    <div className="flex items-center gap-6 p-5 bg-[#fafaf8] rounded-2xl border border-gray-100">
      <div className="text-sm text-[#0d5f4e] font-medium min-w-[80px]">
        {time}
      </div>
      <div className="text-base text-gray-900 font-light">
        {title}
      </div>
    </div>
  );
}

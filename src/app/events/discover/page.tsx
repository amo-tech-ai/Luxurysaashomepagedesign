import { Search, Calendar, MapPin, DollarSign, Clock, Filter, Star, Users } from 'lucide-react';

interface EventsDiscoverPageProps {
  onNavigate?: (route: string) => void;
}

export default function EventsDiscoverPage({ onNavigate }: EventsDiscoverPageProps) {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => onNavigate?.('home')}
              className="text-sm text-gray-600 hover:text-[#0d5f4e] transition-colors"
            >
              ← Back to Home
            </button>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl text-gray-900 mb-4 font-light tracking-tight">
              Discover Startup Events
            </h1>
            <p className="text-lg text-gray-600 mb-8 font-light">
              Find demo days, pitch nights, conferences, and networking opportunities.
            </p>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search events by name, location, or keyword..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#0d5f4e] focus:ring-2 focus:ring-[#0d5f4e]/10 transition-all"
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center justify-center gap-3">
              <button className="px-5 py-2 bg-[#0d5f4e] text-white rounded-full text-sm hover:bg-[#0a4a3b] transition-colors">
                All Events
              </button>
              <button className="px-5 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors">
                Hosted Events
              </button>
              <button className="px-5 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors">
                Industry Events
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Row */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-4 gap-6">
          <StatCard number="247" label="Total Events" />
          <StatCard number="124" label="Upcoming" accent />
          <StatCard number="89" label="Hosted Events" />
          <StatCard number="158" label="Industry Events" />
        </div>
      </section>

      {/* Filter Bar */}
      <section className="max-w-7xl mx-auto px-6 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-[#0d5f4e] transition-colors">
              <Calendar className="w-4 h-4" />
              Date
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-[#0d5f4e] transition-colors">
              <Filter className="w-4 h-4" />
              Event Type
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-[#0d5f4e] transition-colors">
              <DollarSign className="w-4 h-4" />
              Ticket Cost
            </button>
          </div>
          <div className="text-sm text-gray-600 font-light">
            Showing 247 events
          </div>
        </div>
      </section>

      {/* Event Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-3 gap-6">
          <EventCard
            date="Feb 15"
            year="2026"
            type="Pitch Night"
            title="SF Startup Pitch Night"
            description="Present your startup to investors and get real-time feedback in an intimate setting."
            location="San Francisco, CA"
            price="Free"
            rating={4.8}
            attendees={120}
            featured
            onNavigate={onNavigate}
          />
          <EventCard
            date="Feb 18"
            year="2026"
            type="Demo Day"
            title="Y Combinator Demo Day W26"
            description="Watch the latest batch of YC startups present their companies to investors."
            location="Mountain View, CA"
            price="$50"
            rating={4.9}
            attendees={500}
          />
          <EventCard
            date="Feb 20"
            year="2026"
            type="Networking"
            title="AI Founders Meetup"
            description="Connect with fellow AI startup founders and share insights on building in AI."
            location="Palo Alto, CA"
            price="Free"
            rating={4.7}
            attendees={85}
          />
          <EventCard
            date="Feb 22"
            year="2026"
            type="Conference"
            title="SaaS Growth Summit 2026"
            description="Learn from SaaS leaders about scaling, product-market fit, and growth strategies."
            location="Austin, TX"
            price="$299"
            rating={4.6}
            attendees={350}
          />
          <EventCard
            date="Feb 25"
            year="2026"
            type="Workshop"
            title="Pitch Deck Masterclass"
            description="Build a compelling pitch deck with expert guidance from successful founders."
            location="Online"
            price="$99"
            rating={4.8}
            attendees={200}
            featured
            onNavigate={onNavigate}
          />
          <EventCard
            date="Feb 27"
            year="2026"
            type="Demo Day"
            title="Techstars Demo Day"
            description="Graduating startups from Techstars present to investors and the community."
            location="Boston, MA"
            price="Free"
            rating={4.9}
            attendees={450}
          />
          <EventCard
            date="Mar 1"
            year="2026"
            type="Pitch Night"
            title="NYC Early Stage Pitch Night"
            description="Early-stage startups pitch to angel investors and VCs in New York."
            location="New York, NY"
            price="$25"
            rating={4.5}
            attendees={150}
          />
          <EventCard
            date="Mar 5"
            year="2026"
            type="Networking"
            title="Women in Tech Founders"
            description="Networking event for women founders to connect, share, and support each other."
            location="Seattle, WA"
            price="Free"
            rating={4.9}
            attendees={100}
          />
          <EventCard
            date="Mar 8"
            year="2026"
            type="Conference"
            title="Climate Tech Summit"
            description="Explore the future of climate technology with founders and investors in the space."
            location="San Diego, CA"
            price="$199"
            rating={4.7}
            attendees={280}
          />
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors">
            Load More Events
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#f5f5f3] to-[#e8f4f0] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-gray-900 mb-4 font-light">
            Hosting your own event?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-light">
            Create and manage demo days, pitch nights, and networking events with AI-powered tools.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate?.('events')}
              className="px-8 py-4 bg-[#0d5f4e] text-white rounded-2xl hover:bg-[#0a4a3b] transition-all hover:shadow-lg"
            >
              Create Your Event
            </button>
            <button className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-2xl hover:border-[#0d5f4e] hover:text-[#0d5f4e] transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-[#fafaf8] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-lg mb-4 font-light">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Features</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Pricing</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">How it Works</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Dashboard</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4 font-light">Events</h3>
              <ul className="space-y-3">
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
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Event Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4 font-light">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">API</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4 font-light">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-[#0d5f4e] transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex items-center justify-between">
            <p className="text-sm text-gray-500">© 2026 StartupAI. All rights reserved.</p>
            <div className="flex items-center gap-6">
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

// Stat Card Component
function StatCard({ number, label, accent }: { number: string; label: string; accent?: boolean }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
      <div className={`text-3xl mb-1 ${accent ? 'text-[#0d5f4e]' : 'text-gray-900'}`}>
        {number}
      </div>
      <div className="text-sm text-gray-600 font-light">{label}</div>
    </div>
  );
}

// Event Card Component
function EventCard({
  date,
  year,
  type,
  title,
  description,
  location,
  price,
  rating,
  attendees,
  featured,
  onNavigate,
}: {
  date: string;
  year: string;
  type: string;
  title: string;
  description: string;
  location: string;
  price: string;
  rating: number;
  attendees: number;
  featured?: boolean;
  onNavigate?: (route: string) => void;
}) {
  return (
    <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-gray-300 transition-all duration-300">
      {/* Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-4">
          {/* Date Badge */}
          <div className="text-center">
            <div className="text-2xl text-gray-900 leading-none">{date}</div>
            <div className="text-xs text-gray-500 mt-1">{year}</div>
          </div>
          
          {/* Type Tag */}
          <span className={`px-3 py-1 rounded-full text-xs ${
            featured 
              ? 'bg-[#0d5f4e] text-white' 
              : 'bg-white border border-[#0d5f4e] text-[#0d5f4e]'
          }`}>
            {type}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl text-gray-900 mb-2 font-light group-hover:text-[#0d5f4e] transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 font-light leading-relaxed">
          {description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="font-light">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span className={`font-light ${price === 'Free' ? 'text-[#0d5f4e]' : ''}`}>
              {price}
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-[#fafaf8] border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Star className="w-3.5 h-3.5 fill-[#0d5f4e] text-[#0d5f4e]" />
            <span className="font-light">{rating}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <Users className="w-3.5 h-3.5" />
            <span className="font-light">{attendees}</span>
          </div>
        </div>
        <button 
          onClick={() => onNavigate?.('event-detail')}
          className="text-xs text-[#0d5f4e] hover:text-[#0a4a3b] transition-colors font-medium"
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
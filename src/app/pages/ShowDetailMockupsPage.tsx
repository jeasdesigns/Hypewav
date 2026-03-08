import { Link } from "react-router";
import { ChevronLeft, Heart, Share2, MapPin, Clock, DollarSign, Users, ExternalLink, Calendar, Music, Info } from "lucide-react";
import { Flame } from "lucide-react";

// Mock show data for mockups
const mockShow = {
  id: "1",
  artist: {
    id: "1",
    name: "Chappell Roan",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
    genres: ["pop", "indie pop", "synth-pop"],
  },
  venue: {
    name: "The Showbox",
    address: "1426 1st Ave, Seattle, WA",
    capacity: "1,100",
    distance: "2.3 mi",
  },
  date: "2026-03-15",
  time: "8:00 PM",
  ticketPrice: "$45-65",
  ticketStatus: "selling-fast" as const,
  image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
  supportingActs: ["Reneé Rapp", "Muna"],
  description: "Join us for an unforgettable night with Chappell Roan, the rising pop sensation bringing her electrifying energy to Seattle. Experience her chart-topping hits live in an intimate venue setting.",
};

export function ShowDetailMockupsPage() {
  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB]">
      {/* Header */}
      <div className="bg-[#13121E] border-b border-[#1A1927] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-[#67E8F9] hover:underline">
              ← Back to Home
            </Link>
            <h1 className="text-2xl font-bold">Show Detail Page Mockups</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <p className="text-[#9CA3AF] text-lg">
            Compare different design approaches for the Show Detail page. Each mockup is displayed in mobile format (430px).
          </p>
        </div>

        {/* Grid of Mockups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Option A: Current Design - Hero with Floating Nav */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#A78BFA]">Option A: Hero First</h2>
              <span className="text-xs bg-[#10B981]/20 text-[#10B981] px-2 py-1 rounded-full">Current</span>
            </div>
            <p className="text-sm text-[#9CA3AF]">Large hero image with floating navigation, genre tags, and scrollable content sections below.</p>
            
            {/* Pros & Cons */}
            <div className="bg-[#13121E] rounded-xl p-4 space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-[#10B981] uppercase tracking-wide mb-2">Pros</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Maximum emotional impact - creates excitement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Industry standard (Spotify, Apple Music)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Modern mobile patterns (floating nav)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Already implemented</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wide mb-2">Cons</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Information below fold - must scroll</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Slower for quick decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Less scannable - content feels buried</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-2xl overflow-hidden border-2 border-[#1A1927]">
              <MockupOptionA show={mockShow} />
            </div>
          </div>

          {/* Option B: Compact Header with Tabs */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#A78BFA]">Option B: Tabbed Navigation</h2>
            <p className="text-sm text-[#9CA3AF]">Compact header with tabbed content sections for organized information browsing.</p>
            
            {/* Pros & Cons */}
            <div className="bg-[#13121E] rounded-xl p-4 space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-[#10B981] uppercase tracking-wide mb-2">Pros</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Organized content prevents overload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Compact header shows key info above fold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Good for returning users (direct access)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wide mb-2">Cons</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Tabs hide content - discoverability issue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Requires extra taps to see all details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Less emotional impact - smaller image</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Possibly overkill for simple show details</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-2xl overflow-hidden border-2 border-[#1A1927]">
              <MockupOptionB show={mockShow} />
            </div>
          </div>

          {/* Option C: Card Stack Layout */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#A78BFA]">Option C: Card Stack</h2>
            <p className="text-sm text-[#9CA3AF]">Modular card-based design with distinct sections for quick scanning.</p>
            
            {/* Pros & Cons */}
            <div className="bg-[#13121E] rounded-xl p-4 space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-[#10B981] uppercase tracking-wide mb-2">Pros</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Excellent scanability - easy to skim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Clear visual hierarchy with cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Highly modular and flexible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Accessibility-friendly with clear boundaries</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wide mb-2">Cons</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Visual monotony - cards can feel repetitive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Less dramatic emotional impact</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>More scrolling - each card adds height</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Image feels secondary to content</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-2xl overflow-hidden border-2 border-[#1A1927]">
              <MockupOptionC show={mockShow} />
            </div>
          </div>

          {/* Option D: Minimal with Split Screen */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-[#A78BFA]">Option D: Split Screen</h2>
              <span className="text-xs bg-[#67E8F9]/20 text-[#67E8F9] px-2 py-1 rounded-full font-semibold">Recommended</span>
            </div>
            <p className="text-sm text-[#9CA3AF]">Image pinned to top half, scrollable details below with quick actions.</p>
            
            {/* Pros & Cons */}
            <div className="bg-[#13121E] rounded-xl p-4 space-y-3 border-2 border-[#67E8F9]/30">
              <div>
                <h4 className="text-xs font-semibold text-[#10B981] uppercase tracking-wide mb-2">Pros</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span><strong className="text-[#67E8F9]">Best of both worlds</strong> - visual + info</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>No scrolling for basics - quick grid view</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Modern and innovative approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Persistent context - image stays visible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span><strong className="text-[#67E8F9]">Faster decisions</strong> - ~2 second eval</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wide mb-2">Cons</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Image feels smaller - half screen vs full</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Fixed split - less flexible layout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Could feel cramped on small phones</span>
                  </li>
                </ul>
              </div>
              <div className="pt-2 border-t border-[#67E8F9]/20">
                <p className="text-xs text-[#67E8F9] leading-relaxed">
                  <strong>Why recommended:</strong> Solves real UX problem by showing artist image while reading details. Perfect for quick decision-making during discovery.
                </p>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-2xl overflow-hidden border-2 border-[#67E8F9]/40 shadow-lg shadow-[#67E8F9]/10">
              <MockupOptionD show={mockShow} />
            </div>
          </div>

          {/* Option E: Event Ticket Style */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#A78BFA]">Option E: Ticket Style</h2>
            <p className="text-sm text-[#9CA3AF]">Inspired by physical tickets with tear-off aesthetic and bold typography.</p>
            
            {/* Pros & Cons */}
            <div className="bg-[#13121E] rounded-xl p-4 space-y-3">
              <div>
                <h4 className="text-xs font-semibold text-[#10B981] uppercase tracking-wide mb-2">Pros</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Unique and memorable - strong differentiation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Thematically perfect for concert tickets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>All-in-one design - key info in card</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#10B981] mt-0.5">✓</span>
                    <span>Fun details - playful tear line</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#F59E0B] uppercase tracking-wide mb-2">Cons</h4>
                <ul className="space-y-1.5 text-xs text-[#9CA3AF]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Novelty might fade with repeated use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Less flexible for varying content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Non-standard - unfamiliar pattern</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#F59E0B] mt-0.5">✗</span>
                    <span>Harder to scan - dense information</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-2xl overflow-hidden border-2 border-[#1A1927]">
              <MockupOptionE show={mockShow} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Option A: Current Design - Hero First
function MockupOptionA({ show }: { show: typeof mockShow }) {
  return (
    <div className="max-w-[430px] mx-auto bg-[#09090F] h-[932px] overflow-y-auto">
      {/* Hero */}
      <div className="relative h-[420px]">
        <img src={show.image} alt={show.artist.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#09090F]"></div>
        
        {/* Nav */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="w-11 h-11 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="flex gap-2">
            <div className="w-11 h-11 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="w-11 h-11 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#09090F] via-[#09090F]/95 to-transparent">
          <div className="flex gap-2 mb-3">
            {show.artist.genres.slice(0, 2).map(genre => (
              <span key={genre} className="px-3 py-1 bg-[#A78BFA]/20 text-[#A78BFA] text-xs font-medium rounded-full border border-[#A78BFA]/30">
                {genre}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-bold mb-2">{show.artist.name}</h1>
          <p className="text-[#9CA3AF] text-sm">with {show.supportingActs[0]}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-24">
        <div className="bg-[#13121E] rounded-2xl p-5 mb-4 -mt-4">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-[#A78BFA]" />
            <div>
              <div className="text-xs text-[#9CA3AF] uppercase">Date & Time</div>
              <div className="font-semibold">March 15, 2026 • 8:00 PM</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-[#67E8F9]" />
            <div>
              <div className="text-xs text-[#9CA3AF] uppercase">Venue</div>
              <div className="font-semibold">{show.venue.name}</div>
            </div>
          </div>
        </div>

        <div className="bg-[#13121E] rounded-2xl p-5">
          <h3 className="font-semibold mb-3">About This Show</h3>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Join us for an unforgettable night with Chappell Roan...
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#09090F]/95 backdrop-blur-xl border-t border-[#13121E] p-4 max-w-[430px] mx-auto">
        <button className="w-full bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] text-[#09090F] py-4 rounded-full font-semibold">
          Get Tickets — $45-65
        </button>
      </div>
    </div>
  );
}

// Option B: Tabbed Navigation
function MockupOptionB({ show }: { show: typeof mockShow }) {
  return (
    <div className="max-w-[430px] mx-auto bg-[#09090F] h-[932px] overflow-y-auto">
      {/* Compact Header */}
      <div className="sticky top-0 z-20 bg-[#09090F]">
        <div className="relative h-[280px]">
          <img src={show.image} alt={show.artist.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#09090F]"></div>
          
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="w-10 h-10 bg-[#09090F]/90 rounded-full flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </div>
            <div className="flex gap-2">
              <div className="w-10 h-10 bg-[#09090F]/90 rounded-full flex items-center justify-center">
                <Share2 className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 bg-[#09090F]/90 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-2xl font-bold mb-1">{show.artist.name}</h1>
            <p className="text-sm text-[#9CA3AF]">{show.venue.name} • March 15</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#13121E]">
          <button className="flex-1 py-3 text-sm font-medium text-[#67E8F9] border-b-2 border-[#67E8F9]">Details</button>
          <button className="flex-1 py-3 text-sm font-medium text-[#9CA3AF]">Lineup</button>
          <button className="flex-1 py-3 text-sm font-medium text-[#9CA3AF]">Venue</button>
        </div>
      </div>

      {/* Tabbed Content */}
      <div className="px-4 py-6 pb-24">
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-[#13121E] rounded-xl">
            <Calendar className="w-5 h-5 text-[#A78BFA]" />
            <div className="flex-1">
              <div className="text-xs text-[#9CA3AF]">Date</div>
              <div className="font-semibold">Sunday, March 15, 2026</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-4 bg-[#13121E] rounded-xl">
            <Clock className="w-5 h-5 text-[#67E8F9]" />
            <div className="flex-1">
              <div className="text-xs text-[#9CA3AF]">Doors</div>
              <div className="font-semibold">8:00 PM</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-[#13121E] rounded-xl">
            <DollarSign className="w-5 h-5 text-[#10B981]" />
            <div className="flex-1">
              <div className="text-xs text-[#9CA3AF]">Price</div>
              <div className="font-semibold">$45-65</div>
            </div>
            <Flame className="w-4 h-4 text-red-500 fill-orange-500" />
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold mb-3">About</h3>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">{show.description}</p>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#09090F] border-t border-[#13121E] p-4 max-w-[430px] mx-auto">
        <button className="w-full bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] text-[#09090F] py-4 rounded-full font-semibold">
          Get Tickets
        </button>
      </div>
    </div>
  );
}

// Option C: Card Stack
function MockupOptionC({ show }: { show: typeof mockShow }) {
  return (
    <div className="max-w-[430px] mx-auto bg-[#09090F] h-[932px] overflow-y-auto">
      {/* Simple Header */}
      <div className="sticky top-0 z-20 bg-[#09090F]/95 backdrop-blur-xl border-b border-[#13121E]">
        <div className="flex items-center justify-between p-4">
          <div className="w-10 h-10 bg-[#13121E] rounded-full flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-[#13121E] rounded-full flex items-center justify-center">
              <Share2 className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 bg-[#13121E] rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4 pb-24 space-y-4">
        {/* Image Card */}
        <div className="rounded-2xl overflow-hidden">
          <img src={show.image} alt={show.artist.name} className="w-full h-[300px] object-cover" />
        </div>

        {/* Artist Card */}
        <div className="bg-[#13121E] rounded-2xl p-5">
          <div className="flex gap-2 mb-3">
            {show.artist.genres.slice(0, 3).map(genre => (
              <span key={genre} className="px-2 py-1 bg-[#A78BFA]/20 text-[#A78BFA] text-xs rounded-full">
                {genre}
              </span>
            ))}
          </div>
          <h1 className="text-2xl font-bold mb-1">{show.artist.name}</h1>
          <p className="text-sm text-[#9CA3AF]">with {show.supportingActs.join(", ")}</p>
        </div>

        {/* Event Info Card */}
        <div className="bg-[#13121E] rounded-2xl p-5 space-y-4">
          <h3 className="font-semibold text-sm uppercase tracking-wide text-[#9CA3AF]">Event Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-[#9CA3AF] mb-1">Date</div>
              <div className="font-semibold text-sm">Mar 15, 2026</div>
            </div>
            <div>
              <div className="text-xs text-[#9CA3AF] mb-1">Time</div>
              <div className="font-semibold text-sm">8:00 PM</div>
            </div>
            <div>
              <div className="text-xs text-[#9CA3AF] mb-1">Venue</div>
              <div className="font-semibold text-sm">{show.venue.name}</div>
            </div>
            <div>
              <div className="text-xs text-[#9CA3AF] mb-1">Price</div>
              <div className="font-semibold text-sm text-[#10B981]">{show.ticketPrice}</div>
            </div>
          </div>
        </div>

        {/* Description Card */}
        <div className="bg-[#13121E] rounded-2xl p-5">
          <h3 className="font-semibold mb-3">About This Show</h3>
          <p className="text-sm text-[#9CA3AF] leading-relaxed">{show.description}</p>
        </div>

        {/* Venue Card */}
        <div className="bg-[#13121E] rounded-2xl p-5">
          <h3 className="font-semibold mb-3">Venue</h3>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#67E8F9] mt-0.5" />
            <div>
              <div className="font-semibold mb-1">{show.venue.name}</div>
              <div className="text-sm text-[#9CA3AF] mb-2">{show.venue.address}</div>
              <div className="text-sm text-[#67E8F9]">{show.venue.distance} away</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#09090F] border-t border-[#13121E] p-4 max-w-[430px] mx-auto">
        <button className="w-full bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] text-[#09090F] py-4 rounded-full font-semibold flex items-center justify-center gap-2">
          <ExternalLink className="w-5 h-5" />
          Get Tickets — {show.ticketPrice}
        </button>
      </div>
    </div>
  );
}

// Option D: Split Screen
function MockupOptionD({ show }: { show: typeof mockShow }) {
  return (
    <div className="max-w-[430px] mx-auto bg-[#09090F] h-[932px] overflow-hidden flex flex-col">
      {/* Fixed Top Half - Image */}
      <div className="relative h-[466px] flex-shrink-0">
        <img src={show.image} alt={show.artist.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent"></div>
        
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <div className="w-11 h-11 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="flex gap-2">
            <div className="w-11 h-11 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </div>
            <div className="w-11 h-11 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h1 className="text-3xl font-bold mb-2 drop-shadow-lg">{show.artist.name}</h1>
          <div className="flex gap-2">
            {show.artist.genres.slice(0, 2).map(genre => (
              <span key={genre} className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scrollable Bottom Half - Details */}
      <div className="flex-1 overflow-y-auto bg-[#09090F] rounded-t-3xl -mt-6 relative z-10">
        <div className="px-5 pt-6 pb-6 space-y-5">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[#13121E] rounded-xl p-3 text-center">
              <Calendar className="w-5 h-5 text-[#A78BFA] mx-auto mb-1" />
              <div className="text-xs text-[#9CA3AF]">Date</div>
              <div className="text-sm font-semibold mt-0.5">Mar 15</div>
            </div>
            <div className="bg-[#13121E] rounded-xl p-3 text-center">
              <Clock className="w-5 h-5 text-[#67E8F9] mx-auto mb-1" />
              <div className="text-xs text-[#9CA3AF]">Time</div>
              <div className="text-sm font-semibold mt-0.5">8:00 PM</div>
            </div>
            <div className="bg-[#13121E] rounded-xl p-3 text-center">
              <DollarSign className="w-5 h-5 text-[#10B981] mx-auto mb-1" />
              <div className="text-xs text-[#9CA3AF]">Price</div>
              <div className="text-sm font-semibold mt-0.5">$45-65</div>
            </div>
          </div>

          {/* Venue */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#67E8F9]" />
              Venue
            </h3>
            <div className="bg-[#13121E] rounded-xl p-4">
              <div className="font-semibold mb-1">{show.venue.name}</div>
              <div className="text-sm text-[#9CA3AF]">{show.venue.address}</div>
              <div className="text-sm text-[#67E8F9] mt-2">{show.venue.distance} away • Get Directions →</div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#A78BFA]" />
              About
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">{show.description}</p>
          </div>

          {/* Lineup */}
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Music className="w-4 h-4 text-[#A78BFA]" />
              Lineup
            </h3>
            <div className="space-y-2">
              <div className="bg-[#13121E] rounded-xl p-3">
                <div className="font-semibold">{show.artist.name}</div>
                <div className="text-xs text-[#A78BFA]">Headliner</div>
              </div>
              {show.supportingActs.map((act, i) => (
                <div key={i} className="bg-[#13121E] rounded-xl p-3">
                  <div className="font-semibold">{act}</div>
                  <div className="text-xs text-[#9CA3AF]">Support</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] text-[#09090F] py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg">
            <ExternalLink className="w-5 h-5" />
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
}

// Option E: Ticket Style
function MockupOptionE({ show }: { show: typeof mockShow }) {
  return (
    <div className="max-w-[430px] mx-auto bg-[#09090F] h-[932px] overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-[#09090F] border-b border-[#13121E]">
        <div className="flex items-center justify-between p-4">
          <div className="w-10 h-10 bg-[#13121E] rounded-full flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </div>
          <div className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Event Ticket</div>
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-[#13121E] rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-6 pb-24">
        {/* Ticket Card */}
        <div className="bg-gradient-to-br from-[#13121E] to-[#1A1927] rounded-3xl overflow-hidden border border-[#A78BFA]/30 shadow-2xl shadow-[#A78BFA]/10">
          {/* Top Section - Artist Image */}
          <div className="relative h-[280px]">
            <img src={show.image} alt={show.artist.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#13121E]"></div>
            
            {/* Status Badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <Flame className="w-3.5 h-3.5 text-white fill-orange-300" />
              <span className="text-xs font-bold text-white">SELLING FAST</span>
            </div>
          </div>

          {/* Tear Line */}
          <div className="relative h-6 bg-[#13121E]">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-[#A78BFA]/20"></div>
            </div>
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#09090F] rounded-full"></div>
            <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#09090F] rounded-full"></div>
          </div>

          {/* Bottom Section - Details */}
          <div className="p-6 bg-[#13121E]">
            {/* Artist Name - Large */}
            <h1 className="text-4xl font-bold mb-2 tracking-tight">{show.artist.name}</h1>
            <div className="flex gap-2 mb-6">
              {show.artist.genres.slice(0, 2).map(genre => (
                <span key={genre} className="text-xs text-[#A78BFA] uppercase tracking-wider font-medium">
                  {genre}
                </span>
              ))}
            </div>

            {/* Event Info - Grid */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start justify-between pb-4 border-b border-[#1A1927]">
                <div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-1">Date & Time</div>
                  <div className="font-bold text-lg">March 15, 2026</div>
                  <div className="text-sm text-[#9CA3AF]">Doors at 8:00 PM</div>
                </div>
                <Calendar className="w-6 h-6 text-[#A78BFA]" />
              </div>

              <div className="flex items-start justify-between pb-4 border-b border-[#1A1927]">
                <div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-1">Venue</div>
                  <div className="font-bold text-lg">{show.venue.name}</div>
                  <div className="text-sm text-[#9CA3AF]">{show.venue.address}</div>
                </div>
                <MapPin className="w-6 h-6 text-[#67E8F9]" />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-1">Ticket Price</div>
                  <div className="font-bold text-2xl text-[#10B981]">{show.ticketPrice}</div>
                </div>
                <DollarSign className="w-6 h-6 text-[#10B981]" />
              </div>
            </div>

            {/* Supporting Acts */}
            <div className="mb-6">
              <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mb-2">With Special Guests</div>
              <div className="text-sm font-medium text-[#F1F0FB]">{show.supportingActs.join(" • ")}</div>
            </div>

            {/* CTA */}
            <button className="w-full bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] text-[#09090F] py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-[#A78BFA]/30">
              <ExternalLink className="w-5 h-5" />
              Purchase Tickets
            </button>
          </div>
        </div>

        {/* Additional Info Below */}
        <div className="mt-6 bg-[#13121E] rounded-2xl p-5">
          <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-[#9CA3AF]">About This Event</h3>
          <p className="text-sm text-[#F1F0FB] leading-relaxed">{show.description}</p>
        </div>
      </div>
    </div>
  );
}
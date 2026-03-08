import { Link } from "react-router";
import { ArrowLeft, Flame, MapPin, Clock, Music, Search, Map, Heart, User, ChevronLeft, Share2, Play, Users } from "lucide-react";

export function PageMockupsPage() {
  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB]">
      {/* Header */}
      <header className="border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <Link 
            to="/design-system"
            className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#F1F0FB] mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Overview
          </Link>
          <div>
            <div className="text-xs text-[#A78BFA] tracking-wider font-medium mb-2">
              PAGE MOCKUPS
            </div>
            <h1 className="text-4xl font-bold text-[#F1F0FB] mb-3">Annotated Screen Designs</h1>
            <p className="text-[#9CA3AF]">
              Complete page layouts with detailed annotations and measurements
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* DISCOVER PAGE */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Discover Page (Feed)</h2>
            <p className="text-[#9CA3AF] mb-6">
              Main landing page with genre filters and scrollable show feed
            </p>
          </div>

          {/* Mockup with Annotations */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Visual Mockup */}
            <div>
              <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Visual Design</div>
              <div className="bg-[#13121E] rounded-2xl p-6 border-2 border-[#A78BFA]/20">
                <div className="max-w-[393px] mx-auto bg-[#09090F] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Status Bar Placeholder */}
                  <div className="h-12 bg-gradient-to-b from-black/20 to-transparent"></div>
                  
                  {/* Header */}
                  <div className="border-b border-[#13121E] bg-[#09090F]/95 px-4 pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex-1">
                        <div className="text-[10px] text-[#A78BFA] tracking-wider font-medium">
                          GREATER SEATTLE
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] rounded-md flex items-center justify-center">
                            <Music className="w-3 h-3 text-[#09090F]" />
                          </div>
                          <h1 className="text-lg font-bold text-[#F1F0FB]">Hype.Wav</h1>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="w-9 h-9 rounded-full bg-[#13121E] flex items-center justify-center">
                          <Search className="w-4 h-4 text-[#9CA3AF]" />
                        </button>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-[#13121E] flex items-center justify-center text-[10px] font-medium text-[#F1F0FB]">
                            ME
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Genre Filter */}
                  <div className="px-4 py-3 border-b border-[#13121E]">
                    <div className="flex gap-2 overflow-x-auto">
                      <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#A78BFA] text-[#09090F] flex-shrink-0">All</button>
                      <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#13121E] text-[#9CA3AF] flex-shrink-0">Rock</button>
                      <button className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#13121E] text-[#9CA3AF] flex-shrink-0">Electronic</button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 pt-4 pb-20">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-sm font-bold text-[#F1F0FB]">THIS WEEK</h2>
                    </div>

                    {/* Show Card 1 */}
                    <div className="relative rounded-xl overflow-hidden h-32 bg-gradient-to-b from-transparent to-[#09090F] mb-3">
                      <div className="absolute inset-0">
                        <div className="w-full h-full bg-gradient-to-br from-[#A78BFA] to-[#67E8F9]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
                      </div>
                      <div className="absolute top-2 right-2 bg-[#A78BFA]/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
                        <Flame className="w-3 h-3" />
                        94
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-base font-bold text-[#F1F0FB] mb-0.5">Artist Name</h3>
                        <div className="flex items-center gap-2 text-[10px] text-[#9CA3AF]">
                          <div className="flex items-center gap-0.5">
                            <MapPin className="w-2.5 h-2.5" />
                            <span>Venue</span>
                          </div>
                          <div className="flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" />
                            <span>Fri, Mar 7</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Show Card 2 */}
                    <div className="relative rounded-xl overflow-hidden h-32 bg-gradient-to-b from-transparent to-[#09090F]">
                      <div className="absolute inset-0">
                        <div className="w-full h-full bg-gradient-to-br from-[#67E8F9] to-[#10B981]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
                      </div>
                      <div className="absolute top-2 right-2 bg-[#A78BFA]/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
                        <Flame className="w-3 h-3" />
                        88
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-base font-bold text-[#F1F0FB] mb-0.5">Another Artist</h3>
                        <div className="flex items-center gap-2 text-[10px] text-[#9CA3AF]">
                          <div className="flex items-center gap-0.5">
                            <MapPin className="w-2.5 h-2.5" />
                            <span>Venue</span>
                          </div>
                          <div className="flex items-center gap-0.5">
                            <Clock className="w-2.5 h-2.5" />
                            <span>Sat, Mar 8</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className="bg-[#09090F]/95 border-t border-[#13121E] px-6">
                    <div className="flex justify-between items-center h-16 pb-4">
                      <div className="flex flex-col items-center gap-0.5">
                        <Flame className="w-5 h-5 text-[#A78BFA]" />
                        <span className="text-[9px] text-[#A78BFA]">Discover</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <Map className="w-5 h-5 text-[#9CA3AF]" />
                        <span className="text-[9px] text-[#9CA3AF]">Map</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <Heart className="w-5 h-5 text-[#9CA3AF]" />
                        <span className="text-[9px] text-[#9CA3AF]">Saved</span>
                      </div>
                      <div className="flex flex-col items-center gap-0.5">
                        <User className="w-5 h-5 text-[#9CA3AF]" />
                        <span className="text-[9px] text-[#9CA3AF]">Profile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Annotations */}
            <div>
              <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Key Measurements</div>
              <div className="space-y-6">
                {/* Page Structure */}
                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Page Structure</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Total Canvas</span>
                      <span className="font-mono text-[#F1F0FB]">393px × 852px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Status Bar</span>
                      <span className="font-mono text-[#F1F0FB]">48px height</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Header Height</span>
                      <span className="font-mono text-[#F1F0FB]">~88px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Filter Bar Height</span>
                      <span className="font-mono text-[#F1F0FB]">~48px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Bottom Nav Height</span>
                      <span className="font-mono text-[#F1F0FB]">80px (inc. safe area)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Scrollable Area</span>
                      <span className="font-mono text-[#F1F0FB]">~636px</span>
                    </div>
                  </div>
                </div>

                {/* Content Spacing */}
                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Content Spacing</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Horizontal Padding</span>
                      <span className="font-mono text-[#F1F0FB]">16px (each side)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Section Header Margin</span>
                      <span className="font-mono text-[#F1F0FB]">16px top, 12px bottom</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Show Card Gap</span>
                      <span className="font-mono text-[#F1F0FB]">12px between cards</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Bottom Clearance</span>
                      <span className="font-mono text-[#F1F0FB]">80px (for nav)</span>
                    </div>
                  </div>
                </div>

                {/* Show Card Specs */}
                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Show Card (in Feed)</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Width</span>
                      <span className="font-mono text-[#F1F0FB]">361px (100% - 32px)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Height</span>
                      <span className="font-mono text-[#F1F0FB]">128px (compact)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Content Padding</span>
                      <span className="font-mono text-[#F1F0FB]">12px (bottom/sides)</span>
                    </div>
                  </div>
                </div>

                {/* Color Usage */}
                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Color Mapping</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: '#09090F' }}></div>
                      <span className="text-[#9CA3AF]">Page Background</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: '#13121E' }}></div>
                      <span className="text-[#9CA3AF]">Filter Pills (inactive)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: '#A78BFA' }}></div>
                      <span className="text-[#9CA3AF]">Active State, Heat Badges</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: '#F1F0FB' }}></div>
                      <span className="text-[#9CA3AF]">Primary Text</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded" style={{ backgroundColor: '#9CA3AF' }}></div>
                      <span className="text-[#9CA3AF]">Metadata, Icons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SHOW DETAIL PAGE */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Show Detail Page</h2>
            <p className="text-[#9CA3AF] mb-6">
              Full-screen detail view with event information and ticket CTA
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Visual Mockup */}
            <div>
              <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Visual Design</div>
              <div className="bg-[#13121E] rounded-2xl p-6 border-2 border-[#67E8F9]/20">
                <div className="max-w-[393px] mx-auto bg-[#09090F] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Hero Section */}
                  <div className="relative h-64">
                    <div className="absolute inset-0">
                      <div className="w-full h-full bg-gradient-to-br from-[#A78BFA] to-[#67E8F9]"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#09090F]"></div>
                    </div>
                    
                    {/* Nav */}
                    <div className="absolute top-12 left-0 right-0 flex items-center justify-between px-4">
                      <button className="w-9 h-9 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <div className="flex gap-2">
                        <button className="w-9 h-9 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-9 h-9 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Event Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-[#A78BFA]/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1 mb-2">
                        <Flame className="w-3 h-3" /> 94 Heat Score
                      </div>
                      <h1 className="text-2xl font-bold mb-1">Artist Name</h1>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 py-4 space-y-4">
                    {/* Details Card */}
                    <div className="bg-[#13121E] rounded-xl p-4">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <div className="text-[#9CA3AF] mb-1">DATE & TIME</div>
                          <div className="font-semibold">Friday, Mar 7</div>
                          <div className="text-[#9CA3AF]">8:00 PM</div>
                        </div>
                        <div>
                          <div className="text-[#9CA3AF] mb-1">VENUE</div>
                          <div className="font-semibold">The Crocodile</div>
                          <div className="text-[#67E8F9] text-xs">0.5 mi away</div>
                        </div>
                      </div>
                    </div>

                    {/* Lineup */}
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Lineup</h3>
                      <div className="bg-[#13121E] rounded-lg p-3 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#A78BFA] to-[#67E8F9]"></div>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">Artist Name</div>
                          <div className="text-xs text-[#9CA3AF]">Headliner</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fixed CTA */}
                  <div className="bg-[#09090F] border-t border-[#13121E] p-4">
                    <button className="w-full bg-[#A78BFA] text-[#09090F] py-3 rounded-full font-semibold text-sm">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Annotations */}
            <div>
              <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Key Measurements</div>
              <div className="space-y-6">
                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Hero Section</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Hero Height</span>
                      <span className="font-mono text-[#F1F0FB]">256px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Nav Top Margin</span>
                      <span className="font-mono text-[#F1F0FB]">48px (safe area)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Nav Button Size</span>
                      <span className="font-mono text-[#F1F0FB]">36px × 36px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Content Padding</span>
                      <span className="font-mono text-[#F1F0FB]">16px (bottom)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Detail Cards</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Card Padding</span>
                      <span className="font-mono text-[#F1F0FB]">16px (all sides)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Grid Gap</span>
                      <span className="font-mono text-[#F1F0FB]">16px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Card Gap</span>
                      <span className="font-mono text-[#F1F0FB]">16px (between)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Fixed CTA Bar</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Position</span>
                      <span className="font-mono text-[#F1F0FB]">Fixed bottom</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Padding</span>
                      <span className="font-mono text-[#F1F0FB]">16px + 24px bottom safe</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Button Height</span>
                      <span className="font-mono text-[#F1F0FB]">48px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Button Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (full)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Typography</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Artist Name (h1)</span>
                      <span className="font-mono text-[#F1F0FB]">24px / Bold</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Section Headers</span>
                      <span className="font-mono text-[#F1F0FB]">14px / Semibold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Metadata Labels</span>
                      <span className="font-mono text-[#F1F0FB]">12px / Regular</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ARTIST PROFILE PAGE */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Artist Profile Page</h2>
            <p className="text-[#9CA3AF] mb-6">
              Artist biography, top tracks, and upcoming shows
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Visual Mockup */}
            <div>
              <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Visual Design</div>
              <div className="bg-[#13121E] rounded-2xl p-6 border-2 border-[#10B981]/20">
                <div className="max-w-[393px] mx-auto bg-[#09090F] rounded-2xl overflow-hidden shadow-2xl">
                  {/* Hero */}
                  <div className="relative h-48">
                    <div className="absolute inset-0">
                      <div className="w-full h-full bg-gradient-to-br from-[#67E8F9] to-[#10B981]"></div>
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-[#09090F]"></div>
                    </div>
                    
                    {/* Nav */}
                    <div className="absolute top-12 left-0 right-0 flex items-center justify-between px-4">
                      <button className="w-9 h-9 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <div className="flex gap-2">
                        <button className="w-9 h-9 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Share2 className="w-4 h-4" />
                        </button>
                        <button className="w-9 h-9 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <Heart className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-4 -mt-8 pb-20">
                    {/* Artist Info Card */}
                    <div className="bg-[#13121E] rounded-xl p-4 mb-4 shadow-xl">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h1 className="text-xl font-bold mb-1">Artist Name</h1>
                          <div className="text-xs text-[#9CA3AF] flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            250K followers
                          </div>
                        </div>
                        <div className="bg-[#A78BFA]/20 text-[#A78BFA] px-2 py-1 rounded text-xs flex items-center gap-1">
                          <Flame className="w-3 h-3" />
                          92
                        </div>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <span className="px-2 py-1 bg-[#A78BFA]/20 text-[#A78BFA] text-[10px] rounded-full">Indie Rock</span>
                        <span className="px-2 py-1 bg-[#A78BFA]/20 text-[#A78BFA] text-[10px] rounded-full">Alternative</span>
                      </div>
                      <p className="text-xs text-[#9CA3AF] leading-relaxed">
                        Seattle-based indie rock band known for energetic performances...
                      </p>
                    </div>

                    {/* Top Tracks */}
                    <div>
                      <h3 className="text-sm font-semibold mb-2">Top Tracks</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 bg-[#13121E] rounded-lg p-2">
                          <div className="w-9 h-9 rounded bg-[#A78BFA]/20 flex items-center justify-center">
                            <Play className="w-4 h-4 text-[#A78BFA]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold truncate">Track Name</div>
                            <div className="text-[10px] text-[#9CA3AF]">12.5M plays</div>
                          </div>
                          <div className="text-[10px] text-[#9CA3AF]">3:24</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fixed CTA */}
                  <div className="fixed bottom-0 left-0 right-0 bg-[#09090F] border-t border-[#13121E] p-4">
                    <button className="w-full bg-[#A78BFA] text-[#09090F] py-3 rounded-full font-semibold text-sm flex items-center justify-center gap-2">
                      <Heart className="w-4 h-4" />
                      Follow Artist
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Annotations */}
            <div>
              <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Key Measurements</div>
              <div className="space-y-6">
                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Hero Image</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Height</span>
                      <span className="font-mono text-[#F1F0FB]">192px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Gradient Overlay</span>
                      <span className="font-mono text-[#F1F0FB]">black/30 → #09090F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Nav Button Margin</span>
                      <span className="font-mono text-[#F1F0FB]">48px top</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Artist Info Card</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Margin Top (Overlap)</span>
                      <span className="font-mono text-[#F1F0FB]">-32px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Padding</span>
                      <span className="font-mono text-[#F1F0FB]">16px (all sides)</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Shadow</span>
                      <span className="font-mono text-[#F1F0FB]">0 10px 15px black/50</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Track List Item</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Height</span>
                      <span className="font-mono text-[#F1F0FB]">~48px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Padding</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">36px × 36px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap</span>
                      <span className="font-mono text-[#F1F0FB]">12px (between items)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13121E] rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4">Genre Tags</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Padding</span>
                      <span className="font-mono text-[#F1F0FB]">8px × 4px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Font Size</span>
                      <span className="font-mono text-[#F1F0FB]">10px</span>
                    </div>
                    <div className="flex justify-between border-b border-[#09090F] pb-2">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (full)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap Between</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

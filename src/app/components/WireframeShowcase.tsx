import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Flame, Search, User, Map, Heart, Music, Calendar, TrendingUp, Filter, ChevronRight, Play, Users, Star } from "lucide-react";
import discoverImage from "figma:asset/8fd0d8c566959dd426b5f026a4051dd6572db051.png";
import colorImage from "figma:asset/92b02a2207c09564edfd55ee65952bbf9f906e7d.png";

const WireframeShowcase = () => {
  const [selectedWireframe, setSelectedWireframe] = useState("option-a");

  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB]">
      {/* Header */}
      <header className="border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-[#09090F]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Hype.Wav Wireframe Concepts</h1>
              <p className="text-sm text-[#9CA3AF]">Greater Seattle Concert Discovery</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Design System Reference */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6 text-[#A78BFA]">Design System Foundation</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-[#13121E] border-[#13121E] overflow-hidden">
              <img src={discoverImage} alt="Current Discover View" className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">Your Current Direction</h3>
                <p className="text-sm text-[#9CA3AF]">Dark theme with heat scores, genre filtering, and full-bleed imagery</p>
              </div>
            </Card>
            <Card className="bg-[#13121E] border-[#13121E] overflow-hidden">
              <img src={colorImage} alt="Color System & Principles" className="w-full" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">WCAG Accessibility Standards</h3>
                <p className="text-sm text-[#9CA3AF]">All colors meet AAA/AA contrast ratios for maximum legibility</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Wireframe Options */}
        <section>
          <h2 className="text-xl font-semibold mb-6 text-[#A78BFA]">Wireframe Concepts</h2>
          
          <Tabs value={selectedWireframe} onValueChange={setSelectedWireframe} className="w-full">
            <TabsList className="bg-[#13121E] border border-[#13121E] mb-8 flex-wrap h-auto gap-2 p-2">
              <TabsTrigger value="option-a" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-[#09090F]">
                Option A: Feed-First
              </TabsTrigger>
              <TabsTrigger value="option-b" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-[#09090F]">
                Option B: Map-Centric
              </TabsTrigger>
              <TabsTrigger value="option-c" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-[#09090F]">
                Option C: Timeline View
              </TabsTrigger>
              <TabsTrigger value="artist-profile" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-[#09090F]">
                Artist Profile
              </TabsTrigger>
              <TabsTrigger value="show-detail" className="data-[state=active]:bg-[#A78BFA] data-[state=active]:text-[#09090F]">
                Show Detail
              </TabsTrigger>
            </TabsList>

            {/* Option A: Feed-First Discovery */}
            <TabsContent value="option-a" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#67E8F9]">Feed-First Discovery (Your Current Direction)</h3>
                  <div className="space-y-3 text-sm text-[#9CA3AF]">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Hero-focused cards:</strong> Full-bleed artist imagery with gradient scrims ensures text legibility (17.8:1 contrast)</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Heat score badges:</strong> At-a-glance popularity metrics using flame icon + number (94, 87, etc.)</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Progressive filtering:</strong> Genre pills allow multi-select filtering without hiding content</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Bottom nav with 44px+ tap targets:</strong> Meets WCAG 2.5.5 guidelines for touch accessibility</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Frosted glass navigation:</strong> Semi-transparent nav preserves spatial context while scrolling</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#13121E] rounded-lg border border-[#A78BFA]/30">
                    <h4 className="font-semibold mb-2 text-[#A78BFA]">Best For:</h4>
                    <ul className="text-sm text-[#9CA3AF] space-y-1">
                      <li>• Users who want passive browsing</li>
                      <li>• Discovery through visual appeal</li>
                      <li>• Quick scanning of popular shows</li>
                      <li>• Mobile-first interaction patterns</li>
                    </ul>
                  </div>
                </div>

                {/* Mobile Wireframe */}
                <div className="flex justify-center">
                  <WireframeOptionA />
                </div>
              </div>
            </TabsContent>

            {/* Option B: Map-Centric */}
            <TabsContent value="option-b" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#67E8F9]">Map-Centric Exploration</h3>
                  <div className="space-y-3 text-sm text-[#9CA3AF]">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Interactive map priority:</strong> Map takes 60% of screen with draggable bottom sheet for details</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Venue clustering:</strong> Heat map showing concentration of shows in neighborhoods</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Contextual bottom sheet:</strong> Swipe up to see full show cards, tap markers for preview</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Distance indicators:</strong> Shows proximity to user location (0.8mi, 1.2mi, etc.)</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Tap-through filtering:</strong> Filter by distance, date, or genre without leaving map view</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#13121E] rounded-lg border border-[#67E8F9]/30">
                    <h4 className="font-semibold mb-2 text-[#67E8F9]">Best For:</h4>
                    <ul className="text-sm text-[#9CA3AF] space-y-1">
                      <li>• Location-based discovery</li>
                      <li>• Users planning night out routes</li>
                      <li>• Venue density exploration</li>
                      <li>• Proximity-based decisions</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <WireframeOptionB />
                </div>
              </div>
            </TabsContent>

            {/* Option C: Timeline View */}
            <TabsContent value="option-c" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#67E8F9]">Timeline-Based Discovery</h3>
                  <div className="space-y-3 text-sm text-[#9CA3AF]">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Horizontal date scroll:</strong> Swipe through days with sticky date selector at top</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Time-grouped shows:</strong> Events organized by time slots (afternoon, evening, late night)</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Calendar quick-jump:</strong> Tap calendar icon to jump to specific date</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Compact cards:</strong> Horizontal scroll cards with artist thumbnail, name, venue, time</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Weekly overview:</strong> See show density across week at a glance</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#13121E] rounded-lg border border-[#A78BFA]/30">
                    <h4 className="font-semibold mb-2 text-[#A78BFA]">Best For:</h4>
                    <ul className="text-sm text-[#9CA3AF] space-y-1">
                      <li>• Planning ahead for specific dates</li>
                      <li>• Comparing multiple nights</li>
                      <li>• Time-based decision making</li>
                      <li>• Weekly schedule overview</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <WireframeOptionC />
                </div>
              </div>
            </TabsContent>

            {/* Artist Profile */}
            <TabsContent value="artist-profile" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#67E8F9]">Artist Profile Deep Dive</h3>
                  <div className="space-y-3 text-sm text-[#9CA3AF]">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Hero header with parallax:</strong> Artist image scrolls slower than content for depth</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Spotify data integration:</strong> Follower count, popularity score, verified badge</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Top tracks playback:</strong> Inline Spotify embeds or preview clips for discovery</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Genre tags:</strong> Color-coded pills matching genre taxonomy</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Upcoming shows section:</strong> All scheduled performances with ticket links</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#13121E] rounded-lg border border-[#67E8F9]/30">
                    <h4 className="font-semibold mb-2 text-[#67E8F9]">Key Features:</h4>
                    <ul className="text-sm text-[#9CA3AF] space-y-1">
                      <li>• Artist bio and background</li>
                      <li>• Related artists discovery</li>
                      <li>• Social media quick links</li>
                      <li>• Save/follow functionality</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <WireframeArtistProfile />
                </div>
              </div>
            </TabsContent>

            {/* Show Detail */}
            <TabsContent value="show-detail" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-[#67E8F9]">Show Detail & Ticketing</h3>
                  <div className="space-y-3 text-sm text-[#9CA3AF]">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Event hero image:</strong> Full-width promo art with date/time overlay</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Lineup breakdown:</strong> Headliner + supporting acts with individual artist cards</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Venue information:</strong> Map preview, address, capacity, age restrictions</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Ticket availability:</strong> Price range, vendor links, RSVP for free shows</p>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#A78BFA]/20 text-[#A78BFA] flex items-center justify-center text-xs">✓</div>
                      <p><strong className="text-[#F1F0FB]">Similar shows:</strong> Recommendations based on genre and date</p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-[#13121E] rounded-lg border border-[#A78BFA]/30">
                    <h4 className="font-semibold mb-2 text-[#A78BFA]">Key Features:</h4>
                    <ul className="text-sm text-[#9CA3AF] space-y-1">
                      <li>• Add to calendar integration</li>
                      <li>• Share show with friends</li>
                      <li>• Get directions to venue</li>
                      <li>• Notify when tickets drop</li>
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center">
                  <WireframeShowDetail />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Recommendation Summary */}
        <section className="mt-16 p-8 bg-gradient-to-br from-[#A78BFA]/10 to-[#67E8F9]/10 rounded-2xl border border-[#A78BFA]/30">
          <h2 className="text-xl font-semibold mb-6 text-[#A78BFA]">💡 Recommendation & Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-3 text-[#67E8F9]">Primary Recommendation: Hybrid Approach</h3>
              <p className="text-sm text-[#9CA3AF] mb-4">
                Start with <strong className="text-[#F1F0FB]">Option A (Feed-First)</strong> as your default view since it aligns with your current design direction and provides the best passive discovery experience. Make Map view easily accessible via bottom nav for users who want location-based exploration.
              </p>
              <ul className="text-sm text-[#9CA3AF] space-y-2">
                <li className="flex gap-2">
                  <ChevronRight className="w-4 h-4 text-[#A78BFA] flex-shrink-0 mt-0.5" />
                  <span>Feed view supports visual-first discovery with heat scores</span>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="w-4 h-4 text-[#A78BFA] flex-shrink-0 mt-0.5" />
                  <span>Map view serves location-conscious users</span>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="w-4 h-4 text-[#A78BFA] flex-shrink-0 mt-0.5" />
                  <span>Date filtering can be progressive (pills for This Week, This Weekend, Next Week)</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 text-[#67E8F9]">Accessibility Wins Already in Place</h3>
              <ul className="text-sm text-[#9CA3AF] space-y-2">
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded bg-[#09090F] flex items-center justify-center text-xs flex-shrink-0">AAA</div>
                  <span>Background (#09090F) meets AAA standards</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded bg-[#F1F0FB] text-[#09090F] flex items-center justify-center text-xs flex-shrink-0">17.8</div>
                  <span>Text (#F1F0FB) has 17.8:1 contrast ratio</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded bg-[#A78BFA] text-[#09090F] flex items-center justify-center text-xs flex-shrink-0">7.2</div>
                  <span>Violet CTAs (#A78BFA) exceed WCAG AA</span>
                </li>
                <li className="flex gap-2">
                  <div className="w-5 h-5 rounded bg-[#67E8F9] text-[#09090F] flex items-center justify-center text-xs flex-shrink-0">9.4</div>
                  <span>Cyan accents (#67E8F9) for highlights</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-[#A78BFA]/20">
            <h3 className="font-semibold mb-3 text-[#67E8F9]">Implementation Priority</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-[#09090F]/50 rounded-lg">
                <div className="text-[#A78BFA] font-semibold mb-2">Phase 1: Core Experience</div>
                <ul className="text-sm text-[#9CA3AF] space-y-1">
                  <li>• Feed-based discovery</li>
                  <li>• Genre filtering</li>
                  <li>• Heat score badges</li>
                  <li>• Bottom navigation</li>
                </ul>
              </div>
              <div className="p-4 bg-[#09090F]/50 rounded-lg">
                <div className="text-[#67E8F9] font-semibold mb-2">Phase 2: Rich Profiles</div>
                <ul className="text-sm text-[#9CA3AF] space-y-1">
                  <li>• Artist deep dive pages</li>
                  <li>• Spotify integration</li>
                  <li>• Top tracks playback</li>
                  <li>• Show detail pages</li>
                </ul>
              </div>
              <div className="p-4 bg-[#09090F]/50 rounded-lg">
                <div className="text-[#9CA3AF] font-semibold mb-2">Phase 3: Advanced Discovery</div>
                <ul className="text-sm text-[#9CA3AF] space-y-1">
                  <li>• Map view</li>
                  <li>• Timeline/calendar view</li>
                  <li>• Personalization</li>
                  <li>• Social features</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Wireframe Components
const WireframeOptionA = () => {
  return (
    <div className="w-[375px] h-[812px] bg-[#09090F] rounded-[40px] border-4 border-[#13121E] overflow-hidden shadow-2xl relative">
      {/* Status Bar */}
      <div className="h-11 bg-[#09090F] flex items-center justify-between px-6 pt-2">
        <div className="text-xs text-[#F1F0FB]">9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-[#F1F0FB] rounded-sm"></div>
          <div className="w-4 h-3 bg-[#F1F0FB] rounded-sm"></div>
          <div className="w-4 h-3 bg-[#F1F0FB] rounded-sm"></div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="px-4 pt-4 pb-3 border-b border-[#13121E]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-xs text-[#A78BFA] tracking-wide">GREATER SEATTLE</div>
            <div className="text-xl font-bold">Hype.Wav</div>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full bg-[#13121E] flex items-center justify-center">
              <Search className="w-5 h-5 text-[#9CA3AF]" />
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#67E8F9]"></div>
          </div>
        </div>

        {/* Genre Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <div className="px-4 py-2 bg-[#A78BFA] rounded-full text-sm whitespace-nowrap">All</div>
          <div className="px-4 py-2 bg-[#13121E] rounded-full text-sm whitespace-nowrap text-[#9CA3AF]">Indie</div>
          <div className="px-4 py-2 bg-[#13121E] rounded-full text-sm whitespace-nowrap text-[#9CA3AF]">Hip-Hop</div>
          <div className="px-4 py-2 bg-[#13121E] rounded-full text-sm whitespace-nowrap text-[#9CA3AF]">Electro</div>
        </div>
      </div>

      {/* Content Area */}
      <div className="px-4 pt-4 pb-20 overflow-y-auto h-[calc(812px-180px)]">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">THIS WEEK</h2>
          <div className="text-sm text-[#A78BFA] flex items-center gap-1">
            See all <ChevronRight className="w-4 h-4" />
          </div>
        </div>

        {/* Show Cards */}
        <div className="space-y-3">
          <div className="relative rounded-2xl overflow-hidden h-40 bg-gradient-to-b from-transparent to-[#09090F]">
            <div className="absolute inset-0 bg-[#13121E]"></div>
            <div className="absolute top-3 right-3 bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-sm">
              <Flame className="w-4 h-4" />
              94
            </div>
            <div className="absolute bottom-3 left-3">
              <div className="text-xl font-bold">Enumclaw</div>
              <div className="text-xs text-[#9CA3AF]">The Crocodile • Tonight 8PM</div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-40 bg-gradient-to-b from-transparent to-[#09090F]">
            <div className="absolute inset-0 bg-[#13121E]"></div>
            <div className="absolute top-3 right-3 bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-sm">
              <Flame className="w-4 h-4" />
              87
            </div>
            <div className="absolute bottom-3 left-3">
              <div className="text-xl font-bold">Ravenna Woods</div>
              <div className="text-xs text-[#9CA3AF]">Neumos • Tomorrow 9PM</div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-40 bg-gradient-to-b from-transparent to-[#09090F]">
            <div className="absolute inset-0 bg-[#13121E]"></div>
            <div className="absolute top-3 right-3 bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-sm">
              <Flame className="w-4 h-4" />
              71
            </div>
            <div className="absolute bottom-3 left-3">
              <div className="text-xl font-bold">Stas THEE Boss</div>
              <div className="text-xs text-[#9CA3AF]">Chop Suey • Sat 10PM</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav - Frosted Glass */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#09090F]/80 backdrop-blur-xl border-t border-[#13121E] px-4">
        <div className="flex justify-between items-center h-20 pb-6">
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#A78BFA]"><Flame className="w-6 h-6" /></div>
            <div className="text-xs text-[#A78BFA]">Discover</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#9CA3AF]"><Map className="w-6 h-6" /></div>
            <div className="text-xs text-[#9CA3AF]">Map</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#9CA3AF]"><Heart className="w-6 h-6" /></div>
            <div className="text-xs text-[#9CA3AF]">Saved</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#9CA3AF]"><User className="w-6 h-6" /></div>
            <div className="text-xs text-[#9CA3AF]">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WireframeOptionB = () => {
  return (
    <div className="w-[375px] h-[812px] bg-[#09090F] rounded-[40px] border-4 border-[#13121E] overflow-hidden shadow-2xl relative">
      {/* Status Bar */}
      <div className="h-11 bg-[#09090F] flex items-center justify-between px-6 pt-2">
        <div className="text-xs text-[#F1F0FB]">9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-[#F1F0FB] rounded-sm"></div>
        </div>
      </div>

      {/* Map Area */}
      <div className="relative h-[480px] bg-[#13121E]">
        <div className="absolute inset-0 flex items-center justify-center text-[#9CA3AF] text-sm">
          <div className="text-center">
            <Map className="w-12 h-12 mx-auto mb-2 opacity-50" />
            <div>Interactive Map View</div>
            <div className="text-xs mt-1">Venue markers + heat clusters</div>
          </div>
        </div>
        
        {/* Map Markers */}
        <div className="absolute top-20 left-16 w-10 h-10 bg-[#A78BFA] rounded-full flex items-center justify-center text-xs font-bold">
          12
        </div>
        <div className="absolute top-32 right-20 w-10 h-10 bg-[#67E8F9] rounded-full flex items-center justify-center text-xs text-[#09090F] font-bold">
          8
        </div>
        <div className="absolute bottom-24 left-24 w-10 h-10 bg-[#A78BFA] rounded-full flex items-center justify-center text-xs font-bold">
          5
        </div>

        {/* Filter Pills on Map */}
        <div className="absolute top-4 left-4 right-4 flex gap-2">
          <div className="px-3 py-1.5 bg-[#09090F]/90 backdrop-blur-sm rounded-full text-xs flex items-center gap-1">
            <Filter className="w-3 h-3" />
            This Week
          </div>
          <div className="px-3 py-1.5 bg-[#09090F]/90 backdrop-blur-sm rounded-full text-xs">
            2mi radius
          </div>
        </div>
      </div>

      {/* Draggable Bottom Sheet */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#09090F] rounded-t-3xl border-t border-[#13121E] h-80">
        {/* Drag Handle */}
        <div className="flex justify-center pt-2 pb-3">
          <div className="w-10 h-1 bg-[#9CA3AF] rounded-full"></div>
        </div>

        <div className="px-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-[#9CA3AF]">25 SHOWS NEAR YOU</h3>
            <div className="text-xs text-[#67E8F9]">Sort by distance</div>
          </div>

          {/* Horizontal Scroll Cards */}
          <div className="flex gap-3 overflow-x-auto pb-3">
            <div className="flex-shrink-0 w-64 bg-[#13121E] rounded-xl p-3">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-[#09090F] rounded-lg"></div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Enumclaw</div>
                  <div className="text-xs text-[#9CA3AF]">The Crocodile</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-[#A78BFA]/20 text-[#A78BFA] text-xs">
                      <Flame className="w-3 h-3 mr-1" />
                      94
                    </Badge>
                    <span className="text-xs text-[#67E8F9]">0.8mi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-64 bg-[#13121E] rounded-xl p-3">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-[#09090F] rounded-lg"></div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Ravenna Woods</div>
                  <div className="text-xs text-[#9CA3AF]">Neumos</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-[#A78BFA]/20 text-[#A78BFA] text-xs">
                      <Flame className="w-3 h-3 mr-1" />
                      87
                    </Badge>
                    <span className="text-xs text-[#67E8F9]">1.2mi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-64 bg-[#13121E] rounded-xl p-3">
              <div className="flex gap-3">
                <div className="w-16 h-16 bg-[#09090F] rounded-lg"></div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">Whitney Mongé</div>
                  <div className="text-xs text-[#9CA3AF]">Barboza</div>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge className="bg-[#A78BFA]/20 text-[#A78BFA] text-xs">
                      <Flame className="w-3 h-3 mr-1" />
                      76
                    </Badge>
                    <span className="text-xs text-[#67E8F9]">1.8mi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-[#9CA3AF]">
            Swipe up to see all shows
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="absolute top-[440px] right-4 w-12 h-12 bg-[#A78BFA] rounded-full flex items-center justify-center shadow-lg">
        <Search className="w-5 h-5 text-[#09090F]" />
      </div>
    </div>
  );
};

const WireframeOptionC = () => {
  return (
    <div className="w-[375px] h-[812px] bg-[#09090F] rounded-[40px] border-4 border-[#13121E] overflow-hidden shadow-2xl relative">
      {/* Status Bar */}
      <div className="h-11 bg-[#09090F] flex items-center justify-between px-6 pt-2">
        <div className="text-xs text-[#F1F0FB]">9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-[#F1F0FB] rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-[#13121E]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-[#A78BFA] tracking-wide">GREATER SEATTLE</div>
            <div className="text-xl font-bold">Hype.Wav</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#13121E] flex items-center justify-center">
            <Calendar className="w-5 h-5 text-[#9CA3AF]" />
          </div>
        </div>

        {/* Horizontal Date Scroll */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <div className="flex-shrink-0 text-center">
            <div className="px-4 py-2 bg-[#A78BFA] rounded-xl">
              <div className="text-xs text-[#09090F]">FRI</div>
              <div className="text-lg font-bold text-[#09090F]">6</div>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="px-4 py-2 bg-[#13121E] rounded-xl">
              <div className="text-xs text-[#9CA3AF]">SAT</div>
              <div className="text-lg font-bold">7</div>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="px-4 py-2 bg-[#13121E] rounded-xl">
              <div className="text-xs text-[#9CA3AF]">SUN</div>
              <div className="text-lg font-bold">8</div>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="px-4 py-2 bg-[#13121E] rounded-xl">
              <div className="text-xs text-[#9CA3AF]">MON</div>
              <div className="text-lg font-bold">9</div>
            </div>
          </div>
          <div className="flex-shrink-0 text-center">
            <div className="px-4 py-2 bg-[#13121E] rounded-xl">
              <div className="text-xs text-[#9CA3AF]">TUE</div>
              <div className="text-lg font-bold">10</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="px-4 pt-4 pb-20 overflow-y-auto h-[calc(812px-200px)]">
        {/* Evening Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-sm font-semibold text-[#9CA3AF]">EVENING</div>
            <div className="text-xs text-[#67E8F9]">7PM - 10PM</div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-3 bg-[#13121E] rounded-xl p-3">
              <div className="w-16 h-16 bg-[#09090F] rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold text-sm">Enumclaw</div>
                  <Badge className="bg-[#A78BFA]/20 text-[#A78BFA] text-xs flex-shrink-0">
                    <Flame className="w-3 h-3 mr-1" />
                    94
                  </Badge>
                </div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">The Crocodile • 8:00 PM</div>
                <div className="flex gap-1 mt-1">
                  <span className="px-2 py-0.5 bg-[#A78BFA]/10 text-[#A78BFA] text-xs rounded">Indie</span>
                  <span className="px-2 py-0.5 bg-[#67E8F9]/10 text-[#67E8F9] text-xs rounded">Rock</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 bg-[#13121E] rounded-xl p-3">
              <div className="w-16 h-16 bg-[#09090F] rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold text-sm">Whitney Mongé</div>
                  <Badge className="bg-[#A78BFA]/20 text-[#A78BFA] text-xs flex-shrink-0">
                    <Flame className="w-3 h-3 mr-1" />
                    76
                  </Badge>
                </div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">Barboza • 9:00 PM</div>
                <div className="flex gap-1 mt-1">
                  <span className="px-2 py-0.5 bg-[#A78BFA]/10 text-[#A78BFA] text-xs rounded">R&B</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Late Night Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-sm font-semibold text-[#9CA3AF]">LATE NIGHT</div>
            <div className="text-xs text-[#67E8F9]">10PM+</div>
          </div>

          <div className="space-y-2">
            <div className="flex gap-3 bg-[#13121E] rounded-xl p-3">
              <div className="w-16 h-16 bg-[#09090F] rounded-lg flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-semibold text-sm">Ravenna Woods</div>
                  <Badge className="bg-[#A78BFA]/20 text-[#A78BFA] text-xs flex-shrink-0">
                    <Flame className="w-3 h-3 mr-1" />
                    87
                  </Badge>
                </div>
                <div className="text-xs text-[#9CA3AF] mt-0.5">Neumos • 10:30 PM</div>
                <div className="flex gap-1 mt-1">
                  <span className="px-2 py-0.5 bg-[#A78BFA]/10 text-[#A78BFA] text-xs rounded">Alt Rock</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#09090F]/80 backdrop-blur-xl border-t border-[#13121E] px-4">
        <div className="flex justify-between items-center h-20 pb-6">
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#9CA3AF]"><Flame className="w-6 h-6" /></div>
            <div className="text-xs text-[#9CA3AF]">Discover</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#9CA3AF]"><Map className="w-6 h-6" /></div>
            <div className="text-xs text-[#9CA3AF]">Map</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#A78BFA]"><Calendar className="w-6 h-6" /></div>
            <div className="text-xs text-[#A78BFA]">Timeline</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-[#9CA3AF]"><User className="w-6 h-6" /></div>
            <div className="text-xs text-[#9CA3AF]">Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WireframeArtistProfile = () => {
  return (
    <div className="w-[375px] h-[812px] bg-[#09090F] rounded-[40px] border-4 border-[#13121E] overflow-hidden shadow-2xl relative">
      {/* Status Bar */}
      <div className="h-11 bg-transparent absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 pt-2">
        <div className="text-xs text-[#F1F0FB]">9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-[#F1F0FB] rounded-sm"></div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 bg-gradient-to-b from-[#13121E] to-[#09090F]">
        <div className="absolute inset-0 bg-[#13121E]"></div>
        {/* Back Button */}
        <div className="absolute top-14 left-4 w-10 h-10 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </div>
        {/* Share Button */}
        <div className="absolute top-14 right-4 w-10 h-10 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="px-4 -mt-8 pb-20 overflow-y-auto h-[calc(812px-256px)]">
        {/* Artist Info Card */}
        <div className="bg-[#13121E] rounded-2xl p-4 mb-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-1">Enumclaw</h1>
              <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                <Users className="w-4 h-4" />
                <span>24.5K followers on Spotify</span>
              </div>
            </div>
            <Badge className="bg-[#A78BFA]/20 text-[#A78BFA]">
              <Flame className="w-4 h-4 mr-1" />
              94
            </Badge>
          </div>

          {/* Genre Tags */}
          <div className="flex gap-2 flex-wrap mb-3">
            <span className="px-3 py-1 bg-[#A78BFA]/20 text-[#A78BFA] text-xs rounded-full">Indie Rock</span>
            <span className="px-3 py-1 bg-[#67E8F9]/20 text-[#67E8F9] text-xs rounded-full">Alternative</span>
            <span className="px-3 py-1 bg-[#9CA3AF]/20 text-[#9CA3AF] text-xs rounded-full">Seattle</span>
          </div>

          {/* Bio */}
          <p className="text-sm text-[#9CA3AF] leading-relaxed">
            Tacoma-based indie rock band known for their raw, energetic sound and introspective lyrics. Rising stars in the Pacific Northwest scene.
          </p>
        </div>

        {/* Top Tracks */}
        <div className="mb-4">
          <h3 className="font-semibold mb-3">Top Tracks</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-[#13121E] rounded-lg p-3">
              <div className="w-10 h-10 bg-[#A78BFA]/20 rounded flex items-center justify-center">
                <Play className="w-4 h-4 text-[#A78BFA]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">Fast N All</div>
                <div className="text-xs text-[#9CA3AF]">2.1M plays</div>
              </div>
              <div className="text-xs text-[#9CA3AF]">3:42</div>
            </div>

            <div className="flex items-center gap-3 bg-[#13121E] rounded-lg p-3">
              <div className="w-10 h-10 bg-[#09090F] rounded flex items-center justify-center">
                <Play className="w-4 h-4 text-[#9CA3AF]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">Park Lodge</div>
                <div className="text-xs text-[#9CA3AF]">1.8M plays</div>
              </div>
              <div className="text-xs text-[#9CA3AF]">4:15</div>
            </div>

            <div className="flex items-center gap-3 bg-[#13121E] rounded-lg p-3">
              <div className="w-10 h-10 bg-[#09090F] rounded flex items-center justify-center">
                <Play className="w-4 h-4 text-[#9CA3AF]" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold">2002</div>
                <div className="text-xs text-[#9CA3AF]">1.5M plays</div>
              </div>
              <div className="text-xs text-[#9CA3AF]">3:28</div>
            </div>
          </div>
        </div>

        {/* Upcoming Shows */}
        <div className="mb-4">
          <h3 className="font-semibold mb-3">Upcoming Shows</h3>
          <div className="space-y-2">
            <div className="bg-[#13121E] rounded-xl p-3">
              <div className="flex gap-3">
                <div className="text-center flex-shrink-0">
                  <div className="text-xs text-[#A78BFA]">MAR</div>
                  <div className="text-2xl font-bold">6</div>
                </div>
                <div className="flex-1 border-l border-[#09090F] pl-3">
                  <div className="font-semibold text-sm">The Crocodile</div>
                  <div className="text-xs text-[#9CA3AF]">Seattle, WA • 8:00 PM</div>
                  <div className="text-xs text-[#67E8F9] mt-1">$25 - $35</div>
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-3">
              <div className="flex gap-3">
                <div className="text-center flex-shrink-0">
                  <div className="text-xs text-[#9CA3AF]">MAR</div>
                  <div className="text-2xl font-bold text-[#9CA3AF]">14</div>
                </div>
                <div className="flex-1 border-l border-[#09090F] pl-3">
                  <div className="font-semibold text-sm">Neumos</div>
                  <div className="text-xs text-[#9CA3AF]">Seattle, WA • 9:00 PM</div>
                  <div className="text-xs text-[#67E8F9] mt-1">$28 - $40</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed CTA Button */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#09090F] border-t border-[#13121E] p-4 pb-8">
        <button className="w-full bg-[#A78BFA] text-[#09090F] py-3 rounded-full font-semibold">
          Follow Artist
        </button>
      </div>
    </div>
  );
};

const WireframeShowDetail = () => {
  return (
    <div className="w-[375px] h-[812px] bg-[#09090F] rounded-[40px] border-4 border-[#13121E] overflow-hidden shadow-2xl relative">
      {/* Status Bar */}
      <div className="h-11 bg-transparent absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 pt-2">
        <div className="text-xs text-[#F1F0FB]">9:41</div>
        <div className="flex gap-1">
          <div className="w-4 h-3 bg-[#F1F0FB] rounded-sm"></div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-80 bg-gradient-to-b from-[#13121E] via-[#13121E] to-[#09090F]">
        <div className="absolute inset-0 bg-[#13121E]"></div>
        
        {/* Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#09090F] to-transparent">
          <Badge className="bg-[#A78BFA]/90 text-[#09090F] mb-2 backdrop-blur-sm">
            <Flame className="w-4 h-4 mr-1" />
            94 Heat Score
          </Badge>
          <h1 className="text-3xl font-bold mb-1">Enumclaw</h1>
          <div className="text-sm text-[#9CA3AF]">w/ Special Guests</div>
        </div>

        {/* Back Button */}
        <div className="absolute top-14 left-4 w-10 h-10 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
          <ChevronRight className="w-5 h-5 rotate-180" />
        </div>
        
        {/* Share & Save */}
        <div className="absolute top-14 right-4 flex gap-2">
          <div className="w-10 h-10 bg-[#09090F]/80 backdrop-blur-sm rounded-full flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-28 overflow-y-auto h-[calc(812px-320px)]">
        {/* Event Details Card */}
        <div className="bg-[#13121E] rounded-2xl p-4 mb-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-xs text-[#9CA3AF] mb-1">DATE & TIME</div>
              <div className="font-semibold">Fri, Mar 6</div>
              <div className="text-sm text-[#9CA3AF]">8:00 PM</div>
            </div>
            <div>
              <div className="text-xs text-[#9CA3AF] mb-1">VENUE</div>
              <div className="font-semibold">The Crocodile</div>
              <div className="text-sm text-[#67E8F9]">0.8mi away</div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#09090F]">
            <div className="text-xs text-[#9CA3AF] mb-1">TICKETS</div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">$25 - $35</div>
                <div className="text-sm text-[#9CA3AF]">Available now</div>
              </div>
              <Badge className="bg-[#67E8F9]/20 text-[#67E8F9]">Selling Fast</Badge>
            </div>
          </div>
        </div>

        {/* Lineup */}
        <div className="mb-4">
          <h3 className="font-semibold mb-3">Lineup</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 bg-[#13121E] rounded-xl p-3">
              <div className="w-12 h-12 bg-[#09090F] rounded-lg"></div>
              <div className="flex-1">
                <div className="font-semibold">Enumclaw</div>
                <div className="text-xs text-[#9CA3AF]">Headliner</div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#9CA3AF]" />
            </div>

            <div className="flex items-center gap-3 bg-[#13121E] rounded-xl p-3">
              <div className="w-12 h-12 bg-[#09090F] rounded-lg"></div>
              <div className="flex-1">
                <div className="font-semibold">Local Support TBA</div>
                <div className="text-xs text-[#9CA3AF]">Opener</div>
              </div>
              <ChevronRight className="w-5 h-5 text-[#9CA3AF]" />
            </div>
          </div>
        </div>

        {/* Venue Map */}
        <div className="mb-4">
          <h3 className="font-semibold mb-3">Venue Location</h3>
          <div className="bg-[#13121E] rounded-xl h-40 flex items-center justify-center text-[#9CA3AF]">
            <div className="text-center">
              <Map className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <div className="text-sm">2200 2nd Ave, Seattle</div>
              <button className="text-xs text-[#67E8F9] mt-1">Get Directions</button>
            </div>
          </div>
        </div>

        {/* Similar Shows */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold">Similar Shows</h3>
            <div className="text-xs text-[#67E8F9]">See all</div>
          </div>
          <div className="flex gap-3 overflow-x-auto">
            <div className="flex-shrink-0 w-40 bg-[#13121E] rounded-xl p-3">
              <div className="w-full h-20 bg-[#09090F] rounded-lg mb-2"></div>
              <div className="text-sm font-semibold">Ravenna Woods</div>
              <div className="text-xs text-[#9CA3AF]">Tomorrow • Neumos</div>
            </div>
            <div className="flex-shrink-0 w-40 bg-[#13121E] rounded-xl p-3">
              <div className="w-full h-20 bg-[#09090F] rounded-lg mb-2"></div>
              <div className="text-sm font-semibold">Whitney Mongé</div>
              <div className="text-xs text-[#9CA3AF]">Sat • Barboza</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom CTA */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#09090F] border-t border-[#13121E] p-4 pb-8">
        <div className="flex gap-2">
          <button className="flex-1 bg-[#13121E] text-[#F1F0FB] py-3 rounded-full font-semibold flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" />
            Add to Calendar
          </button>
          <button className="flex-1 bg-[#A78BFA] text-[#09090F] py-3 rounded-full font-semibold">
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default WireframeShowcase;

import { Link } from "react-router";
import { ArrowLeft, Flame, Filter, Music, Search, Ticket, Heart, User, MapPin, Clock } from "lucide-react";

export function DesignPatternMockupsPage() {
  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB]">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            to="/design-system"
            className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#F1F0FB] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Design System</span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3">Hype.Wav Design Pattern Mockups</h1>
          <p className="text-xl text-[#9CA3AF]">Component specifications with visual examples</p>
        </div>

        {/* Featured Show Indicator Pattern */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Featured Show Indicator</h2>
            <p className="text-[#9CA3AF]">Option B — Red/Orange Gradient Flame on Dark Background</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Visual Example */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Visual Example</h3>
              <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
                
                {/* Featured Show Indicator - Option B */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30" aria-label="Selling Fast">
                  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold mb-1">Example Artist</h3>
                  <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Venue Name</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Specifications</h3>
              <div className="space-y-3 text-sm font-mono">
                <div><span className="text-[#9CA3AF]">Container:</span> 36×36px</div>
                <div><span className="text-[#9CA3AF]">Background:</span> #09090F at 90%</div>
                <div><span className="text-[#9CA3AF]">Border:</span> 1px solid red-500/30</div>
                <div><span className="text-[#9CA3AF]">Border Radius:</span> 9999px (full circle)</div>
                <div><span className="text-[#9CA3AF]">Backdrop Blur:</span> 4px (sm)</div>
                <div><span className="text-[#9CA3AF]">Icon:</span> Flame (Lucide), 20×20px</div>
                <div><span className="text-[#9CA3AF]">Icon Stroke:</span> #EF4444 (red-500)</div>
                <div><span className="text-[#9CA3AF]">Icon Fill:</span> #F97316 (orange-500)</div>
                <div><span className="text-[#9CA3AF]">Position:</span> Top-right, 12px from edges</div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#9CA3AF]/20">
                <h4 className="text-sm font-semibold mb-2 text-[#A78BFA]">Design Rationale</h4>
                <ul className="space-y-1.5 text-sm text-[#9CA3AF]">
                  <li>• Creates urgency without overwhelming</li>
                  <li>• Consistent contrast on dark backgrounds</li>
                  <li>• Icon-only keeps cards clean</li>
                  <li>• WCAG AAA compliant</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Updated Hype Header Pattern */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Hype Header</h2>
            <p className="text-[#9CA3AF]">Updated — Single Filter Action</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Visual Example */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Visual Example</h3>
              <div className="bg-[#09090F]/95 backdrop-blur-md border-b border-[#13121E] rounded-xl overflow-hidden">
                <div className="px-4 pt-4 pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex-1">
                      <div className="text-[10px] text-[#A78BFA] tracking-wider font-medium">
                        GREATER SEATTLE
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] rounded-lg flex items-center justify-center">
                          <Music className="w-4 h-4 text-[#09090F]" />
                        </div>
                        <h1 className="text-2xl font-bold text-[#F1F0FB]">Hype.Wav</h1>
                      </div>
                    </div>
                    <button className="w-11 h-11 rounded-full bg-[#13121E] flex items-center justify-center">
                      <Filter className="w-5 h-5 text-[#9CA3AF]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Specifications</h3>
              <div className="space-y-3 text-sm font-mono">
                <div><span className="text-[#9CA3AF]">Width:</span> 393px (full viewport)</div>
                <div><span className="text-[#9CA3AF]">Padding:</span> 16px H, 16px T, 12px B</div>
                <div><span className="text-[#9CA3AF]">Background:</span> #09090F at 95%</div>
                <div><span className="text-[#9CA3AF]">Backdrop Blur:</span> 12px</div>
                <div><span className="text-[#9CA3AF]">Border Bottom:</span> 1px solid #13121E</div>
                <div><span className="text-[#9CA3AF]">Position:</span> Sticky top, z-index 50</div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#9CA3AF]/20">
                <h4 className="text-sm font-semibold mb-2 text-[#A78BFA]">Changes from Previous Version</h4>
                <ul className="space-y-1.5 text-sm text-[#9CA3AF]">
                  <li>• Removed search button (moved to bottom nav)</li>
                  <li>• Removed profile avatar (moved to bottom nav)</li>
                  <li>• Added filter button for genre/price/date filters</li>
                  <li>• Cleaner, more focused header design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation Pattern */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Bottom Navigation</h2>
            <p className="text-[#9CA3AF]">Updated — 5 Navigation Items</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Visual Example */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Visual Example</h3>
              <div className="bg-[#09090F]/95 backdrop-blur-xl border-t border-[#13121E] rounded-xl overflow-hidden">
                <div className="px-6">
                  <div className="flex justify-between items-center h-20 pb-6">
                    {/* Discover */}
                    <div className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center">
                      <Flame className="w-6 h-6 text-[#A78BFA]" />
                      <span className="text-xs text-[#A78BFA]">Discover</span>
                    </div>
                    {/* Search */}
                    <div className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center">
                      <Search className="w-6 h-6 text-[#9CA3AF]" />
                      <span className="text-xs text-[#9CA3AF]">Search</span>
                    </div>
                    {/* Tickets */}
                    <div className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center">
                      <Ticket className="w-6 h-6 text-[#9CA3AF]" />
                      <span className="text-xs text-[#9CA3AF]">Tickets</span>
                    </div>
                    {/* Saved */}
                    <div className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center">
                      <Heart className="w-6 h-6 text-[#9CA3AF]" />
                      <span className="text-xs text-[#9CA3AF]">Saved</span>
                    </div>
                    {/* Me */}
                    <div className="flex flex-col items-center gap-1 min-w-[44px] min-h-[44px] justify-center">
                      <User className="w-6 h-6 text-[#9CA3AF]" />
                      <span className="text-xs text-[#9CA3AF]">Me</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Navigation Items</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Flame className="w-5 h-5 text-[#A78BFA]" />
                  <div>
                    <div className="font-medium">Discover</div>
                    <div className="text-[#9CA3AF] text-xs">Main feed of upcoming shows</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-[#67E8F9]" />
                  <div>
                    <div className="font-medium">Search</div>
                    <div className="text-[#9CA3AF] text-xs">Find artists, venues, and shows</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Ticket className="w-5 h-5 text-[#67E8F9]" />
                  <div>
                    <div className="font-medium">Tickets</div>
                    <div className="text-[#9CA3AF] text-xs">Purchased and reserved tickets</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-[#67E8F9]" />
                  <div>
                    <div className="font-medium">Saved</div>
                    <div className="text-[#9CA3AF] text-xs">Favorited shows and artists</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-[#67E8F9]" />
                  <div>
                    <div className="font-medium">Me</div>
                    <div className="text-[#9CA3AF] text-xs">Profile and settings</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[#9CA3AF]/20">
                <h4 className="text-sm font-semibold mb-2 text-[#A78BFA]">Design Rationale</h4>
                <ul className="space-y-1.5 text-sm text-[#9CA3AF]">
                  <li>• Expanded from 4 to 5 items</li>
                  <li>• Better feature discoverability</li>
                  <li>• "Me" more personal than "Profile"</li>
                  <li>• Direct ticket access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Show Card Example */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Complete Show Card</h2>
            <p className="text-[#9CA3AF]">With Featured Show Indicator (Option B)</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Visual Example */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Full Card Example</h3>
              <div className="relative h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/60 to-purple-900/60">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90"></div>
                
                {/* Genre Badge - Top Left */}
                <div className="absolute top-3 left-3 px-3 py-1.5 bg-[#A78BFA]/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium text-[#09090F]">Indie Rock</span>
                </div>

                {/* Featured Show Indicator - Top Right */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30" aria-label="Selling Fast">
                  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold mb-1.5">The Decemberists</h3>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      Neumos
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      8:00 PM
                    </span>
                    <span className="text-[#67E8F9]">From $32</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Anatomy */}
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Card Anatomy</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <div className="font-semibold text-[#A78BFA] mb-1">Container</div>
                  <div className="text-[#9CA3AF]">361px × 192px, 16px radius, gradient overlay</div>
                </div>
                <div>
                  <div className="font-semibold text-[#A78BFA] mb-1">Genre Badge (Top Left)</div>
                  <div className="text-[#9CA3AF]">Violet background, 12px from edges</div>
                </div>
                <div>
                  <div className="font-semibold text-[#A78BFA] mb-1">Featured Indicator (Top Right)</div>
                  <div className="text-[#9CA3AF]">Red/orange flame icon, dark circular background</div>
                </div>
                <div>
                  <div className="font-semibold text-[#A78BFA] mb-1">Artist Name</div>
                  <div className="text-[#9CA3AF]">24px Bold, 16px from bottom/left</div>
                </div>
                <div>
                  <div className="font-semibold text-[#A78BFA] mb-1">Metadata Row</div>
                  <div className="text-[#9CA3AF]">Venue + Time + Price, 14px Regular with icons</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Viewport Reference */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Mobile Viewport Reference</h2>
            <p className="text-[#9CA3AF]">iPhone 14 Pro — 393px × 852px</p>
          </div>

          <div className="bg-[#13121E] rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-sm font-semibold mb-3 text-[#67E8F9]">Layout Spacing</h3>
                <div className="space-y-2 text-sm font-mono text-[#9CA3AF]">
                  <div>Page padding: 16px</div>
                  <div>Section gap: 32px</div>
                  <div>Card gap: 16px</div>
                  <div>Touch target: 44×44px</div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-[#67E8F9]">Safe Areas</h3>
                <div className="space-y-2 text-sm font-mono text-[#9CA3AF]">
                  <div>Status bar: 54px</div>
                  <div>Header height: ~90px</div>
                  <div>Bottom nav: 72px</div>
                  <div>Home indicator: 34px</div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-3 text-[#67E8F9]">Border Radius</h3>
                <div className="space-y-2 text-sm font-mono text-[#9CA3AF]">
                  <div>Small: 8px</div>
                  <div>Medium: 12px</div>
                  <div>Large: 16px</div>
                  <div>Pill: 9999px</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-3xl font-bold mb-2">Quick Reference</h2>
            <p className="text-[#9CA3AF]">Most commonly used values</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Color Palette</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#A78BFA]"></div>
                  <div className="text-sm">
                    <div className="font-semibold">Violet</div>
                    <div className="text-[#9CA3AF] font-mono">#A78BFA</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#67E8F9]"></div>
                  <div className="text-sm">
                    <div className="font-semibold">Cyan</div>
                    <div className="text-[#9CA3AF] font-mono">#67E8F9</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#09090F] border border-[#9CA3AF]/20"></div>
                  <div className="text-sm">
                    <div className="font-semibold">BG Primary</div>
                    <div className="text-[#9CA3AF] font-mono">#09090F</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#13121E]"></div>
                  <div className="text-sm">
                    <div className="font-semibold">BG Secondary</div>
                    <div className="text-[#9CA3AF] font-mono">#13121E</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-2xl p-8">
              <h3 className="text-lg font-semibold mb-4 text-[#67E8F9]">Typography Scale</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <div className="text-2xl font-bold">Display</div>
                  <div className="text-[#9CA3AF] font-mono">24px / Bold (700)</div>
                </div>
                <div className="text-sm">
                  <div className="text-xl font-semibold">Heading XL</div>
                  <div className="text-[#9CA3AF] font-mono">20px / Semibold (600)</div>
                </div>
                <div className="text-sm">
                  <div className="text-base">Body</div>
                  <div className="text-[#9CA3AF] font-mono">16px / Regular (400)</div>
                </div>
                <div className="text-sm">
                  <div className="text-sm">Body Small</div>
                  <div className="text-[#9CA3AF] font-mono">14px / Regular (400)</div>
                </div>
                <div className="text-sm">
                  <div className="text-xs font-medium">Caption</div>
                  <div className="text-[#9CA3AF] font-mono">12px / Medium (500)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back Link */}
        <div className="text-center pb-12">
          <Link 
            to="/design-system"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#A78BFA] text-[#09090F] rounded-xl font-medium hover:bg-[#9370DB] transition-colors"
          >
            Back to Design System
          </Link>
        </div>
      </main>
    </div>
  );
}

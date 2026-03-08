import { Link } from "react-router";
import { ArrowLeft, Smartphone } from "lucide-react";

export function LayoutPage() {
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
              LAYOUT SYSTEM
            </div>
            <h1 className="text-4xl font-bold text-[#F1F0FB] mb-3">Grid & Spacing</h1>
            <p className="text-[#9CA3AF]">
              Layout specifications, spacing patterns, and grid systems
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        
        {/* Device Specifications */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Target Device</h2>
            <p className="text-[#9CA3AF] mb-6">
              Primary design target is iPhone 14 Pro with safe area considerations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#A78BFA]" />
                Canvas Dimensions
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Width</span>
                  <span className="font-mono text-[#F1F0FB]">393px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Height</span>
                  <span className="font-mono text-[#F1F0FB]">852px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Device</span>
                  <span className="font-mono text-[#F1F0FB]">iPhone 14 Pro / 15 Pro</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Pixel Density</span>
                  <span className="font-mono text-[#F1F0FB]">@3x (460ppi)</span>
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#67E8F9] rounded-full"></span>
                Safe Areas
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Status Bar Height</span>
                  <span className="font-mono text-[#F1F0FB]">59px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Top Safe Padding</span>
                  <span className="font-mono text-[#F1F0FB]">48px (from physical top)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Bottom Safe Padding</span>
                  <span className="font-mono text-[#F1F0FB]">24px (for home indicator)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Side Margins (L/R)</span>
                  <span className="font-mono text-[#F1F0FB]">0px (edge to edge)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page Layout */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Page Structure</h2>
            <p className="text-[#9CA3AF] mb-6">
              Standard page layout with header, content area, and navigation
            </p>
          </div>

          {/* Visual Diagram */}
          <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
            <div className="text-sm text-[#9CA3AF] mb-6 uppercase tracking-wide">Layout Diagram</div>
            <div className="max-w-md mx-auto">
              <div className="border-2 border-[#A78BFA]/40 rounded-2xl overflow-hidden">
                {/* Status Bar */}
                <div className="bg-[#A78BFA]/10 border-b border-[#A78BFA]/40 px-3 py-2 text-center">
                  <div className="text-xs text-[#A78BFA] font-medium">Status Bar (59px)</div>
                </div>
                
                {/* Header */}
                <div className="bg-[#67E8F9]/10 border-b border-[#67E8F9]/40 px-3 py-4">
                  <div className="text-xs text-[#67E8F9] font-medium text-center">Header / Hype Header (~100px)</div>
                  <div className="text-xs text-[#9CA3AF] text-center mt-1">Sticky positioned</div>
                </div>

                {/* Content */}
                <div className="bg-[#10B981]/10 border-b border-[#10B981]/40 px-3 py-16">
                  <div className="text-xs text-[#10B981] font-medium text-center mb-1">Scrollable Content Area</div>
                  <div className="text-xs text-[#9CA3AF] text-center">Variable height</div>
                  <div className="text-xs text-[#9CA3AF] text-center mt-2">Padding: 16px (sides)</div>
                </div>

                {/* Bottom Nav */}
                <div className="bg-[#F59E0B]/10 border-b border-[#F59E0B]/40 px-3 py-3">
                  <div className="text-xs text-[#F59E0B] font-medium text-center">Bottom Navigation (80px)</div>
                  <div className="text-xs text-[#9CA3AF] text-center mt-1">Fixed positioned</div>
                </div>

                {/* Safe Area */}
                <div className="bg-[#A78BFA]/10 px-3 py-2 text-center">
                  <div className="text-xs text-[#A78BFA] font-medium">Safe Area (24px bottom padding)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A78BFA] rounded-full"></span>
                Header Zone
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Position</span>
                  <span className="font-mono text-[#F1F0FB]">Sticky top</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Approx Height</span>
                  <span className="font-mono text-[#F1F0FB]">~100px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Z-index</span>
                  <span className="font-mono text-[#F1F0FB]">40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Background</span>
                  <span className="font-mono text-[#F1F0FB]">#09090F/95 + blur</span>
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#67E8F9] rounded-full"></span>
                Content Zone
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Max Width</span>
                  <span className="font-mono text-[#F1F0FB]">448px (28rem)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Horizontal Padding</span>
                  <span className="font-mono text-[#F1F0FB]">16px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Bottom Padding</span>
                  <span className="font-mono text-[#F1F0FB]">96px (nav clearance)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Overflow</span>
                  <span className="font-mono text-[#F1F0FB]">Scroll Y</span>
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
                Navigation Zone
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Position</span>
                  <span className="font-mono text-[#F1F0FB]">Fixed bottom</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Height</span>
                  <span className="font-mono text-[#F1F0FB]">80px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Z-index</span>
                  <span className="font-mono text-[#F1F0FB]">50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Background</span>
                  <span className="font-mono text-[#F1F0FB]">#09090F/95 + blur</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Spacing Patterns */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Vertical Rhythm</h2>
            <p className="text-[#9CA3AF] mb-6">
              Consistent spacing patterns for content hierarchy
            </p>
          </div>

          <div className="bg-[#13121E] rounded-2xl p-8">
            <div className="space-y-8 max-w-2xl">
              {/* Example 1 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-6 bg-[#A78BFA] rounded"></div>
                  <h3 className="text-lg font-semibold">Section Header</h3>
                </div>
                <div className="pl-6 space-y-1 text-sm text-[#9CA3AF]">
                  <div>↓ Margin Bottom: <span className="text-[#F1F0FB] font-mono">24px</span> (before content)</div>
                  <div>Used for: Page sections, major content dividers</div>
                </div>
              </div>

              {/* Example 2 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-6 bg-[#67E8F9] rounded"></div>
                  <h4 className="text-base font-semibold">Subsection Header</h4>
                </div>
                <div className="pl-6 space-y-1 text-sm text-[#9CA3AF]">
                  <div>↓ Margin Bottom: <span className="text-[#F1F0FB] font-mono">16px</span> (before content)</div>
                  <div>Used for: Component groups, card collections</div>
                </div>
              </div>

              {/* Example 3 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-6 bg-[#10B981] rounded"></div>
                  <div className="text-sm">Content Block (Card, Show Card, etc.)</div>
                </div>
                <div className="pl-6 space-y-1 text-sm text-[#9CA3AF]">
                  <div>↓ Margin Bottom: <span className="text-[#F1F0FB] font-mono">16px</span> (between items in list)</div>
                  <div>Used for: Cards in feed, list items</div>
                </div>
              </div>

              {/* Example 4 */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-1 h-6 bg-[#F59E0B] rounded"></div>
                  <div className="text-sm">Between Sections</div>
                </div>
                <div className="pl-6 space-y-1 text-sm text-[#9CA3AF]">
                  <div>↓ Margin Bottom: <span className="text-[#F1F0FB] font-mono">32px</span> (major sections)</div>
                  <div>Used for: "This Week" to "Next Week", major page divisions</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Spacing */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Horizontal Spacing</h2>
            <p className="text-[#9CA3AF] mb-6">
              Edge-to-edge and content padding patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A78BFA] rounded-full"></span>
                Standard Content
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Max Width Container</span>
                  <span className="font-mono text-[#F1F0FB]">448px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Horizontal Padding</span>
                  <span className="font-mono text-[#F1F0FB]">16px (each side)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Effective Content Width</span>
                  <span className="font-mono text-[#F1F0FB]">361px (on 393px screen)</span>
                </div>
                <div className="text-[#9CA3AF] mt-4">
                  Used for: Main content, feed items, text blocks
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#67E8F9] rounded-full"></span>
                Full Bleed Content
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Horizontal Padding</span>
                  <span className="font-mono text-[#F1F0FB]">0px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Width</span>
                  <span className="font-mono text-[#F1F0FB]">100% (393px)</span>
                </div>
                <div className="text-[#9CA3AF] mt-4">
                  Used for: Show card images, hero sections, full-width backgrounds
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
                Scrollable Lists
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Negative Margin</span>
                  <span className="font-mono text-[#F1F0FB]">-16px (left/right)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Inner Padding</span>
                  <span className="font-mono text-[#F1F0FB]">16px (left/right)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Item Gap</span>
                  <span className="font-mono text-[#F1F0FB]">12px</span>
                </div>
                <div className="text-[#9CA3AF] mt-4">
                  Used for: Genre filters, horizontal scrolling card lists
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#F59E0B] rounded-full"></span>
                Card Internal Padding
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Show Card</span>
                  <span className="font-mono text-[#F1F0FB]">16px (all sides)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Detail Cards</span>
                  <span className="font-mono text-[#F1F0FB]">20px (all sides)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Small Info Cards</span>
                  <span className="font-mono text-[#F1F0FB]">12px (all sides)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Z-Index Scale */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Z-Index Layering</h2>
            <p className="text-[#9CA3AF] mb-6">
              Stacking context hierarchy for overlapping elements
            </p>
          </div>

          <div className="bg-[#13121E] rounded-xl overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#09090F]">
                <tr className="border-b border-[#13121E]">
                  <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Layer</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Z-Index</th>
                  <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Elements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#09090F]">
                <tr className="hover:bg-[#1A1927]">
                  <td className="px-6 py-4 font-semibold text-[#F1F0FB]">Bottom Navigation</td>
                  <td className="px-6 py-4 font-mono text-[#A78BFA]">50</td>
                  <td className="px-6 py-4 text-sm text-[#9CA3AF]">Fixed bottom nav bar (highest priority)</td>
                </tr>
                <tr className="hover:bg-[#1A1927]">
                  <td className="px-6 py-4 font-semibold text-[#F1F0FB]">Sticky Header</td>
                  <td className="px-6 py-4 font-mono text-[#67E8F9]">40</td>
                  <td className="px-6 py-4 text-sm text-[#9CA3AF]">Hype Header, page headers</td>
                </tr>
                <tr className="hover:bg-[#1A1927]">
                  <td className="px-6 py-4 font-semibold text-[#F1F0FB]">Modals & Overlays</td>
                  <td className="px-6 py-4 font-mono text-[#10B981]">60</td>
                  <td className="px-6 py-4 text-sm text-[#9CA3AF]">Search overlays, modals, dialogs (if added)</td>
                </tr>
                <tr className="hover:bg-[#1A1927]">
                  <td className="px-6 py-4 font-semibold text-[#F1F0FB]">Dropdowns</td>
                  <td className="px-6 py-4 font-mono text-[#F59E0B]">30</td>
                  <td className="px-6 py-4 text-sm text-[#9CA3AF]">Dropdown menus, popovers</td>
                </tr>
                <tr className="hover:bg-[#1A1927]">
                  <td className="px-6 py-4 font-semibold text-[#F1F0FB]">Tooltips</td>
                  <td className="px-6 py-4 font-mono text-[#A78BFA]">20</td>
                  <td className="px-6 py-4 text-sm text-[#9CA3AF]">Tooltips, small hover states</td>
                </tr>
                <tr className="hover:bg-[#1A1927]">
                  <td className="px-6 py-4 font-semibold text-[#F1F0FB]">Base Content</td>
                  <td className="px-6 py-4 font-mono text-[#67E8F9]">0-10</td>
                  <td className="px-6 py-4 text-sm text-[#9CA3AF]">Regular content, cards, images</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Touch Targets */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#F1F0FB] mb-3">Touch Targets</h2>
            <p className="text-[#9CA3AF] mb-6">
              Minimum sizes for interactive elements (WCAG 2.1 Level AAA)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#10B981] rounded-full"></span>
                Minimum Standards
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">Primary Buttons</span>
                  <span className="font-mono text-[#F1F0FB]">44px × 44px min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">Icon Buttons</span>
                  <span className="font-mono text-[#F1F0FB]">44px × 44px min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">Nav Items</span>
                  <span className="font-mono text-[#F1F0FB]">44px × 44px min</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">List Items</span>
                  <span className="font-mono text-[#F1F0FB]">44px height min</span>
                </div>
              </div>
            </div>

            <div className="bg-[#13121E] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A78BFA] rounded-full"></span>
                Spacing Between Targets
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">Minimum Gap</span>
                  <span className="font-mono text-[#F1F0FB]">8px</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF]">Recommended Gap</span>
                  <span className="font-mono text-[#F1F0FB]">12px</span>
                </div>
                <div className="text-[#9CA3AF] mt-4">
                  Prevents accidental taps on adjacent interactive elements
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

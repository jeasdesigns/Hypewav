import { Link } from "react-router";
import { ArrowLeft, Flame, MapPin, Clock, Search, Heart, User, Filter, X, ChevronRight, ChevronLeft, Share2, DollarSign, ExternalLink, Zap, CheckCircle2, Music, Bell, Settings } from "lucide-react";
import { ShowCard } from "../../components/ShowCard";
import { HypeHeader } from "../../components/HypeHeader";
import { GenreFilter } from "../../components/GenreFilter";
import { BottomNav } from "../../components/BottomNav";
import { mockShows } from "../../data/mockData";
import { useState } from "react";

export function ComponentsPage() {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const featuredShow = mockShows.find(show => show.ticketStatus === 'selling-fast') || mockShows[0];

  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB] pb-24">
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
              ATOMIC DESIGN SYSTEM
            </div>
            <h1 className="text-4xl font-bold text-[#F1F0FB] mb-3">Component Specifications</h1>
            <p className="text-[#9CA3AF]">
              Complete atomic design system documentation following Atoms → Molecules → Organisms structure
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-32">
        
        {/* ATOMIC DESIGN INTRO */}
        <section>
          <div className="bg-gradient-to-br from-[#A78BFA]/10 to-[#67E8F9]/10 border-2 border-[#A78BFA]/30 rounded-3xl p-10 shadow-2xl shadow-[#A78BFA]/10">
            <h2 className="text-2xl font-bold mb-4">Atomic Design Philosophy</h2>
            <p className="text-[#9CA3AF] mb-6">
              This design system follows Brad Frost's Atomic Design methodology, organizing components from smallest to largest:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-[#A78BFA] rounded-full"></div>
                  <h3 className="font-semibold text-[#F1F0FB]">Atoms</h3>
                </div>
                <p className="text-sm text-[#9CA3AF]">Basic building blocks that can't be broken down further: badges, buttons, icons, text styles</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-[#67E8F9] rounded-full"></div>
                  <h3 className="font-semibold text-[#F1F0FB]">Molecules</h3>
                </div>
                <p className="text-sm text-[#9CA3AF]">Simple combinations of atoms working together: filter pills, nav items, search inputs</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                  <h3 className="font-semibold text-[#F1F0FB]">Organisms</h3>
                </div>
                <p className="text-sm text-[#9CA3AF]">Complex UI components built from molecules and atoms: show cards, headers, navigation bars</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== TYPOGRAPHY ========== */}
        <section className="border-l-4 border-[#F59E0B] pl-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B]/30 to-[#F59E0B]/10 border-2 border-[#F59E0B]/50 flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                <span className="text-2xl font-bold text-[#F59E0B]">Aa</span>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#F1F0FB]">Typography</h2>
                <p className="text-[#F59E0B] font-medium">Foundation</p>
              </div>
            </div>
            <p className="text-lg text-[#9CA3AF] ml-[72px]">
              Complete type scale and text styling system
            </p>
          </div>

          <div className="space-y-16">
            {/* FONT FAMILY */}
            <div className="relative">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F59E0B]/50 to-transparent rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-8 flex items-center gap-3">
                <span className="text-[#F59E0B]">01</span> Font Family
              </h3>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#F59E0B]/20 rounded-2xl p-8 mb-8 shadow-xl">
                <div className="text-sm text-[#9CA3AF] mb-6 uppercase tracking-wide">System Font Stack</div>
                <div className="space-y-4">
                  <div className="text-4xl font-bold text-[#F1F0FB]">
                    Hype.Wav Design System
                  </div>
                  <p className="text-lg text-[#9CA3AF]">
                    The quick brown fox jumps over the lazy dog
                  </p>
                  <div className="text-sm text-[#9CA3AF] font-mono bg-[#09090F] p-4 rounded-lg">
                    0123456789 !@#$%^&*()
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#F59E0B]/10 rounded-xl p-6 hover:border-[#F59E0B]/20 transition-colors">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#F59E0B] rounded-full"></div>
                    Font Stack
                  </h4>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="text-[#9CA3AF] mb-2">Primary Font Family</div>
                      <div className="font-mono text-xs text-[#F1F0FB] bg-[#09090F] p-3 rounded-lg">
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                      <div>
                        <div className="text-[#9CA3AF] mb-2">Platform Rendering</div>
                        <div className="space-y-2 text-xs">
                          <div className="flex justify-between">
                            <span className="text-[#9CA3AF]">macOS / iOS</span>
                            <span className="text-[#F1F0FB]">SF Pro / San Francisco</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#9CA3AF]">Windows</span>
                            <span className="text-[#F1F0FB]">Segoe UI</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#9CA3AF]">Android</span>
                            <span className="text-[#F1F0FB]">Roboto</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#9CA3AF]">Linux</span>
                            <span className="text-[#F1F0FB]">System default</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="text-[#9CA3AF] mb-2">Characteristics</div>
                        <div className="space-y-2 text-xs text-[#9CA3AF]">
                          <p>• Uses native system fonts for optimal performance</p>
                          <p>• Ensures consistent UI feel across platforms</p>
                          <p>• No external font loading = faster page loads</p>
                          <p>• Excellent readability at all sizes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#F59E0B]/10 rounded-xl p-6 hover:border-[#F59E0B]/20 transition-colors">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#F59E0B] rounded-full"></div>
                    Font Weights
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <div className="text-4xl font-normal text-[#F1F0FB] mb-2">Aa</div>
                      <div className="text-sm text-[#9CA3AF]">Regular</div>
                      <div className="font-mono text-xs text-[#F1F0FB]">400</div>
                      <div className="text-xs text-[#9CA3AF] mt-1">Body text, metadata</div>
                    </div>
                    <div>
                      <div className="text-4xl font-medium text-[#F1F0FB] mb-2">Aa</div>
                      <div className="text-sm text-[#9CA3AF]">Medium</div>
                      <div className="font-mono text-xs text-[#F1F0FB]">500</div>
                      <div className="text-xs text-[#9CA3AF] mt-1">Labels, buttons, emphasis</div>
                    </div>
                    <div>
                      <div className="text-4xl font-semibold text-[#F1F0FB] mb-2">Aa</div>
                      <div className="text-sm text-[#9CA3AF]">Semibold</div>
                      <div className="font-mono text-xs text-[#F1F0FB]">600</div>
                      <div className="text-xs text-[#9CA3AF] mt-1">Subheadings, sections</div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-[#09090F]">
                    <div className="text-5xl font-bold text-[#F1F0FB] mb-2">Aa</div>
                    <div className="text-sm text-[#9CA3AF]">Bold</div>
                    <div className="font-mono text-xs text-[#F1F0FB]">700</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">Headings, artist names, main titles</div>
                  </div>
                </div>
              </div>
            </div>

            {/* TYPE SCALE */}
            <div className="relative">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F59E0B]/50 to-transparent rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-8 flex items-center gap-3">
                <span className="text-[#F59E0B]">02</span> Type Scale
              </h3>
              
              {/* Live Examples */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#F59E0B]/20 rounded-2xl p-8 mb-8 shadow-xl">
                <div className="text-sm text-[#9CA3AF] mb-6 uppercase tracking-wide">Live Examples</div>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-3xl font-bold text-[#F1F0FB]">Display Large (32px / Bold)</h1>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Hero headings, artist names on detail pages</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#F1F0FB]">Display (24px / Bold)</h2>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Show card artist names, page titles</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#F1F0FB]">Heading XL (20px / Semibold)</h3>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Section headers, card titles</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#F1F0FB]">Heading Large (18px / Semibold)</h4>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Subsection headers</p>
                  </div>
                  <div>
                    <p className="text-base font-medium text-[#F1F0FB]">Body Large (16px / Medium)</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Primary actions, emphasized text</p>
                  </div>
                  <div>
                    <p className="text-base text-[#F1F0FB]">Body (16px / Regular)</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Body copy, default text</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#9CA3AF]">Body Small (14px / Regular)</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Metadata, supporting text</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wide">Caption (12px / Medium)</p>
                    <p className="text-xs text-[#9CA3AF] mt-1">Used for: Labels, badges, tags</p>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Desktop Sizes</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Display Large</span>
                      <span className="font-mono text-[#F1F0FB]">32px / 700 / 1.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Display</span>
                      <span className="font-mono text-[#F1F0FB]">24px / 700 / 1.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Heading XL</span>
                      <span className="font-mono text-[#F1F0FB]">20px / 600 / 1.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Heading Large</span>
                      <span className="font-mono text-[#F1F0FB]">18px / 600 / 1.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Body Large</span>
                      <span className="font-mono text-[#F1F0FB]">16px / 500 / 1.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Body</span>
                      <span className="font-mono text-[#F1F0FB]">16px / 400 / 1.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Body Small</span>
                      <span className="font-mono text-[#F1F0FB]">14px / 400 / 1.5</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Caption</span>
                      <span className="font-mono text-[#F1F0FB]">12px / 500 / 1.4</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Color Usage</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Primary Text</span>
                      <span className="font-mono text-[#F1F0FB]">#F1F0FB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Secondary Text</span>
                      <span className="font-mono text-[#F1F0FB]">#9CA3AF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Accent (Violet)</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Accent (Cyan)</span>
                      <span className="font-mono text-[#F1F0FB]">#67E8F9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">On Dark Buttons</span>
                      <span className="font-mono text-[#F1F0FB]">#09090F</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ICONOGRAPHY ========== */}
        <section className="border-l-4 border-[#F59E0B] pl-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B]/30 to-[#F59E0B]/10 border-2 border-[#F59E0B]/50 flex items-center justify-center shadow-lg shadow-[#F59E0B]/20">
                <Zap className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#F1F0FB]">Iconography</h2>
                <p className="text-[#F59E0B] font-medium">Foundation</p>
              </div>
            </div>
            <p className="text-lg text-[#9CA3AF] ml-[72px]">
              Icon system built on Lucide React for consistent visual language
            </p>
          </div>

          <div className="space-y-16">
            {/* ICON LIBRARY */}
            <div className="relative">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F59E0B]/50 to-transparent rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-8 flex items-center gap-3">
                <span className="text-[#F59E0B]">01</span> Icon Library
              </h3>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#F59E0B]/20 rounded-2xl p-8 mb-8 shadow-xl">
                <div className="text-sm text-[#9CA3AF] mb-6 uppercase tracking-wide">Library Information</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="text-xl font-semibold text-[#F1F0FB] mb-3">Lucide React</div>
                    <p className="text-sm text-[#9CA3AF] mb-4">
                      A beautiful, consistent icon library with 1000+ open-source icons. Optimized for web with customizable stroke width and size.
                    </p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                        <span className="text-[#9CA3AF]">MIT License</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                        <span className="text-[#9CA3AF]">Tree-shakeable</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                        <span className="text-[#9CA3AF]">TypeScript support</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-[#09090F] rounded-xl p-4">
                      <div className="text-xs text-[#9CA3AF] mb-2 font-mono">Import Example</div>
                      <pre className="text-xs text-[#F1F0FB] font-mono overflow-x-auto whitespace-pre-wrap">
{`import { Heart, MapPin, 
  Clock, Flame } from 'lucide-react';

<Heart className="w-5 h-5" />`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#F59E0B]/10 rounded-xl p-6 hover:border-[#F59E0B]/20 transition-colors">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#F59E0B] rounded-full"></div>
                    Package Info
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Package</span>
                      <span className="font-mono text-[#F1F0FB]">lucide-react</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Total Icons</span>
                      <span className="font-mono text-[#F1F0FB]">1000+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Default Stroke</span>
                      <span className="font-mono text-[#F1F0FB]">2px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Format</span>
                      <span className="font-mono text-[#F1F0FB]">SVG React Components</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ICON SIZES */}
            <div className="relative">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F59E0B]/50 to-transparent rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-8 flex items-center gap-3">
                <span className="text-[#F59E0B]">02</span> Icon Sizes
              </h3>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#F59E0B]/20 rounded-2xl p-8 mb-8 shadow-xl">
                <div className="text-sm text-[#9CA3AF] mb-6 uppercase tracking-wide">Size Scale</div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="w-full aspect-square bg-[#09090F]/50 rounded-xl flex items-center justify-center mb-3 border border-[#F59E0B]/10">
                      <Heart className="w-4 h-4 text-[#F1F0FB]" />
                    </div>
                    <div className="text-sm font-medium text-[#F1F0FB]">Small</div>
                    <div className="text-xs text-[#9CA3AF] font-mono">16px (w-4 h-4)</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">Tags, badges</div>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-[#09090F]/50 rounded-xl flex items-center justify-center mb-3 border border-[#F59E0B]/10">
                      <MapPin className="w-5 h-5 text-[#F1F0FB]" />
                    </div>
                    <div className="text-sm font-medium text-[#F1F0FB]">Medium</div>
                    <div className="text-xs text-[#9CA3AF] font-mono">20px (w-5 h-5)</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">Default UI icons</div>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-[#09090F]/50 rounded-xl flex items-center justify-center mb-3 border border-[#F59E0B]/10">
                      <Flame className="w-6 h-6 text-[#F1F0FB]" />
                    </div>
                    <div className="text-sm font-medium text-[#F1F0FB]">Large</div>
                    <div className="text-xs text-[#9CA3AF] font-mono">24px (w-6 h-6)</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">Featured indicators</div>
                  </div>
                  <div className="text-center">
                    <div className="w-full aspect-square bg-[#09090F]/50 rounded-xl flex items-center justify-center mb-3 border border-[#F59E0B]/10">
                      <User className="w-8 h-8 text-[#F1F0FB]" />
                    </div>
                    <div className="text-sm font-medium text-[#F1F0FB]">Extra Large</div>
                    <div className="text-xs text-[#9CA3AF] font-mono">32px (w-8 h-8)</div>
                    <div className="text-xs text-[#9CA3AF] mt-1">Hero sections</div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#F59E0B]/10 rounded-xl p-6 hover:border-[#F59E0B]/20 transition-colors">
                <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#F59E0B] rounded-full"></div>
                  Usage Guidelines
                </h4>
                <div className="space-y-3 text-sm text-[#9CA3AF]">
                  <p>• Use <span className="font-mono text-[#F1F0FB]">w-{'{size}'} h-{'{size}'}</span> Tailwind classes for consistent sizing</p>
                  <p>• Maintain 2px stroke width for visual consistency</p>
                  <p>• Align icons vertically with adjacent text using flexbox</p>
                  <p>• Add hover states to interactive icons for better UX</p>
                </div>
              </div>
            </div>

            {/* ICON COLORS */}
            <div className="relative">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F59E0B]/50 to-transparent rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-8 flex items-center gap-3">
                <span className="text-[#F59E0B]">03</span> Icon Colors
              </h3>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#F59E0B]/20 rounded-2xl p-8 mb-8 shadow-xl">
                <div className="text-sm text-[#9CA3AF] mb-6 uppercase tracking-wide">Color Treatments</div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-[#09090F]/50 rounded-xl p-6 border border-[#F1F0FB]/10">
                    <Heart className="w-6 h-6 text-[#F1F0FB] mb-3" />
                    <div className="text-sm font-medium text-[#F1F0FB]">Primary</div>
                    <div className="text-xs text-[#9CA3AF] font-mono mt-1">#F1F0FB</div>
                    <div className="text-xs text-[#9CA3AF] mt-2">Main UI elements</div>
                  </div>
                  <div className="bg-[#09090F]/50 rounded-xl p-6 border border-[#9CA3AF]/10">
                    <Clock className="w-6 h-6 text-[#9CA3AF] mb-3" />
                    <div className="text-sm font-medium text-[#F1F0FB]">Secondary</div>
                    <div className="text-xs text-[#9CA3AF] font-mono mt-1">#9CA3AF</div>
                    <div className="text-xs text-[#9CA3AF] mt-2">Metadata, labels</div>
                  </div>
                  <div className="bg-[#09090F]/50 rounded-xl p-6 border border-[#A78BFA]/10">
                    <MapPin className="w-6 h-6 text-[#A78BFA] mb-3" />
                    <div className="text-sm font-medium text-[#F1F0FB]">Accent Violet</div>
                    <div className="text-xs text-[#9CA3AF] font-mono mt-1">#A78BFA</div>
                    <div className="text-xs text-[#9CA3AF] mt-2">Emphasis, branding</div>
                  </div>
                  <div className="bg-[#09090F]/50 rounded-xl p-6 border border-[#67E8F9]/10">
                    <Share2 className="w-6 h-6 text-[#67E8F9] mb-3" />
                    <div className="text-sm font-medium text-[#F1F0FB]">Accent Cyan</div>
                    <div className="text-xs text-[#9CA3AF] font-mono mt-1">#67E8F9</div>
                    <div className="text-xs text-[#9CA3AF] mt-2">Secondary accent</div>
                  </div>
                  <div className="bg-gradient-to-br from-[#FF4D00]/20 to-[#FF7A00]/20 rounded-xl p-6 border border-[#FF4D00]/30">
                    <Flame className="w-6 h-6 text-[#FF4D00] mb-3" />
                    <div className="text-sm font-medium text-[#F1F0FB]">Featured</div>
                    <div className="text-xs text-[#9CA3AF] font-mono mt-1">#FF4D00</div>
                    <div className="text-xs text-[#9CA3AF] mt-2">Special indicators</div>
                  </div>
                  <div className="bg-[#09090F]/50 rounded-xl p-6 border border-[#10B981]/10">
                    <CheckCircle2 className="w-6 h-6 text-[#10B981] mb-3" />
                    <div className="text-sm font-medium text-[#F1F0FB]">Success</div>
                    <div className="text-xs text-[#9CA3AF] font-mono mt-1">#10B981</div>
                    <div className="text-xs text-[#9CA3AF] mt-2">Confirmations</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ICON INVENTORY */}
            <div className="relative">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#F59E0B]/50 to-transparent rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-8 flex items-center gap-3">
                <span className="text-[#F59E0B]">04</span> Icon Inventory
              </h3>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#F59E0B]/20 rounded-2xl p-8 mb-8 shadow-xl">
                <div className="text-sm text-[#9CA3AF] mb-6 uppercase tracking-wide">Common Icons Used</div>
                
                <div className="space-y-8">
                  {/* Navigation Icons */}
                  <div>
                    <div className="text-sm font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#A78BFA] rounded-full"></div>
                      Navigation & Actions
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Back</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <ChevronRight className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Next</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <Search className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Search</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <Filter className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Filter</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <X className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Close</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <Share2 className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Share</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <ExternalLink className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">External</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#A78BFA]/30 transition-colors">
                        <User className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Profile</span>
                      </div>
                    </div>
                  </div>

                  {/* Information Icons */}
                  <div>
                    <div className="text-sm font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#67E8F9] rounded-full"></div>
                      Information & Metadata
                    </div>
                    <div className="grid grid-cols-4 md:grid-cols-6 gap-4">
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#67E8F9]/30 transition-colors">
                        <MapPin className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Location</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#67E8F9]/30 transition-colors">
                        <Clock className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Time</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#67E8F9]/30 transition-colors">
                        <DollarSign className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Price</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#67E8F9]/30 transition-colors">
                        <Heart className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Favorite</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#67E8F9]/30 transition-colors">
                        <Flame className="w-5 h-5 text-[#FF4D00]" />
                        <span className="text-xs text-[#9CA3AF]">Featured</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 p-3 bg-[#09090F]/50 rounded-lg border border-[#F1F0FB]/5 hover:border-[#67E8F9]/30 transition-colors">
                        <Zap className="w-5 h-5 text-[#F1F0FB]" />
                        <span className="text-xs text-[#9CA3AF]">Trending</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#F59E0B]/10 rounded-xl p-6 hover:border-[#F59E0B]/20 transition-colors">
                <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#F59E0B] rounded-full"></div>
                  Best Practices
                </h4>
                <div className="space-y-3 text-sm text-[#9CA3AF]">
                  <p>• Use icons to enhance, not replace, text labels in navigation</p>
                  <p>• Ensure sufficient contrast between icon color and background</p>
                  <p>• Add aria-labels to icon-only buttons for accessibility</p>
                  <p>• Keep icon usage consistent across similar actions</p>
                  <p>• Test icon visibility at mobile sizes before deployment</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ATOMS ========== */}
        <section className="border-l-4 border-[#A78BFA] pl-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A78BFA]/30 to-[#A78BFA]/10 border-2 border-[#A78BFA]/50 flex items-center justify-center shadow-lg shadow-[#A78BFA]/20">
                <div className="w-5 h-5 bg-[#A78BFA] rounded-full"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#F1F0FB]">Atoms</h2>
                <p className="text-[#A78BFA] font-medium">Basic Building Blocks</p>
              </div>
            </div>
            <p className="text-lg text-[#9CA3AF] ml-[72px]">
              Fundamental building blocks of the design system
            </p>
          </div>

          <div className="space-y-20">
            {/* BADGE - GENRE */}
            <div className="relative group">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A78BFA]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-xs font-mono text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#A78BFA]/30">ATOM</span>
                <h3 className="text-2xl font-bold text-[#F1F0FB]">Badge (Genre Tag)</h3>
              </div>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#A78BFA]/10 rounded-2xl p-8 mb-8 hover:border-[#A78BFA]/30 transition-all shadow-lg">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex gap-3">
                  <div className="bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
                    Indie Rock
                  </div>
                  <div className="bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
                    Electronic
                  </div>
                  <div className="bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
                    Hip-Hop
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Horizontal)</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Vertical)</span>
                      <span className="font-mono text-[#F1F0FB]">6px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (full)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Styling</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA @ 90%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Text Color</span>
                      <span className="font-mono text-[#F1F0FB]">#09090F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Font</span>
                      <span className="font-mono text-[#F1F0FB]">12px / Medium (500)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Backdrop Blur</span>
                      <span className="font-mono text-[#F1F0FB]">4px</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BADGE - FEATURED FLAME */}
            <div className="relative group">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A78BFA]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-xs font-mono text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#A78BFA]/30">ATOM</span>
                <h3 className="text-2xl font-bold text-[#F1F0FB]">Badge (Featured Indicator)</h3>
              </div>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30">
                  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Container Size</span>
                      <span className="font-mono text-[#F1F0FB]">36px × 36px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">20px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (circle)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Styling</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background</span>
                      <span className="font-mono text-[#F1F0FB]">#09090F @ 90%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border</span>
                      <span className="font-mono text-[#F1F0FB]">1px #EF4444 @ 30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon (stroke)</span>
                      <span className="font-mono text-[#F1F0FB]">#EF4444</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon (fill)</span>
                      <span className="font-mono text-[#F1F0FB]">#F97316</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BUTTON - ICON ROUND */}
            <div className="relative group">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A78BFA]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-xs font-mono text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#A78BFA]/30">ATOM</span>
                <h3 className="text-2xl font-bold text-[#F1F0FB]">Button (Icon - Round)</h3>
              </div>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#A78BFA]/10 rounded-2xl p-8 mb-8 hover:border-[#A78BFA]/30 transition-all shadow-lg">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex gap-4">
                  <button className="w-11 h-11 rounded-full bg-[#13121E] flex items-center justify-center hover:bg-[#1A1927] transition-colors">
                    <Filter className="w-5 h-5 text-[#9CA3AF]" />
                  </button>
                  <button className="w-11 h-11 rounded-full bg-[#13121E] flex items-center justify-center hover:bg-[#1A1927] transition-colors">
                    <Search className="w-5 h-5 text-[#9CA3AF]" />
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Container Size</span>
                      <span className="font-mono text-[#F1F0FB]">44px × 44px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">20px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (circle)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">States</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Default BG</span>
                      <span className="font-mono text-[#F1F0FB]">#13121E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Hover BG</span>
                      <span className="font-mono text-[#F1F0FB]">#1A1927</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Active Scale</span>
                      <span className="font-mono text-[#F1F0FB]">0.95</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Color</span>
                      <span className="font-mono text-[#F1F0FB]">#9CA3AF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ICONS */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Icons</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex flex-wrap gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#67E8F9]" />
                    <span className="text-xs text-[#9CA3AF]">Location</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Clock className="w-5 h-5 text-[#9CA3AF]" />
                    <span className="text-xs text-[#9CA3AF]">Time</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Flame className="w-6 h-6 text-[#A78BFA]" />
                    <span className="text-xs text-[#9CA3AF]">Featured</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Search className="w-6 h-6 text-[#67E8F9]" />
                    <span className="text-xs text-[#9CA3AF]">Search</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Heart className="w-6 h-6 text-[#EF4444]" />
                    <span className="text-xs text-[#9CA3AF]">Saved</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <User className="w-6 h-6 text-[#F59E0B]" />
                    <span className="text-xs text-[#9CA3AF]">Profile</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Sizing Scale</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Small (metadata)</span>
                      <span className="font-mono text-[#F1F0FB]">14px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Medium (default)</span>
                      <span className="font-mono text-[#F1F0FB]">20px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Large (nav, hero)</span>
                      <span className="font-mono text-[#F1F0FB]">24px</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Themed Colors</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Primary (Discover)</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Secondary (Location)</span>
                      <span className="font-mono text-[#F1F0FB]">#67E8F9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Danger (Saved)</span>
                      <span className="font-mono text-[#F1F0FB]">#EF4444</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Warning (Profile)</span>
                      <span className="font-mono text-[#F1F0FB]">#F59E0B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GENRE TAG (Detail Page Style) */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Genre Tag (Translucent)</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#A78BFA]/20 backdrop-blur-sm text-[#A78BFA] text-xs font-medium rounded-full border border-[#A78BFA]/30">
                    Indie Rock
                  </span>
                  <span className="px-3 py-1 bg-[#A78BFA]/20 backdrop-blur-sm text-[#A78BFA] text-xs font-medium rounded-full border border-[#A78BFA]/30">
                    Alternative
                  </span>
                  <span className="px-3 py-1 bg-[#A78BFA]/20 backdrop-blur-sm text-[#A78BFA] text-xs font-medium rounded-full border border-[#A78BFA]/30">
                    Dream Pop
                  </span>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Horizontal)</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Vertical)</span>
                      <span className="font-mono text-[#F1F0FB]">4px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (full)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Styling</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA @ 20%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border</span>
                      <span className="font-mono text-[#F1F0FB]">1px #A78BFA @ 30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Text Color</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Font</span>
                      <span className="font-mono text-[#F1F0FB]">12px / Medium (500)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NAV BUTTON (Glass) */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Navigation Button (Glass)</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex gap-4">
                  <button className="w-11 h-11 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#09090F] transition-colors border border-[#13121E]">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#09090F] transition-colors border border-[#13121E]">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#09090F] transition-colors border border-[#13121E]">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Back Button Size</span>
                      <span className="font-mono text-[#F1F0FB]">44px × 44px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Action Button Size</span>
                      <span className="font-mono text-[#F1F0FB]">40px × 40px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">20px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (circle)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Styling</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background</span>
                      <span className="font-mono text-[#F1F0FB]">#09090F @ 90%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Backdrop Blur</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border</span>
                      <span className="font-mono text-[#F1F0FB]">1px #13121E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Color</span>
                      <span className="font-mono text-[#F1F0FB]">#F1F0FB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GRADIENT BUTTON */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Button (Gradient CTA)</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <button className="w-full max-w-md bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] text-[#09090F] py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-[#A78BFA]/20">
                  <ExternalLink className="w-5 h-5" />
                  Get Tickets — $25
                </button>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Width</span>
                      <span className="font-mono text-[#F1F0FB]">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Height</span>
                      <span className="font-mono text-[#F1F0FB]">56px (16px padding)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (full)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Font</span>
                      <span className="font-mono text-[#F1F0FB]">16px / Semibold (600)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Styling</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gradient From</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gradient To</span>
                      <span className="font-mono text-[#F1F0FB]">#67E8F9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Text Color</span>
                      <span className="font-mono text-[#F1F0FB]">#09090F</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Shadow</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA @ 20%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROFILE AVATAR */}
            <div className="relative group">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#A78BFA]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-xs font-mono text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#A78BFA]/30">ATOM</span>
                <h3 className="text-2xl font-bold text-[#F1F0FB]">Profile Avatar</h3>
              </div>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#A78BFA]/10 rounded-2xl p-8 mb-8 hover:border-[#A78BFA]/30 transition-all shadow-lg">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] flex items-center justify-center">
                    <div className="w-[88px] h-[88px] rounded-full bg-[#13121E] flex items-center justify-center text-3xl font-bold">
                      ME
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#A78BFA]/10 rounded-xl p-6 hover:border-[#A78BFA]/20 transition-colors">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#A78BFA] rounded-full"></div>
                    Dimensions
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Outer Size</span>
                      <span className="font-mono text-[#F1F0FB]">96px (w-24 h-24)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Inner Size</span>
                      <span className="font-mono text-[#F1F0FB]">88px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Width</span>
                      <span className="font-mono text-[#F1F0FB]">4px (gradient ring)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">50% (full circle)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Text Size</span>
                      <span className="font-mono text-[#F1F0FB]">30px / Bold (700)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#A78BFA]/10 rounded-xl p-6 hover:border-[#A78BFA]/20 transition-colors">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#A78BFA] rounded-full"></div>
                    Colors
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gradient From</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gradient To</span>
                      <span className="font-mono text-[#F1F0FB]">#67E8F9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Inner BG</span>
                      <span className="font-mono text-[#F1F0FB]">#13121E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Text Color</span>
                      <span className="font-mono text-[#F1F0FB]">#F1F0FB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== MOLECULES ========== */}
        <section className="border-l-4 border-[#67E8F9] pl-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#67E8F9]/30 to-[#67E8F9]/10 border-2 border-[#67E8F9]/50 flex items-center justify-center shadow-lg shadow-[#67E8F9]/20">
                <div className="w-5 h-5 bg-[#67E8F9] rounded-full"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#F1F0FB]">Molecules</h2>
                <p className="text-[#67E8F9] font-medium">Functional Combinations</p>
              </div>
            </div>
            <p className="text-lg text-[#9CA3AF] ml-[72px]">
              Simple combinations of atoms forming functional UI elements
            </p>
          </div>

          <div className="space-y-20">
            {/* FILTER PILL */}
            <div className="relative group">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#67E8F9]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-xs font-mono text-[#67E8F9] bg-[#67E8F9]/10 px-2.5 py-1 rounded-full border border-[#67E8F9]/30">MOLECULE</span>
                <h3 className="text-2xl font-bold text-[#F1F0FB]">Filter Pill</h3>
              </div>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#67E8F9]/10 rounded-2xl p-8 mb-8 hover:border-[#67E8F9]/30 transition-all shadow-lg">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 rounded-full text-sm font-medium bg-[#A78BFA] text-[#09090F] shadow-lg shadow-[#A78BFA]/20">
                    All
                  </button>
                  <button className="px-4 py-2 rounded-full text-sm font-medium bg-[#13121E] text-[#9CA3AF] hover:bg-[#1A1927] hover:text-[#F1F0FB] transition-all">
                    Indie Rock
                  </button>
                  <button className="px-4 py-2 rounded-full text-sm font-medium bg-[#13121E] text-[#9CA3AF] hover:bg-[#1A1927] hover:text-[#F1F0FB] transition-all">
                    Electronic
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Horizontal)</span>
                      <span className="font-mono text-[#F1F0FB]">16px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Vertical)</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">9999px (full)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Font</span>
                      <span className="font-mono text-[#F1F0FB]">14px / Medium (500)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">States</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-[#9CA3AF]">Default</span>
                      <div className="text-right">
                        <div className="font-mono text-[#F1F0FB] text-xs">#13121E bg</div>
                        <div className="font-mono text-[#9CA3AF] text-xs">#9CA3AF text</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#9CA3AF]">Hover</span>
                      <div className="text-right">
                        <div className="font-mono text-[#F1F0FB] text-xs">#1A1927 bg</div>
                        <div className="font-mono text-[#F1F0FB] text-xs">#F1F0FB text</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#9CA3AF]">Selected</span>
                      <div className="text-right">
                        <div className="font-mono text-[#F1F0FB] text-xs">#A78BFA bg</div>
                        <div className="font-mono text-[#09090F] text-xs">#09090F text</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NAV ITEM */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Navigation Item</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex gap-8 justify-center">
                  {/* Active */}
                  <div className="flex flex-col items-center gap-1">
                    <Flame className="w-6 h-6 text-[#A78BFA]" />
                    <span className="text-xs text-[#A78BFA]">Discover</span>
                  </div>
                  {/* Inactive */}
                  <div className="flex flex-col items-center gap-1">
                    <Search className="w-6 h-6 text-[#9CA3AF]" />
                    <span className="text-xs text-[#9CA3AF]">Search</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Heart className="w-6 h-6 text-[#9CA3AF]" />
                    <span className="text-xs text-[#9CA3AF]">Saved</span>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Min Touch Target</span>
                      <span className="font-mono text-[#F1F0FB]">44px × 44px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">24px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap (Icon to Label)</span>
                      <span className="font-mono text-[#F1F0FB]">4px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Label Font</span>
                      <span className="font-mono text-[#F1F0FB]">12px / Regular</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">States</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Inactive Color</span>
                      <span className="font-mono text-[#F1F0FB]">#9CA3AF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Hover Color</span>
                      <span className="font-mono text-[#F1F0FB]">#F1F0FB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Active Color</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SEARCH INPUT */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Search Input</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="max-w-md">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
                    <input
                      type="text"
                      placeholder="Search shows, artists, venues..."
                      className="w-full h-11 pl-11 pr-11 bg-[#13121E] rounded-xl border border-transparent focus:border-[#A78BFA] text-[#F1F0FB] placeholder:text-[#9CA3AF] outline-none transition-all"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-[#9CA3AF]/20 rounded-full flex items-center justify-center hover:bg-[#9CA3AF]/30 transition-colors">
                      <X className="w-4 h-4 text-[#9CA3AF]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Height</span>
                      <span className="font-mono text-[#F1F0FB]">44px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding Left</span>
                      <span className="font-mono text-[#F1F0FB]">44px (icon + space)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding Right</span>
                      <span className="font-mono text-[#F1F0FB]">44px (clear btn)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Styling</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background</span>
                      <span className="font-mono text-[#F1F0FB]">#13121E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border (default)</span>
                      <span className="font-mono text-[#F1F0FB]">transparent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border (focus)</span>
                      <span className="font-mono text-[#F1F0FB]">#A78BFA</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Text Color</span>
                      <span className="font-mono text-[#F1F0FB]">#F1F0FB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* METADATA ROW */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Metadata Row (Icon + Text)</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="flex items-center gap-3 text-sm text-[#9CA3AF]">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>The Crocodile</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>8:00 PM</span>
                  </div>
                  <span className="text-[#67E8F9]">$25</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">14px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap (Icon to Text)</span>
                      <span className="font-mono text-[#F1F0FB]">4px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap Between Items</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Font Size</span>
                      <span className="font-mono text-[#F1F0FB]">14px / Regular</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Colors</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Default Text</span>
                      <span className="font-mono text-[#F1F0FB]">#9CA3AF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Price (accent)</span>
                      <span className="font-mono text-[#F1F0FB]">#67E8F9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icons</span>
                      <span className="font-mono text-[#F1F0FB]">#9CA3AF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* INFO ROW (Detail Card) */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Info Row (Icon + Label + Content)</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="max-w-md space-y-5">
                  {/* Date/Time Example */}
                  <div className="pb-5 border-b border-[#09090F]">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-[#A78BFA]" />
                      <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Date & Time</div>
                    </div>
                    <div className="pl-6">
                      <div className="font-semibold text-[#F1F0FB] mb-0.5">Friday, March 15, 2026</div>
                      <div className="text-sm text-[#9CA3AF]">Doors: 8:00 PM</div>
                    </div>
                  </div>

                  {/* Venue Example */}
                  <div className="pb-5 border-b border-[#09090F]">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#67E8F9]" />
                      <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Venue</div>
                    </div>
                    <div className="pl-6">
                      <div className="font-semibold text-[#F1F0FB] mb-0.5">The Crocodile</div>
                      <div className="text-sm text-[#9CA3AF]">2200 2nd Ave, Seattle, WA</div>
                      <div className="text-sm text-[#67E8F9] mt-1">2.4 miles away</div>
                    </div>
                  </div>

                  {/* Price Example */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-[#10B981]" />
                      <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Price</div>
                    </div>
                    <div className="pl-6">
                      <div className="font-semibold text-[#F1F0FB]">Starting from $25</div>
                      <div className="text-sm text-[#9CA3AF]">Available now</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">16px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap (Icon to Label)</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Margin Bottom</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Content Left Padding</span>
                      <span className="font-mono text-[#F1F0FB]">24px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Section Padding Bottom</span>
                      <span className="font-mono text-[#F1F0FB]">20px</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Typography</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Label</span>
                      <span className="font-mono text-[#F1F0FB]">12px / Medium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Label Transform</span>
                      <span className="font-mono text-[#F1F0FB]">UPPERCASE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Primary Content</span>
                      <span className="font-mono text-[#F1F0FB]">16px / Semibold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Secondary Content</span>
                      <span className="font-mono text-[#F1F0FB]">14px / Regular</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Divider</span>
                      <span className="font-mono text-[#F1F0FB]">1px #09090F</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PROFILE MENU LIST ITEM */}
            <div className="relative group">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#67E8F9]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-xs font-mono text-[#67E8F9] bg-[#67E8F9]/10 px-2.5 py-1 rounded-full border border-[#67E8F9]/30">MOLECULE</span>
                <h3 className="text-2xl font-bold text-[#F1F0FB]">Profile Menu List Item</h3>
              </div>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#67E8F9]/10 rounded-2xl p-8 mb-8 hover:border-[#67E8F9]/30 transition-all shadow-lg">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Examples</div>
                <div className="max-w-md space-y-2">
                  <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors border border-[#67E8F9]/5">
                    <Music className="w-5 h-5 text-[#A78BFA]" />
                    <span className="flex-1 text-left text-[#F1F0FB]">My Favorite Artists</span>
                    <span className="text-sm text-[#9CA3AF]">12</span>
                  </button>

                  <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors border border-[#67E8F9]/5">
                    <Bell className="w-5 h-5 text-[#67E8F9]" />
                    <span className="flex-1 text-left text-[#F1F0FB]">Notifications</span>
                  </button>

                  <button className="w-full flex items-center gap-3 bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors border border-[#67E8F9]/5">
                    <Settings className="w-5 h-5 text-[#9CA3AF]" />
                    <span className="flex-1 text-left text-[#F1F0FB]">Settings</span>
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#67E8F9]/10 rounded-xl p-6 hover:border-[#67E8F9]/20 transition-colors">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#67E8F9] rounded-full"></div>
                    Dimensions
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Width</span>
                      <span className="font-mono text-[#F1F0FB]">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Height</span>
                      <span className="font-mono text-[#F1F0FB]">64px (16px padding)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">12px (rounded-xl)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap (Icon to Label)</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon Size</span>
                      <span className="font-mono text-[#F1F0FB]">20px (w-5 h-5)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Stack Gap</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E]/50 backdrop-blur-sm border border-[#67E8F9]/10 rounded-xl p-6 hover:border-[#67E8F9]/20 transition-colors">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                    <div className="w-1 h-5 bg-[#67E8F9] rounded-full"></div>
                    Colors & States
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background</span>
                      <span className="font-mono text-[#F1F0FB]">#13121E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background Hover</span>
                      <span className="font-mono text-[#F1F0FB]">#1A1927</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Label Text</span>
                      <span className="font-mono text-[#F1F0FB]">#F1F0FB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Badge Text</span>
                      <span className="font-mono text-[#F1F0FB]">#9CA3AF</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Icon (varies)</span>
                      <span className="font-mono text-[#F1F0FB]">Semantic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border</span>
                      <span className="font-mono text-[#F1F0FB]">#67E8F9 @ 5%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage Notes */}
              <div className="mt-6 bg-[#13121E]/50 backdrop-blur-sm border border-[#67E8F9]/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4 flex items-center gap-2">
                  <div className="w-1 h-5 bg-[#67E8F9] rounded-full"></div>
                  Usage Notes
                </h4>
                <div className="space-y-2 text-sm text-[#9CA3AF]">
                  <p>• Use color-coded icons to create visual hierarchy (violet for favorites, cyan for social, gray for settings)</p>
                  <p>• Optional badge on right side for counts or indicators</p>
                  <p>• Full-width button with left-aligned content for better mobile UX</p>
                  <p>• Subtle border and hover states for clear interactivity</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ORGANISMS ========== */}
        <section className="border-l-4 border-[#10B981] pl-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10B981]/30 to-[#10B981]/10 border-2 border-[#10B981]/50 flex items-center justify-center shadow-lg shadow-[#10B981]/20">
                <div className="w-5 h-5 bg-[#10B981] rounded-full"></div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#F1F0FB]">Organisms</h2>
                <p className="text-[#10B981] font-medium">Complex Components</p>
              </div>
            </div>
            <p className="text-lg text-[#9CA3AF] ml-[72px]">
              Complex UI components combining molecules and atoms into complete interface sections
            </p>
          </div>

          <div className="space-y-20">
            {/* SHOW CARD */}
            <div className="relative group">
              <div className="absolute -left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-[#10B981]/50 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-xs font-mono text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-full border border-[#10B981]/30">ORGANISM</span>
                <h3 className="text-2xl font-bold text-[#F1F0FB]">Show Card</h3>
              </div>
              
              {/* Live Example */}
              <div className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A] border border-[#10B981]/10 rounded-2xl p-8 mb-8 hover:border-[#10B981]/30 transition-all shadow-lg">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="max-w-md mx-auto">
                  <ShowCard show={featuredShow} />
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Container Height</span>
                      <span className="font-mono text-[#F1F0FB]">192px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">16px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Content Padding</span>
                      <span className="font-mono text-[#F1F0FB]">16px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Badge Position</span>
                      <span className="font-mono text-[#F1F0FB]">12px from edges</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Typography</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Artist Name</span>
                      <span className="font-mono text-[#F1F0FB]">24px / Bold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Metadata</span>
                      <span className="font-mono text-[#F1F0FB]">14px / Regular</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Genre Badge</span>
                      <span className="font-mono text-[#F1F0FB]">12px / Medium</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-6 bg-[#13121E] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Component Structure</h4>
                <div className="space-y-3 text-sm text-[#9CA3AF]">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Background:</strong> Artist image with gradient overlay (black/20 top → transparent middle → black/90 bottom)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Top Left:</strong> Genre badge (violet, 90% opacity, backdrop blur)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Top Right:</strong> Featured flame icon (conditional)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Bottom Content:</strong> Artist name (bold, large) + metadata row (venue, time, price)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Interaction:</strong> Hover scales image 105%, entire card is clickable link</span>
                  </div>
                </div>
              </div>
            </div>

            {/* HYPE HEADER */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Hype Header</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="max-w-md mx-auto">
                  <HypeHeader />
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Horizontal)</span>
                      <span className="font-mono text-[#F1F0FB]">24px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Top)</span>
                      <span className="font-mono text-[#F1F0FB]">16px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Bottom)</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Position</span>
                      <span className="font-mono text-[#F1F0FB]">Sticky top</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Typography</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">App Name</span>
                      <span className="font-mono text-[#F1F0FB]">12px / Medium</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">City Name</span>
                      <span className="font-mono text-[#F1F0FB]">24px / Bold</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Location Icon</span>
                      <span className="font-mono text-[#F1F0FB]">20px / #67E8F9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-6 bg-[#13121E] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Component Structure</h4>
                <div className="space-y-3 text-sm text-[#9CA3AF]">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#67E8F9] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Background:</strong> #09090F at 95% opacity with 12px backdrop blur</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#67E8F9] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Left Side:</strong> "Hype.Wav" (small, gray) above MapPin icon + "Seattle" (large, bold) - clickable link to home</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#67E8F9] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Right Side:</strong> Filter button (44px circle, secondary bg)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#67E8F9] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Border:</strong> 1px bottom border #13121E</span>
                  </div>
                </div>
              </div>
            </div>

            {/* GENRE FILTER BAR */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Genre Filter Bar</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="max-w-md mx-auto">
                  <GenreFilter selectedGenre={selectedGenre} onGenreChange={setSelectedGenre} />
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Gap Between Pills</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding Bottom</span>
                      <span className="font-mono text-[#F1F0FB]">8px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Scroll</span>
                      <span className="font-mono text-[#F1F0FB]">Horizontal</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Usage Notes</h4>
                  <div className="space-y-2 text-sm text-[#9CA3AF]">
                    <p>Contains multiple filter pill molecules in horizontal layout</p>
                    <p>Uses flex-shrink-0 to prevent pills from collapsing</p>
                    <p>Hides scrollbar for cleaner appearance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM NAV */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Bottom Navigation</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="max-w-md mx-auto">
                  <div className="bg-[#09090F]/95 backdrop-blur-xl border-t border-[#13121E] rounded-t-2xl overflow-hidden">
                    <div className="px-6">
                      <div className="flex justify-between items-center h-20 pb-6">
                        <div className="flex flex-col items-center gap-1 min-w-[44px]">
                          <Flame className="w-6 h-6 text-[#A78BFA]" />
                          <span className="text-xs text-[#A78BFA]">Discover</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 min-w-[44px]">
                          <Search className="w-6 h-6 text-[#9CA3AF]" />
                          <span className="text-xs text-[#9CA3AF]">Search</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 min-w-[44px]">
                          <Heart className="w-6 h-6 text-[#9CA3AF]" />
                          <span className="text-xs text-[#9CA3AF]">Saved</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 min-w-[44px]">
                          <User className="w-6 h-6 text-[#9CA3AF]" />
                          <span className="text-xs text-[#9CA3AF]">Me</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Total Height</span>
                      <span className="font-mono text-[#F1F0FB]">80px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Horizontal)</span>
                      <span className="font-mono text-[#F1F0FB]">24px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Padding (Bottom)</span>
                      <span className="font-mono text-[#F1F0FB]">24px (safe area)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Position</span>
                      <span className="font-mono text-[#F1F0FB]">Fixed bottom</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Styling</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Background</span>
                      <span className="font-mono text-[#F1F0FB]">#09090F @ 95%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Backdrop Blur</span>
                      <span className="font-mono text-[#F1F0FB]">12px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Top</span>
                      <span className="font-mono text-[#F1F0FB]">1px #13121E</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Distribution</span>
                      <span className="font-mono text-[#F1F0FB]">Space Between</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-6 bg-[#13121E] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Navigation Items</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Flame className="w-4 h-4 text-[#A78BFA]" />
                      <span className="text-[#F1F0FB]">Discover</span>
                      <span className="ml-auto font-mono text-xs text-[#9CA3AF]">#A78BFA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-[#67E8F9]" />
                      <span className="text-[#F1F0FB]">Search</span>
                      <span className="ml-auto font-mono text-xs text-[#9CA3AF]">#67E8F9</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Heart className="w-4 h-4 text-[#EF4444]" />
                      <span className="text-[#F1F0FB]">Saved</span>
                      <span className="ml-auto font-mono text-xs text-[#9CA3AF]">#EF4444</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#F59E0B]" />
                      <span className="text-[#F1F0FB]">Me</span>
                      <span className="ml-auto font-mono text-xs text-[#9CA3AF]">#F59E0B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EVENT DETAILS CARD */}
            <div>
              <h3 className="text-2xl font-bold text-[#F1F0FB] mb-6">Event Details Card</h3>
              
              {/* Live Example */}
              <div className="bg-[#13121E] rounded-2xl p-8 mb-8">
                <div className="text-sm text-[#9CA3AF] mb-4 uppercase tracking-wide">Live Example</div>
                <div className="max-w-md mx-auto bg-[#13121E] rounded-2xl p-5">
                  <div className="mb-5 pb-5 border-b border-[#09090F]">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-[#A78BFA]" />
                      <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Date & Time</div>
                    </div>
                    <div className="pl-6">
                      <div className="font-semibold text-[#F1F0FB] mb-0.5">Friday, March 15, 2026</div>
                      <div className="text-sm text-[#9CA3AF]">Doors: 8:00 PM</div>
                    </div>
                  </div>
                  
                  <div className="mb-5 pb-5 border-b border-[#09090F]">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="w-4 h-4 text-[#67E8F9]" />
                      <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Venue</div>
                    </div>
                    <div className="pl-6">
                      <div className="font-semibold text-[#F1F0FB] mb-0.5">The Crocodile</div>
                      <div className="text-sm text-[#9CA3AF]">2200 2nd Ave, Seattle, WA</div>
                      <div className="text-sm text-[#67E8F9] mt-1">2.4 miles away</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-4 h-4 text-[#10B981]" />
                      <div className="text-xs text-[#9CA3AF] uppercase tracking-wide font-medium">Price</div>
                    </div>
                    <div className="pl-6">
                      <div className="font-semibold text-[#F1F0FB]">Starting from $25</div>
                      <div className="text-sm text-[#9CA3AF]">Available now</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Dimensions</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Container Padding</span>
                      <span className="font-mono text-[#F1F0FB]">20px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Border Radius</span>
                      <span className="font-mono text-[#F1F0FB]">16px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Section Gap</span>
                      <span className="font-mono text-[#F1F0FB]">20px</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#9CA3AF]">Divider</span>
                      <span className="font-mono text-[#F1F0FB]">1px #09090F</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#13121E] rounded-xl p-6">
                  <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Structure</h4>
                  <div className="space-y-2 text-sm text-[#9CA3AF]">
                    <p>Contains 3 Info Row molecules (Date/Time, Venue, Price)</p>
                    <p>Each section separated by border-bottom divider</p>
                    <p>Last section has no border</p>
                    <p>Used on Show Detail page</p>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="mt-6 bg-[#13121E] rounded-xl p-6">
                <h4 className="text-lg font-semibold text-[#F1F0FB] mb-4">Component Structure</h4>
                <div className="space-y-3 text-sm text-[#9CA3AF]">
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Background:</strong> #13121E with 16px border radius</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Sections:</strong> Date/Time (violet icon), Venue (cyan icon), Price (green icon)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-[#F1F0FB]">Optional:</strong> Map preview can be added to Venue section</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESIGN TOKENS REFERENCE */}
        <section>
          <div className="bg-gradient-to-br from-[#A78BFA]/10 to-[#67E8F9]/10 border border-[#A78BFA]/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Quick Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-[#A78BFA] mb-4">Common Spacing</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Page Padding</span>
                    <span className="font-mono text-[#F1F0FB]">16px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Section Gap</span>
                    <span className="font-mono text-[#F1F0FB]">32px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Card Gap</span>
                    <span className="font-mono text-[#F1F0FB]">16px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Element Gap</span>
                    <span className="font-mono text-[#F1F0FB]">8-12px</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#67E8F9] mb-4">Border Radii</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Large Cards</span>
                    <span className="font-mono text-[#F1F0FB]">16px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Small Cards</span>
                    <span className="font-mono text-[#F1F0FB]">12px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Pills/Badges</span>
                    <span className="font-mono text-[#F1F0FB]">9999px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Buttons</span>
                    <span className="font-mono text-[#F1F0FB]">9999px</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-[#10B981] mb-4">Touch Targets</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Minimum Size</span>
                    <span className="font-mono text-[#F1F0FB]">44px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Icon Buttons</span>
                    <span className="font-mono text-[#F1F0FB]">44px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Nav Items</span>
                    <span className="font-mono text-[#F1F0FB]">44px</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#9CA3AF]">Show Cards</span>
                    <span className="font-mono text-[#F1F0FB]">192px H</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#A78BFA]/20">
              <div className="flex flex-wrap gap-3">
                <Link 
                  to="/design-system/tokens"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#A78BFA] text-[#09090F] rounded-full text-sm font-medium hover:bg-[#9F7FEA] transition-colors"
                >
                  View Full Design Tokens
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/design-system/figma-guide"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#13121E] text-[#F1F0FB] rounded-full text-sm font-medium hover:bg-[#1A1927] transition-colors"
                >
                  Figma Rebuild Guide
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

import { Link } from "react-router";
import { Palette, Type, Layout, Component, FileText, ChevronRight, Home, Layers } from "lucide-react";

export function DesignSystemPage() {
  const sections = [
    {
      title: "Design Pattern Mockups",
      description: "Visual mockups of key patterns with Option B flame icon and updated navigation",
      icon: Layers,
      path: "/design-pattern-mockups",
      color: "#10B981"
    },
    {
      title: "Design Tokens",
      description: "Colors, typography, spacing, and other foundational design values",
      icon: Palette,
      path: "/design-system/tokens",
      color: "#A78BFA"
    },
    {
      title: "Components",
      description: "Detailed specifications for all UI components with measurements",
      icon: Component,
      path: "/design-system/components",
      color: "#67E8F9"
    },
    {
      title: "Layout System",
      description: "Grids, breakpoints, spacing patterns, and layout guidelines",
      icon: Layout,
      path: "/design-system/layout",
      color: "#10B981"
    },
    {
      title: "Page Mockups",
      description: "Complete page designs with annotations for all screens",
      icon: FileText,
      path: "/design-system/pages",
      color: "#F59E0B"
    },
    {
      title: "Figma Guide",
      description: "Step-by-step instructions for rebuilding in Figma",
      icon: Type,
      path: "/design-system/figma-guide",
      color: "#A78BFA"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090F] text-[#F1F0FB]">
      {/* Header */}
      <header className="border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-6">
          <Link 
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#F1F0FB] mb-4 transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to App
          </Link>
          <div>
            <div className="text-xs text-[#A78BFA] tracking-wider font-medium mb-2">
              DESIGN SYSTEM SPECIFICATION
            </div>
            <h1 className="text-4xl font-bold text-[#F1F0FB] mb-3">Hype.Wav Design System</h1>
            <p className="text-[#9CA3AF] text-lg max-w-2xl">
              Complete design specifications for rebuilding Hype.Wav in Figma. Every measurement, color, and component documented for pixel-perfect accuracy.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          <div className="bg-[#13121E] rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-[#A78BFA] mb-1">12</div>
            <div className="text-sm text-[#9CA3AF]">Color Tokens</div>
          </div>
          <div className="bg-[#13121E] rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-[#67E8F9] mb-1">4</div>
            <div className="text-sm text-[#9CA3AF]">Core Components</div>
          </div>
          <div className="bg-[#13121E] rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-[#10B981] mb-1">8</div>
            <div className="text-sm text-[#9CA3AF]">Typography Styles</div>
          </div>
          <div className="bg-[#13121E] rounded-xl p-5 text-center">
            <div className="text-3xl font-bold text-[#F59E0B] mb-1">3</div>
            <div className="text-sm text-[#9CA3AF]">Page Templates</div>
          </div>
        </div>

        {/* Section Cards */}
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.path}
                to={section.path}
                className="block bg-[#13121E] rounded-2xl p-6 hover:bg-[#1A1927] transition-all duration-200 border border-transparent hover:border-[#A78BFA]/20 group"
              >
                <div className="flex items-center gap-4">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${section.color}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: section.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#F1F0FB] mb-1 group-hover:text-[#A78BFA] transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-[#9CA3AF]">
                      {section.description}
                    </p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-[#9CA3AF] group-hover:text-[#A78BFA] group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-gradient-to-br from-[#A78BFA]/10 to-[#67E8F9]/10 border border-[#A78BFA]/20 rounded-2xl p-6">
          <h4 className="text-lg font-semibold mb-2 text-[#F1F0FB]">About This Documentation</h4>
          <p className="text-[#9CA3AF] leading-relaxed mb-3">
            This specification provides everything needed to rebuild the Hype.Wav design system in Figma. 
            All measurements are provided in pixels, all colors include hex codes, and components include 
            detailed redline specifications.
          </p>
          <p className="text-sm text-[#9CA3AF]">
            <strong className="text-[#A78BFA]">Target Device:</strong> iPhone 14 Pro (393×852px)<br />
            <strong className="text-[#67E8F9]">Design Software:</strong> Figma<br />
            <strong className="text-[#10B981]">Accessibility:</strong> WCAG AAA Compliant
          </p>
        </div>
      </main>
    </div>
  );
}
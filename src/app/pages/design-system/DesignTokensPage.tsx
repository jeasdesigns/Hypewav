import { Link } from "react-router";
import { ArrowLeft, Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function DesignTokensPage() {
  const [copiedValue, setCopiedValue] = useState<string | null>(null);

  const copyToClipboard = (value: string, label: string) => {
    navigator.clipboard.writeText(value);
    setCopiedValue(label);
    setTimeout(() => setCopiedValue(null), 2000);
  };

  const colors = [
    { name: "Background Primary", value: "#09090F", usage: "Main app background", wcag: "N/A (Base)" },
    { name: "Background Secondary", value: "#13121E", usage: "Cards, elevated surfaces", wcag: "N/A (Surface)" },
    { name: "Text Primary", value: "#F1F0FB", usage: "Headlines, body text, primary content", wcag: "AAA (17.8:1)" },
    { name: "Text Secondary", value: "#9CA3AF", usage: "Metadata, secondary information", wcag: "AAA (7.2:1)" },
    { name: "Violet (Primary Brand)", value: "#A78BFA", usage: "Primary actions, heat scores, active states", wcag: "AA (4.8:1)" },
    { name: "Cyan (Secondary Brand)", value: "#67E8F9", usage: "Links, venue info, secondary accents", wcag: "AAA (8.1:1)" },
    { name: "Success", value: "#10B981", usage: "Success states, available tickets", wcag: "AA (4.5:1)" },
    { name: "Warning", value: "#F59E0B", usage: "Sold out badges, warnings", wcag: "AA (4.6:1)" },
  ];

  const typography = [
    { name: "Display Large", size: "32px", weight: "700", lineHeight: "1.5", usage: "Page titles (h1)" },
    { name: "Display", size: "24px", weight: "700", lineHeight: "1.5", usage: "Artist names in cards, section headers" },
    { name: "Heading XL", size: "20px", weight: "600", lineHeight: "1.5", usage: "Section titles (h2)" },
    { name: "Heading Large", size: "18px", weight: "600", lineHeight: "1.5", usage: "Subsection headers (h3)" },
    { name: "Body Large", size: "16px", weight: "500", lineHeight: "1.5", usage: "Emphasized body text, button labels" },
    { name: "Body", size: "16px", weight: "400", lineHeight: "1.5", usage: "Standard body text, inputs" },
    { name: "Body Small", size: "14px", weight: "400", lineHeight: "1.5", usage: "Metadata, small labels" },
    { name: "Caption", size: "12px", weight: "500", lineHeight: "1.4", usage: "Tags, tiny labels, badges" },
  ];

  const spacing = [
    { name: "XXS", value: "4px", usage: "Tight spacing, icon gaps" },
    { name: "XS", value: "8px", usage: "Small gaps, compact layouts" },
    { name: "SM", value: "12px", usage: "Medium gaps, component padding" },
    { name: "MD", value: "16px", usage: "Standard padding, card spacing" },
    { name: "LG", value: "20px", usage: "Large padding, section gaps" },
    { name: "XL", value: "24px", usage: "Extra large gaps, major sections" },
    { name: "2XL", value: "32px", usage: "Page margins, major spacing" },
    { name: "3XL", value: "48px", usage: "Large section dividers" },
  ];

  const radius = [
    { name: "Small", value: "8px", usage: "Small badges, tags" },
    { name: "Medium", value: "12px", usage: "Buttons, inputs, small cards" },
    { name: "Large", value: "16px", usage: "Cards, containers" },
    { name: "XLarge", value: "20px", usage: "Large cards, modals" },
    { name: "Full", value: "9999px", usage: "Pills, circular buttons" },
  ];

  const shadows = [
    { name: "Small", value: "0 1px 2px rgba(0, 0, 0, 0.3)", usage: "Subtle elevation" },
    { name: "Medium", value: "0 4px 6px rgba(0, 0, 0, 0.4)", usage: "Cards, dropdowns" },
    { name: "Large", value: "0 10px 15px rgba(0, 0, 0, 0.5)", usage: "Modals, overlays" },
    { name: "Glow Violet", value: "0 0 20px rgba(167, 139, 250, 0.2)", usage: "Violet elements on hover" },
    { name: "Glow Cyan", value: "0 0 20px rgba(103, 232, 249, 0.2)", usage: "Cyan elements on hover" },
  ];

  const ColorSwatch = ({ color }: { color: typeof colors[0] }) => {
    const isCopied = copiedValue === color.name;
    return (
      <div className="bg-[#13121E] rounded-xl p-5 hover:bg-[#1A1927] transition-colors">
        <div 
          className="w-full h-20 rounded-lg mb-4 border border-white/10"
          style={{ backgroundColor: color.value }}
        />
        <div className="mb-3">
          <div className="font-semibold text-[#F1F0FB] mb-1">{color.name}</div>
          <button
            onClick={() => copyToClipboard(color.value, color.name)}
            className="flex items-center gap-2 text-sm text-[#A78BFA] hover:text-[#9F7FEA] transition-colors group"
          >
            <span className="font-mono">{color.value}</span>
            {isCopied ? (
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
            ) : (
              <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            )}
          </button>
        </div>
        <div className="text-xs text-[#9CA3AF] mb-2">{color.usage}</div>
        <div className="text-xs">
          <span className="text-[#67E8F9]">WCAG:</span>{" "}
          <span className="text-[#9CA3AF]">{color.wcag}</span>
        </div>
      </div>
    );
  };

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
              DESIGN TOKENS
            </div>
            <h1 className="text-4xl font-bold text-[#F1F0FB]">Foundational Values</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Colors Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#F1F0FB] mb-2">Color Palette</h2>
            <p className="text-[#9CA3AF]">
              All colors meet WCAG accessibility standards when used as specified. Contrast ratios listed against #09090F background.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {colors.map((color) => (
              <ColorSwatch key={color.name} color={color} />
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#F1F0FB] mb-2">Typography Scale</h2>
            <p className="text-[#9CA3AF] mb-4">
              Font: System default (San Francisco on iOS, Roboto on Android, system-ui on web)
            </p>
          </div>
          <div className="bg-[#13121E] rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#09090F]">
                  <tr className="border-b border-[#13121E]">
                    <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Style Name</th>
                    <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Size</th>
                    <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Weight</th>
                    <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Line Height</th>
                    <th className="text-left px-6 py-4 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Usage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#09090F]">
                  {typography.map((type) => (
                    <tr key={type.name} className="hover:bg-[#1A1927] transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#F1F0FB]">{type.name}</td>
                      <td className="px-6 py-4 font-mono text-[#A78BFA]">{type.size}</td>
                      <td className="px-6 py-4 font-mono text-[#67E8F9]">{type.weight}</td>
                      <td className="px-6 py-4 font-mono text-[#10B981]">{type.lineHeight}</td>
                      <td className="px-6 py-4 text-sm text-[#9CA3AF]">{type.usage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#F1F0FB] mb-2">Spacing System</h2>
            <p className="text-[#9CA3AF]">
              Base unit: 4px. All spacing follows a consistent 4px grid.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spacing.map((space) => (
              <div key={space.name} className="bg-[#13121E] rounded-xl p-5 flex items-center gap-4">
                <div className="flex-shrink-0">
                  <div 
                    className="bg-[#A78BFA] rounded"
                    style={{ width: space.value, height: space.value }}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-[#F1F0FB]">{space.name}</div>
                  <div className="text-sm font-mono text-[#A78BFA]">{space.value}</div>
                </div>
                <div className="text-sm text-[#9CA3AF]">{space.usage}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-16">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#F1F0FB] mb-2">Border Radius</h2>
            <p className="text-[#9CA3AF]">
              Rounded corners for cards, buttons, and containers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {radius.map((r) => (
              <div key={r.name} className="bg-[#13121E] rounded-xl p-5">
                <div 
                  className="w-full h-20 bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] mb-4"
                  style={{ borderRadius: r.value }}
                />
                <div className="font-semibold text-[#F1F0FB] mb-1">{r.name}</div>
                <div className="text-sm font-mono text-[#A78BFA] mb-2">{r.value}</div>
                <div className="text-xs text-[#9CA3AF]">{r.usage}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Shadows Section */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-[#F1F0FB] mb-2">Shadows & Effects</h2>
            <p className="text-[#9CA3AF]">
              Elevation and depth effects for layered UI elements.
            </p>
          </div>
          <div className="space-y-4">
            {shadows.map((shadow) => (
              <div key={shadow.name} className="bg-[#13121E] rounded-xl p-5 flex items-center gap-6">
                <div 
                  className="w-24 h-24 bg-[#A78BFA] rounded-xl flex-shrink-0"
                  style={{ boxShadow: shadow.value }}
                />
                <div className="flex-1">
                  <div className="font-semibold text-[#F1F0FB] mb-2">{shadow.name}</div>
                  <div className="text-sm font-mono text-[#67E8F9] mb-2">{shadow.value}</div>
                  <div className="text-xs text-[#9CA3AF]">{shadow.usage}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

import { Link } from "react-router";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";

export function FigmaGuidePage() {
  const steps = [
    {
      phase: "Phase 1: Setup",
      tasks: [
        {
          title: "Create New Figma File",
          description: "File → New design file. Name it 'Hype.Wav Design System'",
          details: [
            "Set up 3 pages: '🎨 Tokens', '🧩 Components', '📱 Screens'",
            "Optional: Add '📖 Documentation' page for notes"
          ]
        },
        {
          title: "Create Canvas Frame",
          description: "Press 'F' and select 'iPhone 14 Pro' from presets",
          details: [
            "Frame size: 393 × 852px",
            "Name it 'Discover - Home'",
            "Background: #09090F"
          ]
        },
        {
          title: "Set Up Local Styles",
          description: "Create color styles first for reusability",
          details: [
            "Select any shape, click fill color",
            "Click + in 'Style' section",
            "Create all 8 color tokens from Design Tokens page",
            "Name format: 'Hype/Background/Primary', 'Hype/Text/Primary', etc."
          ]
        }
      ]
    },
    {
      phase: "Phase 2: Color Styles",
      tasks: [
        {
          title: "Create Background Colors",
          description: "Create 2 background color styles",
          details: [
            "'Hype/Background/Primary' → #09090F",
            "'Hype/Background/Secondary' → #13121E"
          ]
        },
        {
          title: "Create Text Colors",
          description: "Create 2 text color styles",
          details: [
            "'Hype/Text/Primary' → #F1F0FB",
            "'Hype/Text/Secondary' → #9CA3AF"
          ]
        },
        {
          title: "Create Brand Colors",
          description: "Create 4 brand/accent color styles",
          details: [
            "'Hype/Violet' → #A78BFA (Primary brand)",
            "'Hype/Cyan' → #67E8F9 (Secondary brand)",
            "'Hype/Success' → #10B981",
            "'Hype/Warning' → #F59E0B"
          ]
        }
      ]
    },
    {
      phase: "Phase 3: Text Styles",
      tasks: [
        {
          title: "Create Typography Styles",
          description: "Set up 8 text styles from the typography scale",
          details: [
            "Select text tool (T), create text layer",
            "In right panel, click '•••' next to 'Text' → Create style",
            "Create all 8 styles: Display Large, Display, Heading XL, Heading Large, Body Large, Body, Body Small, Caption",
            "Name format: 'Hype/Display/Large', 'Hype/Body/Regular', etc.",
            "Set font to 'SF Pro Display' (Mac) or 'Roboto' (cross-platform)"
          ]
        },
        {
          title: "Typography Specifications",
          description: "Match these exact specifications from Design Tokens",
          details: [
            "Display Large: 32px / Bold (700) / 1.5 line-height",
            "Display: 24px / Bold (700) / 1.5",
            "Heading XL: 20px / Semibold (600) / 1.5",
            "Heading Large: 18px / Semibold (600) / 1.5",
            "Body Large: 16px / Medium (500) / 1.5",
            "Body: 16px / Regular (400) / 1.5",
            "Body Small: 14px / Regular (400) / 1.5",
            "Caption: 12px / Medium (500) / 1.4"
          ]
        }
      ]
    },
    {
      phase: "Phase 4: Component - Show Card",
      tasks: [
        {
          title: "Create Base Shape",
          description: "Build the container first",
          details: [
            "Rectangle (R) → 361px width × 192px height",
            "Corner radius: 16px",
            "Fill: Image or gradient placeholder",
            "Name layer: 'Show Card'"
          ]
        },
        {
          title: "Add Gradient Overlay",
          description: "Create text legibility gradient",
          details: [
            "Rectangle → same size as card",
            "Fill → Linear gradient (top to bottom)",
            "Stop 1 (0%): #000000 at 20% opacity",
            "Stop 2 (50%): #000000 at 0% opacity",
            "Stop 3 (100%): #000000 at 90% opacity",
            "Blend mode: Normal"
          ]
        },
        {
          title: "Add Heat Score Badge",
          description: "Top-right badge with flame icon",
          details: [
            "Auto Layout horizontal (Shift+A)",
            "Padding: 12px × 6px",
            "Gap: 6px",
            "Corner radius: 9999px",
            "Fill: #A78BFA at 90% opacity",
            "Add Effects → Background Blur (4px)",
            "Add flame icon (16px) + text '94' (14px, Medium, #09090F)",
            "Position: 12px from top, 12px from right"
          ]
        },
        {
          title: "Add Status Badge (Optional)",
          description: "Top-left 'Selling Fast' or 'Sold Out' badge",
          details: [
            "Auto Layout horizontal",
            "Padding: 12px × 6px",
            "Corner radius: 9999px",
            "Selling Fast: #67E8F9 bg, #09090F text",
            "Sold Out: #F59E0B bg, #09090F text",
            "Font: 12px, Medium",
            "Position: 12px from top, 12px from left"
          ]
        },
        {
          title: "Add Content Area",
          description: "Artist name and metadata at bottom",
          details: [
            "Auto Layout vertical",
            "Gap: 4px",
            "Padding: 16px",
            "Position: Absolute, 0 from left/right/bottom",
            "Artist Name: 24px / Bold / #F1F0FB",
            "Metadata row: Auto layout horizontal, gap 12px",
            "Venue/Time: 14px / Regular / #9CA3AF with icons (14px)"
          ]
        },
        {
          title: "Make it a Component",
          description: "Convert to reusable component",
          details: [
            "Select all layers → Right click → Create component",
            "Name: 'Show Card'",
            "Add variants if needed (with/without status badge)",
            "Create component properties for: artist name, venue, date, heat score"
          ]
        }
      ]
    },
    {
      phase: "Phase 5: Component - Hype Header",
      tasks: [
        {
          title: "Create Header Container",
          description: "Build the sticky header base",
          details: [
            "Auto Layout vertical",
            "Width: 393px (fill container)",
            "Padding: 16px top, 12px bottom, 16px sides",
            "Fill: #09090F at 95% opacity",
            "Add Effects → Background Blur (12px)",
            "Add border: Bottom, 1px, #13121E"
          ]
        },
        {
          title: "Add Location Label",
          description: "Small text above logo",
          details: [
            "Text: 'GREATER SEATTLE'",
            "Style: 12px / Medium / #A78BFA",
            "Letter spacing: 0.05em (wider)",
            "Transform: Uppercase"
          ]
        },
        {
          title: "Add Logo Row",
          description: "Icon + app name",
          details: [
            "Auto Layout horizontal, gap: 8px",
            "Icon container: 32px × 32px, rounded 8px",
            "Fill: Linear gradient #A78BFA → #67E8F9",
            "Music icon: 16px, #09090F",
            "Text 'Hype.Wav': 24px / Bold / #F1F0FB"
          ]
        },
        {
          title: "Add Action Buttons",
          description: "Search and profile buttons on right",
          details: [
            "Auto Layout horizontal, gap: 8px",
            "Search button: 44px circle, #13121E fill, search icon 20px",
            "Profile button: 44px outer circle with gradient, 40px inner circle #13121E, 'ME' text 14px"
          ]
        },
        {
          title: "Make it a Component",
          description: "Create header component",
          details: [
            "Select all → Create component",
            "Name: 'Hype Header'",
            "Position as 'Fixed' when placing in frames"
          ]
        }
      ]
    },
    {
      phase: "Phase 6: Component - Genre Filter",
      tasks: [
        {
          title: "Create Single Pill",
          description: "Build one filter chip first",
          details: [
            "Auto Layout horizontal",
            "Padding: 16px × 8px",
            "Corner radius: 9999px",
            "Default state: #13121E bg, #9CA3AF text",
            "Active state: #A78BFA bg, #09090F text, shadow",
            "Text: 14px / Medium"
          ]
        },
        {
          title: "Create Component with Variants",
          description: "Add default and selected states",
          details: [
            "Create component from pill",
            "Add variant property: 'State' with 'Default' and 'Selected'",
            "Default: #13121E bg, #9CA3AF text",
            "Selected: #A78BFA bg, #09090F text + shadow (0 10px 15px rgba(167,139,250,0.2))"
          ]
        },
        {
          title: "Create Filter Row",
          description: "Horizontal scrollable row",
          details: [
            "Auto Layout horizontal",
            "Gap: 8px",
            "Padding bottom: 8px",
            "Place multiple pill instances",
            "Set scroll: Horizontal scrolling"
          ]
        }
      ]
    },
    {
      phase: "Phase 7: Component - Bottom Nav",
      tasks: [
        {
          title: "Create Nav Item",
          description: "Single navigation button",
          details: [
            "Auto Layout vertical",
            "Gap: 4px",
            "Align: center",
            "Min size: 44px × 44px (touch target)",
            "Icon: 24px",
            "Label: 12px / Regular"
          ]
        },
        {
          title: "Add Variants",
          description: "Active and inactive states",
          details: [
            "Create component with 'State' property",
            "Active: Icon + text both #A78BFA",
            "Inactive: Icon + text both #9CA3AF",
            "Hover (optional): #F1F0FB"
          ]
        },
        {
          title: "Create Nav Bar Container",
          description: "Full bottom navigation",
          details: [
            "Auto Layout horizontal",
            "Width: 393px",
            "Height: 80px (includes safe area)",
            "Padding: 0px top, 24px bottom, 24px sides",
            "Distribute: Space between",
            "Fill: #09090F at 95% opacity",
            "Background blur: 12px",
            "Border top: 1px, #13121E",
            "Place 4 nav items: Discover, Map, Saved, Profile"
          ]
        }
      ]
    },
    {
      phase: "Phase 8: Build Discover Page",
      tasks: [
        {
          title: "Set Up Page Frame",
          description: "Create the main screen",
          details: [
            "Frame (F) → iPhone 14 Pro (393 × 852)",
            "Name: 'Discover - Home'",
            "Fill: #09090F",
            "Auto Layout: Vertical (to make scrollable)"
          ]
        },
        {
          title: "Add Header",
          description: "Place Hype Header component",
          details: [
            "Drag 'Hype Header' component instance",
            "Set constraints: Left & right (0px), Top (0px)",
            "Set position to 'Fixed' (if Figma supports, else keep at top)",
            "Add status bar spacer: 48px height rectangle above header"
          ]
        },
        {
          title: "Add Genre Filter Section",
          description: "Filter bar below header",
          details: [
            "Container: Auto layout horizontal",
            "Padding: 16px",
            "Background: #09090F",
            "Border bottom: 1px, #13121E",
            "Place Genre Filter component"
          ]
        },
        {
          title: "Add Content Area",
          description: "Scrollable show feed",
          details: [
            "Auto Layout vertical",
            "Padding: 16px sides, 16px top, 96px bottom (nav clearance)",
            "Gap between sections: 32px",
            "Section header: 'THIS WEEK' (20px / Bold)",
            "Gap below header: 16px",
            "Place Show Card instances with 16px gap"
          ]
        },
        {
          title: "Add Bottom Nav",
          description: "Fixed navigation at bottom",
          details: [
            "Place 'Bottom Nav' component",
            "Set constraints: Left & right (0px), Bottom (0px)",
            "Set position to 'Fixed' (or ensure it's at bottom of auto-layout)",
            "Set 'Discover' nav item to active state"
          ]
        },
        {
          title: "Test Scrolling",
          description: "Ensure proper scroll behavior",
          details: [
            "Select main frame → Prototype tab",
            "Overflow scrolling: Vertical",
            "Ensure header and nav remain fixed while content scrolls"
          ]
        }
      ]
    },
    {
      phase: "Phase 9: Build Show Detail Page",
      tasks: [
        {
          title: "Create New Frame",
          description: "Set up detail page",
          details: [
            "Frame → iPhone 14 Pro",
            "Name: 'Show Detail'",
            "Fill: #09090F"
          ]
        },
        {
          title: "Add Hero Section",
          description: "Large image with overlay",
          details: [
            "Rectangle: 393px × 256px",
            "Fill: Artist image or gradient",
            "Add gradient overlay (see Show Card gradient)",
            "Nav buttons at top: Back (left), Share + Heart (right)",
            "All buttons: 36px circle, #09090F/80 bg, blur 4px",
            "Position: 48px from top (safe area)"
          ]
        },
        {
          title: "Add Event Info Overlay",
          description: "Artist name and heat score",
          details: [
            "Auto Layout vertical, 16px from bottom of hero",
            "Heat badge: Same as Show Card (but 90% opacity)",
            "Artist name: 32px / Bold / #F1F0FB",
            "Supporting acts: 16px / Regular / #9CA3AF"
          ]
        },
        {
          title: "Add Detail Cards",
          description: "Date, venue, tickets info",
          details: [
            "Container: 16px padding sides",
            "Card: Auto layout, 20px padding, #13121E bg, 12px radius",
            "Grid: 2 columns for date/venue",
            "Use 12px text for labels (uppercase, #9CA3AF)",
            "Use 14px for values (#F1F0FB)",
            "Add icons (16px, themed colors)"
          ]
        },
        {
          title: "Add Fixed CTA",
          description: "Bottom ticket button",
          details: [
            "Container: Fixed position bottom",
            "Padding: 16px + 24px bottom safe area",
            "Background: #09090F, border top #13121E",
            "Button: 100% width, 48px height, #A78BFA bg, full radius",
            "Text: 'Get Tickets', 16px / Semibold / #09090F"
          ]
        }
      ]
    },
    {
      phase: "Phase 10: Build Artist Profile",
      tasks: [
        {
          title: "Create Frame",
          description: "New artist page",
          details: [
            "Frame → iPhone 14 Pro",
            "Name: 'Artist Profile'",
            "Fill: #09090F"
          ]
        },
        {
          title: "Add Hero Image",
          description: "Shorter hero than Show Detail",
          details: [
            "Rectangle: 393px × 192px",
            "Fill: Artist image",
            "Gradient overlay (lighter than show detail)",
            "Nav buttons: Same as Show Detail page"
          ]
        },
        {
          title: "Add Artist Info Card",
          description: "Overlapping card with bio",
          details: [
            "Position: -32px margin top (overlaps hero)",
            "Width: 361px (393 - 32px horizontal padding)",
            "Auto Layout vertical, 16px padding",
            "Background: #13121E, 12px radius",
            "Shadow: 0 10px 15px rgba(0,0,0,0.5)",
            "Artist name: 24px / Bold",
            "Follower count: 12px / Regular / #9CA3AF",
            "Genre tags: 10px pills with #A78BFA/20 bg",
            "Bio: 12px / Regular / #9CA3AF, leading 1.5"
          ]
        },
        {
          title: "Add Top Tracks Section",
          description: "List of popular songs",
          details: [
            "Section header: 'Top Tracks', 18px / Semibold",
            "Track item: Auto layout horizontal",
            "Height: ~48px, 8px padding",
            "Icon: 36px square, #A78BFA/20 bg (first track)",
            "Track name: 14px / Semibold, truncate",
            "Play count: 12px / Regular / #9CA3AF",
            "Duration: 12px / Regular / #9CA3AF (right aligned)"
          ]
        },
        {
          title: "Add Fixed CTA",
          description: "Follow Artist button",
          details: [
            "Same structure as Show Detail CTA",
            "Button text: 'Follow Artist' with heart icon",
            "Background: #A78BFA"
          ]
        }
      ]
    },
    {
      phase: "Phase 11: Build Search Page",
      tasks: [
        {
          title: "Create Frame",
          description: "New search page",
          details: [
            "Frame → iPhone 14 Pro",
            "Name: 'Search'",
            "Fill: #09090F"
          ]
        },
        {
          title: "Add Search Header",
          description: "Sticky search bar with tabs",
          details: [
            "Container: Position sticky, #09090F/95 bg, backdrop blur",
            "Border bottom: 1px #13121E",
            "Padding: 16px sides, 16px top, 16px bottom",
            "Search input: 44px height, #13121E bg, 12px radius",
            "Icon (left): Search icon, 20px, #9CA3AF, 12px from left",
            "Text: 16px / Regular / #F1F0FB, placeholder #9CA3AF",
            "Clear button (right): 24px circle, #9CA3AF/20 bg, X icon"
          ]
        },
        {
          title: "Add Tab Bar (When Search Active)",
          description: "Filter tabs for results",
          details: [
            "Container: Horizontal scroll, 8px gap",
            "Padding bottom: 12px",
            "Tab pill (default): #13121E bg, #9CA3AF text, 16px H padding, 6px V padding",
            "Tab pill (active): #A78BFA bg, #09090F text",
            "Font: 14px / Medium (500)",
            "Tabs: All, Shows (count), Artists (count), Venues (count)"
          ]
        },
        {
          title: "Add Empty State (No Search)",
          description: "Centered placeholder",
          details: [
            "Icon: Search, 64px, #9CA3AF (50% opacity)",
            "Heading: 'Search Hype.Wav', 24px / Bold / #F1F0FB",
            "Body: 16px / Regular / #9CA3AF",
            "Text: 'Find upcoming shows, discover artists, and explore venues across Greater Seattle'",
            "Center vertically and horizontally"
          ]
        },
        {
          title: "Add Results Sections",
          description: "Shows, Artists, Venues",
          details: [
            "Section header: 18px / Bold / #F1F0FB, 16px margin bottom",
            "Shows: Use Show Card component",
            "Artists: Card 48px H padding, #13121E bg, 12px radius",
            "Artist image: 56px square, 12px radius",
            "Artist name: 16px / Semibold / #F1F0FB",
            "Genres: 14px / Regular / #9CA3AF",
            "Chevron icon: 20px, #9CA3AF, right side",
            "Venues: Same as artists but with MapPin icon instead of image",
            "Venue icon bg: gradient from #A78BFA/20 to #67E8F9/20"
          ]
        },
        {
          title: "Add No Results State",
          description: "When search has no matches",
          details: [
            "Icon: Search, 64px, #9CA3AF (50% opacity)",
            "Heading: 'No Results Found', 24px / Bold / #F1F0FB",
            "Body: 16px / Regular / #9CA3AF",
            "Text: 'Try searching for a different artist, venue, or show'",
            "Center vertically and horizontally"
          ]
        }
      ]
    },
    {
      phase: "Phase 12: Build Saved Page",
      tasks: [
        {
          title: "Create Frame",
          description: "New saved shows page",
          details: [
            "Frame → iPhone 14 Pro",
            "Name: 'Saved'",
            "Fill: #09090F"
          ]
        },
        {
          title: "Add Hype Header",
          description: "Use same header component",
          details: [
            "Copy from Discover page",
            "Small text: 'Hype.Wav' (12px, #9CA3AF)",
            "Large text with icon: MapPin icon (20px, #67E8F9) + 'Seattle' (24px / Bold)",
            "Filter button: 44px circle, #13121E bg"
          ]
        },
        {
          title: "Add Tab Bar",
          description: "Upcoming vs Past toggle",
          details: [
            "Container: Border bottom 1px #13121E",
            "Padding: 16px sides, 12px top/bottom",
            "Two tabs: 'Upcoming' and 'Past'",
            "Layout: Flex, equal width (flex-1)",
            "Tab (inactive): transparent bg, #9CA3AF text, 8px V padding",
            "Tab (active): #A78BFA bg, #09090F text, 8px radius",
            "Font: 16px / Medium (500)",
            "Hover (inactive): #13121E bg, #F1F0FB text"
          ]
        },
        {
          title: "Add Show Cards List",
          description: "Saved shows with delete hint",
          details: [
            "Container: 16px padding, 24px top padding",
            "Gap between cards: 16px",
            "Use Show Card component",
            "Delete hint (on hover): 40px circle, #F59E0B bg, right side",
            "Trash icon: 20px, #09090F",
            "Position absolute on card, opacity 0 → 100 on hover"
          ]
        },
        {
          title: "Add Empty State",
          description: "No saved shows",
          details: [
            "Icon: Heart, 64px, #A78BFA (50% opacity)",
            "Heading (Upcoming): 'No Saved Shows', 24px / Bold / #F1F0FB",
            "Heading (Past): 'No Past Shows', 24px / Bold / #F1F0FB",
            "Body (Upcoming): 'Start saving shows you want to attend and they'll appear here'",
            "Body (Past): 'Shows you've attended will appear here'",
            "Font: 16px / Regular / #9CA3AF",
            "Center vertically and horizontally"
          ]
        }
      ]
    },
    {
      phase: "Phase 13: Build Profile Page (Me)",
      tasks: [
        {
          title: "Create Frame",
          description: "New profile page",
          details: [
            "Frame → iPhone 14 Pro",
            "Name: 'Profile - Me'",
            "Fill: #09090F"
          ]
        },
        {
          title: "Add Hype Header",
          description: "Use same header component",
          details: [
            "Copy from Discover page",
            "Small text: 'Hype.Wav' (12px, #9CA3AF)",
            "Large text with icon: MapPin icon (20px, #67E8F9) + 'Seattle' (24px / Bold)",
            "Filter button: 44px circle, #13121E bg"
          ]
        },
        {
          title: "Add Profile Avatar Section",
          description: "Centered user profile",
          details: [
            "Container: Text center, 32px margin bottom",
            "Avatar outer: 96px circle, gradient from #A78BFA to #67E8F9",
            "Avatar inner: 88px circle, #13121E bg, centered",
            "Avatar text: 'ME', 32px / Bold / #F1F0FB",
            "Name: 'Music Lover', 24px / Bold / #F1F0FB, 4px margin bottom",
            "Location: 'Seattle, WA', 16px / Regular / #9CA3AF"
          ]
        },
        {
          title: "Add Menu Items",
          description: "Settings and info options",
          details: [
            "Container: 16px padding, 8px gap between items",
            "Menu item: Width 100%, #13121E bg, 12px radius, 16px padding",
            "Layout: Flex horizontal, 12px gap, items centered",
            "Icon size: 20px, themed colors",
            "Item 1: Music icon (#A78BFA), 'My Favorite Artists', count '12' (14px / Regular / #9CA3AF)",
            "Item 2: Bell icon (#67E8F9), 'Notifications'",
            "Item 3: Settings icon (#9CA3AF), 'Settings'",
            "Hover: #1A1927 bg"
          ]
        },
        {
          title: "Add About Card",
          description: "App information",
          details: [
            "Container: 32px margin top, 24px padding, #13121E bg, 16px radius",
            "Border: 1px solid #A78BFA/30",
            "Heading: 'About Hype.Wav', 16px / Semibold / #A78BFA, 8px margin bottom",
            "Body: 14px / Regular / #9CA3AF, line-height 1.5, 12px margin bottom",
            "Text: 'Discover the best live music in Greater Seattle. We surface upcoming shows enriched with deep artist data from Spotify.'",
            "Version: 'Version 1.0.0', 12px / Regular / #9CA3AF"
          ]
        }
      ]
    },
    {
      phase: "Phase 14: Update Header with City Selector",
      tasks: [
        {
          title: "Update Hype Header",
          description: "Flip hierarchy for city prominence",
          details: [
            "Remove Music icon and logo square",
            "Small text (app name): 'Hype.Wav', 12px / Medium (500) / #9CA3AF",
            "Tracking: 0.02em (slightly wider)",
            "Margin bottom: 2px",
            "City row: Flex horizontal, 8px gap, items center",
            "Location icon: MapPin, 20px, #67E8F9",
            "City name: 'Seattle', 24px / Bold (700) / #F1F0FB",
            "Purpose: Prepares for future city selector functionality"
          ]
        }
      ]
    },
    {
      phase: "Phase 15: Update Navigation (Remove Tickets)",
      tasks: [
        {
          title: "Update Bottom Nav to 4 Items",
          description: "Remove Tickets tab",
          details: [
            "4 items total (was 5):",
            "1. Discover: Flame icon, #A78BFA when active",
            "2. Search: Search icon, #67E8F9 accent",
            "3. Saved: Heart icon, #EF4444 accent",
            "4. Me: User icon, #F59E0B accent",
            "Removed: Tickets tab",
            "Spacing: Items evenly distributed with justify-between",
            "Each item still maintains 44px minimum touch target"
          ]
        }
      ]
    },
    {
      phase: "Phase 16: Final Polish",
      tasks: [
        {
          title: "Organize Layers",
          description: "Clean up layer hierarchy",
          details: [
            "Group related layers",
            "Use clear naming: 'Header', 'Content', 'Nav', etc.",
            "Lock background layers to prevent accidental edits",
            "Use frames for sections"
          ]
        },
        {
          title: "Add Prototyping Links",
          description: "Connect screens with interactions",
          details: [
            "Prototype tab → Select Show Card",
            "Create connection → Show Detail page",
            "Animation: Push (left to right)",
            "Select back button → Link to Discover",
            "Connect bottom nav between pages"
          ]
        },
        {
          title: "Create Style Guide Page",
          description: "Document all tokens visually",
          details: [
            "Create 'Style Guide' page",
            "Show all color swatches with hex codes",
            "Display typography scale examples",
            "Show component states side-by-side",
            "Add spacing/padding examples"
          ]
        },
        {
          title: "Export Assets (if needed)",
          description: "Prepare for handoff",
          details: [
            "Select any exportable assets (icons, etc.)",
            "Export settings → SVG or PNG @3x",
            "Organize in 'Assets' page if sharing with developers"
          ]
        }
      ]
    }
  ];

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
              FIGMA REBUILD GUIDE
            </div>
            <h1 className="text-4xl font-bold text-[#F1F0FB] mb-3">Step-by-Step Figma Instructions</h1>
            <p className="text-[#9CA3AF]">
              Complete walkthrough to rebuild Hype.Wav design system in Figma from scratch
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Overview */}
        <div className="bg-gradient-to-br from-[#A78BFA]/10 to-[#67E8F9]/10 border border-[#A78BFA]/20 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Before You Start</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold text-[#F1F0FB] mb-2">What You'll Need:</h3>
              <ul className="space-y-1 text-[#9CA3AF]">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                  Figma account (free or paid)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                  Access to Design Tokens page (for colors/typography)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                  Access to Components page (for measurements)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                  Access to Page Mockups (for reference)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#10B981] mt-0.5 flex-shrink-0" />
                  2-4 hours of focused work time
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#F1F0FB] mb-2">Estimated Timeline:</h3>
              <ul className="space-y-1 text-[#9CA3AF]">
                <li>Phase 1-3 (Setup & Styles): 30 minutes</li>
                <li>Phase 4-7 (Components): 60 minutes</li>
                <li>Phase 8-10 (Pages): 90 minutes</li>
                <li>Phase 11-16 (Additional Pages & Polish): 60 minutes</li>
              </ul>
              <div className="mt-4 p-3 bg-[#13121E] rounded-lg">
                <div className="text-xs text-[#9CA3AF] mb-1">💡 Pro Tip</div>
                <div className="text-xs text-[#F1F0FB]">
                  Complete phases in order - styles must be created before components, 
                  components before pages.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="space-y-12">
          {steps.map((phase, phaseIndex) => (
            <section key={phaseIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#A78BFA]/20 border border-[#A78BFA]/40 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#A78BFA]">{phaseIndex + 1}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#F1F0FB]">{phase.phase}</h2>
              </div>

              <div className="space-y-6 pl-13">
                {phase.tasks.map((task, taskIndex) => (
                  <div key={taskIndex} className="bg-[#13121E] rounded-xl overflow-hidden">
                    {/* Task Header */}
                    <div className="p-5 border-b border-[#09090F]">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full border-2 border-[#67E8F9] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#67E8F9]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-[#F1F0FB] mb-1">{task.title}</h3>
                          <p className="text-sm text-[#9CA3AF]">{task.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Task Details */}
                    <div className="p-5">
                      <ul className="space-y-2">
                        {task.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-3 text-sm">
                            <ChevronRight className="w-4 h-4 text-[#A78BFA] mt-0.5 flex-shrink-0" />
                            <span className="text-[#F1F0FB]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Quick Reference */}
        <div className="mt-16 bg-[#13121E] rounded-2xl p-8 border border-[#A78BFA]/20">
          <h2 className="text-2xl font-bold mb-6">Quick Reference Cheat Sheet</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-[#A78BFA] mb-3">Key Measurements</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Canvas</span>
                  <span className="font-mono text-[#F1F0FB]">393 × 852</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Show Card</span>
                  <span className="font-mono text-[#F1F0FB]">192px H</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Safe Area Top</span>
                  <span className="font-mono text-[#F1F0FB]">48px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Safe Area Bottom</span>
                  <span className="font-mono text-[#F1F0FB]">24px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Touch Target Min</span>
                  <span className="font-mono text-[#F1F0FB]">44px</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[#67E8F9] mb-3">Common Spacing</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Page Padding</span>
                  <span className="font-mono text-[#F1F0FB]">16px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Card Padding</span>
                  <span className="font-mono text-[#F1F0FB]">16-20px</span>
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
              <h3 className="font-semibold text-[#10B981] mb-3">Common Radii</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Cards</span>
                  <span className="font-mono text-[#F1F0FB]">16px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Small Cards</span>
                  <span className="font-mono text-[#F1F0FB]">12px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Badges/Pills</span>
                  <span className="font-mono text-[#F1F0FB]">9999px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Logo Icon</span>
                  <span className="font-mono text-[#F1F0FB]">8px</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Buttons</span>
                  <span className="font-mono text-[#F1F0FB]">9999px</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#09090F]">
            <h3 className="font-semibold text-[#F59E0B] mb-3">Keyboard Shortcuts to Know</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-[#9CA3AF]">Frame:</span>
                <span className="ml-2 font-mono text-[#F1F0FB]">F</span>
              </div>
              <div>
                <span className="text-[#9CA3AF]">Rectangle:</span>
                <span className="ml-2 font-mono text-[#F1F0FB]">R</span>
              </div>
              <div>
                <span className="text-[#9CA3AF]">Text:</span>
                <span className="ml-2 font-mono text-[#F1F0FB]">T</span>
              </div>
              <div>
                <span className="text-[#9CA3AF]">Auto Layout:</span>
                <span className="ml-2 font-mono text-[#F1F0FB]">Shift+A</span>
              </div>
            </div>
          </div>
        </div>

        {/* Completion Note */}
        <div className="mt-12 bg-gradient-to-r from-[#A78BFA]/10 to-[#67E8F9]/10 border border-[#67E8F9]/30 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-2 text-[#F1F0FB]">✨ You're Done!</h3>
          <p className="text-[#9CA3AF] mb-4">
            After completing all 16 phases, you'll have a complete, pixel-perfect recreation of the Hype.Wav 
            design system in Figma. You can now iterate on designs, create new screens, or hand off to developers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/design-system/tokens"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#A78BFA] text-[#09090F] rounded-full text-sm font-medium hover:bg-[#9F7FEA] transition-colors"
            >
              View Design Tokens
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/design-system/components"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#13121E] text-[#F1F0FB] rounded-full text-sm font-medium hover:bg-[#1A1927] transition-colors"
            >
              View Component Specs
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/design-system/pages"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#13121E] text-[#F1F0FB] rounded-full text-sm font-medium hover:bg-[#1A1927] transition-colors"
            >
              View Page Mockups
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
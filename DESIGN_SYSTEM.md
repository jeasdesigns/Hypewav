# Hype.Wav Design System Documentation

## Overview
This design system follows atomic design principles with WCAG AAA-compliant colors for the Hype.Wav concert discovery mobile application.

---

## Color System (WCAG AAA Compliant)

### Background Colors
```css
--hype-bg-primary: #09090F      /* Main background - Deep space black */
--hype-bg-secondary: #13121E    /* Cards, inputs - Slightly lighter */
--hype-bg-tertiary: #1A1927     /* Hover states - Elevated elements */
```

### Text Colors
```css
--hype-text-primary: #F1F0FB    /* Primary text - Near white */
--hype-text-secondary: #9CA3AF  /* Secondary text, labels - Gray */
```

### Accent Colors
```css
--hype-violet: #A78BFA          /* Primary brand - Violet */
--hype-cyan: #67E8F9            /* Secondary accent - Cyan */
--hype-success: #10B981         /* Success states - Green */
--hype-warning: #F59E0B         /* Warning/alert - Amber */
```

### Featured Show Indicator
```css
/* Option B: Flame icon treatment */
Border: border-red-500/30
Icon: text-red-500 fill-orange-500
Background: bg-[#09090F]/90 backdrop-blur-sm
```

### Border Color
```css
border-[#13121E]                /* Consistent borders throughout */
```

---

## Typography

### Font Weights
- **Bold**: `font-bold` (headings, emphasis)
- **Medium**: `font-medium` (labels, buttons)
- **Normal**: Default (body text)

### Font Sizes
Rely on theme.css defaults:
- H1: `text-2xl`
- H2: `text-xl`
- H3: `text-lg`
- Body: `text-base`
- Small: `text-sm`
- Extra Small: `text-xs`

---

## Spacing System

### Page Layout
```css
px-4                /* Standard horizontal padding for main content */
px-6                /* Header horizontal padding */
pt-4, pt-6          /* Top padding varies by component */
pb-24               /* Bottom padding for scrollable content (accounts for fixed bottom nav) */
```

### Sections
```css
mb-8                /* Section bottom margin */
space-y-4           /* Vertical spacing between cards */
space-y-3           /* Tighter vertical spacing */
gap-2               /* Small gaps (pills, tags) */
gap-3               /* Medium gaps (flex items) */
```

### Component Breakout Pattern
```css
-mx-4 px-4          /* Break out of parent padding for edge-to-edge scroll */
```

---

## Border Radius

### Standard Radii
```css
rounded-full        /* Pills, badges, circular buttons */
rounded-xl          /* Standard cards, inputs, buttons */
rounded-2xl         /* Major sections, hero cards */
rounded-lg          /* Small cards, nested elements */
```

---

## Transitions

### Standard Transitions
```css
transition-colors   /* Color-only transitions (preferred) */
transition-all      /* All properties (use sparingly) */
transition-opacity  /* Opacity changes */

duration-200        /* Fast transitions */
duration-300        /* Standard transitions */
```

### Interactive States
```css
hover:bg-[#1A1927]            /* Hover: Tertiary background */
hover:text-[#F1F0FB]          /* Hover: Primary text */
active:scale-95               /* Active: Slight scale down */
active:scale-[0.98]           /* Active: Minimal scale down */
```

---

## Component Patterns

### Sticky Header
```tsx
<header className="sticky top-0 z-40 border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md">
  <div className="max-w-md mx-auto px-6 pt-4 pb-3">
    {/* Header content */}
  </div>
</header>
```

### Bottom Navigation
```tsx
<nav className="sticky bottom-0 left-0 right-0 bg-[#09090F]/95 backdrop-blur-xl border-t border-[#13121E] z-50 mt-auto">
  <div className="max-w-md mx-auto px-4">
    <div className="flex justify-around items-center h-20 pb-6">
      {/* Nav items with min-w-[44px] min-h-[44px] for accessibility */}
    </div>
  </div>
</nav>
```

### Cards
```tsx
{/* Standard Show Card */}
<div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-b from-transparent to-[#09090F]">
  {/* Card content */}
</div>

{/* List Card */}
<div className="flex items-center gap-3 p-3 bg-[#13121E] rounded-xl hover:bg-[#1A1927] transition-colors">
  {/* Card content */}
</div>
```

### Buttons
```tsx
{/* Primary Action */}
<button className="w-full py-3 bg-[#A78BFA] text-[#09090F] rounded-xl font-medium hover:bg-[#A78BFA]/90 transition-colors active:scale-[0.98]">
  Action
</button>

{/* Secondary Action */}
<button className="w-full py-3 bg-[#13121E] text-[#F1F0FB] rounded-xl font-medium hover:bg-[#1A1927] transition-colors">
  Action
</button>

{/* Icon Button */}
<button className="w-11 h-11 rounded-full bg-[#13121E] flex items-center justify-center hover:bg-[#1A1927] transition-colors active:scale-95">
  <Icon className="w-5 h-5 text-[#9CA3AF]" />
</button>
```

### Tabs
```tsx
<div className="flex gap-2 px-4 py-3">
  <button className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
    active ? 'bg-[#A78BFA] text-[#09090F]' : 'bg-transparent text-[#9CA3AF] hover:bg-[#13121E] hover:text-[#F1F0FB]'
  }`}>
    Tab Label
  </button>
</div>
```

### Genre Pills (Scrollable)
```tsx
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4">
  <button className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap flex-shrink-0 transition-all duration-200 ${
    selected ? 'bg-[#A78BFA] text-[#09090F] shadow-lg shadow-[#A78BFA]/20' : 'bg-[#13121E] text-[#9CA3AF] hover:bg-[#1A1927] hover:text-[#F1F0FB]'
  }`}>
    Genre
  </button>
</div>
```

### Input Fields
```tsx
<input 
  className="w-full bg-[#13121E] text-[#F1F0FB] placeholder:text-[#9CA3AF] px-4 py-3 rounded-xl border border-transparent focus:border-[#A78BFA] focus:outline-none transition-all"
  placeholder="Search..."
/>
```

### Badges
```tsx
{/* Genre Badge */}
<div className="bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
  Genre
</div>

{/* Status Badge */}
<div className="bg-[#F59E0B]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
  Sold Out
</div>
```

---

## Layout Components

### MobileFrame
- **Width**: 390px (iPhone 14 Pro)
- **Height**: 844px
- **Scrollbar**: Hidden via CSS
- **Container**: All content scrolls within frame

### AppLayout
- **Structure**: Flex column with bottom nav
- **Content padding**: `pb-20` to prevent overlap with bottom nav
- **Bottom nav**: Fixed position, always visible

---

## Accessibility

### Touch Targets
```css
min-w-[44px] min-h-[44px]     /* Minimum touch target size */
```

### Focus States
```css
focus:border-[#A78BFA]        /* Violet focus ring for inputs */
focus:outline-none            /* Remove default outline */
```

### ARIA Labels
- All icon-only buttons have `aria-label`
- Decorative elements use `aria-hidden="true"`
- Links indicate external with `rel="noopener noreferrer"`

### Screen Reader Text
```tsx
<span className="sr-only">Description for screen readers</span>
```

---

## Scrolling

### Hide Scrollbar Utility
```css
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
```

### Horizontal Scroll Pattern
```tsx
<div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
  {/* Scrollable items */}
</div>
```

---

## Icons

### Icon Library
- **Package**: `lucide-react`
- **Standard Size**: `w-5 h-5` (20px)
- **Small Size**: `w-4 h-4` (16px)
- **Large Size**: `w-6 h-6` (24px)

### Icon Colors
```tsx
text-[#9CA3AF]      /* Default/inactive */
text-[#A78BFA]      /* Active/primary */
text-[#67E8F9]      /* Accent/location */
text-[#10B981]      /* Success */
text-[#F59E0B]      /* Warning */
```

---

## Z-Index Scale
```css
z-10               /* Sticky search header */
z-40               /* Sticky page header */
z-50               /* Bottom navigation */
z-[60]             /* Floating action buttons */
```

---

## Gradient Overlays

### Image Overlays
```tsx
{/* Text legibility gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />

{/* Hero gradient */}
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#09090F]" />
```

### Background Gradients
```tsx
{/* Violet to Cyan */}
className="bg-gradient-to-br from-[#A78BFA] to-[#67E8F9]"

{/* Violet accent (subtle) */}
className="bg-gradient-to-br from-[#A78BFA]/20 to-[#67E8F9]/20"
```

---

## Empty States

### Pattern
```tsx
<div className="flex items-center justify-center h-[calc(100vh-300px)]">
  <div className="text-center px-6">
    <Icon className="w-16 h-16 mx-auto mb-4 text-[#9CA3AF] opacity-50" />
    <h2 className="text-2xl font-bold mb-2">Heading</h2>
    <p className="text-[#9CA3AF]">Description text</p>
  </div>
</div>
```

---

## Backdrop Effects
```css
backdrop-blur-sm    /* Subtle blur for badges */
backdrop-blur-md    /* Medium blur for headers */
backdrop-blur-xl    /* Strong blur for overlays */
```

---

## Shadow System
```css
shadow-lg                     /* Standard elevation */
shadow-2xl                    /* High elevation */
shadow-lg shadow-[#A78BFA]/20 /* Colored glow effect */
```

---

## Line Clamping
```css
line-clamp-1        /* Single line truncation */
line-clamp-2        /* Two line truncation */
```

---

## Development Guidelines

### DO:
✅ Use design tokens for all colors
✅ Maintain consistent spacing patterns
✅ Use transition-colors for performance
✅ Include min touch targets (44px)
✅ Add ARIA labels to icon buttons
✅ Use scrollbar-hide for horizontal scrolls
✅ Follow breakout pattern for edge-to-edge content

### DON'T:
❌ Hardcode colors outside design system
❌ Use transition-all unnecessarily
❌ Create touch targets smaller than 44px
❌ Mix spacing patterns between components
❌ Use overflow-y-auto on main content (MobileFrame handles scroll)
❌ Forget backdrop-blur with semi-transparent backgrounds

---

## File Structure
```
src/app/
├── components/          # Reusable components
│   ├── AppLayout.tsx   # Main layout wrapper
│   ├── BottomNav.tsx   # Bottom navigation
│   ├── GenreFilter.tsx # Genre pill selector
│   ├── HypeHeader.tsx  # Sticky header
│   ├── MobileFrame.tsx # Mobile viewport container
│   └── ShowCard.tsx    # Show card component
├── pages/              # Page components
├── data/               # Mock data
└── routes.ts           # React Router config

src/styles/
├── theme.css           # Design tokens
└── fonts.css           # Font imports
```

---

## Version
**Design System Version**: 1.0.0
**Last Updated**: March 2026
**Maintained by**: Hype.Wav Team

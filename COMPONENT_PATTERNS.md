# Hype.Wav Component Pattern Reference

Quick reference guide for common component patterns used throughout Hype.Wav.

---

## Layout Patterns

### Mobile Container
```tsx
import { MobileFrame } from './components/MobileFrame';

function App() {
  return (
    <MobileFrame>
      {/* Your app content */}
    </MobileFrame>
  );
}
```

### Page Layout with Bottom Nav
```tsx
import { AppLayout } from './components/AppLayout';

function MyPage() {
  return (
    <AppLayout showBottomNav={true}>
      {/* Page content */}
    </AppLayout>
  );
}
```

### Page Layout without Bottom Nav
```tsx
<AppLayout showBottomNav={false}>
  {/* Full screen content */}
</AppLayout>
```

---

## Navigation Patterns

### Sticky Header
```tsx
<header className="sticky top-0 z-40 border-b border-[#13121E] bg-[#09090F]/95 backdrop-blur-md">
  <div className="max-w-md mx-auto px-6 pt-4 pb-3">
    {/* Header content */}
  </div>
</header>
```

### Bottom Navigation (4 items)
```tsx
import { BottomNav } from './components/BottomNav';

// Already configured with:
// - Discover (Flame icon)
// - Search (Search icon)
// - Saved (Heart icon)
// - Me (User icon)

<BottomNav />
```

### Back Button
```tsx
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

<Link 
  to="/"
  className="w-11 h-11 bg-[#09090F]/90 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-[#09090F] transition-colors active:scale-95 border border-[#13121E]"
>
  <ChevronLeft className="w-5 h-5" />
</Link>
```

---

## Card Patterns

### Show Card (Image Card)
```tsx
import { ShowCard } from './components/ShowCard';

<ShowCard show={show} />
```

### List Item Card
```tsx
<div className="flex items-center gap-3 p-3 bg-[#13121E] rounded-xl hover:bg-[#1A1927] transition-colors cursor-pointer group">
  <div className="w-14 h-14 bg-gradient-to-br from-[#A78BFA]/20 to-[#67E8F9]/20 rounded-lg flex items-center justify-center">
    {/* Icon */}
  </div>
  <div className="flex-1 min-w-0">
    <h4 className="font-semibold text-[#F1F0FB] truncate">Title</h4>
    <p className="text-sm text-[#9CA3AF] truncate">Subtitle</p>
  </div>
  <ChevronRight className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#A78BFA] transition-colors" />
</div>
```

### Info Card (Detail Card)
```tsx
<div className="bg-[#13121E] rounded-2xl p-5 mb-6">
  {/* Card content */}
</div>
```

### Accent Border Card
```tsx
<div className="p-6 bg-[#13121E] rounded-2xl border border-[#A78BFA]/30">
  <h3 className="font-semibold mb-2 text-[#A78BFA]">Title</h3>
  <p className="text-sm text-[#9CA3AF]">Content</p>
</div>
```

---

## Button Patterns

### Primary Button
```tsx
<button className="w-full py-3 bg-[#A78BFA] text-[#09090F] rounded-xl font-medium hover:bg-[#A78BFA]/90 transition-colors active:scale-[0.98]">
  Primary Action
</button>
```

### Secondary Button
```tsx
<button className="w-full py-3 bg-[#13121E] text-[#F1F0FB] rounded-xl font-medium hover:bg-[#1A1927] transition-colors active:scale-[0.98]">
  Secondary Action
</button>
```

### Icon Button (Large)
```tsx
<button className="w-11 h-11 rounded-full bg-[#13121E] flex items-center justify-center hover:bg-[#1A1927] transition-colors active:scale-95" aria-label="Description">
  <Icon className="w-5 h-5 text-[#9CA3AF]" />
</button>
```

### Icon Button (Small)
```tsx
<button className="w-10 h-10 rounded-full bg-[#09090F]/90 backdrop-blur-md flex items-center justify-center hover:bg-[#09090F] transition-colors active:scale-95 border border-[#13121E]" aria-label="Description">
  <Icon className="w-5 h-5" />
</button>
```

### Text Link Button
```tsx
<button className="text-sm text-[#A78BFA] font-medium hover:underline transition-colors">
  Link Text
</button>
```

### Animated "See All" Button
```tsx
import { ChevronRight } from 'lucide-react';

<button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
  See all
  <ChevronRight className="w-4 h-4" />
</button>
```

---

## Input Patterns

### Search Input with Clear Button
```tsx
import { Search, X } from 'lucide-react';

const [query, setQuery] = useState('');

<div className="relative">
  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
  <input
    type="text"
    placeholder="Search..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="w-full bg-[#13121E] text-[#F1F0FB] placeholder:text-[#9CA3AF] pl-11 pr-10 py-3 rounded-xl border border-transparent focus:border-[#A78BFA] focus:outline-none transition-colors"
  />
  {query && (
    <button
      onClick={() => setQuery('')}
      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-[#9CA3AF] hover:text-[#F1F0FB]"
    >
      <X className="w-5 h-5" />
    </button>
  )}
</div>
```

### Standard Text Input
```tsx
<input 
  type="text"
  placeholder="Enter text..."
  className="w-full bg-[#13121E] text-[#F1F0FB] placeholder:text-[#9CA3AF] px-4 py-3 rounded-xl border border-transparent focus:border-[#A78BFA] focus:outline-none transition-colors"
/>
```

---

## Tab Patterns

### Two-Tab Switcher
```tsx
const [activeTab, setActiveTab] = useState<'tab1' | 'tab2'>('tab1');

<div className="flex gap-2 px-4 py-3">
  <button
    onClick={() => setActiveTab('tab1')}
    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
      activeTab === 'tab1'
        ? 'bg-[#A78BFA] text-[#09090F]'
        : 'bg-transparent text-[#9CA3AF] hover:bg-[#13121E] hover:text-[#F1F0FB]'
    }`}
  >
    Tab 1
  </button>
  <button
    onClick={() => setActiveTab('tab2')}
    className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
      activeTab === 'tab2'
        ? 'bg-[#A78BFA] text-[#09090F]'
        : 'bg-transparent text-[#9CA3AF] hover:bg-[#13121E] hover:text-[#F1F0FB]'
    }`}
  >
    Tab 2
  </button>
</div>
```

---

## Badge & Pill Patterns

### Genre Badge
```tsx
<div className="bg-[#A78BFA]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
  Indie Rock
</div>
```

### Status Badge (Warning)
```tsx
<div className="bg-[#F59E0B]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-[#09090F] shadow-lg">
  Sold Out
</div>
```

### Tag Pill (Outlined)
```tsx
<span className="px-3 py-1 bg-[#A78BFA]/20 backdrop-blur-sm text-[#A78BFA] text-xs font-medium rounded-full border border-[#A78BFA]/30">
  Electronic
</span>
```

### Featured Indicator (Flame Icon - Option B)
```tsx
import { Flame } from 'lucide-react';

<div 
  className="w-9 h-9 bg-[#09090F]/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30" 
  aria-label="Selling Fast"
>
  <Flame className="w-5 h-5 text-red-500 fill-orange-500" />
</div>
```

---

## Scrolling Patterns

### Horizontal Scroll (Genre Pills)
```tsx
import { GenreFilter } from './components/GenreFilter';

const [selectedGenre, setSelectedGenre] = useState('All');

<GenreFilter 
  selectedGenre={selectedGenre}
  onGenreChange={setSelectedGenre}
/>
```

### Custom Horizontal Scroll
```tsx
<div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
  {items.map(item => (
    <div key={item.id} className="flex-shrink-0 w-40">
      {/* Item content */}
    </div>
  ))}
  {/* Optional spacer for end padding */}
  <div className="w-4 flex-shrink-0" aria-hidden="true" />
</div>
```

### Vertical Scroll List
```tsx
<div className="space-y-4">
  {items.map(item => (
    <ItemCard key={item.id} item={item} />
  ))}
</div>
```

---

## Empty State Patterns

### Center Empty State
```tsx
import { Icon } from 'lucide-react';

<div className="flex items-center justify-center h-[calc(100vh-300px)]">
  <div className="text-center px-6">
    <Icon className="w-16 h-16 mx-auto mb-4 text-[#9CA3AF] opacity-50" />
    <h2 className="text-2xl font-bold mb-2">Heading</h2>
    <p className="text-[#9CA3AF] max-w-sm">
      Description text goes here
    </p>
  </div>
</div>
```

### Emoji Empty State
```tsx
<div className="text-center py-16">
  <div className="text-6xl mb-4">🎵</div>
  <h3 className="text-xl font-bold mb-2">No items found</h3>
  <p className="text-[#9CA3AF]">Try a different filter</p>
</div>
```

---

## Section Header Patterns

### Section Header with Action
```tsx
import { ChevronRight } from 'lucide-react';

<div className="flex items-center justify-between mb-4">
  <h2 className="text-xl font-bold text-[#F1F0FB]">Section Title</h2>
  <button className="text-sm text-[#A78BFA] flex items-center gap-1 hover:gap-2 transition-[gap] duration-200">
    See all
    <ChevronRight className="w-4 h-4" />
  </button>
</div>
```

### Section Header with Icon
```tsx
import { Zap } from 'lucide-react';

<div className="flex items-center gap-2 mb-4">
  <Zap className="w-5 h-5 text-[#A78BFA]" />
  <h2 className="text-xl font-bold text-[#F1F0FB]">Featured Section</h2>
</div>
```

### Subsection Header
```tsx
<div className="text-xs text-[#9CA3AF] mb-3 uppercase tracking-wide font-medium">
  Subsection Label
</div>
```

---

## Image Patterns

### Hero Image with Gradient Overlay
```tsx
<div className="relative h-[420px]">
  <div className="absolute inset-0">
    <img 
      src={imageUrl} 
      alt={altText}
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#09090F]" />
  </div>
  {/* Content overlaid on image */}
</div>
```

### Card Image with Overlay
```tsx
<div className="relative rounded-2xl overflow-hidden h-48">
  <img 
    src={imageUrl} 
    alt={altText}
    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
</div>
```

### Avatar with Gradient Ring
```tsx
<div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#A78BFA] to-[#67E8F9] flex items-center justify-center">
  <div className="w-[88px] h-[88px] rounded-full bg-[#13121E] flex items-center justify-center">
    {/* Avatar content */}
  </div>
</div>
```

---

## Gradient Patterns

### Background Gradient (Subtle)
```tsx
className="bg-gradient-to-br from-[#13121E] to-[#0F0E1A]"
```

### Icon Background Gradient
```tsx
<div className="w-14 h-14 bg-gradient-to-br from-[#A78BFA]/20 to-[#67E8F9]/20 rounded-lg flex items-center justify-center">
  <Icon className="w-6 h-6 text-[#67E8F9]" />
</div>
```

### Image Text Legibility Gradient
```tsx
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
```

---

## Loading & State Patterns

### Opacity Loading State
```tsx
className="opacity-50 pointer-events-none"
```

### Hover State (Group Pattern)
```tsx
<div className="group">
  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
    {/* Shows on hover */}
  </div>
</div>
```

---

## Spacing Quick Reference

```tsx
// Page content
px-4              // Main horizontal padding
pt-6              // Top padding
pb-24             // Bottom padding (with bottom nav)

// Sections
mb-8              // Section bottom margin
space-y-4         // Vertical card spacing

// Components
gap-2             // Small gaps
gap-3             // Medium gaps
p-3, p-4, p-5     // Component padding
```

---

## Common Icon Sizes

```tsx
w-3 h-3          // 12px - Tiny inline icons
w-3.5 h-3.5      // 14px - Small inline icons
w-4 h-4          // 16px - Small icons
w-5 h-5          // 20px - Standard icons
w-6 h-6          // 24px - Large icons
w-16 h-16        // 64px - Empty state icons
```

---

## Accessibility Patterns

### Minimum Touch Target
```tsx
className="min-w-[44px] min-h-[44px]"
```

### Icon Button with Label
```tsx
<button aria-label="Close dialog">
  <X className="w-5 h-5" />
</button>
```

### Screen Reader Only Text
```tsx
<span className="sr-only">Description for screen readers</span>
```

### Decorative Element
```tsx
<div aria-hidden="true">
  {/* Decorative content */}
</div>
```

---

## Quick Tips

1. **Always use design system colors** - Never hardcode arbitrary hex values
2. **Prefer transition-colors** over transition-all for performance
3. **Include min touch targets** - 44x44px minimum for mobile
4. **Use backdrop-blur with transparency** - Creates depth
5. **Add aria-labels to icon buttons** - Required for accessibility
6. **Use scrollbar-hide for horizontal scrolls** - Cleaner UI
7. **Include hover AND active states** - Better feedback
8. **Use group pattern for nested hovers** - More intuitive
9. **Add spacer divs in horizontal scrolls** - Prevents edge cutoff
10. **Test on actual mobile devices** - Desktop approximation isn't enough

---

**Last Updated**: March 8, 2026  
**Version**: 1.0.0

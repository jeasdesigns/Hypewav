# Hype.Wav Design Tokens Reference

Quick reference for all design tokens used in Hype.Wav. Copy-paste ready.

---

## 🎨 Colors

### Background Colors
```css
#09090F    /* Primary background - Deep space black */
#13121E    /* Secondary background - Cards, inputs */
#1A1927    /* Tertiary background - Hover states */
```

### Text Colors
```css
#F1F0FB    /* Primary text - Near white */
#9CA3AF    /* Secondary text - Gray */
```

### Accent Colors
```css
#A78BFA    /* Primary accent - Violet */
#67E8F9    /* Secondary accent - Cyan */
#10B981    /* Success - Green */
#F59E0B    /* Warning - Amber */
```

### Feature Colors
```css
/* Featured Show Indicator (Option B - Flame) */
text-red-500           /* Icon stroke */
fill-orange-500        /* Icon fill */
border-red-500/30      /* Container border */
```

### Border Color
```css
#13121E    /* All borders throughout app */
```

---

## 📏 Spacing

### Page Padding
```css
px-4       /* Main content horizontal */
px-6       /* Header horizontal */
pt-4       /* Top padding (small) */
pt-6       /* Top padding (medium) */
pb-24      /* Bottom padding (accounts for bottom nav) */
```

### Section Spacing
```css
mb-8       /* Section bottom margin */
mb-6       /* Smaller section margin */
mb-4       /* Subsection margin */
mb-3       /* Small margin */
mb-2       /* Tiny margin */
```

### Component Spacing
```css
space-y-4  /* Vertical card spacing */
space-y-3  /* Tighter vertical spacing */
space-y-2  /* Dense vertical spacing */
gap-3      /* Medium flex gap */
gap-2      /* Small flex gap */
gap-1      /* Tiny flex gap */
```

### Component Padding
```css
p-6        /* Large padding */
p-5        /* Medium-large padding */
p-4        /* Medium padding */
p-3        /* Small padding */
p-2        /* Tiny padding */
```

### Breakout Pattern
```css
-mx-4 px-4 /* Break out of parent padding for edge-to-edge scroll */
```

---

## 🔤 Typography

### Font Weights
```css
font-bold      /* Headings, emphasis */
font-semibold  /* Subheadings, card titles */
font-medium    /* Labels, buttons, tabs */
(default)      /* Body text */
```

### Font Sizes
```css
text-3xl       /* Hero headings (30px) */
text-2xl       /* Page headings (24px) */
text-xl        /* Section headings (20px) */
text-lg        /* Large text (18px) */
text-base      /* Body text (16px) */
text-sm        /* Small text (14px) */
text-xs        /* Extra small (12px) */
```

### Text Colors (Tailwind Classes)
```css
text-[#F1F0FB]   /* Primary text */
text-[#9CA3AF]   /* Secondary text */
text-[#A78BFA]   /* Accent violet */
text-[#67E8F9]   /* Accent cyan */
text-[#10B981]   /* Success */
text-[#F59E0B]   /* Warning */
text-[#09090F]   /* Dark text on light bg */
```

---

## 📐 Border Radius

```css
rounded-full   /* Pills, badges, circular buttons */
rounded-2xl    /* Hero sections, major cards (16px) */
rounded-xl     /* Standard cards, inputs, buttons (12px) */
rounded-lg     /* Small nested elements (8px) */
rounded-md     /* Minimal rounding (6px) */
```

---

## ⚡ Transitions

### Transition Types
```css
transition-colors    /* Color-only (preferred for performance) */
transition-opacity   /* Opacity changes */
transition-all       /* All properties (use sparingly) */
transition-transform /* Transform only */
transition-[gap]     /* Specific property */
```

### Durations
```css
duration-200   /* Fast (hover states) */
duration-300   /* Standard (most transitions) */
```

### Transform Effects
```css
active:scale-95        /* Button press (large) */
active:scale-[0.98]    /* Button press (subtle) */
hover:scale-105        /* Image zoom */
```

---

## 🎭 Effects

### Backdrop Blur
```css
backdrop-blur-sm   /* Subtle blur (4px) - badges */
backdrop-blur-md   /* Medium blur (12px) - headers */
backdrop-blur-xl   /* Strong blur (24px) - overlays */
```

### Shadows
```css
shadow-lg                      /* Standard elevation */
shadow-2xl                     /* High elevation */
shadow-lg shadow-[#A78BFA]/20  /* Colored glow (violet) */
```

### Opacity
```css
/95    /* 95% - Headers with backdrop blur */
/90    /* 90% - Badges, overlays */
/50    /* 50% - Hover states, decorative */
/30    /* 30% - Subtle backgrounds */
/20    /* 20% - Very subtle tints */
```

---

## 🌈 Gradients

### Background Gradients
```css
/* Violet to Cyan */
bg-gradient-to-br from-[#A78BFA] to-[#67E8F9]

/* Violet to Cyan (Subtle) */
bg-gradient-to-br from-[#A78BFA]/20 to-[#67E8F9]/20

/* Dark gradient */
bg-gradient-to-br from-[#13121E] to-[#0F0E1A]

/* Transparent to Dark */
bg-gradient-to-b from-transparent to-[#09090F]
```

### Image Overlay Gradients
```css
/* Text legibility */
bg-gradient-to-b from-black/20 via-transparent to-black/90

/* Hero overlay */
bg-gradient-to-b from-black/40 via-black/20 to-[#09090F]

/* Subtle overlay */
bg-gradient-to-b from-transparent to-black/60
```

---

## 📊 Z-Index Scale

```css
z-10     /* Sticky search header */
z-40     /* Sticky page header */
z-50     /* Bottom navigation */
z-[60]   /* Floating action buttons */
```

---

## 🎯 Component-Specific Tokens

### Touch Targets
```css
min-w-[44px] min-h-[44px]   /* Minimum touch target size */
w-11 h-11                    /* Icon button (44px) */
w-10 h-10                    /* Small icon button (40px) */
```

### Icon Sizes
```css
w-3 h-3        /* 12px - Tiny inline */
w-3.5 h-3.5    /* 14px - Small inline */
w-4 h-4        /* 16px - Small */
w-5 h-5        /* 20px - Standard */
w-6 h-6        /* 24px - Large */
w-8 h-8        /* 32px - Extra large */
w-16 h-16      /* 64px - Empty state */
```

### Avatar Sizes
```css
w-16 h-16      /* 64px - Small avatar */
w-24 h-24      /* 96px - Standard avatar */
```

### Card Heights
```css
h-48           /* 192px - Show card */
h-32           /* 128px - Map placeholder */
h-24           /* 96px - Similar show thumbnail */
h-20           /* 80px - Bottom nav */
```

---

## 📱 Layout Tokens

### Mobile Frame
```css
width: 390px    /* iPhone 14 Pro width */
height: 844px   /* iPhone 14 Pro height */
```

### Content Max Width
```css
max-w-md       /* 448px - Content container */
max-w-sm       /* 384px - Narrow content */
```

---

## 🖼️ Border Tokens

### Border Widths
```css
border         /* 1px solid */
border-2       /* 2px solid */
ring-2         /* 2px ring (outline) */
ring-[3px]     /* 3px ring */
```

### Border Styles
```css
border-[#13121E]              /* Standard border */
border-transparent            /* Invisible border (for focus states) */
border-[#A78BFA]/30           /* Accent border (violet, 30%) */
border-[#67E8F9]/30           /* Accent border (cyan, 30%) */
border-red-500/30             /* Featured indicator border */
```

---

## 🎨 State Colors

### Hover States
```css
hover:bg-[#1A1927]            /* Background hover */
hover:text-[#F1F0FB]          /* Text hover */
hover:text-[#A78BFA]          /* Accent hover */
hover:border-[#A78BFA]        /* Border hover */
```

### Active States
```css
bg-[#A78BFA] text-[#09090F]   /* Active tab/button */
text-[#A78BFA]                /* Active nav item */
```

### Focus States
```css
focus:border-[#A78BFA]        /* Input focus */
focus:outline-none            /* Remove default outline */
```

### Disabled States
```css
opacity-50 pointer-events-none   /* Disabled state */
```

---

## 📝 Text Truncation

```css
truncate                  /* Single line truncate */
line-clamp-1             /* Single line clamp */
line-clamp-2             /* Two line clamp */
```

---

## 🔧 Utility Classes

### Scrollbar Hide
```css
scrollbar-hide           /* Hide scrollbar */
overflow-x-auto          /* Horizontal scroll */
overflow-y-auto          /* Vertical scroll */
```

### Positioning
```css
sticky top-0             /* Sticky header */
sticky bottom-0          /* Sticky footer */
absolute inset-0         /* Full absolute positioning */
relative                 /* Relative positioning */
```

### Flexbox Quick Patterns
```css
flex items-center justify-between   /* Space between alignment */
flex items-center justify-around    /* Even distribution */
flex items-center gap-3             /* Gap between items */
flex flex-col                       /* Vertical flex */
flex-1                              /* Flex grow */
flex-shrink-0                       /* Prevent shrink */
```

---

## 🎪 Special Effects

### Group Hover
```css
group                                   /* Parent element */
group-hover:opacity-100                 /* Child shows on parent hover */
group-hover:text-[#A78BFA]             /* Child color on parent hover */
group-hover:translate-x-1              /* Child moves on parent hover */
```

### Data Attributes
```css
aria-hidden="true"                      /* Hide from screen readers */
aria-label="Description"                /* Label for screen readers */
```

---

## 🎁 Copy-Paste Templates

### Color Palette Comment Block
```css
/* Hype.Wav Color Palette
 * BG: #09090F, #13121E, #1A1927
 * Text: #F1F0FB, #9CA3AF
 * Accent: #A78BFA, #67E8F9
 * Status: #10B981, #F59E0B
 */
```

### Component Template
```tsx
<div className="bg-[#13121E] rounded-xl p-4 hover:bg-[#1A1927] transition-colors">
  <h3 className="font-semibold text-[#F1F0FB] mb-2">Title</h3>
  <p className="text-sm text-[#9CA3AF]">Description</p>
</div>
```

### Button Template
```tsx
<button className="w-full py-3 bg-[#A78BFA] text-[#09090F] rounded-xl font-medium hover:bg-[#A78BFA]/90 transition-colors active:scale-[0.98]">
  Action
</button>
```

---

**Quick Access**: Keep this file open while coding for instant token reference.

**Last Updated**: March 8, 2026  
**Version**: 1.0.0

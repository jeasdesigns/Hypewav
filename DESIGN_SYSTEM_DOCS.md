# Hype.Wav Design System Documentation

## 🎯 Overview

This is a comprehensive design system specification site for **Hype.Wav** - a concert discovery mobile application. The documentation provides everything needed to rebuild the entire design system in Figma with pixel-perfect accuracy.

## 📱 Access the Documentation

To view the design system documentation, navigate to:

```
/design-system
```

This will take you to the main landing page with access to all specification sections.

## 📚 Documentation Sections

### 1. **Design Tokens** (`/design-system/tokens`)
Complete foundational design values including:
- **Color Palette**: 8 WCAG AAA-compliant colors with hex codes, usage guidelines, and contrast ratios
- **Typography Scale**: 8 text styles with exact sizes, weights, and line heights
- **Spacing System**: 8-step spacing scale based on 4px grid
- **Border Radius**: 5 radius values for different UI elements
- **Shadows & Effects**: 5 shadow definitions with glow effects

### 2. **Components** (`/design-system/components`)
Detailed specifications for all UI components with live examples:
- **Show Card**: Complete measurements, typography specs, badge variations, gradient overlays
- **Hype Header**: Layout specs, logo dimensions, button sizing, backdrop blur
- **Genre Filter**: Pill dimensions, state variations (default/selected/hover), spacing
- **Bottom Navigation**: Container specs, nav item sizing, active/inactive states

Each component includes:
- Live visual examples
- Exact pixel measurements
- Color mappings
- Typography specifications
- Spacing and padding details
- State variations

### 3. **Layout System** (`/design-system/layout`)
Grid specifications and spacing patterns:
- **Target Device**: iPhone 14 Pro (393×852px) specifications
- **Safe Areas**: Status bar and home indicator clearances
- **Page Structure**: Header, content, and navigation zones with z-index layering
- **Vertical Rhythm**: Consistent spacing patterns for content hierarchy
- **Horizontal Spacing**: Edge-to-edge vs standard content padding
- **Touch Targets**: WCAG 2.1 Level AAA minimum sizes (44×44px)

### 4. **Page Mockups** (`/design-system/pages`)
Annotated full-page designs with measurements:
- **Discover Page**: Feed layout with genre filters and show cards
- **Show Detail Page**: Hero section, event details, and ticket CTA
- **Artist Profile Page**: Artist info, top tracks, and upcoming shows

Each mockup includes:
- Visual mockup at scale
- Key measurements sidebar
- Color usage mapping
- Typography specifications
- Component spacing details

### 5. **Figma Rebuild Guide** (`/design-system/figma-guide`)
Step-by-step instructions for rebuilding in Figma:
- **11 Phases** covering setup through final polish
- **Detailed task lists** with checkboxes
- **Exact instructions** for every component and page
- **Quick reference cheat sheet** with common values
- **Keyboard shortcuts** for efficiency
- **Estimated timeline**: 2-4 hours total

## 🎨 Design System Highlights

### Colors (WCAG AAA Compliant)
- Background Primary: `#09090F`
- Background Secondary: `#13121E`
- Text Primary: `#F1F0FB` (17.8:1 contrast)
- Text Secondary: `#9CA3AF` (7.2:1 contrast)
- Violet (Primary Brand): `#A78BFA`
- Cyan (Secondary Brand): `#67E8F9`
- Success: `#10B981`
- Warning: `#F59E0B`

### Typography Scale
- Display Large: 32px / Bold
- Display: 24px / Bold
- Heading XL: 20px / Semibold
- Heading Large: 18px / Semibold
- Body Large: 16px / Medium
- Body: 16px / Regular
- Body Small: 14px / Regular
- Caption: 12px / Medium

### Key Measurements
- Canvas: 393×852px (iPhone 14 Pro)
- Show Card Height: 192px
- Touch Target Minimum: 44×44px
- Page Horizontal Padding: 16px
- Section Gap: 32px
- Card Gap: 16px

## 🛠️ Tech Stack

The documentation site is built with:
- **React** with TypeScript
- **React Router** for navigation
- **Tailwind CSS v4** for styling
- **Lucide React** for icons
- **Responsive design** optimized for desktop viewing

## 📖 How to Use This Documentation

### For Designers:
1. Start with **Design Tokens** to set up your Figma styles
2. Review **Components** for detailed specs on each UI element
3. Check **Layout System** for spacing and structure guidelines
4. Reference **Page Mockups** when building complete screens
5. Follow the **Figma Guide** step-by-step to rebuild everything

### For Developers:
1. Reference **Design Tokens** for CSS variables and theme values
2. Use **Components** as a reference for implementing React components
3. Consult **Layout System** for responsive breakpoints and spacing utilities
4. Check **Page Mockups** for complete implementation examples

### For Product Managers:
1. Review **Page Mockups** to understand the user experience flow
2. Reference **Components** to understand interactive elements
3. Use this as a handoff document for design → development

## 🎯 Key Features

- ✅ **Pixel-perfect specifications** - every measurement documented
- ✅ **WCAG AAA accessibility** - all colors meet contrast requirements
- ✅ **Live examples** - see components in action
- ✅ **Copy-to-clipboard** - hex codes copied with one click
- ✅ **Interactive mockups** - visual representations with annotations
- ✅ **Step-by-step guide** - complete Figma rebuild instructions
- ✅ **Mobile-first design** - optimized for iPhone 14 Pro

## 📱 Navigation Structure

```
/design-system (Landing page)
├── /design-system/tokens (Design Tokens)
├── /design-system/components (Component Library)
├── /design-system/layout (Layout System)
├── /design-system/pages (Page Mockups)
└── /design-system/figma-guide (Figma Rebuild Guide)
```

## 🚀 Getting Started

To begin rebuilding in Figma:

1. Navigate to `/design-system/figma-guide`
2. Follow Phase 1: Setup to create your Figma file
3. Work through each phase sequentially
4. Reference other documentation pages as needed
5. Complete all 11 phases for a full rebuild

Estimated time: **2-4 hours** for complete system rebuild

## 📝 Notes

- All measurements are in **pixels (px)**
- Colors are provided in **hex format**
- Typography uses **system fonts** (SF Pro on iOS/Mac, Roboto on Android/web)
- Components use **Auto Layout** in Figma for flexibility
- Spacing follows a **4px base grid** system
- Border radius values range from **8px to 9999px (full)**

## ✨ Credits

Designed and documented for the **Hype.Wav** concert discovery application, focusing on the Greater Seattle music scene.

---

**Last Updated**: March 6, 2026
**Version**: 1.0
**Target Platform**: Mobile (iOS/Android)
**Primary Device**: iPhone 14 Pro (393×852px)

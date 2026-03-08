# Hype.Wav Design System - Complete Figma Rebuild Specification

I need help recreating the Hype.Wav design system in Figma. Below is the complete specification with all design tokens, component specs, and step-by-step instructions.

---

## 🎯 PROJECT OVERVIEW

**Project**: Hype.Wav - Concert Discovery Mobile App  
**Target Device**: iPhone 14 Pro (393×852px)  
**Design Focus**: Greater Seattle music scene  
**Accessibility**: WCAG AAA compliant colors  
**Design Style**: Modern, dark theme with vibrant accents

---

## 🎨 DESIGN TOKENS (Foundation)

### Color Palette (All WCAG AAA Compliant)

| Color Name | Hex Code | Usage | WCAG Contrast |
|------------|----------|-------|---------------|
| **Background Primary** | `#09090F` | Main app background | N/A (Base) |
| **Background Secondary** | `#13121E` | Cards, elevated surfaces | N/A (Surface) |
| **Text Primary** | `#F1F0FB` | Headlines, body text, primary content | AAA (17.8:1) |
| **Text Secondary** | `#9CA3AF` | Metadata, secondary information | AAA (7.2:1) |
| **Violet (Primary Brand)** | `#A78BFA` | Primary actions, heat scores, active states | AA (4.8:1) |
| **Cyan (Secondary Brand)** | `#67E8F9` | Links, venue info, secondary accents | AAA (8.1:1) |
| **Success** | `#10B981` | Success states, available tickets | AA (4.5:1) |
| **Warning** | `#F59E0B` | Sold out badges, warnings | AA (4.6:1) |

### Typography Scale

| Style Name | Size | Weight | Line Height | Usage |
|------------|------|--------|-------------|-------|
| **Display Large** | 32px | 700 (Bold) | 1.5 | Page titles (h1) |
| **Display** | 24px | 700 (Bold) | 1.5 | Artist names in cards, section headers |
| **Heading XL** | 20px | 600 (Semibold) | 1.5 | Section titles (h2) |
| **Heading Large** | 18px | 600 (Semibold) | 1.5 | Subsection headers (h3) |
| **Body Large** | 16px | 500 (Medium) | 1.5 | Emphasized body text, button labels |
| **Body** | 16px | 400 (Regular) | 1.5 | Standard body text, inputs |
| **Body Small** | 14px | 400 (Regular) | 1.5 | Metadata, small labels |
| **Caption** | 12px | 500 (Medium) | 1.4 | Tags, tiny labels, badges |

**Font**: System default (SF Pro on iOS/Mac, Roboto on Android/web)

### Spacing System (4px Grid)

| Name | Value | Usage |
|------|-------|-------|
| **XXS** | 4px | Tight spacing, icon gaps |
| **XS** | 8px | Small gaps, compact layouts |
| **SM** | 12px | Medium gaps, component padding |
| **MD** | 16px | Standard padding, card spacing |
| **LG** | 20px | Large padding, section gaps |
| **XL** | 24px | Extra large gaps, major sections |
| **2XL** | 32px | Page margins, major spacing |
| **3XL** | 48px | Large section dividers |

### Border Radius

| Name | Value | Usage |
|------|-------|-------|
| **Small** | 8px | Small badges, tags |
| **Medium** | 12px | Buttons, inputs, small cards |
| **Large** | 16px | Cards, containers |
| **XLarge** | 20px | Large cards, modals |
| **Full** | 9999px | Pills, circular buttons |

### Shadows & Effects

| Name | Value | Usage |
|------|-------|-------|
| **Small** | `0 1px 2px rgba(0,0,0,0.3)` | Subtle elevation |
| **Medium** | `0 4px 6px rgba(0,0,0,0.4)` | Cards, dropdowns |
| **Large** | `0 10px 15px rgba(0,0,0,0.5)` | Modals, overlays |
| **Glow Violet** | `0 0 20px rgba(167,139,250,0.2)` | Violet elements on hover |
| **Glow Cyan** | `0 0 20px rgba(103,232,249,0.2)` | Cyan elements on hover |

---

## 🧩 COMPONENT SPECIFICATIONS

### 1. SHOW CARD

**Purpose**: Primary component for displaying concert information in discover feed

#### Dimensions
- **Container Height**: 192px
- **Border Radius**: 16px
- **Content Padding**: 16px (all sides)
- **Badge Position (Top/Right)**: 12px / 12px
- **Status Badge Position**: 12px / 12px (Top/Left)

#### Typography
- **Artist Name**: 24px / Bold (700) / #F1F0FB
- **Metadata (Venue, Time)**: 14px / Regular (400) / #9CA3AF
- **Heat Score Badge**: 14px / Medium (500) / #09090F (text on violet background)
- **Status Badge**: 12px / Medium (500) / #09090F (text on cyan/warning background)

#### Heat Score Badge
- **Background**: #A78BFA with 90% opacity + backdrop blur 4px
- **Padding**: 12px horizontal × 6px vertical
- **Border Radius**: 9999px (full pill)
- **Icon Size**: 16px (Flame icon)
- **Icon Gap**: 6px
- **Shadow**: Medium shadow

#### Status Badge Variants

**Selling Fast:**
- **Background**: #67E8F9 with 90% opacity + backdrop blur 4px
- **Text Color**: #09090F
- **Text**: "Selling Fast"

**Sold Out:**
- **Background**: #F59E0B with 90% opacity + backdrop blur 4px
- **Text Color**: #09090F
- **Text**: "Sold Out"

#### Gradient Overlays
**Main Gradient** (Top → Bottom):
- Top: `rgba(0,0,0,0.2)` - 20% black
- Middle: `transparent`
- Bottom: `rgba(0,0,0,0.9)` - 90% black

**Purpose**: Creates readable text area at bottom while preserving image visibility. Ensures minimum 4.5:1 contrast ratio.

#### Background Image
- Full bleed within container
- Object-fit: Cover
- Transition: Scale 1.0 → 1.05 on hover (300ms)

---

### 2. HYPE HEADER

**Purpose**: Sticky header with branding, search, and profile navigation

#### Layout
- **Horizontal Padding**: 16px
- **Top Padding**: 16px
- **Bottom Padding**: 12px
- **Border Bottom**: 1px solid #13121E
- **Background**: #09090F with 95% opacity
- **Backdrop Blur**: 12px
- **Position**: Sticky top

#### Logo & Branding
- **Location Text Size**: 12px
- **Location Color**: #A78BFA
- **Location Tracking**: 0.05em (wider letter spacing)
- **Location Text**: "GREATER SEATTLE" (all caps)
- **App Name Size**: 24px
- **App Name Weight**: Bold (700)
- **App Name Color**: #F1F0FB
- **Icon Container Size**: 32px × 32px
- **Icon Container Background**: Gradient #A78BFA → #67E8F9
- **Icon Container Radius**: 8px
- **Icon Size**: 16px (Music note)
- **Icon Color**: #09090F

#### Search Button
- **Size**: 44px × 44px
- **Border Radius**: 9999px (full circle)
- **Background**: #13121E
- **Icon Size**: 20px
- **Icon Color**: #9CA3AF

#### Profile Avatar
- **Outer Size (Gradient ring)**: 44px × 44px
- **Inner Size**: 40px × 40px
- **Border Radius**: 9999px (both)
- **Gradient**: #A78BFA → #67E8F9 (diagonal)
- **Inner Background**: #13121E
- **Text Size**: 14px / Medium (500)
- **Text Color**: #F1F0FB

---

### 3. GENRE FILTER

**Purpose**: Horizontal scrollable filter chips for genre selection

#### Default State
- **Padding**: 16px horizontal × 8px vertical
- **Border Radius**: 9999px (full pill)
- **Background**: #13121E
- **Text Color**: #9CA3AF
- **Font Size**: 14px
- **Font Weight**: Medium (500)

#### Selected State
- **Background**: #A78BFA
- **Text Color**: #09090F
- **Shadow**: `0 10px 15px rgba(167,139,250,0.2)` (violet glow)

#### Hover State
- **Background**: #1A1927 (slightly lighter than secondary bg)
- **Text Color**: #F1F0FB
- **Transition**: 200ms all ease

#### Spacing
- **Gap Between Pills**: 8px
- **Container Padding Bottom**: 8px (for scrollbar)
- **Overflow**: Horizontal scroll (hide scrollbar on desktop)

---

### 4. BOTTOM NAVIGATION

**Purpose**: Fixed bottom navigation bar with 4 primary actions

#### Container
- **Height**: 72px
- **Background**: #09090F with 95% opacity
- **Backdrop Blur**: 12px
- **Border Top**: 1px solid #13121E
- **Position**: Fixed bottom
- **Safe Area**: 16px bottom padding (for home indicator on iPhone)

#### Nav Items
- **Icon Size**: 24px
- **Label Size**: 12px / Medium (500)
- **Touch Target**: 44px × 44px minimum
- **Gap**: Icon to label = 4px
- **Distribution**: Equal spacing (flex space-between or space-around)

#### Active State
- **Icon Color**: #A78BFA
- **Label Color**: #F1F0FB

#### Inactive State
- **Icon Color**: #9CA3AF
- **Label Color**: #9CA3AF
- **Hover**: Icon/Label color → #F1F0FB (200ms transition)

#### Navigation Items (Left → Right)
1. **Discover** (Flame icon) - Active by default
2. **Map** (Map Pin icon)
3. **Saved** (Heart icon)
4. **Profile** (User icon)

---

## 📱 LAYOUT SYSTEM

### Canvas Specifications
- **Device**: iPhone 14 Pro
- **Dimensions**: 393px width × 852px height
- **Background**: #09090F

### Safe Areas
- **Status Bar Height**: 54px (top)
- **Home Indicator Area**: 34px (bottom)
- **Header Height**: ~90px (sticky)
- **Bottom Nav Height**: 72px (fixed)

### Page Structure
- **Header**: Sticky at top, z-index 50
- **Content Area**: Scrollable, between header and bottom nav
- **Bottom Nav**: Fixed at bottom, z-index 40

### Vertical Rhythm
- **Page Top Padding**: 16px (below header)
- **Section Gap**: 32px (between major sections)
- **Card Gap**: 16px (between show cards)
- **Page Bottom Padding**: 24px (above bottom nav)

### Horizontal Spacing
- **Page Horizontal Padding**: 16px (left/right)
- **Edge-to-Edge Elements**: Show cards, genre filters (no horizontal padding)
- **Content Max Width**: Full width on mobile (393px)

### Touch Targets
- **Minimum Size**: 44px × 44px (WCAG 2.1 Level AAA)
- **Recommended Gap**: Minimum 8px between touch targets

---

## 📄 PAGE SPECIFICATIONS

### DISCOVER PAGE (Feed-First Approach)

**Structure (Top → Bottom):**

1. **Hype Header** (Sticky)
   - See Hype Header component specs above

2. **Genre Filter Bar** (Below header, 16px top margin)
   - Horizontal scroll with pills
   - See Genre Filter component specs above

3. **Show Cards Feed** (16px top margin below filters)
   - Vertical stack of Show Card components
   - 16px gap between cards
   - Horizontal padding: 16px left/right
   - See Show Card component specs above

4. **Bottom Navigation** (Fixed)
   - See Bottom Navigation component specs above

**Key Measurements:**
- Header → Genre Filter gap: 16px
- Genre Filter → First Show Card gap: 16px
- Show Card → Show Card gap: 16px
- Last Show Card → Bottom nav clearance: 24px

---

### SHOW DETAIL PAGE

**Structure:**

1. **Hero Section** (Full bleed, 400px height)
   - Artist image background
   - Gradient overlay (same as Show Card)
   - Back button (top-left): 44×44px, 12px from top/left
   - Save button (top-right): 44×44px, 12px from top/right

2. **Event Info Card** (Overlapping hero -40px)
   - Background: #13121E
   - Border radius: 20px (top corners only)
   - Padding: 24px
   - Artist Name: Display (24px/Bold)
   - Venue: Body (16px/Regular) + Cyan color
   - Date/Time: Body Small (14px/Regular) + Secondary text

3. **Section Dividers** (32px gap between sections)
   - "About Artist" section
   - "Top Tracks" section
   - Bio text: Body (16px/Regular)

4. **Get Tickets Button** (Fixed at bottom)
   - Height: 56px
   - Background: #A78BFA
   - Text: Body Large (16px/Medium) #09090F
   - Border radius: 12px
   - Margin: 16px all sides
   - Shadow: Large

---

### ARTIST PROFILE PAGE

**Structure:**

1. **Artist Hero** (300px height)
   - Artist image
   - Gradient overlay
   - Back button (top-left)

2. **Artist Info** (24px padding)
   - Artist name: Display Large (32px/Bold)
   - Genre tags: Caption (12px/Medium) in pills
   - Follower count: Body Small (14px/Regular) + Secondary text
   - Spotify popularity: Body Small + Violet color

3. **Stats Row** (Grid, 16px gap)
   - Followers / Popularity / Genre
   - Each stat: Heading Large (18px/Semibold) for number, Body Small for label

4. **Bio Section** (32px top margin)
   - Section header: Heading XL (20px/Semibold)
   - Bio text: Body (16px/Regular)

5. **Top Tracks** (32px top margin)
   - Section header: Heading XL
   - Track list items: Body Large (16px/Medium) for track name, Body Small for play count

6. **Upcoming Shows** (32px top margin)
   - Section header: Heading XL
   - Mini show cards (smaller version of Show Card, 140px height)

---

## 🛠️ FIGMA REBUILD GUIDE (Step-by-Step)

### PHASE 1: SETUP (15 minutes)

**Task 1: Create New Figma File**
1. File → New design file
2. Name it "Hype.Wav Design System"
3. Create 3 pages:
   - 🎨 Tokens
   - 🧩 Components
   - 📱 Screens

**Task 2: Create Canvas Frame**
1. Press `F` and select "iPhone 14 Pro" from presets
2. Dimensions: 393 × 852px
3. Name it "Discover - Home"
4. Background: #09090F

**Task 3: Set Up Color Styles**
1. Select any shape → Click fill color
2. Click `+` in "Style" section
3. Create all 8 color styles from Design Tokens
4. Naming format: `Hype/Background/Primary`, `Hype/Text/Primary`, etc.

---

### PHASE 2: COLOR STYLES (10 minutes)

Create all 8 color styles:

1. **Hype/Background/Primary** → #09090F
2. **Hype/Background/Secondary** → #13121E
3. **Hype/Text/Primary** → #F1F0FB
4. **Hype/Text/Secondary** → #9CA3AF
5. **Hype/Violet** → #A78BFA
6. **Hype/Cyan** → #67E8F9
7. **Hype/Success** → #10B981
8. **Hype/Warning** → #F59E0B

**How to create:**
- Select any shape with a fill
- Click the color swatch
- Enter hex code
- Click the 4-dot icon next to the color → "Create style"
- Name it following the format above

---

### PHASE 3: TEXT STYLES (15 minutes)

Create all 8 text styles:

1. Select text tool (`T`)
2. Create a text layer
3. In right panel: Set size, weight, line height
4. Click `•••` next to "Text" → "Create style"
5. Name it: `Hype/Display/Large` (etc.)

**Create these 8 styles:**

| Style Name | Size | Weight | Line Height | Figma Name |
|------------|------|--------|-------------|------------|
| Display Large | 32px | Bold (700) | 1.5 (48px) | `Hype/Display/Large` |
| Display | 24px | Bold (700) | 1.5 (36px) | `Hype/Display/Default` |
| Heading XL | 20px | Semibold (600) | 1.5 (30px) | `Hype/Heading/XL` |
| Heading Large | 18px | Semibold (600) | 1.5 (27px) | `Hype/Heading/Large` |
| Body Large | 16px | Medium (500) | 1.5 (24px) | `Hype/Body/Large` |
| Body | 16px | Regular (400) | 1.5 (24px) | `Hype/Body/Default` |
| Body Small | 14px | Regular (400) | 1.5 (21px) | `Hype/Body/Small` |
| Caption | 12px | Medium (500) | 1.4 (16.8px) | `Hype/Caption` |

**Font**: Use "SF Pro Display" (Mac) or "Inter" (cross-platform)

---

### PHASE 4: COMPONENT - SHOW CARD (30 minutes)

**Step 1: Create Frame**
1. Press `F` → Create frame
2. Width: 361px (393px - 32px padding)
3. Height: 192px
4. Name: "Show Card"
5. Corner radius: 16px
6. Fill: Add placeholder image or gradient (#A78BFA → #67E8F9)

**Step 2: Add Gradient Overlay**
1. Add rectangle on top of image (same size as frame)
2. Fill → Linear gradient
3. Top stop: `rgba(0,0,0,0.2)` at 0%
4. Middle stop: `rgba(0,0,0,0)` at 50%
5. Bottom stop: `rgba(0,0,0,0.9)` at 100%
6. Angle: 90° (top to bottom)

**Step 3: Add Heat Score Badge**
1. Create frame: Width Auto × Height Auto
2. Add Auto Layout (Shift+A):
   - Padding: 12px H × 6px V
   - Gap: 6px
   - Direction: Horizontal
3. Fill: #A78BFA at 90% opacity
4. Layer blur: 4px
5. Corner radius: 9999px
6. Add flame icon (16×16px)
7. Add text: "94" (14px/Medium)
8. Position: 12px from top, 12px from right

**Step 4: Add Status Badge (Selling Fast)**
1. Create frame: Width Auto × Height Auto
2. Add Auto Layout:
   - Padding: 12px H × 6px V
   - Direction: Horizontal
3. Fill: #67E8F9 at 90% opacity
4. Layer blur: 4px
5. Corner radius: 9999px
6. Add text: "Selling Fast" (12px/Medium, #09090F)
7. Position: 12px from top, 12px from left

**Step 5: Add Artist Name**
1. Create text layer: "Artist Name"
2. Apply text style: Hype/Display/Default (24px/Bold)
3. Color: #F1F0FB
4. Position: 16px from bottom, 16px from left
5. Max width: ~320px

**Step 6: Add Metadata**
1. Create frame with Auto Layout (Horizontal)
2. Gap: 12px
3. Add icon (Map Pin, 14×14px) + text "Venue Name" (14px/Regular, #9CA3AF)
4. Add icon (Clock, 14×14px) + text "Fri, Mar 7 • 8:00 PM"
5. Position: 4px below Artist Name, 16px from left

**Step 7: Make it a Component**
1. Select entire frame
2. Press `Ctrl/Cmd + Alt + K`
3. Name: "Show Card"
4. Add variant properties:
   - `Status` → Default / Selling Fast / Sold Out

---

### PHASE 5: COMPONENT - HYPE HEADER (25 minutes)

**Step 1: Create Container**
1. Create frame: 393px width × Auto height
2. Add Auto Layout (Shift+A):
   - Padding: 16px H, 16px top, 12px bottom
   - Direction: Vertical
   - Gap: 12px
3. Fill: #09090F at 95% opacity
4. Layer blur: 12px
5. Border bottom: 1px solid #13121E

**Step 2: Add Top Row (Logo + Actions)**
1. Create frame with Auto Layout (Horizontal)
2. Alignment: Space between
3. Gap: 16px

**Step 3: Add Logo Section**
1. Create frame (Auto Layout Vertical, gap 4px)
2. Add text: "GREATER SEATTLE" (12px/Medium, #A78BFA, letter-spacing +0.05em)
3. Create logo row (Auto Layout Horizontal, gap 8px):
   - Icon frame: 32×32px, gradient fill (#A78BFA → #67E8F9), radius 8px
   - Music icon: 16×16px, color #09090F
   - Text: "Hype.Wav" (24px/Bold, #F1F0FB)

**Step 4: Add Action Buttons**
1. Search button:
   - Frame: 44×44px
   - Fill: #13121E
   - Radius: 9999px
   - Icon: Search (20×20px, #9CA3AF)
2. Profile avatar:
   - Outer frame: 44×44px, gradient fill, radius 9999px
   - Inner frame: 40×40px, fill #13121E, radius 9999px
   - Text: "ME" (14px/Medium, #F1F0FB)

**Step 5: Make it a Component**
- Select frame → `Ctrl/Cmd + Alt + K`
- Name: "Hype Header"

---

### PHASE 6: COMPONENT - GENRE FILTER (20 minutes)

**Step 1: Create Single Pill**
1. Create frame with Auto Layout
2. Padding: 16px H × 8px V
3. Fill: #13121E
4. Radius: 9999px
5. Add text: "Rock" (14px/Medium, #9CA3AF)

**Step 2: Create Variants**
1. Make component (`Ctrl/Cmd + Alt + K`)
2. Add variant: `State` → Default / Selected / Hover
3. **Default**: Background #13121E, Text #9CA3AF
4. **Selected**: Background #A78BFA, Text #09090F, Shadow `0 10px 15px rgba(167,139,250,0.2)`
5. **Hover**: Background #1A1927, Text #F1F0FB

**Step 3: Create Filter Bar**
1. Create frame: 393px width × Auto height
2. Add Auto Layout (Horizontal)
3. Gap: 8px
4. Padding: 0px (content bleeds to edges)
5. Add 5 instances of Genre Pill component
6. Set first pill to "Selected" state

---

### PHASE 7: COMPONENT - BOTTOM NAV (25 minutes)

**Step 1: Create Container**
1. Create frame: 393px width × 72px height
2. Fill: #09090F at 95% opacity
3. Layer blur: 12px
4. Border top: 1px solid #13121E
5. Padding: 16px bottom (for safe area)

**Step 2: Create Nav Item**
1. Create frame with Auto Layout (Vertical)
2. Alignment: Center
3. Gap: 4px
4. Add icon (24×24px)
5. Add label text (12px/Medium)
6. Ensure touch target is 44×44px minimum

**Step 3: Create Variants**
1. Make component
2. Add variant property: `State` → Active / Inactive
3. Add variant property: `Item` → Discover / Map / Saved / Profile
4. **Active**: Icon #A78BFA, Label #F1F0FB
5. **Inactive**: Icon #9CA3AF, Label #9CA3AF

**Step 4: Create Full Nav Bar**
1. Create frame: 393px width × 72px height
2. Add Auto Layout (Horizontal)
3. Distribution: Space between (or space around)
4. Add 4 nav item instances
5. Set "Discover" to Active state

---

### PHASE 8: ASSEMBLE DISCOVER PAGE (30 minutes)

**Step 1: Create Page Frame**
1. Press `F` → iPhone 14 Pro (393×852px)
2. Name: "Discover - Home"
3. Background: #09090F

**Step 2: Add Header**
1. Drag "Hype Header" component to top
2. Constraints: Left/Right/Top = 0
3. Position: Fixed when scrolling (optional in prototype)

**Step 3: Add Genre Filter**
1. Drag "Genre Filter Bar" component
2. Position: 16px below header
3. Full width edge-to-edge

**Step 4: Add Show Cards**
1. Create Auto Layout frame for feed
2. Padding: 16px H, 16px top, 24px bottom
3. Gap: 16px
4. Drag multiple "Show Card" instances
5. Customize each card's content

**Step 5: Add Bottom Nav**
1. Drag "Bottom Nav" component to bottom
2. Constraints: Left/Right/Bottom = 0
3. Position: Fixed when scrolling (optional in prototype)

**Step 6: Set Constraints**
- Header: Pin to top
- Content: Scroll between header and nav
- Bottom Nav: Pin to bottom

---

### PHASE 9: CREATE SHOW DETAIL PAGE (25 minutes)

**Step 1: Create Page Frame**
1. iPhone 14 Pro frame (393×852px)
2. Name: "Show Detail"
3. Background: #09090F

**Step 2: Add Hero Section**
1. Frame: 393px width × 400px height
2. Fill: Artist image or gradient
3. Add gradient overlay (same as Show Card)
4. Add back button (top-left): 44×44px circle, icon 24×24px
5. Add save button (top-right): 44×44px circle, heart icon

**Step 3: Add Event Info Card**
1. Frame: Width 393px, Height Auto
2. Background: #13121E
3. Top corners: 20px radius, bottom corners: 0px
4. Position: -40px from top (overlapping hero)
5. Padding: 24px
6. Add artist name (24px/Bold)
7. Add venue (16px/Regular, #67E8F9)
8. Add date/time (14px/Regular, #9CA3AF)

**Step 4: Add Content Sections**
1. About Artist (32px gap from card)
2. Bio text (16px/Regular, #F1F0FB)
3. Top Tracks section (32px gap)
4. Track list items

**Step 5: Add CTA Button**
1. Frame at bottom: 393px width × Auto height
2. Padding: 16px all sides
3. Button: Width Auto, Height 56px
4. Background: #A78BFA
5. Text: "Get Tickets" (16px/Medium, #09090F)
6. Radius: 12px
7. Shadow: Large

---

### PHASE 10: CREATE ARTIST PROFILE PAGE (25 minutes)

**Step 1: Create Page Frame**
1. iPhone 14 Pro frame
2. Name: "Artist Profile"

**Step 2: Add Artist Hero**
1. Frame: 393×300px
2. Artist image background
3. Gradient overlay
4. Back button (top-left)

**Step 3: Add Artist Info**
1. Name: 32px/Bold
2. Genre pills: 12px/Medium in pill containers
3. Stats row: Followers / Popularity / Genre

**Step 4: Add Sections**
1. Bio section with header
2. Top Tracks list
3. Upcoming Shows (mini cards)

---

### PHASE 11: POLISH & ORGANIZE (20 minutes)

**Step 1: Create Component Library Page**
1. Go to "🧩 Components" page
2. Organize all components neatly
3. Add labels and documentation

**Step 2: Add Color Palette Reference**
1. Go to "🎨 Tokens" page
2. Create color swatches with labels
3. Add typography samples
4. Create spacing guide

**Step 3: Set Up Prototyping (Optional)**
1. Link "Show Card" → "Show Detail" page
2. Link "Get Tickets" → Modal
3. Link Bottom Nav items to respective pages
4. Add back button interactions

**Step 4: Final Touches**
1. Rename all layers clearly
2. Group related elements
3. Add notes/comments for developers
4. Export component documentation

---

## ✅ QUICK REFERENCE CHEAT SHEET

### Most Used Values
- **Page padding**: 16px
- **Section gap**: 32px
- **Card gap**: 16px
- **Touch target**: 44×44px
- **Border radius (cards)**: 16px
- **Border radius (pills)**: 9999px

### Most Used Colors
- **Violet**: #A78BFA
- **Cyan**: #67E8F9
- **BG Primary**: #09090F
- **BG Secondary**: #13121E
- **Text Primary**: #F1F0FB
- **Text Secondary**: #9CA3AF

### Most Used Typography
- **Card artist name**: 24px/Bold
- **Body text**: 16px/Regular
- **Metadata**: 14px/Regular
- **Badges**: 12px/Medium

### Keyboard Shortcuts (Figma)
- `F` = Frame tool
- `T` = Text tool
- `R` = Rectangle
- `Shift+A` = Add Auto Layout
- `Ctrl/Cmd+Alt+K` = Create Component
- `Ctrl/Cmd+D` = Duplicate
- `Ctrl/Cmd+G` = Group

---

## 🎯 ESTIMATED TIMELINE

| Phase | Task | Time |
|-------|------|------|
| 1 | Setup | 15 min |
| 2 | Color Styles | 10 min |
| 3 | Text Styles | 15 min |
| 4 | Show Card Component | 30 min |
| 5 | Hype Header Component | 25 min |
| 6 | Genre Filter Component | 20 min |
| 7 | Bottom Nav Component | 25 min |
| 8 | Discover Page | 30 min |
| 9 | Show Detail Page | 25 min |
| 10 | Artist Profile Page | 25 min |
| 11 | Polish & Organize | 20 min |
| **TOTAL** | | **~4 hours** |

---

## 💡 TIPS FOR SUCCESS

1. **Create styles first** - Color and text styles save time later
2. **Use Auto Layout everywhere** - Makes components flexible and responsive
3. **Name layers clearly** - Helps when creating components and variants
4. **Work in phases** - Don't try to do everything at once
5. **Test touch targets** - Ensure all interactive elements are 44×44px minimum
6. **Use constraints** - Pin elements for responsive behavior
7. **Create variants** - For different states (active/inactive, etc.)
8. **Document as you go** - Add notes for developers

---

## ❓ HOW TO USE THIS WITH CLAUDE

**Prompt Example:**

"I'm working on Phase 4 (Show Card Component). Can you guide me step-by-step through creating the heat score badge with the exact measurements from the spec? I'm using Figma and need detailed instructions on Auto Layout settings."

**Or:**

"I've completed the Show Card component but I'm not sure if my gradient overlay is correct. Can you remind me what the exact gradient stops should be based on the spec?"

**Or:**

"I'm starting from scratch. Can you walk me through Phase 1 (Setup) with detailed Figma instructions? I've never created color styles before."

---

**Last Updated**: March 6, 2026  
**Version**: 1.0  
**Design System**: Hype.Wav Concert Discovery App  
**Target Platform**: iOS/Android Mobile (iPhone 14 Pro reference)

---

## 📞 READY TO START?

You now have everything needed to rebuild the Hype.Wav design system in Figma! Start with Phase 1 and work through systematically. Use this document as your reference throughout the process.

Good luck! 🚀

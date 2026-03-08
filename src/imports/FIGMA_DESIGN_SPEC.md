# Hype.Wav Design System - Technical Specification for Figma

## Design Tokens

### Color Palette (WCAG AAA Compliant)

| Token | Hex | Usage |
|-------|-----|-------|
| bg-primary | #09090F | Main app background |
| bg-secondary | #13121E | Cards, elevated surfaces |
| text-primary | #F1F0FB | Headlines, body text |
| text-secondary | #9CA3AF | Metadata, secondary info |
| violet | #A78BFA | Primary brand, actions, heat scores |
| cyan | #67E8F9 | Secondary brand, links, venue info |
| success | #10B981 | Success states, available tickets |
| warning | #F59E0B | Sold out badges, warnings |

### Typography Scale

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display Large | 32px | 700 | 1.5 | Page titles (h1) |
| Display | 24px | 700 | 1.5 | Artist names, section headers |
| Heading XL | 20px | 600 | 1.5 | Section titles (h2) |
| Heading Large | 18px | 600 | 1.5 | Subsection headers (h3) |
| Body Large | 16px | 500 | 1.5 | Emphasized text, buttons |
| Body | 16px | 400 | 1.5 | Standard body text |
| Body Small | 14px | 400 | 1.5 | Metadata, labels |
| Caption | 12px | 500 | 1.4 | Tags, badges |

### Spacing System (4px Grid)

| Token | Value | Usage |
|-------|-------|-------|
| space-xxs | 4px | Tight spacing, icon gaps |
| space-xs | 8px | Small gaps, compact layouts |
| space-sm | 12px | Medium gaps, component padding |
| space-md | 16px | Standard padding, card spacing |
| space-lg | 20px | Large padding, section gaps |
| space-xl | 24px | Extra large gaps, major sections |
| space-2xl | 32px | Page margins, major spacing |
| space-3xl | 48px | Large section dividers |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| radius-sm | 8px | Small badges, tags |
| radius-md | 12px | Buttons, inputs, small cards |
| radius-lg | 16px | Cards, containers |
| radius-xl | 20px | Large cards, modals |
| radius-full | 9999px | Pills, circular buttons |

### Shadows & Effects

| Token | Value | Usage |
|-------|-------|-------|
| shadow-sm | 0 1px 2px rgba(0,0,0,0.3) | Subtle elevation |
| shadow-md | 0 4px 6px rgba(0,0,0,0.4) | Cards, dropdowns |
| shadow-lg | 0 10px 15px rgba(0,0,0,0.5) | Modals, overlays |
| glow-violet | 0 0 20px rgba(167,139,250,0.2) | Violet hover effects |
| glow-cyan | 0 0 20px rgba(103,232,249,0.2) | Cyan hover effects |

---

## Component Specifications

### 1. Show Card

**Container:**
- Width: 361px (393px viewport - 32px horizontal padding)
- Height: 192px
- Border Radius: 16px
- Padding: 16px (all sides)

**Background:**
- Image: Full bleed, object-fit cover
- Gradient Overlay (top to bottom):
  - 0%: rgba(0,0,0,0.2)
  - 50%: transparent
  - 100%: rgba(0,0,0,0.9)

**Heat Score Badge:**
- Position: Top-right, 12px from edges
- Padding: 12px horizontal × 6px vertical
- Background: #A78BFA at 90% opacity
- Backdrop Blur: 4px
- Border Radius: 9999px
- Gap: 6px
- Icon: Flame, 16×16px
- Text: 14px / Medium (500) / #09090F
- Shadow: 0 4px 6px rgba(0,0,0,0.4)

**Featured Show Indicator (Option B - Selected):**
- Position: Top-right, 12px from edges
- Container: 36×36px circular badge
- Background: #09090F at 90% opacity
- Backdrop Blur: 4px (sm)
- Border: 1px solid rgba(239, 68, 68, 0.3) [red-500/30]
- Border Radius: 9999px (full circle)
- Icon: Flame (Lucide), 20×20px
- Icon Color (Stroke): #EF4444 (red-500)
- Icon Fill: #F97316 (orange-500)
- Shadow: None (relies on backdrop blur for depth)
- Accessibility: aria-label="Selling Fast"
- Usage: Indicates high-demand shows with limited availability
- WCAG Contrast: Meets AAA standards (red on dark background)

**Design Rationale:**
- Red/orange gradient creates urgency without overwhelming the card
- Dark circular background provides consistent contrast
- Subtle border adds definition without distraction
- Icon-only treatment keeps cards clean and uncluttered
- Larger than genre badge to draw attention to scarcity

**Status Badge (Variants):**
- Position: Top-left, 12px from edges
- Padding: 12px horizontal × 6px vertical
- Border Radius: 9999px
- Backdrop Blur: 4px
- Text: 12px / Medium (500) / #09090F
- Variants:
  - Selling Fast: USE FEATURED SHOW INDICATOR (above) instead
  - Sold Out: Background #F59E0B at 90% opacity

**Content:**
- Artist Name: 24px / Bold (700) / #F1F0FB, positioned 16px from bottom/left
- Metadata Row: Positioned 4px below artist name, 16px from left
  - Venue: 14px / Regular (400) / #9CA3AF with Map Pin icon (14×14px)
  - Date/Time: 14px / Regular (400) / #9CA3AF with Clock icon (14×14px)
  - Gap between items: 12px

**Interaction:**
- Hover: Scale image 1.0 → 1.05 (300ms transition)

---

### 2. Hype Header

**Container:**
- Width: 393px (full viewport)
- Height: Auto
- Padding: 16px horizontal, 16px top, 12px bottom
- Background: #09090F at 95% opacity
- Backdrop Blur: 12px
- Border Bottom: 1px solid #13121E
- Position: Sticky top, z-index 50

**Layout:**
- Direction: Vertical
- Gap: 12px

**Top Row:**
- Direction: Horizontal
- Alignment: Space between
- Gap: 16px

**Logo Section:**
- Direction: Vertical
- Gap: 4px
- Location Text: "GREATER SEATTLE" / 12px / Medium (500) / #A78BFA / letter-spacing 0.05em / uppercase
- Logo Row:
  - Direction: Horizontal
  - Gap: 8px
  - Icon Container: 32×32px, gradient (#A78BFA → #67E8F9), radius 8px
  - Music Icon: 16×16px, #09090F
  - App Name: "Hype.Wav" / 24px / Bold (700) / #F1F0FB

**Actions:**
- Filter Button:
  - Size: 44×44px
  - Background: #13121E
  - Border Radius: 9999px
  - Icon: Filter, 20×20px, #9CA3AF
  - Function: Opens filter/sort modal or drawer
  - Hover: Background → #1A1927

**Design Notes:**
- Simplified from 2 actions to 1 for cleaner header
- Search moved to bottom navigation for easier thumb access
- Profile/avatar removed from header (accessible via "Me" tab in bottom nav)
- Filter icon provides access to genre filters, date range, price range, etc.

---

### 3. Genre Filter

**Single Pill:**
- Padding: 16px horizontal × 8px vertical
- Border Radius: 9999px
- Text: 14px / Medium (500)

**States:**
- Default:
  - Background: #13121E
  - Text: #9CA3AF
- Selected:
  - Background: #A78BFA
  - Text: #09090F
  - Shadow: 0 10px 15px rgba(167,139,250,0.2)
- Hover:
  - Background: #1A1927
  - Text: #F1F0FB
  - Transition: 200ms all ease

**Filter Bar:**
- Width: 393px (full viewport)
- Direction: Horizontal
- Gap: 8px
- Overflow: Horizontal scroll (hide scrollbar)

---

### 4. Bottom Navigation

**Container:**
- Width: 393px (full viewport)
- Height: 72px
- Background: #09090F at 95% opacity
- Backdrop Blur: 12px
- Border Top: 1px solid #13121E
- Position: Fixed bottom, z-index 40
- Padding Bottom: 16px (safe area for home indicator)

**Nav Item:**
- Direction: Vertical
- Alignment: Center
- Gap: 4px
- Touch Target: Minimum 44×44px
- Icon: 24×24px
- Label: 12px / Medium (500)

**States:**
- Active:
  - Icon: #A78BFA
  - Label: #F1F0FB
- Inactive:
  - Icon: #9CA3AF
  - Label: #9CA3AF
- Hover:
  - Icon/Label: #F1F0FB
  - Transition: 200ms

**Items (Left to Right):**
1. Discover (Flame icon)
2. Search (Search icon)
3. Tickets (Ticket icon)
4. Saved (Heart icon)
5. Me (User icon)

**Design Notes:**
- Updated from 4 to 5 navigation items for improved feature discoverability
- "Search" separated from header for easier access to search functionality
- "Tickets" provides direct access to user's purchased/reserved tickets
- "Profile" renamed to "Me" for more personal, conversational tone
- Equal spacing maintained with 5 items on mobile viewport

---

### 5. Empty State

**Container:**
- Width: Variable (fits parent container)
- Direction: Vertical
- Alignment: Center
- Gap: 16px
- Padding: 24px

**Icon:**
- Size: 64×64px
- Color: Based on context (Violet/Cyan)
- Opacity: 50%

**Heading:**
- Typography: 24px / Bold (700) / #F1F0FB

**Description:**
- Typography: 16px / Regular (400) / #9CA3AF
- Max Width: 320px
- Text Align: Center

---

### 6. Search Bar

**Container:**
- Width: 393px (full viewport)
- Height: 56px
- Padding: 16px horizontal
- Background: #09090F
- Border Bottom: 1px solid #13121E

**Input Field:**
- Width: 100%
- Height: 44px
- Padding: 12px horizontal
- Background: #13121E
- Border Radius: 12px
- Border: 1px solid transparent
- Icon: Search, 20×20px, #9CA3AF
- Placeholder: 16px / Regular (400) / #9CA3AF
- Text: 16px / Regular (400) / #F1F0FB

**States:**
- Focus:
  - Border: 1px solid #A78BFA
  - Glow: 0 0 20px rgba(167,139,250,0.2)
- Hover:
  - Background: #1A1927
  - Transition: 200ms

---

### 7. Search Result Card (Artist/Venue)

**Container:**
- Width: 361px (393px viewport - 32px horizontal padding)
- Height: 80px
- Background: #13121E
- Border Radius: 12px
- Padding: 12px
- Direction: Horizontal
- Gap: 12px

**Image/Avatar:**
- Size: 56×56px
- Border Radius: 8px
- Object Fit: Cover

**Content:**
- Direction: Vertical
- Flex: 1 (fills remaining space)
- Gap: 4px
- Name: 16px / Semibold (600) / #F1F0FB
- Metadata: 14px / Regular (400) / #9CA3AF

**Chevron:**
- Size: 20×20px
- Color: #9CA3AF

**Interaction:**
- Hover: Background → #1A1927
- Active: Scale 0.98
- Transition: 200ms

---

### 8. Tab Bar

**Container:**
- Width: 393px (full viewport)
- Height: Auto
- Padding: 0px horizontal, 12px vertical
- Background: #09090F
- Border Bottom: 1px solid #13121E

**Tab Item (Full-Width Segmented Control):**
- Width: Equal distribution (393px ÷ number of tabs)
  - Example: 4 tabs = 98.25px each
  - Example: 3 tabs = 131px each
- Height: Auto (minimum 44px for accessibility)
- Padding: 8px vertical
- Border Radius: 8px
- Text: 14px / Medium (500)
- Text Alignment: Center
- Touch Target: Full width of segment (optimal for usability)

**States:**
- Active:
  - Background: #A78BFA
  - Text: #09090F
- Inactive:
  - Background: Transparent
  - Text: #9CA3AF
- Hover (Inactive):
  - Background: #13121E
  - Text: #F1F0FB
  - Transition: 200ms ease

**Tab Group Layout:**
- Direction: Horizontal
- Display: Flex
- Width: 100% (393px)
- Gap: 0px (no gap between tabs for full-width segmented control)
- Padding: 0px (tabs extend full width)

**Design Notes:**
- Each tab takes equal width regardless of content length
- Creates a balanced, centered appearance
- Follows iOS segmented control pattern
- Optimal for 3-5 tabs; consider scrollable pills for 6+ tabs

---

### 9. Profile Header

**Container:**
- Width: 393px (full viewport)
- Padding: 24px
- Background: #09090F
- Direction: Vertical
- Alignment: Center
- Gap: 16px

**Avatar:**
- Outer Ring: 96×96px, gradient (#A78BFA → #67E8F9), border-radius 9999px
- Inner Circle: 88×88px, #13121E, border-radius 9999px
- Content: Initials or profile image

**User Info:**
- Direction: Vertical
- Alignment: Center
- Gap: 4px
- Name: 24px / Bold (700) / #F1F0FB
- Location: 16px / Regular (400) / #9CA3AF

---

### 10. Menu List Item

**Container:**
- Width: 361px (393px viewport - 32px horizontal padding)
- Height: Auto
- Padding: 16px
- Background: #13121E
- Border Radius: 12px
- Direction: Horizontal
- Alignment: Center
- Gap: 12px

**Icon:**
- Size: 20×20px
- Color: Context-based (Violet/Cyan/Gray)

**Label:**
- Typography: 16px / Regular (400) / #F1F0FB
- Flex: 1 (fills space)
- Text Align: Left

**Badge (Optional):**
- Padding: 4px 8px
- Background: #A78BFA at 20% opacity
- Border Radius: 9999px
- Text: 12px / Medium (500) / #F1F0FB

**Interaction:**
- Hover: Background → #1A1927
- Active: Scale 0.98
- Transition: 200ms

---

### 11. Venue Info Card

**Container:**
- Width: 361px (393px viewport - 32px horizontal padding)
- Height: Auto
- Padding: 20px
- Background: #13121E
- Border Radius: 16px
- Direction: Vertical
- Gap: 16px

**Info Row:**
- Direction: Horizontal
- Gap: 12px
- Icon: 20×20px, #67E8F9
- Label: 14px / Regular (400) / #9CA3AF
- Value: 16px / Medium (500) / #F1F0FB

**Sections:**
- Address (Map Pin icon)
- Capacity (Users icon)
- Website (Link icon)
- Gap: 12px between rows

---

### 12. Map Pin

**Container:**
- Width: 48px
- Height: 48px
- Direction: Vertical
- Alignment: Center

**Pin Shape:**
- Top Circle: 40×40px, gradient (#A78BFA → #67E8F9), border-radius 50% 50% 50% 0
- Rotate: -45deg transform
- Border: 2px solid #09090F
- Shadow: 0 4px 6px rgba(0,0,0,0.4)

**Content:**
- Count Badge: 20×20px circle, #09090F, centered
- Text: 12px / Bold (700) / #F1F0FB

**States:**
- Active: Scale 1.1, glow effect
- Inactive: Opacity 0.7

---

### 13. Floating Show Card (Map)

**Container:**
- Width: 280px
- Height: 120px
- Background: #13121E
- Border Radius: 12px
- Padding: 12px
- Position: Floating over map
- Shadow: 0 10px 15px rgba(0,0,0,0.5)

**Content:**
- Artist Image: 96×96px, border-radius 8px
- Artist Name: 16px / Semibold (600) / #F1F0FB
- Venue: 14px / Regular (400) / #67E8F9
- Date: 12px / Regular (400) / #9CA3AF
- Gap: 8px

**Layout:**
- Direction: Horizontal
- Gap: 12px

---

## Layout System

### Canvas
- Device: iPhone 14 Pro
- Dimensions: 393px × 852px
- Background: #09090F

### Safe Areas
- Status Bar: 54px (top)
- Home Indicator: 34px (bottom)
- Header Height: ~90px (sticky)
- Bottom Nav Height: 72px (fixed)

### Page Structure
- Header: Sticky at top, z-index 50
- Content: Scrollable, between header and bottom nav
- Bottom Nav: Fixed at bottom, z-index 40

### Spacing
- Page Horizontal Padding: 16px
- Page Top Padding: 16px (below header)
- Section Gap: 32px
- Card Gap: 16px
- Page Bottom Padding: 24px (above bottom nav)

### Touch Targets
- Minimum Size: 44×44px (WCAG 2.1 AAA)
- Minimum Gap: 8px between targets

---

## Page Specifications

### Discover Page (Feed-First)

**Structure (Top to Bottom):**

1. **Hype Header** (Sticky)
   - Full specifications in Component #2
   - Position: Sticky top

2. **Genre Filter Bar**
   - Margin Top: 16px (from header)
   - Full width edge-to-edge
   - Full specifications in Component #3

3. **Show Cards Feed**
   - Margin Top: 16px (from filters)
   - Horizontal Padding: 16px
   - Vertical Layout
   - Gap: 16px between cards
   - Each card: Full specifications in Component #1

4. **Bottom Navigation** (Fixed)
   - Full specifications in Component #4
   - Position: Fixed bottom

**Key Measurements:**
- Header → Genre Filter: 16px gap
- Genre Filter → First Card: 16px gap
- Card → Card: 16px gap
- Last Card → Bottom Nav: 24px clearance

---

### Show Detail Page

**Structure:**

1. **Hero Section**
   - Width: 393px (full bleed)
   - Height: 400px
   - Background: Artist image, object-fit cover
   - Gradient Overlay: Same as Show Card (rgba(0,0,0,0.2) → transparent → rgba(0,0,0,0.9))
   - Back Button:
     - Position: Top-left, 12px from edges
     - Size: 44×44px
     - Background: rgba(0,0,0,0.5)
     - Backdrop Blur: 4px
     - Border Radius: 9999px
     - Icon: Arrow Left, 24×24px, #F1F0FB
   - Save Button:
     - Position: Top-right, 12px from edges
     - Size: 44×44px
     - Background: rgba(0,0,0,0.5)
     - Backdrop Blur: 4px
     - Border Radius: 9999px
     - Icon: Heart, 24×24px, #F1F0FB

2. **Event Info Card**
   - Width: 393px
   - Height: Auto
   - Position: Overlapping hero by -40px
   - Background: #13121E
   - Border Radius: 20px (top corners only)
   - Padding: 24px
   - Content:
     - Artist Name: 24px / Bold (700) / #F1F0FB
     - Venue: 16px / Regular (400) / #67E8F9 with Map Pin icon
     - Date/Time: 14px / Regular (400) / #9CA3AF with Clock/Calendar icons
     - Gap: 8px between items

3. **About Artist Section**
   - Margin Top: 32px
   - Padding Horizontal: 24px
   - Section Header: "About Artist" / 20px / Semibold (600) / #F1F0FB
   - Gap: 12px
   - Bio Text: 16px / Regular (400) / #F1F0FB / line-height 1.5

4. **Top Tracks Section**
   - Margin Top: 32px
   - Padding Horizontal: 24px
   - Section Header: "Top Tracks" / 20px / Semibold (600) / #F1F0FB
   - Gap: 12px
   - Track List:
     - Track Item: Padding 12px vertical
     - Track Name: 16px / Medium (500) / #F1F0FB
     - Play Count: 14px / Regular (400) / #9CA3AF
     - Gap: 4px

5. **Get Tickets Button** (Fixed Bottom)
   - Position: Fixed bottom, above safe area
   - Width: 393px
   - Padding: 16px (all sides)
   - Button:
     - Height: 56px
     - Background: #A78BFA
     - Border Radius: 12px
     - Text: "Get Tickets" / 16px / Medium (500) / #09090F
     - Shadow: 0 10px 15px rgba(0,0,0,0.5)

---

### Artist Profile Page

**Structure:**

1. **Artist Hero**
   - Width: 393px (full bleed)
   - Height: 300px
   - Background: Artist image, object-fit cover
   - Gradient Overlay: Same as Show Card
   - Back Button:
     - Position: Top-left, 12px from edges
     - Size: 44×44px
     - Background: rgba(0,0,0,0.5)
     - Backdrop Blur: 4px
     - Border Radius: 9999px
     - Icon: Arrow Left, 24×24px, #F1F0FB

2. **Artist Info**
   - Padding: 24px
   - Artist Name: 32px / Bold (700) / #F1F0FB
   - Margin Top: 12px
   - Genre Pills:
     - Direction: Horizontal
     - Gap: 8px
     - Padding: 12px horizontal × 6px vertical
     - Background: #13121E
     - Border Radius: 9999px
     - Text: 12px / Medium (500) / #A78BFA

3. **Stats Row**
   - Margin Top: 24px
   - Padding Horizontal: 24px
   - Direction: Horizontal
   - Distribution: Space between
   - Each Stat:
     - Direction: Vertical
     - Alignment: Center
     - Number: 18px / Semibold (600) / #F1F0FB
     - Label: 14px / Regular (400) / #9CA3AF
     - Gap: 4px

4. **Bio Section**
   - Margin Top: 32px
   - Padding Horizontal: 24px
   - Section Header: "Bio" / 20px / Semibold (600) / #F1F0FB
   - Gap: 12px
   - Bio Text: 16px / Regular (400) / #F1F0FB / line-height 1.5

5. **Top Tracks Section**
   - Margin Top: 32px
   - Padding Horizontal: 24px
   - Section Header: "Top Tracks" / 20px / Semibold (600) / #F1F0FB
   - Gap: 12px
   - Track List: Same as Show Detail page

6. **Upcoming Shows Section**
   - Margin Top: 32px
   - Padding Horizontal: 24px
   - Section Header: "Upcoming Shows" / 20px / Semibold (600) / #F1F0FB
   - Gap: 12px
   - Mini Show Cards:
     - Width: Full width (345px)
     - Height: 140px
     - Same structure as Show Card but smaller
     - Gap: 12px between cards

---

### Saved Shows Page

**Structure:**

1. **Hype Header** (Sticky)
   - Full specifications in Component #2
   - Position: Sticky top

2. **Tab Bar**
   - Margin Top: 16px
   - Full specifications in Component #8
   - Options: "Upcoming" / "Past"

3. **Show Cards List (Populated State)**
   - Margin Top: 16px
   - Horizontal Padding: 16px
   - Vertical Layout
   - Gap: 16px between cards
   - Each card: Full specifications in Component #1
   - Swipe Actions:
     - Swipe Left: "Remove" button, #F59E0B background
     - Icon: Trash, 20×20px

4. **Empty State (No Saved Shows)**
   - Full specifications in Component #5
   - Icon: Heart, 64×64px, #A78BFA
   - Heading: "Saved Shows"
   - Description: "Your favorited artists and saved shows will appear here"

5. **Bottom Navigation** (Fixed)
   - Full specifications in Component #4
   - Position: Fixed bottom

**Key Measurements:**
- Header → Tab Bar: 16px gap
- Tab Bar → First Card: 16px gap
- Card → Card: 16px gap
- Last Card → Bottom Nav: 24px clearance

---

### User Profile Page

**Structure:**

1. **Hype Header** (Sticky)
   - Full specifications in Component #2
   - Position: Sticky top

2. **Profile Header**
   - Margin Top: 0px (flush with page)
   - Full specifications in Component #9
   - Avatar with gradient ring
   - User Name: "Music Lover"
   - Location: "Seattle, WA"

3. **Menu List**
   - Margin Top: 24px
   - Horizontal Padding: 16px
   - Direction: Vertical
   - Gap: 8px

   **Menu Items:**
   - My Favorite Artists (Music icon, #A78BFA, badge showing count)
   - Notifications (Bell icon, #67E8F9)
   - Settings (Settings icon, #9CA3AF)
   
   Full specifications in Component #10 for each item

4. **About Card**
   - Margin Top: 32px
   - Horizontal Padding: 16px
   - Width: 361px
   - Padding: 24px
   - Background: #13121E
   - Border Radius: 16px
   - Border: 1px solid rgba(167, 139, 250, 0.3)
   - Content:
     - Heading: "About Hype.Wav" / 18px / Semibold (600) / #A78BFA
     - Description: 14px / Regular (400) / #9CA3AF / line-height 1.5
     - Version: 12px / Regular (400) / #9CA3AF

5. **Bottom Navigation** (Fixed)
   - Full specifications in Component #4
   - Position: Fixed bottom

**Key Measurements:**
- Header → Profile Header: 0px (flush)
- Profile Header → Menu List: 24px gap
- Menu Items: 8px gap between
- Menu List → About Card: 32px gap
- Last element → Bottom Nav: 24px clearance

---

### Search Results Page

**Structure:**

1. **Search Bar** (Sticky)
   - Full specifications in Component #6
   - Position: Sticky top, z-index 50
   - Includes back button (left side)
   - Auto-focus input

2. **Tab Bar** (Sticky)
   - Position: Sticky below search bar
   - Full specifications in Component #8
   - Options: "All" / "Shows" / "Artists" / "Venues"

3. **Results List**
   - Margin Top: 16px
   - Horizontal Padding: 16px
   - Direction: Vertical
   - Gap: 12px

   **For Show Results:**
   - Use Component #1 (Show Card)
   
   **For Artist/Venue Results:**
   - Use Component #7 (Search Result Card)
   - Each card: 80px height
   - Includes thumbnail, name, metadata, chevron

4. **Empty State (No Results)**
   - Full specifications in Component #5
   - Icon: Search, 64×64px, #9CA3AF
   - Heading: "No Results Found"
   - Description: "Try searching for an artist, venue, or show"

5. **Bottom Navigation** (Fixed)
   - Full specifications in Component #4
   - Position: Fixed bottom

**Key Measurements:**
- Search Bar → Tab Bar: 0px (flush, both sticky)
- Tab Bar → First Result: 16px gap
- Result → Result: 12px gap
- Last Result → Bottom Nav: 24px clearance

---

### Venue Profile Page

**Structure:**

1. **Venue Hero**
   - Width: 393px (full bleed)
   - Height: 280px
   - Background: Venue image, object-fit cover
   - Gradient Overlay: Same as Show Card (rgba(0,0,0,0.2) → transparent → rgba(0,0,0,0.9))
   - Back Button:
     - Position: Top-left, 12px from edges
     - Size: 44×44px
     - Background: rgba(0,0,0,0.5)
     - Backdrop Blur: 4px
     - Border Radius: 9999px
     - Icon: Arrow Left, 24×24px, #F1F0FB

2. **Venue Info Card**
   - Margin Top: -40px (overlaps hero)
   - Horizontal Padding: 16px
   - Full specifications in Component #11
   - Venue Name: 24px / Bold (700) / #F1F0FB
   - Address with Map Pin icon
   - Capacity with Users icon
   - Website link with Link icon

3. **Mini Map Section**
   - Margin Top: 24px
   - Horizontal Padding: 16px
   - Width: 361px
   - Height: 180px
   - Background: #13121E
   - Border Radius: 16px
   - Border: 1px solid #13121E
   - Content:
     - Map visualization or grid pattern background
     - Gradient: from-[#1A1927] to-[#13121E] (if no real map)
     - Map Pin (centered):
       - Size: 40×40px
       - Background: Gradient (#A78BFA → #67E8F9)
       - Border: 2px solid #09090F
       - Icon: Map Pin, 20×20px, #09090F
       - Shadow: 0 4px 6px rgba(0,0,0,0.4)
     - "Get Directions" Button (bottom center, 16px from bottom):
       - Padding: 8px horizontal × 8px vertical
       - Background: #67E8F9
       - Text: "Get Directions" / 14px / Medium (500) / #09090F
       - Border Radius: 9999px
       - Icon: Navigation, 16×16px, #09090F
       - Gap: 8px
       - Shadow: 0 4px 6px rgba(0,0,0,0.4)

4. **Stats Row**
   - Margin Top: 24px (from Mini Map)
   - Horizontal Padding: 16px
   - Width: 361px (393px viewport - 32px horizontal padding)
   - Height: Auto
   
   **Featured Stat Card:**
   - Padding: 24px (all sides)
   - Background: Gradient from-[#A78BFA]/20 to-[#67E8F9]/20
   - Border Radius: 16px
   - Border: 1px solid rgba(167, 139, 250, 0.3)
   - Direction: Horizontal
   - Alignment: Space between
   
   **Left Content:**
   - Direction: Vertical
   - Gap: 8px
   - Label: "Total Shows at [Venue Name]" / 14px / Regular (400) / #9CA3AF
   - Number: "24 Shows" / 32px / Bold (700) / #F1F0FB
   - Metadata: "8 this month · 16 upcoming" / 14px / Regular (400) / #67E8F9
   
   **Right Icon Container:**
   - Size: 64×64px
   - Background: Gradient from-[#A78BFA] to-[#67E8F9]
   - Border Radius: 16px
   - Icon: Calendar, 32×32px, #09090F
   - Alignment: Center

5. **Upcoming Shows Section**
   - Margin Top: 32px
   - Padding Horizontal: 16px
   - Section Header: "Upcoming Shows" / 20px / Semibold (600) / #F1F0FB
   - Gap: 12px
   - Show Cards:
     - Use Component #1 (Show Card)
     - Gap: 16px between cards

6. **Bottom Navigation** (Fixed)
   - Full specifications in Component #4
   - Position: Fixed bottom

**Key Measurements:**
- Hero height: 280px
- Info Card overlap: -40px
- Info Card → Mini Map: 24px gap
- Mini Map → Stats: 24px gap
- Stats → Shows Section: 32px gap
- Card → Card: 16px gap
- Last Card → Bottom Nav: 24px clearance

---

### Map View Page

**Structure:**

1. **Hype Header** (Sticky)
   - Full specifications in Component #2
   - Position: Sticky top

2. **Map Container**
   - Width: 393px (full bleed)
   - Height: calc(100vh - 90px header - 72px bottom nav)
   - Background: Map tiles
   - Interactive: Pan, zoom, tap

3. **Venue Pins**
   - Full specifications in Component #12
   - Positioned on venue locations
   - Count badge shows number of upcoming shows
   - Tap to reveal Floating Show Card

4. **Floating Show Card** (On Pin Tap)
   - Full specifications in Component #13
   - Position: Bottom center, 16px from edges
   - Animated entrance: Slide up + fade in (300ms)
   - Close button or tap outside to dismiss

5. **View Toggle** (Floating)
   - Position: Top-right, 16px from edges, below header
   - Size: 44×44px
   - Background: #13121E
   - Border Radius: 9999px
   - Shadow: 0 4px 6px rgba(0,0,0,0.4)
   - Icon: List, 20×20px, #F1F0FB
   - Function: Switch to list view (Discover page)

6. **Location Button** (Floating)
   - Position: Bottom-right, 16px from edges, above bottom nav
   - Size: 56×56px
   - Background: #A78BFA
   - Border Radius: 9999px
   - Shadow: 0 10px 15px rgba(0,0,0,0.5)
   - Icon: Target/Crosshair, 24×24px, #09090F
   - Function: Center map on user location

7. **Bottom Navigation** (Fixed)
   - Full specifications in Component #4
   - Position: Fixed bottom

**Key Measurements:**
- Map: Full height minus header/nav
- Venue Pins: Scattered at coordinates
- Floating Card: 16px from bottom and sides
- View Toggle: 16px from top-right
- Location Button: 16px from bottom-right, 88px from bottom (above nav)

---

## Quick Reference

**Most Used Values:**
- Page padding: 16px
- Section gap: 32px
- Card gap: 16px
- Touch target: 44×44px
- Card radius: 16px
- Pill radius: 9999px

**Most Used Colors:**
- Violet: #A78BFA
- Cyan: #67E8F9
- BG Primary: #09090F
- BG Secondary: #13121E
- Text Primary: #F1F0FB
- Text Secondary: #9CA3AF

**Most Used Typography:**
- Artist name (cards): 24px/Bold
- Section headers: 20px/Semibold
- Body text: 16px/Regular
- Metadata: 14px/Regular
- Badges: 12px/Medium
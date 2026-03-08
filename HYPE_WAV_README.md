# Hype.Wav - Greater Seattle Concert Discovery

A mobile-first concert discovery application focused on the Greater Seattle music scene, featuring rich artist data from Spotify including images, bios, genre tags, follower counts, popularity metrics, and top tracks.

## Design System

### Color Palette (WCAG AAA Compliant)
- **Primary Background**: `#09090F` - Deep dark background
- **Secondary Background**: `#13121E` - Card and component background
- **Primary Text**: `#F1F0FB` - High contrast text (17.8:1 ratio)
- **Secondary Text**: `#9CA3AF` - Muted text for metadata
- **Violet Accent**: `#A78BFA` - Primary CTAs and heat scores (7.2:1 contrast)
- **Cyan Accent**: `#67E8F9` - Secondary highlights (9.4:1 contrast)
- **Success**: `#10B981` - Positive actions
- **Warning**: `#F59E0B` - Alerts and urgency

### Typography
- Base font size: 16px
- Font weights: 400 (normal), 500 (medium)
- Headings use medium weight for hierarchy

### Spacing & Layout
- Max width: 448px (md) for mobile-optimized content
- Consistent padding: 16px (4 units)
- Card radius: 16px-24px for modern aesthetic
- 44px minimum tap targets (WCAG 2.5.5)

## Core Components

### ShowCard
Large hero cards with:
- Full-bleed artist imagery with gradient scrim
- Heat score badges (popularity indicator)
- Venue and time metadata
- Hover effects and smooth transitions

### GenreFilter
Horizontal scrolling genre pills with:
- Active state styling
- Smooth transitions
- Mobile-friendly touch targets

### BottomNav
Frosted glass navigation with:
- 4 primary destinations (Discover, Map, Saved, Profile)
- Active state indicators
- Accessibility-compliant sizing

### HypeHeader
Sticky header with:
- Brand identity (logo + wordmark)
- Search functionality
- Profile access
- Backdrop blur effect

## Pages

### DiscoverPage (`/`)
- Feed-first discovery experience
- Genre filtering
- Grouped by time periods (This Week, Next Week)
- Infinite scroll-ready architecture

### ShowDetailPage (`/show/:id`)
- Full event information
- Artist lineup with deep links
- Venue details and map
- Ticket pricing and availability
- Similar show recommendations
- Fixed CTA buttons (Calendar + Tickets)

### ArtistProfilePage (`/artist/:id`)
- Hero image with parallax effect
- Spotify-sourced data (followers, popularity)
- Genre tags
- Top tracks with play counts
- Upcoming show schedule
- Artist statistics

### MapPage (`/map`)
- Placeholder for Phase 3
- Interactive venue mapping

### SavedPage (`/saved`)
- User's favorited shows and artists

### ProfilePage (`/profile`)
- User preferences and settings
- Favorite artists
- Notifications

## Key Features

### Heat Scores
Visual popularity indicators combining:
- Spotify follower count
- Artist popularity score
- Ticket sales velocity
- Social media buzz

### Accessibility
- WCAG AAA contrast ratios
- 44px+ tap targets
- Semantic HTML
- Keyboard navigation support
- Screen reader optimizations

### Performance
- Optimized images with fallbacks
- Smooth transitions and animations
- Mobile-first responsive design
- Fast page loads

## Data Structure

### Artist
- ID, name, image
- Genres array
- Followers count
- Popularity score (0-100)
- Bio text
- Top tracks with play counts
- Spotify URL

### Show
- Artist reference
- Supporting acts
- Venue details
- Date and time
- Heat score
- Ticket pricing
- Ticket status (available, selling-fast, sold-out, free)

### Venue
- Name and address
- Capacity
- Distance from user

## Technical Stack

- React 18
- React Router 7 (Data mode)
- Tailwind CSS v4
- TypeScript
- Lucide React icons
- Radix UI components

## Future Enhancements (Phase 2 & 3)

- Real-time ticket availability
- Spotify API integration
- Interactive map view
- Calendar sync
- Social features (share, invite friends)
- Personalized recommendations
- Push notifications
- Timeline/calendar view

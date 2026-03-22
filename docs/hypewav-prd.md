# Product Requirements Document
# Hype.Wav — Live Music Discovery App

---

| Field | Detail |
|---|---|
| **Product name** | Hype.Wav |
| **Document version** | 3.2 |
| **Status** | In Review |
| **Author** | Jose (Product, Design, Engineering) |
| **Created** | March 2026 |
| **Last updated** | March 2026 |
| **Target release** | v1.0 — Core Discovery Experience |
| **Build approach** | Modular — each module is fully resolved before dependent modules begin |

---

## Table of Contents

1. [What We're Building](#step-1--what-were-building)
2. [What We Want to Accomplish — SMART Goals](#step-2--what-we-want-to-accomplish--smart-goals)
3. [Key Constraints & Limitations](#step-3--key-constraints--limitations)
4. [Scope & the Case for It — Functionality and Usability](#step-4--scope--the-case-for-it--functionality-and-usability)
5. [User Personas & User Stories](#step-5--user-personas--user-stories)
6. [Feature Details](#step-6--feature-details)
7. [Success Metrics](#step-7--success-metrics)
8. [Design System](#8-design-system)
9. [Design → Code Workflow](#9-design--code-workflow)
10. [Versioning Convention](#10-versioning-convention)
11. [Risks & Mitigations](#11-risks--mitigations)
12. [Open Questions](#12-open-questions)
13. [Appendix](#13-appendix)

---

## Step 1 — What We're Building

### Product Definition

Hype.Wav is a live music discovery application launching on both mobile and web. It aggregates concert listings and enriches them with deep artist context — images, genres, biographies, and audio previews — so that every show on the screen is also an invitation to discover an artist the user may never have encountered on their own.

The product is launching in Seattle as a pilot market — one of the most active live music cities in the United States — to validate the model before expanding to additional cities.

Hype.Wav is **not** a ticketing platform, a social network, or a streaming service. It is a focused discovery tool built around one core question:

> **Could this be your new favorite artist?**

Like a great DJ who plays music you didn't know you needed, Hype.Wav surfaces artists and shows that might otherwise go unnoticed — then puts every tool the user needs directly in their hands to explore, listen, and arrive at their own decision. The app does not tell users what to attend. It gives them the depth to figure that out for themselves.

---

### The Problem

**Fans are scattered across too many apps.**
The current concert discovery experience requires juggling Ticketmaster or Bandsintown for listings, Spotify for artist context, and Google for venue information. There is no single surface that brings all three together. The friction of moving between apps causes fans to disengage before they ever find something worth attending.

**There is no in-app guidance for exploring an unfamiliar artist.**
Existing concert discovery apps surface a show and leave users on their own to determine if they care. There is no pathway inside those apps to sample music, read an artist's story, or understand their sound. The tools that would actually move someone from curious to committed are entirely absent.

**Users can only discover what they already know.**
With no recommendation or exploration layer, users default to searching for artists they already follow. This creates a closed loop — fans attend the same shows, miss artists adjacent to their taste, and never expand their musical world. The discovery factor that live music uniquely enables is left untapped.

---

### The Opportunity

Hype.Wav collapses listings, artist exploration, and audio sampling into a single surface. By pairing every concert listing with the tools to genuinely explore the artist behind it, the app creates the conditions for the kind of discovery that previously only happened through a trusted friend's recommendation or a great DJ set.

A functional prototype was built in early 2025 with 33 verified concerts across 8 Seattle venues and pre-fetched Spotify data. That prototype confirmed the core hypothesis: users engage with unfamiliar artists when the tools to explore are immediately present.

The v1 build transitions the product from prototype to production-grade application using Next.js + TypeScript + Tailwind v4, deployed on Cloudflare Pages.

---

## Step 2 — What We Want to Accomplish — SMART Goals

SMART goals are Specific, Measurable, Achievable, Relevant, and Time-bound. Every goal below meets all five criteria.

---

### Goal 1 — Consolidate the discovery experience into one surface

**Specific:** A user can browse upcoming concerts, explore an unfamiliar artist's profile, preview their music, and link to buy tickets — all without leaving Hype.Wav.
**Measurable:** The core flow (browse → artist modal → audio preview → ticket link) is completable in 3 taps or fewer on mobile and 3 clicks or fewer on web.
**Achievable:** All required data (Ticketmaster listings, Spotify artist data) is accessible via existing APIs and the Cloudflare Worker proxy.
**Relevant:** Directly addresses the primary pain point — app fragmentation.
**Time-bound:** Shipped as part of v1.0 release.

---

### Goal 2 — Surface artist depth that enables genuine discovery

**Specific:** Every concert listing exposes artist image, genre tags, biography, top tracks with audio previews, and lowest ticket price — without requiring the user to search elsewhere.
**Measurable:** ≥ 85% of listed artists have Spotify image and genre data populated correctly.
**Achievable:** Cloudflare Worker handles Spotify API proxying with artist name-based lookup and confidence scoring.
**Relevant:** Directly addresses the pain point of no in-app artist exploration.
**Time-bound:** Shipped as part of v1.0 release.

---

### Goal 3 — Enable users to filter and save shows that matter to them

**Specific:** Users can filter the Discover listing by genre, search by show name, artist, genre, or venue, and save concerts to a persistent Favorites page.
**Measurable:** Genre filter and search return correct results across all dimensions. Saved concerts persist correctly across sessions.
**Achievable:** Genre and search data are available from Ticketmaster and Spotify APIs. Persistence is handled via local storage in v1.
**Relevant:** Gives users personal ownership over their discovery experience and generates behavioral data for v2 personalization.
**Time-bound:** Shipped as part of v1.0 release.

---

### Goal 4 — Ship a stable, production-grade application ready for pilot beta

**Specific:** All six modules (Foundation, Data Layer, Discover, Artist Modal, Search, Favorites, Profile) are built, deployed, and validated with live data. No unhandled errors. All loading, empty, and error states are designed and functional.
**Measurable:** 0 unhandled API errors in production. All screens match Figma designs 1:1.
**Achievable:** Modular build approach ensures each layer is stable before the next begins.
**Relevant:** v1.0 must be the foundation for v2 personalization features — instability in v1 creates compounding debt.
**Time-bound:** v1.0 shipped and deployed to Cloudflare Pages for pilot beta.

---

### Non-Goals

These are explicit decisions about what Hype.Wav v1 does not attempt to accomplish. They exist to protect scope and are not oversights.

- Hype.Wav v1 is **not** a ticketing platform — users are directed to Ticketmaster to purchase
- Hype.Wav v1 is **not** a social platform — no public profiles, follows, or community reviews
- Hype.Wav v1 is **not** a music streaming service — audio previews are 30-second Spotify clips only, per Spotify Developer Terms of Service
- Hype.Wav v1 does **not** include algorithm-driven personalization or automated recommendations — these are planned for v2, informed by the Favorites data generated in v1
- Hype.Wav v1 does **not** expand beyond the pilot market — market expansion is a v2 milestone contingent on pilot validation

---

## Step 3 — Key Constraints & Limitations

These are fixed realities that shape every design and engineering decision in v1. They are not negotiable and must be accounted for in every feature spec.

---

### Technical Constraints

**CORS — Spotify API is not directly callable from the browser.**
All Spotify API requests must route through the Cloudflare Worker proxy at `localmusicapp.jes-design.workers.dev`. Any feature that relies on Spotify data inherits this constraint. Direct browser-to-Spotify calls will fail silently.

**Spotify artist matching — hardcoded IDs are not scalable.**
Spotify data must be fetched using artist name as the primary lookup key, with normalized name matching and confidence scoring. Ticketmaster artist names do not always map cleanly to Spotify — mismatches must degrade gracefully, not break the UI.

**Spotify audio previews — 30 seconds maximum.**
Spotify's Developer Terms of Service prohibit full track playback in third-party applications. Preview URLs may also be `null` for some tracks. The UI must handle both cases — a missing preview hides the play button rather than showing a broken control.

**Deployment — file structure is load-bearing.**
All project files must be at the root of the Cloudflare Pages deployment. A nested subfolder structure will result in a blank production page. Every deploy must be verified in production, not just in the preview environment.

**Ticketmaster API — rate limits apply.**
The Ticketmaster Discovery API has rate limits that must be respected. Responses should be cached at the Cloudflare Worker layer. Exponential backoff must be implemented for retry logic.

---

### Product Constraints

**Solo development.**
Hype.Wav is designed, built, and shipped by one person. This means parallel workstreams are limited, scope must be defended aggressively, and the modular build approach is not optional — it is the primary risk mitigation strategy.

**Pilot market dependency.**
v1 is only as valid as the quality of Ticketmaster data for Seattle. If Ticketmaster coverage for the pilot market is incomplete, the app's value proposition is directly impacted. Concert data completeness is a first-class success metric.

**No backend infrastructure in v1.**
User-generated data (saved concerts) is persisted via local storage in v1. This means saved data is device-specific and will not sync across devices. This is an acceptable limitation for pilot beta and is explicitly called out in the Favorites feature spec.

---

### Design Constraints

**Mobile and web — both are v1 targets.**
All screens are designed mobile-first, with responsive layouts that adapt to web (desktop/tablet) viewports. Mobile defines the design constraints — spacing, touch targets, navigation patterns — and web scales up from that foundation. No screen is considered complete until it is validated on both mobile and web viewports.

**Design system is fixed.**
The violet/cyan design system established in the prototype is the v1 standard. New components must be derived from existing tokens. No new token values may be introduced without updating the design system first.

**Figma Make is the design source of truth.**
No screen goes to code without a frozen Figma frame. Every screen requires frames for both mobile and web (desktop/tablet) viewports. Design decisions made in code without a Figma source are not permitted.

---

## Step 4 — Scope & the Case for It — Functionality and Usability

### What v1 Is

V1 delivers a complete, working application across four essential user journeys: **Discover, Search, Favorites, and Profile.** These four journeys represent the minimum viable set for a concert discovery experience to be genuinely useful — not a demo, not a prototype, but a product a real user can open, navigate, and find value in on day one.

Every feature in v1 serves the core discovery loop: **browse → explore → listen → decide.**

---

### Why This Scope

**Discover** is the reason the product exists. Without a rich, functional listing page it is not a discovery app — it is an API wrapper. It must ship first.

**Search** is the escape hatch. Users who arrive knowing what they want should not be forced to scroll. It is also the fastest path to demonstrating that the app's data coverage is real.

**Favorites** is the behavioral foundation. The save mechanism is the only user-generated data in v1, and it is the input that v2 personalization features will be trained on. Building it now without the recommendation layer is deliberate — collect clean signal before building inference on top of it.

**Profile** is the personal anchor. A profile page with settings, help, and log out is the minimum that makes an app feel like a product rather than a prototype. It also establishes the surface that v2 authentication will expand.

---

### Modular Build Approach

V1 is built as a sequence of self-contained modules. Each module is fully resolved — designed, built, tested, and validated in production — before any module that depends on it begins. This approach eliminates cascading errors from building on unstable foundations and ensures a working, deployable product exists at the end of each module.

**Module rules:**
1. A module does not begin design until all its dependencies are shipped
2. A module is not complete until every acceptance criterion is checked off — not "mostly done"
3. Each module ships to production before the next begins
4. A module owns its states — loading, empty, and error are designed within the module, not deferred
5. A later module never requires changes to a shipped module's core logic — if it does, the dependency was misdeclared and this PRD must be updated before building

---

### Module Summary & Dependency Order

| Module | Name | Journey | Depends On | Unlocks |
|---|---|---|---|---|
| M0 | Foundation | — | Nothing | Everything |
| M1 | Data Layer | — | M0 | M2, M3, M4 |
| M2 | Discover Page | Discover | M0, M1 | M3, M4 |
| M3 | Artist Modal | Discover | M0, M1, M2 | M5 |
| M4 | Search Page | Search | M0, M1, M2 | — |
| M5 | Favorites Page | Favorites | M0, M2, M3 | M6 |
| M6 | Profile Page | Profile | M0, M5 | v2 |

```
M0 — Foundation
└── M1 — Data Layer
    ├── M2 — Discover Page
    │   ├── M3 — Artist Modal
    │   │   └── M5 — Favorites Page
    │   │       └── M6 — Profile Page
    │   └── M4 — Search Page (standalone, no downstream)
    └── M4 — Search Page
```

**Parallel opportunity:** M3 (Artist Modal) and M4 (Search) can be designed in parallel after M2 ships — but M3 must be fully shipped before M5 begins. M4 is the most isolated module in v1 — it has no downstream dependencies and is the lowest-risk module to build independently.

---

## Step 5 — User Personas & User Stories

### Persona 1 — The Casual Discoverer

> *"I want to find out about shows without jumping between five different apps. If something looks interesting I just want to be able to listen right there and decide."*

| Attribute | Detail |
|---|---|
| **Age** | 24–38 |
| **Location** | Resident of or regular visitor to the pilot market |
| **Music behavior** | Spotify user, attends 1–2 shows per month |
| **Discovery style** | Passive — wants shows to surface to them, not search actively |

**Pain points:**
- Forced to navigate multiple apps to complete a single discovery decision
- No in-app way to sample an artist or understand their sound before deciding
- Only discovers artists they already know, which limits what shows they consider

---

### Persona 2 — The Enthusiast

> *"I track a lot of shows but I still find artists I didn't know at the last minute. I want something that helps me catch things before they sell out."*

| Attribute | Detail |
|---|---|
| **Age** | 22–45 |
| **Location** | Resident of or regular visitor to the pilot market |
| **Music behavior** | Deep music knowledge, attends 4–8 shows per month |
| **Discovery style** | Active — uses multiple tools simultaneously |

**Pain points:**
- Tool fragmentation is time-consuming even for experienced users
- No recommendation pathway for artists adjacent to their existing taste
- Relies entirely on what they already know — the closed loop prevents genuine discovery even for power users

---

### User Stories by Journey

#### Discover Journey

| ID | As a... | I want to... | So that... |
|---|---|---|---|
| US-D1 | Casual Discoverer | See a visual, scrollable list of upcoming concerts the moment I open the app | I can immediately start browsing without any setup or search |
| US-D2 | Casual Discoverer | See genre tags and a ticket price on each concert card | I can filter my interest at a glance without tapping into each show |
| US-D3 | Casual Discoverer | Filter the listing by genre | I can narrow down to shows that match my taste without scrolling through everything |
| US-D4 | Casual Discoverer | Tap a concert and explore the artist's full profile | I can decide if I want to go based on their music and story, not just their name |
| US-D5 | Casual Discoverer | Preview an artist's top tracks without leaving the app | I can hear them before committing to a ticket |
| US-D6 | Enthusiast | Search the listing from the Discover page | I can quickly check if a specific artist I'm thinking about has an upcoming show |

#### Search Journey

| ID | As a... | I want to... | So that... |
|---|---|---|---|
| US-S1 | Enthusiast | Access a dedicated search page | I have a focused place to look for specific shows without browsing |
| US-S2 | Both | Search by artist name, show name, genre, or venue | I can find what I'm looking for regardless of how I remember it |
| US-S3 | Both | See visual results with artist images | I can quickly identify the right result without reading full details |
| US-S4 | Both | Tap a search result to open the artist's full profile | My search experience connects seamlessly into the same exploration layer as Discover |

#### Favorites Journey

| ID | As a... | I want to... | So that... |
|---|---|---|---|
| US-F1 | Casual Discoverer | Save a concert I'm interested in while exploring an artist | I don't lose track of it before I'm ready to decide |
| US-F2 | Both | See all my saved concerts in one place | I can review my options together and compare when I'm ready to buy |
| US-F3 | Both | Remove a concert from my Favorites | I can keep the list current without clutter from shows I've passed on |
| US-F4 | Enthusiast | Have my saved concerts persist between sessions | My list is there every time I open the app, not just in the current session |

#### Profile Journey

| ID | As a... | I want to... | So that... |
|---|---|---|---|
| US-P1 | Both | See my name and profile avatar in the app | The app feels like it belongs to me, not a generic interface |
| US-P2 | Both | Access Settings, Help, and Log Out from my profile | I have control over my experience and a clear way to exit |

---

## Step 6 — Feature Details

Each feature below is specified against a consistent template: **Feature, Description, User Problem, User Value, Assumptions, Not Doing, Acceptance Criteria.**

---

### Feature M0 — Foundation

**Feature:** App infrastructure, design system, navigation shell, and deployment pipeline.

**Description:** M0 establishes everything non-user-facing that every subsequent feature depends on. It includes the design token system, component library, Next.js app scaffolding, bottom navigation routing, Cloudflare Pages deployment pipeline, and the Cloudflare Worker Spotify proxy. M0 is not a user-facing feature — it is the ground every other feature is built on.

**User Problem:** None directly. M0 failures manifest as broken screens, missing styles, and failed API calls in every feature above it. Instability in M0 creates instability everywhere.

**User Value:** None directly. Users experience M0 only through the absence of errors, broken layouts, and missing data in the features above it.

**Assumptions:**
- Design tokens are finalized and will not change materially during v1 development
- The Cloudflare Worker is functional and correctly proxying Spotify API requests
- GitHub auto-deploy to Cloudflare Pages is configured and verified

**Not Doing:**
- Backend user authentication — this is a v2 concern
- Any user-facing screens or interactions
- Database or server-side data persistence

**Acceptance Criteria:**
- [ ] All design tokens (violet/cyan, typography, spacing) are live in the codebase and rendering correctly across all components
- [ ] All components (Button, Badge, HeatBadge, GenrePill, TabList, BottomNav, Card) render correctly on both mobile and web viewports
- [ ] Bottom navigation routes correctly to placeholder pages for all four journeys (Discover, Search, Favorites, Profile)
- [ ] A merge to `main` triggers a successful Cloudflare Pages deployment — confirmed with a live URL
- [ ] The Cloudflare Worker responds correctly to an artist name query and returns expected Spotify data

---

### Feature M1 — Data Layer

**Feature:** Unified data contracts for all concert and artist data consumed by the application.

**Description:** M1 defines exactly what data is available, where it comes from, how it is shaped, and how failures are handled — before any UI is built on top of it. It establishes the Ticketmaster and Spotify data fetching logic, normalization, null handling, and the TypeScript types that all downstream modules consume. M1 ships with no visual UI — it is validated through data inspection and API response verification.

**User Problem:** Users experience data layer failures as missing images, broken cards, incorrect prices, and crashes. Building M1 as a discrete, validated module eliminates this entire class of errors before any screen is built.

**User Value:** None directly visible. M1's value is experienced as reliability — every piece of data on every screen is correct, complete, or gracefully absent.

**Assumptions:**
- Ticketmaster API returns `priceRanges`, `classifications`, `images`, and `url` fields for pilot market events
- Spotify API, via the Cloudflare Worker, returns artist image, bio, genres, and top tracks for ≥ 85% of Ticketmaster-listed artists
- `previewUrl` may be `null` for some tracks and must be treated as an optional field, not a required one

**Not Doing:**
- Any UI or visual components — M1 is data only
- User authentication or session management
- Backend persistence or database writes

**Acceptance Criteria:**
- [ ] Ticketmaster API correctly returns and normalizes: event name, date, venue name, venue address, lowest ticket price, genre classification, artist image, and ticket URL
- [ ] Spotify Worker correctly returns and normalizes: artist image, biography (truncated to 280 chars), genre array (max 5), top 5 tracks with preview URLs
- [ ] `null` cases for image, bio, preview URL, and price are typed correctly and handled without throwing exceptions
- [ ] All data is sourced from live API responses — no hardcoded or mock data in production
- [ ] No M1 errors propagate to calling code as unhandled exceptions

---

### Feature M2 — Discover Page

**Feature:** The app's landing page — a visual, scrollable concert listing with a Trending Now section, genre filtering, price range and date filtering, and inline search.

**Description:** The Discover page is the primary surface of Hype.Wav and the first thing users see when they open the app. It presents upcoming concerts across two sections — a **Trending Now** featured section with larger hero cards, and a **This Week** section with a standard card listing that loads more content as the user scrolls. Each card surfaces artist image, name, venue, date, genre tag, and lowest ticket price — with price displayed inline in the metadata row in the app's accent color for visual distinction, not as a badge. A persistent search bar, horizontal genre filter strip, and a filter drawer (price range + date range) allow users to narrow results without leaving the page. Tapping a card opens the Artist Modal (M3). A map pin within each card links to the venue location inline — there is no dedicated map page.

**User Problem:** Users currently have no single surface where they can browse upcoming shows with enough artist context to spark genuine curiosity. The existing tools either show raw listings with no depth (Ticketmaster) or artist depth with no live show context (Spotify).

**User Value:** Users can open the app and immediately browse a visually rich listing of upcoming shows in their city. Genre tags and ticket prices are visible without any taps. The Trending Now section gives passive discoverers an editorial anchor — a curated starting point. Users who have a direction can filter by genre, price range, or date instantly. Every card is an invitation to go deeper.

**Assumptions:**
- M0 (Foundation) and M1 (Data Layer) are fully shipped and validated
- Ticketmaster provides sufficient concert coverage for the pilot market to make both the Trending Now and This Week sections feel populated
- Genre data from Ticketmaster classifications is accurate enough to power the genre filter without significant manual curation
- Ticketmaster returns price range data for the majority of listings — cards without price data show no price rather than breaking
- Trending Now logic in v1 is based on a simple signal (e.g. selling fast flag or high ticket volume from Ticketmaster) — algorithmic trending is a v2 feature

**Not Doing:**
- Price displayed as a prominent badge — price is inline in the metadata row, styled in accent color for visibility
- Dedicated map page — venue map context lives within the card or artist modal, not as a separate navigation destination
- Mile/distance radius filter — requires geolocation permissions, adds friction for new users, deferred to v2
- User-specific personalization of the listing — this is v2
- Algorithmic or ML-driven trending — Trending Now in v1 uses a simple Ticketmaster signal

**Acceptance Criteria:**
- [ ] Discover page renders with two sections: Trending Now (featured hero cards) and This Week (standard card listing)
- [ ] Each card displays: artist image, artist name, venue, date, genre tag, and lowest ticket price (price in accent color, inline in metadata)
- [ ] Trending Now cards are visually larger and more prominent than This Week cards
- [ ] This Week section loads additional cards as the user scrolls (infinite scroll / load more)
- [ ] Genre filter strip correctly filters both sections in real time on selection
- [ ] Filter drawer opens from the filter icon in the header and exposes: price range slider and date range toggle (This Week / This Month / All)
- [ ] Search bar filters results across show name, artist name, genre, and venue name
- [ ] Map pin on each card opens venue location context inline — no separate map page
- [ ] Loading skeleton state matches the exact card dimensions of real content
- [ ] Empty state renders with a message and action when no shows are found
- [ ] Error state renders with a retry action when the API fails
- [ ] Tapping a card correctly opens M3 (Artist Modal)
- [ ] All Figma frames frozen and designs match production 1:1 on both mobile and web viewports
- [ ] **M2 is deployed to Cloudflare Pages and validated with live data before M3 or M4 begin**

---

### Feature M3 — Artist Modal

**Feature:** A full artist profile overlay — bio, genre tags, top tracks with audio previews, and a ticket CTA.

**Description:** The Artist Modal is the depth layer of the discovery experience. When a user taps a concert card on the Discover page, the modal slides up and immerses them in the artist's world: a large hero image, genre tags, a biography, and a list of top tracks — each with a play button that triggers a 30-second Spotify audio preview. A "Get Tickets" CTA links directly to the Ticketmaster listing. A save button lets the user add the concert to Favorites (M5). M3 is where a user goes from curious to committed.

**User Problem:** Users have no in-app way to explore an unfamiliar artist once they encounter their listing. The current expectation is that the user leaves the app, finds the artist on Spotify, listens, comes back, finds the show again, and then decides. That journey has too much friction — most users abandon it before completing.

**User Value:** The user can stay in one place and go from "who is this?" to "I'm going" in a single, continuous session. The audio preview in particular removes the biggest barrier to discovery — hearing the artist's actual sound without any context-switching.

**Assumptions:**
- M0, M1, and M2 are fully shipped and validated
- Spotify preview URLs are available for the majority of top tracks — those without a preview URL are handled gracefully by hiding the play button
- The Cloudflare Worker's artist name lookup resolves correctly for ≥ 85% of Ticketmaster-listed artists
- The save mechanism introduced here is the sole write operation in v1 — no other feature writes user data

**Not Doing:**
- Full track playback — prohibited by Spotify Developer Terms of Service
- Follow artist functionality — this is a v2 social feature
- Artist discography or full track listing — top 5 tracks only in v1
- Concert reviews or ratings — this is v3
- Sharing the artist profile — this is v2

**Acceptance Criteria:**
- [ ] Tapping a concert card on M2 opens the modal as a slide-up overlay
- [ ] Modal correctly displays: artist hero image, name, genre tags (up to 5), biography, top 5 tracks, upcoming shows, and ticket CTA
- [ ] Each track row shows a play/pause button — tapping it plays the 30-second Spotify preview
- [ ] Only one track plays at a time — starting a new track stops the previous one
- [ ] Closing the modal stops any active audio playback
- [ ] "Get Tickets" opens the Ticketmaster URL in a new tab
- [ ] Save button correctly stores the concert for M5 (Favorites)
- [ ] Save button reflects saved/unsaved state immediately on tap
- [ ] Tracks with `null` preview URL do not show a play button — no broken UI
- [ ] Loading state renders correctly while artist data is fetching
- [ ] Error state renders with a retry action if artist data fails to load
- [ ] All Figma frames frozen and match production 1:1
- [ ] **M3 is deployed and validated with live data before M5 begins**

---

### Feature M4 — Search Page

**Feature:** A dedicated search page for finding shows by artist, show name, genre, or venue.

**Description:** The Search page gives users a focused, direct route to finding specific shows without browsing the full Discover listing. It features a full-width search bar as the primary element, with results returning in a compact list view — each row showing a left-aligned artist image, artist name, show name, venue, and date. Tapping a result opens the Artist Modal (M3). M4 has no downstream dependencies, making it the most isolated and independently buildable module in v1.

**User Problem:** Users who arrive knowing what they're looking for — a specific artist, venue, or show — have no efficient way to surface it. Browsing the Discover listing to find a specific show is time-consuming and frustrating.

**User Value:** Users can jump straight to what they're looking for. The search page also exposes the breadth of the app's data coverage — a user who searches for an artist they love and finds them is immediately more confident in using the app to discover artists they don't know yet.

**Assumptions:**
- M0, M1, and M2 are fully shipped and validated
- Search operates against the already-loaded concert dataset client-side in v1 — no additional API calls per query
- Artist images in search results are sourced from Ticketmaster API (already available from M1), not Spotify
- Debouncing at 300ms is sufficient to prevent performance issues on client-side filtering

**Not Doing:**
- Live API search — v1 searches the loaded dataset only
- Saved recent searches or search history
- Search suggestions or autocomplete
- Filtering within search results

**Acceptance Criteria:**
- [ ] Dedicated Search page is accessible via the bottom navigation bar
- [ ] Search bar is full-width and receives focus automatically on page arrival
- [ ] Search returns results across all four dimensions: show name, artist name, genre, venue name
- [ ] Each result row displays: left-aligned artist image, artist name, show name, venue, and date
- [ ] Tapping a result opens the Artist Modal (M3) for that concert
- [ ] Input is debounced at 300ms
- [ ] Empty state renders when a query returns no matches
- [ ] All Figma frames frozen and match production 1:1
- [ ] Deployed and validated in production

---

### Feature M5 — Favorites Page

**Feature:** A persistent page displaying all concerts the user has saved.

**Description:** The Favorites page is the user's personal collection of saved concerts. It reuses the concert card format from M2 and depends on the save mechanism introduced in M3. Saved concerts persist across sessions via local storage. Tapping a saved card opens the Artist Modal. A user can unsave a concert from the modal — the Favorites list updates in real time. The Favorites page also serves a strategic purpose: the save behavior data collected here in v1 is the behavioral signal that v2 personalization features will be built on.

**User Problem:** Users who save a concert while exploring have no place to find it again. Without a Favorites page, the save action is meaningless and users lose track of shows they were genuinely interested in.

**User Value:** Users have a persistent, curated shortlist of shows they care about. They can revisit it when they're ready to decide, compare options, and buy tickets without starting from scratch.

**Assumptions:**
- M0, M2, and M3 are fully shipped and validated — the save mechanism in M3 must exist before M5 can display its output
- Local storage is sufficient for v1 persistence — cross-device sync is a v2 concern
- The concert card component from M2 is reused without modification

**Not Doing:**
- Cross-device sync of saved concerts — v1 is local storage only
- Sorting or organizing saved concerts — saved order only in v1
- Notifications for upcoming saved shows — this is v2
- Personalized recommendations based on saved concerts — this is v2, informed by data collected here

**Acceptance Criteria:**
- [ ] Favorites page is accessible via the bottom navigation bar
- [ ] All concerts saved via M3 appear on this page, in the order they were saved
- [ ] Each saved concert uses the same card format as M2
- [ ] Tapping a saved card opens the Artist Modal (M3)
- [ ] Unsaving a concert via the M3 modal removes it from the Favorites list in real time
- [ ] Empty state renders with a message and a CTA directing the user back to Discover
- [ ] Saved concerts persist correctly across sessions (local storage)
- [ ] All Figma frames frozen and match production 1:1
- [ ] **M5 is deployed and validated before M6 begins**

---

### Feature M6 — Profile Page

**Feature:** A personal profile page with user identity, settings, help, and log out.

**Description:** The Profile page is the simplest module in v1 and intentionally so. It gives users a personal anchor within the app — their name and avatar — and three utility actions: Settings, Help, and Log Out. The page's primary role in v1 is to establish the profile surface that v2 will expand with full authentication, preferences, and personalized features.

**User Problem:** Without a profile page, the app has no personal dimension — it feels like a utility, not a product. Users also have no clear place to access settings or exit their session.

**User Value:** The app feels like it belongs to the user. Settings and Help give them control and a support path. Log Out gives them a clean exit. Simple, but it closes a gap between "prototype" and "product."

**Assumptions:**
- M0 and M5 are fully shipped
- Authentication scope for v1 is unresolved — see Open Question OQ-1. If auth is out of scope for v1, the profile page displays a placeholder name/avatar and Log Out is a no-op or omitted
- Settings screen scope is also unresolved — see Open Question OQ-2

**Not Doing:**
- Full authentication system — this is v2
- Personalized recommendations on the profile page — this is v2
- Activity history or concert history
- Social features (followers, following, shared lists)
- Profile editing (name, avatar, preferences) — this is v2

**Acceptance Criteria:**
- [ ] Profile page is accessible via the bottom navigation bar
- [ ] Page displays user name and profile avatar
- [ ] Settings, Help, and Log Out buttons are present and functional
- [ ] Settings navigates to a settings screen (scope per OQ-2)
- [ ] Help navigates to a support resource
- [ ] Log Out correctly ends the user's session
- [ ] All Figma frames frozen and match production 1:1
- [ ] Deployed and validated in production

---

## Step 7 — Success Metrics

The definition of success for v1.0 is a **working, stable application that is ready to launch for a pilot beta.** Every metric below is a gate — the app is not ready for beta until all of them are met.

---

### Launch Gate Metrics

| Metric | Definition | Target |
|---|---|---|
| **App completeness** | All six modules (M0–M6) are shipped, deployed, and functional | 100% — no exceptions |
| **Concert data coverage** | % of active upcoming shows in pilot market surfaced from Ticketmaster | ≥ 90% of shows in next 30 days |
| **Artist data coverage** | % of listed artists with Spotify image and genre data correctly populated | ≥ 85% |
| **Core flow completion** | User can complete browse → artist modal → audio preview → ticket link in ≤ 3 taps (mobile) or ≤ 3 clicks (web) | Achieved on both mobile and web |
| **Error rate** | API failures that reach the user without a handled fallback UI | 0 unhandled errors |
| **Load performance** | Time to interactive on the Discover page | < 2.5s mobile (3G simulation), < 1.5s web (broadband) |
| **Design fidelity** | All shipped screens match their Figma source frames | 1:1 match on all screens |
| **Favorites persistence** | Saved concerts survive app close and reopen | 100% persistence rate |
| **Search accuracy** | Search returns expected results across all four dimensions (name, artist, genre, venue) | Verified across ≥ 20 test queries |

---

### Pilot Beta Readiness Checklist

Beyond the metrics above, the following qualitative conditions must be true before the app is opened to pilot beta users:

- [ ] No screen displays a blank or broken state under normal operating conditions on either mobile or web
- [ ] All loading, empty, and error states are implemented and feel intentional
- [ ] The app is navigable by someone with no prior context — no dead ends, no broken flows
- [ ] All screens are validated on both mobile viewport and web (desktop/tablet) viewport
- [ ] Concert data is current — listings are not stale or showing past events
- [ ] The Cloudflare Worker is stable under expected pilot traffic
- [ ] The deployment pipeline is verified — a push to `main` reliably produces a live, correct deployment

---

## 8. Design System

### Tokens

| Token | Value | Usage |
|---|---|---|
| Primary accent | Violet `#a78bfa` | CTAs, active states, highlights |
| Secondary accent | Cyan `#22d3ee` | Secondary actions, badges, links |

### Component Library

| Component | Purpose | Used In |
|---|---|---|
| `Button` | Primary and secondary actions | All screens |
| `Badge` | Status labels | Cards, modal |
| `HeatBadge` | Genre tags | Artist Modal (M3) |
| `GenrePill` | Genre filter chips | Discover (M2), Search (M4) |
| `TabList` | Segmented controls | Future — v2 date filtering |
| `BottomNav` | Primary app navigation | All screens |
| `Card` | Concert listing item | Discover (M2), Favorites (M5) |

### Design Toolchain

| Tool | Role |
|---|---|
| Figma Make | Screen design — one page per module, named to match module tag |
| Tokens Studio | Design token sync from Figma to codebase |
| Figma MCP | Token extraction via Claude Code CLI |

---

## 9. Design → Code Workflow

Each module follows this sequence without exception. No step may be skipped.

| Step | Action | Output |
|---|---|---|
| 1. Spec | Write the feature spec in this PRD, confirm all dependencies are shipped | PRD section complete |
| 2. Wireframe | Rough layout in Figma Make — structure only, no colors or styling | Wireframe frames in Figma |
| 3. Visual design | Apply design system to wireframes, design all states | Polished Figma frames |
| 4. Design freeze | Add version comment in Figma, confirm all states are present | Frozen Figma page |
| 5. Token export | Sync tokens via Tokens Studio + Figma MCP, map to Tailwind config | Updated `tailwind.config` |
| 6. Build | Cut Git branch `feature/[module-tag]`, build to match Figma 1:1 | Feature branch |
| 7. Review | Pixel-check against Figma, validate with live API data | Approved branch |
| 8. Ship | Merge to main → auto-deploy → validate production → tag release → update changelog | Live feature |

---

## 10. Versioning Convention

```
v[MAJOR].[MINOR].[PATCH]

v1.x.x  — Core discovery experience (pilot market)     ← current
v2.x.x  — Personalization, recommendations + market expansion
v3.x.x  — Community + Social
```

| Artifact | Pattern | Example |
|---|---|---|
| Git branch | `feature/[module-tag]-[name]` | `feature/m3-artist-modal` |
| Figma page | `[module-tag] — [Feature Name]` | `m3 — Artist Modal` |
| Git release tag | `v[major].[minor].[patch]` | `v1.3.0` |
| Changelog entry | Written at ship time | See Appendix A |

---

## 11. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Spotify returns no match for a Ticketmaster artist | Medium | Medium | Show card without Spotify data rather than failing — artist name and Ticketmaster data still display |
| Ticketmaster rate limits exceeded | Low | High | Cache responses at the Cloudflare Worker layer; implement exponential backoff |
| Spotify preview URLs are `null` for a track | Medium | Low | Hide play button when `previewUrl` is null — never render a broken control |
| Cloudflare Worker becomes unavailable | Low | High | Surface a user-facing error state with retry; no silent failures |
| Design drift between Figma and shipped code | Medium | Medium | Pixel-check against Figma before every merge; design must be frozen before build starts |
| Local storage cleared by user or browser | Low | Low | Accepted risk for v1 — cross-device persistence is a v2 concern, documented in Favorites spec |
| Pilot market Ticketmaster coverage is thin | Medium | High | Validate data volume before launch; do not open beta if listing feels sparse |

---

## 12. Open Questions

| ID | Question | Owner | Status |
|---|---|---|---|
| OQ-1 | Is user authentication in scope for v1, or is the Profile page a placeholder for v2 auth? | Product | Open |
| OQ-2 | What is in scope for the Settings screen in v1 — notifications, location, display preferences? | Product | Open |
| OQ-3 | Should the Discover page genre filter support multi-select or single-select at launch? | Product | Open |
| OQ-4 | Does search on the Search page query Ticketmaster live or filter the already-loaded dataset client-side? | Engineering | Open |
| OQ-5 | How should saved concerts persist — local storage for v1, or does v1 require a lightweight backend? | Engineering | Open |
| OQ-6 | What Ticketmaster signal determines Trending Now in v1 — selling fast flag, ticket volume, or recency? | Engineering | Open |
| OQ-7 | Does the map pin on a concert card open an inline map preview or link out to Google Maps / Apple Maps? | Product | Open |

---

## 13. Appendix

### A. Changelog

| Version | Date | Author | Summary |
|---|---|---|---|
| PRD 3.2 | March 2026 | Jose | Updated M2 Discover page based on wireframe review — added Trending Now section, infinite scroll, filter drawer (price + date), inline price styling, map pin on card, removed dedicated map nav page |
| PRD 3.1 | March 2026 | Jose | Added web as a v1.0 launch target alongside mobile; updated constraints, metrics, and acceptance criteria |
| PRD 3.0 | March 2026 | Jose | Full restructure using 7-step skeleton; merged all prior content into cohesive framework |
| PRD 2.0 | March 2026 | Jose | Restructured to modular build architecture; added dependency map and module specs |
| PRD 1.0 | March 2026 | Jose | Initial PRD created; v1 roadmap established |

### B. Pre-v1 Prototype Foundation

The following was completed during the prototype phase and forms the technical and design foundation for v1:

- Single-file HTML prototype with 33 verified concerts across 8 Seattle venues
- Live Ticketmaster and Spotify data integration validated end-to-end
- Cloudflare Worker proxy for Spotify API established and functional
- Design system (violet/cyan palette, core component library) established in Figma Make
- Next.js + TypeScript + Tailwind v4 project scaffolded and deployed to Cloudflare Pages
- GitHub auto-deploy pipeline to Cloudflare Pages configured and verified

### C. Out of Scope — Full List

The following will not be built in v1. They are logged here permanently to prevent scope creep.

- Algorithm-driven personalization or automated recommendations (v2 — informed by Favorites data from v1)
- Venue profile pages (v2)
- Date range filtering (v2)
- Concert reviews or community ratings (v3)
- Setlist integration via setlist.fm (v3)
- Shareable social cards (v2)
- Ticket price comparison across platforms
- Monetization or affiliate ticket links
- Push notifications
- Native iOS or Android application (v1 ships as a responsive web app accessible on mobile browser and desktop — a dedicated native app is a future consideration)
- Expansion to markets beyond the pilot city (v2 — contingent on pilot validation)
- Cross-device Favorites sync (v2 — requires backend)
- Full Spotify track playback (prohibited by Spotify Developer Terms of Service — permanent constraint)

### D. References

- Ticketmaster Discovery API — https://developer.ticketmaster.com
- Spotify Web API — https://developer.spotify.com/documentation/web-api
- Cloudflare Pages — https://developers.cloudflare.com/pages
- Cloudflare Workers — https://developers.cloudflare.com/workers
- Project repository — https://github.com/jeasdesigns/Hypewav

---

*This document is the source of truth for all Hype.Wav product decisions. The feature spec must be written and reviewed in this PRD before design begins. The changelog must be updated when a module ships.*

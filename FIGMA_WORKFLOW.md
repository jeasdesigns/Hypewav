# Complete Figma Workflow - After Claude Code Builds Your App

Step-by-step guide for integrating your coded Hype.Wav app with Figma.

---

## 🎯 Overview: The Complete Workflow

```
Claude Code builds app
        ↓
Deploy to Vercel/Netlify
        ↓
Create Figma documentation
        ↓
Sync design tokens
        ↓
Use for presentations & iteration
```

---

## 📋 Phase 1: After Claude Code Generates Your App

### Step 1: Verify the Build

```bash
# Navigate to your app directory
cd hype-wav

# Install dependencies
npm install

# Test locally
npm run dev

# Should open at http://localhost:5173
```

**Check:**
- ✅ All pages load (Discover, Search, Saved, Profile)
- ✅ Navigation works
- ✅ Images display
- ✅ No console errors

### Step 2: Production Build Test

```bash
npm run build

# Check for errors
# Verify dist/ folder is created
```

---

## 🚀 Phase 2: Deploy Your App

### Quick Deploy with Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, then you'll get:
# ✅ Preview URL: https://hype-wav-abc123.vercel.app
```

For production:

```bash
vercel --prod

# ✅ Production URL: https://hype-wav.vercel.app
```

**Save this URL - you'll use it in Figma!**

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

---

## 📸 Phase 3: Create Screen Documentation

### Step 3A: Screenshot Each Screen

**Tools:**
- **Mac:** Cleanshot X (paid) or Cmd+Shift+4
- **Windows:** ShareX (free) or Win+Shift+S
- **Web:** [Screely.com](https://screely.com) - adds device frames

**Screens to capture:**
1. Discover page (home feed)
2. Discover page (scrolled down)
3. Search page (empty state)
4. Search page (with results)
5. Saved page (Upcoming tab)
6. Saved page (Past tab)
7. Profile page
8. Show detail page
9. Artist profile page (if built)

**Settings for screenshots:**
- Browser DevTools → Device mode
- Dimensions: 390 x 844 (iPhone 14 Pro)
- Remove browser chrome
- Zoom: 100%

### Step 3B: Create Device Mockups (Optional)

Use [Screely](https://screely.com):

1. Upload screenshot
2. Select iPhone 14 Pro frame
3. Choose background gradient
4. Download high-res PNG

Or use [Mockuphone](https://mockuphone.com):

1. Upload screenshots
2. Select device
3. Download mockups

---

## 🎨 Phase 4: Create Figma Reference File

### Step 4A: Set Up Figma File Structure

**Create new Figma file:** "Hype.Wav - Production App"

**Page structure:**
```
📄 Pages:
├── 🏠 App Screens (main screens)
├── 🎨 Design System (tokens, components)
├── 📱 Interactive Prototype (linked screens)
├── 📋 Documentation (notes, specs)
└── 🚀 Live App Reference (embedded link)
```

### Step 4B: Import Screenshots

**In "App Screens" page:**

1. Create artboard frames:
   - Frame tool (F)
   - iPhone 14 Pro (390 x 844)
   - Create 9 frames in a grid

2. Name frames:
   - "1. Discover - Home"
   - "2. Discover - Scrolled"
   - "3. Search - Empty"
   - "4. Search - Results"
   - "5. Saved - Upcoming"
   - "6. Saved - Past"
   - "7. Profile"
   - "8. Show Detail"
   - "9. Artist Profile"

3. Import screenshots:
   - Drag screenshots into frames
   - Resize to fit (390 x 844)
   - Align to top-left

### Step 4C: Add Annotations

Create annotation layer:

1. Create text boxes with notes:
   ```
   🔥 Featured Show
   Red-orange gradient flame icon
   Indicates curated picks
   ```

2. Add arrows pointing to features

3. Use colors:
   - 🟣 Purple for primary features
   - 🟢 Green for interactions
   - 🔴 Red for important notes

### Step 4D: Link to Live App

**Method 1: Add URL in Description**

1. Select frame
2. Right sidebar → Add description
3. Paste: `Live URL: https://hype-wav.vercel.app`

**Method 2: Add as Prototype Link**

1. Select frame
2. Prototype tab
3. Click "+" → Open URL
4. Paste your Vercel URL
5. Click frame in present mode → Opens live app!

**Method 3: Embed in FigJam (Interactive)**

1. Create FigJam board: "Hype.Wav - Live Demo"
2. Add widget → Embed
3. Paste Vercel URL
4. Resize to mobile size
5. **Interactive live app in Figma!**

---

## 🎨 Phase 5: Design System Documentation

### Step 5A: Create Color Styles

**In Figma:**

1. Select any shape
2. Fill → Color styles → "+" icon
3. Create styles:

```
Hype.Wav/Purple/50  → #F5F3FF
Hype.Wav/Purple/500 → #8B5CF6
Hype.Wav/Purple/900 → #4C1D95
Hype.Wav/Gray/50    → #F9FAFB
Hype.Wav/Gray/900   → #111827
Hype.Wav/Gray/950   → #030712
Hype.Wav/Orange/500 → #F97316
Hype.Wav/Red/500    → #EF4444
```

### Step 5B: Create Text Styles

1. Select text
2. Text styles → "+" icon
3. Create styles:

```
Hype.Wav/Display/Bold     → 24px, Bold
Hype.Wav/Heading/Semibold → 20px, Semibold
Hype.Wav/Body/Regular     → 16px, Regular
Hype.Wav/Body/Medium      → 16px, Medium
Hype.Wav/Caption/Regular  → 14px, Regular
Hype.Wav/Small/Regular    → 12px, Regular
```

### Step 5C: Create Component Library

**Create components in "Design System" page:**

1. **Show Card Component**
   - Create show card
   - Component → Create component (Cmd+Alt+K)
   - Name: "Show Card"
   - Add variants: Default, Featured, Past Event

2. **Genre Pill Component**
   - Create pill
   - Create component
   - Add variants: Default, Selected

3. **Bottom Nav Component**
   - Create nav bar
   - Create component
   - Add variants: Discover, Search, Saved, Profile

4. **Button Components**
   - Primary button
   - Secondary button
   - Variants: Default, Hover, Disabled

### Step 5D: Document Spacing

1. Create spacing scale guide:
   ```
   XS:  4px  ▪
   SM:  8px  ▪▪
   MD:  16px ▪▪▪▪
   LG:  24px ▪▪▪▪▪▪
   XL:  32px ▪▪▪▪▪▪▪▪
   ```

2. Show in examples:
   - Card padding: MD (16px)
   - Section gaps: LG (24px)
   - Button padding: SM horizontal, XS vertical

---

## 🔄 Phase 6: Sync Design Tokens

### Option A: Tokens Studio Plugin (Recommended)

See `DESIGN_TOKENS_SYNC.md` for complete guide.

**Quick setup:**

1. Install Tokens Studio plugin
2. Create `design-tokens.json` (see guide)
3. Import to Figma
4. Apply tokens to elements
5. Export when designers update

**Benefits:**
- Single source of truth
- Auto-sync colors/spacing
- Easy updates

### Option B: Manual Variables

1. Go to Local variables
2. Create collection: "Hype.Wav Tokens"
3. Add color variables:
   - purple-500 → #8B5CF6
   - gray-950 → #030712
4. Add number variables:
   - spacing-md → 16
   - spacing-lg → 24

---

## 📱 Phase 7: Create Interactive Prototype

### Step 7A: Link Screens

**In "Interactive Prototype" page:**

1. Duplicate all screen frames
2. Select Discover frame
3. Prototype tab → "+" on bottom nav
4. Connect to:
   - Search icon → Search page
   - Saved icon → Saved page
   - Profile icon → Profile page

5. Select show card
6. Connect to → Show Detail page

7. Add transitions:
   - Navigate
   - Instant or Smart Animate
   - Dissolve (optional)

### Step 7B: Present Mode Settings

1. Click "Present" in top-right
2. Settings:
   - Device: iPhone 14 Pro
   - Starting frame: Discover
   - Background: Dark (#111827)

3. Share prototype link:
   - Share → Copy link
   - Set to "Anyone with link can view"

**Now you have a clickable prototype!**

---

## 📋 Phase 8: Documentation Page

### Create "Documentation" page in Figma:

**Add sections:**

1. **Overview**
   ```
   Hype.Wav - Concert Discovery App
   Greater Seattle music scene
   WCAG AAA compliant
   Mobile-first design (390x844)
   ```

2. **Live URLs**
   ```
   🚀 Production: https://hype-wav.vercel.app
   📊 Preview: https://hype-wav-git-dev.vercel.app
   📖 Docs: Link to DESIGN_SYSTEM.md
   ```

3. **Design Principles**
   ```
   - Feed-first discovery
   - High-contrast accessibility
   - Featured flame icon treatment
   - Spotify integration for artist data
   ```

4. **Color Accessibility**
   ```
   Purple 500 on Gray 950: AAA ✓ (12.3:1)
   Gray 50 on Gray 950: AAA ✓ (18.2:1)
   All text meets WCAG AAA standards
   ```

5. **Component Notes**
   ```
   Show Card:
   - 16px padding
   - 12px border radius
   - Drop shadow on hover
   - Featured: flame gradient icon
   ```

---

## 🎯 Phase 9: Team Sharing & Handoff

### Step 9A: Organize for Developers

**Developer handoff checklist:**

1. All screens documented
2. Components have specs (spacing, colors)
3. Interaction notes added
4. Live app URL linked
5. Design tokens exported

**Add to Figma:**
- Frame with "Dev Notes"
- List all components with code references
- Link to GitHub repo
- Link to deployed app

### Step 9B: Share with Stakeholders

**For presentations:**

1. Create presentation view:
   - Frame: 1920 x 1080
   - Add title slides
   - Add app screenshots
   - Add feature highlights

2. Present mode:
   - Full screen
   - Walk through prototype
   - Show live app in browser

**Export assets:**
- Export all screens as PNG (2x)
- Create PDF of design system
- Share Figma link (view-only)

---

## 🔄 Phase 10: Iteration Workflow

### When Making Updates:

**Scenario 1: Design changes first**

```
1. Designer updates in Figma
2. Designer exports design tokens
3. Designer notes changes in Figma
4. Developer updates code from Figma
5. Deploy updated app
6. Update screenshots in Figma
```

**Scenario 2: Code changes first**

```
1. Developer updates code
2. Deploy to preview URL
3. Screenshot new version
4. Update Figma screenshots
5. Update design tokens if needed
```

**Scenario 3: New feature**

```
1. Design in Figma first
2. Get feedback
3. Developer builds in code
4. Test on preview URL
5. Iterate design if needed
6. Deploy to production
7. Update Figma with final version
```

---

## ✅ Complete Workflow Checklist

### Deployment Phase:
- [ ] App deployed to Vercel/Netlify
- [ ] Production URL working
- [ ] All pages accessible
- [ ] No console errors

### Figma Setup Phase:
- [ ] Figma file created
- [ ] Screenshots imported
- [ ] Frames properly sized (390x844)
- [ ] Annotations added
- [ ] Live URL linked

### Design System Phase:
- [ ] Color styles created
- [ ] Text styles created
- [ ] Components built
- [ ] Spacing documented
- [ ] Design tokens synced

### Prototype Phase:
- [ ] Screens linked
- [ ] Bottom nav connected
- [ ] Transitions added
- [ ] Present mode tested
- [ ] Share link created

### Documentation Phase:
- [ ] Overview written
- [ ] URLs documented
- [ ] Design principles listed
- [ ] Accessibility notes added
- [ ] Developer notes added

### Sharing Phase:
- [ ] Figma link shared with team
- [ ] Live app shared
- [ ] Design tokens exported
- [ ] Documentation accessible
- [ ] Feedback process established

---

## 🎨 Figma File Template Structure

```
📁 Hype.Wav - Production App

📄 App Screens
  ├── Cover (title slide)
  ├── 1. Discover - Home
  ├── 2. Discover - Scrolled
  ├── 3. Search - Empty
  ├── 4. Search - Results
  ├── 5. Saved - Upcoming
  ├── 6. Saved - Past
  ├── 7. Profile
  ├── 8. Show Detail
  └── 9. Artist Profile

📄 Design System
  ├── Colors
  ├── Typography
  ├── Spacing
  ├── Components
  │   ├── Show Card
  │   ├── Genre Pill
  │   ├── Bottom Nav
  │   └── Buttons
  └── Icons

📄 Interactive Prototype
  ├── (Linked versions of all screens)
  └── (Connected with interactions)

📄 Documentation
  ├── Overview
  ├── URLs & Links
  ├── Design Principles
  ├── Accessibility
  ├── Component Specs
  └── Developer Notes

📄 Live App Reference
  ├── Embedded iframe (FigJam)
  └── URL links
```

---

## 🚀 Quick Start Summary

**Fastest path to Figma integration:**

1. **Deploy** → `vercel` (2 minutes)
2. **Screenshot** → 9 screens (5 minutes)
3. **Create Figma file** → Import screenshots (10 minutes)
4. **Add live URL** → Link in prototype (2 minutes)
5. **Share** → Send to team (1 minute)

**Total time: ~20 minutes to go from code to Figma!**

---

## 📚 Related Guides

- **DEPLOYMENT_GUIDE.md** - How to deploy your app
- **DESIGN_TOKENS_SYNC.md** - Sync tokens between code and Figma
- **DESIGN_SYSTEM.md** - Complete design system reference
- **COMPONENT_PATTERNS.md** - Component code patterns

---

## 💡 Pro Tips

1. **Version control in Figma:**
   - Save versions: File → Save to version history
   - Name versions: "v1.0 - Initial import from code"

2. **Auto-update screenshots:**
   - Use Figma plugins like "Screenshot" or "URL to Image"
   - Set up automation with Figma API

3. **Keep code as source of truth:**
   - Don't manually edit in Figma and code separately
   - Choose one direction: Design-first OR Code-first

4. **Use FigJam for collaboration:**
   - Embed live app
   - Add sticky notes for feedback
   - Link to Figma designs

5. **Export for marketing:**
   - High-res PNGs (3x) for app store
   - Device mockups for website
   - GIFs of interactions for demos

---

## 🎉 You're Done!

Your workflow is now:

**Code (Claude Code)** ↔ **Deploy (Vercel)** ↔ **Document (Figma)**

All three stay in sync, and you have a professional presentation-ready design system!

**Questions? Check the other guides or reach out to your team!** 🚀

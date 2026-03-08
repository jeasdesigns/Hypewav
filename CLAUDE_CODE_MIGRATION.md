# Migrating Hype.Wav to Claude Code - Exact Code Transfer

This guide shows you how to transfer the exact working code from this session to Claude Code.

---

## 🎯 The Problem

Giving Claude Code only specs/documentation results in:
- ❌ Different interpretations
- ❌ Missing design details
- ❌ Inconsistent styling
- ❌ Doesn't match your approved design

## ✅ The Solution

Give Claude Code the **actual working code files** from this session.

---

## 📦 Files You Need to Download

### Core App Files

**Essential files (MUST include):**

```
src/
├── app/
│   ├── App.tsx                      ← Main app entry
│   ├── routes.ts                    ← All routing
│   ├── components/
│   │   ├── MobileFrame.tsx         ← Mobile container
│   │   ├── BottomNav.tsx           ← Bottom navigation
│   │   ├── GenreFilter.tsx         ← Genre filter pills
│   │   ├── HypeHeader.tsx          ← Top header
│   │   └── ShowCard.tsx            ← Show card component
│   ├── pages/
│   │   ├── DiscoverPage.tsx        ← Home/Discover page
│   │   ├── SearchPage.tsx          ← Search page
│   │   ├── SavedPage.tsx           ← Saved shows page
│   │   ├── ProfilePage.tsx         ← User profile page
│   │   ├── ShowDetailPage.tsx      ← Show detail page
│   │   └── ArtistProfilePage.tsx   ← Artist profile page
│   ├── layouts/
│   │   └── MobileAppLayout.tsx     ← Layout wrapper
│   └── data/
│       └── mockData.ts             ← Mock show data
├── styles/
│   ├── theme.css                    ← Design tokens & theme
│   └── globals.css                  ← Global styles
└── main.tsx                         ← App bootstrap

Root files:
├── package.json                     ← Dependencies
├── tsconfig.json                    ← TypeScript config
├── vite.config.ts                   ← Vite config
├── tailwind.config.js              ← Tailwind config (if exists)
└── index.html                       ← HTML entry point
```

---

## 🚀 Step-by-Step Migration Process

### Step 1: Ask Claude (This Session) to Prepare Export

**Say this to me (Claude in this session):**

> "Can you create a complete file list with all the code I need to copy to Claude Code? Show me each file's contents."

I'll show you all the essential files one by one.

### Step 2: Copy Files to Claude Code

**In Claude Code, use this prompt:**

> I have a fully working Hype.Wav mobile app built in another environment. I'm going to share the exact code files with you. Please recreate this app exactly as provided - don't modify the design, just set up the project structure.
>
> Tech stack:
> - React + TypeScript
> - Vite
> - Tailwind CSS v4
> - React Router
> - Lucide React (icons)
>
> I'll share files one by one. Wait for all files before building.

### Step 3: Share Files in This Order

1. **Configuration files first:**
   - `package.json`
   - `vite.config.ts`
   - `tsconfig.json`
   - `index.html`

2. **Styles:**
   - `src/styles/theme.css`
   - `src/styles/globals.css`

3. **Core app:**
   - `src/main.tsx`
   - `src/app/App.tsx`
   - `src/app/routes.ts`

4. **Data:**
   - `src/app/data/mockData.ts`

5. **Components:**
   - `src/app/components/MobileFrame.tsx`
   - `src/app/components/BottomNav.tsx`
   - `src/app/components/HypeHeader.tsx`
   - `src/app/components/GenreFilter.tsx`
   - `src/app/components/ShowCard.tsx`

6. **Layout:**
   - `src/app/layouts/MobileAppLayout.tsx`

7. **Pages:**
   - `src/app/pages/DiscoverPage.tsx`
   - `src/app/pages/SearchPage.tsx`
   - `src/app/pages/SavedPage.tsx`
   - `src/app/pages/ProfilePage.tsx`
   - `src/app/pages/ShowDetailPage.tsx`
   - `src/app/pages/ArtistProfilePage.tsx`

### Step 4: After All Files Shared

**Say to Claude Code:**

> All files shared. Please:
> 1. Create the exact project structure
> 2. Copy all files exactly as provided
> 3. Run npm install
> 4. Test that npm run dev works
> 5. Report any issues

---

## 📋 Simplified Alternative: Archive Method

### Option A: Create ZIP Archive

**Ask me (this session):**

> "Can you tell me which files to manually download and how to structure them in a ZIP file?"

Then:
1. Download all listed files from this session
2. Recreate folder structure locally
3. ZIP the entire project
4. Share ZIP with Claude Code

### Option B: GitHub Repository

**Even better - use GitHub:**

1. Ask me to prepare all files
2. Create GitHub repo locally
3. Push all files
4. Share repo URL with Claude Code
5. Claude Code clones and uses exact code

---

## 🎯 Exact Prompt for Claude Code (After Files Shared)

```
I have a complete Hype.Wav mobile concert discovery app. All code files are above.

Please:

1. Create a new Vite + React + TypeScript project
2. Copy ALL files exactly as provided (no modifications)
3. Install dependencies from package.json
4. Verify the app runs with: npm run dev
5. The app should display at 390x844 mobile frame
6. All pages should be accessible via bottom navigation

Tech requirements:
- Node 18+
- Vite 5+
- React 18+
- React Router (not react-router-dom)
- Tailwind CSS v4
- TypeScript

Do NOT modify:
- Colors (already WCAG AAA compliant)
- Spacing (already documented)
- Component structure (already finalized)
- Design patterns (already approved)

Just recreate exactly as provided.

After setup, confirm:
✓ App runs on localhost
✓ All 4 nav items work (Discover, Search, Saved, Profile)
✓ Show cards display correctly
✓ Genre filters work
✓ Mobile frame is visible
```

---

## ✅ Verification Checklist

After Claude Code builds it, verify:

- [ ] `npm install` succeeds
- [ ] `npm run dev` starts server
- [ ] App opens in browser
- [ ] Mobile frame visible (390x844)
- [ ] Bottom nav has 4 items
- [ ] Discover page shows genre filters
- [ ] Show cards display with images
- [ ] Featured flame icon visible
- [ ] Colors match (purple, gray, orange gradient)
- [ ] Navigation between pages works
- [ ] Search page accessible
- [ ] Saved page has Upcoming/Past tabs
- [ ] Profile page has menu items

---

## 🐛 Common Issues & Fixes

### Issue 1: "Module not found: lucide-react"

```bash
npm install lucide-react
```

### Issue 2: "react-router not found"

```bash
npm install react-router
```

### Issue 3: Colors look different

Check `src/styles/theme.css` matches exactly:
```css
@theme {
  --color-purple-500: #8B5CF6;
  --color-gray-950: #030712;
  /* etc */
}
```

### Issue 4: Layout broken

Check `MobileFrame.tsx` has:
```tsx
<div className="w-[390px] h-[844px]">
```

### Issue 5: Routes don't work

Verify `package.json` has `"react-router"` NOT `"react-router-dom"`

---

## 💡 Pro Tip: Incremental Transfer

If sharing all files at once is overwhelming:

**Phase 1: Core Setup**
- Share config files + styles only
- Claude Code sets up blank project
- Verify it builds

**Phase 2: Basic Structure**
- Share App.tsx, routes.ts, MobileFrame
- Verify mobile frame appears

**Phase 3: Components**
- Share one component at a time
- Test each addition

**Phase 4: Pages**
- Share DiscoverPage first
- Then add other pages one by one

**Phase 5: Data**
- Finally add mockData.ts
- App complete!

---

## 🎉 After Successful Migration

Once Claude Code has your exact code:

1. ✅ Test locally: `npm run dev`
2. ✅ Deploy: Follow `DEPLOYMENT_GUIDE.md`
3. ✅ Document in Figma: Follow `FIGMA_WORKFLOW.md`
4. ✅ Set up tokens: Follow `DESIGN_TOKENS_SYNC.md`

---

## 🆘 Still Having Issues?

**Come back to this session and say:**

> "Claude Code still isn't matching the design. Can you show me [specific component] code so I can copy it exactly?"

I'll show you any file's exact code to copy/paste.

---

## 📝 Quick Reference Commands

```bash
# In Claude Code, after all files copied:

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Your app should now be pixel-perfect! 🎨✨

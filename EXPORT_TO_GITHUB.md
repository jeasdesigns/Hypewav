# Export Hype.Wav to GitHub - Complete File List

Follow this guide to copy all files from Figma Make to your local computer, then push to GitHub.

---

## 📋 Essential Files Checklist

Copy these files in order. I'll show you the content for each one.

### ✅ Configuration Files (Root)

- [ ] `.gitignore`
- [ ] `package.json` 
- [ ] `tsconfig.json`
- [ ] `vite.config.ts`
- [ ] `index.html`
- [ ] `README.md`

### ✅ Styles

- [ ] `src/styles/index.css`
- [ ] `src/styles/theme.css`

### ✅ Core App Files

- [ ] `src/main.tsx`
- [ ] `src/app/App.tsx`
- [ ] `src/app/routes.ts`

### ✅ Layouts

- [ ] `src/app/layouts/MobileAppLayout.tsx`

### ✅ Components

- [ ] `src/app/components/MobileFrame.tsx`
- [ ] `src/app/components/BottomNav.tsx`
- [ ] `src/app/components/HypeHeader.tsx`
- [ ] `src/app/components/GenreFilter.tsx`
- [ ] `src/app/components/ShowCard.tsx`

### ✅ Pages

- [ ] `src/app/pages/DiscoverPage.tsx`
- [ ] `src/app/pages/SearchPage.tsx`
- [ ] `src/app/pages/SavedPage.tsx`
- [ ] `src/app/pages/ProfilePage.tsx`
- [ ] `src/app/pages/ShowDetailPage.tsx`
- [ ] `src/app/pages/ArtistProfilePage.tsx`

### ✅ Data

- [ ] `src/app/data/mockData.ts`

---

## 🚀 Quick Instructions

### Step 1: Ask me for files

Say: **"Show me [filename]"**

Examples:
- "Show me package.json"
- "Show me src/app/components/MobileFrame.tsx"
- "Show me src/app/data/mockData.ts"

### Step 2: Copy each file

I'll show you the content → You copy it into VS Code or text editor → Save

### Step 3: Push to GitHub

```bash
cd ~/Desktop/hype-wav

# Initialize Git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Hype.Wav from Figma Make"

# Create repo on GitHub.com, then:
git remote add origin https://github.com/YOUR_USERNAME/hype-wav.git
git branch -M main
git push -u origin main
```

### Step 4: Use in Claude Code

Give Claude Code this prompt:

```
Clone and set up: https://github.com/YOUR_USERNAME/hype-wav

This is the complete Hype.Wav mobile app from Figma Make.

After cloning:
1. npm install
2. npm run dev
3. Verify it runs on localhost:5173

The app is production-ready. Don't modify unless I ask.

Tech stack:
- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router (NOT react-router-dom)
- Lucide React icons

Mobile frame: 390x844px
Design: WCAG AAA compliant
```

---

## 📁 Ready to Start?

**Tell me which approach you prefer:**

**Option A:** "Show me all files one by one" (I'll display 20+ files sequentially)

**Option B:** "Show me files in batches" (I'll group them: config files, then components, then pages)

**Option C:** "Create a downloadable bundle" (I'll create one mega-file with all code)

**Which option works best for you?**

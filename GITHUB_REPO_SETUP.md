# GitHub Repo Setup - Push to GitHub, Clone in Claude Code

The smartest way to migrate your Hype.Wav app to Claude Code.

---

## 🎯 Why This Approach is Best

```
This Session → GitHub Repo → Claude Code Clones → Done!
     ✓              ✓                ✓            ✓
```

**One command, perfect transfer, zero errors.**

---

## 📦 Step 1: Prepare Files for GitHub

### Essential Files to Include

**Core app files (MUST include):**
```
hype-wav/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   ├── routes.ts
│   │   ├── components/
│   │   │   ├── MobileFrame.tsx
│   │   │   ├── BottomNav.tsx
│   │   │   ├── GenreFilter.tsx
│   │   │   ├── HypeHeader.tsx
│   │   │   └── ShowCard.tsx
│   │   ├── layouts/
│   │   │   └── MobileAppLayout.tsx
│   │   ├── pages/
│   │   │   ├── DiscoverPage.tsx
│   │   │   ├── SearchPage.tsx
│   │   │   ├── SavedPage.tsx
│   │   │   ├── ProfilePage.tsx
│   │   │   ├── ShowDetailPage.tsx
│   │   │   └── ArtistProfilePage.tsx
│   │   └── data/
│   │       └── mockData.ts
│   ├── styles/
│   │   ├── theme.css
│   │   └── globals.css
│   └── main.tsx
├── public/
│   └── (any public assets)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .gitignore
└── README.md
```

**Documentation files (recommended):**
```
├── DESIGN_SYSTEM.md
├── COMPONENT_PATTERNS.md
├── QA_CHECKLIST.md
├── DEPLOYMENT_GUIDE.md
├── DESIGN_TOKENS_SYNC.md
└── FIGMA_WORKFLOW.md
```

### Files to EXCLUDE (add to .gitignore)

```gitignore
# .gitignore
node_modules/
dist/
.DS_Store
.env
.env.local
*.log
.vite
.vercel
```

---

## 🚀 Step 2: Download Files from This Session

### Option A: Ask Me to Show Each File

**Say to me:**

> "Show me the code for [filename]"

Examples:
- "Show me src/app/App.tsx"
- "Show me src/app/pages/DiscoverPage.tsx"
- "Show me package.json"

I'll display each file, then you save it locally.

### Option B: I'll Create a Complete File List

**Say to me:**

> "Create a complete export with all essential files I need for the GitHub repo"

I'll show you every file one by one in the correct order.

---

## 📁 Step 3: Set Up Local Git Repo

### Create the repo structure:

```bash
# Create project directory
mkdir hype-wav
cd hype-wav

# Initialize Git
git init

# Create folder structure
mkdir -p src/app/components
mkdir -p src/app/layouts
mkdir -p src/app/pages
mkdir -p src/app/data
mkdir -p src/styles
mkdir -p public

# Create .gitignore
cat > .gitignore << EOF
node_modules/
dist/
.DS_Store
.env
.env.local
*.log
.vite
.vercel
EOF
```

### Add files:

```bash
# After copying all files from this session to the folders above

# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Initial commit - Hype.Wav mobile app"
```

---

## 🌐 Step 4: Push to GitHub

### Create GitHub repo:

1. Go to [github.com](https://github.com)
2. Click "+" → "New repository"
3. Repository name: `hype-wav`
4. Description: "Concert discovery mobile app for Greater Seattle"
5. **Keep it Private** (or Public if you want)
6. **Don't** initialize with README (you already have one)
7. Click "Create repository"

### Push your code:

```bash
# Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/hype-wav.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Your code is now on GitHub!** ✅

---

## 🤖 Step 5: Use in Claude Code

### Exact Prompt for Claude Code:

```
Clone and set up this GitHub repository:
https://github.com/YOUR_USERNAME/hype-wav

This is a complete, production-ready mobile concert discovery app called Hype.Wav.

After cloning:
1. Run: npm install
2. Run: npm run dev
3. Verify the app loads at http://localhost:5173
4. Confirm you see a mobile frame (390x844) with the Discover page

The app is already complete - don't modify anything unless I ask.

Tech stack:
- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router (NOT react-router-dom)
- Lucide React icons

All design is WCAG AAA compliant and finalized.

Report any issues with installation or startup.
```

### Claude Code Will:

1. Clone the repo
2. Install dependencies
3. Start dev server
4. Confirm it works

**Done in 2 minutes!** 🎉

---

## ✅ Verification After Clone

Claude Code should confirm:

- [ ] Repository cloned successfully
- [ ] `npm install` completed without errors
- [ ] `npm run dev` started server
- [ ] App accessible at localhost:5173
- [ ] Mobile frame visible (390x844px)
- [ ] Bottom navigation with 4 items
- [ ] Discover page shows genre filters
- [ ] Show cards display correctly
- [ ] All pages accessible

---

## 🔄 Future Updates Workflow

### When you make changes:

**In Claude Code:**
```bash
# Make changes to files
# Test locally

# Commit changes
git add .
git commit -m "Add new filter feature"

# Push to GitHub
git push origin main
```

**Share with others:**
- Just share the GitHub URL
- They clone and run `npm install`
- Instant setup!

**Deploy from GitHub:**
- Vercel/Netlify can auto-deploy from GitHub
- Every push = auto-deploy
- No manual deployment needed!

---

## 📋 Complete File Checklist

Before pushing to GitHub, ensure you have:

**Essential files:**
- [ ] src/main.tsx
- [ ] src/app/App.tsx
- [ ] src/app/routes.ts
- [ ] src/app/components/MobileFrame.tsx
- [ ] src/app/components/BottomNav.tsx
- [ ] src/app/components/GenreFilter.tsx
- [ ] src/app/components/HypeHeader.tsx
- [ ] src/app/components/ShowCard.tsx
- [ ] src/app/layouts/MobileAppLayout.tsx
- [ ] src/app/pages/DiscoverPage.tsx
- [ ] src/app/pages/SearchPage.tsx
- [ ] src/app/pages/SavedPage.tsx
- [ ] src/app/pages/ProfilePage.tsx
- [ ] src/app/pages/ShowDetailPage.tsx
- [ ] src/app/pages/ArtistProfilePage.tsx
- [ ] src/app/data/mockData.ts
- [ ] src/styles/theme.css
- [ ] src/styles/globals.css
- [ ] index.html
- [ ] package.json
- [ ] tsconfig.json
- [ ] vite.config.ts

**Documentation (optional but recommended):**
- [ ] README.md
- [ ] DESIGN_SYSTEM.md
- [ ] DEPLOYMENT_GUIDE.md
- [ ] .gitignore

---

## 🎯 Quick Start Summary

```bash
# 1. Create local repo
mkdir hype-wav && cd hype-wav
git init

# 2. Add files (copy from this session)
# ... create folder structure and copy files ...

# 3. Commit
git add .
git commit -m "Initial commit"

# 4. Push to GitHub
git remote add origin https://github.com/YOUR_USERNAME/hype-wav.git
git push -u origin main

# 5. In Claude Code
# Clone and run:
# git clone https://github.com/YOUR_USERNAME/hype-wav.git
# cd hype-wav
# npm install
# npm run dev
```

**Total time: ~10 minutes** ⚡

---

## 💡 Pro Tips

### 1. Use GitHub Desktop (Easier)

If command line is intimidating:
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Create repo in GitHub Desktop
3. Drag files into repo folder
4. Click "Commit to main"
5. Click "Publish repository"

**Much easier!** 🎯

### 2. Add a Great README

Include in `README.md`:
```markdown
# Hype.Wav

Concert discovery mobile app for the Greater Seattle music scene.

## Features
- Feed-first discovery experience
- Spotify-enriched artist data
- WCAG AAA accessible design
- Featured show curation with flame icon

## Quick Start
\`\`\`bash
npm install
npm run dev
\`\`\`

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router

## Design System
See DESIGN_SYSTEM.md for complete design documentation.
```

### 3. Tag Versions

When you reach milestones:
```bash
git tag -a v1.0.0 -m "Initial production release"
git push origin v1.0.0
```

Now you can reference specific versions!

### 4. Auto-Deploy Setup

After pushing to GitHub:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repo
3. Every push = automatic deployment
4. Get preview URLs for branches

---

## 🆘 Troubleshooting

### Issue: "Repository not found"

- Check repo is public OR
- Claude Code needs access to private repos
- Make repo public temporarily

### Issue: "npm install fails"

Check `package.json` exists in root:
```bash
ls -la
# Should see package.json
```

### Issue: "Module not found"

Usually missing dependency:
```bash
npm install lucide-react react-router
```

---

## 🎉 After Successful Setup

Once Claude Code has cloned and verified:

1. ✅ **Test thoroughly** - Click through all pages
2. ✅ **Deploy** - Follow DEPLOYMENT_GUIDE.md  
3. ✅ **Document in Figma** - Follow FIGMA_WORKFLOW.md
4. ✅ **Share repo** - Team can clone and contribute

**Your app is now:**
- Version controlled ✓
- Backed up on GitHub ✓
- Ready for collaboration ✓
- Ready to deploy ✓

---

## 📚 Next Steps

1. Push code to GitHub
2. Give Claude Code the clone URL
3. Deploy to Vercel (connects to GitHub)
4. Set up Figma documentation
5. Start building new features!

**GitHub → Claude Code = Perfect migration!** 🚀

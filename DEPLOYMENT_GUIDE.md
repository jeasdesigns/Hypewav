# Deployment Guide - Hype.Wav

Complete guide to deploying your Hype.Wav app and integrating with Figma.

---

## 📋 Prerequisites

Before deploying, ensure your app:
- ✅ Builds successfully locally (`npm run build`)
- ✅ Runs without errors (`npm run dev`)
- ✅ Has all dependencies in package.json
- ✅ Has proper error handling for routes

---

## 🚀 Option 1: Vercel (Recommended - Easiest)

**Best for:** React apps, automatic deploys, fast CDN, zero config

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Deploy

```bash
# Navigate to your app directory
cd hype-wav

# Deploy (first time)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? hype-wav
# - Directory? ./
# - Override settings? No

# You'll get a URL like: https://hype-wav-xyz123.vercel.app
```

### Step 3: Production Deploy

```bash
# For production URL
vercel --prod

# You'll get: https://hype-wav.vercel.app
```

### Step 4: Custom Domain (Optional)

```bash
vercel domains add hype-wav.com
```

### Auto-Deploy Setup (GitHub Integration)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

**Now every git push auto-deploys!**

---

## 🎯 Option 2: Netlify (Great Alternative)

**Best for:** Static sites, form handling, serverless functions

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Build Your App

```bash
npm run build
# Creates dist/ folder
```

### Step 3: Deploy

```bash
# Login to Netlify
netlify login

# Deploy to draft URL
netlify deploy

# Follow prompts:
# - Create new site? Yes
# - Team? Your team
# - Site name? hype-wav
# - Publish directory? dist

# You'll get a draft URL

# Deploy to production
netlify deploy --prod
```

### Auto-Deploy Setup (GitHub Integration)

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub
4. Select your repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

**Auto-deploys on every push!**

---

## 📦 Option 3: GitHub Pages (Free)

**Best for:** Simple hosting, portfolio projects

### Step 1: Install gh-pages

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add to package.json:

```json
{
  "homepage": "https://yourusername.github.io/hype-wav",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 3: Update vite.config.ts

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hype-wav/', // Your repo name
})
```

### Step 4: Deploy

```bash
npm run deploy
```

Your app will be at: `https://yourusername.github.io/hype-wav`

---

## 🔧 Deployment Checklist

Before deploying, check:

- [ ] App builds without errors (`npm run build`)
- [ ] All routes work correctly
- [ ] Images load properly
- [ ] No hardcoded localhost URLs
- [ ] Environment variables configured (if any)
- [ ] 404 page configured for client-side routing
- [ ] Mobile responsive on all screens
- [ ] Performance optimized (check with Lighthouse)

---

## 🐛 Common Deployment Issues

### Issue 1: Routes Don't Work (404 on refresh)

**Problem:** React Router routes 404 when you refresh the page

**Fix for Vercel:** Create `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Fix for Netlify:** Create `netlify.toml`

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Fix for GitHub Pages:** Use HashRouter instead

```typescript
// In routes.ts
import { createHashRouter } from "react-router";

export const router = createHashRouter([
  // ... routes
]);
```

### Issue 2: Images Don't Load

**Problem:** Images show broken links

**Fix:** Check image imports use correct paths

```typescript
// ✅ Good
import logo from '../assets/logo.png'

// ❌ Bad
<img src="/assets/logo.png" />
```

### Issue 3: Build Fails

**Problem:** `npm run build` fails

**Fix:** Check for:
- TypeScript errors: `npm run type-check`
- Missing dependencies: `npm install`
- Node version compatibility

---

## 📊 Performance Optimization

### Before Deploying:

```bash
# 1. Analyze bundle size
npm run build
# Check dist/ folder size

# 2. Optimize images
# Use WebP format
# Compress images

# 3. Enable code splitting
# React Router already does this with lazy loading
```

### Lazy Load Routes (Optional)

```typescript
// In routes.ts
import { lazy } from 'react';

const DiscoverPage = lazy(() => import('./pages/DiscoverPage'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DiscoverPage,
  },
  // ... other routes
]);
```

---

## 🔐 Environment Variables

If you add API keys later (Spotify, Ticketmaster):

### Local Development

Create `.env.local`:

```bash
VITE_SPOTIFY_CLIENT_ID=your_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_secret
```

### Vercel

```bash
# Add via CLI
vercel env add VITE_SPOTIFY_CLIENT_ID

# Or via dashboard:
# Settings → Environment Variables
```

### Netlify

```bash
# Add via CLI
netlify env:set VITE_SPOTIFY_CLIENT_ID your_value

# Or via dashboard:
# Site settings → Environment variables
```

---

## 📱 Post-Deployment: Figma Integration

### Step 1: Get Your Live URL

After deployment, you'll have a URL like:
- Vercel: `https://hype-wav.vercel.app`
- Netlify: `https://hype-wav.netlify.app`
- GitHub Pages: `https://username.github.io/hype-wav`

### Step 2: Screenshot Each Screen

```bash
# Run your deployed app
# Use browser DevTools device mode (390x844)
# Take screenshots of:
# - Discover page
# - Search page
# - Saved page
# - Profile page
# - Show detail page
# - Artist profile page
```

**Tools for Clean Screenshots:**
- [Cleanshot](https://cleanshot.com/) - Mac
- [ShareX](https://getsharex.com/) - Windows
- [Screely](https://screely.com/) - Web-based, adds device frames

### Step 3: Create Figma Reference File

1. Create new Figma file: "Hype.Wav - Live App"
2. Create frames (390x844 each):
   - Discover
   - Search
   - Saved
   - Profile
   - Show Detail
3. Import screenshots into frames
4. Add text with live URL
5. Add annotations for interactive elements

### Step 4: Link Live App in Figma

```
1. Select a frame in Figma
2. Right sidebar → Prototype tab
3. Click "+" to add interaction
4. Add "Open URL" → Your deployed URL
```

Or add as embedded iframe (FigJam):
```
1. Create FigJam board
2. Add iframe widget
3. Paste your deployed URL
4. Interactive prototype in Figma!
```

---

## 🎨 Design Tokens Integration (Next Guide)

See `DESIGN_TOKENS_SYNC.md` for syncing design tokens between code and Figma.

---

## 🔄 Continuous Deployment Workflow

### Recommended Git Workflow

```bash
# 1. Make changes locally
git checkout -b feature/new-filter

# 2. Test locally
npm run dev

# 3. Commit changes
git add .
git commit -m "Add genre filter feature"

# 4. Push to GitHub
git push origin feature/new-filter

# 5. Auto-deploys to preview URL (Vercel/Netlify)

# 6. Merge to main for production deploy
git checkout main
git merge feature/new-filter
git push origin main

# Production auto-deploys!
```

---

## 📈 Monitoring & Analytics (Optional)

### Add Vercel Analytics

```bash
npm install @vercel/analytics
```

```typescript
// In App.tsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  );
}
```

### Add Google Analytics

```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ Deployment Complete Checklist

After deploying:

- [ ] Live URL is accessible
- [ ] All pages load correctly
- [ ] Navigation works (bottom nav, links)
- [ ] Images display properly
- [ ] Responsive on mobile (390x844)
- [ ] No console errors
- [ ] Route refreshes work
- [ ] Performance score 90+ (Lighthouse)
- [ ] Accessibility score 90+ (Lighthouse)
- [ ] Screenshots taken for Figma
- [ ] URL added to Figma file
- [ ] Shared with stakeholders

---

## 🆘 Support Resources

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html
- **React Router Deployment:** https://reactrouter.com/en/main/guides/deployment

---

## 🎉 Next Steps

1. ✅ Deploy your app (choose Vercel for easiest)
2. ✅ Test the live URL
3. ✅ Create Figma reference file
4. ✅ Set up design tokens sync (see `DESIGN_TOKENS_SYNC.md`)
5. ✅ Share with stakeholders
6. ✅ Iterate based on feedback

**Your app is now live and accessible worldwide!** 🚀

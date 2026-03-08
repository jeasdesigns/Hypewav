# Complete GitHub Setup - Step by Step

Follow this guide exactly. I'll walk you through every step.

---

## ✅ What We're Going to Do

1. Create a folder on your computer
2. I'll give you files to copy into it
3. You'll push those files to GitHub
4. Claude Code will clone from GitHub
5. Done!

---

## 📁 Step 1: Create Project Folder

### On Mac:

1. Open **Terminal** (Applications → Utilities → Terminal)
2. Type these commands:

```bash
# Go to your Desktop
cd ~/Desktop

# Create project folder
mkdir hype-wav

# Go into it
cd hype-wav

# You're now in the project folder!
pwd
# Should show: /Users/yourname/Desktop/hype-wav
```

### On Windows:

1. Open **Git Bash** (search for it in Start menu)
2. Type these commands:

```bash
# Go to your Desktop
cd ~/Desktop

# Create project folder
mkdir hype-wav

# Go into it
cd hype-wav

# You're now in the project folder!
pwd
# Should show: C:/Users/yourname/Desktop/hype-wav
```

**✅ You now have a folder called `hype-wav` on your Desktop**

---

## 📂 Step 2: Create Folder Structure

Stay in Terminal/Git Bash and type:

```bash
# Create all the folders we need
mkdir -p src/app/components
mkdir -p src/app/layouts
mkdir -p src/app/pages
mkdir -p src/app/data
mkdir -p src/styles
mkdir -p public

# Verify folders were created
ls -la
```

You should see folders listed.

**✅ Folder structure created**

---

## 📝 Step 3: Create Files

Now I'll give you the content for each file. You'll create them one by one.

### Method A: Using a Text Editor (Easier)

1. Open **VS Code** or **any text editor**
2. Open the `hype-wav` folder
3. Create each file I show you below
4. Copy the code I provide
5. Save the file

### Method B: Using Terminal (Faster for experts)

I'll give you commands to create each file.

---

## 🎯 Step 4: Files to Create

I'll list each file with its content. Create these files in your `hype-wav` folder:

---

### File 1: `.gitignore`

**Location:** `/hype-wav/.gitignore`

**Content:**
```
node_modules/
dist/
.DS_Store
.env
.env.local
*.log
.vite
.vercel
```

**How to create (choose one):**

**VS Code:**
1. Right-click in sidebar → New File
2. Name it `.gitignore`
3. Paste content above
4. Save (Cmd+S or Ctrl+S)

**Terminal:**
```bash
cat > .gitignore << 'EOF'
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

---

### File 2: `package.json`

**Location:** `/hype-wav/package.json`

**Content:**
```json
{
  "name": "hype-wav",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.487.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router": "^7.13.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.12",
    "@vitejs/plugin-react": "^4.7.0",
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.1",
    "tailwindcss": "^4.1.12",
    "typescript": "^5.7.3",
    "vite": "^6.3.5"
  }
}
```

---

### File 3: `tsconfig.json`

**Location:** `/hype-wav/tsconfig.json`

**Content:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["src"]
}
```

---

### File 4: `vite.config.ts`

**Location:** `/hype-wav/vite.config.ts`

**Content:**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

### File 5: `index.html`

**Location:** `/hype-wav/index.html`

**Content:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hype.Wav - Concert Discovery</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

### File 6: `README.md`

**Location:** `/hype-wav/README.md`

**Content:**
```markdown
# Hype.Wav

Concert discovery mobile app for the Greater Seattle music scene.

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
- Lucide React (icons)

## Features

- Feed-first discovery experience
- Genre-based filtering
- Featured show curation (flame icon)
- WCAG AAA accessible design
- Spotify-enriched artist data (mock)

## Design

Mobile-first: 390x844px (iPhone 14 Pro)
Design system documented in DESIGN_SYSTEM.md
```

---

## 🎨 Now Let Me Show You the Code Files

Tell me when you've created the files above (1-6), and I'll show you the actual app code files to create next:

- `src/main.tsx`
- `src/app/App.tsx`
- `src/app/routes.ts`
- `src/styles/theme.css`
- `src/styles/globals.css`
- And all the components and pages

**Type "Ready for code files" when you're done with files 1-6** and I'll continue with the rest!

---

## Quick Checklist

Before moving on, verify you have:

- [ ] Created `hype-wav` folder on Desktop
- [ ] Created folder structure (src/app/components, etc.)
- [ ] Created `.gitignore`
- [ ] Created `package.json`
- [ ] Created `tsconfig.json`
- [ ] Created `vite.config.ts`
- [ ] Created `index.html`
- [ ] Created `README.md`

**All done? Say "Ready for code files"!**

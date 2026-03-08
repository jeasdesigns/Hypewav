# Complete Hype.Wav Code Export

Copy these files into your GitHub repo. Follow the order below.

---

## 📋 Quick Start Checklist

1. [ ] Create `hype-wav` folder
2. [ ] Create folder structure
3. [ ] Copy all files below
4. [ ] Initialize Git
5. [ ] Push to GitHub
6. [ ] Clone in Claude Code

---

## 📂 Folder Structure to Create

```bash
cd ~/Desktop
mkdir hype-wav
cd hype-wav

# Create all folders
mkdir -p src/app/components
mkdir -p src/app/layouts  
mkdir -p src/app/pages
mkdir -p src/app/data
mkdir -p src/styles
mkdir -p public
```

---

## 📝 Configuration Files (Root Level)

### 1. `.gitignore`

Create: `/hype-wav/.gitignore`

```gitignore
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

### 2. `package.json`

Create: `/hype-wav/package.json`

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

### 3. `tsconfig.json`

Create: `/hype-wav/tsconfig.json`

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
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

---

### 4. `vite.config.ts`

Create: `/hype-wav/vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

---

### 5. `index.html`

Create: `/hype-wav/index.html`

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

### 6. `README.md`

Create: `/hype-wav/README.md`

```markdown
# Hype.Wav

Concert discovery mobile app for the Greater Seattle music scene.

## Quick Start

\`\`\`bash
npm install
npm run dev
\`\`\`

Open http://localhost:5173

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- Lucide React (icons)

## Features

- Feed-first discovery (home page)
- Genre-based filtering
- Featured show curation with flame icon
- WCAG AAA accessible design
- Mobile-first: 390x844px

## Structure

- `/src/app/pages` - All page components
- `/src/app/components` - Reusable components
- `/src/app/data` - Mock data
- `/src/styles` - Design system styles
```

---

## 🎨 Styles

### 7. `src/styles/index.css`

Create: `/hype-wav/src/styles/index.css`

```css
@import "./theme.css";
@import "tailwindcss";
```

---

### 8. `src/styles/theme.css`

Create: `/hype-wav/src/styles/theme.css`

```css
@theme {
  /* Colors - WCAG AAA Compliant */
  --color-purple-50: #F5F3FF;
  --color-purple-100: #EDE9FE;
  --color-purple-200: #DDD6FE;
  --color-purple-500: #8B5CF6;
  --color-purple-900: #4C1D95;
  
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;
  
  --color-orange-500: #F97316;
  --color-red-500: #EF4444;
  --color-green-500: #10B981;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  
  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--color-gray-950);
  color: white;
}
```

---

## ⚛️ React App Files

### 9. `src/main.tsx`

Create: `/hype-wav/src/main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

### 10. `src/app/App.tsx`

Create: `/hype-wav/src/app/App.tsx`

```tsx
import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
```

---

### 11. `src/app/routes.ts`

Create: `/hype-wav/src/app/routes.ts`

```typescript
import { createBrowserRouter } from "react-router";
import { DiscoverPage } from "./pages/DiscoverPage";
import { ShowDetailPage } from "./pages/ShowDetailPage";
import { ArtistProfilePage } from "./pages/ArtistProfilePage";
import { SavedPage } from "./pages/SavedPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SearchPage } from "./pages/SearchPage";
import { MobileAppLayout } from "./layouts/MobileAppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MobileAppLayout,
    children: [
      {
        index: true,
        Component: DiscoverPage,
      },
      {
        path: "show/:id",
        Component: ShowDetailPage,
      },
      {
        path: "artist/:id",
        Component: ArtistProfilePage,
      },
      {
        path: "search",
        Component: SearchPage,
      },
      {
        path: "saved",
        Component: SavedPage,
      },
      {
        path: "profile",
        Component: ProfilePage,
      },
    ],
  },
]);
```

---

## 🔧 Layouts

### 12. `src/app/layouts/MobileAppLayout.tsx`

Create: `/hype-wav/src/app/layouts/MobileAppLayout.tsx`

```tsx
import { Outlet } from 'react-router';
import { MobileFrame } from '../components/MobileFrame';

export function MobileAppLayout() {
  return (
    <MobileFrame>
      <Outlet />
    </MobileFrame>
  );
}
```

---

## 📊 Mock Data

### 13. `src/app/data/mockData.ts`

Create: `/hype-wav/src/app/data/mockData.ts`

**[NEXT MESSAGE - This file is large, I'll show it separately]**

---

## When You're Ready...

**Say "Show me mockData.ts" and I'll continue with the data file and all the components/pages!**

This is the foundation. Once you have these files created, tell me and I'll give you the rest (mockData, components, pages).

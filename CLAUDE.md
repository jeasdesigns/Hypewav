# Hype.Wav — Project Context for Claude Code

## What this project is
Hype.Wav is a music discovery and events web app (React + Vite + TypeScript). It surfaces upcoming shows, genres, and featured artists for users who want to find live music.

## Tech stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- React Router v7
- Recharts, Embla Carousel, Radix UI, MUI, shadcn-style components
- Motion (Framer Motion successor) for animations

## Deployment
- Hosted on **Cloudflare Pages** via native GitHub integration — no GitHub Actions or wrangler.toml
- Push to `main` branch → Cloudflare automatically builds and deploys
- Build command: `npm run build` (runs `vite build`)
- Output directory: `dist`
- Environment variables and build settings are managed in the Cloudflare Pages dashboard

## Key conventions
- Components live in `src/app/components/`
- Page-level context (e.g. shows data) is in `src/app/context/`
- Genres are consolidated into broad categories (not fine-grained)
- Use existing Radix/MUI/shadcn components before introducing new UI libraries

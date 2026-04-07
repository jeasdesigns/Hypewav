---
name: Read existing code before writing new code
description: Always read the existing codebase (tokens, components, styles) before scaffolding or writing any new code in this project
type: feedback
---

Always read the existing source files before writing any CSS, tokens, or components — even when scaffolding something "new."

**Why:** When building the Next.js app, design tokens were initialized from scratch with made-up values instead of reading `src/styles/theme.css`, which already had the full production design system defined. This produced wrong colors throughout the entire app and placeholder pages with no real structure.

**How to apply:** Before writing any styles, tokens, or UI components for this project:
1. Read `src/styles/theme.css` for the canonical design token values
2. Read `src/app/components/` for existing component patterns to port or reference
3. Read the PRD (`hypewav-prd.md`) for design system spec and acceptance criteria

The authoritative token values are:
- Violet: `#A78BFA`
- Cyan: `#67E8F9`
- BG primary: `#09090F`
- BG card: `#13121E`
- BG elevated: `#1A1927`
- Text primary: `#F1F0FB`
- Text secondary: `#9CA3AF`
- Border: `#1E1D2A`

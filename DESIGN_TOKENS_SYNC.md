# Design Tokens Sync Guide - Code ↔ Figma

Complete guide to syncing design tokens between your code and Figma for a single source of truth.

---

## 🎯 What Are Design Tokens?

Design tokens are the design decisions (colors, spacing, typography) stored as data that both code and design tools can use.

**Example:**
```json
{
  "color": {
    "purple": {
      "500": "#8B5CF6"
    }
  },
  "spacing": {
    "md": "16px"
  }
}
```

**Benefits:**
- ✅ Single source of truth
- ✅ Automatic sync between code and Figma
- ✅ No manual updates needed
- ✅ Consistency guaranteed

---

## 📋 Setup Overview

```
1. Extract tokens from code → JSON
2. Import JSON to Figma (Tokens Studio plugin)
3. Designers update in Figma → Export JSON
4. Developers import JSON → Update code
```

---

## 🚀 Method 1: Tokens Studio for Figma (Recommended)

**Best for:** Complete design system sync, professional teams

### Step 1: Install Tokens Studio Plugin

1. Open Figma
2. Go to Plugins → Browse plugins
3. Search "Tokens Studio for Figma"
4. Install the plugin

[Tokens Studio Plugin](https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma)

### Step 2: Create Design Tokens JSON

Create `/design-tokens.json` in your project:

```json
{
  "color": {
    "purple": {
      "50": {
        "value": "#F5F3FF",
        "type": "color",
        "description": "Purple 50 - Lightest purple for backgrounds"
      },
      "100": {
        "value": "#EDE9FE",
        "type": "color"
      },
      "200": {
        "value": "#DDD6FE",
        "type": "color"
      },
      "500": {
        "value": "#8B5CF6",
        "type": "color",
        "description": "Purple 500 - Primary purple"
      },
      "900": {
        "value": "#4C1D95",
        "type": "color",
        "description": "Purple 900 - Darkest purple"
      }
    },
    "gray": {
      "50": {
        "value": "#F9FAFB",
        "type": "color"
      },
      "100": {
        "value": "#F3F4F6",
        "type": "color"
      },
      "800": {
        "value": "#1F2937",
        "type": "color"
      },
      "900": {
        "value": "#111827",
        "type": "color"
      },
      "950": {
        "value": "#030712",
        "type": "color"
      }
    },
    "orange": {
      "500": {
        "value": "#F97316",
        "type": "color"
      }
    },
    "red": {
      "500": {
        "value": "#EF4444",
        "type": "color"
      }
    },
    "green": {
      "500": {
        "value": "#10B981",
        "type": "color"
      }
    }
  },
  "spacing": {
    "xs": {
      "value": "4px",
      "type": "spacing"
    },
    "sm": {
      "value": "8px",
      "type": "spacing"
    },
    "md": {
      "value": "16px",
      "type": "spacing"
    },
    "lg": {
      "value": "24px",
      "type": "spacing"
    },
    "xl": {
      "value": "32px",
      "type": "spacing"
    }
  },
  "borderRadius": {
    "sm": {
      "value": "8px",
      "type": "borderRadius"
    },
    "md": {
      "value": "12px",
      "type": "borderRadius"
    },
    "lg": {
      "value": "16px",
      "type": "borderRadius"
    },
    "full": {
      "value": "9999px",
      "type": "borderRadius"
    }
  },
  "fontSize": {
    "xs": {
      "value": "12px",
      "type": "fontSizes"
    },
    "sm": {
      "value": "14px",
      "type": "fontSizes"
    },
    "base": {
      "value": "16px",
      "type": "fontSizes"
    },
    "lg": {
      "value": "18px",
      "type": "fontSizes"
    },
    "xl": {
      "value": "20px",
      "type": "fontSizes"
    },
    "2xl": {
      "value": "24px",
      "type": "fontSizes"
    }
  },
  "fontWeight": {
    "regular": {
      "value": "400",
      "type": "fontWeights"
    },
    "medium": {
      "value": "500",
      "type": "fontWeights"
    },
    "semibold": {
      "value": "600",
      "type": "fontWeights"
    },
    "bold": {
      "value": "700",
      "type": "fontWeights"
    }
  }
}
```

### Step 3: Import Tokens to Figma

1. Open Figma
2. Run Tokens Studio plugin (Plugins → Tokens Studio)
3. Click "Settings" (gear icon)
4. Click "Import"
5. Select your `design-tokens.json` file
6. Click "Import"

**Your tokens are now in Figma!**

### Step 4: Apply Tokens in Figma

1. Select any element in Figma
2. Open Tokens Studio plugin
3. Click on a color/spacing token
4. It applies to the selected element

**Example:**
- Select a button background → Click `color.purple.500`
- Select padding → Click `spacing.md`

### Step 5: Export from Figma to Code

When designers update tokens:

1. Open Tokens Studio plugin
2. Click "Export"
3. Save as `design-tokens.json`
4. Send to developers

Developers then update the code theme.

---

## 🔄 Method 2: Style Dictionary (Code-First)

**Best for:** Developer-led design systems, automation

### Step 1: Install Style Dictionary

```bash
npm install --save-dev style-dictionary
```

### Step 2: Create Token Source

Create `/tokens/colors.json`:

```json
{
  "color": {
    "purple": {
      "50": { "value": "#F5F3FF" },
      "500": { "value": "#8B5CF6" },
      "900": { "value": "#4C1D95" }
    }
  }
}
```

Create `/tokens/spacing.json`:

```json
{
  "spacing": {
    "xs": { "value": "4" },
    "sm": { "value": "8" },
    "md": { "value": "16" },
    "lg": { "value": "24" }
  }
}
```

### Step 3: Configure Style Dictionary

Create `/style-dictionary.config.js`:

```javascript
module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables'
        }
      ]
    },
    figma: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens-figma.json',
          format: 'json/flat'
        }
      ]
    }
  }
};
```

### Step 4: Build Tokens

Add to `package.json`:

```json
{
  "scripts": {
    "tokens:build": "style-dictionary build"
  }
}
```

Run:

```bash
npm run tokens:build
```

This generates:
- `src/styles/tokens.css` (for your app)
- `dist/tokens-figma.json` (for Figma)

### Step 5: Import to Figma

1. Use Tokens Studio plugin
2. Import `dist/tokens-figma.json`
3. Tokens appear in Figma

---

## 📊 Method 3: Simple Manual Sync (Quick Start)

**Best for:** Small projects, getting started quickly

### Step 1: Extract Current Tokens

Create `/figma-tokens.json`:

```json
{
  "hype-wav-colors": {
    "purple-50": "#F5F3FF",
    "purple-100": "#EDE9FE",
    "purple-500": "#8B5CF6",
    "purple-900": "#4C1D95",
    "gray-50": "#F9FAFB",
    "gray-800": "#1F2937",
    "gray-900": "#111827",
    "gray-950": "#030712",
    "orange-500": "#F97316",
    "red-500": "#EF4444"
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px"
  },
  "border-radius": {
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "full": "9999px"
  }
}
```

### Step 2: Create Color Styles in Figma

1. Open Figma
2. Select any shape
3. Fill → Click "+" next to "Color styles"
4. Create style: "Purple/500" → #8B5CF6
5. Repeat for all colors

### Step 3: Create Spacing Variables

1. Go to Local variables (right sidebar)
2. Create collection: "Spacing"
3. Add variables:
   - spacing-xs → 4
   - spacing-sm → 8
   - spacing-md → 16
   - spacing-lg → 24

### Step 4: Update Manually

When changing colors:
1. Update in code (`theme.css`)
2. Update in `figma-tokens.json`
3. Update color styles in Figma

---

## 🔧 Full Hype.Wav Token Setup

### Complete design-tokens.json for Hype.Wav:

```json
{
  "$schema": "https://schemas.tokens.studio/$metadata.json",
  "color": {
    "purple": {
      "50": { "value": "#F5F3FF", "type": "color" },
      "100": { "value": "#EDE9FE", "type": "color" },
      "200": { "value": "#DDD6FE", "type": "color" },
      "500": { "value": "#8B5CF6", "type": "color" },
      "900": { "value": "#4C1D95", "type": "color" }
    },
    "gray": {
      "50": { "value": "#F9FAFB", "type": "color" },
      "100": { "value": "#F3F4F6", "type": "color" },
      "800": { "value": "#1F2937", "type": "color" },
      "900": { "value": "#111827", "type": "color" },
      "950": { "value": "#030712", "type": "color" }
    },
    "orange": {
      "500": { "value": "#F97316", "type": "color" }
    },
    "red": {
      "500": { "value": "#EF4444", "type": "color" }
    },
    "green": {
      "500": { "value": "#10B981", "type": "color" }
    },
    "background": {
      "primary": { "value": "{color.gray.950}", "type": "color" },
      "secondary": { "value": "{color.gray.900}", "type": "color" },
      "tertiary": { "value": "{color.gray.800}", "type": "color" }
    },
    "text": {
      "primary": { "value": "#FFFFFF", "type": "color" },
      "secondary": { "value": "{color.gray.100}", "type": "color" },
      "tertiary": { "value": "{color.gray.50}", "type": "color" }
    },
    "brand": {
      "primary": { "value": "{color.purple.500}", "type": "color" },
      "gradient-start": { "value": "{color.red.500}", "type": "color" },
      "gradient-end": { "value": "{color.orange.500}", "type": "color" }
    }
  },
  "spacing": {
    "xs": { "value": "4", "type": "spacing" },
    "sm": { "value": "8", "type": "spacing" },
    "md": { "value": "16", "type": "spacing" },
    "lg": { "value": "24", "type": "spacing" },
    "xl": { "value": "32", "type": "spacing" }
  },
  "borderRadius": {
    "sm": { "value": "8", "type": "borderRadius" },
    "md": { "value": "12", "type": "borderRadius" },
    "lg": { "value": "16", "type": "borderRadius" },
    "full": { "value": "9999", "type": "borderRadius" }
  },
  "fontSize": {
    "xs": { "value": "12", "type": "fontSizes" },
    "sm": { "value": "14", "type": "fontSizes" },
    "base": { "value": "16", "type": "fontSizes" },
    "lg": { "value": "18", "type": "fontSizes" },
    "xl": { "value": "20", "type": "fontSizes" },
    "2xl": { "value": "24", "type": "fontSizes" }
  },
  "fontWeight": {
    "regular": { "value": "400", "type": "fontWeights" },
    "medium": { "value": "500", "type": "fontWeights" },
    "semibold": { "value": "600", "type": "fontWeights" },
    "bold": { "value": "700", "type": "fontWeights" }
  },
  "shadow": {
    "sm": {
      "value": {
        "x": "0",
        "y": "1",
        "blur": "2",
        "spread": "0",
        "color": "rgba(0, 0, 0, 0.05)",
        "type": "dropShadow"
      },
      "type": "boxShadow"
    },
    "md": {
      "value": {
        "x": "0",
        "y": "4",
        "blur": "6",
        "spread": "-1",
        "color": "rgba(0, 0, 0, 0.1)",
        "type": "dropShadow"
      },
      "type": "boxShadow"
    }
  }
}
```

---

## 🎨 Using Tokens in Figma

### After Importing with Tokens Studio:

1. **Apply Color Token:**
   - Select element
   - Open Tokens Studio
   - Click `color.purple.500`
   - Background updates automatically

2. **Apply Spacing Token:**
   - Select frame
   - Open Tokens Studio
   - Click `spacing.md` for padding
   - Padding sets to 16px

3. **Apply Text Token:**
   - Select text
   - Click `fontSize.xl`
   - Font size updates to 20px

### Benefits:
- Change `color.purple.500` once → All buttons update
- Change `spacing.md` once → All cards update
- Single source of truth!

---

## 💻 Using Tokens in Code

### Method 1: CSS Variables (Already in theme.css)

```css
/* src/styles/theme.css */
:root {
  --color-purple-50: #F5F3FF;
  --color-purple-500: #8B5CF6;
  --spacing-md: 16px;
  --border-radius-md: 12px;
}
```

Use in components:

```tsx
<div style={{ 
  padding: 'var(--spacing-md)',
  borderRadius: 'var(--border-radius-md)',
  backgroundColor: 'var(--color-purple-500)'
}}>
  Content
</div>
```

### Method 2: Tailwind Config (Tailwind v4)

```css
/* src/styles/theme.css */
@theme {
  --color-purple-50: #F5F3FF;
  --color-purple-500: #8B5CF6;
  --spacing-md: 16px;
}
```

Use as Tailwind classes:

```tsx
<div className="p-[--spacing-md] bg-[--color-purple-500] rounded-[--border-radius-md]">
  Content
</div>
```

---

## 🔄 Sync Workflow

### Designer-Led Updates:

```
1. Designer updates token in Figma (Tokens Studio)
2. Designer exports JSON
3. Developer imports JSON to code
4. Developer runs build
5. Tokens sync automatically
```

### Developer-Led Updates:

```
1. Developer updates tokens/colors.json
2. Run: npm run tokens:build
3. Generates tokens-figma.json
4. Designer imports to Figma
5. Tokens sync automatically
```

### Bi-Directional Sync (Advanced):

Use GitHub as source of truth:

```
1. Store tokens in GitHub repo
2. Figma Tokens Studio → Sync with GitHub
3. Code reads from same GitHub repo
4. Both always in sync!
```

**Setup:**
1. Create GitHub repo for tokens
2. In Tokens Studio: Settings → Sync → GitHub
3. Authenticate and select repo
4. Push/pull tokens from Figma
5. Code reads same repo

---

## 🚀 Quick Start Recommendation

For Hype.Wav, start simple:

### Option A: Manual Sync (Day 1)

1. ✅ Copy the `design-tokens.json` above
2. ✅ Import to Figma with Tokens Studio
3. ✅ Use tokens in Figma designs
4. ✅ Reference when coding

### Option B: Code-First (Week 1)

1. ✅ Install Style Dictionary
2. ✅ Export tokens to JSON
3. ✅ Import to Figma
4. ✅ Automatic sync

### Option C: Figma-First (If designers lead)

1. ✅ Create color styles in Figma
2. ✅ Use Tokens Studio plugin
3. ✅ Export to JSON
4. ✅ Import to code

---

## 📚 Resources

- **Tokens Studio:** https://tokens.studio
- **Style Dictionary:** https://amzn.github.io/style-dictionary
- **Design Tokens Spec:** https://design-tokens.github.io/community-group/format/
- **Figma Variables:** https://help.figma.com/hc/en-us/articles/15339657135383

---

## ✅ Tokens Sync Checklist

- [ ] Created design-tokens.json
- [ ] Installed Tokens Studio plugin in Figma
- [ ] Imported tokens to Figma
- [ ] Applied tokens to Figma designs
- [ ] Tested exporting from Figma
- [ ] Documented sync workflow for team
- [ ] Set up GitHub sync (optional)
- [ ] Automated token builds (optional)

---

## 🎯 Next Steps

1. Choose sync method (Tokens Studio recommended)
2. Create design-tokens.json from your current design
3. Import to Figma
4. Share with your team
5. Document the workflow

**Your design system is now synced between code and Figma!** 🎨↔️💻

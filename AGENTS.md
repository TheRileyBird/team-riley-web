# Agent Instructions

This project uses **bd** (beads) for issue tracking. Run `bd onboard` to get started.

## Quick Reference

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd update <id> --status in_progress  # Claim work
bd close <id>         # Complete work
bd sync               # Sync with git
```

## Landing the Plane (Session Completion)

**When ending a work session**, you MUST complete ALL steps below. Work is NOT complete until `git push` succeeds.

**MANDATORY WORKFLOW:**

1. **File issues for remaining work** - Create issues for anything that needs follow-up
2. **Run quality gates** (if code changed) - Review all changes 5 times as a senior developer, graphic designer, and copy writer. Tests, linters, builds
3. **Update issue status** - Close finished work, update in-progress items
4. **PUSH TO REMOTE** - This is MANDATORY:
   ```bash
   git pull --rebase
   bd sync
   git push
   git status  # MUST show "up to date with origin"
   ```
5. **Clean up** - Clear stashes, prune remote branches
6. **Verify** - All changes committed AND pushed
7. **Hand off** - Provide context for next session

**CRITICAL RULES:**
- Work is NOT complete until `git push` succeeds
- NEVER stop before pushing - that leaves work stranded locally
- NEVER say "ready to push when you are" - YOU must push
- If push fails, resolve and retry until it succeeds

# Astro Development Standards

This document outlines coding standards and best practices for this Astro project.

## Image Optimization (MANDATORY)

**ALL images must use Astro's built-in `<Image />` component for optimization.**

### Requirements

1. **Store images in `src/assets/images/`** (NOT `public/images/`)
2. **Import images as modules** in component frontmatter
3. **Use `<Image />` component** from `'astro:assets'`
4. **Never use string paths** like `src="/images/..."`

### Pattern

```astro
---
import { Image } from 'astro:assets';
import myImage from '../assets/images/my-image.png';
---

<Image src={myImage} alt="Description" class="..." />
```

### Why This Matters

- **Automatic format conversion** to WebP (modern, efficient format)
- **Size optimization** (30-97% file size reductions achieved on this project)
- **Responsive image generation** (multiple sizes for different devices)
- **Prevents Cumulative Layout Shift (CLS)** (better user experience)
- **Lazy loading by default** (faster initial page load)
- **Better SEO and performance scores**

### Examples from This Project

Real optimization results:
- `rachael-riley-3.png`: 10.5MB → 352kB (97% reduction!)
- `family-2.jpg`: 232kB → 200kB (14% reduction)
- `dom-luke-coaching.jpg`: 412kB → 161kB (61% reduction)

### When NOT to Use Image Component

- **External URLs**: These can use the `<Image />` component but won't be optimized
- **SVG files used as components**: Import these as Astro components instead
- **Background images in CSS**: Use the `<Image />` component and apply the generated URL

### Reference

- [Astro Image Documentation](https://docs.astro.build/en/guides/images/)
- Site-wide conversion completed: 2026-03-13

---

## SEO & Sitemaps

**Use Astro's official sitemap integration for XML sitemaps.**

### Current Setup

- **Sitemap Integration**: `@astrojs/sitemap` configured in `astro.config.mjs`
- **Site URL**: `https://teamriley.com` (required for sitemap generation)
- **Robots.txt**: Dynamically generated via `src/pages/robots.txt.ts`
- **HTML Sitemap**: `/sitemap` page for human visitors

### What Gets Generated

During build, Astro automatically creates:
- `sitemap-index.xml` - Main sitemap index
- `sitemap-0.xml` - List of all pages
- `robots.txt` - Points search engines to sitemap

### Sitemap Discovery

The `<link rel="sitemap">` tag in `BaseLayout.astro` helps search engines find the sitemap.

### Reference

- [Astro Sitemap Documentation](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- Configured: 2026-03-13

---

## Tech Stack

This project uses the following technologies:

- **Framework**: Astro v5.18+
- **Styling**: Tailwind CSS v3.4+
- **Interactivity**: Alpine.js v3.15+
- **Icons**: Lucide Astro v0.577+
- **TypeScript**: Strict mode (extends `astro/tsconfigs/strict`)
- **Booking**: Cal.com integration

---

## Project Structure

```
src/
├── assets/
│   └── images/          # Image assets (imported as modules)
├── components/          # Reusable Astro components
├── layouts/            # Layout templates (e.g., BaseLayout.astro)
├── pages/              # File-based routing
└── styles/
    └── global.css      # Global styles and component classes
```

**Naming Conventions**:
- **Component files**: PascalCase (e.g., `ServiceColumnSection.astro`)
- **TypeScript**: camelCase for variables/functions
- **CSS classes**: kebab-case (e.g., `btn-primary`)
- **Page files**: lowercase with hyphens (e.g., `privacy-policy.astro`)

---

## Component Standards

### TypeScript Props Interface

All components should define a TypeScript interface for props:

```astro
---
interface Props {
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
}

const { title, description = "Default value", theme = 'light' } = Astro.props;
---
```

### Icon Usage

Use Lucide icons from `@lucide/astro`:

```astro
---
import { CheckCircle2, ArrowRight, Menu } from '@lucide/astro';
---

<CheckCircle2 class="w-6 h-6 text-primary-600" />
```

### Alpine.js Interactivity

Use Alpine.js for interactive features (modals, toggles, menus):

```astro
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open" x-cloak>Content</div>
</div>
```

**IMPORTANT**: Always include `x-cloak` attribute and corresponding CSS to prevent flash of unstyled content:

```css
[x-cloak] {
  display: none !important;
}
```

---

## Styling Standards

### Tailwind Configuration

**Custom Color Palette**:
- **Primary**: Blue shades (50-950) - main brand color
- **Accent**: Cyan/teal shades (300-600) - secondary accent
- **Secondary**: Purple shades (300-700) - tertiary accent
- **Gray**: Slate shades (50-900) - neutral colors

**Typography**:
- Font family: Poppins (loaded from Google Fonts)
- Use `font-sans` for body text (already set in BaseLayout)

**Custom Shadows**:
- `shadow-soft`: Subtle shadow for cards
- `shadow-medium`: Medium elevation
- `shadow-large`: High elevation

### Reusable CSS Classes

Use global CSS classes from `src/styles/global.css`:

**Buttons**:
- `.btn`: Base button styles
- `.btn-primary`: Primary action button (blue gradient)
- `.btn-secondary`: Secondary button (white with border)
- `.btn-outline`: Outline button (transparent)
- Size variants: `.btn-sm`, `.btn-lg`, `.btn-xl`

**Text Effects**:
- `.animated-gradient-text`: Animated gradient text for brand highlights
- `.animated-gradient-bg`: Animated gradient background

**Animations**:
- `.shimmer-overlay`: Subtle shimmer effect for cards
- `.shimmer-overlay-gold`: Gold shimmer for featured items
- `.animate-float-slow`: Floating animation
- `.hero-gradient-overlay`: Gradient overlay for hero images

**Examples**:

```astro
<!-- Primary button with shine effect -->
<button class="btn btn-primary">
  Get Started
  <ArrowRight class="w-4 h-4" />
</button>

<!-- Animated gradient text -->
<h1>
  Team Riley <span class="animated-gradient-text">Platform</span>
</h1>
```

---

## Branding Guidelines

### Company Information

- **Company Name**: Team Riley
- **Platform Name**: Client Growth AI (rebranded from "Patient Flow AI" on 2026-03-13)
- **Website**: https://teamriley.com
- **Contact Email**: Use `@teamrileyweb.com` domain

### Brand Colors

- **Primary**: Blue gradient (#1e40af to #0891b2 to #8b5cf6)
- Use `.animated-gradient-text` for brand highlights
- Logo: Blue gradient with medical cross icon

### Voice & Tone

- Professional but approachable
- Healthcare-focused marketing context
- Emphasize digital health and business growth

---

## Cal.com Integration

All "Get Started" and booking CTAs use Cal.com:

```astro
<button
  data-cal-link="joshua-riley/intro-call"
  data-cal-namespace="intro-call"
  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
  class="btn btn-primary">
  Get Started
</button>
```

The Cal.com script is loaded in `BaseLayout.astro` and configured with brand colors.

---

## Build & Development

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (clears .astro cache first)
- `npm run preview` - Preview production build

### Build Process

The build script includes cache clearing:
```json
"build": "rm -rf .astro && astro build"
```

This ensures clean builds without stale cache issues.

---

## Additional Standards

(To be added as the project evolves)

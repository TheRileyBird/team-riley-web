# Agent Instructions

## Coding Tasks with gstack

This project uses **gstack** for AI-assisted planning, review, QA, and shipping workflows.

### Quick Reference

- `/office-hours` - clarify product/business direction before planning
- `/autoplan` - run CEO, design, engineering, and DX plan reviews
- `/review` - senior code review for behavioral regressions and production risks
- `/qa` - browser QA that tests and fixes issues
- `/qa-only` - browser QA report without code changes
- `/design-review` - visual/design QA and fixes
- `/ship` - release workflow for tests, review, commit, push, and PR
- `/land-and-deploy` - merge, deploy, and verify production
- `/cso` - security audit
- `/investigate` - root-cause debugging workflow
- `/gstack-upgrade` - update gstack

### Dispatch Guidance

- Simple one-file edits can be handled directly.
- Multi-file features should use gstack planning or review when scope, UX, architecture, or regressions are non-trivial.
- If a user explicitly names a gstack skill, use that skill for the turn.
- Use `/browse`, `/qa`, or `/qa-only` for web UI verification where visual behavior matters.
- Use `/ship` when the user asks to ship, push, or prepare a PR.

### Landing the Plane

When ending a work session:

1. Record any follow-up work in the appropriate project planning surface or handoff notes.
2. Run quality gates when code changed: build, tests, linters, and focused manual verification as appropriate.
3. Commit finished source changes.
4. Pull/rebase, push to remote, and verify the branch is up to date unless the user explicitly stops the release flow.
5. Leave unrelated user changes untouched.
6. Provide a concise handoff with what changed, what was verified, and any remaining risk.

## Task Queue (TASKS.md) vs Parked Work (TODOS.md)

Two files, two different jobs. Do not confuse them:

- **`TASKS.md` is the queue.** Work gets pulled from here and executed, oldest
  unchecked item first. Only put something here when you want it done.
- **`TODOS.md` is the parked-work ledger.** Known work that was deliberately
  deferred, with the reasoning and the file/line references needed to pick it up
  cold. **Read it for context; never pull work from it.** Moving an item into
  `TASKS.md` is the deliberate act that schedules it.

Putting deferred work in `TASKS.md` un-defers it, because the rule below is to work
the oldest unchecked item.

This project uses `TASKS.md` as a running task queue that the user adds to at any time.

- After completing each task, re-read `TASKS.md` before choosing the next task.
- Never modify or remove an unchecked task unless you are beginning that task.
- Work on only one task at a time.
- When the user gives a new task, add it to the bottom of the task list in `TASKS.md`.
- Do not abandon or interrupt the current task unless the user explicitly says "interrupt".
- Finish, test, and verify the current task before starting the next.
- Before starting another task, review `TASKS.md` and select the oldest pending (unchecked) task.
- Tell the user briefly when a task is complete and which task you are starting next.
- Do not combine unrelated tasks into one implementation.

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
- **Site URL**: `https://teamrileyweb.com` (required for sitemap generation)
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
- **Booking**: Team Riley Web booking widget

---

## Model Context Protocols (MCPs)

This project has the following MCPs configured for enhanced AI capabilities:

### Claude Memory (`claude-mem`)

**Purpose**: Persistent cross-session memory database for tracking solutions, patterns, and decisions.

**Key Features**:
- 3-layer workflow: `search()` → `timeline()` → `get_observations()`
- Semantic search across project history
- Automatic observation logging of important decisions

**Usage**:
```bash
# Search for past solutions
claude-mem search "how did we handle authentication"

# Save important decisions
claude-mem save "Decided to use Tailwind's custom color palette for brand consistency"
```

**Best Practices**:
- Search before implementing to avoid duplicating solved problems
- Save architectural decisions and patterns
- Use for context recovery after conversation compaction

### Netlify MCP (`netlify`)

**Purpose**: Deployment and hosting management for the Team Riley website.

**Key Features**:
- Deploy site directly from CLI
- Manage environment variables
- Configure visitor access controls
- Manage forms and submissions
- Handle extensions and integrations

**Usage**:
```bash
# Deploy the site
netlify deploy --dir=dist --prod

# Manage environment variables
netlify env:set KEY=value

# Check deploy status
netlify deploy:list
```

**Important Rules**:
- ALWAYS call `netlify-coding-rules` before writing serverless functions
- Never assume new site creation - use `netlify link` to connect to existing site
- Deploy directory must be absolute path (default: repo root)

### Astro Docs (`astro-docs`)

**Purpose**: Search official Astro framework documentation for guidance.

**Key Features**:
- Fast semantic search of Astro docs
- Up-to-date framework guidance
- Integration and API references

**Usage**:
```bash
# Search for specific features
astro-docs search "image optimization"
astro-docs search "content collections"
```

**Best Practices**:
- Search docs before implementing Astro features
- Verify syntax and best practices
- Check for framework updates and new features

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
- **Website**: https://teamrileyweb.com
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

## Booking Integration

All "Get Started" and booking CTAs use semantic links that open the shared booking modal:

```astro
<a
  href="/#book-a-call"
  data-booking-modal-open
  class="btn btn-primary">
  Get Started
</a>
```

The site-owned responsive modal is rendered by `BookingModal.astro`. The booking iframe and resize script are encapsulated in `BookingWidget.astro`.

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

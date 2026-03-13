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
2. **Run quality gates** (if code changed) - Tests, linters, builds
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

## Additional Standards

(To be added as the project evolves)

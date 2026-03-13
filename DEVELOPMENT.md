# Development Standards

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

## Additional Standards

(To be added as the project evolves)

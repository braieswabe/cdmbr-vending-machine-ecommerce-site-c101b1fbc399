# Dudex Projects Template

Baseline Next.js template used by OpenClaw deterministic executions.

## Purpose

This repository is the source template for GitHub `generate` calls configured in OpenClaw.
Generated projects are created from this repo and then updated with execution-specific code
by the AI builder pipeline.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript 5**
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **clsx** + **tailwind-merge** for the `cn()` utility (`src/lib/utils.ts`)
- **lucide-react** for icons, **framer-motion** for animations
- **class-variance-authority** for component variant styling
- **ESLint 9** flat config with `next/core-web-vitals` + `next/typescript`

## Project Structure

```
src/
  app/
    globals.css       # Tailwind v4 import + CSS color variables
    layout.tsx        # Root layout with Inter font
    page.tsx          # Placeholder landing page
  components/
    types.ts          # Shared prop type definitions (SocialProofItem, GalleryItem, etc.)
  lib/
    utils.ts          # cn() utility (clsx + tailwind-merge)
```

## Key Design Decisions

- **`src/` layout**: The AI builder generates code under `src/app/` and `src/components/`.
  The template uses the same structure so `@/*` path aliases resolve correctly.
- **CSS variables**: `globals.css` defines `--color-primary`, `--color-secondary`, and
  `--color-accent` with blue/purple/amber defaults. The builder overrides these per project.
- **Shared types**: `src/components/types.ts` exports reusable prop types
  (`SocialProofItem`, `LogoItem`, `GalleryItem`, `ComparisonColumn`, etc.) so generated
  pages and components stay type-safe.
- **Image CDNs**: `next.config.ts` allows common image CDN hostnames (Unsplash, Pexels,
  Pixabay, Cloudinary, etc.) in `images.remotePatterns` so `next/image` works with
  external URLs out of the box.
- **`cn()` utility**: Always available at `@/lib/utils` for conditional class merging.

## Local Development

```bash
npm install
npm run dev
```

## Build Check

```bash
npm run build
```

## Notes

- OpenClaw overwrites most files during deterministic execution commits.
- Template deps are merged into generated `package.json` via `_ensure_scaffold_integrity`.
- The ESLint config uses the flat config format required by ESLint 9+.

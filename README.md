# Ammar Asmro Website

This repo now uses Astro instead of Hugo.

## Why this setup

- Astro is much easier to maintain for a personal site.
- The content lives in one place: `src/data/site.ts`.
- GitHub Pages deployment is handled by GitHub Actions.
- The custom domain is preserved through `public/CNAME`.

## Edit the site

Update these files most often:

- `src/data/site.ts` for your bio, links, experience highlights, and projects
- `src/pages/index.astro` if you want to change the homepage structure
- `src/layouts/MainLayout.astro` for shared styling and navigation

## Local development

Astro 6 requires Node `22.12.0` or newer. This repo includes an `.nvmrc` file so you can switch versions with `nvm`.

```bash
nvm install 22.12.0
nvm use
npm install
npm run dev
```

## Deploy

Push to `main` or `master`, then make sure GitHub Pages is set to deploy from GitHub Actions.

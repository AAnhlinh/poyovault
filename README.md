# HackUTD 2026

A cross-platform personal finance app built with Expo and Expo Router — the same codebase runs on iOS, Android and the web.

**Live website:** https://aanhlinh.github.io/HackUTD2026/

## What's in the app

- **Home** (`src/app/index.tsx`) — a personal finance dashboard: financial health score, monthly income, spending, total debt, savings, monthly cash flow and a personalised insight.
- **Explore** (`src/app/explore.tsx`) — background on how the starter project is put together.

## Run it locally

```bash
npm install
npx expo start
```

Then press `w` for the web version, or scan the QR code with Expo Go.

## How the website is published

Every push to `main` runs `.github/workflows/deploy-pages.yml`, which exports the static web build with `npx expo export --platform web` and publishes the `dist` folder to GitHub Pages.

The site is served from a sub-path, so `experiments.baseUrl` in `app.json` is set to `/HackUTD2026`. The local dev server serves the app under that same path.

## Other commands

```bash
npx expo lint     # lint
npx tsc --noEmit  # typecheck
```

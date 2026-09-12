# Grethiel Joy Portfolio

Grethiel Joy's portfolio, built with React, Vinext, and Cloudflare Workers.

## Requirements

- Node.js 22.13 or newer
- A Cloudflare account
- Wrangler authenticated with your Cloudflare account

## Local development

```bash
npm install
npm run dev
```

The local site is available at `http://localhost:3000`.

## Build

```bash
npm run build
```

Vinext writes the browser assets to `dist/client` and the Cloudflare Worker to
`dist/server`.

## Optimize images

After replacing a portrait, logo, section background, or project thumbnail,
regenerate the responsive WebP assets before building:

```bash
npm run images:optimize
```

The original files remain the editable sources. Pages use the generated files
in `public/optimized` and the 400-pixel thumbnails in
`public/projects/thumbnails/mobile`.

## Deploy to your Cloudflare account

Authenticate Wrangler once:

```bash
npx wrangler login
```

Then build and deploy:

```bash
npm run deploy
```

The deploy script publishes the Worker as `carbadilla`. You can change that
name in `package.json` before deploying if you prefer another Cloudflare Worker
name.

## Project structure

- `app/` contains the portfolio routes, components, and styles.
- `public/` contains portraits, branding, and project screenshots.
- `worker/index.ts` is the Cloudflare Worker entry point.
- `vite.config.ts` configures Vinext and Cloudflare's Vite plugin.
- `db/` and `drizzle/` contain optional Cloudflare D1 support.

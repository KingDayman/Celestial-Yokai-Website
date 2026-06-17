# Celestial Yokais

A premium, cinematic website for **Celestial Yokais** — a multi-species Solana NFT ecosystem built around lore, collectibles, AI tools, community, and Yokai Coin (YC).

Built with Next.js 14 (App Router), React, Tailwind CSS, and Framer Motion. No backend — fully static/serverless and ready to deploy to Vercel.

## Tech stack

- Next.js 14 (App Router) + React 18
- Tailwind CSS 3 (custom design tokens in `tailwind.config.js`)
- Framer Motion (scroll reveals, the animated constellation glyph, mobile menu)
- lucide-react (icons)

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`. Edit any file under `app/` or `components/` and the page hot-reloads.

To build a production bundle locally:

```bash
npm run build
npm run start
```

## 2. Images — what's real, what's still a placeholder

Every image slot uses a small `PlaceholderImage` component. Until a real file exists at a given path, that slot shows a labeled placeholder panel instead of a broken image. The moment a real file is added at the matching path, it appears automatically — no code changes needed.

Your real artwork is already wired in for most slots:

| Path | Used for | Status |
|---|---|---|
| `public/images/logo.png` | Navbar, hero, and footer emblem | ✅ Real art |
| `public/images/kitsari-hero.png` | Main hero visual | ✅ Real art |
| `public/images/og-banner.png` | Social share preview (Open Graph) | ✅ Real art |
| `public/images/yokai-coin.png` | Yokai Coin icon | ✅ Real art |
| `public/images/build-the-realm.png` | Build The Realm event poster | ✅ Real art |
| `public/images/species/kitsari.png` | Kitsari species + collection card | ✅ Real art |
| `public/images/species/kodamori.png` | Kodamori species card | ✅ Real art |
| `public/images/realms/tsukivale.png` | Tsukivale realm banner | ✅ Real art |
| `public/images/merch/necklace.jpeg` | Shop section — pendant necklace | ✅ Real photo |
| `public/images/merch/pullover.jpeg` | Shop section — embroidered pullover | ✅ Real photo |
| `public/images/species/onirai.png` | Onirai species card | ⏳ Placeholder |
| `public/images/species/tenguru.png` | Tenguru species card | ⏳ Placeholder |
| `public/images/species/mizuryu.png` | Mizuryu species card | ⏳ Placeholder |
| `public/images/species/more-coming-soon.png` | "More Species" card | ⏳ Placeholder |

Drop new files at the exact path/filename above and they'll replace the placeholder automatically. Recommended formats: PNG, JPEG, or WebP, roughly 1200px on the longest side.

A few assets you shared weren't used directly on the live site, since they're either complete marketing posters (their text/layout would clash with the site's own typography) or feature third-party logos that shouldn't be baked into a production page. Their content was still put to use:
- The Yokai Coin and Build The Realm infographics — their step-by-step content ("Earn YC," "How To Participate") was rebuilt natively in the site's own design system (see the new "How YC Works" and "How To Participate" sections).
- The Solana-pedestal sigil, the partner-logo orbit graphic, and the wide jungle companion shot are great for social posts but don't have a current slot on the site — happy to wire any of them in if you tell me where.

Optional: `public/images/noise.png` is referenced as a subtle grain texture overlay. It's entirely optional — the site looks fine without it.

## 3. Edit copy, links, and data in one place

All text content, social links, roadmap items, species data, and ecosystem pillars live in `lib/siteData.js`. Update this file to change copy without touching component code.

Your real X/Twitter, Discord, GraveStake, Etsy, and mint links are already in place, along with the YC token contract address (with a working copy button and Solscan link on the Yokai Coin section). If any of these ever change, just update the corresponding entry in `lib/siteData.js`.

## 4. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Celestial Yokais site"
```

Create a new empty repository on GitHub (no README/license, since you already have one), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## 5. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (GitHub login is easiest).
2. Click **Add New → Project**, then import the GitHub repo you just pushed.
3. Vercel auto-detects Next.js — leave the default build settings as-is (`next build`).
4. Click **Deploy**. You'll get a live `*.vercel.app` URL in about a minute.
5. Optional: add a custom domain under your Vercel project's **Settings → Domains**.

Every future `git push` to `main` automatically redeploys the site.

## Project structure

```
app/                  Next.js App Router entry (layout, page, global styles)
components/           One file per site section (Hero, About, Roadmap, etc.)
components/ui/        Small reusable pieces (buttons, badges, the seal glyph)
components/effects/   Ambient starfield, the constellation glyph, scroll-reveal wrapper
lib/siteData.js       All editable copy, links, and structured content
public/images/        Where your real artwork goes (see table above)
```

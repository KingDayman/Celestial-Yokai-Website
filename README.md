# Celestial Yokais — Website v2

The definitive home of the Realms. Next.js 14 (App Router), zero extra dependencies,
fully static content pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Deploy to Vercel: push this repo and import it — no configuration needed.

## Where everything lives

| What | Where |
|---|---|
| **All external links, contract address, facts** | `lib/config.js` ← edit here first |
| Species (add / unseal / edit lore) | `content/species.js` |
| News / The Record entries | `content/news.js` |
| FAQ | `content/faq.js` |
| Design tokens + all styling | `app/globals.css` |
| Artwork | `public/` (WebP, keep sources under 200KB) |

## Before launch — TODOs baked into `lib/config.js`

1. **YC contract address** — paste the real one (currently a placeholder).
2. **Exact mint URL** on Gravemint and **staking URL** on GraveStake.
3. **Etsy shop URL**.
4. **Canonical Discord invite** — two invites exist in older materials; pick one.
5. Confirm the Solscan token link.

## Adding a species (or unsealing one)

Open `content/species.js`. To unseal: change `status` from `'sealed'` to
`'awakening'` or `'awakened'`, add `lore` paragraphs, `nature` chips, and an
`image` (drop a WebP in `/public`). The Archive, homepage strip, species page,
and cross-links all update automatically.

## The Veil Crossing

Every external link goes through `<VeilLink>` — the in-world interstitial.
When adding new external links, use it instead of a plain `<a>`:

```jsx
<VeilLink href="https://..." label="a short in-world destination name" className="btn-p">
  Link text
</VeilLink>
```

## What's deliberately not here yet

The **Companion Hub** (`/hub`) — wallet connect, read-only companion + YC view —
is Phase 1 of the dashboard, scoped separately per the rebuild strategy so it
never weighs down the content site.

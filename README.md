# Celestial Yokais — Website v3

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
| **Vault relics, tracker goal, Chronicle** | `content/vault.js` |
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

## New in v3 — The Celestial Vault (`/vault`)

A public treasury showcase, fully in the site's design language:

- **The Chamber** — a 3D wheel of relics (drag, arrows, arrow keys, tap a card).
  Auto-turns when idle; honors `prefers-reduced-motion`.
- **Relic detail** — the gold-cornered lore frame, with collection, quantity,
  sealed date, and "purpose in the vault."
- **The Accumulation** — a live YC progress tracker (also featured on the homepage).
- **Vault Chronicle** — a timeline of every sealing.

### Updating the vault

Everything lives in `content/vault.js` — same workflow as species and news:
edit, commit, Vercel redeploys. To add a relic, copy an item and give it a
unique `id`. Leave `image: ''` to render the category glyph, or drop a WebP in
`/public` and reference it. Set `featured: true` on the relic the wheel should
open on. Update `vaultConfig` when the YC goal moves.

> The standalone `vault.html` prototype had a passcode "Keeper" editor that
> saved to the browser and exported JSON. That's intentionally not carried
> over: a client-side passcode isn't real security, and this repo already has
> a cleaner publish path (edit `content/vault.js` → commit → auto-deploy).

### v3 also changed

- Nav gained **The Vault**; the mobile hamburger breakpoint moved from
  860px → 1024px so the fuller nav never overflows.
- Homepage gained a **Vault teaser** section (between Yokai Coin and Build The
  Realm) with the live accumulation bar and the rotating seal as backdrop.
- Footer "Participate" column and The Record both link the vault.

## What's deliberately not here yet

The **Companion Hub** (`/hub`) — wallet connect, read-only companion + YC view —
is Phase 1 of the dashboard, scoped separately per the rebuild strategy so it
never weighs down the content site.

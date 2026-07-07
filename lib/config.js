// ════════════════════════════════════════════════════════
// SINGLE SOURCE OF TRUTH for links, addresses, and facts.
// Edit here — nothing else needs to change.
// ════════════════════════════════════════════════════════
export const config = {
  siteName: 'Celestial Yokais',
  siteUrl: 'https://celestialyokais.xyz',
  tagline: 'Beyond the Veil, the Realms are waking.',

  links: {
    // NOTE: two Discord invites exist in older materials —
    // confirm which is canonical and set it here once.
    discord: 'https://discord.gg/APH5Ufteh',
    twitter: 'https://x.com/daymansquotes',
    mint: 'https://gravemint.io',        // TODO: exact Kitsari mint URL
    staking: 'https://gravestake.io',    // TODO: exact staking URL
    shop: 'https://www.etsy.com',        // TODO: your Etsy shop URL
    solscan: 'https://solscan.io/token/YOUR_YC_CONTRACT', // TODO
  },

  yc: {
    // TODO: paste the real contract address
    contract: 'PASTE_YC_CONTRACT_ADDRESS_HERE',
  },

  kitsari: {
    supply: '1,000',
    chain: 'Solana',
  },

  buildTheRealm: {
    prize: '1,000,000 YC',
    cadence: 'Quarterly',
    nextSeason: 'Season opens soon', // TODO: real date when known
  },
};

// ════════════════════════════════════════════════════════
// THE CELESTIAL VAULT — treasury contents & chronicle.
// Edit here, redeploy, done (same workflow as species/news).
//
// To add a relic: copy an item, give it a unique id, set
// `visible: true`. Set `featured: true` on ONE item to make
// the wheel open on it. `image` is optional — leave '' and
// the vault renders the category glyph instead.
// ════════════════════════════════════════════════════════

export const vaultConfig = {
  progressLabel: 'Yokai Coin accumulation',
  progressCurrent: 46570000,
  progressGoal: 100000000,
  progressUnit: 'YC',
  showProgress: true,
};

// Display order of filter chips. 'All' is added automatically.
export const vaultCategories = ['NFTs', 'Tokens', 'Rewards', 'Partnerships', 'Artwork'];

// Category glyph + hue (site palette only — keep these in the family)
export const categoryGlyph = {
  NFTs: '御',
  Tokens: '霊',
  Rewards: '宝',
  Partnerships: '縁',
  Artwork: '絵',
};
export const categoryHue = {
  NFTs: '#9b5de5', // spirit
  Tokens: '#f0cc6e', // gold-bright
  Rewards: '#4cc9f0', // ember
  Partnerships: '#c084fc', // spirit-soft
  Artwork: '#ddb8ff', // spirit-pale
};

export const vaultItems = [
  {
    id: 'seed-1',
    name: 'Yokai Coin',
    collection: 'Celestial Yokais',
    category: 'Tokens',
    quantity: '15,000,000 YC',
    dateAdded: '2026-07-07',
    image: '',
    link: '',
    description: 'Yokai Coin held by the Celestial Yokais treasury.',
    purpose: 'Staking rewards, raffles, ecosystem growth, and future holder utility.',
    featured: true,
    visible: true,
  },
  {
    id: 'seed-2',
    name: 'Kitsari #001 — First Flame',
    collection: 'Kitsari',
    category: 'NFTs',
    quantity: '1',
    dateAdded: '2026-05-12',
    image: '',
    link: '',
    description: "The genesis Kitsari, sealed in the vault as the collection's founding spirit.",
    purpose: 'Permanent vault relic. Never for sale.',
    featured: false,
    visible: true,
  },
  {
    id: 'seed-3',
    name: 'SOL Reserve',
    collection: 'Treasury',
    category: 'Tokens',
    quantity: '142 SOL',
    dateAdded: '2026-04-02',
    image: '',
    link: '',
    description: 'Solana held for operations, liquidity, and minting costs.',
    purpose: 'Funds development, marketing, and community events.',
    featured: false,
    visible: true,
  },
  {
    id: 'seed-4',
    name: 'Moonlit Shrine — Original',
    collection: 'Vault Artwork',
    category: 'Artwork',
    quantity: '1 of 1',
    dateAdded: '2026-06-01',
    image: '',
    link: '',
    description: 'Commissioned 1/1 painting of the Kitsari shrine under a blood moon.',
    purpose: 'Brand artwork and future physical print raffle.',
    featured: false,
    visible: true,
  },
  {
    id: 'seed-5',
    name: 'Allied Realm Pass',
    collection: 'Partner Project',
    category: 'Partnerships',
    quantity: '3',
    dateAdded: '2026-06-18',
    image: '',
    link: '',
    description: 'Passes gifted through a cross-community alliance.',
    purpose: 'Reserved as prizes for joint community events.',
    featured: false,
    visible: true,
  },
  {
    id: 'seed-6',
    name: 'Holder Raffle Cache',
    collection: 'Celestial Yokais',
    category: 'Rewards',
    quantity: '5 NFTs + 250k YC',
    dateAdded: '2026-06-28',
    image: '',
    link: '',
    description: 'A sealed cache of prizes for the next holder raffle season.',
    purpose: 'Distributed to verified holders through monthly draws.',
    featured: false,
    visible: true,
  },
];

// Newest first — the Vault Chronicle.
export const vaultTimeline = [
  {
    id: 't-1',
    date: '2026-07-07',
    title: '15M Yokai Coin sealed',
    body: "The treasury's Yokai Coin allocation was moved into the vault.",
  },
  {
    id: 't-2',
    date: '2026-06-28',
    title: 'Raffle cache assembled',
    body: 'Five NFTs and 250k YC set aside for holder raffles.',
  },
  {
    id: 't-3',
    date: '2026-05-12',
    title: 'The vault opens',
    body: 'Kitsari #001 becomes the first relic sealed inside the Celestial Vault.',
  },
];

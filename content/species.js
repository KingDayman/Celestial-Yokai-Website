// ════════════════════════════════════════════════════════
// SPECIES ARCHIVE — add or unseal species here.
// status: 'awakened' | 'awakening' | 'sealed'
// Sealed species render with redacted lore automatically.
// image: path under /public, or null for sealed silhouette.
// ════════════════════════════════════════════════════════

export const species = [
  {
    slug: 'kitsari',
    name: 'Kitsari',
    epithet: 'The First Guardians',
    status: 'awakened',
    image: '/logo-circle.webp',
    heroImage: '/kitsari-hero.webp',
    element: 'Lunar Energy',
    nature: ['Lunar Energy', 'Illusion', 'Speed', 'Ancient Memory'],
    short:
      'Celestial fox spirits born between worlds — the first guardians to cross the weakening Veil.',
    lore: [
      'When the Veil first began to thin, the Kitsari were the first to feel it. Fox spirits born in the space between realms, they have always moved where others cannot — unseen, unhurried, carrying the memories of worlds long forgotten.',
      'Their markings are not decoration. Each glyph appears at the moment of awakening and encodes the realm of their origin, the path they are bound to walk, and the balance they are sworn to keep.',
      'One thousand Kitsari have crossed over. Each has chosen a companion on this side of the Veil. If you hold one, it did not happen by accident.',
    ],
    collection: {
      supply: '1,000',
      chain: 'Solana',
      status: 'Minting now',
    },
  },
  {
    slug: 'kodamori',
    name: 'Kodamori',
    epithet: 'Keepers of the Rooted Dark',
    status: 'awakening',
    image: null,
    heroImage: null,
    element: 'Verdant Spirit',
    nature: ['Verdant Spirit', 'Endurance', 'Silence'],
    short:
      'Forest guardians older than the realms they protect. They are beginning to stir.',
    lore: [
      'The Kodamori do not travel. The forests travel with them. Where they stand, the rooted dark deepens — and things that were lost are kept safe until they are needed again.',
      'The Archive has begun to unseal their record. Their full history is not yet spoken.',
    ],
    collection: null,
  },
  {
    slug: 'onirai',
    name: 'Onirai',
    epithet: 'Forged From Collapsed Stars',
    status: 'awakening',
    image: null,
    heroImage: null,
    element: 'Void Ember',
    nature: ['Void Ember', 'Gravity', 'Old Grudges'],
    short:
      'Forged from collapsed stars and old grudges. Their awakening is being watched carefully.',
    lore: [
      'Not every guardian protects gently. The Onirai remember what broke the balance the first time — and they have not forgiven it.',
      'The Archive has begun to unseal their record. Their full history is not yet spoken.',
    ],
    collection: null,
  },
  {
    slug: 'tenguru',
    name: 'Tenguru',
    epithet: 'record sealed',
    status: 'sealed',
    image: null,
    heroImage: null,
    element: null,
    nature: [],
    short: 'The Archive has not unsealed this record.',
    lore: [],
    collection: null,
  },
  {
    slug: 'mizuryu',
    name: 'Mizuryu',
    epithet: 'record sealed',
    status: 'sealed',
    image: null,
    heroImage: null,
    element: null,
    nature: [],
    short: 'Rivers given shape and will — or so the fragments say. The record remains sealed.',
    lore: [],
    collection: null,
  },
];

export function getSpecies(slug) {
  return species.find((s) => s.slug === slug);
}

export const statusLabel = {
  awakened: 'Awakened',
  awakening: 'Awakening',
  sealed: 'Sealed',
};

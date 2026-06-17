// ---------------------------------------------------------------------------
// Celestial Yokais — Site Content
// Edit copy, links, and data here.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Celestial Yokais",
  tagline: "Building the realms, one species at a time.",
};

export const MINT_LINK =
  "https://gravemint.io/mint/AtYGtFGHHkqBURkXrLkurUfLo929mhU2hmtUznfri1rg";

export const YOKAI_COIN = {
  ticker: "YC",
  address: "7bPUfM26oCHkVLXNpDR7dgwmGoTiaTsaK2uPSAHUpump",
  explorerUrl:
    "https://solscan.io/token/7bPUfM26oCHkVLXNpDR7dgwmGoTiaTsaK2uPSAHUpump",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Kitsari", href: "#kitsari" },
  { label: "Yokai Coin", href: "#yokai-coin" },
  { label: "Build The Realm", href: "#build-the-realm" },
  { label: "Species", href: "#species" },
  { label: "Ecosystem", href: "#ecosystem" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Community", href: "#community" },
];

export const TRUST_BADGES = [
  { label: "Solana Ecosystem", status: "active" },
  { label: "Kitsari Live", status: "active" },
  { label: "Yokai Coin Active", status: "active" },
  { label: "Build The Realm — Coming Soon", status: "soon" },
];

export const SPECIES = [
  {
    slug: "kitsari",
    name: "Kitsari",
    title: "Fox-like celestial spirits",
    description:
      "Bonded to lunar energy, illusion, and speed. The first species to awaken in the Celestial Yokai ecosystem, and the companion identity of every founding holder.",
    image: "/images/species/kitsari.png",
    status: "Live",
  },
  {
    slug: "kodamori",
    name: "Kodamori",
    title: "Ancient nature guardians",
    description:
      "Tree-bound spirits said to keep the memory of the realms. Quiet, watchful, and tied to the slow growth of the ecosystem itself.",
    image: "/images/species/kodamori.png",
    status: "In Development",
    focal: "object-top",
  },
  {
    slug: "onirai",
    name: "Onirai",
    title: "Cosmic oni warriors",
    description:
      "Forged from collapsed stars and old grudges. Onirai stand at the edge of the realms, where lore and conflict take shape.",
    image: "/images/species/onirai.png",
    status: "In Development",
  },
  {
    slug: "tenguru",
    name: "Tenguru",
    title: "Storm crow tengu hybrids",
    description:
      "Messengers and tricksters of the upper sky. Tenguru carry word between realms faster than any other species.",
    image: "/images/species/tenguru.png",
    status: "Coming Soon",
  },
  {
    slug: "mizuryu",
    name: "Mizuryu",
    title: "Serpentine dragon yokai",
    description:
      "Rivers given shape and will. Mizuryu are tied to the deep lore of the realms and the source-water of the Celestial world.",
    image: "/images/species/mizuryu.png",
    status: "Coming Soon",
  },
  {
    slug: "more",
    name: "More Species",
    title: "Still taking shape",
    description:
      "Celestial Yokais is built to expand. Additional species and realms are in active development as the ecosystem grows.",
    image: "/images/species/more-coming-soon.png",
    status: "Coming Soon",
  },
];

export const REALMS = [
  {
    slug: "tsukivale",
    name: "Tsukivale",
    title: "The first realm",
    description:
      "A moonlit forest where the first Kitsari learned to move between worlds, watched over by ancient guardians long before the realm had a name. Tsukivale anchors the earliest lore of the ecosystem, with more realms to be revealed as new species emerge.",
    image: "/images/realms/tsukivale.png",
    status: "In Development",
  },
];

export const ECOSYSTEM_PILLARS = [
  { key: "nfts", label: "NFTs", description: "Multi-species digital collectibles with on-chain identity." },
  { key: "lore", label: "Lore", description: "An expanding mythology connecting every species and realm." },
  { key: "ai", label: "AI Agents", description: "AI-driven tools and companions built around the Celestial world." },
  { key: "coin", label: "Yokai Coin", description: "The participation currency of the ecosystem." },
  { key: "staking", label: "Staking", description: "Stake Kitsari to earn Yokai Coin through GraveStake." },
  { key: "merch", label: "Merch", description: "Physical goods that carry the Celestial identity into the real world." },
  { key: "games", label: "Games", description: "Early concepts exploring playable corners of the realms." },
  { key: "events", label: "Creator Events", description: "Quarterly programs like Build The Realm for active builders." },
  { key: "community", label: "Community", description: "The people writing, building, and holding the ecosystem together." },
];

export const ROADMAP = [
  {
    phase: "I",
    title: "Foundation",
    items: ["Kitsari launch", "Community foundation", "Yokai Coin activation", "Staking rewards"],
  },
  {
    phase: "II",
    title: "Expansion",
    items: ["Build The Realm — Season 1", "Website expansion", "More holder experiences", "Merch and ecosystem growth"],
  },
  {
    phase: "III",
    title: "Worldbuilding",
    items: ["Future species", "More AI agents", "Game concepts", "Expanded lore and realms"],
  },
  {
    phase: "IV",
    title: "Horizon",
    items: ["Cross-chain expansion", "Larger creator events", "Community-built ecosystem tools", "Long-term worldbuilding"],
  },
];

export const BUILD_THE_REALM_TRACKS = [
  { key: "builder", label: "Builder Track", description: "Tools, apps, and infrastructure for the ecosystem." },
  { key: "experience", label: "Experience Track", description: "Holder experiences, events, and interactive concepts." },
  { key: "creative", label: "Creative Track", description: "Art, design, and visual identity for the realms." },
  { key: "lore", label: "Lore Track", description: "Writing and worldbuilding within the Celestial mythology." },
  { key: "ai", label: "AI Track", description: "AI agents, tools, and companions built on Celestial Yokais." },
  { key: "commerce", label: "Commerce Track", description: "Merch, products, and real-world extensions of the brand." },
];

export const BUILD_THE_REALM_STEPS = [
  { step: 1, title: "Hold 1 Kitsari NFT", description: "Entry requires holding 1 Kitsari NFT in your wallet." },
  { step: 2, title: "Choose A Track", description: "Select the track that best fits your skills, passion, and idea." },
  { step: 3, title: "Build Your Submission", description: "Create something amazing that helps shape the future of Celestial Yokais." },
  { step: 4, title: "Submit Your Project", description: "Submit your project before the deadline through the official submission portal." },
  { step: 5, title: "Community Showcase", description: "All submissions are featured and evaluated during the community showcase period." },
  { step: 6, title: "Winners Announced", description: "Winners are selected and prizes are awarded. Legends are built." },
];

export const YC_EARN_STEPS = [
  { step: 1, title: "Stake Your NFTs", description: "Stake your Kitsari NFTs securely on GraveStake.io." },
  { step: 2, title: "Earn Over Time", description: "Earn YC based on your stake and tier — the more you stake, the more you earn." },
  { step: 3, title: "Power The Ecosystem", description: "Use your YC across the Celestial Yokai ecosystem." },
];

export const MERCH_PRODUCTS = [
  {
    slug: "necklace",
    name: "Sigil Pendant Necklace",
    description: "The Celestial Yokai sigil, cast in gold and ready to wear.",
    image: "/images/merch/necklace.jpeg",
  },
  {
    slug: "pullover",
    name: "Kitsari Embroidered Quarter-Zip",
    description: "A premium quarter-zip pullover with embroidered Kitsari artwork.",
    image: "/images/merch/pullover.jpeg",
  },
];

export const COMMUNITY_LINKS = [
  { label: "X / Twitter", href: "https://x.com/celestialyokais", key: "x" },
  { label: "Discord", href: "https://discord.gg/CXzu9Ups3y", key: "discord" },
  { label: "GraveStake", href: "https://gravestake.io/p/kitsari", key: "gravestake" },
  { label: "Mint Kitsari", href: MINT_LINK, key: "collection" },
  { label: "Shop (Etsy)", href: "https://www.etsy.com/shop/CelestialYokais", key: "etsy" },
];

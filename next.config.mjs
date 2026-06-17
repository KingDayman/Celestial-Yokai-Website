/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local /public images only for now. Add remote patterns here later
    // if you host NFT art, banners, or video thumbnails externally
    // (e.g. Arweave, IPFS gateways, or a CDN).
    remotePatterns: [],
  },
};

export default nextConfig;

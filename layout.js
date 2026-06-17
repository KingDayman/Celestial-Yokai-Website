import { Cinzel, Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Celestial Yokais | A Solana Yokai Ecosystem",
  description:
    "Celestial Yokais is a multi-species digital ecosystem built around lore, collectibles, AI, creator tools, community, and the future of Web3 worldbuilding. Home of the Kitsari and Yokai Coin.",
  keywords: [
    "Celestial Yokais",
    "Kitsari",
    "Solana NFT",
    "Yokai Coin",
    "Web3 ecosystem",
    "Build The Realm",
  ],
  openGraph: {
    title: "Celestial Yokais",
    description:
      "A multi-species digital ecosystem built around lore, collectibles, AI, creator tools, community, and the future of Web3 worldbuilding.",
    images: ["/images/og-banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${grotesk.variable} ${inter.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

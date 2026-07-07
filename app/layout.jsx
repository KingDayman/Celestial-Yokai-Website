import './globals.css';
import { Cinzel, Cinzel_Decorative, Cormorant_Garamond, Share_Tech_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Particles from '@/components/Particles';
import { config } from '@/lib/config';

const display = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-display',
});
const heading = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-heading',
});
const body = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-body',
});
const mono = Share_Tech_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-mono',
});

export const metadata = {
  metadataBase: new URL(config.siteUrl),
  title: {
    default: 'Celestial Yokais — Beyond the Veil, the Realms are waking',
    template: '%s · Celestial Yokais',
  },
  description:
    'A living anime-inspired universe of guardian spirits. The first guardians, the Kitsari, have already crossed over.',
  openGraph: {
    siteName: 'Celestial Yokais',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${heading.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Particles />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

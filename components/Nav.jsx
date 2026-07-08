'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/world', label: 'The World' },
  { href: '/world/species', label: 'Species' },
  { href: '/yokai-coin', label: 'Yokai Coin' },
  { href: '/vault', label: 'The Vault' },
  { href: '/build-the-realm', label: 'Build The Realm' },
  { href: '/shop', label: 'Shop' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on route change
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav-logo" aria-label="Celestial Yokais home">
        <Image src="/logo-circle.webp" alt="" width={36} height={36} priority />
        Celestial Yokais
      </Link>
      <ul className={`nav-links ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className={pathname.startsWith(l.href) ? 'active' : ''}>
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/holders" className="btn-s">
            Holders
          </Link>
        </li>
      </ul>
      <button
        className="ham"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}

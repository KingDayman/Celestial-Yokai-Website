"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/siteData";
import PlaceholderImage from "./ui/PlaceholderImage";
import GlowButton from "./ui/GlowButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2.5" : "py-4"
      }`}
    >
      <div
        className={`mx-3 sm:mx-6 lg:mx-10 rounded-2xl transition-all duration-300 ${
          scrolled ? "glass shadow-[0_8px_30px_rgba(0,0,0,0.35)]" : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-4 sm:px-6 py-3">
          <a href="#home" className="flex items-center gap-3 group">
            <PlaceholderImage
              src="/images/logo.png"
              alt={SITE.name}
              width={38}
              height={38}
              className="h-9 w-9 rounded-full ring-1 ring-gold/40 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-lg tracking-wide text-mist">
              Celestial Yokais
            </span>
          </a>

          <div className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-label text-[13px] uppercase tracking-wide text-mist-dim hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden xl:block">
            <GlowButton href="#kitsari" variant="primary">
              Enter The Realm
            </GlowButton>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="xl:hidden p-2 text-mist hover:text-gold transition-colors"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-void/95 backdrop-blur-xl xl:hidden"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-lg text-mist">Celestial Yokais</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="p-2 text-mist hover:text-gold transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-center gap-7 pt-12"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-mist hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-4">
                <GlowButton href="#kitsari" variant="primary" onClick={() => setOpen(false)}>
                  Enter The Realm
                </GlowButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

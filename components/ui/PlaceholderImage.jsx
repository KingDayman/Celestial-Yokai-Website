"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

/**
 * Drop-in image component for every visual slot on the site.
 *
 * Usage:
 *   <PlaceholderImage src="/images/species/kitsari.png" label="Kitsari" fill />
 *
 * Until the real file exists at that path in /public, this renders a
 * tasteful placeholder panel instead of a broken image icon. The moment
 * you add your real PNG/JPG/WebP at the exact same path, it appears
 * automatically — no code changes needed.
 */
export default function PlaceholderImage({
  src,
  alt = "",
  label,
  fill = false,
  width,
  height,
  className = "",
  imgClassName = "",
  priority = false,
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-amethyst-deep/40 via-void-raised to-void-deep ${className}`}
      >
        <div className="absolute inset-0 bg-radial-gold opacity-40" />
        <ImageOff className="relative h-6 w-6 text-gold/50" strokeWidth={1.25} />
        {label ? (
          <span className="relative font-label text-[10px] uppercase tracking-widest2 text-gold/60 text-center px-4">
            {label}
          </span>
        ) : null}
        <span className="relative font-mono text-[9px] text-mist-dim/50 px-4 text-center break-all">
          {src}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className={`object-cover ${imgClassName}`}
          onError={() => setFailed(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 400}
      height={height || 400}
      priority={priority}
      className={`${className} ${imgClassName}`}
      onError={() => setFailed(true)}
    />
  );
}

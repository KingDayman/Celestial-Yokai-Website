"use client";

import { ArrowUpRight } from "lucide-react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-label text-sm font-medium tracking-wide px-7 py-3.5 transition-all duration-300 select-none";

const variants = {
  primary:
    "bg-gradient-to-r from-gold to-gold-bright text-void shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "glass text-mist hover:border-gold/50 hover:text-gold hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-mist-dim hover:text-gold underline-offset-4 hover:underline",
  soon:
    "glass text-mist-dim/70 cursor-default opacity-80",
};

export default function GlowButton({
  children,
  href,
  variant = "primary",
  external = false,
  showArrow = false,
  className = "",
  onClick,
  type = "button",
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (variant === "soon") {
    return (
      <span className={classes} aria-disabled="true">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-spirit/60" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-spirit" />
        </span>
        {children}
      </span>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={classes}
      >
        {children}
        {showArrow && <ArrowUpRight className="h-4 w-4" strokeWidth={2} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {showArrow && <ArrowUpRight className="h-4 w-4" strokeWidth={2} />}
    </button>
  );
}

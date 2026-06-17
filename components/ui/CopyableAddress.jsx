"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

export default function CopyableAddress({
  address,
  explorerUrl,
  label = "Contract Address",
  className = "",
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API unavailable — silently ignore, the address is still visible.
    }
  };

  const short = `${address.slice(0, 4)}…${address.slice(-4)}`;

  return (
    <div
      className={`glass inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full px-4 py-2.5 ${className}`}
    >
      <span className="font-label text-[10px] uppercase tracking-widest2 text-mist-dim">
        {label}
      </span>
      <span className="font-mono text-xs text-mist sm:text-sm">{short}</span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy contract address"
        className="flex h-6 w-6 items-center justify-center rounded-full text-mist-dim transition-colors hover:text-gold"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-spirit" strokeWidth={2} />
        ) : (
          <Copy className="h-3.5 w-3.5" strokeWidth={1.75} />
        )}
      </button>
      {explorerUrl && (
        <a
          href={explorerUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View on Solscan"
          className="flex h-6 w-6 items-center justify-center rounded-full text-mist-dim transition-colors hover:text-gold"
        >
          <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} />
        </a>
      )}
    </div>
  );
}

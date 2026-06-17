/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        void: "#07060B",
        "void-deep": "#050308",
        "void-raised": "#0D0B14",
        // Gold — primary brand / CTA accent (antique gold leaf, not bright yellow)
        gold: {
          DEFAULT: "#D4AF6A",
          bright: "#F2D08A",
          dim: "#8A6B3A",
        },
        // Amethyst — celestial purple accent
        amethyst: {
          DEFAULT: "#7C5CFF",
          deep: "#2E1A56",
          soft: "#B6A2FF",
        },
        // Mist — warm off-white for readable body text on black
        mist: {
          DEFAULT: "#EDE7DD",
          dim: "#A39C8E",
        },
        // Spirit — subtle neon accent (status / live / AI indicators only)
        spirit: {
          DEFAULT: "#5EEAD4",
          dim: "#2C7A6E",
        },
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        label: ["var(--font-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(circle at center, rgba(212,175,106,0.16), transparent 70%)",
        "radial-amethyst": "radial-gradient(circle at center, rgba(124,92,255,0.18), transparent 70%)",
        "grain": "url('/images/noise.png')",
      },
      boxShadow: {
        gold: "0 0 24px rgba(212,175,106,0.35)",
        "gold-lg": "0 0 60px rgba(212,175,106,0.25)",
        amethyst: "0 0 30px rgba(124,92,255,0.35)",
        spirit: "0 0 20px rgba(94,234,212,0.35)",
      },
      animation: {
        "drift-slow": "drift 22s ease-in-out infinite",
        "drift-slower": "drift 34s ease-in-out infinite reverse",
        twinkle: "twinkle 4s ease-in-out infinite",
        "pulse-soft": "pulseSoft 3s ease-in-out infinite",
        rise: "rise 0.8s cubic-bezier(0.22,1,0.36,1) both",
        "spin-slow": "spin 16s linear infinite",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(2%,-3%) scale(1.05)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(0.85)" },
          "50%": { opacity: 1, transform: "scale(1.15)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 },
        },
        rise: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

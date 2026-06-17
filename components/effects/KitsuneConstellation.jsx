"use client";

import { motion } from "framer-motion";

// Hand-placed, mirrored nodes forming an abstract kitsune (fox-mask) glyph.
const NODES = {
  earTipL: [70, 20], earOuterL: [20, 130], earInnerL: [140, 110],
  browL: [130, 165], cheekL: [50, 220], jawL: [140, 280],
  earTipR: [330, 20], earOuterR: [380, 130], earInnerR: [260, 110],
  browR: [270, 165], cheekR: [350, 220], jawR: [260, 280],
  crown: [200, 70], nose: [200, 215], chin: [200, 300],
};

const LINES = [
  ["earOuterL", "earTipL"], ["earTipL", "earInnerL"], ["earInnerL", "browL"],
  ["browL", "nose"], ["browL", "cheekL"], ["cheekL", "jawL"], ["jawL", "chin"],
  ["earInnerL", "crown"],
  ["earOuterR", "earTipR"], ["earTipR", "earInnerR"], ["earInnerR", "browR"],
  ["browR", "nose"], ["browR", "cheekR"], ["cheekR", "jawR"], ["jawR", "chin"],
  ["earInnerR", "crown"],
  ["crown", "nose"], ["nose", "chin"],
];

const NODE_STYLE = {
  crown: { r: 3.5, fill: "#B6A2FF" },
  nose: { r: 4.5, fill: "#5EEAD4" },
  chin: { r: 3, fill: "#D4AF6A" },
};

export default function KitsuneConstellation({ className = "" }) {
  return (
    <svg
      viewBox="0 0 400 320"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {LINES.map(([a, b], i) => {
        const [x1, y1] = NODES[a];
        const [x2, y2] = NODES[b];
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={i % 3 === 0 ? "#B6A2FF" : "#D4AF6A"}
            strokeWidth="1"
            strokeOpacity="0.55"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.05, ease: "easeInOut" }}
          />
        );
      })}
      {Object.entries(NODES).map(([key, [x, y]], i) => {
        const style = NODE_STYLE[key] || { r: 2.2, fill: "#F2D08A" };
        return (
          <motion.circle
            key={key}
            cx={x}
            cy={y}
            r={style.r}
            fill={style.fill}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0.7, 1], scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.04 }}
            style={{ transformOrigin: `${x}px ${y}px` }}
          />
        );
      })}
    </svg>
  );
}

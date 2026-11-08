"use client";

import { motion } from "motion/react";

const ease = [0.2, 0.7, 0.2, 1];

// Fades and lifts content into view each time it scrolls onto the screen.
export default function Reveal({ children, delay = 0, y = 32, className = "", as = "div", once = false }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, tone = "light", className = "" }) {
  const color = tone === "dark" ? "text-brand-soft" : "text-brand";
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold tracking-[0.22em] ${color} ${className}`}>
      <span className="h-px w-8 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

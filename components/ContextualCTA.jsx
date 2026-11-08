"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// A small, quiet pill that suggests the most relevant next step for the
// section the visitor is reading. Sections opt in with data-cta / data-cta-href.
export default function ContextualCTA() {
  const [cta, setCta] = useState(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-cta]"));
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.set(e.target, e.intersectionRatio);
          else visible.delete(e.target);
        });
        let best = null;
        let bestRatio = 0;
        visible.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            best = el;
            bestRatio = ratio;
          }
        });
        setCta(best ? { label: best.dataset.cta, href: best.dataset.ctaHref || "/contact" } : null);
      },
      { threshold: [0.25, 0.5, 0.75] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-5 left-5 z-[55] hidden md:block" aria-live="polite">
      <AnimatePresence mode="wait">
        {cta && (
          <motion.div
            key={cta.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            transition={{ duration: 0.35 }}
          >
            <Link
              href={cta.href}
              className="pointer-events-auto group flex min-h-12 items-center gap-3 rounded-full border border-ink/10 bg-white/85 py-2 pl-5 pr-2 text-[13px] font-semibold text-ink shadow-[0_14px_40px_-16px_rgba(11,11,15,0.45)] backdrop-blur-xl transition-colors hover:border-brand"
            >
              {cta.label}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                →
              </span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

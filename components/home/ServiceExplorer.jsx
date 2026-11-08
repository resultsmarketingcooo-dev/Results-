"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal, { Eyebrow } from "@/components/Reveal";
import Button from "@/components/Button";
import { divisions, explorerServices } from "@/lib/content";

export default function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const s = explorerServices[active];

  const onKey = (e) => {
    const n = explorerServices.length;
    let next = null;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % n;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + n) % n;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = n - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabs.current[next] && tabs.current[next].focus();
    }
  };

  return (
    <section id="explore" className="scroll-mt-24 bg-white py-24 md:py-32" data-cta="Discuss My Project" data-cta-href="/contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-5 md:max-w-3xl">
          <Eyebrow>OUR SERVICES</Eyebrow>
          <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Two divisions. <span className="text-brand">One goal:</span> your growth.
          </h2>
          <p className="text-lg text-body">Select a service to see what&apos;s involved, what you get and how it helps.</p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,380px)_1fr]">
          <div role="tablist" aria-label="Services" aria-orientation="vertical" onKeyDown={onKey} className="flex flex-col">
            {explorerServices.map((svc, i) => {
              const on = i === active;
              const firstOfDivision = i === 0 || explorerServices[i - 1].division !== svc.division;
              return (
                <div key={svc.slug}>
                  {firstOfDivision && (
                    <p className={`pb-2 text-[11px] font-semibold tracking-[0.2em] text-body ${i === 0 ? "" : "pt-6"}`}>
                      {svc.division.toUpperCase()}
                    </p>
                  )}
                  <button
                    ref={(el) => {
                      tabs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${svc.slug}`}
                    aria-selected={on}
                    aria-controls={`panel-${svc.slug}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    className={`relative flex w-full items-center justify-between border-b border-line py-4 pl-4 text-left font-display text-lg font-semibold transition-colors duration-300 ${
                      on ? "text-ink" : "text-body hover:text-ink"
                    }`}
                  >
                    {on && (
                      <motion.span layoutId="explorer-bar" className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-brand" aria-hidden="true" />
                    )}
                    {svc.name}
                    <span className={`text-brand transition-all duration-300 ${on ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} aria-hidden="true">
                      →
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-2xl bg-ink text-white">
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand/30 blur-[100px]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={s.slug}
                role="tabpanel"
                id={`panel-${s.slug}`}
                aria-labelledby={`tab-${s.slug}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
                className="relative flex h-full flex-col gap-8 p-8 sm:p-12"
              >
                <div>
                  <p className="text-xs font-semibold tracking-[0.2em] text-brand-soft">{s.name.toUpperCase()}</p>
                  <h3 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{s.headline}</h3>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{s.description}</p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.18em] text-white">WHAT WE DELIVER</h4>
                    <ul className="mt-4 space-y-3">
                      {s.deliverables.map((d, i) => (
                        <motion.li
                          key={d}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 + i * 0.06 }}
                          className="flex gap-3 text-white/90"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
                          {d}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.18em] text-white">HOW IT HELPS</h4>
                    <ul className="mt-4 space-y-3">
                      {s.benefits.map((b, i) => (
                        <motion.li
                          key={b}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.06 }}
                          className="flex gap-3 text-white/90"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A9BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          {b}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                  <Button href={`/contact?service=${s.slug}`}>{s.cta.toUpperCase()}</Button>
                  <span className="text-sm text-muted">Free, no-obligation conversation</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* full service index */}
        <div className="mt-16 grid gap-10 border-t border-line pt-12 md:grid-cols-2">
          {divisions.map((d) => (
            <Reveal key={d.id}>
              <div className="flex items-baseline gap-3">
                <span className="font-display text-sm font-bold text-brand">{d.number}</span>
                <h3 className="font-display text-xl font-bold">{d.title}</h3>
              </div>
              <p className="mt-2 text-body">{d.blurb}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {d.services.map((x) => (
                  <li key={x} className="rounded-full border border-line px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-brand hover:text-brand">
                    {x}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

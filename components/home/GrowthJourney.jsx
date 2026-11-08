"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import Reveal, { Eyebrow } from "@/components/Reveal";
import { journey } from "@/lib/content";

const STEP_MS = 5000;

export default function GrowthJourney() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 });
  const reduce = useReducedMotion();
  const playing = auto && inView && !reduce;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % journey.length), STEP_MS);
    return () => clearTimeout(t);
  }, [active, playing]);

  const pick = (i) => {
    setAuto(false);
    setActive(i);
  };

  const step = journey[active];

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-24 text-white md:py-32" data-cta="Book a Strategy Call" data-cta-href="/contact#book">
      <div aria-hidden="true" className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="flex max-w-2xl flex-col gap-5">
            <Eyebrow tone="dark">YOUR GROWTH JOURNEY</Eyebrow>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
              Six stages from idea to <span className="text-brand-soft">growth.</span>
            </h2>
          </Reveal>
          <button
            type="button"
            onClick={() => setAuto((a) => !a)}
            className="flex min-h-11 items-center gap-2 self-start rounded-full border border-white/15 px-4 text-sm text-muted transition-colors hover:text-white md:self-auto"
            aria-pressed={!auto}
          >
            {auto ? "Pause tour" : "Play tour"}
          </button>
        </div>

        {/* stepper */}
        <div className="mt-14 grid grid-cols-3 gap-y-6 md:grid-cols-6" role="tablist" aria-label="Growth journey stages">
          {journey.map((j, i) => {
            const on = i === active;
            const done = i < active;
            return (
              <button
                key={j.key}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="journey-panel"
                onClick={() => pick(i)}
                className="group flex flex-col items-start gap-3 pr-4 text-left"
              >
                <span className="relative block h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                  {done && <span className="absolute inset-0 bg-brand" />}
                  {on && (
                    <motion.span
                      key={`${active}-${playing}`}
                      className="absolute inset-y-0 left-0 bg-brand"
                      initial={{ width: playing ? "0%" : "100%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: playing ? STEP_MS / 1000 : 0, ease: "linear" }}
                    />
                  )}
                </span>
                <span className={`font-display text-sm font-bold ${on ? "text-brand-soft" : "text-white/30"}`}>{String(i + 1).padStart(2, "0")}</span>
                <span className={`font-display text-base font-bold tracking-[0.06em] transition-colors sm:text-lg ${on ? "text-white" : "text-white/50 group-hover:text-white/80"}`}>
                  {j.title.toUpperCase()}
                </span>
              </button>
            );
          })}
        </div>

        <div id="journey-panel" role="tabpanel" className="mt-12 min-h-[220px]" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
              className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:grid-cols-[auto_1fr_1fr] md:items-center md:p-10"
            >
              <span className="font-display text-7xl font-extrabold leading-none text-brand md:text-8xl">{String(active + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">{step.title}</h3>
                <p className="mt-3 text-lg leading-relaxed text-muted">{step.detail}</p>
              </div>
              <div className="rounded-xl border border-brand/30 bg-brand/10 p-6">
                <p className="text-xs font-semibold tracking-[0.18em] text-brand-soft">WHAT YOU GET</p>
                <p className="mt-2 text-lg text-white">{step.outcome}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

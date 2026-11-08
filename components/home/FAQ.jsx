"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal, { Eyebrow } from "@/components/Reveal";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[1fr_1.4fr] md:py-32" data-cta="Book a Strategy Call" data-cta-href="/contact#book">
      <Reveal className="flex flex-col gap-5 md:sticky md:top-32 md:self-start">
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">Questions, answered.</h2>
        <p className="max-w-sm text-lg text-body">Can&apos;t find what you&apos;re looking for? Ask Results AI or get in touch.</p>
      </Reveal>
      <div className="border-t border-line">
        {faqs.map((f, i) => {
          const on = open === i;
          return (
            <div key={f.q} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  id={`faq-q-${i}`}
                  aria-expanded={on}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(on ? -1 : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold transition-colors hover:text-brand sm:text-xl"
                >
                  {f.q}
                  <span
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      on ? "rotate-45 border-brand bg-brand text-white" : "border-line text-ink"
                    }`}
                    aria-hidden="true"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {on && (
                  <motion.div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-2xl pb-6 text-lg leading-relaxed text-body">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Reveal, { Eyebrow } from "@/components/Reveal";
import { projectCategories, projects } from "@/lib/content";

const tones = {
  dark: { bg: "bg-ink", screen: "bg-white", accent: "bg-brand" },
  light: { bg: "bg-mist", screen: "bg-white", accent: "bg-ink" },
  blue: { bg: "bg-brand", screen: "bg-white", accent: "bg-ink" },
};

function Preview({ tone }) {
  const t = tones[tone] || tones.dark;
  return (
    <div className={`relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl ${t.bg}`} aria-hidden="true">
      <div className={`w-[68%] rounded-lg ${t.screen} p-3 shadow-2xl transition-transform duration-700 ease-out group-hover:-translate-y-3 group-hover:scale-[1.03]`}>
        <span className="block h-2 w-1/4 rounded-sm bg-ink" />
        <div className="mt-2.5 h-20 rounded bg-zinc-200 sm:h-24" />
        <div className="mt-2.5 grid grid-cols-4 gap-1.5">
          <span className="h-8 rounded bg-zinc-100" />
          <span className="h-8 rounded bg-zinc-100" />
          <span className="h-8 rounded bg-zinc-100" />
          <span className={`h-8 rounded ${t.accent}`} />
        </div>
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-semibold tracking-[0.14em] text-ink">DEMONSTRATION PROJECT</span>
    </div>
  );
}

export default function WorkShowcase() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="bg-mist py-24 md:py-32" data-cta="Start a Project" data-cta-href="/contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="flex flex-col gap-5">
            <Eyebrow>OUR WORK</Eyebrow>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">Selected projects</h2>
          </Reveal>
          <Link href="/work" className="flex min-h-11 items-center text-[13px] font-semibold tracking-[0.08em] text-brand hover:text-brand-dark">
            VIEW ALL WORK →
          </Link>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" role="group" aria-label="Filter projects by category">
          {projectCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`relative min-h-11 shrink-0 rounded-full px-5 text-sm font-medium transition-colors ${
                filter === c ? "text-white" : "text-ink hover:text-brand"
              }`}
            >
              {filter === c && <motion.span layoutId="work-filter" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
              >
                <Link href="/work" className="group block">
                  <Preview tone={p.tone} />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold">{p.title}</h3>
                      <p className="mt-1 text-sm text-body">{p.tags.join(" · ")}</p>
                    </div>
                    <span className="mt-1 text-brand transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-10 text-sm text-body">These are demonstration projects showing our design approach. Genuine client case studies will be added here.</p>
      </div>
    </section>
  );
}

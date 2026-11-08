"use client";

import { useState } from "react";
import Reveal, { Eyebrow } from "@/components/Reveal";

function Before() {
  return (
    <div className="absolute inset-0 flex flex-col gap-3 bg-[#f3f0e8] p-5 font-serif sm:p-8" aria-hidden="true">
      <div className="flex items-center justify-between border-b-4 border-double border-zinc-500 pb-2">
        <span className="text-lg font-bold text-red-700 sm:text-2xl">MY STORE!!</span>
        <span className="flex gap-2 text-[10px] text-blue-800 underline sm:text-xs">
          <span>Home</span><span>Shop</span><span>About</span><span>Blog</span><span>FAQ</span><span>Sale</span>
        </span>
      </div>
      <div className="flex items-center justify-center bg-yellow-300 py-2 text-center text-xs font-bold text-red-700 sm:text-sm">*** BIG SALE *** FREE SHIPPING *** LIMITED ***</div>
      <div className="grid flex-1 grid-cols-[1fr_1.4fr] gap-3">
        <div className="space-y-2 bg-zinc-300 p-2 text-[10px] text-zinc-700 sm:text-xs">
          <p>Categories</p><p>• Item one</p><p>• Item two</p><p>• Item three</p><p>• More</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col gap-1 border border-zinc-400 bg-white p-1">
              <div className="flex-1 bg-zinc-300" />
              <span className="h-1.5 w-full bg-zinc-400" />
              <span className="bg-green-600 py-0.5 text-center text-[7px] text-white sm:text-[9px]">BUY</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function After() {
  return (
    <div className="absolute inset-0 flex flex-col gap-4 bg-white p-5 sm:p-8" aria-hidden="true">
      <div className="flex items-center justify-between">
        <span className="h-3 w-24 rounded-sm bg-ink" />
        <span className="flex gap-4">
          <span className="h-2 w-10 rounded-sm bg-zinc-300" />
          <span className="h-2 w-10 rounded-sm bg-zinc-300" />
          <span className="h-2 w-10 rounded-sm bg-zinc-300" />
        </span>
      </div>
      <div className="relative flex flex-1 items-end overflow-hidden rounded-xl bg-ink p-5 sm:p-8">
        <span className="absolute right-6 top-6 h-28 w-28 rounded-full bg-brand/40 blur-3xl" />
        <div className="relative space-y-2.5">
          <span className="block h-4 w-48 rounded-sm bg-white sm:h-5 sm:w-64" />
          <span className="block h-2 w-32 rounded-sm bg-zinc-600" />
          <span className="mt-2 block h-8 w-28 rounded bg-brand" />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="space-y-1.5">
            <div className="h-14 rounded-md bg-zinc-200 sm:h-20" />
            <span className="block h-1.5 w-4/5 rounded-sm bg-zinc-400" />
            <span className="block h-1.5 w-2/5 rounded-sm bg-ink" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32" data-cta="Request a Website Review" data-cta-href="/contact#review">
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>BEFORE &amp; AFTER</Eyebrow>
          <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Small details. <span className="text-brand">Big difference.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg leading-relaxed text-body">
            Drag the handle to compare a cluttered store with a focused, conversion-led design: clear hierarchy, one strong call to action and products given room to breathe.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <div className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-line shadow-[0_40px_100px_-40px_rgba(11,11,15,0.35)] sm:aspect-[16/9]">
          <After />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <Before />
          </div>

          <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white backdrop-blur">BEFORE</span>
          <span className="absolute right-4 top-4 rounded-full bg-brand px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white">AFTER</span>

          <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(11,11,15,0.15)]" style={{ left: `${pos}%` }} aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 6 3 12 9 18" />
                <polyline points="15 6 21 12 15 18" />
              </svg>
            </span>
          </div>

          <label htmlFor="ba-range" className="sr-only">
            Compare before and after designs
          </label>
          <input
            id="ba-range"
            type="range"
            min="0"
            max="100"
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          />
        </div>
        <p className="mt-4 text-sm text-body">
          Conceptual demonstration created to illustrate design principles — not client work.
        </p>
      </Reveal>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import Reveal, { Eyebrow } from "@/components/Reveal";

const ease = [0.2, 0.7, 0.2, 1];

function Tile({ className = "", children, delay = 0, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-2xl border p-7 transition-[border-color,box-shadow] duration-500 sm:p-8 ${
        dark
          ? "border-white/10 bg-ink text-white hover:border-brand/60"
          : "border-line bg-white hover:border-brand/40 hover:shadow-[0_30px_60px_-30px_rgba(64,91,250,0.35)]"
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ValueBento() {
  return (
    <section id="about-us" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32" data-cta="Book a Strategy Call" data-cta-href="/contact#book">
      <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-end">
        <Reveal className="flex flex-col gap-5">
          <Eyebrow>WHY WE&apos;RE DIFFERENT</Eyebrow>
          <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            Your website and your marketing should work as <span className="text-brand">one system.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl text-lg leading-relaxed text-body">
            Most businesses hire one team for design and another for marketing — and the two never meet. We bring both together: great campaigns bring people to your store, and a great store turns them into customers.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-6">
        {/* Website design — large */}
        <Tile dark className="md:col-span-4 md:row-span-2">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/25 blur-[90px] transition-opacity duration-700 group-hover:opacity-100 md:opacity-60" aria-hidden="true" />
          <div className="relative flex h-full flex-col">
            <span className="text-xs font-semibold tracking-[0.2em] text-brand-soft">DESIGN &amp; DEVELOPMENT</span>
            <h3 className="mt-4 max-w-md font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Professional websites &amp; e-commerce development</h3>
            <p className="mt-4 max-w-md text-muted">Custom Shopify stores that look premium, load fast and guide visitors to checkout.</p>
            <div className="mt-8 grid flex-1 grid-cols-5 items-end gap-3" aria-hidden="true">
              <div className="col-span-3 rounded-t-lg border border-b-0 border-white/10 bg-white/[0.04] p-3 transition-transform duration-700 group-hover:-translate-y-2">
                <div className="mb-3 flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
                <div className="h-20 rounded bg-white/10" />
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <span className="h-12 rounded bg-white/10" />
                  <span className="h-12 rounded bg-white/10" />
                  <span className="h-12 rounded bg-brand/70" />
                </div>
              </div>
              <div className="col-span-2 mx-auto w-3/4 rounded-t-2xl border border-b-0 border-white/10 bg-white/[0.04] p-2.5 transition-transform delay-100 duration-700 group-hover:-translate-y-4">
                <div className="h-24 rounded-lg bg-white/10" />
                <span className="mt-2.5 block h-6 rounded bg-brand" />
              </div>
            </div>
          </div>
        </Tile>

        {/* Marketing — tall */}
        <Tile className="md:col-span-2 md:row-span-2" delay={0.08}>
          <span className="text-xs font-semibold tracking-[0.2em] text-brand">MARKETING</span>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight">Strategic digital marketing</h3>
          <p className="mt-3 text-body">Paid ads, social, SEO and email — planned together, measured honestly.</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Meta", "Google", "TikTok", "SEO", "Klaviyo", "Social"].map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors group-hover:border-brand/40"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </Tile>

        {/* Acquisition — wide */}
        <Tile className="md:col-span-3" delay={0.1}>
          <span className="text-xs font-semibold tracking-[0.2em] text-brand">ACQUISITION</span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">Customer acquisition</h3>
          <p className="mt-3 max-w-sm text-body">Reach the buyers most likely to purchase — not just more traffic.</p>
          <svg viewBox="0 0 200 60" className="absolute bottom-6 right-6 h-14 w-40 text-brand" aria-hidden="true">
            <motion.path
              d="M2 55 C 40 50, 60 40, 90 34 S 150 18, 198 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.6, ease }}
            />
          </svg>
        </Tile>

        {/* CRO */}
        <Tile className="bg-mist md:col-span-3" delay={0.14}>
          <span className="text-xs font-semibold tracking-[0.2em] text-brand">OPTIMIZATION</span>
          <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">Conversion optimization</h3>
          <p className="mt-3 max-w-sm text-body">Find where visitors drop off and turn more of them into customers.</p>
          <div className="mt-6 flex items-end gap-2" aria-hidden="true">
            {[38, 52, 46, 64, 72, 88].map((h, i) => (
              <motion.span
                key={i}
                className={`w-6 rounded-t ${i === 5 ? "bg-brand" : "bg-ink/15"}`}
                initial={{ height: 0 }}
                whileInView={{ height: h }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.1 * i, ease }}
              />
            ))}
          </div>
        </Tile>

        {/* Retention */}
        <Tile dark className="md:col-span-6" delay={0.1}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-brand-soft">RETENTION</span>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">Customer retention that keeps them coming back</h3>
            </div>
            <div className="flex items-center gap-3" aria-hidden="true">
              {["Welcome", "Cart", "Post-purchase", "Win-back"].map((s, i) => (
                <span key={s} className="flex items-center gap-3">
                  <span className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 transition-colors group-hover:border-brand/50">{s}</span>
                  {i < 3 && <span className="hidden text-brand-soft sm:inline">→</span>}
                </span>
              ))}
            </div>
          </div>
        </Tile>
      </div>
    </section>
  );
}

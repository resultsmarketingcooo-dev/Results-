"use client";

import { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import Button from "@/components/Button";

const ease = [0.2, 0.7, 0.2, 1];
const lines = [
  { text: "We Build Better Websites.", accent: false },
  { text: "We Create Smarter Marketing.", accent: false },
  { text: "We Drive Growth.", accent: true },
];

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yDesk = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const yPhone = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yGlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 160]);

  // pointer tilt for the mockup composition
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section ref={ref} className="grid-lines relative overflow-hidden bg-ink text-white" data-cta="Book a Strategy Call" data-cta-href="/contact#book">
      {/* soft blue lighting */}
      <motion.div
        aria-hidden="true"
        style={{ y: yGlow }}
        className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] animate-glow rounded-full bg-brand/30 blur-[140px]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-60 -left-40 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-24 pt-16 sm:px-8 md:pb-32 md:pt-24 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-muted"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            PREMIUM DIGITAL MARKETING &amp; E-COMMERCE GROWTH
          </motion.p>

          <h1 className="font-display text-[clamp(2.6rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-[-0.035em]">
            {lines.map((l, i) => (
              <span key={l.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${l.accent ? "text-brand-soft" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.14, ease }}
                >
                  {l.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease }}
            className="max-w-xl text-lg leading-relaxed text-muted"
          >
            Helping ambitious e-commerce businesses create exceptional online experiences, attract the right customers, and turn opportunities into measurable results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="flex flex-wrap gap-3"
          >
            <Button href="/contact">LET&apos;S GROW YOUR BUSINESS</Button>
            <Button href="#explore" variant="ghostDark" arrow={false}>
              EXPLORE OUR SERVICES
            </Button>
          </motion.div>
        </div>

        {/* Mockup composition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          className="relative mx-auto aspect-[1.08] w-full max-w-[600px] [perspective:1400px]"
          role="img"
          aria-label="Illustration of a premium online store on desktop and mobile"
        >
          <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative h-full w-full [transform-style:preserve-3d]">
            <motion.div style={{ y: yDesk }} className="absolute left-0 right-[12%] top-[4%]">
              <DesktopMockup />
            </motion.div>
            <motion.div style={{ y: yPhone }} className="absolute bottom-[2%] right-0 w-[34%]">
              <PhoneMockup />
            </motion.div>
            <FloatingTag className="left-[-4%] top-[58%]" delay={1.1} label="Mobile-first design" />
            <FloatingTag className="right-[30%] top-[-2%]" delay={1.3} label="Built to convert" dot />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function FloatingTag({ className, label, delay, dot }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute z-10 ${className}`}
    >
      <div className="flex animate-float items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] backdrop-blur-md">
        <span className={`h-1.5 w-1.5 rounded-full ${dot ? "bg-emerald-400" : "bg-brand-soft"}`} aria-hidden="true" />
        {label}
      </div>
    </motion.div>
  );
}

function DesktopMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_40px_120px_-30px_rgba(64,91,250,0.55)]">
      <div className="flex items-center gap-1.5 border-b border-line bg-mist px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-zinc-300" />
        <span className="ml-3 h-5 flex-1 rounded bg-white" />
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <span className="h-3 w-20 rounded-sm bg-ink" />
          <span className="flex gap-3">
            <span className="h-2 w-9 rounded-sm bg-zinc-300" />
            <span className="h-2 w-9 rounded-sm bg-zinc-300" />
            <span className="h-2 w-9 rounded-sm bg-zinc-300" />
          </span>
        </div>
        <div className="relative flex h-32 flex-col justify-end gap-2 overflow-hidden rounded-lg bg-ink p-5 sm:h-40">
          <span className="absolute right-4 top-4 h-20 w-20 rounded-full bg-brand/40 blur-2xl" />
          <span className="h-3.5 w-3/5 rounded-sm bg-white" />
          <span className="h-2 w-2/5 rounded-sm bg-zinc-600" />
          <span className="mt-1 h-7 w-24 animate-pulse-ring rounded bg-brand" />
        </div>
        <div className="grid grid-cols-3 gap-3">
          {["bg-zinc-200", "bg-zinc-300", "bg-zinc-200"].map((c, i) => (
            <div key={i} className="space-y-2">
              <div className={`relative h-20 overflow-hidden rounded-md ${c} sm:h-24`}>
                <span className="shine absolute inset-y-0 w-1/2 -skew-x-12 bg-white/50" style={{ animationDelay: `${i * 0.4}s` }} />
              </div>
              <span className="block h-2 w-4/5 rounded-sm bg-zinc-400" />
              <span className="block h-2 w-2/5 rounded-sm bg-ink" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="animate-float rounded-[28px] border-[5px] border-zinc-800 bg-ink p-1.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
      <div className="flex aspect-[9/18] flex-col gap-2.5 rounded-[20px] bg-white p-3">
        <div className="h-[42%] rounded-lg bg-zinc-200" />
        <span className="h-2.5 w-4/5 rounded-sm bg-ink" />
        <span className="h-2 w-1/2 rounded-sm bg-zinc-400" />
        <span className="flex gap-1.5">
          <span className="h-4 w-4 rounded-full bg-ink" />
          <span className="h-4 w-4 rounded-full bg-zinc-300" />
          <span className="h-4 w-4 rounded-full bg-brand" />
        </span>
        <span className="mt-auto h-8 animate-pulse-ring rounded-md bg-brand" />
      </div>
    </div>
  );
}

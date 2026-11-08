"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Logo from "@/components/Logo";
import { navigation } from "@/lib/site";
import { divisions } from "@/lib/content";

function slugify(s) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change and on Escape.
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openMega = () => {
    clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 160);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled || megaOpen || mobileOpen
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-ink"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Logo tone="light" />

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            if (item.mega) {
              return (
                <div key={item.href} className="relative" onMouseEnter={openMega} onMouseLeave={scheduleClose}>
                  <button
                    type="button"
                    aria-expanded={megaOpen}
                    aria-controls="mega-menu"
                    onClick={() => setMegaOpen((v) => !v)}
                    className={`relative flex min-h-11 items-center gap-1.5 px-3.5 text-[15px] transition-colors ${
                      active || megaOpen ? "text-white" : "text-muted hover:text-white"
                    }`}
                  >
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                      className={`transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    {active && <ActiveBar />}
                  </button>
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative flex min-h-11 items-center px-3.5 text-[15px] transition-colors ${
                  active ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {item.label}
                {active && <ActiveBar />}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact#book"
            className="hidden min-h-11 items-center rounded-md bg-brand px-5 text-[13px] font-semibold tracking-[0.08em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-10px_rgba(64,91,250,0.9)] sm:inline-flex"
          >
            Book a Call
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[6px] h-0.5 w-5 bg-white transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-3 h-0.5 w-5 bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Services mega menu (desktop) */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            id="mega-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            onMouseEnter={openMega}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden border-b border-white/10 bg-ink/95 backdrop-blur-xl lg:block"
          >
            <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-8 py-10">
              {divisions.map((d) => (
                <div key={d.id} className="col-span-5">
                  <div className="mb-5 flex items-baseline gap-3">
                    <span className="font-display text-sm font-bold text-brand-soft">{d.number}</span>
                    <h2 className="font-display text-lg font-semibold text-white">{d.title}</h2>
                  </div>
                  <ul className="grid grid-cols-2 gap-x-6">
                    {d.services.map((s) => (
                      <li key={s}>
                        <Link
                          href={`/services#${slugify(s)}`}
                          className="block border-b border-white/5 py-2.5 text-[14px] text-muted transition-all duration-300 hover:pl-1.5 hover:text-white"
                        >
                          {s}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-2 flex flex-col justify-between rounded-lg border border-white/10 bg-white/[0.03] p-6">
                <p className="text-[14px] leading-relaxed text-muted">Not sure what you need? We'll review your store and recommend next steps.</p>
                <Link href="/contact#review" className="mt-6 text-[13px] font-semibold tracking-[0.08em] text-brand-soft hover:text-white">
                  Free website review →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-[77px] overflow-y-auto bg-ink px-5 pb-10 pt-4 lg:hidden"
          >
            <ul>
              {navigation.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={`flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-semibold ${
                      isActive(pathname, item.href) ? "text-brand-soft" : "text-white"
                    }`}
                  >
                    {item.label}
                    <span aria-hidden="true" className="text-muted">→</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <Link
              href="/contact#book"
              onClick={() => setMobileOpen(false)}
              className="mt-8 flex min-h-[54px] items-center justify-center rounded-md bg-brand text-[13px] font-semibold tracking-[0.1em] text-white"
            >
              BOOK A CALL
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function ActiveBar() {
  return (
    <motion.span
      layoutId="nav-active"
      aria-hidden="true"
      className="absolute inset-x-3.5 -bottom-[17px] h-0.5 bg-brand"
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
    />
  );
}

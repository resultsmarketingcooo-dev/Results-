"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappLink } from "@/lib/site";

// Results AI — preview. Guided answers only for now; the live AI conversation
// (Anthropic API via a secure server route) is connected in a later stage.

const paths = {
  new: {
    label: "I'm launching a new store",
    reply:
      "Great — a strong foundation makes everything after it easier. For new stores we usually start with Website Design and Shopify Development, then plan your launch marketing.",
    links: [
      { label: "Start your store project", href: "/contact?type=new" },
      { label: "Explore website services", href: "/#explore" },
    ],
  },
  existing: {
    label: "I already have a store",
    reply:
      "Then the first step is finding what's holding sales back. A Website Review or Store Optimization audit shows exactly what to fix first, and our marketing services help bring in more of the right buyers.",
    links: [
      { label: "Request a website review", href: "/contact#review" },
      { label: "Explore growth services", href: "/#explore" },
    ],
  },
  call: {
    label: "Book a consultation",
    reply: "Happy to arrange that. Choose a time that suits you and we'll talk through your goals.",
    links: [{ label: "Book a call", href: "/contact#book" }],
  },
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const panelRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const choose = (key) => {
    const p = paths[key];
    setMessages((m) => [...m, { from: "user", text: p.label }, { from: "ai", text: p.reply, links: p.links }]);
  };

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const wa = whatsappLink(`Hi Results Marketing Co., ${text}`);
    setMessages((m) => [
      ...m,
      { from: "user", text },
      {
        from: "ai",
        text: "Thanks for sharing. Full conversations with Results AI are coming soon — for now, a member of our team can help you directly.",
        links: [
          { label: "Send a project enquiry", href: "/contact" },
          ...(wa ? [{ label: "Message us on WhatsApp", href: wa, external: true }] : []),
        ],
      },
    ]);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-label="Results AI, your growth consultant"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="fixed bottom-24 right-4 z-[70] flex max-h-[min(620px,calc(100dvh_-_120px))] w-[min(400px,calc(100vw_-_32px))] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink/95 text-white shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:right-6"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-sm font-extrabold">
                R
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-ink bg-emerald-400" aria-hidden="true" />
              </span>
              <div className="flex-1 leading-tight">
                <p className="text-[15px] font-semibold">Results AI</p>
                <p className="text-xs text-muted">Your growth consultant · Preview</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex h-11 w-11 items-center justify-center rounded-md text-muted hover:text-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </svg>
              </button>
            </div>

            <div ref={listRef} className="flex min-h-[240px] flex-1 flex-col gap-3 overflow-y-auto px-5 py-5" aria-live="polite">
              <Bubble from="ai" text="Hi, I'm Results AI. I can help you work out what your store needs next. Are you launching a new store or growing an existing one?" />
              {messages.map((m, i) => (
                <Bubble key={i} {...m} onNavigate={() => setOpen(false)} />
              ))}
              {messages.length === 0 && (
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {Object.entries(paths).map(([key, p]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => choose(key)}
                      className="min-h-11 rounded-full border border-white/15 px-4 text-[13px] transition-colors hover:border-brand hover:bg-brand"
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={send} className="flex gap-2 border-t border-white/10 p-3">
              <label htmlFor="results-ai-input" className="sr-only">
                Message Results AI
              </label>
              <input
                id="results-ai-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tell us about your store…"
                maxLength={500}
                className="min-h-12 min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none"
              />
              <button type="submit" aria-label="Send message" className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
            </form>
            <p className="px-5 pb-3 text-[11px] text-muted">Please don't share passwords or payment details in chat.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close Results AI" : "Chat with Results AI, your growth consultant"}
        className="fixed bottom-5 right-4 z-[70] flex min-h-14 items-center gap-3 rounded-full border border-white/15 bg-ink py-2 pl-2 pr-5 text-white shadow-[0_16px_40px_-14px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:-translate-y-0.5 sm:right-6"
      >
        <span className="flex h-10 w-10 animate-pulse-ring items-center justify-center rounded-full bg-brand">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <span className="hidden flex-col items-start leading-tight sm:flex">
          <span className="text-sm font-semibold">Results AI</span>
          <span className="text-xs text-muted">Your growth consultant</span>
        </span>
      </button>
    </>
  );
}

function Bubble({ from, text, links, onNavigate }) {
  const ai = from === "ai";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`max-w-[88%] text-sm leading-relaxed ${
        ai ? "self-start rounded-[4px_16px_16px_16px] bg-white/[0.06] px-4 py-3" : "self-end rounded-[16px_4px_16px_16px] bg-brand px-4 py-3"
      }`}
    >
      <p>{text}</p>
      {links && links.length > 0 && (
        <div className="mt-3 flex flex-col gap-1.5">
          {links.map((l) =>
            l.external ? (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-soft hover:text-white">
                {l.label} →
              </a>
            ) : (
              <Link key={l.href} href={l.href} onClick={onNavigate} className="font-semibold text-brand-soft hover:text-white">
                {l.label} →
              </Link>
            )
          )}
        </div>
      )}
    </motion.div>
  );
}

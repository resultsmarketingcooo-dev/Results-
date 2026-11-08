"use client";

import { useState } from "react";

// Newsletter sign-up. Saving to Supabase is connected in the leads stage;
// until then the form validates and tells visitors honestly that sign-up opens soon.
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("invalid");
      return;
    }
    setStatus("soon");
  };

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3">
      <label htmlFor="newsletter-email" className="text-sm text-muted">
        Growth insights for store owners, straight to your inbox.
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus("idle");
          }}
          placeholder="you@yourstore.com"
          aria-invalid={status === "invalid"}
          aria-describedby="newsletter-msg"
          className="min-h-12 min-w-0 flex-1 rounded-md border border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-muted focus:border-brand focus:outline-none"
        />
        <button type="submit" className="min-h-12 rounded-md bg-brand px-5 text-[13px] font-semibold tracking-[0.06em] text-white transition-colors hover:bg-brand-dark">
          Subscribe
        </button>
      </div>
      <p id="newsletter-msg" className="min-h-5 text-xs" role="status">
        {status === "invalid" && <span className="text-red-300">Please enter a valid email address.</span>}
        {status === "soon" && <span className="text-brand-soft">Thanks! Newsletter sign-up opens very soon — check back shortly.</span>}
      </p>
    </form>
  );
}

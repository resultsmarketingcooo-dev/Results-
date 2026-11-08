import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import NewsletterForm from "@/components/NewsletterForm";
import { navigation, site } from "@/lib/site";
import { divisions } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      {/* final CTA band */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Ready to start your project?</p>
            <p className="mt-3 max-w-xl text-muted">Tell us where your store is today and where you want it to go.</p>
          </div>
          <Button href="/contact">START A PROJECT</Button>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo tone="light" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            A premium digital marketing and e-commerce growth agency helping new and established store owners build better websites and grow.
          </p>
          <div className="mt-8 max-w-sm">
            <NewsletterForm />
          </div>
        </div>

        <nav aria-label="Footer" className="md:col-span-2">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-white">COMPANY</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-muted transition-colors hover:text-white">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-white">SERVICES</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[...divisions[0].services.slice(0, 4), ...divisions[1].services.slice(0, 4)].map((s) => (
              <li key={s}>
                <Link href="/services" className="text-muted transition-colors hover:text-white">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-xs font-semibold tracking-[0.18em] text-white">CONTACT</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
            )}
            <li>
              <Link href="/contact" className="text-muted transition-colors hover:text-white">
                Send a project enquiry
              </Link>
            </li>
            <li>
              <Link href="/contact#book" className="text-muted transition-colors hover:text-white">
                Book a consultation
              </Link>
            </li>
            {site.socials.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-white">
                  {s.label} · {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} {site.name} All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>

      {/* oversized wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none select-none px-5 pb-6 text-center font-display text-[18vw] font-extrabold leading-[0.8] tracking-[0.06em] text-white/[0.04]"
      >
        RESULTS
      </p>
    </footer>
  );
}

import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { divisions } from "@/lib/content";

export const metadata = {
  title: "Services",
  description: "Website design, Shopify development, digital marketing, paid advertising, email marketing, SEO and conversion optimization for e-commerce businesses.",
};

function slugify(s) {
  return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ServicesPage() {
  return (
    <>
      <PageIntro eyebrow="OUR SERVICES" title="Everything your store needs to launch, sell and grow.">
        Two specialist divisions working as one team — so your website and your marketing support each other.
      </PageIntro>
      {divisions.map((d, i) => (
        <section key={d.id} className={i % 2 ? "bg-mist" : "bg-white"}>
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.4fr] md:py-28">
            <Reveal className="md:sticky md:top-32 md:self-start">
              <span className="font-display text-7xl font-extrabold text-brand">{d.number}</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">{d.title}</h2>
              <p className="mt-4 text-lg text-body">{d.blurb}</p>
              <div className="mt-8">
                <Button href="/contact">DISCUSS YOUR PROJECT</Button>
              </div>
            </Reveal>
            <ul className="border-t border-line">
              {d.services.map((s) => (
                <li key={s} id={slugify(s)} className="scroll-mt-28 border-b border-line">
                  <Link href={`/contact?service=${slugify(s)}`} className="group flex items-center justify-between py-6 font-display text-xl font-semibold transition-all duration-300 hover:pl-2 hover:text-brand">
                    {s}
                    <span className="text-brand opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        <p className="text-sm text-body">Detailed pages for each service — with process, deliverables and FAQs — are being added.</p>
      </section>
    </>
  );
}

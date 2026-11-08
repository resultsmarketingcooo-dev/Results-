import PageIntro from "@/components/PageIntro";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Start a project, request a free website review or book a consultation with Results Marketing Co.",
};

export default function ContactPage() {
  const wa = whatsappLink();
  return (
    <>
      <PageIntro eyebrow="CONTACT" title="Let's talk about your store.">
        Whether you&apos;re launching or growing, tell us where you are today and we&apos;ll recommend the best next step.
      </PageIntro>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-20 sm:px-8 md:grid-cols-3">
        <Reveal className="flex flex-col gap-4 rounded-2xl border border-line p-8" once>
          <h2 id="start" className="scroll-mt-28 font-display text-2xl font-bold">Start a project</h2>
          <p className="text-body">Our step-by-step project discovery form is being connected. In the meantime, reach us directly below.</p>
        </Reveal>
        <Reveal delay={0.06} className="flex flex-col gap-4 rounded-2xl border border-line p-8" once>
          <h2 id="review" className="scroll-mt-28 font-display text-2xl font-bold">Free website review</h2>
          <p className="text-body">Send us your store link and the challenge you&apos;re facing, and we&apos;ll take a look.</p>
        </Reveal>
        <Reveal delay={0.12} className="flex flex-col gap-4 rounded-2xl bg-ink p-8 text-white" once>
          <h2 id="book" className="scroll-mt-28 font-display text-2xl font-bold">Book a consultation</h2>
          <p className="text-muted">A focused conversation about your goals and how we can help.</p>
          {site.bookingUrl && (
            <div className="mt-2">
              <Button href={site.bookingUrl}>BOOK A CALL</Button>
            </div>
          )}
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="flex flex-col gap-4 rounded-2xl bg-mist p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="font-display text-xl font-bold">Reach us directly</p>
          <div className="flex flex-wrap gap-3">
            {site.email && (
              <Button href={`mailto:${site.email}`} variant="dark" arrow={false}>
                {site.email}
              </Button>
            )}
            {wa && (
              <Button href={wa} variant="ghostLight" arrow={false}>
                WHATSAPP
              </Button>
            )}
            {site.socials.map((s) => (
              <Button key={s.href} href={s.href} variant="ghostLight" arrow={false}>
                {s.label.toUpperCase()} {s.handle}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Reveal from "@/components/Reveal";
import Button from "@/components/Button";

export default function FinalCTA() {
  return (
    <section className="grid-lines relative overflow-hidden bg-ink text-white" data-cta="Start a Project" data-cta-href="/contact">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full bg-brand/25 blur-[150px]" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-28 sm:px-8 md:py-40">
        <Reveal>
          <h2 className="max-w-5xl font-display text-[clamp(2.8rem,7vw,6.2rem)] font-extrabold leading-[0.96] tracking-[-0.04em]">
            Your Next Chapter of Growth <span className="text-brand-soft">Starts Here.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Whether you&apos;re preparing to launch your first online store or looking to improve the performance of an existing business, Results Marketing Co. is ready to explore the possibilities with you.
          </p>
        </Reveal>
        <Reveal delay={0.2} className="flex flex-wrap gap-3">
          <Button href="/contact">START A PROJECT</Button>
          <Button href="/contact#book" variant="ghostDark" arrow={false}>
            BOOK A CONSULTATION
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

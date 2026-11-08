import Reveal, { Eyebrow } from "@/components/Reveal";

export default function PageIntro({ eyebrow, title, children }) {
  return (
    <section className="grid-lines relative overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand/25 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 md:pb-28 md:pt-24">
        <Reveal className="flex max-w-3xl flex-col gap-6" once>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h1 className="font-display text-[clamp(2.4rem,5.4vw,4.6rem)] font-extrabold leading-[1.0] tracking-[-0.035em]">{title}</h1>
          {children && <div className="max-w-2xl text-lg leading-relaxed text-muted">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function ComingSoon({ children }) {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="rounded-2xl border border-dashed border-line bg-mist p-8 text-body sm:p-10">{children}</div>
    </section>
  );
}

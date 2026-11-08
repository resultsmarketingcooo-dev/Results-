import Reveal from "@/components/Reveal";

// Ready for genuine reviews. Add real testimonials to the array below
// (name, business, quote) once clients give permission.
const testimonials = [];

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-white">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <Reveal>
          <span className="block font-display text-8xl leading-[0.6] text-brand" aria-hidden="true">
            &ldquo;
          </span>
          {testimonials.length === 0 ? (
            <>
              <p className="mt-6 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-snug tracking-tight">
                Client stories are on their way. We&apos;ll share genuine reviews from the businesses we work with right here.
              </p>
              <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-body">CLIENT TESTIMONIALS</p>
            </>
          ) : (
            testimonials.map((t) => (
              <figure key={t.name} className="mt-6">
                <blockquote className="font-display text-2xl font-semibold leading-snug">{t.quote}</blockquote>
                <figcaption className="mt-4 text-sm text-body">
                  {t.name} · {t.business}
                </figcaption>
              </figure>
            ))
          )}
        </Reveal>
      </div>
    </section>
  );
}

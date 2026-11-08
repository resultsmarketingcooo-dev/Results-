import Reveal, { Eyebrow } from "@/components/Reveal";

const reasons = [
  ["Strategic approach", "Every project starts with your goals, not a template."],
  ["Professional experiences", "Websites that look premium and earn customer trust."],
  ["Customer-focused marketing", "We market to the people most likely to buy."],
  ["Data-informed decisions", "Recommendations based on your numbers, not guesswork."],
  ["Attention to detail", "The small things that make a store feel right."],
  ["Transparent communication", "Clear updates, honest advice, no jargon."],
  ["Tailored solutions", "Built around your store, budget and stage."],
  ["Continuous improvement", "We keep testing and refining after launch."],
];

export default function WhyUs() {
  return (
    <section className="bg-white py-24 md:py-32" data-cta="Discuss My Project" data-cta-href="/contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex max-w-3xl flex-col gap-5">
          <Eyebrow>WHY RESULTS MARKETING CO.</Eyebrow>
          <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.6rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">
            A partner that thinks about your <span className="text-brand">whole business.</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([title, text], i) => (
            <Reveal key={title} delay={(i % 4) * 0.06} className="group relative border-b border-r border-line p-8 transition-colors duration-500 hover:bg-mist">
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-brand transition-all duration-500 group-hover:w-full" aria-hidden="true" />
              <span className="font-display text-sm font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-body">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

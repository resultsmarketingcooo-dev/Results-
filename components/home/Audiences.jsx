import Reveal, { Eyebrow } from "@/components/Reveal";
import Button from "@/components/Button";

const newPoints = ["Professional, trustworthy store design", "Brand presence set up properly", "Launch marketing plan"];
const existingPoints = ["Find where you're losing customers", "Improve the shopping experience", "Smarter acquisition & retention"];

function Check({ dark }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={dark ? "#8A9BFF" : "#405BFA"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="mt-0.5 shrink-0">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Audiences() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-mist px-5 py-24 sm:px-12 lg:px-16 xl:pl-[max(4rem,calc((100vw_-_80rem)/2_+_2rem))]" data-cta="Build My Website" data-cta-href="/contact?type=new">
        <Reveal className="flex max-w-xl flex-col gap-6">
          <Eyebrow>FOR NEW BUSINESSES</Eyebrow>
          <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            Every Successful Online Business Starts With a Strong Foundation.
          </h2>
          <p className="text-lg leading-relaxed text-body">
            Launching your first store? We design a professional website, establish your online presence and prepare you for growth — so your first impression counts.
          </p>
          <ul className="space-y-3">
            {newPoints.map((p) => (
              <li key={p} className="flex gap-3 text-ink">
                <Check />
                {p}
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Button href="/contact?type=new" variant="dark">
              START YOUR STORE PROJECT
            </Button>
          </div>
        </Reveal>
      </div>

      <div className="relative overflow-hidden bg-ink px-5 py-24 text-white sm:px-12 lg:px-16" data-cta="Improve My Store" data-cta-href="/contact?type=existing">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brand/25 blur-[110px]" />
        <Reveal delay={0.1} className="relative flex max-w-xl flex-col gap-6">
          <Eyebrow tone="dark">FOR EXISTING BUSINESSES</Eyebrow>
          <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] font-extrabold leading-[1.08] tracking-[-0.025em]">
            More Than Just Visitors. Build a Store That Works Harder for Your Business.
          </h2>
          <p className="text-lg leading-relaxed text-muted">
            Getting traffic but not enough orders? We improve your website, identify conversion opportunities and build better marketing to attract — and keep — the right customers.
          </p>
          <ul className="space-y-3">
            {existingPoints.map((p) => (
              <li key={p} className="flex gap-3 text-white/90">
                <Check dark />
                {p}
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <Button href="/contact?type=existing">IMPROVE MY STORE</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

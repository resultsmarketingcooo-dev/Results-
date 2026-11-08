import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import ValueBento from "@/components/home/ValueBento";
import Audiences from "@/components/home/Audiences";
import ServiceExplorer from "@/components/home/ServiceExplorer";
import WhyUs from "@/components/home/WhyUs";
import GrowthJourney from "@/components/home/GrowthJourney";
import BeforeAfter from "@/components/home/BeforeAfter";
import WorkShowcase from "@/components/home/WorkShowcase";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import ContextualCTA from "@/components/ContextualCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <ValueBento />
      <Audiences />
      <ServiceExplorer />
      <WhyUs />
      <GrowthJourney />
      <BeforeAfter />
      <WorkShowcase />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <ContextualCTA />
    </>
  );
}

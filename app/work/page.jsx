import PageIntro from "@/components/PageIntro";
import WorkShowcase from "@/components/home/WorkShowcase";

export const metadata = {
  title: "Our Work",
  description: "Shopify websites, e-commerce designs, redesigns and marketing work by Results Marketing Co.",
};

export default function WorkPage() {
  return (
    <>
      <PageIntro eyebrow="OUR WORK" title="Design and growth work for e-commerce brands.">
        Browse by category. Projects marked “Demonstration project” illustrate our approach; genuine client case studies will be added as they&apos;re published.
      </PageIntro>
      <WorkShowcase />
    </>
  );
}

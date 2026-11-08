import PageIntro, { ComingSoon } from "@/components/PageIntro";

export const metadata = {
  title: "Insights",
  description: "Practical advice on e-commerce websites, Shopify, marketing and conversion optimization.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="INSIGHTS" title="Ideas to help your store grow.">
        Practical articles on store design, marketing and conversion — written for store owners.
      </PageIntro>
      <ComingSoon>Our first articles are on the way. Subscribe to the newsletter in the footer to hear when they&apos;re published.</ComingSoon>
    </>
  );
}

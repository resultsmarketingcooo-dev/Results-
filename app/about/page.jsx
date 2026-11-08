import PageIntro, { ComingSoon } from "@/components/PageIntro";

export const metadata = {
  title: "About",
  description: "Results Marketing Co. is a premium digital marketing and e-commerce growth agency for new and established online stores.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="ABOUT US" title="A growth partner for ambitious online stores.">
        We combine professional website design, e-commerce development and strategic marketing — because a great store and great marketing work best together.
      </PageIntro>
      <ComingSoon>
        Our full story — mission, philosophy, team and the way we work — is being prepared. Team and agency photography will be added here as it&apos;s taken.
      </ComingSoon>
    </>
  );
}

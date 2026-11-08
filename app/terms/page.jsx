import PageIntro, { ComingSoon } from "@/components/PageIntro";

export const metadata = { title: "Terms and Conditions" };

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="LEGAL" title="Terms and Conditions" />
      <ComingSoon>Our terms and conditions are being finalised and will be published here.</ComingSoon>
    </>
  );
}

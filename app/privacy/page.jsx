import PageIntro, { ComingSoon } from "@/components/PageIntro";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="LEGAL" title="Privacy Policy" />
      <ComingSoon>Our privacy policy is being finalised and will be published here before any personal information is collected through this website.</ComingSoon>
    </>
  );
}

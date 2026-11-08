import PageIntro from "@/components/PageIntro";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <PageIntro eyebrow="404" title="This page doesn't exist.">
      <p>It may have moved. Let&apos;s get you back on track.</p>
      <div className="mt-8">
        <Button href="/">BACK TO HOME</Button>
      </div>
    </PageIntro>
  );
}

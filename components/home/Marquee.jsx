const items = [
  "Shopify Store Design",
  "Conversion Optimization",
  "Meta Advertising",
  "Klaviyo Automation",
  "Website Audits",
  "Google Advertising",
  "TikTok Advertising",
  "Search Engine Optimization",
];

function Row({ hidden }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <span key={t} className="flex items-center gap-10">
          <span>{t}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="opacity-70">
            <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-wrap overflow-hidden bg-brand py-5 text-white">
      <div className="flex w-max animate-marquee whitespace-nowrap font-display text-xl font-semibold tracking-tight sm:text-2xl">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

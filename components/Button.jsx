import Link from "next/link";

const base =
  "group relative inline-flex min-h-[52px] items-center justify-center gap-2 overflow-hidden rounded-md px-7 text-[13px] font-semibold tracking-[0.1em] transition-all duration-300 will-change-transform hover:-translate-y-0.5";

const variants = {
  primary: "bg-brand text-white shadow-[0_10px_30px_-12px_rgba(64,91,250,0.8)] hover:shadow-[0_16px_40px_-12px_rgba(64,91,250,0.95)]",
  ghostDark: "border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
  dark: "bg-ink text-white hover:bg-ink-3",
  ghostLight: "border border-ink/15 text-ink hover:border-ink/40",
};

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Button({ href, children, variant = "primary", arrow = true, className = "", ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const external = typeof href === "string" && /^https?:/.test(href);
  const inner = (
    <>
      {/* moving sheen on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100"
      />
      <span className="relative">{children}</span>
      {arrow && <span className="relative"><Arrow /></span>}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {inner}
    </Link>
  );
}

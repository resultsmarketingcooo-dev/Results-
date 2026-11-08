import Link from "next/link";

/**
 * The Results Marketing Co. mark: a bold P with an upward-right arrow.
 * `tone="light"` = white P (for dark backgrounds), `tone="dark"` = black P.
 */
export function LogoMark({ tone = "light", className = "", title }) {
  const letter = tone === "light" ? "#FFFFFF" : "#0B0B0F";
  return (
    <svg
      viewBox="0 0 100 104"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <path
        fill={letter}
        fillRule="evenodd"
        d="M4 6H44a24 24 0 0 1 0 48H19v42H4Z M19 20H43a10 10 0 0 1 0 20H19Z"
      />
      <path
        d="M48 100L84 64"
        stroke="#405BFA"
        strokeWidth="12"
        strokeLinecap="butt"
      />
      <path fill="#405BFA" d="M68 46H96V74Z" />
    </svg>
  );
}

export default function Logo({ tone = "light", showTagline = true, className = "", href = "/" }) {
  const word = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-muted" : "text-body";
  return (
    <Link
      href={href}
      aria-label="Results Marketing Co. — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <LogoMark tone={tone} className="h-9 w-auto shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[19px] font-extrabold tracking-[0.2em] ${word}`}>RESULTS</span>
        {showTagline && (
          <span className={`mt-1.5 text-[8.5px] font-semibold tracking-[0.48em] ${sub}`}>MARKETING CO.</span>
        )}
      </span>
    </Link>
  );
}

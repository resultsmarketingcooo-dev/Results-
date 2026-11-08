"use client";

import { whatsappLink } from "@/lib/site";

// Floating WhatsApp contact. Hidden until NEXT_PUBLIC_WHATSAPP_NUMBER is set.
export default function WhatsAppButton() {
  const href = whatsappLink();
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-24 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-10px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:-translate-y-1 sm:right-6"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.43 9.43 0 0 1-4.81-1.32l-.35-.21-3.57.94.95-3.48-.23-.36a9.42 9.42 0 0 1-1.44-5.03c0-5.2 4.24-9.44 9.46-9.44a9.4 9.4 0 0 1 6.68 2.77 9.38 9.38 0 0 1 2.77 6.68c0 5.21-4.24 9.45-9.45 9.45zm8.04-17.49A11.3 11.3 0 0 0 12.04.67C5.77.67.66 5.77.66 12.05c0 2 .52 3.96 1.52 5.69L.57 23.33l5.72-1.5a11.36 11.36 0 0 0 5.75 1.46h.01c6.27 0 11.38-5.1 11.38-11.38 0-3.04-1.18-5.9-3.35-8.05z" />
      </svg>
    </a>
  );
}

// Central place for agency details. Values come from environment variables
// (set in Vercel) so nothing private lives in the code.

export const site = {
  name: "Results Marketing Co.",
  shortName: "Results",
  tagline: "Premium Digital Marketing & E-commerce Growth Agency",
  description:
    "Results Marketing Co. helps e-commerce businesses and Shopify store owners build better websites, run smarter marketing and grow — from first launch to scaling an established store.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, ""),
  whatsappMessage:
    "Hi Results Marketing Co., I found you through your website and I'd like to talk about my online store.",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  socials: [
    { label: "Instagram", handle: "@results.coo", href: "https://www.instagram.com/results.coo" },
  ],
};

export function whatsappLink(message = site.whatsappMessage) {
  if (!site.whatsapp) return "";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", mega: true },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

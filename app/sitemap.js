import { site } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/services", "/about", "/work", "/insights", "/contact"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.7,
  }));
}

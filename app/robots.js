import { SITE } from "./content/sections";

/** @returns {import("next").MetadataRoute.Robots} */
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}

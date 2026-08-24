import { site } from "@/constants/site"

export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: site.contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${site.url}/pt`,
      lastModified: site.contentLastUpdated,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ]
}

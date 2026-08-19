import { site } from "@/constants/site"

export default function sitemap() {
  return [
    {
      url: site.url,
      lastModified: site.contentLastUpdated,
    },
    {
      url: `${site.url}/pt`,
      lastModified: site.contentLastUpdated,
    },
  ]
}

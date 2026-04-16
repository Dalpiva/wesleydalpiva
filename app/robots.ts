export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://wesleydalpiva.com/sitemap.xml",
  };
}
import type { Metadata } from "next"
import { contact } from "@/constants/contact"
import { translate, uiCopy } from "@/constants/l10n"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"

export function createMetadata(locale: Locale): Metadata {
  const isPortuguese = locale === "pt-BR"
  const title = isPortuguese
    ? "Wesley Dalpiva - Engenheiro de Software Backend"
    : "Wesley Dalpiva - Backend Software Engineer"
  const description = isPortuguese
    ? "Portfólio de Wesley Dalpiva, engenheiro de software backend focado em Python, APIs, bancos de dados, cloud e sistemas de produção."
    : "Wesley Dalpiva is a Backend Software Engineer focused on Python, APIs, databases, cloud infrastructure and production systems."
  const path = isPortuguese ? "/pt" : "/"

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords: [
      "Wesley Dalpiva",
      "Backend Software Engineer",
      "Backend Engineer",
      "Python",
      "REST APIs",
      "Databases",
      "Cloud",
      "Microservices",
      "Healthcare Software",
    ],
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    alternates: {
      canonical: path,
      languages: {
        en: "/",
        "pt-BR": "/pt",
      },
    },
    openGraph: {
      title,
      description,
      url: `${site.url}${path}`,
      siteName: site.name,
      images: [
        {
          url: site.profileImage.src,
          width: site.profileImage.width,
          height: site.profileImage.height,
          alt: uiCopy[locale].profileImageAlt,
        },
      ],
      locale: isPortuguese ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [site.profileImage.src],
    },
    robots: {
      index: true,
      follow: true,
    },
    other: {
      "contact:email": contact.email,
      "profile:username": "Dalpiva",
      "profile:role": translate(site.role, locale),
    },
  }
}

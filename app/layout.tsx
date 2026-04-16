import './globals.css'
import { JetBrains_Mono } from 'next/font/google'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Wesley Dalpiva | FullStack Developer",
  description:
    "Desenvolvedor FullStack focado em Python, Next.js e Flutter. Portfólio e projetos.",

  keywords: [
    "Wesley Dalpiva",
    "FullStack Developer",
    "Next.js",
    "Python",
    "Flutter",
    "Desenvolvedor",
  ],

  authors: [{ name: "Wesley Dalpiva" }],

  openGraph: {
    title: "Wesley Dalpiva",
    description: "Portfólio e projetos",
    url: "https://wesleydalpiva.com",
    siteName: "wesleydalpiva.com",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
}

const mono = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={mono.className}>{children}</body>
    </html>
  )
}
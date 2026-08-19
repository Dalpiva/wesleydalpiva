import type { Metadata, Viewport } from "next"
import "../globals.css"
import { createMetadata } from "@/app/lib/metadata"
import { monoFont, sansFont } from "@/app/lib/fonts"

export const metadata: Metadata = createMetadata("en")

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0C1E29",
}

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sansFont.variable} ${monoFont.variable}`}>{children}</body>
    </html>
  )
}

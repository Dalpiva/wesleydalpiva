import { ImageResponse } from "next/og"
import { site } from "@/constants/site"
import type { Locale } from "@/constants/types"

export const ogSize = {
  width: 1200,
  height: 630,
}

export function createOpenGraphImage(locale: Locale) {
  return async function Image() {
    const eyebrow = site.hero.eyebrow[locale]
    const role = site.role[locale]

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#0c1e29",
            padding: "72px 80px",
            color: "#f2f5f1",
          }}
        >
          <div style={{ display: "flex", fontSize: 28, color: "#9db1b9", letterSpacing: 4 }}>
            {eyebrow.toUpperCase()}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>{site.name}</div>
            <div style={{ display: "flex", fontSize: 44, color: "#fffe15" }}>{role}</div>
          </div>

          <div style={{ display: "flex", gap: 20 }}>
            {site.hero.keywords.map((keyword) => (
              <div
                key={keyword}
                style={{
                  display: "flex",
                  fontSize: 28,
                  color: "#9db1b9",
                  padding: "10px 24px",
                  borderRadius: 9999,
                  border: "2px solid rgba(196,220,225,0.34)",
                }}
              >
                {keyword}
              </div>
            ))}
          </div>
        </div>
      ),
      ogSize,
    )
  }
}

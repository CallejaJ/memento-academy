import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ lng: string }>
}) {
  const { lng } = await params

  const title = lng === "es" ? "Cripto 101" : "Crypto 101"

  const description =
    lng === "es"
      ? "Todo lo que necesitas saber sobre criptomonedas, explicado sin jerga técnica. Completamente gratis."
      : "Everything you need to know about cryptocurrencies, explained without technical jargon. Completely free."

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: 1200,
          height: 630,
          background: "linear-gradient(135deg, #0c1a2e 0%, #020617 60%, #0a1628 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 8,
            height: 630,
            background: "linear-gradient(180deg, #22d3ee 0%, #14b8a6 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            flex: 1,
            gap: 28,
          }}
        >
          <div
            style={{
              color: "#22d3ee",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Memento Academy
          </div>
          <div
            style={{
              color: "#ffffff",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#94a3b8",
              fontSize: 32,
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {description}
          </div>
          <div style={{ color: "#334155", fontSize: 16, marginTop: 8 }}>
            memento-academy.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

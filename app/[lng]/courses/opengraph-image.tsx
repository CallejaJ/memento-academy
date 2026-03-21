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

  const title =
    lng === "es" ? "Cursos Web3 y Blockchain" : "Web3 & Blockchain Courses"

  const description =
    lng === "es"
      ? "Explora nuestros cursos gratuitos sobre Web3, blockchain, criptomonedas y CBDCs."
      : "Explore our free courses on Web3, blockchain, cryptocurrencies, and CBDCs."

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
        {/* Left accent stripe */}
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

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px 0 80px",
            flex: 1,
            gap: 28,
          }}
        >
          {/* Brand label */}
          <div
            style={{
              color: "#22d3ee",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Memento Academy
          </div>

          {/* Title */}
          <div
            style={{
              color: "#ffffff",
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.15,
              maxWidth: 900,
            }}
          >
            {title}
          </div>

          {/* Description */}
          <div
            style={{
              color: "#94a3b8",
              fontSize: 24,
              lineHeight: 1.5,
              maxWidth: 800,
            }}
          >
            {description}
          </div>

          {/* URL tag */}
          <div
            style={{
              color: "#334155",
              fontSize: 16,
              marginTop: 8,
            }}
          >
            memento-academy.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

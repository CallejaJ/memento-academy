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
    lng === "es" ? "Guía de Seguridad Cripto" : "Crypto Security Guide"

  const description =
    lng === "es"
      ? "Aprende a identificar estafas, proteger tu wallet, asegurar tu seed phrase y mantenerte seguro en Web3."
      : "Learn to identify scams, protect your wallet, secure your seed phrase, and stay safe in Web3."

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
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.15,
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

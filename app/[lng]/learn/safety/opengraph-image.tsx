import { ImageResponse } from "next/og"
import { getLocalImage } from "@/lib/og-image-utils"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image({
  params,
}: {
  params: Promise<{ lng: string }>
}) {
  const { lng } = await params

  const thumbnail = getLocalImage("images/og/learn-to-earn.png")
  const logo = getLocalImage("memento_academy_logo_text.png")

  const title =
    lng === "es"
      ? "Guía de Seguridad Cripto"
      : "Crypto Security Guide"

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
          background: "#020617",
        }}
      >
        {/* Left thumbnail */}
        <img
          src={thumbnail}
          style={{
            width: 420,
            height: 630,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />

        {/* Right content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "48px 56px",
            flex: 1,
            gap: 28,
          }}
        >
          <img src={logo} style={{ width: 220, height: "auto" }} />
          <div
            style={{
              color: "white",
              fontSize: 48,
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#94a3b8",
              fontSize: 22,
              lineHeight: 1.5,
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}

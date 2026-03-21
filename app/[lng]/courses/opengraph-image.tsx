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
      ? "Cursos Web3 y Blockchain"
      : "Web3 & Blockchain Courses"

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
              fontSize: 44,
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

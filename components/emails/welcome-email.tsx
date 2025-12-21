import type React from "react"
import { Html } from "@react-email/html"
import { Button } from "@react-email/button"
import { Text } from "@react-email/text"
import { Section } from "@react-email/section"
import { Container } from "@react-email/container"
import { Heading } from "@react-email/heading"
import { Link } from "@react-email/link"
import { getBaseUrl } from "@/lib/utils"

interface WelcomeEmailProps {
  name?: string
  email: string
  preferences: {
    crypto_news: boolean
    nft_updates: boolean
    course_announcements: boolean
    trading_signals: boolean
  }
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ name = "", email, preferences }) => {
  const baseUrl = getBaseUrl()

  return (
    <Html>
      <Section style={{ backgroundColor: "#0e1629", padding: "20px", textAlign: "center" }}>
        <Heading as="h1" style={{ color: "#ffffff", margin: 0 }}>
          Welcome to Memento Academy!
        </Heading>
      </Section>

      <Container style={{ padding: "20px", backgroundColor: "#ffffff" }}>
        <Text>Hello {name || "there"},</Text>
        <Text>
          Thank you for subscribing to the Memento Academy newsletter! You're now part of our community of 50,000+
          crypto enthusiasts.
        </Text>

        <Text>Here's what you can expect:</Text>
        <ul>
          {preferences.crypto_news && <li>Daily crypto news and market analysis</li>}
          {preferences.nft_updates && <li>Exclusive NFT drop alerts</li>}
          {preferences.course_announcements && <li>Course announcements and special offers</li>}
          {preferences.trading_signals && <li>Trading signals and insights</li>}
        </ul>

        <Text>Stay tuned for our next update!</Text>

        <Section style={{ textAlign: "center", marginTop: "30px" }}>
          <Button
            href={`${baseUrl}/dashboard`}
            style={{
              backgroundColor: "#06b6d4",
              color: "white",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Visit Your Dashboard
          </Button>
        </Section>
      </Container>

      <Section
        style={{ backgroundColor: "#f3f4f6", padding: "15px", textAlign: "center", fontSize: "12px", color: "#6b7280" }}
      >
        <Text>© {new Date().getFullYear()} Memento Academy. All rights reserved.</Text>
        <Text>
          If you didn't sign up for this newsletter, you can{" "}
          <Link href={`${baseUrl}/unsubscribe?email=${email}`} style={{ color: "#06b6d4" }}>
            unsubscribe here
          </Link>
          .
        </Text>
      </Section>
    </Html>
  )
}

export default WelcomeEmail

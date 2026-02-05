"use client";

import { PrivyProvider as BasePrivyProvider } from "@privy-io/react-auth";
import { sepolia } from "viem/chains";

const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "";

export function PrivyProvider({ children }: { children: React.ReactNode }) {
  if (!privyAppId) {
    console.warn("PRIVY_APP_ID not configured, wallet features disabled");
    return <>{children}</>;
  }

  return (
    <BasePrivyProvider
      appId={privyAppId}
      config={{
        // Embedded wallets for gasless onboarding
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets",
          },
        },
        // Sepolia testnet
        defaultChain: sepolia,
        supportedChains: [sepolia],
        // Login methods
        loginMethods: ["email", "google"],
        // Appearance
        appearance: {
          theme: "dark",
          accentColor: "#22d3ee", // cyan-400
          logo: "/images/memento-logo.png",
        },
      }}
    >
      {children}
    </BasePrivyProvider>
  );
}

// Hook to check if Privy is configured
export function usePrivyConfigured() {
  return Boolean(privyAppId);
}

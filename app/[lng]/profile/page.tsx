"use client";

import { useAuth } from "@/contexts/auth-context";
import { useAuthModal } from "@/contexts/auth-modal-context";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { ProfileForm } from "@/components/profile/profile-form";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  Wallet,
  Key,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useState } from "react";

const translations = {
  en: {
    title: "Edit Your Profile",
    walletSection: "Your Wallet",
    walletAddress: "Wallet Address",
    exportWallet: "Export Private Key",
    exportWarning: "Never share your private key with anyone!",
    copied: "Copied!",
    copyAddress: "Copy",
    viewOnExplorer: "View on Etherscan",
    noWallet: "No wallet connected",
    accessRequired: "Access Required",
    pleaseLogin: "Please log in to edit your profile.",
    login: "Log In",
  },
  es: {
    title: "Editar Perfil",
    walletSection: "Tu Wallet",
    walletAddress: "Dirección de Wallet",
    exportWallet: "Exportar Llave Privada",
    exportWarning: "¡Nunca compartas tu llave privada con nadie!",
    copied: "¡Copiado!",
    copyAddress: "Copiar",
    viewOnExplorer: "Ver en Etherscan",
    noWallet: "Sin wallet conectada",
    accessRequired: "Acceso Requerido",
    pleaseLogin: "Inicia sesión para editar tu perfil.",
    login: "Iniciar Sesión",
  },
};

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const { openLogin } = useAuthModal();
  const { lng } = useParams<{ lng: string }>();
  const { exportWallet } = usePrivy();
  const { wallets } = useWallets();
  const [copied, setCopied] = useState(false);

  const t = translations[lng as keyof typeof translations] || translations.en;

  // Find embedded wallet
  const embeddedWallet = wallets.find(
    (w) => w.walletClientType === "privy" || w.connectorType === "embedded"
  );

  const copyAddress = async () => {
    if (embeddedWallet?.address) {
      await navigator.clipboard.writeText(embeddedWallet.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-slate-800 rounded w-48 mb-8"></div>
              <div className="h-64 bg-slate-800 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950">
        <MainNav lng={lng} />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-white mb-4">
              {t.accessRequired}
            </h1>
            <p className="text-slate-400 mb-8">{t.pleaseLogin}</p>
            <Button
              onClick={openLogin}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
            >
              {t.login}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <MainNav lng={lng} />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header with Back Button */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => (window.location.href = `/${lng}/dashboard`)}
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-3xl font-bold text-white">{t.title}</h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Profile Form */}
            <div className="lg:col-span-1">
              <ProfileForm initialProfile={null} />
            </div>

            {/* Wallet Section */}
            <div className="lg:col-span-1">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 space-y-4 h-full">
                <div className="flex items-center gap-3">
                  <Wallet className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-xl font-semibold text-white">
                    {t.walletSection}
                  </h2>
                </div>

                {embeddedWallet ? (
                  <div className="space-y-4">
                    {/* Wallet Address */}
                    <div className="bg-slate-900/50 rounded-lg p-4">
                      <p className="text-xs text-slate-400 mb-2">
                        {t.walletAddress}
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="text-sm text-cyan-400 font-mono flex-1 truncate">
                          {embeddedWallet.address}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={copyAddress}
                          className="text-slate-400 hover:text-white"
                        >
                          {copied ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                        <a
                          href={`https://sepolia.etherscan.io/address/${embeddedWallet.address}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Export Wallet Button */}
                    <div className="space-y-2">
                      <Button
                        onClick={() => exportWallet()}
                        variant="outline"
                        className="w-full border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 hover:text-yellow-300"
                      >
                        <Key className="w-4 h-4 mr-2" />
                        {t.exportWallet}
                      </Button>
                      <p className="text-xs text-yellow-500/70 text-center">
                        ⚠️ {t.exportWarning}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-400">{t.noWallet}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

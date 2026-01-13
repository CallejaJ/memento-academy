"use client";

import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Wallet, Copy, Fuel, Loader2, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";

interface WalletCardProps {
  lng?: string;
}

const translations = {
  en: {
    title: "Smart Wallet",
    activate: "Activate to earn rewards",
    activateBtn: "Activate Wallet",
    creating: "Creating Wallet...",
    settingUp: "Setting up your secure vault",
    retry: "Stuck? Click to retry",
    active: "Active",
    gasless: "Gasless",
    sponsored: "Transactions are sponsored by Memento Academy",
  },
  es: {
    title: "Billetera Inteligente",
    activate: "Activa para ganar recompensas",
    activateBtn: "Activar Billetera",
    creating: "Creando Billetera...",
    settingUp: "Configurando tu bóveda segura",
    retry: "¿Atascado? Click para reintentar",
    active: "Activo",
    gasless: "Sin Gas",
    sponsored: "Transacciones patrocinadas por Memento Academy",
  },
};

export function WalletCard({ lng = "en" }: WalletCardProps) {
  const t = translations[lng as keyof typeof translations] || translations.en;
  const { user } = useAuth(); // Import useAuth
  const { ready, authenticated, login, logout, createWallet } = usePrivy(); // Import logout
  const { wallets } = useWallets();
  const [copied, setCopied] = useState(false);

  // Sync Auth State: If Supabase is logged out but Privy is in, log out of Privy
  useEffect(() => {
    if (ready && authenticated && !user) {
      logout();
    }
  }, [ready, authenticated, user, logout]);

  // Find the embedded wallet (created by Privy)
  const embeddedWallet = wallets.find(
    (w) => w.walletClientType === "privy" || w.connectorType === "embedded"
  );

  // If not ready, show pulse loader
  if (!ready) {
    return (
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 animate-pulse">
        <div className="h-6 w-32 bg-slate-800 rounded mb-4"></div>
        <div className="h-10 w-full bg-slate-800 rounded"></div>
      </div>
    );
  }

  // Case 1: Not authenticated (needs to connect Privy or App Login)
  // We check BOTH privy auth and app auth to ensure consistency
  if (!authenticated || !user) {
    return (
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-black border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-slate-800 rounded-lg">
            <Wallet className="w-5 h-5 text-slate-400" />
          </div>
          <div>
            <h3 className="font-bold text-white">{t.title}</h3>
            <p className="text-xs text-slate-400">{t.activate}</p>
          </div>
        </div>
        <Button
          onClick={login}
          className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold"
          size="sm"
        >
          {t.activateBtn}
        </Button>
      </div>
    );
  }

  // Case 2: Authenticated but no wallet (create one)
  if (!embeddedWallet) {
    return (
      <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-slate-800 rounded-lg">
            <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />
          </div>
          <div>
            <h3 className="font-bold text-white">{t.creating}</h3>
            <p className="text-xs text-slate-400">{t.settingUp}</p>
          </div>
        </div>
        <Button
          onClick={() => createWallet && createWallet()}
          variant="ghost"
          className="w-full mt-2 text-xs text-slate-500 hover:text-white"
          size="sm"
        >
          {t.retry}
        </Button>
      </div>
    );
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(embeddedWallet.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-black border border-cyan-900/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none"></div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20">
            <Fuel className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white leading-tight">{t.title}</h3>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] uppercase font-bold text-green-400 tracking-wider">
                {t.active}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3 relative z-10">
        {/* Address Box */}
        <div className="bg-black/40 rounded-xl p-3 border border-white/5 flex items-center justify-between group/address hover:border-cyan-500/30 transition-colors">
          <code className="text-sm font-mono text-slate-300 truncate max-w-[180px]">
            {embeddedWallet.address}
          </code>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-slate-500 hover:text-white hover:bg-white/10"
            onClick={copyAddress}
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Info text */}
        <p className="text-xs text-slate-500 flex items-center gap-2">
          {t.sponsored}
        </p>
      </div>
    </div>
  );
}

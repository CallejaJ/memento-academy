"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { AlertTriangle, RefreshCw, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  onRetry?: () => void;
  title?: string;
  message: string;
  technicalDetails?: string;
  t: {
    errorTitle: string;
    errorGeneric: string;
    retry: string;
    close: string;
    showDetails: string;
    hideDetails: string;
  };
}

// Parse error messages to user-friendly text
function parseErrorMessage(error: string, lang: "en" | "es" = "es"): string {
  const errorMessages: Record<string, { en: string; es: string }> = {
    "HTTP request failed": {
      en: "Connection error. Please check your internet and try again.",
      es: "Error de conexión. Verifica tu internet e intenta de nuevo.",
    },
    "Status: 400": {
      en: "The transaction could not be processed. The gasless service may be temporarily unavailable.",
      es: "No se pudo procesar la transacción. El servicio gasless puede estar temporalmente no disponible.",
    },
    "Status: 429": {
      en: "Too many requests. Please wait a moment and try again.",
      es: "Demasiadas solicitudes. Espera un momento e intenta de nuevo.",
    },
    "insufficient funds": {
      en: "Insufficient funds for this transaction.",
      es: "Fondos insuficientes para esta transacción.",
    },
    "user rejected": {
      en: "Transaction cancelled by user.",
      es: "Transacción cancelada por el usuario.",
    },
    "User denied": {
      en: "Transaction cancelled by user.",
      es: "Transacción cancelada por el usuario.",
    },
    timeout: {
      en: "Request timed out. Please try again.",
      es: "La solicitud tardó demasiado. Intenta de nuevo.",
    },
  };

  for (const [key, messages] of Object.entries(errorMessages)) {
    if (error.toLowerCase().includes(key.toLowerCase())) {
      return messages[lang];
    }
  }

  return lang === "es"
    ? "Ocurrió un error al procesar tu solicitud. Intenta de nuevo más tarde."
    : "An error occurred while processing your request. Please try again later.";
}

export function ErrorModal({
  open,
  onClose,
  onRetry,
  title,
  message,
  technicalDetails,
  t,
}: ErrorModalProps) {
  const [showDetails, setShowDetails] = useState(false);
  const friendlyMessage = parseErrorMessage(message);

  return (
    <AlertDialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <AlertDialogContent className="bg-slate-900 border-red-500/50 max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-red-500/20">
              <AlertTriangle className="w-6 h-6 text-red-400" />
            </div>
            <AlertDialogTitle className="text-white">
              {title || t.errorTitle}
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-slate-300 mt-4">
            {friendlyMessage}
          </AlertDialogDescription>

          {/* Technical details (collapsible) */}
          {technicalDetails && (
            <div className="mt-4">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-400 transition-colors"
              >
                {showDetails ? (
                  <>
                    <ChevronUp className="w-4 h-4" />
                    {t.hideDetails}
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4" />
                    {t.showDetails}
                  </>
                )}
              </button>
              {showDetails && (
                <pre className="mt-2 p-3 bg-slate-800/50 rounded-lg text-xs text-slate-500 overflow-x-auto max-h-32 overflow-y-auto whitespace-pre-wrap break-all">
                  {technicalDetails}
                </pre>
              )}
            </div>
          )}
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4 flex gap-2">
          {onRetry && (
            <button
              onClick={onRetry}
              className="flex-1 py-2 px-4 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              {t.retry}
            </button>
          )}
          <AlertDialogAction
            onClick={onClose}
            className="flex-1 py-2 px-4 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors"
          >
            {t.close}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

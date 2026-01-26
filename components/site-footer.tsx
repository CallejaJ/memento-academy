"use client";

import Link from "next/link";
import { Github, MessageCircle } from "lucide-react";
import { XIcon } from "@/components/icons/x-icon";

interface SiteFooterProps {
  lng: string;
}

export function SiteFooter({ lng }: SiteFooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900 bg-slate-950/50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-xs text-slate-600 text-center md:text-left font-medium">
            © {currentYear} Memento Academy. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/memento_academy"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-cyan-500 transition-colors"
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">X (Twitter)</span>
            </Link>
            <Link
              href="https://github.com/CallejaJ/memento-academy"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-cyan-500 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://github.com/orgs/Memento-Academy/discussions"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 hover:text-cyan-500 transition-colors"
              title="Community Discussions"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="sr-only">Community</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

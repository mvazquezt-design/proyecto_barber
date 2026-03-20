"use client";

import { BUSINESS, WA_LINK } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-white/5 mt-0">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 py-10 px-6 md:px-10">
        {/* Marca */}
        <div className="font-headline font-black uppercase tracking-tighter text-lg text-white">
          The Barber King
        </div>

        {/* Links */}
        <div className="flex gap-6 md:gap-8 items-center flex-wrap justify-center">
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
          >
            WhatsApp
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="font-body text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
          >
            Email
          </a>
          <a
            href="#"
            className="font-body text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
          >
            Política de Privacidad
          </a>
        </div>

        {/* Copyright */}
        <div className="font-body text-xs uppercase tracking-widest text-neutral-600">
          © {BUSINESS.year} The Barber King
        </div>
      </div>
    </footer>
  );
}

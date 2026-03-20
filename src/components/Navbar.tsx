"use client";

import Image from "next/image";
import Link from "next/link";
import { WA_LINK } from "@/lib/config";
import { useState, useEffect } from "react";

const links = [
  { label: "Galería", href: "/#lookbook" },
  { label: "Servicios", href: "/#services" },
  { label: "Staff", href: "/#staff" },
  { label: "Ubicación", href: "/#location" },
  { label: "Contacto", href: "/contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 md:px-10 py-5 w-full max-w-screen-2xl mx-auto">
        {/* Logo — solo el círculo negro con el león */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-black border-2 border-white flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/logo_cropped.png"
              alt="The Barber King Logo"
              width={44}
              height={44}
              className="w-full h-full object-cover scale-110"
            />
          </div>
          <span className="font-headline font-black tracking-tighter text-white text-base hidden sm:block">
            THE BARBER KING
          </span>
        </Link>

        {/* Nav Links — desktop */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-headline uppercase tracking-tighter font-bold text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-headline uppercase tracking-tighter font-black text-sm px-5 py-3 rounded-md bg-white text-black hover:bg-[#d4d4d4] active:scale-95 transition-all duration-200"
        >
          Reservar Turno
        </a>
      </div>
    </nav>
  );
}

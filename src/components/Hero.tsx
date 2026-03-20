"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { WA_LINK } from "@/lib/config";
import { useState, useEffect } from "react";

// Imágenes del carrusel — cortes de alta calidad
const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1600&q=90",
    alt: "Corte fade de precisión",
  },
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1600&q=90",
    alt: "Perfilado de barba artesanal",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1600&q=90",
    alt: "Corte clásico con textura",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=90",
    alt: "Ambiente de la barbería",
  },
];

const SLIDE_DURATION = 5000; // ms por slide

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto-avance del carrusel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70svh] min-h-[500px] md:h-[85svh] md:min-h-[700px] rounded-2xl overflow-hidden flex flex-col justify-end border border-white/5">
      {/* ── Carrusel de fondo ── */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={carouselImages[current].src}
            alt={carouselImages[current].alt}
            fill
            className="object-cover object-center"
            priority={current === 0}
            sizes="100vw"
          />
          {/* Gradiente dramático */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* ── Contenido — con padding generoso para no tocar el Navbar ── */}
      <div className="relative z-10 px-8 md:px-14 pb-16 md:pb-20 pt-36 md:pt-44 space-y-6 max-w-5xl">

        {/* H1 */}
        <motion.h1
          className="font-headline font-black tracking-tighter uppercase leading-[0.9] text-glow text-white/40"
          style={{ fontSize: "clamp(3.5rem, 13vw, 9.5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          The Barber{" "}
          <span className="text-[#d4d4d4]/40">King</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="text-white/75 text-lg md:text-xl max-w-xl font-body leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Elevando la experiencia de grooming urbano a través de precisión
          arquitectónica y estética streetwear de alto lujo.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="pt-3 flex justify-center md:justify-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-headline font-black uppercase tracking-tighter text-lg px-10 py-5 rounded-md bg-white text-black hover:bg-[#d4d4d4] active:scale-95 transition-all duration-200"
          >
            Reservar Turno
          </a>
        </motion.div>
      </div>

      {/* ── Indicadores de slide ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* ── Badge edición ── */}
      <motion.div
        className="absolute bottom-8 right-8 z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <div className="glass-card rounded-full px-4 py-2 text-xs font-headline uppercase tracking-widest text-white/50">
          Obsidian Gallery Edition
        </div>
      </motion.div>
    </section>
  );
}

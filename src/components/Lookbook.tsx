"use client";

import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=900&q=85",
    alt: "Sharp Beard Trim",
    label: "Precision Lineup",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=85",
    alt: "Classic Pompadour",
    label: "Classic Fade",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=85",
    alt: "Textured Fade",
    label: "Skin Fade",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&q=85",
    alt: "Barber Interior",
    label: "The Shop",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function Lookbook() {
  return (
    <section id="lookbook" className="space-y-8">
      {/* Encabezado */}
      <div className="flex items-end justify-between animate-fade-in">
        <h2 className="font-headline font-black uppercase tracking-tighter text-4xl md:text-5xl text-white">
          Galería{" "}
          <span className="text-[#919191]">/ 01</span>
        </h2>
        <span className="font-body text-xs uppercase tracking-widest text-neutral-500 hidden md:block">
          Obsidian Gallery Edition
        </span>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {photos.map((photo, i) => (
          <div
            key={i}
            className={`relative bg-[#1b1b1b] rounded-2xl overflow-hidden group ${photo.className}`}
            style={{
              minHeight: "200px",
              // Animación CSS escalonada para evitar la TS battle con Framer Motion Variants
              animation: `fadeInUp 0.6s ease ${i * 0.1}s both`,
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            {/* Label */}
            <div className="absolute bottom-4 left-4">
              <span className="glass-card px-3 py-1.5 rounded-lg text-xs font-headline uppercase tracking-widest">
                {photo.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

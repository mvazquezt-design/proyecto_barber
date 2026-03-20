"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { WA_LINK } from "@/lib/config";

const masters = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85",
    name: "Leon",
    role: "Fundador & Master",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=85",
    name: "Marcus",
    role: "Especialista en Fades",
  },
];

export default function TheMasters() {
  return (
    <section id="staff" className="space-y-10">
      <motion.h2
        className="font-headline font-black uppercase tracking-tighter text-4xl md:text-5xl text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Los Maestros
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {masters.map((master, i) => (
          <motion.div
            key={i}
            className="relative h-[420px] rounded-2xl overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
          >
            <Image
              src={master.src}
              alt={master.name}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h4 className="font-headline font-black uppercase text-xl text-white">
                {master.name}
              </h4>
              <p className="text-xs font-body uppercase tracking-widest text-neutral-300 mt-0.5">
                {master.role}
              </p>
            </div>
          </motion.div>
        ))}

        {/* CTA Card */}
        <motion.div
          className="lg:col-span-2 bg-[#1f1f1f] border border-white/10 rounded-2xl flex items-center justify-center p-10 text-center group hover:border-white/30 transition-colors duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="space-y-5">
            <h4 className="font-headline font-black uppercase tracking-tighter text-3xl leading-none text-white">
              Trabajá con
              <br />
              <span className="text-[#d4d4d4]">nosotros</span>
            </h4>
            <p className="text-neutral-300 font-body text-sm max-w-xs mx-auto">
              Sumate al equipo de barberos más elite de la ciudad.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-headline font-black uppercase tracking-tighter text-sm px-8 py-4 rounded-md bg-white text-black hover:bg-[#d4d4d4] active:scale-95 transition-all duration-200"
            >
              Postularse
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

// RF-SERV-01: Nombres unificados. RF-NO-PRICES: Sin precios.
const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664" />
      </svg>
    ),
    name: "Corte Élite",
    description:
      "Asesoramiento de imagen personalizado, lavado premium y peinado con productos de autor de alta gama.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    name: "Barba King",
    description:
      "Ritual de toallas calientes, perfilado artesanal a navaja y aceites hidratantes de origen natural.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.415a15.996 15.996 0 001.622-3.39M6.53 16.122a15.994 15.994 0 01-1.62-3.39m1.62 3.39a4.501 4.501 0 002.95.956 4.5 4.5 0 002.95-.956M9.53 16.122l6.36-6.36m-6.36 6.36L3.75 9.75M16.5 3.75l-6.36 6.36m0 0L3.75 9.75m6.39.37l6.36-6.36" />
      </svg>
    ),
    name: "Perfilado Full",
    description:
      "Combo cabello y barba completo con terminaciones de lujo y detallado a navaja para un acabado impecable.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-9 h-9">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    name: "Colorimetría Pro",
    description:
      "Técnicas de color avanzadas, balayage y matización profesional para resultados que combinan tendencia y elegancia.",
  },
];

export default function Services() {
  return (
    <section id="services" className="space-y-10">
      <motion.h2
        className="font-headline font-black uppercase tracking-tighter text-4xl md:text-5xl text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Servicios
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="group bg-[#0e0e0e] border border-[#474747] rounded-2xl p-7 space-y-5 hover:border-white/40 hover:bg-[#1b1b1b] transition-all duration-300 cursor-default"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
          >
            <div className="text-white group-hover:scale-110 transition-transform duration-300 origin-left">
              {service.icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-headline font-black uppercase tracking-tighter text-xl text-white">
                {service.name}
              </h3>
              <p className="text-neutral-300 font-body text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
            {/* Separador animado */}
            <div className="w-8 h-px bg-white/30 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

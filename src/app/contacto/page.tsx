"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { BUSINESS, WA_LINK } from "@/lib/config";

const contactInfo = [
  {
    label: "WhatsApp",
    value: BUSINESS.phone,
    href: WA_LINK,
    icon: (
      <svg viewBox="0 0 24 24" fill="#25D366" className="w-5 h-5 flex-shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: "Teléfono",
    value: BUSINESS.phone,
    href: `tel:${BUSINESS.phone.replace(/\s|-/g, "")}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Dirección",
    value: BUSINESS.address,
    href: BUSINESS.mapsUrl,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

type FormState = { nombre: string; email: string; telefono: string; mensaje: string };
const EMPTY: FormState = { nombre: "", email: "", telefono: "", mensaje: "" };

export default function Contacto() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 800));
    setSending(false);
    setSent(true);
    setForm(EMPTY);
    setTimeout(() => setSent(false), 5000);
  };

  const inputBase =
    "w-full bg-transparent border border-neutral-800 rounded-lg px-4 py-3.5 text-white placeholder-neutral-600 text-sm font-body focus:outline-none focus:border-white/50 transition-colors duration-200";

  return (
    <>
      <div className="pt-28 px-4 md:px-8 max-w-screen-2xl mx-auto space-y-10 pb-28 md:pb-20">
        {/* Título */}
        <motion.h1
          className="font-headline font-black uppercase tracking-tighter text-4xl md:text-5xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contacto
        </motion.h1>

        {/* Layout dos columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Columna 1: Info */}
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-neutral-300 font-body leading-relaxed">
              Reservá tu turno o escribinos para cualquier consulta. Respondemos a la brevedad.
            </p>

            <ul className="space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <p className="font-headline font-bold uppercase text-xs tracking-widest text-neutral-500 mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-white font-body text-sm group-hover:text-neutral-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="border-t border-neutral-800 pt-6">
              <p className="font-headline font-bold uppercase text-xs tracking-widest text-neutral-500 mb-1">
                Horarios
              </p>
              <p className="text-white font-body text-sm">{BUSINESS.hours}</p>
            </div>
          </motion.div>

          {/* Columna 2: Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  className="h-full min-h-[380px] flex flex-col items-center justify-center text-center space-y-4 border border-white/10 rounded-2xl p-10"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 250, delay: 0.1 }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </motion.div>
                  <h3 className="font-headline font-black uppercase tracking-tighter text-2xl text-white">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-neutral-400 font-body text-sm max-w-xs">
                    Gracias por contactarnos. Te respondemos a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <label className="font-headline font-bold uppercase text-xs tracking-widest text-neutral-500 block mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      className={inputBase}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-headline font-bold uppercase text-xs tracking-widest text-neutral-500 block mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        required
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="font-headline font-bold uppercase text-xs tracking-widest text-neutral-500 block mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={form.telefono}
                        onChange={handleChange}
                        placeholder="+54 11 ..."
                        className={inputBase}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-headline font-bold uppercase text-xs tracking-widest text-neutral-500 block mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="¿En qué te podemos ayudar?"
                      required
                      rows={5}
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full font-headline font-black uppercase tracking-tighter text-sm py-4 rounded-lg bg-white text-black hover:bg-neutral-200 active:scale-[.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      "Enviar"
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

// ── Configuración centralizada de The Barber King ──
// Editar solo aquí para propagar cambios a toda la app.

export const BUSINESS = {
  // Número en formato internacional sin +: 549 (ARG) + número local
  whatsapp: "5491112345678",
  whatsappMessage: "Hola! Quiero reservar un turno en The Barber King.",
  phone: "+54 11 1234-5678",
  address: "Mercedes 3213 - San Andrés",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Mercedes+3213+San+Andres+Buenos+Aires",
  hours: "Martes a Sábado de 10 a 20 hs",
  email: "contacto@thebarberking.com",
  instagram: "https://instagram.com/thebarber.k1ng",
  year: new Date().getFullYear(),
} as const;

export const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

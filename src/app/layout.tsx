import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import MobileBottomBar from "@/components/MobileBottomBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Barber King | Elite Barbería Buenos Aires",
  description:
    "Elevating the urban grooming experience through architectural precision and high-end luxury streetwear aesthetics. Reserva tu turno ahora.",
  openGraph: {
    title: "The Barber King",
    description: "Elite barbería en Buenos Aires. Reservá tu turno.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <div className="hidden md:block">
          <WhatsAppFAB />
        </div>
        <MobileBottomBar />
      </body>
    </html>
  );
}

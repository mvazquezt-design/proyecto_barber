import Hero from "@/components/Hero";
import Lookbook from "@/components/Lookbook";
import Services from "@/components/Services";
import TheMasters from "@/components/TheMasters";
import FindTheTrone from "@/components/FindTheTrone";

export default function Home() {
  return (
    <>
      {/* Page padding-bottom en mobile para evitar que la bottom bar tape contenido */}
      <div className="pt-20 px-4 md:px-8 max-w-screen-2xl mx-auto space-y-20 pb-28 md:pb-20">
        <Hero />
        <Lookbook />
        <Services />
        <TheMasters />
        <FindTheTrone />
      </div>
    </>
  );
}

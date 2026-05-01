import Hero from "@/components/hero";
import Method from "@/components/methods";
import Navbar from "@/components/navbar";
import Offers from "@/components/offers";
import Problems from "@/components/problems";
import ReferencesSection from "@/components/references";
import Values from "@/components/values";

export default function Home() {
  return (
    <main id="root" className="min-h-screen bg-[--color-background] text-[--color-foreground] font-sans">
      <Navbar />
      <Hero />
      <Problems />
      <Values />
      <Offers />
      <Method />
      <ReferencesSection />
    </main>
  );
}
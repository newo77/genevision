'use client';

import ButtonGenevision from "@/components/buttonGenevision";
import Hero from "@/components/hero";
import Method from "@/components/methods";
import Navbar from "@/components/navbar";
import Offers from "@/components/offers";
import Problems from "@/components/problems";
import ReferencesSection from "@/components/references";
import Values from "@/components/values";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export default function Home() {
  const [openNavMenu, setOpenNavMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRoot(document.body);
  }, []);

  return (
    <main id="root" className="min-h-screen bg-[--color-background] text-[--color-foreground] font-sans">
      {openNavMenu && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-xl p-6 flex flex-col gap-6 animate-slide-in">

            <button
              className="self-end text-2xl"
              onClick={() => setOpenNavMenu(false)}
            >
              ✕
            </button>

            <nav className="flex flex-col gap-6 text-lg text-gray-700">
              <a onClick={() => setOpenNavMenu(false)} href="#services">Services</a>
              <a onClick={() => setOpenNavMenu(false)} href="#method">Méthode</a>
              <a onClick={() => setOpenNavMenu(false)} href="#realizations">Réalisations</a>
              <a onClick={() => setOpenNavMenu(false)} href="#contact">Contact</a>
            </nav>

            <ButtonGenevision
              title="audit gratuit 15 min"
              onClick={() => {
                setOpen(true);
                setOpenNavMenu(false);
              }}
              className="bg-[#E63946] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#A0151F]"
            />
          </div>
        </div>
      )}

      {root && (
        <PopupModal
          url="https://calendly.com/dayesowendev/new-meeting"
          open={open}
          onModalClose={() => setOpen(false)}
          rootElement={root}
        />
      )}
      <Navbar openNavMenu={openNavMenu} setOpenNavMenu={setOpenNavMenu} />
      <Hero />
      <Problems />
      <Values />
      <Offers />
      <Method />
      <ReferencesSection />
    </main>
  );
}
'use client';
import { useEffect, useState } from "react";
import { PopupButton, PopupModal } from "react-calendly";
import ButtonGenevision from "./buttonGenevision";

function Card({ title, subtitle }: any) {
    return (
        <div className="overflow-hidden rounded-2xl shadow-sm bg-white border border-gray-100">
            <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                Photo réalisation à intégrer
            </div>

            <div className="p-4">
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-red-500 mt-1">{subtitle}</p>
            </div>
        </div>
    );
}

/* =========================
   SECTION REFERENCES
========================= */
export default function ReferencesSection() {
    const [root, setRoot] = useState<HTMLElement | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setRoot(document.body);
    }, []);

    const references = [
        {
            title: "Salle Teams Room — PME Paris",
            subtitle: "Yealink MVC · 3 écrans · DSP audio",
        },
        {
            title: "Salle de formation — École sup",
            subtitle: "Visioconférence · Son · Formation",
        },
        {
            title: "Salle de réunion — PME Lyon",
            subtitle: "Écran interactif · Audio · Teams",
        },
        {
            title: "Amphi — Centre de formation",
            subtitle: "Multi-écrans · Son · Intégration",
        },
    ];

    return (
        <div className="w-full">
            <section id="realizations" className="px-8 sm:px-40 py-12 bg-white"> {/* md:px-40 */}
                <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
                    Références
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Quelques réalisations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                    {references.map((item, index) => (
                        <Card
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    ))}
                </div>
            </section>

            <section className="bg-[#3b2a24] relative overflow-hidden">
                {/* Cercle bas droite */}
                <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#E63946]/20 rounded-full translate-x-1/2 translate-y-1/2 opacity-60" />

                {/* Cercle haut gauche */}
                <div className="absolute left-0 top-0 w-[400px] h-[400px] bg-[#E63946]/10 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-60" />
                <div className="px-6 py-20 text-white text-center relative">
                    <div className="max-w-3xl mx-auto">

                        <h2 className="text-3xl md:text-4xl font-bold mt-6">
                            Un projet ? Parlons-en en 15 minutes.
                        </h2>

                        <p className="text-white/70 mt-4">
                            Gratuit, sans engagement. Je vous dis honnêtement si je peux vous aider.
                        </p>
                        <ButtonGenevision
                            title="Réserver mon créneau Calendly"
                            onClick={() => setOpen(true)}
                            className="bg-[#E63946] mt-8 text-white px-6 py-3 rounded-xl font-medium hover:bg-[#A0151F] hover:cursor-pointer"
                        />

                        <div className="mt-8 flex justify-center">
                            {root && (
                                <PopupModal
                                    url="https://calendly.com/dayesowendev/new-meeting"
                                    open={open}
                                    onModalClose={() => setOpen(false)}
                                    rootElement={root}
                                />
                            )}
                        </div>
                        <p className="text-sm text-white/60 mt-4">
                            ou contactez directement : contact@genivision.com
                        </p>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer id="contact" className="px-6 py-4 flex justify-between text-xs text-gray-500 bg-[#2a1f1b]">
                <span>GeniVision © 2026</span>
                <div className="flex gap-4">
                    <span>Mentions légales</span>
                    <span>Confidentialité</span>
                </div>
            </footer>
        </div>
    );
}
'use client';

import ButtonGenevision from "./buttonGenevision";
import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

export default function Hero() {
    const [open, setOpen] = useState(false);
    const [root, setRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRoot(document.body);
    }, []);

    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
    }, [open]);

    return (
        <section className="relative overflow-hidden pt-20">
            <div className="max-w-6xl mx-auto px-6 py-20">

                <p className="uppercase tracking-widest text-sm text-[#E63946] mb-6">
                    Intégration audiovisuelle professionnelle
                </p>

                <h1 className="text-5xl font-bold leading-tight max-w-3xl">
                    L'expertise qui{" "}
                    <span className="text-[#E63946] border-r-2 border-[#E63946] pr-1 animate-pulse">
                        sécurise
                    </span>{" "}
                    vos projets AV
                </h1>

                <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                    Salles de réunion, Teams Rooms, visioconférence — de l'audit à la formation,
                    un seul interlocuteur de confiance.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 border-b pb-10 border-black/20 w-full sm:w-max">
                    <ButtonGenevision
                        title="Réserver mon audit gratuit"
                        onClick={() => setOpen(true)}
                        className="w-full sm:w-auto bg-[#E63946] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#A0151F] hover:cursor-pointer transition"
                    />

                    <ButtonGenevision
                        title="Voir les réalisations"
                        onClick={() => scrollTo({ top: document.getElementById("realizations")?.offsetTop || 0, behavior: "smooth" })}
                        className="w-full sm:w-auto border border-black/20 px-6 py-3 rounded-xl hover:cursor-pointer transition"
                    />
                </div>

                <div className="mt-12 flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-8 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E63946] rounded-full" />
                        Indépendant
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E63946] rounded-full" />
                        Transparent
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E63946] rounded-full" />
                        Accompagnement A à Z
                    </span>
                </div>
            </div>

            {/* Calendly Modal */}
            {root && (
                <PopupModal
                    url="https://calendly.com/dayesowendev/new-meeting"
                    open={open}
                    onModalClose={() => setOpen(false)}
                    rootElement={root}
                />
            )}

            <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#E63946]/10 rounded-full translate-x-1/3 -translate-y-1/3" />
        </section>
    );
}
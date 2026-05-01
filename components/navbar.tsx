'use client';

import { useEffect, useState } from "react";
import ButtonGenevision from "./buttonGenevision";
import { PopupModal } from "react-calendly";

export default function Navbar() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [open, setOpen] = useState(false);
    const [root, setRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRoot(document.body);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setVisible(false);
            } else {
                setVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 border-b border-black/10 
            bg-white backdrop-blur-md
            transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
            ${visible
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0"
                }`}
        >
            <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E63946]" />
                    <span className="text-xl font-semibold">GeniVision</span>
                </div>

                <nav className="hidden md:flex gap-8 text-gray-600">
                    <a href="#services">Services</a>
                    <a href="#method">Méthode</a>
                    <a href="#realizations">Réalisations</a>
                    <a href="#contact">Contact</a>
                </nav>

                <ButtonGenevision
                    title="audit gratuit 15 min"
                    onClick={() => setOpen(true)}
                    className="bg-[#E63946] text-white px-5 py-2 rounded-xl font-medium hover:bg-[#A0151F] hover:cursor-pointer"
                />

                {root && (
                    <PopupModal
                        url="https://calendly.com/dayesowendev/new-meeting"
                        open={open}
                        onModalClose={() => setOpen(false)}
                        rootElement={root}
                    />
                )}
            </div>
        </header>
    );
}
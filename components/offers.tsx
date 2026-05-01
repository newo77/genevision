// components/Offers.tsx
export default function Offers() {
    return (
        <section id="services" className="bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                <p className="uppercase tracking-widest text-sm text-[#E63946] mb-4">
                    Les offres
                </p>

                <h2 className="text-4xl font-bold mb-12 text-[#3b2f2a]">
                    Ce que je fais pour vous
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    {/* CARD 1 */}
                    <div className="relative border-2 border-[#E63946] rounded-xl p-6 bg-[#f3e9e9]">
                        <span className="absolute -top-3 left-4 bg-[#E63946] text-white text-xs px-3 py-1 rounded-full">
                            Point d'entrée
                        </span>

                        <div className="text-2xl mb-4">🔍</div>
                        <h3 className="font-semibold text-lg mb-2">Audit</h3>
                        <p className="text-sm text-gray-600">
                            Échange gratuit 15 min + audit technique si besoin + préconisation matériel adaptée à votre usage
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="border border-black/10 rounded-xl p-6 bg-[#f5f3f1]">
                        <div className="text-2xl mb-4">🖥️</div>
                        <h3 className="font-semibold text-lg mb-2">Intégration</h3>
                        <p className="text-sm text-gray-600">
                            Fourniture, installation, câblage, configuration et réception chantier clé en main
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="border border-black/10 rounded-xl p-6 bg-[#f5f3f1]">
                        <div className="text-2xl mb-4">🛡️</div>
                        <h3 className="font-semibold text-lg mb-2">Suivi & SAV</h3>
                        <p className="text-sm text-gray-600">
                            Maintenance post-installation, support utilisateur et maintien en condition opérationnelle
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
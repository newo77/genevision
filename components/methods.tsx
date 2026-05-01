// components/Method.tsx
export default function Method() {
    const steps = [
        {
            title: "Échange gratuit 15 min",
            desc: "On discute de votre projet par téléphone ou visio, je qualifie le besoin sans engagement.",
        },
        {
            title: "Audit ou devis direct",
            desc: "Selon la complexité, audit terrain payant ou devis d'intégration immédiat.",
        },
        {
            title: "Sélection du matériel",
            desc: "Préconisation indépendante, adaptée à votre usage réel et à votre budget.",
        },
        {
            title: "Installation & intégration",
            desc: "Pose, câblage, configuration — tout géré sur site, du début à la réception.",
        },
        {
            title: "Formation utilisateurs",
            desc: "Vos équipes savent utiliser ce qu'on installe. Sinon, ça ne sert à rien.",
        },
    ];

    return (
        <section id="method" className="bg-[#f5f3f1] py-20">
            <div className="max-w-6xl mx-auto px-6">

                <p className="uppercase tracking-widest text-sm text-[#E63946] mb-4">
                    La méthode
                </p>

                <h2 className="text-4xl font-bold mb-12 text-[#3b2f2a]">
                    De A à Z, sans friction
                </h2>

                <div className="flex flex-col gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="flex gap-4">

                            {/* numéro */}
                            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E63946] text-white font-bold">
                                {i + 1}
                            </div>

                            {/* contenu */}
                            <div>
                                <h3 className="font-semibold text-lg">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {step.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
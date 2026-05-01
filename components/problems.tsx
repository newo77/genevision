export default function Problems() {
    const items = [
        "Matériel mal dimensionné, incompatible avec l'usage réel",
        "Système installé mais jamais vraiment utilisé",
        "Prestataires injoignables après l'installation",
        "Réunions Teams qui plantent au mauvais moment",
        "Projet qui dérape en coût ou en délai",
        "Utilisateurs perdus, formation inexistante",
    ];

    return (
        <section className="bg-[#f5f3f1] py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* Label */}
                <p className="uppercase tracking-widest text-sm text-[#E63946] mb-4">
                    Ce que vivent vos clients
                </p>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-12 text-[#3b2f2a]">
                    Les problèmes que vous ne devriez plus subir
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {items.map((text, i) => (
                        <div
                            key={i}
                            className="relative bg-[#e9e4df] border border-black/10 rounded-xl p-6"
                        >
                            {/* Barre rouge */}
                            <div className="absolute left-0 top-0 h-full w-1 bg-[#E63946] rounded-l-xl" />

                            <p className="text-[#5a4a42]">{text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
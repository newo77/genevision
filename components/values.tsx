export default function Values() {
    const items = [
        {
            id: "01",
            title: "Indépendance totale",
            desc: "Aucune marque imposée. Je préconise ce qui est juste pour votre usage, pas ce qui m'arrange.",
        },
        {
            id: "02",
            title: "Un seul interlocuteur",
            desc: "Du premier échange à la formation, vous avez un contact unique. Pas de passage de relais.",
        },
        {
            id: "03",
            title: "Accompagnement A à Z",
            desc: "Audit, matériel, installation, formation. Tout géré par GeniVision, rien sous-traité sans contrôle.",
        },
        {
            id: "04",
            title: "Usage au centre",
            desc: "L'objectif n'est pas la livraison — c'est que vos équipes utilisent vraiment ce qu'on a installé.",
        },
    ];

    return (
        <section className="bg-[#f5f3f1] sm:py-20">
            <div className="max-w-6xl mx-auto px-6">

                <p className="uppercase tracking-widest text-sm text-[#E63946] mb-4">
                    Ma différence
                </p>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-12 text-[#3b2f2a]">
                    Pourquoi choisir GeniVision
                </h2>
            </div>
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
                {/* Label */}
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#ede7e3] rounded-xl p-6 border border-black/10"
                    >
                        <span className="text-3xl font-bold text-red-300">
                            {item.id}
                        </span>
                        <h3 className="mt-2 font-semibold text-lg text-[#3b2f2a]">
                            {item.title}
                        </h3>
                        <p className="mt-2 text-[#6b5b53] text-sm">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
import React, { useEffect } from "react";
import image5 from "../assets/image5.webp"; // bannière accueil
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image50 from "../assets/image50.webp";

// Composant pour les blocs de contenu institutionnel
const ContentBlock = ({ title, description, items }) => (
  <article className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-3">{title}</h2>
      {description && <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>}
      {items && (
        <ul className="list-disc pl-5 text-gray-700 space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

export default function Home() {
  // Préchargement des images
  useEffect(() => {
    [image5, image1, image2, image50].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const institutionalContent = [
    {
      title: "Vision",
      description:
        "Faire du Tchad un État où les droits de l’homme sont mieux respectés, la gouvernance pratiquée, les libertés fondamentales assurées et les citoyens conscients de leurs droits.",
      items: [
        "Formation des citoyens et citoyennes",
        "Dénonciation des violations des droits de l’homme",
        "Défense juridique des populations vulnérables",
        "Plaidoyer pour l’État de droit",
        "Professionnalisme et impact social",
      ],
    },
    {
      title: "Mission",
      description:
        "Promouvoir les libertés fondamentales, défendre les droits humains, cultiver la citoyenneté et renforcer la gouvernance au Tchad.",
    },
    {
      title: "Valeurs",
      items: [
        "Respect de la dignité humaine",
        "Créativité et innovation",
        "Recherche de l’excellence",
        "Dialogue et non‑violence",
        "Engagement citoyen",
      ],
    },
    {
      title: "Objectifs spécifiques",
      items: [
        "Sensibiliser les citoyens sur leurs droits et devoirs",
        "Promouvoir le respect des droits de l’homme sur tout le territoire",
        "Faciliter l’accès à la justice pour les populations vulnérables",
      ],
    },
  ];

  const newsAndEvents = [
    {
      title: "Formation des élus locaux à la gouvernance",
      content:
        "En juin 2025, l’APLFT a organisé une session de formation à Moundou pour renforcer les capacités des élus locaux.",
      linkText: "En savoir plus",
      linkUrl: "/activities",
    },
    {
      title: "Assistance juridique aux réfugiés",
      content:
        "Plus de 1 000 personnes ont bénéficié d’une assistance juridique au cours du premier trimestre 2025.",
      linkText: "Lire les actualités",
      linkUrl: "/activities",
    },
  ];

  const activityImages = [
    {
      src: image1,
      alt: "Atelier de sensibilisation",
      caption: "Atelier de sensibilisation des jeunes sur leurs droits fondamentaux.",
    },
    {
      src: image2,
      alt: "Rencontre communautaire",
      caption: "Rencontre communautaire dans le sud du Tchad pour la cohésion sociale.",
    },
    {
      src: image50,
      alt: "Équipe sur le terrain",
      caption: "L’équipe de l’APLFT lors d’une mission de terrain en milieu rural.",
    },
  ];

  return (
    <>
      {/* Bannière d'accueil */}
      <section
        className="relative w-screen h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-4"
        style={{ backgroundImage: `url(${image5})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
            Association pour la Promotion des Libertés Fondamentales au Tchad (APLFT)
          </h1>
          <p className="text-base sm:text-lg mb-6">
            Œuvrer pour un Tchad où les droits humains sont respectés, la justice accessible et la citoyenneté active.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/activities"
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition"
            >
              Découvrir nos actions
            </a>
            <a
              href="/contacts"
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Engagement institutionnel */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Notre Engagement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {institutionalContent.map((block, idx) => (
            <ContentBlock key={idx} {...block} />
          ))}
        </div>
      </section>

      {/* Actualités et événements récents */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-800">Actualités & Événements Récents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsAndEvents.map((actu, i) => (
            <article key={i} className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{actu.title}</h3>
              <p className="text-gray-700 mt-2">{actu.content}</p>
              <a href={actu.linkUrl} className="text-blue-600 hover:underline mt-4 inline-block">
                {actu.linkText}
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Quelques images d'activités */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Quelques images d’activités
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {activityImages.map((img, idx) => (
            <figure key={idx} className="flex flex-col items-center text-center">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-sm text-gray-600 px-2">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

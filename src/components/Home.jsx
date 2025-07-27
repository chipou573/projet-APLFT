import React from "react";
import image5 from "../assets/image5.jpg"; // Image de bannière
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image6 from "../assets/image6.jpg"; // Assure-toi que ce fichier existe bien

// Composant pour les blocs de contenu
const ContentBlock = ({ title, description, items }) => (
  <article className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between h-full">
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-3">{title}</h2>
      {description && <p className="text-black-700 mb-4 leading-relaxed">{description}</p>}
      {items && (
        <ul className="list-disc pl-5 text-black-700 space-y-1">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  </article>
);

export default function Home() {
  const institutionalContent = [
    {
      title: "Vision",
      description:
        "Devenir une des organisations non étatiques qui aura contribué à faire du Tchad un État où les droits de l’homme sont mieux respectés, la bonne gouvernance pratiquée, les libertés fondamentales assurées, et les citoyens connaissent leurs droits et devoirs.",
      items: [
        "Assurer la formation des citoyens et citoyennes",
        "Dénoncer les violations des droits de l’homme",
        "Défendre les citoyens en cas de violations de leurs droits",
        "Faire pression sur les autorités pour l’avènement d’un État de droit",
        "Agir avec professionnalisme et impact",
      ],
    },
    {
      title: "Mission",
      description:
        "Contribuer à l’avènement d’un véritable État de droit et d’une démocratie par la promotion des libertés fondamentales, la défense des droits humains, la culture citoyenne et une meilleure gouvernance.",
    },
    {
      title: "Valeurs",
      items: [
        "Respect de la dignité humaine",
        "Créativité, innovation",
        "Recherche de l’excellence",
        "Promotion de la culture démocratique",
        "Dialogue et non-violence",
      ],
    },
    {
      title: "Objectifs spécifiques",
      items: [
        "Faire des Tchadiens des citoyens conscients de leurs droits et devoirs",
        "Faire connaître et respecter les droits de l’homme au Tchad",
        "Contribuer à l’exercice effectif des droits sur tout le territoire",
      ],
    },
  ];

  const newsAndEvents = [
    {
      title: "Formation des élus locaux à la gouvernance démocratique",
      content:
        "En juin 2025, l’APLFT a organisé une session de formation pour renforcer les capacités des élus locaux à Moundou.",
      linkText: "En savoir plus",
      linkUrl: "/activities",
    },
    {
      title: "Soutien juridique aux réfugiés et déplacés",
      content:
        "Plus de 1000 personnes ont bénéficié d’assistance juridique au cours du premier trimestre 2025.",
      linkText: "Lire les actualités",
      linkUrl: "/activities",
    },
  ];

  const galleryImages = [
    { src: image1, alt: "Atelier de sensibilisation" },
    { src: image2, alt: "Rencontre communautaire" },
    { src: image6, alt: "Équipe sur le terrain" },
  ];

  return (
    <>
      {/* Bannière accueil pleine page */}
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
              href="/contact"
              className="bg-yellow-500 text-white font-semibold px-6 py-3 rounded hover:bg-yellow-600 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Notre Engagement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {institutionalContent.map((block, idx) => (
            <ContentBlock key={idx} {...block} />
          ))}
        </div>
      </section>

      {/* Actualités & Événements */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center text-blue-800">
          Actualités & Événements Récents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsAndEvents.map((actu, i) => (
            <article key={i} className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{actu.title}</h3>
              <p className="mt-2 text-black-700">{actu.content}</p>
              <a
                href={actu.linkUrl}
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                {actu.linkText}
              </a>
            </article>
          ))}
        </div>
      </section>

     
    </>
  );
}

import React, { useEffect } from "react";
import teamPhoto from "../assets/bureau.webp";
import heroBackground from "../assets/immmm.webp";

const content = {
  hero: {
    title: "À Propos de l'APLFT",
    subtitle:
      "Découvrez notre histoire, notre mission et notre engagement pour les droits humains au Tchad",
  },
  history: {
    title: "Notre Histoire",
    subtitle: "Un parcours de 15 années au service des libertés fondamentales :",
    timeline: [
      {
        year: "2010",
        title: "Fondation de l'APLFT",
        description:
          "Création de l'association avec pour mission la promotion des droits humains au Tchad.",
      },
      {
        year: "2012",
        title: "Première clinique juridique",
        description:
          "Ouverture de notre première clinique d'assistance juridique gratuite à N'Djamena.",
      },
      {
        year: "2015",
        title: "Expansion régionale",
        description:
          "Extension de nos activités dans 5 régions du Tchad avec des délégations locales.",
      },
      {
        year: "2018",
        title: "Reconnaissance internationale",
        description:
          "Obtention du statut consultatif auprès des Nations Unies.",
      },
      {
        year: "2020",
        title: "Programme de formation",
        description:
          "Lancement du programme de formation en droits humains pour les jeunes.",
      },
      {
        year: "2023",
        title: "Prix national",
        description:
          "Réception du Prix National pour la Promotion des Droits Humains.",
      },
    ],
  },
  mission: {
    title: "Notre Mission",
    description:
      "L'œuvre de l'APLFT pour la promotion et la protection des droits humains au Tchad à travers des actions concrètes de plaidoyer, d'assistance juridique et de sensibilisation. Nous nous engageons à défendre les libertés fondamentales et à accompagner les populations vulnérables dans l'accès à la justice.",
    values: [
      { title: "Intégrité", description: "Transparence et honnêteté", icon: "balance-scale" },
      { title: "Justice", description: "Équité et égalité des droits", icon: "gavel" },
      { title: "Solidarité", description: "Soutien aux plus vulnérables", icon: "hands-helping" },
      { title: "Excellence", description: "Qualité et impact social", icon: "award" },
    ],
  },
  team: {
    title: "Notre Équipe Dirigeante",
    members: [
      {
        name: "Ali Mahamat Mbodou",
        role: "Président du Conseil de Gouvernance Associatif",
        bio: "Leader engagé guidant les orientations stratégiques de l'APLFT.",
      },
      {
        name: "Mme LARLEM Marie",
        role: "Coordinatrice Générale",
        bio: "Assure la coordination générale et la gestion opérationnelle.",
      },
      {
        name: "Dr Mahamat Hassan ABAKAR",
        role: "Coordinateur Général (historique)",
        bio: "Juriste et docteur en droit international avec 20 ans d'expérience.",
      },
      {
        name: "Mme Fatima MOUSSA",
        role: "Directrice des Programmes",
        bio: "Spécialiste en développement communautaire et droits des femmes.",
      },
      {
        name: "M. Ahmat SALEH",
        role: "Responsable Clinique Juridique",
        bio: "Avocat supervisant l’assistance juridique gratuite.",
      },
      {
        name: "Mme Amina IBRAHIM",
        role: "Responsable Plaidoyer",
        bio: "Experte en communication, mène les campagnes de sensibilisation.",
      },
      {
        name: "Mr Ndoletar Luc",
        role: "Chargé des programmes, études et projets de l'APLFT",
        bio: "Responsable de la facilitation des formations et de la coordination des projets au sein de l'association.",
      }
    ],
  },
  achievements: {
    title: "Actions Clés des 5 Dernières Années",
    points: [
      "6 680 personnes réfugiées et déplacées ont eu accès à la justice.",
      "Plus de 35 000 personnes sensibilisées sur leurs droits et devoirs.",
      "104 580 enfants ont obtenu des actes de naissance.",
      "1 544 femmes et filles victimes de violences prises en charge.",
      "Formations dans 5 communes pour renforcer la gouvernance locale.",
      "Résolution non-violente de 200 conflits communautaires.",
      "Observation et accompagnement des processus électoraux nationaux.",
    ],
  },
  certifications: {
    title: "Certifications et Reconnaissances",
    items: [
      {
        title: "Statut Consultatif ONU",
        description: "Reconnaissance par le Conseil Économique et Social des Nations Unies.",
        year: 2018,
      },
      {
        title: "Prix National Droits Humains",
        description: "Décerné par le Gouvernement du Tchad.",
        year: 2023,
      },
      {
        title: "Certification ISO 9001",
        description: "Certification qualité pour nos processus de gestion.",
        year: 2022,
      },
      {
        title: "Partenaire Officiel UE",
        description: "Partenariat avec l’Union Européenne.",
        year: 2021,
      },
    ],
  },
};

const ContentBlock = ({ title, description, items }) => (
  <article className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold text-blue-800 mb-4">{title}</h2>
    {description && <p className="text-black-700 mb-4">{description}</p>}
    {items && (
      <ul className="list-disc pl-5 text-black-700 space-y-2">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
  </article>
);

export default function About() {
  // Préchargement des images pour un affichage rapide
  useEffect(() => {
    [heroBackground, teamPhoto].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">{content.hero.title}</h1>
          <p className="text-lg lg:text-xl">{content.hero.subtitle}</p>
        </div>
      </section>

      {/* History */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
        <ContentBlock
          title={content.history.title}
          description={content.history.subtitle}
          items={content.history.timeline.map(
            (t) => `${t.year} - ${t.title} : ${t.description}`
          )}
        />
      </section>

      {/* Mission & Values */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">{content.mission.title}</h2>
        <p className="mb-8 text-black-700">{content.mission.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.mission.values.map(({ title, description, icon }) => (
            <div
              key={title}
              className="flex space-x-4 p-4 border rounded shadow hover:shadow-lg transition"
            >
              <div className="text-blue-700 text-4xl">
                <i className={`fas fa-${icon}`} aria-hidden="true"></i>
              </div>
              <div>
                <h3 className="font-semibold text-xl">{title}</h3>
                <p className="text-black-700">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <img
          src={teamPhoto}
          alt="Équipe APLFT"
          className="mx-auto mb-8 rounded-lg shadow-lg max-h-[600px] w-full max-w-4xl object-cover"
          loading="eager"
        />
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">
          {content.team.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.team.members.map(({ name, role, bio }) => (
            <article
              key={name}
              className="border p-6 rounded shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="italic text-sm text-gray-600 mb-2">{role}</p>
              <p className="text-black-700">{bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ContentBlock
          title={content.achievements.title}
          items={content.achievements.points}
        />
      </section>

      {/* Certifications */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <ContentBlock
          title={content.certifications.title}
          items={content.certifications.items.map(
            ({ title, description, year }) =>
              `${title} (${year}) : ${description}`
          )}
        />
      </section>
    </>
  );
}

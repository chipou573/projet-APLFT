// src/pages/Activities.jsx
import React from "react";
import image20 from "../assets/image20.webp"; // Image de couverture

export default function Activities() {
  return (
    <main className="w-full">

      {/* Image de couverture plein écran */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${image20})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="relative z-10 text-white text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Activités et Domaines d’Intervention
          </h1>
          <p className="text-lg md:text-xl">
            Découvrez notre mandat, nos axes d’action stratégiques, notre couverture géographique
            et les résultats clés obtenus ces dernières années.
          </p>
        </div>
      </section>

      {/* Contenu principal en grille */}
      <section className="max-w-6xl mx-auto px-4 py-16 space-y-20">

        {/* Mandat Général */}
        <div className="grid md:grid-cols-1 gap-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b pb-2">Mandat Général</h2>
          <p className="text-gray-800 text-lg">
            L’APLFT œuvre à la promotion des libertés fondamentales, défend les droits humains,
            cultive la citoyenneté et renforce la gouvernance.
          </p>
        </div>

        {/* Axes Stratégiques */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">Axes Stratégiques</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border rounded shadow bg-white">
              <h3 className="text-xl font-semibold text-black mb-2">
                Assistance judiciaire, conseils juridiques et orientations
              </h3>
              <p className="text-gray-800">
                Mise en place de cliniques juridiques et prise en charge juridique des populations
                vulnérables telles que les réfugiés, déplacés, et femmes victimes de violences.
              </p>
            </div>

            <div className="p-6 border rounded shadow bg-white">
              <h3 className="text-xl font-semibold text-black mb-2">
                Éducation à la citoyenneté et gouvernance
              </h3>
              <p className="text-gray-800">
                Formation des élus locaux, éducation civique, promotion de la gestion non violente
                des conflits et sensibilisation des communautés.
              </p>
            </div>

            <div className="p-6 border rounded shadow bg-white">
              <h3 className="text-xl font-semibold text-black mb-2">
                Lutte contre les violations des droits humains
              </h3>
              <p className="text-gray-800">
                Dénonciation publique et intervention concrète sur les cas de violations des
                droits humains.
              </p>
            </div>

            <div className="p-6 border rounded shadow bg-white">
              <h3 className="text-xl font-semibold text-black mb-2">
                Genre, droits humains et développement
              </h3>
              <p className="text-gray-800">
                Actions transversales dédiées à la prise en charge des survivantes de violences
                basées sur le genre, et à la promotion de l’égalité.
              </p>
            </div>
          </div>
        </div>

        {/* Couverture Géographique */}
        <div className="grid md:grid-cols-1 gap-6">
          <h2 className="text-3xl font-bold text-blue-800 mb-4 border-b pb-2">Couverture Géographique</h2>
          <p className="text-gray-800 text-lg p-6 border rounded shadow bg-white">
            L’APLFT intervient dans 17 des 23 régions tchadiennes, avec une implantation forte via ses
            5 délégations régionales couvrant tout le territoire.
          </p>
        </div>

        {/* Résultats Clés */}
        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-6 border-b pb-2">Résultats Clés (5 dernières années)</h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-800 text-base p-6 border rounded shadow bg-white">
            <li>
              Plus de 6 680 personnes réfugiées ou déplacées ont bénéficié d’un accès à la justice
              à travers les cliniques juridiques.
            </li>
            <li>Plus de 35 000 personnes ont été sensibilisées à leurs droits.</li>
            <li>
              104 580 enfants ont bénéficié d’actes de naissance officiels grâce à nos appuis.
            </li>
            <li>
              1 544 femmes et filles victimes de violences ont été prises en charge par nos services.
            </li>
            <li>
              Soutien technique et formations effectués dans 5 communes pour renforcer la
              gouvernance locale et la participation citoyenne.
            </li>
            <li>Résolution non violente de plus de 200 conflits communautaires en 2015.</li>
            <li>Observation et accompagnement actif des processus électoraux nationaux.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

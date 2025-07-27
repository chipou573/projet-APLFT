// src/pages/Activities.jsx

import React from "react";

export default function Activities() {
  return (
    <section className="px-4 py-10 max-w-10xl mx-auto">
      {/* Titre principal avec image en background */}
      <div
        className="relative text-white rounded-lg shadow mb-20 flex items-center justify-center text-center h-96 md:h-[500px] lg:h-[600px]"
        style={{
          backgroundImage: `url('/src/assets/pexel6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay semi-transparent pour une bonne lisibilité */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

        {/* Contenu au-dessus de l'overlay */}
        <div className="relative max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Activités et Domaines d’Intervention
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Découvrez notre mandat, nos axes d’action stratégiques, notre couverture géographique et les résultats clés obtenus ces dernières années.
          </p>
        </div>
      </div>

      {/* Mandat général */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Mandat Général</h2>
        <p className="text-gray-700 text-lg">
          L’APLFT œuvre à la promotion des libertés fondamentales, défend les droits humains, cultive la citoyenneté et renforce la gouvernance.
        </p>
      </div>

      {/* Axes stratégiques */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Axes Stratégiques</h2>
        <ol className="list-decimal pl-8 space-y-6 text-gray-800">
          <li>
            <strong>Assistance judiciaire, conseils juridiques et orientations :</strong>
            <p className="mt-1">
              Mise en place de cliniques juridiques et prise en charge juridique des populations vulnérables telles que les réfugiés, déplacés, et femmes victimes de violences.
            </p>
          </li>
          <li>
            <strong>Éducation à la citoyenneté et gouvernance :</strong>
            <p className="mt-1">
              Formation des élus locaux, éducation civique, promotion de la gestion non violente des conflits et sensibilisation des communautés.
            </p>
          </li>
          <li>
            <strong>Lutte contre les violations des droits humains :</strong>
            <p className="mt-1">
              Dénonciation publique et intervention concrète sur les cas de violations des droits humains.
            </p>
          </li>
          <li>
            <strong>Genre, droits humains et développement :</strong>
            <p className="mt-1">
              Actions transversales dédiées à la prise en charge des survivantes de violences basées sur le genre, et à la promotion de l’égalité.
            </p>
          </li>
        </ol>
      </div>

      {/* Couverture géographique */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Couverture Géographique</h2>
        <p className="text-gray-700 text-lg">
          L’APLFT intervient dans 17 des 23 régions tchadiennes, avec une implantation forte via ses 5 délégations régionales couvrant tout le territoire.
        </p>
      </div>

      {/* Résultats clés */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Résultats Clés (5 dernières années)</h2>
        <ul className="list-disc pl-8 space-y-4 text-gray-800">
          <li>
            Plus de 6 680 personnes réfugiées ou déplacées ont bénéficié d’un accès à la justice à travers les cliniques juridiques.
          </li>
          <li>
            Plus de 35 000 personnes ont été sensibilisées à leurs droits.
          </li>
          <li>
            104 580 enfants ont bénéficié d’actes de naissance officiels grâce à nos appuis.
          </li>
          <li>
            1 544 femmes et filles victimes de violences ont été prises en charge par nos services.
          </li>
          <li>
            Soutien technique et formations effectués dans 5 communes pour renforcer la gouvernance locale et la participation citoyenne.
          </li>
          <li>
            Résolution non violente de plus de 200 conflits communautaires en 2015.
          </li>
          <li>
            Observation et accompagnement actif des processus électoraux nationaux.
          </li>
        </ul>
      </div>
    </section>
  );
}

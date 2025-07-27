import React from "react";

const data = {
  // Niveaux politique/stratégique
  politicalStrategic: [
    "Assemblée Générale Nationale (AGN)",
    "Conseil de Gouvernance Associatif (CGA)",
    "Commissions Permanentes",
  ],

  // Niveau opérationnel
  operational: [
    "Coordination Générale (CG)",
    {
      name: "Départements",
      departments: [
        {
          name: "Département Conseils Juridiques, Orientations et Assistances judiciaires",
          delegations: [
            { region: "Nord Est", seat: "Abéché", antennas: 5 },
            { region: "Centre et Ouest", seat: "N'Djamena", antennas: 5 },
          ],
        },
        {
          name: "Département Administratif & Financier",
          delegations: [{ region: "Sud Ouest", seat: "Bongor", antennas: 5 }],
        },
        {
          name: "Département Études, Programmes, Formation, Information, Éducation & Communication",
          delegations: [
            { region: "Sud", seat: "Moundou", antennas: 6 },
            { region: "Sud Est", seat: "Sarh", antennas: 5 },
          ],
        },
      ],
    },
    "Délégations régionales",
  ],

  // Base militante
  grassroots: [
    "Commissions spécialisées",
    "Clubs de vulgarisation",
    "Points focaux"
  ]
};

export default function DepartmentsVerticalTree() {
  return (
    <section className="px-4 py-10 max-w-6xl mx-auto space-y-20">
      <h1 className="text-3xl font-bold text-blue-700 mb-12 text-center">
        Organigramme APLFT – Vue hiérarchique
      </h1>

      {/* Niveau Politique / Stratégique */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4 text-center">
          Niveau Politique / Stratégique
        </h2>
        <div className="flex flex-col items-center text-center space-y-8">
          {data.politicalStrategic.map((item, idx) => (
            <React.Fragment key={item}>
              <div
                className={`${
                  idx === 0
                    ? "bg-blue-700"
                    : idx === 1
                    ? "bg-blue-600"
                    : "bg-blue-500"
                } text-white px-8 py-4 rounded shadow font-semibold w-full max-w-3xl`}
              >
                {item}
              </div>
              {idx < data.politicalStrategic.length - 1 && (
                <div
                  className={`w-px h-8 ${
                    idx === 0
                      ? "bg-blue-700"
                      : idx === 1
                      ? "bg-blue-600"
                      : "bg-blue-500"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Niveau Opérationnel */}
      <div className="space-y-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-8 text-center">
          Niveau Opérationnel
        </h2>

        {/* Coordination Générale */}
        <div className="flex flex-col items-center text-center space-y-8 mb-16">
          <div className="bg-blue-500 text-white px-8 py-4 rounded shadow font-semibold w-full max-w-2xl">
            {data.operational[0] /* Coordination Générale */}
          </div>
        </div>

        {/* Départements et Délégations */}
        <div className="flex flex-col items-center space-y-20">
          {data.operational[1].departments.map(({ name, delegations }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center w-full max-w-4xl"
            >
              <div className="w-px h-12 bg-blue-500 mb-6"></div>

              <div className="bg-blue-400 text-white px-6 py-3 rounded shadow-md font-semibold w-full max-w-md">
                {name}
              </div>

              <div className="w-px h-12 bg-blue-400 mt-6"></div>

              <div className="flex flex-wrap justify-center gap-6 mt-6">
                {delegations.map(({ region, seat, antennas }) => (
                  <div
                    key={region}
                    className="bg-blue-200 text-blue-900 rounded shadow px-5 py-4 w-72 text-sm"
                  >
                    <p>
                      <strong>Région :</strong> {region}
                    </p>
                    <p>
                      <strong>Siège :</strong> {seat}
                    </p>
                    <p>
                      <strong>Antennes :</strong> {antennas} antenne
                      {antennas > 1 ? "s" : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Délégations régionale simple affichage */}
          <div className="bg-blue-400 text-white px-6 py-3 rounded shadow-md font-semibold w-full max-w-4xl text-center">
            {data.operational[2] /* Délégations régionales */}
          </div>
        </div>
      </div>

      {/* Niveau Base Militante */}
      <div className="space-y-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
          Niveau Base Militante
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {data.grassroots.map((structure) => (
            <div
              key={structure}
              className="bg-blue-200 text-blue-900 rounded shadow px-6 py-8 font-semibold text-lg"
            >
              {structure}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

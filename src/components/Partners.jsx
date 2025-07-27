import React from "react";

const partners = [
  { name: "Union Européenne (UE)", logo: "/src/assets/unioneu.jpg", url: "https://europa.eu" },
  { name: "UNICEF", logo: "/src/assets/unicef.png", url: "https://www.unicef.org" },
  { name: "UNHCR", logo: "/src/assets/unhcr.png", url: "https://www.unhcr.org" },
  { name: "ALBOAN", logo: "/src/assets/alboan.png", url: "https://www.alboan.org" },
  { name: "SWISSAID", logo: "/src/assets/swissaid.png", url: "https://swissaid.ch" },
];

export default function Partners() {
  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Partenaires</h1>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-8 gap-8 items-center">
        {partners.map(({ name, logo, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-3 transform transition hover:scale-105"
          >
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded shadow p-4">
              <img src={logo} alt={name} className="max-h-16 max-w-full object-contain" />
            </div>
            <span className="text-center text-sm text-gray-700">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

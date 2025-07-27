import React, { useState } from "react";

export default function Donate() {
  const [donType, setDonType] = useState("financier");
  const [montant, setMontant] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  // Validation simple email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Validation simple téléphone (digits, espaces, +, entre 9 et 15 caractères)
  const validatePhone = (phone) => {
    const re = /^[+]?[\d\s]{9,15}$/;
    return re.test(phone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!contact) {
      setError("Veuillez saisir votre email ou numéro de téléphone.");
      return;
    }

    // On valide le contact : soit un email valide, soit un téléphone valide
    if (!validateEmail(contact) && !validatePhone(contact)) {
      setError("Veuillez saisir un email ou un numéro de téléphone valide.");
      return;
    }

    alert(`Merci pour votre don ${donType === "financier" ? "financier" : "matériel"}!

Montant/Description : ${donType === "financier" ? montant + " FCFA" : description}
Contact : ${contact}`);

    setMontant("");
    setDescription("");
    setContact("");
    setDonType("financier");
  };

  return (
    <section className="p-6 max-w-lg mx-auto bg-white rounded shadow">
      {/* Section texte au-dessus du formulaire */}
      <section className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">Soutenez APLFT</h2>
        <p>Votre contribution nous aide à bâtir un avenir de paix.</p>
      </section>

      {/* Formulaire de don */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Type de don */}
        <fieldset>
          <legend className="mb-2 font-semibold">Type de don</legend>
          <label className="inline-flex items-center mr-6">
            <input
              type="radio"
              name="donType"
              value="financier"
              checked={donType === "financier"}
              onChange={() => setDonType("financier")}
              className="mr-2"
              required
            />
            Financier
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="donType"
              value="materiel"
              checked={donType === "materiel"}
              onChange={() => setDonType("materiel")}
              className="mr-2"
            />
            Matériel
          </label>
        </fieldset>

        {/* Montant si don financier */}
        {donType === "financier" && (
          <div>
            <label htmlFor="montant" className="block mb-1 font-medium">
              Montant en FCFA
            </label>
            <input
              type="number"
              id="montant"
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
              placeholder="Ex : 10000"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-atnvGreen"
            />
          </div>
        )}

        {/* Description si don matériel */}
        {donType === "materiel" && (
          <div>
            <label htmlFor="description" className="block mb-1 font-medium">
              Description du don matériel
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex : vêtements, matériel informatique..."
              required
              className="w-full border border-gray-300 rounded px-3 py-2 resize-y focus:outline-none focus:ring focus:ring-atnvGreen"
              rows={4}
            />
          </div>
        )}

        {/* Contact */}
        <div>
          <label htmlFor="contact" className="block mb-1 font-medium">
            Votre email ou téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="exemple@mail.com ou +235 6000 0000"
            className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring ${
              error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-atnvGreen"
            }`}
            required
          />
          {error && <p className="mt-1 text-red-600 text-sm">{error}</p>}
        </div>

        {/* Bouton d’envoi */}
        <button
          type="submit"
          className="w-full bg-atnvBlue text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
        >
          Envoyer le don
        </button>
      </form>
    </section>
  );
}

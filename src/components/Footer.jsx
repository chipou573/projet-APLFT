import React, { useState } from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import logo from '../assets/logo.webp';

export default function Footer() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const REAL_EMAIL = "contact@aplft.org";   // Ton email de contact réel pour affichage
  const REAL_PHONE_DISPLAY = "+235 22 52 34 56"; // Affiché sur le site

  // Validation email basique
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // Validation téléphone basique : chiffres, espaces, + autorisés, 9-15 caractères
  function validatePhone(phone) {
    const re = /^[+]?[\d\s]{9,15}$/;
    return re.test(phone);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Veuillez saisir une adresse email valide.");
      return;
    }

    if (!validatePhone(phone)) {
      setError("Veuillez saisir un numéro de téléphone valide.");
      return;
    }

    // Simuler envoi (ou remplacer par appel API)
    try {
      await new Promise((res) => setTimeout(res, 1000));
      setIsSent(true);
      setEmail("");
      setPhone("");
    } catch {
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  }

  return (
    <footer className="bg-gray-700 text-white py-8 mt-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Contact & logo */}
        <div>
          <img className="h-12 w-12" src={logo} alt="Logo APLFT" />
          <p className="mb-4 max-w-xs">
            Association pour la Promotion des Libertés Fondamentales au Tchad<br />
            Œuvrer pour la défense des droits humains et la justice.
          </p>
          <address className="not-italic mb-4">
            Email: <a href={`mailto:${REAL_EMAIL}`} className="underline hover:text-yellow-400">{REAL_EMAIL}</a><br />
            Téléphone: <a href={`tel:${REAL_PHONE_DISPLAY.replace(/\s/g, "")}`} className="underline hover:text-yellow-400">{REAL_PHONE_DISPLAY}</a>
          </address>
          <div className="flex space-x-4">
            <Facebook size={24} color="#311fccff" className="cursor-pointer hover:opacity-80" />
            <Twitter size={24} color="#ec686fff" className="cursor-pointer hover:opacity-80" />
            <Linkedin size={24} color="#e4e3dfff" className="cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Navigation secondaire */}
        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul>
            <li><a href="/" className="hover:text-yellow-400">Accueil</a></li>
            <li><a href="/about" className="hover:text-yellow-400">À Propos</a></li>
            <li><a href="/departments" className="hover:text-yellow-400">Départements</a></li>
            <li><a href="/activities" className="hover:text-yellow-400">Activités</a></li>
            <li><a href="/partners" className="hover:text-yellow-400">Partenaires</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        {/* Informations légales */}
        <div>
          <h4 className="font-semibold mb-3">Informations</h4>
          <ul>
            <li><a href="/privacy" className="hover:text-yellow-400">Politique de confidentialité</a></li>
            <li><a href="/terms" className="hover:text-yellow-400">Conditions d'utilisation</a></li>
            <li><a href="/sitemap" className="hover:text-yellow-400">Plan du site</a></li>
          </ul>
        </div>

        {/* Newsletter / formulaire avec email + téléphone */}
        <div>
          <h4 className="font-semibold mb-3">Restez informés</h4>
          <p className="mb-4 max-w-xs">Inscrivez-vous à notre newsletter pour recevoir les dernières actualités.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">

            <input
              type="email"
              placeholder="Votre email"
              aria-label="Email newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded text-gray-900"
              disabled={isSent}
              required
            />

            <input
              type="tel"
              placeholder="Votre téléphone"
              aria-label="Téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="p-2 rounded text-gray-900"
              disabled={isSent}
              required
            />

            <button
              type="submit"
              className={`px-4 py-2 rounded transition text-white
                ${isSent ? "bg-green-600 cursor-default" : "bg-yellow-500 hover:bg-yellow-400 cursor-pointer"}`}
              disabled={isSent}
            >
              {isSent ? "Envoyé ✓" : "S'inscrire"}
            </button>

          </form>

          {error && <p className="mt-2 text-yellow-400 text-sm">{error}</p>}
        </div>

      </div>

      {/* Footer copyright */}
      <div className="mt-8 border-t border-black-900 pt-4 text-center text-sm text-white-400">
        &copy; {new Date().getFullYear()} APLFT - Tous droits réservés.
      </div>
    </footer>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeClass = "text-yellow-400 border-b-2 border-yellow-400";

  return (
    <nav className="bg-white shadow p-4 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">

        {/* Logo à gauche */}
        <NavLink to="/">
          <img src={logo} alt="Logo APLFT" className="h-10 w-auto" />
        </NavLink>

        {/* Menu desktop - caché sur mobile (md et plus affiché) */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? `${activeClass} uppercase font-semibold`
                : "text-blue-800 uppercase font-semibold"
            }
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} uppercase font-semibold`
                : "text-blue-800 uppercase font-semibold"
            }
          >
            À Propos
          </NavLink>
          <NavLink
            to="/departments"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} uppercase font-semibold`
                : "text-blue-800 uppercase font-semibold"
            }
          >
            Départements
          </NavLink>
          <NavLink
            to="/activities"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} uppercase font-semibold`
                : "text-blue-800 uppercase font-semibold"
            }
          >
            Activités
          </NavLink>
          <NavLink
            to="/partners"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} uppercase font-semibold`
                : "text-blue-800 uppercase font-semibold"
            }
          >
            Partenaires
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} uppercase font-semibold`
                : "text-blue-800 uppercase font-semibold"
            }
          >
            Contacts
          </NavLink>
          {/* Lien "Faire un don" */}
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive
                ? `${activeClass} uppercase font-semibold`
                : "text-blue-800 uppercase font-semibold"
            }
          >
            Faire un don
          </NavLink>
        </div>

        {/* Espace vide à droite pour équilibre sur desktop */}
        <div className="hidden md:block w-10" aria-hidden="true" />

        {/* Bouton menu mobile (visible md-) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-blue-800 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded"
          aria-label="Toggle menu"
        >
          {/* Icône hamburger ou croix */}
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-white shadow-md rounded-md">
          <nav className="flex flex-col space-y-1 p-4">
            <NavLink
              to="/"
              end
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer uppercase font-semibold ${
                  isActive
                    ? "text-yellow-400 bg-blue-100"
                    : "text-blue-800"
                }`
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer uppercase font-semibold ${
                  isActive
                    ? "text-yellow-400 bg-blue-100"
                    : "text-blue-800"
                }`
              }
            >
              À Propos
            </NavLink>
            <NavLink
              to="/departments"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer uppercase font-semibold ${
                  isActive
                    ? "text-yellow-400 bg-blue-100"
                    : "text-blue-800"
                }`
              }
            >
              Départements
            </NavLink>
            <NavLink
              to="/activities"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer uppercase font-semibold ${
                  isActive
                    ? "text-yellow-400 bg-blue-100"
                    : "text-blue-800"
                }`
              }
            >
              Activités
            </NavLink>
            <NavLink
              to="/partners"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer uppercase font-semibold ${
                  isActive
                    ? "text-yellow-400 bg-blue-100"
                    : "text-blue-800"
                }`
              }
            >
              Partenaires
            </NavLink>
            <NavLink
              to="/contacts"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer uppercase font-semibold ${
                  isActive
                    ? "text-yellow-400 bg-blue-100"
                    : "text-blue-800"
                }`
              }
            >
              Contacts
            </NavLink>
            <NavLink
              to="/donate"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded cursor-pointer uppercase font-semibold ${
                  isActive
                    ? "text-yellow-400 bg-blue-100"
                    : "text-blue-800"
                }`
              }
            >
              Faire un don
            </NavLink>
          </nav>
        </div>
      )}
    </nav>
  );
}

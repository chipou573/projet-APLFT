import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Departments from "./components/Departments.jsx";
import Activities from "./components/Activities.jsx";
import Partners from "./components/Partners.jsx";
import Contacts from "./components/Contacts.jsx";
import Donate from "./components/Donate.jsx";

export default function App() {
  const basename = import.meta.env.PROD ? "/projet-APLFT/" : "/";

  return (
    <Router basename={basename}>
      <div className="w-full min-h-screen bg-white flex flex-col overflow-x-hidden">
        <nav className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </nav>
        <div className="h-[var(--navbar-height,64px)]"></div>

        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="*" element={<h1>Page non trouvée</h1>} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

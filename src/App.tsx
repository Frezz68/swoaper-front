// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Prestation from "./pages/Prestation/Prestation";
import Contact from "./pages/Contact/Contact";
import Boutique from "./pages/Boutique/Boutique";
import Footer from "./components/Footer/Footer";
import PolitiqueDeConfidentialite from "./pages/PagesAdministratives/PolitiqueDeConfidentialite";
import PolitiqueDeRemboursement from "./pages/PagesAdministratives/PolitiqueDeRemboursement";
import PolitiqueDeLivraison from "./pages/PagesAdministratives/PolitiqueDeLivraison";
import MentionsLegales from "./pages/PagesAdministratives/MentionsLegales";
import ConditionsGeneralesDeVente from "./pages/PagesAdministratives/ConditionsGeneralesDeVente";
import ConditionsGeneralesUtilisation from "./pages/PagesAdministratives/ConditionsGeneralesUtilisation";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Router>
        <div>
          {/* ... (autres composants, comme Navbar) */}
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/prestations" element={<Prestation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/boutique" element={<Boutique />} />
            <Route
              path="/politique-de-confidentialite"
              element={<PolitiqueDeConfidentialite />}
            />
            <Route
              path="/politique-de-remboursement"
              element={<PolitiqueDeRemboursement />}
            />
            <Route
              path="/politique-de-livraison"
              element={<PolitiqueDeLivraison />}
            />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route
              path="/conditions-generales-de-vente"
              element={<ConditionsGeneralesDeVente />}
            />
            <Route
              path="/conditions-generales-utilisation"
              element={<ConditionsGeneralesUtilisation />}
            />

            {/* Vous pouvez ajouter d'autres routes ici si nécessaire */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Prestation from "./pages/Prestation";
import Contact from "./pages/Contact";
import Boutique from "./pages/Boutique";
function App() {
  return (
    <Router>
      <div>
        {/* ... (autres composants, comme Navbar) */}
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/prestations" element={<Prestation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/boutique" element={<Boutique />} />

          {/* Vous pouvez ajouter d'autres routes ici si nécessaire */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

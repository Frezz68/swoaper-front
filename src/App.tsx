// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Prestation from "./pages/Prestation/Prestation";
import Contact from "./pages/Contact/Contact";
import Boutique from "./pages/Boutique/Boutique";
import Footer from "./components/Footer/Footer";
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

            {/* Vous pouvez ajouter d'autres routes ici si nécessaire */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;

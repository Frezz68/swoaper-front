import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/swoaper-logo.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <img src={Logo}></img>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/prestations">Prestation</Link>
        </li>
        <li>
          <Link to="/boutique">Boutique</Link>
        </li>
        {/* Vous pouvez ajouter d'autres liens ici si nécessaire */}
      </ul>
    </nav>
  );
};

export default Navbar;

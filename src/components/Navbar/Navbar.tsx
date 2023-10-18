import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/swoaper-logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="navbar-container">
        <div className="navbar-item">
          <Link to="/home">Home</Link>
        </div>
        <div className="navbar-item">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="navbar-item">
          <Link to="/prestations">Prestation</Link>
        </div>
        <div className="navbar-item">
          <Link to="/boutique">Boutique</Link>
        </div>
        {/* Vous pouvez ajouter d'autres liens ici si nécessaire */}
      </div>
      <div className="icon">
        <i className="material-icons">favorite</i>
        <i className="material-icons">shopping_cart</i>
        <i className="material-icons">person</i>
      </div>
    </nav>
  );
};

export default Navbar;

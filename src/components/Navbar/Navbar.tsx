import React from "react";
import Logo from "../../assets/swoaper-logo.png";
import "./Navbar.scss";
import ModalService from "../../services/ModalService";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { Link } from "react-router-dom";

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
      </div>
      <div className="icon">
        <i className="material-icons">favorite</i>
        <i className="material-icons">shopping_cart</i>
        {/* Use ModalService to open modals for Login and Signup */}
        <ModalService>
          {(openModal) => (
            <>
              <i
                className="material-icons"
                onClick={() => {
                  console.log("Clic sur l'icône person");
                  // Define handleSignUpClick here to open Signup modal
                  const handleLoginClick = () => {
                    openModal(<Login onSignUpClick={handleSignUpClick} />);
                  };

                  // Define the function to open the signup modal
                  const handleSignUpClick = () => {
                    openModal(<Signup onSignInClick={handleLoginClick} />);
                  };

                  // Now you can pass handleSignUpClick to Login to be able to open Signup
                  openModal(<Login onSignUpClick={handleSignUpClick} />);
                }}
              >
                person
              </i>
            </>
          )}
        </ModalService>
      </div>
    </nav>
  );
};

export default Navbar;

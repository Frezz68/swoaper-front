import React, { useContext, useState } from "react";
import Logo from "../../assets/swoaper-logo.png";
import "./Navbar.scss";
import ModalService from "../../services/ModalService";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import Logout from "../Logout/Logout";

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const [closeModal, setCloseModal] = useState<() => void>(() => () => {}); // Initialisez closeModal avec une fonction vide

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    closeModal();
  };

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
          <Link to="/prestations">Prestation</Link>
        </div>
        <div className="navbar-item">
          <Link to="/contact">Contact</Link>
        </div>
        
        {/* <div className="navbar-item">
          <Link to="/boutique">Boutique</Link>
        </div>*/}
      </div>
      {user && (
        <div className="navbar-name">
          {user.first_name} {user.last_name.toUpperCase()}
        </div>
      )}
      <div className="icon">
        <i className="material-icons">favorite</i>
        <Link to="/panier">
          <i className="material-icons">shopping_cart</i>
        </Link>{" "}
        {/* Use ModalService to open modals for Login and Signup */}
        <ModalService>
          {(openModal, closeModal) => (
            <>
              {user ? (
                <i
                  className="material-icons"
                  onClick={() => {
                    console.log("Clic sur l'icône logout");
                    openModal(
                      <Logout
                        onLogoutClick={handleLogout}
                        close={closeModal} // Passez closeModal directement ici
                      />
                    );
                  }}
                >
                  logout
                </i>
              ) : (
                <i
                  className="material-icons"
                  onClick={() => {
                    console.log("Clic sur l'icône person");
                    // Define handleSignUpClick here to open Signup modal
                    const handleLoginClick = () => {
                      openModal(
                        <Login
                          onSignUpClick={handleSignUpClick}
                          close={closeModal}
                        />
                      );
                    };

                    // Define the function to open the signup modal
                    const handleSignUpClick = () => {
                      openModal(
                        <Signup
                          onSignInClick={handleLoginClick}
                          close={closeModal}
                        />
                      );
                    };

                    // Now you can pass handleSignUpClick to Login to be able to open Signup
                    openModal(
                      <Login
                        onSignUpClick={handleSignUpClick}
                        close={closeModal}
                      />
                    );
                  }}
                >
                  person
                </i>
              )}
            </>
          )}
        </ModalService>
      </div>
    </nav>
  );
};

export default Navbar;

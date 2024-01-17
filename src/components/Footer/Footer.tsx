import React from "react";
import "./Footer.scss";
import instagram from "../../assets/footer/instagram.png";
import tiktok from "../../assets/footer/tiktok.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="links">
          <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
          <Link to="/politique-de-remboursement">Politique de remboursement</Link>
          <Link to="/politique-de-livraison">Politique de Livraison</Link>
        </div>
        <div className="links">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/conditions-generales-de-vente">Conditions générales de vente</Link>
          <Link to="/conditions-generales-utilisation">Condition générales d'utilisation</Link>
        </div>
        <div className="icons">
          <img className="icon" src={tiktok} alt="" />
          <img className="icon" src={instagram} alt="" />
        </div>
      </div>
      <div className="right">
        © Swoaper. Tous droits réservés. Nantes, France
      </div>
    </div>
  );
};

export default Footer;

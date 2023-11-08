import React from "react";
import "./Footer.scss";
import instagram from "../../assets/footer/instagram.png";
import tiktok from "../../assets/footer/tiktok.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="links">
          <div className="link-list">
            <div>Mentions légales</div>
            <div>Conditions de nos offres</div>
            <div>Politiques de confidentialités</div>
          </div>
        </div>
        <div className="links">
          <div>CGU</div>
          <div>CGV</div>
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

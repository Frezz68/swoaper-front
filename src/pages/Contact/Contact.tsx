import React from "react";
import "./Contact.scss";
import "../../style/button.scss";

const Contact = () => {
  return (
    <div className="container-contact">
      <h1 className="titre">Contactez-nous !</h1>
      <input className="email" type="text" placeholder="Email" />
      <input className="objet" type="text" placeholder="Objet" />
      <textarea className="message" placeholder="Message" />
      <input className="pieceJointe" type="file"  accept="png,jpg"/>
      <button className="btn-tertiary">Envoyer</button>
    </div>
  );
};

export default Contact;

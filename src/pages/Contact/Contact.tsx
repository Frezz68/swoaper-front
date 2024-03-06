import React, { useState } from "react";
import "./Contact.scss";
import "../../style/button.scss";
import axios from "axios";

const Contact = () => {

  const [email, setEmail] = useState("");
  const [objet, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [pieceJointe, setPieceJointe] = useState<FileList | null>(null);
  const [MsgInfo, setMsgInfo] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleObjetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setObjet(event.target.value);
  };
  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };
  const handlePieceJointeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setPieceJointe(files);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, objet, message, pieceJointe);
    if (email.trim() === "" || objet.trim() === "" || message.trim() === "") {
      console.log("Veuillez remplir tous les champs");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/mail/contact", {
        email: email,
        objet: objet,
        message: message,
        pieceJointe: pieceJointe,
      });

      if (response.status === 200) {
        setMsgInfo('Envoyé avec succès');
      } else {
        setMsgInfo('Échec de l\'envoie');
        console.error('Échec de l\'envoie');
      }
    } catch (error) {
      setMsgInfo('Échec de l\'envoie');
      console.error('Erreur lors de l\'envoi du fichier :', error);
    }
  }

  return (
    <div className="container-contact">
      <h1 className="titre">Contactez-nous !</h1>
      <form className="form" onSubmit={handleSubmit}>
      <input className="email" type="email" placeholder="Email" onChange={handleEmailChange} required />
      <input className="objet" type="text" placeholder="Objet"  onChange={handleObjetChange} required/>
      <textarea className="message" placeholder="Message" onChange={handleMessageChange} required/>
      <input className="pieceJointe" type="file" accept="png,jpg" multiple={true} onChange={handlePieceJointeChange}/>
      <span>{MsgInfo}</span>

      <button className="btn-tertiary">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;

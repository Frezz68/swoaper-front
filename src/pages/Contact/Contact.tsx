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

  const [mailTimestamp, setMailTimestamp] = useState(Number);

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
    // Vérification anti-spam
    if (mailTimestamp === 0 || (new Date().getTime() - mailTimestamp > 50000) ) {

      if (email.trim() === "" || objet.trim() === "" || message.trim() === "") {
        setMsgInfo('Veuillez remplir tous les champs.');
        return;
      }
      if (pieceJointe && pieceJointe.length > 5) {
        setMsgInfo('Vous ne pouvez pas envoyer plus de 5 fichiers.')
        return;
      }
      try {
      
        let formData = new FormData();
        if (pieceJointe) {
          for (let i = 0; i < pieceJointe.length; i++) {
            formData.append("pieceJointe", pieceJointe[i]);
          }
        }
        formData.append("email", email);
        formData.append("objet", objet);
        formData.append("message", message);
        const response = await axios.post("http://localhost:3001/mail/contact", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        setMailTimestamp(new Date().getTime());

        if (response.status === 200) {
          setMsgInfo('Envoyé avec succès');
        } 
      } catch (error) {
        if ((error as any).response.status === 400) {
          setMsgInfo((error as any).response.data.message);
          console.error('Échec de l\'envoie');
        }
        else {
          setMsgInfo('Échec de l\'envoie');
          console.error('Erreur lors de l\'envoi du fichier :', error);
        }
      }
    }
    else {
      setMsgInfo('Vous avez déjà envoyer un mail, essayé ultérieurement.');
    }
  }

  return (
    <div className="container-contact">
      <h1 className="titre">Contactez-nous !</h1>
      <form className="form" onSubmit={handleSubmit}>
      <input className="email" type="email" placeholder="Email" onChange={handleEmailChange} required />
      <input className="objet" type="text" placeholder="Objet"  onChange={handleObjetChange} required/>
      <textarea className="message" placeholder="Message" onChange={handleMessageChange} required/>
      <input className="pieceJointe" type="file" accept="image/png,image/jpg" multiple={true} onChange={handlePieceJointeChange}/>
      <span>{MsgInfo}</span>

      <button className="btn-tertiary">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;

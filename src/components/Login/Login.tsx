import React, { FC, useState } from "react";
import "./Login.scss";
import eye from "../../assets/login/eye.png";
import mail from "../../assets/login/mail.png";
import "../../style/button.scss";
import Logo from "../../assets/swoaper-logo.png";
import Signup from "../Signup/Signup";
import ModalService from "../../services/ModalService";

interface LoginProps {
  onSignUpClick: () => void; // Définissez les types des props ici
}

const Login: FC<LoginProps> = ({ onSignUpClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logique de vérification des informations de connexion
  };

  return (
    <div className="login-container">
      <img className="logo" src={Logo}></img>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <div className="img-container">
            <img src={mail} alt="" />
          </div>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="img-container">
            <img src={eye} alt="" />
          </div>
        </div>
        <div className="link">
          <a href="#forgot-password">Mot de passe oublié ?</a>
        </div>
        <button type="submit" className="btn-primary">
          Connexion
        </button>
        <div className="link">
          <a
            className="create-account"
            href="#create-account"
            onClick={onSignUpClick}
          >
            Créer un compte
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;

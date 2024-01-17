import React, { FC, useState } from "react";
import "./Login.scss";
import eye from "../../assets/login/eye.png";
import mail from "../../assets/login/mail.png";
import "../../style/button.scss";
import Logo from "../../assets/swoaper-logo.png";
import Signup from "../Signup/Signup";
import ModalService from "../../services/ModalService";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

interface LoginProps {
  onSignUpClick: () => void; // Définissez les types des props ici
  close: () => void;
}

const Login: FC<LoginProps> = ({ onSignUpClick, close }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      // Gérer la réponse ici
      // Par exemple, stockez le token dans le stockage local et redirigez l'utilisateur
      console.log(response.data);
      if (response.data.user) {
        setUser(response.data.user);
        close();
      }

      localStorage.setItem("token", response.data.token); // Supposons que le token est retourné dans response.data.token
      // Redirection à la page d'accueil ou au tableau de bord de l'utilisateur
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Gestion d'erreur spécifique Axios
        console.error(error.response?.data || "Erreur lors de la connexion");
      } else {
        // Autres erreurs (réseau, etc.)
        console.error("Une erreur de connexion est survenue");
      }
    }
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

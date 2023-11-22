import React, { FC, useState } from "react";
import "./Signup.scss"; // You'll need to create this CSS file
import eye from "../../assets/signup/eye.png"; // Ensure you have this asset
import mail from "../../assets/signup/mail.png"; // Ensure you have this asset
import person from "../../assets/signup/person.png"; // Ensure you have this asset
import shoe from "../../assets/signup/shoe.png"; // Ensure you have this asset
import "../../style/button.scss"; // Assuming this is for general button styles
import Logo from "../../assets/swoaper-logo.png";
import axios from "axios";

interface SignupProps {
  onSignInClick: () => void; // This function will be passed to handle "I already have an account" click
}

const Signup: FC<SignupProps> = ({ onSignInClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [shoeSize, setShoeSize] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleShoeSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShoeSize(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/register", {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        size: shoeSize,
      });

      console.log(response.data); // Gérer la réponse du serveur
      // Vous pouvez ajouter une redirection ou un message de succès ici
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Ici, nous sommes sûrs que c'est une erreur Axios
        console.error(error.response?.data || "Une erreur réseau est survenue");
      } else {
        // Pour les autres types d'erreurs
        console.error("Une erreur inattendue est survenue");
      }
    }
  };

  return (
    <div className="signup-container">
      <img className="logo" src={Logo}></img>
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <div className="img-container">
            <img src={mail} alt="Email Icon" />
          </div>
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <div className="img-container">
            <img src={eye} alt="Password Icon" />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Nom"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
          <div className="img-container">
            <img src={person} alt="Password Icon" />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Prénom"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
          <div className="img-container">
            <img src={person} alt="Password Icon" />
          </div>
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Pointure de chaussure"
            value={shoeSize}
            onChange={handleShoeSizeChange}
            required
          />
          <div className="img-container">
            <img src={shoe} alt="Password Icon" />
          </div>
        </div>
        <button type="submit" className="btn-primary">
          Créer
        </button>
        <div className="link">
          <a
            className="sign-in-account"
            href="#sign-in"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default anchor action
              onSignInClick();
            }}
          >
            J'ai déjà un compte
          </a>
        </div>
      </form>
    </div>
  );
};

export default Signup;

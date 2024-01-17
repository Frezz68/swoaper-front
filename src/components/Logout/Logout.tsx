// LogoutModal.tsx
import React from "react";
import "./Logout.scss";

interface LogoutProps {
  onLogoutClick: () => void; // Définissez le type de cette fonction, ici aucune entrée et aucune sortie
  close: () => void; // De même pour cette fonction
}

const Logout: React.FC<LogoutProps> = ({ onLogoutClick, close }) => {
  function onLogout() {
    onLogoutClick();
    close();
  }
  return (
    <div className="logout-container">
      <div className="logout-content">
        <h2>Voulez-vous vraiment vous déconnecter ?</h2>
        <div className="btn-actions">
          <button className="btn-primary btn-logout" onClick={onLogout}>
            Déconnexion
          </button>
          <button className="btn-secondary  btn-logout" onClick={close}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

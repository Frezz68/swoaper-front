import "./PagesAdmin.scss";

const MentionsLegales = () => {
    return (
        <div className="container-1">
            <div className="container-admin">
                <h2>Mentions légales</h2>
                <div className="content">
                    <h2>Informations légales</h2>
                    <p>
                        Nom de la société : DUBOIS Nolan<br></br>
                        Forme juridique : Entreprise individuelle EI<br></br>
                        Adresse du siège social : Remouillé 44140<br></br>
                        Numéro de téléphone : 0789335888<br></br>
                        E-mail de contact : swoaper.contact@gmail.com<br></br>
                        Capital social : 100€<br></br>
                        Numéro d'immatriculation : Siret 952 415 651 00019<br></br>
                        Hébergeur du site : OVH https://www.ovhcloud.com/fr/
                    </p>

                    <h2>Propriété intellectuelle</h2>
                    <p>
                        Le site et son contenu (textes, images, vidéos, etc.) sont la propriété exclusive de DUBOIS Nolan (Swoaper). Toute reproduction, distribution, ou représentation totale ou partielle de ces éléments est strictement interdite sans autorisation préalable de Swoaper.
                    </p>

                    <h2>Responsabilité</h2>
                    <p>
                        DUBOIS Nolan (Swoaper) ne peut être tenu responsable des erreurs présentes sur le site, des problèmes techniques rencontrés par l'utilisateur, ou des dommages directs ou indirects pouvant résulter de l'utilisation du site.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MentionsLegales;

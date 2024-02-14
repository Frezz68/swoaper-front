import "./PagesAdmin.scss";

const PolitiqueDeLivraison = () => {
    return (
        <div className="container-1">
            <div className="container-admin">
                <h2>Politique de livraison</h2>
                <div className="content">
                    <h2>Options d'Envoi</h2>
                    <p>
                        - Envoi en Main Propre : Nous offrons un service de livraison en main propre pour les clients locaux. Veuillez nous contacter pour plus de détails sur les zones desservies et les modalités de cette option.<br></br>
                        - Envoi via Mondial Relay : Pour les clients hors de la zone de livraison en main propre, nous proposons une expédition via Mondial Relay. Un frais fixe de 10€ sera appliqué pour cette option.
                    </p>

                    <h2>Délais de Livraison</h2>
                    <p>
                        Les délais de livraison peuvent varier en fonction de votre localisation et du mode d'expédition choisi. En général, les commandes sont livrées dans un délai de 3 à 5 jours ouvrables après leur expédition.
                    </p>

                    <h2>Suivi de Commande</h2>
                    <p>
                        Une fois votre commande expédiée, un numéro de suivi vous sera fourni pour suivre l'avancement de la livraison.
                    </p>

                    <h2>Zones de Livraison</h2>
                    <p>
                        Nous livrons actuellement dans toute la France. Pour les livraisons internationales, veuillez nous contacter pour discuter des options disponibles.
                    </p>

                    <h2>Emballage</h2>
                    <p>
                        Tous les produits sont soigneusement emballés pour assurer leur protection durant le transport.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PolitiqueDeLivraison;

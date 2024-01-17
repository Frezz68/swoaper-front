import "./PagesAdmin.scss";

const ConditionsGeneralesUtilisation = () => {
    return (
        <div className="container-1">
            <div className="container">
                <h2>Mentions légales</h2>
                <div className="content">
                    <h2>Prestations de Nettoyage de Chaussures</h2>
                    <p>
                        Nos prestations de nettoyage de chaussures. Le prix de la prestation est indiqué sur notre site et peut être soumis à des variations. Le paiement s'effectue via Stripe lors de la commande.
                    </p>

                    <h2>v2 Achat de Sneakers</h2>
                    <p>
                        L'achat de sneakers sur notre site est soumis à disponibilité. Les prix sont indiqués en euros et peuvent être sujets à des variations. Le paiement s'effectue via Stripe lors de la commande.<br></br>
                        Ces exemples sont conçus pour être conformes à la législation française dans la mesure du possible, mais il est fortement recommandé de consulter un avocat pour vous assurer de leur adéquation avec la loi française en vigueur.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConditionsGeneralesUtilisation;

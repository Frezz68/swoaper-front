import React from "react";
import SectionPresta from "../../components/SectionPresta/SectionPresta";
import image1 from "../../assets/prestations/image1.png";
import image2 from "../../assets/prestations/image2.png";
import image3 from "../../assets/prestations/image3.png";
import "../Prestation/Prestation.scss";

const Prestation = () => {
  return (
    <div className="container">
      <SectionPresta
        imageSrc={image1}
        title="Nettoyage - 20 €"
        content="Le nettoyage complet comprends l’intérieur et l’extérieur de la paire, il est possible de traiter des matériaux différents comme le daim par exemple avec un supplément de 5 €.

        Tous les matériaux ont besoin d’un traitement différent, ce qui comprend des produits et des brosses adaptés, ainsi que des connaissances pour les revitaliser."
        label="En savoir plus"
        swap={false}
        action={(event) => {
          console.log("Bouton cliqué !", event);
        }}
      />
      <SectionPresta
        imageSrc={image2}
        title="Déjaunissement - 20 €"
        content="Avec le temps, il est possible que votre paire de chaussures jaunisse, à cause de l’usure naturelle, de l’exposition aux rayons UV et à l’oxydation. Pour palier à ça nous proposons de blanchir vos chaussures grâce à notre méthode et nos différents outils.

        Les produits sont adaptés aux matériaux de la chaussure, permettant ainsi d’enlever ce jaunissement."
        label="En savoir plus"
        swap={true}
        action={(event) => {
          console.log("Bouton cliqué !", event);
        }}
      />
      <SectionPresta
        imageSrc={image3}
        title="Restauration peinture - devis"
        content="Il est possible que votre paire de chaussures perde de la peinture au fil du temps, c’est pourquoi nous proposons en fonction de rajouter de la peinture tout en respectant les couleurs d’origines.

        Avant de réaliser la peinture il est important de nettoyer la chaussure avant de l’appliquer. Les produits sont spécifiques aux matériaux et la peinture utilisée tient dans le temps grâce à une protection qui est ajoutée lors des applications des différentes couches de peinture."
        label="En savoir plus"
        swap={false}
        action={(event) => {
          console.log("Bouton cliqué !", event);
        }}
      />
    </div>
  );
};

export default Prestation;

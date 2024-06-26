import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/swoaper-logo.png";
import CardPrestation from "../../components/CardPrestation/CardPrestation";
import {faHandSparkles, faSoap, faPumpSoap, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
const video = require("../../assets/home/homeVideo.mp4");

const Home = () => {
  const toggleMuted =() => {
    const video = document.querySelector('video');
    if(video){
      video.muted = !video.muted;
    }
  }
  return (
    <div>
      <section>
      <video loop autoPlay muted onClick={toggleMuted}><source src={video}></source></video>
      </section>
      <section className="homeColor">
        <div className="centerImg">
          <img src={Logo}  alt="logo"/>
        </div>
        <div className="centerText">
          <p className="textFormat">
            En France, <span className="bold-text" >9 paires</span> de chaussures sont jetées chaque minute, mais dans quel état ? <br></br>
            Les baskets sont de plus en plus coûteuses mais se <span className="bold-text" >salissent toujours aussi vites</span> !
            Comment nettoyer ses baskets tout en tout en respectant les <span className="bold-text" >matériaux</span>, quel type de <span className="bold-text" >produit</span> doit-on utiliser ?
          </p>
          <p className="textFormat">
            <span className="bold-text" >Swoaper</span> est là pour donner une <span className="bold-text" >seconde vie</span> à tes baskets, avec toutes ses <span className="bold-text" >connaissances</span> !
            Du <span className="bold-text" >nettoyage complet</span> à de la <span className="bold-text" >restauration</span>, on est là pour ça .
          </p>
        </div>
      </section>
      <section>
        <div className="sectionPresta">
          <div className="divTitlePresta">
            <h3 className="titlePresta bold-text">Prestations proposées</h3>
          </div>
          <div className="displayCard"> 
            <CardPrestation nomPresta="Nettoyage" prixPresta={20} Icon={faHandSparkles} />
            <CardPrestation nomPresta="Déjaunissement" prixPresta={20} Icon={faSoap} />
            <CardPrestation nomPresta="Restauration peinture" prixPresta={0} Icon={faPumpSoap} />
          </div>
          <div className="posSavoir"><Link to="/prestations" className="textSavoir">En savoir plus <FontAwesomeIcon className="cardIcon" icon={faChevronRight} /></Link></div>

        </div>
      </section>
      <section>
        <h4>Section 4</h4>
        <p>Content of section 4</p>
      </section>
    </div>
  );
};

export default Home;

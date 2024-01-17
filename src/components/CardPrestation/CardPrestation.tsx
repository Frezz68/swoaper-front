import React from "react";
import "./CardPrestation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface CardPrestationProps {
    nomPresta: string;
    prixPresta: number;
    Icon: IconDefinition;
}

const CardPrestation = ( props: CardPrestationProps) => {
    return(
        <div className="card">
            <div className="cardPos">
                <div className="cardItem">
                    <div className="cardFont">
                        <h5 className="cardText">{props.nomPresta}</h5>
                        <p className="cardPrice">
                            {props.prixPresta.toString()} €
                        </p>
                    </div>
                    <FontAwesomeIcon className="cardIcon" icon={props.Icon} />
                </div>
            </div>
        </div>
    )
}
export default CardPrestation;
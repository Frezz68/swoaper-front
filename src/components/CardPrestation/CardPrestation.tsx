import React from "react";
import "./CardPrestation.scss";
interface CardPrestationProps {
    nomPresta: string;
    prixPresta: number;
}

const CardPrestation = ( props: CardPrestationProps) => {
    return(
        <div className="card">
             <div className="">
                <div className="py-14 flex flex-row justify-evenly w-2/3">
                    <div className="flex flex-col justify-start mr-4">
                        <h5 className="text-white text-xl font-medium mb-2 text-3xl">{props.nomPresta}</h5>
                        <p className="text-white font-bold mb-4 text-2xl">
                            {props.prixPresta.toString()}€
                        </p>
                    </div>
                    <i className="fa-solid fa-hand-sparkles text-5xl text-white"></i>
                </div>
            </div>
        </div>
    )
}
export default CardPrestation;
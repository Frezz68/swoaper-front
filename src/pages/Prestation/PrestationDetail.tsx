import "../Prestation/PrestationDetail.scss";
import image1 from "../../assets/prestations/image1.png";
import image2 from "../../assets/prestations/image2.png";
import image3 from "../../assets/prestations/image3.png";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const PrestationDetail = () => {
    const { id } = useParams();
    console.log('id : ', id);
    let [image, setImage] = useState("");
    let [title, setTitle] = useState("");

    var url = window.location.href;
    var urlParams = new URLSearchParams(new URL(url).search);
    var action = urlParams.get('action');
    console.log(action);

    let navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        console.log("id : ", id);
        switch (id) {
            case "660cfb87e1fb922b3722452e":
                setImage(image1);
                setTitle("Nettoyage");
                break;
            case "660cfc0ee1fb922b37224530":
                setImage(image2);
                setTitle("Déjaunissement");
                break;
            case "660cfc13e1fb922b37224531":
                setImage(image3);
                setTitle("Sur devis");
                break;
            default:
                setImage(image1);
                break;
        }
    }, []);

    const handleClick = () => {
        // Définir le corps de la requête
        const requestBody = {
            serviceId: id
        };

        // Configuration de la requête
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(requestBody)
        };

        // Appel à l'API
        fetch('http://localhost:3001/carts/addService', requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur réseau');
                }
                navigate("/prestations");
            })
            .catch(error => {
                console.error('Erreur:', error);
                // Gérer l'erreur si nécessaire
            });
    };

    return (
        <div className="presta-detail-container">
            <div className="return-container">
                <Link to={"/prestations"}>
                    <span className="material-icons">
                        arrow_back
                    </span>
                </Link>
            </div>
            <div className="image">
                <img className="image" src={image} alt={"image"} />
            </div>
            <h2>{title}</h2>
            {action === "contact" ? (
                <Link to={"/contact"}>
                    <div className="btn-primary">
                        Contact
                    </div>
                </Link>
            ) : (
                <Link to={"/panier"}>
                    <div className="btn-primary" onClick={handleClick}>
                        Ajouter au panier
                    </div>
                </Link>
            )}
        </div>

    );
}

export default PrestationDetail;
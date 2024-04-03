import React, { useEffect, useState } from "react";
import "./Cart.scss";
import sneakers from "../../assets/sneakers.png";
import axios from "axios";
import image1 from "../../assets/prestations/image1.png";
import image2 from "../../assets/prestations/image2.png";
import image3 from "../../assets/prestations/image3.png";

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  image: string; // Assurez-vous que l'image est une URL valide
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<ServiceItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(total);
  }, [cartItems]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const token = localStorage.getItem("token");

      try {
        console.log("Fetching cart items");
        // Use axios to get the user cart
        const response = await axios.get(
          "http://localhost:3001/carts/user-cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status !== 200) {
          throw new Error("Problème lors de la récupération du panier");
        }

        const data = response.data;
        const serviceIds = data.services;

        // Use axios to get the details for each service using their IDs
        const serviceDetailsPromises = serviceIds.map((id: any) =>
          axios
            .get(`http://localhost:3001/services/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            })
            .then((res) => res.data)
        );

        // Wait for all promises to be resolved
        const services = await Promise.all(serviceDetailsPromises);
        setCartItems(services);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="cart">
      <div className="cart-items">
        <h1>Mon panier</h1>
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem item={item} />)
        ) : (
          <p>Votre panier est vide</p>
        )}
      </div>

      <div className="cart-summary">
        <h1>Récapitulatif</h1>
        <span>Code promotionnel</span>

        <div className="form-group">
          <input className="form-control" placeholder="Email" required />
          <div className="apply">
            <div>Apliquer</div>
          </div>
        </div>
        <div className="subtotal">
          <span>Sous-total</span>
          <span>{totalPrice} €</span>
        </div>
        <div className="shipping">
          <span>Livraison</span>
          <span>Gratuit</span>
        </div>
        <div className="total">
          <div className="total_taxe">
            <span>Total</span>
            <span>(Taxes incluses)</span>
          </div>
          <span>{totalPrice} €</span>
        </div>
        <div className="btn-container">
          {" "}
          <button className="btn-primary btn">Commander</button>
          <button className="btn-primary btn">
            <img src="paypal-logo.png" alt="PayPal" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CartItem: React.FC<{ item: ServiceItem }> = ({ item }) => {
  // La logique d'affichage d'un item reste la même
  return (
    <div className="cart-item">
      <img src={getImage(item.id)} alt={item.name} />
      <div className="item-details">
        <h2>{item.name}</h2>
        <span>Prix: {item.price} €</span>
      </div>
    </div>
  );
};

export default Cart;

function getImage(id: any) {
  console.log("id : ", id);
  switch (id) {
    case "660cfb87e1fb922b3722452e":
      return image1;

    case "660cfc0ee1fb922b37224530":
      return image2;

    case "660cfc13e1fb922b37224531":
      return image3;

    default:
      return image1;
  }
}

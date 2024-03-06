import React from "react";
import "./Cart.scss";
import sneakers from "../../assets/sneakers.png";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-items">
        <h1>Mon panier</h1>
        <CartItem />
        <CartItem />
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
          <span>341 €</span>
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
          <span>341 €</span>
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

const CartItem = () => {
  return (
    <div className="cart-item">
      <img src={sneakers} alt="Jordan 1 - Retro High Satin Black Toe" />
      <div className="item-details">
        <h2>Jordan 1 - Retro High Satin Black Toe</h2>
        <span>Prix: 341 €</span>
      </div>
    </div>
  );
};

export default Cart;

import React from "react";
import "./cart.css";

const Cart = ({
  title = "Машина",
  description = "ахуенная зуб даю",
  image,
}) => {
  return (
    <div className="cart">
      <img
        className="cartImage"
        src={image ?? "/golf.jpg"}
        alt=""
        width={240}
        height={160}
      />
      <div className="cartText">
        <h3 className="cartName">{title}</h3>
        <p className="cartTtitle">{description}</p>
        <button className="buyBtn">Купить</button>
      </div>
    </div>
  );
};

export default Cart;

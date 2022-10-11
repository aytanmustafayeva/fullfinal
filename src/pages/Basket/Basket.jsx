import React from "react";
import "./Basket.css";

const Basket = ({ basketItems }) => {
  return (
    <div className="basket-items">
      <div className="basket-items-header">Cart Items</div>
      {basketItems.length === 0 && (
        <div className="basket-items-empty"> No items are added.</div>
      )}

      <div>
        {basketItems.map((item) => (
          <div key={item.id} className="basket-items-list">
            <img
              className="basket-items-image"
              src={item.image}
              alt={item.name}
            >
              {" "}
            </img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basket;

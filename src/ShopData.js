import React from "react";
import "./App.css";

const ShopData = (props) => {
  const { imageUrl, altText, title, price } = props;

  return (
    <div className="shop-data">
      <img src={imageUrl} alt={altText} className="shop-image" />
      <h2 className="title">{title}</h2>
      <p className="price">${price}.00</p>
    </div>
  );
};

export default ShopData;

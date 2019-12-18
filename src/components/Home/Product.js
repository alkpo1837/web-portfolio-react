import React from "react";
import "./Product.scss";
const Product = ({ icon, type, animationDelay }) => {
  return (
    <div
      className="what_i_do animated fast fadeInDown"
      style={{ animationDelay: animationDelay }}
    >
      <img src={icon} alt="Smartphone" />
      <span>{type}</span>
    </div>
  );
};

export default Product;

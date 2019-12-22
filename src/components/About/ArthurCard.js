import React from "react";
import "./ArthurCard.scss";

import ArthurCardHeader from "./ArthurCardHeader";
import ArthurCardContent from "./ArthurCardContent";

const ArthurCard = () => {
  return (
    <div className="card">
      <ArthurCardHeader />
      <ArthurCardContent />
    </div>
  );
};

export default ArthurCard;

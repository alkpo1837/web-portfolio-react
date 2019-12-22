import React from "react";
import "./ArthurCardHeader.scss";

import arthur_photo from "img/about/arthur.png";

const ArthurCardHeader = () => {
  return (
    <div className="card-header">
      <img class="image" src={arthur_photo} alt="Arthur" />
    </div>
  );
};

export default ArthurCardHeader;

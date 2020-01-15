import React from "react";
import "./ArthurCard.scss";

import arthur_photo from "img/about/arthur.jpg";

const ArthurCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img className="image" src={arthur_photo} alt="Arthur" />
      </div>
      <div className="card-line">
        <div className="actual-line"></div>
      </div>
      <div className="card-content">
        <p>
          Je suis développeur de sites web, d'applications mobiles et de jeux
          vidéo
          <br /> <br />
          Après mon diplôme d'ingénieur en 2017, j'ai travaillé pendant 2 ans
          dans une société de création de serious games. J'ai pu participer à
          l'élaboration de projets mêlant ludification et apprentissage, avec
          notamment des technologies émergentes comme la réalité virtuelle ou
          augmentée.
          <br /> <br />
          J'apprécie utiliser mes compétences pour mettre en avant du contenu
          artistique, scientifique ou éducatif, que ce soit dans mon travail ou
          mes projets personnels.
        </p>
      </div>
    </div>
  );
};

export default ArthurCard;

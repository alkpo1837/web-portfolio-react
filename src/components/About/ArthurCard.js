import React from "react";
import "./ArthurCard.scss";

import arthur_photo from "img/about/arthur.png";

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
          Je suis développeur de <span class="websiteText">sites web</span>, d'
          <span class="mobileAppText">applications mobiles</span> et de{" "}
          <span class="videoGameText">jeux vidéo</span>.
          <br /> <br />
          Après mon diplôme d'ingénieur en 2017, j'ai travaillé pendant 2 ans
          dans une société de création de serious games. J'ai pu participer à
          l'élaboration de projets mêlant ludification et apprentissage, avec
          notamment des technologies émergentes comme la réalité virtuelle ou
          augmentée.
          <br /> <br />
          Je suis ensuite devenu autoentrepreneur fin 2019. J'ai collaboré avec
          diverses entreprises et ai participé à différents projets, toujours
          dans le domaine du serious game. Ces expériences m'ont permis
          d'améliorer ma capacité à m'intégrer rapidement à une nouvelle équipe,
          à m'adapter efficacement à un projet existant, et à consolider mes
          compétences en développement mobile/jeux vidéos avec Unity et de sites
          web avec React.
          <br /> <br />
          J'apprécie utiliser mes compétences pour mettre en avant du contenu
          artistique, scientifique ou éducatif, que ce soit dans mon travail ou
          mes projets personnels. Ma curiosité, mon envie d'apprendre et de
          transmettre sont des qualités qui me permettent de m'améliorer
          constamment dans mon domaine.
        </p>
      </div>
    </div>
  );
};

export default ArthurCard;

import React from "react";
import "./Home.scss";

import web from "../img/home/web.svg";
import smartphone from "../img/home/smartphone.svg";
import game from "../img/home/game.svg";

const Home = () => (
  <main>
    <h2>
      Je suis <strong>Arthur</strong>. Je développe :
    </h2>
    <div class="all_i_do">
      <div
        class="what_i_do animated fast fadeInDown"
        style={{ animationDelay: "0s" }}
      >
        <img src={web} alt="Web" />
        <span>Des sites web</span>
      </div>
      <div
        class="what_i_do animated fast fadeInDown"
        style={{ animationDelay: "0.5s" }}
      >
        <img src={smartphone} alt="Smartphone" />
        <span>Des applications mobiles</span>
      </div>
      <div
        class="what_i_do animated fast fadeInDown"
        style={{ animationDelay: "1s" }}
      >
        <img src={game} alt="Game" />
        <span>Des jeux vidéo</span>
      </div>
    </div>
    <p class="description animated fadeIn" style={{ animationDelay: "1.75s" }}>
      Découvrez en plus sur <a href="./about_me.html">moi</a> et
      <a href="./projects.html">mes projets</a>.<br />
      Téléchargez mon <a href="data/CV.pdf">CV</a> et contactez-moi par
      <a href="mailto:capo.arthur@gmail.com">mail</a>.
    </p>
  </main>
);

export default Home;

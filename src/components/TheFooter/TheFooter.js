import React from "react";
import "./TheFooter.scss";

import github from "../../img/footer/github.svg";

const TheFooter = () => (
  <footer>
    <div class="content_footer">
      <div id="websited_created">
        <p>Créé par Arthur Capo</p>
      </div>
      <div id="sitemap">
        <a href="./index.html">Accueil</a>
        <a href="./about_me.html">À propos de moi</a>
        <a href="./projects.html">Projets</a>
      </div>
      <div id="icons">
        <a href="https://github.com/alkpo1837">
          <img src={github} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/arthur-capo-1472a6108/">
          <img src="./img/icon/linkedin.svg" alt="LinkedIn logo" />
        </a>
        <a href="mailto:capo.arthur@gmail.com">
          <img src="./img/icon/mail.svg" alt="Mail logo" />
        </a>
      </div>
    </div>
  </footer>
);

export default TheFooter;

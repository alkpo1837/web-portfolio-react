import React from "react";
import "./TheFooter.scss";

import { Link } from "react-router-dom";

import github from "img/footer/github.svg";
import linkedin from "img/footer/linkedin.svg";
import mail from "img/footer/mail.svg";
import cv from "img/footer/cv.svg";

const TheFooter = () => (
  <footer>
    <div className="content_footer">
      <div id="websited_created">
        <span>Créé par Arthur Capo, avec React</span>
      </div>
      <div id="sitemap">
        <Link to="/">Accueil</Link>
        <Link to="about">À propos de moi</Link>
        <Link to="projects">Projets</Link>
      </div>
      <div id="icons">
        <a href="https://github.com/alkpo1837">
          <img src={github} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/arthur-capo-1472a6108/">
          <img src={linkedin} alt="LinkedIn logo" />
        </a>
        <a href="mailto:capo.arthur@gmail.com">
          <img src={mail} alt="Mail logo" />
        </a>
        <a href="/CV.pdf">
          <img src={cv} alt="CV logo" />
        </a>
      </div>
    </div>
  </footer>
);

export default TheFooter;

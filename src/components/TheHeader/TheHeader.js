import React from "react";
import "./TheHeader.scss";

const TheHeader = () => (
  <header>
    <div class="content_header">
      <div id="my_name">
        <a href="./index.html">ARTHUR CAPO</a>
      </div>

      <div id="menu">
        <a href="about_me.html">À PROPOS</a>
        <a href="projects.html">PROJETS</a>
      </div>
    </div>
  </header>
);

export default TheHeader;

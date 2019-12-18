import React from "react";
import "./TheHeader.scss";

import { Link } from "react-router-dom";

const TheHeader = () => (
  <header>
    <div className="content_header">
      <div id="my_name">
        <Link to="/">ARTHUR CAPO</Link>
      </div>

      <div id="menu">
        <Link to="about">À PROPOS</Link>
        <Link to="projects">PROJETS</Link>
      </div>
    </div>
  </header>
);

export default TheHeader;

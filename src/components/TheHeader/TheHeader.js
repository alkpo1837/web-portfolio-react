import React from "react";

import "./TheHeader.scss";

import { Link } from "react-router-dom";

const TheHeader = () => {
  // useEffect(() => {
  //   const links = Array.from(
  //     document.getElementById("menu").getElementsByTagName("a")
  //   );

  //   links.forEach(link => {
  //     console.log(link.getAttribute("href"));
  //     if (window.location.href.includes(link.getAttribute("href"))) {
  //       link.className += "current_link";
  //     }
  //   });
  // }, []);

  return (
    <header>
      <div className="content_header">
        <div id="my_name">
          <Link to="/">A C</Link>
        </div>

        <div id="menu">
          <Link to="about">À PROPOS</Link>
          <Link to="projects">PROJETS</Link>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;

import React from "react";
import styles from "./Description.module.scss";

const Description = ({ animationDelay }) => {
  return (
    <p
      className={styles.description + " animated fadeIn"}
      style={{ animationDelay: animationDelay }}
    >
      Découvrez en plus sur <a href="./about_me.html">moi</a> et
      <a href="./projects.html">mes projets</a>.<br />
      Téléchargez mon <a href="data/CV.pdf">CV</a> et contactez-moi par
      <a href="mailto:capo.arthur@gmail.com">mail</a>.
    </p>
  );
};

export default Description;

import React from "react";
import styles from "./LinkProject.module.scss";

const Link = ({ url, children }) => {
  return (
    <a className={styles.link} href={url}>
      {children}
    </a>
  );
};

export default Link;

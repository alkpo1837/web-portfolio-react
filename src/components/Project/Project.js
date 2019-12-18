import React, { useState, useEffect } from "react";
import styles from "./Project.module.scss";

import ProjectType from "../../components/Project/ProjectType";

const ReactMarkdown = require("react-markdown/with-html");

const Project = ({ data }) => {
  const { name, date, descriptionMd, type, languages, links, images } = data;

  const [md, setMd] = useState();

  useEffect(() => {
    const markdown = require(`../../data/projects/${descriptionMd}`);

    fetch(markdown)
      .then(res => res.text())
      .then(text => setMd(text));
  }, [descriptionMd]);

  return (
    <div className={styles.project}>
      <div className={styles.firstLine}>
        <h1 className={styles.name}>{name}</h1>
        <ProjectType type={type} />
      </div>
      <div className={styles.date}>
        <img src="../../img/projects/calendar.svg" alt="Calendar" />
        <span>{date}</span>
      </div>
      <div className={styles.description}>
        <ReactMarkdown source={md} />

        <div className={styles.technologies}>
          {languages &&
            languages.map((language, index) => {
              return (
                <span key={index} className={styles.technology}>
                  {language}
                </span>
              );
            })}
        </div>
      </div>
      <div className={styles.links}>
        {links &&
          links.map((link, index) => {
            const { name, url } = link;
            return (
              <a key={index} href={url}>
                {name}
              </a>
            );
          })}
      </div>
      <div className={styles.screenshots}>
        {links &&
          images.map((image, index) => {
            return <img key={index} src={image} alt={"Screen" + index} />;
          })}
      </div>
    </div>
  );
};

export default Project;

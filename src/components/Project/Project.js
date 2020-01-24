import React, { useState, useEffect } from "react";
import styles from "./Project.module.scss";
import "./ImageGallery.scss";

import ProjectType from "components/Project/ProjectType";
import Technology from "components/Project/Technology";
import LinkProject from "components/Project/LinkProject";

import ImageGallery from "react-image-gallery";

const ReactMarkdown = require("react-markdown/with-html");

const allStyles = {
  website: styles.website,
  mobileApp: styles.mobileApp,
  videoGame: styles.videoGame
};

const Project = ({ className, data }) => {
  let { name, date, descriptionMd, type, languages, links, images } = data;

  const [md, setMd] = useState();

  const realImages = images.map(image => ({
    original: require(`img/projects/${image}`)
  }));

  useEffect(() => {
    const markdown = require(`data/projects/${descriptionMd}`);

    fetch(markdown)
      .then(res => res.text())
      .then(text => setMd(text));
  }, [descriptionMd, images]);

  return (
    <div className={`${styles.project} ${allStyles[className]}`}>
      <div className={styles.informations}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.name}>{name}</h1>
          </div>
          <div className={styles.typeAndDate}>
            <ProjectType type={type} />
            <div className={styles.date}>
              <img src={require("img/projects/calendar.svg")} alt="Calendar" />
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className={styles.description}>
          <ReactMarkdown source={md} />

          <div className={styles.technologies}>
            {languages.map((language, index) => {
              return <Technology key={index}>{language}</Technology>;
            })}
          </div>
        </div>
        <div className={styles.links}>
          {links.map(({ name, url }, index) => {
            return (
              <LinkProject key={index} url={url}>
                {name}
              </LinkProject>
            );
          })}
        </div>
      </div>
      <div className={styles.screenshots}>
        <ImageGallery
          showBullets={true}
          showPlayButton={false}
          showThumbnails={false}
          useBrowserFullscreen={false}
          showFullscreenButton={false}
          items={realImages}
        />
      </div>
    </div>
  );
};

export default Project;

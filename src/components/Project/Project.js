import React, { useState, useEffect } from "react";
import styles from "./Project.module.scss";

import ProjectType from "components/Project/ProjectType";
import Technology from "components/Project/Technology";
import LinkProject from "components/Project/LinkProject";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ReactMarkdown = require("react-markdown/with-html");

const Project = ({ data }) => {
  const { name, date, descriptionMd, type, languages, links, images } = data;

  const [md, setMd] = useState();

  useEffect(() => {
    const markdown = require(`data/projects/${descriptionMd}`);

    fetch(markdown)
      .then(res => res.text())
      .then(text => setMd(text));
  }, [descriptionMd]);

  return (
    <div className={styles.project}>
      <div className={styles.informations}>
        <div className={styles.firstLine}>
          <h1 className={styles.name}>{name}</h1>
          <ProjectType type={type} />
        </div>
        <div className={styles.date}>
          <img src={require("img/projects/calendar.svg")} alt="Calendar" />
          <span>{date}</span>
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
        {/* <Carousel autoplay showThumbs={false} infiniteLoop={true}> */}
        <img src={require(`img/projects/rart/1.png`)} alt={"Screen 0"} />
        {/* {images.map((image, index) => {
          return (
            <img
              key={index}
              src={require(`img/projects/${image}`)}
              alt={"Screen" + index}
            />
          );
        })} */}
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default Project;

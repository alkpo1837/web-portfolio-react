import React, { useState, useEffect } from "react";
import "./Project.scss";

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
    <div className="project">
      <div class="first-line">
        <h1 class="name">{name}</h1>
        <ProjectType type={type} />
      </div>
      <div class="date">
        <img src="../../img/projects/calendar.svg" alt="Calendar" />
        <span>{date}</span>
      </div>
      <div class="description">
        <ReactMarkdown source={md} />

        <div class="technology-line">
          {languages &&
            languages.map((language, index) => {
              return (
                <span key={index} class="technology">
                  {language}
                </span>
              );
            })}
        </div>
      </div>
      <div class="links">
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
      <div class="screenshots">
        {links &&
          images.map((image, index) => {
            return <img key={index} src={image} alt={"Screen" + index}></img>;
          })}
      </div>
    </div>
  );
};

export default Project;

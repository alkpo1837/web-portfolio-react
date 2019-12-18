import React, { useState, useEffect } from "react";
import "./Project.scss";

import ProjectMarkdown from "../../data/projects/rart.md";

const ReactMarkdown = require("react-markdown/with-html");

const Project = ({ data }) => {
  const { name, date, description, languages, links, images } = data;

  const [md, setMd] = useState();

  useEffect(() => {
    fetch(ProjectMarkdown)
      .then(res => res.text())
      .then(text => setMd(text));
  }, []);

  return (
    <div class="project">
      <div class="project_first_line">
        <span class="project_name">{name}</span>
        <div class="project_type">
          <img src="img/projects/user.svg" alt="Project type" />
          <span>Projet personnel</span>
        </div>
      </div>
      <div class="project_date">
        <img src="img/projects/calendar.svg" alt="Calendar" />
        <span>{date}</span>
      </div>
      <div class="project_description">
        <ReactMarkdown source={md} />

        <div class="technology_line">
          {languages &&
            languages.map(language => {
              return <span class="technology">{language}</span>;
            })}
        </div>
      </div>
      <div class="links">
        {links &&
          links.map(link => {
            const { name, url } = link;
            return <a href={url}>{name}</a>;
          })}
      </div>
      <div class="project_screenshots">
        {links &&
          images.map((image, index) => {
            return <img src={image} alt={"Screen" + index}></img>;
          })}
      </div>
    </div>
  );
};

export default Project;

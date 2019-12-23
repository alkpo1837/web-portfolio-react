import React, { useState, useEffect } from "react";
import "./Experience.scss";

const ReactMarkdown = require("react-markdown/with-html");

const Experience = ({ data }) => {
  const { name, icon, date, url, location, descriptionMd } = data;
  const [md, setMd] = useState();

  useEffect(() => {
    const markdown = require(`data/experiences/${descriptionMd}`);

    fetch(markdown)
      .then(res => res.text())
      .then(text => setMd(text));
  }, [descriptionMd]);

  return (
    <div className="experience header_box_top_left">
      <div className="header_infos">
        <span className="entreprise_name">
          <a href={url}>
            <img src={require(`img/about/experiences/${icon}`)} alt={icon} />
            <span>{name}</span>
          </a>
        </span>
        <span className="entreprise_location">{location}</span>
      </div>

      <span className="entreprise_duration">{date}</span>
      <div className="missions">
        <ReactMarkdown source={md} />
      </div>
    </div>
  );
};

export default Experience;

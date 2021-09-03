import React, { useState, useEffect } from "react";
import "./Experience.scss";

const ReactMarkdown = require("react-markdown/with-html");

const Experience = ({ data }) => {
  const { name, icon, icon_width, date, url, location, descriptionMd } = data;
  const [md, setMd] = useState();

  useEffect(() => {
    const markdown = require(`data/experiences/${descriptionMd}`);

    fetch(markdown)
      .then((res) => res.text())
      .then((text) => setMd(text));
  }, [descriptionMd]);

  return (
    <div className="experience">
      <div className="header-infos">
        <span className="entreprise-name">
          <a href={url}>
            {icon !== "" && (
              <img
                src={require(`img/about/experiences/${icon}`)}
                alt={icon}
                style={icon_width && { width: icon_width }}
              />
            )}
            <span>{name}</span>
          </a>
        </span>
        <span className="entreprise-location">{location}</span>
      </div>

      <span className="entreprise-duration">{date}</span>
      <div className="missions">
        <ReactMarkdown source={md} />
      </div>
    </div>
  );
};

export default Experience;

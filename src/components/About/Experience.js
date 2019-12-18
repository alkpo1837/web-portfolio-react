import React, {useState, useEffect} from "react";
import "./Experience.scss";

const ReactMarkdown = require("react-markdown/with-html");

const Experience = (({ data }) => {
  const { name, icon, date, url, location, descriptionMd} = data;

  const [md, setMd] = useState();

  useEffect(() => {
    const markdown = require(`../../data/experiences/${descriptionMd}`);

    fetch(markdown)
      .then(res => res.text())
      .then(text => setMd(text));
  }, [descriptionMd]);

  return (
    <div class="experience header_box_top_left">
      <div class="header_infos">
        <span class="entreprise_name">
          <a href={url}>
            <img src={`../../img/about/experiences/${icon}`} alt={icon} />
            <span>{name}</span>
          </a>
        </span>
        <span class="entreprise_location">{location}</span>
      </div>

      <span class="entreprise_duration">{date}</span>
      <div class="missions">
        <ReactMarkdown source={md} />
      </div>
    </div>

  );
});


export default Experience;
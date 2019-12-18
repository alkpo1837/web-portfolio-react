import React from "react";
// import "./Projects.scss";

import SkillCard from "../components/About/SkillCard";
import Experience from "../components/About/Experience"

import skillsFile from "../data/skills.json";
import experiencesFile from "../data/experiences.json";

const About = () => {
  return (
    <div>
      <div class="all_skills">
      {skillsFile &&
        skillsFile.map((skills, index) => {
          return <SkillCard key={index} data={skills} />;
        })}
      </div>

      {experiencesFile &&
        experiencesFile.map((experience, index) => {
          const data = require(`../data/experiences/${experience.filename}`);
          return <Experience key={index} data={data} />;
        })}
    </div>
  );
};

export default About;

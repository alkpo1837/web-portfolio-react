import React from "react";

import Layout from "components/Layout";
import ArthurCard from "components/About/ArthurCard";
import SkillCard from "components/About/SkillCard";
import Experience from "components/About/Experience";

import skillsFile from "data/skills.json";
import experiencesFile from "data/experiences.json";

const About = () => {
  return (
    <Layout>
      <ArthurCard />
      <div class="all-skills">
        {skillsFile.map((skills, index) => {
          return <SkillCard key={index} data={skills} />;
        })}
      </div>

      {experiencesFile.map((experience, index) => {
        const data = require(`data/experiences/${experience.filename}`);
        return <Experience key={index} data={data} />;
      })}
    </Layout>
  );
};

export default About;

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
      <h1 style={{ margin: "64px 16px" }}>Qui suis-je ?</h1>

      <ArthurCard />
      <h1 style={{ margin: "64px 16px" }}>Mes compétences</h1>
      <div className="all-skills">
        {skillsFile.map((skills, index) => {
          return <SkillCard key={index} data={skills} />;
        })}
      </div>

      <h1 style={{ margin: "64px 16px" }}>Mes expériences</h1>
      <div className="all-experiences">
        {experiencesFile.map((experience, index) => {
          const data = require(`data/experiences/${experience.filename}`);
          return <Experience key={index} data={data} />;
        })}
      </div>
    </Layout>
  );
};

export default About;

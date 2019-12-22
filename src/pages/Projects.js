import React from "react";
// import "./Projects.scss";

import Layout from "../components/Layout";
import Project from "../components/Project/Project";

import projectFiles from "../data/projects.json";

const Projects = () => {
  return (
    <Layout>
      {projectFiles.map((projectFile, index) => {
        const data = require(`../data/projects/${projectFile}`);
        return <Project key={index} data={data} />;
      })}
    </Layout>
  );
};

export default Projects;

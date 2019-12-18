import React from "react";
// import "./Projects.scss";

import Project from "../components/Project/Project";
import projectFiles from "../data/projects.json";

const Projects = () => {
  return (
    <div>
      {projectFiles &&
        projectFiles.map((projectFile, index) => {
          const data = require(`../data/projects/${projectFile}`);
          return <Project key={index} data={data} />;
        })}
    </div>
  );
};

export default Projects;

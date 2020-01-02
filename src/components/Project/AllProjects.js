import React from "react";

import Project from "components/Project/Project";

import "./AllProjects.scss";

const AllProjects = ({ type, projects }) => {
  return (
    <div>
      {projects.map((project, index) => {
        const data = require(`data/projects/${project}`);
        return <Project key={index} data={data} />;
      })}
    </div>
  );
};

export default AllProjects;

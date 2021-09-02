import React from "react";

import Project from "components/Project/Project";

const AllProjects = ({ type, className, projects }) => {
  return (
    <div>
      {projects.map((project, index) => {
        const data = require(`data/projects/${project}`);
        return <Project key={index} className={className} data={data} />;
      })}
    </div>
  );
};

export default AllProjects;

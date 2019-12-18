import React from "react";
// import "./Projects.scss";

import Project from "../components/Project/Project";

let data = require("../data/projects/rart.json");

const Projects = () => (
  <div>
    <Project data={data} />
  </div>
);

export default Projects;

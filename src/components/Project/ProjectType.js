import React from "react";
import "./ProjectType.scss";

const projectTypeIcon = [
  { type: "personnal", text: "Projet personnel", icon: "user.svg" },
  { type: "school", text: "Projet scolaire", icon: "school.svg" }
];

const ProjectType = ({ type }) => {
  const projectType = projectTypeIcon.find(
    projectType => projectType.type === type
  );
  const icon = require(`img/projects/${projectType.icon}`);
  return (
    <div className="type">
      <img src={icon} alt="Project type" />
      <span>{projectType.text}</span>
    </div>
  );
};

export default ProjectType;

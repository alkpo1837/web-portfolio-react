import React from "react";
// import "./Projects.scss";

import Layout from "components/Layout";
import AccordionItemProject from "components/Project/AccordionItemProject";

import { Accordion } from "react-accessible-accordion";

import projectFiles from "data/projects.json";

const Projects = () => {
  return (
    <Layout>
      <Accordion allowZeroExpanded={true}>
        {projectFiles.map((projectFile, index) => {
          const { type, files } = projectFile;
          return <AccordionItemProject type={type} projects={files} />;
        })}
      </Accordion>
    </Layout>
  );
};

export default Projects;

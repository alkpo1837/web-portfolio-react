import React from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import Project from "components/Project/Project";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const AccordionItemProject = ({ type, projects }) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{type}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        {projects.map((project, index) => {
          const data = require(`data/projects/${project}`);
          return <Project key={index} data={data} />;
        })}
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordionItemProject;

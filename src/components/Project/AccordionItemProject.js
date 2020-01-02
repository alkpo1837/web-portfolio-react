import React from "react";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

import Project from "components/Project/Project";
import Slider from "react-slick";

import "react-accessible-accordion/dist/fancy-example.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./AccordionItemProject.scss";

const AccordionItemProject = ({ type, projects }) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>{type}</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Slider {...settings}>
          {projects.map((project, index) => {
            const data = require(`data/projects/${project}`);
            return <Project key={index} data={data} />;
          })}
        </Slider>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default AccordionItemProject;

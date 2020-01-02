import React from "react";
// import "./Projects.scss";

import Layout from "components/Layout";
import AllProjects from "components/Project/AllProjects";

import projectFiles from "data/projects.json";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Projects = () => {
  const arrayTypes = [];

  return (
    <Layout>
      <Tabs
        style={{
          boxShadow: "0.055rem 0.055rem 1.11rem rgba(240, 240, 240, 0.27)"
        }}
      >
        <TabList>
          {projectFiles.map((projectFile, index) => {
            const { type } = projectFile;
            arrayTypes.push(type);

            return <Tab>{type}</Tab>;
          })}
        </TabList>
        {projectFiles.map((projectFile, index) => {
          const { files, type } = projectFile;
          arrayTypes.push(type);

          return (
            <TabPanel>
              <AllProjects key={index} type={type} projects={files} />
            </TabPanel>
          );
        })}
      </Tabs>
    </Layout>
  );
};

export default Projects;

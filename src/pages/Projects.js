import React from "react";

import Layout from "components/Layout";
import AllProjects from "components/Project/AllProjects";

import projectFiles from "data/projects.json";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ReactTabs.scss";

const Projects = () => {
  const arrayTypes = [];

  return (
    <Layout>
      <Tabs>
        <TabList>
          {projectFiles.map((projectFile, index) => {
            const { type, className } = projectFile;
            arrayTypes.push(type);

            return (
              <Tab theClass={className} key={index}>
                {type}
              </Tab>
            );
          })}
        </TabList>
        {projectFiles.map((projectFile, index) => {
          const { files, className, type } = projectFile;
          arrayTypes.push(type);

          return (
            <TabPanel>
              <AllProjects
                key={index}
                type={type}
                className={className}
                projects={files}
              />
            </TabPanel>
          );
        })}
      </Tabs>
    </Layout>
  );
};

export default Projects;

import React, { useState } from "react";

import Layout from "components/Layout";
import AllProjects from "components/Project/AllProjects";

import projectFiles from "data/projects.json";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./ReactTabs.scss";

const Projects = () => {
  const arrayTypes = [];
  const [tabListClass, setTabListClass] = useState("websiteTabList");

  function myMethod(index) {
    if (index === 0) setTabListClass("websiteTabList");
    else if (index === 1) setTabListClass("mobileAppTabList");
    else if (index === 2) setTabListClass("videoGameTabList");
    else if (index === 3) setTabListClass("otherTabList");
  }

  return (
    <Layout>
      <Tabs onSelect={(index) => myMethod(index)}>
        <TabList className={tabListClass}>
          {projectFiles.map((projectFile, index) => {
            const { type, className } = projectFile;
            arrayTypes.push(type);

            return (
              <Tab selectedClassName={className} key={index}>
                <span color="red">{type}</span>
              </Tab>
            );
          })}
        </TabList>
        {projectFiles.map((projectFile, index) => {
          const { files, className, type } = projectFile;
          arrayTypes.push(type);

          return (
            <TabPanel key={index}>
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

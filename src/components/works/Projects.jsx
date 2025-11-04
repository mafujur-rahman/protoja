"use client";
import React, { useState } from "react";

import AllProjects from "./AllProjects";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="w-full mt-[120px]">
        <div className="flex justify-around">
          <button
            className={`flex py-4 focus:outline-none uppercase`}
            onClick={() => openTab("tab1")}
          >
            <h1 className={`${activeTab === "tab1" ? "text-gray-400" : ""}`}>
              Featured
            </h1>
            <h1
              className={`text-[24px] mt-2 ms-2 ${
                activeTab === "tab1" ? "text-gray-400" : ""
              }`}
            >
              06
            </h1>
          </button>
          <button
            className={`flex py-4 focus:outline-none uppercase`}
            onClick={() => openTab("tab2")}
          >
            <h1 className={`${activeTab === "tab2" ? "text-gray-400" : ""}`}>
              All Project
            </h1>
            <h1
              className={`text-[24px] mt-2 ms-2 ${
                activeTab === "tab2" ? "text-gray-400" : ""
              }`}
            >
              12
            </h1>
          </button>
          <button
            className={`flex py-4 focus:outline-none uppercase`}
            onClick={() => openTab("tab3")}
          >
            <h1 className={`${activeTab === "tab3" ? "text-gray-400" : ""}`}>
              Industries
            </h1>
            <h1
              className={`text-[24px] mt-2 ms-2 ${
                activeTab === "tab3" ? "text-gray-400" : ""
              }`}
            >
              25
            </h1>
          </button>
        </div>

        <div
          id="tab1"
          className={`tabcontent p-4 ${activeTab === "tab1" ? "" : "hidden"}`}
        >
          <AllProjects />
        </div>
        <div
          id="tab2"
          className={`tabcontent p-4 ${activeTab === "tab2" ? "" : "hidden"}`}
        >
          <AllProjects />
        </div>
        <div
          id="tab3"
          className={`tabcontent p-4 ${activeTab === "tab3" ? "" : "hidden"}`}
        >
          <AllProjects />
        </div>
      </div>
    </div>
  );
};

export default Projects;

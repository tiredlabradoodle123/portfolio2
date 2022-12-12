import React, { useEffect, useState, setState } from "react";
import "./App.css";
import copy from "./content/content.json";
import PortfolioContent from "./PortfolioContent";

function App() {
  const [copyContent, setCopy] = useState(copy);
  let [activeIndex, setActiveIndex] = useState(0);
  const [pageContent, setPageContent] = useState([copyContent[0]]);

  copyContent.map((item) => {
    return (item.imagePath = process.env.PUBLIC_URL + item.imagePath);
  });
  function onProjectClick(index) {
    activeIndex = index;
    console.log("activeIndex: ", activeIndex);
    setActiveIndex(activeIndex);
    setPageContent([copyContent[activeIndex]]);
  }

  return (
    <div className="portfolio">
      <div className="portfolio-header">
        <h1>UX Portfolio:</h1>
        <h2 className="portfolio-sub"> Documenting User Experience with Consumer Goods:</h2>
        <p className="portfolio-sub">
          Welcome to my UX final portfolio where, as a novice student UX
          designer I have created several projects which explore customer
          experiences with consumer goods. Click on the tabs below to learn more
          about the projects I have worked on, featuring a tik-tok style app for
          selling second hand clothes, a simulation of a page of the designer
          Fanci-Club’s shop website and much more. All projects have been created
          by me, and this is my first time working with this software.
          Furthermore, click on the Project tab to learn more about my process
          for creating this portfolio and cultivating a narrative as a web
          designer in progress.
        </p>
      </div>

      <div className="body">
        <div className="navbar">
          {copyContent.map((item, index) => {
            return (
              <button
                className="project-button"
                type="button"
                key={index}
                onClick={() => {
                  onProjectClick(index);
                }}
                style={{
                  backgroundColor: activeIndex === index ? "#FFFFFF" : "#cccccc",
                  borderBottom: activeIndex !== index ? "solid" : "none",
                  borderTop: activeIndex === index ? "solid" : "none",
                  borderRight: activeIndex !== index ? "solid" : "solid",
                  borderLeft: activeIndex !== index ? "none" : "none",
                }}
              >
                {item.tabTitle}
              </button>
            );
          })}
        </div>
        <div className="content">
          {pageContent.map((item, index) => {
            return (
              <PortfolioContent
                item={item}
                key={index}
                index={index}
                setActiveIndex={setActiveIndex}
              />
            );
          })}
        </div>
      </div>
      <div className="portfolio-end">
        <h1>Thank you for reading!</h1>
        <h2 >- - - - - - </h2>
      </div>

    </div>

    
  );
}

export default App;

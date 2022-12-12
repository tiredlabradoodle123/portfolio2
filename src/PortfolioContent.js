import React, { useEffect, setState } from "react";
import "./PortfolioContent.css";

export default function portfolioContent(props) {
  console.log("ITEM PROPS: ", props.item);

  function NewTab(link) {
    window.open(
    link, "_blank");
  }

  return (
    <div className="full-container">
      <h1 className="header">{props.item.projectTitle}</h1>
    <div className="portfolio-content">
      <div className="text-container">
        
        <div>
          <h1 className="subheader">Software Used:</h1>
          <p className="portfolio-text">{props.item.softwareUsed}</p>
        </div>
        <div>
          <h1 className="subheader">Project Dates:</h1>
          <p className="portfolio-text">{props.item.projectDates}</p>
        </div>
        <div>
          <h1 className="subheader">Project Description:</h1>
          {props.item.projectDescription.map((item, index) => {
            return (
              <p className="project-description" key={index}>
                {item}
              </p>
            );
          })}
        </div>
        <div className="rhs-content">
        
        <div className="iframe-container">
          {props.item.linkToWebsite.map((item, index) => {
            
            return <div className="iframe-sub-container">
              <iframe className="iframe" href={item} title="url" src={item}></iframe>
              <a target="_blank" rel="noopener noreferrer" className="link-text" href={item}>Click to see the website</a>
            </div>

            
            
          })}
        </div>

        <div className="image-container">
          {props.item.imagePaths.map((item, index) => {
            return (
              <img className="portfolio-image" key={index} src={`${item}`} />
            );
          })}
        </div>


      </div>
      <div>
      <h1 className="subheader"> Further Development:</h1>

          {props.item.siteSpecifics.map((item, index) => {
            return (
              
              <p className="project-description" key={index}>
                {item}
              </p>
              
            
            );
          })}
      </div>
        <div>
          <h1 className="subheader"> Lessons Learned:</h1>

          {props.item.lessons.map((item, index) => {
            return (
              
              <p className="project-description" key={index}>
                {item}
              </p>
              
            
            );
          })}
        </div>
      </div>
      
    </div>
    </div>
    
  );
}

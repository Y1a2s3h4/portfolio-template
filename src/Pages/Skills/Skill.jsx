import React from "react";
import "./Skills.css";
export default function Skill() {
  return (
    <div className="px-3 skills-wrapper">
      <h1 className="skills-heading">
        Skills
        <div className="line"></div>
      </h1>
      <div className="skills-content">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="skill">
            <p className="skill-text"> JavaScript</p>
          </div>
          <div className="skill">
            <p className="skill-text"> HTML5</p>
          </div>
          <div className="skill">
            <p className="skill-text"> CSS3</p>
          </div>
          <div className="skill">
            <p className="skill-text"> Bootstrap</p>
          </div>
          <div className="skill">
            <p className="skill-text"> MongoDB</p>
          </div>
          <div className="skill">
            <p className="skill-text"> ExpressJS</p>
          </div>
          <div className="skill">
            <p className="skill-text"> ReactJS</p>
          </div>
          <div className="skill">
            <p className="skill-text"> NodeJS</p>
          </div>
          <div className="skill">
            <p className="skill-text"> Mongoose</p>
          </div>
          <div className="skill">
            <p className="skill-text"> Web Scraping</p>
          </div>
        </div>
      </div>
    </div>
  );
}

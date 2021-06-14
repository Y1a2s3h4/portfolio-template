import React, { useState, useEffect } from "react";
import { ReactComponent as HTML5 } from "../../Assets/html5.svg"
import { ReactComponent as CSS3 } from "../../Assets/css3.svg"
import { ReactComponent as JS } from "../../Assets/js1.svg"
import { ReactComponent as ReactJS } from "../../Assets/reactjs.svg"
import { ReactComponent as NodeJS } from "../../Assets/nodejs.svg"
import { ReactComponent as BootStrap } from "../../Assets/bootstrap.svg"
import { ReactComponent as MongoDB } from "../../Assets/mongodb.svg"
import { ReactComponent as Express } from "../../Assets/expressjs.svg"
import "./Skills.css";
export default function Skill() {
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (e.target.scrollingElement.scrollTop >= 693) {
        setReveal(true)
      }
    })
  })
  return (
    <div className="skills-wrapper">
      <h1 className="skills-heading" id="skills">
        <div className="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" className={reveal ? "reveal-skills" : "opacity-0"}>
            <text x="10" y="36">Skills</text>
          </svg>
          <div className={reveal ? "line" : "opacity-0"}></div>
        </div>
      </h1>
      <div className="skills-content">
        <div className="grid">
          <div className="skill">
            <HTML5 className="skill-1" />
            <h5>HTML5 · Intermidiate Level</h5>
          </div>
          <div className="skill">
            <CSS3 className="skill-2" />
            <h5>CSS3 · Intermidiate Level</h5>
          </div>
          <div className="skill">
            <JS className="skill-3" />
            <h5>JS · Intermidiate Level</h5>
          </div>
          <div className="skill">
            <MongoDB className="mongodb-img" />
            <h5>MongoDB · Intermidiate Level</h5>
          </div>
          <div className="skill">
            <Express className="skill-4" />
            <h5>ExpressJS · Intermidiate Level</h5>
          </div>
          <div className="skill">
            <ReactJS className="skill-5" />
            <h5>ReactJS · Intermidiate Level</h5>
          </div>
          <div className="skill">
            <NodeJS className="skill-6" />
            <h5>NodeJS · Intermidiate Level</h5>
          </div>
          <div className="skill">
            <BootStrap className="skill-7" />
            <h5>Bootstrap · Intermidiate Level</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import MediaFlix from "../../Assets/Media-Screely.png"
import "./Projects.css";
export default function Projects() {
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (e.target.scrollingElement.scrollTop >= 1945) {
        setReveal(true)
      }
    })
  })
  return (
    <div className="projects-wrapper">
      <h1 className="projects-heading">
        <div className="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" className={reveal ? "reveal-skills" : "opacity-0"}>
            <text x="10" y="36">Projects</text>
          </svg>
          <div className={reveal ? "line" : "opacity-0"}></div>
        </div>
      </h1>
      <div className="projects-content">
        <div className="grid">
          <div className="project">

            <img src={MediaFlix} alt="projectimg" />
            <h5>Media Flix</h5>
          </div>

          <div className="project">

            <img src={MediaFlix} alt="projectimg" />
            <h5>Media Flix</h5>
          </div>

          <div className="project">

            <img src={MediaFlix} alt="projectimg" />
            <h5>Media Flix</h5>
          </div>

          <div className="project">

            <img src={MediaFlix} alt="projectimg" />
            <h5>Media Flix</h5>
          </div>

          <div className="project">

            <img src={MediaFlix} alt="projectimg" />
            <h5>Media Flix</h5>
          </div>

          <div className="project">

            <img src={MediaFlix} alt="projectimg" />
            <h5>Media Flix</h5>
          </div>

        </div>
      </div>
    </div>
  );
}

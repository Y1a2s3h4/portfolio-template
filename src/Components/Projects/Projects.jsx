import React, { useState, useEffect } from "react";
import MediaFlix from "../../Assets/Media-Screely.png"
import { Link } from "react-router-dom"
import "./Projects.css";
export default function Projects() {
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (e.target.scrollingElement.scrollTop >= 1945) {
        setReveal(true)
      }
    })
  }, [])
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

          <Link to="/Postmanager">
            <div className="project">
              <img src={MediaFlix} alt="projectimg" />
              <h5>Post Manager Web App</h5>
            </div>
          </Link>
          <Link to="/Ghfinder">
            <div className="project">
              <img src={MediaFlix} alt="projectimg" />
              <h5>GH Finder 2.0</h5>
            </div>
          </Link>
          <Link to="/MTorrent">
            <div className="project">
              <img src={MediaFlix} alt="projectimg" />
              <h5>MTorrent</h5>
            </div>
          </Link>
          <Link to="/Contact">
            <div className="project">
              <img src={MediaFlix} alt="projectimg" />
              <h5>Contact Manager Web App</h5>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import PostManager from "../../Assets/postmanager.png"
import Mtorrent from "../../Assets/mtorrent.png"
import GhFinder from "../../Assets/ghfinder.png"
import ContactManager from "../../Assets/contact_manager.png"
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
      <h1 className="projects-heading" id="projects">
        <div className="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" className={reveal ? "reveal-skills" : "opacity-0"}>
            <text x="10" y="36">Projects</text>
          </svg>
          <div className={reveal ? "line" : "opacity-0"}></div>
        </div>
      </h1>
      <div className="projects-content">
        <div className="grid">

          <Link to="/projectinfo/Postmanager">
            <div className="project">
              <img src={PostManager} alt="projectimg" />
              <h5>Post Manager Web App</h5>
            </div>
          </Link>
          <Link to="/projectinfo/Ghfinder">
            <div className="project">
              <img src={GhFinder} alt="projectimg" />
              <h5>GH Finder 2.0</h5>
            </div>
          </Link>
          <Link to="/projectinfo/MTorrent">
            <div className="project">
              <img src={Mtorrent} alt="projectimg" />
              <h5>MTorrent</h5>
            </div>
          </Link>
          <Link to="/projectinfo/Contact">
            <div className="project">
              <img src={ContactManager} alt="projectimg" />
              <h5>Contact Manager Web App</h5>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}

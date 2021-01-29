import React, { useState, useEffect } from "react";
import AboutSvg from "../../Assets/about-new.svg";
import "./About.css";
export default function About() {
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      if (e.target.scrollingElement.scrollTop >= 134) {
        setReveal(true)
      }
    })
  })
  return (
    <div className="about-wrapper">
      <h1 className="about-heading">
        <div className="d-flex">
          <svg xmlns="http://www.w3.org/2000/svg" className={reveal ? "reveal-about" : ""}>
            <text x="10" y="36">About</text>
          </svg>
          <div className={reveal ? "line" : ""}></div>
        </div>
      </h1>
      <div className="about-card p-2">
        <div className="row">
          <div className="about-left col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="about-card-content">
              <p className="about-card-text">
                Hello there, I'm Omkar Parekh, a 19-year-old from Mumbai.
              </p>
              <p className="about-card-text">
                I'm a MERN Stack developer. I have spend my days developing
                scalable web apps & applied those concepts to real-world
                scenarios and applications. I also have knowledge of web
                scraping. I've worked alongside senior designers and developers
                who have raised my standards for whats expected of any web
                application.
              </p>

              <p className="about-card-text">
                After many projects, I've gained a solid understanding of web
                development concepts, and I have applied those concepts in many
                applications.
              </p>
              <a
                href="https://post-manager-app.netlify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn about-btn"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="about-right col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <img className="about-card-img" src={AboutSvg} alt="aboutsvg" />
          </div>
        </div>
      </div>
    </div>
  );
}

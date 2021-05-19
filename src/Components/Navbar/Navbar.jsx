import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/OMKAR-Logo.svg";
import LogoRed from "../../Assets/OMKAR-Logo-Red.svg";
export default function Navbar() {
  const [path, setPath] = useState(null)
  setInterval(() => {
    setPath(window.location.pathname)
  }, 500);
  let navLink = path === "/" ? "nav-link" : "nav-link text-color-custom"
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={path === "/" ? Logo : LogoRed} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className={navLink} to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLink} to="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLink} to="/">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLink} to="/">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className={navLink} to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

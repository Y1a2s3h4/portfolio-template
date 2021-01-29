// import React, { useRef, useEffect } from "react";
import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/OMKAR-Logo.svg";
import { Link } from "react-router-dom";
export default function Navbar() {
  // const cursor = useRef();
  // useEffect(() => {
  //   console.log(cursor);
  //   document.addEventListener("mousemove", (e) => {
  //     cursor.current.setAttribute(
  //       "style",
  //       `z-index:2;opacity:1;top:${e.pageY - 15}px;left:${e.pageX - 15}px;`
  //     );
  //   });
  // }, []);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      {/* <div className="c_custom" ref={cursor}></div> */}
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" />
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
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

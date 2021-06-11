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

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={path === "/" ? Logo : LogoRed} alt="logo" />
          </Link>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu" className="nav-toggle">
            <span className="nav-icon"></span>
          </label>
          <div className="background-nav">&nbsp;</div>
          <div className="menu">
            <div className="menu-inner" id="">
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    About
              </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Skills
              </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Projects
              </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Contact
              </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    // <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">
    //       <img src={path === "/" ? Logo : LogoRed} alt="logo" />
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-toggle="collapse"
    //       data-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //           <Link className={navLink} to="/">
    //             Home <span className="sr-only">(current)</span>
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className={navLink} to="/">
    //             About
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className={navLink} to="/">
    //             Skills
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className={navLink} to="/">
    //             Projects
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className={navLink} to="/">
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

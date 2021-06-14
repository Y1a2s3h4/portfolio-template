import React, { useState, useRef } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../../Assets/OMKAR-Logo.svg";
import LogoRed from "../../Assets/OMKAR-Logo-Red.svg";
export default function Navbar() {
  const [path, setPath] = useState(null)
  setInterval(() => {
    setPath(window.location.pathname)
  }, 500);
  const menu = useRef(null)
  const menuClick = () => menu.current.checked ? menu.current.checked = false : menu.current.checked;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container">
          <Link className="navbar-brand" to="/#home">
            <img src={path === "/" ? Logo : LogoRed} alt="logo" />
          </Link>
          <input type="checkbox" id="menu" ref={menu} />
          <label htmlFor="menu" className="nav-toggle">
            <span className="nav-icon"></span>
          </label>
          <div className="background-nav">&nbsp;</div>
          <div className="menu">
            <div className="menu-inner" id="">
              <ul>
                <li className="nav-item">
                  <Link smooth className="nav-link" to="/#home" onClick={menuClick}>
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth className="nav-link" to="/#about" onClick={menuClick}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth className="nav-link" to="/#skills" onClick={menuClick}>
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth className="nav-link" to="/#projects" onClick={menuClick}>
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth className="nav-link" to="/contact" onClick={menuClick}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

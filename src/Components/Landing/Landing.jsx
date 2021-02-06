import React from "react";
import CodingSvg from "../../Assets/coding.svg";
import LandingBG from "../../Assets/Vector1.svg";
import Typed from "react-typed";
import "./Landing.css";
export default function Landing() {
  const strings = [
    "MERN Stack Developer",
    "College Student",
    "Passionate about Backend",
    "Gaming Enthusiast",
  ];
  return (
    <div className="container landing_wrapper">
      <div className="img-wrap">
        <img src={LandingBG} alt="" />
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="landing-content">
            <h1 className="heading-title-one">
              Hey Everyone <div className="heading-line"></div>
            </h1>
            <h1 className="heading-title-two">My Self Omkar</h1>
            <p className="typing">
              <Typed
                strings={strings}
                typeSpeed={100}
                loop={true}
                loopCount={Infinity}
              />{" "}
            </p>
            <a href="#hire" className="btn btn-hire">
              Hire Me
            </a>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div className="right-img-wrap">
            <img src={CodingSvg} draggable="false" alt="codingsvg" />
          </div>
        </div>
      </div>
    </div>
  );
}

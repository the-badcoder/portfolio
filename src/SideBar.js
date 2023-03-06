import React from "react";
import "./SideBar.css";


import { useState, useEffect } from "react";
export const SideBar = () => {
  const [menuWrapperClass, setMenuWrapperClass] = useState("menu-wrapper show");
  const [menuIcon, setmMenuIcon] = useState("active");

  function handleSubmit(e) {
    e.preventDefault();
    if (menuIcon == "active") {
      setMenuWrapperClass("menu-wrapper hide");
      setmMenuIcon("");
    } else {
      setMenuWrapperClass("menu-wrapper show");
      setmMenuIcon("active");
    }
    console.log("You clicked submit.");

    e.stopPropagation(); //stop trigger parent
  }

  return (
    <div>
      <div id="overlay"></div>
      <div className="main_page">
        <div className="left show">
          <div className={menuWrapperClass}>
            <div className="menu-icon-wrapper">
              <a
                href="#"
                onClick={(e) => handleSubmit(e)}
                className={"menu-icon " + menuIcon}
              ></a>
            </div>
            <ul className="menu">
              <li className="bold name-section">
                <a
                  aria-label="Navigate to the About section"
                  href="#"
                  className="waves-effect waves-dark teal-text"
                >
                  <span>SM Hasssn</span>
                </a>
              </li>
              <li className="bold">
                <a
                  aria-label="Navigate to the About section"
                  href="#about"
                  className="waves-effect waves-dark teal-text"
                >
                  <i className="large material-icons">person</i>
                  <span>About</span>
                </a>
              </li>
              <li className="bold">
                <a
                  aria-label="Navigate to the Experience section"
                  href="#experience"
                  className="waves-effect waves-dark cyan-text"
                >
                  <i className="large material-icons ">trending_up</i>
                  <span>Experience</span>
                </a>
              </li>
              <li className="bold">
                <a
                  aria-label="Navigate to the Projects section"
                  href="#projects"
                  className="waves-effect waves-dark indigo-text"
                >
                  <i className="large material-icons">web</i>
                  <span>Projects</span>
                </a>
              </li>
              <li className="bold">
                <a
                  aria-label="Navigate to the Skills section"
                  href="#skills"
                  className="waves-effect waves-dark purple-text"
                >
                  <i className="large material-icons">equalizer</i>
                  <span>Skills</span>
                </a>
              </li>
              <li className="bold">
                <a
                  aria-label="Navigate to the Awards section"
                  href="#awards"
                  className="waves-effect waves-dark red-text"
                >
                  <i className="large material-icons">grade</i>
                  <span>Awards</span>
                </a>
              </li>
              <li className="bold">
                <a
                  aria-label="Navigate to the Education section"
                  href="#education"
                  className="waves-effect waves-dark orange-text"
                >
                  <i className="large material-icons">school</i>
                  <span>Education</span>
                </a>
              </li>
              <li className="bold">
                <a
                  aria-label="Navigate to the Contact section"
                  href="#contact"
                  className="waves-effect waves-dark brown-text"
                >
                  <i className="large material-icons">mail</i>
                  <span>Contact</span>
                </a>
              </li>
               
              <li className="bold">
                <a
                  aria-label="Open Andrew's Resume in a new tab"
                  href="https://docs.google.com/document/d/1evlvmAcOmPTttl1isyX_UcQbLO5pK8OwB4Rs2Sv4riY"
                  target="_blank"
                  className="waves-effect waves-dark grey-text text-darken-3"
                >
                  <i className="large material-icons">description</i>
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

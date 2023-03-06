import React, { useEffect } from "react";
import $ from "jquery";
import "./NavBar.css";

export const NavBar = () => {
  useEffect(() => {
    // Code to execute after the document has loaded
    $(".menu li").click(function (event) {
      event.stopPropagation(); //stop trigger parent
      var el = $(this).parents("li").siblings();
      el = el.length == 0 ? $(this).siblings() : el;
      el.find(".active").addBack().removeClass("active");

      if ($(this).hasClass("active")) {
        $(this).find(".active").addBack().removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });

    // responsive menu for mobile and tablet
    var responsive = function () {
      var s = 500;
      $(window).resize(function () {
        windowSize(s);
      });
      windowSize(s);
    };

    var windowSize = function (s) {
      var w = $(window).width();
      if (w <= s) {
        $(".menu-icon").removeClass("active");
        $(".menu-wrapper").addClass("hide").removeClass("show");
        $(".left").addClass("hide").removeClass("show");
      } else {
        $(".menu-icon").addClass("active");
        $(".menu-wrapper").addClass("show").removeClass("hide");
        $(".left").addClass("show").removeClass("hide");
      }
    };

    responsive();

    $(".menu-icon").click(function (e) {
      e.preventDefault();
      $(this).toggleClass("active");

      if ($(this).hasClass("active")) {
        $(this).parents(".menu-wrapper").addClass("show").removeClass("hide");
        $("#overlay").addClass("overlay");
      } else {
        $(this).parents(".menu-wrapper").addClass("hide").removeClass("show");
        $("#overlay").removeClass("overlay");
      }
    });
  }, []);

  return (
    <div className="main_page">
      <div className="left show">
        <div className="menu-wrapper show">
          <div className="menu-icon-wrapper">
            <a href="" className="menu-icon active"></a>
          </div>
          <ul className="menu">
            <li className="bold name-section">
              <a
                aria-label="Navigate to the About section"
                href="#"
                className="waves-effect waves-dark teal-text"
              >
                <span>the_badcoder</span>
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
                aria-label="Open Andrew's Resume in a new tab"
                href="https://docs.google.com/document/d/1evlvmAcOmPTttl1isyX_UcQbLO5pK8OwB4Rs2Sv4riY"
                target="_blank"
                className="waves-effect waves-dark grey-text text-darken-3"
              >
                <i className="large material-icons">equalizer</i>
                <span>Resume</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import $ from "jquery";

$(document).ready(function () {
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
    console.log("clicked")
    e.preventDefault();
    $(this).toggleClass("active");

    //set default
    //$(this).parents(".menu-wrapper").addClass("hide").removeClass("show");

    if ($(this).hasClass("active")) {
      $(this).parents(".menu-wrapper").addClass("show").removeClass("hide");
      $("#overlay").addClass("overlay");
    } else {
      $(this).parents(".menu-wrapper").addClass("hide").removeClass("show");
      $("#overlay").removeClass("overlay");
    }
  });
});

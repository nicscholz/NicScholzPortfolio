$(document).ready(function() {
  console.log("Scripts js...");

  $(window).on("scroll", function(){

    var $scrolled = $(window).scrollTop();
    console.log($scrolled);

    $(".project-title").css("top", ($scrolled * -1) + 'px');

    $(".top-left").css("transform", "skewY(" + $scrolled/2 + "deg)");

    $(".top-center").css("right", ($scrolled * -1) + "px").css("z-index", ($scrolled * -1) );

    $(".top-right").css("top", ($scrolled * 2) + "px");

    $(".bottom-left").css("left", ($scrolled * 0.5) + "px");

    $(".bottom-center").css("transform", "rotate(" + $scrolled + "deg)");

    $(".bottom-right").css("transform", "scale(" + ($scrolled%100) / 50 + ")" );

    $(".break h1").css("transform", "rotate(" + ($scrolled * .5) + "deg");
  })



});

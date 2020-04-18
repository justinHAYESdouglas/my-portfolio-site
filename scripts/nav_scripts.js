$(document).ready(function(){

  //scroll to home
  $(".to-home").click(function(){
    $("html,body").animate({
      scrollTop: $("#home-wrapper").offset().top
    }, 500);
  });

  //sroll to projects
  $(".to-proj").click(function(){
    $("html,body").animate({
      scrollTop: $("#project-wrapper").offset().top
    }, 500);
  });

  //sroll to resume
  $(".to-res").click(function(){
    $("html,body").animate({
      scrollTop: $("#resume-wrapper").offset().top
    }, 500);
  });

  //sroll to contact
  $(".to-contact").click(function(){
    $("html,body").animate({
      scrollTop: $("#contact-wrapper").offset().top
    }, 500);
  });

  //hamburger menu, the menus are on top of eachother to easily switch icons
  $("#mobile-menu-btn-container button").click(function(){
      $("#main-nav, #burger").animate({
        height: "toggle"
      });
  })

  //prevent main nav from disapearing on full sized screens when using hamburger menu
  $(window).on('resize', function(){
    if ($(this).width() >= 1024) { 
      $("#main-nav").css("display", "inline-flex");
    } if (($(this).width() < 1000)){
      $("#main-nav").css("display", "none");
    }
  });

});
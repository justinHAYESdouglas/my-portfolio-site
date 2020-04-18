$(document).ready(function(){

//view project button
  $(".view-proj-btn").click(function(){
    $(this).parent().fadeOut();
    $(this).parent().next().fadeIn(3000);
    
  });

//close project button
  $(".close-proj-btn").click(function(){
    $(this).parent().css("display","none");
    $(this).parent().prev().fadeIn();
  });

  //toggle challenge menu
  $(".list-wrapper li:last-child").click(function(){
    $(this).find("p").toggle();
    $(this).find("span").toggleClass("menu-inactive menu-active");
  });
});
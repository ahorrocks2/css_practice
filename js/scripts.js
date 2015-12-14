$(document).ready(function() {
  $(".boxes").not($("#box-6")).hover(function(){
    $(this).find(".project-description").show();
    $(this).find(".letter").hide();
    $("img").not($(this).find("img")).hide();
    $(this).find("img").css("opacity", "1");
  }, function(){
    $(".project-description").hide();
    $(this).find(".letter").show();
    $("img").not($(this).find("img")).show();
    $(this).find("img").css("opacity", ".1");
  });




})

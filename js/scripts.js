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

  $("#about").hide();

  $("#about-me-button").click(function() {

    $("#nav-buttons").animate({ top: "0px" }, 1000, function() { $("#about").show(); } ),

                              (function() {
    $("#nav-buttons").animate({ top:"280px" }, 1000, function() { $("#about").hide(); } )


  }); });


})

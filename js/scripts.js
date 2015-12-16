$(document).ready(function() {
  $(".boxes").not($("#box-6")).hover(function(){
    $(this).find(".project-description").show();
    $(this).find("img").css("opacity", "1");
  }, function(){
    $(".project-description").hide();
    $(this).find("img").css("opacity", ".1");
  });

  $("#about").hide();
  $("#contact-info").hide();

  $("#about-me-button").click(function() {
    $("#contact-info").hide(), $("#nav-buttons").animate({ top: "0px" }, 1000, function() { $("#about").show(); } );
  });

  $("#contact").click(function() {
    $("#about").hide(), $("#nav-buttons").animate({ top:"560px" }, 1000, function() { $("#contact-info").show(); } );
  });


})

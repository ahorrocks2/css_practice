$(document).ready(function() {
  $("#about").hide();
  $("#contact-info").hide();

  $("#about-me-button").click(function() {
    $("#contact-info").hide(), $("#nav-buttons").animate({ top: "100px" }, 1000, function() { $("#about").show(); } );
  });

  $("#contact").click(function() {
    $("#about").hide(), $("#nav-buttons").animate({ top:"800px" }, 1000, function() { $("#contact-info").show(); } );
  });


})

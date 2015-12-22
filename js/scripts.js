$(document).ready(function() {
  $("#about").hide();
  // $("#contact-info").hide();
  //
  // $("#about-me-button").click(function() {
  //   $("#contact-info").hide(), $("#nav-buttons").animate({ top: "100px" }, 1000, function() { $("#about").show(); } );
  // });

  $("#about-me-button").click(function() {
    $("#nav-buttons").animate({ top:"720px" }, 1000, function() { $("#about").show(); } );
  });


})

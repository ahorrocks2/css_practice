$(document).ready(function() {

    $("#slideshow > div:gt(0)").hide();

    setInterval(function() {
      $('#slideshow > div:first')
        .hide()
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);

});








  // $('#hang-1').hide();
  // $('#hang-2').hide();
  // $('#hang-3').hide();
  //
  //
  // $('#box-1').mouseover(function() {
  //   var active = $('.active');
  //   slideshow(active);
  //
  //   function slideshow(active) {
  //     if (active.next().attr('class') == "hang") {
  //       var nextImg = active.next()
  //     } else {
  //       var nextImg = $("#hang-1")
  //     }
  //
  //     $(active).fadeIn(1000);
  //     active.removeClass('active');
  //     nextImg.addClass('active');
  //   };
  // });

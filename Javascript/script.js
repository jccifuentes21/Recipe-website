$(document).ready(function(){

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.documentElement.scrollTop > 20) {
      $(".to-top").fadeIn('slow');
    } else {
      $(".to-top").fadeOut('slow');
    }
  }

  $(".to-top").click(function(){
    $('html, body').animate({ scrollTop: 0 }, "slow");
  })
})

$(function(){
  $.scrollify({
    section :".country",
    setHeights: false,
    offset: -64
  });
})


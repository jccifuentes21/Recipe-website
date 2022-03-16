$(document).ready(function(){

  $('.scroll-down').fadeOut(2000)

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

  $('.view-image').on('mouseover', function(){
    $('.info').animate({opacity: '0'}, 'slow')
    $('.flag').animate({opacity: '0'}, 'slow')
    console.log('mouse is over the div')
  })

  $('.view-image').on('mouseout', function(){
    $('.info').animate({opacity: '1'}, 'slow')
    $('.flag').animate({opacity: '1'}, 'slow')
    console.log('mouse is out of the div')
  })
})

$(function(){
  $.scrollify({
    section :".country",
    setHeights: false,
    offset: -64
  });
})


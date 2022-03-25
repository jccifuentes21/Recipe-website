$(document).ready(function () {
    var docWidth = $('body').width(),
        $hero = $('#hero'),
        $images = $('#hero .recipe-btn'),
        slidesWidth = $hero.width();

    $(window).on('resize', function () {
        docWidth = $('body').width();
        slidesWidth = $hero.width();
    })

    $(document).mousemove(function (e) {
        var mouseX = e.pageX,
            offset = mouseX / docWidth * slidesWidth - mouseX / 2;

        $images.css({
            '-webkit-transform': 'translate3d(' + -offset + 'px,0,0)',
            'transform': 'translate3d(' + -offset + 'px,0,0)'
        });
    });

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

// Variable declaring. Created by Yuto
const recipe = document.querySelectorAll('.recipe-text')
const btnEl = document.querySelectorAll('.goto-recipe-btn')
const picEL = document.getElementById('recipe-img');
const images = ['Images/chicken-resized.jpg', 'Images/nao-resized.jpg', 'Images/ozan-resized.jpg', 'Images/ajiaco-resized.jpg']
const imageNo = Math.floor(Math.random() * images.length)
//Suggested by Yuto
recipe[imageNo].classList.add('show')
btnEl[imageNo].classList.add('show')
picEL.src = images[imageNo];
$(".recipe-container").hide()
$(".recipe-container").show(4000)
// // $(".reco-recipe").fadeOut("slow");
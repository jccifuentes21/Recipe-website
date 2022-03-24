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

// Variable declaring
const recipe = document.getElementById('chosen-text-0')
const recipe1 = document.getElementById('chosen-text-1')
const recipe2 = document.getElementById('chosen-text-2')
const recipe3 = document.getElementById('chosen-text-3')


const btnEl = document.querySelector('#btn-0')
const btn1El = document.querySelector('#btn-1')
const btn2El = document.querySelector('#btn-2')
const btn3El = document.querySelector('#btn-3')


btnEl.classList.add('none')
btn1El.classList.add('none')
btn2El.classList.add('none')
btn3El.classList.add('none')

recipe.classList.add('none')
recipe1.classList.add('none')
recipe2.classList.add('none')
recipe3.classList.add('none')

const picEL = document.getElementById('recipe-img');
const images = ['Images/chicken-resized.jpg', 'Images/nao-resized.jpg', 'Images/ozan-resized.jpg', 'Images/ajiaco-resized.jpg']
const imageNo = Math.floor(Math.random() * images.length)

if (imageNo == 0) {
    recipe.classList.remove('none')
    btnEl.classList.remove('none')
} else if (imageNo == 1) {
    recipe1.classList.remove('none')
    btn1El.classList.remove('none')
} else if (imageNo == 2) {
    recipe2.classList.remove('none')
    btn2El.classList.remove('none')
} else if (imageNo == 3) {
    recipe3.classList.remove('none')
    btn3El.classList.remove('none')
}
picEL.src = images[imageNo];

$(".recipe-container").hide()
$(".recipe-container").show(4000)
// $(".reco-recipe").fadeOut("slow");
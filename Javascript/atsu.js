document.querySelector('.btn-demo').addEventListener('click', next);
document.querySelector('.btn1-demo').addEventListener('click', next1);
document.querySelector('.btn2-demo').addEventListener('click', remove);


function next() {
    document.querySelector('.tur').classList.add('hide')
    document.querySelector('.jap').classList.add('new-next')
    document.querySelector('.mex').classList.add('new-next1')
}
function next1(){
    document.querySelector('.jap').classList.add('go-sub1')
    document.querySelector('.tur').classList.add('go-main')
    document.querySelector('.mex').classList.add('go-sub2')
}
function next2(){
    
}
function remove(){
    document.querySelector('.jap').classList.remove('new-next','go-sub1')
    document.querySelector('.tur').classList.remove('hide','go-main')
    document.querySelector('.mex').classList.remove('new-next1','go-sub2')
}
const recipe = document.querySelector('.reco-recipe-sent')
const recipe1 = document.querySelector('.reco-recipe-sent1')
const recipe2 = document.querySelector('.reco-recipe-sent2')
const recipe3 = document.querySelector('.reco-recipe-sent3')
const btnEl = document.querySelector('.btn')
const btn1El = document.querySelector('.btn1')
const btn2El = document.querySelector('.btn2')
const btn3El = document.querySelector('.btn3')
btnEl.classList.add('none')
btn1El.classList.add('none')
btn2El.classList.add('none')
btn3El.classList.add('none')

recipe.classList.add('none')
recipe1.classList.add('none')
recipe2.classList.add('none')
recipe3.classList.add('none')
const picEL = document.getElementById('pic-today');
const images = ['Images/home-pic/chicken-home.jpg', 'Images/home-pic/tacos.jpg', 'images/home-pic/doner.jpg', 'Images/home-pic/coro-meal.jpg']
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

$(".reco-recipe").hide()
$(".reco-recipe").show(2500)
// $(".reco-recipe").fadeOut("slow");
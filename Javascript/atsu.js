// const cardsContainer = document.querySelector(".card-carousel");
// const cardsController = document.querySelector(".card-carousel + .card-controller")

// class DraggingEvent {
//     constructor(target = undefined) {
//         this.target = target;
//     }

//     event(callback) {
//         let handler;

//         this.target.addEventListener("mousedown", e => {
//             e.preventDefault()

//             handler = callback(e)

//             window.addEventListener("mousemove", handler)

//             document.addEventListener("mouseleave", clearDraggingEvent)

//             window.addEventListener("mouseup", clearDraggingEvent)

//             function clearDraggingEvent() {
//                 window.removeEventListener("mousemove", handler)
//                 window.removeEventListener("mouseup", clearDraggingEvent)

//                 document.removeEventListener("mouseleave", clearDraggingEvent)

//                 handler(null)
//             }
//         })

//         this.target.addEventListener("touchstart", e => {
//             handler = callback(e)

//             window.addEventListener("touchmove", handler)

//             window.addEventListener("touchend", clearDraggingEvent)

//             document.body.addEventListener("mouseleave", clearDraggingEvent)

//             function clearDraggingEvent() {
//                 window.removeEventListener("touchmove", handler)
//                 window.removeEventListener("touchend", clearDraggingEvent)

//                 handler(null)
//             }
//         })
//     }

//     // Get the distance that the user has dragged
//     getDistance(callback) {
//         function distanceInit(e1) {
//             let startingX, startingY;

//             if ("touches" in e1) {
//                 startingX = e1.touches[0].clientX
//                 startingY = e1.touches[0].clientY
//             } else {
//                 startingX = e1.clientX
//                 startingY = e1.clientY
//             }


//             return function (e2) {
//                 if (e2 === null) {
//                     return callback(null)
//                 } else {

//                     if ("touches" in e2) {
//                         return callback({
//                             x: e2.touches[0].clientX - startingX,
//                             y: e2.touches[0].clientY - startingY
//                         })
//                     } else {
//                         return callback({
//                             x: e2.clientX - startingX,
//                             y: e2.clientY - startingY
//                         })
//                     }
//                 }
//             }
//         }

//         this.event(distanceInit)
//     }
// }


// class CardCarousel extends DraggingEvent {
//     constructor(container, controller = undefined) {
//         super(container)

//         // DOM elements
//         this.container = container
//         this.controllerElement = controller
//         this.cards = container.querySelectorAll(".card")

//         // Carousel data
//         this.centerIndex = (this.cards.length - 1) / 2;
//         this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100
//         this.xScale = {};

//         // Resizing
//         window.addEventListener("resize", this.updateCardWidth.bind(this))

//         if (this.controllerElement) {
//             this.controllerElement.addEventListener("keydown", this.controller.bind(this))
//         }


//         // Initializers
//         this.build()

//         // Bind dragging event
//         super.getDistance(this.moveCards.bind(this))
//     }

//     updateCardWidth() {
//         this.cardWidth = this.cards[0].offsetWidth / this.container.offsetWidth * 100

//         this.build()
//     }

//     build(fix = 0) {
//         for (let i = 0; i < this.cards.length; i++) {
//             const x = i - this.centerIndex;
//             const scale = this.calcScale(x)
//             const scale2 = this.calcScale2(x)
//             const zIndex = -(Math.abs(i - this.centerIndex))

//             const leftPos = this.calcPos(x, scale2)


//             this.xScale[x] = this.cards[i]

//             this.updateCards(this.cards[i], {
//                 x: x,
//                 scale: scale,
//                 leftPos: leftPos,
//                 zIndex: zIndex
//             })
//         }
//     }


//     controller(e) {
//         const temp = { ...this.xScale };

//         if (e.keyCode === 39) {
//             // Left arrow
//             for (let x in this.xScale) {
//                 const newX = (parseInt(x) - 1 < -this.centerIndex) ? this.centerIndex : parseInt(x) - 1;

//                 temp[newX] = this.xScale[x]
//             }
//         }

//         if (e.keyCode == 37) {
//             // Right arrow
//             for (let x in this.xScale) {
//                 const newX = (parseInt(x) + 1 > this.centerIndex) ? -this.centerIndex : parseInt(x) + 1;

//                 temp[newX] = this.xScale[x]
//             }
//         }

//         this.xScale = temp;

//         for (let x in temp) {
//             const scale = this.calcScale(x),
//                 scale2 = this.calcScale2(x),
//                 leftPos = this.calcPos(x, scale2),
//                 zIndex = -Math.abs(x)

//             this.updateCards(this.xScale[x], {
//                 x: x,
//                 scale: scale,
//                 leftPos: leftPos,
//                 zIndex: zIndex
//             })
//         }
//     }

//     calcPos(x, scale) {
//         let formula;

//         if (x < 0) {
//             formula = (scale * 100 - this.cardWidth) / 2

//             return formula

//         } else if (x > 0) {
//             formula = 100 - (scale * 100 + this.cardWidth) / 2

//             return formula
//         } else {
//             formula = 100 - (scale * 100 + this.cardWidth) / 2

//             return formula
//         }
//     }

//     updateCards(card, data) {
//         if (data.x || data.x == 0) {
//             card.setAttribute("data-x", data.x)
//         }

//         if (data.scale || data.scale == 0) {
//             card.style.transform = `scale(${data.scale})`

//             if (data.scale == 0) {
//                 card.style.opacity = data.scale
//             } else {
//                 card.style.opacity = 1;
//             }
//         }

//         if (data.leftPos) {
//             card.style.left = `${data.leftPos}%`
//         }

//         if (data.zIndex || data.zIndex == 0) {
//             if (data.zIndex == 0) {
//                 card.classList.add("highlight")
//             } else {
//                 card.classList.remove("highlight")
//             }

//             card.style.zIndex = data.zIndex
//         }
//     }

//     calcScale2(x) {
//         let formula;

//         if (x <= 0) {
//             formula = 1 - -1 / 5 * x

//             return formula
//         } else if (x > 0) {
//             formula = 1 - 1 / 5 * x

//             return formula
//         }
//     }

//     calcScale(x) {
//         const formula = 1 - 1 / 5 * Math.pow(x, 2)

//         if (formula <= 0) {
//             return 0
//         } else {
//             return formula
//         }
//     }

//     checkOrdering(card, x, xDist) {
//         const original = parseInt(card.dataset.x)
//         const rounded = Math.round(xDist)
//         let newX = x

//         if (x !== x + rounded) {
//             if (x + rounded > original) {
//                 if (x + rounded > this.centerIndex) {

//                     newX = ((x + rounded - 1) - this.centerIndex) - rounded + -this.centerIndex
//                 }
//             } else if (x + rounded < original) {
//                 if (x + rounded < -this.centerIndex) {

//                     newX = ((x + rounded + 1) + this.centerIndex) - rounded + this.centerIndex
//                 }
//             }

//             this.xScale[newX + rounded] = card;
//         }

//         const temp = -Math.abs(newX + rounded)

//         this.updateCards(card, { zIndex: temp })

//         return newX;
//     }

//     moveCards(data) {
//         let xDist;

//         if (data != null) {
//             this.container.classList.remove("smooth-return")
//             xDist = data.x / 250;
//         } else {


//             this.container.classList.add("smooth-return")
//             xDist = 0;

//             for (let x in this.xScale) {
//                 this.updateCards(this.xScale[x], {
//                     x: x,
//                     zIndex: Math.abs(Math.abs(x) - this.centerIndex)
//                 })
//             }
//         }

//         for (let i = 0; i < this.cards.length; i++) {
//             const x = this.checkOrdering(this.cards[i], parseInt(this.cards[i].dataset.x), xDist),
//                 scale = this.calcScale(x + xDist),
//                 scale2 = this.calcScale2(x + xDist),
//                 leftPos = this.calcPos(x + xDist, scale2)


//             this.updateCards(this.cards[i], {
//                 scale: scale,
//                 leftPos: leftPos
//             })
//         }
//     }
// }

// const carousel = new CardCarousel(cardsContainer)


// document.getElementById("outer3").addEventListener("click", toggleState3);

// function toggleState3() {
//     let galleryView = document.getElementById("galleryView")
//     let tilesView = document.getElementById("tilesView")
//     let outer = document.getElementById("outer3");
//     let slider = document.getElementById("slider3");
//     let tilesContainer = document.getElementById("tilesContainer");
//     if (slider.classList.contains("active")) {
//         slider.classList.remove("active");
//         outer.classList.remove("outerActive");
//         galleryView.style.display = "flex";
//         tilesView.style.display = "none";

//         while (tilesContainer.hasChildNodes()) {
//             tilesContainer.removeChild(tilesContainer.firstChild)
//         }
//     } else {
//         slider.classList.add("active");
//         outer.classList.add("outerActive");
//         galleryView.style.display = "none";
//         tilesView.style.display = "flex";

//         for (let i = 0; i < imgObject.length - 1; i++) {
//             let tileItem = document.createElement("div");
//             tileItem.classList.add("tileItem");
//             tileItem.style.background = "url(" + imgObject[i] + ")";
//             tileItem.style.backgroundSize = "contain";
//             tilesContainer.appendChild(tileItem);
//         }
//     };
// }

// let imgObject = [
//     "https://placeimg.com/450/450/any",
//     "https://placeimg.com/450/450/animals",
//     "https://placeimg.com/450/450/architecture",
//     "https://placeimg.com/450/450/nature",
//     "https://placeimg.com/450/450/people",
//     "https://placeimg.com/450/450/tech",
//     "https://picsum.photos/id/1/450/450",
//     "https://picsum.photos/id/8/450/450",
//     "https://picsum.photos/id/12/450/450",
//     "https://picsum.photos/id/15/450/450",
//     "https://picsum.photos/id/5/450/450",
// ];

// let mainImg = 0;
// let prevImg = imgObject.length - 1;
// let nextImg = 1;

// function loadGallery() {

//     let mainView = document.getElementById("mainView");
//     mainView.style.background = "url(" + imgObject[mainImg] + ")";

//     let leftView = document.getElementById("leftView");
//     leftView.style.background = "url(" + imgObject[prevImg] + ")";

//     let rightView = document.getElementById("rightView");
//     rightView.style.background = "url(" + imgObject[nextImg] + ")";

//     let linkTag = document.getElementById("linkTag")
//     linkTag.href = imgObject[mainImg];

// };

// function scrollRight() {

//     prevImg = mainImg;
//     mainImg = nextImg;
//     if (nextImg >= (imgObject.length - 1)) {
//         nextImg = 0;
//     } else {
//         nextImg++;
//     };
//     loadGallery();
// };

// function scrollLeft() {
//     nextImg = mainImg
//     mainImg = prevImg;

//     if (prevImg === 0) {
//         prevImg = imgObject.length - 1;
//     } else {
//         prevImg--;
//     };
//     loadGallery();
// };

// document.getElementById("navRight").addEventListener("click", scrollRight);
// document.getElementById("navLeft").addEventListener("click", scrollLeft);
// document.getElementById("rightView").addEventListener("click", scrollRight);
// document.getElementById("leftView").addEventListener("click", scrollLeft);
// document.addEventListener('keyup', function (e) {
//     if (e.keyCode === 37) {
//         scrollLeft();
//     } else if (e.keyCode === 39) {
//         scrollRight();
//     }
// });

// loadGallery();






// const $ = selector => {
//     return document.querySelector(selector);
// };

// function next() {
//     if ($(".hide")) {
//         $(".hide").remove();
//     }

//     /* Step */

//     if ($(".prev")) {
//         $(".prev").classList.add("hide");
//         $(".prev").classList.remove("prev");
//     }

//     $(".act").classList.add("prev");
//     $(".act").classList.remove("act");

//     $(".next").classList.add("act");
//     $(".next").classList.remove("next");

//     /* New Next */

//     $(".new-next").classList.remove("new-next");

//     const addedEl = document.createElement('li');

//     $(".list").appendChild(addedEl);
//     addedEl.classList.add("next", "new-next");
// }

// function prev() {
//     $(".new-next").remove();

//     /* Step */

//     $(".next").classList.add("new-next");

//     $(".act").classList.add("next");
//     $(".act").classList.remove("act");

//     $(".prev").classList.add("act");
//     $(".prev").classList.remove("prev");

//     /* New Prev */

//     $(".hide").classList.add("prev");
//     $(".hide").classList.remove("hide");

//     const addedEl = document.createElement('li');

//     $(".list").insertBefore(addedEl, $(".list").firstChild);
//     addedEl.classList.add("hide");
// }

// slide = element => {
//     /* Next slide */

//     if (element.classList.contains('next')) {
//         next();

//         /* Previous slide */

//     } else if (element.classList.contains('prev')) {
//         prev();
//     }
// }

// const slider = $(".list"),
//     swipe = new Hammer($(".swipe"));

// slider.onclick = event => {
//     slide(event.target);
// }

// swipe.on("swipeleft", (ev) => {
//     next();
// });

// swipe.on("swiperight", (ev) => {
//     prev();
// });
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

$("reco-recipe").fadeIn("slow");
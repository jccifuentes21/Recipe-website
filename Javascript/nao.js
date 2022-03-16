var cme_toTopButton = document.getElementById("cme_toTopBut");

function cme_scrollToY (y, duration = 0, element = document.scrollingElement) {
  
  if (element.scrollTop === y) return;

  const cosParameter = (element.scrollTop - y) / 2;
  let scrollCount = 0, oldTimestamp = null;

  function step (newTimestamp) {
    if (oldTimestamp !== null) {
      
      scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
      if (scrollCount >= Math.PI) return element.scrollTop = y;
      element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
    }
    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

function cme_scrollToTop(duration = 0) {
  cme_scrollToY(0, duration, document.scrollingElement);
}

function cme_scrollToId(id, duration = 0) {
  const offset = Math.round(document.getElementById(id).getBoundingClientRect().top);
	cme_scrollToY(document.scrollingElement.scrollTop + offset, duration);
}

function cme_scrollToElement(element, duration = 0) {
	const offset = Math.round(element.getBoundingClientRect().top);
	cme_scrollToY(document.scrollingElement.scrollTop + offset, duration);
}

function cme_handleButtonRender() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    cme_toTopButton.style.display = "block";
  } else {
    cme_toTopButton.style.display = "none";
  }
}

window.onscroll = function () {
  cme_handleButtonRender();
};

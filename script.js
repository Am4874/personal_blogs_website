"use strict";

/**
 * ADD EVENT LISTENER ON MULTIPLE ELEMENTS
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventlistener(eventType, callback);
  }
};

/**
 * MOBILE NAVBAR TOGGER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");

  // addEventOnElements(navTogglers, "click", toggleNav);
  addEventOnElements(navTogglers, "click", toggleNav);
};



/**
 * HEADER ANIMATION
 * WHEN SCROLL DOWN TO 100PX HEADER WILL BE ACTIVE
 */

const header = document.querySelector("[data-header]");
const backToBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backToBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backToBtn.classList.remove("active");
  }
});

// -----------------  #SLIDER ----------------

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);
let totalSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidepos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidepos].offsetLeft}px)`;
};

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidepos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidepos = 0;
  } else {
    currentSlidepos++;
  }

  moveSliderItem();
};

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  const slideEnd = currentSlidepos <= totalSlidableItems;

  if (slideEnd) {
    currentSlidepos = 0;
  } else {
    currentSlidepos--;
  }

  moveSliderItem();
};

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */

window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(
    getComputedStyle(slider).getPropertyValue("--slider-items")
  );
  totalSlidableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

    moveSliderItem();
});

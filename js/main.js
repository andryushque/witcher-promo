/*=== Slider ===*/

var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".slide-next",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

/*=== Menu button ===*/

var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".header");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("header-active");
  menuBtn.classList.toggle("menu-btn-active");
});

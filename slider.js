const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

// Hamburguesa toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.querySelector(".menu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});


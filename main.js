// main.js

document.addEventListener("DOMContentLoaded", function () {
  // 기존 nav-toggle 메뉴 (사용 중이면 유지)
  const legacyBtn = document.querySelector(".nav-toggle");
  const legacyNav = document.querySelector(".main-nav");
  if (legacyBtn && legacyNav) {
    legacyBtn.addEventListener("click", function () {
      legacyNav.classList.toggle("open");
      legacyBtn.classList.toggle("active");
    });
  }

  // 새로운 mobile-menu 버튼 기능
  const btn = document.querySelector("button.mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});


  //퓨처 스와이프
    new Swiper('.swiper-features', {
      slidesPerView: 1.2,
      spaceBetween: 16,
      centeredSlides: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
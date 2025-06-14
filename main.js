// main.js

document.addEventListener("DOMContentLoaded", function () {
  // ✅ 기존 nav-toggle 메뉴 (사용 중이면 유지)
  const legacyBtn = document.querySelector(".nav-toggle");
  const legacyNav = document.querySelector(".main-nav");
  if (legacyBtn && legacyNav) {
    legacyBtn.addEventListener("click", function () {
      legacyNav.classList.toggle("open");
      legacyBtn.classList.toggle("active");
    });
  }

  // ✅ 모바일 메뉴 토글 버튼
  const btn = document.querySelector(".mobile-menu-button");
  const menu = document.querySelector(".mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      if (menu.classList.contains("open")) {
        // 닫기: open 제거 → transition → hidden 추가
        menu.classList.remove("open");
        setTimeout(() => {
          menu.classList.add("hidden");
        }, 400); // CSS transition 시간과 일치
      } else {
        // 열기: hidden 제거 후 약간의 delay로 open 추가 (transition 작동을 위해)
        menu.classList.remove("hidden");
        setTimeout(() => {
          menu.classList.add("open");
        }, 10);
      }
    });
  }

  // ✅ Swiper 슬라이더 초기화
  new Swiper('.swiper-features', {
    slidesPerView: 1.2,
    spaceBetween: 16,
    centeredSlides: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });
});

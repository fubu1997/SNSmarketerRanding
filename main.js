// ====== platforms 슬라이더 버튼 제어 ======
(function(){
  const track = document.getElementById("platformTrack");
  if (!track) return;

  const prev = document.querySelector(".p-prev");
  const next = document.querySelector(".p-next");

  function step(dir){
    // 카드 1개 + gap 정도(대충 190px) 이동
    track.scrollBy({ left: dir * 190, behavior: "smooth" });
  }

  prev && prev.addEventListener("click", () => step(-1));
  next && next.addEventListener("click", () => step(1));
})();

// ===== Mobile Hamburger Menu =====
(function () {
  const btn = document.getElementById("hamburger");
  const gnb = document.getElementById("gnb");
  const overlay = document.getElementById("menuOverlay");
  if (!btn || !gnb) return;

  function openMenu() {
    btn.classList.add("is-open");
    gnb.classList.add("is-open");
    overlay && overlay.classList.add("is-open");
    document.body.classList.add("menu-lock");
    btn.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    btn.classList.remove("is-open");
    gnb.classList.remove("is-open");
    overlay && overlay.classList.remove("is-open");
    document.body.classList.remove("menu-lock");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => {
    const isOpen = gnb.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  overlay && overlay.addEventListener("click", closeMenu);

  // 메뉴 클릭하면 자동 닫힘
  gnb.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // ESC로 닫기
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();

// ===== FAQ Accordion (SNS마케터 전용 .qa 구조) =====
(function () {
  const items = document.querySelectorAll(".qa");
  if (!items.length) return;

  items.forEach((item) => {
    const btn = item.querySelector("button");
    const ans = item.querySelector(".ans");

    if (!btn || !ans) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.toggle("open");
      ans.style.display = isOpen ? "block" : "none";
    });
  });
})();

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

// ===== NAVER Conversion: Kakao/Telegram Click =====
(function () {
  function bindNaverConv(selector, type) {
    const el = document.querySelector(selector);
    if (!el) return;

    el.addEventListener("click", function () {
      try {
        if (!window.wcs) return;
        const _conv = { type };     // custom001, custom002 ...
        wcs.trans(_conv);
      } catch (e) {}
    });
  }

  // 카카오/텔레그램 분리 전환
  bindNaverConv("#kakaoHeroBtn", "custom001");
  bindNaverConv("#telegramHeroBtn", "custom002");
  bindNaverConv("#kakaoCtaBtn", "custom001");
  bindNaverConv("#telegramCtaBtn", "custom002");
})();

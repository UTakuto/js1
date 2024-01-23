//html

const html = document.documentElement;

//body
const body = document.body;

// .lazy
const lazyImages = document.querySelectorAll(".lazy");

//表示領域の高さ
let winHeight = body.clientHeight;

//スクロールイベント
window.addEventListener("scroll", function () {
  for (let i = 0; i < lazyImages.length; i++) {
    // console.log(i, lazyImages[i].getBoundingClientRect());
    const lazyImageRect = lazyImages[i].getBoundingClientRect().top;
    if (lazyImageRect - winHeight <= 0) {
      lazyImages[i].classList.add("loaded");
    }
  }
});

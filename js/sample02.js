//h1をクリックした時
document.querySelector("h1").onclick = function () {
  console.log("h1 click");
  //h1の文字色をtomatoに変更する
  //document.querySelector("h1").style.color = "tomato";
};

//h1をダブルクリックした時
document.querySelector("h1").addEventListener("dblclick", function () {
  //h1の文字色 sky blueに変更
  document.querySelector("h1").style.color = "blue";
});

//h1にマウスカーソルを重ねた時
document.querySelector("h1").addEventListener("mouseover", function () {
  //h1のfont size の変更
  document.querySelector("h1").style.fontWeight = "normal";
});

//h1 マウスカーソルが離れた時
document.querySelector("h1").addEventListener("mouseout", function () {
  //h1のfont size の変更
  document.querySelector("h1").style.fontWeight = "bold";
});

//h1にマウスカーソルを動かしている時（重なっているのが条件）
document.querySelector("h1").addEventListener("mousemove", function () {
  console.log("mouse move");
});

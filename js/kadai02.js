//背景色変更
//#box1-bg-btn クリックした時
document.querySelector("#box1-bg-btn").addEventListener("click", function () {
  //#box1 backgroundColor に #set-bg-txtの 入力内容を設定する
  document.querySelector("#box1").style.backgroundColor =
    document.querySelector("#set-bg-txt").value;
});

//文字色変更
document
  .querySelector("#box2-color-btn")
  .addEventListener("click", function () {
    document.querySelector("#box2-text").style.color =
      document.querySelector("#set-color-txt").value;
  });

//文字サイズ変更
document
  .querySelector("#box3-font-size-btn")
  .addEventListener("click", function () {
    document.querySelector("#box3-text").style.fontSize =
      document.querySelector("#set-font-size-txt").value;
  });

//羅線変更
document
  .querySelector("#box4-border-btn")
  .addEventListener("click", function () {
    document.querySelector("#box4").style.border =
      document.querySelector("#set-border-txt").value;
  });

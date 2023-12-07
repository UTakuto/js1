//a
let linkElem = document.querySelector("a");

//a click event
linkElem.addEventListener("click", function (event) {
  //   console.log("a click");

  //タグのデフォルトの命令を止める
  event.preventDefault();

  //a href
  let href = linkElem.href;

  //新しいウィンドウを開く
  window.open(href, "js1");
});

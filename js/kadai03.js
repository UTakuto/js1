//座標を扱う

document.addEventListener("mousemove", function (event) {
  console.log(event);
  //クライアント座標
  //client-x
  document.querySelector("#client-x").value = event.clientX;
  //client-y
  document.querySelector("#client-y").value = event.clientY;
  //screen-x
  document.querySelector("#screen-x").value = event.screenX;
  //screen-y
  document.querySelector("#screen-y").value = event.screenY;
  //global-x
  document.querySelector("#global-x").value =
    document.documentElement.scrollLeft + event.clientX;
  //global-y
  document.querySelector("#global-y").value =
    document.documentElement.scrollTop + event.clientY;
});

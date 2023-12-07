let linkElem = document.querySelectorAll("a");

linkElem.forEach(function (event) {
  event.addEventListener("click", function (event) {
    event.preventDefault();
    let href = event.target.href;
    window.open(href, "kadai04");
  });
});

// let linkHtml = document.querySelector("#link_html");

// linkHtml.addEventListener("click", function (event) {
//   event.preventDefault();
//   let href = linkHtml.href;
//   window.open(href, "kaDai");
// });

// let linkCss = document.querySelector("#link_css");

// linkCss.addEventListener("click", function (event) {
//   event.preventDefault();
//   let href = linkCss.href;
//   window.open(href, "kaDai");
// });

// let linkJs = document.querySelector("#link_js");

// linkJs.addEventListener("click", function (event) {
//   event.preventDefault();
//   let href = linkJs.href;
//   window.open(href, "kaDai");
// });

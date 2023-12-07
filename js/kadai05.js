// const hrefs = document.querySelectorAll(".blank");
// console.dir(hrefs);

// for (let i = 0; i < hrefs.length; i++) {
//   hrefs[i].addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// }

// const hrefs = document.querySelectorAll(".blank"); //これからblankはhrefsとして使う

// for (let i = 0; i < hrefs.length; i++) {
//   hrefs[i].addEventListener("click", function (event) {
//     //href[i]はユーザーが押したhrefにeventをかける
//     event.preventDefault(); //event デフォルト効果を消す
//     // let link = event.currentTarget.href;
//     let link = hrefs[i].href;
//     //これから、ユーザーが押したhrefのurlをlinkとして使う
//     window.open(link, "kadai05");
//   });
// }

let linkElem = document.querySelectorAll(".blank");

linkElem.forEach(function (event) {
  event.addEventListener("click", function (link) {
    link.preventDefault();
    let href = link.target.href;
    window.open(href, "kadai04");
    console.log("asd");
  });
});

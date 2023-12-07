// //querySelectorAllで、.boxを全て探す
// const box1 = document.querySelector(".box:nth-child(2)");
// const box2 = document.querySelector(".box:nth-child(3)");
// const box3 = document.querySelector(".box:nth-child(4)");

// console.log(box1);
// console.log(box2);
// console.log(box3);

//querySelectorAll で.box を全て探す

const boxs = document.querySelectorAll(".box");

// console.dir(boxs);
// console.dir(boxs[0]);
// console.dir(boxs[1]);
// console.dir(boxs[2]);

//NodeList と ループの組み合わせ
// for (let i = 0; i < 3; i++) {
//   console.dir(boxs[i]);
// }

//NodeList のデータにイベント

for (let i = 0; i < boxs.length; i++) {
  boxs[i].addEventListener("click", (event) => {
    //<p>
    console.log(event.target);
    //.box

    //1.NodeList参照
    console.log(boxs[i]);

    //2. event.currentTarget プロパティ
    console.log(event.currentTarget);

    //3. 先祖を探し続ける
    console.log(event.target.closest(".boxs"));
  });
}

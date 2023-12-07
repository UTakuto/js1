// const { addListener } = require("gulp");

// // while
// {
//   //カウントを数える変数（カウンター変数）
//   let count = 10;
//   while (count) {
//     console.log(`count: ${count}`);
//     count = count - 1;
//   }
// }

// //比較
// {
//   let count = 10;
//   console.log(count > 10);
//   console.log(count === "10");
// }

// //for

// {
//   for (var count = 1; count < 4; count++) {
//     console.log(`count: ${count}`);
//   }
//   console.log(`count: ${count}`);
// }

// //Hello World を14回表示する

// {
//   for (let nam = 0; nam < 14; nam++) {
//     console.log(`Hello World`);
//   }
// }

// //上の例

// {
//   const maxCount = 14;
//   for (let i = 1; i <= maxCount; i++) {
//     console.log(`Hello World`);
//   }
// }

//1~10の合計をconsole.logに表示

// {
//   const endNum = 10;
//   let sum = 0;
//   for (let o = 1; o <= endNum; o++) {
//     sum = sum + o;
//   }
//   console.log(` ${sum}`);
// }

//10~1ずつ減らしていくカウントダウンをconsole.logに表示
// {
//   for (let p = 10; p > 0; p--) {
//     console.log(`${p}`);
//   }
// }

//多重forループ
// {
//   for (let z = 1; z < 10; z++) {
//     console.log(`---${z}---`);
//     for (let s = 1; s < 10; s++) {
//       console.log(s);
//     }
//   }
// }

//九九の表
//1~9
//2 4 6 8 10 12 14 16 18 20

{
  for (let w = 1; w <= 9; w++) {
    let row = "";
    for (let q = 1; q <= 9; q++) {
      row = row + ` ${w * q} `;
    }
    console.log(row);
  }
}

//if
let flag = false;

//もし、flagがtrueならメッセージを表示
if (flag) {
  console.log("条件がtrueなら実行");
}

//条件式を使った if

let age = 18;

if (age < 20) {
  console.log("未成年");
}

//&& かつ（AND） || または（OR）
if (age >= 20 && age <= 29) {
  console.log("20代");
}

if (age >= 30 && age <= 39) {
  console.log("30代");
}

if (age >= 40) {
  console.log("初老");
}

//else

let fruits = "リンゴ";

if (fruits == "りんご" || "リンゴ") {
  console.log("フルーツの種類はりんご");
} else {
  console.log("りんご以外のフルーツ");
}

//if でfalse の時にプログラムを実行する

flag = false;

if (flag == false) {
} else {
  console.log("条件がfalseの時に実行");
}

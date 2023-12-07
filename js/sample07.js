//配列の作成
let arr01 = [];

//配列にデータを保存する
arr01[0] = "りんご";
arr01[1] = "もも";
arr01[2] = "めろん";

console.log(arr01);

//配列で保存されているデータ数
console.dir(`arr01のデータ数:${arr01.length}`);

//配列にデータを追加
arr01[arr01.length] = "ぶどう";

console.log(arr01);

arr01.push("柿");

console.log(arr01);

//配列の作成とデータの保存を同時に
const classes = ["wd1a", "wd2a"];

console.log(classes);

//配列にデータを追加（定数バージョン）

classes[classes.length] = "wd3a";

console.log(classes);

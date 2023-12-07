//関数

//log
//コンソールにログを表示
// function log() {
//   console.log("関数の呼び出し");
// }

{
  //アロー関数式
  const log = () => {
    console.log("関数の呼び出し");
  };

  //log()関数の呼び出し
  log();
  log();
}

{
  //引数
  //function log(){}
  const log = (message = "", keyword = "") => {
    console.log(message);
  };

  log("引数を使って送るデータ");
  log("坂倉", "43歳");
}

//戻り値（return）

const rand = (min, max) => {
  console.log(Math.floor(Math.random() * (max - min) + min));
};

console.log(rand(10));

const createNumber = (digit = 1) => {
  let result = "";
  while (result.length < digit) {
    result += rand(9);
    if (result === "0") {
      result = "";
    }
  }
  //   for (let i = 0; i < digit; i++) {
  //     result += rand(9);
  //   }
  return result;
};

console.log(createNumber(3));

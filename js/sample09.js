//1秒ごとにコンソールにメッセージ表示
setInterval(() => {
  console.log("タイマーを使ったプログラム");
}, 100000);

const id = setInterval(() => {
  console.log(`interval id: ${id}`);
}, 100000);

//ストップウォッチ
//1秒ごとに#timer_viewに経過時間（秒）を表示

//#timer_view
const view = document.querySelector("#timer_view");

//#timer_start
const startBtn = document.querySelector("#timer_start");
const stopBtn = document.querySelector("#timer_stop");

//経過時間
let count = 0;
let timerID = 0;

//#timer_viewに初期時間を表示
view.textContent = count;

//#timer_start click event
startBtn.addEventListener("click", () => {
  //もしタイマーが起動してないとき
  if (timerID === 0) {
    //タイマー起動
    timerID = setInterval(() => {
      count++;
      //#timer_viewに経過時間を表示
      view.textContent = count;
    }, 1000);
  }
});

//#timer_stop click event
stopBtn.addEventListener("click", () => {
  //タイマー停止
  clearInterval(timerID);

  //タイマーIDを初期値に戻す
  timerID = 0;
});

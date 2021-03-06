var readline = require("readline");
const { arrayBuffer } = require("stream/consumers");
var rl = readline.createInterface({
  input: process.stdin,
});

var lines = [];

// 讀取到一行，先把這一行加進去 lines 陣列，最後再一起處理
rl.on("line", function (line) {
  lines.push(line);
});

// 輸入結束，開始針對 lines 做處理
rl.on("close", function () {
  solve(lines);
});

// 上面都不用管，只需要完成這個 function 就好，可以透過 lines[i] 拿取內容
function solve(lines) {
  let max = Number(lines[0]);
  let total = Number(lines[1]);
  let arr = [];
  for (let i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }

  if (max === 0 || total === 0) {
    console.log(0);
  } else {
    if (max > total) {
      max = total;
    }
    let result = 0;
    for (let i = arr.length - 1; i >= arr.length - max; i--) {
      result += arr[i];
    }
    console.log(result);
  }
}

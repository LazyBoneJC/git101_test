var readline = require("readline");
const { isPrimitive } = require("util");
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
  let num = Number(lines[0]);
  let arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(Number(lines[i]));
  }

  for (let i = 0; i < num; i++) {
    let isPrime = true;

    if (arr[i] === 1) {
      isPrime = false;
    }

    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log("Prime");
    } else {
      console.log("Composite");
    }
  }
}

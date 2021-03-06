var readline = require("readline");
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
// 1009 Yo!倒著唸!
function solve(lines) {
  console.log(reverse(lines[0]));

  // (帥的解法，但不建議使用) 用內建函式解（array 可以 reverse）
  // let str = lines[0].split("").reverse().join("");
  // console.log(str);
}

// 最直覺的寫法
function reverse(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

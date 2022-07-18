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
function solve(lines) {
  let bDay = lines[0].split(" ");
  let num = Number(bDay[0] + bDay[1] + bDay[2]);
  let spiritNumber = addDigits(num);

  while (spiritNumber >= 10) {
    spiritNumber = addDigits(spiritNumber);
  }

  console.log(spiritNumber);
}

function addDigits(num) {
  let sum = 0;
  while (num != 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

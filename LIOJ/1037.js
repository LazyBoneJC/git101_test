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
  let target = Number(lines[0]);
  let arr = [target];

  for (let i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }

  let newArr = filter(arr, isValid);
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
}

// LIOJ 1037：Array filter
// 這題 callback 會是一個 function，但難度會比較高
// 若是做不出來，也可以調整參數
function filter(arr, callback) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    if (!isValid(arr[i], arr[0])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function isValid(num, target) {
  if (num === target) {
    return true;
  } else {
    return false;
  }
}

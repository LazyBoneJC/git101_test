// 實作 lastIndexOf()

function lastIndexOf(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(lastIndexOf([1, 2, 3, 1], 2));

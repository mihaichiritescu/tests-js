function solution(arr) {
  if (arr.length < 2) return 0;

  arr.sort();

  return arr.reduce((a, b) => a + b, 0);
}

var result = solution([100, 250, 1000]);
console.log(result);
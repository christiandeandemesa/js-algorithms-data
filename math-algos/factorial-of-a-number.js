// https://www.youtube.com/watch?v=vAgzuS3u6W0&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=8
// Given an integer 'n', find the factorial of that integer.

// Big-0 is 0(n).
function factorial(n) {
  // Removes an edge case.
  if (n < 0) return -1;
  // Break case for our recursive function.
  else if (n === 0 || n === 1) return 1;
  // Calls this function recursively.
  else return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

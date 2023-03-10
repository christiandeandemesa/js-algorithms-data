// https://www.youtube.com/watch?v=tQjd29Rmo_A&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=7
// Given a number 'n', find the first 'n' elements of the Fibonacci sequence.

// Big-O is 0(n).
function fibonacci(n) {
  let result = [0, 1];

  // Removes certain edge cases.
  if (n < 1) return [];
  else if (n === 1) return [0];
  else if (n === 2) return result;

  // The next element in the array is the sum of the previous two elements.
  for (let i = 2; i < n; i++) {
    result.push(result[i - 2] + result[i - 1]);
  }

  return result;
}

console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// https://www.youtube.com/watch?v=SZRG1bmDlx8&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=10
// Given a positive integer 'n', determine if the number is a power of 2 or not.

// Big-0 is 0(log(n)).
function isPowerOfTwo(n) {
  // Removes an edge case.
  if (n < 1) return false;

  // While n is greater than 1, check if it is evenly divisible by 2 or divide it by 2.
  while (n > 1) {
    if (n % 2 !== 0) return false;

    n = n / 2;
  }

  // Otherwise it is a power of two.
  return true;
}

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

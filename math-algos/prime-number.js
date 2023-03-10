// https://www.youtube.com/watch?v=cbHMQxOuIUw&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=9
// Given a natural number 'n', determine if the number is prime or not.

// Big-0 is 0(n).
function isPrime(n) {
  // Removes certain edge cases.
  if (n < 2) return false;

  // Checks if n is divisible without remainder by any number from 2 to the square root of n.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  // Otherwise it is prime.
  return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(4)); // false
console.log(isPrime(100)); // false

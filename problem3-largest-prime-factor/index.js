// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?


//Prime Number: natural number, greater than 1, whose only divisors are 1 and itself
//Factor: numbers that when multiplied together produces another number
//Prime Factorization: start by dividing number by smallest prime number (2) until number is no longer evenly divisible by 2
//    then increment divisor to next smallest prime number (e.g. 3, 5, 7, etc) until only numbers left are prime numbers

function largestPrimeFactor(num) {
  let divisor = 2;
  while (num > 1) {
    if (num % divisor === 0) {
      num /= divisor
    } else {
      divisor ++;
    }
  }
  return divisor
}

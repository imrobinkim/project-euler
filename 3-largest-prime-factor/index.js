// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// // SOLUTION #1:
//Prime Number: natural number, greater than 1, whose only divisors are 1 and itself
//Factor: numbers that when multiplied together produces another number
//Prime Factorization: start by dividing number by smallest prime number (2) until number is no longer evenly divisible by 2
//    then increment divisor to next smallest prime number (e.g. 3, 5, 7, etc) until only numbers left are prime numbers
// **All numbers can be expressed as the product of primes**
// 102 = 2 x 3 x 17
// 712 = 2 x 2 x 2 x 89
// using this method you don't have to actually calculate any primes b/c they'll already be all primes

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


// // SOLUTION #2:
//return ordered array of factors of n
function findFactors(n) {
  let factors=[],
      counter=0;

  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (n/i == i) {
        factors.splice(counter, 0, i)
        counter++
      } else {
        factors.splice(counter, 0, i)
        factors.splice((factors.length - counter), 0, n/i)
        counter++
      }
    }
  }

  return factors
}

//check to see if num is prime
function isPrime(num) {
  if (findFactors(num).length === 2) {
    return true
  } else {
    return false
  }
}

//filter out prime factors from whole factors list then return greatest
function greatestPrimeFactor(number) {
  let factors = findFactors(number),
      primeFactors = [];

  factors.forEach(factor => {
    if (isPrime(factor)) {
      primeFactors.push(factor)
    }
  })

  return primeFactors[primeFactors.length - 1]
}

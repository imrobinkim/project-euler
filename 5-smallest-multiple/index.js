// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//starting from 1, check if num is divisible by all numbers in range (1-20)
function smallestMultiple(maxNum) {
  let multiple = 1,
      done = false;

  while(done === false) {
    for(i = 1; i <= maxNum; i++) {
      if (multiple % i !== 0) {
        break
      }
      if (i === maxNum) {
        done = true
        return multiple
      }
    }
    multiple++;
  }
}



// function smallestDivisibleNumber(num) {
//   let max = num,
//       product = 1,
//       toReturn = 1,
//       factor = 2;
//
//   for (i = 1; i < max; i++) {
//     product *= i
//   }
//
//   while (product > 1) {
//     if (product % factor === 0) {
//       product /= factor
//       if (isPrime(factor)) {
//         toReturn *= factor
//       }
//     } else {
//       factor++
//     }
//   }
//
//   return toReturn;
// }
//
// function isPrime(n) {
//   for(i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// }
//
// smallestDivisibleNumber(10)

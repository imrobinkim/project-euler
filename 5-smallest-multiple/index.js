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

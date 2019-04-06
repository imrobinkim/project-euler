// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

function findSum(arr) {
  return arr.reduce((partialSum, total) => partialSum + total)
}

function squaredNumArray(num) {
  let arrToReturn = [];
  for (i = 1; i <= num; i++) {
    arrToReturn.push(Math.pow(i, 2))
  }
  return arrToReturn;
}

function numArray(num) {
  let arr = [];
  for (i = 1; i <= num; i++) {
    arr.push(i)
  }
  return arr;
}

function findDifference(num) {
  return Math.pow(findSum(numArray(num)), 2) - findSum(squaredNumArray(num))
}

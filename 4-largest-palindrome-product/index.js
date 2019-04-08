// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

function isPalindrome(num) {
  // let reversed = num.toString().split('').reverse().join('') if comparing with equality op ==, aka w/ type conversion
  let reversed = parseInt(num.toString().split('').reverse().join(''))
  if (reversed === num) {
    return true
  } else {
    return false
  }
}

function largestPalindrome() {
  let i = 100,
      j = 100,
      product,
      palindromeArr = [];

  for (i; i < 1000; i++) {
    for (j = i; j < 1000; j++) {
      product = i * j;
      if (isPalindrome(product)) {
        palindromeArr.push(product)
      }
    }
  }

  return Math.max(...palindromeArr)
}

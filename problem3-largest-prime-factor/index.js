// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?



function largestPrimeFactor(num) {
  let i = num,
      largest = 0;

  while (largest === 0) {
    if (isFactor(num, i) && isPrime(i)) {
      largest = i;
    }
    i--;
  }

  return largest;
}

function isFactor(multiple, possibleFactor) {
  if (multiple % possibleFactor === 0) {
    return true
  }
}

function isPrime(possiblePrime) {
	if (possiblePrime < 2) {
		return false
  }

  for (i= possiblePrime - 1; i >= 2; i--) {
		if (possiblePrime % i === 0) {
        	return false
    }
  }

	return true
}

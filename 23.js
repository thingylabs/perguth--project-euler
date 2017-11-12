/*
A proper divisor of a positive integer n is any divisor
of n other than n itself.

A number n is called deficient if the sum of its proper
divisors is less than n and it is called abundant if
this sum exceeds n.

As 12 is the smallest abundant number,
1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be
written as the sum of two abundant numbers is 24. By
mathematical analysis, it can be shown that all integers
greater than 28123 can be written as the sum of two
abundant numbers. However, this upper limit cannot be
reduced any further by analysis even though it is known
that the greatest number that cannot be expressed as the
sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot
be written as the sum of two abundant numbers.

https://projecteuler.net/problem=23
*/

const max = 28123

var candidates = new Set({
  [Symbol.iterator]: function* () {
    for (let i = 1; i <= max; i++) yield i
  }
})

function isAbundand (num) {
  var subtotal = 0
  var candidate = (num % 2 === 0 ? num : num - 1) / 2
  return check(candidate)

  function check (curr) {
    if (curr === 0) return false
    if (num % curr !== 0) return check(--curr)
    subtotal += curr
    if (subtotal > num) return true
    return check(--curr)
  }
}

function isCombinable (num) {
  for (let i = 1; i < num / 2; i++) {
    if (abundand[num - i] && abundand[i]) {
      return true
    }
  }
}

var result = 0
var abundand = [null]
candidates.forEach(elem => {
  if (isAbundand(elem)) {
    abundand[elem] = true
    let multiple = elem * 2
    while (multiple <= max) {
      abundand[multiple] = true
      candidates.delete(multiple)
      multiple += elem
    }
  }
  if (isCombinable(elem)) {
    candidates.delete(elem)
    return
  }
  result += elem
})

console.log('result is:', result)
console.log('should be:', 4179871)

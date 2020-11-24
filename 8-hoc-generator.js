/*
  Write a generator using a higher order function and closure
 */

function infinite(from) {
  let i = 0
  return function() {
    return i++
  }
}
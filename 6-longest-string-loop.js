/*
  Write a pure function that accepts a list of strings, return the
  longest string. Use a single loop.
 */

function longest(array) {
  let longest = ""
  for(let i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i]
    }
  }
  return longest
}

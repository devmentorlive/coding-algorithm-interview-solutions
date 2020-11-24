/*
  Write a function that will reverse the letters of words in a
  sentence, without altering the position of the words, or the
  punctuation.
 */

function reverseWords(str) {
  return str
    .split(' ')
    .map((word) =>
      word
        .split(/([a-zA-Z]+)/)
        .map((word) => word.split('').reverse().join(''))
        .join(''),
    )
    .join(' ');
}

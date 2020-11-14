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

module.exports = reverseWords;

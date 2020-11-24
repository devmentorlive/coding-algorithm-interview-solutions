/*
  Write a function determines if a string is a palindrome. Do not
  consider special characters or whitespace. A palindrome is a
  word or sentence that is spelled the same way forward and
  backwards. 

  eg: A man, a plan, a canal – Panama
 */

function palindrome(str) {
  const lettersOnly = str
    .toLowerCase()
    .split(/[^a-zA-Z]+/g)
    .join('')
    .split('');
  const reversed = [...lettersOnly].reverse();
  return lettersOnly.join('') === reversed.join('');
}

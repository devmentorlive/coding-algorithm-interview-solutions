function firstNonRepeatingCharacter(string) {
  const obj = string.split('').reduce((acc, char, i) => {
    acc[char] = Object.keys(acc).includes(string[i])
      ? acc[char] + 1
      : 1;
    return acc;
  }, {});

  for (let i = 0; i < Object.keys(obj).length - 1; i++) {
    if (Object.values(obj)[i] === 1) return Object.keys(obj)[i];
  }
}

module.exports = firstNonRepeatingCharacter;

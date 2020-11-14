function mostFrequent(ints) {
  const obj = ints.reduce((acc, int) => {
    acc[int.toString()] = Object.keys(acc).includes(int.toString())
      ? acc[int] + 1
      : 1;
    return acc;
  }, {});
  return Object.keys(obj).find(
    (key) => obj[key] === Math.max(...Object.values(obj)),
  );
}

module.exports = mostFrequent;

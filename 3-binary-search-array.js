function binarySearch(sortedArray, target) {
  const mid = Math.floor(sortedArray.length / 2);

  if (sortedArray.length === 1 && sortedArray[0] !== target)
    return false;

  if (sortedArray[mid] === target) return true;

  if (sortedArray[mid] > target)
    return binarySearch(sortedArray.slice(0, mid), target);
  return binarySearch(sortedArray.slice(mid), target);
}

module.exports = binarySearch;

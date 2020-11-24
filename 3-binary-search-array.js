/*
  Write a function that will perform a binary search on a sorted
  list. Use recursion and return a boolean to represent the result.
 */

function binarySearch(sortedArray, target) {
  const mid = Math.floor(sortedArray.length / 2);

  if (sortedArray.length === 1 && sortedArray[0] !== target)
    return false;

  if (sortedArray[mid] === target) return true;

  if (sortedArray[mid] > target)
    return binarySearch(sortedArray.slice(0, mid), target);
  return binarySearch(sortedArray.slice(mid), target);
}

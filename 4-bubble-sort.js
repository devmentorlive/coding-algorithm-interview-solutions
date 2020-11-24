/*
  Write a function that will perform a bubble search on a list of
  numbers.
 */

function bubbleSort(nums) {
  const sorted = [...nums];
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j + 1], sorted[j]] = [sorted[j], sorted[j + 1]];
      }
    }
  }

  return sorted;
}
